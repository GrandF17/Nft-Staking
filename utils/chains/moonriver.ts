import { Chain } from "../utils.types";

export const moonriver: Chain = {
    name: 'moonriver',
    id: 1285,
    token: 'MOVR',
    rpc: "https://moonriver.drpc.org/",
    type: "mainnet",
    ////////////////////
    gasPriceApi: "https://api-moonriver.moonscan.io/api?module=proxy&action=eth_gasPrice",
    etherscan: process.env.MOONRIVER_API_KEY as string,
    isL1: true,
    isL2: false,
}
