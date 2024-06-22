import { GasReporterOptions } from "hardhat-gas-reporter/dist/types"
import { chains } from "./chain.config";
import { Chain } from "./utils.types";

const L2Chain = (chain: Chain): GasReporterOptions => {
    return {
        enabled: true,
        currency: 'USD',
        coinmarketcap: process.env.CMC_API_KEY,
        ///////////////////////////////////////
        token: chain.token,
        gasPriceApi: chain.gasPriceApi,
        L2: chain.name as GasReporterOptions["L2"],
        L2Etherscan: chain.etherscan,
    };
}

const L1Chain = (chain: Chain): GasReporterOptions => {
    return {
        enabled: true,
        currency: 'USD',
        coinmarketcap: process.env.CMC_API_KEY,
        ///////////////////////////////////////
        token: chain.token,
        gasPriceApi: chain.gasPriceApi,
        L1: chain.name as GasReporterOptions["L1"],
        L1Etherscan: chain.etherscan,
    };
}

export const gasReportConfig = (chainName?: string): GasReporterOptions => {
    if (!chainName) return { enabled: false };
    const chain: Chain = chains[chainName];

    return chain.isL1 ? L1Chain(chain) : L2Chain(chain);
}