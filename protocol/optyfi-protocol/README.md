# OptyFi 协议

OptyFi 协议以第一原则的角度看待 DeFi 收益。

从流动性池的概览开始，我们定义了收益率[策略步骤](strategy-composition.md#strategy-step)，它可以在[顺序](strategy-composition.md#strategy-sequence) 中组合成收益率策略，这同时又可以组合成投资组合。在可行的策略范围下形成一个直观的[策略图](strategy-composition.md#strategy-graph)，并且执行一个收益策略，形成可概念化的策略图。

用户将他们的资产存入 OptyFI 机枪池，从那里，用户的资产将被持续部署到与机枪池的 [风险框架](risk-framework.md#risk-profiles) 匹配的最佳策略中。

[策略执行](strategy-execution.md) 合约能够在执行[风险框架](risk-framework.md) 的同时执行多步骤的策略。 [优化引擎](optimization-engine.md) 将持续监控数百个流动性池中的数千个数据，以便向机枪池推荐当前的最佳策略。
