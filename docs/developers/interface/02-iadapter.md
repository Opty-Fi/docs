---
id: iadapter
title: IAdapter
---
Also available on Github.
```solidity
/**
 * @dev Interface of the Defi protocol code provider.
 */
interface IAdapter {
    /**
     * @dev Supply `liquidityPool`, `underlyingToken`
     * and returns pool value in underlying token for that liquidity pool.
     *
     * Returns a uint value
     */
    function getPoolValue(address _liquidityPool, address _underlyingToken) external view returns (uint256 _poolValue);

    /**
     * @dev Supply `liquidityPool` for Curve,Compound `liquidityPoolAddressProvider` for Aave
     * and returns liquidityPoolToken to the caller`.
     *
     * Returns a bytes value to be executed.
     */
    function getDepositSomeCodes(
        address payable _optyPool,
        address[] memory _underlyingTokens,
        address liquidityPool,
        uint256[] memory amounts
    ) external view returns (bytes[] memory);

    /**
     * @dev Deposit full `amount` of `underlyingToken` and sends the  `liquidityPoolToken` token to the caller`.
     *
     * Returns a bytes value to be executed.
     */

    function getDepositAllCodes(
        address payable _optyPool,
        address[] memory _underlyingTokens,
        address _liquidityPool
    ) external view returns (bytes[] memory _codes);

    /**
     * @dev Borrow full `amount` of `_outputToken` and sends the  `_outputToken` token to the caller`.
     *
     * Returns a bytes value to be executed.
     */
    function getBorrowAllCodes(
        address payable _optyPool,
        address[] memory _underlyingTokens,
        address _liquidityPool,
        address _outputToken
    ) external view returns (bytes[] memory _codes);

    /**
     * @dev Repay full amount of  `_outputToken` and sends the  `_underlyingTokens` token to the caller`.
     *
     * Returns a bytes value to be executed.
     */
    function getRepayAndWithdrawAllCodes(
        address payable _optyPool,
        address[] memory _underlyingTokens,
        address _liquidityPoolAddressProvider,
        address _outputToken
    ) external view returns (bytes[] memory);

    /**
     * @dev Redeem `amount` of `liquidityPoolToken` token and sends the `underlyingToken` to the caller`.
     *
     * Returns a bytes value to be executed.
     */
    function getWithdrawSomeCodes(
        address payable _optyPool,
        address[] memory _underlyingTokens,
        address liquidityPool,
        uint256 amount
    ) external view returns (bytes[] memory);

    /**
     * @dev Redeem full `amount` of `liquidityPoolToken` token and sends the `underlyingToken` to the caller`.
     *
     * Returns a bytes value to be executed.
     */
    function getWithdrawAllCodes(
        address payable _optyPool,
        address[] memory _underlyingTokens,
        address _liquidityPool
    ) external view returns (bytes[] memory _codes);

    /**
     * @dev Returns the lending pool token given lending pool for Curve, lendingPoolToken for Aave,Compound.
     */
    function getLiquidityPoolToken(address _underlyingToken, address _liquidityPool) external view returns (address);

    /**
     * @dev Returns the underlying token given the lendingPoolToken for Aave,Compound & lending pool for Curve.
     */
    function getUnderlyingTokens(address liquidityPool, address _liquidityPoolToken)
        external
        view
        returns (address[] memory);

    /**
     * @dev Returns the balance in underlying for liquidityPoolToken balance of holder
     */
    function getAllAmountInToken(
        address payable _optyPool,
        address _underlyingToken,
        address _liquidityPool
    ) external view returns (uint256);

    /**
     * @dev get liquidity pool token balance
     */

    function getLiquidityPoolTokenBalance(
        address payable _optyPool,
        address _underlyingToken,
        address _liquidityPool
    ) external view returns (uint256);

    /**
     * @dev Returns the equivalent value of underlying token for given {liquiidityPoolTokenAmount}.
     */
    function getSomeAmountInToken(
        address _underlyingToken,
        address _liquidityPool,
        uint256 _liquidityPoolTokenAmount
    ) external view returns (uint256);

    /**
     * @dev Returns the amount in underlying token for
     *      {_liquidityPoolTokenAmount} collateral if {_borrowAmount}
     *      in {_borrowToken} is repaid.
     */
    function getSomeAmountInTokenBorrow(
        address payable _optyPool,
        address _underlyingToken,
        address _liquidityPoolAddressProvider,
        uint256 _liquidityPoolTokenAmount,
        address _borrowToken,
        uint256 _borrowAmount
    ) external view returns (uint256);

    /**
     * @dev Returns the amount in underlying token for whole
     *      collateral of {_optyPool} balance if {_borrowAmount}
     *      in {_borrowToken} is repaid.
     */
    function getAllAmountInTokenBorrow(
        address payable _optyPool,
        address _underlyingToken,
        address _liquidityPoolAddressProvider,
        address _borrowToken,
        uint256 _borrowAmount
    ) external view returns (uint256);

    /**
     * @dev Returns the equivalent value of _liquidityPoolToken got given {underlyingTokenAmount}
     */
    function calculateAmountInLPToken(
        address _underlyingToken,
        address _liquidityPool,
        uint256 _underlygingTokenAmount
    ) external view returns (uint256);

    /**
     * @dev Returns the equivalent amount of liquidity pool token given the share amount to be withdrawn
     */
    function calculateRedeemableLPTokenAmount(
        address payable _optyPool,
        address _underlyingToken,
        address _liquidityPool,
        uint256 _redeemAmount
    ) external view returns (uint256 _amount);

    /**
     * @dev Returns whether the share amount is redeemable
     */
    function isRedeemableAmountSufficient(
        address payable _optyPool,
        address _underlyingToken,
        address _liquidityPool,
        uint256 _redeemAmount
    ) external view returns (bool);

    /**
     * @dev Returns reward token address
     */
    function getRewardToken(address _liquidityPool) external view returns (address);

    /**
     * @dev Returns the amount of accrued reward tokens
     */
    function getUnclaimedRewardTokenAmount(address payable _optyPool, address _liquidityPool)
        external
        view
        returns (uint256);

    /**
     * @dev Returns code for claiming the tokens
     */
    function getClaimRewardTokenCode(address payable _optyPool, address _liquidityPool)
        external
        view
        returns (bytes[] memory);

    /**
     * @dev Returns the code for harvesting some rewards
     */

    function getHarvestSomeCodes(
        address payable _optyPool,
        address _underlyingToken,
        address _liquidityPool,
        uint256 _rewardTokenAmount
    ) external view returns (bytes[] memory);

    /**
     * @dev Returns the code for harvesting all reward
     */

    function getHarvestAllCodes(
        address payable _optyPool,
        address _underlyingToken,
        address _liquidityPool
    ) external view returns (bytes[] memory);

    /**
     * @dev Returns whether the protocol can stake
     */
    function canStake(address _liquidityPool) external view returns (bool);

    /**
     * @dev Returns code for staking liquidityPool token
     */
    function getStakeSomeCodes(address _liquidityPool, uint256 _stakeAmount) external view returns (bytes[] memory);

    /**
     * @dev Returns code for staking  liquidityPool token
     */
    function getStakeAllCodes(
        address payable _optyPool,
        address[] memory _underlyingTokens,
        address _liquidityPool
    ) external view returns (bytes[] memory _codes);

    /**
     * @dev Returns code for unstaking staking liquidityPool token
     */

    function getUnstakeSomeCodes(address _liquidityPool, uint256 _unstakeAmount) external view returns (bytes[] memory);

    /**
     * @dev Returns code for unstaking liquidityPool token
     */
    function getUnstakeAllCodes(address payable _optyPool, address _liquidityPool)
        external
        view
        returns (bytes[] memory _codes);

    /**
     * @dev Returns the balance in underlying for staked liquidityPoolToken balance of holder
     */
    function getAllAmountInTokenStake(
        address payable _optyPool,
        address _underlyingToken,
        address _liquidityPool
    ) external view returns (uint256);

    /**
     * @dev get liquidity pool token staked balance
     */

    function getLiquidityPoolTokenBalanceStake(address payable _optyPool, address _liquidityPool)
        external
        view
        returns (uint256);

    /**
     * @dev Returns the equivalent amount of liquidity pool token given the share amount to be withdrawn
     */
    function calculateRedeemableLPTokenAmountStake(
        address payable _optyPool,
        address _underlyingToken,
        address _liquidityPool,
        uint256 _redeemAmount
    ) external view returns (uint256 _amount);

    /**
     * @dev Returns whether the share amount is redeemable
     */
    function isRedeemableAmountSufficientStake(
        address payable _optyPool,
        address _underlyingToken,
        address _liquidityPool,
        uint256 _redeemAmount
    ) external view returns (bool);

    /**
     * @dev Returns the code for unstake and withdraw of liquidty pool tokens
     */
    function getUnstakeAndWithdrawSomeCodes(
        address payable _optyPool,
        address[] memory _underlyingTokens,
        address _liquidityPool,
        uint256 _redeemAmount
    ) external view returns (bytes[] memory _codes);

    /**
     * @dev Returns the code for unstake and withdraw of liquidty pool tokens
     */
    function getUnstakeAndWithdrawAllCodes(
        address payable _optyPool,
        address[] memory _underlyingTokens,
        address _liquidityPool
    ) external view returns (bytes[] memory _codes);
}

}
```