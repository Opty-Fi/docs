# Adaptive User Rewards Distribution

### **Asset Growth vs. OPTY Price**

Liquidity mining will distribute OPTY to incentivize users to retain assets in OptyFi vaults. Increased assets should increase the Protocol's value by expanding the revenue base and realizing economic efficiencies of scale. However, excessive OPTY distribution can have a depressing effect on OPTY price, reducing the Protocol's market cap directly and also weakening the Protocol's ability to incentivize users and contributors. Thus, a balance needs to be struck between stimulating Protocol growth and supporting OPTY price.

### **Optimization Parameters**

Determining the optimal OPTY distribution rate for liquidity mining and staking presents an optimization problem. Since growth, Protocol value and OPTY price are dynamic and complex stochastic systems, this is a difficult optimization problem. 

Instead of attempting to predict the optimal distribution rate, the Protocol will allow Governance to adaptively set and change the following parameters based on changing market conditions. 

* **Reward Rate**: The rate at which User Reward tokens are issued globally across all vaults and staking pools.

| **Reward Rate**  | **OPTY Per Day**  | **Depletion Time** |
| :--- | :--- | :--- |
| 0x | 0; Distribution Paused | Infinity |
| 1x | 50MM / 365\*5 = 27,397 | 5 Years |
| 2x | 50MM / 365\*4 = 34,246 | 4 Years |
| 3x | 50MM / 365\*3 = 45,662 | 3 Years |
| 4x | 50MM / 365\*2 = 68,493 | 2 Years |

* **Vault Allocations**: The proportion of distributed OPTY to be allocated to the different OptyFi vaults.
* **Staking Pool Allocations**: The proportion of distributed OPTY to be allocated to the staking pools.

### Community Analysis

The precise relationships between growth, value and price are not easy to determine during the early days of the Protocol. As more data becomes available, community driven data analyses will inform Governance on deciding the optimal values for above parameters. 

For example, periodic \(e.g. weekly\) analysis could include the following data for the period:

* OPTY Distributed
* Change in Vault Assets 
* Change in Price
* Change in Market Cap
* Change in Market Cap/TVL Ratio

