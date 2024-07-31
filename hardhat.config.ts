import { task } from "hardhat/config";

import * as dotenv from "dotenv";
dotenv.config();

import "@nomiclabs/hardhat-waffle";
import "@typechain/hardhat";
import "hardhat-deploy";
import 'hardhat-gas-reporter'
import { HardhatUserConfig } from "hardhat/types/config";

/// CUSTOM ///
import { Map } from "@/utils/utils.types";
import { gasReportConfig } from "@/utils/gas.config";
import { chains } from "@/utils/chain.config";

task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();
  for (const account of accounts) {
    console.log(account.address);
  }
});

export const networks = () => {
  const networks = {} as Map<Object>

  for (const name in chains) {
    networks[name] = {
      chainId: chains[name].id,
      url: chains[name].rpc,
      accounts: process.env.PRIVATE_MAIN
        ? process.env.PRIVATE_MAIN?.split(",")
        : [],
      tags: [],
      deploy: [`deploy/${chains[name].type}/`],
      verify: {
        etherscan: {
          apiKey: chains[name].etherscan,
        },
      },
    }
  }

  return networks
}

const config: HardhatUserConfig = {
  solidity: {
    compilers: [
      {
        version: "0.8.21",
        settings: {
          optimizer: {
            enabled: true,
            runs: 1000,
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
  // default chain is Arbitrum (L2)
  gasReporter: gasReportConfig(process.env.TEST_CHAIN ?? 'arbitrum'),
  networks: {
    hardhat: {
      tags: ["fork"],
      deploy: ["deploy/fork/"],
      forking: {
        url: chains[process.env.TEST_CHAIN ?? 'arbitrum'].rpc,
      },
    },
    ...networks()
  },
};

export default config;
