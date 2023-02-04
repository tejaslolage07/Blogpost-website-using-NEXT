/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/blogpost/[Slug]";
exports.ids = ["pages/blogpost/[Slug]"];
exports.modules = {

/***/ "./styles/BlogPost.module.css":
/*!************************************!*\
  !*** ./styles/BlogPost.module.css ***!
  \************************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"main\": \"BlogPost_main___fHoC\",\n\t\"blogItem\": \"BlogPost_blogItem___VexE\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdHlsZXMvQmxvZ1Bvc3QubW9kdWxlLmNzcy5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaHVudGluZy1jb2Rlci8uL3N0eWxlcy9CbG9nUG9zdC5tb2R1bGUuY3NzP2IwOWYiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwibWFpblwiOiBcIkJsb2dQb3N0X21haW5fX19mSG9DXCIsXG5cdFwiYmxvZ0l0ZW1cIjogXCJCbG9nUG9zdF9ibG9nSXRlbV9fX1ZleEVcIlxufTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./styles/BlogPost.module.css\n");

/***/ }),

/***/ "./pages/blogpost/[Slug].js":
/*!**********************************!*\
  !*** ./pages/blogpost/[Slug].js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_BlogPost_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/BlogPost.module.css */ \"./styles/BlogPost.module.css\");\n/* harmony import */ var _styles_BlogPost_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_BlogPost_module_css__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n// The challenge is the following steps:\n// 1. To find the file according to the Slug request.\n// 2. Populate them inside the page.\n// Typescript requires the function name to start with capital letters. But then, the file name should also have Slug and not slug.\\\n// Same goes for 'Slug' anywhere in the file.\nconst Slug = ()=>{\n    const [blog, setBlog] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (!router.isReady) return;\n        const { Slug  } = router.query;\n        fetch(`http://localhost:3000/api/getblog?slug=${Slug}`).then((a)=>{\n            return a.json();\n        }).then((parsed)=>{\n            setBlog(parsed);\n        });\n    }, [\n        router.isReady\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n            className: (_styles_BlogPost_module_css__WEBPACK_IMPORTED_MODULE_3___default().main),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    children: blog && blog.title\n                }, void 0, false, {\n                    fileName: \"/Users/tejaslolage/Documents/Programming/Projects/Next.js tutorial projects/Blogpost-website-using-NEXT/hunting-coder/pages/blogpost/[Slug].js\",\n                    lineNumber: 29,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {}, void 0, false, {\n                    fileName: \"/Users/tejaslolage/Documents/Programming/Projects/Next.js tutorial projects/Blogpost-website-using-NEXT/hunting-coder/pages/blogpost/[Slug].js\",\n                    lineNumber: 30,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_styles_BlogPost_module_css__WEBPACK_IMPORTED_MODULE_3___default().blogItem),\n                    children: blog && blog.content\n                }, void 0, false, {\n                    fileName: \"/Users/tejaslolage/Documents/Programming/Projects/Next.js tutorial projects/Blogpost-website-using-NEXT/hunting-coder/pages/blogpost/[Slug].js\",\n                    lineNumber: 31,\n                    columnNumber: 17\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/tejaslolage/Documents/Programming/Projects/Next.js tutorial projects/Blogpost-website-using-NEXT/hunting-coder/pages/blogpost/[Slug].js\",\n            lineNumber: 28,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/tejaslolage/Documents/Programming/Projects/Next.js tutorial projects/Blogpost-website-using-NEXT/hunting-coder/pages/blogpost/[Slug].js\",\n        lineNumber: 27,\n        columnNumber: 9\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Slug);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9ibG9ncG9zdC9bU2x1Z10uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFBaUQ7QUFDVDtBQUNjO0FBRXRELHdDQUF3QztBQUN4QyxxREFBcUQ7QUFDckQsb0NBQW9DO0FBRXBDLG9JQUFvSTtBQUNwSSw2Q0FBNkM7QUFFN0MsTUFBTUssT0FBTyxJQUFNO0lBQ2YsTUFBTSxDQUFDQyxNQUFNQyxRQUFRLEdBQUdOLCtDQUFRQTtJQUNoQyxNQUFNTyxTQUFTTCxzREFBU0E7SUFDeEJELGdEQUFTQSxDQUFDLElBQU07UUFDWixJQUFHLENBQUNNLE9BQU9DLE9BQU8sRUFBRTtRQUNwQixNQUFNLEVBQUVKLEtBQUksRUFBRSxHQUFHRyxPQUFPRSxLQUFLO1FBQzdCQyxNQUFNLENBQUMsdUNBQXVDLEVBQUVOLEtBQUssQ0FBQyxFQUFFTyxJQUFJLENBQUMsQ0FBQ0MsSUFBTTtZQUNoRSxPQUFPQSxFQUFFQyxJQUFJO1FBQ2pCLEdBQ0NGLElBQUksQ0FBQyxDQUFDRyxTQUFXO1lBQ2RSLFFBQVFRO1FBQ1o7SUFDSixHQUFHO1FBQUNQLE9BQU9DLE9BQU87S0FBQztJQUVuQixxQkFDSSw4REFBQ087a0JBQ0csNEVBQUNDO1lBQUtDLFdBQVdkLHlFQUFXOzs4QkFDeEIsOERBQUNlOzhCQUFJYixRQUFRQSxLQUFLYyxLQUFLOzs7Ozs7OEJBQ3ZCLDhEQUFDQzs7Ozs7OEJBQ0QsOERBQUNMO29CQUFJRSxXQUFXZCw2RUFBZTs4QkFDMUJFLFFBQVFBLEtBQUtpQixPQUFPOzs7Ozs7Ozs7Ozs7Ozs7OztBQUt6QztBQUVBLGlFQUFlbEIsSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2h1bnRpbmctY29kZXIvLi9wYWdlcy9ibG9ncG9zdC9bU2x1Z10uanM/NzQ1MyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZSwgdXNlRWZmZWN0fSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vLi4vc3R5bGVzL0Jsb2dQb3N0Lm1vZHVsZS5jc3NcIjtcblxuLy8gVGhlIGNoYWxsZW5nZSBpcyB0aGUgZm9sbG93aW5nIHN0ZXBzOlxuLy8gMS4gVG8gZmluZCB0aGUgZmlsZSBhY2NvcmRpbmcgdG8gdGhlIFNsdWcgcmVxdWVzdC5cbi8vIDIuIFBvcHVsYXRlIHRoZW0gaW5zaWRlIHRoZSBwYWdlLlxuXG4vLyBUeXBlc2NyaXB0IHJlcXVpcmVzIHRoZSBmdW5jdGlvbiBuYW1lIHRvIHN0YXJ0IHdpdGggY2FwaXRhbCBsZXR0ZXJzLiBCdXQgdGhlbiwgdGhlIGZpbGUgbmFtZSBzaG91bGQgYWxzbyBoYXZlIFNsdWcgYW5kIG5vdCBzbHVnLlxcXG4vLyBTYW1lIGdvZXMgZm9yICdTbHVnJyBhbnl3aGVyZSBpbiB0aGUgZmlsZS5cblxuY29uc3QgU2x1ZyA9ICgpID0+IHtcbiAgICBjb25zdCBbYmxvZywgc2V0QmxvZ10gPSB1c2VTdGF0ZSgpO1xuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGlmKCFyb3V0ZXIuaXNSZWFkeSkgcmV0dXJuO1xuICAgICAgICBjb25zdCB7IFNsdWcgfSA9IHJvdXRlci5xdWVyeTtcbiAgICAgICAgZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvZ2V0YmxvZz9zbHVnPSR7U2x1Z31gKS50aGVuKChhKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gYS5qc29uKCk7XG4gICAgICAgIH0pXG4gICAgICAgIC50aGVuKChwYXJzZWQpID0+IHtcbiAgICAgICAgICAgIHNldEJsb2cocGFyc2VkKTtcbiAgICAgICAgfSk7XG4gICAgfSwgW3JvdXRlci5pc1JlYWR5XSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPG1haW4gY2xhc3NOYW1lPXtzdHlsZXMubWFpbn0+XG4gICAgICAgICAgICAgICAgPGgxPntibG9nICYmIGJsb2cudGl0bGV9PC9oMT5cbiAgICAgICAgICAgICAgICA8aHIgLz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJsb2dJdGVtfT5cbiAgICAgICAgICAgICAgICAgICAge2Jsb2cgJiYgYmxvZy5jb250ZW50fVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9tYWluPlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2x1ZztcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlUm91dGVyIiwic3R5bGVzIiwiU2x1ZyIsImJsb2ciLCJzZXRCbG9nIiwicm91dGVyIiwiaXNSZWFkeSIsInF1ZXJ5IiwiZmV0Y2giLCJ0aGVuIiwiYSIsImpzb24iLCJwYXJzZWQiLCJkaXYiLCJtYWluIiwiY2xhc3NOYW1lIiwiaDEiLCJ0aXRsZSIsImhyIiwiYmxvZ0l0ZW0iLCJjb250ZW50Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/blogpost/[Slug].js\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/blogpost/[Slug].js"));
module.exports = __webpack_exports__;

})();