/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/react-dom/client.js":
/*!******************************************!*\
  !*** ./node_modules/react-dom/client.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



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

/***/ "./src/Welcome/App.js":
/*!****************************!*\
  !*** ./src/Welcome/App.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _SocialShareDashboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SocialShareDashboard */ "./src/Welcome/SocialShareDashboard.js");


function App() {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_SocialShareDashboard__WEBPACK_IMPORTED_MODULE_1__["default"], null));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);

/***/ }),

/***/ "./src/Welcome/SocialShareDashboard.js":
/*!*********************************************!*\
  !*** ./src/Welcome/SocialShareDashboard.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);



const SocialShareDashboard = () => {
  const previewButtons = [{
    platform: 'facebook',
    color: '#1877F2',
    icon: 'facebook-f'
  }, {
    platform: 'twitter',
    color: '#1DA1F2',
    icon: 'twitter'
  }, {
    platform: 'linkedin',
    color: '#0A66C2',
    icon: 'linkedin-in'
  }, {
    platform: 'pinterest',
    color: '#E60023',
    icon: 'pinterest-p'
  }];
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "social-share-dashboard wrap"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("header", {
    className: "dashboard-header"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h1", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
    className: "fas fa-share-alt",
    style: {
      marginRight: 12,
      color: '#0073aa',
      fontSize: '32px'
    }
  }), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Social Share Pro', 'social-share')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "description"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Boost engagement by letting visitors share your content instantly.', 'social-share'))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Card, {
    size: "large",
    elevation: 2,
    style: {
      marginBottom: '2rem'
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.CardHeader, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Get Started in 3 Steps', 'social-share'))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.CardBody, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Flex, {
    gap: "6",
    align: "start"
  }, [{
    num: 1,
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Choose Platforms', 'social-share'),
    desc: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Enable Facebook, X, LinkedIn, Pinterest, etc.', 'social-share'),
    icon: 'fas fa-check-circle'
  }, {
    num: 2,
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Customize Style', 'social-share'),
    desc: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Pick colors, size, icons, and display location.', 'social-share'),
    icon: 'fas fa-palette'
  }, {
    num: 3,
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Auto-Share on Publish', 'social-share'),
    desc: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Automatically post new content to your accounts.', 'social-share'),
    icon: 'fas fa-paper-plane'
  }].map((step, i) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.FlexItem, {
    key: i
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "step"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "step-number"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
    className: step.icon,
    style: {
      color: '#fff',
      fontSize: '18px'
    }
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h3", null, step.title), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, step.desc)))))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.CardFooter, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    variant: "primary",
    href: socialShareData.adminUrl + 'admin.php?page=social-share-style'
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Configure Style', 'social-share')))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Card, {
    size: "large",
    elevation: 1,
    style: {
      marginBottom: '2rem'
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.CardHeader, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h3", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Live Preview', 'social-share'))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.CardBody, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    style: {
      padding: 20,
      background: '#f9f9f9',
      borderRadius: 8,
      textAlign: 'center'
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    style: {
      marginBottom: 15,
      color: '#555'
    }
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('This is how your share buttons will look:', 'social-share')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    style: {
      display: 'inline-flex',
      gap: 10,
      flexWrap: 'wrap',
      justifyContent: 'center'
    }
  }, previewButtons.map(btn => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    key: btn.platform,
    href: "#",
    style: {
      backgroundColor: btn.color,
      color: 'white',
      padding: '10px 16px',
      borderRadius: 6,
      textDecoration: 'none',
      fontSize: 14,
      fontWeight: 500,
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
    className: `fab fa-${btn.icon}`
  }), btn.platform.charAt(0).toUpperCase() + btn.platform.slice(1))))))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    style: {
      marginTop: '2rem',
      display: 'flex',
      gap: 12,
      flexWrap: 'wrap'
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    variant: "secondary",
    icon: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
      className: "fas fa-cog"
    }),
    href: socialShareData.adminUrl + 'admin.php?page=social-share-style'
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Style Controls', 'social-share')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    variant: "secondary",
    icon: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
      className: "fas fa-book"
    }),
    href: "https://yourplugin.com/docs",
    target: "_blank"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Documentation', 'social-share')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    variant: "secondary",
    icon: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
      className: "fas fa-life-ring"
    }),
    href: "https://yourplugin.com/support",
    target: "_blank"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Get Support', 'social-share'))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    style: {
      marginTop: '3rem',
      textAlign: 'center',
      color: '#666',
      fontSize: 13
    }
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Social Share Pro', 'social-share'), " v1.0.0 \u2022 Built with", (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    style: {
      color: '#d63638',
      margin: '0 4px'
    }
  }, "heart"), "for WordPress"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("style", null, `
                .dashboard-header h1 { 
                    font-size:2.5rem; margin:0 0 8px; display:flex; align-items:center; 
                }
                .dashboard-header .description { 
                    font-size:1.1rem; color:#555; margin:0; 
                }
                .step { 
                    text-align:center; max-width:200px; 
                }
                .step-number { 
                    display:inline-flex; align-items:center; justify-content:center;
                    width:48px; height:48px; background:#0073aa; color:#fff; border-radius:50%;
                    font-weight:bold; margin:0 auto 12px; font-size:16px;
                }
                .step h3 { margin:0 0 8px; font-size:1.1rem; }
                .step p { margin:0; font-size:0.9rem; color:#555; }
            `));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SocialShareDashboard);

/***/ }),

/***/ "./src/Welcome/welcome.scss":
/*!**********************************!*\
  !*** ./src/Welcome/welcome.scss ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

module.exports = window["React"];

/***/ }),

/***/ "react-dom":
/*!***************************!*\
  !*** external "ReactDOM" ***!
  \***************************/
/***/ ((module) => {

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
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!********************************!*\
  !*** ./src/Welcome/Welcome.js ***!
  \********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/client */ "./node_modules/react-dom/client.js");
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App */ "./src/Welcome/App.js");
/* harmony import */ var _welcome_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./welcome.scss */ "./src/Welcome/welcome.scss");




document.addEventListener('DOMContentLoaded', () => {
  const welcomePageWrapper = document.getElementById("welcomeSettingsWrapper");
  console.log('yah');
  if (welcomePageWrapper) {
    (0,react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot)(welcomePageWrapper).render((0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_App__WEBPACK_IMPORTED_MODULE_2__["default"], null));
  }
});
})();

/******/ })()
;
//# sourceMappingURL=welcomePage.js.map