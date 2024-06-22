import { Chain } from "../utils.types";

export const gnosis: Chain = {
    name: 'gnosis',
    id: 100,
    token: 'xDAI',
    gasPriceApi: "https://blockscout.com/xdai/mainnet/api?module=proxy&action=eth_gasPrice",
    etherscan: process.env.GNOSIS_API_KEY as string,
    isL1: true,
    isL2: false,
}
