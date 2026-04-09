import { useMemo, useState } from 'react';

import { Card, CardContent } from '@openzeppelin/ui-components';
import { ContractActionBar, ContractStateWidget, TransactionForm } from '@openzeppelin/ui-renderer';
import type {
  ContractAdapter,
  ContractSchema,
  ExecutionConfig,
  RenderFormSchema,
} from '@openzeppelin/ui-types';
import { cn } from '@openzeppelin/ui-utils';

// Props for GeneratedForm
interface GeneratedFormProps {
  adapter: ContractAdapter;
  isWalletConnected?: boolean;
}

/**
 * Generated Transaction Form for closeVoting_
 *
 * This component renders a form for interacting with a blockchain contract.
 * It uses the shared renderer package which ensures consistent behavior
 * with the preview in the builder app.
 */
export default function GeneratedForm({ adapter, isWalletConnected }: GeneratedFormProps) {
  // TODO: Enable this useEffect as a fallback?
  // If the adapter supports runtime schema loading (e.g., via Etherscan)
  // and the injected schema is missing or invalid, this could attempt to load it.
  /*
  const [contractSchema, setContractSchema] = useState<ContractSchema | null>(null);
  */
  const [isWidgetVisible, setIsWidgetVisible] = useState(false);
  const [loadError, _setLoadError] = useState<Error | null>(null);

  // Form schema generated from the builder and transformed by FormSchemaFactory
  // Memoized to maintain stable reference across re-renders and prevent form resets
  const formSchema: RenderFormSchema = useMemo(() => {
    return {
      layout: {
        columns: 1,
        spacing: 'normal',
        labelPosition: 'top',
      },
      validation: {
        mode: 'onChange',
        showErrors: 'inline',
      },
      theme: {},
      functionId: 'closeVoting_',
      title: 'Close Voting Form',
      description: 'Form for interacting with the Close Voting function.',
      contractAddress: '0xb6A675c6cdc7fDaC04Df5dCB25f5143E0AF09825',
      id: 'form-closeVoting_',
      fields: [],
      submitButton: {
        text: 'Execute Close Voting Form',
        loadingText: 'Processing...',
        variant: 'primary',
      },
    };
  }, []);

  // Contract schema injected by generator (loaded or imported by the user)
  // Memoized to maintain stable reference across re-renders and prevent form resets
  const contractSchema: ContractSchema = useMemo(() => {
    return {
      ecosystem: 'evm',
      name: 'Contract_0XB6A6',
      address: '0xb6A675c6cdc7fDaC04Df5dCB25f5143E0AF09825',
      functions: [
        {
          id: 'admin_',
          name: 'admin',
          displayName: 'Admin',
          inputs: [],
          outputs: [
            {
              name: '',
              type: 'address',
              displayName: 'Parameter (address)',
            },
          ],
          type: 'function',
          stateMutability: 'view',
          modifiesState: false,
        },
        {
          id: 'ballotName_',
          name: 'ballotName',
          displayName: 'Ballot Name',
          inputs: [],
          outputs: [
            {
              name: '',
              type: 'string',
              displayName: 'Parameter (string)',
            },
          ],
          type: 'function',
          stateMutability: 'view',
          modifiesState: false,
        },
        {
          id: 'candidateCount_',
          name: 'candidateCount',
          displayName: 'Candidate Count',
          inputs: [],
          outputs: [
            {
              name: '',
              type: 'uint256',
              displayName: 'Parameter (uint256)',
            },
          ],
          type: 'function',
          stateMutability: 'view',
          modifiesState: false,
        },
        {
          id: 'candidates_uint256',
          name: 'candidates',
          displayName: 'Candidates',
          inputs: [
            {
              name: '',
              type: 'uint256',
              displayName: 'Parameter (uint256)',
            },
          ],
          outputs: [
            {
              name: 'id',
              type: 'uint256',
              displayName: 'Id',
            },
            {
              name: 'name',
              type: 'string',
              displayName: 'Name',
            },
            {
              name: 'title',
              type: 'string',
              displayName: 'Title',
            },
            {
              name: 'voteCount',
              type: 'uint256',
              displayName: 'Vote Count',
            },
            {
              name: 'active',
              type: 'bool',
              displayName: 'Active',
            },
          ],
          type: 'function',
          stateMutability: 'view',
          modifiesState: false,
        },
        {
          id: 'closeVoting_',
          name: 'closeVoting',
          displayName: 'Close Voting',
          inputs: [],
          outputs: [],
          type: 'function',
          stateMutability: 'nonpayable',
          modifiesState: true,
        },
        {
          id: 'emergencyCloseVoting_',
          name: 'emergencyCloseVoting',
          displayName: 'Emergency Close Voting',
          inputs: [],
          outputs: [],
          type: 'function',
          stateMutability: 'nonpayable',
          modifiesState: true,
        },
        {
          id: 'getAllCandidates_',
          name: 'getAllCandidates',
          displayName: 'Get All Candidates',
          inputs: [],
          outputs: [
            {
              name: 'list',
              type: 'tuple[]',
              displayName: 'List',
              components: [
                {
                  name: 'id',
                  type: 'uint256',
                  displayName: 'Id',
                },
                {
                  name: 'name',
                  type: 'string',
                  displayName: 'Name',
                },
                {
                  name: 'title',
                  type: 'string',
                  displayName: 'Title',
                },
                {
                  name: 'voteCount',
                  type: 'uint256',
                  displayName: 'Vote Count',
                },
                {
                  name: 'active',
                  type: 'bool',
                  displayName: 'Active',
                },
              ],
            },
          ],
          type: 'function',
          stateMutability: 'view',
          modifiesState: false,
        },
        {
          id: 'getCandidate_uint256',
          name: 'getCandidate',
          displayName: 'Get Candidate',
          inputs: [
            {
              name: '_candidateId',
              type: 'uint256',
              displayName: 'candidate Id',
            },
          ],
          outputs: [
            {
              name: 'id',
              type: 'uint256',
              displayName: 'Id',
            },
            {
              name: 'name',
              type: 'string',
              displayName: 'Name',
            },
            {
              name: 'title',
              type: 'string',
              displayName: 'Title',
            },
            {
              name: 'voteCount',
              type: 'uint256',
              displayName: 'Vote Count',
            },
            {
              name: 'active',
              type: 'bool',
              displayName: 'Active',
            },
          ],
          type: 'function',
          stateMutability: 'view',
          modifiesState: false,
        },
        {
          id: 'getVoterChoice_address',
          name: 'getVoterChoice',
          displayName: 'Get Voter Choice',
          inputs: [
            {
              name: '_voter',
              type: 'address',
              displayName: 'voter',
            },
          ],
          outputs: [
            {
              name: '',
              type: 'uint256',
              displayName: 'Parameter (uint256)',
            },
          ],
          type: 'function',
          stateMutability: 'view',
          modifiesState: false,
        },
        {
          id: 'hasVoterVoted_address',
          name: 'hasVoterVoted',
          displayName: 'Has Voter Voted',
          inputs: [
            {
              name: '_voter',
              type: 'address',
              displayName: 'voter',
            },
          ],
          outputs: [
            {
              name: '',
              type: 'bool',
              displayName: 'Parameter (bool)',
            },
          ],
          type: 'function',
          stateMutability: 'view',
          modifiesState: false,
        },
        {
          id: 'openVoting_uint256',
          name: 'openVoting',
          displayName: 'Open Voting',
          inputs: [
            {
              name: 'durationSeconds',
              type: 'uint256',
              displayName: 'Duration Seconds',
            },
          ],
          outputs: [],
          type: 'function',
          stateMutability: 'nonpayable',
          modifiesState: true,
        },
        {
          id: 'phase_',
          name: 'phase',
          displayName: 'Phase',
          inputs: [],
          outputs: [
            {
              name: '',
              type: 'uint8',
              displayName: 'Parameter (uint8)',
            },
          ],
          type: 'function',
          stateMutability: 'view',
          modifiesState: false,
        },
        {
          id: 'registerManyVoters_address[]',
          name: 'registerManyVoters',
          displayName: 'Register Many Voters',
          inputs: [
            {
              name: '_voters',
              type: 'address[]',
              displayName: 'voters',
            },
          ],
          outputs: [],
          type: 'function',
          stateMutability: 'nonpayable',
          modifiesState: true,
        },
        {
          id: 'registerVoter_address',
          name: 'registerVoter',
          displayName: 'Register Voter',
          inputs: [
            {
              name: '_voter',
              type: 'address',
              displayName: 'voter',
            },
          ],
          outputs: [],
          type: 'function',
          stateMutability: 'nonpayable',
          modifiesState: true,
        },
        {
          id: 'timeLeft_',
          name: 'timeLeft',
          displayName: 'Time Left',
          inputs: [],
          outputs: [
            {
              name: '',
              type: 'uint256',
              displayName: 'Parameter (uint256)',
            },
          ],
          type: 'function',
          stateMutability: 'view',
          modifiesState: false,
        },
        {
          id: 'totalVotesCast_',
          name: 'totalVotesCast',
          displayName: 'Total Votes Cast',
          inputs: [],
          outputs: [
            {
              name: '',
              type: 'uint256',
              displayName: 'Parameter (uint256)',
            },
          ],
          type: 'function',
          stateMutability: 'view',
          modifiesState: false,
        },
        {
          id: 'vote_uint256',
          name: 'vote',
          displayName: 'Vote',
          inputs: [
            {
              name: '_candidateId',
              type: 'uint256',
              displayName: 'candidate Id',
            },
          ],
          outputs: [],
          type: 'function',
          stateMutability: 'nonpayable',
          modifiesState: true,
        },
        {
          id: 'voters_address',
          name: 'voters',
          displayName: 'Voters',
          inputs: [
            {
              name: '',
              type: 'address',
              displayName: 'Parameter (address)',
            },
          ],
          outputs: [
            {
              name: 'isRegistered',
              type: 'bool',
              displayName: 'Is Registered',
            },
            {
              name: 'hasVoted',
              type: 'bool',
              displayName: 'Has Voted',
            },
            {
              name: 'votedCandidateId',
              type: 'uint256',
              displayName: 'Voted Candidate Id',
            },
          ],
          type: 'function',
          stateMutability: 'view',
          modifiesState: false,
        },
        {
          id: 'votingEnd_',
          name: 'votingEnd',
          displayName: 'Voting End',
          inputs: [],
          outputs: [
            {
              name: '',
              type: 'uint256',
              displayName: 'Parameter (uint256)',
            },
          ],
          type: 'function',
          stateMutability: 'view',
          modifiesState: false,
        },
        {
          id: 'votingStart_',
          name: 'votingStart',
          displayName: 'Voting Start',
          inputs: [],
          outputs: [
            {
              name: '',
              type: 'uint256',
              displayName: 'Parameter (uint256)',
            },
          ],
          type: 'function',
          stateMutability: 'view',
          modifiesState: false,
        },
        {
          id: 'winningCandidate_',
          name: 'winningCandidate',
          displayName: 'Winning Candidate',
          inputs: [],
          outputs: [
            {
              name: 'winnerId',
              type: 'uint256',
              displayName: 'Winner Id',
            },
            {
              name: 'winnerName',
              type: 'string',
              displayName: 'Winner Name',
            },
            {
              name: 'winnerTitle',
              type: 'string',
              displayName: 'Winner Title',
            },
            {
              name: 'winnerVotes',
              type: 'uint256',
              displayName: 'Winner Votes',
            },
          ],
          type: 'function',
          stateMutability: 'view',
          modifiesState: false,
        },
      ],
    };
  }, []);

  // Execution configuration selected in the builder
  // Memoized to maintain stable reference across re-renders
  const executionConfig: ExecutionConfig | undefined = useMemo(() => {
    return {
      method: 'eoa',
      allowAny: true,
    };
  }, []);

  const contractAddress = formSchema.contractAddress;

  // TODO: Enable this useEffect as a fallback?
  // If the adapter supports runtime schema loading (e.g., via Etherscan)
  // and the injected schema is missing or invalid, this could attempt to load it.
  /*
  useEffect(() => {
    setLoadError(null);
    setContractSchema(null);

    if (contractAddress) {
      adapter
        .loadContract(contractAddress)
        .then(setContractSchema)
        .catch((err: unknown) => {
          // Catch error during contract loading
          logger.error('GeneratedForm', 'Error loading contract schema:', err);
          // Create a new Error object if caught value is not already one
          const errorToSet =
            err instanceof Error ? err : new Error('Failed to load contract state');
          setLoadError(errorToSet);
          setContractSchema(null);
        });
    } else {
      setContractSchema(null);
    }
  }, [contractAddress, adapter]);
  */

  // Decide which schema to use: prioritize injected, fallback maybe later?
  const schemaToUse = contractSchema; // Sticking to injected schema for now

  const toggleWidget = () => {
    setIsWidgetVisible((prev: boolean) => !prev);
  };

  return (
    <div className="space-y-6">
      {/* Contract Action Bar - consistent with builder app */}
      {adapter.networkConfig && (
        <ContractActionBar
          networkConfig={adapter.networkConfig}
          contractAddress={contractAddress}
          onToggleContractState={toggleWidget}
          isWidgetExpanded={isWidgetVisible}
        />
      )}

      <div className="flex gap-4">
        {/* Contract State Widget on the left side - always mounted to prevent remount churn */}
        {contractAddress && (
          <div
            className={cn(
              'shrink-0 transition-all',
              isWidgetVisible ? 'md:w-80 md:mr-6' : 'md:w-0'
            )}
          >
            <div className="sticky top-4">
              <ContractStateWidget
                contractSchema={schemaToUse}
                contractAddress={contractAddress}
                adapter={adapter}
                isVisible={isWidgetVisible}
                onToggle={toggleWidget}
                error={loadError}
              />
            </div>
          </div>
        )}

        {/* Main form on the right side */}
        <div className="flex-1">
          <Card>
            <CardContent className="space-y-4">
              <TransactionForm
                schema={formSchema}
                contractSchema={contractSchema}
                adapter={adapter}
                isWalletConnected={isWalletConnected}
                executionConfig={executionConfig}
              />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
