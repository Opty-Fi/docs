---
id: definitions
title: Definitions
---

## Definitions

- **Tokens:** Blockchain assets that conform to the ERC-20 standard. Within the OptyFi protocol, a token may be categorized into one or more of the following categories:

  - **Pool Token:** Represent ownership in a pool (see definition below). 
  - **Vault Token:** Represents ownership in a vault (See definition below)
  - **Underlying Token:** The asset deposited into or held by a pool or vault.
  - **Input Token**: Alternate way of referring to the token deposited into a pool, i.e. the underlying token.    
  - **Output Token:** Alternate way of referring to the token representing ownership in a pool, i.e. the pool token. 
  - **Reward Token:** The token distributed by a Protocol to reward its users and/or community. Examples include OPTY, COMP and CRV for the OptyFi, Compound and Curve protocols respectively.  

- **Liquidity Pools (aka Pools):** Smart contracts that collect assets from liquidity providers (LP's), generate returns from these assets, and share (some or all of) these returns with LPs. Examples include:

  - Compound cDAI contract (an interest earning pool)
  - Uniswap ETH-USDT contract (a trading exchange pool)

- **Vaults**: Optyfi pools where users deposit assets which are then deployed in yield generating strategies. Examples include:

- **Yield Strategy (aka Strategy):** A sequence of steps whereby assets are deposited into pools in order to generate yield. Strategies may be single- or multi-step and the steps may occur in sequence or parallel. For example, a two-step sequential strategy could proceed as follows:

  1. Deposit USDC into Curve's 3CRV pool and receive 3CRV pool tokens  

  2. Deposit  3CRV pool tokens to Harvest's f3CRV pool and receive f3CRV pool tokens 

     (Note: Currently OptyFi implements multi-step sequential strategies, and allows a "borrow step" using AAVE as our credit provider.)
  
- **Pool Ratings:** The OptyFi protocol assigns credit-worthiness ratings to pools. Currently we use a three-tier rating system and categorize each pool as Tier 1 (T1), Tier 2 (T2) or Tier 3 (T3) with Tier 1 being the most credit-worthy. Currently the ratings are applied at the Protocol level i.e. all pools of a given protocol are given the same rating as described below. (In the future, governance may decide to change the ratings methodology and/or the ratings of protocols or individual pools.)

  | **Protocol** | **Pool Ratings** |
  | ------------ | ---------------- |
  | Aave         | T1               |
  | BzX          | T2               |
  | Compound     | T1               |
  | Cream        | T3               |
  | Curve        | T2               |
  | Dforce       | T3               |
  | dYdX         | T2               |
  | Harvest      | T3               |
  | Yearn        | T3               |

- **Risk Profiles**: The OptyFi protocol assigns a risk profile to each yield strategy than can be executed. The risk profile of a strategy depends on the pools involved in the strategy as well as the complexity of the strategy. We currently implement three risk profiles:

  | Code | Name          | Strategy Complexity                     | Pools Included |
  | ---- | ------------- | --------------------------------------- | -------------- |
  | RP1  | Basic         | Single-step strategy with no borrowing. | T1 only        |
  | RP2  | Advanced      | Multi-step strategy with borrowing      | T1 and T2      |
  | RP3  | Advanced Plus | Multi-step strategy with borrowing      | T3             |

  

