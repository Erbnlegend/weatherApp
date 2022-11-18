"use strict";
(self["webpackChunkweatherapp"] = self["webpackChunkweatherapp"] || []).push([["bundle"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\n  margin: 0;\n}\n.background {\n  z-index: -2;\n  position: fixed;\n  background-attachment: fixed;\n  background-size: cover;\n  background-position: 50%;\n  background-repeat: no-repeat;\n  width: 100%;\n  height: 100%;\n}\n\n.background-container {\n  z-index: -1;\n  background-color: rgba(0, 0, 0, 0.562);\n  position: fixed;\n  top: 0;\n  width: 100%;\n  height: 100%;\n}\n\n.container {\n  background-color: rgba(2, 2, 2, 0.568);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: relative;\n  top: 0;\n  width: auto;\n  margin: 0 auto;\n  color: white;\n  padding: 75px;\n  font-weight: bold;\n}\n.wrapper {\n  margin-right: 50px;\n}\n\n/* Main Location Details */\n.time {\n  color: white;\n  font-size: 4rem;\n  padding: 15px;\n}\n.date {\n  color: white;\n  font-size: 2rem;\n  padding: 15px;\n}\n\n.temp {\n  font-size: 4rem;\n  text-align: center;\n}\n.small {\n  font-size: 1.5rem;\n  text-align: center;\n}\n.location {\n  text-align: center;\n  font-size: 2rem;\n}\n.icon {\n  height: 150px;\n  width: 150px;\n}\n.conditions {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-align: left;\n  font-size: 1rem;\n}\n.weatherIcon {\n  text-align: center;\n}\n\n/* More Information */\n.infoContainer {\n  display: flex;\n}\n.moreInfo, .sunInfo {\n  padding: 15px;\n}\n.sunInfo .infoDisplay {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(100px, 1fr));\n}\n.sunBar {\n  height: 5px;\n  border: 1px solid rgba(235, 230, 230, 0.5);\n  width: 100%;\n}\n.sunBarPercent {\n  display: flex;\n  position: relative;\n  background-color: #ff4500;\n  height: 5px;\n  width: 0%;\n  transition-duration: 2s;\n}\n.sunBarIcon {\n  position: absolute;\n  top: -200%;\n  left: -15%;\n  transition-duration: 2s;\n}\n.sunIcon {\n  text-align: center;\n}\n#feelsLike {\n  margin-bottom: 15px;\n}\n.feels {\n  margin-bottom: 10px;\n}\n.feels span {\n  font-size: 3rem;\n}\n.infoDisplay {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(150px, 1fr));\n  width: 20%;\n}\n.info {\n  display: flex;\n  align-items: center;\n  margin-bottom: 3px;\n  border-bottom: 1px solid rgba(235, 230, 230, 0.5);\n  padding: 3px 0;\n  margin-right: 5px;\n}\n.noBorder {\n  border: none;\n}\n#humidityBar {\n  height: 5px;\n  width: 80%;\n  border: 1px solid rgba(235, 230, 230, 0.5);\n  margin-left: 10px;\n}\n#humidityPercent {\n  background-color: aqua;\n  height: 5px;\n  width: 0%;\n  transition-duration: 2s;\n}\n\n/* Search Options */\nform {\n  display: flex;\n}\n#search {\n  width: 25%;\n  margin: 50px auto 10px auto;\n}\n.card {\n  background-color: white;\n  width: 15%;\n  margin: 0 auto 5px auto;\n  text-align: center;\n  padding: 5px;\n  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.685);\n}\n.card:hover {\n  cursor: pointer;\n  scale: 1.05;\n}\n\ninput[type='text'] {\n  padding: 5px;\n  width: 100%;\n  margin: 0 auto;\n  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.685);\n  border: 0;\n}\ninput[type='submit'] {\n  border-radius: 100%;\n  padding: 8px;\n  border: 0;\n  margin-left: 10px;\n  font-weight: bold;\n}\ninput:focus {\n  outline: none;\n}\n#error {\n  color: white;\n  font-weight: bold\n}\n.sunBarPercent .fill {\n  width: 100%;\n}\n.sunBarIcon .rightSun {\n  left: 100%;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,SAAS;AACX;AACA;EACE,WAAW;EACX,eAAe;EACf,4BAA4B;EAC5B,sBAAsB;EACtB,wBAAwB;EACxB,4BAA4B;EAC5B,WAAW;EACX,YAAY;AACd;;AAEA;EACE,WAAW;EACX,sCAAsC;EACtC,eAAe;EACf,MAAM;EACN,WAAW;EACX,YAAY;AACd;;AAEA;EACE,sCAAsC;EACtC,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,kBAAkB;EAClB,MAAM;EACN,WAAW;EACX,cAAc;EACd,YAAY;EACZ,aAAa;EACb,iBAAiB;AACnB;AACA;EACE,kBAAkB;AACpB;;AAEA,0BAA0B;AAC1B;EACE,YAAY;EACZ,eAAe;EACf,aAAa;AACf;AACA;EACE,YAAY;EACZ,eAAe;EACf,aAAa;AACf;;AAEA;EACE,eAAe;EACf,kBAAkB;AACpB;AACA;EACE,iBAAiB;EACjB,kBAAkB;AACpB;AACA;EACE,kBAAkB;EAClB,eAAe;AACjB;AACA;EACE,aAAa;EACb,YAAY;AACd;AACA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,gBAAgB;EAChB,eAAe;AACjB;AACA;EACE,kBAAkB;AACpB;;AAEA,qBAAqB;AACrB;EACE,aAAa;AACf;AACA;EACE,aAAa;AACf;AACA;EACE,aAAa;EACb,oDAAoD;AACtD;AACA;EACE,WAAW;EACX,0CAA0C;EAC1C,WAAW;AACb;AACA;EACE,aAAa;EACb,kBAAkB;EAClB,yBAAyB;EACzB,WAAW;EACX,SAAS;EACT,uBAAuB;AACzB;AACA;EACE,kBAAkB;EAClB,UAAU;EACV,UAAU;EACV,uBAAuB;AACzB;AACA;EACE,kBAAkB;AACpB;AACA;EACE,mBAAmB;AACrB;AACA;EACE,mBAAmB;AACrB;AACA;EACE,eAAe;AACjB;AACA;EACE,aAAa;EACb,oDAAoD;EACpD,UAAU;AACZ;AACA;EACE,aAAa;EACb,mBAAmB;EACnB,kBAAkB;EAClB,iDAAiD;EACjD,cAAc;EACd,iBAAiB;AACnB;AACA;EACE,YAAY;AACd;AACA;EACE,WAAW;EACX,UAAU;EACV,0CAA0C;EAC1C,iBAAiB;AACnB;AACA;EACE,sBAAsB;EACtB,WAAW;EACX,SAAS;EACT,uBAAuB;AACzB;;AAEA,mBAAmB;AACnB;EACE,aAAa;AACf;AACA;EACE,UAAU;EACV,2BAA2B;AAC7B;AACA;EACE,uBAAuB;EACvB,UAAU;EACV,uBAAuB;EACvB,kBAAkB;EAClB,YAAY;EACZ,4CAA4C;AAC9C;AACA;EACE,eAAe;EACf,WAAW;AACb;;AAEA;EACE,YAAY;EACZ,WAAW;EACX,cAAc;EACd,4CAA4C;EAC5C,SAAS;AACX;AACA;EACE,mBAAmB;EACnB,YAAY;EACZ,SAAS;EACT,iBAAiB;EACjB,iBAAiB;AACnB;AACA;EACE,aAAa;AACf;AACA;EACE,YAAY;EACZ;AACF;AACA;EACE,WAAW;AACb;AACA;EACE,UAAU;AACZ","sourcesContent":["body {\n  margin: 0;\n}\n.background {\n  z-index: -2;\n  position: fixed;\n  background-attachment: fixed;\n  background-size: cover;\n  background-position: 50%;\n  background-repeat: no-repeat;\n  width: 100%;\n  height: 100%;\n}\n\n.background-container {\n  z-index: -1;\n  background-color: rgba(0, 0, 0, 0.562);\n  position: fixed;\n  top: 0;\n  width: 100%;\n  height: 100%;\n}\n\n.container {\n  background-color: rgba(2, 2, 2, 0.568);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: relative;\n  top: 0;\n  width: auto;\n  margin: 0 auto;\n  color: white;\n  padding: 75px;\n  font-weight: bold;\n}\n.wrapper {\n  margin-right: 50px;\n}\n\n/* Main Location Details */\n.time {\n  color: white;\n  font-size: 4rem;\n  padding: 15px;\n}\n.date {\n  color: white;\n  font-size: 2rem;\n  padding: 15px;\n}\n\n.temp {\n  font-size: 4rem;\n  text-align: center;\n}\n.small {\n  font-size: 1.5rem;\n  text-align: center;\n}\n.location {\n  text-align: center;\n  font-size: 2rem;\n}\n.icon {\n  height: 150px;\n  width: 150px;\n}\n.conditions {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-align: left;\n  font-size: 1rem;\n}\n.weatherIcon {\n  text-align: center;\n}\n\n/* More Information */\n.infoContainer {\n  display: flex;\n}\n.moreInfo, .sunInfo {\n  padding: 15px;\n}\n.sunInfo .infoDisplay {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(100px, 1fr));\n}\n.sunBar {\n  height: 5px;\n  border: 1px solid rgba(235, 230, 230, 0.5);\n  width: 100%;\n}\n.sunBarPercent {\n  display: flex;\n  position: relative;\n  background-color: #ff4500;\n  height: 5px;\n  width: 0%;\n  transition-duration: 2s;\n}\n.sunBarIcon {\n  position: absolute;\n  top: -200%;\n  left: -15%;\n  transition-duration: 2s;\n}\n.sunIcon {\n  text-align: center;\n}\n#feelsLike {\n  margin-bottom: 15px;\n}\n.feels {\n  margin-bottom: 10px;\n}\n.feels span {\n  font-size: 3rem;\n}\n.infoDisplay {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(150px, 1fr));\n  width: 20%;\n}\n.info {\n  display: flex;\n  align-items: center;\n  margin-bottom: 3px;\n  border-bottom: 1px solid rgba(235, 230, 230, 0.5);\n  padding: 3px 0;\n  margin-right: 5px;\n}\n.noBorder {\n  border: none;\n}\n#humidityBar {\n  height: 5px;\n  width: 80%;\n  border: 1px solid rgba(235, 230, 230, 0.5);\n  margin-left: 10px;\n}\n#humidityPercent {\n  background-color: aqua;\n  height: 5px;\n  width: 0%;\n  transition-duration: 2s;\n}\n\n/* Search Options */\nform {\n  display: flex;\n}\n#search {\n  width: 25%;\n  margin: 50px auto 10px auto;\n}\n.card {\n  background-color: white;\n  width: 15%;\n  margin: 0 auto 5px auto;\n  text-align: center;\n  padding: 5px;\n  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.685);\n}\n.card:hover {\n  cursor: pointer;\n  scale: 1.05;\n}\n\ninput[type='text'] {\n  padding: 5px;\n  width: 100%;\n  margin: 0 auto;\n  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.685);\n  border: 0;\n}\ninput[type='submit'] {\n  border-radius: 100%;\n  padding: 8px;\n  border: 0;\n  margin-left: 10px;\n  font-weight: bold;\n}\ninput:focus {\n  outline: none;\n}\n#error {\n  color: white;\n  font-weight: bold\n}\n.sunBarPercent .fill {\n  width: 100%;\n}\n.sunBarIcon .rightSun {\n  left: 100%;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/lucide/dist/esm/createElement.js":
/*!*******************************************************!*\
  !*** ./node_modules/lucide/dist/esm/createElement.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Creates a new HTMLElement from icon node
 * @param {string} tag
 * @param {object} attrs
 * @param {array} children
 * @returns {HTMLElement}
 */
var createElement = function createElement(tag, attrs, children) {
  if (children === void 0) {
    children = [];
  }
  var element = document.createElementNS('http://www.w3.org/2000/svg', tag);
  Object.keys(attrs).forEach(function (name) {
    element.setAttribute(name, attrs[name]);
  });
  if (children.length) {
    children = children.forEach(function (child) {
      var childElement = createElement.apply(void 0, child);
      element.appendChild(childElement);
    });
  }
  return element;
};

/**
 * Creates a new HTMLElement from icon node
 * @param {[tag: string, attrs: object, children: array]} iconNode
 * @returns {HTMLElement}
 */
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (_ref) {
  var tag = _ref[0],
    attrs = _ref[1],
    children = _ref[2];
  return createElement(tag, attrs, children);
});

/***/ }),

/***/ "./node_modules/lucide/dist/esm/defaultAttributes.js":
/*!***********************************************************!*\
  !*** ./node_modules/lucide/dist/esm/defaultAttributes.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  xmlns: 'http://www.w3.org/2000/svg',
  width: 24,
  height: 24,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  'stroke-width': 2,
  'stroke-linecap': 'round',
  'stroke-linejoin': 'round'
});

/***/ }),

/***/ "./node_modules/lucide/dist/esm/icons/droplets.js":
/*!********************************************************!*\
  !*** ./node_modules/lucide/dist/esm/icons/droplets.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _defaultAttributes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../defaultAttributes */ "./node_modules/lucide/dist/esm/defaultAttributes.js");

var Droplets = ['svg', _defaultAttributes__WEBPACK_IMPORTED_MODULE_0__["default"], [['path', {
  d: 'M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z'
}], ['path', {
  d: 'M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97'
}]]];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Droplets);

/***/ }),

/***/ "./node_modules/lucide/dist/esm/icons/sun.js":
/*!***************************************************!*\
  !*** ./node_modules/lucide/dist/esm/icons/sun.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _defaultAttributes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../defaultAttributes */ "./node_modules/lucide/dist/esm/defaultAttributes.js");

