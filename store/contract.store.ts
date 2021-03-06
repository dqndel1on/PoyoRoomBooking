import Web3Modal from "web3modal";
import Poyo from '../artifacts/contracts/_PoyoRoomBook.sol/PoyoRoomBooking.json';
import create from 'zustand'
import { ethers } from 'ethers';
import { useEthers } from "./ethers.store";

declare let window: any;
type PoyoTypes = {
    branches: any,
    contractAddress: string;
    electionStarted: boolean,
    owner: string,
    totalBranches: number,
    branchDetails: any,
    getInitialData: () => void,
    getBranches: (_branchId: number) => void;
    addBranch: (data: { _branchId: number, _totalRooms: number, _branchName: string }) => void,
    updateBranch: (data: { _branchId: number, _totalRooms: number, _branchName: string }) => void,
    deleteBranch: (_branchId: number) => void,
    getBranchDetails: (_branchId: number) => void,
    checkIn: (data: { _account: string, _roomNumber: number, _branchId: number, _branchName: string, _time: number, _usedBy: string }) => void,
    checkOut: (data: { _branchName: string, _branchId: number, _roomNumber }) => void
}

const usePoyo = create<PoyoTypes>((set, get) => ({
    branches: [],
    branchDetails: [],
    electionStarted: false,
    owner: '',
    totalBranches: 0,
    contractAddress: '0x2385F10cE8e0193CD049163d26eAfb4dfF85813d',
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
    deleteBranch: async (_branchId) => {
        if (typeof window.ethereum !== 'undefined') {
            const provider = new ethers.providers.Web3Provider(window.ethereum)
            const signer = provider.getSigner()
            const contract = new ethers.Contract(get().contractAddress, Poyo.abi, signer)
            try {
                const transaction = await contract.deleteBranch(_branchId)
                await transaction.wait()
                get().getInitialData()
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
                console.log(contract)
                const owner = await contract.owner();
                const totalBranches = Number(await contract.totalBranches());
                set({ owner, totalBranches });
            } catch (err) {
                throw new Error(err.message)
            }
        }
    },
    getBranchDetails: async (_branchId) => {
        if (typeof window.ethereum !== 'undefined') {
            const provider = new ethers.providers.Web3Provider(window.ethereum)
            const signer = provider.getSigner()
            const contract = new ethers.Contract(get().contractAddress, Poyo.abi, signer)
            try {
                const branchDetails = await contract.motelBranches(_branchId)
                set({ branchDetails })
            } catch (err) {
                console.log(err)
            }
        }
    },
    checkIn: async (data) => {
        if (typeof window.ethereum !== 'undefined') {
            const provider = new ethers.providers.Web3Provider(window.ethereum)
            const signer = provider.getSigner()
            const contract = new ethers.Contract(get().contractAddress, Poyo.abi, signer)
            try {
                const transaction = await contract.checkIn(data._roomNumber, data._branchId, data._branchName, data._time, data._usedBy, {
                    from: data._account,
                    value: ethers.utils.parseEther((Number(0.1)).toString()).toHexString()
                })
                await transaction.wait()
                get().getInitialData()
            } catch (err) {
                console.log(err)
            }
        }
    },
    checkOut: async (data) => {
        if (typeof window.ethereum !== 'undefined') {
            const provider = new ethers.providers.Web3Provider(window.ethereum)
            const signer = provider.getSigner()
            const contract = new ethers.Contract(get().contractAddress, Poyo.abi, signer)
            try {
                const transaction = await contract.checkOut(data._branchName, data._branchId, data._roomNumber)
                await transaction.wait()
                get().getInitialData()
            } catch (err) {
                console.log(err)
            }
        }
    },
}))

export default usePoyo;