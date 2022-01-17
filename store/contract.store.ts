import Web3Modal from "web3modal";
import Poyo from '../artifacts/contracts/_PoyoRoomBook.sol/PoyoRoomBooking.json';
import create from 'zustand'
import { ethers } from 'ethers';

declare let window: any;
type PoyoTypes = {
    branches: any,
    contractAddress: string;
    electionStarted: boolean,
    owner: string,
    minimumAmount: number,
    totalBranches: number,
    getInitialData: () => void,
    getBranches: (_branchId: number) => void;
    addBranch: (data: { _branchId: number, _totalRooms: number, _branchName: string }) => void,
    updateBranch: (data: { _branchId: number, _totalRooms: number, _branchName: string }) => void,
}

const usePoyo = create<PoyoTypes>((set, get) => ({
    branches: [],
    electionStarted: false,
    owner: '',
    minimumAmount: 0,
    totalBranches: 0,
    contractAddress: '0x8A791620dd6260079BF849Dc5567aDC3F2FdC318',
    getBranches: async (_branchId: number) => {
        if (typeof window.ethereum !== 'undefined') {
            const web3Modal = new Web3Modal({
                cacheProvider: true, // optional
            });
            const instance = await web3Modal.connect();
            const provider = new ethers.providers.Web3Provider(instance);
            const contract = new ethers.Contract(get().contractAddress, Poyo.abi, provider)
            try {
                const data = await contract.motelBranches(_branchId)
                set((prev) => {
                    const branches = [...prev.branches, data]
                    const stringArray = branches.map(branch => JSON.stringify(branch));
                    const uniqueStringArray = new Set(stringArray);
                    const uniqueArray = Array.from(uniqueStringArray, data => JSON.parse(data));
                    return { branches: uniqueArray }
                })
            } catch (err) {
                console.log(err.message)
            }
        }
    },
    addBranch: async (data) => {
        if (typeof window.ethereum !== 'undefined') {
            const provider = new ethers.providers.Web3Provider(window.ethereum)
            const signer = provider.getSigner()
            const contract = new ethers.Contract(get().contractAddress, Poyo.abi, signer)
            try {
                const transaction = await contract.addBranch(data._branchId, data._totalRooms, data._branchName)
                await transaction.wait()
                get().getInitialData()
            } catch (err) {
                console.log(err)
            }
        }
    },
    updateBranch: async (data) => {
        if (typeof window.ethereum !== 'undefined') {
            const provider = new ethers.providers.Web3Provider(window.ethereum)
            const signer = provider.getSigner()
            const contract = new ethers.Contract(get().contractAddress, Poyo.abi, signer)
            try {
                console.log(data)
                const transaction = await contract.updateBranchDetails(data._branchId, data._totalRooms, data._branchName)
                await transaction.wait()
            } catch (err) {
                console.log(err)
            }
        }
    },
    getInitialData: async () => {
        if (typeof window.ethereum !== 'undefined') {
            const provider = new ethers.providers.Web3Provider(window.ethereum)
            const contract = new ethers.Contract(get().contractAddress, Poyo.abi, provider)
            try {
                const minimumAmount = Number(await contract.minimumAmount());
                const owner = await contract.owner();
                const totalBranches = Number(await contract.totalBranches());
                set({ minimumAmount, owner, totalBranches });
            } catch (err) {
                throw new Error(err.message)
            }
        }
    },

}))

export default usePoyo;