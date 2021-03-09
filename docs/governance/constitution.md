---
id: constitution
title: Constitution
---
### Definitions
- **OptyFi Protocol  (the "Protocol") :** A set of deployed smart contracts (and their corresponding source code) that allocate users' pooled assets into optimal DeFi investment strategies. 

- **$OPTY:** An ERC20 Token that represents ownership in the Protocol and entitles holders to participate in the governance and future income of the Protocol.  

- **Governance:** Refers to the action of making major decisions regarding the Protocol.  Specifically, $OPTY holders have governance rights on the Protocol.  

- **Community:** Protocol users and $OPTY token holders. 

- **Developer:** The original developer of the OptyFi Protocol i.e. OptyFi Labs Inc.

- **Operator:** The entity authorized to manage day-to-day operations of the OptyFi Protocol.

- **Treasury:** An ethereum account owned by the Protocol to be used for the benefit of the OptyFi Protocol, but managed by the Operator. 

### Constitution

1. The OptyFi Protocol aims to provide users with the best returns on DeFi assets, by pooling user assets and then deploying them into optimal investment strategies. 
2. The holders of $OPTY tokens have the overall right to govern the Protocol and are also entitled to Protocol earnings.
3. The Protocol was originally developed and owned by Developer. Upon deployment of Protocol contracts, ownership of the Protocol was transferred to $OPTY holders under an Original Protocol Bill of Sale which entitled Developer to compensation for developing the Protocol providing a limited warranty on code warranty.   
4. and then transferred to ownership of Upon deploying Protocol  and then conveyed to the ownership of As compensation, The Developer transfers ownership of the Protocol to the Community.  The Developer receives 1.2MM $OPTY as compensation for developing the Protocol, and agrees to provide  
Best Yield strategy allows users to optimize interest rate profitability and seamlessly get the highest yield, without having to manually move funds across different lending protocols to chase the best returns.

Users' funds are pooled together in the main contract (one for each token supported by Idle) and every interaction with Idle smart contract can potentially reallocate funds to provide the highest aggregated interest rate for all pooled funds.

Interest rates are constantly monitored off-chain by our infrastructure. We calculate the exact allocations for pooled funds in order to maximize aggregated APR and if current allocations are different from the newly calculated one, we submit those allocations to our contract. Every subsequent interaction of any user with the contract will perform the actual rebalance, enforcing new allocations. If no interactions are made for some time (1h currently) we then rebalance the pool.

Hence, by buying and holding IdleTokens, users' underlying position will be dynamically rebalanced when the best rate changes, in order to always give back the most profitable return.

## Problem modelization

With this strategy we are maximizing current aggregated interest rate, this can be modeled as follows:
    
