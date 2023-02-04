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
exports.id = "pages/api/getblog";
exports.ids = ["pages/api/getblog"];
exports.modules = {

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "(api)/./pages/api/getblog.tsx":
/*!*******************************!*\
  !*** ./pages/api/getblog.tsx ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);\n// // Next.js API route support: https://nextjs.org/docs/api-routes/introduction\n// // http://localhost:3000/api/getblog?slug=how-to-learn-javascript -> Valid slug\n// // http://localhost:3000/api/getblog?slug=piahoashaoshao -> Invalid slug\n// import type { NextApiRequest, NextApiResponse } from 'next'\n// import * as fs from \"fs\"\n// type Data = {}\n// export default async function handler(\n//   req: NextApiRequest,\n//   res: NextApiResponse<Data>\n// ) {\n// //   fs.readFile(`blogdata/${req.query.slug}.json`, \"utf-8\", (err, data)=>{\n// //     if(err){\n// //         res.status(500).json({error: 'No such blog found'})\n// //     }\n// //     console.log(req.query.slug);\n// //     res.status(200).json(JSON.parse(data));\n// //   })\n//   // fs.promises.readdir(`blogdata`, (err, data)=>{\n//   //   console.log(data);\n//   //   var all_blogs: any = [];\n//   //   data.forEach((item)=>{\n//     //       console.log(item);\n//     //       fs.readFile(('getblog/' + item), (result)=>{\n//       //           all_blogs.push(result);\n//       //       })\n//       //   })\n//       //   res.status(200).json(all_blogs);\n//       // })\n/*\n  var all_blogs: any = [];\n  var data = await fs.promises.readdir(`blogdata`)\n  var myfile;\n  for (let index = 0; index < data.length; index++) {\n    const item = data[index];\n    console.log(item);\n    myfile = await fs.promises.readFile((`blogdata/`+ item), \"utf-8\");\n    all_blogs.push(JSON.parse(myfile));\n    // console.log(myfile);\n  }\n  res.status(200).json(all_blogs);\n}\n// The above code did not work for some reason.\n*/ \nfunction handler(req, res) {\n    fs__WEBPACK_IMPORTED_MODULE_0__.readFile(`blogdata/${req.query.slug}.json`, \"utf-8\", (err, data)=>{\n        if (err) {\n            res.status(500).json({\n                error: \"No such blog found.\"\n            });\n        }\n        console.log(req.query.slug);\n        res.status(200).json(JSON.parse(data));\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZ2V0YmxvZy50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsZ0ZBQWdGO0FBQ2hGLGtGQUFrRjtBQUNsRiwyRUFBMkU7QUFDM0UsOERBQThEO0FBQzlELDJCQUEyQjtBQUUzQixpQkFBaUI7QUFFakIseUNBQXlDO0FBQ3pDLHlCQUF5QjtBQUN6QiwrQkFBK0I7QUFDL0IsTUFBTTtBQUNOLDhFQUE4RTtBQUM5RSxrQkFBa0I7QUFDbEIsaUVBQWlFO0FBQ2pFLFdBQVc7QUFDWCxzQ0FBc0M7QUFDdEMsaURBQWlEO0FBQ2pELFVBQVU7QUFFVixzREFBc0Q7QUFDdEQsNEJBQTRCO0FBQzVCLGtDQUFrQztBQUNsQyxnQ0FBZ0M7QUFDaEMsa0NBQWtDO0FBQ2xDLDREQUE0RDtBQUM1RCw2Q0FBNkM7QUFDN0Msb0JBQW9CO0FBQ3BCLGdCQUFnQjtBQUNoQiw4Q0FBOEM7QUFDOUMsY0FBYztBQUVkOzs7Ozs7Ozs7Ozs7OztBQWNBLEdBRXlCO0FBQ1YsU0FBU0MsUUFBUUMsR0FBTyxFQUFFQyxHQUFPLEVBQUM7SUFDL0NILHdDQUFXLENBQUMsQ0FBQyxTQUFTLEVBQUVFLElBQUlHLEtBQUssQ0FBQ0MsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLFNBQVMsQ0FBQ0MsS0FBS0MsT0FBUztRQUNyRSxJQUFHRCxLQUFJO1lBQ0xKLElBQUlNLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7Z0JBQUNDLE9BQU07WUFBcUI7UUFDbkQsQ0FBQztRQUNEQyxRQUFRQyxHQUFHLENBQUNYLElBQUlHLEtBQUssQ0FBQ0MsSUFBSTtRQUMxQkgsSUFBSU0sTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQ0ksS0FBS0MsS0FBSyxDQUFDUDtJQUNsQztBQUNGLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9odW50aW5nLWNvZGVyLy4vcGFnZXMvYXBpL2dldGJsb2cudHN4PzhjNzYiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gLy8gTmV4dC5qcyBBUEkgcm91dGUgc3VwcG9ydDogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvYXBpLXJvdXRlcy9pbnRyb2R1Y3Rpb25cbi8vIC8vIGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvZ2V0YmxvZz9zbHVnPWhvdy10by1sZWFybi1qYXZhc2NyaXB0IC0+IFZhbGlkIHNsdWdcbi8vIC8vIGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvZ2V0YmxvZz9zbHVnPXBpYWhvYXNoYW9zaGFvIC0+IEludmFsaWQgc2x1Z1xuLy8gaW1wb3J0IHR5cGUgeyBOZXh0QXBpUmVxdWVzdCwgTmV4dEFwaVJlc3BvbnNlIH0gZnJvbSAnbmV4dCdcbi8vIGltcG9ydCAqIGFzIGZzIGZyb20gXCJmc1wiXG5cbi8vIHR5cGUgRGF0YSA9IHt9XG5cbi8vIGV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIoXG4vLyAgIHJlcTogTmV4dEFwaVJlcXVlc3QsXG4vLyAgIHJlczogTmV4dEFwaVJlc3BvbnNlPERhdGE+XG4vLyApIHtcbi8vIC8vICAgZnMucmVhZEZpbGUoYGJsb2dkYXRhLyR7cmVxLnF1ZXJ5LnNsdWd9Lmpzb25gLCBcInV0Zi04XCIsIChlcnIsIGRhdGEpPT57XG4vLyAvLyAgICAgaWYoZXJyKXtcbi8vIC8vICAgICAgICAgcmVzLnN0YXR1cyg1MDApLmpzb24oe2Vycm9yOiAnTm8gc3VjaCBibG9nIGZvdW5kJ30pXG4vLyAvLyAgICAgfVxuLy8gLy8gICAgIGNvbnNvbGUubG9nKHJlcS5xdWVyeS5zbHVnKTtcbi8vIC8vICAgICByZXMuc3RhdHVzKDIwMCkuanNvbihKU09OLnBhcnNlKGRhdGEpKTtcbi8vIC8vICAgfSlcblxuLy8gICAvLyBmcy5wcm9taXNlcy5yZWFkZGlyKGBibG9nZGF0YWAsIChlcnIsIGRhdGEpPT57XG4vLyAgIC8vICAgY29uc29sZS5sb2coZGF0YSk7XG4vLyAgIC8vICAgdmFyIGFsbF9ibG9nczogYW55ID0gW107XG4vLyAgIC8vICAgZGF0YS5mb3JFYWNoKChpdGVtKT0+e1xuLy8gICAgIC8vICAgICAgIGNvbnNvbGUubG9nKGl0ZW0pO1xuLy8gICAgIC8vICAgICAgIGZzLnJlYWRGaWxlKCgnZ2V0YmxvZy8nICsgaXRlbSksIChyZXN1bHQpPT57XG4vLyAgICAgICAvLyAgICAgICAgICAgYWxsX2Jsb2dzLnB1c2gocmVzdWx0KTtcbi8vICAgICAgIC8vICAgICAgIH0pXG4vLyAgICAgICAvLyAgIH0pXG4vLyAgICAgICAvLyAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKGFsbF9ibG9ncyk7XG4vLyAgICAgICAvLyB9KVxuXG4vKlxuICB2YXIgYWxsX2Jsb2dzOiBhbnkgPSBbXTtcbiAgdmFyIGRhdGEgPSBhd2FpdCBmcy5wcm9taXNlcy5yZWFkZGlyKGBibG9nZGF0YWApXG4gIHZhciBteWZpbGU7XG4gIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBkYXRhLmxlbmd0aDsgaW5kZXgrKykge1xuICAgIGNvbnN0IGl0ZW0gPSBkYXRhW2luZGV4XTtcbiAgICBjb25zb2xlLmxvZyhpdGVtKTtcbiAgICBteWZpbGUgPSBhd2FpdCBmcy5wcm9taXNlcy5yZWFkRmlsZSgoYGJsb2dkYXRhL2ArIGl0ZW0pLCBcInV0Zi04XCIpO1xuICAgIGFsbF9ibG9ncy5wdXNoKEpTT04ucGFyc2UobXlmaWxlKSk7XG4gICAgLy8gY29uc29sZS5sb2cobXlmaWxlKTtcbiAgfVxuICByZXMuc3RhdHVzKDIwMCkuanNvbihhbGxfYmxvZ3MpO1xufVxuLy8gVGhlIGFib3ZlIGNvZGUgZGlkIG5vdCB3b3JrIGZvciBzb21lIHJlYXNvbi5cbiovXG5cbmltcG9ydCAqIGFzIGZzIGZyb20gJ2ZzJztcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhhbmRsZXIocmVxOmFueSwgcmVzOmFueSl7XG4gIGZzLnJlYWRGaWxlKGBibG9nZGF0YS8ke3JlcS5xdWVyeS5zbHVnfS5qc29uYCwgJ3V0Zi04JywgKGVyciwgZGF0YSkgPT4ge1xuICAgIGlmKGVycil7XG4gICAgICByZXMuc3RhdHVzKDUwMCkuanNvbih7ZXJyb3I6XCJObyBzdWNoIGJsb2cgZm91bmQuXCJ9KVxuICAgIH1cbiAgICBjb25zb2xlLmxvZyhyZXEucXVlcnkuc2x1ZylcbiAgICByZXMuc3RhdHVzKDIwMCkuanNvbihKU09OLnBhcnNlKGRhdGEpKVxuICB9KVxufSJdLCJuYW1lcyI6WyJmcyIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJyZWFkRmlsZSIsInF1ZXJ5Iiwic2x1ZyIsImVyciIsImRhdGEiLCJzdGF0dXMiLCJqc29uIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwiSlNPTiIsInBhcnNlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/getblog.tsx\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/getblog.tsx"));
module.exports = __webpack_exports__;

})();