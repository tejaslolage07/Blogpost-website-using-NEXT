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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_BlogPost_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/BlogPost.module.css */ \"./styles/BlogPost.module.css\");\n/* harmony import */ var _styles_BlogPost_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_BlogPost_module_css__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n// The challenge is the following steps:\n// 1. To find the file according to the Slug request.\n// 2. Populate them inside the page.\n// Typescript requires the function name to start with capital letters. But then, the file name should also have Slug and not slug.\\\n// Same goes for 'Slug' anywhere in the file.\nconst Slug = (props)=>{\n    const [blog, setBlog] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(props.my_blog);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n            className: (_styles_BlogPost_module_css__WEBPACK_IMPORTED_MODULE_3___default().main),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    children: blog && blog.title\n                }, void 0, false, {\n                    fileName: \"/Users/tejaslolage/Documents/Programming/Projects/Next.js tutorial projects/Blogpost-website-using-NEXT (Hunting-coder)/pages/blogpost/[Slug].js\",\n                    lineNumber: 17,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {}, void 0, false, {\n                    fileName: \"/Users/tejaslolage/Documents/Programming/Projects/Next.js tutorial projects/Blogpost-website-using-NEXT (Hunting-coder)/pages/blogpost/[Slug].js\",\n                    lineNumber: 18,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_styles_BlogPost_module_css__WEBPACK_IMPORTED_MODULE_3___default().blogItem),\n                    children: blog && blog.content\n                }, void 0, false, {\n                    fileName: \"/Users/tejaslolage/Documents/Programming/Projects/Next.js tutorial projects/Blogpost-website-using-NEXT (Hunting-coder)/pages/blogpost/[Slug].js\",\n                    lineNumber: 19,\n                    columnNumber: 17\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/tejaslolage/Documents/Programming/Projects/Next.js tutorial projects/Blogpost-website-using-NEXT (Hunting-coder)/pages/blogpost/[Slug].js\",\n            lineNumber: 16,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/tejaslolage/Documents/Programming/Projects/Next.js tutorial projects/Blogpost-website-using-NEXT (Hunting-coder)/pages/blogpost/[Slug].js\",\n        lineNumber: 15,\n        columnNumber: 9\n    }, undefined);\n};\nasync function getServerSideProps(context) {\n    // const router = useRouter();  // No need of using router as the context object directly contains the slug we want.\n    // const { Slug } = router.query;\n    const { Slug  } = context.query; // context object has a lot of things in it. query is the one containing our slug.\n    let data = await fetch(`http://localhost:3000/api/getblog?slug=${Slug}`);\n    let my_blog = await data.json();\n    return {\n        props: {\n            my_blog\n        }\n    };\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Slug);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9ibG9ncG9zdC9bU2x1Z10uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQW1EO0FBQ1g7QUFDYztBQUV0RCx3Q0FBd0M7QUFDeEMscURBQXFEO0FBQ3JELG9DQUFvQztBQUVwQyxvSUFBb0k7QUFDcEksNkNBQTZDO0FBRTdDLE1BQU1LLE9BQU8sQ0FBQ0MsUUFBVTtJQUNwQixNQUFNLENBQUNDLE1BQU1DLFFBQVEsR0FBR1AsK0NBQVFBLENBQUNLLE1BQU1HLE9BQU87SUFDOUMscUJBQ0ksOERBQUNDO2tCQUNHLDRFQUFDQztZQUFLQyxXQUFXUix5RUFBVzs7OEJBQ3hCLDhEQUFDUzs4QkFBSU4sUUFBUUEsS0FBS08sS0FBSzs7Ozs7OzhCQUN2Qiw4REFBQ0M7Ozs7OzhCQUNELDhEQUFDTDtvQkFBSUUsV0FBV1IsNkVBQWU7OEJBQzFCRyxRQUFRQSxLQUFLVSxPQUFPOzs7Ozs7Ozs7Ozs7Ozs7OztBQUt6QztBQUVPLGVBQWVDLG1CQUFtQkMsT0FBTyxFQUFFO0lBQzlDLG9IQUFvSDtJQUNwSCxpQ0FBaUM7SUFDakMsTUFBTSxFQUFFZCxLQUFJLEVBQUUsR0FBR2MsUUFBUUMsS0FBSyxFQUFFLGtGQUFrRjtJQUNsSCxJQUFJQyxPQUFPLE1BQU1DLE1BQU0sQ0FBQyx1Q0FBdUMsRUFBRWpCLEtBQUssQ0FBQztJQUN2RSxJQUFJSSxVQUFVLE1BQU1ZLEtBQUtFLElBQUk7SUFDN0IsT0FBTztRQUNIakIsT0FBTztZQUFFRztRQUFRO0lBQ3JCO0FBQ0osQ0FBQztBQUVELGlFQUFlSixJQUFJQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaHVudGluZy1jb2Rlci8uL3BhZ2VzL2Jsb2dwb3N0L1tTbHVnXS5qcz83NDUzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uLy4uL3N0eWxlcy9CbG9nUG9zdC5tb2R1bGUuY3NzXCI7XG5cbi8vIFRoZSBjaGFsbGVuZ2UgaXMgdGhlIGZvbGxvd2luZyBzdGVwczpcbi8vIDEuIFRvIGZpbmQgdGhlIGZpbGUgYWNjb3JkaW5nIHRvIHRoZSBTbHVnIHJlcXVlc3QuXG4vLyAyLiBQb3B1bGF0ZSB0aGVtIGluc2lkZSB0aGUgcGFnZS5cblxuLy8gVHlwZXNjcmlwdCByZXF1aXJlcyB0aGUgZnVuY3Rpb24gbmFtZSB0byBzdGFydCB3aXRoIGNhcGl0YWwgbGV0dGVycy4gQnV0IHRoZW4sIHRoZSBmaWxlIG5hbWUgc2hvdWxkIGFsc28gaGF2ZSBTbHVnIGFuZCBub3Qgc2x1Zy5cXFxuLy8gU2FtZSBnb2VzIGZvciAnU2x1ZycgYW55d2hlcmUgaW4gdGhlIGZpbGUuXG5cbmNvbnN0IFNsdWcgPSAocHJvcHMpID0+IHtcbiAgICBjb25zdCBbYmxvZywgc2V0QmxvZ10gPSB1c2VTdGF0ZShwcm9wcy5teV9ibG9nKTtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPG1haW4gY2xhc3NOYW1lPXtzdHlsZXMubWFpbn0+XG4gICAgICAgICAgICAgICAgPGgxPntibG9nICYmIGJsb2cudGl0bGV9PC9oMT5cbiAgICAgICAgICAgICAgICA8aHIgLz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJsb2dJdGVtfT5cbiAgICAgICAgICAgICAgICAgICAge2Jsb2cgJiYgYmxvZy5jb250ZW50fVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9tYWluPlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufTtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyhjb250ZXh0KSB7XG4gICAgLy8gY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7ICAvLyBObyBuZWVkIG9mIHVzaW5nIHJvdXRlciBhcyB0aGUgY29udGV4dCBvYmplY3QgZGlyZWN0bHkgY29udGFpbnMgdGhlIHNsdWcgd2Ugd2FudC5cbiAgICAvLyBjb25zdCB7IFNsdWcgfSA9IHJvdXRlci5xdWVyeTtcbiAgICBjb25zdCB7IFNsdWcgfSA9IGNvbnRleHQucXVlcnk7IC8vIGNvbnRleHQgb2JqZWN0IGhhcyBhIGxvdCBvZiB0aGluZ3MgaW4gaXQuIHF1ZXJ5IGlzIHRoZSBvbmUgY29udGFpbmluZyBvdXIgc2x1Zy5cbiAgICBsZXQgZGF0YSA9IGF3YWl0IGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL2dldGJsb2c/c2x1Zz0ke1NsdWd9YCk7XG4gICAgbGV0IG15X2Jsb2cgPSBhd2FpdCBkYXRhLmpzb24oKTtcbiAgICByZXR1cm4ge1xuICAgICAgICBwcm9wczogeyBteV9ibG9nIH0sXG4gICAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgU2x1ZztcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlUm91dGVyIiwic3R5bGVzIiwiU2x1ZyIsInByb3BzIiwiYmxvZyIsInNldEJsb2ciLCJteV9ibG9nIiwiZGl2IiwibWFpbiIsImNsYXNzTmFtZSIsImgxIiwidGl0bGUiLCJociIsImJsb2dJdGVtIiwiY29udGVudCIsImdldFNlcnZlclNpZGVQcm9wcyIsImNvbnRleHQiLCJxdWVyeSIsImRhdGEiLCJmZXRjaCIsImpzb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/blogpost/[Slug].js\n");

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