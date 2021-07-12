# Tokens and Pools

## Tokens

Tokens are blockchain-based digital assets that conform to widely accepted standards such as ERC-20 or ERC-721. Within the OptyFi protocol, a token may be categorized into one or more of the following categories:

* **Core Token:** Refers to fundamental tokens such as DAI, USDC, LINK and WETH.
* **LP Token:** Represents ownership in a [liquidity pool](tokens-and-pools.md#liquidity-pools). Within the OptyFi protocol, pool tokens may be:
  * **Single-Asset LP Tokens** such as cDAI or aUSDC.
  * **Multi-Asset LP Tokens** such as UNI-ETH-USDT. 
* **Vault Token:** Represents ownership in an OptyFi vault. It should be noted that vaults are a type of liquidity pool, therefore vault tokens are also LP Tokens.   
* **Input Token \(aka Underlying Token\):** The asset deposited into or held by a pool or vault.
* **Output Token \(aka LP Token\):** The token received when depositing into a pool. Output tokens are interchangeably referred to as LP Tokens.  
* **Reward Token:** The token distributed by a Protocol to reward its users and/or community. Examples include OPTY, COMP and CRV for the OptyFi, Compound and Curve protocols respectively.

## Liquidity Pools

Liquidity pools are smart contracts that collect assets from liquidity providers and generate returns from these assets and then share these returns with liquidity providers. 

Two common types of liquidity pools are:

* **Lending Pools** that generate interest fees from lending out pool assets to borrowers \(e.g. the Compound cDAI pool\). 
* **Trading Pools** that generate trading fees by allowing traders to swap assets \(e.g. the Uniswap ETH-USDT pool\). 

