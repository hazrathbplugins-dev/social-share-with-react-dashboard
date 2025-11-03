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

/***/ "./src/SubmenuPage/App.js":
/*!********************************!*\
  !*** ./src/SubmenuPage/App.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _assets_style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/style.scss */ "./src/assets/style.scss");
/* harmony import */ var _main_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main.scss */ "./src/SubmenuPage/main.scss");
/* harmony import */ var _DisplaySetting__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DisplaySetting */ "./src/SubmenuPage/DisplaySetting.js");
/* harmony import */ var _AutoShare__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./AutoShare */ "./src/SubmenuPage/AutoShare.js");






function App() {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "App wrap"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "dashboard-wrapper"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "dashboard-header"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "icon-wrapper"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
    class: "fa-solid fa-wrench"
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", null, "Social Share Settings")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "container-area"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "social-share-display-setting setting-page-wrapper"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_DisplaySetting__WEBPACK_IMPORTED_MODULE_3__["default"], null)), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "auto-social-share-setting setting-page-wrapper"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_AutoShare__WEBPACK_IMPORTED_MODULE_4__["default"], null)))));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);

/***/ }),

/***/ "./src/SubmenuPage/AutoShare.js":
/*!**************************************!*\
  !*** ./src/SubmenuPage/AutoShare.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


const AutoShare = () => {
  const [autoShareEnabled, setAutoShareEnabled] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [fbAppId, setFbAppId] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [fbAppSecret, setFbAppSecret] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [fbAccessToken, setFbAccessToken] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [fbPageId, setFbPageId] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [autoShareFacebook, setAutoShareFacebook] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [xApiKey, setXApiKey] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [xApiSecret, setXApiSecret] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [xAccessToken, setXAccessToken] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [xAccessSecret, setXAccessSecret] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [bearerToken, setBearerToken] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [xAutoShareTwitter, setXAutoShareTwitter] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);

  // LinkedIn Settings
  const [linkedinClientId, setLinkedinClientId] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [linkedinClientSecret, setLinkedinClientSecret] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [linkedinAccessToken, setLinkedinAccessToken] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [linkedinCompanyId, setLinkedinCompanyId] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [linkedinAutoShare, setLinkedinAutoShare] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);

  // Pinterest Settings
  const [pinterestAppId, setPinterestAppId] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [pinterestAppSecret, setPinterestAppSecret] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [pinterestAccessToken, setPinterestAccessToken] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [pinterestBoardId, setPinterestBoardId] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [pinterestAutoShare, setPinterestAutoShare] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const handleAutoShareSettingOption = e => {
    setAutoShareEnabled(e.target.checked);
  };
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "card-header"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
    class: "fa-solid fa-arrow-up-from-bracket"
  }), "Auto Social Share")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "auto-share-setting-area"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "form-group",
    style: {
      marginBottom: '20px'
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '10px'
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "checkbox",
    checked: autoShareEnabled,
    onChange: handleAutoShareSettingOption
  }), "Enable Auto Share"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("small", {
    style: {
      color: '#666'
    }
  }, "Automatically share posts to connected social accounts when published.")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "form-group"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h3", null, "Facebook Auto Share Settings"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", null, "Facebook App ID:"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "text",
    value: fbAppId,
    onChange: e => setFbAppId(e.target.value),
    placeholder: "Enter your Facebook App ID"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", null, "Facebook App Secret:"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "password",
    value: fbAppSecret,
    onChange: e => setFbAppSecret(e.target.value),
    placeholder: "Enter your Facebook App Secret"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", null, "Access Token:"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "text",
    value: fbAccessToken,
    onChange: e => setFbAccessToken(e.target.value),
    placeholder: "Enter a valid Access Token"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", null, "Page ID (optional):"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "text",
    value: fbPageId,
    onChange: e => setFbPageId(e.target.value),
    placeholder: "Enter Facebook Page ID"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    style: {
      marginTop: '10px'
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '10px'
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "checkbox",
    checked: autoShareFacebook,
    onChange: e => setAutoShareFacebook(e.target.checked)
  }), "Enable Auto Share to Facebook"))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "form-group"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h3", null, "Twitter (X) Auto Share Settings"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", null, "API Key (Consumer Key):"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "text",
    value: xApiKey,
    onChange: e => setXApiKey(e.target.value),
    placeholder: "Enter your Twitter API Key"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", null, "API Secret Key (Consumer Secret):"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "password",
    value: xApiSecret,
    onChange: e => setXApiSecret(e.target.value),
    placeholder: "Enter your API Secret Key"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", null, "Access Token:"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "text",
    value: xAccessToken,
    onChange: e => setXAccessToken(e.target.value),
    placeholder: "Enter Access Token"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", null, "Access Token Secret:"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "password",
    value: xAccessSecret,
    onChange: e => setXAccessSecret(e.target.value),
    placeholder: "Enter Access Token Secret"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", null, "Bearer Token (optional):"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "text",
    value: bearerToken,
    onChange: e => setBearerToken(e.target.value),
    placeholder: "Enter Bearer Token"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    style: {
      marginTop: '10px'
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '10px'
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "checkbox",
    checked: xAutoShareTwitter,
    onChange: e => setXAutoShareTwitter(e.target.checked)
  }), "Enable Auto Share to Twitter"))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h3", null, "Linkedin Auto Share Settings"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", null, "LinkedIn Client ID:"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "text",
    value: linkedinClientId,
    onChange: e => setLinkedinClientId(e.target.value)
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", null, "LinkedIn Client Secret:"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "password",
    value: linkedinClientSecret,
    onChange: e => setLinkedinClientSecret(e.target.value)
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", null, "Access Token:"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "text",
    value: linkedinAccessToken,
    onChange: e => setLinkedinAccessToken(e.target.value)
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", null, "Company Page ID (optional):"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "text",
    value: linkedinCompanyId,
    onChange: e => setLinkedinCompanyId(e.target.value)
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "checkbox",
    checked: linkedinAutoShare,
    onChange: e => setLinkedinAutoShare(e.target.checked)
  }), "Enable Auto Share"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h3", null, "Pinterest Auto Share Settings"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", null, "Pinterest App ID:"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "text",
    value: pinterestAppId,
    onChange: e => setPinterestAppId(e.target.value)
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", null, "Pinterest App Secret:"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "password",
    value: pinterestAppSecret,
    onChange: e => setPinterestAppSecret(e.target.value)
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", null, "Access Token:"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "text",
    value: pinterestAccessToken,
    onChange: e => setPinterestAccessToken(e.target.value)
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", null, "Board ID:"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "text",
    value: pinterestBoardId,
    onChange: e => setPinterestBoardId(e.target.value)
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "checkbox",
    checked: pinterestAutoShare,
    onChange: e => setPinterestAutoShare(e.target.checked)
  }), "Enable Auto Share"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    className: "btn btn-primary",
    style: {
      marginTop: '15px'
    }
  }, "Save Settings")));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AutoShare);

/***/ }),

