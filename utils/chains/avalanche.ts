import { Chain } from "../utils.types";

export const avalanche: Chain = {
    name: 'avalanche',
    id: 43114,
    token: 'AVAX',
    rpc: "https://api.avax.network/ext/bc/C/rpc",
    type: "mainnet",
    ////////////////////
    gasPriceApi: "https://api.snowtrace.io/api?module=proxy&action=eth_gasPrice",
    etherscan: process.env.AVALANCHE_API_KEY as string,
    isL1: true,
    isL2: false,
}