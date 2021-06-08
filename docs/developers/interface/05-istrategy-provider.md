---
id: istrategy
title: IStrategyProvider
---
Also available on Github.
```solidity
/**
 * @title Interface for StrategyProvider Contract
 * @author Opty.fi
 * @notice Contains functions for setting and getting the best and default strategy
 * as well as vault reward token strategy
 */
interface IStrategyProvider {
    /**
     * @notice Set the best stratetgy for the given riskProfile and tokenHash
     * @param _riskProfile Risk profile (Eg: RP1, RP2, etc)
     * @param _tokenHash Hash of the underlying token address/addresses
     * @param _strategyHash Strategy hash to be set as best strategy
     */
    function setBestStrategy(
        string memory _riskProfile,
        bytes32 _tokenHash,
        bytes32 _strategyHash
    ) external;

    /**
     * @notice Set the best default stratetgy for the given riskProfile and tokenHash
     * @param _riskProfile Risk profile (Eg: RP1, RP2, etc)
     * @param _tokenHash Hash of the underlying token address/addresses
     * @param _strategyHash Strategy hash to be set as best default strategy
     */
    function setBestDefaultStrategy(
        string memory _riskProfile,
        bytes32 _tokenHash,
        bytes32 _strategyHash
    ) external;

    /**
     * @dev Assign strategy in form of vaultRewardStrategy to the vaultRewardTokenHash
     * @param _vaultRewardTokenHash Hash of vault contract and reward token address
     * @param _vaultRewardStrategy Vault reward token's strategy for the specified vaultRewardTokenHash
     * @return Returns a vaultRewardStrategy hash value indicating successful operation
     */
    function setVaultRewardStrategy(
        bytes32 _vaultRewardTokenHash,
        DataTypes.VaultRewardStrategy memory _vaultRewardStrategy
    ) external returns (DataTypes.VaultRewardStrategy memory);

    /**
     * @notice Set the Default strategy state to zero or compound or aave
     * @param _defaultStrategyState Default strategy state (zero or compound or aave) to be set
     */
    function setDefaultStrategyState(DataTypes.DefaultStrategyState _defaultStrategyState) external;

    /**
     * @notice Get the Best strategy corresponding to riskProfile and tokenHash provided
     * @param _riskProfile Risk profile (Eg: RP1, RP2, etc)
     * @param _tokenHash Hash of the underlying token address/addresses
     * @return Returns the best strategy hash corresponding to riskProfile and tokenHash provided
     */
    function rpToTokenToBestStrategy(string memory _riskProfile, bytes32 _tokenHash) external view returns (bytes32);

    /**
     * @notice Get the Best Default strategy corresponding to riskProfile and tokenHash provided
     * @param _riskProfile Risk profile (Eg: RP1, RP2, etc)
     * @param _tokenHash Hash of the underlying token address/addresses
     * @return Returns the best default strategy hash corresponding to riskProfile and tokenHash provided
     */
    function rpToTokenToDefaultStrategy(string memory _riskProfile, bytes32 _tokenHash) external view returns (bytes32);

    /**
     * @notice Get the Vault reward token's strategy corresponding to the tokensHash provided
     * @param _tokensHash Hash of Vault contract and reward token address
     * @return Returns the Vault reward token's strategy corresponding to the tokensHash provided
     */
    function getVaultRewardTokenHashToVaultRewardTokenStrategy(bytes32 _tokensHash)
        external
        view
        returns (DataTypes.VaultRewardStrategy memory);

    /**
     * @notice Get the Default strategy state already set
     * @return Returns the Default strategy state (zero or compound or aave) already set
     */
    function getDefaultStrategyState() external view returns (DataTypes.DefaultStrategyState);
}
```