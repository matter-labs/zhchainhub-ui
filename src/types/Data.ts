export interface ChainData {
  name: string;
  chainId: number;
  website: string;
  explorer: string;
  launchDate: string;
  environment: string;
  nativeToken: string;
  chainType: string;
  lastBlock: number;
  lastBlockVerified: number;
  transactionsPerSecond: number;
  totalBatchesCommitted: number;
  totalBatchesExecuted: number;
  totalBatchesVerified: number;
  averageBlockTime: number;
  tvl: {
    [token: string]: {
      value: number;
      address: string;
    };
  };
  rpcs: {
    status: string;
    url: string;
  }[];
  feeParams: {
    batchOverheadL1Gas: number;
    computeOverheadPart: number;
    maxGasPerBatch: number;
  };
}

export interface ecosystemChainData {
  name: string;
  id: number;
  nativeToken: string;
  tvl: {
    [token: string]: number;
  };
  type: string;
}

export interface EcosystemData {
  chains: ecosystemChainData[];
  tvl: {
    [token: string]: number;
  }[];
}
