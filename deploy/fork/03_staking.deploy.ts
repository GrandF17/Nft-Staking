import { DeployFunction } from "hardhat-deploy/types";
import { ethers } from "hardhat";
import { BigNumberish } from "ethers";
import { timstamp } from "@/utils/time";
import { Nomad, NukaCoin } from "@/typechain";

interface Period {
  safepoint: BigNumberish; // timestamp strting ftom 0
  reward: BigNumberish; // per current period
}

const deployContract: DeployFunction = async ({
  getNamedAccounts,
  deployments,
}) => {
  const { deploy } = deployments;
  const [deployer] = await ethers.getSigners();

  const nft = (await ethers.getContract("Nomad")) as Nomad;
  const rewardToken = (await ethers.getContract("NukaCoin")) as NukaCoin;

  const now = timstamp();

  await deploy("NftStaking", {
    from: deployer.address,
    args: [
      [
        { safepoint: now + 1000, reward: 1000 },
        { safepoint: now + 2000, reward: 2000 },
        { safepoint: now + 3000, reward: 3000 },
        { safepoint: now + 5000, reward: 5000 },
      ] as Period[],
      rewardToken.address,
      nft.address,
    ],
    log: true,
  });
};

export default deployContract;
deployContract.tags = ["staking deploy"];
deployContract.dependencies = ["token deploy", "nft deploy"];
deployContract.runAtTheEnd = true;
