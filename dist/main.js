/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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
___CSS_LOADER_EXPORT___.push([module.id, `:root {
  --lime: #a3e635;
  --fuchsia: #ff00ff;
  --dark-white: #eeebe8;
}

* {
  box-sizing: border-box;
}

body {
  margin: 0;
}

.contentWrapper {
  display: flex;
}

#main-column {
  flex: 1;
  padding: 1rem;
}

#topbar {
  background-color: var(--lime);
  height: 60px;
  display: flex;
  align-items: center;
}

#topbar>img {
  height: 60px;
  width: auto;
  margin-left: 20px;
}

#navbar {
  padding: 0.5rem;
  width: max(250px, 20vw);
  min-height: calc(100vh - 60px);
  background-color: var(--dark-white);
}

#navbar>h1 {
  margin: 10px;
  display: inline;
}

#projects-ul {
  padding: 0;
}

#projects-ul>li {
  display: flex;
  list-style-type: none;
  padding: 1rem;
  cursor: pointer;
}

#projects-ul>li:hover {
  background-color: rgb(193, 196, 195);
  border-radius: 5px;
}

#projects-ul>li>p {
  flex: 1;
  font-size: 1.2rem;
  width: auto;
  word-break: break-word;
  pointer-events: none;
}

.icons {
  display: flex;
  align-items: center;
}

.icons>img {
  height: 20px;
  width: auto;
  margin: 15px;
}

.todo-container {
  display: flex;
  margin: 0.5rem 0;
}

.todo-container input {
  margin: 0;
}

.todo {
  flex: 1;
  padding: 0.5rem;
  margin-left: 0.5rem;
  border: 1px solid black;
  border-radius: 5px;
}

.todo-high {
  background-color: red;
}

.todo-medium {
  background-color: yellow
}

.todo-low {
  background-color: lightgreen;
}

.todo.completed {
  background-color: rgb(174, 173, 173);
}

.todo.completed p,
.todo.completed h3 {
  text-decoration: line-through;
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,eAAe;EACf,kBAAkB;EAClB,qBAAqB;AACvB;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,SAAS;AACX;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,OAAO;EACP,aAAa;AACf;;AAEA;EACE,6BAA6B;EAC7B,YAAY;EACZ,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,YAAY;EACZ,WAAW;EACX,iBAAiB;AACnB;;AAEA;EACE,eAAe;EACf,uBAAuB;EACvB,8BAA8B;EAC9B,mCAAmC;AACrC;;AAEA;EACE,YAAY;EACZ,eAAe;AACjB;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,aAAa;EACb,qBAAqB;EACrB,aAAa;EACb,eAAe;AACjB;;AAEA;EACE,oCAAoC;EACpC,kBAAkB;AACpB;;AAEA;EACE,OAAO;EACP,iBAAiB;EACjB,WAAW;EACX,sBAAsB;EACtB,oBAAoB;AACtB;;AAEA;EACE,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,YAAY;EACZ,WAAW;EACX,YAAY;AACd;;AAEA;EACE,aAAa;EACb,gBAAgB;AAClB;;AAEA;EACE,SAAS;AACX;;AAEA;EACE,OAAO;EACP,eAAe;EACf,mBAAmB;EACnB,uBAAuB;EACvB,kBAAkB;AACpB;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE;AACF;;AAEA;EACE,4BAA4B;AAC9B;;AAEA;EACE,oCAAoC;AACtC;;AAEA;;EAEE,6BAA6B;AAC/B","sourcesContent":[":root {\n  --lime: #a3e635;\n  --fuchsia: #ff00ff;\n  --dark-white: #eeebe8;\n}\n\n* {\n  box-sizing: border-box;\n}\n\nbody {\n  margin: 0;\n}\n\n.contentWrapper {\n  display: flex;\n}\n\n#main-column {\n  flex: 1;\n  padding: 1rem;\n}\n\n#topbar {\n  background-color: var(--lime);\n  height: 60px;\n  display: flex;\n  align-items: center;\n}\n\n#topbar>img {\n  height: 60px;\n  width: auto;\n  margin-left: 20px;\n}\n\n#navbar {\n  padding: 0.5rem;\n  width: max(250px, 20vw);\n  min-height: calc(100vh - 60px);\n  background-color: var(--dark-white);\n}\n\n#navbar>h1 {\n  margin: 10px;\n  display: inline;\n}\n\n#projects-ul {\n  padding: 0;\n}\n\n#projects-ul>li {\n  display: flex;\n  list-style-type: none;\n  padding: 1rem;\n  cursor: pointer;\n}\n\n#projects-ul>li:hover {\n  background-color: rgb(193, 196, 195);\n  border-radius: 5px;\n}\n\n#projects-ul>li>p {\n  flex: 1;\n  font-size: 1.2rem;\n  width: auto;\n  word-break: break-word;\n  pointer-events: none;\n}\n\n.icons {\n  display: flex;\n  align-items: center;\n}\n\n.icons>img {\n  height: 20px;\n  width: auto;\n  margin: 15px;\n}\n\n.todo-container {\n  display: flex;\n  margin: 0.5rem 0;\n}\n\n.todo-container input {\n  margin: 0;\n}\n\n.todo {\n  flex: 1;\n  padding: 0.5rem;\n  margin-left: 0.5rem;\n  border: 1px solid black;\n  border-radius: 5px;\n}\n\n.todo-high {\n  background-color: red;\n}\n\n.todo-medium {\n  background-color: yellow\n}\n\n.todo-low {\n  background-color: lightgreen;\n}\n\n.todo.completed {\n  background-color: rgb(174, 173, 173);\n}\n\n.todo.completed p,\n.todo.completed h3 {\n  text-decoration: line-through;\n}"],"sourceRoot":""}]);
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
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

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
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
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
  }

  // For old IE
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
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
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

/***/ "./src/dialog.js":
/*!***********************!*\
  !*** ./src/dialog.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   changeProjectDialog: () => (/* binding */ changeProjectDialog),
/* harmony export */   createProjectDialog: () => (/* binding */ createProjectDialog),
/* harmony export */   createTodoDialog: () => (/* binding */ createTodoDialog)
/* harmony export */ });
/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo */ "./src/todo.js");
/* harmony import */ var _dom_functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom-functions */ "./src/dom-functions.js");




class BaseDialog {
  constructor() {
    this.dialog = document.createElement("dialog");
    this.dialog.classList.add("dialog");

    this.form = document.createElement("form");
    this.form.action = "#";
    this.form.classList.add("form-container");
    this.dialog.appendChild(this.form);

    this.submit = document.createElement("button");
    this.submit.type = "submit";
    this.submit.classList.add("project-submit");

    this.form.appendChild(this.submit);
  }

  create() {
    document.body.appendChild(this.dialog);
  }

  close() {
    this.dialog.close();
  }

  showModal() {
    this.dialog.showModal();
  }
}

class TodoDialog extends BaseDialog {
  constructor(id) {
    super();

    this.id = id;
    this.dialog.id = `${this.id}-todo-dialog`;

    let fragment = document.createDocumentFragment();

    for (let field of ["Title", "Description"]) {
      let input = document.createElement("input");
      if (field === "title") { input.setAttribute("required", ""); }
      input.type = "text";
      input.classList.add(`form-${field.toLowerCase()}`);
      input.name = field;
      input.placeholder = field;
      fragment.appendChild(input);
    }

    let div = document.createElement("div");
    let label = document.createElement("label");
    label.setAttribute("for", `${this.id}-due-date`);
    label.innerText = "Due date:";
    const date = document.createElement("input");
    date.type = "date";
    date.id = `${this.id}-due-date`;
    date.name = "date";
    div.appendChild(label);
    div.appendChild(date);
    fragment.appendChild(div);

    for (let field of ["priority", "project"]) {
      div = document.createElement("div");
      label = document.createElement("label");
      label.textContent = `${field}: `;
      label.setAttribute("for", `${this.id}-${field}-select`);

      const select = document.createElement("select");
      select.id = `${this.id}-${field}-select`;
      select.name = field;

      let options = ["low", "medium", "high"];
      if (field === "project") {
        const projects = JSON.parse(localStorage.getItem("projects"));
        if (projects) {
          options = projects.map(project => project.title);
        } else {
          options = [];
        }
      }

      for (let optionValue of options) {
        let option = document.createElement("option");
        option.value = optionValue;
        option.text = optionValue;
        select.appendChild(option);
      }

      div.appendChild(label);
      div.appendChild(select);
      fragment.appendChild(div);
    }
    this.form.appendChild(fragment);
  }
}

class CreateTodoDialog extends TodoDialog {
  constructor() {
    super("create");

    this.submit.addEventListener("click", this.createTodoFormSubmit.bind(this));
    this.submit.textContent = "Add todo";
  }

  createTodoFormSubmit(e) {
    e.preventDefault();
    let date = new Date(document.getElementById(`${this.id}-due-date`).valueAsNumber);
    let todo = new _todo__WEBPACK_IMPORTED_MODULE_0__.TodoItem(
      this.dialog.querySelector(".form-title").value,
      this.dialog.querySelector(".form-description").value,
      (date instanceof Date && !isNaN(date)) ? date : null,
      document.getElementById(`${this.id}-priority-select`).value,
    );

    let projectTitle = document.getElementById(`${this.id}-project-select`).value;
    document.getElementById(`${this.id}-project-select`).addEventListener("change", (e) => {
      projectTitle = e.target.value;
    });

    try {
      todo.addTodo(projectTitle);
    } catch (DuplicateTodoTitleError) {
      alert("A todo with the same title already exists in this project. Please enter a different title.");
      return;
    }

    let activeProjectName = document.getElementById("active").dataset.projectName;
    if (activeProjectName === projectTitle) {
      (0,_dom_functions__WEBPACK_IMPORTED_MODULE_1__.showActiveProjectTodos)();
    }

    this.form.reset();
    this.dialog.close();
  }
}

class ProjectDialog extends BaseDialog {
  constructor(id) {
    super();

    this.dialog.id = `${id}-project-dialog`;
    const input = document.createElement("input");
    input.setAttribute("required", "");
    input.type = "text";
    input.classList.add("project-title");
    input.name = `${id}-project-title`;
    input.maxLength = 20;
    input.placeholder = "Project title";
    this.form.appendChild(input);
  }
}

class CreateProjectDialog extends ProjectDialog {
  constructor() {
    super("create");

    this.submit.textContent = "Add project";
    this.submit.addEventListener("click", this.createProjectSubmit.bind(this));
  }

  createProjectSubmit(e) {
    e.preventDefault();
    let projectName = this.dialog.querySelector(".project-title").value;

    let projects = JSON.parse(localStorage.getItem("projects")) || [];
    for (let project of projects) {
      if (project.title === projectName) {
        alert("A project with the same title already exists. Please enter a different title.");
        return;
      }
    }
    (new _todo__WEBPACK_IMPORTED_MODULE_0__.Project(projectName)).pushToStorage();
    this.close();
    this.form.reset();
    (0,_dom_functions__WEBPACK_IMPORTED_MODULE_1__.updateProjectsUl)();
    (0,_dom_functions__WEBPACK_IMPORTED_MODULE_1__.updateTodoProjectsInput)();
  }
}

class RenameProjectDialog extends ProjectDialog {
  constructor() {
    super("rename");

    this.submit.textContent = "Rename project";
    this.submit.addEventListener("click", this.renameProjectSubmit.bind(this));
  }

  renameProjectSubmit(e) {
    e.preventDefault();
    let newProjectName = this.dialog.querySelector(".project-title").value;
    let projects = JSON.parse(localStorage.getItem("projects")) || [];
    for (let project of projects) {
      if (project.title === newProjectName) {
        alert("A project with the same title already exists. Please enter a different title.");
        return;
      }
    }
    // Update project name
    for (let project of projects) {
      if (project.title === this.previousName) {
        project.title = newProjectName;
        localStorage.setItem("projects", JSON.stringify(projects));
        (0,_dom_functions__WEBPACK_IMPORTED_MODULE_1__.updateProjectsUl)();
        (0,_dom_functions__WEBPACK_IMPORTED_MODULE_1__.updateTodoProjectsInput)();
      }
    }
    this.close();
  }
}

const createProjectDialog = new CreateProjectDialog();
createProjectDialog.create();
const changeProjectDialog = new RenameProjectDialog();
changeProjectDialog.create();
const createTodoDialog = new CreateTodoDialog("create");
createTodoDialog.create();


/***/ }),

/***/ "./src/dom-functions.js":
/*!******************************!*\
  !*** ./src/dom-functions.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createNavbar: () => (/* binding */ createNavbar),
/* harmony export */   createTopbar: () => (/* binding */ createTopbar),
/* harmony export */   showActiveProjectTodos: () => (/* binding */ showActiveProjectTodos),
/* harmony export */   updateProjectsUl: () => (/* binding */ updateProjectsUl),
/* harmony export */   updateTodoProjectsInput: () => (/* binding */ updateTodoProjectsInput)
/* harmony export */ });
/* harmony import */ var _icons_checkbox_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./icons/checkbox.png */ "./src/icons/checkbox.png");
/* harmony import */ var _icons_xmark_solid_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./icons/xmark-solid.svg */ "./src/icons/xmark-solid.svg");
/* harmony import */ var _icons_pen_to_square_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./icons/pen-to-square.svg */ "./src/icons/pen-to-square.svg");
/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./todo */ "./src/todo.js");
/* harmony import */ var _dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dialog */ "./src/dialog.js");









/**
 * Creates a top bar element for a to-do list.
 * @returns {HTMLElement} The top bar element containing an icon and a title.
 */
function createTopbar() {
  const topbar = document.createElement("div");
  topbar.setAttribute("id", "topbar");

  const icon = new Image();
  icon.src = _icons_checkbox_png__WEBPACK_IMPORTED_MODULE_0__;
  topbar.appendChild(icon);

  const h1 = document.createElement("h1");
  h1.appendChild(document.createTextNode("TO DO"));
  topbar.appendChild(h1);

  return topbar;
};

function createNavbar() {
  const navbar = document.createElement("div");
  navbar.setAttribute("id", "navbar");

  const create = document.createElement("button");
  create.textContent = "Create";
  create.classList.add("todo-create");
  create.addEventListener("click", (e) => {
    e.preventDefault();
    _dialog__WEBPACK_IMPORTED_MODULE_4__.createTodoDialog.showModal();
  });

  navbar.appendChild(create);

  const primaryUl = document.createElement("ul");
  primaryUl.setAttribute("id", "primary-ul");

  const filters = ["Today", "Upcoming", "Important",];

  filters.forEach((filter) => {
    const li = document.createElement("li");
    li.textContent = filter;
    li.classList.add(filter.toLowerCase());
    primaryUl.appendChild(li);
  });
  navbar.appendChild(primaryUl);

  const projectHeader = document.createElement("h2");
  projectHeader.classList.add("project-header");
  projectHeader.textContent = "Projects: ";
  navbar.appendChild(projectHeader);


  const projectsUl = document.createElement("ul");
  projectsUl.id = "projects-ul";
  projectsUl.addEventListener("click", e => {
    if (e.target.hasAttribute("data-project-name") && e.target.id !== "active") {
      let previousProject = document.getElementById("active");
      if (previousProject) {
        previousProject.removeAttribute("id");
      }
      e.target.id = "active";

      showActiveProjectTodos();
    }
  });
  navbar.appendChild(projectsUl);

  const createProject = document.createElement("div");
  createProject.classList.add("create-project");
  createProject.textContent = "Create new project";
  createProject.addEventListener("click", (e) => {
    e.preventDefault();
    _dialog__WEBPACK_IMPORTED_MODULE_4__.createProjectDialog.showModal();
  });

  navbar.appendChild(createProject);

  return navbar;
};

function showActiveProjectTodos() {
  const mainColumn = document.getElementById("main-column");
  while (mainColumn.firstChild) {
    mainColumn.removeChild(mainColumn.lastChild);
  }

  const activeProjectName = document.getElementById("active").dataset.projectName;

  const projects = JSON.parse(localStorage.getItem("projects"));
  const project = projects.find((p) => p.title === activeProjectName);
  for (let todo of project.todoList) {
    const todoContainer = document.createElement("div");
    todoContainer.classList.add("todo-container");
    todoContainer.dataset.projectName = project.title;
    todoContainer.dataset.todoName = todo.title;

    const todoChekbox = document.createElement("input");
    todoChekbox.type = "checkbox";
    todoChekbox.addEventListener("click", (e) => {
      todo.completed = e.target.checked;
      localStorage.setItem("projects", JSON.stringify(projects));
      if (e.target.checked) {
        todoDiv.classList.add("completed");
      } else {
        todoDiv.classList.remove("completed");
      }
    });

    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo", `todo-${todo.priority}`);
    if (todo.completed) {
      todoChekbox.checked = true;
      todoDiv.classList.add("completed");
    }

    const title = document.createElement("h3");
    title.textContent = todo.title;
    const desc = document.createElement("p");
    desc.textContent = todo.description;

    const timeText = document.createElement("p");
    if (todo.dueDate) {
      const time = new Date(todo.dueDate).toLocaleDateString("en-GB");
      timeText.textContent = time;
    }

    const icons = document.createElement("div");
    icons.classList.add("icons");

    const penIcon = document.createElement("img");
    penIcon.classList.add("edit-icon");
    penIcon.src = _icons_pen_to_square_svg__WEBPACK_IMPORTED_MODULE_2__;
    penIcon.addEventListener("click", (e) => {
      e.stopPropagation();
    });
    icons.appendChild(penIcon);

    const xIcon = document.createElement("img");
    xIcon.classList.add("delete-icon");
    xIcon.src = _icons_xmark_solid_svg__WEBPACK_IMPORTED_MODULE_1__;
    xIcon.addEventListener("click", (e) => {
      e.stopPropagation();

      let projectName = e.target.parentElement.parentElement.dataset.projectName;
      let todoName = e.target.parentElement.parentElement.dataset.todoName;

      const projects = JSON.parse(localStorage.getItem("projects"));
      const project = projects.find((p) => p.title === projectName);

      let todoIndex = project.todoList.findIndex(todo => todo.title === todoName);
      if (todoIndex !== -1) {
        project.todoList.splice(todoIndex, 1);
        localStorage.setItem("projects", JSON.stringify(projects));
      }

      if (projectName === activeProjectName) {
        showActiveProjectTodos();
      }
    });
    icons.appendChild(xIcon);

    todoDiv.appendChild(title);
    todoDiv.appendChild(desc);
    todoDiv.appendChild(timeText);
    todoContainer.appendChild(todoChekbox);
    todoContainer.appendChild(todoDiv);
    todoContainer.appendChild(icons);
    mainColumn.appendChild(todoContainer);
  };
};


function updateProjectsUl() {
  const projectsUl = document.querySelector("#projects-ul");
  while (projectsUl.firstChild) {
    projectsUl.removeChild(projectsUl.lastChild);
  };

  const projects = JSON.parse(localStorage.getItem("projects")) || [];
  for (let project of projects) {
    const li = document.createElement("li");
    const title = document.createElement("p");
    const icons = document.createElement("div");
    icons.classList.add("icons");

    const penIcon = document.createElement("img");
    penIcon.classList.add("edit-icon");
    penIcon.src = _icons_pen_to_square_svg__WEBPACK_IMPORTED_MODULE_2__;
    penIcon.addEventListener("click", (e) => {
      e.stopPropagation();
      // save projectName on memory
      _dialog__WEBPACK_IMPORTED_MODULE_4__.changeProjectDialog.previousName = e.target.parentElement.parentElement.firstChild.textContent;

      // open dialog and set input value
      const input = _dialog__WEBPACK_IMPORTED_MODULE_4__.changeProjectDialog.dialog.querySelector(".project-title");
      input.value = _dialog__WEBPACK_IMPORTED_MODULE_4__.changeProjectDialog.previousName;
      _dialog__WEBPACK_IMPORTED_MODULE_4__.changeProjectDialog.showModal();
    });
    icons.appendChild(penIcon);

    const xIcon = document.createElement("img");
    xIcon.classList.add("delete-icon");
    xIcon.src = _icons_xmark_solid_svg__WEBPACK_IMPORTED_MODULE_1__;
    xIcon.addEventListener("click", (e) => {
      e.stopPropagation();
      _todo__WEBPACK_IMPORTED_MODULE_3__.Project.removeFromStorage(project.title);
      updateProjectsUl();
      updateTodoProjectsInput();
    });
    icons.appendChild(xIcon);

    li.dataset.projectName = project.title;
    title.textContent = project.title;
    li.appendChild(title);
    li.appendChild(icons);
    projectsUl.appendChild(li);
  };
};

function updateTodoProjectsInput() {
  const projectSelect = document.querySelector("#create-project-select");
  while (projectSelect.firstChild) {
    projectSelect.removeChild(projectSelect.lastChild);
  }
  const projects = JSON.parse(localStorage.getItem("projects"));
  if (projects) {
    projects.forEach((project) => {
      const option = document.createElement("option");
      option.textContent = project["title"];
      projectSelect.appendChild(option);
    });
  };
};

/***/ }),

/***/ "./src/todo.js":
/*!*********************!*\
  !*** ./src/todo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Project: () => (/* binding */ Project),
/* harmony export */   TodoItem: () => (/* binding */ TodoItem)
/* harmony export */ });
class TodoItem {
  constructor(title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.completed = false;
  }

  addTodo(projectTitle) {
    const projects = JSON.parse(localStorage.getItem("projects"));
    let index = projects.findIndex(project => project.title === projectTitle);
    let todoIndex = projects[index].todoList.findIndex(todo => todo.title === this.title);
    if (todoIndex === -1) {
      projects[index].todoList.push(this);
      localStorage.setItem("projects", JSON.stringify(projects));
    } else {
      throw new DuplicateTodoTitleError("Todo with that title already exists in this Project");
    }
  }
}

class Project {
  static removeFromStorage(projectTitle) {
    const projects = JSON.parse(localStorage.getItem("projects"));
    let index = projects.findIndex(project => project.title === projectTitle);
    if (index !== -1) {
      projects.splice(index, 1);
      localStorage.setItem("projects", JSON.stringify(projects));
    }
  }

  constructor(title) {
    this.title = title;
    this.todoList = [];
  }

  pushToStorage() {
    const projects = JSON.parse(localStorage.getItem("projects"));
    if (!projects) {
      localStorage.setItem("projects", JSON.stringify([this]));
    } else {
      projects.push(this);
      localStorage.setItem("projects", JSON.stringify(projects));
    }
  }
}

/***/ }),

/***/ "./src/icons/calendar-range.svg":
/*!**************************************!*\
  !*** ./src/icons/calendar-range.svg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "eff04cf8dead8e68a7ba.svg";

/***/ }),

/***/ "./src/icons/calendar-today.svg":
/*!**************************************!*\
  !*** ./src/icons/calendar-today.svg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3faae0cf01e4ecd160ef.svg";

/***/ }),

/***/ "./src/icons/checkbox.png":
/*!********************************!*\
  !*** ./src/icons/checkbox.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ec6de518f4687b358cc8.png";

/***/ }),

/***/ "./src/icons/pen-to-square.svg":
/*!*************************************!*\
  !*** ./src/icons/pen-to-square.svg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "01ab3a7b8b46a56333a6.svg";

/***/ }),

/***/ "./src/icons/xmark-solid.svg":
/*!***********************************!*\
  !*** ./src/icons/xmark-solid.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "33c889ee6afa3ed57684.svg";

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _icons_calendar_today_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./icons/calendar-today.svg */ "./src/icons/calendar-today.svg");
/* harmony import */ var _icons_calendar_range_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./icons/calendar-range.svg */ "./src/icons/calendar-range.svg");
/* harmony import */ var _dom_functions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dom-functions */ "./src/dom-functions.js");
/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./todo */ "./src/todo.js");






const app = document.querySelector("#content");

const projects = JSON.parse(localStorage.getItem("projects"));
if (!projects) {
  const shopping = new _todo__WEBPACK_IMPORTED_MODULE_4__.Project("Shopping");
  shopping.pushToStorage();
  (new _todo__WEBPACK_IMPORTED_MODULE_4__.TodoItem("tomatoes", "buy 0.5 kg of tomatoes", new Date(2024, 2, 19), "high").addTodo(shopping.title));
  (0,_dom_functions__WEBPACK_IMPORTED_MODULE_3__.updateTodoProjectsInput)();
}



const contentWrapper = document.createElement("div");
contentWrapper.classList.add("contentWrapper");
app.appendChild((0,_dom_functions__WEBPACK_IMPORTED_MODULE_3__.createTopbar)());
app.appendChild(contentWrapper);
contentWrapper.appendChild((0,_dom_functions__WEBPACK_IMPORTED_MODULE_3__.createNavbar)());
const mainColumn = document.createElement("div");
mainColumn.id = "main-column";
contentWrapper.appendChild(mainColumn);

(0,_dom_functions__WEBPACK_IMPORTED_MODULE_3__.updateProjectsUl)();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NsQkE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBcUI7QUFDa0M7QUFDRztBQUM4QztBQUM3RDs7QUFFM0M7O0FBRUE7QUFDQTtBQUNBLHVCQUF1QiwwQ0FBTztBQUM5QjtBQUNBLE9BQU8sMkNBQVE7QUFDZixFQUFFLHVFQUF1QjtBQUN6Qjs7OztBQUlBO0FBQ0E7QUFDQSxnQkFBZ0IsNERBQVk7QUFDNUI7QUFDQSwyQkFBMkIsNERBQVk7QUFDdkM7QUFDQTtBQUNBOztBQUVBLGdFQUFnQiIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZGlhbG9nLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9kb20tZnVuY3Rpb25zLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy90b2RvLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYDpyb290IHtcbiAgLS1saW1lOiAjYTNlNjM1O1xuICAtLWZ1Y2hzaWE6ICNmZjAwZmY7XG4gIC0tZGFyay13aGl0ZTogI2VlZWJlODtcbn1cblxuKiB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbmJvZHkge1xuICBtYXJnaW46IDA7XG59XG5cbi5jb250ZW50V3JhcHBlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbiNtYWluLWNvbHVtbiB7XG4gIGZsZXg6IDE7XG4gIHBhZGRpbmc6IDFyZW07XG59XG5cbiN0b3BiYXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saW1lKTtcbiAgaGVpZ2h0OiA2MHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4jdG9wYmFyPmltZyB7XG4gIGhlaWdodDogNjBweDtcbiAgd2lkdGg6IGF1dG87XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xufVxuXG4jbmF2YmFyIHtcbiAgcGFkZGluZzogMC41cmVtO1xuICB3aWR0aDogbWF4KDI1MHB4LCAyMHZ3KTtcbiAgbWluLWhlaWdodDogY2FsYygxMDB2aCAtIDYwcHgpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLXdoaXRlKTtcbn1cblxuI25hdmJhcj5oMSB7XG4gIG1hcmdpbjogMTBweDtcbiAgZGlzcGxheTogaW5saW5lO1xufVxuXG4jcHJvamVjdHMtdWwge1xuICBwYWRkaW5nOiAwO1xufVxuXG4jcHJvamVjdHMtdWw+bGkge1xuICBkaXNwbGF5OiBmbGV4O1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gIHBhZGRpbmc6IDFyZW07XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuI3Byb2plY3RzLXVsPmxpOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE5MywgMTk2LCAxOTUpO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbiNwcm9qZWN0cy11bD5saT5wIHtcbiAgZmxleDogMTtcbiAgZm9udC1zaXplOiAxLjJyZW07XG4gIHdpZHRoOiBhdXRvO1xuICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cblxuLmljb25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmljb25zPmltZyB7XG4gIGhlaWdodDogMjBweDtcbiAgd2lkdGg6IGF1dG87XG4gIG1hcmdpbjogMTVweDtcbn1cblxuLnRvZG8tY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luOiAwLjVyZW0gMDtcbn1cblxuLnRvZG8tY29udGFpbmVyIGlucHV0IHtcbiAgbWFyZ2luOiAwO1xufVxuXG4udG9kbyB7XG4gIGZsZXg6IDE7XG4gIHBhZGRpbmc6IDAuNXJlbTtcbiAgbWFyZ2luLWxlZnQ6IDAuNXJlbTtcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLnRvZG8taGlnaCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbn1cblxuLnRvZG8tbWVkaXVtIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogeWVsbG93XG59XG5cbi50b2RvLWxvdyB7XG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JlZW47XG59XG5cbi50b2RvLmNvbXBsZXRlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxNzQsIDE3MywgMTczKTtcbn1cblxuLnRvZG8uY29tcGxldGVkIHAsXG4udG9kby5jb21wbGV0ZWQgaDMge1xuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLE9BQU87RUFDUCxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSw2QkFBNkI7RUFDN0IsWUFBWTtFQUNaLGFBQWE7RUFDYixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGVBQWU7RUFDZix1QkFBdUI7RUFDdkIsOEJBQThCO0VBQzlCLG1DQUFtQztBQUNyQzs7QUFFQTtFQUNFLFlBQVk7RUFDWixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHFCQUFxQjtFQUNyQixhQUFhO0VBQ2IsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLG9DQUFvQztFQUNwQyxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxPQUFPO0VBQ1AsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCxzQkFBc0I7RUFDdEIsb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFNBQVM7QUFDWDs7QUFFQTtFQUNFLE9BQU87RUFDUCxlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRTtBQUNGOztBQUVBO0VBQ0UsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0Usb0NBQW9DO0FBQ3RDOztBQUVBOztFQUVFLDZCQUE2QjtBQUMvQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxuICAtLWxpbWU6ICNhM2U2MzU7XFxuICAtLWZ1Y2hzaWE6ICNmZjAwZmY7XFxuICAtLWRhcmstd2hpdGU6ICNlZWViZTg7XFxufVxcblxcbioge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuYm9keSB7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbi5jb250ZW50V3JhcHBlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4jbWFpbi1jb2x1bW4ge1xcbiAgZmxleDogMTtcXG4gIHBhZGRpbmc6IDFyZW07XFxufVxcblxcbiN0b3BiYXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGltZSk7XFxuICBoZWlnaHQ6IDYwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuI3RvcGJhcj5pbWcge1xcbiAgaGVpZ2h0OiA2MHB4O1xcbiAgd2lkdGg6IGF1dG87XFxuICBtYXJnaW4tbGVmdDogMjBweDtcXG59XFxuXFxuI25hdmJhciB7XFxuICBwYWRkaW5nOiAwLjVyZW07XFxuICB3aWR0aDogbWF4KDI1MHB4LCAyMHZ3KTtcXG4gIG1pbi1oZWlnaHQ6IGNhbGMoMTAwdmggLSA2MHB4KTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstd2hpdGUpO1xcbn1cXG5cXG4jbmF2YmFyPmgxIHtcXG4gIG1hcmdpbjogMTBweDtcXG4gIGRpc3BsYXk6IGlubGluZTtcXG59XFxuXFxuI3Byb2plY3RzLXVsIHtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbiNwcm9qZWN0cy11bD5saSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuI3Byb2plY3RzLXVsPmxpOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxOTMsIDE5NiwgMTk1KTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuI3Byb2plY3RzLXVsPmxpPnAge1xcbiAgZmxleDogMTtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgd2lkdGg6IGF1dG87XFxuICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcblxcbi5pY29ucyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmljb25zPmltZyB7XFxuICBoZWlnaHQ6IDIwcHg7XFxuICB3aWR0aDogYXV0bztcXG4gIG1hcmdpbjogMTVweDtcXG59XFxuXFxuLnRvZG8tY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBtYXJnaW46IDAuNXJlbSAwO1xcbn1cXG5cXG4udG9kby1jb250YWluZXIgaW5wdXQge1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG4udG9kbyB7XFxuICBmbGV4OiAxO1xcbiAgcGFkZGluZzogMC41cmVtO1xcbiAgbWFyZ2luLWxlZnQ6IDAuNXJlbTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG4udG9kby1oaWdoIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG59XFxuXFxuLnRvZG8tbWVkaXVtIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHllbGxvd1xcbn1cXG5cXG4udG9kby1sb3cge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmVlbjtcXG59XFxuXFxuLnRvZG8uY29tcGxldGVkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxNzQsIDE3MywgMTczKTtcXG59XFxuXFxuLnRvZG8uY29tcGxldGVkIHAsXFxuLnRvZG8uY29tcGxldGVkIGgzIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgVG9kb0l0ZW0sIFByb2plY3QgfSBmcm9tIFwiLi90b2RvXCI7XG5pbXBvcnQgeyB1cGRhdGVQcm9qZWN0c1VsLCB1cGRhdGVUb2RvUHJvamVjdHNJbnB1dCwgc2hvd0FjdGl2ZVByb2plY3RUb2RvcyB9IGZyb20gXCIuL2RvbS1mdW5jdGlvbnNcIjtcblxuXG5jbGFzcyBCYXNlRGlhbG9nIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5kaWFsb2cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGlhbG9nXCIpO1xuICAgIHRoaXMuZGlhbG9nLmNsYXNzTGlzdC5hZGQoXCJkaWFsb2dcIik7XG5cbiAgICB0aGlzLmZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcbiAgICB0aGlzLmZvcm0uYWN0aW9uID0gXCIjXCI7XG4gICAgdGhpcy5mb3JtLmNsYXNzTGlzdC5hZGQoXCJmb3JtLWNvbnRhaW5lclwiKTtcbiAgICB0aGlzLmRpYWxvZy5hcHBlbmRDaGlsZCh0aGlzLmZvcm0pO1xuXG4gICAgdGhpcy5zdWJtaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIHRoaXMuc3VibWl0LnR5cGUgPSBcInN1Ym1pdFwiO1xuICAgIHRoaXMuc3VibWl0LmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LXN1Ym1pdFwiKTtcblxuICAgIHRoaXMuZm9ybS5hcHBlbmRDaGlsZCh0aGlzLnN1Ym1pdCk7XG4gIH1cblxuICBjcmVhdGUoKSB7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLmRpYWxvZyk7XG4gIH1cblxuICBjbG9zZSgpIHtcbiAgICB0aGlzLmRpYWxvZy5jbG9zZSgpO1xuICB9XG5cbiAgc2hvd01vZGFsKCkge1xuICAgIHRoaXMuZGlhbG9nLnNob3dNb2RhbCgpO1xuICB9XG59XG5cbmNsYXNzIFRvZG9EaWFsb2cgZXh0ZW5kcyBCYXNlRGlhbG9nIHtcbiAgY29uc3RydWN0b3IoaWQpIHtcbiAgICBzdXBlcigpO1xuXG4gICAgdGhpcy5pZCA9IGlkO1xuICAgIHRoaXMuZGlhbG9nLmlkID0gYCR7dGhpcy5pZH0tdG9kby1kaWFsb2dgO1xuXG4gICAgbGV0IGZyYWdtZW50ID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xuXG4gICAgZm9yIChsZXQgZmllbGQgb2YgW1wiVGl0bGVcIiwgXCJEZXNjcmlwdGlvblwiXSkge1xuICAgICAgbGV0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgICAgaWYgKGZpZWxkID09PSBcInRpdGxlXCIpIHsgaW5wdXQuc2V0QXR0cmlidXRlKFwicmVxdWlyZWRcIiwgXCJcIik7IH1cbiAgICAgIGlucHV0LnR5cGUgPSBcInRleHRcIjtcbiAgICAgIGlucHV0LmNsYXNzTGlzdC5hZGQoYGZvcm0tJHtmaWVsZC50b0xvd2VyQ2FzZSgpfWApO1xuICAgICAgaW5wdXQubmFtZSA9IGZpZWxkO1xuICAgICAgaW5wdXQucGxhY2Vob2xkZXIgPSBmaWVsZDtcbiAgICAgIGZyYWdtZW50LmFwcGVuZENoaWxkKGlucHV0KTtcbiAgICB9XG5cbiAgICBsZXQgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBsZXQgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgbGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIGAke3RoaXMuaWR9LWR1ZS1kYXRlYCk7XG4gICAgbGFiZWwuaW5uZXJUZXh0ID0gXCJEdWUgZGF0ZTpcIjtcbiAgICBjb25zdCBkYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIGRhdGUudHlwZSA9IFwiZGF0ZVwiO1xuICAgIGRhdGUuaWQgPSBgJHt0aGlzLmlkfS1kdWUtZGF0ZWA7XG4gICAgZGF0ZS5uYW1lID0gXCJkYXRlXCI7XG4gICAgZGl2LmFwcGVuZENoaWxkKGxhYmVsKTtcbiAgICBkaXYuYXBwZW5kQ2hpbGQoZGF0ZSk7XG4gICAgZnJhZ21lbnQuYXBwZW5kQ2hpbGQoZGl2KTtcblxuICAgIGZvciAobGV0IGZpZWxkIG9mIFtcInByaW9yaXR5XCIsIFwicHJvamVjdFwiXSkge1xuICAgICAgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgICAgbGFiZWwudGV4dENvbnRlbnQgPSBgJHtmaWVsZH06IGA7XG4gICAgICBsYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgYCR7dGhpcy5pZH0tJHtmaWVsZH0tc2VsZWN0YCk7XG5cbiAgICAgIGNvbnN0IHNlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIik7XG4gICAgICBzZWxlY3QuaWQgPSBgJHt0aGlzLmlkfS0ke2ZpZWxkfS1zZWxlY3RgO1xuICAgICAgc2VsZWN0Lm5hbWUgPSBmaWVsZDtcblxuICAgICAgbGV0IG9wdGlvbnMgPSBbXCJsb3dcIiwgXCJtZWRpdW1cIiwgXCJoaWdoXCJdO1xuICAgICAgaWYgKGZpZWxkID09PSBcInByb2plY3RcIikge1xuICAgICAgICBjb25zdCBwcm9qZWN0cyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJwcm9qZWN0c1wiKSk7XG4gICAgICAgIGlmIChwcm9qZWN0cykge1xuICAgICAgICAgIG9wdGlvbnMgPSBwcm9qZWN0cy5tYXAocHJvamVjdCA9PiBwcm9qZWN0LnRpdGxlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBvcHRpb25zID0gW107XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgZm9yIChsZXQgb3B0aW9uVmFsdWUgb2Ygb3B0aW9ucykge1xuICAgICAgICBsZXQgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICAgICAgb3B0aW9uLnZhbHVlID0gb3B0aW9uVmFsdWU7XG4gICAgICAgIG9wdGlvbi50ZXh0ID0gb3B0aW9uVmFsdWU7XG4gICAgICAgIHNlbGVjdC5hcHBlbmRDaGlsZChvcHRpb24pO1xuICAgICAgfVxuXG4gICAgICBkaXYuYXBwZW5kQ2hpbGQobGFiZWwpO1xuICAgICAgZGl2LmFwcGVuZENoaWxkKHNlbGVjdCk7XG4gICAgICBmcmFnbWVudC5hcHBlbmRDaGlsZChkaXYpO1xuICAgIH1cbiAgICB0aGlzLmZvcm0uYXBwZW5kQ2hpbGQoZnJhZ21lbnQpO1xuICB9XG59XG5cbmNsYXNzIENyZWF0ZVRvZG9EaWFsb2cgZXh0ZW5kcyBUb2RvRGlhbG9nIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoXCJjcmVhdGVcIik7XG5cbiAgICB0aGlzLnN1Ym1pdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy5jcmVhdGVUb2RvRm9ybVN1Ym1pdC5iaW5kKHRoaXMpKTtcbiAgICB0aGlzLnN1Ym1pdC50ZXh0Q29udGVudCA9IFwiQWRkIHRvZG9cIjtcbiAgfVxuXG4gIGNyZWF0ZVRvZG9Gb3JtU3VibWl0KGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgbGV0IGRhdGUgPSBuZXcgRGF0ZShkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHt0aGlzLmlkfS1kdWUtZGF0ZWApLnZhbHVlQXNOdW1iZXIpO1xuICAgIGxldCB0b2RvID0gbmV3IFRvZG9JdGVtKFxuICAgICAgdGhpcy5kaWFsb2cucXVlcnlTZWxlY3RvcihcIi5mb3JtLXRpdGxlXCIpLnZhbHVlLFxuICAgICAgdGhpcy5kaWFsb2cucXVlcnlTZWxlY3RvcihcIi5mb3JtLWRlc2NyaXB0aW9uXCIpLnZhbHVlLFxuICAgICAgKGRhdGUgaW5zdGFuY2VvZiBEYXRlICYmICFpc05hTihkYXRlKSkgPyBkYXRlIDogbnVsbCxcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke3RoaXMuaWR9LXByaW9yaXR5LXNlbGVjdGApLnZhbHVlLFxuICAgICk7XG5cbiAgICBsZXQgcHJvamVjdFRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7dGhpcy5pZH0tcHJvamVjdC1zZWxlY3RgKS52YWx1ZTtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHt0aGlzLmlkfS1wcm9qZWN0LXNlbGVjdGApLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgKGUpID0+IHtcbiAgICAgIHByb2plY3RUaXRsZSA9IGUudGFyZ2V0LnZhbHVlO1xuICAgIH0pO1xuXG4gICAgdHJ5IHtcbiAgICAgIHRvZG8uYWRkVG9kbyhwcm9qZWN0VGl0bGUpO1xuICAgIH0gY2F0Y2ggKER1cGxpY2F0ZVRvZG9UaXRsZUVycm9yKSB7XG4gICAgICBhbGVydChcIkEgdG9kbyB3aXRoIHRoZSBzYW1lIHRpdGxlIGFscmVhZHkgZXhpc3RzIGluIHRoaXMgcHJvamVjdC4gUGxlYXNlIGVudGVyIGEgZGlmZmVyZW50IHRpdGxlLlwiKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBsZXQgYWN0aXZlUHJvamVjdE5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFjdGl2ZVwiKS5kYXRhc2V0LnByb2plY3ROYW1lO1xuICAgIGlmIChhY3RpdmVQcm9qZWN0TmFtZSA9PT0gcHJvamVjdFRpdGxlKSB7XG4gICAgICBzaG93QWN0aXZlUHJvamVjdFRvZG9zKCk7XG4gICAgfVxuXG4gICAgdGhpcy5mb3JtLnJlc2V0KCk7XG4gICAgdGhpcy5kaWFsb2cuY2xvc2UoKTtcbiAgfVxufVxuXG5jbGFzcyBQcm9qZWN0RGlhbG9nIGV4dGVuZHMgQmFzZURpYWxvZyB7XG4gIGNvbnN0cnVjdG9yKGlkKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIHRoaXMuZGlhbG9nLmlkID0gYCR7aWR9LXByb2plY3QtZGlhbG9nYDtcbiAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoXCJyZXF1aXJlZFwiLCBcIlwiKTtcbiAgICBpbnB1dC50eXBlID0gXCJ0ZXh0XCI7XG4gICAgaW5wdXQuY2xhc3NMaXN0LmFkZChcInByb2plY3QtdGl0bGVcIik7XG4gICAgaW5wdXQubmFtZSA9IGAke2lkfS1wcm9qZWN0LXRpdGxlYDtcbiAgICBpbnB1dC5tYXhMZW5ndGggPSAyMDtcbiAgICBpbnB1dC5wbGFjZWhvbGRlciA9IFwiUHJvamVjdCB0aXRsZVwiO1xuICAgIHRoaXMuZm9ybS5hcHBlbmRDaGlsZChpbnB1dCk7XG4gIH1cbn1cblxuY2xhc3MgQ3JlYXRlUHJvamVjdERpYWxvZyBleHRlbmRzIFByb2plY3REaWFsb2cge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcihcImNyZWF0ZVwiKTtcblxuICAgIHRoaXMuc3VibWl0LnRleHRDb250ZW50ID0gXCJBZGQgcHJvamVjdFwiO1xuICAgIHRoaXMuc3VibWl0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLmNyZWF0ZVByb2plY3RTdWJtaXQuYmluZCh0aGlzKSk7XG4gIH1cblxuICBjcmVhdGVQcm9qZWN0U3VibWl0KGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgbGV0IHByb2plY3ROYW1lID0gdGhpcy5kaWFsb2cucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LXRpdGxlXCIpLnZhbHVlO1xuXG4gICAgbGV0IHByb2plY3RzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInByb2plY3RzXCIpKSB8fCBbXTtcbiAgICBmb3IgKGxldCBwcm9qZWN0IG9mIHByb2plY3RzKSB7XG4gICAgICBpZiAocHJvamVjdC50aXRsZSA9PT0gcHJvamVjdE5hbWUpIHtcbiAgICAgICAgYWxlcnQoXCJBIHByb2plY3Qgd2l0aCB0aGUgc2FtZSB0aXRsZSBhbHJlYWR5IGV4aXN0cy4gUGxlYXNlIGVudGVyIGEgZGlmZmVyZW50IHRpdGxlLlwiKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cbiAgICAobmV3IFByb2plY3QocHJvamVjdE5hbWUpKS5wdXNoVG9TdG9yYWdlKCk7XG4gICAgdGhpcy5jbG9zZSgpO1xuICAgIHRoaXMuZm9ybS5yZXNldCgpO1xuICAgIHVwZGF0ZVByb2plY3RzVWwoKTtcbiAgICB1cGRhdGVUb2RvUHJvamVjdHNJbnB1dCgpO1xuICB9XG59XG5cbmNsYXNzIFJlbmFtZVByb2plY3REaWFsb2cgZXh0ZW5kcyBQcm9qZWN0RGlhbG9nIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoXCJyZW5hbWVcIik7XG5cbiAgICB0aGlzLnN1Ym1pdC50ZXh0Q29udGVudCA9IFwiUmVuYW1lIHByb2plY3RcIjtcbiAgICB0aGlzLnN1Ym1pdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy5yZW5hbWVQcm9qZWN0U3VibWl0LmJpbmQodGhpcykpO1xuICB9XG5cbiAgcmVuYW1lUHJvamVjdFN1Ym1pdChlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGxldCBuZXdQcm9qZWN0TmFtZSA9IHRoaXMuZGlhbG9nLnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC10aXRsZVwiKS52YWx1ZTtcbiAgICBsZXQgcHJvamVjdHMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicHJvamVjdHNcIikpIHx8IFtdO1xuICAgIGZvciAobGV0IHByb2plY3Qgb2YgcHJvamVjdHMpIHtcbiAgICAgIGlmIChwcm9qZWN0LnRpdGxlID09PSBuZXdQcm9qZWN0TmFtZSkge1xuICAgICAgICBhbGVydChcIkEgcHJvamVjdCB3aXRoIHRoZSBzYW1lIHRpdGxlIGFscmVhZHkgZXhpc3RzLiBQbGVhc2UgZW50ZXIgYSBkaWZmZXJlbnQgdGl0bGUuXCIpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfVxuICAgIC8vIFVwZGF0ZSBwcm9qZWN0IG5hbWVcbiAgICBmb3IgKGxldCBwcm9qZWN0IG9mIHByb2plY3RzKSB7XG4gICAgICBpZiAocHJvamVjdC50aXRsZSA9PT0gdGhpcy5wcmV2aW91c05hbWUpIHtcbiAgICAgICAgcHJvamVjdC50aXRsZSA9IG5ld1Byb2plY3ROYW1lO1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInByb2plY3RzXCIsIEpTT04uc3RyaW5naWZ5KHByb2plY3RzKSk7XG4gICAgICAgIHVwZGF0ZVByb2plY3RzVWwoKTtcbiAgICAgICAgdXBkYXRlVG9kb1Byb2plY3RzSW5wdXQoKTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5jbG9zZSgpO1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVQcm9qZWN0RGlhbG9nID0gbmV3IENyZWF0ZVByb2plY3REaWFsb2coKTtcbmNyZWF0ZVByb2plY3REaWFsb2cuY3JlYXRlKCk7XG5leHBvcnQgY29uc3QgY2hhbmdlUHJvamVjdERpYWxvZyA9IG5ldyBSZW5hbWVQcm9qZWN0RGlhbG9nKCk7XG5jaGFuZ2VQcm9qZWN0RGlhbG9nLmNyZWF0ZSgpO1xuZXhwb3J0IGNvbnN0IGNyZWF0ZVRvZG9EaWFsb2cgPSBuZXcgQ3JlYXRlVG9kb0RpYWxvZyhcImNyZWF0ZVwiKTtcbmNyZWF0ZVRvZG9EaWFsb2cuY3JlYXRlKCk7XG4iLCJpbXBvcnQgY2hlY2tib3ggZnJvbSBcIi4vaWNvbnMvY2hlY2tib3gucG5nXCI7XG5pbXBvcnQgeG1hcmsgZnJvbSBcIi4vaWNvbnMveG1hcmstc29saWQuc3ZnXCI7XG5pbXBvcnQgcGVuIGZyb20gXCIuL2ljb25zL3Blbi10by1zcXVhcmUuc3ZnXCI7XG5cbmltcG9ydCB7IFByb2plY3QsIFRvZG9JdGVtIH0gZnJvbSAnLi90b2RvJztcblxuaW1wb3J0IHsgY3JlYXRlUHJvamVjdERpYWxvZywgY2hhbmdlUHJvamVjdERpYWxvZywgY3JlYXRlVG9kb0RpYWxvZyB9IGZyb20gXCIuL2RpYWxvZ1wiO1xuXG5cbi8qKlxuICogQ3JlYXRlcyBhIHRvcCBiYXIgZWxlbWVudCBmb3IgYSB0by1kbyBsaXN0LlxuICogQHJldHVybnMge0hUTUxFbGVtZW50fSBUaGUgdG9wIGJhciBlbGVtZW50IGNvbnRhaW5pbmcgYW4gaWNvbiBhbmQgYSB0aXRsZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVRvcGJhcigpIHtcbiAgY29uc3QgdG9wYmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgdG9wYmFyLnNldEF0dHJpYnV0ZShcImlkXCIsIFwidG9wYmFyXCIpO1xuXG4gIGNvbnN0IGljb24gPSBuZXcgSW1hZ2UoKTtcbiAgaWNvbi5zcmMgPSBjaGVja2JveDtcbiAgdG9wYmFyLmFwcGVuZENoaWxkKGljb24pO1xuXG4gIGNvbnN0IGgxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICBoMS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIlRPIERPXCIpKTtcbiAgdG9wYmFyLmFwcGVuZENoaWxkKGgxKTtcblxuICByZXR1cm4gdG9wYmFyO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZU5hdmJhcigpIHtcbiAgY29uc3QgbmF2YmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbmF2YmFyLnNldEF0dHJpYnV0ZShcImlkXCIsIFwibmF2YmFyXCIpO1xuXG4gIGNvbnN0IGNyZWF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGNyZWF0ZS50ZXh0Q29udGVudCA9IFwiQ3JlYXRlXCI7XG4gIGNyZWF0ZS5jbGFzc0xpc3QuYWRkKFwidG9kby1jcmVhdGVcIik7XG4gIGNyZWF0ZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY3JlYXRlVG9kb0RpYWxvZy5zaG93TW9kYWwoKTtcbiAgfSk7XG5cbiAgbmF2YmFyLmFwcGVuZENoaWxkKGNyZWF0ZSk7XG5cbiAgY29uc3QgcHJpbWFyeVVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuICBwcmltYXJ5VWwuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJwcmltYXJ5LXVsXCIpO1xuXG4gIGNvbnN0IGZpbHRlcnMgPSBbXCJUb2RheVwiLCBcIlVwY29taW5nXCIsIFwiSW1wb3J0YW50XCIsXTtcblxuICBmaWx0ZXJzLmZvckVhY2goKGZpbHRlcikgPT4ge1xuICAgIGNvbnN0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgIGxpLnRleHRDb250ZW50ID0gZmlsdGVyO1xuICAgIGxpLmNsYXNzTGlzdC5hZGQoZmlsdGVyLnRvTG93ZXJDYXNlKCkpO1xuICAgIHByaW1hcnlVbC5hcHBlbmRDaGlsZChsaSk7XG4gIH0pO1xuICBuYXZiYXIuYXBwZW5kQ2hpbGQocHJpbWFyeVVsKTtcblxuICBjb25zdCBwcm9qZWN0SGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICBwcm9qZWN0SGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LWhlYWRlclwiKTtcbiAgcHJvamVjdEhlYWRlci50ZXh0Q29udGVudCA9IFwiUHJvamVjdHM6IFwiO1xuICBuYXZiYXIuYXBwZW5kQ2hpbGQocHJvamVjdEhlYWRlcik7XG5cblxuICBjb25zdCBwcm9qZWN0c1VsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuICBwcm9qZWN0c1VsLmlkID0gXCJwcm9qZWN0cy11bFwiO1xuICBwcm9qZWN0c1VsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBlID0+IHtcbiAgICBpZiAoZS50YXJnZXQuaGFzQXR0cmlidXRlKFwiZGF0YS1wcm9qZWN0LW5hbWVcIikgJiYgZS50YXJnZXQuaWQgIT09IFwiYWN0aXZlXCIpIHtcbiAgICAgIGxldCBwcmV2aW91c1Byb2plY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFjdGl2ZVwiKTtcbiAgICAgIGlmIChwcmV2aW91c1Byb2plY3QpIHtcbiAgICAgICAgcHJldmlvdXNQcm9qZWN0LnJlbW92ZUF0dHJpYnV0ZShcImlkXCIpO1xuICAgICAgfVxuICAgICAgZS50YXJnZXQuaWQgPSBcImFjdGl2ZVwiO1xuXG4gICAgICBzaG93QWN0aXZlUHJvamVjdFRvZG9zKCk7XG4gICAgfVxuICB9KTtcbiAgbmF2YmFyLmFwcGVuZENoaWxkKHByb2plY3RzVWwpO1xuXG4gIGNvbnN0IGNyZWF0ZVByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjcmVhdGVQcm9qZWN0LmNsYXNzTGlzdC5hZGQoXCJjcmVhdGUtcHJvamVjdFwiKTtcbiAgY3JlYXRlUHJvamVjdC50ZXh0Q29udGVudCA9IFwiQ3JlYXRlIG5ldyBwcm9qZWN0XCI7XG4gIGNyZWF0ZVByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNyZWF0ZVByb2plY3REaWFsb2cuc2hvd01vZGFsKCk7XG4gIH0pO1xuXG4gIG5hdmJhci5hcHBlbmRDaGlsZChjcmVhdGVQcm9qZWN0KTtcblxuICByZXR1cm4gbmF2YmFyO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIHNob3dBY3RpdmVQcm9qZWN0VG9kb3MoKSB7XG4gIGNvbnN0IG1haW5Db2x1bW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW4tY29sdW1uXCIpO1xuICB3aGlsZSAobWFpbkNvbHVtbi5maXJzdENoaWxkKSB7XG4gICAgbWFpbkNvbHVtbi5yZW1vdmVDaGlsZChtYWluQ29sdW1uLmxhc3RDaGlsZCk7XG4gIH1cblxuICBjb25zdCBhY3RpdmVQcm9qZWN0TmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWN0aXZlXCIpLmRhdGFzZXQucHJvamVjdE5hbWU7XG5cbiAgY29uc3QgcHJvamVjdHMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicHJvamVjdHNcIikpO1xuICBjb25zdCBwcm9qZWN0ID0gcHJvamVjdHMuZmluZCgocCkgPT4gcC50aXRsZSA9PT0gYWN0aXZlUHJvamVjdE5hbWUpO1xuICBmb3IgKGxldCB0b2RvIG9mIHByb2plY3QudG9kb0xpc3QpIHtcbiAgICBjb25zdCB0b2RvQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0b2RvQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJ0b2RvLWNvbnRhaW5lclwiKTtcbiAgICB0b2RvQ29udGFpbmVyLmRhdGFzZXQucHJvamVjdE5hbWUgPSBwcm9qZWN0LnRpdGxlO1xuICAgIHRvZG9Db250YWluZXIuZGF0YXNldC50b2RvTmFtZSA9IHRvZG8udGl0bGU7XG5cbiAgICBjb25zdCB0b2RvQ2hla2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICB0b2RvQ2hla2JveC50eXBlID0gXCJjaGVja2JveFwiO1xuICAgIHRvZG9DaGVrYm94LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgdG9kby5jb21wbGV0ZWQgPSBlLnRhcmdldC5jaGVja2VkO1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJwcm9qZWN0c1wiLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0cykpO1xuICAgICAgaWYgKGUudGFyZ2V0LmNoZWNrZWQpIHtcbiAgICAgICAgdG9kb0Rpdi5jbGFzc0xpc3QuYWRkKFwiY29tcGxldGVkXCIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdG9kb0Rpdi5jbGFzc0xpc3QucmVtb3ZlKFwiY29tcGxldGVkXCIpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29uc3QgdG9kb0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdG9kb0Rpdi5jbGFzc0xpc3QuYWRkKFwidG9kb1wiLCBgdG9kby0ke3RvZG8ucHJpb3JpdHl9YCk7XG4gICAgaWYgKHRvZG8uY29tcGxldGVkKSB7XG4gICAgICB0b2RvQ2hla2JveC5jaGVja2VkID0gdHJ1ZTtcbiAgICAgIHRvZG9EaXYuY2xhc3NMaXN0LmFkZChcImNvbXBsZXRlZFwiKTtcbiAgICB9XG5cbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgICB0aXRsZS50ZXh0Q29udGVudCA9IHRvZG8udGl0bGU7XG4gICAgY29uc3QgZGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGRlc2MudGV4dENvbnRlbnQgPSB0b2RvLmRlc2NyaXB0aW9uO1xuXG4gICAgY29uc3QgdGltZVRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBpZiAodG9kby5kdWVEYXRlKSB7XG4gICAgICBjb25zdCB0aW1lID0gbmV3IERhdGUodG9kby5kdWVEYXRlKS50b0xvY2FsZURhdGVTdHJpbmcoXCJlbi1HQlwiKTtcbiAgICAgIHRpbWVUZXh0LnRleHRDb250ZW50ID0gdGltZTtcbiAgICB9XG5cbiAgICBjb25zdCBpY29ucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgaWNvbnMuY2xhc3NMaXN0LmFkZChcImljb25zXCIpO1xuXG4gICAgY29uc3QgcGVuSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgcGVuSWNvbi5jbGFzc0xpc3QuYWRkKFwiZWRpdC1pY29uXCIpO1xuICAgIHBlbkljb24uc3JjID0gcGVuO1xuICAgIHBlbkljb24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIH0pO1xuICAgIGljb25zLmFwcGVuZENoaWxkKHBlbkljb24pO1xuXG4gICAgY29uc3QgeEljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgIHhJY29uLmNsYXNzTGlzdC5hZGQoXCJkZWxldGUtaWNvblwiKTtcbiAgICB4SWNvbi5zcmMgPSB4bWFyaztcbiAgICB4SWNvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG5cbiAgICAgIGxldCBwcm9qZWN0TmFtZSA9IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5kYXRhc2V0LnByb2plY3ROYW1lO1xuICAgICAgbGV0IHRvZG9OYW1lID0gZS50YXJnZXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LmRhdGFzZXQudG9kb05hbWU7XG5cbiAgICAgIGNvbnN0IHByb2plY3RzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInByb2plY3RzXCIpKTtcbiAgICAgIGNvbnN0IHByb2plY3QgPSBwcm9qZWN0cy5maW5kKChwKSA9PiBwLnRpdGxlID09PSBwcm9qZWN0TmFtZSk7XG5cbiAgICAgIGxldCB0b2RvSW5kZXggPSBwcm9qZWN0LnRvZG9MaXN0LmZpbmRJbmRleCh0b2RvID0+IHRvZG8udGl0bGUgPT09IHRvZG9OYW1lKTtcbiAgICAgIGlmICh0b2RvSW5kZXggIT09IC0xKSB7XG4gICAgICAgIHByb2plY3QudG9kb0xpc3Quc3BsaWNlKHRvZG9JbmRleCwgMSk7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwicHJvamVjdHNcIiwgSlNPTi5zdHJpbmdpZnkocHJvamVjdHMpKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHByb2plY3ROYW1lID09PSBhY3RpdmVQcm9qZWN0TmFtZSkge1xuICAgICAgICBzaG93QWN0aXZlUHJvamVjdFRvZG9zKCk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgaWNvbnMuYXBwZW5kQ2hpbGQoeEljb24pO1xuXG4gICAgdG9kb0Rpdi5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gICAgdG9kb0Rpdi5hcHBlbmRDaGlsZChkZXNjKTtcbiAgICB0b2RvRGl2LmFwcGVuZENoaWxkKHRpbWVUZXh0KTtcbiAgICB0b2RvQ29udGFpbmVyLmFwcGVuZENoaWxkKHRvZG9DaGVrYm94KTtcbiAgICB0b2RvQ29udGFpbmVyLmFwcGVuZENoaWxkKHRvZG9EaXYpO1xuICAgIHRvZG9Db250YWluZXIuYXBwZW5kQ2hpbGQoaWNvbnMpO1xuICAgIG1haW5Db2x1bW4uYXBwZW5kQ2hpbGQodG9kb0NvbnRhaW5lcik7XG4gIH07XG59O1xuXG5cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVQcm9qZWN0c1VsKCkge1xuICBjb25zdCBwcm9qZWN0c1VsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9qZWN0cy11bFwiKTtcbiAgd2hpbGUgKHByb2plY3RzVWwuZmlyc3RDaGlsZCkge1xuICAgIHByb2plY3RzVWwucmVtb3ZlQ2hpbGQocHJvamVjdHNVbC5sYXN0Q2hpbGQpO1xuICB9O1xuXG4gIGNvbnN0IHByb2plY3RzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInByb2plY3RzXCIpKSB8fCBbXTtcbiAgZm9yIChsZXQgcHJvamVjdCBvZiBwcm9qZWN0cykge1xuICAgIGNvbnN0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgY29uc3QgaWNvbnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGljb25zLmNsYXNzTGlzdC5hZGQoXCJpY29uc1wiKTtcblxuICAgIGNvbnN0IHBlbkljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgIHBlbkljb24uY2xhc3NMaXN0LmFkZChcImVkaXQtaWNvblwiKTtcbiAgICBwZW5JY29uLnNyYyA9IHBlbjtcbiAgICBwZW5JY29uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIC8vIHNhdmUgcHJvamVjdE5hbWUgb24gbWVtb3J5XG4gICAgICBjaGFuZ2VQcm9qZWN0RGlhbG9nLnByZXZpb3VzTmFtZSA9IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5maXJzdENoaWxkLnRleHRDb250ZW50O1xuXG4gICAgICAvLyBvcGVuIGRpYWxvZyBhbmQgc2V0IGlucHV0IHZhbHVlXG4gICAgICBjb25zdCBpbnB1dCA9IGNoYW5nZVByb2plY3REaWFsb2cuZGlhbG9nLnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC10aXRsZVwiKTtcbiAgICAgIGlucHV0LnZhbHVlID0gY2hhbmdlUHJvamVjdERpYWxvZy5wcmV2aW91c05hbWU7XG4gICAgICBjaGFuZ2VQcm9qZWN0RGlhbG9nLnNob3dNb2RhbCgpO1xuICAgIH0pO1xuICAgIGljb25zLmFwcGVuZENoaWxkKHBlbkljb24pO1xuXG4gICAgY29uc3QgeEljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgIHhJY29uLmNsYXNzTGlzdC5hZGQoXCJkZWxldGUtaWNvblwiKTtcbiAgICB4SWNvbi5zcmMgPSB4bWFyaztcbiAgICB4SWNvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICBQcm9qZWN0LnJlbW92ZUZyb21TdG9yYWdlKHByb2plY3QudGl0bGUpO1xuICAgICAgdXBkYXRlUHJvamVjdHNVbCgpO1xuICAgICAgdXBkYXRlVG9kb1Byb2plY3RzSW5wdXQoKTtcbiAgICB9KTtcbiAgICBpY29ucy5hcHBlbmRDaGlsZCh4SWNvbik7XG5cbiAgICBsaS5kYXRhc2V0LnByb2plY3ROYW1lID0gcHJvamVjdC50aXRsZTtcbiAgICB0aXRsZS50ZXh0Q29udGVudCA9IHByb2plY3QudGl0bGU7XG4gICAgbGkuYXBwZW5kQ2hpbGQodGl0bGUpO1xuICAgIGxpLmFwcGVuZENoaWxkKGljb25zKTtcbiAgICBwcm9qZWN0c1VsLmFwcGVuZENoaWxkKGxpKTtcbiAgfTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVUb2RvUHJvamVjdHNJbnB1dCgpIHtcbiAgY29uc3QgcHJvamVjdFNlbGVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY3JlYXRlLXByb2plY3Qtc2VsZWN0XCIpO1xuICB3aGlsZSAocHJvamVjdFNlbGVjdC5maXJzdENoaWxkKSB7XG4gICAgcHJvamVjdFNlbGVjdC5yZW1vdmVDaGlsZChwcm9qZWN0U2VsZWN0Lmxhc3RDaGlsZCk7XG4gIH1cbiAgY29uc3QgcHJvamVjdHMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicHJvamVjdHNcIikpO1xuICBpZiAocHJvamVjdHMpIHtcbiAgICBwcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gICAgICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgICAgb3B0aW9uLnRleHRDb250ZW50ID0gcHJvamVjdFtcInRpdGxlXCJdO1xuICAgICAgcHJvamVjdFNlbGVjdC5hcHBlbmRDaGlsZChvcHRpb24pO1xuICAgIH0pO1xuICB9O1xufTsiLCJleHBvcnQgY2xhc3MgVG9kb0l0ZW0ge1xuICBjb25zdHJ1Y3Rvcih0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KSB7XG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICB0aGlzLmNvbXBsZXRlZCA9IGZhbHNlO1xuICB9XG5cbiAgYWRkVG9kbyhwcm9qZWN0VGl0bGUpIHtcbiAgICBjb25zdCBwcm9qZWN0cyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJwcm9qZWN0c1wiKSk7XG4gICAgbGV0IGluZGV4ID0gcHJvamVjdHMuZmluZEluZGV4KHByb2plY3QgPT4gcHJvamVjdC50aXRsZSA9PT0gcHJvamVjdFRpdGxlKTtcbiAgICBsZXQgdG9kb0luZGV4ID0gcHJvamVjdHNbaW5kZXhdLnRvZG9MaXN0LmZpbmRJbmRleCh0b2RvID0+IHRvZG8udGl0bGUgPT09IHRoaXMudGl0bGUpO1xuICAgIGlmICh0b2RvSW5kZXggPT09IC0xKSB7XG4gICAgICBwcm9qZWN0c1tpbmRleF0udG9kb0xpc3QucHVzaCh0aGlzKTtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwicHJvamVjdHNcIiwgSlNPTi5zdHJpbmdpZnkocHJvamVjdHMpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbmV3IER1cGxpY2F0ZVRvZG9UaXRsZUVycm9yKFwiVG9kbyB3aXRoIHRoYXQgdGl0bGUgYWxyZWFkeSBleGlzdHMgaW4gdGhpcyBQcm9qZWN0XCIpO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgUHJvamVjdCB7XG4gIHN0YXRpYyByZW1vdmVGcm9tU3RvcmFnZShwcm9qZWN0VGl0bGUpIHtcbiAgICBjb25zdCBwcm9qZWN0cyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJwcm9qZWN0c1wiKSk7XG4gICAgbGV0IGluZGV4ID0gcHJvamVjdHMuZmluZEluZGV4KHByb2plY3QgPT4gcHJvamVjdC50aXRsZSA9PT0gcHJvamVjdFRpdGxlKTtcbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBwcm9qZWN0cy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJwcm9qZWN0c1wiLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0cykpO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHRpdGxlKSB7XG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgIHRoaXMudG9kb0xpc3QgPSBbXTtcbiAgfVxuXG4gIHB1c2hUb1N0b3JhZ2UoKSB7XG4gICAgY29uc3QgcHJvamVjdHMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicHJvamVjdHNcIikpO1xuICAgIGlmICghcHJvamVjdHMpIHtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwicHJvamVjdHNcIiwgSlNPTi5zdHJpbmdpZnkoW3RoaXNdKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHByb2plY3RzLnB1c2godGhpcyk7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInByb2plY3RzXCIsIEpTT04uc3RyaW5naWZ5KHByb2plY3RzKSk7XG4gICAgfVxuICB9XG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAoIXNjcmlwdFVybCB8fCAhL15odHRwKHM/KTovLnRlc3Qoc2NyaXB0VXJsKSkpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5pbXBvcnQgY2FsZW5kYXJUb2RheSBmcm9tIFwiLi9pY29ucy9jYWxlbmRhci10b2RheS5zdmdcIjtcbmltcG9ydCBjYWxlbmRhclVwY29taW5nIGZyb20gXCIuL2ljb25zL2NhbGVuZGFyLXJhbmdlLnN2Z1wiO1xuaW1wb3J0IHsgY3JlYXRlTmF2YmFyLCBjcmVhdGVUb3BiYXIsIHVwZGF0ZVByb2plY3RzVWwsIHVwZGF0ZVRvZG9Qcm9qZWN0c0lucHV0IH0gZnJvbSBcIi4vZG9tLWZ1bmN0aW9uc1wiO1xuaW1wb3J0IHsgVG9kb0l0ZW0sIFByb2plY3QgfSBmcm9tIFwiLi90b2RvXCI7XG5cbmNvbnN0IGFwcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKTtcblxuY29uc3QgcHJvamVjdHMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicHJvamVjdHNcIikpO1xuaWYgKCFwcm9qZWN0cykge1xuICBjb25zdCBzaG9wcGluZyA9IG5ldyBQcm9qZWN0KFwiU2hvcHBpbmdcIik7XG4gIHNob3BwaW5nLnB1c2hUb1N0b3JhZ2UoKTtcbiAgKG5ldyBUb2RvSXRlbShcInRvbWF0b2VzXCIsIFwiYnV5IDAuNSBrZyBvZiB0b21hdG9lc1wiLCBuZXcgRGF0ZSgyMDI0LCAyLCAxOSksIFwiaGlnaFwiKS5hZGRUb2RvKHNob3BwaW5nLnRpdGxlKSk7XG4gIHVwZGF0ZVRvZG9Qcm9qZWN0c0lucHV0KCk7XG59XG5cblxuXG5jb25zdCBjb250ZW50V3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5jb250ZW50V3JhcHBlci5jbGFzc0xpc3QuYWRkKFwiY29udGVudFdyYXBwZXJcIik7XG5hcHAuYXBwZW5kQ2hpbGQoY3JlYXRlVG9wYmFyKCkpO1xuYXBwLmFwcGVuZENoaWxkKGNvbnRlbnRXcmFwcGVyKTtcbmNvbnRlbnRXcmFwcGVyLmFwcGVuZENoaWxkKGNyZWF0ZU5hdmJhcigpKTtcbmNvbnN0IG1haW5Db2x1bW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xubWFpbkNvbHVtbi5pZCA9IFwibWFpbi1jb2x1bW5cIjtcbmNvbnRlbnRXcmFwcGVyLmFwcGVuZENoaWxkKG1haW5Db2x1bW4pO1xuXG51cGRhdGVQcm9qZWN0c1VsKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=