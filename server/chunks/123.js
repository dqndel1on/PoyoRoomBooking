"use strict";
exports.id = 123;
exports.ids = [123];
exports.modules = {

/***/ 7123:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var web3modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2840);
/* harmony import */ var web3modal__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(web3modal__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _artifacts_contracts_PoyoRoomBook_sol_PoyoRoomBooking_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1554);
/* harmony import */ var zustand__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6912);
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1982);
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ethers__WEBPACK_IMPORTED_MODULE_3__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([zustand__WEBPACK_IMPORTED_MODULE_2__]);
zustand__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];




const usePoyo = (0,zustand__WEBPACK_IMPORTED_MODULE_2__["default"])((set, get)=>({
        branches: [],
        branchDetails: [],
        electionStarted: false,
        owner: '',
        totalBranches: 0,
        contractAddress: '0x2385F10cE8e0193CD049163d26eAfb4dfF85813d',
        getBranches: async (_branchId)=>{
            if (typeof window.ethereum !== 'undefined') {
                const web3Modal = new (web3modal__WEBPACK_IMPORTED_MODULE_0___default())({
                    cacheProvider: true
                });
                const instance = await web3Modal.connect();
                const provider = new ethers__WEBPACK_IMPORTED_MODULE_3__.ethers.providers.Web3Provider(instance);
                const contract = new ethers__WEBPACK_IMPORTED_MODULE_3__.ethers.Contract(get().contractAddress, _artifacts_contracts_PoyoRoomBook_sol_PoyoRoomBooking_json__WEBPACK_IMPORTED_MODULE_1__/* .abi */ .Mt, provider);
                try {
                    const data1 = await contract.motelBranches(_branchId);
                    set((prev)=>{
                        const branches = [
                            ...prev.branches,
                            data1
                        ];
                        const stringArray = branches.map((branch)=>JSON.stringify(branch)
                        );
                        const uniqueStringArray = new Set(stringArray);
                        const uniqueArray = Array.from(uniqueStringArray, (data)=>JSON.parse(data)
                        );
                        return {
                            branches: uniqueArray
                        };
                    });
                } catch (err) {
                    console.log(err.message);
                }
            }
        },
        addBranch: async (data)=>{
            if (typeof window.ethereum !== 'undefined') {
                const provider = new ethers__WEBPACK_IMPORTED_MODULE_3__.ethers.providers.Web3Provider(window.ethereum);
                const signer = provider.getSigner();
                const contract = new ethers__WEBPACK_IMPORTED_MODULE_3__.ethers.Contract(get().contractAddress, _artifacts_contracts_PoyoRoomBook_sol_PoyoRoomBooking_json__WEBPACK_IMPORTED_MODULE_1__/* .abi */ .Mt, signer);
                try {
                    const transaction = await contract.addBranch(data._branchId, data._totalRooms, data._branchName);
                    await transaction.wait();
                    get().getInitialData();
                } catch (err) {
                    console.log(err);
                }
            }
        },
        updateBranch: async (data)=>{
            if (typeof window.ethereum !== 'undefined') {
                const provider = new ethers__WEBPACK_IMPORTED_MODULE_3__.ethers.providers.Web3Provider(window.ethereum);
                const signer = provider.getSigner();
                const contract = new ethers__WEBPACK_IMPORTED_MODULE_3__.ethers.Contract(get().contractAddress, _artifacts_contracts_PoyoRoomBook_sol_PoyoRoomBooking_json__WEBPACK_IMPORTED_MODULE_1__/* .abi */ .Mt, signer);
                try {
                    console.log(data);
                    const transaction = await contract.updateBranchDetails(data._branchId, data._totalRooms, data._branchName);
                    await transaction.wait();
                } catch (err) {
                    console.log(err);
                }
            }
        },
        deleteBranch: async (_branchId)=>{
            if (typeof window.ethereum !== 'undefined') {
                const provider = new ethers__WEBPACK_IMPORTED_MODULE_3__.ethers.providers.Web3Provider(window.ethereum);
                const signer = provider.getSigner();
                const contract = new ethers__WEBPACK_IMPORTED_MODULE_3__.ethers.Contract(get().contractAddress, _artifacts_contracts_PoyoRoomBook_sol_PoyoRoomBooking_json__WEBPACK_IMPORTED_MODULE_1__/* .abi */ .Mt, signer);
                try {
                    const transaction = await contract.deleteBranch(_branchId);
                    await transaction.wait();
                    get().getInitialData();
                } catch (err) {
                    console.log(err);
                }
            }
        },
        getInitialData: async ()=>{
            if (typeof window.ethereum !== 'undefined') {
                const provider = new ethers__WEBPACK_IMPORTED_MODULE_3__.ethers.providers.Web3Provider(window.ethereum);
                const contract = new ethers__WEBPACK_IMPORTED_MODULE_3__.ethers.Contract(get().contractAddress, _artifacts_contracts_PoyoRoomBook_sol_PoyoRoomBooking_json__WEBPACK_IMPORTED_MODULE_1__/* .abi */ .Mt, provider);
                try {
                    console.log(contract);
                    const owner = await contract.owner();
                    const totalBranches = Number(await contract.totalBranches());
                    set({
                        owner,
                        totalBranches
                    });
                } catch (err) {
                    throw new Error(err.message);
                }
            }
        },
        getBranchDetails: async (_branchId)=>{
            if (typeof window.ethereum !== 'undefined') {
                const provider = new ethers__WEBPACK_IMPORTED_MODULE_3__.ethers.providers.Web3Provider(window.ethereum);
                const signer = provider.getSigner();
                const contract = new ethers__WEBPACK_IMPORTED_MODULE_3__.ethers.Contract(get().contractAddress, _artifacts_contracts_PoyoRoomBook_sol_PoyoRoomBooking_json__WEBPACK_IMPORTED_MODULE_1__/* .abi */ .Mt, signer);
                try {
                    const branchDetails = await contract.motelBranches(_branchId);
                    set({
                        branchDetails
                    });
                } catch (err) {
                    console.log(err);
                }
            }
        },
        checkIn: async (data)=>{
            if (typeof window.ethereum !== 'undefined') {
                const provider = new ethers__WEBPACK_IMPORTED_MODULE_3__.ethers.providers.Web3Provider(window.ethereum);
                const signer = provider.getSigner();
                const contract = new ethers__WEBPACK_IMPORTED_MODULE_3__.ethers.Contract(get().contractAddress, _artifacts_contracts_PoyoRoomBook_sol_PoyoRoomBooking_json__WEBPACK_IMPORTED_MODULE_1__/* .abi */ .Mt, signer);
                try {
                    const transaction = await contract.checkIn(data._roomNumber, data._branchId, data._branchName, data._time, data._usedBy, {
                        from: data._account,
                        value: ethers__WEBPACK_IMPORTED_MODULE_3__.ethers.utils.parseEther(Number(0.1).toString()).toHexString()
                    });
                    await transaction.wait();
                    get().getInitialData();
                } catch (err) {
                    console.log(err);
                }
            }
        },
        checkOut: async (data)=>{
            if (typeof window.ethereum !== 'undefined') {
                const provider = new ethers__WEBPACK_IMPORTED_MODULE_3__.ethers.providers.Web3Provider(window.ethereum);
                const signer = provider.getSigner();
                const contract = new ethers__WEBPACK_IMPORTED_MODULE_3__.ethers.Contract(get().contractAddress, _artifacts_contracts_PoyoRoomBook_sol_PoyoRoomBooking_json__WEBPACK_IMPORTED_MODULE_1__/* .abi */ .Mt, signer);
                try {
                    const transaction = await contract.checkOut(data._branchName, data._branchId, data._roomNumber);
                    await transaction.wait();
                    get().getInitialData();
                } catch (err) {
                    console.log(err);
                }
            }
        }
    })
);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (usePoyo);

});

