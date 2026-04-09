# Kenya Presidential Candidate Selection DApp

A React + Vite frontend for interacting with a Sepolia Ethereum smart contract that supports a demo ballot for Kenya 2027 presidential candidate selection.

## Overview

This project provides a web interface for a blockchain-based voting demo. It is designed to run as a static site on GitHub Pages and connect to a deployed Sepolia smart contract through a browser wallet such as MetaMask.

## Features

- Connect wallet with MetaMask
- Interact with a Sepolia smart contract
- Register voters
- Open voting
- Vote for a candidate
- Close voting
- Deploy as a static GitHub Pages site

## Candidate List

The demo ballot includes the following candidates:

- William Ruto
- Boniface Mwangi
- Okiya Omtatah
- David Maraga
- Kalonzo Musyoka
- Nelson Havi
- Peter Salasya
- Fred Matiangi

## Tech Stack

- React
- TypeScript
- Vite
- Tailwind CSS
- OpenZeppelin UI components
- wagmi
- viem

## Project Structure

```text
.
├── index.html
├── package.json
├── vite.config.ts
├── tsconfig.json
├── components.json
└── src/
```

## Getting Started

### Prerequisites

- Node.js 18 or later
- npm
- MetaMask or another EVM wallet
- Sepolia ETH for transaction fees

### Install dependencies

```bash
npm install
```

### Run locally

```bash
npm run dev
```

### Build for production

```bash
npm run build
```

## GitHub Pages Deployment

This project can be deployed to GitHub Pages as a static site.

### 1. Set the Vite base path

If your repository is a GitHub Pages project site, update `vite.config.ts` so the `base` matches your repository name:

```ts
base: '/YOUR-REPO-NAME/'
```

If your repo is a user site named `<username>.github.io`, use:

```ts
base: '/'
```

### 2. Build the project

```bash
npm run build
```

This generates the production-ready output in the `dist/` folder.

### 3. Deploy to GitHub Pages

You can deploy by:

- using GitHub Actions to publish the `dist/` folder, or
- pushing the built output to a `gh-pages` branch

### 4. Configure Pages in GitHub

In your repository:

- Go to **Settings**
- Open **Pages**
- Choose the deployment source
- Save the configuration

## Smart Contract Configuration

Before the frontend will work correctly, configure the following in your app:

- Deployed Sepolia contract address
- Contract ABI
- Required chain/network ID
- Admin wallet permissions for protected functions

## Usage

Typical flow:

1. Connect wallet.
2. Ensure MetaMask is set to Sepolia.
3. Register voter addresses if using admin functions.
4. Open voting.
5. Vote for a candidate.
6. Close voting after the voting period ends.

## Common Issues

### Blank page on GitHub Pages

Usually caused by:

- incorrect Vite `base` path
- broken asset paths starting with `/`
- deploying source files instead of the built `dist/` output

### Wallet connected but transactions fail

Check:

- MetaMask is on Sepolia
- contract address is correct
- ABI matches the deployed contract
- caller has permission for admin-only functions

### Gas limit too high

Use automatic gas estimation or set a lower manual gas limit in the UI.

### 404 on refresh

If the app uses client-side routing, GitHub Pages may require a fallback `404.html` strategy for SPA routing.

## Repository Notes

Place this `README.md` in the repository root so GitHub displays it on the repo homepage.

## Maintainer

James Mulli
