"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/expertise.js":
/*!**************************!*\
  !*** ./src/expertise.js ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nvar _this = undefined;\nvar Expertise = function(param) {\n    var expert = param.expert;\n    var _this1 = _this;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"bg-[#40435C] md:max-w-5xl md:mx-auto \",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"grid grid-gap-6 grid-cols-2 md:grid-cols-4 place-items-center py-10 md:py-4\",\n                    children: expert.quality.map(function(item) {\n                        /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex flex-col p-6 py-10 justify-center items-center md:hover:bg-gradient-to-l from-[#7BC5A0] via-[#42929D] to-[#42929D] md:hover:w-[200px] md:hover:translate-y-[-20]\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    src: item.icon,\n                                    alt: \"quality service\",\n                                    className: \"h-40 bg-[#4c5070] rounded-full my-10\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\private\\\\sidehustle\\\\dxl\\\\src\\\\expertise.js\",\n                                    lineNumber: 8,\n                                    columnNumber: 25\n                                }, _this1),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"text-white w-2/3 text-center\",\n                                    children: item.text\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\private\\\\sidehustle\\\\dxl\\\\src\\\\expertise.js\",\n                                    lineNumber: 9,\n                                    columnNumber: 25\n                                }, _this1)\n                            ]\n                        }, item.icon, true, {\n                            fileName: \"D:\\\\private\\\\sidehustle\\\\dxl\\\\src\\\\expertise.js\",\n                            lineNumber: 7,\n                            columnNumber: 25\n                        }, _this1);\n                    })\n                }, void 0, false, {\n                    fileName: \"D:\\\\private\\\\sidehustle\\\\dxl\\\\src\\\\expertise.js\",\n                    lineNumber: 5,\n                    columnNumber: 17\n                }, _this)\n            }, void 0, false, {\n                fileName: \"D:\\\\private\\\\sidehustle\\\\dxl\\\\src\\\\expertise.js\",\n                lineNumber: 4,\n                columnNumber: 13\n            }, _this)\n        }, void 0, false, {\n            fileName: \"D:\\\\private\\\\sidehustle\\\\dxl\\\\src\\\\expertise.js\",\n            lineNumber: 3,\n            columnNumber: 9\n        }, _this)\n    }, void 0, false));\n};\n_c = Expertise;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Expertise);\nvar _c;\n$RefreshReg$(_c, \"Expertise\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZXhwZXJ0aXNlLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsR0FBSyxDQUFDQSxTQUFTLEdBQUUsUUFBUSxRQUFJLENBQUM7UUFBWEMsTUFBTSxTQUFOQSxNQUFNOztJQUNyQixNQUFNOzhGQUNEQyxDQUFHO1lBQUNDLFNBQVMsRUFBQyxDQUF3QztrR0FDbERELENBQUc7c0dBQ0NBLENBQUc7b0JBQUNDLFNBQVMsRUFBQyxDQUE2RTs4QkFDdkZGLE1BQU0sQ0FBQ0csT0FBTyxDQUFDQyxHQUFHLENBQUNDLFFBQVEsQ0FBUkEsSUFBSTtzQ0FDcEIsTUFBTSwrREFBTEosQ0FBRzs0QkFBaUJDLFNBQVMsRUFBQyxDQUF1Szs7NEdBQ3JNSSxDQUFHO29DQUFDQyxHQUFHLEVBQUVGLElBQUksQ0FBQ0csSUFBSTtvQ0FBRUMsR0FBRyxFQUFDLENBQWlCO29DQUFDUCxTQUFTLEVBQUMsQ0FBc0M7Ozs7Ozs0R0FDMUZRLENBQUM7b0NBQUNSLFNBQVMsRUFBQyxDQUE4Qjs4Q0FBRUcsSUFBSSxDQUFDTSxJQUFJOzs7Ozs7OzJCQUY1Q04sSUFBSSxDQUFDRyxJQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBVTNDLENBQUM7S0FoQktULFNBQVM7QUFrQmYsK0RBQWVBLFNBQVMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2V4cGVydGlzZS5qcz84NDlkIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IEV4cGVydGlzZSA9KHtleHBlcnR9KT0+e1xyXG4gICAgcmV0dXJuIDw+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1bIzQwNDM1Q10gbWQ6bWF4LXctNXhsICBtZDpteC1hdXRvIFwiPlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtZ2FwLTYgZ3JpZC1jb2xzLTIgbWQ6Z3JpZC1jb2xzLTQgcGxhY2UtaXRlbXMtY2VudGVyIHB5LTEwIG1kOnB5LTRcIj5cclxuICAgICAgICAgICAgICAgICAgICB7ZXhwZXJ0LnF1YWxpdHkubWFwKGl0ZW0gPT4oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpdGVtLmljb259IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgcC02IHB5LTEwIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBtZDpob3ZlcjpiZy1ncmFkaWVudC10by1sIGZyb20tWyM3QkM1QTBdIHZpYS1bIzQyOTI5RF0gdG8tWyM0MjkyOURdIG1kOmhvdmVyOnctWzIwMHB4XSBtZDpob3Zlcjp0cmFuc2xhdGUteS1bLTIwXVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17aXRlbS5pY29ufSBhbHQ9XCJxdWFsaXR5IHNlcnZpY2VcIiBjbGFzc05hbWU9XCJoLTQwIGJnLVsjNGM1MDcwXSByb3VuZGVkLWZ1bGwgbXktMTBcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtd2hpdGUgdy0yLzMgdGV4dC1jZW50ZXJcIj57aXRlbS50ZXh0fTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICBcclxuICAgIDwvPlxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBFeHBlcnRpc2UiXSwibmFtZXMiOlsiRXhwZXJ0aXNlIiwiZXhwZXJ0IiwiZGl2IiwiY2xhc3NOYW1lIiwicXVhbGl0eSIsIm1hcCIsIml0ZW0iLCJpbWciLCJzcmMiLCJpY29uIiwiYWx0IiwicCIsInRleHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/expertise.js\n");

/***/ })

});