var Sun = ['svg', _defaultAttributes__WEBPACK_IMPORTED_MODULE_0__["default"], [['circle', {
  cx: '12',
  cy: '12',
  r: '4'
}], ['path', {
  d: 'M12 2v2'
}], ['path', {
  d: 'M12 20v2'
}], ['path', {
  d: 'm4.93 4.93 1.41 1.41'
}], ['path', {
  d: 'm17.66 17.66 1.41 1.41'
}], ['path', {
  d: 'M2 12h2'
}], ['path', {
  d: 'M20 12h2'
}], ['path', {
  d: 'm6.34 17.66-1.41 1.41'
}], ['path', {
  d: 'm19.07 4.93-1.41 1.41'
}]]];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Sun);

/***/ }),

/***/ "./node_modules/lucide/dist/esm/icons/sunrise.js":
/*!*******************************************************!*\
  !*** ./node_modules/lucide/dist/esm/icons/sunrise.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _defaultAttributes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../defaultAttributes */ "./node_modules/lucide/dist/esm/defaultAttributes.js");

var Sunrise = ['svg', _defaultAttributes__WEBPACK_IMPORTED_MODULE_0__["default"], [['path', {
  d: 'M12 2v8'
}], ['path', {
  d: 'm4.93 10.93 1.41 1.41'
}], ['path', {
  d: 'M2 18h2'
}], ['path', {
  d: 'M20 18h2'
}], ['path', {
  d: 'm19.07 10.93-1.41 1.41'
}], ['path', {
  d: 'M22 22H2'
}], ['path', {
  d: 'm8 6 4-4 4 4'
}], ['path', {
  d: 'M16 18a4 4 0 0 0-8 0'
}]]];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Sunrise);

/***/ }),

/***/ "./node_modules/lucide/dist/esm/icons/sunset.js":
/*!******************************************************!*\
  !*** ./node_modules/lucide/dist/esm/icons/sunset.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _defaultAttributes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../defaultAttributes */ "./node_modules/lucide/dist/esm/defaultAttributes.js");

var Sunset = ['svg', _defaultAttributes__WEBPACK_IMPORTED_MODULE_0__["default"], [['path', {
  d: 'M12 10V2'
}], ['path', {
  d: 'm4.93 10.93 1.41 1.41'
}], ['path', {
  d: 'M2 18h2'
}], ['path', {
  d: 'M20 18h2'
}], ['path', {
  d: 'm19.07 10.93-1.41 1.41'
}], ['path', {
  d: 'M22 22H2'
}], ['path', {
  d: 'm16 6-4 4-4-4'
}], ['path', {
  d: 'M16 18a4 4 0 0 0-8 0'
}]]];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Sunset);

/***/ }),

/***/ "./node_modules/lucide/dist/esm/icons/thermometer.js":
/*!***********************************************************!*\
  !*** ./node_modules/lucide/dist/esm/icons/thermometer.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _defaultAttributes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../defaultAttributes */ "./node_modules/lucide/dist/esm/defaultAttributes.js");

var Thermometer = ['svg', _defaultAttributes__WEBPACK_IMPORTED_MODULE_0__["default"], [['path', {
  d: 'M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z'
}]]];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Thermometer);

/***/ }),

/***/ "./node_modules/lucide/dist/esm/icons/wind.js":
/*!****************************************************!*\
  !*** ./node_modules/lucide/dist/esm/icons/wind.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _defaultAttributes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../defaultAttributes */ "./node_modules/lucide/dist/esm/defaultAttributes.js");

var Wind = ['svg', _defaultAttributes__WEBPACK_IMPORTED_MODULE_0__["default"], [['path', {
  d: 'M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2'
}], ['path', {
  d: 'M9.6 4.6A2 2 0 1 1 11 8H2'
}], ['path', {
  d: 'M12.6 19.4A2 2 0 1 0 14 16H2'
}]]];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Wind);

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DOMElements": () => (/* binding */ DOMElements),
/* harmony export */   "addCardEvents": () => (/* binding */ addCardEvents),
/* harmony export */   "clear": () => (/* binding */ clear),
/* harmony export */   "renderHTML": () => (/* binding */ renderHTML),
/* harmony export */   "renderHumidity": () => (/* binding */ renderHumidity),
/* harmony export */   "renderIcons": () => (/* binding */ renderIcons),
/* harmony export */   "renderSun": () => (/* binding */ renderSun),
/* harmony export */   "updateBackground": () => (/* binding */ updateBackground)
/* harmony export */ });
/* harmony import */ var _requests_weatherAPI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./requests/weatherAPI */ "./src/requests/weatherAPI.js");


const DOMElements = {
  submitSearch: document.getElementById('submitSearch'),
  enteredCity: document.getElementById('enteredCity'),
  enteredCountry: document.getElementById('enteredCountry'),
  unit: document.getElementById('unit'),
  error: document.getElementById('error'),
  render: document.getElementById('searchOptions')
}

function clear () {
  const renderClear = [...document.querySelectorAll('.card')]
  renderClear.forEach(element => {
    element.remove()
  })
  DOMElements.error.innerHTML = ''
}

function addCardEvents () {
  const cardEvents = [...document.querySelectorAll('.card')]
  cardEvents.forEach(element => {
    element.addEventListener('click', function (e) {
      const state = e.target.dataset.state
      const JSONCoords = e.target.dataset.coords
      const coords = JSON.parse(JSONCoords)
      ;(0,_requests_weatherAPI__WEBPACK_IMPORTED_MODULE_0__.getWeatherData)(coords, state)
    })
  })
}

function renderHTML (weatherData, template) {
  DOMElements.enteredCity.setAttribute('placeholder', weatherData.name)
  DOMElements.enteredCountry.setAttribute('placeholder', weatherData.sys.country)
  const render = document.getElementById('appendWeatherData')
  render.innerHTML = template
}
function renderIcons (thermo, sunSet, sunRise, droplets, wind, wind2, sun) {
  const highLow = document.querySelector('.thermo')
  const humidity = document.querySelector('.droplets')
  const windIcon = document.querySelector('.wind')
  const windGustIcon = document.querySelector('.windGust')
  const sunset = document.querySelector('.sunset')
  const sunrise = document.querySelector('.sunrise')
  const sunIcon = document.querySelector('.sunBarIcon')

  highLow.append(thermo)
  humidity.append(droplets)
  windIcon.append(wind)
  windGustIcon.append(wind2)
  sunset.append(sunSet)
  sunrise.append(sunRise)
  sunIcon.append(sun)
}
function renderHumidity (humidity) {
  const percent = document.getElementById('humidityPercent')

  for (let i = 0; i <= humidity; i++) {
    setTimeout(() => {
      percent.style.width = `${i}%`
    }, 50)
  }
}
function renderSun (riseTime, setTime, currentTime) {
  const bar = document.querySelector('.sunBarPercent')
  const barIcon = document.querySelector('.sunBarIcon')
  let baseLine = 0
  const difference = setTime - riseTime
  if (currentTime > riseTime && currentTime < setTime) {
    barIcon.style.color = '#ff4500'
  }
  for (let i = riseTime; i <= currentTime; i++) {
    baseLine++
    riseTime++
    if (currentTime >= setTime) {
      for (let i = 0; i <= 100; i++) {
        setTimeout(() => {
          bar.style.width = `${i}%`
          barIcon.style.left = `${i - 3}%`
          bar.style.backgroundColor = '#ffffff'
        }, 50)
      }
      return
    }
    if (currentTime < riseTime) {
      bar.style.width = '0%'
      barIcon.style.left = '0'
      return
    }
    const percent = (baseLine / difference) * 100
    setTimeout(() => {
      bar.style.width = `${percent}%`
      barIcon.style.left = `${percent + 5}%`
    }, 50)
    if (percent >= 100) {
      bar.style.backgroundColor = '#ffffff'
      barIcon.style.color = '#ffffff'
    }
  }
}

function updateBackground (temp, condition) {
  const background = document.querySelector('.background')
  const index = conditionsMatch.findIndex(x => x.main === condition)
  background.style.backgroundImage = `url(${conditionsMatch[index].url})`
}

const conditionsMatch = [
  { main: 'Clear', url: 'imgs/ritam-baishya-ROVBDer29PQ-unsplash.jpg' },
  { main: 'Clouds', url: 'imgs/billy-huynh-v9bnfMCyKbg-unsplash.jpg' },
  { main: 'Thunderstorm', url: 'imgs/johannes-plenio-ESL1rIs9j48-unsplash.jpg' },
  { main: 'Drizzle', url: 'imgs/filip-zrnzevic-_EMkxLdko9k-unsplash.jpg' },
  { main: 'Rain', url: 'imgs/roman-synkevych-qPvBmSvmohs-unsplash.jpg' },
  { main: 'Snow', url: 'imgs/rye-jessen-GLOJ4NRWAyU-unsplash.jpg' },
  { main: 'Mist', url: 'imgs/annie-spratt-7CME6Wlgrdk-unsplash.jpg' },
  { main: 'Smoke', url: 'imgs/corina-rainer-jZc5eTXnYLU-unsplash.jpg' },
  { main: 'Haze', url: 'imgs/alex-gindin-ifpBOcQlhoY-unsplash.jpg' },
  { main: 'Dust', url: 'imgs/jessica-knowlden-Alkq_ht0GVk-unsplash.jpg' },
  { main: 'Fog', url: 'imgs/paul-pastourmatzis-KT3WlrL_bsg-unsplash.jpg' },
  { main: 'Sand', url: 'imgs/wolfgang-hasselmann-Fd01B6nNPbo-unsplash.jpg' },
  { main: 'Ash', url: 'imgs/william-krause-wPsDfkS_noU-unsplash.jpg' },
  { main: 'Squall', url: 'imgs/khamkeo-vilaysing-WtwSsqwYlA0-unsplash.jpg' },
  { main: 'Tornado', url: 'imgs/nikolas-noonan-fQM8cbGY6iQ-unsplash.jpg' }
]

// Submit Search Form
DOMElements.enteredCountry.addEventListener('input', function (e) {
  const string = DOMElements.enteredCountry.value
  const setStringLength = string.length
  if (setStringLength > 2) {
    DOMElements.error.innerHTML = 'Country can only accept two characters!'
  } else {
    DOMElements.error.innerHTML = ''
  }
})




/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.html */ "./src/index.html");
/* harmony import */ var _assets_thermometer_sun_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/thermometer-sun.png */ "./src/assets/thermometer-sun.png");
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dom */ "./src/dom.js");
/* harmony import */ var _user_location__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user-location */ "./src/user-location.js");
/* harmony import */ var _requests_geoSearch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./requests/geoSearch */ "./src/requests/geoSearch.js");
/* harmony import */ var _assets_ritam_baishya_ROVBDer29PQ_unsplash_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./assets/ritam-baishya-ROVBDer29PQ-unsplash.jpg */ "./src/assets/ritam-baishya-ROVBDer29PQ-unsplash.jpg");
/* harmony import */ var _assets_billy_huynh_v9bnfMCyKbg_unsplash_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./assets/billy-huynh-v9bnfMCyKbg-unsplash.jpg */ "./src/assets/billy-huynh-v9bnfMCyKbg-unsplash.jpg");
/* harmony import */ var _assets_johannes_plenio_ESL1rIs9j48_unsplash_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./assets/johannes-plenio-ESL1rIs9j48-unsplash.jpg */ "./src/assets/johannes-plenio-ESL1rIs9j48-unsplash.jpg");
/* harmony import */ var _assets_filip_zrnzevic_EMkxLdko9k_unsplash_jpg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./assets/filip-zrnzevic-_EMkxLdko9k-unsplash.jpg */ "./src/assets/filip-zrnzevic-_EMkxLdko9k-unsplash.jpg");
/* harmony import */ var _assets_roman_synkevych_qPvBmSvmohs_unsplash_jpg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./assets/roman-synkevych-qPvBmSvmohs-unsplash.jpg */ "./src/assets/roman-synkevych-qPvBmSvmohs-unsplash.jpg");
/* harmony import */ var _assets_rye_jessen_GLOJ4NRWAyU_unsplash_jpg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./assets/rye-jessen-GLOJ4NRWAyU-unsplash.jpg */ "./src/assets/rye-jessen-GLOJ4NRWAyU-unsplash.jpg");
/* harmony import */ var _assets_annie_spratt_7CME6Wlgrdk_unsplash_jpg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./assets/annie-spratt-7CME6Wlgrdk-unsplash.jpg */ "./src/assets/annie-spratt-7CME6Wlgrdk-unsplash.jpg");
/* harmony import */ var _assets_corina_rainer_jZc5eTXnYLU_unsplash_jpg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./assets/corina-rainer-jZc5eTXnYLU-unsplash.jpg */ "./src/assets/corina-rainer-jZc5eTXnYLU-unsplash.jpg");
/* harmony import */ var _assets_alex_gindin_ifpBOcQlhoY_unsplash_jpg__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./assets/alex-gindin-ifpBOcQlhoY-unsplash.jpg */ "./src/assets/alex-gindin-ifpBOcQlhoY-unsplash.jpg");
/* harmony import */ var _assets_jessica_knowlden_Alkq_ht0GVk_unsplash_jpg__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./assets/jessica-knowlden-Alkq_ht0GVk-unsplash.jpg */ "./src/assets/jessica-knowlden-Alkq_ht0GVk-unsplash.jpg");
/* harmony import */ var _assets_paul_pastourmatzis_KT3WlrL_bsg_unsplash_jpg__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./assets/paul-pastourmatzis-KT3WlrL_bsg-unsplash.jpg */ "./src/assets/paul-pastourmatzis-KT3WlrL_bsg-unsplash.jpg");
/* harmony import */ var _assets_wolfgang_hasselmann_Fd01B6nNPbo_unsplash_jpg__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./assets/wolfgang-hasselmann-Fd01B6nNPbo-unsplash.jpg */ "./src/assets/wolfgang-hasselmann-Fd01B6nNPbo-unsplash.jpg");
/* harmony import */ var _assets_william_krause_wPsDfkS_noU_unsplash_jpg__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./assets/william-krause-wPsDfkS_noU-unsplash.jpg */ "./src/assets/william-krause-wPsDfkS_noU-unsplash.jpg");
/* harmony import */ var _assets_khamkeo_vilaysing_WtwSsqwYlA0_unsplash_jpg__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./assets/khamkeo-vilaysing-WtwSsqwYlA0-unsplash.jpg */ "./src/assets/khamkeo-vilaysing-WtwSsqwYlA0-unsplash.jpg");
/* harmony import */ var _assets_nikolas_noonan_fQM8cbGY6iQ_unsplash_jpg__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./assets/nikolas-noonan-fQM8cbGY6iQ-unsplash.jpg */ "./src/assets/nikolas-noonan-fQM8cbGY6iQ-unsplash.jpg");























