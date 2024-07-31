import { Chain } from "../utils.types";

export const binanceT: Chain = {
    name: 'binance',
    id: 97,
    token: 'BNB',
    rpc: "https://data-seed-prebsc-1-s1.binance.org:8545/",
    type: "testnet",
    ////////////////////
    gasPriceApi: "https://api.bscscan.com/api?module=proxy&action=eth_gasPrice",
    etherscan: process.env.BINANCE_API_KEY as string,
    isL1: true,
    isL2: false,
}