export type Map<Value> = {
    [key: string | number]: Value;
};

export interface Chain {
    name: string;
    id: number;
    token: string;
    rpc: string;
    type: "mainnet" | "testnet" | "devnet";
    ////////////////////
    gasPriceApi: string;
    etherscan: string;
    isL1: boolean;
    isL2: boolean;
}