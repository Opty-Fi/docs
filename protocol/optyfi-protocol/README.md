# The OptyFi Protocol

The OptyFi Protocol approaches DeFi yield from a [first principles perspective](https://fs.blog/first-principles/).  

Starting with an abstract view on liquidity pools, [strategy steps](strategy-composition.md#strategy-step) are defined, which are [sequentially combined](strategy-composition.md#strategy-sequence) into yield strategies. Multiple yield strategies can in turn be combined in parallel to obtain yield portfolios. The multitude of possible strategies form a directed [Strategy Graph](strategy-composition.md#strategy-graph), and executing a yield strategy can be conceptualized as traversing this Strategy Graph. 

Users deposit their assets into OptyFi vaults. These vaults function as a liquidity pool from which assets are continuously deployed into optimal strategies that match the [risk profile](risk-framework.md#risk-profiles) of the vault.

[Strategy Execution](strategy-execution.md) contracts are able to execute any arbitrary multi-step strategy while enforcing [risk constraints](risk-framework.md). The [Optimization Engine](optimization-engine.md) continuously monitors thousands of data points across hundreds of liquidity pools in order to recommend the current optimal strategy to vaults.
