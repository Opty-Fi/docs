---
id: best-yield
title: Best Yield
---

Best Yield strategy allows users to optimize interest rate profitability and seamlessly get the highest yield, without having to manually move funds across different lending protocols to chase the best returns.

Users' funds are pooled together in the main contract (one for each token supported by Idle) and every interaction with Idle smart contract can potentially reallocate funds to provide the highest aggregated interest rate for all pooled funds.

Interest rates are constantly monitored off-chain by our infrastructure. We calculate the exact allocations for pooled funds in order to maximize aggregated APR and if current allocations are different from the newly calculated one, we submit those allocations to our contract. Every subsequent interaction of any user with the contract will perform the actual rebalance, enforcing new allocations. If no interactions are made for some time (1h currently) we then rebalance the pool.

Hence, by buying and holding IdleTokens, users' underlying position will be dynamically rebalanced when the best rate changes, in order to always give back the most profitable return.

## Problem modelization

With this strategy we are maximizing current aggregated interest rate, this can be modeled as follows:
    