# Use Cases

### Vaults on Demand

Project teams and DAOs are able to spin-up vaults on demand. The vault owner may choose to self-manage the vault by setting individual strategies. Alternatively, the vault owner may also subscribe to strategy recommendations from strategists and optionally screen these recommendations based on self-determined or risk analyst provided criteria \(such as pool and/or protocol ratings\). A community of bots \(“keepers”\) could be incentivized to continually rebalance vault holdings into the optimal strategy in exchange for a fee from the vault.

### Long-Tail Asset Optimization

The OptyFi Protocol is well suited for the optimization of long-tail and niche assets. For each such asset it may not be feasible to develop and maintain a custom strategy contract. However, a long-tail asset can be easily added to the OptyFi Strategy Graph, and as long as there is a single liquidity pool \(node\) that accepts it as an underlying asset \(inbound edge\), it will be included in the dynamic generation of strategies for an asset. This property makes OptyFi suited to the following use cases:

* DEXes such as Uniswap, Balancer and Sushi Swap that deal in hundreds of currency pairs could invest unused liquidity into niche vaults.
* Wallets such as MetaMask could automatically deposit users’ assets into niche vaults to ensure users are obtaining the best returns in DeFi.
* Smart Contracts that hold niche assets can optimize these assets by depositing into niche vaults.

### Cross-Chain Strategies

In the same way that the Strategy Graph abstracts interactions between liquidity pools and protocols, it will also abstract interactions across blockchains by using existing bridges and integrating with emerging cross-chain lending protocols and decentralized exchanges. Thus strategists will be able to focus on identifying optimal cross-chain strategies without being concerned about how the strategy transaction is executed on the chains involved. Yield builders who develop and maintain cross-chain integrations will receive a portion of the “bridge toll” each time a cross-chain strategy utilizes their bridge.

This means OptyFi users would have access to yield-generating opportunities across several chains from a single interface without having to worry about changing wallets or bridging assets.

### Vault Boosting

OptyFi’s Vault Booster smart contract enables any user/contract to incentivize any ecosystem vault by submitting a transaction that includes the appropriate number of reward tokens along with the rate at which those reward tokens are to be distributed to the target vault. This enables project teams and contracts to influence flow of capital on demand and present a myriad of possible use cases such as:

* Flexible mechanisms for DAOs to incentivize other DAOs.
* Providing “venture capital” to build a target project's liquidity by attracting liquidity providers.

### Factor-Based and Thematic Yield Investing

By explicitly defining an assortment of discrete yield strategies, OptyFi enables application of the principles of factor-based investing and thematic investing to yield generation. Thus, instead of only trying to optimize for APY, strategists can optimize strategies based on exposure to various factors and yield portfolios can be developed that specify weight exposures to specific factors. Theoretically, all factors can be utilized to determine a strategy, such as exposure to pool type \(e.g. DEX, Lending, Derivatives\) or exposure to protocol age. Similarly, vaults can be configured to invest thematically, for example, by investing only in liquidity pools related to Ethereum L2 scaling solutions.

**The possibilities are endless and we welcome the OptyFi community to propose, vote and implement entirely new ideas.**
