import { Chain } from "../utils.types";

export const arbitrum: Chain = {
    name: 'arbitrum',
    id: 42161,
    token: 'ETH',
    ////////////////////
    gasPriceApi: "https://api.arbiscan.io/api?module=proxy&action=eth_gasPrice",
    etherscan: process.env.ARB_API_KEY as string,
    isL1: false,
    isL2: true,
}