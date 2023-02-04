"use strict";
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
exports.id = "pages/api/blogs";
exports.ids = ["pages/api/blogs"];
exports.modules = {

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "(api)/./pages/api/blogs.tsx":
/*!*****************************!*\
  !*** ./pages/api/blogs.tsx ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);\n// Next.js API route support: https://nextjs.org/docs/api-routes/introduction\n// http://localhost:3000/api/getblog?slug=how-to-learn-javascript -> Valid slug\n// http://localhost:3000/api/getblog?slug=piahoashaoshao -> Invalid slug\n\nasync function handler(req, res) {\n    //   fs.readFile(`blogdata/${req.query.slug}.json`, \"utf-8\", (err, data)=>{\n    //     if(err){\n    //         res.status(500).json({error: 'No such blog found'})\n    //     }\n    //     console.log(req.query.slug);\n    //     res.status(200).json(JSON.parse(data));\n    //   })\n    // fs.promises.readdir(`blogdata`, (err, data)=>{\n    //   console.log(data);\n    //   var all_blogs: any = [];\n    //   data.forEach((item)=>{\n    //       console.log(item);\n    //       fs.readFile(('getblog/' + item), (result)=>{\n    //           all_blogs.push(result);\n    //       })\n    //   })\n    //   res.status(200).json(all_blogs);\n    // })\n    var all_blogs = [];\n    var data = await fs__WEBPACK_IMPORTED_MODULE_0__.promises.readdir(`blogdata`);\n    var myfile;\n    for(let index = 0; index < data.length; index++){\n        const item = data[index];\n        // console.log(item);\n        myfile = await fs__WEBPACK_IMPORTED_MODULE_0__.promises.readFile(`blogdata/` + item, \"utf-8\");\n        all_blogs.push(JSON.parse(myfile));\n    // console.log(myfile);\n    }\n    res.status(200).json(all_blogs);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYmxvZ3MudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLDZFQUE2RTtBQUM3RSwrRUFBK0U7QUFDL0Usd0VBQXdFO0FBRWhEO0FBSVQsZUFBZUMsUUFDNUJDLEdBQW1CLEVBQ25CQyxHQUEwQixFQUMxQjtJQUNGLDJFQUEyRTtJQUMzRSxlQUFlO0lBQ2YsOERBQThEO0lBQzlELFFBQVE7SUFDUixtQ0FBbUM7SUFDbkMsOENBQThDO0lBQzlDLE9BQU87SUFFTCxpREFBaUQ7SUFDakQsdUJBQXVCO0lBQ3ZCLDZCQUE2QjtJQUM3QiwyQkFBMkI7SUFDekIsMkJBQTJCO0lBQzNCLHFEQUFxRDtJQUNuRCxvQ0FBb0M7SUFDcEMsV0FBVztJQUNYLE9BQU87SUFDUCxxQ0FBcUM7SUFDckMsS0FBSztJQUVULElBQUlDLFlBQWlCLEVBQUU7SUFDdkIsSUFBSUMsT0FBTyxNQUFNTCxnREFBbUIsQ0FBQyxDQUFDLFFBQVEsQ0FBQztJQUMvQyxJQUFJUTtJQUNKLElBQUssSUFBSUMsUUFBUSxHQUFHQSxRQUFRSixLQUFLSyxNQUFNLEVBQUVELFFBQVM7UUFDaEQsTUFBTUUsT0FBT04sSUFBSSxDQUFDSSxNQUFNO1FBQ3hCLHFCQUFxQjtRQUNyQkQsU0FBUyxNQUFNUixpREFBb0IsQ0FBRSxDQUFDLFNBQVMsQ0FBQyxHQUFFVyxNQUFPO1FBQ3pEUCxVQUFVUyxJQUFJLENBQUNDLEtBQUtDLEtBQUssQ0FBQ1A7SUFDMUIsdUJBQXVCO0lBQ3pCO0lBQ0FMLElBQUlhLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUNiO0FBQ3ZCLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9odW50aW5nLWNvZGVyLy4vcGFnZXMvYXBpL2Jsb2dzLnRzeD9hOWUzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIE5leHQuanMgQVBJIHJvdXRlIHN1cHBvcnQ6IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL2FwaS1yb3V0ZXMvaW50cm9kdWN0aW9uXG4vLyBodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL2dldGJsb2c/c2x1Zz1ob3ctdG8tbGVhcm4tamF2YXNjcmlwdCAtPiBWYWxpZCBzbHVnXG4vLyBodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL2dldGJsb2c/c2x1Zz1waWFob2FzaGFvc2hhbyAtPiBJbnZhbGlkIHNsdWdcbmltcG9ydCB0eXBlIHsgTmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZSB9IGZyb20gJ25leHQnXG5pbXBvcnQgKiBhcyBmcyBmcm9tIFwiZnNcIlxuXG50eXBlIERhdGEgPSB7fVxuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKFxuICByZXE6IE5leHRBcGlSZXF1ZXN0LFxuICByZXM6IE5leHRBcGlSZXNwb25zZTxEYXRhPlxuKSB7XG4vLyAgIGZzLnJlYWRGaWxlKGBibG9nZGF0YS8ke3JlcS5xdWVyeS5zbHVnfS5qc29uYCwgXCJ1dGYtOFwiLCAoZXJyLCBkYXRhKT0+e1xuLy8gICAgIGlmKGVycil7XG4vLyAgICAgICAgIHJlcy5zdGF0dXMoNTAwKS5qc29uKHtlcnJvcjogJ05vIHN1Y2ggYmxvZyBmb3VuZCd9KVxuLy8gICAgIH1cbi8vICAgICBjb25zb2xlLmxvZyhyZXEucXVlcnkuc2x1Zyk7XG4vLyAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oSlNPTi5wYXJzZShkYXRhKSk7XG4vLyAgIH0pXG5cbiAgLy8gZnMucHJvbWlzZXMucmVhZGRpcihgYmxvZ2RhdGFgLCAoZXJyLCBkYXRhKT0+e1xuICAvLyAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAvLyAgIHZhciBhbGxfYmxvZ3M6IGFueSA9IFtdO1xuICAvLyAgIGRhdGEuZm9yRWFjaCgoaXRlbSk9PntcbiAgICAvLyAgICAgICBjb25zb2xlLmxvZyhpdGVtKTtcbiAgICAvLyAgICAgICBmcy5yZWFkRmlsZSgoJ2dldGJsb2cvJyArIGl0ZW0pLCAocmVzdWx0KT0+e1xuICAgICAgLy8gICAgICAgICAgIGFsbF9ibG9ncy5wdXNoKHJlc3VsdCk7XG4gICAgICAvLyAgICAgICB9KVxuICAgICAgLy8gICB9KVxuICAgICAgLy8gICByZXMuc3RhdHVzKDIwMCkuanNvbihhbGxfYmxvZ3MpO1xuICAgICAgLy8gfSlcbiAgICAgIFxuICB2YXIgYWxsX2Jsb2dzOiBhbnkgPSBbXTtcbiAgdmFyIGRhdGEgPSBhd2FpdCBmcy5wcm9taXNlcy5yZWFkZGlyKGBibG9nZGF0YWApXG4gIHZhciBteWZpbGU7XG4gIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBkYXRhLmxlbmd0aDsgaW5kZXgrKykge1xuICAgIGNvbnN0IGl0ZW0gPSBkYXRhW2luZGV4XTtcbiAgICAvLyBjb25zb2xlLmxvZyhpdGVtKTtcbiAgICBteWZpbGUgPSBhd2FpdCBmcy5wcm9taXNlcy5yZWFkRmlsZSgoYGJsb2dkYXRhL2ArIGl0ZW0pLCBcInV0Zi04XCIpO1xuICAgIGFsbF9ibG9ncy5wdXNoKEpTT04ucGFyc2UobXlmaWxlKSk7XG4gICAgLy8gY29uc29sZS5sb2cobXlmaWxlKTtcbiAgfVxuICByZXMuc3RhdHVzKDIwMCkuanNvbihhbGxfYmxvZ3MpO1xufVxuXG4iXSwibmFtZXMiOlsiZnMiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwiYWxsX2Jsb2dzIiwiZGF0YSIsInByb21pc2VzIiwicmVhZGRpciIsIm15ZmlsZSIsImluZGV4IiwibGVuZ3RoIiwiaXRlbSIsInJlYWRGaWxlIiwicHVzaCIsIkpTT04iLCJwYXJzZSIsInN0YXR1cyIsImpzb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/blogs.tsx\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/blogs.tsx"));
module.exports = __webpack_exports__;

})();