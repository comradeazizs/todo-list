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

    try {
      (new _todo__WEBPACK_IMPORTED_MODULE_0__.Project(projectName)).pushToStorage();
    } catch (DuplicateProjectTitleError) {
      alert("A project with the same title already exists. Please enter a different title.");
      return;
    }
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
      if (projects.some(project => project.title !== this.title)) {
        projects.push(this);
        localStorage.setItem("projects", JSON.stringify(projects));
      } else {
        throw new DuplicateProjectTitleError("Project title already exists");
      }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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UEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2xCQTs7Ozs7Ozs7Ozs7Ozs7OztBQ0FxQjtBQUNrQztBQUNHO0FBQzhDO0FBQzdEOztBQUUzQzs7QUFFQTtBQUNBO0FBQ0EsdUJBQXVCLDBDQUFPO0FBQzlCO0FBQ0EsT0FBTywyQ0FBUTtBQUNmLEVBQUUsdUVBQXVCO0FBQ3pCOzs7O0FBSUE7QUFDQTtBQUNBLGdCQUFnQiw0REFBWTtBQUM1QjtBQUNBLDJCQUEyQiw0REFBWTtBQUN2QztBQUNBO0FBQ0E7O0FBRUEsZ0VBQWdCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9kaWFsb2cuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2RvbS1mdW5jdGlvbnMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3RvZG8uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgOnJvb3Qge1xuICAtLWxpbWU6ICNhM2U2MzU7XG4gIC0tZnVjaHNpYTogI2ZmMDBmZjtcbiAgLS1kYXJrLXdoaXRlOiAjZWVlYmU4O1xufVxuXG4qIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuYm9keSB7XG4gIG1hcmdpbjogMDtcbn1cblxuLmNvbnRlbnRXcmFwcGVyIHtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuI21haW4tY29sdW1uIHtcbiAgZmxleDogMTtcbiAgcGFkZGluZzogMXJlbTtcbn1cblxuI3RvcGJhciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpbWUpO1xuICBoZWlnaHQ6IDYwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbiN0b3BiYXI+aW1nIHtcbiAgaGVpZ2h0OiA2MHB4O1xuICB3aWR0aDogYXV0bztcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG59XG5cbiNuYXZiYXIge1xuICBwYWRkaW5nOiAwLjVyZW07XG4gIHdpZHRoOiBtYXgoMjUwcHgsIDIwdncpO1xuICBtaW4taGVpZ2h0OiBjYWxjKDEwMHZoIC0gNjBweCk7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstd2hpdGUpO1xufVxuXG4jbmF2YmFyPmgxIHtcbiAgbWFyZ2luOiAxMHB4O1xuICBkaXNwbGF5OiBpbmxpbmU7XG59XG5cbiNwcm9qZWN0cy11bCB7XG4gIHBhZGRpbmc6IDA7XG59XG5cbiNwcm9qZWN0cy11bD5saSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgcGFkZGluZzogMXJlbTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4jcHJvamVjdHMtdWw+bGk6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTkzLCAxOTYsIDE5NSk7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuI3Byb2plY3RzLXVsPmxpPnAge1xuICBmbGV4OiAxO1xuICBmb250LXNpemU6IDEuMnJlbTtcbiAgd2lkdGg6IGF1dG87XG4gIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuXG4uaWNvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uaWNvbnM+aW1nIHtcbiAgaGVpZ2h0OiAyMHB4O1xuICB3aWR0aDogYXV0bztcbiAgbWFyZ2luOiAxNXB4O1xufVxuXG4udG9kby1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW46IDAuNXJlbSAwO1xufVxuXG4udG9kby1jb250YWluZXIgaW5wdXQge1xuICBtYXJnaW46IDA7XG59XG5cbi50b2RvIHtcbiAgZmxleDogMTtcbiAgcGFkZGluZzogMC41cmVtO1xuICBtYXJnaW4tbGVmdDogMC41cmVtO1xuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4udG9kby1oaWdoIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xufVxuXG4udG9kby1tZWRpdW0ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3dcbn1cblxuLnRvZG8tbG93IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmVlbjtcbn1cblxuLnRvZG8uY29tcGxldGVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE3NCwgMTczLCAxNzMpO1xufVxuXG4udG9kby5jb21wbGV0ZWQgcCxcbi50b2RvLmNvbXBsZXRlZCBoMyB7XG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsU0FBUztBQUNYOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsT0FBTztFQUNQLGFBQWE7QUFDZjs7QUFFQTtFQUNFLDZCQUE2QjtFQUM3QixZQUFZO0VBQ1osYUFBYTtFQUNiLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsZUFBZTtFQUNmLHVCQUF1QjtFQUN2Qiw4QkFBOEI7RUFDOUIsbUNBQW1DO0FBQ3JDOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxhQUFhO0VBQ2IscUJBQXFCO0VBQ3JCLGFBQWE7RUFDYixlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usb0NBQW9DO0VBQ3BDLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLE9BQU87RUFDUCxpQkFBaUI7RUFDakIsV0FBVztFQUNYLHNCQUFzQjtFQUN0QixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsU0FBUztBQUNYOztBQUVBO0VBQ0UsT0FBTztFQUNQLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFO0FBQ0Y7O0FBRUE7RUFDRSw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSxvQ0FBb0M7QUFDdEM7O0FBRUE7O0VBRUUsNkJBQTZCO0FBQy9CXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXG4gIC0tbGltZTogI2EzZTYzNTtcXG4gIC0tZnVjaHNpYTogI2ZmMDBmZjtcXG4gIC0tZGFyay13aGl0ZTogI2VlZWJlODtcXG59XFxuXFxuKiB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5ib2R5IHtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuLmNvbnRlbnRXcmFwcGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbiNtYWluLWNvbHVtbiB7XFxuICBmbGV4OiAxO1xcbiAgcGFkZGluZzogMXJlbTtcXG59XFxuXFxuI3RvcGJhciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saW1lKTtcXG4gIGhlaWdodDogNjBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jdG9wYmFyPmltZyB7XFxuICBoZWlnaHQ6IDYwcHg7XFxuICB3aWR0aDogYXV0bztcXG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xcbn1cXG5cXG4jbmF2YmFyIHtcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXG4gIHdpZHRoOiBtYXgoMjUwcHgsIDIwdncpO1xcbiAgbWluLWhlaWdodDogY2FsYygxMDB2aCAtIDYwcHgpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay13aGl0ZSk7XFxufVxcblxcbiNuYXZiYXI+aDEge1xcbiAgbWFyZ2luOiAxMHB4O1xcbiAgZGlzcGxheTogaW5saW5lO1xcbn1cXG5cXG4jcHJvamVjdHMtdWwge1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuI3Byb2plY3RzLXVsPmxpIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4jcHJvamVjdHMtdWw+bGk6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE5MywgMTk2LCAxOTUpO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG4jcHJvamVjdHMtdWw+bGk+cCB7XFxuICBmbGV4OiAxO1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxuICB3aWR0aDogYXV0bztcXG4gIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuXFxuLmljb25zIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uaWNvbnM+aW1nIHtcXG4gIGhlaWdodDogMjBweDtcXG4gIHdpZHRoOiBhdXRvO1xcbiAgbWFyZ2luOiAxNXB4O1xcbn1cXG5cXG4udG9kby1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIG1hcmdpbjogMC41cmVtIDA7XFxufVxcblxcbi50b2RvLWNvbnRhaW5lciBpbnB1dCB7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbi50b2RvIHtcXG4gIGZsZXg6IDE7XFxuICBwYWRkaW5nOiAwLjVyZW07XFxuICBtYXJnaW4tbGVmdDogMC41cmVtO1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbi50b2RvLWhpZ2gge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbn1cXG5cXG4udG9kby1tZWRpdW0ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogeWVsbG93XFxufVxcblxcbi50b2RvLWxvdyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZWVuO1xcbn1cXG5cXG4udG9kby5jb21wbGV0ZWQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE3NCwgMTczLCAxNzMpO1xcbn1cXG5cXG4udG9kby5jb21wbGV0ZWQgcCxcXG4udG9kby5jb21wbGV0ZWQgaDMge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyBUb2RvSXRlbSwgUHJvamVjdCB9IGZyb20gXCIuL3RvZG9cIjtcbmltcG9ydCB7IHVwZGF0ZVByb2plY3RzVWwsIHVwZGF0ZVRvZG9Qcm9qZWN0c0lucHV0LCBzaG93QWN0aXZlUHJvamVjdFRvZG9zIH0gZnJvbSBcIi4vZG9tLWZ1bmN0aW9uc1wiO1xuXG5cbmNsYXNzIEJhc2VEaWFsb2cge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmRpYWxvZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaWFsb2dcIik7XG4gICAgdGhpcy5kaWFsb2cuY2xhc3NMaXN0LmFkZChcImRpYWxvZ1wiKTtcblxuICAgIHRoaXMuZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xuICAgIHRoaXMuZm9ybS5hY3Rpb24gPSBcIiNcIjtcbiAgICB0aGlzLmZvcm0uY2xhc3NMaXN0LmFkZChcImZvcm0tY29udGFpbmVyXCIpO1xuICAgIHRoaXMuZGlhbG9nLmFwcGVuZENoaWxkKHRoaXMuZm9ybSk7XG5cbiAgICB0aGlzLnN1Ym1pdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgdGhpcy5zdWJtaXQudHlwZSA9IFwic3VibWl0XCI7XG4gICAgdGhpcy5zdWJtaXQuY2xhc3NMaXN0LmFkZChcInByb2plY3Qtc3VibWl0XCIpO1xuXG4gICAgdGhpcy5mb3JtLmFwcGVuZENoaWxkKHRoaXMuc3VibWl0KTtcbiAgfVxuXG4gIGNyZWF0ZSgpIHtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMuZGlhbG9nKTtcbiAgfVxuXG4gIGNsb3NlKCkge1xuICAgIHRoaXMuZGlhbG9nLmNsb3NlKCk7XG4gIH1cblxuICBzaG93TW9kYWwoKSB7XG4gICAgdGhpcy5kaWFsb2cuc2hvd01vZGFsKCk7XG4gIH1cbn1cblxuY2xhc3MgVG9kb0RpYWxvZyBleHRlbmRzIEJhc2VEaWFsb2cge1xuICBjb25zdHJ1Y3RvcihpZCkge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLmlkID0gaWQ7XG4gICAgdGhpcy5kaWFsb2cuaWQgPSBgJHt0aGlzLmlkfS10b2RvLWRpYWxvZ2A7XG5cbiAgICBsZXQgZnJhZ21lbnQgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XG5cbiAgICBmb3IgKGxldCBmaWVsZCBvZiBbXCJUaXRsZVwiLCBcIkRlc2NyaXB0aW9uXCJdKSB7XG4gICAgICBsZXQgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgICBpZiAoZmllbGQgPT09IFwidGl0bGVcIikgeyBpbnB1dC5zZXRBdHRyaWJ1dGUoXCJyZXF1aXJlZFwiLCBcIlwiKTsgfVxuICAgICAgaW5wdXQudHlwZSA9IFwidGV4dFwiO1xuICAgICAgaW5wdXQuY2xhc3NMaXN0LmFkZChgZm9ybS0ke2ZpZWxkLnRvTG93ZXJDYXNlKCl9YCk7XG4gICAgICBpbnB1dC5uYW1lID0gZmllbGQ7XG4gICAgICBpbnB1dC5wbGFjZWhvbGRlciA9IGZpZWxkO1xuICAgICAgZnJhZ21lbnQuYXBwZW5kQ2hpbGQoaW5wdXQpO1xuICAgIH1cblxuICAgIGxldCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGxldCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICBsYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgYCR7dGhpcy5pZH0tZHVlLWRhdGVgKTtcbiAgICBsYWJlbC5pbm5lclRleHQgPSBcIkR1ZSBkYXRlOlwiO1xuICAgIGNvbnN0IGRhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgZGF0ZS50eXBlID0gXCJkYXRlXCI7XG4gICAgZGF0ZS5pZCA9IGAke3RoaXMuaWR9LWR1ZS1kYXRlYDtcbiAgICBkYXRlLm5hbWUgPSBcImRhdGVcIjtcbiAgICBkaXYuYXBwZW5kQ2hpbGQobGFiZWwpO1xuICAgIGRpdi5hcHBlbmRDaGlsZChkYXRlKTtcbiAgICBmcmFnbWVudC5hcHBlbmRDaGlsZChkaXYpO1xuXG4gICAgZm9yIChsZXQgZmllbGQgb2YgW1wicHJpb3JpdHlcIiwgXCJwcm9qZWN0XCJdKSB7XG4gICAgICBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgICBsYWJlbC50ZXh0Q29udGVudCA9IGAke2ZpZWxkfTogYDtcbiAgICAgIGxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBgJHt0aGlzLmlkfS0ke2ZpZWxkfS1zZWxlY3RgKTtcblxuICAgICAgY29uc3Qgc2VsZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKTtcbiAgICAgIHNlbGVjdC5pZCA9IGAke3RoaXMuaWR9LSR7ZmllbGR9LXNlbGVjdGA7XG4gICAgICBzZWxlY3QubmFtZSA9IGZpZWxkO1xuXG4gICAgICBsZXQgb3B0aW9ucyA9IFtcImxvd1wiLCBcIm1lZGl1bVwiLCBcImhpZ2hcIl07XG4gICAgICBpZiAoZmllbGQgPT09IFwicHJvamVjdFwiKSB7XG4gICAgICAgIGNvbnN0IHByb2plY3RzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInByb2plY3RzXCIpKTtcbiAgICAgICAgaWYgKHByb2plY3RzKSB7XG4gICAgICAgICAgb3B0aW9ucyA9IHByb2plY3RzLm1hcChwcm9qZWN0ID0+IHByb2plY3QudGl0bGUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG9wdGlvbnMgPSBbXTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBmb3IgKGxldCBvcHRpb25WYWx1ZSBvZiBvcHRpb25zKSB7XG4gICAgICAgIGxldCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgICAgICBvcHRpb24udmFsdWUgPSBvcHRpb25WYWx1ZTtcbiAgICAgICAgb3B0aW9uLnRleHQgPSBvcHRpb25WYWx1ZTtcbiAgICAgICAgc2VsZWN0LmFwcGVuZENoaWxkKG9wdGlvbik7XG4gICAgICB9XG5cbiAgICAgIGRpdi5hcHBlbmRDaGlsZChsYWJlbCk7XG4gICAgICBkaXYuYXBwZW5kQ2hpbGQoc2VsZWN0KTtcbiAgICAgIGZyYWdtZW50LmFwcGVuZENoaWxkKGRpdik7XG4gICAgfVxuICAgIHRoaXMuZm9ybS5hcHBlbmRDaGlsZChmcmFnbWVudCk7XG4gIH1cbn1cblxuY2xhc3MgQ3JlYXRlVG9kb0RpYWxvZyBleHRlbmRzIFRvZG9EaWFsb2cge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcihcImNyZWF0ZVwiKTtcblxuICAgIHRoaXMuc3VibWl0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLmNyZWF0ZVRvZG9Gb3JtU3VibWl0LmJpbmQodGhpcykpO1xuICAgIHRoaXMuc3VibWl0LnRleHRDb250ZW50ID0gXCJBZGQgdG9kb1wiO1xuICB9XG5cbiAgY3JlYXRlVG9kb0Zvcm1TdWJtaXQoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBsZXQgZGF0ZSA9IG5ldyBEYXRlKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke3RoaXMuaWR9LWR1ZS1kYXRlYCkudmFsdWVBc051bWJlcik7XG4gICAgbGV0IHRvZG8gPSBuZXcgVG9kb0l0ZW0oXG4gICAgICB0aGlzLmRpYWxvZy5xdWVyeVNlbGVjdG9yKFwiLmZvcm0tdGl0bGVcIikudmFsdWUsXG4gICAgICB0aGlzLmRpYWxvZy5xdWVyeVNlbGVjdG9yKFwiLmZvcm0tZGVzY3JpcHRpb25cIikudmFsdWUsXG4gICAgICAoZGF0ZSBpbnN0YW5jZW9mIERhdGUgJiYgIWlzTmFOKGRhdGUpKSA/IGRhdGUgOiBudWxsLFxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7dGhpcy5pZH0tcHJpb3JpdHktc2VsZWN0YCkudmFsdWUsXG4gICAgKTtcblxuICAgIGxldCBwcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHt0aGlzLmlkfS1wcm9qZWN0LXNlbGVjdGApLnZhbHVlO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke3RoaXMuaWR9LXByb2plY3Qtc2VsZWN0YCkuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoZSkgPT4ge1xuICAgICAgcHJvamVjdFRpdGxlID0gZS50YXJnZXQudmFsdWU7XG4gICAgfSk7XG5cbiAgICB0cnkge1xuICAgICAgdG9kby5hZGRUb2RvKHByb2plY3RUaXRsZSk7XG4gICAgfSBjYXRjaCAoRHVwbGljYXRlVG9kb1RpdGxlRXJyb3IpIHtcbiAgICAgIGFsZXJ0KFwiQSB0b2RvIHdpdGggdGhlIHNhbWUgdGl0bGUgYWxyZWFkeSBleGlzdHMgaW4gdGhpcyBwcm9qZWN0LiBQbGVhc2UgZW50ZXIgYSBkaWZmZXJlbnQgdGl0bGUuXCIpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGxldCBhY3RpdmVQcm9qZWN0TmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWN0aXZlXCIpLmRhdGFzZXQucHJvamVjdE5hbWU7XG4gICAgaWYgKGFjdGl2ZVByb2plY3ROYW1lID09PSBwcm9qZWN0VGl0bGUpIHtcbiAgICAgIHNob3dBY3RpdmVQcm9qZWN0VG9kb3MoKTtcbiAgICB9XG5cbiAgICB0aGlzLmZvcm0ucmVzZXQoKTtcbiAgICB0aGlzLmRpYWxvZy5jbG9zZSgpO1xuICB9XG59XG5cbmNsYXNzIFByb2plY3REaWFsb2cgZXh0ZW5kcyBCYXNlRGlhbG9nIHtcbiAgY29uc3RydWN0b3IoaWQpIHtcbiAgICBzdXBlcigpO1xuXG4gICAgdGhpcy5kaWFsb2cuaWQgPSBgJHtpZH0tcHJvamVjdC1kaWFsb2dgO1xuICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIGlucHV0LnNldEF0dHJpYnV0ZShcInJlcXVpcmVkXCIsIFwiXCIpO1xuICAgIGlucHV0LnR5cGUgPSBcInRleHRcIjtcbiAgICBpbnB1dC5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC10aXRsZVwiKTtcbiAgICBpbnB1dC5uYW1lID0gYCR7aWR9LXByb2plY3QtdGl0bGVgO1xuICAgIGlucHV0Lm1heExlbmd0aCA9IDIwO1xuICAgIGlucHV0LnBsYWNlaG9sZGVyID0gXCJQcm9qZWN0IHRpdGxlXCI7XG4gICAgdGhpcy5mb3JtLmFwcGVuZENoaWxkKGlucHV0KTtcbiAgfVxufVxuXG5jbGFzcyBDcmVhdGVQcm9qZWN0RGlhbG9nIGV4dGVuZHMgUHJvamVjdERpYWxvZyB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKFwiY3JlYXRlXCIpO1xuXG4gICAgdGhpcy5zdWJtaXQudGV4dENvbnRlbnQgPSBcIkFkZCBwcm9qZWN0XCI7XG4gICAgdGhpcy5zdWJtaXQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMuY3JlYXRlUHJvamVjdFN1Ym1pdC5iaW5kKHRoaXMpKTtcbiAgfVxuXG4gIGNyZWF0ZVByb2plY3RTdWJtaXQoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBsZXQgcHJvamVjdE5hbWUgPSB0aGlzLmRpYWxvZy5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QtdGl0bGVcIikudmFsdWU7XG5cbiAgICB0cnkge1xuICAgICAgKG5ldyBQcm9qZWN0KHByb2plY3ROYW1lKSkucHVzaFRvU3RvcmFnZSgpO1xuICAgIH0gY2F0Y2ggKER1cGxpY2F0ZVByb2plY3RUaXRsZUVycm9yKSB7XG4gICAgICBhbGVydChcIkEgcHJvamVjdCB3aXRoIHRoZSBzYW1lIHRpdGxlIGFscmVhZHkgZXhpc3RzLiBQbGVhc2UgZW50ZXIgYSBkaWZmZXJlbnQgdGl0bGUuXCIpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLmNsb3NlKCk7XG4gICAgdGhpcy5mb3JtLnJlc2V0KCk7XG4gICAgdXBkYXRlUHJvamVjdHNVbCgpO1xuICAgIHVwZGF0ZVRvZG9Qcm9qZWN0c0lucHV0KCk7XG4gIH1cbn1cblxuY2xhc3MgUmVuYW1lUHJvamVjdERpYWxvZyBleHRlbmRzIFByb2plY3REaWFsb2cge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcihcInJlbmFtZVwiKTtcblxuICAgIHRoaXMuc3VibWl0LnRleHRDb250ZW50ID0gXCJSZW5hbWUgcHJvamVjdFwiO1xuICAgIHRoaXMuc3VibWl0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLnJlbmFtZVByb2plY3RTdWJtaXQuYmluZCh0aGlzKSk7XG4gIH1cblxuICByZW5hbWVQcm9qZWN0U3VibWl0KGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgbGV0IG5ld1Byb2plY3ROYW1lID0gdGhpcy5kaWFsb2cucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LXRpdGxlXCIpLnZhbHVlO1xuICAgIGxldCBwcm9qZWN0cyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJwcm9qZWN0c1wiKSkgfHwgW107XG4gICAgZm9yIChsZXQgcHJvamVjdCBvZiBwcm9qZWN0cykge1xuICAgICAgaWYgKHByb2plY3QudGl0bGUgPT09IG5ld1Byb2plY3ROYW1lKSB7XG4gICAgICAgIGFsZXJ0KFwiQSBwcm9qZWN0IHdpdGggdGhlIHNhbWUgdGl0bGUgYWxyZWFkeSBleGlzdHMuIFBsZWFzZSBlbnRlciBhIGRpZmZlcmVudCB0aXRsZS5cIik7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gVXBkYXRlIHByb2plY3QgbmFtZVxuICAgIGZvciAobGV0IHByb2plY3Qgb2YgcHJvamVjdHMpIHtcbiAgICAgIGlmIChwcm9qZWN0LnRpdGxlID09PSB0aGlzLnByZXZpb3VzTmFtZSkge1xuICAgICAgICBwcm9qZWN0LnRpdGxlID0gbmV3UHJvamVjdE5hbWU7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwicHJvamVjdHNcIiwgSlNPTi5zdHJpbmdpZnkocHJvamVjdHMpKTtcbiAgICAgICAgdXBkYXRlUHJvamVjdHNVbCgpO1xuICAgICAgICB1cGRhdGVUb2RvUHJvamVjdHNJbnB1dCgpO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLmNsb3NlKCk7XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IGNyZWF0ZVByb2plY3REaWFsb2cgPSBuZXcgQ3JlYXRlUHJvamVjdERpYWxvZygpO1xuY3JlYXRlUHJvamVjdERpYWxvZy5jcmVhdGUoKTtcbmV4cG9ydCBjb25zdCBjaGFuZ2VQcm9qZWN0RGlhbG9nID0gbmV3IFJlbmFtZVByb2plY3REaWFsb2coKTtcbmNoYW5nZVByb2plY3REaWFsb2cuY3JlYXRlKCk7XG5leHBvcnQgY29uc3QgY3JlYXRlVG9kb0RpYWxvZyA9IG5ldyBDcmVhdGVUb2RvRGlhbG9nKFwiY3JlYXRlXCIpO1xuY3JlYXRlVG9kb0RpYWxvZy5jcmVhdGUoKTtcbiIsImltcG9ydCBjaGVja2JveCBmcm9tIFwiLi9pY29ucy9jaGVja2JveC5wbmdcIjtcbmltcG9ydCB4bWFyayBmcm9tIFwiLi9pY29ucy94bWFyay1zb2xpZC5zdmdcIjtcbmltcG9ydCBwZW4gZnJvbSBcIi4vaWNvbnMvcGVuLXRvLXNxdWFyZS5zdmdcIjtcblxuaW1wb3J0IHsgUHJvamVjdCwgVG9kb0l0ZW0gfSBmcm9tICcuL3RvZG8nO1xuXG5pbXBvcnQgeyBjcmVhdGVQcm9qZWN0RGlhbG9nLCBjaGFuZ2VQcm9qZWN0RGlhbG9nLCBjcmVhdGVUb2RvRGlhbG9nIH0gZnJvbSBcIi4vZGlhbG9nXCI7XG5cblxuLyoqXG4gKiBDcmVhdGVzIGEgdG9wIGJhciBlbGVtZW50IGZvciBhIHRvLWRvIGxpc3QuXG4gKiBAcmV0dXJucyB7SFRNTEVsZW1lbnR9IFRoZSB0b3AgYmFyIGVsZW1lbnQgY29udGFpbmluZyBhbiBpY29uIGFuZCBhIHRpdGxlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlVG9wYmFyKCkge1xuICBjb25zdCB0b3BiYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB0b3BiYXIuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ0b3BiYXJcIik7XG5cbiAgY29uc3QgaWNvbiA9IG5ldyBJbWFnZSgpO1xuICBpY29uLnNyYyA9IGNoZWNrYm94O1xuICB0b3BiYXIuYXBwZW5kQ2hpbGQoaWNvbik7XG5cbiAgY29uc3QgaDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gIGgxLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiVE8gRE9cIikpO1xuICB0b3BiYXIuYXBwZW5kQ2hpbGQoaDEpO1xuXG4gIHJldHVybiB0b3BiYXI7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlTmF2YmFyKCkge1xuICBjb25zdCBuYXZiYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBuYXZiYXIuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJuYXZiYXJcIik7XG5cbiAgY29uc3QgY3JlYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgY3JlYXRlLnRleHRDb250ZW50ID0gXCJDcmVhdGVcIjtcbiAgY3JlYXRlLmNsYXNzTGlzdC5hZGQoXCJ0b2RvLWNyZWF0ZVwiKTtcbiAgY3JlYXRlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjcmVhdGVUb2RvRGlhbG9nLnNob3dNb2RhbCgpO1xuICB9KTtcblxuICBuYXZiYXIuYXBwZW5kQ2hpbGQoY3JlYXRlKTtcblxuICBjb25zdCBwcmltYXJ5VWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG4gIHByaW1hcnlVbC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInByaW1hcnktdWxcIik7XG5cbiAgY29uc3QgZmlsdGVycyA9IFtcIlRvZGF5XCIsIFwiVXBjb21pbmdcIiwgXCJJbXBvcnRhbnRcIixdO1xuXG4gIGZpbHRlcnMuZm9yRWFjaCgoZmlsdGVyKSA9PiB7XG4gICAgY29uc3QgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgbGkudGV4dENvbnRlbnQgPSBmaWx0ZXI7XG4gICAgbGkuY2xhc3NMaXN0LmFkZChmaWx0ZXIudG9Mb3dlckNhc2UoKSk7XG4gICAgcHJpbWFyeVVsLmFwcGVuZENoaWxkKGxpKTtcbiAgfSk7XG4gIG5hdmJhci5hcHBlbmRDaGlsZChwcmltYXJ5VWwpO1xuXG4gIGNvbnN0IHByb2plY3RIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gIHByb2plY3RIZWFkZXIuY2xhc3NMaXN0LmFkZChcInByb2plY3QtaGVhZGVyXCIpO1xuICBwcm9qZWN0SGVhZGVyLnRleHRDb250ZW50ID0gXCJQcm9qZWN0czogXCI7XG4gIG5hdmJhci5hcHBlbmRDaGlsZChwcm9qZWN0SGVhZGVyKTtcblxuXG4gIGNvbnN0IHByb2plY3RzVWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG4gIHByb2plY3RzVWwuaWQgPSBcInByb2plY3RzLXVsXCI7XG4gIHByb2plY3RzVWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGUgPT4ge1xuICAgIGlmIChlLnRhcmdldC5oYXNBdHRyaWJ1dGUoXCJkYXRhLXByb2plY3QtbmFtZVwiKSAmJiBlLnRhcmdldC5pZCAhPT0gXCJhY3RpdmVcIikge1xuICAgICAgbGV0IHByZXZpb3VzUHJvamVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWN0aXZlXCIpO1xuICAgICAgaWYgKHByZXZpb3VzUHJvamVjdCkge1xuICAgICAgICBwcmV2aW91c1Byb2plY3QucmVtb3ZlQXR0cmlidXRlKFwiaWRcIik7XG4gICAgICB9XG4gICAgICBlLnRhcmdldC5pZCA9IFwiYWN0aXZlXCI7XG5cbiAgICAgIHNob3dBY3RpdmVQcm9qZWN0VG9kb3MoKTtcbiAgICB9XG4gIH0pO1xuICBuYXZiYXIuYXBwZW5kQ2hpbGQocHJvamVjdHNVbCk7XG5cbiAgY29uc3QgY3JlYXRlUHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNyZWF0ZVByb2plY3QuY2xhc3NMaXN0LmFkZChcImNyZWF0ZS1wcm9qZWN0XCIpO1xuICBjcmVhdGVQcm9qZWN0LnRleHRDb250ZW50ID0gXCJDcmVhdGUgbmV3IHByb2plY3RcIjtcbiAgY3JlYXRlUHJvamVjdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY3JlYXRlUHJvamVjdERpYWxvZy5zaG93TW9kYWwoKTtcbiAgfSk7XG5cbiAgbmF2YmFyLmFwcGVuZENoaWxkKGNyZWF0ZVByb2plY3QpO1xuXG4gIHJldHVybiBuYXZiYXI7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gc2hvd0FjdGl2ZVByb2plY3RUb2RvcygpIHtcbiAgY29uc3QgbWFpbkNvbHVtbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpbi1jb2x1bW5cIik7XG4gIHdoaWxlIChtYWluQ29sdW1uLmZpcnN0Q2hpbGQpIHtcbiAgICBtYWluQ29sdW1uLnJlbW92ZUNoaWxkKG1haW5Db2x1bW4ubGFzdENoaWxkKTtcbiAgfVxuXG4gIGNvbnN0IGFjdGl2ZVByb2plY3ROYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhY3RpdmVcIikuZGF0YXNldC5wcm9qZWN0TmFtZTtcblxuICBjb25zdCBwcm9qZWN0cyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJwcm9qZWN0c1wiKSk7XG4gIGNvbnN0IHByb2plY3QgPSBwcm9qZWN0cy5maW5kKChwKSA9PiBwLnRpdGxlID09PSBhY3RpdmVQcm9qZWN0TmFtZSk7XG4gIGZvciAobGV0IHRvZG8gb2YgcHJvamVjdC50b2RvTGlzdCkge1xuICAgIGNvbnN0IHRvZG9Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRvZG9Db250YWluZXIuY2xhc3NMaXN0LmFkZChcInRvZG8tY29udGFpbmVyXCIpO1xuICAgIHRvZG9Db250YWluZXIuZGF0YXNldC5wcm9qZWN0TmFtZSA9IHByb2plY3QudGl0bGU7XG4gICAgdG9kb0NvbnRhaW5lci5kYXRhc2V0LnRvZG9OYW1lID0gdG9kby50aXRsZTtcblxuICAgIGNvbnN0IHRvZG9DaGVrYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIHRvZG9DaGVrYm94LnR5cGUgPSBcImNoZWNrYm94XCI7XG4gICAgdG9kb0NoZWtib3guYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICB0b2RvLmNvbXBsZXRlZCA9IGUudGFyZ2V0LmNoZWNrZWQ7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInByb2plY3RzXCIsIEpTT04uc3RyaW5naWZ5KHByb2plY3RzKSk7XG4gICAgICBpZiAoZS50YXJnZXQuY2hlY2tlZCkge1xuICAgICAgICB0b2RvRGl2LmNsYXNzTGlzdC5hZGQoXCJjb21wbGV0ZWRcIik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0b2RvRGl2LmNsYXNzTGlzdC5yZW1vdmUoXCJjb21wbGV0ZWRcIik7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBjb25zdCB0b2RvRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0b2RvRGl2LmNsYXNzTGlzdC5hZGQoXCJ0b2RvXCIsIGB0b2RvLSR7dG9kby5wcmlvcml0eX1gKTtcbiAgICBpZiAodG9kby5jb21wbGV0ZWQpIHtcbiAgICAgIHRvZG9DaGVrYm94LmNoZWNrZWQgPSB0cnVlO1xuICAgICAgdG9kb0Rpdi5jbGFzc0xpc3QuYWRkKFwiY29tcGxldGVkXCIpO1xuICAgIH1cblxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICAgIHRpdGxlLnRleHRDb250ZW50ID0gdG9kby50aXRsZTtcbiAgICBjb25zdCBkZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgZGVzYy50ZXh0Q29udGVudCA9IHRvZG8uZGVzY3JpcHRpb247XG5cbiAgICBjb25zdCB0aW1lVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGlmICh0b2RvLmR1ZURhdGUpIHtcbiAgICAgIGNvbnN0IHRpbWUgPSBuZXcgRGF0ZSh0b2RvLmR1ZURhdGUpLnRvTG9jYWxlRGF0ZVN0cmluZyhcImVuLUdCXCIpO1xuICAgICAgdGltZVRleHQudGV4dENvbnRlbnQgPSB0aW1lO1xuICAgIH1cblxuICAgIGNvbnN0IGljb25zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBpY29ucy5jbGFzc0xpc3QuYWRkKFwiaWNvbnNcIik7XG5cbiAgICBjb25zdCBwZW5JY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICBwZW5JY29uLmNsYXNzTGlzdC5hZGQoXCJlZGl0LWljb25cIik7XG4gICAgcGVuSWNvbi5zcmMgPSBwZW47XG4gICAgcGVuSWNvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgfSk7XG4gICAgaWNvbnMuYXBwZW5kQ2hpbGQocGVuSWNvbik7XG5cbiAgICBjb25zdCB4SWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgeEljb24uY2xhc3NMaXN0LmFkZChcImRlbGV0ZS1pY29uXCIpO1xuICAgIHhJY29uLnNyYyA9IHhtYXJrO1xuICAgIHhJY29uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgICAgbGV0IHByb2plY3ROYW1lID0gZS50YXJnZXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LmRhdGFzZXQucHJvamVjdE5hbWU7XG4gICAgICBsZXQgdG9kb05hbWUgPSBlLnRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuZGF0YXNldC50b2RvTmFtZTtcblxuICAgICAgY29uc3QgcHJvamVjdHMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicHJvamVjdHNcIikpO1xuICAgICAgY29uc3QgcHJvamVjdCA9IHByb2plY3RzLmZpbmQoKHApID0+IHAudGl0bGUgPT09IHByb2plY3ROYW1lKTtcblxuICAgICAgbGV0IHRvZG9JbmRleCA9IHByb2plY3QudG9kb0xpc3QuZmluZEluZGV4KHRvZG8gPT4gdG9kby50aXRsZSA9PT0gdG9kb05hbWUpO1xuICAgICAgaWYgKHRvZG9JbmRleCAhPT0gLTEpIHtcbiAgICAgICAgcHJvamVjdC50b2RvTGlzdC5zcGxpY2UodG9kb0luZGV4LCAxKTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJwcm9qZWN0c1wiLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0cykpO1xuICAgICAgfVxuXG4gICAgICBpZiAocHJvamVjdE5hbWUgPT09IGFjdGl2ZVByb2plY3ROYW1lKSB7XG4gICAgICAgIHNob3dBY3RpdmVQcm9qZWN0VG9kb3MoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBpY29ucy5hcHBlbmRDaGlsZCh4SWNvbik7XG5cbiAgICB0b2RvRGl2LmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgICB0b2RvRGl2LmFwcGVuZENoaWxkKGRlc2MpO1xuICAgIHRvZG9EaXYuYXBwZW5kQ2hpbGQodGltZVRleHQpO1xuICAgIHRvZG9Db250YWluZXIuYXBwZW5kQ2hpbGQodG9kb0NoZWtib3gpO1xuICAgIHRvZG9Db250YWluZXIuYXBwZW5kQ2hpbGQodG9kb0Rpdik7XG4gICAgdG9kb0NvbnRhaW5lci5hcHBlbmRDaGlsZChpY29ucyk7XG4gICAgbWFpbkNvbHVtbi5hcHBlbmRDaGlsZCh0b2RvQ29udGFpbmVyKTtcbiAgfTtcbn07XG5cblxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZVByb2plY3RzVWwoKSB7XG4gIGNvbnN0IHByb2plY3RzVWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3RzLXVsXCIpO1xuICB3aGlsZSAocHJvamVjdHNVbC5maXJzdENoaWxkKSB7XG4gICAgcHJvamVjdHNVbC5yZW1vdmVDaGlsZChwcm9qZWN0c1VsLmxhc3RDaGlsZCk7XG4gIH07XG5cbiAgY29uc3QgcHJvamVjdHMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicHJvamVjdHNcIikpIHx8IFtdO1xuICBmb3IgKGxldCBwcm9qZWN0IG9mIHByb2plY3RzKSB7XG4gICAgY29uc3QgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBjb25zdCBpY29ucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgaWNvbnMuY2xhc3NMaXN0LmFkZChcImljb25zXCIpO1xuXG4gICAgY29uc3QgcGVuSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgcGVuSWNvbi5jbGFzc0xpc3QuYWRkKFwiZWRpdC1pY29uXCIpO1xuICAgIHBlbkljb24uc3JjID0gcGVuO1xuICAgIHBlbkljb24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgLy8gc2F2ZSBwcm9qZWN0TmFtZSBvbiBtZW1vcnlcbiAgICAgIGNoYW5nZVByb2plY3REaWFsb2cucHJldmlvdXNOYW1lID0gZS50YXJnZXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LmZpcnN0Q2hpbGQudGV4dENvbnRlbnQ7XG5cbiAgICAgIC8vIG9wZW4gZGlhbG9nIGFuZCBzZXQgaW5wdXQgdmFsdWVcbiAgICAgIGNvbnN0IGlucHV0ID0gY2hhbmdlUHJvamVjdERpYWxvZy5kaWFsb2cucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LXRpdGxlXCIpO1xuICAgICAgaW5wdXQudmFsdWUgPSBjaGFuZ2VQcm9qZWN0RGlhbG9nLnByZXZpb3VzTmFtZTtcbiAgICAgIGNoYW5nZVByb2plY3REaWFsb2cuc2hvd01vZGFsKCk7XG4gICAgfSk7XG4gICAgaWNvbnMuYXBwZW5kQ2hpbGQocGVuSWNvbik7XG5cbiAgICBjb25zdCB4SWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgeEljb24uY2xhc3NMaXN0LmFkZChcImRlbGV0ZS1pY29uXCIpO1xuICAgIHhJY29uLnNyYyA9IHhtYXJrO1xuICAgIHhJY29uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIFByb2plY3QucmVtb3ZlRnJvbVN0b3JhZ2UocHJvamVjdC50aXRsZSk7XG4gICAgICB1cGRhdGVQcm9qZWN0c1VsKCk7XG4gICAgICB1cGRhdGVUb2RvUHJvamVjdHNJbnB1dCgpO1xuICAgIH0pO1xuICAgIGljb25zLmFwcGVuZENoaWxkKHhJY29uKTtcblxuICAgIGxpLmRhdGFzZXQucHJvamVjdE5hbWUgPSBwcm9qZWN0LnRpdGxlO1xuICAgIHRpdGxlLnRleHRDb250ZW50ID0gcHJvamVjdC50aXRsZTtcbiAgICBsaS5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gICAgbGkuYXBwZW5kQ2hpbGQoaWNvbnMpO1xuICAgIHByb2plY3RzVWwuYXBwZW5kQ2hpbGQobGkpO1xuICB9O1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZVRvZG9Qcm9qZWN0c0lucHV0KCkge1xuICBjb25zdCBwcm9qZWN0U2VsZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjcmVhdGUtcHJvamVjdC1zZWxlY3RcIik7XG4gIHdoaWxlIChwcm9qZWN0U2VsZWN0LmZpcnN0Q2hpbGQpIHtcbiAgICBwcm9qZWN0U2VsZWN0LnJlbW92ZUNoaWxkKHByb2plY3RTZWxlY3QubGFzdENoaWxkKTtcbiAgfVxuICBjb25zdCBwcm9qZWN0cyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJwcm9qZWN0c1wiKSk7XG4gIGlmIChwcm9qZWN0cykge1xuICAgIHByb2plY3RzLmZvckVhY2goKHByb2plY3QpID0+IHtcbiAgICAgIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgICBvcHRpb24udGV4dENvbnRlbnQgPSBwcm9qZWN0W1widGl0bGVcIl07XG4gICAgICBwcm9qZWN0U2VsZWN0LmFwcGVuZENoaWxkKG9wdGlvbik7XG4gICAgfSk7XG4gIH07XG59OyIsImV4cG9ydCBjbGFzcyBUb2RvSXRlbSB7XG4gIGNvbnN0cnVjdG9yKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkpIHtcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgIHRoaXMuY29tcGxldGVkID0gZmFsc2U7XG4gIH1cblxuICBhZGRUb2RvKHByb2plY3RUaXRsZSkge1xuICAgIGNvbnN0IHByb2plY3RzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInByb2plY3RzXCIpKTtcbiAgICBsZXQgaW5kZXggPSBwcm9qZWN0cy5maW5kSW5kZXgocHJvamVjdCA9PiBwcm9qZWN0LnRpdGxlID09PSBwcm9qZWN0VGl0bGUpO1xuICAgIGxldCB0b2RvSW5kZXggPSBwcm9qZWN0c1tpbmRleF0udG9kb0xpc3QuZmluZEluZGV4KHRvZG8gPT4gdG9kby50aXRsZSA9PT0gdGhpcy50aXRsZSk7XG4gICAgaWYgKHRvZG9JbmRleCA9PT0gLTEpIHtcbiAgICAgIHByb2plY3RzW2luZGV4XS50b2RvTGlzdC5wdXNoKHRoaXMpO1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJwcm9qZWN0c1wiLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0cykpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgRHVwbGljYXRlVG9kb1RpdGxlRXJyb3IoXCJUb2RvIHdpdGggdGhhdCB0aXRsZSBhbHJlYWR5IGV4aXN0cyBpbiB0aGlzIFByb2plY3RcIik7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBQcm9qZWN0IHtcbiAgc3RhdGljIHJlbW92ZUZyb21TdG9yYWdlKHByb2plY3RUaXRsZSkge1xuICAgIGNvbnN0IHByb2plY3RzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInByb2plY3RzXCIpKTtcbiAgICBsZXQgaW5kZXggPSBwcm9qZWN0cy5maW5kSW5kZXgocHJvamVjdCA9PiBwcm9qZWN0LnRpdGxlID09PSBwcm9qZWN0VGl0bGUpO1xuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHByb2plY3RzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInByb2plY3RzXCIsIEpTT04uc3RyaW5naWZ5KHByb2plY3RzKSk7XG4gICAgfVxuICB9XG5cbiAgY29uc3RydWN0b3IodGl0bGUpIHtcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgdGhpcy50b2RvTGlzdCA9IFtdO1xuICB9XG5cbiAgcHVzaFRvU3RvcmFnZSgpIHtcbiAgICBjb25zdCBwcm9qZWN0cyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJwcm9qZWN0c1wiKSk7XG4gICAgaWYgKCFwcm9qZWN0cykge1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJwcm9qZWN0c1wiLCBKU09OLnN0cmluZ2lmeShbdGhpc10pKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHByb2plY3RzLnNvbWUocHJvamVjdCA9PiBwcm9qZWN0LnRpdGxlICE9PSB0aGlzLnRpdGxlKSkge1xuICAgICAgICBwcm9qZWN0cy5wdXNoKHRoaXMpO1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInByb2plY3RzXCIsIEpTT04uc3RyaW5naWZ5KHByb2plY3RzKSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aHJvdyBuZXcgRHVwbGljYXRlUHJvamVjdFRpdGxlRXJyb3IoXCJQcm9qZWN0IHRpdGxlIGFscmVhZHkgZXhpc3RzXCIpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgKCFzY3JpcHRVcmwgfHwgIS9eaHR0cChzPyk6Ly50ZXN0KHNjcmlwdFVybCkpKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuaW1wb3J0IGNhbGVuZGFyVG9kYXkgZnJvbSBcIi4vaWNvbnMvY2FsZW5kYXItdG9kYXkuc3ZnXCI7XG5pbXBvcnQgY2FsZW5kYXJVcGNvbWluZyBmcm9tIFwiLi9pY29ucy9jYWxlbmRhci1yYW5nZS5zdmdcIjtcbmltcG9ydCB7IGNyZWF0ZU5hdmJhciwgY3JlYXRlVG9wYmFyLCB1cGRhdGVQcm9qZWN0c1VsLCB1cGRhdGVUb2RvUHJvamVjdHNJbnB1dCB9IGZyb20gXCIuL2RvbS1mdW5jdGlvbnNcIjtcbmltcG9ydCB7IFRvZG9JdGVtLCBQcm9qZWN0IH0gZnJvbSBcIi4vdG9kb1wiO1xuXG5jb25zdCBhcHAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XG5cbmNvbnN0IHByb2plY3RzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInByb2plY3RzXCIpKTtcbmlmICghcHJvamVjdHMpIHtcbiAgY29uc3Qgc2hvcHBpbmcgPSBuZXcgUHJvamVjdChcIlNob3BwaW5nXCIpO1xuICBzaG9wcGluZy5wdXNoVG9TdG9yYWdlKCk7XG4gIChuZXcgVG9kb0l0ZW0oXCJ0b21hdG9lc1wiLCBcImJ1eSAwLjUga2cgb2YgdG9tYXRvZXNcIiwgbmV3IERhdGUoMjAyNCwgMiwgMTkpLCBcImhpZ2hcIikuYWRkVG9kbyhzaG9wcGluZy50aXRsZSkpO1xuICB1cGRhdGVUb2RvUHJvamVjdHNJbnB1dCgpO1xufVxuXG5cblxuY29uc3QgY29udGVudFdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuY29udGVudFdyYXBwZXIuY2xhc3NMaXN0LmFkZChcImNvbnRlbnRXcmFwcGVyXCIpO1xuYXBwLmFwcGVuZENoaWxkKGNyZWF0ZVRvcGJhcigpKTtcbmFwcC5hcHBlbmRDaGlsZChjb250ZW50V3JhcHBlcik7XG5jb250ZW50V3JhcHBlci5hcHBlbmRDaGlsZChjcmVhdGVOYXZiYXIoKSk7XG5jb25zdCBtYWluQ29sdW1uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbm1haW5Db2x1bW4uaWQgPSBcIm1haW4tY29sdW1uXCI7XG5jb250ZW50V3JhcHBlci5hcHBlbmRDaGlsZChtYWluQ29sdW1uKTtcblxudXBkYXRlUHJvamVjdHNVbCgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9