---
id: whitepaper
title: whitepaper
---

# OptyFi: DeFi's Composable Yield Platform

## Overview

### Problem: Inefficient and Fragmented Yield Markets

Yield, whether derived from lending interest, trading fees or yield farming, has proven to be the killer financial product that brought DeFi into the limelight and captured the world’s attention. However, despite being open and permission-less, DeFi yield markets remain fragmented and significantly inefficient. 

Currently, yield strategies are either executed manually by users or coded as individual smart contracts that are “switched” by community voting. In either case, DeFi’s superpower of composability is only superficially utilized. Furthermore, users are forced to learn the technical “under-the-hood” details and terminology of different protocols although many perform very similar functions. This situation promotes “tribalism” and creates further fragmentation and inefficiency while impeding mainstream DeFi adoption at both the individual and institutional level.    

### Solution: Abstracted Yield and Composable Strategies

The OptyFi Protocol makes DeFi efficient by creating an abstraction layer (a “Yield Network”) that connects DeFi’s fragmented yield markets, applications and blockchains. This approach enables the following:

- **Unified Interface:** Users/Contracts connect to the Yield Network and interact with it through a simple yet powerful interface that can execute arbitrary yield strategies (of varying complexity) across assets, protocols and blockchains.

- **Vaults-on-Demand:** Users/Projects spin-up a Vault contract and only need to configure investment criteria such as underlying asset and risk preference. The Vault knows how to interact with the Yield Network to execute strategies. Users do not need to worry about coding the Vault. 

- **Yield Services Ecosystem**: Vaults could choose to subscribe to strategists who would periodically provide optimal strategy recommendations which the vaults would know how to execute (“Yield-as-a-Service”). Vaults could also subscribe to other services such as strategist ranking, risk analyst and data provider services to further customize yield investment strategies.  

A yield ecosystem such as this would finally begin to capitalize on the open and decentralized essence of DeFi and deliver a more capital efficient financial system. Furthermore, abstracting the “blockchain backend” would broaden the appeal of DeFi, making it easier to onboard mainstream retail and institutional users.   

## OptyFi Protocol

### Approach

The OptyFi Protocol approaches the DeFi yield from a first principles approach. Starting with an abstracted view of liquidity pools, we define yield strategy steps which can be combined (in parallel and sequence) into yield strategies. The universe of possible strategies form a directed graph (“Strategy Graph”), and executing a yield strategy can be conceptualized as traversing this Strategy Graph. The OptyFI smart contracts abstract away the fragmented DeFi applications and enable users to execute any strategy in the Strategy Graph with a simple command. The Strategy Graph is extensible and as contributors add additional protocols and liquidity pools to the OptyFi protocol, the universe of executable strategies grows exponentially. 

### Liquidity Pools

**Liquidity pools** are smart contracts that generate a yield (from trading, lending or other profit generating activity). Liquidity providers “invest” into liquidity pools by depositing **underlying/input tokens** and receive **pool/output tokens** representing their rights to receive a share of the pool’s yield. Liquidity providers realize their yield profit share when they redeem their pool tokens and receive back more underlying tokens than they had initially deposited. Liquidity pools may also incentivize depositors with **reward tokens** which are considered output tokens as well. 

### Composable Strategies

The OptyFi Protocol defines a **strategy step** as deposit into and withdrawal from a Liquidity Pool. Two strategy steps can be combined into a **strategy sequence** if the output token from the first strategy step is equal to the underlying/input token of the second strategy step. Strategy sequences can be combined in parallel or branched into multiple parallel strategy sequences. (See Fig X). This generalized strategy framework allows the OptyFi Protocol to dynamically execute a very large number of strategies, allowing users to switch between strategies rapidly to capture fleeting market opportunities, something that is not possible for today’s yield aggregators. 

### Strategy Graph

The universe of possible yield strategies can be conceptualized as a directed Strategy Graph with cycles permitted. Specifically, the Strategy Graph consists of: 

- nodes representing yield generating liquidity pools
- Inbound edges representing underlying/input tokens 
- Outbound edges representing and pool/output tokens
- Dotted line edges representing a “borrow against collateral” relationship

### Architecture

- Addition of new pools → exponential increase in strategies
- Add new pool in minutes, add new protocol in days
- Decomposes: expected strategy return from risk definition, enabling users to define efficiency frontier based on their own preference (or subscribe to risk analyst below)
- Smart contracts enforce vault owner investment criteria (risk, diversification, thematic, factor exposure etc)

### Risk Framework

Each strategy can be assigned a different risk profile. Risk profiles in turn are composed by taking into account the riskiness of liquidity pools involved in a strategy as well as the complexity risk of the strategy. Different risk profiling systems can be applied to a vault based on the   

### Network Effect

This incentive mechanism enables the OptyFi protocol to grow at a scale that centralized approaches cannot compete with. Each protocol added increases OptyFi’s coverage growth exponentially increases the protocol’s value proposition creating a significant virtuous network effect. 

## Participants

OptyFi’s (i) abstracted “yield backend”, (ii) simple yet powerful interface, and (iii) composable strategy architecture will enable an ecosystem of participants to more easily and effectively participate in DeFi’s yield markets - bringing about greater capital efficiency and user adoption. 

OptyFi participants can be categorized as Yield Builders and Yield Users. These participants can be further sub-categorized based on their specific motivations and hence the role they would play in the ecosystem: 

