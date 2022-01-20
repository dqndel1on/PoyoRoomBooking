"use strict";
exports.id = 86;
exports.ids = [86];
exports.modules = {

/***/ 9086:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "K": () => (/* binding */ useEthers)
/* harmony export */ });
/* harmony import */ var web3modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2840);
/* harmony import */ var web3modal__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(web3modal__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1982);
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ethers__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var zustand__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6912);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([zustand__WEBPACK_IMPORTED_MODULE_2__]);
zustand__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];



const useEthers = (0,zustand__WEBPACK_IMPORTED_MODULE_2__["default"])((set, get)=>({
        contractAddress: '0x2385F10cE8e0193CD049163d26eAfb4dfF85813d',
        accounts: '',
        setAccounts: (data)=>set({
                accounts: data
            })
        ,
        disconnectAccount: async ()=>{
        },
        requestAccounts: async ()=>{
            const web3Modal = new (web3modal__WEBPACK_IMPORTED_MODULE_0___default())({
                cacheProvider: true
            });
            const instance = await web3Modal.connect();
            const provider = new ethers__WEBPACK_IMPORTED_MODULE_1__.ethers.providers.Web3Provider(instance);
            const signer = provider.getSigner();
            await provider.send("eth_requestAccounts", []);
            set({
                accounts: await signer.getAddress()
            });
        },
        checkMMConnection: async ()=>{
            const provider = new ethers__WEBPACK_IMPORTED_MODULE_1__.ethers.providers.Web3Provider(window.ethereum);
            if (provider) {
                const accounts = await provider.listAccounts();
                if (accounts.length !== 0) {
                    void get().requestAccounts();
                } else {
                    set({
                        accounts: accounts[0]
                    });
                }
            }
        }
    })
);

});

/***/ })

};
;