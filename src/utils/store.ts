import { writable } from 'svelte/store';
import Web3 from 'web3';

const env = import.meta.env;

export const network = writable('');
export const rpcUrl = writable(env.VITE_POLYGON_RPC_URL);
export const chainId = writable(env.NETWORK_ID);
export const dex = writable('');
export const takerAddress = writable('');
export let web3 = writable({});

let web3Instance: any;

rpcUrl.subscribe((value) => {
    web3Instance = new Web3(value);
    web3.set(web3Instance);
});

export function getWeb3() {
   return web3Instance;
}