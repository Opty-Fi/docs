---
id: smart-contracts
title: Smart Contracts

---

## Smart Contracts

**Vault.sol** 

The Vault contract holds users' assets (underlying tokens) and deploys these assets into multi-step strategies. The Vault contract implements the following functions:

userDeposit()

userDepositRebalance()

userWithdraw()

userWithdrawRebalance()

depositAll() ==> can we change to vaultDepositAll()

withdrawAll() ==> can we change to vaultWithdrawAll()

rebalance()

harvest() ==> change to vaultClaimReward(action='harvest' or 'invest')

------

**Registry.sol** 

The Registry contract acts as the central database for the OptyFi protocol and holds protocol parameters as well as identification and rating data for pools that are authorized and enabled for OptyFi yield strategies.    

------

**StrategyCodeProvider.sol**

When a Vault wants to execute a strategy, it calls the StrategyCodeProvider contract which provides byte-code instructions to the Vault on how to execute the strategy.  

-----

**RiskManager.sol**

The Risk Manager contract performs last minute checks before permitting a Vault to execute a particular strategy. 

---

**DefiCodeProviders**

For each protocol integrated into OptyFi, a DefiCodeProvider contract implements the functions necessary to interact with pools within that protocol. For example the harvestCodeProvider.sol contract implements functions necessary to deposit into, withdraw from and claim rewards from Harvest pools.

---





