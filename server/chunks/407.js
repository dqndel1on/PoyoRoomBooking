"use strict";
exports.id = 407;
exports.ids = [407];
exports.modules = {

/***/ 2407:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4041);
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_icons_md__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _store_contract_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7123);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_store_contract_store__WEBPACK_IMPORTED_MODULE_5__]);
_store_contract_store__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];






const BranchCard = ({ branch  })=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const { deleteBranch  } = (0,_store_contract_store__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)();
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "w-96 h-auto text-pink-600 mt-5 border hover:shadow-2xl transition-all duration-300 ease-in",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_1__["default"], {
                href: `/branch/${Number(branch[2].hex)}`,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                    src: "../branch.jpg"
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "p-2",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_1__["default"], {
                        href: `/branch/${branch[0]}`,
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
                            className: "text-2xl cursor-pointer font-black",
                            children: [
                                "0",
                                Number(branch[2].hex),
                                ", ",
                                branch[0]
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex justify-between flex-wrap mt-2 text-lg font-bold",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h2", {
                                className: "flex items-center",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_md__WEBPACK_IMPORTED_MODULE_4__.MdLocationPin, {
                                        className: "mr-2 w-6 h-6"
                                    }),
                                    " ",
                                    branch[0]
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h2", {
                                className: "flex items-center",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_md__WEBPACK_IMPORTED_MODULE_4__.MdOutlineBedroomParent, {
                                        className: "mr-2 w-6 h-6"
                                    }),
                                    Number(branch[1].hex)
                                ]
                            })
                        ]
                    }),
                    router.pathname === '/admin' && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        onClick: ()=>deleteBranch(Number(branch[2].hex))
                        ,
                        className: "mt-4 bg-pink-600 text-white px-3 py-2 rounded-md",
                        children: "Remove Branch"
                    })
                ]
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BranchCard);

});

/***/ })

};
;