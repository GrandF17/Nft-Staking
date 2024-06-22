import { task } from "hardhat/config";

import * as dotenv from "dotenv";
dotenv.config();

import "@nomiclabs/hardhat-waffle";
import "@typechain/hardhat";
import "hardhat-deploy";
import 'hardhat-gas-reporter'

import { HardhatUserConfig } from "hardhat/types/config";
import { gasReportConfig } from "./utils/gas.config";

task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();
  for (const account of accounts) {
    console.log(account.address);
  }
});

const config: HardhatUserConfig = {
  solidity: {
    compilers: [
      {
        version: "0.8.21",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
          metadata: {
            // do not include the metadata hash, since this is machine dependent
            // and we want all generated code to be deterministic
            // https://docs.soliditylang.org/en/v0.7.6/metadata.html
            // bytecodeHash: "none",
          },
        },
      }]
  },
  // default chain is L2 Arbitrum
  gasReporter: gasReportConfig(process.env.TEST_CHAIN ?? 'arbitrum'),
  networks: {
    hardhat: {
      tags: ["fork"],
      deploy: ["deploy/fork/"],
      forking: {
        url: "https://rpc.ankr.com/arbitrum",
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
