---
id: risk-adjusted
title: Risk Adjusted
---

The risk-adjusted allocation strategy provides a way to earn the best rate at the lowest risk-level. The risk-management algorithm takes account of the total assets within a pool, incorporates underlying protocol rate functions and levels of supply and demand, skimming protocols with a bad score/rate mix, and finally determining an allocation that achieves the highest risk-return score possible after the rebalance happens. 

It has been developed in collaboration with DeFiScore, a framework for quantifying risk in permissionless lending pools. DeFiScore is a single, consistently comparable value for measuring protocol risk, based on factors including smart contract risk, collateralization, and liquidity. The model outputs a 0–10 score that represent the level of risk on a specific lending protocol (where 10 is the upper bound = lowest risk, and 0 is the lower bound = highest risk).
You can read more about the risk assessment model here.

## Technical details
With this strategy we are trying to find the right balance between risk and returns. We are weighting score and apr based on k parameter. This can be modeled as follows:

q = \sum_{i=0}^{n} \frac{x_i}{tot} * nextRate(x_i)

where n is the number of lending protocols used, x_i is the amount (in underlying) allocated in protocol i , nextRate(x_i) is a function which returns the new APR for protocol i after supplying x_i ,nextScore(x_i) is a function which returns the new Score for protocol i after supplying x_iamount of underlying, maxNextRate is the highest rate of all implemented protocols after supplying x_i amount, same for maxNextScore with regard to the score, tot is total amount to rebalance, finally k is a coefficient for expressing weights of score and apr (k = 1  means equally weighted, currently k = 2 so score weights twice the APR).