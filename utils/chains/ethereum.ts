import { Chain } from "../utils.types";

export const ethereum: Chain = {
    name: 'ethereum',
    id: 1,
    token: 'ETH',
    rpc: "https://rpc.ankr.com/eth",
    type: "mainnet",
    ////////////////////
    gasPriceApi: "https://api.etherscan.io/api?module=proxy&action=eth_gasPrice",
    etherscan: process.env.ETH_API_KEY as string,
    isL1: true,
    isL2: false,
}