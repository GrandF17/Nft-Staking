import { Chain } from "../utils.types";

export const polygon: Chain = {
    name: 'polygon',
    id: 137,
    token: 'MATIC',
    gasPriceApi: "https://api.polygonscan.com/api?module=proxy&action=eth_gasPrice",
    etherscan: process.env.POLYGON_API_KEY as string,
    isL1: false,
    isL2: true,
}
