import { Chain } from "../utils.types";

export const binance: Chain = {
    name: 'binance',
    id: 56,
    token: 'BNB',
    gasPriceApi: "https://api.bscscan.com/api?module=proxy&action=eth_gasPrice",
    etherscan: process.env.BINANCE_API_KEY as string,
    isL1: true,
    isL2: false,
}