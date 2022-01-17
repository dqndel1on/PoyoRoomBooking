import Web3Modal from "web3modal";
import { ethers } from 'ethers';
import create from 'zustand'

declare let window: any;

type EthersType = {
    accounts: string | boolean,
    contractAddress: string,
    setAccounts: (data) => void,
    requestAccounts: () => void,
    checkMMConnection: () => void,
    disconnectAccount: () => void
}

export const useEthers = create<EthersType>((set, get) => ({
    contractAddress: '0x8A791620dd6260079BF849Dc5567aDC3F2FdC318',
    accounts: false,
    setAccounts: (data) => set({ accounts: data }),
    disconnectAccount: async () => { },
    requestAccounts: async () => {
        const web3Modal = new Web3Modal({
            cacheProvider: true, // optional
        });
        const instance = await web3Modal.connect();
        const provider = new ethers.providers.Web3Provider(instance);
        const signer = provider.getSigner();
        await provider.send("eth_requestAccounts", []);
        set({ accounts: await signer.getAddress() })
    },
    checkMMConnection: async () => {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        if (provider) {
            const accounts = await provider.listAccounts();
            if (accounts.length !== 0) {
                void get().requestAccounts();
            } else {
                set({ accounts: accounts[0] })
            }

        }
    },
}))
