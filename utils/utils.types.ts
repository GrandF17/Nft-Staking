export type Map<Value> = {
    [key: string | number]: Value;
};

export interface Chain {
    name: string;
    id: number;
    token: string;
    ////////////////////
    gasPriceApi: string;
    etherscan: string;
    isL1: boolean;
    isL2: boolean;
}