# Participants

## Yield Ecosystem

OptyFi's composable strategy architecture enables a decentralized ecosystem of participants to more easily and effectively participate in DeFi yield markets,  increasing capital efficiency and user adoption.

OptyFi participants can be categorized as [Builders](participants.md#builders) and [Users](participants.md#users). These participants can be further sub-categorized based on their specific motivations and abilities and hence the role they would play in the ecosystem.

## Builders

The current “DeFi Yield Strategist” must possess several very different skill sets including:

* code development 
* strategy identification
* risk assessment
* data analysis

The OptyFi Protocol enables specialization of the strategist's various roles, thereby improving systemic efficiency while better meeting user needs.

### Integrators

Integrators expand the "reach" of the OptyFi Protocol by adding integrations \([DeFi Adapters](optyfi-protocol/strategy-execution.md#defi-adapters)\) with other protocols. OptyFi’s architecture makes adding new pools and protocols simple: a new pool can be added in minutes, and a new protocol can be added in days. Each time a strategy is executed using a specific adapter, the Integrator who developed the adapter can receive a portion of Protocol fees generated from that strategy. This incentive mechanism enables the OptyFi protocol to grow at a scale that centralized systems cannot compete with, strengthening OptyFi’s network effects.

### **Strategists**

OptyFi’s architecture lets strategists focus on strategy optimization rather than code development. Smart contracts enable execution of an arbitrarily complex strategy with a simple strategy command. Furthermore, composable strategies allow strategists to specialize in different strategy types \(e.g. leveraged vs. non-leveraged\), pool types \(e.g. trading vs. lending\) or protocols \(e.g. Uniswap vs. SushiSwap\). Vaults are able to subscribe to one or more strategists who continually “recommend” optimal strategies based on vault defined criteria. In return, strategists would be paid a portion of the vault fees.

### **Risk Analysts**

The OptyFi architecture decouples strategy definition from strategy risk. Risk Analysts can develop risk assessment systems that assign [pool ratings](optyfi-protocol/risk-framework.md#pool-ratings) to liquidity pools or even directly assign [risk profiles](optyfi-protocol/risk-framework.md#risk-profiles) to any given strategy. Vaults may choose to subscribe risk ratings from a specific Risk Analyst in order to filter the strategies that a Vault may execute and to set the vault’s “portfolio risk composition”. In return, Risk Analysts would be paid a portion of vault fees.

### **Data Providers**

Data providers can support the ecosystem by:

* providing performance data on the Strategists and Risk Analysts.
* providing pool data such as lending pool supply/borrow rates and trading pool fees to Strategists and Risk Analysts.
* generating signals which can be used by Strategists in developing strategy predictions and by Risk Analysts in changing strategy risk profiles or pool ratings.

## Users

Current DeFi users seeking to access optimal yield need to:

* Learn many protocols and dApps.
* Monitor several liquidity pools.
* Track changing yields, deposit/borrow rates, fees and gas costs.
* Monitor price changes to avoid liquidations and divergence losses.

OptyFi vaults automatically switch to optimal strategies based on changing conditions. OptyFi’s architecture connects fragmented DeFi yield markets so that users do not have to learn various protocols and dApps or monitor changing rates and fees. 

OptyFi can also provide vaults-as-a-service to project teams, DAOs and on-chain Asset Managers. These non-individual users can configure and deploy vaults with customized strategies suited to the needs/objectives of their users without the need for custom code development. Investors benefit from the availability of a larger selection of vault investment options specialized to their individual requirements.

