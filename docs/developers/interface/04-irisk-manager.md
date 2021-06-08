---
id: irisk
title: IRiskManager
---
Also available on Github.
```solidity
/**
 * @title Interface for RiskManager contract
 * @author Opty.fi
 * @notice A layer between vault and registry contract to get the best invest strategy as well
 * as vault reward token strategy
 */
interface IRiskManager {
    /**
     * @notice Get the best strategy for respective RiskProfiles
     * @param _profile risk profile corresponding to which get the best strategy
     * @param _underlyingTokens array of underlying token addresses
     * @return Returns the hash of the best strategy corresponding to the riskProfile provided
     */
    function getBestStrategy(string memory _profile, address[] memory _underlyingTokens)
        external
        view
        returns (bytes32);

    /**
     * @notice Get the VaultRewardToken strategy for respective VaultRewardToken hash
     * @param _vaultRewardTokenHash Hash of vault contract address and reward token address
     * @return _vaultRewardStrategy Returns the VaultRewardToken strategy for given vaultRewardTokenHash
     */
    function getVaultRewardTokenStrategy(bytes32 _vaultRewardTokenHash)
        external
        view
        returns (DataTypes.VaultRewardStrategy memory _vaultRewardStrategy);
}
```