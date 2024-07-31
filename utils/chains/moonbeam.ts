import { Chain } from "../utils.types";

export const moonbeam: Chain = {
    name: 'moonbeam',
    id: 1284,
    token: 'GLMR',
    rpc: "https://moonbeam.drpc.org",
    type: "mainnet",
    ////////////////////
    gasPriceApi: "https://api-moonbeam.moonscan.io/api?module=proxy&action=eth_gasPrice",
    etherscan: process.env.MOONBEAM_API_KEY as string,
    isL1: true,
    isL2: false,
}
