"use strict";
(() => {
var exports = {};
exports.id = 820;
exports.ids = [820];
exports.modules = {

/***/ 6972:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Page),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: external "next/error"
const error_namespaceObject = require("next/error");
var error_default = /*#__PURE__*/__webpack_require__.n(error_namespaceObject);
;// CONCATENATED MODULE: ./pages/_error.tsx


async function getServerSideProps() {
    const res = await fetch('https://api.github.com/repos/vercel/next.js');
    const errorCode = res.ok ? false : res === null || res === void 0 ? void 0 : res.statusCode;
    const json = await res.json();
    return {
        props: {
            errorCode,
            stars: json.stargazers_count
        }
    };
}
function Page({ errorCode , stars  }) {
    if (errorCode) {
        return(/*#__PURE__*/ jsx_runtime_.jsx((error_default()), {
            statusCode: errorCode
        }));
    }
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            "Next stars: ",
            stars
        ]
    }));
};


/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(6972));
module.exports = __webpack_exports__;

})();