(0,_user_location__WEBPACK_IMPORTED_MODULE_4__.userLocation)()

_dom__WEBPACK_IMPORTED_MODULE_3__.DOMElements.submitSearch.addEventListener('submit', function (e) {
  e.preventDefault()
  const enteredCity = _dom__WEBPACK_IMPORTED_MODULE_3__.DOMElements.enteredCity.value
  const enteredCountry = _dom__WEBPACK_IMPORTED_MODULE_3__.DOMElements.enteredCountry.value
  ;(0,_requests_geoSearch__WEBPACK_IMPORTED_MODULE_5__.geoSearch)(enteredCity, enteredCountry)
})


/***/ }),

/***/ "./src/requests/geoSearch.js":
/*!***********************************!*\
  !*** ./src/requests/geoSearch.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "geoSearch": () => (/* binding */ geoSearch)
/* harmony export */ });
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../dom */ "./src/dom.js");
/* harmony import */ var _template_searchTemplate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../template/searchTemplate */ "./src/template/searchTemplate.js");



// 'https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid=dff09f416b1eecab3a6dac32139cf593'
// Get API data
async function geoSearch (position1, position2) {
  if (position1 !== '' && position2 === '') {
    try {
      const response = await fetch(
        `http://api.openweathermap.org/geo/1.0/direct?q=${position1}&limit=5&APPID=dff09f416b1eecab3a6dac32139cf593`,
        {
          mode: 'cors'
        })
      const geoData = await response.json()
      ;(0,_template_searchTemplate__WEBPACK_IMPORTED_MODULE_1__.searchTemplate)(geoData)
    } catch (error) {
      console.log(error)
    }
    return
  }
  if (position1 !== '' && position2 !== '') {
    try {
      const response = await fetch(
        `http://api.openweathermap.org/geo/1.0/direct?q=${position1},${position2}&limit=5&APPID=dff09f416b1eecab3a6dac32139cf593`,
        {
          mode: 'cors'
        })
      const geoData = await response.json()
      ;(0,_template_searchTemplate__WEBPACK_IMPORTED_MODULE_1__.searchTemplate)(geoData)
    } catch (error) {
      console.log(error)
      _dom__WEBPACK_IMPORTED_MODULE_0__.DOMElements.error.innerHTML = error
    }
  }
}




/***/ }),

/***/ "./src/requests/weatherAPI.js":
/*!************************************!*\
  !*** ./src/requests/weatherAPI.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getWeatherData": () => (/* binding */ getWeatherData)
/* harmony export */ });
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../dom */ "./src/dom.js");
/* harmony import */ var _template_weatherTemplate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../template/weatherTemplate */ "./src/template/weatherTemplate.js");



