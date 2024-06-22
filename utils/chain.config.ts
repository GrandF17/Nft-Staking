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
} from "./chains/_chains.export";
import { Chain, Map } from "./utils.types";

export const chains: Map<Chain> = {
    "arbitrum": arbitrum,
    "avalanche": avalanche,
    "base": base,
    "binance": binance,
    "ethereum": ethereum,
    "fantom": fantom,
    "gnosis": gnosis,
    "moonbeam": moonbeam,
    "moonriver": moonriver,
    "optimism": optimism,
    "polygon": polygon,
};
