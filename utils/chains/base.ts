import { Chain } from "../utils.types";

export const base: Chain = {
    name: 'base',
    id: 8453,
    token: 'ETH',
    gasPriceApi: "https://api.base.etherscan.io/api?module=proxy&action=eth_gasPrice",
    etherscan: process.env.BASE_API_KEY as string,
    isL1: false,
    isL2: true,
}


