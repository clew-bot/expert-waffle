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

/***/ "./components/Thumbnail.js":
/*!*********************************!*\
  !*** ./components/Thumbnail.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Results__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Results */ \"./components/Results.js\");\n/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @heroicons/react/outline */ \"./node_modules/@heroicons/react/outline/esm/index.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nfunction Thumbnail(param) {\n    var result = param.result;\n    console.log(result);\n    var BASE_URL = \"https://image.tmdb.org/t/p/original/\";\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n        className: \"group cursor-pointer\",\n        __source: {\n            fileName: \"/Users/chadlew/Desktop/expert-waffle/components/Thumbnail.js\",\n            lineNumber: 8,\n            columnNumber: 9\n        },\n        __self: this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                src: \"\".concat(BASE_URL).concat(result.backdrop_path || result.poster_path) || \"\".concat(BASE_URL).concat(result.poster_path),\n                layout: \"responsive\",\n                height: 1080,\n                width: 1920,\n                __source: {\n                    fileName: \"/Users/chadlew/Desktop/expert-waffle/components/Thumbnail.js\",\n                    lineNumber: 9,\n                    columnNumber: 13\n                },\n                __self: this\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                className: \"p-2\",\n                __source: {\n                    fileName: \"/Users/chadlew/Desktop/expert-waffle/components/Thumbnail.js\",\n                    lineNumber: 15,\n                    columnNumber: 17\n                },\n                __self: this,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"p\", {\n                        className: \"truncate max-w-md\",\n                        __source: {\n                            fileName: \"/Users/chadlew/Desktop/expert-waffle/components/Thumbnail.js\",\n                            lineNumber: 16,\n                            columnNumber: 21\n                        },\n                        __self: this,\n                        children: result.overview\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h2\", {\n                        className: \"mt-1 text-2xl text-white transition-all duration-100 ease-in-out group:hover:font-bold\",\n                        __source: {\n                            fileName: \"/Users/chadlew/Desktop/expert-waffle/components/Thumbnail.js\",\n                            lineNumber: 17,\n                            columnNumber: 21\n                        },\n                        __self: this,\n                        children: result.title || result.original_name\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"p\", {\n                        className: \"flex items-center opacity-0 group-hover:opacity-100\",\n                        __source: {\n                            fileName: \"/Users/chadlew/Desktop/expert-waffle/components/Thumbnail.js\",\n                            lineNumber: 18,\n                            columnNumber: 21\n                        },\n                        __self: this,\n                        children: [\n                            result.release_date || result.first_air_date,\n                            \" \\xb7\",\n                            \" \",\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_3__.ThumbUpIcon, {\n                                className: \"h-5 mx-2\",\n                                __source: {\n                                    fileName: \"/Users/chadlew/Desktop/expert-waffle/components/Thumbnail.js\",\n                                    lineNumber: 21,\n                                    columnNumber: 25\n                                },\n                                __self: this\n                            }),\n                            \" \",\n                            result.vote_count\n                        ]\n                    })\n                ]\n            })\n        ]\n    }));\n}\n_c = Thumbnail;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Thumbnail);\nvar _c;\n$RefreshReg$(_c, \"Thumbnail\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1RodW1ibmFpbC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBOEI7QUFDQztBQUNxQjtTQUMzQ0csU0FBUyxDQUFDLEtBQVEsRUFBRSxDQUFDO1FBQVZDLE1BQU0sR0FBUCxLQUFRLENBQVBBLE1BQU07SUFDdEJDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixNQUFNO0lBQ2xCLEdBQUssQ0FBQ0csUUFBUSxHQUFHLENBQXNDO0lBQ3ZELE1BQU0sdUVBQ0RDLENBQUc7UUFBQ0MsU0FBUyxFQUFDLENBQXNCOzs7Ozs7OztpRkFDaENULG1EQUFLO2dCQUNGVSxHQUFHLEVBQUcsR0FBYU4sTUFBMEMsQ0FBckRHLFFBQVEsRUFBOEMsT0FBM0NILE1BQU0sQ0FBQ08sYUFBYSxJQUFJUCxNQUFNLENBQUNRLFdBQVcsS0FDNUQsR0FBYVIsTUFBa0IsQ0FBN0JHLFFBQVEsRUFBc0IsT0FBbkJILE1BQU0sQ0FBQ1EsV0FBVztnQkFDaENDLE1BQU0sRUFBQyxDQUFZO2dCQUNuQkMsTUFBTSxFQUFFLElBQUk7Z0JBQ1pDLEtBQUssRUFBRSxJQUFJOzs7Ozs7OztrRkFDVlAsQ0FBRztnQkFBQ0MsU0FBUyxFQUFDLENBQUs7Ozs7Ozs7O3lGQUNmTyxDQUFDO3dCQUFDUCxTQUFTLEVBQUMsQ0FBbUI7Ozs7Ozs7a0NBQUVMLE1BQU0sQ0FBQ2EsUUFBUTs7eUZBQ2hEQyxDQUFFO3dCQUFDVCxTQUFTLEVBQUMsQ0FBd0Y7Ozs7Ozs7a0NBQUVMLE1BQU0sQ0FBQ2UsS0FBSyxJQUFJZixNQUFNLENBQUNnQixhQUFhOzswRkFDM0lKLENBQUM7d0JBQUNQLFNBQVMsRUFBQyxDQUFxRDs7Ozs7Ozs7NEJBRTdETCxNQUFNLENBQUNpQixZQUFZLElBQUlqQixNQUFNLENBQUNrQixjQUFjOzRCQUFDLENBQUU7NEJBQUMsQ0FBRztpR0FDbkRwQixpRUFBVztnQ0FBQ08sU0FBUyxFQUFDLENBQVU7Ozs7Ozs7OzRCQUFHLENBQUM7NEJBQUNMLE1BQU0sQ0FBQ21CLFVBQVU7Ozs7Ozs7QUFNL0UsQ0FBQztLQXZCUXBCLFNBQVM7QUF5QmxCLCtEQUFlQSxTQUFTIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvVGh1bWJuYWlsLmpzPzlhOGYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgUmVzdWx0cyBmcm9tIFwiLi9SZXN1bHRzXCI7XG5pbXBvcnQge1RodW1iVXBJY29ufSBmcm9tIFwiQGhlcm9pY29ucy9yZWFjdC9vdXRsaW5lXCJcbmZ1bmN0aW9uIFRodW1ibmFpbCh7cmVzdWx0fSkge1xuICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XG4gICAgY29uc3QgQkFTRV9VUkwgPSBcImh0dHBzOi8vaW1hZ2UudG1kYi5vcmcvdC9wL29yaWdpbmFsL1wiO1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JvdXAgY3Vyc29yLXBvaW50ZXJcIj5cbiAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICAgIHNyYz17YCR7QkFTRV9VUkx9JHtyZXN1bHQuYmFja2Ryb3BfcGF0aCB8fCByZXN1bHQucG9zdGVyX3BhdGh9YCB8fFxuICAgICAgICAgICAgICAgIGAke0JBU0VfVVJMfSR7cmVzdWx0LnBvc3Rlcl9wYXRofWB9XG4gICAgICAgICAgICAgICAgbGF5b3V0PVwicmVzcG9uc2l2ZVwiXG4gICAgICAgICAgICAgICAgaGVpZ2h0PXsxMDgwfVxuICAgICAgICAgICAgICAgIHdpZHRoPXsxOTIwfSAvPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC0yXCI+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRydW5jYXRlIG1heC13LW1kXCI+e3Jlc3VsdC5vdmVydmlld308L3A+XG4gICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJtdC0xIHRleHQtMnhsIHRleHQtd2hpdGUgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMTAwIGVhc2UtaW4tb3V0IGdyb3VwOmhvdmVyOmZvbnQtYm9sZFwiPntyZXN1bHQudGl0bGUgfHwgcmVzdWx0Lm9yaWdpbmFsX25hbWV9PC9oMj5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgb3BhY2l0eS0wIGdyb3VwLWhvdmVyOm9wYWNpdHktMTAwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7Lyoge3Jlc3VsdC5tZWRpYV90eXBlICYmIGAke3Jlc3VsdC5tZWRpYV90eXBlfSDCt2B9e1wiIFwifSAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgIHtyZXN1bHQucmVsZWFzZV9kYXRlIHx8IHJlc3VsdC5maXJzdF9haXJfZGF0ZX0gwrd7XCIgXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICA8VGh1bWJVcEljb24gY2xhc3NOYW1lPVwiaC01IG14LTJcIiAvPiB7cmVzdWx0LnZvdGVfY291bnR9XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFRodW1ibmFpbFxuIl0sIm5hbWVzIjpbIkltYWdlIiwiUmVzdWx0cyIsIlRodW1iVXBJY29uIiwiVGh1bWJuYWlsIiwicmVzdWx0IiwiY29uc29sZSIsImxvZyIsIkJBU0VfVVJMIiwiZGl2IiwiY2xhc3NOYW1lIiwic3JjIiwiYmFja2Ryb3BfcGF0aCIsInBvc3Rlcl9wYXRoIiwibGF5b3V0IiwiaGVpZ2h0Iiwid2lkdGgiLCJwIiwib3ZlcnZpZXciLCJoMiIsInRpdGxlIiwib3JpZ2luYWxfbmFtZSIsInJlbGVhc2VfZGF0ZSIsImZpcnN0X2Fpcl9kYXRlIiwidm90ZV9jb3VudCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Thumbnail.js\n");

/***/ })

});