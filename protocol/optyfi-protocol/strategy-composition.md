# Strategy Composition

Yield strategies are the fundamental building block of the OptyFi Protocol and its most compelling innovation.

Conceptually, yield strategies are generated dynamically based on the structure of existing DeFi liquidity pools. The building blocks for strategies are [strategy steps](strategy-composition.md#strategy-step) and [strategy sequences](strategy-composition.md#strategy-sequence). Put together, the entirety of strategy sequences form the [strategy graph](strategy-composition.md#strategy-graph).

## Strategy Step

A strategy step is a fundamental building block of a strategy. A strategy step can be categorized as a deposit step or a borrow step. 

### Deposit Step 

Depositing an underlying token into a pool and receiving an LP token in return is considered a deposit strategy step. 

![A Deposit Step.](../../.gitbook/assets/deposit-step.svg)

### Borrow Step

Depositing an underlying token into a pool as collateral and then borrowing an underlying token from a different pool is considered a borrow strategy step.

![A Borrow Step.](../../.gitbook/assets/borrow-step.svg)

## Strategy Sequence

A strategy sequence is composed of multiple strategy steps. 

If a token is deposited into a pool and the LP token you receive in return can be deposited into a second pool, then you can "string together" two strategy steps to form a two-step strategy sequence.

![A Two-Step Strategy Sequence.](../../.gitbook/assets/strategy-sequence.svg)

This process can be generalized into n-steps based on the condition `outputToken(step[n-1]) = inputToken(step[n])`. 

In today's DeFi reality, strategy sequences are usually limited to two deposit steps or two deposit steps with a borrow step.

## Strategy Graph

The entirety of possible strategy sequences form a directed \(possibly cyclic\) graph which we refer to as the Strategy Graph. The nodes of the Strategy Graph represent liquidity pools and the inbound edges represent deposits into those liquidity pools.

OptyFi's Strategy Graph is determined by liquidity pools integrated within the Protocol. Integrating a new liquidity pool to the Protocol creates therefore updates the Strategy Graph, potentially generating multiple new strategies.  
