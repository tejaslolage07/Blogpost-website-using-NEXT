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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);\n// Next.js API route support: https://nextjs.org/docs/api-routes/introduction\n// http://localhost:3000/api/getblog?slug=how-to-learn-javascript -> Valid slug\n// http://localhost:3000/api/getblog?slug=piahoashaoshao -> Invalid slug\n\nasync function handler(req, res) {\n    //   fs.readFile(`blogdata/${req.query.slug}.json`, \"utf-8\", (err, data)=>{\n    //     if(err){\n    //         res.status(500).json({error: 'No such blog found'})\n    //     }\n    //     console.log(req.query.slug);\n    //     res.status(200).json(JSON.parse(data));\n    //   })\n    // fs.promises.readdir(`blogdata`, (err, data)=>{\n    //   console.log(data);\n    //   var all_blogs: any = [];\n    //   data.forEach((item)=>{\n    //       console.log(item);\n    //       fs.readFile(('getblog/' + item), (result)=>{\n    //           all_blogs.push(result);\n    //       })\n    //   })\n    //   res.status(200).json(all_blogs);\n    // })\n    var all_blogs = [];\n    var data = await fs__WEBPACK_IMPORTED_MODULE_0__.promises.readdir(`blogdata`);\n    var myfile;\n    for(let index = 0; index < data.length; index++){\n        const item = data[index];\n        console.log(item);\n        myfile = await fs__WEBPACK_IMPORTED_MODULE_0__.promises.readFile(`blogdata/` + item, \"utf-8\");\n        all_blogs.push(JSON.parse(myfile));\n    // console.log(myfile);\n    }\n    res.status(200).json(all_blogs);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYmxvZ3MudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLDZFQUE2RTtBQUM3RSwrRUFBK0U7QUFDL0Usd0VBQXdFO0FBRWhEO0FBSVQsZUFBZUMsUUFDNUJDLEdBQW1CLEVBQ25CQyxHQUEwQixFQUMxQjtJQUNGLDJFQUEyRTtJQUMzRSxlQUFlO0lBQ2YsOERBQThEO0lBQzlELFFBQVE7SUFDUixtQ0FBbUM7SUFDbkMsOENBQThDO0lBQzlDLE9BQU87SUFFTCxpREFBaUQ7SUFDakQsdUJBQXVCO0lBQ3ZCLDZCQUE2QjtJQUM3QiwyQkFBMkI7SUFDekIsMkJBQTJCO0lBQzNCLHFEQUFxRDtJQUNuRCxvQ0FBb0M7SUFDcEMsV0FBVztJQUNYLE9BQU87SUFDUCxxQ0FBcUM7SUFDckMsS0FBSztJQUVULElBQUlDLFlBQWlCLEVBQUU7SUFDdkIsSUFBSUMsT0FBTyxNQUFNTCxnREFBbUIsQ0FBQyxDQUFDLFFBQVEsQ0FBQztJQUMvQyxJQUFJUTtJQUNKLElBQUssSUFBSUMsUUFBUSxHQUFHQSxRQUFRSixLQUFLSyxNQUFNLEVBQUVELFFBQVM7UUFDaEQsTUFBTUUsT0FBT04sSUFBSSxDQUFDSSxNQUFNO1FBQ3hCRyxRQUFRQyxHQUFHLENBQUNGO1FBQ1pILFNBQVMsTUFBTVIsaURBQW9CLENBQUUsQ0FBQyxTQUFTLENBQUMsR0FBRVcsTUFBTztRQUN6RFAsVUFBVVcsSUFBSSxDQUFDQyxLQUFLQyxLQUFLLENBQUNUO0lBQzFCLHVCQUF1QjtJQUN6QjtJQUNBTCxJQUFJZSxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDZjtBQUN2QixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaHVudGluZy1jb2Rlci8uL3BhZ2VzL2FwaS9ibG9ncy50c3g/YTllMyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBOZXh0LmpzIEFQSSByb3V0ZSBzdXBwb3J0OiBodHRwczovL25leHRqcy5vcmcvZG9jcy9hcGktcm91dGVzL2ludHJvZHVjdGlvblxuLy8gaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS9nZXRibG9nP3NsdWc9aG93LXRvLWxlYXJuLWphdmFzY3JpcHQgLT4gVmFsaWQgc2x1Z1xuLy8gaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS9nZXRibG9nP3NsdWc9cGlhaG9hc2hhb3NoYW8gLT4gSW52YWxpZCBzbHVnXG5pbXBvcnQgdHlwZSB7IE5leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2UgfSBmcm9tICduZXh0J1xuaW1wb3J0ICogYXMgZnMgZnJvbSBcImZzXCJcblxudHlwZSBEYXRhID0ge31cblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihcbiAgcmVxOiBOZXh0QXBpUmVxdWVzdCxcbiAgcmVzOiBOZXh0QXBpUmVzcG9uc2U8RGF0YT5cbikge1xuLy8gICBmcy5yZWFkRmlsZShgYmxvZ2RhdGEvJHtyZXEucXVlcnkuc2x1Z30uanNvbmAsIFwidXRmLThcIiwgKGVyciwgZGF0YSk9Pntcbi8vICAgICBpZihlcnIpe1xuLy8gICAgICAgICByZXMuc3RhdHVzKDUwMCkuanNvbih7ZXJyb3I6ICdObyBzdWNoIGJsb2cgZm91bmQnfSlcbi8vICAgICB9XG4vLyAgICAgY29uc29sZS5sb2cocmVxLnF1ZXJ5LnNsdWcpO1xuLy8gICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKEpTT04ucGFyc2UoZGF0YSkpO1xuLy8gICB9KVxuXG4gIC8vIGZzLnByb21pc2VzLnJlYWRkaXIoYGJsb2dkYXRhYCwgKGVyciwgZGF0YSk9PntcbiAgLy8gICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgLy8gICB2YXIgYWxsX2Jsb2dzOiBhbnkgPSBbXTtcbiAgLy8gICBkYXRhLmZvckVhY2goKGl0ZW0pPT57XG4gICAgLy8gICAgICAgY29uc29sZS5sb2coaXRlbSk7XG4gICAgLy8gICAgICAgZnMucmVhZEZpbGUoKCdnZXRibG9nLycgKyBpdGVtKSwgKHJlc3VsdCk9PntcbiAgICAgIC8vICAgICAgICAgICBhbGxfYmxvZ3MucHVzaChyZXN1bHQpO1xuICAgICAgLy8gICAgICAgfSlcbiAgICAgIC8vICAgfSlcbiAgICAgIC8vICAgcmVzLnN0YXR1cygyMDApLmpzb24oYWxsX2Jsb2dzKTtcbiAgICAgIC8vIH0pXG4gICAgICBcbiAgdmFyIGFsbF9ibG9nczogYW55ID0gW107XG4gIHZhciBkYXRhID0gYXdhaXQgZnMucHJvbWlzZXMucmVhZGRpcihgYmxvZ2RhdGFgKVxuICB2YXIgbXlmaWxlO1xuICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgZGF0YS5sZW5ndGg7IGluZGV4KyspIHtcbiAgICBjb25zdCBpdGVtID0gZGF0YVtpbmRleF07XG4gICAgY29uc29sZS5sb2coaXRlbSk7XG4gICAgbXlmaWxlID0gYXdhaXQgZnMucHJvbWlzZXMucmVhZEZpbGUoKGBibG9nZGF0YS9gKyBpdGVtKSwgXCJ1dGYtOFwiKTtcbiAgICBhbGxfYmxvZ3MucHVzaChKU09OLnBhcnNlKG15ZmlsZSkpO1xuICAgIC8vIGNvbnNvbGUubG9nKG15ZmlsZSk7XG4gIH1cbiAgcmVzLnN0YXR1cygyMDApLmpzb24oYWxsX2Jsb2dzKTtcbn1cblxuIl0sIm5hbWVzIjpbImZzIiwiaGFuZGxlciIsInJlcSIsInJlcyIsImFsbF9ibG9ncyIsImRhdGEiLCJwcm9taXNlcyIsInJlYWRkaXIiLCJteWZpbGUiLCJpbmRleCIsImxlbmd0aCIsIml0ZW0iLCJjb25zb2xlIiwibG9nIiwicmVhZEZpbGUiLCJwdXNoIiwiSlNPTiIsInBhcnNlIiwic3RhdHVzIiwianNvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/blogs.tsx\n");

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