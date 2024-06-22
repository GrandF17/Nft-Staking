import { Chain } from "../utils.types";

export const fantom: Chain = {
    name: 'fantom',
    id: 250,
    token: 'FTM',
    gasPriceApi: "https://api.ftmscan.com/api?module=proxy&action=eth_gasPrice",
    etherscan: process.env.FANTOM_API_KEY as string,
    isL1: true,
    isL2: false,
}
