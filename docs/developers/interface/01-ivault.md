---
id: ivault
title: IVault
---
Also available on Github.
```solidity
/**
 * @dev Interface of the Opty.fi Vaults.
 */
interface IVault {
    function setProfile(string memory _profile) external returns (bool _success);

    function setToken(address _underlyingToken) external returns (bool _success);

    function setMaxVaultValueJump(uint256 _maxVaultValueJump) external returns (bool _success);

    function rebalance() external;

    function harvest(bytes32 _hash) external;

    function discontinue() external;

    function setUnpaused(bool _unpaused) external;

    function balance() external view returns (uint256);

    function isMaxVaultValueJumpAllowed(uint256 _diff, uint256 _currentVaultValue) external view returns (bool);

    function getPricePerFullShare() external view returns (uint256);

    // no CHI functions

    function userDepositAll() external;

    function userDeposit(uint256 _amount) external returns (bool _success);

    function userDepositAllRebalance() external;

    function userDepositRebalance(uint256 _amount) external returns (bool _success);

    function userWithdrawAllRebalance() external;

    function userWithdrawRebalance(uint256 _redeemAmount) external returns (bool);

    // CHI token functions

    function userDepositAllWithCHI() external;

    function userDepositWithCHI(uint256 _amount) external;

    function userDepositAllRebalanceWithCHI() external;

    function userDepositRebalanceWithCHI(uint256 _amount) external;

    function userWithdrawAllRebalanceWithCHI() external;

    function userWithdrawRebalanceWithCHI(uint256 _redeemAmount) external;
}
```