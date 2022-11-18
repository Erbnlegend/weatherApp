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
// Weather Template Calls this
function renderHTML (weatherData, template) {
  DOMElements.enteredCity.setAttribute('placeholder', weatherData.name)
  DOMElements.enteredCountry.setAttribute('placeholder', weatherData.sys.country)
  const render = document.getElementById('appendWeatherData')
  render.innerHTML = template
}
// Weather Template Calls this
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
// Weather Template Calls this
function renderHumidity (humidity) {
  const percent = document.getElementById('humidityPercent')
  // Simple Width Transition set in
  for (let i = 0; i <= humidity; i++) {
    setTimeout(() => {
      percent.style.width = `${i}%`
    }, 50)
  }
}
// Weather Template Calls this
function renderSun (riseTime, setTime, currentTime) {
  const bar = document.querySelector('.sunBarPercent')
  const barIcon = document.querySelector('.sunBarIcon')
  let baseLine = 0
  const difference = setTime - riseTime
  if (currentTime > riseTime && currentTime < setTime) {
    barIcon.style.color = '#ff4500'
  }
  for (let i = riseTime; i <= currentTime; i++) {
    if (currentTime < riseTime) {
      bar.style.width = '0%'
      barIcon.style.left = '0'
      return
    }
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
// Weather Template Calls this
function updateBackground (temp, condition) {
  const background = document.querySelector('.background')
  background.style.backgroundImage = `url(${conditionsMatch[condition]})`
}
// Data used by background checker
const conditionsMatch = {
  Clear: 'imgs/ritam-baishya-ROVBDer29PQ-unsplash.jpg',
  Clouds: 'imgs/billy-huynh-v9bnfMCyKbg-unsplash.jpg',
  Thunderstorm: 'imgs/johannes-plenio-ESL1rIs9j48-unsplash.jpg',
  Drizzle: 'imgs/filip-zrnzevic-_EMkxLdko9k-unsplash.jpg',
  Rain: 'imgs/roman-synkevych-qPvBmSvmohs-unsplash.jpg',
  Snow: 'imgs/rye-jessen-GLOJ4NRWAyU-unsplash.jpg',
  Mist: 'imgs/annie-spratt-7CME6Wlgrdk-unsplash.jpg',
  Smoke: 'imgs/corina-rainer-jZc5eTXnYLU-unsplash.jpg',
  Haze: 'imgs/alex-gindin-ifpBOcQlhoY-unsplash.jpg',
  Dust: 'imgs/jessica-knowlden-Alkq_ht0GVk-unsplash.jpg',
  Fog: 'imgs/paul-pastourmatzis-KT3WlrL_bsg-unsplash.jpg',
  Sand: 'imgs/wolfgang-hasselmann-Fd01B6nNPbo-unsplash.jpg',
  Ash: 'imgs/william-krause-wPsDfkS_noU-unsplash.jpg',
  Squall: 'imgs/khamkeo-vilaysing-WtwSsqwYlA0-unsplash.jpg',
  Tornado: 'imgs/nikolas-noonan-fQM8cbGY6iQ-unsplash.jpg'
}

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
        `https://api.openweathermap.org/geo/1.0/direct?q=${position1}&limit=5&APPID=dff09f416b1eecab3a6dac32139cf593`,
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
        `https://api.openweathermap.org/geo/1.0/direct?q=${position1},${position2}&limit=5&APPID=dff09f416b1eecab3a6dac32139cf593`,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUUwQjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoRzRCO0FBQ25COztBQUVuQztBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0osSUFBSSw2REFBMkI7QUFDL0I7QUFDQTs7QUFFQTtBQUNBLDJCQUEyQixrQ0FBa0MsYUFBYSxrQ0FBa0M7QUFDNUc7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBLEVBQUUscUVBQWM7QUFDaEI7O0FBRXVCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9ub2RlX21vZHVsZXMvbHVjaWRlL2Rpc3QvZXNtL2NyZWF0ZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL25vZGVfbW9kdWxlcy9sdWNpZGUvZGlzdC9lc20vZGVmYXVsdEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL25vZGVfbW9kdWxlcy9sdWNpZGUvZGlzdC9lc20vaWNvbnMvZHJvcGxldHMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL25vZGVfbW9kdWxlcy9sdWNpZGUvZGlzdC9lc20vaWNvbnMvc3VuLmpzIiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9ub2RlX21vZHVsZXMvbHVjaWRlL2Rpc3QvZXNtL2ljb25zL3N1bnJpc2UuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL25vZGVfbW9kdWxlcy9sdWNpZGUvZGlzdC9lc20vaWNvbnMvc3Vuc2V0LmpzIiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9ub2RlX21vZHVsZXMvbHVjaWRlL2Rpc3QvZXNtL2ljb25zL3RoZXJtb21ldGVyLmpzIiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9ub2RlX21vZHVsZXMvbHVjaWRlL2Rpc3QvZXNtL2ljb25zL3dpbmQuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9zcmMvZG9tLmpzIiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9zcmMvbWFpbi5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vc3JjL3JlcXVlc3RzL2dlb1NlYXJjaC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vc3JjL3JlcXVlc3RzL3dlYXRoZXJBUEkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL3NyYy9yZXF1ZXN0cy93ZWF0aGVySWNvbnMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL3NyYy90ZW1wbGF0ZS9zZWFyY2hUZW1wbGF0ZS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vc3JjL3RlbXBsYXRlL3dlYXRoZXJUZW1wbGF0ZS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vc3JjL3VzZXItbG9jYXRpb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJib2R5IHtcXG4gIG1hcmdpbjogMDtcXG59XFxuLmJhY2tncm91bmQge1xcbiAgei1pbmRleDogLTI7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IDUwJTtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLmJhY2tncm91bmQtY29udGFpbmVyIHtcXG4gIHotaW5kZXg6IC0xO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjU2Mik7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLmNvbnRhaW5lciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIsIDIsIDIsIDAuNTY4KTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB0b3A6IDA7XFxuICB3aWR0aDogYXV0bztcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgcGFkZGluZzogNzVweDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG4ud3JhcHBlciB7XFxuICBtYXJnaW4tcmlnaHQ6IDUwcHg7XFxufVxcblxcbi8qIE1haW4gTG9jYXRpb24gRGV0YWlscyAqL1xcbi50aW1lIHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtc2l6ZTogNHJlbTtcXG4gIHBhZGRpbmc6IDE1cHg7XFxufVxcbi5kYXRlIHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIHBhZGRpbmc6IDE1cHg7XFxufVxcblxcbi50ZW1wIHtcXG4gIGZvbnQtc2l6ZTogNHJlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLnNtYWxsIHtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4ubG9jYXRpb24ge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1zaXplOiAycmVtO1xcbn1cXG4uaWNvbiB7XFxuICBoZWlnaHQ6IDE1MHB4O1xcbiAgd2lkdGg6IDE1MHB4O1xcbn1cXG4uY29uZGl0aW9ucyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG59XFxuLndlYXRoZXJJY29uIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLyogTW9yZSBJbmZvcm1hdGlvbiAqL1xcbi5pbmZvQ29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcbi5tb3JlSW5mbywgLnN1bkluZm8ge1xcbiAgcGFkZGluZzogMTVweDtcXG59XFxuLnN1bkluZm8gLmluZm9EaXNwbGF5IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCBtaW5tYXgoMTAwcHgsIDFmcikpO1xcbn1cXG4uc3VuQmFyIHtcXG4gIGhlaWdodDogNXB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyMzUsIDIzMCwgMjMwLCAwLjUpO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcbi5zdW5CYXJQZXJjZW50IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY0NTAwO1xcbiAgaGVpZ2h0OiA1cHg7XFxuICB3aWR0aDogMCU7XFxuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAycztcXG59XFxuLnN1bkJhckljb24ge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAtMjAwJTtcXG4gIGxlZnQ6IC0xNSU7XFxuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAycztcXG59XFxuLnN1bkljb24ge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4jZmVlbHNMaWtlIHtcXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XFxufVxcbi5mZWVscyB7XFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbn1cXG4uZmVlbHMgc3BhbiB7XFxuICBmb250LXNpemU6IDNyZW07XFxufVxcbi5pbmZvRGlzcGxheSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgbWlubWF4KDE1MHB4LCAxZnIpKTtcXG4gIHdpZHRoOiAyMCU7XFxufVxcbi5pbmZvIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbWFyZ2luLWJvdHRvbTogM3B4O1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMjM1LCAyMzAsIDIzMCwgMC41KTtcXG4gIHBhZGRpbmc6IDNweCAwO1xcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XFxufVxcbi5ub0JvcmRlciB7XFxuICBib3JkZXI6IG5vbmU7XFxufVxcbiNodW1pZGl0eUJhciB7XFxuICBoZWlnaHQ6IDVweDtcXG4gIHdpZHRoOiA4MCU7XFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDIzNSwgMjMwLCAyMzAsIDAuNSk7XFxuICBtYXJnaW4tbGVmdDogMTBweDtcXG59XFxuI2h1bWlkaXR5UGVyY2VudCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhO1xcbiAgaGVpZ2h0OiA1cHg7XFxuICB3aWR0aDogMCU7XFxuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAycztcXG59XFxuXFxuLyogU2VhcmNoIE9wdGlvbnMgKi9cXG5mb3JtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcbiNzZWFyY2gge1xcbiAgd2lkdGg6IDI1JTtcXG4gIG1hcmdpbjogNTBweCBhdXRvIDEwcHggYXV0bztcXG59XFxuLmNhcmQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICB3aWR0aDogMTUlO1xcbiAgbWFyZ2luOiAwIGF1dG8gNXB4IGF1dG87XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBwYWRkaW5nOiA1cHg7XFxuICBib3gtc2hhZG93OiAycHggMnB4IDJweCByZ2JhKDAsIDAsIDAsIDAuNjg1KTtcXG59XFxuLmNhcmQ6aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgc2NhbGU6IDEuMDU7XFxufVxcblxcbmlucHV0W3R5cGU9J3RleHQnXSB7XFxuICBwYWRkaW5nOiA1cHg7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgYm94LXNoYWRvdzogMnB4IDJweCAycHggcmdiYSgwLCAwLCAwLCAwLjY4NSk7XFxuICBib3JkZXI6IDA7XFxufVxcbmlucHV0W3R5cGU9J3N1Ym1pdCddIHtcXG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XFxuICBwYWRkaW5nOiA4cHg7XFxuICBib3JkZXI6IDA7XFxuICBtYXJnaW4tbGVmdDogMTBweDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5pbnB1dDpmb2N1cyB7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG4jZXJyb3Ige1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGRcXG59XFxuLnN1bkJhclBlcmNlbnQgLmZpbGwge1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcbi5zdW5CYXJJY29uIC5yaWdodFN1biB7XFxuICBsZWZ0OiAxMDAlO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsU0FBUztBQUNYO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsZUFBZTtFQUNmLDRCQUE0QjtFQUM1QixzQkFBc0I7RUFDdEIsd0JBQXdCO0VBQ3hCLDRCQUE0QjtFQUM1QixXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0UsV0FBVztFQUNYLHNDQUFzQztFQUN0QyxlQUFlO0VBQ2YsTUFBTTtFQUNOLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxzQ0FBc0M7RUFDdEMsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixXQUFXO0VBQ1gsY0FBYztFQUNkLFlBQVk7RUFDWixhQUFhO0VBQ2IsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUEsMEJBQTBCO0FBQzFCO0VBQ0UsWUFBWTtFQUNaLGVBQWU7RUFDZixhQUFhO0FBQ2Y7QUFDQTtFQUNFLFlBQVk7RUFDWixlQUFlO0VBQ2YsYUFBYTtBQUNmOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWU7QUFDakI7QUFDQTtFQUNFLGFBQWE7RUFDYixZQUFZO0FBQ2Q7QUFDQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUEscUJBQXFCO0FBQ3JCO0VBQ0UsYUFBYTtBQUNmO0FBQ0E7RUFDRSxhQUFhO0FBQ2Y7QUFDQTtFQUNFLGFBQWE7RUFDYixvREFBb0Q7QUFDdEQ7QUFDQTtFQUNFLFdBQVc7RUFDWCwwQ0FBMEM7RUFDMUMsV0FBVztBQUNiO0FBQ0E7RUFDRSxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixXQUFXO0VBQ1gsU0FBUztFQUNULHVCQUF1QjtBQUN6QjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixVQUFVO0VBQ1YsdUJBQXVCO0FBQ3pCO0FBQ0E7RUFDRSxrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxhQUFhO0VBQ2Isb0RBQW9EO0VBQ3BELFVBQVU7QUFDWjtBQUNBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsaURBQWlEO0VBQ2pELGNBQWM7RUFDZCxpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLFlBQVk7QUFDZDtBQUNBO0VBQ0UsV0FBVztFQUNYLFVBQVU7RUFDViwwQ0FBMEM7RUFDMUMsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxzQkFBc0I7RUFDdEIsV0FBVztFQUNYLFNBQVM7RUFDVCx1QkFBdUI7QUFDekI7O0FBRUEsbUJBQW1CO0FBQ25CO0VBQ0UsYUFBYTtBQUNmO0FBQ0E7RUFDRSxVQUFVO0VBQ1YsMkJBQTJCO0FBQzdCO0FBQ0E7RUFDRSx1QkFBdUI7RUFDdkIsVUFBVTtFQUNWLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLDRDQUE0QztBQUM5QztBQUNBO0VBQ0UsZUFBZTtFQUNmLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gsY0FBYztFQUNkLDRDQUE0QztFQUM1QyxTQUFTO0FBQ1g7QUFDQTtFQUNFLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osU0FBUztFQUNULGlCQUFpQjtFQUNqQixpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLGFBQWE7QUFDZjtBQUNBO0VBQ0UsWUFBWTtFQUNaO0FBQ0Y7QUFDQTtFQUNFLFdBQVc7QUFDYjtBQUNBO0VBQ0UsVUFBVTtBQUNaXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImJvZHkge1xcbiAgbWFyZ2luOiAwO1xcbn1cXG4uYmFja2dyb3VuZCB7XFxuICB6LWluZGV4OiAtMjtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogNTAlO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4uYmFja2dyb3VuZC1jb250YWluZXIge1xcbiAgei1pbmRleDogLTE7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNTYyKTtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4uY29udGFpbmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMiwgMiwgMiwgMC41NjgpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHRvcDogMDtcXG4gIHdpZHRoOiBhdXRvO1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICBjb2xvcjogd2hpdGU7XFxuICBwYWRkaW5nOiA3NXB4O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcbi53cmFwcGVyIHtcXG4gIG1hcmdpbi1yaWdodDogNTBweDtcXG59XFxuXFxuLyogTWFpbiBMb2NhdGlvbiBEZXRhaWxzICovXFxuLnRpbWUge1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC1zaXplOiA0cmVtO1xcbiAgcGFkZGluZzogMTVweDtcXG59XFxuLmRhdGUge1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgcGFkZGluZzogMTVweDtcXG59XFxuXFxuLnRlbXAge1xcbiAgZm9udC1zaXplOiA0cmVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4uc21hbGwge1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi5sb2NhdGlvbiB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDJyZW07XFxufVxcbi5pY29uIHtcXG4gIGhlaWdodDogMTUwcHg7XFxuICB3aWR0aDogMTUwcHg7XFxufVxcbi5jb25kaXRpb25zIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG4ud2VhdGhlckljb24ge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4vKiBNb3JlIEluZm9ybWF0aW9uICovXFxuLmluZm9Db250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuLm1vcmVJbmZvLCAuc3VuSW5mbyB7XFxuICBwYWRkaW5nOiAxNXB4O1xcbn1cXG4uc3VuSW5mbyAuaW5mb0Rpc3BsYXkge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIG1pbm1heCgxMDBweCwgMWZyKSk7XFxufVxcbi5zdW5CYXIge1xcbiAgaGVpZ2h0OiA1cHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDIzNSwgMjMwLCAyMzAsIDAuNSk7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuLnN1bkJhclBlcmNlbnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjQ1MDA7XFxuICBoZWlnaHQ6IDVweDtcXG4gIHdpZHRoOiAwJTtcXG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDJzO1xcbn1cXG4uc3VuQmFySWNvbiB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IC0yMDAlO1xcbiAgbGVmdDogLTE1JTtcXG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDJzO1xcbn1cXG4uc3VuSWNvbiB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbiNmZWVsc0xpa2Uge1xcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcXG59XFxuLmZlZWxzIHtcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XFxufVxcbi5mZWVscyBzcGFuIHtcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXG59XFxuLmluZm9EaXNwbGF5IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCBtaW5tYXgoMTUwcHgsIDFmcikpO1xcbiAgd2lkdGg6IDIwJTtcXG59XFxuLmluZm8ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtYXJnaW4tYm90dG9tOiAzcHg7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgyMzUsIDIzMCwgMjMwLCAwLjUpO1xcbiAgcGFkZGluZzogM3B4IDA7XFxuICBtYXJnaW4tcmlnaHQ6IDVweDtcXG59XFxuLm5vQm9yZGVyIHtcXG4gIGJvcmRlcjogbm9uZTtcXG59XFxuI2h1bWlkaXR5QmFyIHtcXG4gIGhlaWdodDogNXB4O1xcbiAgd2lkdGg6IDgwJTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjM1LCAyMzAsIDIzMCwgMC41KTtcXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xcbn1cXG4jaHVtaWRpdHlQZXJjZW50IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGFxdWE7XFxuICBoZWlnaHQ6IDVweDtcXG4gIHdpZHRoOiAwJTtcXG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDJzO1xcbn1cXG5cXG4vKiBTZWFyY2ggT3B0aW9ucyAqL1xcbmZvcm0ge1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuI3NlYXJjaCB7XFxuICB3aWR0aDogMjUlO1xcbiAgbWFyZ2luOiA1MHB4IGF1dG8gMTBweCBhdXRvO1xcbn1cXG4uY2FyZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIHdpZHRoOiAxNSU7XFxuICBtYXJnaW46IDAgYXV0byA1cHggYXV0bztcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDVweDtcXG4gIGJveC1zaGFkb3c6IDJweCAycHggMnB4IHJnYmEoMCwgMCwgMCwgMC42ODUpO1xcbn1cXG4uY2FyZDpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBzY2FsZTogMS4wNTtcXG59XFxuXFxuaW5wdXRbdHlwZT0ndGV4dCddIHtcXG4gIHBhZGRpbmc6IDVweDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICBib3gtc2hhZG93OiAycHggMnB4IDJweCByZ2JhKDAsIDAsIDAsIDAuNjg1KTtcXG4gIGJvcmRlcjogMDtcXG59XFxuaW5wdXRbdHlwZT0nc3VibWl0J10ge1xcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcXG4gIHBhZGRpbmc6IDhweDtcXG4gIGJvcmRlcjogMDtcXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcbmlucHV0OmZvY3VzIHtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcbiNlcnJvciB7XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LXdlaWdodDogYm9sZFxcbn1cXG4uc3VuQmFyUGVyY2VudCAuZmlsbCB7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuLnN1bkJhckljb24gLnJpZ2h0U3VuIHtcXG4gIGxlZnQ6IDEwMCU7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiLyoqXG4gKiBDcmVhdGVzIGEgbmV3IEhUTUxFbGVtZW50IGZyb20gaWNvbiBub2RlXG4gKiBAcGFyYW0ge3N0cmluZ30gdGFnXG4gKiBAcGFyYW0ge29iamVjdH0gYXR0cnNcbiAqIEBwYXJhbSB7YXJyYXl9IGNoaWxkcmVuXG4gKiBAcmV0dXJucyB7SFRNTEVsZW1lbnR9XG4gKi9cbnZhciBjcmVhdGVFbGVtZW50ID0gZnVuY3Rpb24gY3JlYXRlRWxlbWVudCh0YWcsIGF0dHJzLCBjaGlsZHJlbikge1xuICBpZiAoY2hpbGRyZW4gPT09IHZvaWQgMCkge1xuICAgIGNoaWxkcmVuID0gW107XG4gIH1cbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJywgdGFnKTtcbiAgT2JqZWN0LmtleXMoYXR0cnMpLmZvckVhY2goZnVuY3Rpb24gKG5hbWUpIHtcbiAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShuYW1lLCBhdHRyc1tuYW1lXSk7XG4gIH0pO1xuICBpZiAoY2hpbGRyZW4ubGVuZ3RoKSB7XG4gICAgY2hpbGRyZW4gPSBjaGlsZHJlbi5mb3JFYWNoKGZ1bmN0aW9uIChjaGlsZCkge1xuICAgICAgdmFyIGNoaWxkRWxlbWVudCA9IGNyZWF0ZUVsZW1lbnQuYXBwbHkodm9pZCAwLCBjaGlsZCk7XG4gICAgICBlbGVtZW50LmFwcGVuZENoaWxkKGNoaWxkRWxlbWVudCk7XG4gICAgfSk7XG4gIH1cbiAgcmV0dXJuIGVsZW1lbnQ7XG59O1xuXG4vKipcbiAqIENyZWF0ZXMgYSBuZXcgSFRNTEVsZW1lbnQgZnJvbSBpY29uIG5vZGVcbiAqIEBwYXJhbSB7W3RhZzogc3RyaW5nLCBhdHRyczogb2JqZWN0LCBjaGlsZHJlbjogYXJyYXldfSBpY29uTm9kZVxuICogQHJldHVybnMge0hUTUxFbGVtZW50fVxuICovXG5leHBvcnQgZGVmYXVsdCAoZnVuY3Rpb24gKF9yZWYpIHtcbiAgdmFyIHRhZyA9IF9yZWZbMF0sXG4gICAgYXR0cnMgPSBfcmVmWzFdLFxuICAgIGNoaWxkcmVuID0gX3JlZlsyXTtcbiAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQodGFnLCBhdHRycywgY2hpbGRyZW4pO1xufSk7IiwiZXhwb3J0IGRlZmF1bHQge1xuICB4bWxuczogJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyxcbiAgd2lkdGg6IDI0LFxuICBoZWlnaHQ6IDI0LFxuICB2aWV3Qm94OiAnMCAwIDI0IDI0JyxcbiAgZmlsbDogJ25vbmUnLFxuICBzdHJva2U6ICdjdXJyZW50Q29sb3InLFxuICAnc3Ryb2tlLXdpZHRoJzogMixcbiAgJ3N0cm9rZS1saW5lY2FwJzogJ3JvdW5kJyxcbiAgJ3N0cm9rZS1saW5lam9pbic6ICdyb3VuZCdcbn07IiwiaW1wb3J0IGRlZmF1bHRBdHRyaWJ1dGVzIGZyb20gJy4uL2RlZmF1bHRBdHRyaWJ1dGVzJztcbnZhciBEcm9wbGV0cyA9IFsnc3ZnJywgZGVmYXVsdEF0dHJpYnV0ZXMsIFtbJ3BhdGgnLCB7XG4gIGQ6ICdNNyAxNi4zYzIuMiAwIDQtMS44MyA0LTQuMDUgMC0xLjE2LS41Ny0yLjI2LTEuNzEtMy4xOVM3LjI5IDYuNzUgNyA1LjNjLS4yOSAxLjQ1LTEuMTQgMi44NC0yLjI5IDMuNzZTMyAxMS4xIDMgMTIuMjVjMCAyLjIyIDEuOCA0LjA1IDQgNC4wNXonXG59XSwgWydwYXRoJywge1xuICBkOiAnTTEyLjU2IDYuNkExMC45NyAxMC45NyAwIDAgMCAxNCAzLjAyYy41IDIuNSAyIDQuOSA0IDYuNXMzIDMuNSAzIDUuNWE2Ljk4IDYuOTggMCAwIDEtMTEuOTEgNC45Nydcbn1dXV07XG5leHBvcnQgZGVmYXVsdCBEcm9wbGV0czsiLCJpbXBvcnQgZGVmYXVsdEF0dHJpYnV0ZXMgZnJvbSAnLi4vZGVmYXVsdEF0dHJpYnV0ZXMnO1xudmFyIFN1biA9IFsnc3ZnJywgZGVmYXVsdEF0dHJpYnV0ZXMsIFtbJ2NpcmNsZScsIHtcbiAgY3g6ICcxMicsXG4gIGN5OiAnMTInLFxuICByOiAnNCdcbn1dLCBbJ3BhdGgnLCB7XG4gIGQ6ICdNMTIgMnYyJ1xufV0sIFsncGF0aCcsIHtcbiAgZDogJ00xMiAyMHYyJ1xufV0sIFsncGF0aCcsIHtcbiAgZDogJ200LjkzIDQuOTMgMS40MSAxLjQxJ1xufV0sIFsncGF0aCcsIHtcbiAgZDogJ20xNy42NiAxNy42NiAxLjQxIDEuNDEnXG59XSwgWydwYXRoJywge1xuICBkOiAnTTIgMTJoMidcbn1dLCBbJ3BhdGgnLCB7XG4gIGQ6ICdNMjAgMTJoMidcbn1dLCBbJ3BhdGgnLCB7XG4gIGQ6ICdtNi4zNCAxNy42Ni0xLjQxIDEuNDEnXG59XSwgWydwYXRoJywge1xuICBkOiAnbTE5LjA3IDQuOTMtMS40MSAxLjQxJ1xufV1dXTtcbmV4cG9ydCBkZWZhdWx0IFN1bjsiLCJpbXBvcnQgZGVmYXVsdEF0dHJpYnV0ZXMgZnJvbSAnLi4vZGVmYXVsdEF0dHJpYnV0ZXMnO1xudmFyIFN1bnJpc2UgPSBbJ3N2ZycsIGRlZmF1bHRBdHRyaWJ1dGVzLCBbWydwYXRoJywge1xuICBkOiAnTTEyIDJ2OCdcbn1dLCBbJ3BhdGgnLCB7XG4gIGQ6ICdtNC45MyAxMC45MyAxLjQxIDEuNDEnXG59XSwgWydwYXRoJywge1xuICBkOiAnTTIgMThoMidcbn1dLCBbJ3BhdGgnLCB7XG4gIGQ6ICdNMjAgMThoMidcbn1dLCBbJ3BhdGgnLCB7XG4gIGQ6ICdtMTkuMDcgMTAuOTMtMS40MSAxLjQxJ1xufV0sIFsncGF0aCcsIHtcbiAgZDogJ00yMiAyMkgyJ1xufV0sIFsncGF0aCcsIHtcbiAgZDogJ204IDYgNC00IDQgNCdcbn1dLCBbJ3BhdGgnLCB7XG4gIGQ6ICdNMTYgMThhNCA0IDAgMCAwLTggMCdcbn1dXV07XG5leHBvcnQgZGVmYXVsdCBTdW5yaXNlOyIsImltcG9ydCBkZWZhdWx0QXR0cmlidXRlcyBmcm9tICcuLi9kZWZhdWx0QXR0cmlidXRlcyc7XG52YXIgU3Vuc2V0ID0gWydzdmcnLCBkZWZhdWx0QXR0cmlidXRlcywgW1sncGF0aCcsIHtcbiAgZDogJ00xMiAxMFYyJ1xufV0sIFsncGF0aCcsIHtcbiAgZDogJ200LjkzIDEwLjkzIDEuNDEgMS40MSdcbn1dLCBbJ3BhdGgnLCB7XG4gIGQ6ICdNMiAxOGgyJ1xufV0sIFsncGF0aCcsIHtcbiAgZDogJ00yMCAxOGgyJ1xufV0sIFsncGF0aCcsIHtcbiAgZDogJ20xOS4wNyAxMC45My0xLjQxIDEuNDEnXG59XSwgWydwYXRoJywge1xuICBkOiAnTTIyIDIySDInXG59XSwgWydwYXRoJywge1xuICBkOiAnbTE2IDYtNCA0LTQtNCdcbn1dLCBbJ3BhdGgnLCB7XG4gIGQ6ICdNMTYgMThhNCA0IDAgMCAwLTggMCdcbn1dXV07XG5leHBvcnQgZGVmYXVsdCBTdW5zZXQ7IiwiaW1wb3J0IGRlZmF1bHRBdHRyaWJ1dGVzIGZyb20gJy4uL2RlZmF1bHRBdHRyaWJ1dGVzJztcbnZhciBUaGVybW9tZXRlciA9IFsnc3ZnJywgZGVmYXVsdEF0dHJpYnV0ZXMsIFtbJ3BhdGgnLCB7XG4gIGQ6ICdNMTQgNHYxMC41NGE0IDQgMCAxIDEtNCAwVjRhMiAyIDAgMCAxIDQgMFonXG59XV1dO1xuZXhwb3J0IGRlZmF1bHQgVGhlcm1vbWV0ZXI7IiwiaW1wb3J0IGRlZmF1bHRBdHRyaWJ1dGVzIGZyb20gJy4uL2RlZmF1bHRBdHRyaWJ1dGVzJztcbnZhciBXaW5kID0gWydzdmcnLCBkZWZhdWx0QXR0cmlidXRlcywgW1sncGF0aCcsIHtcbiAgZDogJ00xNy43IDcuN2EyLjUgMi41IDAgMSAxIDEuOCA0LjNIMidcbn1dLCBbJ3BhdGgnLCB7XG4gIGQ6ICdNOS42IDQuNkEyIDIgMCAxIDEgMTEgOEgyJ1xufV0sIFsncGF0aCcsIHtcbiAgZDogJ00xMi42IDE5LjRBMiAyIDAgMSAwIDE0IDE2SDInXG59XV1dO1xuZXhwb3J0IGRlZmF1bHQgV2luZDsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgZ2V0V2VhdGhlckRhdGEgfSBmcm9tICcuL3JlcXVlc3RzL3dlYXRoZXJBUEknXG5cbmNvbnN0IERPTUVsZW1lbnRzID0ge1xuICBzdWJtaXRTZWFyY2g6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdWJtaXRTZWFyY2gnKSxcbiAgZW50ZXJlZENpdHk6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlbnRlcmVkQ2l0eScpLFxuICBlbnRlcmVkQ291bnRyeTogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VudGVyZWRDb3VudHJ5JyksXG4gIHVuaXQ6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1bml0JyksXG4gIGVycm9yOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZXJyb3InKSxcbiAgcmVuZGVyOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VhcmNoT3B0aW9ucycpXG59XG5cbmZ1bmN0aW9uIGNsZWFyICgpIHtcbiAgY29uc3QgcmVuZGVyQ2xlYXIgPSBbLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNhcmQnKV1cbiAgcmVuZGVyQ2xlYXIuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICBlbGVtZW50LnJlbW92ZSgpXG4gIH0pXG4gIERPTUVsZW1lbnRzLmVycm9yLmlubmVySFRNTCA9ICcnXG59XG5cbmZ1bmN0aW9uIGFkZENhcmRFdmVudHMgKCkge1xuICBjb25zdCBjYXJkRXZlbnRzID0gWy4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYXJkJyldXG4gIGNhcmRFdmVudHMuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgIGNvbnN0IHN0YXRlID0gZS50YXJnZXQuZGF0YXNldC5zdGF0ZVxuICAgICAgY29uc3QgSlNPTkNvb3JkcyA9IGUudGFyZ2V0LmRhdGFzZXQuY29vcmRzXG4gICAgICBjb25zdCBjb29yZHMgPSBKU09OLnBhcnNlKEpTT05Db29yZHMpXG4gICAgICBnZXRXZWF0aGVyRGF0YShjb29yZHMsIHN0YXRlKVxuICAgIH0pXG4gIH0pXG59XG4vLyBXZWF0aGVyIFRlbXBsYXRlIENhbGxzIHRoaXNcbmZ1bmN0aW9uIHJlbmRlckhUTUwgKHdlYXRoZXJEYXRhLCB0ZW1wbGF0ZSkge1xuICBET01FbGVtZW50cy5lbnRlcmVkQ2l0eS5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgd2VhdGhlckRhdGEubmFtZSlcbiAgRE9NRWxlbWVudHMuZW50ZXJlZENvdW50cnkuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsIHdlYXRoZXJEYXRhLnN5cy5jb3VudHJ5KVxuICBjb25zdCByZW5kZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwZW5kV2VhdGhlckRhdGEnKVxuICByZW5kZXIuaW5uZXJIVE1MID0gdGVtcGxhdGVcbn1cbi8vIFdlYXRoZXIgVGVtcGxhdGUgQ2FsbHMgdGhpc1xuZnVuY3Rpb24gcmVuZGVySWNvbnMgKHRoZXJtbywgc3VuU2V0LCBzdW5SaXNlLCBkcm9wbGV0cywgd2luZCwgd2luZDIsIHN1bikge1xuICBjb25zdCBoaWdoTG93ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRoZXJtbycpXG4gIGNvbnN0IGh1bWlkaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRyb3BsZXRzJylcbiAgY29uc3Qgd2luZEljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud2luZCcpXG4gIGNvbnN0IHdpbmRHdXN0SWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53aW5kR3VzdCcpXG4gIGNvbnN0IHN1bnNldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdW5zZXQnKVxuICBjb25zdCBzdW5yaXNlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN1bnJpc2UnKVxuICBjb25zdCBzdW5JY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN1bkJhckljb24nKVxuXG4gIGhpZ2hMb3cuYXBwZW5kKHRoZXJtbylcbiAgaHVtaWRpdHkuYXBwZW5kKGRyb3BsZXRzKVxuICB3aW5kSWNvbi5hcHBlbmQod2luZClcbiAgd2luZEd1c3RJY29uLmFwcGVuZCh3aW5kMilcbiAgc3Vuc2V0LmFwcGVuZChzdW5TZXQpXG4gIHN1bnJpc2UuYXBwZW5kKHN1blJpc2UpXG4gIHN1bkljb24uYXBwZW5kKHN1bilcbn1cbi8vIFdlYXRoZXIgVGVtcGxhdGUgQ2FsbHMgdGhpc1xuZnVuY3Rpb24gcmVuZGVySHVtaWRpdHkgKGh1bWlkaXR5KSB7XG4gIGNvbnN0IHBlcmNlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaHVtaWRpdHlQZXJjZW50JylcbiAgLy8gU2ltcGxlIFdpZHRoIFRyYW5zaXRpb24gc2V0IGluXG4gIGZvciAobGV0IGkgPSAwOyBpIDw9IGh1bWlkaXR5OyBpKyspIHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHBlcmNlbnQuc3R5bGUud2lkdGggPSBgJHtpfSVgXG4gICAgfSwgNTApXG4gIH1cbn1cbi8vIFdlYXRoZXIgVGVtcGxhdGUgQ2FsbHMgdGhpc1xuZnVuY3Rpb24gcmVuZGVyU3VuIChyaXNlVGltZSwgc2V0VGltZSwgY3VycmVudFRpbWUpIHtcbiAgY29uc3QgYmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN1bkJhclBlcmNlbnQnKVxuICBjb25zdCBiYXJJY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN1bkJhckljb24nKVxuICBsZXQgYmFzZUxpbmUgPSAwXG4gIGNvbnN0IGRpZmZlcmVuY2UgPSBzZXRUaW1lIC0gcmlzZVRpbWVcbiAgaWYgKGN1cnJlbnRUaW1lID4gcmlzZVRpbWUgJiYgY3VycmVudFRpbWUgPCBzZXRUaW1lKSB7XG4gICAgYmFySWNvbi5zdHlsZS5jb2xvciA9ICcjZmY0NTAwJ1xuICB9XG4gIGZvciAobGV0IGkgPSByaXNlVGltZTsgaSA8PSBjdXJyZW50VGltZTsgaSsrKSB7XG4gICAgaWYgKGN1cnJlbnRUaW1lIDwgcmlzZVRpbWUpIHtcbiAgICAgIGJhci5zdHlsZS53aWR0aCA9ICcwJSdcbiAgICAgIGJhckljb24uc3R5bGUubGVmdCA9ICcwJ1xuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIGJhc2VMaW5lKytcbiAgICByaXNlVGltZSsrXG4gICAgaWYgKGN1cnJlbnRUaW1lID49IHNldFRpbWUpIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDw9IDEwMDsgaSsrKSB7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIGJhci5zdHlsZS53aWR0aCA9IGAke2l9JWBcbiAgICAgICAgICBiYXJJY29uLnN0eWxlLmxlZnQgPSBgJHtpIC0gM30lYFxuICAgICAgICAgIGJhci5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnI2ZmZmZmZidcbiAgICAgICAgfSwgNTApXG4gICAgICB9XG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgY29uc3QgcGVyY2VudCA9IChiYXNlTGluZSAvIGRpZmZlcmVuY2UpICogMTAwXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBiYXIuc3R5bGUud2lkdGggPSBgJHtwZXJjZW50fSVgXG4gICAgICBiYXJJY29uLnN0eWxlLmxlZnQgPSBgJHtwZXJjZW50ICsgNX0lYFxuICAgIH0sIDUwKVxuICAgIGlmIChwZXJjZW50ID49IDEwMCkge1xuICAgICAgYmFyLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjZmZmZmZmJ1xuICAgICAgYmFySWNvbi5zdHlsZS5jb2xvciA9ICcjZmZmZmZmJ1xuICAgIH1cbiAgfVxufVxuLy8gV2VhdGhlciBUZW1wbGF0ZSBDYWxscyB0aGlzXG5mdW5jdGlvbiB1cGRhdGVCYWNrZ3JvdW5kICh0ZW1wLCBjb25kaXRpb24pIHtcbiAgY29uc3QgYmFja2dyb3VuZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5iYWNrZ3JvdW5kJylcbiAgYmFja2dyb3VuZC5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCR7Y29uZGl0aW9uc01hdGNoW2NvbmRpdGlvbl19KWBcbn1cbi8vIERhdGEgdXNlZCBieSBiYWNrZ3JvdW5kIGNoZWNrZXJcbmNvbnN0IGNvbmRpdGlvbnNNYXRjaCA9IHtcbiAgQ2xlYXI6ICdpbWdzL3JpdGFtLWJhaXNoeWEtUk9WQkRlcjI5UFEtdW5zcGxhc2guanBnJyxcbiAgQ2xvdWRzOiAnaW1ncy9iaWxseS1odXluaC12OWJuZk1DeUtiZy11bnNwbGFzaC5qcGcnLFxuICBUaHVuZGVyc3Rvcm06ICdpbWdzL2pvaGFubmVzLXBsZW5pby1FU0wxcklzOWo0OC11bnNwbGFzaC5qcGcnLFxuICBEcml6emxlOiAnaW1ncy9maWxpcC16cm56ZXZpYy1fRU1reExka285ay11bnNwbGFzaC5qcGcnLFxuICBSYWluOiAnaW1ncy9yb21hbi1zeW5rZXZ5Y2gtcVB2Qm1Tdm1vaHMtdW5zcGxhc2guanBnJyxcbiAgU25vdzogJ2ltZ3MvcnllLWplc3Nlbi1HTE9KNE5SV0F5VS11bnNwbGFzaC5qcGcnLFxuICBNaXN0OiAnaW1ncy9hbm5pZS1zcHJhdHQtN0NNRTZXbGdyZGstdW5zcGxhc2guanBnJyxcbiAgU21va2U6ICdpbWdzL2NvcmluYS1yYWluZXItalpjNWVUWG5ZTFUtdW5zcGxhc2guanBnJyxcbiAgSGF6ZTogJ2ltZ3MvYWxleC1naW5kaW4taWZwQk9jUWxob1ktdW5zcGxhc2guanBnJyxcbiAgRHVzdDogJ2ltZ3MvamVzc2ljYS1rbm93bGRlbi1BbGtxX2h0MEdWay11bnNwbGFzaC5qcGcnLFxuICBGb2c6ICdpbWdzL3BhdWwtcGFzdG91cm1hdHppcy1LVDNXbHJMX2JzZy11bnNwbGFzaC5qcGcnLFxuICBTYW5kOiAnaW1ncy93b2xmZ2FuZy1oYXNzZWxtYW5uLUZkMDFCNm5OUGJvLXVuc3BsYXNoLmpwZycsXG4gIEFzaDogJ2ltZ3Mvd2lsbGlhbS1rcmF1c2Utd1BzRGZrU19ub1UtdW5zcGxhc2guanBnJyxcbiAgU3F1YWxsOiAnaW1ncy9raGFta2VvLXZpbGF5c2luZy1XdHdTc3F3WWxBMC11bnNwbGFzaC5qcGcnLFxuICBUb3JuYWRvOiAnaW1ncy9uaWtvbGFzLW5vb25hbi1mUU04Y2JHWTZpUS11bnNwbGFzaC5qcGcnXG59XG5cbi8vIFN1Ym1pdCBTZWFyY2ggRm9ybVxuRE9NRWxlbWVudHMuZW50ZXJlZENvdW50cnkuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBmdW5jdGlvbiAoZSkge1xuICBjb25zdCBzdHJpbmcgPSBET01FbGVtZW50cy5lbnRlcmVkQ291bnRyeS52YWx1ZVxuICBjb25zdCBzZXRTdHJpbmdMZW5ndGggPSBzdHJpbmcubGVuZ3RoXG4gIGlmIChzZXRTdHJpbmdMZW5ndGggPiAyKSB7XG4gICAgRE9NRWxlbWVudHMuZXJyb3IuaW5uZXJIVE1MID0gJ0NvdW50cnkgY2FuIG9ubHkgYWNjZXB0IHR3byBjaGFyYWN0ZXJzISdcbiAgfSBlbHNlIHtcbiAgICBET01FbGVtZW50cy5lcnJvci5pbm5lckhUTUwgPSAnJ1xuICB9XG59KVxuXG5leHBvcnQgeyBET01FbGVtZW50cywgY2xlYXIsIGFkZENhcmRFdmVudHMsIHJlbmRlckhUTUwsIHJlbmRlckljb25zLCByZW5kZXJIdW1pZGl0eSwgcmVuZGVyU3VuLCB1cGRhdGVCYWNrZ3JvdW5kIH1cbiIsImltcG9ydCAnLi9zdHlsZS5jc3MnXG5pbXBvcnQgJy4vaW5kZXguaHRtbCdcbmltcG9ydCAnLi9hc3NldHMvdGhlcm1vbWV0ZXItc3VuLnBuZydcbmltcG9ydCB7IERPTUVsZW1lbnRzIH0gZnJvbSAnLi9kb20nXG5pbXBvcnQgeyB1c2VyTG9jYXRpb24gfSBmcm9tICcuL3VzZXItbG9jYXRpb24nXG5pbXBvcnQgeyBnZW9TZWFyY2ggfSBmcm9tICcuL3JlcXVlc3RzL2dlb1NlYXJjaCdcblxuaW1wb3J0ICcuL2Fzc2V0cy9yaXRhbS1iYWlzaHlhLVJPVkJEZXIyOVBRLXVuc3BsYXNoLmpwZydcbmltcG9ydCAnLi9hc3NldHMvYmlsbHktaHV5bmgtdjlibmZNQ3lLYmctdW5zcGxhc2guanBnJ1xuaW1wb3J0ICcuL2Fzc2V0cy9qb2hhbm5lcy1wbGVuaW8tRVNMMXJJczlqNDgtdW5zcGxhc2guanBnJ1xuaW1wb3J0ICcuL2Fzc2V0cy9maWxpcC16cm56ZXZpYy1fRU1reExka285ay11bnNwbGFzaC5qcGcnXG5pbXBvcnQgJy4vYXNzZXRzL3JvbWFuLXN5bmtldnljaC1xUHZCbVN2bW9ocy11bnNwbGFzaC5qcGcnXG5pbXBvcnQgJy4vYXNzZXRzL3J5ZS1qZXNzZW4tR0xPSjROUldBeVUtdW5zcGxhc2guanBnJ1xuaW1wb3J0ICcuL2Fzc2V0cy9hbm5pZS1zcHJhdHQtN0NNRTZXbGdyZGstdW5zcGxhc2guanBnJ1xuaW1wb3J0ICcuL2Fzc2V0cy9jb3JpbmEtcmFpbmVyLWpaYzVlVFhuWUxVLXVuc3BsYXNoLmpwZydcbmltcG9ydCAnLi9hc3NldHMvYWxleC1naW5kaW4taWZwQk9jUWxob1ktdW5zcGxhc2guanBnJ1xuaW1wb3J0ICcuL2Fzc2V0cy9qZXNzaWNhLWtub3dsZGVuLUFsa3FfaHQwR1ZrLXVuc3BsYXNoLmpwZydcbmltcG9ydCAnLi9hc3NldHMvcGF1bC1wYXN0b3VybWF0emlzLUtUM1dsckxfYnNnLXVuc3BsYXNoLmpwZydcbmltcG9ydCAnLi9hc3NldHMvd29sZmdhbmctaGFzc2VsbWFubi1GZDAxQjZuTlBiby11bnNwbGFzaC5qcGcnXG5pbXBvcnQgJy4vYXNzZXRzL3dpbGxpYW0ta3JhdXNlLXdQc0Rma1Nfbm9VLXVuc3BsYXNoLmpwZydcbmltcG9ydCAnLi9hc3NldHMva2hhbWtlby12aWxheXNpbmctV3R3U3Nxd1lsQTAtdW5zcGxhc2guanBnJ1xuaW1wb3J0ICcuL2Fzc2V0cy9uaWtvbGFzLW5vb25hbi1mUU04Y2JHWTZpUS11bnNwbGFzaC5qcGcnXG5cbnVzZXJMb2NhdGlvbigpXG5cbkRPTUVsZW1lbnRzLnN1Ym1pdFNlYXJjaC5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBmdW5jdGlvbiAoZSkge1xuICBlLnByZXZlbnREZWZhdWx0KClcbiAgY29uc3QgZW50ZXJlZENpdHkgPSBET01FbGVtZW50cy5lbnRlcmVkQ2l0eS52YWx1ZVxuICBjb25zdCBlbnRlcmVkQ291bnRyeSA9IERPTUVsZW1lbnRzLmVudGVyZWRDb3VudHJ5LnZhbHVlXG4gIGdlb1NlYXJjaChlbnRlcmVkQ2l0eSwgZW50ZXJlZENvdW50cnkpXG59KVxuIiwiaW1wb3J0IHsgRE9NRWxlbWVudHMgfSBmcm9tICcuLi9kb20nXG5pbXBvcnQgeyBzZWFyY2hUZW1wbGF0ZSB9IGZyb20gJy4uL3RlbXBsYXRlL3NlYXJjaFRlbXBsYXRlJ1xuXG4vLyAnaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMy4wL29uZWNhbGw/bGF0PXtsYXR9Jmxvbj17bG9ufSZleGNsdWRlPXtwYXJ0fSZhcHBpZD1kZmYwOWY0MTZiMWVlY2FiM2E2ZGFjMzIxMzljZjU5Mydcbi8vIEdldCBBUEkgZGF0YVxuYXN5bmMgZnVuY3Rpb24gZ2VvU2VhcmNoIChwb3NpdGlvbjEsIHBvc2l0aW9uMikge1xuICBpZiAocG9zaXRpb24xICE9PSAnJyAmJiBwb3NpdGlvbjIgPT09ICcnKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXG4gICAgICAgIGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZ2VvLzEuMC9kaXJlY3Q/cT0ke3Bvc2l0aW9uMX0mbGltaXQ9NSZBUFBJRD1kZmYwOWY0MTZiMWVlY2FiM2E2ZGFjMzIxMzljZjU5M2AsXG4gICAgICAgIHtcbiAgICAgICAgICBtb2RlOiAnY29ycydcbiAgICAgICAgfSlcbiAgICAgIGNvbnN0IGdlb0RhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKClcbiAgICAgIHNlYXJjaFRlbXBsYXRlKGdlb0RhdGEpXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxuICAgIH1cbiAgICByZXR1cm5cbiAgfVxuICBpZiAocG9zaXRpb24xICE9PSAnJyAmJiBwb3NpdGlvbjIgIT09ICcnKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXG4gICAgICAgIGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZ2VvLzEuMC9kaXJlY3Q/cT0ke3Bvc2l0aW9uMX0sJHtwb3NpdGlvbjJ9JmxpbWl0PTUmQVBQSUQ9ZGZmMDlmNDE2YjFlZWNhYjNhNmRhYzMyMTM5Y2Y1OTNgLFxuICAgICAgICB7XG4gICAgICAgICAgbW9kZTogJ2NvcnMnXG4gICAgICAgIH0pXG4gICAgICBjb25zdCBnZW9EYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpXG4gICAgICBzZWFyY2hUZW1wbGF0ZShnZW9EYXRhKVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmxvZyhlcnJvcilcbiAgICAgIERPTUVsZW1lbnRzLmVycm9yLmlubmVySFRNTCA9IGVycm9yXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCB7IGdlb1NlYXJjaCB9XG4iLCJpbXBvcnQgeyBjbGVhciB9IGZyb20gJy4uL2RvbSdcbmltcG9ydCB7IHdlYXRoZXJUZW1wbGF0ZSB9IGZyb20gJy4uL3RlbXBsYXRlL3dlYXRoZXJUZW1wbGF0ZSdcblxuLy8gJ2h0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzMuMC9vbmVjYWxsP2xhdD17bGF0fSZsb249e2xvbn0mZXhjbHVkZT17cGFydH0mYXBwaWQ9ZGZmMDlmNDE2YjFlZWNhYjNhNmRhYzMyMTM5Y2Y1OTMnXG4vLyBHZXQgQVBJIGRhdGFcbmFzeW5jIGZ1bmN0aW9uIGdldFdlYXRoZXJEYXRhIChwb3NpdGlvbjEsIHBvc2l0aW9uMikge1xuICBjbGVhcigpXG4gIGNvbnN0IHVuaXRzID0gJ2ltcGVyaWFsJ1xuICBpZiAoIWlzTmFOKHBvc2l0aW9uMS5sYXQpKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXG4gICAgICAgIGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9sYXQ9JHtwb3NpdGlvbjEubGF0fSZsb249JHtwb3NpdGlvbjEubG9ufSZ1bml0cz0ke3VuaXRzfSZBUFBJRD1kZmYwOWY0MTZiMWVlY2FiM2E2ZGFjMzIxMzljZjU5M2AsXG4gICAgICAgIHtcbiAgICAgICAgICBtb2RlOiAnY29ycydcbiAgICAgICAgfSlcbiAgICAgIGNvbnN0IHdlYXRoZXJEYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpXG4gICAgICB3ZWF0aGVyVGVtcGxhdGUod2VhdGhlckRhdGEsIHBvc2l0aW9uMilcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5sb2coZXJyb3IpXG4gICAgfVxuICB9XG59XG5cbi8vIEV4cG9ydCBkYXRhIGZvciBGVU5jdGlvbnNcbmV4cG9ydCB7IGdldFdlYXRoZXJEYXRhIH1cbiIsImFzeW5jIGZ1bmN0aW9uIHdlYXRoZXJJY29ucyAod2VhdGhlckRhdGEpIHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cDovL29wZW53ZWF0aGVybWFwLm9yZy9pbWcvd24vJHt3ZWF0aGVyRGF0YS53ZWF0aGVyWzBdLmljb259QDJ4LnBuZ2AsIHsgY3JlZGVudGlhbHM6ICdvbWl0JyB9KVxuICBjb25zdCB1cmxPYmogPSByZXNwb25zZVxuICBjb25zdCB1cmwgPSB1cmxPYmoudXJsXG4gIHJldHVybiB1cmxcbn1cblxuZXhwb3J0IHsgd2VhdGhlckljb25zIH1cbiIsImltcG9ydCB7IGFkZENhcmRFdmVudHMsIGNsZWFyLCBET01FbGVtZW50cyB9IGZyb20gJy4uL2RvbSdcblxuYXN5bmMgZnVuY3Rpb24gc2VhcmNoVGVtcGxhdGUgKGdlb0RhdGEpIHtcbiAgY2xlYXIoKVxuICBmb3IgKGxldCBpID0gMDsgaSA8IGdlb0RhdGEubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCByZW5kZXJUZW1wbGF0ZSA9IGBcbiAgICA8ZGl2IGNsYXNzPSdjYXJkJyBkYXRhLXN0YXRlPScke2dlb0RhdGFbaV0uc3RhdGV9JyBkYXRhLWNvb3Jkcz0ne1wibGF0XCI6JHtnZW9EYXRhW2ldLmxhdH0sIFwibG9uXCI6ICR7Z2VvRGF0YVtpXS5sb259fSc+XG4gICAgJHtnZW9EYXRhW2ldLm5hbWV9LCAke2dlb0RhdGFbaV0uc3RhdGV9ICR7Z2VvRGF0YVtpXS5jb3VudHJ5fVxuICAgIDwvZGl2PmBcblxuICAgIGNvbnN0IGNyZWF0ZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgcmVuZGVyVGVtcGxhdGUudHJpbSgpXG4gICAgY3JlYXRlRGl2LmlubmVySFRNTCA9IHJlbmRlclRlbXBsYXRlXG4gICAgRE9NRWxlbWVudHMucmVuZGVyLmFwcGVuZChjcmVhdGVEaXYpXG4gIH1cbiAgRE9NRWxlbWVudHMuZXJyb3IuaW5uZXJIVE1MID0gJ0RpZCB5b3UgbWVhbiB0aGlzOidcbiAgYWRkQ2FyZEV2ZW50cygpXG59XG5cbmV4cG9ydCB7IHNlYXJjaFRlbXBsYXRlIH1cbiIsImltcG9ydCB7IHJlbmRlckhUTUwsIHJlbmRlckljb25zLCByZW5kZXJIdW1pZGl0eSwgcmVuZGVyU3VuLCB1cGRhdGVCYWNrZ3JvdW5kIH0gZnJvbSAnLi4vZG9tJ1xuaW1wb3J0IHsgd2VhdGhlckljb25zIH0gZnJvbSAnLi4vcmVxdWVzdHMvd2VhdGhlckljb25zJ1xuaW1wb3J0IHsgVGhlcm1vbWV0ZXIsIFN1bnJpc2UsIFN1bnNldCwgRHJvcGxldHMsIFdpbmQsIFN1biwgY3JlYXRlRWxlbWVudCB9IGZyb20gJ2x1Y2lkZSdcblxuY29uc3QgdGhlcm1vID0gY3JlYXRlRWxlbWVudChUaGVybW9tZXRlcilcbmNvbnN0IHN1blNldCA9IGNyZWF0ZUVsZW1lbnQoU3Vuc2V0KVxuY29uc3Qgc3VuUmlzZSA9IGNyZWF0ZUVsZW1lbnQoU3VucmlzZSlcbmNvbnN0IGRyb3BsZXRzID0gY3JlYXRlRWxlbWVudChEcm9wbGV0cylcbmNvbnN0IHdpbmQgPSBjcmVhdGVFbGVtZW50KFdpbmQpXG5jb25zdCB3aW5kMiA9IGNyZWF0ZUVsZW1lbnQoV2luZClcbmNvbnN0IHN1biA9IGNyZWF0ZUVsZW1lbnQoU3VuKVxuXG5hc3luYyBmdW5jdGlvbiB3ZWF0aGVyVGVtcGxhdGUgKHdlYXRoZXJEYXRhLCBzdGF0ZSkge1xuICBjb25zb2xlLmxvZyh3ZWF0aGVyRGF0YSlcblxuICBjb25zdCB0aW1lID0gY3VycmVudFRpbWUod2VhdGhlckRhdGEuZHQsIHdlYXRoZXJEYXRhLnRpbWV6b25lKVxuICBjb25zdCBzdW5SaXNlVGltZSA9IGN1cnJlbnRUaW1lKHdlYXRoZXJEYXRhLnN5cy5zdW5yaXNlLCB3ZWF0aGVyRGF0YS50aW1lem9uZSlcbiAgY29uc3Qgc3VuU2V0VGltZSA9IGN1cnJlbnRUaW1lKHdlYXRoZXJEYXRhLnN5cy5zdW5zZXQsIHdlYXRoZXJEYXRhLnRpbWV6b25lKVxuICAvLyBGZXRjaCBJY29ucyB0byByZXNvbHZlIGNvb2tpZSBpc3N1ZVxuICBjb25zdCBpY29uID0gYXdhaXQgd2VhdGhlckljb25zKHdlYXRoZXJEYXRhKVxuICBjb25zdCByZW5kZXJUZW1wbGF0ZVRvcCA9IGA8ZGl2IGNsYXNzPSdiYWNrZ3JvdW5kLWNvbnRhaW5lcic+XG4gIDxkaXYgY2xhc3M9J3RpbWUnPiR7dGltZS5ob3VyfToke3RpbWUubWludXRlc30gJHt0aW1lLmFtcG19PC9kaXY+XG4gIDxkaXYgY2xhc3M9J2RhdGUnPiR7dGltZS53ZWVrZGF5fSwgJHt0aW1lLm1vbnRofSAke3RpbWUuZGF0ZX08L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPSdjb250YWluZXInPlxuICAgICAgPGRpdiBjbGFzcz0nd3JhcHBlcic+XG4gICAgICAgIDxkaXYgY2xhc3M9J2xvY2F0aW9uJz4ke3dlYXRoZXJEYXRhLm5hbWV9LCAke3N0YXRlfSAke3dlYXRoZXJEYXRhLnN5cy5jb3VudHJ5fTwvZGl2PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9J3RlbXAnPiR7TWF0aC5jZWlsKHdlYXRoZXJEYXRhLm1haW4udGVtcCl9JiM4NDU3PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPSdjb25kaXRpb25zJz5cbiAgICAgICAgICA8ZGl2IGNsYXNzPSdza3lDb25kaXRpb24nPiR7d2VhdGhlckRhdGEud2VhdGhlclswXS5tYWlufTwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz0nd2VhdGhlckljb24nPlxuICAgICAgICA8aW1nIHNyYz0nJHtpY29ufScgYWx0PSdDdXJyZW50IFdlYXRoZXIgQ29uZGl0aW9ucyc+XG4gICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz0naW5mb0NvbnRhaW5lcic+XG4gICAgICA8ZGl2IGNsYXNzPSdtb3JlSW5mbyc+XG4gICAgICAgIDxkaXYgaWQ9J2ZlZWxzTGlrZSc+XG4gICAgICAgICAgPGRpdiBjbGFzcz0nZmVlbHMnPjxzcGFuPiR7TWF0aC5jZWlsKHdlYXRoZXJEYXRhLm1haW4uZmVlbHNfbGlrZSl9JiM4NDU3PC9zcGFuPjxicj5GZWVscyBsaWtlPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPSdpbmZvRGlzcGxheSc+XG4gICAgICAgICAgPGRpdiBjbGFzcz0naW5mbyc+PGRpdiBjbGFzcz0ndGhlcm1vJz48L2Rpdj5IaWdoIHwgTG93PC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz0naW5mbyc+PHNwYW4+JHtNYXRoLmNlaWwod2VhdGhlckRhdGEubWFpbi50ZW1wX21heCl9JiM4NDU3PC9zcGFuPiYjMTYwfCYjMTYwPHNwYW4+JHtNYXRoLmNlaWwod2VhdGhlckRhdGEubWFpbi50ZW1wX21pbil9JiM4NDU3PC9zcGFuPjwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9J2luZm8nPjxkaXYgY2xhc3M9J2Ryb3BsZXRzJz48L2Rpdj4gSHVtaWRpdHk8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPSdpbmZvJz4ke3dlYXRoZXJEYXRhLm1haW4uaHVtaWRpdHl9JTxkaXYgaWQ9J2h1bWlkaXR5QmFyJz48ZGl2IGlkPSdodW1pZGl0eVBlcmNlbnQnPjwvZGl2PjwvZGl2PjwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9J2luZm9EaXNwbGF5Jz5cbiAgICAgICAgPGRpdiBjbGFzcz0naW5mbyc+PGRpdiBjbGFzcz0nd2luZCc+PC9kaXY+V2luZCBTcGVlZDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPSdpbmZvJz48c3Bhbj4ke01hdGguY2VpbCh3ZWF0aGVyRGF0YS53aW5kLnNwZWVkKX0gbXBoPC9zcGFuPjwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPSdpbmZvJz48ZGl2IGNsYXNzPSd3aW5kR3VzdCc+PC9kaXY+R3VzdHM8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz0naW5mbyc+JHtNYXRoLmNlaWwod2VhdGhlckRhdGEud2luZC5ndXN0KX0gbXBoPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz0nc3VuSW5mbyc+XG4gICAgICAgIDxkaXYgY2xhc3M9J2luZm9EaXNwbGF5Jz5cbiAgICAgICAgICA8ZGl2IGNsYXNzPSdzdW5JY29uJz48ZGl2IGNsYXNzPSdzdW5yaXNlJz48L2Rpdj4ke3N1blJpc2VUaW1lLmhvdXJ9OiR7c3VuUmlzZVRpbWUubWludXRlc308L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPSdzdW5CYXInPjxkaXYgY2xhc3M9J3N1bkJhclBlcmNlbnQnPjxkaXYgY2xhc3M9J3N1bkJhckljb24nPjwvZGl2PjwvZGl2PjwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9J3N1bkljb24nPjxkaXYgY2xhc3M9J3N1bnNldCc+PC9kaXY+JHtzdW5TZXRUaW1lLmhvdXJ9OiR7c3VuU2V0VGltZS5taW51dGVzfTwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbiAgICA8L2Rpdj5cbmBcbiAgcmVuZGVySFRNTCh3ZWF0aGVyRGF0YSwgcmVuZGVyVGVtcGxhdGVUb3ApXG4gIHJlbmRlckljb25zKHRoZXJtbywgc3VuU2V0LCBzdW5SaXNlLCBkcm9wbGV0cywgd2luZCwgd2luZDIsIHN1bilcbiAgcmVuZGVySHVtaWRpdHkod2VhdGhlckRhdGEubWFpbi5odW1pZGl0eSlcbiAgcmVuZGVyU3VuKHN1blJpc2VUaW1lLmhvdXIsIHN1blNldFRpbWUuaG91ciwgdGltZS5ob3VyKVxuICB1cGRhdGVCYWNrZ3JvdW5kKHdlYXRoZXJEYXRhLm1haW4udGVtcCwgd2VhdGhlckRhdGEud2VhdGhlclswXS5tYWluKVxufVxuXG5mdW5jdGlvbiBjdXJyZW50VGltZSAoZHRJbiwgdGltZXpvbmUpIHtcbiAgY29uc3QgZGF0ZVRpbWUgPSBuZXcgRGF0ZShkdEluICogMTAwMCArIHRpbWV6b25lICogMTAwMClcblxuICBjb25zdCBob3VyID0gKGRhdGVUaW1lLmdldFVUQ0hvdXJzKCkgJSAyNClcbiAgY29uc3QgYW1wbSA9IGhvdXIgPCAxMiA/ICdhbScgOiAncG0nXG5cbiAgbGV0IG1pbnV0ZXMgPSBkYXRlVGltZS5nZXRVVENNaW51dGVzKClcbiAgaWYgKG1pbnV0ZXMgPCAxMCkge1xuICAgIG1pbnV0ZXMgPSBgMCR7bWludXRlc31gXG4gIH1cbiAgY29uc3Qgd2Vla2RheSA9IGRhdGVUaW1lLnRvTG9jYWxlU3RyaW5nKCdkZWZhdWx0JywgeyB0aW1lWm9uZTogJ1VUQycsIHdlZWtkYXk6ICdsb25nJyB9KVxuICBjb25zdCBtb250aCA9IGRhdGVUaW1lLnRvTG9jYWxlU3RyaW5nKCdkZWZhdWx0JywgeyB0aW1lWm9uZTogJ1VUQycsIG1vbnRoOiAnc2hvcnQnIH0pXG4gIGNvbnN0IGRhdGUgPSBkYXRlVGltZS5nZXRVVENEYXRlKClcblxuICByZXR1cm4ge1xuICAgIHdlZWtkYXksXG4gICAgbW9udGgsXG4gICAgZGF0ZSxcbiAgICBob3VyLFxuICAgIG1pbnV0ZXMsXG4gICAgYW1wbVxuICB9XG59XG5cbmV4cG9ydCB7IHdlYXRoZXJUZW1wbGF0ZSB9XG4iLCJpbXBvcnQgeyBnZXRXZWF0aGVyRGF0YSB9IGZyb20gJy4vcmVxdWVzdHMvd2VhdGhlckFQSSdcbmltcG9ydCB7IERPTUVsZW1lbnRzIH0gZnJvbSAnLi9kb20nXG5cbmZ1bmN0aW9uIHVzZXJMb2NhdGlvbiAoKSB7XG4gIGlmIChuYXZpZ2F0b3IuZ2VvbG9jYXRpb24pIHtcbiAgICBuYXZpZ2F0b3IuZ2VvbG9jYXRpb24uZ2V0Q3VycmVudFBvc2l0aW9uKHNob3dVc2VyUG9zaXRpb24pXG4gIH0gZWxzZSB7XG4gICAgRE9NRWxlbWVudHMuZXJyb3IuaW5uZXJIVE1MID0gJ1lvdSBoYXZlIGRpc2FibGVkIExvY2F0aW9uIG9yIGlzIG90aGVyd2lzZSBpbmNhcGFjaXRhdGVkJ1xuICB9XG59XG5cbmZ1bmN0aW9uIHNob3dVc2VyUG9zaXRpb24gKHNob3dVc2VyUG9zaXRpb24pIHtcbiAgY29uc29sZS5sb2coYExhdGl0dWRlOiAke3Nob3dVc2VyUG9zaXRpb24uY29vcmRzLmxhdGl0dWRlfSBMb25naXR1ZGU6ICR7c2hvd1VzZXJQb3NpdGlvbi5jb29yZHMubG9uZ2l0dWRlfWApXG4gIGNvbnN0IGxhdGl0dWRlID0gc2hvd1VzZXJQb3NpdGlvbi5jb29yZHMubGF0aXR1ZGVcbiAgY29uc3QgbG9uZ2l0dWRlID0gc2hvd1VzZXJQb3NpdGlvbi5jb29yZHMubG9uZ2l0dWRlXG4gIGNvbnN0IHBvc2l0aW9uID0geyBsYXQ6IGxhdGl0dWRlLCBsb246IGxvbmdpdHVkZSB9XG4gIGNvbnN0IHN0YXRlID0gJydcbiAgZ2V0V2VhdGhlckRhdGEocG9zaXRpb24sIHN0YXRlKVxufVxuXG5leHBvcnQgeyB1c2VyTG9jYXRpb24gfVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9