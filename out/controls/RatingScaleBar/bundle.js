/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
var pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad;
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./RatingScaleBar/Rating.tsx":
/*!***********************************!*\
  !*** ./RatingScaleBar/Rating.tsx ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Rating: () => (/* binding */ Rating)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nclass Rating extends react__WEBPACK_IMPORTED_MODULE_0__.Component {\n  constructor(props) {\n    var _a, _b;\n    super(props);\n    this.handleClick = value => {\n      this.setState({\n        selectedValue: value\n      });\n      this.props.onChange(value);\n    };\n    this.getColor = (index, max) => {\n      var ratio = index / max;\n      if (ratio <= 0.33) return '#ff0000'; // red\n      if (ratio <= 0.66) return '#ffff00'; // yellow\n      return '#00ff00'; // green\n    };\n    this.state = {\n      selectedValue: (_b = (_a = props.value) !== null && _a !== void 0 ? _a : props.defaultValue) !== null && _b !== void 0 ? _b : 0\n    };\n  }\n  componentDidUpdate(prevProps) {\n    if (prevProps.value !== this.props.value) {\n      this.setState({\n        selectedValue: this.props.value\n      });\n    }\n  }\n  render() {\n    var {\n      scale\n    } = this.props;\n    var {\n      selectedValue\n    } = this.state;\n    var max = parseInt(scale);\n    var points = Array.from({\n      length: max\n    }, (_, i) => i + 1);\n    var fillPercentage = selectedValue / max * 100;\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n      className: \"rating-container\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n      className: \"rating-bar\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n      className: \"rating-fill\",\n      style: {\n        width: \"\".concat(fillPercentage, \"%\")\n      }\n    }), points.map((point, index) => (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n      key: point,\n      className: \"rating-cell\",\n      style: {\n        left: \"\".concat(index / max * 100, \"%\"),\n        width: \"\".concat(100 / max, \"%\")\n      },\n      onClick: () => this.handleClick(point),\n      \"aria-label\": \"Rate \".concat(point, \" out of \").concat(max),\n      role: \"button\",\n      tabIndex: 0,\n      onKeyDown: e => {\n        if (e.key === 'Enter' || e.key === ' ') {\n          this.handleClick(point);\n        }\n      }\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"span\", {\n      className: \"cell-number\"\n    }, point))))));\n  }\n}\n\n//# sourceURL=webpack://pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad/./RatingScaleBar/Rating.tsx?\n}");

/***/ }),

/***/ "./RatingScaleBar/index.ts":
/*!*********************************!*\
  !*** ./RatingScaleBar/index.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   RatingScaleBar: () => (/* binding */ RatingScaleBar)\n/* harmony export */ });\n/* harmony import */ var _Rating__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Rating */ \"./RatingScaleBar/Rating.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nclass RatingScaleBar {\n  /**\n   * Empty constructor.\n   */\n  constructor() {\n    this.value = 0;\n    // Empty\n  }\n  /**\n   * Used to initialize the control instance. Controls can kick off remote server calls and other initialization actions here.\n   * Data-set values are not initialized here, use updateView.\n   * @param context The entire property bag available to control via Context Object; It contains values as set up by the customizer mapped to property names defined in the manifest, as well as utility functions.\n   * @param notifyOutputChanged A callback method to alert the framework that the control has new outputs ready to be retrieved asynchronously.\n   * @param state A piece of data that persists in one session for a single user. Can be set at any point in a controls life cycle by calling 'setControlState' in the Mode interface.\n   */\n  init(context, notifyOutputChanged, state) {\n    var _a, _b;\n    this.notifyOutputChanged = notifyOutputChanged;\n    this.value = (_b = (_a = context.parameters.value.raw) !== null && _a !== void 0 ? _a : context.parameters.defaultValue.raw) !== null && _b !== void 0 ? _b : 0;\n  }\n  /**\n   * Called when any value in the property bag has changed. This includes field values, data-sets, global values such as container height and width, offline status, control metadata values such as label, visible, etc.\n   * @param context The entire property bag available to control via Context Object; It contains values as set up by names defined in the manifest, as well as utility functions\n   * @returns ReactElement root react element for the control\n   */\n  updateView(context) {\n    var _a;\n    var props = {\n      value: this.value,\n      scale: context.parameters.scale.raw,\n      defaultValue: (_a = context.parameters.defaultValue.raw) !== null && _a !== void 0 ? _a : undefined,\n      onChange: this.onChange.bind(this)\n    };\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_Rating__WEBPACK_IMPORTED_MODULE_0__.Rating, props);\n  }\n  onChange(value) {\n    this.value = value;\n    this.notifyOutputChanged();\n  }\n  /**\n   * It is called by the framework prior to a control receiving new data.\n   * @returns an object based on nomenclature defined in manifest, expecting object[s] for property marked as \"bound\" or \"output\"\n   */\n  getOutputs() {\n    return {\n      value: this.value\n    };\n  }\n  /**\n   * Called when the control is to be removed from the DOM tree. Controls should use this call for cleanup.\n   * i.e. cancelling any pending remote calls, removing listeners, etc.\n   */\n  destroy() {\n    // Add code to cleanup control if necessary\n  }\n}\n\n//# sourceURL=webpack://pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad/./RatingScaleBar/index.ts?\n}");

/***/ }),

/***/ "react":
/*!***************************!*\
  !*** external "Reactv16" ***!
  \***************************/
/***/ ((module) => {

module.exports = Reactv16;

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./RatingScaleBar/index.ts");
/******/ 	pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad = __webpack_exports__;
/******/ 	
/******/ })()
;
if (window.ComponentFramework && window.ComponentFramework.registerControl) {
	ComponentFramework.registerControl('AppWeaver.Controls.RatingScaleBar', pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad.RatingScaleBar);
} else {
	var AppWeaver = AppWeaver || {};
	AppWeaver.Controls = AppWeaver.Controls || {};
	AppWeaver.Controls.RatingScaleBar = pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad.RatingScaleBar;
	pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad = undefined;
}