/***/ "./src/SubmenuPage/DisplaySetting.js":
/*!*******************************************!*\
  !*** ./src/SubmenuPage/DisplaySetting.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


const DisplaySetting = () => {
  const [postTypes, setPostTypes] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const [selectedPostType, setSelectedPostType] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const [displayCondition, setDisplayCondition] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [buttonAlignment, setButtonAlignment] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('left');
  const availableCondition = [{
    value: 'before_title',
    label: 'Before Title'
  }, {
    value: 'after_title',
    label: 'After Title'
  }, {
    value: 'before_content',
    label: 'Before Post Content'
  }, {
    value: 'after_content',
    label: 'After Post Content'
  }, {
    value: 'footer',
    label: 'Footer'
  }, {
    value: 'stick',
    label: 'Sticky'
  }];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    fetch(ajaxurl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: new URLSearchParams({
        action: 'get_current_active_post_type',
        nonce: window.socialShareOptionSettings.nonce
      })
    }).then(response => response.json()).then(data => {
      console.log('Response:', data.success);
      if (data.success && Array.isArray(data.data)) {
        const filtered = data.data.filter(type => !['attachment', 'e-floating-buttons', 'elementor_library'].includes(type));
        setPostTypes(filtered);
      }
    });
  }, []);
  const handlePostTypeChange = e => {
    const selected = Array.from(e.target.selectedOptions, option => option.value);
    setSelectedPostType(selected);
  };
  const handleDisplayPositionChange = e => {
    setDisplayCondition(e.target.value);
    console.log('Selected display Condition:', e.target.value);
  };
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "card-header"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
    class: "fa-regular fa-thumbs-up"
  }), "Social Share Display")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "display-setting-are"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "form-group"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", null, "Select Post Type:"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("select", {
    value: selectedPostType,
    onChange: handlePostTypeChange,
    multiple: true,
    style: {
      height: '120px'
    }
  }, postTypes.length > 0 ? postTypes.map(type => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    key: type,
    value: type
  }, type.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase()))) : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", null, "Loading..."))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "form-group",
    style: {
      marginTop: '20px'
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", null, "Select Display Position(s):"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("select", {
    value: displayCondition,
    onChange: handleDisplayPositionChange
  }, availableCondition.map(pos => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    key: pos.value,
    value: pos.value
  }, pos.label)))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "form-group",
    style: {
      marginTop: '20px'
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", null, "Button Alignment:"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    style: {
      display: 'flex',
      gap: '20px',
      marginTop: '8px'
    }
  }, ['left', 'center', 'right'].map(align => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    key: align,
    style: {
      textTransform: 'capitalize'
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "radio",
    name: "buttonAlignment",
    value: align,
    checked: buttonAlignment === align,
    onChange: e => setButtonAlignment(e.target.value)
  }), ' ', align)))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    className: "btn btn-primary",
    style: {
      marginTop: '15px'
    }
  }, "Save Settings")));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DisplaySetting);

/***/ }),

/***/ "./src/SubmenuPage/Setting.js":
/*!************************************!*\
  !*** ./src/SubmenuPage/Setting.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/client */ "./node_modules/react-dom/client.js");
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App */ "./src/SubmenuPage/App.js");



document.addEventListener("DOMContentLoaded", () => {
  const settingPageWrapper = document.getElementById("reactiveAdminDashboardSubMenuPageWrapper");
  if (settingPageWrapper) {
    (0,react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot)(settingPageWrapper).render((0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_App__WEBPACK_IMPORTED_MODULE_2__["default"], null));
  }
});

/***/ }),

/***/ "./src/SubmenuPage/main.scss":
/*!***********************************!*\
  !*** ./src/SubmenuPage/main.scss ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/assets/style.scss":
/*!*******************************!*\
  !*** ./src/assets/style.scss ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"settingPage": 0,
/******/ 			"./style-gettingStart": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = globalThis["webpackChunkreactive_dashboard"] = globalThis["webpackChunkreactive_dashboard"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["./style-gettingStart"], () => (__webpack_require__("./src/SubmenuPage/Setting.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=settingPage.js.map