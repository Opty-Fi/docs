---
id: definitions
title: Definitions
---

# Concepts

## Tokens

Tokens are blockchain assets that conform to widely accepted standards such as ERC-20 or ERC-721. Within the OptyFi protocol, a token may be categorized into one or more of the following categories:

- **Pool Token:** Represent ownership in a pool (see definition below). 

- **Vault Token:** Represents ownership in a vault (See definition below)

- **Underlying Token:** The asset deposited into or held by a pool or vault.

- **Input Token**: Alternate way of referring to the token deposited into a pool, i.e. the underlying token.    

- **Output Token:** Alternate way of referring to the token representing ownership in a pool, i.e. the pool token. 

- **Reward Token:** The token distributed by a Protocol to reward its users and/or community. Examples include OPTY, COMP and CRV for the OptyFi, Compound and Curve protocols respectively. 

## Liquidity Pools

Smart contracts that collect assets from liquidity providers (LP's), generate returns from these assets, and share these returns with LPs. Examples include:

- Compound cDAI contract (an interest earning pool)

- Uniswap ETH-USDT contract (a trading exchange pool)

## Vaults 
Vaults are a Optyfi liquidity pools where users deposit and withdraw assets so that these assets can be deployed into strategies.  Vaults enable the sharing of transaction costs, allowing users to collectiively    which are then deployed in yield generating strategies. 

Current vaults are described here, and vault addresses are listed here.

## Strategies

### Composability

OptyFi introduces the concept of "composable strategies" consisting of components ("strategy steps") that can be combined in series ("strategy sequnce") or parallel ("strategy sets") as long as certain conditions are met. 

The composable strategy concept delivers several advantages over the current practice of coding each strategy as a separate smart contract:

1. Ease of Adding Addtional Pools & Protocols

2. Cross-Protocol Strategies

3. Cross-Chain Strategies

4. Focus on Strategy Not Coding

5. Capture Fleeting Opportunities

### Composing a Strategy

#### Strategy Step (aka Step)
The fundamantal building block of a strategy step. OptyFi defines two types of strategy steps:

1. Deposit Step
2. Borrow Step

#### Strategy Sequence (aka Strategy)
Strategy steps may be combined in series to form a multi-step strategy sequence (aka Strategy). In order to combine two strategy steps in series, the output token (ref) of the first strategy step should equal the input token (ref) of step two. 

Examples: 

See an example of a two step strategy here (ref):

See an example of a borrow step + two step strategy here (ref) 

#### Strategy Set
To diversify risk and reduce price impact of depositing a large amount into a single pool, OptyFi vaults will execute multiple strategies in parallel. These parallel strategies are referred to as a strategy set. Strategy sets are currently not implemeted but should be delivered in Version 1.1 scheduled for May 31, 2021. 

## Pool Ratings
The OptyFi protocol assigns credit-worthiness ratings to pools. Currently a three-tier rating system is implemented where each deposit pool is assigned a Tier 1 (T1), Tier 2 (T2) or Tier 3 (T3) rating with Tier 1 being the most credit-worthy. Currently ratings are applied at the Protocol level i.e. all pools of a given protocol are given the same rating as described below. In the future, governance may decide to change the pool ratings methodology and/or the ratings of protocols or individual pools. 

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

## Risk Profiles
The OptyFi protocol assigns a risk profile to each yield strategy than can be executed. The risk profile of a strategy depends on the pools involved in the strategy as well as the complexity of the strategy. Optyfi currently implements three risk profiles:

| Code | Name         | Strategy Complexity                     | Pools Included |
| ---- | ------------ | --------------------------------------- | -------------- |
| RP1  | Basic        | Single-step strategy with no borrowing. | T1 only        |
| RP2  | Intermediate | Multi-step strategy with borrowing      | T1 and T2      |
| RP3  | Advanced     | Multi-step strategy with borrowing      | T3             |

  # Composable Strategies

  The OptyFi Protocol proposes a composable model for DeFi yield strategies by:

  1. Abstracting the core building blocks of DeFi (e.g. pools and vaults, underlying and pool tokens, yield and rewards) 
  2. Defining a yield strategy as sequence of (serial or parallel) deposit and/or borrow steps involving DeFi pools
  3. Providing a flexible, on-chain, multi-step yield strategy execution engine capable of performing any such yield strategy  
  4. Delivering an open-source statistical/ML algorithm that attempts to predict the optimal yield strategy for each DeFi asset and risk tolerance level at a given point in time.   

