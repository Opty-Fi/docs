---
id: smart-contracts
title: Smart Contracts
---

## Definitions

- **Liquidity Pools (aka Pools):** Smart contracts that collect assets from liquidity providers (LP's), generate returns from these assets, and share (some or all of) these returns with LPs. Examples include:

  - Compound cDAI contract (an interest earning pool)
  - Uniswap ETH-USDT contract (a trading exchange pool)

- **Vaults**: Optyfi pools where users deposit assets which are then deployed in yield generating strategies. Examples include:

- **Tokens:** Blockchain assets that conform to the ERC-20 standard. Within the OptyFi protocol, a token may be categorized into one or more of the following categories:

  - **Pool Token:** Represent ownership in a Pool.
  - **Vault Token:** Represents ownership in a Vault.
  - **Underlying Token:** The asset deposited into or held by a Pool or Vault.
  - **Input Token**: Alternate way of referring to the token deposited into a Pool, i.e. the underlying token.    
  - **Output Token:** Alternate way of referring to the token representing ownership in a Pool, i.e. the pool token. 
  - **Reward Token:** The token distributed by a Protocol to reward its users and/or community. Examples include OPTY, COMP and CRV for the OptyFi, Compound and Curve protocols respectively.  

- **Yield Strategy (aka Strategy):** A sequence of steps whereby assets are deposited into pools in order to generate yield. Strategies may be single- or multi-step and the steps may occur in sequence or parallel. For example, a two-step sequential strategy could proceed as follows:

  1. Deposit USDC into Curve's 3CRV pool and receive 3CRV pool tokens  

  2. Deposit  3CRV pool tokens to Harvest's f3CRV pool and receive f3CRV pool tokens 

     (Note: Currently OptyFi implements multi-step sequential strategies, and allows a "borrow step" using AAVE as our credit provider.)

