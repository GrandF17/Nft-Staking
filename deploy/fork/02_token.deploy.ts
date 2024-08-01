import { DeployFunction } from "hardhat-deploy/types";
import { ethers } from "hardhat";

const deployContract: DeployFunction = async ({
  getNamedAccounts,
  deployments,
}) => {
  const { deploy } = deployments;
  const [deployer] = await ethers.getSigners();
  await deploy("Nomad", {
    from: deployer.address,
    args: [
      ["https://ipfs.io/ipfs/QmZPZwoAumeDWXou8uXRg2NvDANV92rXWf4BoW4wAcYGoB"],
    ],
    log: true,
  });
};

export default deployContract;
deployContract.tags = ["token deploy"];
