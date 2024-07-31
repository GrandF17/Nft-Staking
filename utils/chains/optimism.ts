import { Chain } from "../utils.types";

export const optimism: Chain = {
    name: 'optimism',
    id: 10,
    token: 'ETH',
    rpc: "https://rpc.ankr.com/optimism",
    type: "mainnet",
    ////////////////////
    gasPriceApi: "https://api-optimistic.etherscan.io/api?module=proxy&action=eth_gasPrice",
    etherscan: process.env.OPTIMISM_API_KEY as string,
    isL1: false,
    isL2: true,
}
