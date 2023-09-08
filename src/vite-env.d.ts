/// <reference types="vite/client" />
declare module "pixi.js";

interface Ethereum {
    send: unknown;
    enable: () => Promise<string[]>;
    isMetaMask?: boolean;
    isTrust?: boolean;
    chainId: string;
    on?: (method: string, listener: (...args: unknown[]) => void) => void;
    removeListener?: (method: string, listener: (...args: unknown[]) => void) => void;
    selectedAddress: string | null;
    request(config: { method: string; params: unknown }): void;
    providers?: unknown[];
  }
  
  declare interface Window {
    ethereum?: Ethereum;
    bitkeep?: {
      ethereum?: Ethereum;
    };
    $onekey?: {
      ethereum?: Ethereum;
    };
    trustwallet?: {
      ethereum?: Ethereum;
    };
    okxwallet?: Ethereum;
    PIXI?: unknown;
  }
  
  type NumberLike = number | string;
  