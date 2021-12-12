# Optimization Engine

DeFi is known to be volatile and DeFi yield markets are significantly inefficient. This means that the yields \(and risk\) of liquidity pools change continuously, even for pools with the same underlying assets. The composability of DeFi protocols allows assets to be exchanged for "derivative assets" \(e.g. DAI for cDAI\), creating more potential volatility. 

OptyFi is designed to allow continuous discovery of the most optimal yield strategies. Since this requires evaluation of multiple blocks of data from hundreds of liquidity pools, OptyFi's Optimization Engine is initially designed as an off-chain process that "recommends" the optimal strategy for each vault, with the intent to eventually decentralize said Optimization Engine. [Strategy Execution](strategy-execution.md) smart contracts are responsible for executing this strategy, ensuring it includes only approved pools and enforcing risk constraints of the vault.

![How the OptyFi optimization engine works.](../../.gitbook/assets/optimization-engine%20%281%29.svg)

## Implementation

The Optimization Engine is implemented in a custom python library (Opty.py) developed by the OptyFi team. This library will be open-sourced and shared with the community. Key functions include:   

| **Component** | **Function** |
| :--- | :--- |
| getPoolData | Fetches liquidity pool data from the OptyFi API server. Currently, automated jobs capture pool data from the blockchain on an ongoing basis and make this data available to the Optimization Engine. However, this should be replaced by the Graph Protocol prior to launch.  |
| predictRates | Uses fetched pool data to predict the deposit, borrow and reward rates for liquidity pools for the upcoming rebalancing window. This component incorporates pool data modelling;  time series modelling and prediction and price impact modelling.  |
| buildStrategies | Dynamically generates all possible strategies given the enabled pools.  |
| scoreStrategies | Provides a score to each generated strategy based on the predicted rates.   |

## Decentralization

The OptyFi road map includes the decentralization of the Optimization Engine. Possible approaches include implementation on an L2 chain or the development of a custom and efficient OptyFi Yield Chain.
