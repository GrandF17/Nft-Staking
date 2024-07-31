import { Chain } from "../utils.types";

export const octa: Chain = {
    name: 'OctaSpace',
    id: 800001,
    token: 'OCTA',
    rpc: "https://rpc.octa.space",
    type: "mainnet",
    ////////////////////
    gasPriceApi: "",
    etherscan: process.env.OCTA_API_KEY as string,
    isL1: true,
    isL2: false,
}