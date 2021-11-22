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

/***/ "./components/Nav.js":
/*!***************************!*\
  !*** ./components/Nav.js ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _utils_requests__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/requests */ \"./utils/requests.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _e = undefined;\n    try {\n        for(var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true){\n            _arr.push(_s.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();\n}\nvar _s1 = $RefreshSig$();\nfunction Nav() {\n    var _this = this;\n    _s1();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"nav\", {\n        className: \"relative\",\n        __source: {\n            fileName: \"/Users/chadlew/Desktop/expert-waffle/components/Nav.js\",\n            lineNumber: 6,\n            columnNumber: 9\n        },\n        __self: this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                className: \"flex px-10 sm:px-20 text-2xl whitespace-nowrap space-x-10 sm:space-x-20 overflow-x-scroll scrollbar-hide\",\n                __source: {\n                    fileName: \"/Users/chadlew/Desktop/expert-waffle/components/Nav.js\",\n                    lineNumber: 7,\n                    columnNumber: 12\n                },\n                __self: this,\n                children: Object.entries(_utils_requests__WEBPACK_IMPORTED_MODULE_1__[\"default\"]).map(function(param) {\n                    var _param = _slicedToArray(param, 2), key = _param[0], ref = _param[1], title = ref.title, url = ref.url;\n                    /*#__PURE__*/ return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h2\", {\n                        onClick: function() {\n                            return router.push(\"?genre=\".concat(key));\n                        },\n                        className: \"last:pr-24 cursor-pointer transition duration-100 transform hover:scale-125 hover:text-white active:text-red-500\",\n                        __source: {\n                            fileName: \"/Users/chadlew/Desktop/expert-waffle/components/Nav.js\",\n                            lineNumber: 9,\n                            columnNumber: 16\n                        },\n                        __self: _this,\n                        children: title\n                    }, key);\n                })\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                className: \"absolute top-0 right-0 bg-gradient-to-l from-[#06202A] h-10 w-1/12\",\n                __source: {\n                    fileName: \"/Users/chadlew/Desktop/expert-waffle/components/Nav.js\",\n                    lineNumber: 12,\n                    columnNumber: 16\n                },\n                __self: this\n            })\n        ]\n    }));\n}\n_s1(Nav, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Nav;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Nav);\nvar _c;\n$RefreshReg$(_c, \"Nav\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL05hdi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUF3QztBQUNIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7U0FDNUJFLEdBQUcsR0FBRyxDQUFDOzs7SUFDWixHQUFLLENBQUNDLE1BQU0sR0FBR0Ysc0RBQVM7SUFDeEIsTUFBTSx1RUFDREcsQ0FBRztRQUFDQyxTQUFTLEVBQUMsQ0FBVTs7Ozs7Ozs7aUZBQ3JCQyxDQUFHO2dCQUFDRCxTQUFTLEVBQUMsQ0FBMEc7Ozs7Ozs7MEJBQ3BIRSxNQUFNLENBQUNDLE9BQU8sQ0FBQ1IsdURBQVEsRUFBRVMsR0FBRyxDQUFDLFFBQVFDOzJEQUFOQyxHQUFHLCtCQUFHRCxLQUFLLE9BQUxBLEtBQUssRUFBRUUsR0FBRyxPQUFIQSxHQUFHO2tDQUNoRCxNQUFNLHdEQUFMQyxDQUFFO3dCQUFXQyxPQUFPLEVBQUUsUUFBUTs0QkFBRlgsTUFBTSxDQUFOQSxNQUFNLENBQUNZLElBQUksQ0FBRSxDQUFPLFNBQU0sT0FBSkosR0FBRzs7d0JBQUlOLFNBQVMsRUFBQyxDQUFrSDs7Ozs7OztrQ0FBRUssS0FBSzt1QkFBcExDLEdBQUc7OztpRkFHWEwsQ0FBRztnQkFBQ0QsU0FBUyxFQUFDLENBQW9FOzs7Ozs7Ozs7O0FBR2xHLENBQUM7SUFaUUgsR0FBRzs7UUFDT0Qsa0RBQVM7OztLQURuQkMsR0FBRztBQWNaLCtEQUFlQSxHQUFHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvTmF2LmpzPzg2NGEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHJlcXVlc3RzIGZyb20gXCIuLi91dGlscy9yZXF1ZXN0c1wiXG5pbXBvcnQge3VzZVJvdXRlcn0gZnJvbSAnbmV4dC9yb3V0ZXInXG5mdW5jdGlvbiBOYXYoKSB7XG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcbiAgICByZXR1cm4gKFxuICAgICAgICA8bmF2IGNsYXNzTmFtZT1cInJlbGF0aXZlXCI+XG4gICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IHB4LTEwIHNtOnB4LTIwIHRleHQtMnhsIHdoaXRlc3BhY2Utbm93cmFwIHNwYWNlLXgtMTAgc206c3BhY2UteC0yMCBvdmVyZmxvdy14LXNjcm9sbCBzY3JvbGxiYXItaGlkZSc+XG4gICAgICAgICAgICAgICB7T2JqZWN0LmVudHJpZXMocmVxdWVzdHMpLm1hcCgoW2tleSwge3RpdGxlLCB1cmx9XSkgPT4gKFxuICAgICAgICAgICAgICAgPGgyIGtleT17a2V5fSBvbkNsaWNrPXsoKSA9PiByb3V0ZXIucHVzaChgP2dlbnJlPSR7a2V5fWApfWNsYXNzTmFtZT1cImxhc3Q6cHItMjQgY3Vyc29yLXBvaW50ZXIgdHJhbnNpdGlvbiBkdXJhdGlvbi0xMDAgdHJhbnNmb3JtIGhvdmVyOnNjYWxlLTEyNSBob3Zlcjp0ZXh0LXdoaXRlIGFjdGl2ZTp0ZXh0LXJlZC01MDBcIj57dGl0bGV9PC9oMj5cbiAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgPC9kaXY+IFxuICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2Fic29sdXRlIHRvcC0wIHJpZ2h0LTAgYmctZ3JhZGllbnQtdG8tbCBmcm9tLVsjMDYyMDJBXSBoLTEwIHctMS8xMic+PC9kaXY+XG4gICAgICAgIDwvbmF2PlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTmF2XG4iXSwibmFtZXMiOlsicmVxdWVzdHMiLCJ1c2VSb3V0ZXIiLCJOYXYiLCJyb3V0ZXIiLCJuYXYiLCJjbGFzc05hbWUiLCJkaXYiLCJPYmplY3QiLCJlbnRyaWVzIiwibWFwIiwidGl0bGUiLCJrZXkiLCJ1cmwiLCJoMiIsIm9uQ2xpY2siLCJwdXNoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Nav.js\n");

/***/ })

});