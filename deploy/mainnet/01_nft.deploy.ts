import { DeployFunction } from "hardhat-deploy/types";
import { ethers } from "hardhat";

const deployContract: DeployFunction = async ({
  getNamedAccounts,
  deployments,
}) => {
  const { deploy } = deployments;
  const [deployer] = await ethers.getSigners();
  await deploy("NukaCoin", {
    from: deployer.address,
    args: [ethers.utils.parseEther("500000000")],
    log: true,
  });
};

export default deployContract;
deployContract.tags = ["nft deploy"];
