# Vaults

Vaults are OptyFi smart contracts into which users deposit assets in order to get these assets deployed into strategies. Vaults enable users to share gas costs and thereby increase user profitability while also enabling more frequent strategy switching. 

Each vault has a [vault type](vaults.md#vault-types) determined by its [underlying token](tokens-and-pools.md#tokens) \(i.e. the token users would deposit into the vault\). Each vault is also associated with a specific [risk profile](risk-framework.md#risk-profiles) which determines which strategies the vault can and cannot deploy assets into. 

## Vault Types

| **Type** | **[Underlying Token Example](tokens-and-pools.md#tokens)** |
| :--- | :--- |
| Core Vault | DAI, USDC, USDT, WBTC, WETH |
| LP Vault | cDAI, aUSDC, UNI-ETH-USDT, BAL-OPTY-USDC |
| Reward Vault | COMP, BAL, CRV |

LP Vaults can accept Single-Asset LP Tokens like cDAI or aUSDC as well as Multi-Asset LP Tokens like UNI-ETH-USDT.

![OptyFi Vault Types.](../../.gitbook/assets/optyfi-vaults.svg)

## Deployed Vaults

There will be a separate vault for each underlying asset and risk profile combination. 

Upon launch, the following vaults will be deployed: 

| **[Underlying Asset](tokens-and-pools.md#tokens)** | **[Risk Profile](risk-framework.md#risk-profiles)** |
| :--- | :--- |
| DAI | RP1, RP2 |
| USDC | RP1, RP2 |
| USDT | RP1, RP2 |
| WETH | RP1, RP2 |
| WBTC | RP1, RP2 |
| BAL-OPTY-USDC | RP0 |
| BAL-ODEFI-USDC | RP0 |

For example, the DAI-RP1 vault will accept DAI as the input token and then deploy DAI into various strategies that meet the RP1 risk profile. 

