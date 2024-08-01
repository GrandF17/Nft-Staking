import {
    arbitrum,
    avalanche,
    base,
    binance,
    ethereum,
    fantom,
    gnosis,
    optimism,
    moonbeam,
    moonriver,
    polygon,
    octa,
    binance_test,
} from "@/utils/chains/_chains.export";
import { Chain, Map } from "@/utils/utils.types";

export const chains: Map<Chain> = {
    "arbitrum": arbitrum,
    "avalanche": avalanche,
    "base": base,
    "binance_test": binance_test,
    "binance": binance,
    "ethereum": ethereum,
    "fantom": fantom,
    "gnosis": gnosis,
    "moonbeam": moonbeam,
    "moonriver": moonriver,
    "octa": octa,
    "optimism": optimism,
    "polygon": polygon
};
