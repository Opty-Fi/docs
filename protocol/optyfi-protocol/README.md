# The OptyFi Protocol

The OptyFi Protocol approaches DeFi yield from a first principles perspective.  

Starting with an abstracted view of liquidity pools, we define yield [strategy steps](strategy-composition.md#strategy-step) which can be combined in [sequence](strategy-composition.md#strategy-sequence) into yield strategies, which in turn can be combined in parallel into yield portfolios. The universe of possible strategies form a directed [Strategy Graph](strategy-composition.md#strategy-graph), and executing a yield strategy can be conceptualized as traversing this Strategy Graph. 

Users deposit their assets into OptyFI vaults, from where these assets are continuously deployed into optimal strategies that match the [risk profile](risk-framework.md#risk-profiles) of the vault.

[Strategy Execution](strategy-execution.md) contracts are able to execute any arbitrary multi-step strategy while enforcing [risk constraints](risk-framework.md). The [Optimization Engine](optimization-engine.md) continuously monitors thousands of data points across hundreds of liquidity pools in order to recommend the current optimal strategy to vaults.  