/***/ }),

/***/ 1554:
/***/ ((module) => {

module.exports = JSON.parse('{"Mt":[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[{"internalType":"uint256","name":"_branchId","type":"uint256"},{"internalType":"uint256","name":"_totalRooms","type":"uint256"},{"internalType":"string","name":"_branchName","type":"string"}],"name":"addBranch","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"addressToAmountFunded","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_roomNumber","type":"uint256"},{"internalType":"uint256","name":"_branchId","type":"uint256"},{"internalType":"string","name":"_branchName","type":"string"},{"internalType":"uint256","name":"_time","type":"uint256"},{"internalType":"string","name":"_usedBy","type":"string"}],"name":"checkIn","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"string","name":"_branchName","type":"string"},{"internalType":"uint256","name":"_branchId","type":"uint256"},{"internalType":"uint256","name":"_roomNumber","type":"uint256"}],"name":"checkOut","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"","type":"string"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"customers","outputs":[{"internalType":"bool","name":"isOccupied","type":"bool"},{"internalType":"uint256","name":"roomNumber","type":"uint256"},{"internalType":"uint256","name":"time","type":"uint256"},{"internalType":"string","name":"usedBy","type":"string"},{"internalType":"address","name":"bookingAddress","type":"address"},{"internalType":"string","name":"branch","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_id","type":"uint256"}],"name":"deleteBranch","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"getConversionRate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getLatestPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"_branchName","type":"string"},{"internalType":"uint256","name":"_roomNumber","type":"uint256"}],"name":"getRoomStatus","outputs":[{"components":[{"internalType":"bool","name":"isOccupied","type":"bool"},{"internalType":"uint256","name":"roomNumber","type":"uint256"},{"internalType":"uint256","name":"time","type":"uint256"},{"internalType":"string","name":"usedBy","type":"string"},{"internalType":"address","name":"bookingAddress","type":"address"},{"internalType":"string","name":"branch","type":"string"}],"internalType":"struct PoyoRoomBooking.roomStatus","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"motelBranches","outputs":[{"internalType":"string","name":"branchName","type":"string"},{"internalType":"uint256","name":"totalRooms","type":"uint256"},{"internalType":"uint256","name":"branchId","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address payable","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalBranches","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_branchId","type":"uint256"},{"internalType":"string","name":"_branchName","type":"string"},{"internalType":"uint256","name":"_totalRooms","type":"uint256"}],"name":"updateBranchDetails","outputs":[],"stateMutability":"nonpayable","type":"function"}]}');

/***/ })

};
;