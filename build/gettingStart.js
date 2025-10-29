/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/react-dom/client.js":
/*!******************************************!*\
  !*** ./node_modules/react-dom/client.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var m = __webpack_require__(/*! react-dom */ "react-dom");
if (false) // removed by dead control flow
{} else {
  var i = m.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  exports.createRoot = function(c, o) {
    i.usingClientEntryPoint = true;
    try {
      return m.createRoot(c, o);
    } finally {
      i.usingClientEntryPoint = false;
    }
  };
  exports.hydrateRoot = function(c, h, o) {
    i.usingClientEntryPoint = true;
    try {
      return m.hydrateRoot(c, h, o);
    } finally {
      i.usingClientEntryPoint = false;
    }
  };
}


/***/ }),

/***/ "./src/Components/App.js":
/*!*******************************!*\
  !*** ./src/Components/App.js ***!
  \*******************************/
/***/ (() => {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: C:\\Users\\hazra\\Local Sites\\media-player\\app\\public\\wp-content\\plugins\\reactive-dashboard\\src\\Components\\App.js: Unexpected token (11:0)\n\n\u001b[0m \u001b[90m  9 |\u001b[39m     platforms\u001b[33m:\u001b[39m [\u001b[32m'facebook'\u001b[39m\u001b[33m,\u001b[39m \u001b[32m'twitter'\u001b[39m\u001b[33m,\u001b[39m \u001b[32m'linkedin'\u001b[39m]\u001b[33m,\u001b[39m\n \u001b[90m 10 |\u001b[39m     buttonStyle\u001b[33m:\u001b[39m \u001b[32m'square'\u001b[39m\u001b[33m,\u001b[39m\n\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 11 |\u001b[39m \u001b[33m<<\u001b[39m\u001b[33m<<\u001b[39m\u001b[33m<<\u001b[39m\u001b[33m<\u001b[39m \u001b[33mHEAD\u001b[39m\n \u001b[90m    |\u001b[39m \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\n \u001b[90m 12 |\u001b[39m     buttonBgColor\u001b[33m:\u001b[39m \u001b[32m'#007bff'\u001b[39m\u001b[33m,\u001b[39m\n \u001b[90m 13 |\u001b[39m     buttonColor\u001b[33m:\u001b[39m \u001b[32m'#ffffff'\u001b[39m\u001b[33m,\u001b[39m\n \u001b[90m 14 |\u001b[39m     buttonSize\u001b[33m:\u001b[39m \u001b[32m'medium'\u001b[39m\u001b[33m,\u001b[39m\u001b[0m\n    at constructor (C:\\Users\\hazra\\Local Sites\\media-player\\app\\public\\wp-content\\plugins\\reactive-dashboard\\node_modules\\@babel\\parser\\lib\\index.js:367:19)\n    at JSXParserMixin.raise (C:\\Users\\hazra\\Local Sites\\media-player\\app\\public\\wp-content\\plugins\\reactive-dashboard\\node_modules\\@babel\\parser\\lib\\index.js:6624:19)\n    at JSXParserMixin.unexpected (C:\\Users\\hazra\\Local Sites\\media-player\\app\\public\\wp-content\\plugins\\reactive-dashboard\\node_modules\\@babel\\parser\\lib\\index.js:6644:16)\n    at JSXParserMixin.parsePropertyName (C:\\Users\\hazra\\Local Sites\\media-player\\app\\public\\wp-content\\plugins\\reactive-dashboard\\node_modules\\@babel\\parser\\lib\\index.js:12098:18)\n    at JSXParserMixin.parsePropertyDefinition (C:\\Users\\hazra\\Local Sites\\media-player\\app\\public\\wp-content\\plugins\\reactive-dashboard\\node_modules\\@babel\\parser\\lib\\index.js:11963:10)\n    at JSXParserMixin.parseObjectLike (C:\\Users\\hazra\\Local Sites\\media-player\\app\\public\\wp-content\\plugins\\reactive-dashboard\\node_modules\\@babel\\parser\\lib\\index.js:11904:21)\n    at JSXParserMixin.parseExprAtom (C:\\Users\\hazra\\Local Sites\\media-player\\app\\public\\wp-content\\plugins\\reactive-dashboard\\node_modules\\@babel\\parser\\lib\\index.js:11403:23)\n    at JSXParserMixin.parseExprAtom (C:\\Users\\hazra\\Local Sites\\media-player\\app\\public\\wp-content\\plugins\\reactive-dashboard\\node_modules\\@babel\\parser\\lib\\index.js:4793:20)\n    at JSXParserMixin.parseExprSubscripts (C:\\Users\\hazra\\Local Sites\\media-player\\app\\public\\wp-content\\plugins\\reactive-dashboard\\node_modules\\@babel\\parser\\lib\\index.js:11145:23)\n    at JSXParserMixin.parseUpdate (C:\\Users\\hazra\\Local Sites\\media-player\\app\\public\\wp-content\\plugins\\reactive-dashboard\\node_modules\\@babel\\parser\\lib\\index.js:11130:21)\n    at JSXParserMixin.parseMaybeUnary (C:\\Users\\hazra\\Local Sites\\media-player\\app\\public\\wp-content\\plugins\\reactive-dashboard\\node_modules\\@babel\\parser\\lib\\index.js:11110:23)\n    at JSXParserMixin.parseMaybeUnaryOrPrivate (C:\\Users\\hazra\\Local Sites\\media-player\\app\\public\\wp-content\\plugins\\reactive-dashboard\\node_modules\\@babel\\parser\\lib\\index.js:10963:61)\n    at JSXParserMixin.parseExprOps (C:\\Users\\hazra\\Local Sites\\media-player\\app\\public\\wp-content\\plugins\\reactive-dashboard\\node_modules\\@babel\\parser\\lib\\index.js:10968:23)\n    at JSXParserMixin.parseMaybeConditional (C:\\Users\\hazra\\Local Sites\\media-player\\app\\public\\wp-content\\plugins\\reactive-dashboard\\node_modules\\@babel\\parser\\lib\\index.js:10945:23)\n    at JSXParserMixin.parseMaybeAssign (C:\\Users\\hazra\\Local Sites\\media-player\\app\\public\\wp-content\\plugins\\reactive-dashboard\\node_modules\\@babel\\parser\\lib\\index.js:10895:21)\n    at C:\\Users\\hazra\\Local Sites\\media-player\\app\\public\\wp-content\\plugins\\reactive-dashboard\\node_modules\\@babel\\parser\\lib\\index.js:10864:39\n    at JSXParserMixin.allowInAnd (C:\\Users\\hazra\\Local Sites\\media-player\\app\\public\\wp-content\\plugins\\reactive-dashboard\\node_modules\\@babel\\parser\\lib\\index.js:12500:12)\n    at JSXParserMixin.parseMaybeAssignAllowIn (C:\\Users\\hazra\\Local Sites\\media-player\\app\\public\\wp-content\\plugins\\reactive-dashboard\\node_modules\\@babel\\parser\\lib\\index.js:10864:17)\n    at JSXParserMixin.parseMaybeAssignAllowInOrVoidPattern (C:\\Users\\hazra\\Local Sites\\media-player\\app\\public\\wp-content\\plugins\\reactive-dashboard\\node_modules\\@babel\\parser\\lib\\index.js:12567:17)\n    at JSXParserMixin.parseExprListItem (C:\\Users\\hazra\\Local Sites\\media-player\\app\\public\\wp-content\\plugins\\reactive-dashboard\\node_modules\\@babel\\parser\\lib\\index.js:12249:18)\n    at JSXParserMixin.parseCallExpressionArguments (C:\\Users\\hazra\\Local Sites\\media-player\\app\\public\\wp-content\\plugins\\reactive-dashboard\\node_modules\\@babel\\parser\\lib\\index.js:11316:22)\n    at JSXParserMixin.parseCoverCallAndAsyncArrowHead (C:\\Users\\hazra\\Local Sites\\media-player\\app\\public\\wp-content\\plugins\\reactive-dashboard\\node_modules\\@babel\\parser\\lib\\index.js:11250:29)\n    at JSXParserMixin.parseSubscript (C:\\Users\\hazra\\Local Sites\\media-player\\app\\public\\wp-content\\plugins\\reactive-dashboard\\node_modules\\@babel\\parser\\lib\\index.js:11184:19)\n    at JSXParserMixin.parseSubscripts (C:\\Users\\hazra\\Local Sites\\media-player\\app\\public\\wp-content\\plugins\\reactive-dashboard\\node_modules\\@babel\\parser\\lib\\index.js:11158:19)\n    at JSXParserMixin.parseExprSubscripts (C:\\Users\\hazra\\Local Sites\\media-player\\app\\public\\wp-content\\plugins\\reactive-dashboard\\node_modules\\@babel\\parser\\lib\\index.js:11149:17)\n    at JSXParserMixin.parseUpdate (C:\\Users\\hazra\\Local Sites\\media-player\\app\\public\\wp-content\\plugins\\reactive-dashboard\\node_modules\\@babel\\parser\\lib\\index.js:11130:21)\n    at JSXParserMixin.parseMaybeUnary (C:\\Users\\hazra\\Local Sites\\media-player\\app\\public\\wp-content\\plugins\\reactive-dashboard\\node_modules\\@babel\\parser\\lib\\index.js:11110:23)\n    at JSXParserMixin.parseMaybeUnaryOrPrivate (C:\\Users\\hazra\\Local Sites\\media-player\\app\\public\\wp-content\\plugins\\reactive-dashboard\\node_modules\\@babel\\parser\\lib\\index.js:10963:61)\n    at JSXParserMixin.parseExprOps (C:\\Users\\hazra\\Local Sites\\media-player\\app\\public\\wp-content\\plugins\\reactive-dashboard\\node_modules\\@babel\\parser\\lib\\index.js:10968:23)\n    at JSXParserMixin.parseMaybeConditional (C:\\Users\\hazra\\Local Sites\\media-player\\app\\public\\wp-content\\plugins\\reactive-dashboard\\node_modules\\@babel\\parser\\lib\\index.js:10945:23)\n    at JSXParserMixin.parseMaybeAssign (C:\\Users\\hazra\\Local Sites\\media-player\\app\\public\\wp-content\\plugins\\reactive-dashboard\\node_modules\\@babel\\parser\\lib\\index.js:10895:21)\n    at C:\\Users\\hazra\\Local Sites\\media-player\\app\\public\\wp-content\\plugins\\reactive-dashboard\\node_modules\\@babel\\parser\\lib\\index.js:10864:39\n    at JSXParserMixin.allowInAnd (C:\\Users\\hazra\\Local Sites\\media-player\\app\\public\\wp-content\\plugins\\reactive-dashboard\\node_modules\\@babel\\parser\\lib\\index.js:12495:16)\n    at JSXParserMixin.parseMaybeAssignAllowIn (C:\\Users\\hazra\\Local Sites\\media-player\\app\\public\\wp-content\\plugins\\reactive-dashboard\\node_modules\\@babel\\parser\\lib\\index.js:10864:17)\n    at JSXParserMixin.parseVar (C:\\Users\\hazra\\Local Sites\\media-player\\app\\public\\wp-content\\plugins\\reactive-dashboard\\node_modules\\@babel\\parser\\lib\\index.js:13460:91)\n    at JSXParserMixin.parseVarStatement (C:\\Users\\hazra\\Local Sites\\media-player\\app\\public\\wp-content\\plugins\\reactive-dashboard\\node_modules\\@babel\\parser\\lib\\index.js:13306:10)\n    at JSXParserMixin.parseStatementContent (C:\\Users\\hazra\\Local Sites\\media-player\\app\\public\\wp-content\\plugins\\reactive-dashboard\\node_modules\\@babel\\parser\\lib\\index.js:12927:23)\n    at JSXParserMixin.parseStatementLike (C:\\Users\\hazra\\Local Sites\\media-player\\app\\public\\wp-content\\plugins\\reactive-dashboard\\node_modules\\@babel\\parser\\lib\\index.js:12843:17)\n    at JSXParserMixin.parseStatementListItem (C:\\Users\\hazra\\Local Sites\\media-player\\app\\public\\wp-content\\plugins\\reactive-dashboard\\node_modules\\@babel\\parser\\lib\\index.js:12823:17)\n    at JSXParserMixin.parseBlockOrModuleBlockBody (C:\\Users\\hazra\\Local Sites\\media-player\\app\\public\\wp-content\\plugins\\reactive-dashboard\\node_modules\\@babel\\parser\\lib\\index.js:13392:61)\n    at JSXParserMixin.parseBlockBody (C:\\Users\\hazra\\Local Sites\\media-player\\app\\public\\wp-content\\plugins\\reactive-dashboard\\node_modules\\@babel\\parser\\lib\\index.js:13385:10)\n    at JSXParserMixin.parseBlock (C:\\Users\\hazra\\Local Sites\\media-player\\app\\public\\wp-content\\plugins\\reactive-dashboard\\node_modules\\@babel\\parser\\lib\\index.js:13373:10)\n    at JSXParserMixin.parseFunctionBody (C:\\Users\\hazra\\Local Sites\\media-player\\app\\public\\wp-content\\plugins\\reactive-dashboard\\node_modules\\@babel\\parser\\lib\\index.js:12174:24)\n    at JSXParserMixin.parseFunctionBodyAndFinish (C:\\Users\\hazra\\Local Sites\\media-player\\app\\public\\wp-content\\plugins\\reactive-dashboard\\node_modules\\@babel\\parser\\lib\\index.js:12160:10)\n    at C:\\Users\\hazra\\Local Sites\\media-player\\app\\public\\wp-content\\plugins\\reactive-dashboard\\node_modules\\@babel\\parser\\lib\\index.js:13521:12\n    at JSXParserMixin.withSmartMixTopicForbiddingContext (C:\\Users\\hazra\\Local Sites\\media-player\\app\\public\\wp-content\\plugins\\reactive-dashboard\\node_modules\\@babel\\parser\\lib\\index.js:12477:14)\n    at JSXParserMixin.parseFunction (C:\\Users\\hazra\\Local Sites\\media-player\\app\\public\\wp-content\\plugins\\reactive-dashboard\\node_modules\\@babel\\parser\\lib\\index.js:13520:10)\n    at JSXParserMixin.parseFunctionStatement (C:\\Users\\hazra\\Local Sites\\media-player\\app\\public\\wp-content\\plugins\\reactive-dashboard\\node_modules\\@babel\\parser\\lib\\index.js:13201:17)\n    at JSXParserMixin.parseStatementContent (C:\\Users\\hazra\\Local Sites\\media-player\\app\\public\\wp-content\\plugins\\reactive-dashboard\\node_modules\\@babel\\parser\\lib\\index.js:12867:21)\n    at JSXParserMixin.parseStatementLike (C:\\Users\\hazra\\Local Sites\\media-player\\app\\public\\wp-content\\plugins\\reactive-dashboard\\node_modules\\@babel\\parser\\lib\\index.js:12843:17)");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = window["React"];

/***/ }),

/***/ "react-dom":
/*!***************************!*\
  !*** external "ReactDOM" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = window["ReactDOM"];

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
(() => {
"use strict";
/*!*****************************!*\
  !*** ./src/GettingStart.js ***!
  \*****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/client */ "./node_modules/react-dom/client.js");
/* harmony import */ var _Components_App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Components/App */ "./src/Components/App.js");



document.addEventListener('DOMContentLoaded', () => {
  const elementWrapper = document.getElementById('reactiveAdminDashboardPageWrapper');
  if (elementWrapper) {
    (0,react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot)(elementWrapper).render((0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Components_App__WEBPACK_IMPORTED_MODULE_2__["default"], null));
  }
  console.log(window.socialShareSettings);
});
})();

/******/ })()
;
//# sourceMappingURL=gettingStart.js.map