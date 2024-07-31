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
    binanceT,
} from "@/utils/chains/_chains.export";
import { Chain, Map } from "@/utils/utils.types";

export const chains: Map<Chain> = {
    "arbitrum": arbitrum,
    "avalanche": avalanche,
    "base": base,
    "binanceT": binanceT,
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
