// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract BuildingRegistry {
    enum Status {
        Planned,
        ApprovedForConstruction,
        UnderConstruction,
        Completed,
        OccupationCertified,
        Unsafe,
        Condemned
    }

    struct Building {
        string plotNumber;
        string county;
        string geoHash;
        address developer;
        Status status;
        uint256 bondAmount;
        bool exists;
    }

    // BID (e.g., keccak256 of plotNumber + geoHash) => Building
    mapping(bytes32 => Building) public buildings;

    // National Construction Authority admin (for demo on Sepolia, this can be your EOA)
    address public nca;

    mapping(address => bool) public countyPlanners;
    mapping(address => bool) public inspectors;
    mapping(address => bool) public proBodies; // IEK, AAK, etc.

    event BuildingRegistered(bytes32 indexed bid, address indexed developer);
    event StatusChanged(bytes32 indexed bid, Status newStatus);
    event StopOrderIssued(bytes32 indexed bid, string reason);
    event Violation(bytes32 indexed bid, string reason);

    modifier onlyNCA() {
        require(msg.sender == nca, "Not NCA");
        _;
    }

    constructor(address _nca) {
        require(_nca != address(0), "NCA address zero");
        nca = _nca;
    }

    /// @notice Register a new building and post a compliance bond (msg.value)
    function registerBuilding(
        bytes32 bid,
        string calldata plotNumber,
        string calldata county,
        string calldata geoHash
    ) external payable {
        require(!buildings[bid].exists, "BID exists");
        require(msg.value > 0, "Compliance bond required");

        buildings[bid] = Building({
            plotNumber: plotNumber,
            county: county,
            geoHash: geoHash,
            developer: msg.sender,
            status: Status.Planned,
            bondAmount: msg.value,
            exists: true
        });

        emit BuildingRegistered(bid, msg.sender);
    }

    /// @notice Update status; only NCA can mark Unsafe or Condemned
    function setStatus(bytes32 bid, Status newStatus) external {
        require(buildings[bid].exists, "Unknown BID");

        if (newStatus == Status.Unsafe || newStatus == Status.Condemned) {
            require(msg.sender == nca, "Only NCA");
        }

        buildings[bid].status = newStatus;
        emit StatusChanged(bid, newStatus);
    }

    /// @notice NCA issues a stop order
    function issueStopOrder(bytes32 bid, string calldata reason)
        external
        onlyNCA
    {
        require(buildings[bid].exists, "Unknown BID");
        emit StopOrderIssued(bid, reason);
    }

    /// @notice NCA slashes part of the bond and sends it to `to`
    function slashBond(bytes32 bid, uint256 amount, address payable to)
        external
        onlyNCA
    {
        require(to != address(0), "Zero to address");
        Building storage b = buildings[bid];
        require(b.exists, "Unknown BID");
        require(amount <= b.bondAmount, "Too much");

        b.bondAmount -= amount;
        (bool ok, ) = to.call{value: amount}("");
        require(ok, "Transfer failed");
    }

    /// @notice NCA releases remaining bond to `to` after certification
    function releaseBond(bytes32 bid, address payable to)
        external
        onlyNCA
    {
        require(to != address(0), "Zero to address");
        Building storage b = buildings[bid];
        require(b.exists, "Unknown BID");
        require(b.status == Status.OccupationCertified, "Not certified");

        uint256 amount = b.bondAmount;
        b.bondAmount = 0;
        (bool ok, ) = to.call{value: amount}("");
        require(ok, "Transfer failed");
    }

    /// @notice Convenience view for frontends / scripts
    function getBuilding(bytes32 bid)
        external
        view
        returns (
            string memory plotNumber,
            string memory county,
            string memory geoHash,
            address developer,
            Status status,
            uint256 bondAmount,
            bool exists
        )
    {
        Building storage b = buildings[bid];
        return (
            b.plotNumber,
            b.county,
            b.geoHash,
            b.developer,
            b.status,
            b.bondAmount,
            b.exists
        );
    }
}
