import { HardhatUserConfig, task } from "hardhat/config";
import "@nomiclabs/hardhat-waffle";
import "@typechain/hardhat";
import "hardhat-deploy";
import * as dotenv from "dotenv";
dotenv.config();

task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();
  for (const account of accounts) {
    console.log(account.address);
  }
});

const config: HardhatUserConfig = {
  solidity: "0.8.18",
  networks: {
    hardhat: {
      tags: ["fork"],
      deploy: ["deploy/fork/"],
      forking: {
        url: "https://rpc.ankr.com/bsc",
      },
    },
    bsc_mainnet: {
      chainId: 56,
      url: `https://bsc-dataseed1.binance.org/`,
      accounts: process.env.PRIVATE_MAIN
        ? process.env.PRIVATE_MAIN?.split(",")
        : [],
      tags: ["mainnet"],
      deploy: [`deploy/mainnet/`],
      verify: {
        etherscan: {
          apiKey: process.env.API_BSC,
        },
      },
    },
    bsc_testnet: {
      chainId: 97,
      url: "https://data-seed-prebsc-1-s1.binance.org:8545",
      accounts: process.env.PRIVATE_TEST
        ? process.env.PRIVATE_TEST?.split(",")
        : [],
      tags: ["testnet"],
      deploy: [`deploy/testnet/`],
      verify: {
        etherscan: {
          apiKey: process.env.API_BSC,
        },
      },
    },
    octa: {
      chainId: 800001,
      url: `https://rpc.octa.space`,
      accounts: process.env.PRIVATE_MAIN
        ? process.env.PRIVATE_MAIN?.split(",")
        : [],
      tags: ["mainnet"],
      deploy: [`deploy/mainnet/`],
    },
  },
};

export default config;
