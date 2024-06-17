// SPDX-License-Identifier: MIT
pragma solidity ^0.8.21;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

/**
 * @title flexible NFT staking
 * @author GrandF17
 * @notice every T hours participant will recieve % from
 * allocated pool of reward tokens during all stake time
 */
contract NftStaking is Ownable {
    struct Period {
        uint safepoint; // timestamp strting ftom 0
        uint reward; // per current period
    }

    struct User {
        uint started; // time when user started staking
        uint id; // nft id
    }

    ////////////////////////////////

    Period[] private stakingPeriods;
    ERC721 public immutable nomadNft;
    ERC20 public immutable rewardToken;

    mapping(address => User) info;

    constructor(
        Period[] memory stakingPeriods_,
        address rewardToken_,
        address nomadNft_
    ) Ownable(msg.sender) {
        for (uint8 i; i < stakingPeriods_.length; ++i)
            stakingPeriods.push(stakingPeriods_[i]);

        rewardToken = ERC20(rewardToken_);
        nomadNft = ERC721(nomadNft_);
    }

    function stake(uint id) external {
        require(
            info[msg.sender].started == 0 && info[msg.sender].id == 0,
            "You've already staked your nft!"
        );

        nomadNft.safeTransferFrom(msg.sender, address(this), id);
        info[msg.sender] = User(block.timestamp, id);
    }

    function unstake() external {
        // for gas safety and simplicity:
        User memory user = info[msg.sender];
        Period[] memory periods = stakingPeriods;
        uint256 time = block.timestamp;

        uint256 reward;
        for (uint8 i; i < periods.length; ++i) {
            if (time < user.started + periods[i].safepoint) break;
            reward += periods[i].reward;
        }

        rewardToken.transfer(msg.sender, reward);

        nomadNft.safeTransferFrom(
            address(this),
            msg.sender,
            info[msg.sender].id
        );

        info[msg.sender] = User(0, 0);
    }
}