### Yield Builders

The current concept of “Strategist” incorporates code development, strategy identification, risk assessment and data analysis - four very different skill sets. OptfyFi’s architecture enables specialization of Strategist roles, improving systemic efficiency while better meeting user needs. 

#### Integrators 

Integrators expand the Strategy Graph by adding “adapters” to integrate with other protocols. As described above, OptyFi’s architecture makes adding new pools and protocols simple - a new pool can be added in minutes, and new protocol can be added in days. Each time a strategy is executed using a specific adapter, the Integrator who developed the adapter receives a portion of the “execution fees”. This incentive mechanism enables the OptyFi protocol to grow at a scale that centralized teams cannot compete with, strengthening OptyFi’s network effect.

#### Strategists

OptyFi’s architecture let’s strategists focus on strategy optimization rather than code development. Smart contracts enable execution of an arbitrarily complex strategy with a simple strategy command. Furthermore, composable strategies allow strategists to specialize in different strategy types (e.g. leveraged vs non-leveraged), pool types (e.g. trading vs lending) or protocols (e.g. Uniswap vs. Sushiswap). Vaults are able to subscribe to one or more strategists who continually “recommend” optimal strategies based on vault defined criteria. In return, strategists would be paid a portion of the vault fees. 

#### Risk Analysts

The OptyFi architecture decouples strategy definition from strategy risk. Risk Analysts can develop risk assessment systems that associate a risk profile to any given strategy in the Strategy Graph. Vaults may choose to subscribe to Risk Analysts in order to filter the strategies that a Vault may execute and to set the vault’s “portfolio risk composition”. In return, Risk Analysts would be paid a portion of vault fees.

#### Data Providers

Data providers can support the ecosystem by:

- providing performance data on the Strategists and Risk Analysts
- providing pool data such as lending pool supply/borrow rates and trading pool fees to Strategists and Risk Analysts
- generating signals which can be used by Strategists in developing strategy predictions and by Risk Analysts in changing strategy risk profiles or pool ratings. 

### Yield Users

OptyFi’s architecture expands and connects the yield market and allows for more customized yield strategies to be developed based on the unique needs of target market segments. Project teams, DAO’s and on-chain Asset Managers can configure and deploy vaults with customized strategies suited to the needs/objectives of their users/community assets without the need for custom code development. Investors benefit from the availability of a larger selection of vault investment options specialized to their individual requirements.

## Unique Value Use Cases

### Vaults on Demand

Project teams and DAO’s are able to spin-up vaults on demand. The vault owner may choose to self-manage the vault by setting individual strategies. Alternatively, the vault owner may also subscribe to strategy recommendations from strategists and optionally screen these recommendations based on self-determined or risk analyst provided criteria (such as pool and/or protocol ratings). A community of bots (“keepers”) could be incentivized to continually rebalance vault holdings into the optimal strategy in exchange for a fee from the vault. 

### Long-Tail Asset Optimization

The OptyFi protocol is well suited for the optimization of long-tail and niche assets. For each such asset it may not be feasible to develop and maintain a custom strategy contract. However, a long-tail asset can be easily added to the OptyFi’s Strategy Graph, and as long as there is a single liquidity pool (node) that accepts the asset as an underlying (inbound edge), we are then able to dynamically generate all possible strategies for the asset. This property makes OptyFi suited to the following use cases:

- DEX’s such as Uniswap, Balancer and Sushi Swap that deal in hundreds of currency pairs could invest unused liquidity into niche vaults. 
- Wallets such as Metamask could automatically deposit users’ assets into niche vaults to ensure users are obtaining the best returns in DeFi..
- Smart Contracts that hold niche assets can optimize these assets by depositing into niche vaults. 

### Cross-Chain Strategies

In the same way that the Strategy Graph abstracts interactions between liquidity pools and protocols, it will also abstract interactions across blockchains by using existing bridges and integrating with emerging cross-chain lending protocols and decentralized exchanges. Thus strategists will be able to focus on identifying optimal cross-chain strategies without being concerned about how the strategy transaction is executed on the chains involved. Yield builders who develop and maintin cross-chain integrations will receive a portion of the “bridge toll” each time a cross-chain strategy utilizes their bridge. 

### Vault Boosting

OptyFi’s Vault Booster smart contract enables any user/contract to incentivize any ecosystem vault by submitting a transaction that includes the appropriate number of reward tokens along with the rate at which those reward tokens are to be distributed to the target vault. This enables project teams and contracts to influence flow of capital at demand and presents a myriad of possible use cases such as:

- Flexible mechanisms for DAO’s to incentivize other DAO’s
- Providing “venture capital” to build a target projects liquidity by attracting liquidity providers 

### Factor-Based and Thematic Yield Investing

By explicitly defining the universe of discrete yield strategies, OptyFi enables us to apply principles of factor-based investing and thematic investing to yield generation. Thus instead of only trying to optimize for APY, strategists can optimize strategies based on exposure to various factors and yield portfolios can be developed that specify weight exposures to specific factors. Of course risk could be a primary factor, but almost any factor can be defined such as exposure to pool type (e.g. DEX, Lending, Derivatives) or exposure to protocol age. Similarly, vaults can be configured to invest thematically for example to invest only in liquidity pools related to ethereum L2 scaling solutions 

## Road Map 

Version 1 of the OptyFi protocol will demonstrate the viability of the 



 