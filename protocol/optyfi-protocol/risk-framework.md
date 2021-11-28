# Risk Framework

OptyFi features a flexible risk management framework that can be highly customized and applied at a granular \(strategy\) level. Each liquidity pool integrated into the OptyFi Protocol is assigned a [pool rating](risk-framework.md#pool-ratings). Each strategy is assigned a [risk profile](risk-framework.md) based on the ratings of pools involved in the strategy as well as the complexity of the strategy.    

## Pool Ratings

Currently the OptyFi Protocol implements three pool ratings: 

* Tier 1 \(T1\): Low Risk
* Tier 2 \(T2\): Medium Risk
* Tier 3 \(T3\): High Risk

The system is flexible to accommodate an arbitrary number of pool ratings without modification to smart contract code. 

Each liquidity pool integrated with the OptyFi Protocol is assigned a pool rating. This rating is currently established through governance voting. However, in the future, governance voting may result in the use of external services \(such as [defiscore.io](www.defiscore.io)\) or community [risk analysts](../participants.md#risk-analysts) to determine the risk of a pool.  

Currently, all pools for a given protocol are assigned the same rating, as follows: 

| **Protocol** | **Pool Rating** |
| :--- | :--- |
| Aave | T1 |
| Compound | T1 |
| Cream | T2 |
| Curve | T1 |
| dYdX | T1 |
| Dforce | T3 |
| Harvest | T2 |
| Yearn | T2 |

## Risk Profiles

Each strategy is assigned a risk profile based on the ratings of the pools involved in the strategy along with the complexity of the strategy. Currently, the following risk profiles are defined:

| **Risk Profile** | **Description** | **Pool Ratings** | **Strategy Complexity** |
| :--- | :--- | :--- | :--- |
| RP0 | Default | N/A | Hold In Vault |
| RP1 | Basic | T1 | Multi-Step, No Borrow |
| RP2 | Advanced | T2 or T3 | Multi-Step, With Borrow |

The system allows risk profiles to be defined flexibly without modification to smart contracts.

## Investment Limits

In addition to pool ratings and strategy risk profiles, investment limits are also placed on pools and protocols.

The limits work as follows:

* At the protocol level, set:
  * Protocol Investment Limit Mode = Amount or Percent.
  * Protocol Max Percent \(to be ignored if Protocol Investment Limit Mode = Amount\).
* If Protocol Investment Limit Mode = Percent, and:
  * Pool Max Percent value exists → apply Pool Max Percent as limit.
  * Pool Max Percent does not exist → get Protocol Max Percent.
* If Protocol Investment Limit Mode = Amount:
  * Apply Pool Max Amount as limit.

To better understand the application of these investment limits, take a look at the examples below.

| **Protocol** | **Protocol Investment Limit Mode** | **Protocol Max Percent** | **Pool** | **Pool Max Percent** | **Pool Max Amount** |
| :--- | :--- | :--- | :--- | :--- | :--- |
| Compound | Percent | 500% | cDAI | 100% | N/A |
| Compound | Percent | 500% | cBTC | Null \(defaults to 500%\) | N/A |
| Aave | Amount | 200% \(ignored\) | aDAI | N/A | 1,000,000 |
| Aave | Amount | 200% \(ignored\) | aBTC | N/A | 1,000 |
| Aave | Amount | 200% \(ignored\) | aETH | N/A | Null \(assume Pool Max Amount = 0\) |

