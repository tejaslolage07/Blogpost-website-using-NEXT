"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/blog",{

/***/ "./pages/blog.tsx":
/*!************************!*\
  !*** ./pages/blog.tsx ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Blog_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/Blog.module.css */ \"./styles/Blog.module.css\");\n/* harmony import */ var _styles_Blog_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Blog_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\n\n// Challenges to complete:\n// 1. Collect all file data from the blogdata directory.\n// 2. Iterate through them and display them.\nconst Blog = (props)=>{\n    _s();\n    console.log(props);\n    const [blogs, setBlogs] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    // useEffect(() => {      // useEffect is used to populate the webpage using JavaScript. But this time, the content will be populated using getServerSideProps (Server-Side-Rendering)\n    //   fetch(\"http://localhost:3000/api/blogs\")\n    //     .then((a) => {\n    //       return a.json();\n    //     })\n    //     .then((parsed) => {\n    //       setBlogs(parsed);\n    //     });\n    // }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: (_styles_Blog_module_css__WEBPACK_IMPORTED_MODULE_3___default().main),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_styles_Blog_module_css__WEBPACK_IMPORTED_MODULE_3___default().blogs),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    children: \"Popular blogs:\"\n                }, void 0, false, {\n                    fileName: \"/Users/tejaslolage/Documents/Programming/Projects/Next.js tutorial projects/Blogpost-website-using-NEXT (Hunting-coder)/pages/blog.tsx\",\n                    lineNumber: 24,\n                    columnNumber: 9\n                }, undefined),\n                blogs.map((blogItem)=>{\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Blog_module_css__WEBPACK_IMPORTED_MODULE_3___default().blogItem),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                href: \"/blogpost/\".concat(blogItem.slug),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                    children: blogItem.title\n                                }, void 0, false, {\n                                    fileName: \"/Users/tejaslolage/Documents/Programming/Projects/Next.js tutorial projects/Blogpost-website-using-NEXT (Hunting-coder)/pages/blog.tsx\",\n                                    lineNumber: 29,\n                                    columnNumber: 17\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/tejaslolage/Documents/Programming/Projects/Next.js tutorial projects/Blogpost-website-using-NEXT (Hunting-coder)/pages/blog.tsx\",\n                                lineNumber: 28,\n                                columnNumber: 15\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: (_styles_Blog_module_css__WEBPACK_IMPORTED_MODULE_3___default().blogItemPara),\n                                children: [\n                                    blogItem.content.substr(0, 200),\n                                    \"...\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/tejaslolage/Documents/Programming/Projects/Next.js tutorial projects/Blogpost-website-using-NEXT (Hunting-coder)/pages/blog.tsx\",\n                                lineNumber: 31,\n                                columnNumber: 15\n                            }, undefined)\n                        ]\n                    }, blogItem.slug, true, {\n                        fileName: \"/Users/tejaslolage/Documents/Programming/Projects/Next.js tutorial projects/Blogpost-website-using-NEXT (Hunting-coder)/pages/blog.tsx\",\n                        lineNumber: 27,\n                        columnNumber: 13\n                    }, undefined);\n                })\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/tejaslolage/Documents/Programming/Projects/Next.js tutorial projects/Blogpost-website-using-NEXT (Hunting-coder)/pages/blog.tsx\",\n            lineNumber: 23,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/tejaslolage/Documents/Programming/Projects/Next.js tutorial projects/Blogpost-website-using-NEXT (Hunting-coder)/pages/blog.tsx\",\n        lineNumber: 22,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Blog, \"aCEXm951IL6SExhvkQGIl7uAUuI=\");\n_c = Blog;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Blog);\nvar _c;\n$RefreshReg$(_c, \"Blog\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9ibG9nLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTs7QUFBbUQ7QUFDSjtBQUNsQjtBQUU3QiwwQkFBMEI7QUFDMUIsd0RBQXdEO0FBQ3hELDRDQUE0QztBQUU1QyxNQUFNSSxPQUFPLENBQUNDLFFBQWM7O0lBQzFCQyxRQUFRQyxHQUFHLENBQUNGO0lBQ1osTUFBTSxDQUFDRyxPQUFPQyxTQUFTLEdBQUdSLCtDQUFRQSxDQUFDLEVBQUU7SUFDckMsc0xBQXNMO0lBQ3RMLDZDQUE2QztJQUM3QyxxQkFBcUI7SUFDckIseUJBQXlCO0lBQ3pCLFNBQVM7SUFDVCwwQkFBMEI7SUFDMUIsMEJBQTBCO0lBQzFCLFVBQVU7SUFDVixVQUFVO0lBQ1YscUJBQ0UsOERBQUNTO1FBQUtDLFdBQVdULHFFQUFXO2tCQUMxQiw0RUFBQ1U7WUFBSUQsV0FBV1Qsc0VBQVk7OzhCQUMxQiw4REFBQ1c7OEJBQUc7Ozs7OztnQkFDSEwsTUFBTU0sR0FBRyxDQUFDLENBQUNDLFdBQWlCO29CQUMzQixxQkFDRSw4REFBQ0g7d0JBQXdCRCxXQUFXVCx5RUFBZTs7MENBQ2pELDhEQUFDQyxrREFBSUE7Z0NBQUNhLE1BQU0sYUFBMkIsT0FBZEQsU0FBU0UsSUFBSTswQ0FDcEMsNEVBQUNDOzhDQUFJSCxTQUFTSSxLQUFLOzs7Ozs7Ozs7OzswQ0FFckIsOERBQUNDO2dDQUFFVCxXQUFXVCw2RUFBbUI7O29DQUFHYSxTQUFTTyxPQUFPLENBQUNDLE1BQU0sQ0FBQyxHQUFHO29DQUFLOzs7Ozs7Ozt1QkFKNURSLFNBQVNFLElBQUk7Ozs7O2dCQU8zQjs7Ozs7Ozs7Ozs7O0FBSVI7R0E3Qk1iO0tBQUFBOztBQXFDTiwrREFBZUEsSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9ibG9nLnRzeD8zZWU4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvQmxvZy5tb2R1bGUuY3NzXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5cbi8vIENoYWxsZW5nZXMgdG8gY29tcGxldGU6XG4vLyAxLiBDb2xsZWN0IGFsbCBmaWxlIGRhdGEgZnJvbSB0aGUgYmxvZ2RhdGEgZGlyZWN0b3J5LlxuLy8gMi4gSXRlcmF0ZSB0aHJvdWdoIHRoZW0gYW5kIGRpc3BsYXkgdGhlbS5cblxuY29uc3QgQmxvZyA9IChwcm9wczphbnkpID0+IHtcbiAgY29uc29sZS5sb2cocHJvcHMpO1xuICBjb25zdCBbYmxvZ3MsIHNldEJsb2dzXSA9IHVzZVN0YXRlKFtdKTtcbiAgLy8gdXNlRWZmZWN0KCgpID0+IHsgICAgICAvLyB1c2VFZmZlY3QgaXMgdXNlZCB0byBwb3B1bGF0ZSB0aGUgd2VicGFnZSB1c2luZyBKYXZhU2NyaXB0LiBCdXQgdGhpcyB0aW1lLCB0aGUgY29udGVudCB3aWxsIGJlIHBvcHVsYXRlZCB1c2luZyBnZXRTZXJ2ZXJTaWRlUHJvcHMgKFNlcnZlci1TaWRlLVJlbmRlcmluZylcbiAgLy8gICBmZXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvYmxvZ3NcIilcbiAgLy8gICAgIC50aGVuKChhKSA9PiB7XG4gIC8vICAgICAgIHJldHVybiBhLmpzb24oKTtcbiAgLy8gICAgIH0pXG4gIC8vICAgICAudGhlbigocGFyc2VkKSA9PiB7XG4gIC8vICAgICAgIHNldEJsb2dzKHBhcnNlZCk7XG4gIC8vICAgICB9KTtcbiAgLy8gfSwgW10pO1xuICByZXR1cm4gKFxuICAgIDxtYWluIGNsYXNzTmFtZT17c3R5bGVzLm1haW59PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ibG9nc30+XG4gICAgICAgIDxoMT5Qb3B1bGFyIGJsb2dzOjwvaDE+XG4gICAgICAgIHtibG9ncy5tYXAoKGJsb2dJdGVtOmFueSkgPT4ge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGtleT17YmxvZ0l0ZW0uc2x1Z30gY2xhc3NOYW1lPXtzdHlsZXMuYmxvZ0l0ZW19PlxuICAgICAgICAgICAgICA8TGluayBocmVmPXtgL2Jsb2dwb3N0LyR7YmxvZ0l0ZW0uc2x1Z31gfT5cbiAgICAgICAgICAgICAgICA8aDI+e2Jsb2dJdGVtLnRpdGxlfTwvaDI+XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMuYmxvZ0l0ZW1QYXJhfT57YmxvZ0l0ZW0uY29udGVudC5zdWJzdHIoMCwgMjAwKX0uLi48L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApO1xuICAgICAgICB9KX1cbiAgICAgIDwvZGl2PlxuICAgIDwvbWFpbj5cbiAgKTtcbn07XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoY29udGV4dDphbnkpe1xuICByZXR1cm57XG4gICAgcHJvcHM6IHtUZWphczogXCJHb29kIGJveVwifSxcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBCbG9nO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJzdHlsZXMiLCJMaW5rIiwiQmxvZyIsInByb3BzIiwiY29uc29sZSIsImxvZyIsImJsb2dzIiwic2V0QmxvZ3MiLCJtYWluIiwiY2xhc3NOYW1lIiwiZGl2IiwiaDEiLCJtYXAiLCJibG9nSXRlbSIsImhyZWYiLCJzbHVnIiwiaDIiLCJ0aXRsZSIsInAiLCJibG9nSXRlbVBhcmEiLCJjb250ZW50Iiwic3Vic3RyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/blog.tsx\n"));

/***/ })

});