// 'https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid=dff09f416b1eecab3a6dac32139cf593'
// Get API data
async function getWeatherData (position1, position2) {
  (0,_dom__WEBPACK_IMPORTED_MODULE_0__.clear)()
  const units = 'imperial'
  if (!isNaN(position1.lat)) {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${position1.lat}&lon=${position1.lon}&units=${units}&APPID=dff09f416b1eecab3a6dac32139cf593`,
        {
          mode: 'cors'
        })
      const weatherData = await response.json()
      ;(0,_template_weatherTemplate__WEBPACK_IMPORTED_MODULE_1__.weatherTemplate)(weatherData, position2)
    } catch (error) {
      console.log(error)
    }
  }
}

// Export data for FUNctions



/***/ }),

/***/ "./src/requests/weatherIcons.js":
/*!**************************************!*\
  !*** ./src/requests/weatherIcons.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "weatherIcons": () => (/* binding */ weatherIcons)
/* harmony export */ });
async function weatherIcons (weatherData) {
  const response = await fetch(`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`, { credentials: 'omit' })
  const urlObj = response
  const url = urlObj.url
  return url
}




/***/ }),

/***/ "./src/template/searchTemplate.js":
/*!****************************************!*\
  !*** ./src/template/searchTemplate.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "searchTemplate": () => (/* binding */ searchTemplate)
/* harmony export */ });
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../dom */ "./src/dom.js");


async function searchTemplate (geoData) {
  (0,_dom__WEBPACK_IMPORTED_MODULE_0__.clear)()
  for (let i = 0; i < geoData.length; i++) {
    const renderTemplate = `
    <div class='card' data-state='${geoData[i].state}' data-coords='{"lat":${geoData[i].lat}, "lon": ${geoData[i].lon}}'>
    ${geoData[i].name}, ${geoData[i].state} ${geoData[i].country}
    </div>`

    const createDiv = document.createElement('div')
    renderTemplate.trim()
    createDiv.innerHTML = renderTemplate
    _dom__WEBPACK_IMPORTED_MODULE_0__.DOMElements.render.append(createDiv)
  }
  _dom__WEBPACK_IMPORTED_MODULE_0__.DOMElements.error.innerHTML = 'Did you mean this:'
  ;(0,_dom__WEBPACK_IMPORTED_MODULE_0__.addCardEvents)()
}




/***/ }),

/***/ "./src/template/weatherTemplate.js":
/*!*****************************************!*\
  !*** ./src/template/weatherTemplate.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "weatherTemplate": () => (/* binding */ weatherTemplate)
/* harmony export */ });
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../dom */ "./src/dom.js");
/* harmony import */ var _requests_weatherIcons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../requests/weatherIcons */ "./src/requests/weatherIcons.js");
/* harmony import */ var lucide__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lucide */ "./node_modules/lucide/dist/esm/createElement.js");
/* harmony import */ var lucide__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lucide */ "./node_modules/lucide/dist/esm/icons/thermometer.js");
/* harmony import */ var lucide__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lucide */ "./node_modules/lucide/dist/esm/icons/sunset.js");
/* harmony import */ var lucide__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lucide */ "./node_modules/lucide/dist/esm/icons/sunrise.js");
/* harmony import */ var lucide__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lucide */ "./node_modules/lucide/dist/esm/icons/droplets.js");
/* harmony import */ var lucide__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lucide */ "./node_modules/lucide/dist/esm/icons/wind.js");
/* harmony import */ var lucide__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lucide */ "./node_modules/lucide/dist/esm/icons/sun.js");




const thermo = (0,lucide__WEBPACK_IMPORTED_MODULE_2__["default"])(lucide__WEBPACK_IMPORTED_MODULE_3__["default"])
const sunSet = (0,lucide__WEBPACK_IMPORTED_MODULE_2__["default"])(lucide__WEBPACK_IMPORTED_MODULE_4__["default"])
const sunRise = (0,lucide__WEBPACK_IMPORTED_MODULE_2__["default"])(lucide__WEBPACK_IMPORTED_MODULE_5__["default"])
const droplets = (0,lucide__WEBPACK_IMPORTED_MODULE_2__["default"])(lucide__WEBPACK_IMPORTED_MODULE_6__["default"])
const wind = (0,lucide__WEBPACK_IMPORTED_MODULE_2__["default"])(lucide__WEBPACK_IMPORTED_MODULE_7__["default"])
const wind2 = (0,lucide__WEBPACK_IMPORTED_MODULE_2__["default"])(lucide__WEBPACK_IMPORTED_MODULE_7__["default"])
const sun = (0,lucide__WEBPACK_IMPORTED_MODULE_2__["default"])(lucide__WEBPACK_IMPORTED_MODULE_8__["default"])

async function weatherTemplate (weatherData, state) {
  console.log(weatherData)

  const time = currentTime(weatherData.dt, weatherData.timezone)
  const sunRiseTime = currentTime(weatherData.sys.sunrise, weatherData.timezone)
  const sunSetTime = currentTime(weatherData.sys.sunset, weatherData.timezone)
  // Fetch Icons to resolve cookie issue
  const icon = await (0,_requests_weatherIcons__WEBPACK_IMPORTED_MODULE_1__.weatherIcons)(weatherData)
  const renderTemplateTop = `<div class='background-container'>
  <div class='time'>${time.hour}:${time.minutes} ${time.ampm}</div>
  <div class='date'>${time.weekday}, ${time.month} ${time.date}</div>
    <div class='container'>
      <div class='wrapper'>
        <div class='location'>${weatherData.name}, ${state} ${weatherData.sys.country}</div>
        <div>
          <div class='temp'>${Math.ceil(weatherData.main.temp)}&#8457</div>
        </div>
        <div class='conditions'>
          <div class='skyCondition'>${weatherData.weather[0].main}</div>
        </div>
        <div class='weatherIcon'>
        <img src='${icon}' alt='Current Weather Conditions'>
      </div>
      </div>
      <div class='infoContainer'>
      <div class='moreInfo'>
        <div id='feelsLike'>
          <div class='feels'><span>${Math.ceil(weatherData.main.feels_like)}&#8457</span><br>Feels like</div>
        </div>
        <div class='infoDisplay'>
          <div class='info'><div class='thermo'></div>High | Low</div>
          <div class='info'><span>${Math.ceil(weatherData.main.temp_max)}&#8457</span>&#160|&#160<span>${Math.ceil(weatherData.main.temp_min)}&#8457</span></div>
          <div class='info'><div class='droplets'></div> Humidity</div>
          <div class='info'>${weatherData.main.humidity}%<div id='humidityBar'><div id='humidityPercent'></div></div></div>
        </div>
      <div class='infoDisplay'>
        <div class='info'><div class='wind'></div>Wind Speed</div>
        <div class='info'><span>${Math.ceil(weatherData.wind.speed)} mph</span></div>
        <div class='info'><div class='windGust'></div>Gusts</div>
        <div class='info'>${Math.ceil(weatherData.wind.gust)} mph</div>
      </div>
      </div>
      <div class='sunInfo'>
        <div class='infoDisplay'>
          <div class='sunIcon'><div class='sunrise'></div>${sunRiseTime.hour}:${sunRiseTime.minutes}</div>
          <div class='sunBar'><div class='sunBarPercent'><div class='sunBarIcon'></div></div></div>
          <div class='sunIcon'><div class='sunset'></div>${sunSetTime.hour}:${sunSetTime.minutes}</div>
        </div>
      </div>
    </div>
  </div>
    </div>
`
  ;(0,_dom__WEBPACK_IMPORTED_MODULE_0__.renderHTML)(weatherData, renderTemplateTop)
  ;(0,_dom__WEBPACK_IMPORTED_MODULE_0__.renderIcons)(thermo, sunSet, sunRise, droplets, wind, wind2, sun)
  ;(0,_dom__WEBPACK_IMPORTED_MODULE_0__.renderHumidity)(weatherData.main.humidity)
  ;(0,_dom__WEBPACK_IMPORTED_MODULE_0__.renderSun)(sunRiseTime.hour, sunSetTime.hour, time.hour)
  ;(0,_dom__WEBPACK_IMPORTED_MODULE_0__.updateBackground)(weatherData.main.temp, weatherData.weather[0].main)
}

function currentTime (dtIn, timezone) {
  const dateTime = new Date(dtIn * 1000 + timezone * 1000)

  const hour = (dateTime.getUTCHours() % 24)
  const ampm = hour < 12 ? 'am' : 'pm'

  let minutes = dateTime.getUTCMinutes()
  if (minutes < 10) {
    minutes = `0${minutes}`
  }
  const weekday = dateTime.toLocaleString('default', { timeZone: 'UTC', weekday: 'long' })
  const month = dateTime.toLocaleString('default', { timeZone: 'UTC', month: 'short' })
  const date = dateTime.getUTCDate()

  return {
    weekday,
    month,
    date,
    hour,
    minutes,
    ampm
  }
}




/***/ }),

/***/ "./src/user-location.js":
/*!******************************!*\
  !*** ./src/user-location.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "userLocation": () => (/* binding */ userLocation)
/* harmony export */ });
/* harmony import */ var _requests_weatherAPI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./requests/weatherAPI */ "./src/requests/weatherAPI.js");
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom */ "./src/dom.js");



function userLocation () {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showUserPosition)
  } else {
    _dom__WEBPACK_IMPORTED_MODULE_1__.DOMElements.error.innerHTML = 'You have disabled Location or is otherwise incapacitated'
  }
}

function showUserPosition (showUserPosition) {
  console.log(`Latitude: ${showUserPosition.coords.latitude} Longitude: ${showUserPosition.coords.longitude}`)
  const latitude = showUserPosition.coords.latitude
  const longitude = showUserPosition.coords.longitude
  const position = { lat: latitude, lon: longitude }
  const state = ''
  ;(0,_requests_weatherAPI__WEBPACK_IMPORTED_MODULE_0__.getWeatherData)(position, state)
}




/***/ }),

/***/ "./src/assets/alex-gindin-ifpBOcQlhoY-unsplash.jpg":
/*!*********************************************************!*\
  !*** ./src/assets/alex-gindin-ifpBOcQlhoY-unsplash.jpg ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "imgs/alex-gindin-ifpBOcQlhoY-unsplash.jpg";

/***/ }),

/***/ "./src/assets/annie-spratt-7CME6Wlgrdk-unsplash.jpg":
/*!**********************************************************!*\
  !*** ./src/assets/annie-spratt-7CME6Wlgrdk-unsplash.jpg ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "imgs/annie-spratt-7CME6Wlgrdk-unsplash.jpg";

/***/ }),

/***/ "./src/assets/billy-huynh-v9bnfMCyKbg-unsplash.jpg":
/*!*********************************************************!*\
  !*** ./src/assets/billy-huynh-v9bnfMCyKbg-unsplash.jpg ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "imgs/billy-huynh-v9bnfMCyKbg-unsplash.jpg";

/***/ }),

/***/ "./src/assets/corina-rainer-jZc5eTXnYLU-unsplash.jpg":
/*!***********************************************************!*\
  !*** ./src/assets/corina-rainer-jZc5eTXnYLU-unsplash.jpg ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "imgs/corina-rainer-jZc5eTXnYLU-unsplash.jpg";

/***/ }),

/***/ "./src/assets/filip-zrnzevic-_EMkxLdko9k-unsplash.jpg":
/*!************************************************************!*\
  !*** ./src/assets/filip-zrnzevic-_EMkxLdko9k-unsplash.jpg ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "imgs/filip-zrnzevic-_EMkxLdko9k-unsplash.jpg";

/***/ }),

/***/ "./src/assets/jessica-knowlden-Alkq_ht0GVk-unsplash.jpg":
/*!**************************************************************!*\
  !*** ./src/assets/jessica-knowlden-Alkq_ht0GVk-unsplash.jpg ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "imgs/jessica-knowlden-Alkq_ht0GVk-unsplash.jpg";

/***/ }),

/***/ "./src/assets/johannes-plenio-ESL1rIs9j48-unsplash.jpg":
/*!*************************************************************!*\
  !*** ./src/assets/johannes-plenio-ESL1rIs9j48-unsplash.jpg ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "imgs/johannes-plenio-ESL1rIs9j48-unsplash.jpg";

/***/ }),

/***/ "./src/assets/khamkeo-vilaysing-WtwSsqwYlA0-unsplash.jpg":
/*!***************************************************************!*\
  !*** ./src/assets/khamkeo-vilaysing-WtwSsqwYlA0-unsplash.jpg ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "imgs/khamkeo-vilaysing-WtwSsqwYlA0-unsplash.jpg";

/***/ }),

/***/ "./src/assets/nikolas-noonan-fQM8cbGY6iQ-unsplash.jpg":
/*!************************************************************!*\
  !*** ./src/assets/nikolas-noonan-fQM8cbGY6iQ-unsplash.jpg ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "imgs/nikolas-noonan-fQM8cbGY6iQ-unsplash.jpg";

/***/ }),

/***/ "./src/assets/paul-pastourmatzis-KT3WlrL_bsg-unsplash.jpg":
/*!****************************************************************!*\
  !*** ./src/assets/paul-pastourmatzis-KT3WlrL_bsg-unsplash.jpg ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "imgs/paul-pastourmatzis-KT3WlrL_bsg-unsplash.jpg";

/***/ }),

/***/ "./src/assets/ritam-baishya-ROVBDer29PQ-unsplash.jpg":
/*!***********************************************************!*\
  !*** ./src/assets/ritam-baishya-ROVBDer29PQ-unsplash.jpg ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "imgs/ritam-baishya-ROVBDer29PQ-unsplash.jpg";

/***/ }),

/***/ "./src/assets/roman-synkevych-qPvBmSvmohs-unsplash.jpg":
/*!*************************************************************!*\
  !*** ./src/assets/roman-synkevych-qPvBmSvmohs-unsplash.jpg ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "imgs/roman-synkevych-qPvBmSvmohs-unsplash.jpg";

/***/ }),

/***/ "./src/assets/rye-jessen-GLOJ4NRWAyU-unsplash.jpg":
/*!********************************************************!*\
  !*** ./src/assets/rye-jessen-GLOJ4NRWAyU-unsplash.jpg ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "imgs/rye-jessen-GLOJ4NRWAyU-unsplash.jpg";

/***/ }),

/***/ "./src/assets/thermometer-sun.png":
/*!****************************************!*\
  !*** ./src/assets/thermometer-sun.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "imgs/thermometer-sun.png";

/***/ }),

/***/ "./src/assets/william-krause-wPsDfkS_noU-unsplash.jpg":
/*!************************************************************!*\
  !*** ./src/assets/william-krause-wPsDfkS_noU-unsplash.jpg ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "imgs/william-krause-wPsDfkS_noU-unsplash.jpg";

/***/ }),

/***/ "./src/assets/wolfgang-hasselmann-Fd01B6nNPbo-unsplash.jpg":
/*!*****************************************************************!*\
  !*** ./src/assets/wolfgang-hasselmann-Fd01B6nNPbo-unsplash.jpg ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "imgs/wolfgang-hasselmann-Fd01B6nNPbo-unsplash.jpg";

/***/ }),

/***/ "./src/index.html":
/*!************************!*\
  !*** ./src/index.html ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "index.html";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/main.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNoQixFQUFFLGdEQUFTO0FBQ1gsRUFBRSx1REFBZ0I7QUFDbEI7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxrQkFBa0IsUUFBUTtBQUMxQjtBQUNBLHVEQUF1RCxrQ0FBa0M7QUFDekYscURBQXFELGlDQUFpQztBQUN0Rjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRTBCOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2hHNEI7QUFDbkI7O0FBRW5DO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSixJQUFJLDZEQUEyQjtBQUMvQjtBQUNBOztBQUVBO0FBQ0EsMkJBQTJCLGtDQUFrQyxhQUFhLGtDQUFrQztBQUM1RztBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0EsRUFBRSxxRUFBYztBQUNoQjs7QUFFdUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL25vZGVfbW9kdWxlcy9sdWNpZGUvZGlzdC9lc20vY3JlYXRlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vbm9kZV9tb2R1bGVzL2x1Y2lkZS9kaXN0L2VzbS9kZWZhdWx0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vbm9kZV9tb2R1bGVzL2x1Y2lkZS9kaXN0L2VzbS9pY29ucy9kcm9wbGV0cy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vbm9kZV9tb2R1bGVzL2x1Y2lkZS9kaXN0L2VzbS9pY29ucy9zdW4uanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL25vZGVfbW9kdWxlcy9sdWNpZGUvZGlzdC9lc20vaWNvbnMvc3VucmlzZS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vbm9kZV9tb2R1bGVzL2x1Y2lkZS9kaXN0L2VzbS9pY29ucy9zdW5zZXQuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL25vZGVfbW9kdWxlcy9sdWNpZGUvZGlzdC9lc20vaWNvbnMvdGhlcm1vbWV0ZXIuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL25vZGVfbW9kdWxlcy9sdWNpZGUvZGlzdC9lc20vaWNvbnMvd2luZC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL3NyYy9kb20uanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL3NyYy9tYWluLmpzIiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9zcmMvcmVxdWVzdHMvZ2VvU2VhcmNoLmpzIiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9zcmMvcmVxdWVzdHMvd2VhdGhlckFQSS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vc3JjL3JlcXVlc3RzL3dlYXRoZXJJY29ucy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vc3JjL3RlbXBsYXRlL3NlYXJjaFRlbXBsYXRlLmpzIiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9zcmMvdGVtcGxhdGUvd2VhdGhlclRlbXBsYXRlLmpzIiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9zcmMvdXNlci1sb2NhdGlvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImJvZHkge1xcbiAgbWFyZ2luOiAwO1xcbn1cXG4uYmFja2dyb3VuZCB7XFxuICB6LWluZGV4OiAtMjtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogNTAlO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4uYmFja2dyb3VuZC1jb250YWluZXIge1xcbiAgei1pbmRleDogLTE7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNTYyKTtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4uY29udGFpbmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMiwgMiwgMiwgMC41NjgpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHRvcDogMDtcXG4gIHdpZHRoOiBhdXRvO1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICBjb2xvcjogd2hpdGU7XFxuICBwYWRkaW5nOiA3NXB4O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcbi53cmFwcGVyIHtcXG4gIG1hcmdpbi1yaWdodDogNTBweDtcXG59XFxuXFxuLyogTWFpbiBMb2NhdGlvbiBEZXRhaWxzICovXFxuLnRpbWUge1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC1zaXplOiA0cmVtO1xcbiAgcGFkZGluZzogMTVweDtcXG59XFxuLmRhdGUge1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgcGFkZGluZzogMTVweDtcXG59XFxuXFxuLnRlbXAge1xcbiAgZm9udC1zaXplOiA0cmVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4uc21hbGwge1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi5sb2NhdGlvbiB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDJyZW07XFxufVxcbi5pY29uIHtcXG4gIGhlaWdodDogMTUwcHg7XFxuICB3aWR0aDogMTUwcHg7XFxufVxcbi5jb25kaXRpb25zIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG4ud2VhdGhlckljb24ge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4vKiBNb3JlIEluZm9ybWF0aW9uICovXFxuLmluZm9Db250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuLm1vcmVJbmZvLCAuc3VuSW5mbyB7XFxuICBwYWRkaW5nOiAxNXB4O1xcbn1cXG4uc3VuSW5mbyAuaW5mb0Rpc3BsYXkge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIG1pbm1heCgxMDBweCwgMWZyKSk7XFxufVxcbi5zdW5CYXIge1xcbiAgaGVpZ2h0OiA1cHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDIzNSwgMjMwLCAyMzAsIDAuNSk7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuLnN1bkJhclBlcmNlbnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjQ1MDA7XFxuICBoZWlnaHQ6IDVweDtcXG4gIHdpZHRoOiAwJTtcXG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDJzO1xcbn1cXG4uc3VuQmFySWNvbiB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IC0yMDAlO1xcbiAgbGVmdDogLTE1JTtcXG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDJzO1xcbn1cXG4uc3VuSWNvbiB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbiNmZWVsc0xpa2Uge1xcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcXG59XFxuLmZlZWxzIHtcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XFxufVxcbi5mZWVscyBzcGFuIHtcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXG59XFxuLmluZm9EaXNwbGF5IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCBtaW5tYXgoMTUwcHgsIDFmcikpO1xcbiAgd2lkdGg6IDIwJTtcXG59XFxuLmluZm8ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtYXJnaW4tYm90dG9tOiAzcHg7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgyMzUsIDIzMCwgMjMwLCAwLjUpO1xcbiAgcGFkZGluZzogM3B4IDA7XFxuICBtYXJnaW4tcmlnaHQ6IDVweDtcXG59XFxuLm5vQm9yZGVyIHtcXG4gIGJvcmRlcjogbm9uZTtcXG59XFxuI2h1bWlkaXR5QmFyIHtcXG4gIGhlaWdodDogNXB4O1xcbiAgd2lkdGg6IDgwJTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjM1LCAyMzAsIDIzMCwgMC41KTtcXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xcbn1cXG4jaHVtaWRpdHlQZXJjZW50IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGFxdWE7XFxuICBoZWlnaHQ6IDVweDtcXG4gIHdpZHRoOiAwJTtcXG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDJzO1xcbn1cXG5cXG4vKiBTZWFyY2ggT3B0aW9ucyAqL1xcbmZvcm0ge1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuI3NlYXJjaCB7XFxuICB3aWR0aDogMjUlO1xcbiAgbWFyZ2luOiA1MHB4IGF1dG8gMTBweCBhdXRvO1xcbn1cXG4uY2FyZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIHdpZHRoOiAxNSU7XFxuICBtYXJnaW46IDAgYXV0byA1cHggYXV0bztcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDVweDtcXG4gIGJveC1zaGFkb3c6IDJweCAycHggMnB4IHJnYmEoMCwgMCwgMCwgMC42ODUpO1xcbn1cXG4uY2FyZDpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBzY2FsZTogMS4wNTtcXG59XFxuXFxuaW5wdXRbdHlwZT0ndGV4dCddIHtcXG4gIHBhZGRpbmc6IDVweDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICBib3gtc2hhZG93OiAycHggMnB4IDJweCByZ2JhKDAsIDAsIDAsIDAuNjg1KTtcXG4gIGJvcmRlcjogMDtcXG59XFxuaW5wdXRbdHlwZT0nc3VibWl0J10ge1xcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcXG4gIHBhZGRpbmc6IDhweDtcXG4gIGJvcmRlcjogMDtcXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcbmlucHV0OmZvY3VzIHtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcbiNlcnJvciB7XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LXdlaWdodDogYm9sZFxcbn1cXG4uc3VuQmFyUGVyY2VudCAuZmlsbCB7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuLnN1bkJhckljb24gLnJpZ2h0U3VuIHtcXG4gIGxlZnQ6IDEwMCU7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxTQUFTO0FBQ1g7QUFDQTtFQUNFLFdBQVc7RUFDWCxlQUFlO0VBQ2YsNEJBQTRCO0VBQzVCLHNCQUFzQjtFQUN0Qix3QkFBd0I7RUFDeEIsNEJBQTRCO0VBQzVCLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsc0NBQXNDO0VBQ3RDLGVBQWU7RUFDZixNQUFNO0VBQ04sV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHNDQUFzQztFQUN0QyxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLFdBQVc7RUFDWCxjQUFjO0VBQ2QsWUFBWTtFQUNaLGFBQWE7RUFDYixpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQSwwQkFBMEI7QUFDMUI7RUFDRSxZQUFZO0VBQ1osZUFBZTtFQUNmLGFBQWE7QUFDZjtBQUNBO0VBQ0UsWUFBWTtFQUNaLGVBQWU7RUFDZixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxlQUFlO0VBQ2Ysa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsYUFBYTtFQUNiLFlBQVk7QUFDZDtBQUNBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLGVBQWU7QUFDakI7QUFDQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQSxxQkFBcUI7QUFDckI7RUFDRSxhQUFhO0FBQ2Y7QUFDQTtFQUNFLGFBQWE7QUFDZjtBQUNBO0VBQ0UsYUFBYTtFQUNiLG9EQUFvRDtBQUN0RDtBQUNBO0VBQ0UsV0FBVztFQUNYLDBDQUEwQztFQUMxQyxXQUFXO0FBQ2I7QUFDQTtFQUNFLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLFdBQVc7RUFDWCxTQUFTO0VBQ1QsdUJBQXVCO0FBQ3pCO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFVBQVU7RUFDVix1QkFBdUI7QUFDekI7QUFDQTtFQUNFLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxtQkFBbUI7QUFDckI7QUFDQTtFQUNFLGVBQWU7QUFDakI7QUFDQTtFQUNFLGFBQWE7RUFDYixvREFBb0Q7RUFDcEQsVUFBVTtBQUNaO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixpREFBaUQ7RUFDakQsY0FBYztFQUNkLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UsWUFBWTtBQUNkO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsVUFBVTtFQUNWLDBDQUEwQztFQUMxQyxpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLHNCQUFzQjtFQUN0QixXQUFXO0VBQ1gsU0FBUztFQUNULHVCQUF1QjtBQUN6Qjs7QUFFQSxtQkFBbUI7QUFDbkI7RUFDRSxhQUFhO0FBQ2Y7QUFDQTtFQUNFLFVBQVU7RUFDViwyQkFBMkI7QUFDN0I7QUFDQTtFQUNFLHVCQUF1QjtFQUN2QixVQUFVO0VBQ1YsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osNENBQTRDO0FBQzlDO0FBQ0E7RUFDRSxlQUFlO0VBQ2YsV0FBVztBQUNiOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCxjQUFjO0VBQ2QsNENBQTRDO0VBQzVDLFNBQVM7QUFDWDtBQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixTQUFTO0VBQ1QsaUJBQWlCO0VBQ2pCLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UsYUFBYTtBQUNmO0FBQ0E7RUFDRSxZQUFZO0VBQ1o7QUFDRjtBQUNBO0VBQ0UsV0FBVztBQUNiO0FBQ0E7RUFDRSxVQUFVO0FBQ1pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiYm9keSB7XFxuICBtYXJnaW46IDA7XFxufVxcbi5iYWNrZ3JvdW5kIHtcXG4gIHotaW5kZXg6IC0yO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA1MCU7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi5iYWNrZ3JvdW5kLWNvbnRhaW5lciB7XFxuICB6LWluZGV4OiAtMTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41NjIpO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi5jb250YWluZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyLCAyLCAyLCAwLjU2OCk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdG9wOiAwO1xcbiAgd2lkdGg6IGF1dG87XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHBhZGRpbmc6IDc1cHg7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuLndyYXBwZXIge1xcbiAgbWFyZ2luLXJpZ2h0OiA1MHB4O1xcbn1cXG5cXG4vKiBNYWluIExvY2F0aW9uIERldGFpbHMgKi9cXG4udGltZSB7XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LXNpemU6IDRyZW07XFxuICBwYWRkaW5nOiAxNXB4O1xcbn1cXG4uZGF0ZSB7XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LXNpemU6IDJyZW07XFxuICBwYWRkaW5nOiAxNXB4O1xcbn1cXG5cXG4udGVtcCB7XFxuICBmb250LXNpemU6IDRyZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi5zbWFsbCB7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLmxvY2F0aW9uIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG59XFxuLmljb24ge1xcbiAgaGVpZ2h0OiAxNTBweDtcXG4gIHdpZHRoOiAxNTBweDtcXG59XFxuLmNvbmRpdGlvbnMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxuICBmb250LXNpemU6IDFyZW07XFxufVxcbi53ZWF0aGVySWNvbiB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi8qIE1vcmUgSW5mb3JtYXRpb24gKi9cXG4uaW5mb0NvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG4ubW9yZUluZm8sIC5zdW5JbmZvIHtcXG4gIHBhZGRpbmc6IDE1cHg7XFxufVxcbi5zdW5JbmZvIC5pbmZvRGlzcGxheSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgbWlubWF4KDEwMHB4LCAxZnIpKTtcXG59XFxuLnN1bkJhciB7XFxuICBoZWlnaHQ6IDVweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjM1LCAyMzAsIDIzMCwgMC41KTtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG4uc3VuQmFyUGVyY2VudCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNDUwMDtcXG4gIGhlaWdodDogNXB4O1xcbiAgd2lkdGg6IDAlO1xcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMnM7XFxufVxcbi5zdW5CYXJJY29uIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogLTIwMCU7XFxuICBsZWZ0OiAtMTUlO1xcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMnM7XFxufVxcbi5zdW5JY29uIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuI2ZlZWxzTGlrZSB7XFxuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xcbn1cXG4uZmVlbHMge1xcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG59XFxuLmZlZWxzIHNwYW4ge1xcbiAgZm9udC1zaXplOiAzcmVtO1xcbn1cXG4uaW5mb0Rpc3BsYXkge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIG1pbm1heCgxNTBweCwgMWZyKSk7XFxuICB3aWR0aDogMjAlO1xcbn1cXG4uaW5mbyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1hcmdpbi1ib3R0b206IDNweDtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDIzNSwgMjMwLCAyMzAsIDAuNSk7XFxuICBwYWRkaW5nOiAzcHggMDtcXG4gIG1hcmdpbi1yaWdodDogNXB4O1xcbn1cXG4ubm9Cb3JkZXIge1xcbiAgYm9yZGVyOiBub25lO1xcbn1cXG4jaHVtaWRpdHlCYXIge1xcbiAgaGVpZ2h0OiA1cHg7XFxuICB3aWR0aDogODAlO1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyMzUsIDIzMCwgMjMwLCAwLjUpO1xcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxufVxcbiNodW1pZGl0eVBlcmNlbnQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYXF1YTtcXG4gIGhlaWdodDogNXB4O1xcbiAgd2lkdGg6IDAlO1xcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMnM7XFxufVxcblxcbi8qIFNlYXJjaCBPcHRpb25zICovXFxuZm9ybSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG4jc2VhcmNoIHtcXG4gIHdpZHRoOiAyNSU7XFxuICBtYXJnaW46IDUwcHggYXV0byAxMHB4IGF1dG87XFxufVxcbi5jYXJkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgd2lkdGg6IDE1JTtcXG4gIG1hcmdpbjogMCBhdXRvIDVweCBhdXRvO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgcGFkZGluZzogNXB4O1xcbiAgYm94LXNoYWRvdzogMnB4IDJweCAycHggcmdiYSgwLCAwLCAwLCAwLjY4NSk7XFxufVxcbi5jYXJkOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHNjYWxlOiAxLjA1O1xcbn1cXG5cXG5pbnB1dFt0eXBlPSd0ZXh0J10ge1xcbiAgcGFkZGluZzogNXB4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIGJveC1zaGFkb3c6IDJweCAycHggMnB4IHJnYmEoMCwgMCwgMCwgMC42ODUpO1xcbiAgYm9yZGVyOiAwO1xcbn1cXG5pbnB1dFt0eXBlPSdzdWJtaXQnXSB7XFxuICBib3JkZXItcmFkaXVzOiAxMDAlO1xcbiAgcGFkZGluZzogOHB4O1xcbiAgYm9yZGVyOiAwO1xcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuaW5wdXQ6Zm9jdXMge1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuI2Vycm9yIHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkXFxufVxcbi5zdW5CYXJQZXJjZW50IC5maWxsIHtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG4uc3VuQmFySWNvbiAucmlnaHRTdW4ge1xcbiAgbGVmdDogMTAwJTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCIvKipcbiAqIENyZWF0ZXMgYSBuZXcgSFRNTEVsZW1lbnQgZnJvbSBpY29uIG5vZGVcbiAqIEBwYXJhbSB7c3RyaW5nfSB0YWdcbiAqIEBwYXJhbSB7b2JqZWN0fSBhdHRyc1xuICogQHBhcmFtIHthcnJheX0gY2hpbGRyZW5cbiAqIEByZXR1cm5zIHtIVE1MRWxlbWVudH1cbiAqL1xudmFyIGNyZWF0ZUVsZW1lbnQgPSBmdW5jdGlvbiBjcmVhdGVFbGVtZW50KHRhZywgYXR0cnMsIGNoaWxkcmVuKSB7XG4gIGlmIChjaGlsZHJlbiA9PT0gdm9pZCAwKSB7XG4gICAgY2hpbGRyZW4gPSBbXTtcbiAgfVxuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUygnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLCB0YWcpO1xuICBPYmplY3Qua2V5cyhhdHRycykuZm9yRWFjaChmdW5jdGlvbiAobmFtZSkge1xuICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKG5hbWUsIGF0dHJzW25hbWVdKTtcbiAgfSk7XG4gIGlmIChjaGlsZHJlbi5sZW5ndGgpIHtcbiAgICBjaGlsZHJlbiA9IGNoaWxkcmVuLmZvckVhY2goZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgICB2YXIgY2hpbGRFbGVtZW50ID0gY3JlYXRlRWxlbWVudC5hcHBseSh2b2lkIDAsIGNoaWxkKTtcbiAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoY2hpbGRFbGVtZW50KTtcbiAgICB9KTtcbiAgfVxuICByZXR1cm4gZWxlbWVudDtcbn07XG5cbi8qKlxuICogQ3JlYXRlcyBhIG5ldyBIVE1MRWxlbWVudCBmcm9tIGljb24gbm9kZVxuICogQHBhcmFtIHtbdGFnOiBzdHJpbmcsIGF0dHJzOiBvYmplY3QsIGNoaWxkcmVuOiBhcnJheV19IGljb25Ob2RlXG4gKiBAcmV0dXJucyB7SFRNTEVsZW1lbnR9XG4gKi9cbmV4cG9ydCBkZWZhdWx0IChmdW5jdGlvbiAoX3JlZikge1xuICB2YXIgdGFnID0gX3JlZlswXSxcbiAgICBhdHRycyA9IF9yZWZbMV0sXG4gICAgY2hpbGRyZW4gPSBfcmVmWzJdO1xuICByZXR1cm4gY3JlYXRlRWxlbWVudCh0YWcsIGF0dHJzLCBjaGlsZHJlbik7XG59KTsiLCJleHBvcnQgZGVmYXVsdCB7XG4gIHhtbG5zOiAnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLFxuICB3aWR0aDogMjQsXG4gIGhlaWdodDogMjQsXG4gIHZpZXdCb3g6ICcwIDAgMjQgMjQnLFxuICBmaWxsOiAnbm9uZScsXG4gIHN0cm9rZTogJ2N1cnJlbnRDb2xvcicsXG4gICdzdHJva2Utd2lkdGgnOiAyLFxuICAnc3Ryb2tlLWxpbmVjYXAnOiAncm91bmQnLFxuICAnc3Ryb2tlLWxpbmVqb2luJzogJ3JvdW5kJ1xufTsiLCJpbXBvcnQgZGVmYXVsdEF0dHJpYnV0ZXMgZnJvbSAnLi4vZGVmYXVsdEF0dHJpYnV0ZXMnO1xudmFyIERyb3BsZXRzID0gWydzdmcnLCBkZWZhdWx0QXR0cmlidXRlcywgW1sncGF0aCcsIHtcbiAgZDogJ003IDE2LjNjMi4yIDAgNC0xLjgzIDQtNC4wNSAwLTEuMTYtLjU3LTIuMjYtMS43MS0zLjE5UzcuMjkgNi43NSA3IDUuM2MtLjI5IDEuNDUtMS4xNCAyLjg0LTIuMjkgMy43NlMzIDExLjEgMyAxMi4yNWMwIDIuMjIgMS44IDQuMDUgNCA0LjA1eidcbn1dLCBbJ3BhdGgnLCB7XG4gIGQ6ICdNMTIuNTYgNi42QTEwLjk3IDEwLjk3IDAgMCAwIDE0IDMuMDJjLjUgMi41IDIgNC45IDQgNi41czMgMy41IDMgNS41YTYuOTggNi45OCAwIDAgMS0xMS45MSA0Ljk3J1xufV1dXTtcbmV4cG9ydCBkZWZhdWx0IERyb3BsZXRzOyIsImltcG9ydCBkZWZhdWx0QXR0cmlidXRlcyBmcm9tICcuLi9kZWZhdWx0QXR0cmlidXRlcyc7XG52YXIgU3VuID0gWydzdmcnLCBkZWZhdWx0QXR0cmlidXRlcywgW1snY2lyY2xlJywge1xuICBjeDogJzEyJyxcbiAgY3k6ICcxMicsXG4gIHI6ICc0J1xufV0sIFsncGF0aCcsIHtcbiAgZDogJ00xMiAydjInXG59XSwgWydwYXRoJywge1xuICBkOiAnTTEyIDIwdjInXG59XSwgWydwYXRoJywge1xuICBkOiAnbTQuOTMgNC45MyAxLjQxIDEuNDEnXG59XSwgWydwYXRoJywge1xuICBkOiAnbTE3LjY2IDE3LjY2IDEuNDEgMS40MSdcbn1dLCBbJ3BhdGgnLCB7XG4gIGQ6ICdNMiAxMmgyJ1xufV0sIFsncGF0aCcsIHtcbiAgZDogJ00yMCAxMmgyJ1xufV0sIFsncGF0aCcsIHtcbiAgZDogJ202LjM0IDE3LjY2LTEuNDEgMS40MSdcbn1dLCBbJ3BhdGgnLCB7XG4gIGQ6ICdtMTkuMDcgNC45My0xLjQxIDEuNDEnXG59XV1dO1xuZXhwb3J0IGRlZmF1bHQgU3VuOyIsImltcG9ydCBkZWZhdWx0QXR0cmlidXRlcyBmcm9tICcuLi9kZWZhdWx0QXR0cmlidXRlcyc7XG52YXIgU3VucmlzZSA9IFsnc3ZnJywgZGVmYXVsdEF0dHJpYnV0ZXMsIFtbJ3BhdGgnLCB7XG4gIGQ6ICdNMTIgMnY4J1xufV0sIFsncGF0aCcsIHtcbiAgZDogJ200LjkzIDEwLjkzIDEuNDEgMS40MSdcbn1dLCBbJ3BhdGgnLCB7XG4gIGQ6ICdNMiAxOGgyJ1xufV0sIFsncGF0aCcsIHtcbiAgZDogJ00yMCAxOGgyJ1xufV0sIFsncGF0aCcsIHtcbiAgZDogJ20xOS4wNyAxMC45My0xLjQxIDEuNDEnXG59XSwgWydwYXRoJywge1xuICBkOiAnTTIyIDIySDInXG59XSwgWydwYXRoJywge1xuICBkOiAnbTggNiA0LTQgNCA0J1xufV0sIFsncGF0aCcsIHtcbiAgZDogJ00xNiAxOGE0IDQgMCAwIDAtOCAwJ1xufV1dXTtcbmV4cG9ydCBkZWZhdWx0IFN1bnJpc2U7IiwiaW1wb3J0IGRlZmF1bHRBdHRyaWJ1dGVzIGZyb20gJy4uL2RlZmF1bHRBdHRyaWJ1dGVzJztcbnZhciBTdW5zZXQgPSBbJ3N2ZycsIGRlZmF1bHRBdHRyaWJ1dGVzLCBbWydwYXRoJywge1xuICBkOiAnTTEyIDEwVjInXG59XSwgWydwYXRoJywge1xuICBkOiAnbTQuOTMgMTAuOTMgMS40MSAxLjQxJ1xufV0sIFsncGF0aCcsIHtcbiAgZDogJ00yIDE4aDInXG59XSwgWydwYXRoJywge1xuICBkOiAnTTIwIDE4aDInXG59XSwgWydwYXRoJywge1xuICBkOiAnbTE5LjA3IDEwLjkzLTEuNDEgMS40MSdcbn1dLCBbJ3BhdGgnLCB7XG4gIGQ6ICdNMjIgMjJIMidcbn1dLCBbJ3BhdGgnLCB7XG4gIGQ6ICdtMTYgNi00IDQtNC00J1xufV0sIFsncGF0aCcsIHtcbiAgZDogJ00xNiAxOGE0IDQgMCAwIDAtOCAwJ1xufV1dXTtcbmV4cG9ydCBkZWZhdWx0IFN1bnNldDsiLCJpbXBvcnQgZGVmYXVsdEF0dHJpYnV0ZXMgZnJvbSAnLi4vZGVmYXVsdEF0dHJpYnV0ZXMnO1xudmFyIFRoZXJtb21ldGVyID0gWydzdmcnLCBkZWZhdWx0QXR0cmlidXRlcywgW1sncGF0aCcsIHtcbiAgZDogJ00xNCA0djEwLjU0YTQgNCAwIDEgMS00IDBWNGEyIDIgMCAwIDEgNCAwWidcbn1dXV07XG5leHBvcnQgZGVmYXVsdCBUaGVybW9tZXRlcjsiLCJpbXBvcnQgZGVmYXVsdEF0dHJpYnV0ZXMgZnJvbSAnLi4vZGVmYXVsdEF0dHJpYnV0ZXMnO1xudmFyIFdpbmQgPSBbJ3N2ZycsIGRlZmF1bHRBdHRyaWJ1dGVzLCBbWydwYXRoJywge1xuICBkOiAnTTE3LjcgNy43YTIuNSAyLjUgMCAxIDEgMS44IDQuM0gyJ1xufV0sIFsncGF0aCcsIHtcbiAgZDogJ005LjYgNC42QTIgMiAwIDEgMSAxMSA4SDInXG59XSwgWydwYXRoJywge1xuICBkOiAnTTEyLjYgMTkuNEEyIDIgMCAxIDAgMTQgMTZIMidcbn1dXV07XG5leHBvcnQgZGVmYXVsdCBXaW5kOyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyBnZXRXZWF0aGVyRGF0YSB9IGZyb20gJy4vcmVxdWVzdHMvd2VhdGhlckFQSSdcblxuY29uc3QgRE9NRWxlbWVudHMgPSB7XG4gIHN1Ym1pdFNlYXJjaDogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N1Ym1pdFNlYXJjaCcpLFxuICBlbnRlcmVkQ2l0eTogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VudGVyZWRDaXR5JyksXG4gIGVudGVyZWRDb3VudHJ5OiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZW50ZXJlZENvdW50cnknKSxcbiAgdW5pdDogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VuaXQnKSxcbiAgZXJyb3I6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlcnJvcicpLFxuICByZW5kZXI6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWFyY2hPcHRpb25zJylcbn1cblxuZnVuY3Rpb24gY2xlYXIgKCkge1xuICBjb25zdCByZW5kZXJDbGVhciA9IFsuLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2FyZCcpXVxuICByZW5kZXJDbGVhci5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgIGVsZW1lbnQucmVtb3ZlKClcbiAgfSlcbiAgRE9NRWxlbWVudHMuZXJyb3IuaW5uZXJIVE1MID0gJydcbn1cblxuZnVuY3Rpb24gYWRkQ2FyZEV2ZW50cyAoKSB7XG4gIGNvbnN0IGNhcmRFdmVudHMgPSBbLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNhcmQnKV1cbiAgY2FyZEV2ZW50cy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xuICAgICAgY29uc3Qgc3RhdGUgPSBlLnRhcmdldC5kYXRhc2V0LnN0YXRlXG4gICAgICBjb25zdCBKU09OQ29vcmRzID0gZS50YXJnZXQuZGF0YXNldC5jb29yZHNcbiAgICAgIGNvbnN0IGNvb3JkcyA9IEpTT04ucGFyc2UoSlNPTkNvb3JkcylcbiAgICAgIGdldFdlYXRoZXJEYXRhKGNvb3Jkcywgc3RhdGUpXG4gICAgfSlcbiAgfSlcbn1cblxuZnVuY3Rpb24gcmVuZGVySFRNTCAod2VhdGhlckRhdGEsIHRlbXBsYXRlKSB7XG4gIERPTUVsZW1lbnRzLmVudGVyZWRDaXR5LnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCB3ZWF0aGVyRGF0YS5uYW1lKVxuICBET01FbGVtZW50cy5lbnRlcmVkQ291bnRyeS5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgd2VhdGhlckRhdGEuc3lzLmNvdW50cnkpXG4gIGNvbnN0IHJlbmRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHBlbmRXZWF0aGVyRGF0YScpXG4gIHJlbmRlci5pbm5lckhUTUwgPSB0ZW1wbGF0ZVxufVxuZnVuY3Rpb24gcmVuZGVySWNvbnMgKHRoZXJtbywgc3VuU2V0LCBzdW5SaXNlLCBkcm9wbGV0cywgd2luZCwgd2luZDIsIHN1bikge1xuICBjb25zdCBoaWdoTG93ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRoZXJtbycpXG4gIGNvbnN0IGh1bWlkaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRyb3BsZXRzJylcbiAgY29uc3Qgd2luZEljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud2luZCcpXG4gIGNvbnN0IHdpbmRHdXN0SWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53aW5kR3VzdCcpXG4gIGNvbnN0IHN1bnNldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdW5zZXQnKVxuICBjb25zdCBzdW5yaXNlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN1bnJpc2UnKVxuICBjb25zdCBzdW5JY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN1bkJhckljb24nKVxuXG4gIGhpZ2hMb3cuYXBwZW5kKHRoZXJtbylcbiAgaHVtaWRpdHkuYXBwZW5kKGRyb3BsZXRzKVxuICB3aW5kSWNvbi5hcHBlbmQod2luZClcbiAgd2luZEd1c3RJY29uLmFwcGVuZCh3aW5kMilcbiAgc3Vuc2V0LmFwcGVuZChzdW5TZXQpXG4gIHN1bnJpc2UuYXBwZW5kKHN1blJpc2UpXG4gIHN1bkljb24uYXBwZW5kKHN1bilcbn1cbmZ1bmN0aW9uIHJlbmRlckh1bWlkaXR5IChodW1pZGl0eSkge1xuICBjb25zdCBwZXJjZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2h1bWlkaXR5UGVyY2VudCcpXG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPD0gaHVtaWRpdHk7IGkrKykge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgcGVyY2VudC5zdHlsZS53aWR0aCA9IGAke2l9JWBcbiAgICB9LCA1MClcbiAgfVxufVxuZnVuY3Rpb24gcmVuZGVyU3VuIChyaXNlVGltZSwgc2V0VGltZSwgY3VycmVudFRpbWUpIHtcbiAgY29uc3QgYmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN1bkJhclBlcmNlbnQnKVxuICBjb25zdCBiYXJJY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN1bkJhckljb24nKVxuICBsZXQgYmFzZUxpbmUgPSAwXG4gIGNvbnN0IGRpZmZlcmVuY2UgPSBzZXRUaW1lIC0gcmlzZVRpbWVcbiAgaWYgKGN1cnJlbnRUaW1lID4gcmlzZVRpbWUgJiYgY3VycmVudFRpbWUgPCBzZXRUaW1lKSB7XG4gICAgYmFySWNvbi5zdHlsZS5jb2xvciA9ICcjZmY0NTAwJ1xuICB9XG4gIGZvciAobGV0IGkgPSByaXNlVGltZTsgaSA8PSBjdXJyZW50VGltZTsgaSsrKSB7XG4gICAgYmFzZUxpbmUrK1xuICAgIHJpc2VUaW1lKytcbiAgICBpZiAoY3VycmVudFRpbWUgPj0gc2V0VGltZSkge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPD0gMTAwOyBpKyspIHtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgYmFyLnN0eWxlLndpZHRoID0gYCR7aX0lYFxuICAgICAgICAgIGJhckljb24uc3R5bGUubGVmdCA9IGAke2kgLSAzfSVgXG4gICAgICAgICAgYmFyLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjZmZmZmZmJ1xuICAgICAgICB9LCA1MClcbiAgICAgIH1cbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBpZiAoY3VycmVudFRpbWUgPCByaXNlVGltZSkge1xuICAgICAgYmFyLnN0eWxlLndpZHRoID0gJzAlJ1xuICAgICAgYmFySWNvbi5zdHlsZS5sZWZ0ID0gJzAnXG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgY29uc3QgcGVyY2VudCA9IChiYXNlTGluZSAvIGRpZmZlcmVuY2UpICogMTAwXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBiYXIuc3R5bGUud2lkdGggPSBgJHtwZXJjZW50fSVgXG4gICAgICBiYXJJY29uLnN0eWxlLmxlZnQgPSBgJHtwZXJjZW50ICsgNX0lYFxuICAgIH0sIDUwKVxuICAgIGlmIChwZXJjZW50ID49IDEwMCkge1xuICAgICAgYmFyLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjZmZmZmZmJ1xuICAgICAgYmFySWNvbi5zdHlsZS5jb2xvciA9ICcjZmZmZmZmJ1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiB1cGRhdGVCYWNrZ3JvdW5kICh0ZW1wLCBjb25kaXRpb24pIHtcbiAgY29uc3QgYmFja2dyb3VuZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5iYWNrZ3JvdW5kJylcbiAgY29uc3QgaW5kZXggPSBjb25kaXRpb25zTWF0Y2guZmluZEluZGV4KHggPT4geC5tYWluID09PSBjb25kaXRpb24pXG4gIGJhY2tncm91bmQuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgke2NvbmRpdGlvbnNNYXRjaFtpbmRleF0udXJsfSlgXG59XG5cbmNvbnN0IGNvbmRpdGlvbnNNYXRjaCA9IFtcbiAgeyBtYWluOiAnQ2xlYXInLCB1cmw6ICdpbWdzL3JpdGFtLWJhaXNoeWEtUk9WQkRlcjI5UFEtdW5zcGxhc2guanBnJyB9LFxuICB7IG1haW46ICdDbG91ZHMnLCB1cmw6ICdpbWdzL2JpbGx5LWh1eW5oLXY5Ym5mTUN5S2JnLXVuc3BsYXNoLmpwZycgfSxcbiAgeyBtYWluOiAnVGh1bmRlcnN0b3JtJywgdXJsOiAnaW1ncy9qb2hhbm5lcy1wbGVuaW8tRVNMMXJJczlqNDgtdW5zcGxhc2guanBnJyB9LFxuICB7IG1haW46ICdEcml6emxlJywgdXJsOiAnaW1ncy9maWxpcC16cm56ZXZpYy1fRU1reExka285ay11bnNwbGFzaC5qcGcnIH0sXG4gIHsgbWFpbjogJ1JhaW4nLCB1cmw6ICdpbWdzL3JvbWFuLXN5bmtldnljaC1xUHZCbVN2bW9ocy11bnNwbGFzaC5qcGcnIH0sXG4gIHsgbWFpbjogJ1Nub3cnLCB1cmw6ICdpbWdzL3J5ZS1qZXNzZW4tR0xPSjROUldBeVUtdW5zcGxhc2guanBnJyB9LFxuICB7IG1haW46ICdNaXN0JywgdXJsOiAnaW1ncy9hbm5pZS1zcHJhdHQtN0NNRTZXbGdyZGstdW5zcGxhc2guanBnJyB9LFxuICB7IG1haW46ICdTbW9rZScsIHVybDogJ2ltZ3MvY29yaW5hLXJhaW5lci1qWmM1ZVRYbllMVS11bnNwbGFzaC5qcGcnIH0sXG4gIHsgbWFpbjogJ0hhemUnLCB1cmw6ICdpbWdzL2FsZXgtZ2luZGluLWlmcEJPY1FsaG9ZLXVuc3BsYXNoLmpwZycgfSxcbiAgeyBtYWluOiAnRHVzdCcsIHVybDogJ2ltZ3MvamVzc2ljYS1rbm93bGRlbi1BbGtxX2h0MEdWay11bnNwbGFzaC5qcGcnIH0sXG4gIHsgbWFpbjogJ0ZvZycsIHVybDogJ2ltZ3MvcGF1bC1wYXN0b3VybWF0emlzLUtUM1dsckxfYnNnLXVuc3BsYXNoLmpwZycgfSxcbiAgeyBtYWluOiAnU2FuZCcsIHVybDogJ2ltZ3Mvd29sZmdhbmctaGFzc2VsbWFubi1GZDAxQjZuTlBiby11bnNwbGFzaC5qcGcnIH0sXG4gIHsgbWFpbjogJ0FzaCcsIHVybDogJ2ltZ3Mvd2lsbGlhbS1rcmF1c2Utd1BzRGZrU19ub1UtdW5zcGxhc2guanBnJyB9LFxuICB7IG1haW46ICdTcXVhbGwnLCB1cmw6ICdpbWdzL2toYW1rZW8tdmlsYXlzaW5nLVd0d1NzcXdZbEEwLXVuc3BsYXNoLmpwZycgfSxcbiAgeyBtYWluOiAnVG9ybmFkbycsIHVybDogJ2ltZ3Mvbmlrb2xhcy1ub29uYW4tZlFNOGNiR1k2aVEtdW5zcGxhc2guanBnJyB9XG5dXG5cbi8vIFN1Ym1pdCBTZWFyY2ggRm9ybVxuRE9NRWxlbWVudHMuZW50ZXJlZENvdW50cnkuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBmdW5jdGlvbiAoZSkge1xuICBjb25zdCBzdHJpbmcgPSBET01FbGVtZW50cy5lbnRlcmVkQ291bnRyeS52YWx1ZVxuICBjb25zdCBzZXRTdHJpbmdMZW5ndGggPSBzdHJpbmcubGVuZ3RoXG4gIGlmIChzZXRTdHJpbmdMZW5ndGggPiAyKSB7XG4gICAgRE9NRWxlbWVudHMuZXJyb3IuaW5uZXJIVE1MID0gJ0NvdW50cnkgY2FuIG9ubHkgYWNjZXB0IHR3byBjaGFyYWN0ZXJzISdcbiAgfSBlbHNlIHtcbiAgICBET01FbGVtZW50cy5lcnJvci5pbm5lckhUTUwgPSAnJ1xuICB9XG59KVxuXG5leHBvcnQgeyBET01FbGVtZW50cywgY2xlYXIsIGFkZENhcmRFdmVudHMsIHJlbmRlckhUTUwsIHJlbmRlckljb25zLCByZW5kZXJIdW1pZGl0eSwgcmVuZGVyU3VuLCB1cGRhdGVCYWNrZ3JvdW5kIH1cbiIsImltcG9ydCAnLi9zdHlsZS5jc3MnXG5pbXBvcnQgJy4vaW5kZXguaHRtbCdcbmltcG9ydCAnLi9hc3NldHMvdGhlcm1vbWV0ZXItc3VuLnBuZydcbmltcG9ydCB7IERPTUVsZW1lbnRzIH0gZnJvbSAnLi9kb20nXG5pbXBvcnQgeyB1c2VyTG9jYXRpb24gfSBmcm9tICcuL3VzZXItbG9jYXRpb24nXG5pbXBvcnQgeyBnZW9TZWFyY2ggfSBmcm9tICcuL3JlcXVlc3RzL2dlb1NlYXJjaCdcblxuaW1wb3J0ICcuL2Fzc2V0cy9yaXRhbS1iYWlzaHlhLVJPVkJEZXIyOVBRLXVuc3BsYXNoLmpwZydcbmltcG9ydCAnLi9hc3NldHMvYmlsbHktaHV5bmgtdjlibmZNQ3lLYmctdW5zcGxhc2guanBnJ1xuaW1wb3J0ICcuL2Fzc2V0cy9qb2hhbm5lcy1wbGVuaW8tRVNMMXJJczlqNDgtdW5zcGxhc2guanBnJ1xuaW1wb3J0ICcuL2Fzc2V0cy9maWxpcC16cm56ZXZpYy1fRU1reExka285ay11bnNwbGFzaC5qcGcnXG5pbXBvcnQgJy4vYXNzZXRzL3JvbWFuLXN5bmtldnljaC1xUHZCbVN2bW9ocy11bnNwbGFzaC5qcGcnXG5pbXBvcnQgJy4vYXNzZXRzL3J5ZS1qZXNzZW4tR0xPSjROUldBeVUtdW5zcGxhc2guanBnJ1xuaW1wb3J0ICcuL2Fzc2V0cy9hbm5pZS1zcHJhdHQtN0NNRTZXbGdyZGstdW5zcGxhc2guanBnJ1xuaW1wb3J0ICcuL2Fzc2V0cy9jb3JpbmEtcmFpbmVyLWpaYzVlVFhuWUxVLXVuc3BsYXNoLmpwZydcbmltcG9ydCAnLi9hc3NldHMvYWxleC1naW5kaW4taWZwQk9jUWxob1ktdW5zcGxhc2guanBnJ1xuaW1wb3J0ICcuL2Fzc2V0cy9qZXNzaWNhLWtub3dsZGVuLUFsa3FfaHQwR1ZrLXVuc3BsYXNoLmpwZydcbmltcG9ydCAnLi9hc3NldHMvcGF1bC1wYXN0b3VybWF0emlzLUtUM1dsckxfYnNnLXVuc3BsYXNoLmpwZydcbmltcG9ydCAnLi9hc3NldHMvd29sZmdhbmctaGFzc2VsbWFubi1GZDAxQjZuTlBiby11bnNwbGFzaC5qcGcnXG5pbXBvcnQgJy4vYXNzZXRzL3dpbGxpYW0ta3JhdXNlLXdQc0Rma1Nfbm9VLXVuc3BsYXNoLmpwZydcbmltcG9ydCAnLi9hc3NldHMva2hhbWtlby12aWxheXNpbmctV3R3U3Nxd1lsQTAtdW5zcGxhc2guanBnJ1xuaW1wb3J0ICcuL2Fzc2V0cy9uaWtvbGFzLW5vb25hbi1mUU04Y2JHWTZpUS11bnNwbGFzaC5qcGcnXG5cbnVzZXJMb2NhdGlvbigpXG5cbkRPTUVsZW1lbnRzLnN1Ym1pdFNlYXJjaC5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBmdW5jdGlvbiAoZSkge1xuICBlLnByZXZlbnREZWZhdWx0KClcbiAgY29uc3QgZW50ZXJlZENpdHkgPSBET01FbGVtZW50cy5lbnRlcmVkQ2l0eS52YWx1ZVxuICBjb25zdCBlbnRlcmVkQ291bnRyeSA9IERPTUVsZW1lbnRzLmVudGVyZWRDb3VudHJ5LnZhbHVlXG4gIGdlb1NlYXJjaChlbnRlcmVkQ2l0eSwgZW50ZXJlZENvdW50cnkpXG59KVxuIiwiaW1wb3J0IHsgRE9NRWxlbWVudHMgfSBmcm9tICcuLi9kb20nXG5pbXBvcnQgeyBzZWFyY2hUZW1wbGF0ZSB9IGZyb20gJy4uL3RlbXBsYXRlL3NlYXJjaFRlbXBsYXRlJ1xuXG4vLyAnaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMy4wL29uZWNhbGw/bGF0PXtsYXR9Jmxvbj17bG9ufSZleGNsdWRlPXtwYXJ0fSZhcHBpZD1kZmYwOWY0MTZiMWVlY2FiM2E2ZGFjMzIxMzljZjU5Mydcbi8vIEdldCBBUEkgZGF0YVxuYXN5bmMgZnVuY3Rpb24gZ2VvU2VhcmNoIChwb3NpdGlvbjEsIHBvc2l0aW9uMikge1xuICBpZiAocG9zaXRpb24xICE9PSAnJyAmJiBwb3NpdGlvbjIgPT09ICcnKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXG4gICAgICAgIGBodHRwOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9nZW8vMS4wL2RpcmVjdD9xPSR7cG9zaXRpb24xfSZsaW1pdD01JkFQUElEPWRmZjA5ZjQxNmIxZWVjYWIzYTZkYWMzMjEzOWNmNTkzYCxcbiAgICAgICAge1xuICAgICAgICAgIG1vZGU6ICdjb3JzJ1xuICAgICAgICB9KVxuICAgICAgY29uc3QgZ2VvRGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKVxuICAgICAgc2VhcmNoVGVtcGxhdGUoZ2VvRGF0YSlcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5sb2coZXJyb3IpXG4gICAgfVxuICAgIHJldHVyblxuICB9XG4gIGlmIChwb3NpdGlvbjEgIT09ICcnICYmIHBvc2l0aW9uMiAhPT0gJycpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcbiAgICAgICAgYGh0dHA6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2dlby8xLjAvZGlyZWN0P3E9JHtwb3NpdGlvbjF9LCR7cG9zaXRpb24yfSZsaW1pdD01JkFQUElEPWRmZjA5ZjQxNmIxZWVjYWIzYTZkYWMzMjEzOWNmNTkzYCxcbiAgICAgICAge1xuICAgICAgICAgIG1vZGU6ICdjb3JzJ1xuICAgICAgICB9KVxuICAgICAgY29uc3QgZ2VvRGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKVxuICAgICAgc2VhcmNoVGVtcGxhdGUoZ2VvRGF0YSlcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5sb2coZXJyb3IpXG4gICAgICBET01FbGVtZW50cy5lcnJvci5pbm5lckhUTUwgPSBlcnJvclxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgeyBnZW9TZWFyY2ggfVxuIiwiaW1wb3J0IHsgY2xlYXIgfSBmcm9tICcuLi9kb20nXG5pbXBvcnQgeyB3ZWF0aGVyVGVtcGxhdGUgfSBmcm9tICcuLi90ZW1wbGF0ZS93ZWF0aGVyVGVtcGxhdGUnXG5cbi8vICdodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8zLjAvb25lY2FsbD9sYXQ9e2xhdH0mbG9uPXtsb259JmV4Y2x1ZGU9e3BhcnR9JmFwcGlkPWRmZjA5ZjQxNmIxZWVjYWIzYTZkYWMzMjEzOWNmNTkzJ1xuLy8gR2V0IEFQSSBkYXRhXG5hc3luYyBmdW5jdGlvbiBnZXRXZWF0aGVyRGF0YSAocG9zaXRpb24xLCBwb3NpdGlvbjIpIHtcbiAgY2xlYXIoKVxuICBjb25zdCB1bml0cyA9ICdpbXBlcmlhbCdcbiAgaWYgKCFpc05hTihwb3NpdGlvbjEubGF0KSkge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxuICAgICAgICBgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/bGF0PSR7cG9zaXRpb24xLmxhdH0mbG9uPSR7cG9zaXRpb24xLmxvbn0mdW5pdHM9JHt1bml0c30mQVBQSUQ9ZGZmMDlmNDE2YjFlZWNhYjNhNmRhYzMyMTM5Y2Y1OTNgLFxuICAgICAgICB7XG4gICAgICAgICAgbW9kZTogJ2NvcnMnXG4gICAgICAgIH0pXG4gICAgICBjb25zdCB3ZWF0aGVyRGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKVxuICAgICAgd2VhdGhlclRlbXBsYXRlKHdlYXRoZXJEYXRhLCBwb3NpdGlvbjIpXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxuICAgIH1cbiAgfVxufVxuXG4vLyBFeHBvcnQgZGF0YSBmb3IgRlVOY3Rpb25zXG5leHBvcnQgeyBnZXRXZWF0aGVyRGF0YSB9XG4iLCJhc3luYyBmdW5jdGlvbiB3ZWF0aGVySWNvbnMgKHdlYXRoZXJEYXRhKSB7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly9vcGVud2VhdGhlcm1hcC5vcmcvaW1nL3duLyR7d2VhdGhlckRhdGEud2VhdGhlclswXS5pY29ufUAyeC5wbmdgLCB7IGNyZWRlbnRpYWxzOiAnb21pdCcgfSlcbiAgY29uc3QgdXJsT2JqID0gcmVzcG9uc2VcbiAgY29uc3QgdXJsID0gdXJsT2JqLnVybFxuICByZXR1cm4gdXJsXG59XG5cbmV4cG9ydCB7IHdlYXRoZXJJY29ucyB9XG4iLCJpbXBvcnQgeyBhZGRDYXJkRXZlbnRzLCBjbGVhciwgRE9NRWxlbWVudHMgfSBmcm9tICcuLi9kb20nXG5cbmFzeW5jIGZ1bmN0aW9uIHNlYXJjaFRlbXBsYXRlIChnZW9EYXRhKSB7XG4gIGNsZWFyKClcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBnZW9EYXRhLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgcmVuZGVyVGVtcGxhdGUgPSBgXG4gICAgPGRpdiBjbGFzcz0nY2FyZCcgZGF0YS1zdGF0ZT0nJHtnZW9EYXRhW2ldLnN0YXRlfScgZGF0YS1jb29yZHM9J3tcImxhdFwiOiR7Z2VvRGF0YVtpXS5sYXR9LCBcImxvblwiOiAke2dlb0RhdGFbaV0ubG9ufX0nPlxuICAgICR7Z2VvRGF0YVtpXS5uYW1lfSwgJHtnZW9EYXRhW2ldLnN0YXRlfSAke2dlb0RhdGFbaV0uY291bnRyeX1cbiAgICA8L2Rpdj5gXG5cbiAgICBjb25zdCBjcmVhdGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIHJlbmRlclRlbXBsYXRlLnRyaW0oKVxuICAgIGNyZWF0ZURpdi5pbm5lckhUTUwgPSByZW5kZXJUZW1wbGF0ZVxuICAgIERPTUVsZW1lbnRzLnJlbmRlci5hcHBlbmQoY3JlYXRlRGl2KVxuICB9XG4gIERPTUVsZW1lbnRzLmVycm9yLmlubmVySFRNTCA9ICdEaWQgeW91IG1lYW4gdGhpczonXG4gIGFkZENhcmRFdmVudHMoKVxufVxuXG5leHBvcnQgeyBzZWFyY2hUZW1wbGF0ZSB9XG4iLCJpbXBvcnQgeyByZW5kZXJIVE1MLCByZW5kZXJJY29ucywgcmVuZGVySHVtaWRpdHksIHJlbmRlclN1biwgdXBkYXRlQmFja2dyb3VuZCB9IGZyb20gJy4uL2RvbSdcbmltcG9ydCB7IHdlYXRoZXJJY29ucyB9IGZyb20gJy4uL3JlcXVlc3RzL3dlYXRoZXJJY29ucydcbmltcG9ydCB7IFRoZXJtb21ldGVyLCBTdW5yaXNlLCBTdW5zZXQsIERyb3BsZXRzLCBXaW5kLCBTdW4sIGNyZWF0ZUVsZW1lbnQgfSBmcm9tICdsdWNpZGUnXG5cbmNvbnN0IHRoZXJtbyA9IGNyZWF0ZUVsZW1lbnQoVGhlcm1vbWV0ZXIpXG5jb25zdCBzdW5TZXQgPSBjcmVhdGVFbGVtZW50KFN1bnNldClcbmNvbnN0IHN1blJpc2UgPSBjcmVhdGVFbGVtZW50KFN1bnJpc2UpXG5jb25zdCBkcm9wbGV0cyA9IGNyZWF0ZUVsZW1lbnQoRHJvcGxldHMpXG5jb25zdCB3aW5kID0gY3JlYXRlRWxlbWVudChXaW5kKVxuY29uc3Qgd2luZDIgPSBjcmVhdGVFbGVtZW50KFdpbmQpXG5jb25zdCBzdW4gPSBjcmVhdGVFbGVtZW50KFN1bilcblxuYXN5bmMgZnVuY3Rpb24gd2VhdGhlclRlbXBsYXRlICh3ZWF0aGVyRGF0YSwgc3RhdGUpIHtcbiAgY29uc29sZS5sb2cod2VhdGhlckRhdGEpXG5cbiAgY29uc3QgdGltZSA9IGN1cnJlbnRUaW1lKHdlYXRoZXJEYXRhLmR0LCB3ZWF0aGVyRGF0YS50aW1lem9uZSlcbiAgY29uc3Qgc3VuUmlzZVRpbWUgPSBjdXJyZW50VGltZSh3ZWF0aGVyRGF0YS5zeXMuc3VucmlzZSwgd2VhdGhlckRhdGEudGltZXpvbmUpXG4gIGNvbnN0IHN1blNldFRpbWUgPSBjdXJyZW50VGltZSh3ZWF0aGVyRGF0YS5zeXMuc3Vuc2V0LCB3ZWF0aGVyRGF0YS50aW1lem9uZSlcbiAgLy8gRmV0Y2ggSWNvbnMgdG8gcmVzb2x2ZSBjb29raWUgaXNzdWVcbiAgY29uc3QgaWNvbiA9IGF3YWl0IHdlYXRoZXJJY29ucyh3ZWF0aGVyRGF0YSlcbiAgY29uc3QgcmVuZGVyVGVtcGxhdGVUb3AgPSBgPGRpdiBjbGFzcz0nYmFja2dyb3VuZC1jb250YWluZXInPlxuICA8ZGl2IGNsYXNzPSd0aW1lJz4ke3RpbWUuaG91cn06JHt0aW1lLm1pbnV0ZXN9ICR7dGltZS5hbXBtfTwvZGl2PlxuICA8ZGl2IGNsYXNzPSdkYXRlJz4ke3RpbWUud2Vla2RheX0sICR7dGltZS5tb250aH0gJHt0aW1lLmRhdGV9PC9kaXY+XG4gICAgPGRpdiBjbGFzcz0nY29udGFpbmVyJz5cbiAgICAgIDxkaXYgY2xhc3M9J3dyYXBwZXInPlxuICAgICAgICA8ZGl2IGNsYXNzPSdsb2NhdGlvbic+JHt3ZWF0aGVyRGF0YS5uYW1lfSwgJHtzdGF0ZX0gJHt3ZWF0aGVyRGF0YS5zeXMuY291bnRyeX08L2Rpdj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPSd0ZW1wJz4ke01hdGguY2VpbCh3ZWF0aGVyRGF0YS5tYWluLnRlbXApfSYjODQ1NzwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz0nY29uZGl0aW9ucyc+XG4gICAgICAgICAgPGRpdiBjbGFzcz0nc2t5Q29uZGl0aW9uJz4ke3dlYXRoZXJEYXRhLndlYXRoZXJbMF0ubWFpbn08L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9J3dlYXRoZXJJY29uJz5cbiAgICAgICAgPGltZyBzcmM9JyR7aWNvbn0nIGFsdD0nQ3VycmVudCBXZWF0aGVyIENvbmRpdGlvbnMnPlxuICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9J2luZm9Db250YWluZXInPlxuICAgICAgPGRpdiBjbGFzcz0nbW9yZUluZm8nPlxuICAgICAgICA8ZGl2IGlkPSdmZWVsc0xpa2UnPlxuICAgICAgICAgIDxkaXYgY2xhc3M9J2ZlZWxzJz48c3Bhbj4ke01hdGguY2VpbCh3ZWF0aGVyRGF0YS5tYWluLmZlZWxzX2xpa2UpfSYjODQ1Nzwvc3Bhbj48YnI+RmVlbHMgbGlrZTwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz0naW5mb0Rpc3BsYXknPlxuICAgICAgICAgIDxkaXYgY2xhc3M9J2luZm8nPjxkaXYgY2xhc3M9J3RoZXJtbyc+PC9kaXY+SGlnaCB8IExvdzwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9J2luZm8nPjxzcGFuPiR7TWF0aC5jZWlsKHdlYXRoZXJEYXRhLm1haW4udGVtcF9tYXgpfSYjODQ1Nzwvc3Bhbj4mIzE2MHwmIzE2MDxzcGFuPiR7TWF0aC5jZWlsKHdlYXRoZXJEYXRhLm1haW4udGVtcF9taW4pfSYjODQ1Nzwvc3Bhbj48L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPSdpbmZvJz48ZGl2IGNsYXNzPSdkcm9wbGV0cyc+PC9kaXY+IEh1bWlkaXR5PC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz0naW5mbyc+JHt3ZWF0aGVyRGF0YS5tYWluLmh1bWlkaXR5fSU8ZGl2IGlkPSdodW1pZGl0eUJhcic+PGRpdiBpZD0naHVtaWRpdHlQZXJjZW50Jz48L2Rpdj48L2Rpdj48L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPSdpbmZvRGlzcGxheSc+XG4gICAgICAgIDxkaXYgY2xhc3M9J2luZm8nPjxkaXYgY2xhc3M9J3dpbmQnPjwvZGl2PldpbmQgU3BlZWQ8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz0naW5mbyc+PHNwYW4+JHtNYXRoLmNlaWwod2VhdGhlckRhdGEud2luZC5zcGVlZCl9IG1waDwvc3Bhbj48L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz0naW5mbyc+PGRpdiBjbGFzcz0nd2luZEd1c3QnPjwvZGl2Pkd1c3RzPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9J2luZm8nPiR7TWF0aC5jZWlsKHdlYXRoZXJEYXRhLndpbmQuZ3VzdCl9IG1waDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9J3N1bkluZm8nPlxuICAgICAgICA8ZGl2IGNsYXNzPSdpbmZvRGlzcGxheSc+XG4gICAgICAgICAgPGRpdiBjbGFzcz0nc3VuSWNvbic+PGRpdiBjbGFzcz0nc3VucmlzZSc+PC9kaXY+JHtzdW5SaXNlVGltZS5ob3VyfToke3N1blJpc2VUaW1lLm1pbnV0ZXN9PC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz0nc3VuQmFyJz48ZGl2IGNsYXNzPSdzdW5CYXJQZXJjZW50Jz48ZGl2IGNsYXNzPSdzdW5CYXJJY29uJz48L2Rpdj48L2Rpdj48L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPSdzdW5JY29uJz48ZGl2IGNsYXNzPSdzdW5zZXQnPjwvZGl2PiR7c3VuU2V0VGltZS5ob3VyfToke3N1blNldFRpbWUubWludXRlc308L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG4gICAgPC9kaXY+XG5gXG4gIHJlbmRlckhUTUwod2VhdGhlckRhdGEsIHJlbmRlclRlbXBsYXRlVG9wKVxuICByZW5kZXJJY29ucyh0aGVybW8sIHN1blNldCwgc3VuUmlzZSwgZHJvcGxldHMsIHdpbmQsIHdpbmQyLCBzdW4pXG4gIHJlbmRlckh1bWlkaXR5KHdlYXRoZXJEYXRhLm1haW4uaHVtaWRpdHkpXG4gIHJlbmRlclN1bihzdW5SaXNlVGltZS5ob3VyLCBzdW5TZXRUaW1lLmhvdXIsIHRpbWUuaG91cilcbiAgdXBkYXRlQmFja2dyb3VuZCh3ZWF0aGVyRGF0YS5tYWluLnRlbXAsIHdlYXRoZXJEYXRhLndlYXRoZXJbMF0ubWFpbilcbn1cblxuZnVuY3Rpb24gY3VycmVudFRpbWUgKGR0SW4sIHRpbWV6b25lKSB7XG4gIGNvbnN0IGRhdGVUaW1lID0gbmV3IERhdGUoZHRJbiAqIDEwMDAgKyB0aW1lem9uZSAqIDEwMDApXG5cbiAgY29uc3QgaG91ciA9IChkYXRlVGltZS5nZXRVVENIb3VycygpICUgMjQpXG4gIGNvbnN0IGFtcG0gPSBob3VyIDwgMTIgPyAnYW0nIDogJ3BtJ1xuXG4gIGxldCBtaW51dGVzID0gZGF0ZVRpbWUuZ2V0VVRDTWludXRlcygpXG4gIGlmIChtaW51dGVzIDwgMTApIHtcbiAgICBtaW51dGVzID0gYDAke21pbnV0ZXN9YFxuICB9XG4gIGNvbnN0IHdlZWtkYXkgPSBkYXRlVGltZS50b0xvY2FsZVN0cmluZygnZGVmYXVsdCcsIHsgdGltZVpvbmU6ICdVVEMnLCB3ZWVrZGF5OiAnbG9uZycgfSlcbiAgY29uc3QgbW9udGggPSBkYXRlVGltZS50b0xvY2FsZVN0cmluZygnZGVmYXVsdCcsIHsgdGltZVpvbmU6ICdVVEMnLCBtb250aDogJ3Nob3J0JyB9KVxuICBjb25zdCBkYXRlID0gZGF0ZVRpbWUuZ2V0VVRDRGF0ZSgpXG5cbiAgcmV0dXJuIHtcbiAgICB3ZWVrZGF5LFxuICAgIG1vbnRoLFxuICAgIGRhdGUsXG4gICAgaG91cixcbiAgICBtaW51dGVzLFxuICAgIGFtcG1cbiAgfVxufVxuXG5leHBvcnQgeyB3ZWF0aGVyVGVtcGxhdGUgfVxuIiwiaW1wb3J0IHsgZ2V0V2VhdGhlckRhdGEgfSBmcm9tICcuL3JlcXVlc3RzL3dlYXRoZXJBUEknXG5pbXBvcnQgeyBET01FbGVtZW50cyB9IGZyb20gJy4vZG9tJ1xuXG5mdW5jdGlvbiB1c2VyTG9jYXRpb24gKCkge1xuICBpZiAobmF2aWdhdG9yLmdlb2xvY2F0aW9uKSB7XG4gICAgbmF2aWdhdG9yLmdlb2xvY2F0aW9uLmdldEN1cnJlbnRQb3NpdGlvbihzaG93VXNlclBvc2l0aW9uKVxuICB9IGVsc2Uge1xuICAgIERPTUVsZW1lbnRzLmVycm9yLmlubmVySFRNTCA9ICdZb3UgaGF2ZSBkaXNhYmxlZCBMb2NhdGlvbiBvciBpcyBvdGhlcndpc2UgaW5jYXBhY2l0YXRlZCdcbiAgfVxufVxuXG5mdW5jdGlvbiBzaG93VXNlclBvc2l0aW9uIChzaG93VXNlclBvc2l0aW9uKSB7XG4gIGNvbnNvbGUubG9nKGBMYXRpdHVkZTogJHtzaG93VXNlclBvc2l0aW9uLmNvb3Jkcy5sYXRpdHVkZX0gTG9uZ2l0dWRlOiAke3Nob3dVc2VyUG9zaXRpb24uY29vcmRzLmxvbmdpdHVkZX1gKVxuICBjb25zdCBsYXRpdHVkZSA9IHNob3dVc2VyUG9zaXRpb24uY29vcmRzLmxhdGl0dWRlXG4gIGNvbnN0IGxvbmdpdHVkZSA9IHNob3dVc2VyUG9zaXRpb24uY29vcmRzLmxvbmdpdHVkZVxuICBjb25zdCBwb3NpdGlvbiA9IHsgbGF0OiBsYXRpdHVkZSwgbG9uOiBsb25naXR1ZGUgfVxuICBjb25zdCBzdGF0ZSA9ICcnXG4gIGdldFdlYXRoZXJEYXRhKHBvc2l0aW9uLCBzdGF0ZSlcbn1cblxuZXhwb3J0IHsgdXNlckxvY2F0aW9uIH1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==