/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file.
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = injectStyles
  }

  if (hook) {
    var functional = options.functional
    var existing = functional
      ? options.render
      : options.beforeCreate

    if (!functional) {
      // inject component registration as beforeCreate hook
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    } else {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return existing(h, context)
      }
    }
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(2);
module.exports = __webpack_require__(16);


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

Nova.booting(function (Vue, router, store) {
    Vue.component('index-ckeditor5-classic-field', __webpack_require__(3));
    Vue.component('detail-ckeditor5-classic-field', __webpack_require__(6));
    Vue.component('form-ckeditor5-classic-field', __webpack_require__(9));
});

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(4)
/* template */
var __vue_template__ = __webpack_require__(5)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/js/components/IndexField.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-9e63f81a", Component.options)
  } else {
    hotAPI.reload("data-v-9e63f81a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    props: ['resourceName', 'field']
});

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("span", [_vm._v(_vm._s(_vm.field.value))])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-9e63f81a", module.exports)
  }
}

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(7)
/* template */
var __vue_template__ = __webpack_require__(8)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/js/components/DetailField.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0224618e", Component.options)
  } else {
    hotAPI.reload("data-v-0224618e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    props: ['resource', 'resourceName', 'resourceId', 'field']
});

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "panel-item",
    { attrs: { field: _vm.field } },
    [
      _c(
        "template",
        { slot: "value" },
        [
          _c("excerpt", {
            attrs: {
              content: _vm.field.value,
              "should-show": _vm.field.shouldShow
            }
          })
        ],
        1
      )
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-0224618e", module.exports)
  }
}

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(10)
/* template */
var __vue_template__ = __webpack_require__(15)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/js/components/FormField.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-c023248a", Component.options)
  } else {
    hotAPI.reload("data-v-c023248a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_laravel_nova__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_laravel_nova___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_laravel_nova__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ckeditor_ckeditor5_vue__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ckeditor_ckeditor5_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__ckeditor_ckeditor5_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ckeditor5_classic__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ckeditor5_classic___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ckeditor5_classic__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ckeditor5_upload_adapter__ = __webpack_require__(14);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//






/* harmony default export */ __webpack_exports__["default"] = ({
    mixins: [__WEBPACK_IMPORTED_MODULE_0_laravel_nova__["FormField"], __WEBPACK_IMPORTED_MODULE_0_laravel_nova__["HandlesValidationErrors"]],

    components: {
        ckeditor: __WEBPACK_IMPORTED_MODULE_1__ckeditor_ckeditor5_vue___default.a.component
    },

    props: ['resourceName', 'resourceId', 'field'],

    data: function data() {
        return {
            editor: __WEBPACK_IMPORTED_MODULE_2_ckeditor5_classic___default.a,
            defaultEditorConfig: {
                nova: {
                    resourceName: this.resourceName,
                    field: this.field,
                    draftId: uuidv4()
                },
                language: 'en',
                toolbar: this.field.options.toolbar,
                heading: this.field.options.heading,
                image: this.field.options.image,
                fontFamily: this.field.options.fontFamily,
                extraPlugins: [this.createUploadAdapterPlugin]
            }
        };
    },


    computed: {
        draftId: function draftId() {
            return this.defaultEditorConfig.nova.draftId;
        },
        editorConfig: function editorConfig() {
            var editorConfig = this.defaultEditorConfig;

            if (!editorConfig.nova.field.withFiles) {
                editorConfig.removePlugins = ['Image', 'ImageToolbar', 'ImageCaption', 'ImageStyle', 'ImageTextAlternate', 'ImageUpload'];
                editorConfig.image = {};
                editorConfig.extraPlugins = [];
            }

            return editorConfig;
        }
    },

    beforeDestroy: function beforeDestroy() {
        this.cleanUp();
    },


    methods: {
        /**
         * Set the initial, internal value for the field.
         */
        setInitialValue: function setInitialValue() {
            //
        },


        /**
         * Set the editor initial, internal value for the field when the editor is ready.
         */
        setEditorInitialValue: function setEditorInitialValue(editor) {
            this.value = this.field.value || '';
        },


        /**
         * Fill the given FormData object with the field's internal value.
         */
        fill: function fill(formData) {
            formData.append(this.field.attribute, this.value || '');
            formData.append(this.field.attribute + 'DraftId', this.draftId);
        },


        /**
         * Update the field's internal value.
         */
        handleChange: function handleChange(value) {
            this.value = value;
        },


        /**
        * Create CKEditor upload adapter plugin.
        */
        createUploadAdapterPlugin: function createUploadAdapterPlugin(editor) {
            var novaConfig = editor.config.get('nova');

            editor.plugins.get('FileRepository').createUploadAdapter = function (loader) {
                return new __WEBPACK_IMPORTED_MODULE_3__ckeditor5_upload_adapter__["a" /* default */](loader, novaConfig.resourceName, novaConfig.field, novaConfig.draftId);
            };
        },


        /**
         * Purge pending attachments for the draft
         */
        cleanUp: function cleanUp() {
            if (this.field.withFiles) {
                Nova.request().delete('/nova-vendor/ckeditor5-classic/' + this.resourceName + '/attachments/' + this.field.attribute + '/' + this.draftId).then(function (response) {
                    return console.log(response);
                }).catch(function (error) {});
            }
        }
    }
});

function uuidv4() {
    return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, function (c) {
        return (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16);
    });
}

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["laravel-nova"] = factory();
	else
		root["laravel-nova"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 47);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__(46);
var isBuffer = __webpack_require__(156);

/*global toString:true*/

// utils is a library of generic helper functions non-specific to axios

var toString = Object.prototype.toString;

/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Array, otherwise false
 */
function isArray(val) {
  return toString.call(val) === '[object Array]';
}

/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */
function isArrayBuffer(val) {
  return toString.call(val) === '[object ArrayBuffer]';
}

/**
 * Determine if a value is a FormData
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an FormData, otherwise false
 */
function isFormData(val) {
  return (typeof FormData !== 'undefined') && (val instanceof FormData);
}

/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */
function isArrayBufferView(val) {
  var result;
  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
    result = ArrayBuffer.isView(val);
  } else {
    result = (val) && (val.buffer) && (val.buffer instanceof ArrayBuffer);
  }
  return result;
}

/**
 * Determine if a value is a String
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a String, otherwise false
 */
function isString(val) {
  return typeof val === 'string';
}

/**
 * Determine if a value is a Number
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Number, otherwise false
 */
function isNumber(val) {
  return typeof val === 'number';
}

/**
 * Determine if a value is undefined
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if the value is undefined, otherwise false
 */
function isUndefined(val) {
  return typeof val === 'undefined';
}

/**
 * Determine if a value is an Object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Object, otherwise false
 */
function isObject(val) {
  return val !== null && typeof val === 'object';
}

/**
 * Determine if a value is a Date
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Date, otherwise false
 */
function isDate(val) {
  return toString.call(val) === '[object Date]';
}

/**
 * Determine if a value is a File
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */
function isFile(val) {
  return toString.call(val) === '[object File]';
}

/**
 * Determine if a value is a Blob
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Blob, otherwise false
 */
function isBlob(val) {
  return toString.call(val) === '[object Blob]';
}

/**
 * Determine if a value is a Function
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */
function isFunction(val) {
  return toString.call(val) === '[object Function]';
}

/**
 * Determine if a value is a Stream
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Stream, otherwise false
 */
function isStream(val) {
  return isObject(val) && isFunction(val.pipe);
}

/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */
function isURLSearchParams(val) {
  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
}

/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 * @returns {String} The String freed of excess whitespace
 */
function trim(str) {
  return str.replace(/^\s*/, '').replace(/\s*$/, '');
}

/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 */
function isStandardBrowserEnv() {
  if (typeof navigator !== 'undefined' && navigator.product === 'ReactNative') {
    return false;
  }
  return (
    typeof window !== 'undefined' &&
    typeof document !== 'undefined'
  );
}

/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 */
function forEach(obj, fn) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }

  // Force an array if not already something iterable
  if (typeof obj !== 'object') {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (var i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj);
      }
    }
  }
}

/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function merge(/* obj1, obj2, obj3, ... */) {
  var result = {};
  function assignValue(val, key) {
    if (typeof result[key] === 'object' && typeof val === 'object') {
      result[key] = merge(result[key], val);
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 * @return {Object} The resulting value of object a
 */
function extend(a, b, thisArg) {
  forEach(b, function assignValue(val, key) {
    if (thisArg && typeof val === 'function') {
      a[key] = bind(val, thisArg);
    } else {
      a[key] = val;
    }
  });
  return a;
}

module.exports = {
  isArray: isArray,
  isArrayBuffer: isArrayBuffer,
  isBuffer: isBuffer,
  isFormData: isFormData,
  isArrayBufferView: isArrayBufferView,
  isString: isString,
  isNumber: isNumber,
  isObject: isObject,
  isUndefined: isUndefined,
  isDate: isDate,
  isFile: isFile,
  isBlob: isBlob,
  isFunction: isFunction,
  isStream: isStream,
  isURLSearchParams: isURLSearchParams,
  isStandardBrowserEnv: isStandardBrowserEnv,
  forEach: forEach,
  merge: merge,
  extend: extend,
  trim: trim
};


/***/ }),
/* 1 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(60)('wks');
var uid = __webpack_require__(65);
var Symbol = __webpack_require__(1).Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),
/* 3 */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.5.7' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(9);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(29)(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(1);
var core = __webpack_require__(3);
var ctx = __webpack_require__(16);
var hide = __webpack_require__(7);
var has = __webpack_require__(17);
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && has(exports, key)) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(11);
var createDesc = __webpack_require__(59);
module.exports = __webpack_require__(5) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 8 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

module.exports = isObject;


/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(4);
var IE8_DOM_DEFINE = __webpack_require__(122);
var toPrimitive = __webpack_require__(142);
var dP = Object.defineProperty;

exports.f = __webpack_require__(5) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

var freeGlobal = __webpack_require__(68);

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

module.exports = root;


/***/ }),
/* 13 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

module.exports = isArray;


/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),
/* 15 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(14);
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),
/* 17 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

var eq = __webpack_require__(38);

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

module.exports = assocIndexOf;


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(36),
    getRawTag = __webpack_require__(188),
    objectToString = __webpack_require__(213);

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

module.exports = baseGetTag;


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

var isKeyable = __webpack_require__(197);

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

module.exports = getMapData;


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(37);

/* Built-in method references that are verified to be native. */
var nativeCreate = getNative(Object, 'create');

module.exports = nativeCreate;


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__(72),
    isLength = __webpack_require__(73);

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

module.exports = isArrayLike;


/***/ }),
/* 23 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

module.exports = isObjectLike;


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(19),
    isObjectLike = __webpack_require__(23);

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && baseGetTag(value) == symbolTag);
}

module.exports = isSymbol;


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var utils = __webpack_require__(0);
var normalizeHeaderName = __webpack_require__(109);

var DEFAULT_CONTENT_TYPE = {
  'Content-Type': 'application/x-www-form-urlencoded'
};

function setContentTypeIfUnset(headers, value) {
  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
    headers['Content-Type'] = value;
  }
}

function getDefaultAdapter() {
  var adapter;
  if (typeof XMLHttpRequest !== 'undefined') {
    // For browsers use XHR adapter
    adapter = __webpack_require__(42);
  } else if (typeof process !== 'undefined') {
    // For node use HTTP adapter
    adapter = __webpack_require__(42);
  }
  return adapter;
}

var defaults = {
  adapter: getDefaultAdapter(),

  transformRequest: [function transformRequest(data, headers) {
    normalizeHeaderName(headers, 'Content-Type');
    if (utils.isFormData(data) ||
      utils.isArrayBuffer(data) ||
      utils.isBuffer(data) ||
      utils.isStream(data) ||
      utils.isFile(data) ||
      utils.isBlob(data)
    ) {
      return data;
    }
    if (utils.isArrayBufferView(data)) {
      return data.buffer;
    }
    if (utils.isURLSearchParams(data)) {
      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
      return data.toString();
    }
    if (utils.isObject(data)) {
      setContentTypeIfUnset(headers, 'application/json;charset=utf-8');
      return JSON.stringify(data);
    }
    return data;
  }],

  transformResponse: [function transformResponse(data) {
    /*eslint no-param-reassign:0*/
    if (typeof data === 'string') {
      try {
        data = JSON.parse(data);
      } catch (e) { /* Ignore */ }
    }
    return data;
  }],

  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,

  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',

  maxContentLength: -1,

  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  }
};

defaults.headers = {
  common: {
    'Accept': 'application/json, text/plain, */*'
  }
};

utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
  defaults.headers[method] = {};
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
});

module.exports = defaults;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(75)))

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__(113);

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (obj, key, value) {
  if (key in obj) {
    (0, _defineProperty2.default)(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

/***/ }),
/* 27 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(9);
var document = __webpack_require__(1).document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = true;


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 25.4.1.5 NewPromiseCapability(C)
var aFunction = __webpack_require__(14);

function PromiseCapability(C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = aFunction(resolve);
  this.reject = aFunction(reject);
}

module.exports.f = function (C) {
  return new PromiseCapability(C);
};


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(11).f;
var has = __webpack_require__(17);
var TAG = __webpack_require__(2)('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(60)('keys');
var uid = __webpack_require__(65);
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),
/* 34 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(54);
var defined = __webpack_require__(27);
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(12);

/** Built-in value references. */
var Symbol = root.Symbol;

module.exports = Symbol;


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsNative = __webpack_require__(170),
    getValue = __webpack_require__(189);

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

module.exports = getNative;


/***/ }),
/* 38 */
/***/ (function(module, exports) {

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

module.exports = eq;


/***/ }),
/* 39 */
/***/ (function(module, exports) {

/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

module.exports = identity;


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ['1/2', '1/3', '2/3', '1/4', '3/4', '1/5', '2/5', '3/5', '4/5', '1/6', '5/6'];

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Form = __webpack_require__(154);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Form).default;
  }
});
Object.defineProperty(exports, 'Form', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Form).default;
  }
});

var _Errors = __webpack_require__(66);

Object.defineProperty(exports, 'Errors', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Errors).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var utils = __webpack_require__(0);
var settle = __webpack_require__(101);
var buildURL = __webpack_require__(104);
var parseHeaders = __webpack_require__(110);
var isURLSameOrigin = __webpack_require__(108);
var createError = __webpack_require__(45);
var btoa = (typeof window !== 'undefined' && window.btoa && window.btoa.bind(window)) || __webpack_require__(103);

module.exports = function xhrAdapter(config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    var requestData = config.data;
    var requestHeaders = config.headers;

    if (utils.isFormData(requestData)) {
      delete requestHeaders['Content-Type']; // Let the browser set it
    }

    var request = new XMLHttpRequest();
    var loadEvent = 'onreadystatechange';
    var xDomain = false;

    // For IE 8/9 CORS support
    // Only supports POST and GET calls and doesn't returns the response headers.
    // DON'T do this for testing b/c XMLHttpRequest is mocked, not XDomainRequest.
    if (process.env.NODE_ENV !== 'test' &&
        typeof window !== 'undefined' &&
        window.XDomainRequest && !('withCredentials' in request) &&
        !isURLSameOrigin(config.url)) {
      request = new window.XDomainRequest();
      loadEvent = 'onload';
      xDomain = true;
      request.onprogress = function handleProgress() {};
      request.ontimeout = function handleTimeout() {};
    }

    // HTTP basic authentication
    if (config.auth) {
      var username = config.auth.username || '';
      var password = config.auth.password || '';
      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
    }

    request.open(config.method.toUpperCase(), buildURL(config.url, config.params, config.paramsSerializer), true);

    // Set the request timeout in MS
    request.timeout = config.timeout;

    // Listen for ready state
    request[loadEvent] = function handleLoad() {
      if (!request || (request.readyState !== 4 && !xDomain)) {
        return;
      }

      // The request errored out and we didn't get a response, this will be
      // handled by onerror instead
      // With one exception: request that using file: protocol, most browsers
      // will return status as 0 even though it's a successful request
      if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
        return;
      }

      // Prepare the response
      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
      var responseData = !config.responseType || config.responseType === 'text' ? request.responseText : request.response;
      var response = {
        data: responseData,
        // IE sends 1223 instead of 204 (https://github.com/axios/axios/issues/201)
        status: request.status === 1223 ? 204 : request.status,
        statusText: request.status === 1223 ? 'No Content' : request.statusText,
        headers: responseHeaders,
        config: config,
        request: request
      };

      settle(resolve, reject, response);

      // Clean up request
      request = null;
    };

    // Handle low level network errors
    request.onerror = function handleError() {
      // Real errors are hidden from us by the browser
      // onerror should only fire if it's a network error
      reject(createError('Network Error', config, null, request));

      // Clean up request
      request = null;
    };

    // Handle timeout
    request.ontimeout = function handleTimeout() {
      reject(createError('timeout of ' + config.timeout + 'ms exceeded', config, 'ECONNABORTED',
        request));

      // Clean up request
      request = null;
    };

    // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.
    if (utils.isStandardBrowserEnv()) {
      var cookies = __webpack_require__(106);

      // Add xsrf header
      var xsrfValue = (config.withCredentials || isURLSameOrigin(config.url)) && config.xsrfCookieName ?
          cookies.read(config.xsrfCookieName) :
          undefined;

      if (xsrfValue) {
        requestHeaders[config.xsrfHeaderName] = xsrfValue;
      }
    }

    // Add headers to the request
    if ('setRequestHeader' in request) {
      utils.forEach(requestHeaders, function setRequestHeader(val, key) {
        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
          // Remove Content-Type if data is undefined
          delete requestHeaders[key];
        } else {
          // Otherwise add header to the request
          request.setRequestHeader(key, val);
        }
      });
    }

    // Add withCredentials to request if needed
    if (config.withCredentials) {
      request.withCredentials = true;
    }

    // Add responseType to request if needed
    if (config.responseType) {
      try {
        request.responseType = config.responseType;
      } catch (e) {
        // Expected DOMException thrown by browsers not compatible XMLHttpRequest Level 2.
        // But, this can be suppressed for 'json' type as it can be parsed by default 'transformResponse' function.
        if (config.responseType !== 'json') {
          throw e;
        }
      }
    }

    // Handle progress if needed
    if (typeof config.onDownloadProgress === 'function') {
      request.addEventListener('progress', config.onDownloadProgress);
    }

    // Not all browsers support upload events
    if (typeof config.onUploadProgress === 'function' && request.upload) {
      request.upload.addEventListener('progress', config.onUploadProgress);
    }

    if (config.cancelToken) {
      // Handle cancellation
      config.cancelToken.promise.then(function onCanceled(cancel) {
        if (!request) {
          return;
        }

        request.abort();
        reject(cancel);
        // Clean up request
        request = null;
      });
    }

    if (requestData === undefined) {
      requestData = null;
    }

    // Send the request
    request.send(requestData);
  });
};

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(75)))

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * A `Cancel` is an object that is thrown when an operation is canceled.
 *
 * @class
 * @param {string=} message The message.
 */
function Cancel(message) {
  this.message = message;
}

Cancel.prototype.toString = function toString() {
  return 'Cancel' + (this.message ? ': ' + this.message : '');
};

Cancel.prototype.__CANCEL__ = true;

module.exports = Cancel;


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function isCancel(value) {
  return !!(value && value.__CANCEL__);
};


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var enhanceError = __webpack_require__(100);

/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The created error.
 */
module.exports = function createError(message, config, code, request, response) {
  var error = new Error(message);
  return enhanceError(error, config, code, request, response);
};


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function bind(fn, thisArg) {
  return function wrap() {
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }
    return fn.apply(thisArg, args);
  };
};


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CardSizes = exports.SingularOrPlural = exports.Minimum = exports.Capitalize = exports.Inflector = exports.Errors = exports.TogglesTrashed = exports.PerPageable = exports.PerformsSearches = exports.Paginatable = exports.InteractsWithResourceInformation = exports.InteractsWithQueryString = exports.InteractsWithDates = exports.HasCards = exports.HandlesValidationErrors = exports.FormField = exports.Filterable = exports.Deletable = exports.BehavesAsPanel = undefined;

var _BehavesAsPanel = __webpack_require__(77);

var _BehavesAsPanel2 = _interopRequireDefault(_BehavesAsPanel);

var _Deletable = __webpack_require__(78);

var _Deletable2 = _interopRequireDefault(_Deletable);

var _Filterable = __webpack_require__(79);

var _Filterable2 = _interopRequireDefault(_Filterable);

var _FormField = __webpack_require__(80);

var _FormField2 = _interopRequireDefault(_FormField);

var _HandlesValidationErrors = __webpack_require__(81);

var _HandlesValidationErrors2 = _interopRequireDefault(_HandlesValidationErrors);

var _HasCards = __webpack_require__(82);

var _HasCards2 = _interopRequireDefault(_HasCards);

var _InteractsWithDates = __webpack_require__(83);

var _InteractsWithDates2 = _interopRequireDefault(_InteractsWithDates);

var _InteractsWithQueryString = __webpack_require__(84);

var _InteractsWithQueryString2 = _interopRequireDefault(_InteractsWithQueryString);

var _InteractsWithResourceInformation = __webpack_require__(85);

var _InteractsWithResourceInformation2 = _interopRequireDefault(_InteractsWithResourceInformation);

var _Paginatable = __webpack_require__(86);

var _Paginatable2 = _interopRequireDefault(_Paginatable);

var _PerformsSearches = __webpack_require__(88);

var _PerformsSearches2 = _interopRequireDefault(_PerformsSearches);

var _PerPageable = __webpack_require__(87);

var _PerPageable2 = _interopRequireDefault(_PerPageable);

var _TogglesTrashed = __webpack_require__(89);

var _TogglesTrashed2 = _interopRequireDefault(_TogglesTrashed);

var _inflectorJs = __webpack_require__(93);

var _inflectorJs2 = _interopRequireDefault(_inflectorJs);

var _cardSizes = __webpack_require__(40);

var _cardSizes2 = _interopRequireDefault(_cardSizes);

var _capitalize = __webpack_require__(90);

var _capitalize2 = _interopRequireDefault(_capitalize);

var _minimum = __webpack_require__(91);

var _minimum2 = _interopRequireDefault(_minimum);

var _formBackendValidation = __webpack_require__(41);

var _singularOrPlural = __webpack_require__(92);

var _singularOrPlural2 = _interopRequireDefault(_singularOrPlural);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Util
exports.BehavesAsPanel = _BehavesAsPanel2.default;
exports.Deletable = _Deletable2.default;
exports.Filterable = _Filterable2.default;
exports.FormField = _FormField2.default;
exports.HandlesValidationErrors = _HandlesValidationErrors2.default;
exports.HasCards = _HasCards2.default;
exports.InteractsWithDates = _InteractsWithDates2.default;
exports.InteractsWithQueryString = _InteractsWithQueryString2.default;
exports.InteractsWithResourceInformation = _InteractsWithResourceInformation2.default;
exports.Paginatable = _Paginatable2.default;
exports.PerformsSearches = _PerformsSearches2.default;
exports.PerPageable = _PerPageable2.default;
exports.TogglesTrashed = _TogglesTrashed2.default;
exports.Errors = _formBackendValidation.Errors;
exports.Inflector = _inflectorJs2.default;
exports.Capitalize = _capitalize2.default;
exports.Minimum = _minimum2.default;
exports.SingularOrPlural = _singularOrPlural2.default;
exports.CardSizes = _cardSizes2.default; // Mixins

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(117), __esModule: true };

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _promise = __webpack_require__(48);

var _promise2 = _interopRequireDefault(_promise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (fn) {
  return function () {
    var gen = fn.apply(this, arguments);
    return new _promise2.default(function (resolve, reject) {
      function step(key, arg) {
        try {
          var info = gen[key](arg);
          var value = info.value;
        } catch (error) {
          reject(error);
          return;
        }

        if (info.done) {
          resolve(value);
        } else {
          return _promise2.default.resolve(value).then(function (value) {
            step("next", value);
          }, function (err) {
            step("throw", err);
          });
        }
      }

      return step("next");
    });
  };
};

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(239);


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(15);
var TAG = __webpack_require__(2)('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),
/* 52 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(1).document;
module.exports = document && document.documentElement;


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(15);
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(30);
var $export = __webpack_require__(6);
var redefine = __webpack_require__(138);
var hide = __webpack_require__(7);
var Iterators = __webpack_require__(10);
var $iterCreate = __webpack_require__(126);
var setToStringTag = __webpack_require__(32);
var getPrototypeOf = __webpack_require__(134);
var ITERATOR = __webpack_require__(2)('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(135);
var enumBugKeys = __webpack_require__(52);

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),
/* 57 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return { e: false, v: exec() };
  } catch (e) {
    return { e: true, v: e };
  }
};


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(4);
var isObject = __webpack_require__(9);
var newPromiseCapability = __webpack_require__(31);

module.exports = function (C, x) {
  anObject(C);
  if (isObject(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};


/***/ }),
/* 59 */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(3);
var global = __webpack_require__(1);
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__(30) ? 'pure' : 'global',
  copyright: '© 2018 Denis Pushkarev (zloirock.ru)'
});


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject = __webpack_require__(4);
var aFunction = __webpack_require__(14);
var SPECIES = __webpack_require__(2)('species');
module.exports = function (O, D) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(16);
var invoke = __webpack_require__(123);
var html = __webpack_require__(53);
var cel = __webpack_require__(28);
var global = __webpack_require__(1);
var process = global.process;
var setTask = global.setImmediate;
var clearTask = global.clearImmediate;
var MessageChannel = global.MessageChannel;
var Dispatch = global.Dispatch;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var defer, channel, port;
var run = function () {
  var id = +this;
  // eslint-disable-next-line no-prototype-builtins
  if (queue.hasOwnProperty(id)) {
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};
var listener = function (event) {
  run.call(event.data);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!setTask || !clearTask) {
  setTask = function setImmediate(fn) {
    var args = [];
    var i = 1;
    while (arguments.length > i) args.push(arguments[i++]);
    queue[++counter] = function () {
      // eslint-disable-next-line no-new-func
      invoke(typeof fn == 'function' ? fn : Function(fn), args);
    };
    defer(counter);
    return counter;
  };
  clearTask = function clearImmediate(id) {
    delete queue[id];
  };
  // Node.js 0.8-
  if (__webpack_require__(15)(process) == 'process') {
    defer = function (id) {
      process.nextTick(ctx(run, id, 1));
    };
  // Sphere (JS game engine) Dispatch API
  } else if (Dispatch && Dispatch.now) {
    defer = function (id) {
      Dispatch.now(ctx(run, id, 1));
    };
  // Browsers with MessageChannel, includes WebWorkers
  } else if (MessageChannel) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = listener;
    defer = ctx(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts) {
    defer = function (id) {
      global.postMessage(id + '', '*');
    };
    global.addEventListener('message', listener, false);
  // IE8-
  } else if (ONREADYSTATECHANGE in cel('script')) {
    defer = function (id) {
      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function () {
        html.removeChild(this);
        run.call(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function (id) {
      setTimeout(ctx(run, id, 1), 0);
    };
  }
}
module.exports = {
  set: setTask,
  clear: clearTask
};


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(34);
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(27);
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),
/* 65 */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Errors = function () {
    /**
     * Create a new Errors instance.
     */
    function Errors() {
        var errors = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        _classCallCheck(this, Errors);

        this.record(errors);
    }

    /**
     * Get all the errors.
     *
     * @return {object}
     */


    _createClass(Errors, [{
        key: "all",
        value: function all() {
            return this.errors;
        }

        /**
         * Determine if any errors exists for the given field or object.
         *
         * @param {string} field
         */

    }, {
        key: "has",
        value: function has(field) {
            var hasError = this.errors.hasOwnProperty(field);

            if (!hasError) {
                var errors = Object.keys(this.errors).filter(function (e) {
                    return e.startsWith(field + ".") || e.startsWith(field + "[");
                });

                hasError = errors.length > 0;
            }

            return hasError;
        }
    }, {
        key: "first",
        value: function first(field) {
            return this.get(field)[0];
        }
    }, {
        key: "get",
        value: function get(field) {
            return this.errors[field] || [];
        }

        /**
         * Determine if we have any errors.
         */

    }, {
        key: "any",
        value: function any() {
            return Object.keys(this.errors).length > 0;
        }

        /**
         * Record the new errors.
         *
         * @param {object} errors
         */

    }, {
        key: "record",
        value: function record() {
            var errors = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

            this.errors = errors;
        }

        /**
         * Clear a specific field, object or all error fields.
         *
         * @param {string|null} field
         */

    }, {
        key: "clear",
        value: function clear(field) {
            if (!field) {
                this.errors = {};

                return;
            }

            var errors = Object.assign({}, this.errors);

            Object.keys(errors).filter(function (e) {
                return e === field || e.startsWith(field + ".") || e.startsWith(field + "[");
            }).forEach(function (e) {
                return delete errors[e];
            });

            this.errors = errors;
        }
    }]);

    return Errors;
}();

exports.default = Errors;

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

var baseTimes = __webpack_require__(177),
    isArguments = __webpack_require__(229),
    isArray = __webpack_require__(13),
    isBuffer = __webpack_require__(230),
    isIndex = __webpack_require__(70),
    isTypedArray = __webpack_require__(231);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  var isArr = isArray(value),
      isArg = !isArr && isArguments(value),
      isBuff = !isArr && !isArg && isBuffer(value),
      isType = !isArr && !isArg && !isBuff && isTypedArray(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? baseTimes(value.length, String) : [],
      length = result.length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) &&
        !(skipIndexes && (
           // Safari 9 has enumerable `arguments.length` in strict mode.
           key == 'length' ||
           // Node.js 0.10 has enumerable non-index properties on buffers.
           (isBuff && (key == 'offset' || key == 'parent')) ||
           // PhantomJS 2 has enumerable non-index properties on typed arrays.
           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
           // Skip index properties.
           isIndex(key, length)
        ))) {
      result.push(key);
    }
  }
  return result;
}

module.exports = arrayLikeKeys;


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

module.exports = freeGlobal;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(241)))

/***/ }),
/* 69 */
/***/ (function(module, exports) {

/** Used to compose unicode character classes. */
var rsAstralRange = '\\ud800-\\udfff',
    rsComboMarksRange = '\\u0300-\\u036f',
    reComboHalfMarksRange = '\\ufe20-\\ufe2f',
    rsComboSymbolsRange = '\\u20d0-\\u20ff',
    rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange,
    rsVarRange = '\\ufe0e\\ufe0f';

/** Used to compose unicode capture groups. */
var rsZWJ = '\\u200d';

/** Used to detect strings with [zero-width joiners or code points from the astral planes](http://eev.ee/blog/2015/09/12/dark-corners-of-unicode/). */
var reHasUnicode = RegExp('[' + rsZWJ + rsAstralRange  + rsComboRange + rsVarRange + ']');

/**
 * Checks if `string` contains Unicode symbols.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {boolean} Returns `true` if a symbol is found, else `false`.
 */
function hasUnicode(string) {
  return reHasUnicode.test(string);
}

module.exports = hasUnicode;


/***/ }),
/* 70 */
/***/ (function(module, exports) {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  var type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER : length;

  return !!length &&
    (type == 'number' ||
      (type != 'symbol' && reIsUint.test(value))) &&
        (value > -1 && value % 1 == 0 && value < length);
}

module.exports = isIndex;


/***/ }),
/* 71 */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

  return value === proto;
}

module.exports = isPrototype;


/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(19),
    isObject = __webpack_require__(8);

/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!isObject(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

module.exports = isFunction;


/***/ }),
/* 73 */
/***/ (function(module, exports) {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

module.exports = isLength;


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

var baseToString = __webpack_require__(178);

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString(value) {
  return value == null ? '' : baseToString(value);
}

module.exports = toString;


/***/ }),
/* 75 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 76 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  props: ['resourceName', 'resourceId', 'resource', 'panel'],

  methods: {
    /**
     * Handle the actionExecuted event and pass it up the chain.
     */
    actionExecuted: function actionExecuted() {
      this.$emit('actionExecuted');
    }
  }
};

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(114);

var _extends3 = _interopRequireDefault(_extends2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  methods: {
    /**
     * Open the delete menu modal.
     */
    openDeleteModal: function openDeleteModal() {
      this.deleteModalOpen = true;
    },


    /**
     * Delete the given resources.
     */
    deleteResources: function deleteResources(resources) {
      var _this = this;

      var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

      if (this.viaManyToMany) {
        return this.detachResources(resources);
      }

      return Nova.request({
        url: '/nova-api/' + this.resourceName,
        method: 'delete',
        params: (0, _extends3.default)({}, this.queryString, { resources: mapResources(resources) })
      }).then(callback ? callback : function () {
        _this.deleteModalOpen = false;
        _this.getResources();
      });
    },


    /**
     * Delete the selected resources.
     */
    deleteSelectedResources: function deleteSelectedResources() {
      this.deleteResources(this.selectedResources);
    },


    /**
     * Delete all of the matching resources.
     */
    deleteAllMatchingResources: function deleteAllMatchingResources() {
      var _this2 = this;

      if (this.viaManyToMany) {
        return this.detachAllMatchingResources();
      }

      return Nova.request({
        url: this.deleteAllMatchingResourcesEndpoint,
        method: 'delete',
        params: (0, _extends3.default)({}, this.queryString, { resources: 'all' })
      }).then(function () {
        _this2.deleteModalOpen = false;
        _this2.getResources();
      });
    },


    /**
     * Detach the given resources.
     */
    detachResources: function detachResources(resources) {
      var _this3 = this;

      return Nova.request({
        url: '/nova-api/' + this.resourceName + '/detach',
        method: 'delete',
        params: (0, _extends3.default)({}, this.queryString, { resources: mapResources(resources) })
      }).then(function () {
        _this3.deleteModalOpen = false;
        _this3.getResources();
      });
    },


    /**
     * Detach all of the matching resources.
     */
    detachAllMatchingResources: function detachAllMatchingResources() {
      var _this4 = this;

      return Nova.request({
        url: '/nova-api/' + this.resourceName + '/detach',
        method: 'delete',
        params: (0, _extends3.default)({}, this.queryString, { resources: 'all' })
      }).then(function () {
        _this4.deleteModalOpen = false;
        _this4.getResources();
      });
    },


    /**
     * Force delete the given resources.
     */
    forceDeleteResources: function forceDeleteResources(resources) {
      var _this5 = this;

      var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

      return Nova.request({
        url: '/nova-api/' + this.resourceName + '/force',
        method: 'delete',
        params: (0, _extends3.default)({}, this.queryString, { resources: mapResources(resources) })
      }).then(callback ? callback : function () {
        _this5.deleteModalOpen = false;

        _this5.getResources();
      });
    },


    /**
     * Force delete the selected resources.
     */
    forceDeleteSelectedResources: function forceDeleteSelectedResources() {
      this.forceDeleteResources(this.selectedResources);
    },


    /**
     * Force delete all of the matching resources.
     */
    forceDeleteAllMatchingResources: function forceDeleteAllMatchingResources() {
      var _this6 = this;

      return Nova.request({
        url: this.forceDeleteSelectedResourcesEndpoint,
        method: 'delete',
        params: (0, _extends3.default)({}, this.queryString, { resources: 'all' })
      }).then(function () {
        _this6.deleteModalOpen = false;
        _this6.getResources();
      });
    },


    /**
     * Restore the given resources.
     */
    restoreResources: function restoreResources(resources) {
      var _this7 = this;

      var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

      return Nova.request({
        url: '/nova-api/' + this.resourceName + '/restore',
        method: 'put',
        params: (0, _extends3.default)({}, this.queryString, { resources: mapResources(resources) })
      }).then(callback ? callback : function () {
        _this7.restoreModalOpen = false;

        _this7.getResources();
      });
    },


    /**
     * Restore the selected resources.
     */
    restoreSelectedResources: function restoreSelectedResources() {
      this.restoreResources(this.selectedResources);
    },


    /**
     * Restore all of the matching resources.
     */
    restoreAllMatchingResources: function restoreAllMatchingResources() {
      var _this8 = this;

      return Nova.request({
        url: this.restoreAllMatchingResourcesEndpoint,
        method: 'put',
        params: (0, _extends3.default)({}, this.queryString, { resources: 'all' })
      }).then(function () {
        _this8.restoreModalOpen = false;
        _this8.getResources();
      });
    }
  },

  computed: {
    /**
     * Get the delete all matching resources endpoint.
     */
    deleteAllMatchingResourcesEndpoint: function deleteAllMatchingResourcesEndpoint() {
      if (this.lens) {
        return '/nova-api/' + this.resourceName + '/lens/' + this.lens;
      }

      return '/nova-api/' + this.resourceName;
    },


    /**
     * Get the force delete all of the matching resources endpoint.
     */
    forceDeleteSelectedResourcesEndpoint: function forceDeleteSelectedResourcesEndpoint() {
      if (this.lens) {
        return '/nova-api/' + this.resourceName + '/lens/' + this.lens + '/force';
      }

      return '/nova-api/' + this.resourceName + '/force';
    },


    /**
     * Get the restore all of the matching resources endpoint.
     */
    restoreAllMatchingResourcesEndpoint: function restoreAllMatchingResourcesEndpoint() {
      if (this.lens) {
        return '/nova-api/' + this.resourceName + '/lens/' + this.lens + '/restore';
      }

      return '/nova-api/' + this.resourceName + '/restore';
    },


    /**
     * Get the query string for a deletable resource request.
     */
    queryString: function queryString() {
      return {
        search: this.currentSearch,
        filters: this.encodedFilters,
        trashed: this.currentTrashed,
        viaResource: this.viaResource,
        viaResourceId: this.viaResourceId,
        viaRelationship: this.viaRelationship
      };
    }
  }
};


function mapResources(resources) {
  return _.map(resources, function (resource) {
    return resource.id.value;
  });
}

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(50);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _defineProperty2 = __webpack_require__(26);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _asyncToGenerator2 = __webpack_require__(49);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _each = __webpack_require__(226);

var _each2 = _interopRequireDefault(_each);

var _get = __webpack_require__(228);

var _get2 = _interopRequireDefault(_get);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  methods: {
    /**
     * Clear filters and reset the resource table
     */
    clearSelectedFilters: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(lens) {
        var _updateQueryString;

        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!lens) {
                  _context.next = 5;
                  break;
                }

                _context.next = 3;
                return this.$store.dispatch(this.resourceName + '/resetFilterState', {
                  resourceName: this.resourceName,
                  lens: lens
                });

              case 3:
                _context.next = 7;
                break;

              case 5:
                _context.next = 7;
                return this.$store.dispatch(this.resourceName + '/resetFilterState', {
                  resourceName: this.resourceName
                });

              case 7:

                this.updateQueryString((_updateQueryString = {}, (0, _defineProperty3.default)(_updateQueryString, this.pageParameter, 1), (0, _defineProperty3.default)(_updateQueryString, this.filterParameter, ''), _updateQueryString));

              case 8:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function clearSelectedFilters(_x) {
        return _ref.apply(this, arguments);
      }

      return clearSelectedFilters;
    }(),


    /**
     * Handle a filter state change.
     */
    filterChanged: function filterChanged() {
      var _updateQueryString2;

      this.updateQueryString((_updateQueryString2 = {}, (0, _defineProperty3.default)(_updateQueryString2, this.pageParameter, 1), (0, _defineProperty3.default)(_updateQueryString2, this.filterParameter, this.$store.getters[this.resourceName + '/currentEncodedFilters']), _updateQueryString2));
    },


    /**
     * Set up filters for the current view
     */
    initializeFilters: function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(lens) {
        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                // Clear out the filters from the store first
                this.$store.commit(this.resourceName + '/clearFilters');

                _context2.next = 3;
                return this.$store.dispatch(this.resourceName + '/fetchFilters', {
                  resourceName: this.resourceName,
                  lens: lens
                });

              case 3:
                _context2.next = 5;
                return this.initializeState(lens);

              case 5:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function initializeFilters(_x2) {
        return _ref2.apply(this, arguments);
      }

      return initializeFilters;
    }(),


    /**
     * Initialize the filter state
     */
    initializeState: function () {
      var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(lens) {
        return _regenerator2.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                if (!this.initialEncodedFilters) {
                  _context3.next = 5;
                  break;
                }

                _context3.next = 3;
                return this.$store.dispatch(this.resourceName + '/initializeCurrentFilterValuesFromQueryString', this.initialEncodedFilters);

              case 3:
                _context3.next = 7;
                break;

              case 5:
                _context3.next = 7;
                return this.$store.dispatch(this.resourceName + '/resetFilterState', {
                  resourceName: this.resourceName,
                  lens: lens
                });

              case 7:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function initializeState(_x3) {
        return _ref3.apply(this, arguments);
      }

      return initializeState;
    }()
  },

  computed: {
    /**
     * Get the name of the filter query string variable.
     */
    filterParameter: function filterParameter() {
      return this.resourceName + '_filter';
    }
  }
};

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  props: {
    resourceName: {},
    field: {}
  },

  data: function data() {
    return {
      value: ''
    };
  },

  mounted: function mounted() {
    var _this = this;

    this.setInitialValue();

    // Add a default fill method for the field
    this.field.fill = this.fill;

    // Register a global event for setting the field's value
    Nova.$on(this.field.attribute + '-value', function (value) {
      _this.value = value;
    });
  },
  destroyed: function destroyed() {
    Nova.$off(this.field.attribute + '-value');
  },


  methods: {
    /*
     * Set the initial value for the field
     */
    setInitialValue: function setInitialValue() {
      this.value = !(this.field.value === undefined || this.field.value === null) ? this.field.value : '';
    },


    /**
     * Provide a function that fills a passed FormData object with the
     * field's internal value attribute
     */
    fill: function fill(formData) {
      formData.append(this.field.attribute, String(this.value));
    },


    /**
     * Update the field's internal value
     */
    handleChange: function handleChange(value) {
      this.value = value;
    }
  },

  computed: {
    /**
     * Determine if the field is in readonly mode
     */
    isReadonly: function isReadonly() {
      return this.field.readonly || _.get(this.field, 'extraAttributes.readonly');
    }
  }
};

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _formBackendValidation = __webpack_require__(41);

exports.default = {
  props: {
    errors: {
      default: function _default() {
        return new _formBackendValidation.Errors();
      }
    }
  },

  data: function data() {
    return {
      errorClass: 'border-danger'
    };
  },

  computed: {
    errorClasses: function errorClasses() {
      return this.hasError ? [this.errorClass] : [];
    },
    fieldAttribute: function fieldAttribute() {
      return this.field.attribute;
    },
    hasError: function hasError() {
      return this.errors.has(this.fieldAttribute);
    },
    firstError: function firstError() {
      if (this.hasError) {
        return this.errors.first(this.fieldAttribute);
      }
    }
  }
};

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = __webpack_require__(50);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(49);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _cardSizes = __webpack_require__(40);

var _cardSizes2 = _interopRequireDefault(_cardSizes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    props: {
        loadCards: {
            type: Boolean,
            default: true
        }
    },

    data: function data() {
        return { cards: [] };
    },

    /**
     * Fetch all of the metrics panels for this view
     */
    created: function created() {
        this.fetchCards();
    },


    watch: {
        cardsEndpoint: function cardsEndpoint() {
            this.fetchCards();
        }
    },

    methods: {
        fetchCards: function () {
            var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
                var _ref2, cards;

                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                if (!this.loadCards) {
                                    _context.next = 6;
                                    break;
                                }

                                _context.next = 3;
                                return Nova.request().get(this.cardsEndpoint, {
                                    params: this.extraCardParams
                                });

                            case 3:
                                _ref2 = _context.sent;
                                cards = _ref2.data;

                                this.cards = cards;

                            case 6:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function fetchCards() {
                return _ref.apply(this, arguments);
            }

            return fetchCards;
        }()
    },

    computed: {
        /**
         * Determine whether we have cards to show on the Dashboard
         */
        shouldShowCards: function shouldShowCards() {
            return this.cards.length > 0;
        },


        /**
         * Return the small cards used for the Dashboard
         */
        smallCards: function smallCards() {
            return _.filter(this.cards, function (c) {
                return _cardSizes2.default.indexOf(c.width) !== -1;
            });
        },


        /**
         * Return the full-width cards used for the Dashboard
         */
        largeCards: function largeCards() {
            return _.filter(this.cards, function (c) {
                return c.width == 'full';
            });
        },


        /**
         * Get the extra card params to pass to the endpoint.
         */
        extraCardParams: function extraCardParams() {
            return null;
        }
    }
};

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  methods: {
    /**
     * Convert the given localized date time string to the application's timezone.
     */
    toAppTimezone: function toAppTimezone(value) {
      return value ? moment.tz(value, this.userTimezone).clone().tz(Nova.config.timezone).format('YYYY-MM-DD HH:mm:ss') : value;
    },


    /**
     * Convert the given application timezone date time string to the local timezone.
     */
    fromAppTimezone: function fromAppTimezone(value) {
      if (!value) {
        return value;
      }

      return moment.tz(value, Nova.config.timezone).clone().tz(this.userTimezone).format('YYYY-MM-DD HH:mm:ss');
    },


    /**
     * Get the localized date time for the given field.
     */
    localizeDateTimeField: function localizeDateTimeField(field) {
      if (!field.value) {
        return field.value;
      }

      var localized = moment.tz(field.value, Nova.config.timezone).clone().tz(this.userTimezone);

      if (field.format) {
        return localized.format(field.format);
      }

      return this.usesTwelveHourTime ? localized.format('YYYY-MM-DD h:mm:ss A') : localized.format('YYYY-MM-DD HH:mm:ss');
    },


    /**
     * Get the localized date for the given field.
     */
    localizeDateField: function localizeDateField(field) {
      if (!field.value) {
        return field.value;
      }

      var localized = moment.tz(field.value, Nova.config.timezone).clone().tz(this.userTimezone);

      if (field.format) {
        return localized.format(field.format);
      }

      return localized.format('YYYY-MM-DD');
    }
  },

  computed: {
    /**
     * Get the user's local timezone.
     */
    userTimezone: function userTimezone() {
      return Nova.config.userTimezone ? Nova.config.userTimezone : moment.tz.guess();
    },


    /**
     * Determine if the user is used to 12 hour time.
     */
    usesTwelveHourTime: function usesTwelveHourTime() {
      return _.endsWith(new Date().toLocaleString(), 'AM') || _.endsWith(new Date().toLocaleString(), 'PM');
    }
  }
};

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _defaults = __webpack_require__(225);

var _defaults2 = _interopRequireDefault(_defaults);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    methods: {
        /**
         * Update the given query string values.
         */
        updateQueryString: function updateQueryString(value) {
            this.$router.push({ query: (0, _defaults2.default)(value, this.$route.query) });
        }
    }
};

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  computed: {
    /**
     * Get the resource information object for the current resource.
     */
    resourceInformation: function resourceInformation() {
      var _this = this;

      return _.find(Nova.config.resources, function (resource) {
        return resource.uriKey == _this.resourceName;
      });
    },


    /**
     * Get the resource information object for the current resource.
     */
    viaResourceInformation: function viaResourceInformation() {
      var _this2 = this;

      if (!this.viaResource) {
        return;
      }

      return _.find(Nova.config.resources, function (resource) {
        return resource.uriKey == _this2.viaResource;
      });
    },


    /**
     * Determine if the user is authorized to create the current resource.
     */
    authorizedToCreate: function authorizedToCreate() {
      return this.resourceInformation.authorizedToCreate;
    }
  }
};

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = __webpack_require__(26);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  methods: {
    /**
     * Select the previous page.
     */
    selectPreviousPage: function selectPreviousPage() {
      this.updateQueryString((0, _defineProperty3.default)({}, this.pageParameter, this.currentPage - 1));
    },


    /**
     * Select the next page.
     */
    selectNextPage: function selectNextPage() {
      this.updateQueryString((0, _defineProperty3.default)({}, this.pageParameter, this.currentPage + 1));
    }
  },

  computed: {
    /**
     * Get the current page from the query string.
     */
    currentPage: function currentPage() {
      return parseInt(this.$route.query[this.pageParameter] || 1);
    }
  }
};

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = __webpack_require__(26);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  data: function data() {
    return { perPage: 25 };
  },

  methods: {
    /**
     * Sync the per page values from the query string.
     */
    initializePerPageFromQueryString: function initializePerPageFromQueryString() {
      this.perPage = this.currentPerPage;
    },


    /**
     * Update the desired amount of resources per page.
     */
    perPageChanged: function perPageChanged() {
      this.updateQueryString((0, _defineProperty3.default)({}, this.perPageParameter, this.perPage));
    }
  },

  computed: {
    /**
     * Get the current per page value from the query string.
     */
    currentPerPage: function currentPerPage() {
      return this.$route.query[this.perPageParameter] || 25;
    }
  }
};

/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _debounce = __webpack_require__(224);

var _debounce2 = _interopRequireDefault(_debounce);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  data: function data() {
    return {
      search: '',
      selectedResource: '',
      availableResources: []
    };
  },

  methods: {
    /**
     * Set the currently selected resource
     */
    selectResource: function selectResource(resource) {
      this.selectedResource = resource;
    },


    /**
     * Handle the search box being cleared.
     */
    handleSearchCleared: function handleSearchCleared() {
      this.availableResources = [];
    },


    /**
     * Clear the selected resource and availableResources
     */
    clearSelection: function clearSelection() {
      this.selectedResource = '';
      this.availableResources = [];
    },


    /**
     * Perform a search to get the relatable resources.
     */
    performSearch: function performSearch(search) {
      var _this = this;

      this.search = search;

      var trimmedSearch = search.trim();
      // If the user performs an empty search, it will load all the results
      // so let's just set the availableResources to an empty array to avoid
      // loading a huge result set
      if (trimmedSearch == '') {
        this.clearSelection();

        return;
      }

      this.debouncer(function () {
        _this.selectedResource = '';
        _this.getAvailableResources(trimmedSearch);
      }, 500);
    },


    /**
     * Debounce function for the search handler
     */
    debouncer: (0, _debounce2.default)(function (callback) {
      return callback();
    }, 500)
  }
};

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  data: function data() {
    return {
      withTrashed: false
    };
  },

  methods: {
    /**
     * Toggle the trashed state of the search
     */
    toggleWithTrashed: function toggleWithTrashed() {
      this.withTrashed = !this.withTrashed;
    },


    /**
     * Enable searching for trashed resources
     */
    enableWithTrashed: function enableWithTrashed() {
      this.withTrashed = true;
    },


    /**
     * Disable searching for trashed resources
     */
    disableWithTrashed: function disableWithTrashed() {
      this.withTrashed = false;
    }
  }
};

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (string) {
    return (0, _upperFirst2.default)(string);
};

var _upperFirst = __webpack_require__(238);

var _upperFirst2 = _interopRequireDefault(_upperFirst);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _promise = __webpack_require__(48);

var _promise2 = _interopRequireDefault(_promise);

exports.default = function (originalPromise) {
    var delay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;

    return _promise2.default.all([originalPromise, new _promise2.default(function (resolve) {
        setTimeout(function () {
            return resolve();
        }, delay);
    })]).then(function (result) {
        return result[0];
    });
};

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = singularOrPlural;

var _ = __webpack_require__(47);

function singularOrPlural(value, suffix) {
    if (value > 1 || value == 0) return _.Inflector.pluralize(suffix);
    return _.Inflector.singularize(suffix);
}

/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Javascript inflector
 * 
 * @author Dida Nurwanda <didanurwanda@gmail.com>
 * @since 1.0
 */


var _Inflector = {

    uncountableWords : [
        'equipment', 'information', 'rice', 'money', 'species', 'series',
        'fish', 'sheep', 'moose', 'deer', 'news'
    ],

    pluralRules: [
        [new RegExp('(m)an$', 'gi'),                 '$1en'],
        [new RegExp('(pe)rson$', 'gi'),              '$1ople'],
        [new RegExp('(child)$', 'gi'),               '$1ren'],
        [new RegExp('^(ox)$', 'gi'),                 '$1en'],
        [new RegExp('(ax|test)is$', 'gi'),           '$1es'],
        [new RegExp('(octop|vir)us$', 'gi'),         '$1i'],
        [new RegExp('(alias|status)$', 'gi'),        '$1es'],
        [new RegExp('(bu)s$', 'gi'),                 '$1ses'],
        [new RegExp('(buffal|tomat|potat)o$', 'gi'), '$1oes'],
        [new RegExp('([ti])um$', 'gi'),              '$1a'],
        [new RegExp('sis$', 'gi'),                   'ses'],
        [new RegExp('(?:([^f])fe|([lr])f)$', 'gi'),  '$1$2ves'],
        [new RegExp('(hive)$', 'gi'),                '$1s'],
        [new RegExp('([^aeiouy]|qu)y$', 'gi'),       '$1ies'],
        [new RegExp('(x|ch|ss|sh)$', 'gi'),          '$1es'],
        [new RegExp('(matr|vert|ind)ix|ex$', 'gi'),  '$1ices'],
        [new RegExp('([m|l])ouse$', 'gi'),           '$1ice'],
        [new RegExp('(quiz)$', 'gi'),                '$1zes'],
        [new RegExp('s$', 'gi'),                     's'],
        [new RegExp('$', 'gi'),                      's']
    ],

    singularRules: [
        [new RegExp('(m)en$', 'gi'),                                                       '$1an'],
        [new RegExp('(pe)ople$', 'gi'),                                                    '$1rson'],
        [new RegExp('(child)ren$', 'gi'),                                                  '$1'],
        [new RegExp('([ti])a$', 'gi'),                                                     '$1um'],
        [new RegExp('((a)naly|(b)a|(d)iagno|(p)arenthe|(p)rogno|(s)ynop|(t)he)ses$','gi'), '$1$2sis'],
        [new RegExp('(hive)s$', 'gi'),                                                     '$1'],
        [new RegExp('(tive)s$', 'gi'),                                                     '$1'],
        [new RegExp('(curve)s$', 'gi'),                                                    '$1'],
        [new RegExp('([lr])ves$', 'gi'),                                                   '$1f'],
        [new RegExp('([^fo])ves$', 'gi'),                                                  '$1fe'],
        [new RegExp('([^aeiouy]|qu)ies$', 'gi'),                                           '$1y'],
        [new RegExp('(s)eries$', 'gi'),                                                    '$1eries'],
        [new RegExp('(m)ovies$', 'gi'),                                                    '$1ovie'],
        [new RegExp('(x|ch|ss|sh)es$', 'gi'),                                              '$1'],
        [new RegExp('([m|l])ice$', 'gi'),                                                  '$1ouse'],
        [new RegExp('(bus)es$', 'gi'),                                                     '$1'],
        [new RegExp('(o)es$', 'gi'),                                                       '$1'],
        [new RegExp('(shoe)s$', 'gi'),                                                     '$1'],
        [new RegExp('(cris|ax|test)es$', 'gi'),                                            '$1is'],
        [new RegExp('(octop|vir)i$', 'gi'),                                                '$1us'],
        [new RegExp('(alias|status)es$', 'gi'),                                            '$1'],
        [new RegExp('^(ox)en', 'gi'),                                                      '$1'],
        [new RegExp('(vert|ind)ices$', 'gi'),                                              '$1ex'],
        [new RegExp('(matr)ices$', 'gi'),                                                  '$1ix'],
        [new RegExp('(quiz)zes$', 'gi'),                                                   '$1'],
        [new RegExp('s$', 'gi'),                                                           '']
    ],

    nonTitlecasedWords: [
        'and', 'or', 'nor', 'a', 'an', 'the', 'so', 'but', 'to', 'of', 'at',
        'by', 'from', 'into', 'on', 'onto', 'off', 'out', 'in', 'over',
        'with', 'for'
    ],

    idSuffix: new RegExp('(_ids|_id)$', 'g'),
    underbar: new RegExp('_', 'g'),
    spaceOrUnderbar: new RegExp('[\ _]', 'g'),
    uppercase: new RegExp('([A-Z])', 'g'),
    underbarPrefix: new RegExp('^_'),

    applyRules: function(str, rules, skip, override) {
        if (override) {
            str = override;
        } else {
            var ignore = (skip.indexOf(str.toLowerCase()) > -1);
            if (!ignore) {
                for (var x = 0; x < rules.length; x++) {
                    if (str.match(rules[x][0])) {
                        str = str.replace(rules[x][0], rules[x][1]);
                        break;
                    }
                }
            }
        }
        return str;
    },


    /*
    Inflector.pluralize('person')           -> 'people'
    Inflector.pluralize('octopus')          -> 'octopi'
    Inflector.pluralize('Hat')              -> 'Hats'
    Inflector.pluralize('person', 'guys')   -> 'guys'    
    */
    pluralize: function(str, plural) {
        return this.applyRules(
            str,
            this.pluralRules,
            this.uncountableWords,
            plural
        );
    },

    /*
    Inflector.singularize('person')         -> 'person'
    Inflector.singularize('octopi')         -> 'octopus'
    Inflector.singularize('hats')           -> 'hat'
    Inflector.singularize('guys', 'person') -> 'person'
    */
    singularize: function(str, singular) {
        return this.applyRules(
            str,
            this.singularRules,
            this.uncountableWords, 
            singular
        );
    },

    /*
    Inflector.camelize('message_properties')        -> 'MessageProperties'
    Inflector.camelize('message_properties', true)  -> 'messageProperties'
    */
    camelize: function(str, lowFirstLetter) {
       // var str = str.toLowerCase();
        var str_path = str.split('/');
        for (var i = 0; i < str_path.length; i++)
        {
            var str_arr = str_path[i].split('_');
            var initX = ((lowFirstLetter && i + 1 === str_path.length) ? (1) : (0));
            for (var x = initX; x < str_arr.length; x++)
            {
                str_arr[x] = str_arr[x].charAt(0).toUpperCase() + str_arr[x].substring(1);
            }
            str_path[i] = str_arr.join('');
        }
        str = str_path.join('::');

        // fix 
        if (lowFirstLetter === true) {
          var first = str.charAt(0).toLowerCase();
          var last = str.slice(1);
          str = first + last;
        }

        return str;
    },

    /*
    Inflector.underscore('MessageProperties')       -> 'message_properties'
    Inflector.underscore('messageProperties')       -> 'message_properties'
    */
    underscore: function(str) { 
        var str_path = str.split('::');
        for (var i = 0; i < str_path.length; i++)
        {
            str_path[i] = str_path[i].replace(this.uppercase, '_$1');
            str_path[i] = str_path[i].replace(this.underbarPrefix, '');
        }
        str = str_path.join('/').toLowerCase();
        return str;
    },

    /*
    Inflector.humanize('message_properties')        -> 'Message properties'
    Inflector.humanize('message_properties')        -> 'message properties'
    */
    humanize: function(str, lowFirstLetter) {
        var str = str.toLowerCase();
        str = str.replace(this.idSuffix, '');
        str = str.replace(this.underbar, ' ');
        if (!lowFirstLetter)
        {
            str = this.capitalize(str);
        }
        return str;
    },

    /*
    Inflector.capitalize('message_properties')      -> 'Message_properties'
    Inflector.capitalize('message properties')      -> 'Message properties'
    */
    capitalize: function(str) {
        var str = str.toLowerCase();
        str = str.substring(0, 1).toUpperCase() + str.substring(1);
        return str;
    },

    /*
    Inflector.dasherize('message_properties')       -> 'message-properties'
    Inflector.dasherize('message properties')       -> 'message-properties'
    */
    dasherize: function(str) {
        str = str.replace(this.spaceOrUnderbar, '-');
        return str;
    },

    /*
    Inflector.camel2words('message_properties')         -> 'Message Properties'
    Inflector.camel2words('message properties')         -> 'Message Properties'
    Inflactor.camel2words('Message_propertyId', true)   -> 'Message Properties Id'
    */
    camel2words: function(str, allFirstUpper) {
        //var str = str.toLowerCase();
        if (allFirstUpper === true) {
            str = this.camelize(str);
            str = this.underscore(str);
        } else {
            str = str.toLowerCase();
        }

        str = str.replace(this.underbar, ' ');
        var str_arr = str.split(' ');
        for (var x = 0; x < str_arr.length; x++)
        {
            var d = str_arr[x].split('-');
            for (var i = 0; i < d.length; i++)
            {
                if (this.nonTitlecasedWords.indexOf(d[i].toLowerCase()) < 0)
                {
                    d[i] = this.capitalize(d[i]);
                }
            }
            str_arr[x] = d.join('-');
        }
        str = str_arr.join(' ');
        str = str.substring(0, 1).toUpperCase() + str.substring(1);
        return str;
    },

    /*
    Inflector.demodulize('Message::Bus::Properties')    -> 'Properties'
    */
    demodulize: function(str) {
        var str_arr = str.split('::');
        str = str_arr[str_arr.length - 1];
        return str;
    },

    /*
    Inflector.tableize('MessageBusProperty')    -> 'message_bus_properties'
    */
    tableize: function(str) {
        str = this.pluralize(this.underscore(str));
        return str;
    },

    /*
    Inflector.classify('message_bus_properties')    -> 'MessageBusProperty'
    */
    classify: function(str) {
        str = this.singularize(this.camelize(str));
        return str;
    },

    /*
    Inflector.foreignKey('MessageBusProperty')       -> 'message_bus_property_id'
    Inflector.foreignKey('MessageBusProperty', true) -> 'message_bus_propertyid'
    */   
    foreignKey: function(str, dropIdUbar) {
        str = this.underscore(this.demodulize(str)) + ((dropIdUbar) ? ('') : ('_')) + 'id';
        return str;
    },

    /*
    Inflector.ordinalize('the 1 pitch')     -> 'the 1st pitch'
    */
    ordinalize: function(str) {
        var str_arr = str.split(' ');
        for (var x = 0; x < str_arr.length; x++)
        {
            var i = parseInt(str_arr[x]);
            if (i === NaN)
            {
                var ltd = str_arr[x].substring(str_arr[x].length - 2);
                var ld = str_arr[x].substring(str_arr[x].length - 1);
                var suf = "th";
                if (ltd != "11" && ltd != "12" && ltd != "13")
                {
                    if (ld === "1")
                    {
                        suf = "st";
                    }
                    else if (ld === "2")
                    {
                        suf = "nd";
                    }
                    else if (ld === "3")
                    {
                        suf = "rd";
                    }
                }
                str_arr[x] += suf;
            }
        }
        str = str_arr.join(' ');
        return str;
    }
}

if (true) {
    module.exports = _Inflector;
} else if (typeof define === "function" && define.amd) {
    define([], function(){
        return _Inflector;
    });
} else {
    window.Inflector = _Inflector;
}


/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(95);

/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);
var bind = __webpack_require__(46);
var Axios = __webpack_require__(97);
var defaults = __webpack_require__(25);

/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 * @return {Axios} A new instance of Axios
 */
function createInstance(defaultConfig) {
  var context = new Axios(defaultConfig);
  var instance = bind(Axios.prototype.request, context);

  // Copy axios.prototype to instance
  utils.extend(instance, Axios.prototype, context);

  // Copy context to instance
  utils.extend(instance, context);

  return instance;
}

// Create the default instance to be exported
var axios = createInstance(defaults);

// Expose Axios class to allow class inheritance
axios.Axios = Axios;

// Factory for creating new instances
axios.create = function create(instanceConfig) {
  return createInstance(utils.merge(defaults, instanceConfig));
};

// Expose Cancel & CancelToken
axios.Cancel = __webpack_require__(43);
axios.CancelToken = __webpack_require__(96);
axios.isCancel = __webpack_require__(44);

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};
axios.spread = __webpack_require__(111);

module.exports = axios;

// Allow use of default import syntax in TypeScript
module.exports.default = axios;


/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Cancel = __webpack_require__(43);

/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @class
 * @param {Function} executor The executor function.
 */
function CancelToken(executor) {
  if (typeof executor !== 'function') {
    throw new TypeError('executor must be a function.');
  }

  var resolvePromise;
  this.promise = new Promise(function promiseExecutor(resolve) {
    resolvePromise = resolve;
  });

  var token = this;
  executor(function cancel(message) {
    if (token.reason) {
      // Cancellation has already been requested
      return;
    }

    token.reason = new Cancel(message);
    resolvePromise(token.reason);
  });
}

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
CancelToken.prototype.throwIfRequested = function throwIfRequested() {
  if (this.reason) {
    throw this.reason;
  }
};

/**
 * Returns an object that contains a new `CancelToken` and a function that, when called,
 * cancels the `CancelToken`.
 */
CancelToken.source = function source() {
  var cancel;
  var token = new CancelToken(function executor(c) {
    cancel = c;
  });
  return {
    token: token,
    cancel: cancel
  };
};

module.exports = CancelToken;


/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var defaults = __webpack_require__(25);
var utils = __webpack_require__(0);
var InterceptorManager = __webpack_require__(98);
var dispatchRequest = __webpack_require__(99);

/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 */
function Axios(instanceConfig) {
  this.defaults = instanceConfig;
  this.interceptors = {
    request: new InterceptorManager(),
    response: new InterceptorManager()
  };
}

/**
 * Dispatch a request
 *
 * @param {Object} config The config specific for this request (merged with this.defaults)
 */
Axios.prototype.request = function request(config) {
  /*eslint no-param-reassign:0*/
  // Allow for axios('example/url'[, config]) a la fetch API
  if (typeof config === 'string') {
    config = utils.merge({
      url: arguments[0]
    }, arguments[1]);
  }

  config = utils.merge(defaults, {method: 'get'}, this.defaults, config);
  config.method = config.method.toLowerCase();

  // Hook up interceptors middleware
  var chain = [dispatchRequest, undefined];
  var promise = Promise.resolve(config);

  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
    chain.unshift(interceptor.fulfilled, interceptor.rejected);
  });

  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
    chain.push(interceptor.fulfilled, interceptor.rejected);
  });

  while (chain.length) {
    promise = promise.then(chain.shift(), chain.shift());
  }

  return promise;
};

// Provide aliases for supported request methods
utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url
    }));
  };
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, data, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url,
      data: data
    }));
  };
});

module.exports = Axios;


/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

function InterceptorManager() {
  this.handlers = [];
}

/**
 * Add a new interceptor to the stack
 *
 * @param {Function} fulfilled The function to handle `then` for a `Promise`
 * @param {Function} rejected The function to handle `reject` for a `Promise`
 *
 * @return {Number} An ID used to remove interceptor later
 */
InterceptorManager.prototype.use = function use(fulfilled, rejected) {
  this.handlers.push({
    fulfilled: fulfilled,
    rejected: rejected
  });
  return this.handlers.length - 1;
};

/**
 * Remove an interceptor from the stack
 *
 * @param {Number} id The ID that was returned by `use`
 */
InterceptorManager.prototype.eject = function eject(id) {
  if (this.handlers[id]) {
    this.handlers[id] = null;
  }
};

/**
 * Iterate over all the registered interceptors
 *
 * This method is particularly useful for skipping over any
 * interceptors that may have become `null` calling `eject`.
 *
 * @param {Function} fn The function to call for each interceptor
 */
InterceptorManager.prototype.forEach = function forEach(fn) {
  utils.forEach(this.handlers, function forEachHandler(h) {
    if (h !== null) {
      fn(h);
    }
  });
};

module.exports = InterceptorManager;


/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);
var transformData = __webpack_require__(102);
var isCancel = __webpack_require__(44);
var defaults = __webpack_require__(25);
var isAbsoluteURL = __webpack_require__(107);
var combineURLs = __webpack_require__(105);

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }
}

/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 * @returns {Promise} The Promise to be fulfilled
 */
module.exports = function dispatchRequest(config) {
  throwIfCancellationRequested(config);

  // Support baseURL config
  if (config.baseURL && !isAbsoluteURL(config.url)) {
    config.url = combineURLs(config.baseURL, config.url);
  }

  // Ensure headers exist
  config.headers = config.headers || {};

  // Transform request data
  config.data = transformData(
    config.data,
    config.headers,
    config.transformRequest
  );

  // Flatten headers
  config.headers = utils.merge(
    config.headers.common || {},
    config.headers[config.method] || {},
    config.headers || {}
  );

  utils.forEach(
    ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
    function cleanHeaderConfig(method) {
      delete config.headers[method];
    }
  );

  var adapter = config.adapter || defaults.adapter;

  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);

    // Transform response data
    response.data = transformData(
      response.data,
      response.headers,
      config.transformResponse
    );

    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config);

      // Transform response data
      if (reason && reason.response) {
        reason.response.data = transformData(
          reason.response.data,
          reason.response.headers,
          config.transformResponse
        );
      }
    }

    return Promise.reject(reason);
  });
};


/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Update an Error with the specified config, error code, and response.
 *
 * @param {Error} error The error to update.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The error.
 */
module.exports = function enhanceError(error, config, code, request, response) {
  error.config = config;
  if (code) {
    error.code = code;
  }
  error.request = request;
  error.response = response;
  return error;
};


/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var createError = __webpack_require__(45);

/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 */
module.exports = function settle(resolve, reject, response) {
  var validateStatus = response.config.validateStatus;
  // Note: status is not exposed by XDomainRequest
  if (!response.status || !validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(createError(
      'Request failed with status code ' + response.status,
      response.config,
      null,
      response.request,
      response
    ));
  }
};


/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

/**
 * Transform the data for a request or a response
 *
 * @param {Object|String} data The data to be transformed
 * @param {Array} headers The headers for the request or response
 * @param {Array|Function} fns A single function or Array of functions
 * @returns {*} The resulting transformed data
 */
module.exports = function transformData(data, headers, fns) {
  /*eslint no-param-reassign:0*/
  utils.forEach(fns, function transform(fn) {
    data = fn(data, headers);
  });

  return data;
};


/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// btoa polyfill for IE<10 courtesy https://github.com/davidchambers/Base64.js

var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';

function E() {
  this.message = 'String contains an invalid character';
}
E.prototype = new Error;
E.prototype.code = 5;
E.prototype.name = 'InvalidCharacterError';

function btoa(input) {
  var str = String(input);
  var output = '';
  for (
    // initialize result and counter
    var block, charCode, idx = 0, map = chars;
    // if the next str index does not exist:
    //   change the mapping table to "="
    //   check if d has no fractional digits
    str.charAt(idx | 0) || (map = '=', idx % 1);
    // "8 - idx % 1 * 8" generates the sequence 2, 4, 6, 8
    output += map.charAt(63 & block >> 8 - idx % 1 * 8)
  ) {
    charCode = str.charCodeAt(idx += 3 / 4);
    if (charCode > 0xFF) {
      throw new E();
    }
    block = block << 8 | charCode;
  }
  return output;
}

module.exports = btoa;


/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

function encode(val) {
  return encodeURIComponent(val).
    replace(/%40/gi, '@').
    replace(/%3A/gi, ':').
    replace(/%24/g, '$').
    replace(/%2C/gi, ',').
    replace(/%20/g, '+').
    replace(/%5B/gi, '[').
    replace(/%5D/gi, ']');
}

/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @returns {string} The formatted url
 */
module.exports = function buildURL(url, params, paramsSerializer) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }

  var serializedParams;
  if (paramsSerializer) {
    serializedParams = paramsSerializer(params);
  } else if (utils.isURLSearchParams(params)) {
    serializedParams = params.toString();
  } else {
    var parts = [];

    utils.forEach(params, function serialize(val, key) {
      if (val === null || typeof val === 'undefined') {
        return;
      }

      if (utils.isArray(val)) {
        key = key + '[]';
      } else {
        val = [val];
      }

      utils.forEach(val, function parseValue(v) {
        if (utils.isDate(v)) {
          v = v.toISOString();
        } else if (utils.isObject(v)) {
          v = JSON.stringify(v);
        }
        parts.push(encode(key) + '=' + encode(v));
      });
    });

    serializedParams = parts.join('&');
  }

  if (serializedParams) {
    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
};


/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 * @returns {string} The combined URL
 */
module.exports = function combineURLs(baseURL, relativeURL) {
  return relativeURL
    ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '')
    : baseURL;
};


/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs support document.cookie
  (function standardBrowserEnv() {
    return {
      write: function write(name, value, expires, path, domain, secure) {
        var cookie = [];
        cookie.push(name + '=' + encodeURIComponent(value));

        if (utils.isNumber(expires)) {
          cookie.push('expires=' + new Date(expires).toGMTString());
        }

        if (utils.isString(path)) {
          cookie.push('path=' + path);
        }

        if (utils.isString(domain)) {
          cookie.push('domain=' + domain);
        }

        if (secure === true) {
          cookie.push('secure');
        }

        document.cookie = cookie.join('; ');
      },

      read: function read(name) {
        var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
        return (match ? decodeURIComponent(match[3]) : null);
      },

      remove: function remove(name) {
        this.write(name, '', Date.now() - 86400000);
      }
    };
  })() :

  // Non standard browser env (web workers, react-native) lack needed support.
  (function nonStandardBrowserEnv() {
    return {
      write: function write() {},
      read: function read() { return null; },
      remove: function remove() {}
    };
  })()
);


/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */
module.exports = function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
};


/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  (function standardBrowserEnv() {
    var msie = /(msie|trident)/i.test(navigator.userAgent);
    var urlParsingNode = document.createElement('a');
    var originURL;

    /**
    * Parse a URL to discover it's components
    *
    * @param {String} url The URL to be parsed
    * @returns {Object}
    */
    function resolveURL(url) {
      var href = url;

      if (msie) {
        // IE needs attribute set twice to normalize properties
        urlParsingNode.setAttribute('href', href);
        href = urlParsingNode.href;
      }

      urlParsingNode.setAttribute('href', href);

      // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
      return {
        href: urlParsingNode.href,
        protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
        host: urlParsingNode.host,
        search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
        hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
        hostname: urlParsingNode.hostname,
        port: urlParsingNode.port,
        pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
                  urlParsingNode.pathname :
                  '/' + urlParsingNode.pathname
      };
    }

    originURL = resolveURL(window.location.href);

    /**
    * Determine if a URL shares the same origin as the current location
    *
    * @param {String} requestURL The URL to test
    * @returns {boolean} True if URL shares the same origin, otherwise false
    */
    return function isURLSameOrigin(requestURL) {
      var parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
      return (parsed.protocol === originURL.protocol &&
            parsed.host === originURL.host);
    };
  })() :

  // Non standard browser envs (web workers, react-native) lack needed support.
  (function nonStandardBrowserEnv() {
    return function isURLSameOrigin() {
      return true;
    };
  })()
);


/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

module.exports = function normalizeHeaderName(headers, normalizedName) {
  utils.forEach(headers, function processHeader(value, name) {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = value;
      delete headers[name];
    }
  });
};


/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

// Headers whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
var ignoreDuplicateOf = [
  'age', 'authorization', 'content-length', 'content-type', 'etag',
  'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since',
  'last-modified', 'location', 'max-forwards', 'proxy-authorization',
  'referer', 'retry-after', 'user-agent'
];

/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} headers Headers needing to be parsed
 * @returns {Object} Headers parsed into an object
 */
module.exports = function parseHeaders(headers) {
  var parsed = {};
  var key;
  var val;
  var i;

  if (!headers) { return parsed; }

  utils.forEach(headers.split('\n'), function parser(line) {
    i = line.indexOf(':');
    key = utils.trim(line.substr(0, i)).toLowerCase();
    val = utils.trim(line.substr(i + 1));

    if (key) {
      if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
        return;
      }
      if (key === 'set-cookie') {
        parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
      } else {
        parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
      }
    }
  });

  return parsed;
};


/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 * @returns {Function}
 */
module.exports = function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
};


/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(115), __esModule: true };

/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(116), __esModule: true };

/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _assign = __webpack_require__(112);

var _assign2 = _interopRequireDefault(_assign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _assign2.default || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(146);
module.exports = __webpack_require__(3).Object.assign;


/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(147);
var $Object = __webpack_require__(3).Object;
module.exports = function defineProperty(it, key, desc) {
  return $Object.defineProperty(it, key, desc);
};


/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(148);
__webpack_require__(150);
__webpack_require__(153);
__webpack_require__(149);
__webpack_require__(151);
__webpack_require__(152);
module.exports = __webpack_require__(3).Promise;


/***/ }),
/* 118 */
/***/ (function(module, exports) {

module.exports = function () { /* empty */ };


/***/ }),
/* 119 */
/***/ (function(module, exports) {

module.exports = function (it, Constructor, name, forbiddenField) {
  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};


/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(35);
var toLength = __webpack_require__(63);
var toAbsoluteIndex = __webpack_require__(141);
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(16);
var call = __webpack_require__(125);
var isArrayIter = __webpack_require__(124);
var anObject = __webpack_require__(4);
var toLength = __webpack_require__(63);
var getIterFn = __webpack_require__(144);
var BREAK = {};
var RETURN = {};
var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
  var iterFn = ITERATOR ? function () { return iterable; } : getIterFn(iterable);
  var f = ctx(fn, that, entries ? 2 : 1);
  var index = 0;
  var length, step, iterator, result;
  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
  // fast case for arrays with default iterator
  if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {
    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if (result === BREAK || result === RETURN) return result;
  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
    result = call(iterator, f, step.value, entries);
    if (result === BREAK || result === RETURN) return result;
  }
};
exports.BREAK = BREAK;
exports.RETURN = RETURN;


/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(5) && !__webpack_require__(29)(function () {
  return Object.defineProperty(__webpack_require__(28)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 123 */
/***/ (function(module, exports) {

// fast apply, http://jsperf.lnkit.com/fast-apply/5
module.exports = function (fn, args, that) {
  var un = that === undefined;
  switch (args.length) {
    case 0: return un ? fn()
                      : fn.call(that);
    case 1: return un ? fn(args[0])
                      : fn.call(that, args[0]);
    case 2: return un ? fn(args[0], args[1])
                      : fn.call(that, args[0], args[1]);
    case 3: return un ? fn(args[0], args[1], args[2])
                      : fn.call(that, args[0], args[1], args[2]);
    case 4: return un ? fn(args[0], args[1], args[2], args[3])
                      : fn.call(that, args[0], args[1], args[2], args[3]);
  } return fn.apply(that, args);
};


/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__(10);
var ITERATOR = __webpack_require__(2)('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__(4);
module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};


/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(131);
var descriptor = __webpack_require__(59);
var setToStringTag = __webpack_require__(32);
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(7)(IteratorPrototype, __webpack_require__(2)('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR = __webpack_require__(2)('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function () { SAFE_CLOSING = true; };
  // eslint-disable-next-line no-throw-literal
  Array.from(riter, function () { throw 2; });
} catch (e) { /* empty */ }

module.exports = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR]();
    iter.next = function () { return { done: safe = true }; };
    arr[ITERATOR] = function () { return iter; };
    exec(arr);
  } catch (e) { /* empty */ }
  return safe;
};


/***/ }),
/* 128 */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(1);
var macrotask = __webpack_require__(62).set;
var Observer = global.MutationObserver || global.WebKitMutationObserver;
var process = global.process;
var Promise = global.Promise;
var isNode = __webpack_require__(15)(process) == 'process';

module.exports = function () {
  var head, last, notify;

  var flush = function () {
    var parent, fn;
    if (isNode && (parent = process.domain)) parent.exit();
    while (head) {
      fn = head.fn;
      head = head.next;
      try {
        fn();
      } catch (e) {
        if (head) notify();
        else last = undefined;
        throw e;
      }
    } last = undefined;
    if (parent) parent.enter();
  };

  // Node.js
  if (isNode) {
    notify = function () {
      process.nextTick(flush);
    };
  // browsers with MutationObserver, except iOS Safari - https://github.com/zloirock/core-js/issues/339
  } else if (Observer && !(global.navigator && global.navigator.standalone)) {
    var toggle = true;
    var node = document.createTextNode('');
    new Observer(flush).observe(node, { characterData: true }); // eslint-disable-line no-new
    notify = function () {
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if (Promise && Promise.resolve) {
    // Promise.resolve without an argument throws an error in LG WebOS 2
    var promise = Promise.resolve(undefined);
    notify = function () {
      promise.then(flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessag
  // - onreadystatechange
  // - setTimeout
  } else {
    notify = function () {
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(global, flush);
    };
  }

  return function (fn) {
    var task = { fn: fn, next: undefined };
    if (last) last.next = task;
    if (!head) {
      head = task;
      notify();
    } last = task;
  };
};


/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var getKeys = __webpack_require__(56);
var gOPS = __webpack_require__(133);
var pIE = __webpack_require__(136);
var toObject = __webpack_require__(64);
var IObject = __webpack_require__(54);
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(29)(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
  } return T;
} : $assign;


/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(4);
var dPs = __webpack_require__(132);
var enumBugKeys = __webpack_require__(52);
var IE_PROTO = __webpack_require__(33)('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(28)('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(53).appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(11);
var anObject = __webpack_require__(4);
var getKeys = __webpack_require__(56);

module.exports = __webpack_require__(5) ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),
/* 133 */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(17);
var toObject = __webpack_require__(64);
var IE_PROTO = __webpack_require__(33)('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(17);
var toIObject = __webpack_require__(35);
var arrayIndexOf = __webpack_require__(120)(false);
var IE_PROTO = __webpack_require__(33)('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),
/* 136 */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

var hide = __webpack_require__(7);
module.exports = function (target, src, safe) {
  for (var key in src) {
    if (safe && target[key]) target[key] = src[key];
    else hide(target, key, src[key]);
  } return target;
};


/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(7);


/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(1);
var core = __webpack_require__(3);
var dP = __webpack_require__(11);
var DESCRIPTORS = __webpack_require__(5);
var SPECIES = __webpack_require__(2)('species');

module.exports = function (KEY) {
  var C = typeof core[KEY] == 'function' ? core[KEY] : global[KEY];
  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
    configurable: true,
    get: function () { return this; }
  });
};


/***/ }),
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(34);
var defined = __webpack_require__(27);
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),
/* 141 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(34);
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(9);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(1);
var navigator = global.navigator;

module.exports = navigator && navigator.userAgent || '';


/***/ }),
/* 144 */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(51);
var ITERATOR = __webpack_require__(2)('iterator');
var Iterators = __webpack_require__(10);
module.exports = __webpack_require__(3).getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),
/* 145 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(118);
var step = __webpack_require__(128);
var Iterators = __webpack_require__(10);
var toIObject = __webpack_require__(35);

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(55)(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(6);

$export($export.S + $export.F, 'Object', { assign: __webpack_require__(130) });


/***/ }),
/* 147 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(6);
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__(5), 'Object', { defineProperty: __webpack_require__(11).f });


/***/ }),
/* 148 */
/***/ (function(module, exports) {



/***/ }),
/* 149 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(30);
var global = __webpack_require__(1);
var ctx = __webpack_require__(16);
var classof = __webpack_require__(51);
var $export = __webpack_require__(6);
var isObject = __webpack_require__(9);
var aFunction = __webpack_require__(14);
var anInstance = __webpack_require__(119);
var forOf = __webpack_require__(121);
var speciesConstructor = __webpack_require__(61);
var task = __webpack_require__(62).set;
var microtask = __webpack_require__(129)();
var newPromiseCapabilityModule = __webpack_require__(31);
var perform = __webpack_require__(57);
var userAgent = __webpack_require__(143);
var promiseResolve = __webpack_require__(58);
var PROMISE = 'Promise';
var TypeError = global.TypeError;
var process = global.process;
var versions = process && process.versions;
var v8 = versions && versions.v8 || '';
var $Promise = global[PROMISE];
var isNode = classof(process) == 'process';
var empty = function () { /* empty */ };
var Internal, newGenericPromiseCapability, OwnPromiseCapability, Wrapper;
var newPromiseCapability = newGenericPromiseCapability = newPromiseCapabilityModule.f;

var USE_NATIVE = !!function () {
  try {
    // correct subclassing with @@species support
    var promise = $Promise.resolve(1);
    var FakePromise = (promise.constructor = {})[__webpack_require__(2)('species')] = function (exec) {
      exec(empty, empty);
    };
    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    return (isNode || typeof PromiseRejectionEvent == 'function')
      && promise.then(empty) instanceof FakePromise
      // v8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
      // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
      // we can't detect it synchronously, so just check versions
      && v8.indexOf('6.6') !== 0
      && userAgent.indexOf('Chrome/66') === -1;
  } catch (e) { /* empty */ }
}();

// helpers
var isThenable = function (it) {
  var then;
  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};
var notify = function (promise, isReject) {
  if (promise._n) return;
  promise._n = true;
  var chain = promise._c;
  microtask(function () {
    var value = promise._v;
    var ok = promise._s == 1;
    var i = 0;
    var run = function (reaction) {
      var handler = ok ? reaction.ok : reaction.fail;
      var resolve = reaction.resolve;
      var reject = reaction.reject;
      var domain = reaction.domain;
      var result, then, exited;
      try {
        if (handler) {
          if (!ok) {
            if (promise._h == 2) onHandleUnhandled(promise);
            promise._h = 1;
          }
          if (handler === true) result = value;
          else {
            if (domain) domain.enter();
            result = handler(value); // may throw
            if (domain) {
              domain.exit();
              exited = true;
            }
          }
          if (result === reaction.promise) {
            reject(TypeError('Promise-chain cycle'));
          } else if (then = isThenable(result)) {
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch (e) {
        if (domain && !exited) domain.exit();
        reject(e);
      }
    };
    while (chain.length > i) run(chain[i++]); // variable length - can't use forEach
    promise._c = [];
    promise._n = false;
    if (isReject && !promise._h) onUnhandled(promise);
  });
};
var onUnhandled = function (promise) {
  task.call(global, function () {
    var value = promise._v;
    var unhandled = isUnhandled(promise);
    var result, handler, console;
    if (unhandled) {
      result = perform(function () {
        if (isNode) {
          process.emit('unhandledRejection', value, promise);
        } else if (handler = global.onunhandledrejection) {
          handler({ promise: promise, reason: value });
        } else if ((console = global.console) && console.error) {
          console.error('Unhandled promise rejection', value);
        }
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
    } promise._a = undefined;
    if (unhandled && result.e) throw result.v;
  });
};
var isUnhandled = function (promise) {
  return promise._h !== 1 && (promise._a || promise._c).length === 0;
};
var onHandleUnhandled = function (promise) {
  task.call(global, function () {
    var handler;
    if (isNode) {
      process.emit('rejectionHandled', promise);
    } else if (handler = global.onrejectionhandled) {
      handler({ promise: promise, reason: promise._v });
    }
  });
};
var $reject = function (value) {
  var promise = this;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  promise._v = value;
  promise._s = 2;
  if (!promise._a) promise._a = promise._c.slice();
  notify(promise, true);
};
var $resolve = function (value) {
  var promise = this;
  var then;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  try {
    if (promise === value) throw TypeError("Promise can't be resolved itself");
    if (then = isThenable(value)) {
      microtask(function () {
        var wrapper = { _w: promise, _d: false }; // wrap
        try {
          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
        } catch (e) {
          $reject.call(wrapper, e);
        }
      });
    } else {
      promise._v = value;
      promise._s = 1;
      notify(promise, false);
    }
  } catch (e) {
    $reject.call({ _w: promise, _d: false }, e); // wrap
  }
};

// constructor polyfill
if (!USE_NATIVE) {
  // 25.4.3.1 Promise(executor)
  $Promise = function Promise(executor) {
    anInstance(this, $Promise, PROMISE, '_h');
    aFunction(executor);
    Internal.call(this);
    try {
      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
    } catch (err) {
      $reject.call(this, err);
    }
  };
  // eslint-disable-next-line no-unused-vars
  Internal = function Promise(executor) {
    this._c = [];             // <- awaiting reactions
    this._a = undefined;      // <- checked in isUnhandled reactions
    this._s = 0;              // <- state
    this._d = false;          // <- done
    this._v = undefined;      // <- value
    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
    this._n = false;          // <- notify
  };
  Internal.prototype = __webpack_require__(137)($Promise.prototype, {
    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
    then: function then(onFulfilled, onRejected) {
      var reaction = newPromiseCapability(speciesConstructor(this, $Promise));
      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail = typeof onRejected == 'function' && onRejected;
      reaction.domain = isNode ? process.domain : undefined;
      this._c.push(reaction);
      if (this._a) this._a.push(reaction);
      if (this._s) notify(this, false);
      return reaction.promise;
    },
    // 25.4.5.1 Promise.prototype.catch(onRejected)
    'catch': function (onRejected) {
      return this.then(undefined, onRejected);
    }
  });
  OwnPromiseCapability = function () {
    var promise = new Internal();
    this.promise = promise;
    this.resolve = ctx($resolve, promise, 1);
    this.reject = ctx($reject, promise, 1);
  };
  newPromiseCapabilityModule.f = newPromiseCapability = function (C) {
    return C === $Promise || C === Wrapper
      ? new OwnPromiseCapability(C)
      : newGenericPromiseCapability(C);
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Promise: $Promise });
__webpack_require__(32)($Promise, PROMISE);
__webpack_require__(139)(PROMISE);
Wrapper = __webpack_require__(3)[PROMISE];

// statics
$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
  // 25.4.4.5 Promise.reject(r)
  reject: function reject(r) {
    var capability = newPromiseCapability(this);
    var $$reject = capability.reject;
    $$reject(r);
    return capability.promise;
  }
});
$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
  // 25.4.4.6 Promise.resolve(x)
  resolve: function resolve(x) {
    return promiseResolve(LIBRARY && this === Wrapper ? $Promise : this, x);
  }
});
$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(127)(function (iter) {
  $Promise.all(iter)['catch'](empty);
})), PROMISE, {
  // 25.4.4.1 Promise.all(iterable)
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var values = [];
      var index = 0;
      var remaining = 1;
      forOf(iterable, false, function (promise) {
        var $index = index++;
        var alreadyCalled = false;
        values.push(undefined);
        remaining++;
        C.resolve(promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[$index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if (result.e) reject(result.v);
    return capability.promise;
  },
  // 25.4.4.4 Promise.race(iterable)
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var reject = capability.reject;
    var result = perform(function () {
      forOf(iterable, false, function (promise) {
        C.resolve(promise).then(capability.resolve, reject);
      });
    });
    if (result.e) reject(result.v);
    return capability.promise;
  }
});


/***/ }),
/* 150 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__(140)(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(55)(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),
/* 151 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// https://github.com/tc39/proposal-promise-finally

var $export = __webpack_require__(6);
var core = __webpack_require__(3);
var global = __webpack_require__(1);
var speciesConstructor = __webpack_require__(61);
var promiseResolve = __webpack_require__(58);

$export($export.P + $export.R, 'Promise', { 'finally': function (onFinally) {
  var C = speciesConstructor(this, core.Promise || global.Promise);
  var isFunction = typeof onFinally == 'function';
  return this.then(
    isFunction ? function (x) {
      return promiseResolve(C, onFinally()).then(function () { return x; });
    } : onFinally,
    isFunction ? function (e) {
      return promiseResolve(C, onFinally()).then(function () { throw e; });
    } : onFinally
  );
} });


/***/ }),
/* 152 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/tc39/proposal-promise-try
var $export = __webpack_require__(6);
var newPromiseCapability = __webpack_require__(31);
var perform = __webpack_require__(57);

$export($export.S, 'Promise', { 'try': function (callbackfn) {
  var promiseCapability = newPromiseCapability.f(this);
  var result = perform(callbackfn);
  (result.e ? promiseCapability.reject : promiseCapability.resolve)(result.v);
  return promiseCapability.promise;
} });


/***/ }),
/* 153 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(145);
var global = __webpack_require__(1);
var hide = __webpack_require__(7);
var Iterators = __webpack_require__(10);
var TO_STRING_TAG = __webpack_require__(2)('toStringTag');

var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
  'TextTrackList,TouchList').split(',');

for (var i = 0; i < DOMIterables.length; i++) {
  var NAME = DOMIterables[i];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}


/***/ }),
/* 154 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Errors = __webpack_require__(66);

var _Errors2 = _interopRequireDefault(_Errors);

var _util = __webpack_require__(155);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Form = function () {
    /**
     * Create a new Form instance.
     *
     * @param {object} data
     * @param {object} options
     */
    function Form() {
        var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        _classCallCheck(this, Form);

        this.processing = false;
        this.successful = false;

        this.withData(data).withOptions(options).withErrors({});
    }

    _createClass(Form, [{
        key: 'withData',
        value: function withData(data) {
            if ((0, _util.isArray)(data)) {
                data = data.reduce(function (carry, element) {
                    carry[element] = '';
                    return carry;
                }, {});
            }

            this.setInitialValues(data);

            this.errors = new _Errors2.default();
            this.processing = false;
            this.successful = false;

            for (var field in data) {
                (0, _util.guardAgainstReservedFieldName)(field);

                this[field] = data[field];
            }

            return this;
        }
    }, {
        key: 'withErrors',
        value: function withErrors(errors) {
            this.errors = new _Errors2.default(errors);

            return this;
        }
    }, {
        key: 'withOptions',
        value: function withOptions(options) {
            this.__options = {
                resetOnSuccess: true
            };

            if (options.hasOwnProperty('resetOnSuccess')) {
                this.__options.resetOnSuccess = options.resetOnSuccess;
            }

            if (options.hasOwnProperty('onSuccess')) {
                this.onSuccess = options.onSuccess;
            }

            if (options.hasOwnProperty('onFail')) {
                this.onFail = options.onFail;
            }

            this.__http = options.http || window.axios || __webpack_require__(94);

            if (!this.__http) {
                throw new Error('No http library provided. Either pass an http option, or install axios.');
            }

            return this;
        }

        /**
         * Fetch all relevant data for the form.
         */

    }, {
        key: 'data',
        value: function data() {
            var data = {};

            for (var property in this.initial) {
                data[property] = this[property];
            }

            return data;
        }

        /**
         * Fetch specific data for the form.
         *
         * @param {array} fields
         * @return {object}
         */

    }, {
        key: 'only',
        value: function only(fields) {
            var _this = this;

            return fields.reduce(function (filtered, field) {
                filtered[field] = _this[field];
                return filtered;
            }, {});
        }

        /**
         * Reset the form fields.
         */

    }, {
        key: 'reset',
        value: function reset() {
            (0, _util.merge)(this, this.initial);

            this.errors.clear();
        }
    }, {
        key: 'setInitialValues',
        value: function setInitialValues(values) {
            this.initial = {};

            (0, _util.merge)(this.initial, values);
        }
    }, {
        key: 'populate',
        value: function populate(data) {
            var _this2 = this;

            Object.keys(data).forEach(function (field) {
                (0, _util.guardAgainstReservedFieldName)(field);

                if (_this2.hasOwnProperty(field)) {
                    (0, _util.merge)(_this2, _defineProperty({}, field, data[field]));
                }
            });

            return this;
        }

        /**
         * Clear the form fields.
         */

    }, {
        key: 'clear',
        value: function clear() {
            for (var field in this.initial) {
                this[field] = '';
            }

            this.errors.clear();
        }

        /**
         * Send a POST request to the given URL.
         *
         * @param {string} url
         */

    }, {
        key: 'post',
        value: function post(url) {
            return this.submit('post', url);
        }

        /**
         * Send a PUT request to the given URL.
         *
         * @param {string} url
         */

    }, {
        key: 'put',
        value: function put(url) {
            return this.submit('put', url);
        }

        /**
         * Send a PATCH request to the given URL.
         *
         * @param {string} url
         */

    }, {
        key: 'patch',
        value: function patch(url) {
            return this.submit('patch', url);
        }

        /**
         * Send a DELETE request to the given URL.
         *
         * @param {string} url
         */

    }, {
        key: 'delete',
        value: function _delete(url) {
            return this.submit('delete', url);
        }

        /**
         * Submit the form.
         *
         * @param {string} requestType
         * @param {string} url
         */

    }, {
        key: 'submit',
        value: function submit(requestType, url) {
            var _this3 = this;

            this.__validateRequestType(requestType);
            this.errors.clear();
            this.processing = true;
            this.successful = false;

            return new Promise(function (resolve, reject) {
                _this3.__http[requestType](url, _this3.hasFiles() ? (0, _util.objectToFormData)(_this3.data()) : _this3.data()).then(function (response) {
                    _this3.processing = false;
                    _this3.onSuccess(response.data);

                    resolve(response.data);
                }).catch(function (error) {
                    _this3.processing = false;
                    _this3.onFail(error);

                    reject(error);
                });
            });
        }
    }, {
        key: 'hasFiles',
        value: function hasFiles() {
            for (var property in this.initial) {
                if (this[property] instanceof File || this[property] instanceof FileList) {
                    return true;
                }
            }

            return false;
        }

        /**
         * Handle a successful form submission.
         *
         * @param {object} data
         */

    }, {
        key: 'onSuccess',
        value: function onSuccess(data) {
            this.successful = true;

            if (this.__options.resetOnSuccess) {
                this.reset();
            }
        }

        /**
         * Handle a failed form submission.
         *
         * @param {object} data
         */

    }, {
        key: 'onFail',
        value: function onFail(error) {
            this.successful = false;

            if (error.response && error.response.data.errors) {
                this.errors.record(error.response.data.errors);
            }
        }

        /**
         * Get the error message(s) for the given field.
         *
         * @param field
         */

    }, {
        key: 'hasError',
        value: function hasError(field) {
            return this.errors.has(field);
        }

        /**
         * Get the first error message for the given field.
         *
         * @param {string} field
         * @return {string}
         */

    }, {
        key: 'getError',
        value: function getError(field) {
            return this.errors.first(field);
        }

        /**
         * Get the error messages for the given field.
         *
         * @param {string} field
         * @return {array}
         */

    }, {
        key: 'getErrors',
        value: function getErrors(field) {
            return this.errors.get(field);
        }
    }, {
        key: '__validateRequestType',
        value: function __validateRequestType(requestType) {
            var requestTypes = ['get', 'delete', 'head', 'post', 'put', 'patch'];

            if (requestTypes.indexOf(requestType) === -1) {
                throw new Error('`' + requestType + '` is not a valid request type, ' + ('must be one of: `' + requestTypes.join('`, `') + '`.'));
            }
        }
    }], [{
        key: 'create',
        value: function create() {
            var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

            return new Form().withData(data);
        }
    }]);

    return Form;
}();

exports.default = Form;

/***/ }),
/* 155 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.isArray = isArray;
exports.guardAgainstReservedFieldName = guardAgainstReservedFieldName;
exports.merge = merge;
exports.cloneDeep = cloneDeep;
exports.objectToFormData = objectToFormData;

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function isArray(object) {
    return Object.prototype.toString.call(object) === '[object Array]';
}

var reservedFieldNames = exports.reservedFieldNames = ['__http', '__options', '__validateRequestType', 'clear', 'data', 'delete', 'errors', 'getError', 'getErrors', 'hasError', 'initial', 'onFail', 'only', 'onSuccess', 'patch', 'populate', 'post', 'processing', 'successful', 'put', 'reset', 'submit', 'withData', 'withErrors', 'withOptions'];

function guardAgainstReservedFieldName(fieldName) {
    if (reservedFieldNames.indexOf(fieldName) !== -1) {
        throw new Error('Field name ' + fieldName + ' isn\'t allowed to be used in a Form or Errors instance.');
    }
}

function merge(a, b) {
    for (var key in b) {
        a[key] = cloneDeep(b[key]);
    }
}

function cloneDeep(object) {
    if (object === null) {
        return null;
    }

    if (Array.isArray(object)) {
        return [].concat(_toConsumableArray(object));
    }

    if ((typeof object === 'undefined' ? 'undefined' : _typeof(object)) === 'object') {
        var clone = {};

        for (var key in object) {
            clone[key] = cloneDeep(object[key]);
        }

        return clone;
    }

    return object;
}

function objectToFormData(object) {
    var formData = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new FormData();
    var parent = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

    for (var property in object) {
        _appendToFormData(formData, _getKey(parent, property), object[property]);
    }

    return formData;
}

function _getKey(parent, property) {
    return parent ? parent + '[' + property + ']' : property;
}

function _appendToFormData(formData, key, value) {
    if (value instanceof Date) {
        return formData.append(key, value.toISOString());
    }

    if (value instanceof File) {
        return formData.append(key, value, value.name);
    }

    if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) !== 'object') {
        return formData.append(key, value);
    }

    objectToFormData(value, formData, key);
}

/***/ }),
/* 156 */
/***/ (function(module, exports) {

/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */

// The _isBuffer check is for Safari 5-7 support, because it's missing
// Object.prototype.constructor. Remove this eventually
module.exports = function (obj) {
  return obj != null && (isBuffer(obj) || isSlowBuffer(obj) || !!obj._isBuffer)
}

function isBuffer (obj) {
  return !!obj.constructor && typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj)
}

// For Node v0.10 support. Remove this eventually.
function isSlowBuffer (obj) {
  return typeof obj.readFloatLE === 'function' && typeof obj.slice === 'function' && isBuffer(obj.slice(0, 0))
}


/***/ }),
/* 157 */
/***/ (function(module, exports, __webpack_require__) {

var hashClear = __webpack_require__(190),
    hashDelete = __webpack_require__(191),
    hashGet = __webpack_require__(192),
    hashHas = __webpack_require__(193),
    hashSet = __webpack_require__(194);

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

module.exports = Hash;


/***/ }),
/* 158 */
/***/ (function(module, exports, __webpack_require__) {

var listCacheClear = __webpack_require__(199),
    listCacheDelete = __webpack_require__(200),
    listCacheGet = __webpack_require__(201),
    listCacheHas = __webpack_require__(202),
    listCacheSet = __webpack_require__(203);

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

module.exports = ListCache;


/***/ }),
/* 159 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(37),
    root = __webpack_require__(12);

/* Built-in method references that are verified to be native. */
var Map = getNative(root, 'Map');

module.exports = Map;


/***/ }),
/* 160 */
/***/ (function(module, exports, __webpack_require__) {

var mapCacheClear = __webpack_require__(204),
    mapCacheDelete = __webpack_require__(205),
    mapCacheGet = __webpack_require__(206),
    mapCacheHas = __webpack_require__(207),
    mapCacheSet = __webpack_require__(208);

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

module.exports = MapCache;


/***/ }),
/* 161 */
/***/ (function(module, exports) {

/**
 * A faster alternative to `Function#apply`, this function invokes `func`
 * with the `this` binding of `thisArg` and the arguments of `args`.
 *
 * @private
 * @param {Function} func The function to invoke.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} args The arguments to invoke `func` with.
 * @returns {*} Returns the result of `func`.
 */
function apply(func, thisArg, args) {
  switch (args.length) {
    case 0: return func.call(thisArg);
    case 1: return func.call(thisArg, args[0]);
    case 2: return func.call(thisArg, args[0], args[1]);
    case 3: return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}

module.exports = apply;


/***/ }),
/* 162 */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.forEach` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns `array`.
 */
function arrayEach(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (iteratee(array[index], index, array) === false) {
      break;
    }
  }
  return array;
}

module.exports = arrayEach;


/***/ }),
/* 163 */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

module.exports = arrayMap;


/***/ }),
/* 164 */
/***/ (function(module, exports) {

/**
 * Converts an ASCII `string` to an array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the converted array.
 */
function asciiToArray(string) {
  return string.split('');
}

module.exports = asciiToArray;


/***/ }),
/* 165 */
/***/ (function(module, exports, __webpack_require__) {

var baseForOwn = __webpack_require__(167),
    createBaseEach = __webpack_require__(184);

/**
 * The base implementation of `_.forEach` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array|Object} Returns `collection`.
 */
var baseEach = createBaseEach(baseForOwn);

module.exports = baseEach;


/***/ }),
/* 166 */
/***/ (function(module, exports, __webpack_require__) {

var createBaseFor = __webpack_require__(185);

/**
 * The base implementation of `baseForOwn` which iterates over `object`
 * properties returned by `keysFunc` and invokes `iteratee` for each property.
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @returns {Object} Returns `object`.
 */
var baseFor = createBaseFor();

module.exports = baseFor;


/***/ }),
/* 167 */
/***/ (function(module, exports, __webpack_require__) {

var baseFor = __webpack_require__(166),
    keys = __webpack_require__(232);

/**
 * The base implementation of `_.forOwn` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Object} Returns `object`.
 */
function baseForOwn(object, iteratee) {
  return object && baseFor(object, iteratee, keys);
}

module.exports = baseForOwn;


/***/ }),
/* 168 */
/***/ (function(module, exports, __webpack_require__) {

var castPath = __webpack_require__(181),
    toKey = __webpack_require__(220);

/**
 * The base implementation of `_.get` without support for default values.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @returns {*} Returns the resolved value.
 */
function baseGet(object, path) {
  path = castPath(path, object);

  var index = 0,
      length = path.length;

  while (object != null && index < length) {
    object = object[toKey(path[index++])];
  }
  return (index && index == length) ? object : undefined;
}

module.exports = baseGet;


/***/ }),
/* 169 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(19),
    isObjectLike = __webpack_require__(23);

/** `Object#toString` result references. */
var argsTag = '[object Arguments]';

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments(value) {
  return isObjectLike(value) && baseGetTag(value) == argsTag;
}

module.exports = baseIsArguments;


/***/ }),
/* 170 */
/***/ (function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__(72),
    isMasked = __webpack_require__(198),
    isObject = __webpack_require__(8),
    toSource = __webpack_require__(221);

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

module.exports = baseIsNative;


/***/ }),
/* 171 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(19),
    isLength = __webpack_require__(73),
    isObjectLike = __webpack_require__(23);

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
typedArrayTags[errorTag] = typedArrayTags[funcTag] =
typedArrayTags[mapTag] = typedArrayTags[numberTag] =
typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
typedArrayTags[setTag] = typedArrayTags[stringTag] =
typedArrayTags[weakMapTag] = false;

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
  return isObjectLike(value) &&
    isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
}

module.exports = baseIsTypedArray;


/***/ }),
/* 172 */
/***/ (function(module, exports, __webpack_require__) {

var isPrototype = __webpack_require__(71),
    nativeKeys = __webpack_require__(210);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

module.exports = baseKeys;


/***/ }),
/* 173 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(8),
    isPrototype = __webpack_require__(71),
    nativeKeysIn = __webpack_require__(211);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeysIn(object) {
  if (!isObject(object)) {
    return nativeKeysIn(object);
  }
  var isProto = isPrototype(object),
      result = [];

  for (var key in object) {
    if (!(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
      result.push(key);
    }
  }
  return result;
}

module.exports = baseKeysIn;


/***/ }),
/* 174 */
/***/ (function(module, exports, __webpack_require__) {

var identity = __webpack_require__(39),
    overRest = __webpack_require__(215),
    setToString = __webpack_require__(216);

/**
 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @returns {Function} Returns the new function.
 */
function baseRest(func, start) {
  return setToString(overRest(func, start, identity), func + '');
}

module.exports = baseRest;


/***/ }),
/* 175 */
/***/ (function(module, exports, __webpack_require__) {

var constant = __webpack_require__(223),
    defineProperty = __webpack_require__(187),
    identity = __webpack_require__(39);

/**
 * The base implementation of `setToString` without support for hot loop shorting.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var baseSetToString = !defineProperty ? identity : function(func, string) {
  return defineProperty(func, 'toString', {
    'configurable': true,
    'enumerable': false,
    'value': constant(string),
    'writable': true
  });
};

module.exports = baseSetToString;


/***/ }),
/* 176 */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.slice` without an iteratee call guard.
 *
 * @private
 * @param {Array} array The array to slice.
 * @param {number} [start=0] The start position.
 * @param {number} [end=array.length] The end position.
 * @returns {Array} Returns the slice of `array`.
 */
function baseSlice(array, start, end) {
  var index = -1,
      length = array.length;

  if (start < 0) {
    start = -start > length ? 0 : (length + start);
  }
  end = end > length ? length : end;
  if (end < 0) {
    end += length;
  }
  length = start > end ? 0 : ((end - start) >>> 0);
  start >>>= 0;

  var result = Array(length);
  while (++index < length) {
    result[index] = array[index + start];
  }
  return result;
}

module.exports = baseSlice;


/***/ }),
/* 177 */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

module.exports = baseTimes;


/***/ }),
/* 178 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(36),
    arrayMap = __webpack_require__(163),
    isArray = __webpack_require__(13),
    isSymbol = __webpack_require__(24);

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (isArray(value)) {
    // Recursively convert values (susceptible to call stack limits).
    return arrayMap(value, baseToString) + '';
  }
  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

module.exports = baseToString;


/***/ }),
/* 179 */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}

module.exports = baseUnary;


/***/ }),
/* 180 */
/***/ (function(module, exports, __webpack_require__) {

var identity = __webpack_require__(39);

/**
 * Casts `value` to `identity` if it's not a function.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {Function} Returns cast function.
 */
function castFunction(value) {
  return typeof value == 'function' ? value : identity;
}

module.exports = castFunction;


/***/ }),
/* 181 */
/***/ (function(module, exports, __webpack_require__) {

var isArray = __webpack_require__(13),
    isKey = __webpack_require__(196),
    stringToPath = __webpack_require__(219),
    toString = __webpack_require__(74);

/**
 * Casts `value` to a path array if it's not one.
 *
 * @private
 * @param {*} value The value to inspect.
 * @param {Object} [object] The object to query keys on.
 * @returns {Array} Returns the cast property path array.
 */
function castPath(value, object) {
  if (isArray(value)) {
    return value;
  }
  return isKey(value, object) ? [value] : stringToPath(toString(value));
}

module.exports = castPath;


/***/ }),
/* 182 */
/***/ (function(module, exports, __webpack_require__) {

var baseSlice = __webpack_require__(176);

/**
 * Casts `array` to a slice if it's needed.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {number} start The start position.
 * @param {number} [end=array.length] The end position.
 * @returns {Array} Returns the cast slice.
 */
function castSlice(array, start, end) {
  var length = array.length;
  end = end === undefined ? length : end;
  return (!start && end >= length) ? array : baseSlice(array, start, end);
}

module.exports = castSlice;


/***/ }),
/* 183 */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(12);

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

module.exports = coreJsData;


/***/ }),
/* 184 */
/***/ (function(module, exports, __webpack_require__) {

var isArrayLike = __webpack_require__(22);

/**
 * Creates a `baseEach` or `baseEachRight` function.
 *
 * @private
 * @param {Function} eachFunc The function to iterate over a collection.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseEach(eachFunc, fromRight) {
  return function(collection, iteratee) {
    if (collection == null) {
      return collection;
    }
    if (!isArrayLike(collection)) {
      return eachFunc(collection, iteratee);
    }
    var length = collection.length,
        index = fromRight ? length : -1,
        iterable = Object(collection);

    while ((fromRight ? index-- : ++index < length)) {
      if (iteratee(iterable[index], index, iterable) === false) {
        break;
      }
    }
    return collection;
  };
}

module.exports = createBaseEach;


/***/ }),
/* 185 */
/***/ (function(module, exports) {

/**
 * Creates a base function for methods like `_.forIn` and `_.forOwn`.
 *
 * @private
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseFor(fromRight) {
  return function(object, iteratee, keysFunc) {
    var index = -1,
        iterable = Object(object),
        props = keysFunc(object),
        length = props.length;

    while (length--) {
      var key = props[fromRight ? length : ++index];
      if (iteratee(iterable[key], key, iterable) === false) {
        break;
      }
    }
    return object;
  };
}

module.exports = createBaseFor;


/***/ }),
/* 186 */
/***/ (function(module, exports, __webpack_require__) {

var castSlice = __webpack_require__(182),
    hasUnicode = __webpack_require__(69),
    stringToArray = __webpack_require__(218),
    toString = __webpack_require__(74);

/**
 * Creates a function like `_.lowerFirst`.
 *
 * @private
 * @param {string} methodName The name of the `String` case method to use.
 * @returns {Function} Returns the new case function.
 */
function createCaseFirst(methodName) {
  return function(string) {
    string = toString(string);

    var strSymbols = hasUnicode(string)
      ? stringToArray(string)
      : undefined;

    var chr = strSymbols
      ? strSymbols[0]
      : string.charAt(0);

    var trailing = strSymbols
      ? castSlice(strSymbols, 1).join('')
      : string.slice(1);

    return chr[methodName]() + trailing;
  };
}

module.exports = createCaseFirst;


/***/ }),
/* 187 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(37);

var defineProperty = (function() {
  try {
    var func = getNative(Object, 'defineProperty');
    func({}, '', {});
    return func;
  } catch (e) {}
}());

module.exports = defineProperty;


/***/ }),
/* 188 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(36);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

module.exports = getRawTag;


/***/ }),
/* 189 */
/***/ (function(module, exports) {

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

module.exports = getValue;


/***/ }),
/* 190 */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(21);

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
  this.size = 0;
}

module.exports = hashClear;


/***/ }),
/* 191 */
/***/ (function(module, exports) {

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = hashDelete;


/***/ }),
/* 192 */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(21);

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

module.exports = hashGet;


/***/ }),
/* 193 */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(21);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? (data[key] !== undefined) : hasOwnProperty.call(data, key);
}

module.exports = hashHas;


/***/ }),
/* 194 */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(21);

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

module.exports = hashSet;


/***/ }),
/* 195 */
/***/ (function(module, exports, __webpack_require__) {

var eq = __webpack_require__(38),
    isArrayLike = __webpack_require__(22),
    isIndex = __webpack_require__(70),
    isObject = __webpack_require__(8);

/**
 * Checks if the given arguments are from an iteratee call.
 *
 * @private
 * @param {*} value The potential iteratee value argument.
 * @param {*} index The potential iteratee index or key argument.
 * @param {*} object The potential iteratee object argument.
 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
 *  else `false`.
 */
function isIterateeCall(value, index, object) {
  if (!isObject(object)) {
    return false;
  }
  var type = typeof index;
  if (type == 'number'
        ? (isArrayLike(object) && isIndex(index, object.length))
        : (type == 'string' && index in object)
      ) {
    return eq(object[index], value);
  }
  return false;
}

module.exports = isIterateeCall;


/***/ }),
/* 196 */
/***/ (function(module, exports, __webpack_require__) {

var isArray = __webpack_require__(13),
    isSymbol = __webpack_require__(24);

/** Used to match property names within property paths. */
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    reIsPlainProp = /^\w*$/;

/**
 * Checks if `value` is a property name and not a property path.
 *
 * @private
 * @param {*} value The value to check.
 * @param {Object} [object] The object to query keys on.
 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
 */
function isKey(value, object) {
  if (isArray(value)) {
    return false;
  }
  var type = typeof value;
  if (type == 'number' || type == 'symbol' || type == 'boolean' ||
      value == null || isSymbol(value)) {
    return true;
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
    (object != null && value in Object(object));
}

module.exports = isKey;


/***/ }),
/* 197 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

module.exports = isKeyable;


/***/ }),
/* 198 */
/***/ (function(module, exports, __webpack_require__) {

var coreJsData = __webpack_require__(183);

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

module.exports = isMasked;


/***/ }),
/* 199 */
/***/ (function(module, exports) {

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}

module.exports = listCacheClear;


/***/ }),
/* 200 */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(18);

/** Used for built-in method references. */
var arrayProto = Array.prototype;

/** Built-in value references. */
var splice = arrayProto.splice;

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}

module.exports = listCacheDelete;


/***/ }),
/* 201 */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(18);

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

module.exports = listCacheGet;


/***/ }),
/* 202 */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(18);

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

module.exports = listCacheHas;


/***/ }),
/* 203 */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(18);

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

module.exports = listCacheSet;


/***/ }),
/* 204 */
/***/ (function(module, exports, __webpack_require__) {

var Hash = __webpack_require__(157),
    ListCache = __webpack_require__(158),
    Map = __webpack_require__(159);

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

module.exports = mapCacheClear;


/***/ }),
/* 205 */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(20);

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  var result = getMapData(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = mapCacheDelete;


/***/ }),
/* 206 */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(20);

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

module.exports = mapCacheGet;


/***/ }),
/* 207 */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(20);

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

module.exports = mapCacheHas;


/***/ }),
/* 208 */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(20);

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  var data = getMapData(this, key),
      size = data.size;

  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

module.exports = mapCacheSet;


/***/ }),
/* 209 */
/***/ (function(module, exports, __webpack_require__) {

var memoize = __webpack_require__(234);

/** Used as the maximum memoize cache size. */
var MAX_MEMOIZE_SIZE = 500;

/**
 * A specialized version of `_.memoize` which clears the memoized function's
 * cache when it exceeds `MAX_MEMOIZE_SIZE`.
 *
 * @private
 * @param {Function} func The function to have its output memoized.
 * @returns {Function} Returns the new memoized function.
 */
function memoizeCapped(func) {
  var result = memoize(func, function(key) {
    if (cache.size === MAX_MEMOIZE_SIZE) {
      cache.clear();
    }
    return key;
  });

  var cache = result.cache;
  return result;
}

module.exports = memoizeCapped;


/***/ }),
/* 210 */
/***/ (function(module, exports, __webpack_require__) {

var overArg = __webpack_require__(214);

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys = overArg(Object.keys, Object);

module.exports = nativeKeys;


/***/ }),
/* 211 */
/***/ (function(module, exports) {

/**
 * This function is like
 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * except that it includes inherited enumerable properties.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function nativeKeysIn(object) {
  var result = [];
  if (object != null) {
    for (var key in Object(object)) {
      result.push(key);
    }
  }
  return result;
}

module.exports = nativeKeysIn;


/***/ }),
/* 212 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var freeGlobal = __webpack_require__(68);

/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && freeGlobal.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = (function() {
  try {
    // Use `util.types` for Node.js 10+.
    var types = freeModule && freeModule.require && freeModule.require('util').types;

    if (types) {
      return types;
    }

    // Legacy `process.binding('util')` for Node.js < 10.
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}());

module.exports = nodeUtil;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(76)(module)))

/***/ }),
/* 213 */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

module.exports = objectToString;


/***/ }),
/* 214 */
/***/ (function(module, exports) {

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

module.exports = overArg;


/***/ }),
/* 215 */
/***/ (function(module, exports, __webpack_require__) {

var apply = __webpack_require__(161);

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * A specialized version of `baseRest` which transforms the rest array.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @param {Function} transform The rest array transform.
 * @returns {Function} Returns the new function.
 */
function overRest(func, start, transform) {
  start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
  return function() {
    var args = arguments,
        index = -1,
        length = nativeMax(args.length - start, 0),
        array = Array(length);

    while (++index < length) {
      array[index] = args[start + index];
    }
    index = -1;
    var otherArgs = Array(start + 1);
    while (++index < start) {
      otherArgs[index] = args[index];
    }
    otherArgs[start] = transform(array);
    return apply(func, this, otherArgs);
  };
}

module.exports = overRest;


/***/ }),
/* 216 */
/***/ (function(module, exports, __webpack_require__) {

var baseSetToString = __webpack_require__(175),
    shortOut = __webpack_require__(217);

/**
 * Sets the `toString` method of `func` to return `string`.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var setToString = shortOut(baseSetToString);

module.exports = setToString;


/***/ }),
/* 217 */
/***/ (function(module, exports) {

/** Used to detect hot functions by number of calls within a span of milliseconds. */
var HOT_COUNT = 800,
    HOT_SPAN = 16;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeNow = Date.now;

/**
 * Creates a function that'll short out and invoke `identity` instead
 * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
 * milliseconds.
 *
 * @private
 * @param {Function} func The function to restrict.
 * @returns {Function} Returns the new shortable function.
 */
function shortOut(func) {
  var count = 0,
      lastCalled = 0;

  return function() {
    var stamp = nativeNow(),
        remaining = HOT_SPAN - (stamp - lastCalled);

    lastCalled = stamp;
    if (remaining > 0) {
      if (++count >= HOT_COUNT) {
        return arguments[0];
      }
    } else {
      count = 0;
    }
    return func.apply(undefined, arguments);
  };
}

module.exports = shortOut;


/***/ }),
/* 218 */
/***/ (function(module, exports, __webpack_require__) {

var asciiToArray = __webpack_require__(164),
    hasUnicode = __webpack_require__(69),
    unicodeToArray = __webpack_require__(222);

/**
 * Converts `string` to an array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the converted array.
 */
function stringToArray(string) {
  return hasUnicode(string)
    ? unicodeToArray(string)
    : asciiToArray(string);
}

module.exports = stringToArray;


/***/ }),
/* 219 */
/***/ (function(module, exports, __webpack_require__) {

var memoizeCapped = __webpack_require__(209);

/** Used to match property names within property paths. */
var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

/** Used to match backslashes in property paths. */
var reEscapeChar = /\\(\\)?/g;

/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 */
var stringToPath = memoizeCapped(function(string) {
  var result = [];
  if (string.charCodeAt(0) === 46 /* . */) {
    result.push('');
  }
  string.replace(rePropName, function(match, number, quote, subString) {
    result.push(quote ? subString.replace(reEscapeChar, '$1') : (number || match));
  });
  return result;
});

module.exports = stringToPath;


/***/ }),
/* 220 */
/***/ (function(module, exports, __webpack_require__) {

var isSymbol = __webpack_require__(24);

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */
function toKey(value) {
  if (typeof value == 'string' || isSymbol(value)) {
    return value;
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

module.exports = toKey;


/***/ }),
/* 221 */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var funcProto = Function.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

module.exports = toSource;


/***/ }),
/* 222 */
/***/ (function(module, exports) {

/** Used to compose unicode character classes. */
var rsAstralRange = '\\ud800-\\udfff',
    rsComboMarksRange = '\\u0300-\\u036f',
    reComboHalfMarksRange = '\\ufe20-\\ufe2f',
    rsComboSymbolsRange = '\\u20d0-\\u20ff',
    rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange,
    rsVarRange = '\\ufe0e\\ufe0f';

/** Used to compose unicode capture groups. */
var rsAstral = '[' + rsAstralRange + ']',
    rsCombo = '[' + rsComboRange + ']',
    rsFitz = '\\ud83c[\\udffb-\\udfff]',
    rsModifier = '(?:' + rsCombo + '|' + rsFitz + ')',
    rsNonAstral = '[^' + rsAstralRange + ']',
    rsRegional = '(?:\\ud83c[\\udde6-\\uddff]){2}',
    rsSurrPair = '[\\ud800-\\udbff][\\udc00-\\udfff]',
    rsZWJ = '\\u200d';

/** Used to compose unicode regexes. */
var reOptMod = rsModifier + '?',
    rsOptVar = '[' + rsVarRange + ']?',
    rsOptJoin = '(?:' + rsZWJ + '(?:' + [rsNonAstral, rsRegional, rsSurrPair].join('|') + ')' + rsOptVar + reOptMod + ')*',
    rsSeq = rsOptVar + reOptMod + rsOptJoin,
    rsSymbol = '(?:' + [rsNonAstral + rsCombo + '?', rsCombo, rsRegional, rsSurrPair, rsAstral].join('|') + ')';

/** Used to match [string symbols](https://mathiasbynens.be/notes/javascript-unicode). */
var reUnicode = RegExp(rsFitz + '(?=' + rsFitz + ')|' + rsSymbol + rsSeq, 'g');

/**
 * Converts a Unicode `string` to an array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the converted array.
 */
function unicodeToArray(string) {
  return string.match(reUnicode) || [];
}

module.exports = unicodeToArray;


/***/ }),
/* 223 */
/***/ (function(module, exports) {

/**
 * Creates a function that returns `value`.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {*} value The value to return from the new function.
 * @returns {Function} Returns the new constant function.
 * @example
 *
 * var objects = _.times(2, _.constant({ 'a': 1 }));
 *
 * console.log(objects);
 * // => [{ 'a': 1 }, { 'a': 1 }]
 *
 * console.log(objects[0] === objects[1]);
 * // => true
 */
function constant(value) {
  return function() {
    return value;
  };
}

module.exports = constant;


/***/ }),
/* 224 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(8),
    now = __webpack_require__(235),
    toNumber = __webpack_require__(237);

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max,
    nativeMin = Math.min;

/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */
function debounce(func, wait, options) {
  var lastArgs,
      lastThis,
      maxWait,
      result,
      timerId,
      lastCallTime,
      lastInvokeTime = 0,
      leading = false,
      maxing = false,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  wait = toNumber(wait) || 0;
  if (isObject(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  function invokeFunc(time) {
    var args = lastArgs,
        thisArg = lastThis;

    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }

  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time;
    // Start the timer for the trailing edge.
    timerId = setTimeout(timerExpired, wait);
    // Invoke the leading edge.
    return leading ? invokeFunc(time) : result;
  }

  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime,
        timeWaiting = wait - timeSinceLastCall;

    return maxing
      ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke)
      : timeWaiting;
  }

  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime;

    // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.
    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
  }

  function timerExpired() {
    var time = now();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    // Restart the timer.
    timerId = setTimeout(timerExpired, remainingWait(time));
  }

  function trailingEdge(time) {
    timerId = undefined;

    // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = undefined;
    return result;
  }

  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }

  function flush() {
    return timerId === undefined ? result : trailingEdge(now());
  }

  function debounced() {
    var time = now(),
        isInvoking = shouldInvoke(time);

    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        // Handle invocations in a tight loop.
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}

module.exports = debounce;


/***/ }),
/* 225 */
/***/ (function(module, exports, __webpack_require__) {

var baseRest = __webpack_require__(174),
    eq = __webpack_require__(38),
    isIterateeCall = __webpack_require__(195),
    keysIn = __webpack_require__(233);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Assigns own and inherited enumerable string keyed properties of source
 * objects to the destination object for all destination properties that
 * resolve to `undefined`. Source objects are applied from left to right.
 * Once a property is set, additional values of the same property are ignored.
 *
 * **Note:** This method mutates `object`.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The destination object.
 * @param {...Object} [sources] The source objects.
 * @returns {Object} Returns `object`.
 * @see _.defaultsDeep
 * @example
 *
 * _.defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 });
 * // => { 'a': 1, 'b': 2 }
 */
var defaults = baseRest(function(object, sources) {
  object = Object(object);

  var index = -1;
  var length = sources.length;
  var guard = length > 2 ? sources[2] : undefined;

  if (guard && isIterateeCall(sources[0], sources[1], guard)) {
    length = 1;
  }

  while (++index < length) {
    var source = sources[index];
    var props = keysIn(source);
    var propsIndex = -1;
    var propsLength = props.length;

    while (++propsIndex < propsLength) {
      var key = props[propsIndex];
      var value = object[key];

      if (value === undefined ||
          (eq(value, objectProto[key]) && !hasOwnProperty.call(object, key))) {
        object[key] = source[key];
      }
    }
  }

  return object;
});

module.exports = defaults;


/***/ }),
/* 226 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(227);


/***/ }),
/* 227 */
/***/ (function(module, exports, __webpack_require__) {

var arrayEach = __webpack_require__(162),
    baseEach = __webpack_require__(165),
    castFunction = __webpack_require__(180),
    isArray = __webpack_require__(13);

/**
 * Iterates over elements of `collection` and invokes `iteratee` for each element.
 * The iteratee is invoked with three arguments: (value, index|key, collection).
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * **Note:** As with other "Collections" methods, objects with a "length"
 * property are iterated like arrays. To avoid this behavior use `_.forIn`
 * or `_.forOwn` for object iteration.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @alias each
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @returns {Array|Object} Returns `collection`.
 * @see _.forEachRight
 * @example
 *
 * _.forEach([1, 2], function(value) {
 *   console.log(value);
 * });
 * // => Logs `1` then `2`.
 *
 * _.forEach({ 'a': 1, 'b': 2 }, function(value, key) {
 *   console.log(key);
 * });
 * // => Logs 'a' then 'b' (iteration order is not guaranteed).
 */
function forEach(collection, iteratee) {
  var func = isArray(collection) ? arrayEach : baseEach;
  return func(collection, castFunction(iteratee));
}

module.exports = forEach;


/***/ }),
/* 228 */
/***/ (function(module, exports, __webpack_require__) {

var baseGet = __webpack_require__(168);

/**
 * Gets the value at `path` of `object`. If the resolved value is
 * `undefined`, the `defaultValue` is returned in its place.
 *
 * @static
 * @memberOf _
 * @since 3.7.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
 * @returns {*} Returns the resolved value.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
 *
 * _.get(object, 'a[0].b.c');
 * // => 3
 *
 * _.get(object, ['a', '0', 'b', 'c']);
 * // => 3
 *
 * _.get(object, 'a.b.c', 'default');
 * // => 'default'
 */
function get(object, path, defaultValue) {
  var result = object == null ? undefined : baseGet(object, path);
  return result === undefined ? defaultValue : result;
}

module.exports = get;


/***/ }),
/* 229 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsArguments = __webpack_require__(169),
    isObjectLike = __webpack_require__(23);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
  return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&
    !propertyIsEnumerable.call(value, 'callee');
};

module.exports = isArguments;


/***/ }),
/* 230 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var root = __webpack_require__(12),
    stubFalse = __webpack_require__(236);

/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse;

module.exports = isBuffer;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(76)(module)))

/***/ }),
/* 231 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsTypedArray = __webpack_require__(171),
    baseUnary = __webpack_require__(179),
    nodeUtil = __webpack_require__(212);

/* Node.js helper references. */
var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

module.exports = isTypedArray;


/***/ }),
/* 232 */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeKeys = __webpack_require__(67),
    baseKeys = __webpack_require__(172),
    isArrayLike = __webpack_require__(22);

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}

module.exports = keys;


/***/ }),
/* 233 */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeKeys = __webpack_require__(67),
    baseKeysIn = __webpack_require__(173),
    isArrayLike = __webpack_require__(22);

/**
 * Creates an array of the own and inherited enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keysIn(new Foo);
 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
 */
function keysIn(object) {
  return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
}

module.exports = keysIn;


/***/ }),
/* 234 */
/***/ (function(module, exports, __webpack_require__) {

var MapCache = __webpack_require__(160);

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `clear`, `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */
function memoize(func, resolver) {
  if (typeof func != 'function' || (resolver != null && typeof resolver != 'function')) {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function() {
    var args = arguments,
        key = resolver ? resolver.apply(this, args) : args[0],
        cache = memoized.cache;

    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result) || cache;
    return result;
  };
  memoized.cache = new (memoize.Cache || MapCache);
  return memoized;
}

// Expose `MapCache`.
memoize.Cache = MapCache;

module.exports = memoize;


/***/ }),
/* 235 */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(12);

/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */
var now = function() {
  return root.Date.now();
};

module.exports = now;


/***/ }),
/* 236 */
/***/ (function(module, exports) {

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = stubFalse;


/***/ }),
/* 237 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(8),
    isSymbol = __webpack_require__(24);

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** Used to match leading and trailing whitespace. */
var reTrim = /^\s+|\s+$/g;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

module.exports = toNumber;


/***/ }),
/* 238 */
/***/ (function(module, exports, __webpack_require__) {

var createCaseFirst = __webpack_require__(186);

/**
 * Converts the first character of `string` to upper case.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category String
 * @param {string} [string=''] The string to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.upperFirst('fred');
 * // => 'Fred'
 *
 * _.upperFirst('FRED');
 * // => 'FRED'
 */
var upperFirst = createCaseFirst('toUpperCase');

module.exports = upperFirst;


/***/ }),
/* 239 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// This method of obtaining a reference to the global object needs to be
// kept identical to the way it is obtained in runtime.js
var g = (function() { return this })() || Function("return this")();

// Use `getOwnPropertyNames` because not all browsers support calling
// `hasOwnProperty` on the global `self` object in a worker. See #183.
var hadRuntime = g.regeneratorRuntime &&
  Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;

// Save the old regeneratorRuntime in case it needs to be restored later.
var oldRuntime = hadRuntime && g.regeneratorRuntime;

// Force reevalutation of runtime.js.
g.regeneratorRuntime = undefined;

module.exports = __webpack_require__(240);

if (hadRuntime) {
  // Restore the original runtime.
  g.regeneratorRuntime = oldRuntime;
} else {
  // Remove the global property added by runtime.js.
  try {
    delete g.regeneratorRuntime;
  } catch(e) {
    g.regeneratorRuntime = undefined;
  }
}


/***/ }),
/* 240 */
/***/ (function(module, exports) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

!(function(global) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  var inModule = typeof module === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  runtime.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  runtime.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  runtime.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration. If the Promise is rejected, however, the
          // result for this iteration will be rejected with the same
          // reason. Note that rejections of yielded Promises are not
          // thrown back into the generator function, as is the case
          // when an awaited Promise is rejected. This difference in
          // behavior between yield and await is important, because it
          // allows the consumer to decide what to do with the yielded
          // rejection (swallow it and continue, manually .throw it back
          // into the generator, abandon iteration, whatever). With
          // await, by contrast, there is no opportunity to examine the
          // rejection reason outside the generator function, so the
          // only option is to throw it from the await expression, and
          // let the generator function handle the exception.
          result.value = unwrapped;
          resolve(result);
        }, reject);
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  runtime.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return runtime.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        if (delegate.iterator.return) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };
})(
  // In sloppy mode, unbound `this` refers to the global object, fallback to
  // Function constructor if we're in global strict mode. That is sadly a form
  // of indirect eval which violates Content Security Policy.
  (function() { return this })() || Function("return this")()
);


/***/ }),
/* 241 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ })
/******/ ]);
});

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

/*!
 * @license Copyright (c) 2003-2019, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md.
 */
!function(t,e){ true?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.CKEditor=e():t.CKEditor=e()}(window,function(){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(r,i,function(e){return t[e]}.bind(null,i));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=2)}([function(t,e,n){"use strict";(function(t){var n="object"==typeof t&&t&&t.Object===Object&&t;e.a=n}).call(this,n(1))},function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(t){"object"==typeof window&&(n=window)}t.exports=n},function(t,e,n){"use strict";n.r(e);var r=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)},i=n(0),o="object"==typeof self&&self&&self.Object===Object&&self,u=i.a||o||Function("return this")(),a=function(){return u.Date.now()},c=u.Symbol,f=Object.prototype,s=f.hasOwnProperty,l=f.toString,d=c?c.toStringTag:void 0;var p=function(t){var e=s.call(t,d),n=t[d];try{t[d]=void 0;var r=!0}catch(t){}var i=l.call(t);return r&&(e?t[d]=n:delete t[d]),i},v=Object.prototype.toString;var y=function(t){return v.call(t)},b="[object Null]",h="[object Undefined]",m=c?c.toStringTag:void 0;var g=function(t){return null==t?void 0===t?h:b:m&&m in Object(t)?p(t):y(t)};var j=function(t){return null!=t&&"object"==typeof t},O="[object Symbol]";var w=function(t){return"symbol"==typeof t||j(t)&&g(t)==O},x=NaN,$=/^\s+|\s+$/g,S=/^[-+]0x[0-9a-f]+$/i,E=/^0b[01]+$/i,T=/^0o[0-7]+$/i,_=parseInt;var D=function(t){if("number"==typeof t)return t;if(w(t))return x;if(r(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=r(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace($,"");var n=E.test(t);return n||T.test(t)?_(t.slice(2),n?2:8):S.test(t)?x:+t},M="Expected a function",P=Math.max,N=Math.min;var F=function(t,e,n){var i,o,u,c,f,s,l=0,d=!1,p=!1,v=!0;if("function"!=typeof t)throw new TypeError(M);function y(e){var n=i,r=o;return i=o=void 0,l=e,c=t.apply(r,n)}function b(t){var n=t-s;return void 0===s||n>=e||n<0||p&&t-l>=u}function h(){var t=a();if(b(t))return m(t);f=setTimeout(h,function(t){var n=e-(t-s);return p?N(n,u-(t-l)):n}(t))}function m(t){return f=void 0,v&&i?y(t):(i=o=void 0,c)}function g(){var t=a(),n=b(t);if(i=arguments,o=this,s=t,n){if(void 0===f)return function(t){return l=t,f=setTimeout(h,e),d?y(t):c}(s);if(p)return f=setTimeout(h,e),y(s)}return void 0===f&&(f=setTimeout(h,e)),c}return e=D(e)||0,r(n)&&(d=!!n.leading,u=(p="maxWait"in n)?P(D(n.maxWait)||0,e):u,v="trailing"in n?!!n.trailing:v),g.cancel=function(){void 0!==f&&clearTimeout(f),l=0,i=s=o=f=void 0},g.flush=function(){return void 0===f?c:m(a())},g};var U={name:"ckeditor",render(t){return t(this.tagName,{domProps:{innerHTML:this.value||""}})},props:{editor:{type:Function,default:null},value:{type:String,default:""},config:{type:Object,default:()=>({})},tagName:{type:String,default:"div"},disabled:{type:Boolean,default:!1}},data:()=>({instance:null,$_lastEditorData:{type:String,default:""}}),mounted(){this.editor.create(this.$el,this.config).then(t=>{this.instance=t,t.isReadOnly=this.disabled,this.$_setUpEditorEvents(),this.$emit("ready",t)}).catch(t=>{console.error(t)})},beforeDestroy(){this.instance&&(this.instance.destroy(),this.instance=null),this.$emit("destroy",this.instance)},watch:{value(t,e){t!==e&&t!==this.$_lastEditorData&&this.instance.setData(t)},disabled(t){this.instance.isReadOnly=t}},methods:{$_setUpEditorEvents(){const t=this.instance;t.model.document.on("change:data",F(e=>{const n=this.$_lastEditorData=t.getData();this.$emit("input",n,e,t)},300)),t.editing.view.document.on("focus",e=>{this.$emit("focus",e,t)}),t.editing.view.document.on("blur",e=>{this.$emit("blur",e,t)})}}};const k={install(t){t.component("ckeditor",U)},component:U};e.default=k}]).default});
//# sourceMappingURL=ckeditor.js.map

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

/*!
 * @license Copyright (c) 2003-2019, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md.
 */
!function(t){t.en=Object.assign(t.en||{},{a:"Cannot upload file:",b:"Bold",c:"Italic",d:"Align left",e:"Align right",f:"Align center",g:"Justify",h:"Text alignment",i:"Block quote",j:"Insert image or file",k:"image widget",l:"Choose heading",m:"Heading",n:"Enter image caption",o:"Insert image",p:"Full size image",q:"Side image",r:"Left aligned image",s:"Centered image",t:"Right aligned image",u:"Upload failed",v:"Numbered List",w:"Bulleted List",x:"Link",y:"media widget",z:"Insert media",aa:"The URL must not be empty.",ab:"This media URL is not supported.",ac:"Insert table",ad:"Header column",ae:"Insert column left",af:"Insert column right",ag:"Delete column",ah:"Column",ai:"Header row",aj:"Insert row below",ak:"Insert row above",al:"Delete row",am:"Row",an:"Merge cell up",ao:"Merge cell right",ap:"Merge cell down",aq:"Merge cell left",ar:"Split cell vertically",as:"Split cell horizontally",at:"Merge cells",au:"Upload in progress",av:"Font Family",aw:"Default",ax:"Font Size",ay:"Tiny",az:"Small",ba:"Big",bb:"Huge",bc:"Font Background Color",bd:"Font Color",be:"Could not obtain resized image URL.",bf:"Selecting resized image failed",bg:"Could not insert image at the current position.",bh:"Inserting image failed",bi:"Change image text alternative",bj:"Save",bk:"Cancel",bl:"Paste the media URL in the input.",bm:"Tip: Paste the URL into the content to embed faster.",bn:"Media URL",bo:"Unlink",bp:"Edit link",bq:"Open link in new tab",br:"This link has no URL",bs:"Link URL",bt:"Undo",bu:"Redo",bv:"Rich Text Editor",bw:"Rich Text Editor, %0",bx:"Black",by:"Dim grey",bz:"Grey",ca:"Light grey",cb:"White",cc:"Red",cd:"Orange",ce:"Yellow",cf:"Light green",cg:"Green",ch:"Aquamarine",ci:"Turquoise",cj:"Light blue",ck:"Blue",cl:"Purple",cm:"Remove color",cn:"Text alternative",co:"Paragraph",cp:"Heading 1",cq:"Heading 2",cr:"Heading 3",cs:"Heading 4",ct:"Heading 5",cu:"Heading 6"})}(window.CKEDITOR_TRANSLATIONS||(window.CKEDITOR_TRANSLATIONS={})),function(t,e){ true?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.ClassicEditor=e():t.ClassicEditor=e()}(window,function(){return function(t){var e={};function n(i){if(e[i])return e[i].exports;var o=e[i]={i:i,l:!1,exports:{}};return t[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(i,o,function(e){return t[e]}.bind(null,o));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=133)}([function(t,e,n){"use strict";n.d(e,"b",function(){return o}),n.d(e,"a",function(){return r});const i="https://ckeditor.com/docs/ckeditor5/latest/framework/guides/support/error-codes.html";class o extends Error{constructor(t,e){t=r(t),e&&(t+=" "+JSON.stringify(e)),super(t),this.name="CKEditorError",this.data=e}static isCKEditorError(t){return t instanceof o}}function r(t){const e=t.match(/^([^:]+):/);return e?t+` Read more: ${i}#error-${e[1]}\n`:t}},function(t,e,n){var i={},o=function(t){var e;return function(){return void 0===e&&(e=t.apply(this,arguments)),e}}(function(){return window&&document&&document.all&&!window.atob}),r=function(t){var e={};return function(t,n){if("function"==typeof t)return t();if(void 0===e[t]){var i=function(t,e){return e?e.querySelector(t):document.querySelector(t)}.call(this,t,n);if(window.HTMLIFrameElement&&i instanceof window.HTMLIFrameElement)try{i=i.contentDocument.head}catch(t){i=null}e[t]=i}return e[t]}}(),s=null,a=0,c=[],l=n(55);function d(t,e){for(var n=0;n<t.length;n++){var o=t[n],r=i[o.id];if(r){r.refs++;for(var s=0;s<r.parts.length;s++)r.parts[s](o.parts[s]);for(;s<o.parts.length;s++)r.parts.push(g(o.parts[s],e))}else{var a=[];for(s=0;s<o.parts.length;s++)a.push(g(o.parts[s],e));i[o.id]={id:o.id,refs:1,parts:a}}}}function u(t,e){for(var n=[],i={},o=0;o<t.length;o++){var r=t[o],s=e.base?r[0]+e.base:r[0],a={css:r[1],media:r[2],sourceMap:r[3]};i[s]?i[s].parts.push(a):n.push(i[s]={id:s,parts:[a]})}return n}function h(t,e){var n=r(t.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var i=c[c.length-1];if("top"===t.insertAt)i?i.nextSibling?n.insertBefore(e,i.nextSibling):n.appendChild(e):n.insertBefore(e,n.firstChild),c.push(e);else if("bottom"===t.insertAt)n.appendChild(e);else{if("object"!=typeof t.insertAt||!t.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=r(t.insertAt.before,n);n.insertBefore(e,o)}}function f(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var e=c.indexOf(t);e>=0&&c.splice(e,1)}function m(t){var e=document.createElement("style");if(void 0===t.attrs.type&&(t.attrs.type="text/css"),void 0===t.attrs.nonce){var i=function(){0;return n.nc}();i&&(t.attrs.nonce=i)}return p(e,t.attrs),h(t,e),e}function p(t,e){Object.keys(e).forEach(function(n){t.setAttribute(n,e[n])})}function g(t,e){var n,i,o,r;if(e.transform&&t.css){if(!(r="function"==typeof e.transform?e.transform(t.css):e.transform.default(t.css)))return function(){};t.css=r}if(e.singleton){var c=a++;n=s||(s=m(e)),i=w.bind(null,n,c,!1),o=w.bind(null,n,c,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(t){var e=document.createElement("link");return void 0===t.attrs.type&&(t.attrs.type="text/css"),t.attrs.rel="stylesheet",p(e,t.attrs),h(t,e),e}(e),i=function(t,e,n){var i=n.css,o=n.sourceMap,r=void 0===e.convertToAbsoluteUrls&&o;(e.convertToAbsoluteUrls||r)&&(i=l(i));o&&(i+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var s=new Blob([i],{type:"text/css"}),a=t.href;t.href=URL.createObjectURL(s),a&&URL.revokeObjectURL(a)}.bind(null,n,e),o=function(){f(n),n.href&&URL.revokeObjectURL(n.href)}):(n=m(e),i=function(t,e){var n=e.css,i=e.media;i&&t.setAttribute("media",i);if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}.bind(null,n),o=function(){f(n)});return i(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;i(t=e)}else o()}}t.exports=function(t,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(e=e||{}).attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=o()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var n=u(t,e);return d(n,e),function(t){for(var o=[],r=0;r<n.length;r++){var s=n[r];(a=i[s.id]).refs--,o.push(a)}t&&d(u(t,e),e);for(r=0;r<o.length;r++){var a;if(0===(a=o[r]).refs){for(var c=0;c<a.parts.length;c++)a.parts[c]();delete i[a.id]}}}};var b=function(){var t=[];return function(e,n){return t[e]=n,t.filter(Boolean).join("\n")}}();function w(t,e,n,i){var o=n?"":i.css;if(t.styleSheet)t.styleSheet.cssText=b(e,o);else{var r=document.createTextNode(o),s=t.childNodes;s[e]&&t.removeChild(s[e]),s.length?t.insertBefore(r,s[e]):t.appendChild(r)}}},function(t,e,n){"use strict";var i=n(0);const o={error(t,e){console.error(Object(i.a)(t),e)},warn(t,e){console.warn(Object(i.a)(t),e)}};e.a=o},,function(t,e,n){"use strict";var i=n(10),o="object"==typeof self&&self&&self.Object===Object&&self,r=i.a||o||Function("return this")();e.a=r},function(t,e,n){"use strict";(function(t){var i=n(10),o="object"==typeof exports&&exports&&!exports.nodeType&&exports,r=o&&"object"==typeof t&&t&&!t.nodeType&&t,s=r&&r.exports===o&&i.a.process,a=function(){try{var t=r&&r.require&&r.require("util").types;return t||s&&s.binding&&s.binding("util")}catch(t){}}();e.a=a}).call(this,n(12)(t))},function(t,e,n){"use strict";(function(t){var i=n(4),o=n(19),r="object"==typeof exports&&exports&&!exports.nodeType&&exports,s=r&&"object"==typeof t&&t&&!t.nodeType&&t,a=s&&s.exports===r?i.a.Buffer:void 0,c=(a?a.isBuffer:void 0)||o.a;e.a=c}).call(this,n(12)(t))},function(t,e){t.exports='<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M6.972 16.615a.997.997 0 0 1-.744-.292l-4.596-4.596a1 1 0 1 1 1.414-1.414l3.926 3.926 9.937-9.937a1 1 0 0 1 1.414 1.415L7.717 16.323a.997.997 0 0 1-.745.292z"/></svg>'},function(t,e){t.exports='<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M11.591 10.177l4.243 4.242a1 1 0 0 1-1.415 1.415l-4.242-4.243-4.243 4.243a1 1 0 0 1-1.414-1.415l4.243-4.242L4.52 5.934A1 1 0 0 1 5.934 4.52l4.243 4.243 4.242-4.243a1 1 0 1 1 1.415 1.414l-4.243 4.243z"/></svg>'},function(t,e,n){"use strict";(function(t){var e=n(2),i=n(21);const o="object"==typeof window?window:t;o.CKEDITOR_VERSION?e.a.error("ckeditor-duplicated-modules: Some CKEditor 5 modules are duplicated."):o.CKEDITOR_VERSION=i.a}).call(this,n(17))},function(t,e,n){"use strict";(function(t){var n="object"==typeof t&&t&&t.Object===Object&&t;e.a=n}).call(this,n(17))},function(t,e){t.exports='<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 4.5V3h16v1.5zm0 3V6h5.674v1.5zm0 3V9h5.674v1.5zm0 3V12h5.674v1.5zm8.5-6V12h6V7.5h-6zM9.682 6h7.636c.377 0 .682.407.682.91v5.68c0 .503-.305.91-.682.91H9.682c-.377 0-.682-.407-.682-.91V6.91c0-.503.305-.91.682-.91zM2 16.5V15h16v1.5z"/></svg>'},function(t,e){t.exports=function(t){if(!t.webpackPolyfill){var e=Object.create(t);e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),Object.defineProperty(e,"exports",{enumerable:!0}),e.webpackPolyfill=1}return e}},function(t,e){t.exports='<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 3.75c0 .414.336.75.75.75h14.5a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75zm0 8c0 .414.336.75.75.75h14.5a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75zm0 4c0 .414.336.75.75.75h9.929a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75zm0-8c0 .414.336.75.75.75h9.929a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75z"/></svg>'},function(t,e){t.exports='<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 4.5V3h16v1.5zm2.5 3V12h11V7.5h-11zM4.061 6H15.94c.586 0 1.061.407 1.061.91v5.68c0 .503-.475.91-1.061.91H4.06c-.585 0-1.06-.407-1.06-.91V6.91C3 6.406 3.475 6 4.061 6zM2 16.5V15h16v1.5z"/></svg>'},function(t,e){t.exports='<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="1.414"><path d="M18 4.5V3H2v1.5h16zm0 3V6h-5.674v1.5H18zm0 3V9h-5.674v1.5H18zm0 3V12h-5.674v1.5H18zm-8.5-6V12h-6V7.5h6zm.818-1.5H2.682C2.305 6 2 6.407 2 6.91v5.68c0 .503.305.91.682.91h7.636c.377 0 .682-.407.682-.91V6.91c0-.503-.305-.91-.682-.91zM18 16.5V15H2v1.5h16z"/></svg>'},function(t,e){t.exports='<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 4.5V3h16v1.5zm4.5 3V12h7V7.5h-7zM5.758 6h8.484c.419 0 .758.407.758.91v5.681c0 .502-.34.909-.758.909H5.758c-.419 0-.758-.407-.758-.91V6.91c0-.503.34-.91.758-.91zM2 16.5V15h16v1.5z"/></svg>'},function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(t){"object"==typeof window&&(n=window)}t.exports=n},function(t,e,n){var i=n(110);"string"==typeof i&&(i=[[t.i,i,""]]);var o={singleton:!0,hmr:!0,transform:void 0,insertInto:void 0};n(1)(i,o);i.locals&&(t.exports=i.locals)},function(t,e,n){"use strict";e.a=function(){return!1}},function(t,e,n){"use strict";(function(t){var i=n(4),o="object"==typeof exports&&exports&&!exports.nodeType&&exports,r=o&&"object"==typeof t&&t&&!t.nodeType&&t,s=r&&r.exports===o?i.a.Buffer:void 0,a=s?s.allocUnsafe:void 0;e.a=function(t,e){if(e)return t.slice();var n=t.length,i=a?a(n):new t.constructor(n);return t.copy(i),i}}).call(this,n(12)(t))},function(t){t.exports={a:"12.1.0"}},function(t,e){t.exports='<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5.042 9.367l2.189 1.837a.75.75 0 0 1-.965 1.149l-3.788-3.18a.747.747 0 0 1-.21-.284.75.75 0 0 1 .17-.945L6.23 4.762a.75.75 0 1 1 .964 1.15L4.863 7.866h8.917A.75.75 0 0 1 14 7.9a4 4 0 1 1-1.477 7.718l.344-1.489a2.5 2.5 0 1 0 1.094-4.73l.008-.032H5.042z"/></svg>'},function(t,e){t.exports='<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M14.958 9.367l-2.189 1.837a.75.75 0 0 0 .965 1.149l3.788-3.18a.747.747 0 0 0 .21-.284.75.75 0 0 0-.17-.945L13.77 4.762a.75.75 0 1 0-.964 1.15l2.331 1.955H6.22A.75.75 0 0 0 6 7.9a4 4 0 1 0 1.477 7.718l-.344-1.489A2.5 2.5 0 1 1 6.039 9.4l-.008-.032h8.927z"/></svg>'},function(t,e){t.exports='<svg width="20" height="20" xmlns="http://www.w3.org/2000/svg"><path class="ck-icon__fill" d="M6.193 17.02l-.102-.121-2.553-3.536a2 2 0 0 1 .956-3.3c.699-.182 1.442.026 2.005.614L7.642 12.1l6.515-8.164.074-.083c.757-.756 1.652-.65 2.38-.081.77.6.869 1.79.159 2.573L9.203 16.896l-.105.124c-.385.386-.91.597-1.453.586-.543.01-1.067-.2-1.452-.586z" fill-opacity=".8"/><path d="M7.645 16.606a.997.997 0 0 0 .745-.292l7.606-10.606c.391-.39.28-.93 0-1.148-.28-.219-.667-.39-1.058 0L7.645 13.7 5.72 11.304a1 1 0 1 0-1.414 1.414l2.596 3.596a.997.997 0 0 0 .744.292z"/></svg>\n'},function(t,e){t.exports='<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M8.636 9.531l-2.758 3.94a.5.5 0 0 0 .122.696l3.224 2.284h1.314l2.636-3.736L8.636 9.53zm.288 8.451L5.14 15.396a2 2 0 0 1-.491-2.786l6.673-9.53a2 2 0 0 1 2.785-.49l3.742 2.62a2 2 0 0 1 .491 2.785l-7.269 10.053-2.147-.066z"/><path d="M4 18h5.523v-1H4zm-2 0h1v-1H2z"/></svg>'},function(t,e){t.exports='<svg viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg"><path d="M.941 4.523a.75.75 0 1 1 1.06-1.06l3.006 3.005 3.005-3.005a.75.75 0 1 1 1.06 1.06l-3.549 3.55a.75.75 0 0 1-1.168-.136L.941 4.523z"/></svg>'},function(t,e){t.exports='<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M11.03 3h6.149a.75.75 0 1 1 0 1.5h-5.514L11.03 3zm1.27 3h4.879a.75.75 0 1 1 0 1.5h-4.244L12.3 6zm1.27 3h3.609a.75.75 0 1 1 0 1.5h-2.973L13.57 9zm-2.754 2.5L8.038 4.785 5.261 11.5h5.555zm.62 1.5H4.641l-1.666 4.028H1.312l5.789-14h1.875l5.789 14h-1.663L11.436 13z"/></svg>'},function(t,e){t.exports='<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.816 11.5L7.038 4.785 4.261 11.5h5.555zm.62 1.5H3.641l-1.666 4.028H.312l5.789-14h1.875l5.789 14h-1.663L10.436 13zm7.55 2.279l.779-.779.707.707-2.265 2.265-2.193-2.265.707-.707.765.765V4.825c0-.042 0-.083.002-.123l-.77.77-.707-.707L17.207 2.5l2.265 2.265-.707.707-.782-.782c.002.043.003.089.003.135v10.454z"/></svg>'},function(t,e){t.exports='<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M12.4 10.3L10 4.5l-2.4 5.8h4.8zm.5 1.2H7.1L5.7 15H4.2l5-12h1.6l5 12h-1.5L13 11.5zM16 18.5H4a1 1 0 0 1 0-2h12a1 1 0 0 1 0 2z"/></svg>\n'},function(t,e){t.exports='<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M4 2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zm8.38 9.262H7.62L10 5.506l2.38 5.756zm.532 1.285L14.34 16h1.426L10.804 4H9.196L4.234 16H5.66l1.428-3.453h5.824z"/></svg>'},function(t,e){t.exports='<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.187 17H5.773c-.637 0-1.092-.138-1.364-.415-.273-.277-.409-.718-.409-1.323V4.738c0-.617.14-1.062.419-1.332.279-.27.73-.406 1.354-.406h4.68c.69 0 1.288.041 1.793.124.506.083.96.242 1.36.478.341.197.644.447.906.75a3.262 3.262 0 0 1 .808 2.162c0 1.401-.722 2.426-2.167 3.075C15.05 10.175 16 11.315 16 13.01a3.756 3.756 0 0 1-2.296 3.504 6.1 6.1 0 0 1-1.517.377c-.571.073-1.238.11-2 .11zm-.217-6.217H7v4.087h3.069c1.977 0 2.965-.69 2.965-2.072 0-.707-.256-1.22-.768-1.537-.512-.319-1.277-.478-2.296-.478zM7 5.13v3.619h2.606c.729 0 1.292-.067 1.69-.2a1.6 1.6 0 0 0 .91-.765c.165-.267.247-.566.247-.897 0-.707-.26-1.176-.778-1.409-.519-.232-1.31-.348-2.375-.348H7z"/></svg>'},function(t,e){t.exports='<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.586 14.633l.021.004c-.036.335.095.655.393.962.082.083.173.15.274.201h1.474a.6.6 0 1 1 0 1.2H5.304a.6.6 0 0 1 0-1.2h1.15c.474-.07.809-.182 1.005-.334.157-.122.291-.32.404-.597l2.416-9.55a1.053 1.053 0 0 0-.281-.823 1.12 1.12 0 0 0-.442-.296H8.15a.6.6 0 0 1 0-1.2h6.443a.6.6 0 1 1 0 1.2h-1.195c-.376.056-.65.155-.823.296-.215.175-.423.439-.623.79l-2.366 9.347z"/></svg>'},function(t,e){t.exports='<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M18 3.75a.75.75 0 0 1-.75.75H2.75a.75.75 0 1 1 0-1.5h14.5a.75.75 0 0 1 .75.75zm0 8a.75.75 0 0 1-.75.75H2.75a.75.75 0 1 1 0-1.5h14.5a.75.75 0 0 1 .75.75zm0 4a.75.75 0 0 1-.75.75H7.321a.75.75 0 1 1 0-1.5h9.929a.75.75 0 0 1 .75.75zm0-8a.75.75 0 0 1-.75.75H7.321a.75.75 0 1 1 0-1.5h9.929a.75.75 0 0 1 .75.75z"/></svg>'},function(t,e){t.exports='<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 3.75c0 .414.336.75.75.75h14.5a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75zm0 8c0 .414.336.75.75.75h14.5a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75zm2.286 4c0 .414.336.75.75.75h9.928a.75.75 0 1 0 0-1.5H5.036a.75.75 0 0 0-.75.75zm0-8c0 .414.336.75.75.75h9.928a.75.75 0 1 0 0-1.5H5.036a.75.75 0 0 0-.75.75z"/></svg>'},function(t,e){t.exports='<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 3.75c0 .414.336.75.75.75h14.5a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75zm0 8c0 .414.336.75.75.75h14.5a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75zm0 4c0 .414.336.75.75.75h9.929a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75zm0-8c0 .414.336.75.75.75h14.5a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75z"/></svg>'},function(t,e){t.exports='<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M3 10.423a6.5 6.5 0 0 1 6.056-6.408l.038.67C6.448 5.423 5.354 7.663 5.22 10H9c.552 0 .5.432.5.986v4.511c0 .554-.448.503-1 .503h-5c-.552 0-.5-.449-.5-1.003v-4.574zm8 0a6.5 6.5 0 0 1 6.056-6.408l.038.67c-2.646.739-3.74 2.979-3.873 5.315H17c.552 0 .5.432.5.986v4.511c0 .554-.448.503-1 .503h-5c-.552 0-.5-.449-.5-1.003v-4.574z"/></svg>'},function(t,e){t.exports='<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M11.627 16.5zm5.873-.196zm0-7.001V8h-13v8.5h4.341c.191.54.457 1.044.785 1.5H2a1.5 1.5 0 0 1-1.5-1.5v-13A1.5 1.5 0 0 1 2 2h4.5a1.5 1.5 0 0 1 1.06.44L9.122 4H16a1.5 1.5 0 0 1 1.5 1.5v1A1.5 1.5 0 0 1 19 8v2.531a6.027 6.027 0 0 0-1.5-1.228zM16 6.5v-1H8.5l-2-2H2v13h1V8a1.5 1.5 0 0 1 1.5-1.5H16z"/><path d="M14.5 19.5a5 5 0 1 1 0-10 5 5 0 0 1 0 10zM15 14v-2h-1v2h-2v1h2v2h1v-2h2v-1h-2z"/></svg>'},function(t,e){t.exports='<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M4 0v1H1v3H0V.5A.5.5 0 0 1 .5 0H4zm8 0h3.5a.5.5 0 0 1 .5.5V4h-1V1h-3V0zM4 16H.5a.5.5 0 0 1-.5-.5V12h1v3h3v1zm8 0v-1h3v-3h1v3.5a.5.5 0 0 1-.5.5H12z"/><path fill-opacity=".256" d="M1 1h14v14H1z"/><g class="ck-icon__selected-indicator"><path d="M7 0h2v1H7V0zM0 7h1v2H0V7zm15 0h1v2h-1V7zm-8 8h2v1H7v-1z"/><path fill-opacity=".254" d="M1 1h14v14H1z"/></g></svg>'},function(t,e){t.exports='<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5.085 6.22L2.943 4.078a.75.75 0 1 1 1.06-1.06l2.592 2.59A11.094 11.094 0 0 1 10 5.068c4.738 0 8.578 3.101 8.578 5.083 0 1.197-1.401 2.803-3.555 3.887l1.714 1.713a.75.75 0 0 1-.09 1.138.488.488 0 0 1-.15.084.75.75 0 0 1-.821-.16L6.17 7.304c-.258.11-.51.233-.757.365l6.239 6.24-.006.005.78.78c-.388.094-.78.166-1.174.215l-1.11-1.11h.011L4.55 8.197a7.2 7.2 0 0 0-.665.514l-.112.098 4.897 4.897-.005.006 1.276 1.276a10.164 10.164 0 0 1-1.477-.117l-.479-.479-.009.009-4.863-4.863-.022.031a2.563 2.563 0 0 0-.124.2c-.043.077-.08.158-.108.241a.534.534 0 0 0-.028.133.29.29 0 0 0 .008.072.927.927 0 0 0 .082.226c.067.133.145.26.234.379l3.242 3.365.025.01.59.623c-3.265-.918-5.59-3.155-5.59-4.668 0-1.194 1.448-2.838 3.663-3.93zm7.07.531a4.632 4.632 0 0 1 1.108 5.992l.345.344.046-.018a9.313 9.313 0 0 0 2-1.112c.256-.187.5-.392.727-.613.137-.134.27-.277.392-.431.072-.091.141-.185.203-.286.057-.093.107-.19.148-.292a.72.72 0 0 0 .036-.12.29.29 0 0 0 .008-.072.492.492 0 0 0-.028-.133.999.999 0 0 0-.036-.096 2.165 2.165 0 0 0-.071-.145 2.917 2.917 0 0 0-.125-.2 3.592 3.592 0 0 0-.263-.335 5.444 5.444 0 0 0-.53-.523 7.955 7.955 0 0 0-1.054-.768 9.766 9.766 0 0 0-1.879-.891c-.337-.118-.68-.219-1.027-.301zm-2.85.21l-.069.002a.508.508 0 0 0-.254.097.496.496 0 0 0-.104.679.498.498 0 0 0 .326.199l.045.005c.091.003.181.003.272.012a2.45 2.45 0 0 1 2.017 1.513c.024.061.043.125.069.185a.494.494 0 0 0 .45.287h.008a.496.496 0 0 0 .35-.158.482.482 0 0 0 .13-.335.638.638 0 0 0-.048-.219 3.379 3.379 0 0 0-.36-.723 3.438 3.438 0 0 0-2.791-1.543l-.028-.001h-.013z"/></svg>'},function(t,e){t.exports='<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M6.91 10.54c.26-.23.64-.21.88.03l3.36 3.14 2.23-2.06a.64.64 0 0 1 .87 0l2.52 2.97V4.5H3.2v10.12l3.71-4.08zm10.27-7.51c.6 0 1.09.47 1.09 1.05v11.84c0 .59-.49 1.06-1.09 1.06H2.79c-.6 0-1.09-.47-1.09-1.06V4.08c0-.58.49-1.05 1.1-1.05h14.38zm-5.22 5.56a1.96 1.96 0 1 1 3.4-1.96 1.96 1.96 0 0 1-3.4 1.96z"/></svg>'},function(t,e){t.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 700 250"><rect rx="4"/></svg>'},function(t,e){t.exports='<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M11.077 15l.991-1.416a.75.75 0 1 1 1.229.86l-1.148 1.64a.748.748 0 0 1-.217.206 5.251 5.251 0 0 1-8.503-5.955.741.741 0 0 1 .12-.274l1.147-1.639a.75.75 0 1 1 1.228.86L4.933 10.7l.006.003a3.75 3.75 0 0 0 6.132 4.294l.006.004zm5.494-5.335a.748.748 0 0 1-.12.274l-1.147 1.639a.75.75 0 1 1-1.228-.86l.86-1.23a3.75 3.75 0 0 0-6.144-4.301l-.86 1.229a.75.75 0 0 1-1.229-.86l1.148-1.64a.748.748 0 0 1 .217-.206 5.251 5.251 0 0 1 8.503 5.955zm-4.563-2.532a.75.75 0 0 1 .184 1.045l-3.155 4.505a.75.75 0 1 1-1.229-.86l3.155-4.506a.75.75 0 0 1 1.045-.184zm4.919 10.562l-1.414 1.414a.75.75 0 1 1-1.06-1.06l1.414-1.415-1.415-1.414a.75.75 0 0 1 1.061-1.06l1.414 1.414 1.414-1.415a.75.75 0 0 1 1.061 1.061l-1.414 1.414 1.414 1.415a.75.75 0 0 1-1.06 1.06l-1.415-1.414z"/></svg>'},function(t,e){t.exports='<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M7.3 17.37l-.061.088a1.518 1.518 0 0 1-.934.535l-4.178.663-.806-4.153a1.495 1.495 0 0 1 .187-1.058l.056-.086L8.77 2.639c.958-1.351 2.803-1.076 4.296-.03 1.497 1.047 2.387 2.693 1.433 4.055L7.3 17.37zM9.14 4.728l-5.545 8.346 3.277 2.294 5.544-8.346L9.14 4.728zM6.07 16.512l-3.276-2.295.53 2.73 2.746-.435zM9.994 3.506L13.271 5.8c.316-.452-.16-1.333-1.065-1.966-.905-.634-1.895-.78-2.212-.328zM8 18.5L9.375 17H19v1.5H8z"/></svg>'},function(t,e){t.exports='<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M11.077 15l.991-1.416a.75.75 0 1 1 1.229.86l-1.148 1.64a.748.748 0 0 1-.217.206 5.251 5.251 0 0 1-8.503-5.955.741.741 0 0 1 .12-.274l1.147-1.639a.75.75 0 1 1 1.228.86L4.933 10.7l.006.003a3.75 3.75 0 0 0 6.132 4.294l.006.004zm5.494-5.335a.748.748 0 0 1-.12.274l-1.147 1.639a.75.75 0 1 1-1.228-.86l.86-1.23a3.75 3.75 0 0 0-6.144-4.301l-.86 1.229a.75.75 0 0 1-1.229-.86l1.148-1.64a.748.748 0 0 1 .217-.206 5.251 5.251 0 0 1 8.503 5.955zm-4.563-2.532a.75.75 0 0 1 .184 1.045l-3.155 4.505a.75.75 0 1 1-1.229-.86l3.155-4.506a.75.75 0 0 1 1.045-.184z"/></svg>'},function(t,e){t.exports='<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M7 5.75c0 .414.336.75.75.75h9.5a.75.75 0 1 0 0-1.5h-9.5a.75.75 0 0 0-.75.75zM3.5 3v5H2V3.7H1v-1h2.5V3zM.343 17.857l2.59-3.257H2.92a.6.6 0 1 0-1.04 0H.302a2 2 0 1 1 3.995 0h-.001c-.048.405-.16.734-.333.988-.175.254-.59.692-1.244 1.312H4.3v1h-4l.043-.043zM7 14.75a.75.75 0 0 1 .75-.75h9.5a.75.75 0 1 1 0 1.5h-9.5a.75.75 0 0 1-.75-.75z"/></svg>'},function(t,e){t.exports='<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M7 5.75c0 .414.336.75.75.75h9.5a.75.75 0 1 0 0-1.5h-9.5a.75.75 0 0 0-.75.75zm-6 0C1 4.784 1.777 4 2.75 4c.966 0 1.75.777 1.75 1.75 0 .966-.777 1.75-1.75 1.75C1.784 7.5 1 6.723 1 5.75zm6 9c0 .414.336.75.75.75h9.5a.75.75 0 1 0 0-1.5h-9.5a.75.75 0 0 0-.75.75zm-6 0c0-.966.777-1.75 1.75-1.75.966 0 1.75.777 1.75 1.75 0 .966-.777 1.75-1.75 1.75-.966 0-1.75-.777-1.75-1.75z"/></svg>'},function(t,e){t.exports='<svg viewBox="0 0 64 42" xmlns="http://www.w3.org/2000/svg"><path d="M47.426 17V3.713L63.102 0v19.389h-.001l.001.272c0 1.595-2.032 3.43-4.538 4.098-2.506.668-4.538-.083-4.538-1.678 0-1.594 2.032-3.43 4.538-4.098.914-.244 2.032-.565 2.888-.603V4.516L49.076 7.447v9.556A1.014 1.014 0 0 0 49 17h-1.574zM29.5 17h-8.343a7.073 7.073 0 1 0-4.657 4.06v3.781H3.3a2.803 2.803 0 0 1-2.8-2.804V8.63a2.803 2.803 0 0 1 2.8-2.805h4.082L8.58 2.768A1.994 1.994 0 0 1 10.435 1.5h8.985c.773 0 1.477.448 1.805 1.149l1.488 3.177H26.7c1.546 0 2.8 1.256 2.8 2.805V17zm-11.637 0H17.5a1 1 0 0 0-1 1v.05A4.244 4.244 0 1 1 17.863 17zm29.684 2c.97 0 .953-.048.953.889v20.743c0 .953.016.905-.953.905H19.453c-.97 0-.953.048-.953-.905V19.89c0-.937-.016-.889.97-.889h28.077zm-4.701 19.338V22.183H24.154v16.155h18.692zM20.6 21.375v1.616h1.616v-1.616H20.6zm0 3.231v1.616h1.616v-1.616H20.6zm0 3.231v1.616h1.616v-1.616H20.6zm0 3.231v1.616h1.616v-1.616H20.6zm0 3.231v1.616h1.616v-1.616H20.6zm0 3.231v1.616h1.616V37.53H20.6zm24.233-16.155v1.616h1.615v-1.616h-1.615zm0 3.231v1.616h1.615v-1.616h-1.615zm0 3.231v1.616h1.615v-1.616h-1.615zm0 3.231v1.616h1.615v-1.616h-1.615zm0 3.231v1.616h1.615v-1.616h-1.615zm0 3.231v1.616h1.615V37.53h-1.615zM29.485 25.283a.4.4 0 0 1 .593-.35l9.05 4.977a.4.4 0 0 1 0 .701l-9.05 4.978a.4.4 0 0 1-.593-.35v-9.956z"/></svg>'},function(t,e){t.exports='<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M18.68 2.53c.6 0 .59-.03.59.55v12.84c0 .59.01.56-.59.56H1.29c-.6 0-.59.03-.59-.56V3.08c0-.58-.01-.55.6-.55h17.38zM15.77 14.5v-10H4.2v10h11.57zM2 4v1h1V4H2zm0 2v1h1V6H2zm0 2v1h1V8H2zm0 2v1h1v-1H2zm0 2v1h1v-1H2zm0 2v1h1v-1H2zM17 4v1h1V4h-1zm0 2v1h1V6h-1zm0 2v1h1V8h-1zm0 2v1h1v-1h-1zm0 2v1h1v-1h-1zm0 2v1h1v-1h-1zM7.5 6.677a.4.4 0 0 1 .593-.351l5.133 2.824a.4.4 0 0 1 0 .7l-5.133 2.824a.4.4 0 0 1-.593-.35V6.676z"/></svg>'},function(t,e){t.exports='<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M3 6v3h4V6H3zm0 4v3h4v-3H3zm0 4v3h4v-3H3zm5 3h4v-3H8v3zm5 0h4v-3h-4v3zm4-4v-3h-4v3h4zm0-4V6h-4v3h4zm1.5 8a1.5 1.5 0 0 1-1.5 1.5H3A1.5 1.5 0 0 1 1.5 17V4c.222-.863 1.068-1.5 2-1.5h13c.932 0 1.778.637 2 1.5v13zM12 13v-3H8v3h4zm0-4V6H8v3h4z"/></svg>'},function(t,e){t.exports='<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 1h15A1.5 1.5 0 0 1 19 2.5v15a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 1 17.5v-15A1.5 1.5 0 0 1 2.5 1zM2 2v16h16V2H2z" opacity=".6"/><path d="M18 7v1H2V7h16zm0 5v1H2v-1h16z" opacity=".6"/><path d="M14 1v18a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V1a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1zm-2 1H8v4h4V2zm0 6H8v4h4V8zm0 6H8v4h4v-4z"/></svg>'},function(t,e){t.exports='<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 1h15A1.5 1.5 0 0 1 19 2.5v15a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 1 17.5v-15A1.5 1.5 0 0 1 2.5 1zM2 2v16h16V2H2z" opacity=".6"/><path d="M7 2h1v16H7V2zm5 0h1v16h-1V2z" opacity=".6"/><path d="M1 6h18a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1zm1 2v4h4V8H2zm6 0v4h4V8H8zm6 0v4h4V8h-4z"/></svg>'},function(t,e){t.exports='<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 1h15A1.5 1.5 0 0 1 19 2.5v15a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 1 17.5v-15A1.5 1.5 0 0 1 2.5 1zM2 2v16h16V2H2z" opacity=".6"/><path d="M7 2h1v16H7V2zm5 0h1v7h-1V2zm6 5v1H2V7h16zM8 12v1H2v-1h6z" opacity=".6"/><path d="M7 7h12a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1zm1 2v9h10V9H8z"/></svg>'},function(t,e,n){var i=n(54);"string"==typeof i&&(i=[[t.i,i,""]]);var o={singleton:!0,hmr:!0,transform:void 0,insertInto:void 0};n(1)(i,o);i.locals&&(t.exports=i.locals)},function(t,e){t.exports=".ck.ck-placeholder:before,.ck .ck-placeholder:before{content:attr(data-placeholder);pointer-events:none;cursor:text;color:var(--ck-color-engine-placeholder-text)}"},function(t,e){t.exports=function(t){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var n=e.protocol+"//"+e.host,i=n+e.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(t,e){var o,r=e.trim().replace(/^"(.*)"$/,function(t,e){return e}).replace(/^'(.*)'$/,function(t,e){return e});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(r)?t:(o=0===r.indexOf("//")?r:0===r.indexOf("/")?n+r:i+r.replace(/^\.\//,""),"url("+JSON.stringify(o)+")")})}},function(t,e,n){var i=n(57);"string"==typeof i&&(i=[[t.i,i,""]]);var o={singleton:!0,hmr:!0,transform:void 0,insertInto:void 0};n(1)(i,o);i.locals&&(t.exports=i.locals)},function(t,e){t.exports=".ck-hidden{display:none!important}.ck.ck-reset,.ck.ck-reset_all,.ck.ck-reset_all *{box-sizing:border-box;width:auto;height:auto;position:static}:root{--ck-z-default:1;--ck-z-modal:calc(var(--ck-z-default) + 999);--ck-color-base-foreground:#fafafa;--ck-color-base-background:#fff;--ck-color-base-border:#c4c4c4;--ck-color-base-action:#61b045;--ck-color-base-focus:#6cb5f9;--ck-color-base-text:#333;--ck-color-base-active:#198cf0;--ck-color-base-active-focus:#0e7fe1;--ck-color-base-error:#db3700;--ck-color-focus-border:#47a4f5;--ck-color-focus-shadow:rgba(119,186,248,0.5);--ck-color-focus-disabled-shadow:rgba(119,186,248,0.3);--ck-color-focus-error-shadow:rgba(255,64,31,0.3);--ck-color-text:var(--ck-color-base-text);--ck-color-shadow-drop:rgba(0,0,0,0.15);--ck-color-shadow-drop-active:rgba(0,0,0,0.2);--ck-color-shadow-inner:rgba(0,0,0,0.1);--ck-color-button-default-background:transparent;--ck-color-button-default-hover-background:#e6e6e6;--ck-color-button-default-active-background:#d9d9d9;--ck-color-button-default-active-shadow:#bfbfbf;--ck-color-button-default-disabled-background:transparent;--ck-color-button-on-background:#dedede;--ck-color-button-on-hover-background:#c4c4c4;--ck-color-button-on-active-background:#bababa;--ck-color-button-on-active-shadow:#a1a1a1;--ck-color-button-on-disabled-background:#dedede;--ck-color-button-action-background:var(--ck-color-base-action);--ck-color-button-action-hover-background:#579e3d;--ck-color-button-action-active-background:#53973b;--ck-color-button-action-active-shadow:#498433;--ck-color-button-action-disabled-background:#7ec365;--ck-color-button-action-text:var(--ck-color-base-background);--ck-color-button-save:#008a00;--ck-color-button-cancel:#db3700;--ck-color-switch-button-off-background:#b0b0b0;--ck-color-switch-button-on-background:var(--ck-color-button-action-background);--ck-color-switch-button-inner-background:var(--ck-color-base-background);--ck-color-dropdown-panel-background:var(--ck-color-base-background);--ck-color-dropdown-panel-border:var(--ck-color-base-border);--ck-color-input-background:var(--ck-color-base-background);--ck-color-input-border:#c7c7c7;--ck-color-input-error-border:var(--ck-color-base-error);--ck-color-input-text:var(--ck-color-base-text);--ck-color-input-disabled-background:#f2f2f2;--ck-color-input-disabled-border:#c7c7c7;--ck-color-input-disabled-text:#5c5c5c;--ck-color-list-background:var(--ck-color-base-background);--ck-color-list-button-hover-background:var(--ck-color-button-default-hover-background);--ck-color-list-button-on-background:var(--ck-color-base-active);--ck-color-list-button-on-background-focus:var(--ck-color-base-active-focus);--ck-color-list-button-on-text:var(--ck-color-base-background);--ck-color-panel-background:var(--ck-color-base-background);--ck-color-panel-border:var(--ck-color-base-border);--ck-color-toolbar-background:var(--ck-color-base-foreground);--ck-color-toolbar-border:var(--ck-color-base-border);--ck-color-tooltip-background:var(--ck-color-base-text);--ck-color-tooltip-text:var(--ck-color-base-background);--ck-color-engine-placeholder-text:#707070;--ck-color-upload-bar-background:#6cb5f9;--ck-color-upload-infinite-background:rgba(0,0,0,0.1);--ck-color-link-default:#0000f0;--ck-color-link-selected-background:rgba(31,177,255,0.1);--ck-disabled-opacity:.5;--ck-focus-outer-shadow-geometry:0 0 0 3px;--ck-focus-outer-shadow:var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-shadow);--ck-focus-disabled-outer-shadow:var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-disabled-shadow);--ck-focus-error-outer-shadow:var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-error-shadow);--ck-focus-ring:1px solid var(--ck-color-focus-border);--ck-font-size-base:13px;--ck-line-height-base:1.84615;--ck-font-face:Helvetica,Arial,Tahoma,Verdana,Sans-Serif;--ck-font-size-tiny:0.7em;--ck-font-size-small:0.75em;--ck-font-size-normal:1em;--ck-font-size-big:1.4em;--ck-font-size-large:1.8em;--ck-ui-component-min-height:2.3em}.ck.ck-reset,.ck.ck-reset_all,.ck.ck-reset_all *{margin:0;padding:0;border:0;background:transparent;text-decoration:none;vertical-align:middle;transition:none;word-wrap:break-word}.ck.ck-reset_all,.ck.ck-reset_all *{border-collapse:collapse;font:normal normal normal var(--ck-font-size-base)/var(--ck-line-height-base) var(--ck-font-face);color:var(--ck-color-text);text-align:left;white-space:nowrap;cursor:auto;float:none}.ck.ck-reset_all .ck-rtl *{text-align:right}.ck.ck-reset_all iframe{vertical-align:inherit}.ck.ck-reset_all textarea{white-space:pre-wrap}.ck.ck-reset_all input[type=password],.ck.ck-reset_all input[type=text],.ck.ck-reset_all textarea{cursor:text}.ck.ck-reset_all input[type=password][disabled],.ck.ck-reset_all input[type=text][disabled],.ck.ck-reset_all textarea[disabled]{cursor:default}.ck.ck-reset_all fieldset{padding:10px;border:2px groove #dfdee3}.ck.ck-reset_all button::-moz-focus-inner{padding:0;border:0}:root{--ck-border-radius:2px;--ck-inner-shadow:2px 2px 3px var(--ck-color-shadow-inner) inset;--ck-drop-shadow:0 1px 2px 1px var(--ck-color-shadow-drop);--ck-drop-shadow-active:0 3px 6px 1px var(--ck-color-shadow-drop-active);--ck-spacing-unit:0.6em;--ck-spacing-large:calc(var(--ck-spacing-unit)*1.5);--ck-spacing-standard:var(--ck-spacing-unit);--ck-spacing-medium:calc(var(--ck-spacing-unit)*0.8);--ck-spacing-small:calc(var(--ck-spacing-unit)*0.5);--ck-spacing-tiny:calc(var(--ck-spacing-unit)*0.3);--ck-spacing-extra-tiny:calc(var(--ck-spacing-unit)*0.16)}"},function(t,e,n){var i=n(59);"string"==typeof i&&(i=[[t.i,i,""]]);var o={singleton:!0,hmr:!0,transform:void 0,insertInto:void 0};n(1)(i,o);i.locals&&(t.exports=i.locals)},function(t,e){t.exports=".ck.ck-editor__editable:not(.ck-editor__nested-editable){border-radius:0}.ck-rounded-corners .ck.ck-editor__editable:not(.ck-editor__nested-editable),.ck.ck-editor__editable:not(.ck-editor__nested-editable).ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-editor__editable:not(.ck-editor__nested-editable).ck-focused{outline:none;border:var(--ck-focus-ring);box-shadow:var(--ck-inner-shadow),0 0}.ck.ck-editor__editable_inline{overflow:auto;padding:0 var(--ck-spacing-standard);border:1px solid transparent}.ck.ck-editor__editable_inline>:first-child{margin-top:var(--ck-spacing-large)}.ck.ck-editor__editable_inline>:last-child{margin-bottom:var(--ck-spacing-large)}.ck.ck-balloon-panel.ck-toolbar-container[class*=arrow_n]:after{border-bottom-color:var(--ck-color-base-foreground)}.ck.ck-balloon-panel.ck-toolbar-container[class*=arrow_s]:after{border-top-color:var(--ck-color-base-foreground)}"},function(t,e,n){var i=n(61);"string"==typeof i&&(i=[[t.i,i,""]]);var o={singleton:!0,hmr:!0,transform:void 0,insertInto:void 0};n(1)(i,o);i.locals&&(t.exports=i.locals)},function(t,e){t.exports=".ck.ck-label{display:block}.ck.ck-voice-label{display:none}.ck.ck-label{font-weight:700}"},function(t,e,n){var i=n(63);"string"==typeof i&&(i=[[t.i,i,""]]);var o={singleton:!0,hmr:!0,transform:void 0,insertInto:void 0};n(1)(i,o);i.locals&&(t.exports=i.locals)},function(t,e){t.exports=".ck.ck-sticky-panel .ck-sticky-panel__content_sticky{z-index:var(--ck-z-modal);position:fixed;top:0}.ck.ck-sticky-panel .ck-sticky-panel__content_sticky_bottom-limit{top:auto;position:absolute}.ck.ck-sticky-panel .ck-sticky-panel__content_sticky{box-shadow:var(--ck-drop-shadow),0 0;border-width:0 1px 1px;border-top-left-radius:0;border-top-right-radius:0}"},function(t,e,n){var i=n(65);"string"==typeof i&&(i=[[t.i,i,""]]);var o={singleton:!0,hmr:!0,transform:void 0,insertInto:void 0};n(1)(i,o);i.locals&&(t.exports=i.locals)},function(t,e){t.exports=".ck.ck-toolbar{-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;user-select:none;display:flex;flex-flow:row wrap;align-items:center}.ck.ck-toolbar.ck-toolbar_vertical{flex-direction:column}.ck.ck-toolbar.ck-toolbar_floating{flex-wrap:nowrap}.ck.ck-toolbar__separator{display:inline-block}.ck.ck-toolbar__newline{display:block;width:100%}.ck.ck-toolbar{border-radius:0}.ck-rounded-corners .ck.ck-toolbar,.ck.ck-toolbar.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-toolbar{background:var(--ck-color-toolbar-background);padding:0 var(--ck-spacing-small);border:1px solid var(--ck-color-toolbar-border)}.ck.ck-toolbar>*{margin-right:var(--ck-spacing-small);margin-top:var(--ck-spacing-small);margin-bottom:var(--ck-spacing-small)}.ck.ck-toolbar.ck-toolbar_vertical{padding:0}.ck.ck-toolbar.ck-toolbar_vertical>*{width:100%;margin:0;border-radius:0;border:0}.ck.ck-toolbar>:last-child{margin-right:0}.ck-toolbar-container .ck.ck-toolbar{border:0}.ck.ck-toolbar__separator{align-self:stretch;width:1px;margin-top:0;margin-bottom:0;background:var(--ck-color-toolbar-border)}.ck.ck-toolbar__newline{margin:0}"},function(t,e,n){var i=n(67);"string"==typeof i&&(i=[[t.i,i,""]]);var o={singleton:!0,hmr:!0,transform:void 0,insertInto:void 0};n(1)(i,o);i.locals&&(t.exports=i.locals)},function(t,e){t.exports=".ck.ck-editor{position:relative}.ck.ck-editor .ck-editor__top .ck-sticky-panel .ck-toolbar{z-index:var(--ck-z-modal)}.ck.ck-editor__top .ck-sticky-panel .ck-toolbar{border-radius:0}.ck-rounded-corners .ck.ck-editor__top .ck-sticky-panel .ck-toolbar,.ck.ck-editor__top .ck-sticky-panel .ck-toolbar.ck-rounded-corners{border-radius:var(--ck-border-radius);border-bottom-left-radius:0;border-bottom-right-radius:0}.ck.ck-editor__top .ck-sticky-panel .ck-toolbar{border-bottom-width:0}.ck.ck-editor__top .ck-sticky-panel .ck-sticky-panel__content_sticky .ck-toolbar{border-bottom-width:1px;border-radius:0}.ck-rounded-corners .ck.ck-editor__top .ck-sticky-panel .ck-sticky-panel__content_sticky .ck-toolbar,.ck.ck-editor__top .ck-sticky-panel .ck-sticky-panel__content_sticky .ck-toolbar.ck-rounded-corners{border-radius:var(--ck-border-radius);border-radius:0}.ck.ck-editor__main>.ck-editor__editable{background:var(--ck-color-base-background);border-radius:0}.ck-rounded-corners .ck.ck-editor__main>.ck-editor__editable,.ck.ck-editor__main>.ck-editor__editable.ck-rounded-corners{border-radius:var(--ck-border-radius);border-top-left-radius:0;border-top-right-radius:0}.ck.ck-editor__main>.ck-editor__editable:not(.ck-focused){border-color:var(--ck-color-base-border)}"},function(t,e,n){var i=n(69);"string"==typeof i&&(i=[[t.i,i,""]]);var o={singleton:!0,hmr:!0,transform:void 0,insertInto:void 0};n(1)(i,o);i.locals&&(t.exports=i.locals)},function(t,e){t.exports=".ck.ck-icon{vertical-align:middle}:root{--ck-icon-size:calc(var(--ck-line-height-base)*var(--ck-font-size-normal))}.ck.ck-icon{width:var(--ck-icon-size);height:var(--ck-icon-size);font-size:.8333350694em;will-change:transform}.ck.ck-icon,.ck.ck-icon *{color:inherit;cursor:inherit}.ck.ck-icon :not([fill]){fill:currentColor}"},function(t,e,n){var i=n(71);"string"==typeof i&&(i=[[t.i,i,""]]);var o={singleton:!0,hmr:!0,transform:void 0,insertInto:void 0};n(1)(i,o);i.locals&&(t.exports=i.locals)},function(t,e){t.exports='.ck.ck-tooltip,.ck.ck-tooltip .ck-tooltip__text:after{position:absolute;pointer-events:none;-webkit-backface-visibility:hidden}.ck-tooltip{visibility:hidden;opacity:0;display:none;z-index:var(--ck-z-modal)}.ck-tooltip .ck-tooltip__text{display:inline-block}.ck-tooltip .ck-tooltip__text:after{content:"";width:0;height:0}:root{--ck-tooltip-arrow-size:5px}.ck.ck-tooltip{left:50%}.ck.ck-tooltip.ck-tooltip_s{bottom:calc(-1*var(--ck-tooltip-arrow-size));transform:translateY(100%)}.ck.ck-tooltip.ck-tooltip_s .ck-tooltip__text:after{top:calc(-1*var(--ck-tooltip-arrow-size));transform:translateX(-50%);border-left-color:transparent;border-bottom-color:var(--ck-color-tooltip-background);border-right-color:transparent;border-top-color:transparent;border-left-width:var(--ck-tooltip-arrow-size);border-bottom-width:var(--ck-tooltip-arrow-size);border-right-width:var(--ck-tooltip-arrow-size);border-top-width:0}.ck.ck-tooltip.ck-tooltip_n{top:calc(-1*var(--ck-tooltip-arrow-size));transform:translateY(-100%)}.ck.ck-tooltip.ck-tooltip_n .ck-tooltip__text:after{bottom:calc(-1*var(--ck-tooltip-arrow-size));transform:translateX(-50%);border-left-color:transparent;border-bottom-color:transparent;border-right-color:transparent;border-top-color:var(--ck-color-tooltip-background);border-left-width:var(--ck-tooltip-arrow-size);border-bottom-width:0;border-right-width:var(--ck-tooltip-arrow-size);border-top-width:var(--ck-tooltip-arrow-size)}.ck.ck-tooltip .ck-tooltip__text{border-radius:0}.ck-rounded-corners .ck.ck-tooltip .ck-tooltip__text,.ck.ck-tooltip .ck-tooltip__text.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-tooltip .ck-tooltip__text{font-size:.9em;line-height:1.5;color:var(--ck-color-tooltip-text);padding:var(--ck-spacing-small) var(--ck-spacing-medium);background:var(--ck-color-tooltip-background);position:relative;left:-50%}.ck.ck-tooltip .ck-tooltip__text:after{border-style:solid;left:50%}.ck.ck-tooltip,.ck.ck-tooltip .ck-tooltip__text:after{transition:opacity .2s ease-in-out .2s}'},function(t,e,n){var i=n(73);"string"==typeof i&&(i=[[t.i,i,""]]);var o={singleton:!0,hmr:!0,transform:void 0,insertInto:void 0};n(1)(i,o);i.locals&&(t.exports=i.locals)},function(t,e){t.exports=".ck.ck-button,a.ck.ck-button{-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;user-select:none}.ck.ck-button .ck-tooltip,a.ck.ck-button .ck-tooltip{display:block}@media (hover:none){.ck.ck-button .ck-tooltip,a.ck.ck-button .ck-tooltip{display:none}}.ck.ck-button,a.ck.ck-button{position:relative;display:inline-flex;align-items:center;justify-content:left}.ck.ck-button.ck-button_with-text .ck-button__label,a.ck.ck-button.ck-button_with-text .ck-button__label{display:inline-block}.ck.ck-button:not(.ck-button_with-text),a.ck.ck-button:not(.ck-button_with-text){justify-content:center}.ck.ck-button:hover .ck-tooltip,a.ck.ck-button:hover .ck-tooltip{visibility:visible;opacity:1}.ck.ck-button .ck-button__label,.ck.ck-button:focus:not(:hover) .ck-tooltip,a.ck.ck-button .ck-button__label,a.ck.ck-button:focus:not(:hover) .ck-tooltip{display:none}.ck.ck-button,a.ck.ck-button{background:var(--ck-color-button-default-background)}.ck.ck-button:not(.ck-disabled):hover,a.ck.ck-button:not(.ck-disabled):hover{background:var(--ck-color-button-default-hover-background)}.ck.ck-button:not(.ck-disabled):active,a.ck.ck-button:not(.ck-disabled):active{background:var(--ck-color-button-default-active-background);box-shadow:inset 0 2px 2px var(--ck-color-button-default-active-shadow)}.ck.ck-button.ck-disabled,a.ck.ck-button.ck-disabled{background:var(--ck-color-button-default-disabled-background)}.ck.ck-button,a.ck.ck-button{border-radius:0}.ck-rounded-corners .ck.ck-button,.ck-rounded-corners a.ck.ck-button,.ck.ck-button.ck-rounded-corners,a.ck.ck-button.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-button,a.ck.ck-button{white-space:nowrap;cursor:default;vertical-align:middle;padding:var(--ck-spacing-tiny);text-align:center;min-width:var(--ck-ui-component-min-height);min-height:var(--ck-ui-component-min-height);line-height:1;font-size:inherit;border:1px solid transparent;transition:box-shadow .2s ease-in-out;-webkit-appearance:none}.ck.ck-button:active,.ck.ck-button:focus,a.ck.ck-button:active,a.ck.ck-button:focus{outline:none;border:var(--ck-focus-ring);box-shadow:var(--ck-focus-outer-shadow),0 0;border-color:transparent}.ck.ck-button.ck-disabled:active,.ck.ck-button.ck-disabled:focus,a.ck.ck-button.ck-disabled:active,a.ck.ck-button.ck-disabled:focus{box-shadow:var(--ck-focus-disabled-outer-shadow),0 0}.ck.ck-button.ck-disabled .ck-button__icon,a.ck.ck-button.ck-disabled .ck-button__icon{opacity:var(--ck-disabled-opacity)}.ck.ck-button.ck-disabled .ck-button__label,a.ck.ck-button.ck-disabled .ck-button__label{opacity:var(--ck-disabled-opacity)}.ck.ck-button.ck-button_with-text,a.ck.ck-button.ck-button_with-text{padding:var(--ck-spacing-tiny) var(--ck-spacing-standard)}.ck.ck-button.ck-button_with-text .ck-button__icon,a.ck.ck-button.ck-button_with-text .ck-button__icon{margin-left:calc(-1*var(--ck-spacing-small));margin-right:var(--ck-spacing-small)}.ck.ck-button.ck-on,a.ck.ck-button.ck-on{background:var(--ck-color-button-on-background)}.ck.ck-button.ck-on:not(.ck-disabled):hover,a.ck.ck-button.ck-on:not(.ck-disabled):hover{background:var(--ck-color-button-on-hover-background)}.ck.ck-button.ck-on:not(.ck-disabled):active,a.ck.ck-button.ck-on:not(.ck-disabled):active{background:var(--ck-color-button-on-active-background);box-shadow:inset 0 2px 2px var(--ck-color-button-on-active-shadow)}.ck.ck-button.ck-on.ck-disabled,a.ck.ck-button.ck-on.ck-disabled{background:var(--ck-color-button-on-disabled-background)}.ck.ck-button.ck-button-save,a.ck.ck-button.ck-button-save{color:var(--ck-color-button-save)}.ck.ck-button.ck-button-cancel,a.ck.ck-button.ck-button-cancel{color:var(--ck-color-button-cancel)}.ck.ck-button .ck-button__icon use,.ck.ck-button .ck-button__icon use *,a.ck.ck-button .ck-button__icon use,a.ck.ck-button .ck-button__icon use *{color:inherit}.ck.ck-button .ck-button__label,a.ck.ck-button .ck-button__label{font-size:inherit;font-weight:inherit;color:inherit;cursor:inherit;vertical-align:middle}.ck.ck-button-action,a.ck.ck-button-action{background:var(--ck-color-button-action-background)}.ck.ck-button-action:not(.ck-disabled):hover,a.ck.ck-button-action:not(.ck-disabled):hover{background:var(--ck-color-button-action-hover-background)}.ck.ck-button-action:not(.ck-disabled):active,a.ck.ck-button-action:not(.ck-disabled):active{background:var(--ck-color-button-action-active-background);box-shadow:inset 0 2px 2px var(--ck-color-button-action-active-shadow)}.ck.ck-button-action.ck-disabled,a.ck.ck-button-action.ck-disabled{background:var(--ck-color-button-action-disabled-background)}.ck.ck-button-action,a.ck.ck-button-action{color:var(--ck-color-button-action-text)}.ck.ck-button-bold,a.ck.ck-button-bold{font-weight:700}"},function(t,e,n){var i=n(75);"string"==typeof i&&(i=[[t.i,i,""]]);var o={singleton:!0,hmr:!0,transform:void 0,insertInto:void 0};n(1)(i,o);i.locals&&(t.exports=i.locals)},function(t,e){t.exports=".ck.ck-color-grid{display:grid}:root{--ck-color-grid-tile-size:20px}.ck.ck-color-grid{grid-gap:calc(var(--ck-spacing-standard)/2);padding:var(--ck-spacing-standard)}.ck.ck-color-grid__tile{border-radius:0}.ck-rounded-corners .ck.ck-color-grid__tile,.ck.ck-color-grid__tile.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-color-grid__tile{width:var(--ck-color-grid-tile-size);height:var(--ck-color-grid-tile-size);min-width:var(--ck-color-grid-tile-size);min-height:var(--ck-color-grid-tile-size);padding:0;transition:box-shadow .2s ease;border:0}.ck.ck-color-grid__tile.ck-disabled{cursor:unset;transition:unset}.ck.ck-color-grid__tile.ck-color-table__color-tile_bordered{box-shadow:0 0 0 1px var(--ck-color-base-border)}.ck.ck-color-grid__tile .ck.ck-icon{display:none}.ck.ck-color-grid__tile.ck-on{box-shadow:0 0 0 1px var(--ck-color-base-background),0 0 0 2px var(--ck-color-base-text)}.ck.ck-color-grid__tile.ck-on .ck.ck-icon{display:block}.ck.ck-color-grid__tile:hover:not(.ck-disabled){box-shadow:0 0 0 2px var(--ck-color-focus-border)}"},function(t,e,n){var i=n(77);"string"==typeof i&&(i=[[t.i,i,""]]);var o={singleton:!0,hmr:!0,transform:void 0,insertInto:void 0};n(1)(i,o);i.locals&&(t.exports=i.locals)},function(t,e){t.exports=".ck .ck-button.ck-color-table__remove-color{display:flex;align-items:center;width:100%;border-bottom:1px solid var(--ck-color-base-border);padding:calc(var(--ck-spacing-standard)/2) var(--ck-spacing-standard)}.ck .ck-button.ck-color-table__remove-color .ck.ck-icon{margin-right:var(--ck-spacing-standard)}"},function(t,e,n){var i=n(79);"string"==typeof i&&(i=[[t.i,i,""]]);var o={singleton:!0,hmr:!0,transform:void 0,insertInto:void 0};n(1)(i,o);i.locals&&(t.exports=i.locals)},function(t,e){t.exports=".ck.ck-dropdown{display:inline-block;position:relative}.ck.ck-dropdown .ck-dropdown__arrow{pointer-events:none;z-index:var(--ck-z-default)}.ck.ck-dropdown .ck-button.ck-dropdown__button{width:100%}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-on .ck-tooltip{display:none}.ck.ck-dropdown .ck-dropdown__panel{-webkit-backface-visibility:hidden;display:none;z-index:var(--ck-z-modal);position:absolute}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel-visible{display:inline-block;will-change:transform}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_ne,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nw{bottom:100%}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_se,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_sw{transform:translate3d(0,100%,0)}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_ne,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_se{left:0}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nw,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_sw{right:0}:root{--ck-dropdown-arrow-size:calc(0.5*var(--ck-icon-size))}.ck.ck-dropdown{font-size:inherit}.ck.ck-dropdown .ck-dropdown__arrow{right:var(--ck-spacing-standard);width:var(--ck-dropdown-arrow-size);margin-left:var(--ck-spacing-small)}.ck.ck-dropdown.ck-disabled .ck-dropdown__arrow{opacity:var(--ck-disabled-opacity)}.ck.ck-dropdown .ck-button.ck-dropdown__button:not(.ck-button_with-text){padding-left:var(--ck-spacing-small)}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-disabled .ck-button__label{opacity:var(--ck-disabled-opacity)}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-on{border-bottom-left-radius:0;border-bottom-right-radius:0}.ck.ck-dropdown .ck-button.ck-dropdown__button .ck-button__label{width:7em;overflow:hidden;text-overflow:ellipsis}.ck.ck-dropdown__panel{box-shadow:var(--ck-drop-shadow),0 0;border-radius:0}.ck-rounded-corners .ck.ck-dropdown__panel,.ck.ck-dropdown__panel.ck-rounded-corners{border-radius:var(--ck-border-radius);border-top-left-radius:0}.ck.ck-dropdown__panel{background:var(--ck-color-dropdown-panel-background);border:1px solid var(--ck-color-dropdown-panel-border);bottom:0;min-width:100%}"},function(t,e,n){var i=n(81);"string"==typeof i&&(i=[[t.i,i,""]]);var o={singleton:!0,hmr:!0,transform:void 0,insertInto:void 0};n(1)(i,o);i.locals&&(t.exports=i.locals)},function(t,e){t.exports=".ck.ck-list{-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;user-select:none;display:flex;flex-direction:column}.ck.ck-list .ck-list__item,.ck.ck-list .ck-list__separator{display:block}.ck.ck-list .ck-list__item>:focus{position:relative;z-index:var(--ck-z-default)}.ck.ck-list{border-radius:0}.ck-rounded-corners .ck.ck-list,.ck.ck-list.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-list{list-style-type:none;background:var(--ck-color-list-background)}.ck.ck-list__item{cursor:default;min-width:12em}.ck.ck-list__item .ck-button{min-height:unset;width:100%;text-align:left;border-radius:0;border:0;padding:calc(0.2*var(--ck-line-height-base)*var(--ck-font-size-base)) calc(0.4*var(--ck-line-height-base)*var(--ck-font-size-base))}.ck.ck-list__item .ck-button .ck-button__label{line-height:calc(1.2*var(--ck-line-height-base)*var(--ck-font-size-base))}.ck.ck-list__item .ck-button:active{box-shadow:none}.ck.ck-list__item .ck-button.ck-on{background:var(--ck-color-list-button-on-background);color:var(--ck-color-list-button-on-text)}.ck.ck-list__item .ck-button.ck-on:hover:not(ck-disabled){background:var(--ck-color-list-button-on-background-focus)}.ck.ck-list__item .ck-button.ck-on:active{box-shadow:none}.ck.ck-list__item .ck-button:hover:not(.ck-disabled){background:var(--ck-color-list-button-hover-background)}.ck.ck-list__item .ck-switchbutton.ck-on{background:var(--ck-color-list-background);color:inherit}.ck.ck-list__item .ck-switchbutton.ck-on:hover:not(ck-disabled){background:var(--ck-color-list-button-hover-background);color:inherit}.ck.ck-list__separator{height:1px;width:100%;background:var(--ck-color-base-border)}"},function(t,e,n){var i=n(83);"string"==typeof i&&(i=[[t.i,i,""]]);var o={singleton:!0,hmr:!0,transform:void 0,insertInto:void 0};n(1)(i,o);i.locals&&(t.exports=i.locals)},function(t,e){t.exports=".ck.ck-button.ck-switchbutton .ck-button__toggle,.ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner{display:block}:root{--ck-switch-button-toggle-width:2.6153846154em;--ck-switch-button-toggle-inner-size:1.0769230769em;--ck-switch-button-toggle-spacing:1px}.ck.ck-button.ck-switchbutton .ck-button__label{margin-right:calc(2*var(--ck-spacing-large))}.ck.ck-button.ck-switchbutton.ck-disabled .ck-button__toggle{opacity:var(--ck-disabled-opacity)}.ck.ck-button.ck-switchbutton .ck-button__toggle{border-radius:0}.ck-rounded-corners .ck.ck-button.ck-switchbutton .ck-button__toggle,.ck.ck-button.ck-switchbutton .ck-button__toggle.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-button.ck-switchbutton .ck-button__toggle{margin-left:auto;transition:background .4s ease;width:var(--ck-switch-button-toggle-width);background:var(--ck-color-switch-button-off-background)}.ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner{border-radius:0}.ck-rounded-corners .ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner,.ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner.ck-rounded-corners{border-radius:var(--ck-border-radius);border-radius:calc(0.5*var(--ck-border-radius))}.ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner{margin:var(--ck-switch-button-toggle-spacing);width:var(--ck-switch-button-toggle-inner-size);height:var(--ck-switch-button-toggle-inner-size);background:var(--ck-color-switch-button-inner-background);transition:transform .3s ease}.ck.ck-button.ck-switchbutton.ck-on .ck-button__toggle{background:var(--ck-color-switch-button-on-background)}.ck.ck-button.ck-switchbutton.ck-on .ck-button__toggle .ck-button__toggle__inner{transform:translateX(1.3846153847em)}"},function(t,e,n){var i=n(85);"string"==typeof i&&(i=[[t.i,i,""]]);var o={singleton:!0,hmr:!0,transform:void 0,insertInto:void 0};n(1)(i,o);i.locals&&(t.exports=i.locals)},function(t,e){t.exports=".ck.ck-toolbar-dropdown .ck-toolbar{flex-wrap:nowrap}.ck.ck-toolbar-dropdown .ck-dropdown__panel .ck-button:focus{z-index:calc(var(--ck-z-default) + 1)}.ck.ck-toolbar-dropdown .ck-toolbar{border:0}"},function(t,e,n){var i=n(87);"string"==typeof i&&(i=[[t.i,i,""]]);var o={singleton:!0,hmr:!0,transform:void 0,insertInto:void 0};n(1)(i,o);i.locals&&(t.exports=i.locals)},function(t,e){t.exports=".ck.ck-dropdown .ck-dropdown__panel .ck-list{border-radius:0}.ck-rounded-corners .ck.ck-dropdown .ck-dropdown__panel .ck-list,.ck.ck-dropdown .ck-dropdown__panel .ck-list.ck-rounded-corners{border-radius:var(--ck-border-radius);border-top-left-radius:0}.ck.ck-dropdown .ck-dropdown__panel .ck-list .ck-list__item:first-child .ck-button{border-radius:0}.ck-rounded-corners .ck.ck-dropdown .ck-dropdown__panel .ck-list .ck-list__item:first-child .ck-button,.ck.ck-dropdown .ck-dropdown__panel .ck-list .ck-list__item:first-child .ck-button.ck-rounded-corners{border-radius:var(--ck-border-radius);border-top-left-radius:0;border-bottom-left-radius:0;border-bottom-right-radius:0}.ck.ck-dropdown .ck-dropdown__panel .ck-list .ck-list__item:last-child .ck-button{border-radius:0}.ck-rounded-corners .ck.ck-dropdown .ck-dropdown__panel .ck-list .ck-list__item:last-child .ck-button,.ck.ck-dropdown .ck-dropdown__panel .ck-list .ck-list__item:last-child .ck-button.ck-rounded-corners{border-radius:var(--ck-border-radius);border-top-left-radius:0;border-top-right-radius:0}"},function(t,e,n){var i=n(89);"string"==typeof i&&(i=[[t.i,i,""]]);var o={singleton:!0,hmr:!0,transform:void 0,insertInto:void 0};n(1)(i,o);i.locals&&(t.exports=i.locals)},function(t,e){t.exports=".text-tiny{font-size:.7em}.text-small{font-size:.85em}.text-big{font-size:1.4em}.text-huge{font-size:1.8em}"},function(t,e,n){var i=n(91);"string"==typeof i&&(i=[[t.i,i,""]]);var o={singleton:!0,hmr:!0,transform:void 0,insertInto:void 0};n(1)(i,o);i.locals&&(t.exports=i.locals)},function(t,e){t.exports=".ck-content blockquote{overflow:hidden;padding-right:1.5em;padding-left:1.5em;margin-left:0;font-style:italic;border-left:5px solid #ccc}"},function(t,e,n){var i=n(93);"string"==typeof i&&(i=[[t.i,i,""]]);var o={singleton:!0,hmr:!0,transform:void 0,insertInto:void 0};n(1)(i,o);i.locals&&(t.exports=i.locals)},function(t,e){t.exports=".ck .ck-widget.ck-widget_with-selection-handler{position:relative}.ck .ck-widget.ck-widget_with-selection-handler .ck-widget__selection-handler{visibility:hidden;position:absolute}.ck .ck-widget.ck-widget_with-selection-handler .ck-widget__selection-handler .ck-icon{display:block}.ck .ck-widget.ck-widget_with-selection-handler.ck-widget_selected .ck-widget__selection-handler,.ck .ck-widget.ck-widget_with-selection-handler:hover .ck-widget__selection-handler{visibility:visible}:root{--ck-widget-outline-thickness:3px;--ck-widget-handler-icon-size:16px;--ck-widget-handler-animation-duration:200ms;--ck-widget-handler-animation-curve:ease;--ck-color-widget-blurred-border:#dedede;--ck-color-widget-hover-border:#ffc83d;--ck-color-widget-editable-focus-background:var(--ck-color-base-background);--ck-color-widget-drag-handler-icon-color:var(--ck-color-base-background)}.ck .ck-widget{outline-width:var(--ck-widget-outline-thickness);outline-style:solid;outline-color:transparent;transition:outline-color var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve)}.ck .ck-widget.ck-widget_selected,.ck .ck-widget.ck-widget_selected:hover{outline:var(--ck-widget-outline-thickness) solid var(--ck-color-focus-border)}.ck .ck-widget:hover{outline-color:var(--ck-color-widget-hover-border)}.ck .ck-editor__nested-editable{border:1px solid transparent}.ck .ck-editor__nested-editable.ck-editor__nested-editable_focused,.ck .ck-editor__nested-editable:focus{outline:none;border:var(--ck-focus-ring);box-shadow:var(--ck-inner-shadow),0 0;background-color:var(--ck-color-widget-editable-focus-background)}.ck-editor__editable>.ck-widget.ck-widget_with-selection-handler:first-child,.ck-editor__editable blockquote>.ck-widget.ck-widget_with-selection-handler:first-child{margin-top:calc(1em + var(--ck-widget-handler-icon-size))}.ck .ck-widget.ck-widget_with-selection-handler .ck-widget__selection-handler{padding:4px;box-sizing:border-box;background-color:transparent;opacity:0;transition:background-color var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve),visibility var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve),opacity var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve);border-radius:var(--ck-border-radius) var(--ck-border-radius) 0 0;transform:translateY(-100%);left:calc(0px - var(--ck-widget-outline-thickness))}.ck .ck-widget.ck-widget_with-selection-handler .ck-widget__selection-handler:hover .ck-icon .ck-icon__selected-indicator{opacity:1}.ck .ck-widget.ck-widget_with-selection-handler .ck-widget__selection-handler .ck-icon{width:var(--ck-widget-handler-icon-size);height:var(--ck-widget-handler-icon-size);color:var(--ck-color-widget-drag-handler-icon-color)}.ck .ck-widget.ck-widget_with-selection-handler .ck-widget__selection-handler .ck-icon .ck-icon__selected-indicator{opacity:0;transition:opacity .3s var(--ck-widget-handler-animation-curve)}.ck .ck-widget.ck-widget_with-selection-handler.ck-widget_selected .ck-widget__selection-handler,.ck .ck-widget.ck-widget_with-selection-handler.ck-widget_selected:hover .ck-widget__selection-handler{opacity:1;background-color:var(--ck-color-focus-border)}.ck .ck-widget.ck-widget_with-selection-handler.ck-widget_selected .ck-widget__selection-handler .ck-icon .ck-icon__selected-indicator,.ck .ck-widget.ck-widget_with-selection-handler.ck-widget_selected:hover .ck-widget__selection-handler .ck-icon .ck-icon__selected-indicator{opacity:1}.ck .ck-widget.ck-widget_with-selection-handler:hover .ck-widget__selection-handler{opacity:1;background-color:var(--ck-color-widget-hover-border)}.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected,.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected:hover{outline-color:var(--ck-color-widget-blurred-border)}.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected .ck-widget__selection-handler,.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected .ck-widget__selection-handler:hover,.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected:hover .ck-widget__selection-handler,.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected:hover .ck-widget__selection-handler:hover{background:var(--ck-color-widget-blurred-border)}.ck-editor__editable.ck-read-only .ck-widget{--ck-widget-outline-thickness:0}"},function(t,e,n){var i=n(95);"string"==typeof i&&(i=[[t.i,i,""]]);var o={singleton:!0,hmr:!0,transform:void 0,insertInto:void 0};n(1)(i,o);i.locals&&(t.exports=i.locals)},function(t,e){t.exports=".ck.ck-labeled-input .ck-labeled-input__status{font-size:var(--ck-font-size-small);margin-top:var(--ck-spacing-small);white-space:normal}.ck.ck-labeled-input .ck-labeled-input__status_error{color:var(--ck-color-base-error)}"},function(t,e,n){var i=n(97);"string"==typeof i&&(i=[[t.i,i,""]]);var o={singleton:!0,hmr:!0,transform:void 0,insertInto:void 0};n(1)(i,o);i.locals&&(t.exports=i.locals)},function(t,e){t.exports=":root{--ck-input-text-width:18em}.ck.ck-input-text{border-radius:0}.ck-rounded-corners .ck.ck-input-text,.ck.ck-input-text.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-input-text{box-shadow:var(--ck-inner-shadow),0 0;background:var(--ck-color-input-background);border:1px solid var(--ck-color-input-border);padding:var(--ck-spacing-extra-tiny) var(--ck-spacing-medium);min-width:var(--ck-input-text-width);min-height:var(--ck-ui-component-min-height);transition-property:box-shadow,border;transition:.2s ease-in-out}.ck.ck-input-text:focus{outline:none;border:var(--ck-focus-ring);box-shadow:var(--ck-focus-outer-shadow),var(--ck-inner-shadow)}.ck.ck-input-text[readonly]{border:1px solid var(--ck-color-input-disabled-border);background:var(--ck-color-input-disabled-background);color:var(--ck-color-input-disabled-text)}.ck.ck-input-text[readonly]:focus{box-shadow:var(--ck-focus-disabled-outer-shadow),var(--ck-inner-shadow)}.ck.ck-input-text.ck-error{border-color:var(--ck-color-input-error-border);animation:ck-text-input-shake .3s ease both}.ck.ck-input-text.ck-error:focus{box-shadow:var(--ck-focus-error-outer-shadow),var(--ck-inner-shadow)}@keyframes ck-text-input-shake{20%{transform:translateX(-2px)}40%{transform:translateX(2px)}60%{transform:translateX(-1px)}80%{transform:translateX(1px)}}"},function(t,e,n){var i=n(99);"string"==typeof i&&(i=[[t.i,i,""]]);var o={singleton:!0,hmr:!0,transform:void 0,insertInto:void 0};n(1)(i,o);i.locals&&(t.exports=i.locals)},function(t,e){t.exports=".ck.ck-text-alternative-form{display:flex;flex-direction:row;flex-wrap:nowrap}.ck.ck-text-alternative-form .ck-labeled-input{display:inline-block}.ck.ck-text-alternative-form .ck-label{display:none}@media screen and (max-width:600px){.ck.ck-text-alternative-form{flex-wrap:wrap}.ck.ck-text-alternative-form .ck-labeled-input{flex-basis:100%}.ck.ck-text-alternative-form .ck-button{flex-basis:50%}}.ck.ck-text-alternative-form{padding:var(--ck-spacing-standard)}.ck.ck-text-alternative-form:focus{outline:none}.ck.ck-text-alternative-form>:not(:first-child){margin-left:var(--ck-spacing-standard)}@media screen and (max-width:600px){.ck.ck-text-alternative-form{padding:0;width:calc(0.8*var(--ck-input-text-width))}.ck.ck-text-alternative-form .ck-labeled-input{margin:var(--ck-spacing-standard) var(--ck-spacing-standard) 0}.ck.ck-text-alternative-form .ck-labeled-input .ck-input-text{min-width:0;width:100%}.ck.ck-text-alternative-form .ck-button{padding:var(--ck-spacing-standard);margin-top:var(--ck-spacing-standard);margin-left:0;border-radius:0;border:0;border-top:1px solid var(--ck-color-base-border)}.ck.ck-text-alternative-form .ck-button:first-of-type{border-right:1px solid var(--ck-color-base-border)}}"},function(t,e,n){var i=n(101);"string"==typeof i&&(i=[[t.i,i,""]]);var o={singleton:!0,hmr:!0,transform:void 0,insertInto:void 0};n(1)(i,o);i.locals&&(t.exports=i.locals)},function(t,e){t.exports=':root{--ck-balloon-panel-arrow-z-index:calc(var(--ck-z-default) - 3)}.ck.ck-balloon-panel{display:none;position:absolute;z-index:var(--ck-z-modal)}.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:after,.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:before{content:"";position:absolute}.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:before{z-index:var(--ck-balloon-panel-arrow-z-index)}.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:after{z-index:calc(var(--ck-balloon-panel-arrow-z-index) + 1)}.ck.ck-balloon-panel[class*=arrow_n]:before{z-index:var(--ck-balloon-panel-arrow-z-index)}.ck.ck-balloon-panel[class*=arrow_n]:after{z-index:calc(var(--ck-balloon-panel-arrow-z-index) + 1)}.ck.ck-balloon-panel[class*=arrow_s]:before{z-index:var(--ck-balloon-panel-arrow-z-index)}.ck.ck-balloon-panel[class*=arrow_s]:after{z-index:calc(var(--ck-balloon-panel-arrow-z-index) + 1)}.ck.ck-balloon-panel.ck-balloon-panel_visible{display:block}:root{--ck-balloon-arrow-offset:2px;--ck-balloon-arrow-height:10px;--ck-balloon-arrow-half-width:8px}.ck.ck-balloon-panel{border-radius:0}.ck-rounded-corners .ck.ck-balloon-panel,.ck.ck-balloon-panel.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-balloon-panel{box-shadow:var(--ck-drop-shadow),0 0;min-height:15px;background:var(--ck-color-panel-background);border:1px solid var(--ck-color-panel-border)}.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:after,.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:before{width:0;height:0;border-style:solid}.ck.ck-balloon-panel[class*=arrow_n]:after,.ck.ck-balloon-panel[class*=arrow_n]:before{border-left-width:var(--ck-balloon-arrow-half-width);border-bottom-width:var(--ck-balloon-arrow-height);border-right-width:var(--ck-balloon-arrow-half-width);border-top-width:0}.ck.ck-balloon-panel[class*=arrow_n]:before{border-bottom-color:var(--ck-color-panel-border)}.ck.ck-balloon-panel[class*=arrow_n]:after,.ck.ck-balloon-panel[class*=arrow_n]:before{border-left-color:transparent;border-right-color:transparent;border-top-color:transparent}.ck.ck-balloon-panel[class*=arrow_n]:after{border-bottom-color:var(--ck-color-panel-background);margin-top:var(--ck-balloon-arrow-offset)}.ck.ck-balloon-panel[class*=arrow_s]:after,.ck.ck-balloon-panel[class*=arrow_s]:before{border-left-width:var(--ck-balloon-arrow-half-width);border-bottom-width:0;border-right-width:var(--ck-balloon-arrow-half-width);border-top-width:var(--ck-balloon-arrow-height)}.ck.ck-balloon-panel[class*=arrow_s]:before{border-top-color:var(--ck-color-panel-border)}.ck.ck-balloon-panel[class*=arrow_s]:after,.ck.ck-balloon-panel[class*=arrow_s]:before{border-left-color:transparent;border-bottom-color:transparent;border-right-color:transparent}.ck.ck-balloon-panel[class*=arrow_s]:after{border-top-color:var(--ck-color-panel-background);margin-bottom:var(--ck-balloon-arrow-offset)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_n:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_n:before{left:50%;margin-left:calc(-1*var(--ck-balloon-arrow-half-width));top:calc(-1*var(--ck-balloon-arrow-height))}.ck.ck-balloon-panel.ck-balloon-panel_arrow_nw:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_nw:before{left:calc(2*var(--ck-balloon-arrow-half-width));top:calc(-1*var(--ck-balloon-arrow-height))}.ck.ck-balloon-panel.ck-balloon-panel_arrow_ne:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_ne:before{right:calc(2*var(--ck-balloon-arrow-half-width));top:calc(-1*var(--ck-balloon-arrow-height))}.ck.ck-balloon-panel.ck-balloon-panel_arrow_s:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_s:before{left:50%;margin-left:calc(-1*var(--ck-balloon-arrow-half-width));bottom:calc(-1*var(--ck-balloon-arrow-height))}.ck.ck-balloon-panel.ck-balloon-panel_arrow_sw:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_sw:before{left:calc(2*var(--ck-balloon-arrow-half-width));bottom:calc(-1*var(--ck-balloon-arrow-height))}.ck.ck-balloon-panel.ck-balloon-panel_arrow_se:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_se:before{right:calc(2*var(--ck-balloon-arrow-half-width));bottom:calc(-1*var(--ck-balloon-arrow-height))}'},function(t,e,n){var i=n(103);"string"==typeof i&&(i=[[t.i,i,""]]);var o={singleton:!0,hmr:!0,transform:void 0,insertInto:void 0};n(1)(i,o);i.locals&&(t.exports=i.locals)},function(t,e){t.exports=".ck-content .image{clear:both;text-align:center;margin:1em 0}.ck-content .image>img{display:block;margin:0 auto;max-width:100%}"},function(t,e,n){var i=n(105);"string"==typeof i&&(i=[[t.i,i,""]]);var o={singleton:!0,hmr:!0,transform:void 0,insertInto:void 0};n(1)(i,o);i.locals&&(t.exports=i.locals)},function(t,e){t.exports=".ck-content .image{position:relative;overflow:hidden}.ck-content .image .ck-progress-bar{position:absolute;top:0;left:0}:root{--ck-image-upload-progress-line-width:30px}.ck-content .image.ck-appear{animation:fadeIn .7s}.ck-content .image .ck-progress-bar{height:2px;width:0;background:var(--ck-color-upload-bar-background);transition:width .1s}@keyframes fadeIn{0%{opacity:0}to{opacity:1}}"},function(t,e,n){var i=n(107);"string"==typeof i&&(i=[[t.i,i,""]]);var o={singleton:!0,hmr:!0,transform:void 0,insertInto:void 0};n(1)(i,o);i.locals&&(t.exports=i.locals)},function(t,e){t.exports='.ck-image-upload-complete-icon{display:block;position:absolute;top:10px;right:10px;border-radius:50%}.ck-image-upload-complete-icon:after{content:"";position:absolute}:root{--ck-color-image-upload-icon:#fff;--ck-color-image-upload-icon-background:#008a00;--ck-image-upload-icon-size:20px;--ck-image-upload-icon-width:2px}.ck-image-upload-complete-icon{width:var(--ck-image-upload-icon-size);height:var(--ck-image-upload-icon-size);opacity:0;background:var(--ck-color-image-upload-icon-background);animation-name:ck-upload-complete-icon-show,ck-upload-complete-icon-hide;animation-fill-mode:forwards,forwards;animation-duration:.5s,.5s;font-size:var(--ck-image-upload-icon-size);animation-delay:0ms,3s}.ck-image-upload-complete-icon:after{left:25%;top:50%;opacity:0;height:0;width:0;transform:scaleX(-1) rotate(135deg);transform-origin:left top;border-top:var(--ck-image-upload-icon-width) solid var(--ck-color-image-upload-icon);border-right:var(--ck-image-upload-icon-width) solid var(--ck-color-image-upload-icon);animation-name:ck-upload-complete-icon-check;animation-duration:.5s;animation-delay:.5s;animation-fill-mode:forwards;box-sizing:border-box}@keyframes ck-upload-complete-icon-show{0%{opacity:0}to{opacity:1}}@keyframes ck-upload-complete-icon-hide{0%{opacity:1}to{opacity:0}}@keyframes ck-upload-complete-icon-check{0%{opacity:1;width:0;height:0}33%{width:.3em;height:0}to{opacity:1;width:.3em;height:.45em}}'},function(t,e,n){var i=n(109);"string"==typeof i&&(i=[[t.i,i,""]]);var o={singleton:!0,hmr:!0,transform:void 0,insertInto:void 0};n(1)(i,o);i.locals&&(t.exports=i.locals)},function(t,e){t.exports='.ck .ck-upload-placeholder-loader{position:absolute;display:flex;align-items:center;justify-content:center;top:0;left:0}.ck .ck-upload-placeholder-loader:before{content:"";position:relative}:root{--ck-color-upload-placeholder-loader:#b3b3b3;--ck-upload-placeholder-loader-size:32px}.ck .ck-image-upload-placeholder{width:100%;margin:0}.ck .ck-upload-placeholder-loader{width:100%;height:100%}.ck .ck-upload-placeholder-loader:before{width:var(--ck-upload-placeholder-loader-size);height:var(--ck-upload-placeholder-loader-size);border-radius:50%;border-top:3px solid var(--ck-color-upload-placeholder-loader);border-right:2px solid transparent;animation:ck-upload-placeholder-loader 1s linear infinite}@keyframes ck-upload-placeholder-loader{to{transform:rotate(1turn)}}'},function(t,e){t.exports=".ck.ck-heading_heading1{font-size:20px}.ck.ck-heading_heading2{font-size:17px}.ck.ck-heading_heading3{font-size:14px}.ck[class*=ck-heading_heading]{font-weight:700}.ck.ck-dropdown.ck-heading-dropdown .ck-dropdown__button .ck-button__label{width:8em}.ck.ck-dropdown.ck-heading-dropdown .ck-dropdown__panel .ck-list__item{min-width:18em}"},function(t,e,n){var i=n(112);"string"==typeof i&&(i=[[t.i,i,""]]);var o={singleton:!0,hmr:!0,transform:void 0,insertInto:void 0};n(1)(i,o);i.locals&&(t.exports=i.locals)},function(t,e){t.exports=".ck-content .image>figcaption{color:#333;background-color:#f7f7f7;padding:.6em;font-size:.75em;outline-offset:-1px}"},function(t,e,n){var i=n(114);"string"==typeof i&&(i=[[t.i,i,""]]);var o={singleton:!0,hmr:!0,transform:void 0,insertInto:void 0};n(1)(i,o);i.locals&&(t.exports=i.locals)},function(t,e){t.exports=":root{--ck-image-style-spacing:1.5em}.ck-content .image-style-align-center,.ck-content .image-style-align-left,.ck-content .image-style-align-right,.ck-content .image-style-side{max-width:50%}.ck-content .image-style-side{float:right;margin-left:var(--ck-image-style-spacing)}.ck-content .image-style-align-left{float:left;margin-right:var(--ck-image-style-spacing)}.ck-content .image-style-align-center{margin-left:auto;margin-right:auto}.ck-content .image-style-align-right{float:right;margin-left:var(--ck-image-style-spacing)}"},function(t,e,n){var i=n(116);"string"==typeof i&&(i=[[t.i,i,""]]);var o={singleton:!0,hmr:!0,transform:void 0,insertInto:void 0};n(1)(i,o);i.locals&&(t.exports=i.locals)},function(t,e){t.exports=".ck .ck-link_selected{background:var(--ck-color-link-selected-background)}"},function(t,e,n){var i=n(118);"string"==typeof i&&(i=[[t.i,i,""]]);var o={singleton:!0,hmr:!0,transform:void 0,insertInto:void 0};n(1)(i,o);i.locals&&(t.exports=i.locals)},function(t,e){t.exports=".ck.ck-link-form{display:flex;flex-direction:row;flex-wrap:nowrap}.ck.ck-link-form .ck-label{display:none}@media screen and (max-width:600px){.ck.ck-link-form{flex-wrap:wrap}.ck.ck-link-form .ck-labeled-input{flex-basis:100%}.ck.ck-link-form .ck-button{flex-basis:50%}}.ck.ck-link-form{padding:var(--ck-spacing-standard)}.ck.ck-link-form:focus{outline:none}.ck.ck-link-form>:not(:first-child){margin-left:var(--ck-spacing-standard)}@media screen and (max-width:600px){.ck.ck-link-form{padding:0;width:calc(0.8*var(--ck-input-text-width))}.ck.ck-link-form .ck-labeled-input{margin:var(--ck-spacing-standard) var(--ck-spacing-standard) 0}.ck.ck-link-form .ck-labeled-input .ck-input-text{min-width:0;width:100%}.ck.ck-link-form .ck-button{padding:var(--ck-spacing-standard);margin-top:var(--ck-spacing-standard);margin-left:0;border-radius:0;border:0;border-top:1px solid var(--ck-color-base-border)}.ck.ck-link-form .ck-button:first-of-type{border-right:1px solid var(--ck-color-base-border)}}"},function(t,e,n){var i=n(120);"string"==typeof i&&(i=[[t.i,i,""]]);var o={singleton:!0,hmr:!0,transform:void 0,insertInto:void 0};n(1)(i,o);i.locals&&(t.exports=i.locals)},function(t,e){t.exports=".ck.ck-link-actions{display:flex;flex-direction:row;flex-wrap:nowrap}.ck.ck-link-actions .ck-link-actions__preview{display:inline-block}.ck.ck-link-actions .ck-link-actions__preview .ck-button__label{overflow:hidden}@media screen and (max-width:600px){.ck.ck-link-actions{flex-wrap:wrap}.ck.ck-link-actions .ck-link-actions__preview{flex-basis:100%}.ck.ck-link-actions .ck-button:not(.ck-link-actions__preview){flex-basis:50%}}.ck.ck-link-actions{padding:var(--ck-spacing-standard)}.ck.ck-link-actions .ck-button.ck-link-actions__preview{padding-left:0;padding-right:0}.ck.ck-link-actions .ck-button.ck-link-actions__preview,.ck.ck-link-actions .ck-button.ck-link-actions__preview:active,.ck.ck-link-actions .ck-button.ck-link-actions__preview:focus,.ck.ck-link-actions .ck-button.ck-link-actions__preview:hover{background:none}.ck.ck-link-actions .ck-button.ck-link-actions__preview:active{box-shadow:none}.ck.ck-link-actions .ck-button.ck-link-actions__preview:focus .ck-button__label{text-decoration:underline}.ck.ck-link-actions .ck-button.ck-link-actions__preview .ck-button__label{padding:0 var(--ck-spacing-medium);color:var(--ck-color-link-default);text-overflow:ellipsis;cursor:pointer;max-width:var(--ck-input-text-width);min-width:3em;text-align:center}.ck.ck-link-actions .ck-button.ck-link-actions__preview .ck-button__label:hover{text-decoration:underline}.ck.ck-link-actions:focus{outline:none}.ck.ck-link-actions .ck-button:not(.ck-link-actions__preview){margin-left:var(--ck-spacing-standard)}@media screen and (max-width:600px){.ck.ck-link-actions{padding:0;width:calc(0.8*var(--ck-input-text-width))}.ck.ck-link-actions .ck-button.ck-link-actions__preview{margin:var(--ck-spacing-standard) var(--ck-spacing-standard) 0}.ck.ck-link-actions .ck-button.ck-link-actions__preview .ck-button__label{min-width:0;max-width:100%}.ck.ck-link-actions .ck-button:not(.ck-link-actions__preview){padding:var(--ck-spacing-standard);margin-top:var(--ck-spacing-standard);margin-left:0;border-radius:0;border:0;border-top:1px solid var(--ck-color-base-border)}.ck.ck-link-actions .ck-button:not(.ck-link-actions__preview):first-of-type{border-right:1px solid var(--ck-color-base-border)}}"},function(t,e,n){var i=n(122);"string"==typeof i&&(i=[[t.i,i,""]]);var o={singleton:!0,hmr:!0,transform:void 0,insertInto:void 0};n(1)(i,o);i.locals&&(t.exports=i.locals)},function(t,e){t.exports='.ck-media__wrapper .ck-media__placeholder{display:flex;flex-direction:column;align-items:center}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url .ck-tooltip{display:block}@media (hover:none){.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url .ck-tooltip{display:none}}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url{max-width:100%;position:relative}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url:hover .ck-tooltip{visibility:visible;opacity:1}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url .ck-media__placeholder__url__text{overflow:hidden;display:block}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="google.com/maps"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck-media__placeholder__icon *{display:none}.ck-editor__editable:not(.ck-read-only) .ck-media__wrapper>:not(.ck-media__placeholder){pointer-events:none}:root{--ck-media-embed-placeholder-icon-size:3em;--ck-color-media-embed-placeholder-url-text:#757575;--ck-color-media-embed-placeholder-url-text-hover:var(--ck-color-base-text)}.ck-media__wrapper{margin:0 auto}.ck-media__wrapper .ck-media__placeholder{padding:calc(3*var(--ck-spacing-standard));background:var(--ck-color-base-foreground)}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__icon{min-width:var(--ck-media-embed-placeholder-icon-size);height:var(--ck-media-embed-placeholder-icon-size);margin-bottom:var(--ck-spacing-large);background-position:50%;background-size:cover}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__icon .ck-icon{width:100%;height:100%}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url .ck-media__placeholder__url__text{color:var(--ck-color-media-embed-placeholder-url-text);white-space:nowrap;text-align:center;font-style:italic;text-overflow:ellipsis}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url .ck-media__placeholder__url__text:hover{color:var(--ck-color-media-embed-placeholder-url-text-hover);cursor:pointer;text-decoration:underline}.ck-media__wrapper[data-oembed-url*="open.spotify.com"]{max-width:300px;max-height:380px}.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder{background:linear-gradient(90deg,#71c6f4,#0d70a5)}.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder .ck-media__placeholder__icon{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0MDAgNDAwIj48cGF0aCBkPSJNNDAwIDIwMGMwIDExMC41LTg5LjUgMjAwLTIwMCAyMDBTMCAzMTAuNSAwIDIwMCA4OS41IDAgMjAwIDBzMjAwIDg5LjUgMjAwIDIwMHpNMTYzLjQgMzA1LjVjODguNyAwIDEzNy4yLTczLjUgMTM3LjItMTM3LjIgMC0yLjEgMC00LjItLjEtNi4yIDkuNC02LjggMTcuNi0xNS4zIDI0LjEtMjUtOC42IDMuOC0xNy45IDYuNC0yNy43IDcuNiAxMC02IDE3LjYtMTUuNCAyMS4yLTI2LjctOS4zIDUuNS0xOS42IDkuNS0zMC42IDExLjctOC44LTkuNC0yMS4zLTE1LjItMzUuMi0xNS4yLTI2LjYgMC00OC4yIDIxLjYtNDguMiA0OC4yIDAgMy44LjQgNy41IDEuMyAxMS00MC4xLTItNzUuNi0yMS4yLTk5LjQtNTAuNC00LjEgNy4xLTYuNSAxNS40LTYuNSAyNC4yIDAgMTYuNyA4LjUgMzEuNSAyMS41IDQwLjEtNy45LS4yLTE1LjMtMi40LTIxLjgtNnYuNmMwIDIzLjQgMTYuNiA0Mi44IDM4LjcgNDcuMy00IDEuMS04LjMgMS43LTEyLjcgMS43LTMuMSAwLTYuMS0uMy05LjEtLjkgNi4xIDE5LjIgMjMuOSAzMy4xIDQ1IDMzLjUtMTYuNSAxMi45LTM3LjMgMjAuNi01OS45IDIwLjYtMy45IDAtNy43LS4yLTExLjUtLjcgMjEuMSAxMy44IDQ2LjUgMjEuOCA3My43IDIxLjgiIGZpbGw9IiNmZmYiLz48L3N2Zz4=)}.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder .ck-media__placeholder__url__text{color:#b8e6ff}.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder .ck-media__placeholder__url__text:hover{color:#fff}.ck-media__wrapper[data-oembed-url*="google.com/maps"] .ck-media__placeholder__icon{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNTAuMzc4IiBoZWlnaHQ9IjI1NC4xNjciIHZpZXdCb3g9IjAgMCA2Ni4yNDYgNjcuMjQ4Ij48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTcyLjUzMSAtMjE4LjQ1NSkgc2NhbGUoLjk4MDEyKSI+PHJlY3Qgcnk9IjUuMjM4IiByeD0iNS4yMzgiIHk9IjIzMS4zOTkiIHg9IjE3Ni4wMzEiIGhlaWdodD0iNjAuMDk5IiB3aWR0aD0iNjAuMDk5IiBmaWxsPSIjMzRhNjY4IiBwYWludC1vcmRlcj0ibWFya2VycyBzdHJva2UgZmlsbCIvPjxwYXRoIGQ9Ik0yMDYuNDc3IDI2MC45bC0yOC45ODcgMjguOTg3YTUuMjE4IDUuMjE4IDAgMCAwIDMuNzggMS42MWg0OS42MjFjMS42OTQgMCAzLjE5LS43OTggNC4xNDYtMi4wMzd6IiBmaWxsPSIjNWM4OGM1Ii8+PHBhdGggZD0iTTIyNi43NDIgMjIyLjk4OGMtOS4yNjYgMC0xNi43NzcgNy4xNy0xNi43NzcgMTYuMDE0LjAwNyAyLjc2Mi42NjMgNS40NzQgMi4wOTMgNy44NzUuNDMuNzAzLjgzIDEuNDA4IDEuMTkgMi4xMDcuMzMzLjUwMi42NSAxLjAwNS45NSAxLjUwOC4zNDMuNDc3LjY3My45NTcuOTg4IDEuNDQgMS4zMSAxLjc2OSAyLjUgMy41MDIgMy42MzcgNS4xNjguNzkzIDEuMjc1IDEuNjgzIDIuNjQgMi40NjYgMy45OSAyLjM2MyA0LjA5NCA0LjAwNyA4LjA5MiA0LjYgMTMuOTE0di4wMTJjLjE4Mi40MTIuNTE2LjY2Ni44NzkuNjY3LjQwMy0uMDAxLjc2OC0uMzE0LjkzLS43OTkuNjAzLTUuNzU2IDIuMjM4LTkuNzI5IDQuNTg1LTEzLjc5NC43ODItMS4zNSAxLjY3My0yLjcxNSAyLjQ2NS0zLjk5IDEuMTM3LTEuNjY2IDIuMzI4LTMuNCAzLjYzOC01LjE2OS4zMTUtLjQ4Mi42NDUtLjk2Mi45ODgtMS40MzkuMy0uNTAzLjYxNy0xLjAwNi45NS0xLjUwOC4zNTktLjcuNzYtMS40MDQgMS4xOS0yLjEwNyAxLjQyNi0yLjQwMiAyLTUuMTE0IDIuMDA0LTcuODc1IDAtOC44NDQtNy41MTEtMTYuMDE0LTE2Ljc3Ni0xNi4wMTR6IiBmaWxsPSIjZGQ0YjNlIiBwYWludC1vcmRlcj0ibWFya2VycyBzdHJva2UgZmlsbCIvPjxlbGxpcHNlIHJ5PSI1LjU2NCIgcng9IjUuODI4IiBjeT0iMjM5LjAwMiIgY3g9IjIyNi43NDIiIGZpbGw9IiM4MDJkMjciIHBhaW50LW9yZGVyPSJtYXJrZXJzIHN0cm9rZSBmaWxsIi8+PHBhdGggZD0iTTE5MC4zMDEgMjM3LjI4M2MtNC42NyAwLTguNDU3IDMuODUzLTguNDU3IDguNjA2czMuNzg2IDguNjA3IDguNDU3IDguNjA3YzMuMDQzIDAgNC44MDYtLjk1OCA2LjMzNy0yLjUxNiAxLjUzLTEuNTU3IDIuMDg3LTMuOTEzIDIuMDg3LTYuMjkgMC0uMzYyLS4wMjMtLjcyMi0uMDY0LTEuMDc5aC04LjI1N3YzLjA0M2g0Ljg1Yy0uMTk3Ljc1OS0uNTMxIDEuNDUtMS4wNTggMS45ODYtLjk0Mi45NTgtMi4wMjggMS41NDgtMy45MDEgMS41NDgtMi44NzYgMC01LjIwOC0yLjM3Mi01LjIwOC01LjI5OSAwLTIuOTI2IDIuMzMyLTUuMjk5IDUuMjA4LTUuMjk5IDEuMzk5IDAgMi42MTguNDA3IDMuNTg0IDEuMjkzbDIuMzgxLTIuMzhjMC0uMDAyLS4wMDMtLjAwNC0uMDA0LS4wMDUtMS41ODgtMS41MjQtMy42Mi0yLjIxNS01Ljk1NS0yLjIxNXptNC40MyA1LjY2bC4wMDMuMDA2di0uMDAzeiIgZmlsbD0iI2ZmZiIgcGFpbnQtb3JkZXI9Im1hcmtlcnMgc3Ryb2tlIGZpbGwiLz48cGF0aCBkPSJNMjE1LjE4NCAyNTEuOTI5bC03Ljk4IDcuOTc5IDI4LjQ3NyAyOC40NzVhNS4yMzMgNS4yMzMgMCAwIDAgLjQ0OS0yLjEyM3YtMzEuMTY1Yy0uNDY5LjY3NS0uOTM0IDEuMzQ5LTEuMzgyIDIuMDA1LS43OTIgMS4yNzUtMS42ODIgMi42NC0yLjQ2NSAzLjk5LTIuMzQ3IDQuMDY1LTMuOTgyIDguMDM4LTQuNTg1IDEzLjc5NC0uMTYyLjQ4NS0uNTI3Ljc5OC0uOTMuNzk5LS4zNjMtLjAwMS0uNjk3LS4yNTUtLjg3OS0uNjY3di0uMDEyYy0uNTkzLTUuODIyLTIuMjM3LTkuODItNC42LTEzLjkxNC0uNzgzLTEuMzUtMS42NzMtMi43MTUtMi40NjYtMy45OS0xLjEzNy0xLjY2Ni0yLjMyNy0zLjQtMy42MzctNS4xNjlsLS4wMDItLjAwM3oiIGZpbGw9IiNjM2MzYzMiLz48cGF0aCBkPSJNMjEyLjk4MyAyNDguNDk1bC0zNi45NTIgMzYuOTUzdi44MTJhNS4yMjcgNS4yMjcgMCAwIDAgNS4yMzggNS4yMzhoMS4wMTVsMzUuNjY2LTM1LjY2NmExMzYuMjc1IDEzNi4yNzUgMCAwIDAtMi43NjQtMy45IDM3LjU3NSAzNy41NzUgMCAwIDAtLjk4OS0xLjQ0IDM1LjEyNyAzNS4xMjcgMCAwIDAtLjk1LTEuNTA4Yy0uMDgzLS4xNjItLjE3Ni0uMzI2LS4yNjQtLjQ4OXoiIGZpbGw9IiNmZGRjNGYiIHBhaW50LW9yZGVyPSJtYXJrZXJzIHN0cm9rZSBmaWxsIi8+PHBhdGggZD0iTTIxMS45OTggMjYxLjA4M2wtNi4xNTIgNi4xNTEgMjQuMjY0IDI0LjI2NGguNzgxYTUuMjI3IDUuMjI3IDAgMCAwIDUuMjM5LTUuMjM4di0xLjA0NXoiIGZpbGw9IiNmZmYiIHBhaW50LW9yZGVyPSJtYXJrZXJzIHN0cm9rZSBmaWxsIi8+PC9nPjwvc3ZnPg==)}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder{background:#4268b3}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder .ck-media__placeholder__icon{background-image:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAyNCIgaGVpZ2h0PSIxMDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik05NjcuNDg0IDBINTYuNTE3QzI1LjMwNCAwIDAgMjUuMzA0IDAgNTYuNTE3djkxMC45NjZDMCA5OTguNjk0IDI1LjI5NyAxMDI0IDU2LjUyMiAxMDI0SDU0N1Y2MjhINDE0VjQ3M2gxMzNWMzU5LjAyOWMwLTEzMi4yNjIgODAuNzczLTIwNC4yODIgMTk4Ljc1Ni0yMDQuMjgyIDU2LjUxMyAwIDEwNS4wODYgNC4yMDggMTE5LjI0NCA2LjA4OVYyOTlsLTgxLjYxNi4wMzdjLTYzLjk5MyAwLTc2LjM4NCAzMC40OTItNzYuMzg0IDc1LjIzNlY0NzNoMTUzLjQ4N2wtMTkuOTg2IDE1NUg3MDd2Mzk2aDI2MC40ODRjMzEuMjEzIDAgNTYuNTE2LTI1LjMwMyA1Ni41MTYtNTYuNTE2VjU2LjUxNUMxMDI0IDI1LjMwMyA5OTguNjk3IDAgOTY3LjQ4NCAwIiBmaWxsPSIjRkZGRkZFIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4=)}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder .ck-media__placeholder__url__text{color:#cdf}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder .ck-media__placeholder__url__text:hover{color:#fff}.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder{background:linear-gradient(-135deg,#1400c8,#b900b4,#f50000)}.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder .ck-media__placeholder__icon{background-image:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTA0IiBoZWlnaHQ9IjUwNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PGRlZnM+PHBhdGggaWQ9ImEiIGQ9Ik0wIC4xNTloNTAzLjg0MVY1MDMuOTRIMHoiLz48L2RlZnM+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48bWFzayBpZD0iYiIgZmlsbD0iI2ZmZiI+PHVzZSB4bGluazpocmVmPSIjYSIvPjwvbWFzaz48cGF0aCBkPSJNMjUxLjkyMS4xNTljLTY4LjQxOCAwLTc2Ljk5Ny4yOS0xMDMuODY3IDEuNTE2LTI2LjgxNCAxLjIyMy00NS4xMjcgNS40ODItNjEuMTUxIDExLjcxLTE2LjU2NiA2LjQzNy0zMC42MTUgMTUuMDUxLTQ0LjYyMSAyOS4wNTYtMTQuMDA1IDE0LjAwNi0yMi42MTkgMjguMDU1LTI5LjA1NiA0NC42MjEtNi4yMjggMTYuMDI0LTEwLjQ4NyAzNC4zMzctMTEuNzEgNjEuMTUxQy4yOSAxNzUuMDgzIDAgMTgzLjY2MiAwIDI1Mi4wOGMwIDY4LjQxNy4yOSA3Ni45OTYgMS41MTYgMTAzLjg2NiAxLjIyMyAyNi44MTQgNS40ODIgNDUuMTI3IDExLjcxIDYxLjE1MSA2LjQzNyAxNi41NjYgMTUuMDUxIDMwLjYxNSAyOS4wNTYgNDQuNjIxIDE0LjAwNiAxNC4wMDUgMjguMDU1IDIyLjYxOSA0NC42MjEgMjkuMDU3IDE2LjAyNCA2LjIyNyAzNC4zMzcgMTAuNDg2IDYxLjE1MSAxMS43MDkgMjYuODcgMS4yMjYgMzUuNDQ5IDEuNTE2IDEwMy44NjcgMS41MTYgNjguNDE3IDAgNzYuOTk2LS4yOSAxMDMuODY2LTEuNTE2IDI2LjgxNC0xLjIyMyA0NS4xMjctNS40ODIgNjEuMTUxLTExLjcwOSAxNi41NjYtNi40MzggMzAuNjE1LTE1LjA1MiA0NC42MjEtMjkuMDU3IDE0LjAwNS0xNC4wMDYgMjIuNjE5LTI4LjA1NSAyOS4wNTctNDQuNjIxIDYuMjI3LTE2LjAyNCAxMC40ODYtMzQuMzM3IDExLjcwOS02MS4xNTEgMS4yMjYtMjYuODcgMS41MTYtMzUuNDQ5IDEuNTE2LTEwMy44NjYgMC02OC40MTgtLjI5LTc2Ljk5Ny0xLjUxNi0xMDMuODY3LTEuMjIzLTI2LjgxNC01LjQ4Mi00NS4xMjctMTEuNzA5LTYxLjE1MS02LjQzOC0xNi41NjYtMTUuMDUyLTMwLjYxNS0yOS4wNTctNDQuNjIxLTE0LjAwNi0xNC4wMDUtMjguMDU1LTIyLjYxOS00NC42MjEtMjkuMDU2LTE2LjAyNC02LjIyOC0zNC4zMzctMTAuNDg3LTYxLjE1MS0xMS43MUMzMjguOTE3LjQ0OSAzMjAuMzM4LjE1OSAyNTEuOTIxLjE1OXptMCA0NS4zOTFjNjcuMjY1IDAgNzUuMjMzLjI1NyAxMDEuNzk3IDEuNDY5IDI0LjU2MiAxLjEyIDM3LjkwMSA1LjIyNCA0Ni43NzggOC42NzQgMTEuNzU5IDQuNTcgMjAuMTUxIDEwLjAyOSAyOC45NjYgMTguODQ1IDguODE2IDguODE1IDE0LjI3NSAxNy4yMDcgMTguODQ1IDI4Ljk2NiAzLjQ1IDguODc3IDcuNTU0IDIyLjIxNiA4LjY3NCA0Ni43NzggMS4yMTIgMjYuNTY0IDEuNDY5IDM0LjUzMiAxLjQ2OSAxMDEuNzk4IDAgNjcuMjY1LS4yNTcgNzUuMjMzLTEuNDY5IDEwMS43OTctMS4xMiAyNC41NjItNS4yMjQgMzcuOTAxLTguNjc0IDQ2Ljc3OC00LjU3IDExLjc1OS0xMC4wMjkgMjAuMTUxLTE4Ljg0NSAyOC45NjYtOC44MTUgOC44MTYtMTcuMjA3IDE0LjI3NS0yOC45NjYgMTguODQ1LTguODc3IDMuNDUtMjIuMjE2IDcuNTU0LTQ2Ljc3OCA4LjY3NC0yNi41NiAxLjIxMi0zNC41MjcgMS40NjktMTAxLjc5NyAxLjQ2OS02Ny4yNzEgMC03NS4yMzctLjI1Ny0xMDEuNzk4LTEuNDY5LTI0LjU2Mi0xLjEyLTM3LjkwMS01LjIyNC00Ni43NzgtOC42NzQtMTEuNzU5LTQuNTctMjAuMTUxLTEwLjAyOS0yOC45NjYtMTguODQ1LTguODE1LTguODE1LTE0LjI3NS0xNy4yMDctMTguODQ1LTI4Ljk2Ni0zLjQ1LTguODc3LTcuNTU0LTIyLjIxNi04LjY3NC00Ni43NzgtMS4yMTItMjYuNTY0LTEuNDY5LTM0LjUzMi0xLjQ2OS0xMDEuNzk3IDAtNjcuMjY2LjI1Ny03NS4yMzQgMS40NjktMTAxLjc5OCAxLjEyLTI0LjU2MiA1LjIyNC0zNy45MDEgOC42NzQtNDYuNzc4IDQuNTctMTEuNzU5IDEwLjAyOS0yMC4xNTEgMTguODQ1LTI4Ljk2NiA4LjgxNS04LjgxNiAxNy4yMDctMTQuMjc1IDI4Ljk2Ni0xOC44NDUgOC44NzctMy40NSAyMi4yMTYtNy41NTQgNDYuNzc4LTguNjc0IDI2LjU2NC0xLjIxMiAzNC41MzItMS40NjkgMTAxLjc5OC0xLjQ2OXoiIGZpbGw9IiNGRkYiIG1hc2s9InVybCgjYikiLz48cGF0aCBkPSJNMjUxLjkyMSAzMzYuMDUzYy00Ni4zNzggMC04My45NzQtMzcuNTk2LTgzLjk3NC04My45NzMgMC00Ni4zNzggMzcuNTk2LTgzLjk3NCA4My45NzQtODMuOTc0IDQ2LjM3NyAwIDgzLjk3MyAzNy41OTYgODMuOTczIDgzLjk3NCAwIDQ2LjM3Ny0zNy41OTYgODMuOTczLTgzLjk3MyA4My45NzN6bTAtMjEzLjMzOGMtNzEuNDQ3IDAtMTI5LjM2NSA1Ny45MTgtMTI5LjM2NSAxMjkuMzY1IDAgNzEuNDQ2IDU3LjkxOCAxMjkuMzY0IDEyOS4zNjUgMTI5LjM2NCA3MS40NDYgMCAxMjkuMzY0LTU3LjkxOCAxMjkuMzY0LTEyOS4zNjQgMC03MS40NDctNTcuOTE4LTEyOS4zNjUtMTI5LjM2NC0xMjkuMzY1ek00MTYuNjI3IDExNy42MDRjMCAxNi42OTYtMTMuNTM1IDMwLjIzLTMwLjIzMSAzMC4yMy0xNi42OTUgMC0zMC4yMy0xMy41MzQtMzAuMjMtMzAuMjMgMC0xNi42OTYgMTMuNTM1LTMwLjIzMSAzMC4yMy0zMC4yMzEgMTYuNjk2IDAgMzAuMjMxIDEzLjUzNSAzMC4yMzEgMzAuMjMxIiBmaWxsPSIjRkZGIi8+PC9nPjwvc3ZnPg==)}.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder .ck-media__placeholder__url__text{color:#ffe0fe}.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder .ck-media__placeholder__url__text:hover{color:#fff}'},function(t,e,n){var i=n(124);"string"==typeof i&&(i=[[t.i,i,""]]);var o={singleton:!0,hmr:!0,transform:void 0,insertInto:void 0};n(1)(i,o);i.locals&&(t.exports=i.locals)},function(t,e){t.exports=".ck.ck-media-form{display:flex;align-items:flex-start;flex-direction:row;flex-wrap:nowrap}.ck.ck-media-form .ck-labeled-input{display:inline-block}.ck.ck-media-form .ck-label{display:none}@media screen and (max-width:600px){.ck.ck-media-form{flex-wrap:wrap}.ck.ck-media-form .ck-labeled-input{flex-basis:100%}.ck.ck-media-form .ck-button{flex-basis:50%}}.ck.ck-media-form{padding:var(--ck-spacing-standard)}.ck.ck-media-form:focus{outline:none}.ck.ck-media-form>:not(:first-child){margin-left:var(--ck-spacing-standard)}@media screen and (max-width:600px){.ck.ck-media-form{padding:0;width:calc(0.8*var(--ck-input-text-width))}.ck.ck-media-form .ck-labeled-input{margin:var(--ck-spacing-standard) var(--ck-spacing-standard) 0}.ck.ck-media-form .ck-labeled-input .ck-input-text{min-width:0;width:100%}.ck.ck-media-form .ck-labeled-input .ck-labeled-input__error{white-space:normal}.ck.ck-media-form .ck-button{padding:var(--ck-spacing-standard);margin-top:var(--ck-spacing-standard);margin-left:0;border-radius:0;border:0;border-top:1px solid var(--ck-color-base-border)}.ck.ck-media-form .ck-button:first-of-type{border-right:1px solid var(--ck-color-base-border)}}"},function(t,e,n){var i=n(126);"string"==typeof i&&(i=[[t.i,i,""]]);var o={singleton:!0,hmr:!0,transform:void 0,insertInto:void 0};n(1)(i,o);i.locals&&(t.exports=i.locals)},function(t,e){t.exports=".ck-content .media{clear:both;margin:1em 0;display:block;min-width:15em}"},function(t,e,n){var i=n(128);"string"==typeof i&&(i=[[t.i,i,""]]);var o={singleton:!0,hmr:!0,transform:void 0,insertInto:void 0};n(1)(i,o);i.locals&&(t.exports=i.locals)},function(t,e){t.exports=":root{--ck-color-table-focused-cell-background:#f5fafe}.ck-widget.table td.ck-editor__nested-editable.ck-editor__nested-editable_focused,.ck-widget.table th.ck-editor__nested-editable.ck-editor__nested-editable_focused{background:var(--ck-color-table-focused-cell-background);border-style:none;outline:1px solid var(--ck-color-focus-border);outline-offset:-1px}"},function(t,e,n){var i=n(130);"string"==typeof i&&(i=[[t.i,i,""]]);var o={singleton:!0,hmr:!0,transform:void 0,insertInto:void 0};n(1)(i,o);i.locals&&(t.exports=i.locals)},function(t,e){t.exports=":root{--ck-insert-table-dropdown-padding:10px;--ck-insert-table-dropdown-box-height:11px;--ck-insert-table-dropdown-box-width:12px;--ck-insert-table-dropdown-box-margin:1px;--ck-insert-table-dropdown-box-border-color:#bfbfbf;--ck-insert-table-dropdown-box-border-active-color:#53a0e4;--ck-insert-table-dropdown-box-active-background:#c7e5ff}.ck .ck-insert-table-dropdown__grid{display:flex;flex-direction:row;flex-wrap:wrap;width:calc(var(--ck-insert-table-dropdown-box-width)*10 + var(--ck-insert-table-dropdown-box-margin)*20 + var(--ck-insert-table-dropdown-padding)*2);padding:var(--ck-insert-table-dropdown-padding) var(--ck-insert-table-dropdown-padding) 0}.ck .ck-insert-table-dropdown__label{text-align:center}.ck .ck-insert-table-dropdown-grid-box{width:var(--ck-insert-table-dropdown-box-width);height:var(--ck-insert-table-dropdown-box-height);margin:var(--ck-insert-table-dropdown-box-margin);border:1px solid var(--ck-insert-table-dropdown-box-border-color);border-radius:1px}.ck .ck-insert-table-dropdown-grid-box.ck-on{border-color:var(--ck-insert-table-dropdown-box-border-active-color);background:var(--ck-insert-table-dropdown-box-active-background)}"},function(t,e,n){var i=n(132);"string"==typeof i&&(i=[[t.i,i,""]]);var o={singleton:!0,hmr:!0,transform:void 0,insertInto:void 0};n(1)(i,o);i.locals&&(t.exports=i.locals)},function(t,e){t.exports=".ck-content .table{margin:1em auto;display:table}.ck-content .table table{border-collapse:collapse;border-spacing:0;border:1px double #b3b3b3}.ck-content .table table td,.ck-content .table table th{min-width:2em;padding:.4em;border-color:#d9d9d9}.ck-content .table table th{font-weight:700;background:#fafafa}"},function(t,e,n){"use strict";n.r(e);var i=n(4),o=i.a.Symbol,r=Object.prototype,s=r.hasOwnProperty,a=r.toString,c=o?o.toStringTag:void 0;var l=function(t){var e=s.call(t,c),n=t[c];try{t[c]=void 0;var i=!0}catch(t){}var o=a.call(t);return i&&(e?t[c]=n:delete t[c]),o},d=Object.prototype.toString;var u=function(t){return d.call(t)},h="[object Null]",f="[object Undefined]",m=o?o.toStringTag:void 0;var p=function(t){return null==t?void 0===t?f:h:m&&m in Object(t)?l(t):u(t)};var g=function(t,e){return function(n){return t(e(n))}},b=g(Object.getPrototypeOf,Object);var w=function(t){return null!=t&&"object"==typeof t},_="[object Object]",k=Function.prototype,v=Object.prototype,y=k.toString,x=v.hasOwnProperty,A=y.call(Object);var C=function(t){if(!w(t)||p(t)!=_)return!1;var e=b(t);if(null===e)return!0;var n=x.call(e,"constructor")&&e.constructor;return"function"==typeof n&&n instanceof n&&y.call(n)==A};var T=function(){this.__data__=[],this.size=0};var P=function(t,e){return t===e||t!=t&&e!=e};var M=function(t,e){for(var n=t.length;n--;)if(P(t[n][0],e))return n;return-1},E=Array.prototype.splice;var S=function(t){var e=this.__data__,n=M(e,t);return!(n<0||(n==e.length-1?e.pop():E.call(e,n,1),--this.size,0))};var I=function(t){var e=this.__data__,n=M(e,t);return n<0?void 0:e[n][1]};var N=function(t){return M(this.__data__,t)>-1};var O=function(t,e){var n=this.__data__,i=M(n,t);return i<0?(++this.size,n.push([t,e])):n[i][1]=e,this};function R(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var i=t[e];this.set(i[0],i[1])}}R.prototype.clear=T,R.prototype.delete=S,R.prototype.get=I,R.prototype.has=N,R.prototype.set=O;var D=R;var L=function(){this.__data__=new D,this.size=0};var j=function(t){var e=this.__data__,n=e.delete(t);return this.size=e.size,n};var V=function(t){return this.__data__.get(t)};var B=function(t){return this.__data__.has(t)};var z=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)},F="[object AsyncFunction]",U="[object Function]",H="[object GeneratorFunction]",q="[object Proxy]";var W=function(t){if(!z(t))return!1;var e=p(t);return e==U||e==H||e==F||e==q},Y=i.a["__core-js_shared__"],$=function(){var t=/[^.]+$/.exec(Y&&Y.keys&&Y.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}();var G=function(t){return!!$&&$ in t},Q=Function.prototype.toString;var K=function(t){if(null!=t){try{return Q.call(t)}catch(t){}try{return t+""}catch(t){}}return""},J=/^\[object .+?Constructor\]$/,Z=Function.prototype,X=Object.prototype,tt=Z.toString,et=X.hasOwnProperty,nt=RegExp("^"+tt.call(et).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var it=function(t){return!(!z(t)||G(t))&&(W(t)?nt:J).test(K(t))};var ot=function(t,e){return null==t?void 0:t[e]};var rt=function(t,e){var n=ot(t,e);return it(n)?n:void 0},st=rt(i.a,"Map"),at=rt(Object,"create");var ct=function(){this.__data__=at?at(null):{},this.size=0};var lt=function(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e},dt="__lodash_hash_undefined__",ut=Object.prototype.hasOwnProperty;var ht=function(t){var e=this.__data__;if(at){var n=e[t];return n===dt?void 0:n}return ut.call(e,t)?e[t]:void 0},ft=Object.prototype.hasOwnProperty;var mt=function(t){var e=this.__data__;return at?void 0!==e[t]:ft.call(e,t)},pt="__lodash_hash_undefined__";var gt=function(t,e){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=at&&void 0===e?pt:e,this};function bt(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var i=t[e];this.set(i[0],i[1])}}bt.prototype.clear=ct,bt.prototype.delete=lt,bt.prototype.get=ht,bt.prototype.has=mt,bt.prototype.set=gt;var wt=bt;var _t=function(){this.size=0,this.__data__={hash:new wt,map:new(st||D),string:new wt}};var kt=function(t){var e=typeof t;return"string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==t:null===t};var vt=function(t,e){var n=t.__data__;return kt(e)?n["string"==typeof e?"string":"hash"]:n.map};var yt=function(t){var e=vt(this,t).delete(t);return this.size-=e?1:0,e};var xt=function(t){return vt(this,t).get(t)};var At=function(t){return vt(this,t).has(t)};var Ct=function(t,e){var n=vt(this,t),i=n.size;return n.set(t,e),this.size+=n.size==i?0:1,this};function Tt(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var i=t[e];this.set(i[0],i[1])}}Tt.prototype.clear=_t,Tt.prototype.delete=yt,Tt.prototype.get=xt,Tt.prototype.has=At,Tt.prototype.set=Ct;var Pt=Tt,Mt=200;var Et=function(t,e){var n=this.__data__;if(n instanceof D){var i=n.__data__;if(!st||i.length<Mt-1)return i.push([t,e]),this.size=++n.size,this;n=this.__data__=new Pt(i)}return n.set(t,e),this.size=n.size,this};function St(t){var e=this.__data__=new D(t);this.size=e.size}St.prototype.clear=L,St.prototype.delete=j,St.prototype.get=V,St.prototype.has=B,St.prototype.set=Et;var It=St;var Nt=function(t,e){for(var n=-1,i=null==t?0:t.length;++n<i&&!1!==e(t[n],n,t););return t},Ot=function(){try{var t=rt(Object,"defineProperty");return t({},"",{}),t}catch(t){}}();var Rt=function(t,e,n){"__proto__"==e&&Ot?Ot(t,e,{configurable:!0,enumerable:!0,value:n,writable:!0}):t[e]=n},Dt=Object.prototype.hasOwnProperty;var Lt=function(t,e,n){var i=t[e];Dt.call(t,e)&&P(i,n)&&(void 0!==n||e in t)||Rt(t,e,n)};var jt=function(t,e,n,i){var o=!n;n||(n={});for(var r=-1,s=e.length;++r<s;){var a=e[r],c=i?i(n[a],t[a],a,n,t):void 0;void 0===c&&(c=t[a]),o?Rt(n,a,c):Lt(n,a,c)}return n};var Vt=function(t,e){for(var n=-1,i=Array(t);++n<t;)i[n]=e(n);return i},Bt="[object Arguments]";var zt=function(t){return w(t)&&p(t)==Bt},Ft=Object.prototype,Ut=Ft.hasOwnProperty,Ht=Ft.propertyIsEnumerable,qt=zt(function(){return arguments}())?zt:function(t){return w(t)&&Ut.call(t,"callee")&&!Ht.call(t,"callee")},Wt=Array.isArray,Yt=n(6),$t=9007199254740991,Gt=/^(?:0|[1-9]\d*)$/;var Qt=function(t,e){var n=typeof t;return!!(e=null==e?$t:e)&&("number"==n||"symbol"!=n&&Gt.test(t))&&t>-1&&t%1==0&&t<e},Kt=9007199254740991;var Jt=function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=Kt},Zt={};Zt["[object Float32Array]"]=Zt["[object Float64Array]"]=Zt["[object Int8Array]"]=Zt["[object Int16Array]"]=Zt["[object Int32Array]"]=Zt["[object Uint8Array]"]=Zt["[object Uint8ClampedArray]"]=Zt["[object Uint16Array]"]=Zt["[object Uint32Array]"]=!0,Zt["[object Arguments]"]=Zt["[object Array]"]=Zt["[object ArrayBuffer]"]=Zt["[object Boolean]"]=Zt["[object DataView]"]=Zt["[object Date]"]=Zt["[object Error]"]=Zt["[object Function]"]=Zt["[object Map]"]=Zt["[object Number]"]=Zt["[object Object]"]=Zt["[object RegExp]"]=Zt["[object Set]"]=Zt["[object String]"]=Zt["[object WeakMap]"]=!1;var Xt=function(t){return w(t)&&Jt(t.length)&&!!Zt[p(t)]};var te=function(t){return function(e){return t(e)}},ee=n(5),ne=ee.a&&ee.a.isTypedArray,ie=ne?te(ne):Xt,oe=Object.prototype.hasOwnProperty;var re=function(t,e){var n=Wt(t),i=!n&&qt(t),o=!n&&!i&&Object(Yt.a)(t),r=!n&&!i&&!o&&ie(t),s=n||i||o||r,a=s?Vt(t.length,String):[],c=a.length;for(var l in t)!e&&!oe.call(t,l)||s&&("length"==l||o&&("offset"==l||"parent"==l)||r&&("buffer"==l||"byteLength"==l||"byteOffset"==l)||Qt(l,c))||a.push(l);return a},se=Object.prototype;var ae=function(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||se)},ce=g(Object.keys,Object),le=Object.prototype.hasOwnProperty;var de=function(t){if(!ae(t))return ce(t);var e=[];for(var n in Object(t))le.call(t,n)&&"constructor"!=n&&e.push(n);return e};var ue=function(t){return null!=t&&Jt(t.length)&&!W(t)};var he=function(t){return ue(t)?re(t):de(t)};var fe=function(t,e){return t&&jt(e,he(e),t)};var me=function(t){var e=[];if(null!=t)for(var n in Object(t))e.push(n);return e},pe=Object.prototype.hasOwnProperty;var ge=function(t){if(!z(t))return me(t);var e=ae(t),n=[];for(var i in t)("constructor"!=i||!e&&pe.call(t,i))&&n.push(i);return n};var be=function(t){return ue(t)?re(t,!0):ge(t)};var we=function(t,e){return t&&jt(e,be(e),t)},_e=n(20);var ke=function(t,e){var n=-1,i=t.length;for(e||(e=Array(i));++n<i;)e[n]=t[n];return e};var ve=function(t,e){for(var n=-1,i=null==t?0:t.length,o=0,r=[];++n<i;){var s=t[n];e(s,n,t)&&(r[o++]=s)}return r};var ye=function(){return[]},xe=Object.prototype.propertyIsEnumerable,Ae=Object.getOwnPropertySymbols,Ce=Ae?function(t){return null==t?[]:(t=Object(t),ve(Ae(t),function(e){return xe.call(t,e)}))}:ye;var Te=function(t,e){return jt(t,Ce(t),e)};var Pe=function(t,e){for(var n=-1,i=e.length,o=t.length;++n<i;)t[o+n]=e[n];return t},Me=Object.getOwnPropertySymbols?function(t){for(var e=[];t;)Pe(e,Ce(t)),t=b(t);return e}:ye;var Ee=function(t,e){return jt(t,Me(t),e)};var Se=function(t,e,n){var i=e(t);return Wt(t)?i:Pe(i,n(t))};var Ie=function(t){return Se(t,he,Ce)};var Ne=function(t){return Se(t,be,Me)},Oe=rt(i.a,"DataView"),Re=rt(i.a,"Promise"),De=rt(i.a,"Set"),Le=rt(i.a,"WeakMap"),je=K(Oe),Ve=K(st),Be=K(Re),ze=K(De),Fe=K(Le),Ue=p;(Oe&&"[object DataView]"!=Ue(new Oe(new ArrayBuffer(1)))||st&&"[object Map]"!=Ue(new st)||Re&&"[object Promise]"!=Ue(Re.resolve())||De&&"[object Set]"!=Ue(new De)||Le&&"[object WeakMap]"!=Ue(new Le))&&(Ue=function(t){var e=p(t),n="[object Object]"==e?t.constructor:void 0,i=n?K(n):"";if(i)switch(i){case je:return"[object DataView]";case Ve:return"[object Map]";case Be:return"[object Promise]";case ze:return"[object Set]";case Fe:return"[object WeakMap]"}return e});var He=Ue,qe=Object.prototype.hasOwnProperty;var We=function(t){var e=t.length,n=new t.constructor(e);return e&&"string"==typeof t[0]&&qe.call(t,"index")&&(n.index=t.index,n.input=t.input),n},Ye=i.a.Uint8Array;var $e=function(t){var e=new t.constructor(t.byteLength);return new Ye(e).set(new Ye(t)),e};var Ge=function(t,e){var n=e?$e(t.buffer):t.buffer;return new t.constructor(n,t.byteOffset,t.byteLength)},Qe=/\w*$/;var Ke=function(t){var e=new t.constructor(t.source,Qe.exec(t));return e.lastIndex=t.lastIndex,e},Je=o?o.prototype:void 0,Ze=Je?Je.valueOf:void 0;var Xe=function(t){return Ze?Object(Ze.call(t)):{}};var tn=function(t,e){var n=e?$e(t.buffer):t.buffer;return new t.constructor(n,t.byteOffset,t.length)},en="[object Boolean]",nn="[object Date]",on="[object Map]",rn="[object Number]",sn="[object RegExp]",an="[object Set]",cn="[object String]",ln="[object Symbol]",dn="[object ArrayBuffer]",un="[object DataView]",hn="[object Float32Array]",fn="[object Float64Array]",mn="[object Int8Array]",pn="[object Int16Array]",gn="[object Int32Array]",bn="[object Uint8Array]",wn="[object Uint8ClampedArray]",_n="[object Uint16Array]",kn="[object Uint32Array]";var vn=function(t,e,n){var i=t.constructor;switch(e){case dn:return $e(t);case en:case nn:return new i(+t);case un:return Ge(t,n);case hn:case fn:case mn:case pn:case gn:case bn:case wn:case _n:case kn:return tn(t,n);case on:return new i;case rn:case cn:return new i(t);case sn:return Ke(t);case an:return new i;case ln:return Xe(t)}},yn=Object.create,xn=function(){function t(){}return function(e){if(!z(e))return{};if(yn)return yn(e);t.prototype=e;var n=new t;return t.prototype=void 0,n}}();var An=function(t){return"function"!=typeof t.constructor||ae(t)?{}:xn(b(t))},Cn="[object Map]";var Tn=function(t){return w(t)&&He(t)==Cn},Pn=ee.a&&ee.a.isMap,Mn=Pn?te(Pn):Tn,En="[object Set]";var Sn=function(t){return w(t)&&He(t)==En},In=ee.a&&ee.a.isSet,Nn=In?te(In):Sn,On=1,Rn=2,Dn=4,Ln="[object Arguments]",jn="[object Function]",Vn="[object GeneratorFunction]",Bn="[object Object]",zn={};zn[Ln]=zn["[object Array]"]=zn["[object ArrayBuffer]"]=zn["[object DataView]"]=zn["[object Boolean]"]=zn["[object Date]"]=zn["[object Float32Array]"]=zn["[object Float64Array]"]=zn["[object Int8Array]"]=zn["[object Int16Array]"]=zn["[object Int32Array]"]=zn["[object Map]"]=zn["[object Number]"]=zn[Bn]=zn["[object RegExp]"]=zn["[object Set]"]=zn["[object String]"]=zn["[object Symbol]"]=zn["[object Uint8Array]"]=zn["[object Uint8ClampedArray]"]=zn["[object Uint16Array]"]=zn["[object Uint32Array]"]=!0,zn["[object Error]"]=zn[jn]=zn["[object WeakMap]"]=!1;var Fn=function t(e,n,i,o,r,s){var a,c=n&On,l=n&Rn,d=n&Dn;if(i&&(a=r?i(e,o,r,s):i(e)),void 0!==a)return a;if(!z(e))return e;var u=Wt(e);if(u){if(a=We(e),!c)return ke(e,a)}else{var h=He(e),f=h==jn||h==Vn;if(Object(Yt.a)(e))return Object(_e.a)(e,c);if(h==Bn||h==Ln||f&&!r){if(a=l||f?{}:An(e),!c)return l?Ee(e,we(a,e)):Te(e,fe(a,e))}else{if(!zn[h])return r?e:{};a=vn(e,h,c)}}s||(s=new It);var m=s.get(e);if(m)return m;if(s.set(e,a),Nn(e))return e.forEach(function(o){a.add(t(o,n,i,o,e,s))}),a;if(Mn(e))return e.forEach(function(o,r){a.set(r,t(o,n,i,r,e,s))}),a;var p=d?l?Ne:Ie:l?keysIn:he,g=u?void 0:p(e);return Nt(g||e,function(o,r){g&&(o=e[r=o]),Lt(a,r,t(o,n,i,r,e,s))}),a},Un=1,Hn=4;var qn=function(t,e){return Fn(t,Un|Hn,e="function"==typeof e?e:void 0)};var Wn=function(t){return w(t)&&1===t.nodeType&&!C(t)};class Yn{constructor(t,e){this._config={},e&&this.define(e),t&&this._setObjectToTarget(this._config,t)}set(t,e){this._setToTarget(this._config,t,e)}define(t,e){this._setToTarget(this._config,t,e,!0)}get(t){return this._getFromSource(this._config,t)}_setToTarget(t,e,n,i=!1){if(C(e))return void this._setObjectToTarget(t,e,i);const o=e.split(".");e=o.pop();for(const e of o)C(t[e])||(t[e]={}),t=t[e];if(C(n))return C(t[e])||(t[e]={}),t=t[e],void this._setObjectToTarget(t,n,i);i&&void 0!==t[e]||(t[e]=n)}_getFromSource(t,e){const n=e.split(".");e=n.pop();for(const e of n){if(!C(t[e])){t=null;break}t=t[e]}return t?function(t){return qn(t,$n)}(t[e]):void 0}_setObjectToTarget(t,e,n){Object.keys(e).forEach(i=>{this._setToTarget(t,i,e[i],n)})}}function $n(t){return Wn(t)?t:void 0}var Gn=n(0);var Qn=function(){return function t(){t.called=!0}};class Kn{constructor(t,e){this.source=t,this.name=e,this.path=[],this.stop=Qn(),this.off=Qn()}}function Jn(){let t="e";for(let e=0;e<8;e++)t+=Math.floor(65536*(1+Math.random())).toString(16).substring(1);return t}var Zn={get(t){return"number"!=typeof t?this[t]||this.normal:t},highest:1e5,high:1e3,normal:0,low:-1e3,lowest:-1e5};n(9);const Xn=Symbol("listeningTo"),ti=Symbol("emitterId");var ei={on(t,e,n={}){this.listenTo(this,t,e,n)},once(t,e,n){let i=!1;this.listenTo(this,t,function(t,...n){i||(i=!0,t.off(),e.call(this,t,...n))},n)},off(t,e){this.stopListening(this,t,e)},listenTo(t,e,n,i={}){let o,r;this[Xn]||(this[Xn]={});const s=this[Xn];ii(t)||ni(t);const a=ii(t);(o=s[a])||(o=s[a]={emitter:t,callbacks:{}}),(r=o.callbacks[e])||(r=o.callbacks[e]=[]),r.push(n),function(t,e){const n=oi(t);if(n[e])return;let i=e,o=null;const r=[];for(;""!==i&&!n[i];)n[i]={callbacks:[],childEvents:[]},r.push(n[i]),o&&n[i].childEvents.push(o),o=i,i=i.substr(0,i.lastIndexOf(":"));if(""!==i){for(const t of r)t.callbacks=n[i].callbacks.slice();n[i].childEvents.push(o)}}(t,e);const c=ri(t,e),l=Zn.get(i.priority),d={callback:n,priority:l};for(const t of c){let e=!1;for(let n=0;n<t.length;n++)if(t[n].priority<l){t.splice(n,0,d),e=!0;break}e||t.push(d)}},stopListening(t,e,n){const i=this[Xn];let o=t&&ii(t);const r=i&&o&&i[o],s=r&&e&&r.callbacks[e];if(!(!i||t&&!r||e&&!s))if(n)ai(t,e,n);else if(s){for(;n=s.pop();)ai(t,e,n);delete r.callbacks[e]}else if(r){for(e in r.callbacks)this.stopListening(t,e);delete i[o]}else{for(o in i)this.stopListening(i[o].emitter);delete this[Xn]}},fire(t,...e){const n=t instanceof Kn?t:new Kn(this,t),i=n.name;let o=function t(e,n){let i;if(!e._events||!(i=e._events[n])||!i.callbacks.length)return n.indexOf(":")>-1?t(e,n.substr(0,n.lastIndexOf(":"))):null;return i.callbacks}(this,i);if(n.path.push(this),o){const t=[n,...e];o=Array.from(o);for(let e=0;e<o.length&&(o[e].callback.apply(this,t),n.off.called&&(delete n.off.called,ai(this,i,o[e].callback)),!n.stop.called);e++);}if(this._delegations){const t=this._delegations.get(i),o=this._delegations.get("*");t&&si(t,n,e),o&&si(o,n,e)}return n.return},delegate(...t){return{to:(e,n)=>{this._delegations||(this._delegations=new Map),t.forEach(t=>{const i=this._delegations.get(t);i?i.set(e,n):this._delegations.set(t,new Map([[e,n]]))})}}},stopDelegating(t,e){if(this._delegations)if(t)if(e){const n=this._delegations.get(t);n&&n.delete(e)}else this._delegations.delete(t);else this._delegations.clear()}};function ni(t,e){t[ti]||(t[ti]=e||Jn())}function ii(t){return t[ti]}function oi(t){return t._events||Object.defineProperty(t,"_events",{value:{}}),t._events}function ri(t,e){const n=oi(t)[e];if(!n)return[];let i=[n.callbacks];for(let e=0;e<n.childEvents.length;e++){const o=ri(t,n.childEvents[e]);i=i.concat(o)}return i}function si(t,e,n){for(let[i,o]of t){o?"function"==typeof o&&(o=o(e.name)):o=e.name;const t=new Kn(e.source,o);t.path=[...e.path],i.fire(t,...n)}}function ai(t,e,n){const i=ri(t,e);for(const t of i)for(let e=0;e<t.length;e++)t[e].callback==n&&(t.splice(e,1),e--)}function ci(t,...e){e.forEach(e=>{Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e)).forEach(n=>{if(n in t.prototype)return;const i=Object.getOwnPropertyDescriptor(e,n);i.enumerable=!1,Object.defineProperty(t.prototype,n,i)})})}function li(t,e){const n=Math.min(t.length,e.length);for(let i=0;i<n;i++)if(t[i]!=e[i])return i;return t.length==e.length?"same":t.length<e.length?"prefix":"extension"}var di=4;var ui=function(t){return Fn(t,di)};class hi{constructor(){this.parent=null}get index(){let t;if(!this.parent)return null;if(-1==(t=this.parent.getChildIndex(this)))throw new Gn.b("view-node-not-found-in-parent: The node's parent does not contain this node.");return t}get nextSibling(){const t=this.index;return null!==t&&this.parent.getChild(t+1)||null}get previousSibling(){const t=this.index;return null!==t&&this.parent.getChild(t-1)||null}get root(){let t=this;for(;t.parent;)t=t.parent;return t}get document(){return this.parent instanceof hi?this.parent.document:null}getPath(){const t=[];let e=this;for(;e.parent;)t.unshift(e.index),e=e.parent;return t}getAncestors(t={includeSelf:!1,parentFirst:!1}){const e=[];let n=t.includeSelf?this:this.parent;for(;n;)e[t.parentFirst?"push":"unshift"](n),n=n.parent;return e}getCommonAncestor(t,e={}){const n=this.getAncestors(e),i=t.getAncestors(e);let o=0;for(;n[o]==i[o]&&n[o];)o++;return 0===o?null:n[o-1]}isBefore(t){if(this==t)return!1;if(this.root!==t.root)return!1;const e=this.getPath(),n=t.getPath(),i=li(e,n);switch(i){case"prefix":return!0;case"extension":return!1;default:return e[i]<n[i]}}isAfter(t){return this!=t&&(this.root===t.root&&!this.isBefore(t))}_remove(){this.parent._removeChildren(this.index)}_fireChange(t,e){this.fire("change:"+t,e),this.parent&&this.parent._fireChange(t,e)}toJSON(){const t=ui(this);return delete t.parent,t}is(t){return"node"==t}}ci(hi,ei);class fi extends hi{constructor(t){super(),this._textData=t}is(t){return"text"==t||super.is(t)}get data(){return this._textData}get _data(){return this.data}set _data(t){this._fireChange("text",this),this._textData=t}isSimilar(t){return t instanceof fi&&(this===t||this.data===t.data)}_clone(){return new fi(this.data)}}class mi{constructor(t,e,n){if(this.textNode=t,e<0||e>t.data.length)throw new Gn.b("view-textproxy-wrong-offsetintext: Given offsetInText value is incorrect.");if(n<0||e+n>t.data.length)throw new Gn.b("view-textproxy-wrong-length: Given length value is incorrect.");this.data=t.data.substring(e,e+n),this.offsetInText=e}get offsetSize(){return this.data.length}get isPartial(){return this.data.length!==this.textNode.data.length}get parent(){return this.textNode.parent}get root(){return this.textNode.root}get document(){return this.textNode.document}is(t){return"textProxy"==t}getAncestors(t={includeSelf:!1,parentFirst:!1}){const e=[];let n=t.includeSelf?this.textNode:this.parent;for(;null!==n;)e[t.parentFirst?"push":"unshift"](n),n=n.parent;return e}}function pi(t){const e=new Map;for(const n in t)e.set(n,t[n]);return e}function gi(t){return!(!t||!t[Symbol.iterator])}class bi{constructor(...t){this._patterns=[],this.add(...t)}add(...t){for(let e of t)("string"==typeof e||e instanceof RegExp)&&(e={name:e}),e.classes&&("string"==typeof e.classes||e.classes instanceof RegExp)&&(e.classes=[e.classes]),this._patterns.push(e)}match(...t){for(const e of t)for(const t of this._patterns){const n=wi(e,t);if(n)return{element:e,pattern:t,match:n}}return null}matchAll(...t){const e=[];for(const n of t)for(const t of this._patterns){const i=wi(n,t);i&&e.push({element:n,pattern:t,match:i})}return e.length>0?e:null}getElementName(){if(1!==this._patterns.length)return null;const t=this._patterns[0],e=t.name;return"function"==typeof t||!e||e instanceof RegExp?null:e}}function wi(t,e){if("function"==typeof e)return e(t);const n={};return e.name&&(n.name=function(t,e){if(t instanceof RegExp)return t.test(e);return t===e}(e.name,t.name),!n.name)?null:e.attributes&&(n.attributes=function(t,e){const n=[];for(const i in t){const o=t[i];if(!e.hasAttribute(i))return null;{const t=e.getAttribute(i);if(!0===o)n.push(i);else if(o instanceof RegExp){if(!o.test(t))return null;n.push(i)}else{if(t!==o)return null;n.push(i)}}}return n}(e.attributes,t),!n.attributes)?null:!(e.classes&&(n.classes=function(t,e){const n=[];for(const i of t)if(i instanceof RegExp){const t=e.getClassNames();for(const e of t)i.test(e)&&n.push(e);if(0===n.length)return null}else{if(!e.hasClass(i))return null;n.push(i)}return n}(e.classes,t),!n.classes))&&(!(e.styles&&(n.styles=function(t,e){const n=[];for(const i in t){const o=t[i];if(!e.hasStyle(i))return null;{const t=e.getStyle(i);if(o instanceof RegExp){if(!o.test(t))return null;n.push(i)}else{if(t!==o)return null;n.push(i)}}}return n}(e.styles,t),!n.styles))&&n)}class _i extends hi{constructor(t,e,n){if(super(),this.name=t,this._attrs=function(t){t=C(t)?pi(t):new Map(t);for(const[e,n]of t)null===n?t.delete(e):"string"!=typeof n&&t.set(e,String(n));return t}(e),this._children=[],n&&this._insertChild(0,n),this._classes=new Set,this._attrs.has("class")){const t=this._attrs.get("class");vi(this._classes,t),this._attrs.delete("class")}this._styles=new Map,this._attrs.has("style")&&(ki(this._styles,this._attrs.get("style")),this._attrs.delete("style")),this._customProperties=new Map}get childCount(){return this._children.length}get isEmpty(){return 0===this._children.length}is(t,e=null){return e?"element"==t&&e==this.name:"element"==t||t==this.name||super.is(t)}getChild(t){return this._children[t]}getChildIndex(t){return this._children.indexOf(t)}getChildren(){return this._children[Symbol.iterator]()}*getAttributeKeys(){this._classes.size>0&&(yield"class"),this._styles.size>0&&(yield"style"),yield*this._attrs.keys()}*getAttributes(){yield*this._attrs.entries(),this._classes.size>0&&(yield["class",this.getAttribute("class")]),this._styles.size>0&&(yield["style",this.getAttribute("style")])}getAttribute(t){if("class"==t)return this._classes.size>0?[...this._classes].join(" "):void 0;if("style"!=t)return this._attrs.get(t);if(this._styles.size>0){let t="";for(const[e,n]of this._styles)t+=`${e}:${n};`;return t}}hasAttribute(t){return"class"==t?this._classes.size>0:"style"==t?this._styles.size>0:this._attrs.has(t)}isSimilar(t){if(!(t instanceof _i))return!1;if(this===t)return!0;if(this.name!=t.name)return!1;if(this._attrs.size!==t._attrs.size||this._classes.size!==t._classes.size||this._styles.size!==t._styles.size)return!1;for(const[e,n]of this._attrs)if(!t._attrs.has(e)||t._attrs.get(e)!==n)return!1;for(const e of this._classes)if(!t._classes.has(e))return!1;for(const[e,n]of this._styles)if(!t._styles.has(e)||t._styles.get(e)!==n)return!1;return!0}hasClass(...t){for(const e of t)if(!this._classes.has(e))return!1;return!0}getClassNames(){return this._classes.keys()}getStyle(t){return this._styles.get(t)}getStyleNames(){return this._styles.keys()}hasStyle(...t){for(const e of t)if(!this._styles.has(e))return!1;return!0}findAncestor(...t){const e=new bi(...t);let n=this.parent;for(;n;){if(e.match(n))return n;n=n.parent}return null}getCustomProperty(t){return this._customProperties.get(t)}*getCustomProperties(){yield*this._customProperties.entries()}getIdentity(){const t=Array.from(this._classes).sort().join(","),e=Array.from(this._styles).map(t=>`${t[0]}:${t[1]}`).sort().join(";"),n=Array.from(this._attrs).map(t=>`${t[0]}="${t[1]}"`).sort().join(" ");return this.name+(""==t?"":` class="${t}"`)+(""==e?"":` style="${e}"`)+(""==n?"":` ${n}`)}_clone(t=!1){const e=[];if(t)for(const n of this.getChildren())e.push(n._clone(t));const n=new this.constructor(this.name,this._attrs,e);return n._classes=new Set(this._classes),n._styles=new Map(this._styles),n._customProperties=new Map(this._customProperties),n.getFillerOffset=this.getFillerOffset,n}_appendChild(t){return this._insertChild(this.childCount,t)}_insertChild(t,e){this._fireChange("children",this);let n=0;const i=function(t){if("string"==typeof t)return[new fi(t)];gi(t)||(t=[t]);return Array.from(t).map(t=>"string"==typeof t?new fi(t):t instanceof mi?new fi(t.data):t)}(e);for(const e of i)null!==e.parent&&e._remove(),e.parent=this,this._children.splice(t,0,e),t++,n++;return n}_removeChildren(t,e=1){this._fireChange("children",this);for(let n=t;n<t+e;n++)this._children[n].parent=null;return this._children.splice(t,e)}_setAttribute(t,e){e=String(e),this._fireChange("attributes",this),"class"==t?vi(this._classes,e):"style"==t?ki(this._styles,e):this._attrs.set(t,e)}_removeAttribute(t){return this._fireChange("attributes",this),"class"==t?this._classes.size>0&&(this._classes.clear(),!0):"style"==t?this._styles.size>0&&(this._styles.clear(),!0):this._attrs.delete(t)}_addClass(t){this._fireChange("attributes",this),(t=Array.isArray(t)?t:[t]).forEach(t=>this._classes.add(t))}_removeClass(t){this._fireChange("attributes",this),(t=Array.isArray(t)?t:[t]).forEach(t=>this._classes.delete(t))}_setStyle(t,e){if(this._fireChange("attributes",this),C(t)){const e=Object.keys(t);for(const n of e)this._styles.set(n,t[n])}else this._styles.set(t,e)}_removeStyle(t){this._fireChange("attributes",this),(t=Array.isArray(t)?t:[t]).forEach(t=>this._styles.delete(t))}_setCustomProperty(t,e){this._customProperties.set(t,e)}_removeCustomProperty(t){return this._customProperties.delete(t)}}function ki(t,e){let n=null,i=0,o=0,r=null;if(t.clear(),""!==e){";"!=e.charAt(e.length-1)&&(e+=";");for(let s=0;s<e.length;s++){const a=e.charAt(s);if(null===n)switch(a){case":":r||(r=e.substr(i,s-i),o=s+1);break;case'"':case"'":n=a;break;case";":{const n=e.substr(o,s-o);r&&t.set(r.trim(),n.trim()),r=null,i=s+1;break}}else a===n&&(n=null)}}}function vi(t,e){const n=e.split(/\s+/);t.clear(),n.forEach(e=>t.add(e))}class yi extends _i{constructor(t,e,n){super(t,e,n),this.getFillerOffset=xi}is(t,e=null){return e?"containerElement"==t&&e==this.name||super.is(t,e):"containerElement"==t||super.is(t)}}function xi(){const t=[...this.getChildren()],e=t[this.childCount-1];if(e&&e.is("element","br"))return this.childCount;for(const e of t)if(!e.is("uiElement"))return null;return this.childCount}var Ai=function(t){return t};var Ci=function(t,e,n){switch(n.length){case 0:return t.call(e);case 1:return t.call(e,n[0]);case 2:return t.call(e,n[0],n[1]);case 3:return t.call(e,n[0],n[1],n[2])}return t.apply(e,n)},Ti=Math.max;var Pi=function(t,e,n){return e=Ti(void 0===e?t.length-1:e,0),function(){for(var i=arguments,o=-1,r=Ti(i.length-e,0),s=Array(r);++o<r;)s[o]=i[e+o];o=-1;for(var a=Array(e+1);++o<e;)a[o]=i[o];return a[e]=n(s),Ci(t,this,a)}};var Mi=function(t){return function(){return t}},Ei=Ot?function(t,e){return Ot(t,"toString",{configurable:!0,enumerable:!1,value:Mi(e),writable:!0})}:Ai,Si=800,Ii=16,Ni=Date.now;var Oi=function(t){var e=0,n=0;return function(){var i=Ni(),o=Ii-(i-n);if(n=i,o>0){if(++e>=Si)return arguments[0]}else e=0;return t.apply(void 0,arguments)}}(Ei);var Ri=function(t,e){return Oi(Pi(t,e,Ai),t+"")};var Di=function(t,e,n){if(!z(n))return!1;var i=typeof e;return!!("number"==i?ue(n)&&Qt(e,n.length):"string"==i&&e in n)&&P(n[e],t)};var Li=function(t){return Ri(function(e,n){var i=-1,o=n.length,r=o>1?n[o-1]:void 0,s=o>2?n[2]:void 0;for(r=t.length>3&&"function"==typeof r?(o--,r):void 0,s&&Di(n[0],n[1],s)&&(r=o<3?void 0:r,o=1),e=Object(e);++i<o;){var a=n[i];a&&t(e,a,i,r)}return e})}(function(t,e){jt(e,be(e),t)});const ji=Symbol("observableProperties"),Vi=Symbol("boundObservables"),Bi=Symbol("boundProperties"),zi={set(t,e){if(z(t))return void Object.keys(t).forEach(e=>{this.set(e,t[e])},this);Ui(this);const n=this[ji];if(t in this&&!n.has(t))throw new Gn.b("observable-set-cannot-override: Cannot override an existing property.");Object.defineProperty(this,t,{enumerable:!0,configurable:!0,get:()=>n.get(t),set(e){const i=n.get(t);let o=this.fire("set:"+t,t,e,i);void 0===o&&(o=e),i===o&&n.has(t)||(n.set(t,o),this.fire("change:"+t,t,o,i))}}),this[t]=e},bind(...t){if(!t.length||!Wi(t))throw new Gn.b("observable-bind-wrong-properties: All properties must be strings.");if(new Set(t).size!==t.length)throw new Gn.b("observable-bind-duplicate-properties: Properties must be unique.");Ui(this);const e=this[Bi];t.forEach(t=>{if(e.has(t))throw new Gn.b("observable-bind-rebind: Cannot bind the same property more that once.")});const n=new Map;return t.forEach(t=>{const i={property:t,to:[]};e.set(t,i),n.set(t,i)}),{to:Hi,toMany:qi,_observable:this,_bindProperties:t,_to:[],_bindings:n}},unbind(...t){if(!(ji in this))return;const e=this[Bi],n=this[Vi];if(t.length){if(!Wi(t))throw new Gn.b("observable-unbind-wrong-properties: Properties must be strings.");t.forEach(t=>{const i=e.get(t);if(!i)return;let o,r,s,a;i.to.forEach(t=>{o=t[0],r=t[1],s=n.get(o),(a=s[r]).delete(i),a.size||delete s[r],Object.keys(s).length||(n.delete(o),this.stopListening(o,"change"))}),e.delete(t)})}else n.forEach((t,e)=>{this.stopListening(e,"change")}),n.clear(),e.clear()},decorate(t){const e=this[t];if(!e)throw new Gn.b("observablemixin-cannot-decorate-undefined: Cannot decorate an undefined method.",{object:this,methodName:t});this.on(t,(t,n)=>{t.return=e.apply(this,n)}),this[t]=function(...e){return this.fire(t,e)}}};Li(zi,ei);var Fi=zi;function Ui(t){ji in t||(Object.defineProperty(t,ji,{value:new Map}),Object.defineProperty(t,Vi,{value:new Map}),Object.defineProperty(t,Bi,{value:new Map}))}function Hi(...t){const e=function(...t){if(!t.length)throw new Gn.b("observable-bind-to-parse-error: Invalid argument syntax in `to()`.");const e={to:[]};let n;"function"==typeof t[t.length-1]&&(e.callback=t.pop());return t.forEach(t=>{if("string"==typeof t)n.properties.push(t);else{if("object"!=typeof t)throw new Gn.b("observable-bind-to-parse-error: Invalid argument syntax in `to()`.");n={observable:t,properties:[]},e.to.push(n)}}),e}(...t),n=Array.from(this._bindings.keys()),i=n.length;if(!e.callback&&e.to.length>1)throw new Gn.b("observable-bind-to-no-callback: Binding multiple observables only possible with callback.");if(i>1&&e.callback)throw new Gn.b("observable-bind-to-extra-callback: Cannot bind multiple properties and use a callback in one binding.");e.to.forEach(t=>{if(t.properties.length&&t.properties.length!==i)throw new Gn.b("observable-bind-to-properties-length: The number of properties must match.");t.properties.length||(t.properties=this._bindProperties)}),this._to=e.to,e.callback&&(this._bindings.get(n[0]).callback=e.callback),function(t,e){e.forEach(e=>{const n=t[Vi];let i;n.get(e.observable)||t.listenTo(e.observable,"change",(o,r)=>{(i=n.get(e.observable)[r])&&i.forEach(e=>{Yi(t,e.property)})})})}(this._observable,this._to),function(t){let e;t._bindings.forEach((n,i)=>{t._to.forEach(o=>{e=o.properties[n.callback?0:t._bindProperties.indexOf(i)],n.to.push([o.observable,e]),function(t,e,n,i){const o=t[Vi],r=o.get(n),s=r||{};s[i]||(s[i]=new Set);s[i].add(e),r||o.set(n,s)}(t._observable,n,o.observable,e)})})}(this),this._bindProperties.forEach(t=>{Yi(this._observable,t)})}function qi(t,e,n){if(this._bindings.size>1)throw new Gn.b("observable-bind-to-many-not-one-binding: Cannot bind multiple properties with toMany().");this.to(...function(t,e){const n=t.map(t=>[t,e]);return Array.prototype.concat.apply([],n)}(t,e),n)}function Wi(t){return t.every(t=>"string"==typeof t)}function Yi(t,e){const n=t[Bi].get(e);let i;i=n.callback?n.callback.apply(t,n.to.map(t=>t[0][t[1]])):(i=n.to[0])[0][i[1]],t.hasOwnProperty(e)?t[e]=i:t.set(e,i)}const $i=Symbol("document");class Gi extends yi{constructor(t,e,n){super(t,e,n),this.set("isReadOnly",!1),this.set("isFocused",!1)}is(t,e=null){return e?"editableElement"==t&&e==this.name||super.is(t,e):"editableElement"==t||super.is(t)}destroy(){this.stopListening()}get document(){return this.getCustomProperty($i)}set _document(t){if(this.getCustomProperty($i))throw new Gn.b("view-editableelement-document-already-set: View document is already set.");this._setCustomProperty($i,t),this.bind("isReadOnly").to(t),this.bind("isFocused").to(t,"isFocused",e=>e&&t.selection.editableElement==this),this.listenTo(t.selection,"change",()=>{this.isFocused=t.isFocused&&t.selection.editableElement==this})}}ci(Gi,Fi);const Qi=Symbol("rootName");class Ki extends Gi{constructor(t){super(t),this.rootName="main"}is(t,e=null){return e?"rootElement"==t&&e==this.name||super.is(t,e):"rootElement"==t||super.is(t)}get rootName(){return this.getCustomProperty(Qi)}set rootName(t){this._setCustomProperty(Qi,t)}set _name(t){this.name=t}}class Ji{constructor(t={}){if(!t.boundaries&&!t.startPosition)throw new Gn.b("view-tree-walker-no-start-position: Neither boundaries nor starting position have been defined.");if(t.direction&&"forward"!=t.direction&&"backward"!=t.direction)throw new Gn.b("view-tree-walker-unknown-direction: Only `backward` and `forward` direction allowed.",{direction:t.direction});this.boundaries=t.boundaries||null,t.startPosition?this.position=Zi._createAt(t.startPosition):this.position=Zi._createAt(t.boundaries["backward"==t.direction?"end":"start"]),this.direction=t.direction||"forward",this.singleCharacters=!!t.singleCharacters,this.shallow=!!t.shallow,this.ignoreElementEnd=!!t.ignoreElementEnd,this._boundaryStartParent=this.boundaries?this.boundaries.start.parent:null,this._boundaryEndParent=this.boundaries?this.boundaries.end.parent:null}[Symbol.iterator](){return this}skip(t){let e,n,i;do{i=this.position,({done:e,value:n}=this.next())}while(!e&&t(n));e||(this.position=i)}next(){return"forward"==this.direction?this._next():this._previous()}_next(){let t=this.position.clone();const e=this.position,n=t.parent;if(null===n.parent&&t.offset===n.childCount)return{done:!0};if(n===this._boundaryEndParent&&t.offset==this.boundaries.end.offset)return{done:!0};let i;if(n instanceof fi){if(t.isAtEnd)return this.position=Zi._createAfter(n),this._next();i=n.data[t.offset]}else i=n.getChild(t.offset);if(i instanceof _i)return this.shallow?t.offset++:t=new Zi(i,0),this.position=t,this._formatReturnValue("elementStart",i,e,t,1);if(i instanceof fi){if(this.singleCharacters)return t=new Zi(i,0),this.position=t,this._next();{let n,o=i.data.length;return i==this._boundaryEndParent?(o=this.boundaries.end.offset,n=new mi(i,0,o),t=Zi._createAfter(n)):(n=new mi(i,0,i.data.length),t.offset++),this.position=t,this._formatReturnValue("text",n,e,t,o)}}if("string"==typeof i){let i;if(this.singleCharacters)i=1;else{i=(n===this._boundaryEndParent?this.boundaries.end.offset:n.data.length)-t.offset}const o=new mi(n,t.offset,i);return t.offset+=i,this.position=t,this._formatReturnValue("text",o,e,t,i)}return t=Zi._createAfter(n),this.position=t,this.ignoreElementEnd?this._next():this._formatReturnValue("elementEnd",n,e,t)}_previous(){let t=this.position.clone();const e=this.position,n=t.parent;if(null===n.parent&&0===t.offset)return{done:!0};if(n==this._boundaryStartParent&&t.offset==this.boundaries.start.offset)return{done:!0};let i;if(n instanceof fi){if(t.isAtStart)return this.position=Zi._createBefore(n),this._previous();i=n.data[t.offset-1]}else i=n.getChild(t.offset-1);if(i instanceof _i)return this.shallow?(t.offset--,this.position=t,this._formatReturnValue("elementStart",i,e,t,1)):(t=new Zi(i,i.childCount),this.position=t,this.ignoreElementEnd?this._previous():this._formatReturnValue("elementEnd",i,e,t));if(i instanceof fi){if(this.singleCharacters)return t=new Zi(i,i.data.length),this.position=t,this._previous();{let n,o=i.data.length;if(i==this._boundaryStartParent){const e=this.boundaries.start.offset;o=(n=new mi(i,e,i.data.length-e)).data.length,t=Zi._createBefore(n)}else n=new mi(i,0,i.data.length),t.offset--;return this.position=t,this._formatReturnValue("text",n,e,t,o)}}if("string"==typeof i){let i;if(this.singleCharacters)i=1;else{const e=n===this._boundaryStartParent?this.boundaries.start.offset:0;i=t.offset-e}t.offset-=i;const o=new mi(n,t.offset,i);return this.position=t,this._formatReturnValue("text",o,e,t,i)}return t=Zi._createBefore(n),this.position=t,this._formatReturnValue("elementStart",n,e,t,1)}_formatReturnValue(t,e,n,i,o){return e instanceof mi&&(e.offsetInText+e.data.length==e.textNode.data.length&&("forward"!=this.direction||this.boundaries&&this.boundaries.end.isEqual(this.position)?n=Zi._createAfter(e.textNode):(i=Zi._createAfter(e.textNode),this.position=i)),0===e.offsetInText&&("backward"!=this.direction||this.boundaries&&this.boundaries.start.isEqual(this.position)?n=Zi._createBefore(e.textNode):(i=Zi._createBefore(e.textNode),this.position=i))),{done:!1,value:{type:t,item:e,previousPosition:n,nextPosition:i,length:o}}}}class Zi{constructor(t,e){this.parent=t,this.offset=e}get nodeAfter(){return this.parent.is("text")?null:this.parent.getChild(this.offset)||null}get nodeBefore(){return this.parent.is("text")?null:this.parent.getChild(this.offset-1)||null}get isAtStart(){return 0===this.offset}get isAtEnd(){const t=this.parent.is("text")?this.parent.data.length:this.parent.childCount;return this.offset===t}get root(){return this.parent.root}get editableElement(){let t=this.parent;for(;!(t instanceof Gi);){if(!t.parent)return null;t=t.parent}return t}getShiftedBy(t){const e=Zi._createAt(this),n=e.offset+t;return e.offset=n<0?0:n,e}getLastMatchingPosition(t,e={}){e.startPosition=this;const n=new Ji(e);return n.skip(t),n.position}getAncestors(){return this.parent.is("documentFragment")?[this.parent]:this.parent.getAncestors({includeSelf:!0})}getCommonAncestor(t){const e=this.getAncestors(),n=t.getAncestors();let i=0;for(;e[i]==n[i]&&e[i];)i++;return 0===i?null:e[i-1]}isEqual(t){return this.parent==t.parent&&this.offset==t.offset}isBefore(t){return"before"==this.compareWith(t)}isAfter(t){return"after"==this.compareWith(t)}compareWith(t){if(this.root!==t.root)return"different";if(this.isEqual(t))return"same";const e=this.parent.is("node")?this.parent.getPath():[],n=t.parent.is("node")?t.parent.getPath():[];e.push(this.offset),n.push(t.offset);const i=li(e,n);switch(i){case"prefix":return"before";case"extension":return"after";default:return e[i]<n[i]?"before":"after"}}getWalker(t={}){return t.startPosition=this,new Ji(t)}clone(){return new Zi(this.parent,this.offset)}static _createAt(t,e){if(t instanceof Zi)return new this(t.parent,t.offset);{const n=t;if("end"==e)e=n.is("text")?n.data.length:n.childCount;else{if("before"==e)return this._createBefore(n);if("after"==e)return this._createAfter(n);if(0!==e&&!e)throw new Gn.b("view-createPositionAt-offset-required: View#createPositionAt() requires the offset when the first parameter is a view item.")}return new Zi(n,e)}}static _createAfter(t){if(t.is("textProxy"))return new Zi(t.textNode,t.offsetInText+t.data.length);if(!t.parent)throw new Gn.b("view-position-after-root: You can not make position after root.",{root:t});return new Zi(t.parent,t.index+1)}static _createBefore(t){if(t.is("textProxy"))return new Zi(t.textNode,t.offsetInText);if(!t.parent)throw new Gn.b("view-position-before-root: You can not make position before root.",{root:t});return new Zi(t.parent,t.index)}}class Xi{constructor(t,e=null){this.start=t.clone(),this.end=e?e.clone():t.clone()}*[Symbol.iterator](){yield*new Ji({boundaries:this,ignoreElementEnd:!0})}get isCollapsed(){return this.start.isEqual(this.end)}get isFlat(){return this.start.parent===this.end.parent}get root(){return this.start.root}getEnlarged(){let t=this.start.getLastMatchingPosition(to,{direction:"backward"}),e=this.end.getLastMatchingPosition(to);return t.parent.is("text")&&t.isAtStart&&(t=Zi._createBefore(t.parent)),e.parent.is("text")&&e.isAtEnd&&(e=Zi._createAfter(e.parent)),new Xi(t,e)}getTrimmed(){let t=this.start.getLastMatchingPosition(to);if(t.isAfter(this.end)||t.isEqual(this.end))return new Xi(t,t);let e=this.end.getLastMatchingPosition(to,{direction:"backward"});const n=t.nodeAfter,i=e.nodeBefore;return n&&n.is("text")&&(t=new Zi(n,0)),i&&i.is("text")&&(e=new Zi(i,i.data.length)),new Xi(t,e)}isEqual(t){return this==t||this.start.isEqual(t.start)&&this.end.isEqual(t.end)}containsPosition(t){return t.isAfter(this.start)&&t.isBefore(this.end)}containsRange(t,e=!1){t.isCollapsed&&(e=!1);const n=this.containsPosition(t.start)||e&&this.start.isEqual(t.start),i=this.containsPosition(t.end)||e&&this.end.isEqual(t.end);return n&&i}getDifference(t){const e=[];return this.isIntersecting(t)?(this.containsPosition(t.start)&&e.push(new Xi(this.start,t.start)),this.containsPosition(t.end)&&e.push(new Xi(t.end,this.end))):e.push(this.clone()),e}getIntersection(t){if(this.isIntersecting(t)){let e=this.start,n=this.end;return this.containsPosition(t.start)&&(e=t.start),this.containsPosition(t.end)&&(n=t.end),new Xi(e,n)}return null}getWalker(t={}){return t.boundaries=this,new Ji(t)}getCommonAncestor(){return this.start.getCommonAncestor(this.end)}clone(){return new Xi(this.start,this.end)}*getItems(t={}){t.boundaries=this,t.ignoreElementEnd=!0;const e=new Ji(t);for(const t of e)yield t.item}*getPositions(t={}){t.boundaries=this;const e=new Ji(t);yield e.position;for(const t of e)yield t.nextPosition}isIntersecting(t){return this.start.isBefore(t.end)&&this.end.isAfter(t.start)}static _createFromParentsAndOffsets(t,e,n,i){return new this(new Zi(t,e),new Zi(n,i))}static _createFromPositionAndShift(t,e){const n=t,i=t.getShiftedBy(e);return e>0?new this(n,i):new this(i,n)}static _createIn(t){return this._createFromParentsAndOffsets(t,0,t,t.childCount)}static _createOn(t){const e=t.is("textProxy")?t.offsetSize:1;return this._createFromPositionAndShift(Zi._createBefore(t),e)}}function to(t){return!(!t.item.is("attributeElement")&&!t.item.is("uiElement"))}function eo(t){let e=0;for(const n of t)e++;return e}class no{constructor(t=null,e,n){this._ranges=[],this._lastRangeBackward=!1,this._isFake=!1,this._fakeSelectionLabel="",this.setTo(t,e,n)}get isFake(){return this._isFake}get fakeSelectionLabel(){return this._fakeSelectionLabel}get anchor(){if(!this._ranges.length)return null;const t=this._ranges[this._ranges.length-1];return(this._lastRangeBackward?t.end:t.start).clone()}get focus(){if(!this._ranges.length)return null;const t=this._ranges[this._ranges.length-1];return(this._lastRangeBackward?t.start:t.end).clone()}get isCollapsed(){return 1===this.rangeCount&&this._ranges[0].isCollapsed}get rangeCount(){return this._ranges.length}get isBackward(){return!this.isCollapsed&&this._lastRangeBackward}get editableElement(){return this.anchor?this.anchor.editableElement:null}*getRanges(){for(const t of this._ranges)yield t.clone()}getFirstRange(){let t=null;for(const e of this._ranges)t&&!e.start.isBefore(t.start)||(t=e);return t?t.clone():null}getLastRange(){let t=null;for(const e of this._ranges)t&&!e.end.isAfter(t.end)||(t=e);return t?t.clone():null}getFirstPosition(){const t=this.getFirstRange();return t?t.start.clone():null}getLastPosition(){const t=this.getLastRange();return t?t.end.clone():null}isEqual(t){if(this.isFake!=t.isFake)return!1;if(this.isFake&&this.fakeSelectionLabel!=t.fakeSelectionLabel)return!1;if(this.rangeCount!=t.rangeCount)return!1;if(0===this.rangeCount)return!0;if(!this.anchor.isEqual(t.anchor)||!this.focus.isEqual(t.focus))return!1;for(const e of this._ranges){let n=!1;for(const i of t._ranges)if(e.isEqual(i)){n=!0;break}if(!n)return!1}return!0}isSimilar(t){if(this.isBackward!=t.isBackward)return!1;const e=eo(this.getRanges());if(e!=eo(t.getRanges()))return!1;if(0==e)return!0;for(let e of this.getRanges()){e=e.getTrimmed();let n=!1;for(let i of t.getRanges())if(i=i.getTrimmed(),e.start.isEqual(i.start)&&e.end.isEqual(i.end)){n=!0;break}if(!n)return!1}return!0}getSelectedElement(){if(1!==this.rangeCount)return null;const t=this.getFirstRange();let e=t.start.nodeAfter,n=t.end.nodeBefore;return t.start.parent.is("text")&&t.start.isAtEnd&&t.start.parent.nextSibling&&(e=t.start.parent.nextSibling),t.end.parent.is("text")&&t.end.isAtStart&&t.end.parent.previousSibling&&(n=t.end.parent.previousSibling),e instanceof _i&&e==n?e:null}setTo(t,e,n){if(null===t)this._setRanges([]),this._setFakeOptions(e);else if(t instanceof no||t instanceof io)this._setRanges(t.getRanges(),t.isBackward),this._setFakeOptions({fake:t.isFake,label:t.fakeSelectionLabel});else if(t instanceof Xi)this._setRanges([t],e&&e.backward),this._setFakeOptions(e);else if(t instanceof Zi)this._setRanges([new Xi(t)]),this._setFakeOptions(e);else if(t instanceof hi){const i=!!n&&!!n.backward;let o;if(void 0===e)throw new Gn.b("view-selection-setTo-required-second-parameter: selection.setTo requires the second parameter when the first parameter is a node.");o="in"==e?Xi._createIn(t):"on"==e?Xi._createOn(t):new Xi(Zi._createAt(t,e)),this._setRanges([o],i),this._setFakeOptions(n)}else{if(!gi(t))throw new Gn.b("view-selection-setTo-not-selectable: Cannot set selection to given place.");this._setRanges(t,e&&e.backward),this._setFakeOptions(e)}this.fire("change")}setFocus(t,e){if(null===this.anchor)throw new Gn.b("view-selection-setFocus-no-ranges: Cannot set selection focus if there are no ranges in selection.");const n=Zi._createAt(t,e);if("same"==n.compareWith(this.focus))return;const i=this.anchor;this._ranges.pop(),"before"==n.compareWith(i)?this._addRange(new Xi(n,i),!0):this._addRange(new Xi(i,n)),this.fire("change")}is(t){return"selection"==t}_setRanges(t,e=!1){t=Array.from(t),this._ranges=[];for(const e of t)this._addRange(e);this._lastRangeBackward=!!e}_setFakeOptions(t={}){this._isFake=!!t.fake,this._fakeSelectionLabel=t.fake&&t.label||""}_addRange(t,e=!1){if(!(t instanceof Xi))throw new Gn.b("view-selection-add-range-not-range: Selection range set to an object that is not an instance of view.Range");this._pushRange(t),this._lastRangeBackward=!!e}_pushRange(t){for(const e of this._ranges)if(t.isIntersecting(e))throw new Gn.b("view-selection-range-intersects: Trying to add a range that intersects with another range from selection.",{addedRange:t,intersectingRange:e});this._ranges.push(new Xi(t.start,t.end))}}ci(no,ei);class io{constructor(t=null,e,n){this._selection=new no,this._selection.delegate("change").to(this),this._selection.setTo(t,e,n)}get isFake(){return this._selection.isFake}get fakeSelectionLabel(){return this._selection.fakeSelectionLabel}get anchor(){return this._selection.anchor}get focus(){return this._selection.focus}get isCollapsed(){return this._selection.isCollapsed}get rangeCount(){return this._selection.rangeCount}get isBackward(){return this._selection.isBackward}get editableElement(){return this._selection.editableElement}get _ranges(){return this._selection._ranges}*getRanges(){yield*this._selection.getRanges()}getFirstRange(){return this._selection.getFirstRange()}getLastRange(){return this._selection.getLastRange()}getFirstPosition(){return this._selection.getFirstPosition()}getLastPosition(){return this._selection.getLastPosition()}getSelectedElement(){return this._selection.getSelectedElement()}isEqual(t){return this._selection.isEqual(t)}isSimilar(t){return this._selection.isSimilar(t)}is(t){return"selection"==t||"documentSelection"==t}_setTo(t,e,n){this._selection.setTo(t,e,n)}_setFocus(t,e){this._selection.setFocus(t,e)}}ci(io,ei);class oo{constructor(t={}){this._items=[],this._itemMap=new Map,this._idProperty=t.idProperty||"id",this._bindToExternalToInternalMap=new WeakMap,this._bindToInternalToExternalMap=new WeakMap,this._skippedIndexesFromExternal=[]}get length(){return this._items.length}get first(){return this._items[0]||null}get last(){return this._items[this.length-1]||null}add(t,e){let n;const i=this._idProperty;if(i in t){if("string"!=typeof(n=t[i]))throw new Gn.b("collection-add-invalid-id");if(this.get(n))throw new Gn.b("collection-add-item-already-exists")}else t[i]=n=Jn();if(void 0===e)e=this._items.length;else if(e>this._items.length||e<0)throw new Gn.b("collection-add-item-invalid-index");return this._items.splice(e,0,t),this._itemMap.set(n,t),this.fire("add",t,e),this}get(t){let e;if("string"==typeof t)e=this._itemMap.get(t);else{if("number"!=typeof t)throw new Gn.b("collection-get-invalid-arg: Index or id must be given.");e=this._items[t]}return e||null}has(t){if("string"==typeof t)return this._itemMap.has(t);{const e=t[this._idProperty];return this._itemMap.has(e)}}getIndex(t){let e;return e="string"==typeof t?this._itemMap.get(t):t,this._items.indexOf(e)}remove(t){let e,n,i,o=!1;const r=this._idProperty;if("string"==typeof t?(n=t,o=!(i=this._itemMap.get(n)),i&&(e=this._items.indexOf(i))):"number"==typeof t?(e=t,o=!(i=this._items[e]),i&&(n=i[r])):(n=(i=t)[r],o=-1==(e=this._items.indexOf(i))||!this._itemMap.get(n)),o)throw new Gn.b("collection-remove-404: Item not found.");this._items.splice(e,1),this._itemMap.delete(n);const s=this._bindToInternalToExternalMap.get(i);return this._bindToInternalToExternalMap.delete(i),this._bindToExternalToInternalMap.delete(s),this.fire("remove",i,e),i}map(t,e){return this._items.map(t,e)}find(t,e){return this._items.find(t,e)}filter(t,e){return this._items.filter(t,e)}clear(){for(this._bindToCollection&&(this.stopListening(this._bindToCollection),this._bindToCollection=null);this.length;)this.remove(0)}bindTo(t){if(this._bindToCollection)throw new Gn.b("collection-bind-to-rebind: The collection cannot be bound more than once.");return this._bindToCollection=t,{as:t=>{this._setUpBindToBinding(e=>new t(e))},using:t=>{"function"==typeof t?this._setUpBindToBinding(e=>t(e)):this._setUpBindToBinding(e=>e[t])}}}_setUpBindToBinding(t){const e=this._bindToCollection,n=(n,i,o)=>{const r=e._bindToCollection==this,s=e._bindToInternalToExternalMap.get(i);if(r&&s)this._bindToExternalToInternalMap.set(i,s),this._bindToInternalToExternalMap.set(s,i);else{const n=t(i);if(!n)return void this._skippedIndexesFromExternal.push(o);let r=o;for(const t of this._skippedIndexesFromExternal)o>t&&r--;for(const t of e._skippedIndexesFromExternal)r>=t&&r++;this._bindToExternalToInternalMap.set(i,n),this._bindToInternalToExternalMap.set(n,i),this.add(n,r);for(let t=0;t<e._skippedIndexesFromExternal.length;t++)r<=e._skippedIndexesFromExternal[t]&&e._skippedIndexesFromExternal[t]++}};for(const t of e)n(0,t,e.getIndex(t));this.listenTo(e,"add",n),this.listenTo(e,"remove",(t,e,n)=>{const i=this._bindToExternalToInternalMap.get(e);i&&this.remove(i),this._skippedIndexesFromExternal=this._skippedIndexesFromExternal.reduce((t,e)=>(n<e&&t.push(e-1),n>e&&t.push(e),t),[])})}[Symbol.iterator](){return this._items[Symbol.iterator]()}}ci(oo,ei);class ro{constructor(){this.selection=new io,this.roots=new oo({idProperty:"rootName"}),this.set("isReadOnly",!1),this.set("isFocused",!1),this.set("isComposing",!1),this._postFixers=new Set}getRoot(t="main"){return this.roots.get(t)}registerPostFixer(t){this._postFixers.add(t)}destroy(){this.roots.map(t=>t.destroy()),this.stopListening()}_callPostFixers(t){let e=!1;do{for(const n of this._postFixers)if(e=n(t))break}while(e)}}ci(ro,Fi);const so=10;class ao extends _i{constructor(t,e,n){super(t,e,n),this.getFillerOffset=co,this._priority=so,this._id=null,this._clonesGroup=null}get priority(){return this._priority}get id(){return this._id}getElementsWithSameId(){if(null===this.id)throw new Gn.b("attribute-element-get-elements-with-same-id-no-id: Cannot get elements with the same id for an attribute element without id.");return new Set(this._clonesGroup)}is(t,e=null){return e?"attributeElement"==t&&e==this.name||super.is(t,e):"attributeElement"==t||super.is(t)}isSimilar(t){return null!==this.id||null!==t.id?this.id===t.id:super.isSimilar(t)&&this.priority==t.priority}_clone(t){const e=super._clone(t);return e._priority=this._priority,e._id=this._id,e}}function co(){if(lo(this))return null;let t=this.parent;for(;t&&t.is("attributeElement");){if(lo(t)>1)return null;t=t.parent}return!t||lo(t)>1?null:this.childCount}function lo(t){return Array.from(t.getChildren()).filter(t=>!t.is("uiElement")).length}ao.DEFAULT_PRIORITY=so;class uo extends _i{constructor(t,e,n){super(t,e,n),this.getFillerOffset=ho}is(t,e=null){return e?"emptyElement"==t&&e==this.name||super.is(t,e):"emptyElement"==t||super.is(t)}_insertChild(t,e){if(e&&(e instanceof hi||Array.from(e).length>0))throw new Gn.b("view-emptyelement-cannot-add: Cannot add child nodes to EmptyElement instance.")}}function ho(){return null}const fo=navigator.userAgent.toLowerCase();var mo={isMac:function(t){return t.indexOf("macintosh")>-1}(fo),isEdge:function(t){return!!t.match(/edge\/(\d+.?\d*)/)}(fo),isGecko:function(t){return!!t.match(/gecko\/\d+/)}(fo),isSafari:function(t){return t.indexOf(" applewebkit/")>-1&&-1===t.indexOf("chrome")}(fo)};const po={"⌘":"ctrl","⇧":"shift","⌥":"alt"},go={ctrl:"⌘",shift:"⇧",alt:"⌥"},bo=function(){const t={arrowleft:37,arrowup:38,arrowright:39,arrowdown:40,backspace:8,delete:46,enter:13,space:32,esc:27,tab:9,ctrl:1114112,cmd:1114112,shift:2228224,alt:4456448};for(let e=65;e<=90;e++){const n=String.fromCharCode(e);t[n.toLowerCase()]=e}for(let e=48;e<=57;e++)t[e-48]=e;for(let e=112;e<=123;e++)t["f"+(e-111)]=e;return t}();function wo(t){let e;if("string"==typeof t){if(!(e=bo[t.toLowerCase()]))throw new Gn.b("keyboard-unknown-key: Unknown key name.",{key:t})}else e=t.keyCode+(t.altKey?bo.alt:0)+(t.ctrlKey?bo.ctrl:0)+(t.shiftKey?bo.shift:0);return e}function _o(t){return"string"==typeof t&&(t=ko(t)),t.map(t=>"string"==typeof t?wo(t):t).reduce((t,e)=>e+t,0)}function ko(t){return t.split(/\s*\+\s*/)}class vo extends _i{constructor(t,e,n){super(t,e,n),this.getFillerOffset=xo}is(t,e=null){return e?"uiElement"==t&&e==this.name||super.is(t,e):"uiElement"==t||super.is(t)}_insertChild(t,e){if(e&&(e instanceof hi||Array.from(e).length>0))throw new Gn.b("view-uielement-cannot-add: Cannot add child nodes to UIElement instance.")}render(t){return this.toDomElement(t)}toDomElement(t){const e=t.createElement(this.name);for(const t of this.getAttributeKeys())e.setAttribute(t,this.getAttribute(t));return e}}function yo(t){t.document.on("keydown",(e,n)=>(function(t,e,n){if(e.keyCode==bo.arrowright){const t=e.domTarget.ownerDocument.defaultView.getSelection(),i=1==t.rangeCount&&t.getRangeAt(0).collapsed;if(i||e.shiftKey){const e=t.focusNode,o=t.focusOffset,r=n.domPositionToView(e,o);if(null===r)return;let s=!1;const a=r.getLastMatchingPosition(t=>(t.item.is("uiElement")&&(s=!0),!(!t.item.is("uiElement")&&!t.item.is("attributeElement"))));if(s){const e=n.viewPositionToDom(a);i?t.collapse(e.parent,e.offset):t.extend(e.parent,e.offset)}}}})(0,n,t.domConverter))}function xo(){return null}class Ao{constructor(t){this._children=[],t&&this._insertChild(0,t)}[Symbol.iterator](){return this._children[Symbol.iterator]()}get childCount(){return this._children.length}get isEmpty(){return 0===this.childCount}get root(){return this}get parent(){return null}is(t){return"documentFragment"==t}_appendChild(t){return this._insertChild(this.childCount,t)}getChild(t){return this._children[t]}getChildIndex(t){return this._children.indexOf(t)}getChildren(){return this._children[Symbol.iterator]()}_insertChild(t,e){this._fireChange("children",this);let n=0;const i=function(t){if("string"==typeof t)return[new fi(t)];gi(t)||(t=[t]);return Array.from(t).map(t=>"string"==typeof t?new fi(t):t instanceof mi?new fi(t.data):t)}(e);for(const e of i)null!==e.parent&&e._remove(),e.parent=this,this._children.splice(t,0,e),t++,n++;return n}_removeChildren(t,e=1){this._fireChange("children",this);for(let n=t;n<t+e;n++)this._children[n].parent=null;return this._children.splice(t,e)}_fireChange(t,e){this.fire("change:"+t,e)}}ci(Ao,ei);class Co{constructor(t){this.document=t,this._cloneGroups=new Map}setSelection(t,e,n){this.document.selection._setTo(t,e,n)}setSelectionFocus(t,e){this.document.selection._setFocus(t,e)}createText(t){return new fi(t)}createAttributeElement(t,e,n={}){const i=new ao(t,e);return n.priority&&(i._priority=n.priority),n.id&&(i._id=n.id),i}createContainerElement(t,e){return new yi(t,e)}createEditableElement(t,e){const n=new Gi(t,e);return n._document=this.document,n}createEmptyElement(t,e){return new uo(t,e)}createUIElement(t,e,n){const i=new vo(t,e);return n&&(i.render=n),i}setAttribute(t,e,n){n._setAttribute(t,e)}removeAttribute(t,e){e._removeAttribute(t)}addClass(t,e){e._addClass(t)}removeClass(t,e){e._removeClass(t)}setStyle(t,e,n){C(t)&&void 0===n&&(n=e),n._setStyle(t,e)}removeStyle(t,e){e._removeStyle(t)}setCustomProperty(t,e,n){n._setCustomProperty(t,e)}removeCustomProperty(t,e){return e._removeCustomProperty(t)}breakAttributes(t){return t instanceof Zi?this._breakAttributes(t):this._breakAttributesRange(t)}breakContainer(t){const e=t.parent;if(!e.is("containerElement"))throw new Gn.b("view-writer-break-non-container-element: Trying to break an element which is not a container element.");if(!e.parent)throw new Gn.b("view-writer-break-root: Trying to break root element.");if(t.isAtStart)return Zi._createBefore(e);if(!t.isAtEnd){const n=e._clone(!1);this.insert(Zi._createAfter(e),n);const i=new Xi(t,Zi._createAt(e,"end")),o=new Zi(n,0);this.move(i,o)}return Zi._createAfter(e)}mergeAttributes(t){const e=t.offset,n=t.parent;if(n.is("text"))return t;if(n.is("attributeElement")&&0===n.childCount){const t=n.parent,e=n.index;return n._remove(),this._removeFromClonedElementsGroup(n),this.mergeAttributes(new Zi(t,e))}const i=n.getChild(e-1),o=n.getChild(e);if(!i||!o)return t;if(i.is("text")&&o.is("text"))return So(i,o);if(i.is("attributeElement")&&o.is("attributeElement")&&i.isSimilar(o)){const t=i.childCount;return i._appendChild(o.getChildren()),o._remove(),this._removeFromClonedElementsGroup(o),this.mergeAttributes(new Zi(i,t))}return t}mergeContainers(t){const e=t.nodeBefore,n=t.nodeAfter;if(!(e&&n&&e.is("containerElement")&&n.is("containerElement")))throw new Gn.b("view-writer-merge-containers-invalid-position: Element before and after given position cannot be merged.");const i=e.getChild(e.childCount-1),o=i instanceof fi?Zi._createAt(i,"end"):Zi._createAt(e,"end");return this.move(Xi._createIn(n),Zi._createAt(e,"end")),this.remove(Xi._createOn(n)),o}insert(t,e){(function t(e){for(const n of e){if(!Io.some(t=>n instanceof t))throw new Gn.b("view-writer-insert-invalid-node");n.is("text")||t(n.getChildren())}})(e=gi(e)?[...e]:[e]);const n=To(t);if(!n)throw new Gn.b("view-writer-invalid-position-container");const i=this._breakAttributes(t,!0),o=n._insertChild(i.offset,e);for(const t of e)this._addToClonedElementsGroup(t);const r=i.getShiftedBy(o),s=this.mergeAttributes(i);if(0===o)return new Xi(s,s);{s.isEqual(i)||r.offset--;const t=this.mergeAttributes(r);return new Xi(s,t)}}remove(t){const e=t instanceof Xi?t:Xi._createOn(t);if(Oo(e),e.isCollapsed)return new Ao;const{start:n,end:i}=this._breakAttributesRange(e,!0),o=n.parent,r=i.offset-n.offset,s=o._removeChildren(n.offset,r);for(const t of s)this._removeFromClonedElementsGroup(t);const a=this.mergeAttributes(n);return e.start=a,e.end=a.clone(),new Ao(s)}clear(t,e){Oo(t);const n=t.getWalker({direction:"backward",ignoreElementEnd:!0});for(const i of n){const n=i.item;let o;if(n.is("element")&&e.isSimilar(n))o=Xi._createOn(n);else if(!i.nextPosition.isAfter(t.start)&&n.is("textProxy")){const t=n.getAncestors().find(t=>t.is("element")&&e.isSimilar(t));t&&(o=Xi._createIn(t))}o&&(o.end.isAfter(t.end)&&(o.end=t.end),o.start.isBefore(t.start)&&(o.start=t.start),this.remove(o))}}move(t,e){let n;if(e.isAfter(t.end)){const i=(e=this._breakAttributes(e,!0)).parent,o=i.childCount;t=this._breakAttributesRange(t,!0),n=this.remove(t),e.offset+=i.childCount-o}else n=this.remove(t);return this.insert(e,n)}wrap(t,e){if(!(e instanceof ao))throw new Gn.b("view-writer-wrap-invalid-attribute");if(Oo(t),t.isCollapsed){let n=t.start;n.parent.is("element")&&!function(t){return Array.from(t.getChildren()).some(t=>!t.is("uiElement"))}(n.parent)&&(n=n.getLastMatchingPosition(t=>t.item.is("uiElement"))),n=this._wrapPosition(n,e);const i=this.document.selection;return i.isCollapsed&&i.getFirstPosition().isEqual(t.start)&&this.setSelection(n),new Xi(n)}return this._wrapRange(t,e)}unwrap(t,e){if(!(e instanceof ao))throw new Gn.b("view-writer-unwrap-invalid-attribute");if(Oo(t),t.isCollapsed)return t;const{start:n,end:i}=this._breakAttributesRange(t,!0),o=n.parent,r=this._unwrapChildren(o,n.offset,i.offset,e),s=this.mergeAttributes(r.start);s.isEqual(r.start)||r.end.offset--;const a=this.mergeAttributes(r.end);return new Xi(s,a)}rename(t,e){const n=new yi(t,e.getAttributes());return this.insert(Zi._createAfter(e),n),this.move(Xi._createIn(e),Zi._createAt(n,0)),this.remove(Xi._createOn(e)),n}clearClonedElementsGroup(t){this._cloneGroups.delete(t)}createPositionAt(t,e){return Zi._createAt(t,e)}createPositionAfter(t){return Zi._createAfter(t)}createPositionBefore(t){return Zi._createBefore(t)}createRange(t,e){return new Xi(t,e)}createRangeOn(t){return Xi._createOn(t)}createRangeIn(t){return Xi._createIn(t)}createSelection(t,e,n){return new no(t,e,n)}_wrapChildren(t,e,n,i){let o=e;const r=[];for(;o<n;){const e=t.getChild(o),n=e.is("text"),s=e.is("attributeElement"),a=e.is("emptyElement"),c=e.is("uiElement");if(s&&this._wrapAttributeElement(i,e))r.push(new Zi(t,o));else if(n||a||c||s&&Po(i,e)){const n=i._clone();e._remove(),n._appendChild(e),t._insertChild(o,n),this._addToClonedElementsGroup(n),r.push(new Zi(t,o))}else s&&this._wrapChildren(e,0,e.childCount,i);o++}let s=0;for(const t of r){if(t.offset-=s,t.offset==e)continue;this.mergeAttributes(t).isEqual(t)||(s++,n--)}return Xi._createFromParentsAndOffsets(t,e,t,n)}_unwrapChildren(t,e,n,i){let o=e;const r=[];for(;o<n;){const e=t.getChild(o);if(e.is("attributeElement"))if(e.isSimilar(i)){const i=e.getChildren(),s=e.childCount;e._remove(),t._insertChild(o,i),this._removeFromClonedElementsGroup(e),r.push(new Zi(t,o),new Zi(t,o+s)),o+=s,n+=s-1}else this._unwrapAttributeElement(i,e)?(r.push(new Zi(t,o),new Zi(t,o+1)),o++):(this._unwrapChildren(e,0,e.childCount,i),o++);else o++}let s=0;for(const t of r){if(t.offset-=s,t.offset==e||t.offset==n)continue;this.mergeAttributes(t).isEqual(t)||(s++,n--)}return Xi._createFromParentsAndOffsets(t,e,t,n)}_wrapRange(t,e){const{start:n,end:i}=this._breakAttributesRange(t,!0),o=n.parent,r=this._wrapChildren(o,n.offset,i.offset,e),s=this.mergeAttributes(r.start);s.isEqual(r.start)||r.end.offset--;const a=this.mergeAttributes(r.end);return new Xi(s,a)}_wrapPosition(t,e){if(e.isSimilar(t.parent))return Mo(t.clone());t.parent.is("text")&&(t=Eo(t));const n=this.createAttributeElement();n._priority=Number.POSITIVE_INFINITY,n.isSimilar=(()=>!1),t.parent._insertChild(t.offset,n);const i=new Xi(t,t.getShiftedBy(1));this.wrap(i,e);const o=new Zi(n.parent,n.index);n._remove();const r=o.nodeBefore,s=o.nodeAfter;return r instanceof fi&&s instanceof fi?So(r,s):Mo(o)}_wrapAttributeElement(t,e){if(!Ro(t,e))return!1;if(t.name!==e.name||t.priority!==e.priority)return!1;for(const n of t.getAttributeKeys())if("class"!==n&&"style"!==n&&e.hasAttribute(n)&&e.getAttribute(n)!==t.getAttribute(n))return!1;for(const n of t.getStyleNames())if(e.hasStyle(n)&&e.getStyle(n)!==t.getStyle(n))return!1;for(const n of t.getAttributeKeys())"class"!==n&&"style"!==n&&(e.hasAttribute(n)||this.setAttribute(n,t.getAttribute(n),e));for(const n of t.getStyleNames())e.hasStyle(n)||this.setStyle(n,t.getStyle(n),e);for(const n of t.getClassNames())e.hasClass(n)||this.addClass(n,e);return!0}_unwrapAttributeElement(t,e){if(!Ro(t,e))return!1;if(t.name!==e.name||t.priority!==e.priority)return!1;for(const n of t.getAttributeKeys())if("class"!==n&&"style"!==n&&(!e.hasAttribute(n)||e.getAttribute(n)!==t.getAttribute(n)))return!1;if(!e.hasClass(...t.getClassNames()))return!1;for(const n of t.getStyleNames())if(!e.hasStyle(n)||e.getStyle(n)!==t.getStyle(n))return!1;for(const n of t.getAttributeKeys())"class"!==n&&"style"!==n&&this.removeAttribute(n,e);return this.removeClass(Array.from(t.getClassNames()),e),this.removeStyle(Array.from(t.getStyleNames()),e),!0}_breakAttributesRange(t,e=!1){const n=t.start,i=t.end;if(Oo(t),t.isCollapsed){const n=this._breakAttributes(t.start,e);return new Xi(n,n)}const o=this._breakAttributes(i,e),r=o.parent.childCount,s=this._breakAttributes(n,e);return o.offset+=o.parent.childCount-r,new Xi(s,o)}_breakAttributes(t,e=!1){const n=t.offset,i=t.parent;if(t.parent.is("emptyElement"))throw new Gn.b("view-writer-cannot-break-empty-element");if(t.parent.is("uiElement"))throw new Gn.b("view-writer-cannot-break-ui-element");if(!e&&i.is("text")&&No(i.parent))return t.clone();if(No(i))return t.clone();if(i.is("text"))return this._breakAttributes(Eo(t),e);if(n==i.childCount){const t=new Zi(i.parent,i.index+1);return this._breakAttributes(t,e)}if(0===n){const t=new Zi(i.parent,i.index);return this._breakAttributes(t,e)}{const t=i.index+1,o=i._clone();i.parent._insertChild(t,o),this._addToClonedElementsGroup(o);const r=i.childCount-n,s=i._removeChildren(n,r);o._appendChild(s);const a=new Zi(i.parent,t);return this._breakAttributes(a,e)}}_addToClonedElementsGroup(t){if(!t.root.is("rootElement"))return;if(t.is("element"))for(const e of t.getChildren())this._addToClonedElementsGroup(e);const e=t.id;if(!e)return;let n=this._cloneGroups.get(e);n||(n=new Set,this._cloneGroups.set(e,n)),n.add(t),t._clonesGroup=n}_removeFromClonedElementsGroup(t){if(t.is("element"))for(const e of t.getChildren())this._removeFromClonedElementsGroup(e);const e=t.id;if(!e)return;const n=this._cloneGroups.get(e);n&&n.delete(t)}}function To(t){let e=t.parent;for(;!No(e);){if(!e)return;e=e.parent}return e}function Po(t,e){return t.priority<e.priority||!(t.priority>e.priority)&&t.getIdentity()<e.getIdentity()}function Mo(t){const e=t.nodeBefore;if(e&&e.is("text"))return new Zi(e,e.data.length);const n=t.nodeAfter;return n&&n.is("text")?new Zi(n,0):t}function Eo(t){if(t.offset==t.parent.data.length)return new Zi(t.parent.parent,t.parent.index+1);if(0===t.offset)return new Zi(t.parent.parent,t.parent.index);const e=t.parent.data.slice(t.offset);return t.parent._data=t.parent.data.slice(0,t.offset),t.parent.parent._insertChild(t.parent.index+1,new fi(e)),new Zi(t.parent.parent,t.parent.index+1)}function So(t,e){const n=t.data.length;return t._data+=e.data,e._remove(),new Zi(t,n)}const Io=[fi,ao,yi,uo,vo];function No(t){return t&&(t.is("containerElement")||t.is("documentFragment"))}function Oo(t){const e=To(t.start),n=To(t.end);if(!e||!n||e!==n)throw new Gn.b("view-writer-invalid-range-container")}function Ro(t,e){return null===t.id&&null===e.id}function Do(t){return"[object Text]"==Object.prototype.toString.call(t)}const Lo=t=>{const e=t.createElement("br");return e.dataset.ckeFiller=!0,e},jo=t=>t.createTextNode(" "),Vo=7;let Bo="";for(let t=0;t<Vo;t++)Bo+="​";function zo(t){return Do(t)&&t.data.substr(0,Vo)===Bo}function Fo(t){return t.data.length==Vo&&zo(t)}function Uo(t){return zo(t)?t.data.slice(Vo):t.data}const Ho=new WeakMap;function qo(t,e){let n=Ho.get(e);return n||(n=e(window.document),Ho.set(e,n)),t.isEqualNode(n)}function Wo(t,e){if(e.keyCode==bo.arrowleft){const t=e.domTarget.ownerDocument.defaultView.getSelection();if(1==t.rangeCount&&t.getRangeAt(0).collapsed){const e=t.getRangeAt(0).startContainer,n=t.getRangeAt(0).startOffset;zo(e)&&n<=Vo&&t.collapse(e,0)}}}function Yo(t,e,n,i=!1){n=n||function(t,e){return t===e},Array.isArray(t)||(t=Array.from(t)),Array.isArray(e)||(e=Array.from(e));const o=function(t,e,n){const i=$o(t,e,n);if(-1===i)return{firstIndex:-1,lastIndexOld:-1,lastIndexNew:-1};const o=Go(t,i),r=Go(e,i),s=$o(o,r,n),a=t.length-s,c=e.length-s;return{firstIndex:i,lastIndexOld:a,lastIndexNew:c}}(t,e,n);return i?function(t,e){const{firstIndex:n,lastIndexOld:i,lastIndexNew:o}=t;if(-1===n)return Array(e).fill("equal");let r=[];n>0&&(r=r.concat(Array(n).fill("equal")));o-n>0&&(r=r.concat(Array(o-n).fill("insert")));i-n>0&&(r=r.concat(Array(i-n).fill("delete")));o<e&&(r=r.concat(Array(e-o).fill("equal")));return r}(o,e.length):function(t,e){const n=[],{firstIndex:i,lastIndexOld:o,lastIndexNew:r}=e;r-i>0&&n.push({index:i,type:"insert",values:t.slice(i,r)});o-i>0&&n.push({index:i+(r-i),type:"delete",howMany:o-i});return n}(e,o)}function $o(t,e,n){for(let i=0;i<Math.max(t.length,e.length);i++)if(void 0===t[i]||void 0===e[i]||!n(t[i],e[i]))return i;return-1}function Go(t,e){return t.slice(e).reverse()}function Qo(t,e,n){n=n||function(t,e){return t===e};const i=t.length,o=e.length;if(i>200||o>200||i+o>300)return Qo.fastDiff(t,e,n,!0);let r,s;if(o<i){const n=t;t=e,e=n,r="delete",s="insert"}else r="insert",s="delete";const a=t.length,c=e.length,l=c-a,d={},u={};function h(i){const o=(void 0!==u[i-1]?u[i-1]:-1)+1,l=void 0!==u[i+1]?u[i+1]:-1,h=o>l?-1:1;d[i+h]&&(d[i]=d[i+h].slice(0)),d[i]||(d[i]=[]),d[i].push(o>l?r:s);let f=Math.max(o,l),m=f-i;for(;m<a&&f<c&&n(t[m],e[f]);)m++,f++,d[i].push("equal");return f}let f,m=0;do{for(f=-m;f<l;f++)u[f]=h(f);for(f=l+m;f>l;f--)u[f]=h(f);u[l]=h(l),m++}while(u[l]!==c);return d[l].slice(1)}function Ko(t,e,n){t.insertBefore(n,t.childNodes[e]||null)}function Jo(t){const e=t.parentNode;e&&e.removeChild(t)}function Zo(t){if(t){if(t.defaultView)return t instanceof t.defaultView.Document;if(t.ownerDocument&&t.ownerDocument.defaultView)return t instanceof t.ownerDocument.defaultView.Node}return!1}Qo.fastDiff=Yo;class Xo{constructor(t,e){this.domDocuments=new Set,this.domConverter=t,this.markedAttributes=new Set,this.markedChildren=new Set,this.markedTexts=new Set,this.selection=e,this.isFocused=!1,this._inlineFiller=null,this._fakeSelectionContainer=null}markToSync(t,e){if("text"===t)this.domConverter.mapViewToDom(e.parent)&&this.markedTexts.add(e);else{if(!this.domConverter.mapViewToDom(e))return;if("attributes"===t)this.markedAttributes.add(e);else{if("children"!==t)throw new Gn.b("view-renderer-unknown-type: Unknown type passed to Renderer.markToSync.");this.markedChildren.add(e)}}}render(){let t;for(const t of this.markedChildren)this._updateChildrenMappings(t);this._inlineFiller&&!this._isSelectionInInlineFiller()&&this._removeInlineFiller(),this._inlineFiller?t=this._getInlineFillerPosition():this._needsInlineFillerAtSelection()&&(t=this.selection.getFirstPosition(),this.markedChildren.add(t.parent));for(const t of this.markedAttributes)this._updateAttrs(t);for(const e of this.markedChildren)this._updateChildren(e,{inlineFillerPosition:t});for(const e of this.markedTexts)!this.markedChildren.has(e.parent)&&this.domConverter.mapViewToDom(e.parent)&&this._updateText(e,{inlineFillerPosition:t});if(t){const e=this.domConverter.viewPositionToDom(t),n=e.parent.ownerDocument;zo(e.parent)?this._inlineFiller=e.parent:this._inlineFiller=tr(n,e.parent,e.offset)}else this._inlineFiller=null;this._updateSelection(),this._updateFocus(),this.markedTexts.clear(),this.markedAttributes.clear(),this.markedChildren.clear()}_updateChildrenMappings(t){const e=this.domConverter.mapViewToDom(t);if(!e)return;const n=this.domConverter.mapViewToDom(t).childNodes,i=Array.from(this.domConverter.viewChildrenToDom(t,e.ownerDocument,{withChildren:!1})),o=this._diffNodeLists(n,i),r=this._findReplaceActions(o,n,i);if(-1!==r.indexOf("replace")){const e={equal:0,insert:0,delete:0};for(const o of r)if("replace"===o){const o=e.equal+e.insert,r=e.equal+e.delete,s=t.getChild(o);s&&!s.is("uiElement")&&this._updateElementMappings(s,n[r]),Jo(i[o]),e.equal++}else e[o]++}}_updateElementMappings(t,e){this.domConverter.unbindDomElement(e),this.domConverter.bindElements(e,t),this.markedChildren.add(t),this.markedAttributes.add(t)}_getInlineFillerPosition(){const t=this.selection.getFirstPosition();return t.parent.is("text")?Zi._createBefore(this.selection.getFirstPosition().parent):t}_isSelectionInInlineFiller(){if(1!=this.selection.rangeCount||!this.selection.isCollapsed)return!1;const t=this.selection.getFirstPosition(),e=this.domConverter.viewPositionToDom(t);return!!(e&&Do(e.parent)&&zo(e.parent))}_removeInlineFiller(){const t=this._inlineFiller;if(!zo(t))throw new Gn.b("view-renderer-filler-was-lost: The inline filler node was lost.");Fo(t)?t.parentNode.removeChild(t):t.data=t.data.substr(Vo),this._inlineFiller=null}_needsInlineFillerAtSelection(){if(1!=this.selection.rangeCount||!this.selection.isCollapsed)return!1;const t=this.selection.getFirstPosition(),e=t.parent,n=t.offset;if(!this.domConverter.mapViewToDom(e.root))return!1;if(!e.is("element"))return!1;if(!function(t){if("false"==t.getAttribute("contenteditable"))return!1;const e=t.findAncestor(t=>t.hasAttribute("contenteditable"));return!e||"true"==e.getAttribute("contenteditable")}(e))return!1;if(n===e.getFillerOffset())return!1;const i=t.nodeBefore,o=t.nodeAfter;return!(i instanceof fi||o instanceof fi)}_updateText(t,e){const n=this.domConverter.findCorrespondingDomText(t),i=this.domConverter.viewToDom(t,n.ownerDocument),o=n.data;let r=i.data;const s=e.inlineFillerPosition;if(s&&s.parent==t.parent&&s.offset==t.index&&(r=Bo+r),o!=r){const t=Yo(o,r);for(const e of t)"insert"===e.type?n.insertData(e.index,e.values.join("")):n.deleteData(e.index,e.howMany)}}_updateAttrs(t){const e=this.domConverter.mapViewToDom(t);if(!e)return;const n=Array.from(e.attributes).map(t=>t.name),i=t.getAttributeKeys();for(const n of i)e.setAttribute(n,t.getAttribute(n));for(const i of n)t.hasAttribute(i)||e.removeAttribute(i)}_updateChildren(t,e){const n=this.domConverter.mapViewToDom(t);if(!n)return;const i=e.inlineFillerPosition,o=this.domConverter.mapViewToDom(t).childNodes,r=Array.from(this.domConverter.viewChildrenToDom(t,n.ownerDocument,{bind:!0,inlineFillerPosition:i}));i&&i.parent===t&&tr(n.ownerDocument,r,i.offset);const s=this._diffNodeLists(o,r);let a=0;const c=new Set;for(const t of s)"insert"===t?(Ko(n,a,r[a]),a++):"delete"===t?(c.add(o[a]),Jo(o[a])):(this._markDescendantTextToSync(this.domConverter.domToView(r[a])),a++);for(const t of c)t.parentNode||this.domConverter.unbindDomElement(t)}_diffNodeLists(t,e){return Qo(t=function(t,e){const n=Array.from(t);if(0==n.length||!e)return n;n[n.length-1]==e&&n.pop();return n}(t,this._fakeSelectionContainer),e,function(t,e,n){if(e===n)return!0;if(Do(e)&&Do(n))return e.data===n.data;if(qo(e,t)&&qo(n,t))return!0;return!1}.bind(null,this.domConverter.blockFiller))}_findReplaceActions(t,e,n){if(-1===t.indexOf("insert")||-1===t.indexOf("delete"))return t;let i=[],o=[],r=[];const s={equal:0,insert:0,delete:0};for(const a of t)"insert"===a?r.push(n[s.equal+s.insert]):"delete"===a?o.push(e[s.equal+s.delete]):((i=i.concat(Qo(o,r,er).map(t=>"equal"===t?"replace":t))).push("equal"),o=[],r=[]),s[a]++;return i.concat(Qo(o,r,er).map(t=>"equal"===t?"replace":t))}_markDescendantTextToSync(t){if(t)if(t.is("text"))this.markedTexts.add(t);else if(t.is("element"))for(const e of t.getChildren())this._markDescendantTextToSync(e)}_updateSelection(){if(0===this.selection.rangeCount)return this._removeDomSelection(),void this._removeFakeSelection();const t=this.domConverter.mapViewToDom(this.selection.editableElement);this.isFocused&&t&&(this.selection.isFake?this._updateFakeSelection(t):(this._removeFakeSelection(),this._updateDomSelection(t)))}_updateFakeSelection(t){const e=t.ownerDocument;let n=this._fakeSelectionContainer;n||(this._fakeSelectionContainer=n=e.createElement("div"),Object.assign(n.style,{position:"fixed",top:0,left:"-9999px",width:"42px"}),n.textContent=" "),n.parentElement&&n.parentElement==t||t.appendChild(n),n.textContent=this.selection.fakeSelectionLabel||" ";const i=e.getSelection(),o=e.createRange();i.removeAllRanges(),o.selectNodeContents(n),i.addRange(o),this.domConverter.bindFakeSelection(n,this.selection)}_updateDomSelection(t){const e=t.ownerDocument.defaultView.getSelection();if(!this._domSelectionNeedsUpdate(e))return;const n=this.domConverter.viewPositionToDom(this.selection.anchor),i=this.domConverter.viewPositionToDom(this.selection.focus);t.focus(),e.collapse(n.parent,n.offset),e.extend(i.parent,i.offset),mo.isGecko&&function(t,e){const n=t.parent;if(n.nodeType!=Node.ELEMENT_NODE||t.offset!=n.childNodes.length-1)return;const i=n.childNodes[t.offset];i&&"BR"==i.tagName&&e.addRange(e.getRangeAt(0))}(i,e)}_domSelectionNeedsUpdate(t){if(!this.domConverter.isDomSelectionCorrect(t))return!0;const e=t&&this.domConverter.domSelectionToView(t);return(!e||!this.selection.isEqual(e))&&!(!this.selection.isCollapsed&&this.selection.isSimilar(e))}_removeDomSelection(){for(const t of this.domDocuments){if(t.getSelection().rangeCount){const e=t.activeElement,n=this.domConverter.mapDomToView(e);e&&n&&t.getSelection().removeAllRanges()}}}_removeFakeSelection(){const t=this._fakeSelectionContainer;t&&t.remove()}_updateFocus(){if(this.isFocused){const t=this.selection.editableElement;t&&this.domConverter.focus(t)}}}function tr(t,e,n){const i=e instanceof Array?e:e.childNodes,o=i[n];if(Do(o))return o.data=Bo+o.data,o;{const o=t.createTextNode(Bo);return Array.isArray(e)?i.splice(n,0,o):Ko(e,n,o),o}}function er(t,e){return Zo(t)&&Zo(e)&&!Do(t)&&!Do(e)&&t.tagName.toLowerCase()===e.tagName.toLowerCase()}ci(Xo,Fi);var nr={window:window,document:document};function ir(t){let e=0;for(;t.previousSibling;)t=t.previousSibling,e++;return e}function or(t){const e=[];for(;t&&t.nodeType!=Node.DOCUMENT_NODE;)e.unshift(t),t=t.parentNode;return e}class rr{constructor(t={}){this.blockFiller=t.blockFiller||Lo,this.preElements=["pre"],this.blockElements=["p","div","h1","h2","h3","h4","h5","h6"],this._domToViewMapping=new WeakMap,this._viewToDomMapping=new WeakMap,this._fakeSelectionMapping=new WeakMap}bindFakeSelection(t,e){this._fakeSelectionMapping.set(t,new no(e))}fakeSelectionToView(t){return this._fakeSelectionMapping.get(t)}bindElements(t,e){this._domToViewMapping.set(t,e),this._viewToDomMapping.set(e,t)}unbindDomElement(t){const e=this._domToViewMapping.get(t);if(e){this._domToViewMapping.delete(t),this._viewToDomMapping.delete(e);for(const e of Array.from(t.childNodes))this.unbindDomElement(e)}}bindDocumentFragments(t,e){this._domToViewMapping.set(t,e),this._viewToDomMapping.set(e,t)}viewToDom(t,e,n={}){if(t.is("text")){const n=this._processDataFromViewText(t);return e.createTextNode(n)}{if(this.mapViewToDom(t))return this.mapViewToDom(t);let i;if(t.is("documentFragment"))i=e.createDocumentFragment(),n.bind&&this.bindDocumentFragments(i,t);else{if(t.is("uiElement"))return i=t.render(e),n.bind&&this.bindElements(i,t),i;i=e.createElement(t.name),n.bind&&this.bindElements(i,t);for(const e of t.getAttributeKeys())i.setAttribute(e,t.getAttribute(e))}if(n.withChildren||void 0===n.withChildren)for(const o of this.viewChildrenToDom(t,e,n))i.appendChild(o);return i}}*viewChildrenToDom(t,e,n={}){const i=t.getFillerOffset&&t.getFillerOffset();let o=0;for(const r of t.getChildren())i===o&&(yield this.blockFiller(e)),yield this.viewToDom(r,e,n),o++;i===o&&(yield this.blockFiller(e))}viewRangeToDom(t){const e=this.viewPositionToDom(t.start),n=this.viewPositionToDom(t.end),i=document.createRange();return i.setStart(e.parent,e.offset),i.setEnd(n.parent,n.offset),i}viewPositionToDom(t){const e=t.parent;if(e.is("text")){const n=this.findCorrespondingDomText(e);if(!n)return null;let i=t.offset;return zo(n)&&(i+=Vo),{parent:n,offset:i}}{let n,i,o;if(0===t.offset){if(!(n=this.mapViewToDom(e)))return null;o=n.childNodes[0]}else{const e=t.nodeBefore;if(!(i=e.is("text")?this.findCorrespondingDomText(e):this.mapViewToDom(t.nodeBefore)))return null;n=i.parentNode,o=i.nextSibling}if(Do(o)&&zo(o))return{parent:o,offset:Vo};return{parent:n,offset:i?ir(i)+1:0}}}domToView(t,e={}){if(qo(t,this.blockFiller))return null;const n=this.getParentUIElement(t,this._domToViewMapping);if(n)return n;if(Do(t)){if(Fo(t))return null;{const e=this._processDataFromDomText(t);return""===e?null:new fi(e)}}if(this.isComment(t))return null;{if(this.mapDomToView(t))return this.mapDomToView(t);let n;if(this.isDocumentFragment(t))n=new Ao,e.bind&&this.bindDocumentFragments(t,n);else{const i=e.keepOriginalCase?t.tagName:t.tagName.toLowerCase();n=new _i(i),e.bind&&this.bindElements(t,n);const o=t.attributes;for(let t=o.length-1;t>=0;t--)n._setAttribute(o[t].name,o[t].value)}if(e.withChildren||void 0===e.withChildren)for(const i of this.domChildrenToView(t,e))n._appendChild(i);return n}}*domChildrenToView(t,e={}){for(let n=0;n<t.childNodes.length;n++){const i=t.childNodes[n],o=this.domToView(i,e);null!==o&&(yield o)}}domSelectionToView(t){if(1===t.rangeCount){let e=t.getRangeAt(0).startContainer;Do(e)&&(e=e.parentNode);const n=this.fakeSelectionToView(e);if(n)return n}const e=this.isDomSelectionBackward(t),n=[];for(let e=0;e<t.rangeCount;e++){const i=t.getRangeAt(e),o=this.domRangeToView(i);o&&n.push(o)}return new no(n,{backward:e})}domRangeToView(t){const e=this.domPositionToView(t.startContainer,t.startOffset),n=this.domPositionToView(t.endContainer,t.endOffset);return e&&n?new Xi(e,n):null}domPositionToView(t,e){if(qo(t,this.blockFiller))return this.domPositionToView(t.parentNode,ir(t));const n=this.mapDomToView(t);if(n&&n.is("uiElement"))return Zi._createBefore(n);if(Do(t)){if(Fo(t))return this.domPositionToView(t.parentNode,ir(t));const n=this.findCorrespondingViewText(t);let i=e;return n?(zo(t)&&(i=(i-=Vo)<0?0:i),new Zi(n,i)):null}if(0===e){const e=this.mapDomToView(t);if(e)return new Zi(e,0)}else{const n=t.childNodes[e-1],i=Do(n)?this.findCorrespondingViewText(n):this.mapDomToView(n);if(i&&i.parent)return new Zi(i.parent,i.index+1)}return null}mapDomToView(t){return this.getParentUIElement(t)||this._domToViewMapping.get(t)}findCorrespondingViewText(t){if(Fo(t))return null;const e=this.getParentUIElement(t);if(e)return e;const n=t.previousSibling;if(n){if(!this.isElement(n))return null;const t=this.mapDomToView(n);if(t){return t.nextSibling instanceof fi?t.nextSibling:null}}else{const e=this.mapDomToView(t.parentNode);if(e){const t=e.getChild(0);return t instanceof fi?t:null}}return null}mapViewToDom(t){return this._viewToDomMapping.get(t)}findCorrespondingDomText(t){const e=t.previousSibling;return e&&this.mapViewToDom(e)?this.mapViewToDom(e).nextSibling:!e&&t.parent&&this.mapViewToDom(t.parent)?this.mapViewToDom(t.parent).childNodes[0]:null}focus(t){const e=this.mapViewToDom(t);if(e&&e.ownerDocument.activeElement!==e){const{scrollX:t,scrollY:n}=nr.window,i=[];ar(e,t=>{const{scrollLeft:e,scrollTop:n}=t;i.push([e,n])}),e.focus(),ar(e,t=>{const[e,n]=i.shift();t.scrollLeft=e,t.scrollTop=n}),nr.window.scrollTo(t,n)}}isElement(t){return t&&t.nodeType==Node.ELEMENT_NODE}isDocumentFragment(t){return t&&t.nodeType==Node.DOCUMENT_FRAGMENT_NODE}isComment(t){return t&&t.nodeType==Node.COMMENT_NODE}isDomSelectionBackward(t){if(t.isCollapsed)return!1;const e=document.createRange();e.setStart(t.anchorNode,t.anchorOffset),e.setEnd(t.focusNode,t.focusOffset);const n=e.collapsed;return e.detach(),n}getParentUIElement(t){const e=or(t);for(e.pop();e.length;){const t=e.pop(),n=this._domToViewMapping.get(t);if(n&&n.is("uiElement"))return n}return null}isDomSelectionCorrect(t){return this._isDomSelectionPositionCorrect(t.anchorNode,t.anchorOffset)&&this._isDomSelectionPositionCorrect(t.focusNode,t.focusOffset)}_isDomSelectionPositionCorrect(t,e){if(Do(t)&&zo(t)&&e<Vo)return!1;if(this.isElement(t)&&zo(t.childNodes[e]))return!1;const n=this.mapDomToView(t);return!n||!n.is("uiElement")}_processDataFromViewText(t){let e=t.data;if(t.getAncestors().some(t=>this.preElements.includes(t.name)))return e;if(" "==e.charAt(0)){const n=this._getTouchingViewTextNode(t,!1);!(n&&this._nodeEndsWithSpace(n))&&n||(e=" "+e.substr(1))}if(" "==e.charAt(e.length-1)){this._getTouchingViewTextNode(t,!0)||(e=e.substr(0,e.length-1)+" ")}return e.replace(/ {2}/g,"  ")}_nodeEndsWithSpace(t){if(t.getAncestors().some(t=>this.preElements.includes(t.name)))return!1;const e=this._processDataFromViewText(t);return" "==e.charAt(e.length-1)}_processDataFromDomText(t){let e=t.data;if(sr(t,this.preElements))return Uo(t);e=e.replace(/[ \n\t\r]{1,}/g," ");const n=this._getTouchingInlineDomNode(t,!1),i=this._getTouchingInlineDomNode(t,!0),o=this._checkShouldLeftTrimDomText(n),r=this._checkShouldRightTrimDomText(t,i);return o&&(e=e.replace(/^ /,"")),r&&(e=e.replace(/ $/,"")),e=(e=Uo(new Text(e))).replace(/ \u00A0/g,"  "),o&&(e=e.replace(/^\u00A0/," ")),Do(i)&&" "!=i.data.charAt(0)||(e=e.replace(/\u00A0( *)$/," $1")),e}_checkShouldLeftTrimDomText(t){return!t||(!!Wn(t)||/[^\S\u00A0]/.test(t.data.charAt(t.data.length-1)))}_checkShouldRightTrimDomText(t,e){return!e&&!zo(t)}_getTouchingViewTextNode(t,e){const n=new Ji({startPosition:e?Zi._createAfter(t):Zi._createBefore(t),direction:e?"forward":"backward"});for(const t of n){if(t.item.is("containerElement"))return null;if(t.item.is("br"))return null;if(t.item.is("textProxy"))return t.item}return null}_getTouchingInlineDomNode(t,e){if(!t.parentNode)return null;const n=e?"nextNode":"previousNode",i=t.ownerDocument,o=or(t)[0],r=i.createTreeWalker(o,NodeFilter.SHOW_TEXT|NodeFilter.SHOW_ELEMENT,{acceptNode:t=>Do(t)?NodeFilter.FILTER_ACCEPT:"BR"==t.tagName?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP});r.currentNode=t;const s=r[n]();if(null!==s){const e=function(t,e){const n=or(t),i=or(e);let o=0;for(;n[o]==i[o]&&n[o];)o++;return 0===o?null:n[o-1]}(t,s);if(e&&!sr(t,this.blockElements,e)&&!sr(s,this.blockElements,e))return s}return null}}function sr(t,e,n){let i=or(t);return n&&(i=i.slice(i.indexOf(n)+1)),i.some(t=>t.tagName&&e.includes(t.tagName.toLowerCase()))}function ar(t,e){for(;t&&t!=nr.document;)e(t),t=t.parentNode}function cr(t){const e=Object.prototype.toString.apply(t);return"[object Window]"==e||"[object global]"==e}var lr=Li({},ei,{listenTo(t,...e){if(Zo(t)||cr(t)){const n=this._getProxyEmitter(t)||new dr(t);n.attach(...e),t=n}ei.listenTo.call(this,t,...e)},stopListening(t,e,n){if(Zo(t)||cr(t)){const e=this._getProxyEmitter(t);if(!e)return;t=e}ei.stopListening.call(this,t,e,n),t instanceof dr&&t.detach(e)},_getProxyEmitter(t){return function(t,e){return t[Xn]&&t[Xn][e]?t[Xn][e].emitter:null}(this,ur(t))}});class dr{constructor(t){ni(this,ur(t)),this._domNode=t}}function ur(t){return t["data-ck-expando"]||(t["data-ck-expando"]=Jn())}Li(dr.prototype,ei,{attach(t,e,n={}){if(this._domListeners&&this._domListeners[t])return;const i=this._createDomListener(t,!!n.useCapture);this._domNode.addEventListener(t,i,!!n.useCapture),this._domListeners||(this._domListeners={}),this._domListeners[t]=i},detach(t){let e;!this._domListeners[t]||(e=this._events[t])&&e.callbacks.length||this._domListeners[t].removeListener()},_createDomListener(t,e){const n=e=>{this.fire(t,e)};return n.removeListener=(()=>{this._domNode.removeEventListener(t,n,e),delete this._domListeners[t]}),n}});class hr{constructor(t){this.view=t,this.document=t.document,this.isEnabled=!1}enable(){this.isEnabled=!0}disable(){this.isEnabled=!1}destroy(){this.disable(),this.stopListening()}}ci(hr,lr);var fr="__lodash_hash_undefined__";var mr=function(t){return this.__data__.set(t,fr),this};var pr=function(t){return this.__data__.has(t)};function gr(t){var e=-1,n=null==t?0:t.length;for(this.__data__=new Pt;++e<n;)this.add(t[e])}gr.prototype.add=gr.prototype.push=mr,gr.prototype.has=pr;var br=gr;var wr=function(t,e){for(var n=-1,i=null==t?0:t.length;++n<i;)if(e(t[n],n,t))return!0;return!1};var _r=function(t,e){return t.has(e)},kr=1,vr=2;var yr=function(t,e,n,i,o,r){var s=n&kr,a=t.length,c=e.length;if(a!=c&&!(s&&c>a))return!1;var l=r.get(t);if(l&&r.get(e))return l==e;var d=-1,u=!0,h=n&vr?new br:void 0;for(r.set(t,e),r.set(e,t);++d<a;){var f=t[d],m=e[d];if(i)var p=s?i(m,f,d,e,t,r):i(f,m,d,t,e,r);if(void 0!==p){if(p)continue;u=!1;break}if(h){if(!wr(e,function(t,e){if(!_r(h,e)&&(f===t||o(f,t,n,i,r)))return h.push(e)})){u=!1;break}}else if(f!==m&&!o(f,m,n,i,r)){u=!1;break}}return r.delete(t),r.delete(e),u};var xr=function(t){var e=-1,n=Array(t.size);return t.forEach(function(t,i){n[++e]=[i,t]}),n};var Ar=function(t){var e=-1,n=Array(t.size);return t.forEach(function(t){n[++e]=t}),n},Cr=1,Tr=2,Pr="[object Boolean]",Mr="[object Date]",Er="[object Error]",Sr="[object Map]",Ir="[object Number]",Nr="[object RegExp]",Or="[object Set]",Rr="[object String]",Dr="[object Symbol]",Lr="[object ArrayBuffer]",jr="[object DataView]",Vr=o?o.prototype:void 0,Br=Vr?Vr.valueOf:void 0;var zr=function(t,e,n,i,o,r,s){switch(n){case jr:if(t.byteLength!=e.byteLength||t.byteOffset!=e.byteOffset)return!1;t=t.buffer,e=e.buffer;case Lr:return!(t.byteLength!=e.byteLength||!r(new Ye(t),new Ye(e)));case Pr:case Mr:case Ir:return P(+t,+e);case Er:return t.name==e.name&&t.message==e.message;case Nr:case Rr:return t==e+"";case Sr:var a=xr;case Or:var c=i&Cr;if(a||(a=Ar),t.size!=e.size&&!c)return!1;var l=s.get(t);if(l)return l==e;i|=Tr,s.set(t,e);var d=yr(a(t),a(e),i,o,r,s);return s.delete(t),d;case Dr:if(Br)return Br.call(t)==Br.call(e)}return!1},Fr=1,Ur=Object.prototype.hasOwnProperty;var Hr=function(t,e,n,i,o,r){var s=n&Fr,a=Ie(t),c=a.length;if(c!=Ie(e).length&&!s)return!1;for(var l=c;l--;){var d=a[l];if(!(s?d in e:Ur.call(e,d)))return!1}var u=r.get(t);if(u&&r.get(e))return u==e;var h=!0;r.set(t,e),r.set(e,t);for(var f=s;++l<c;){var m=t[d=a[l]],p=e[d];if(i)var g=s?i(p,m,d,e,t,r):i(m,p,d,t,e,r);if(!(void 0===g?m===p||o(m,p,n,i,r):g)){h=!1;break}f||(f="constructor"==d)}if(h&&!f){var b=t.constructor,w=e.constructor;b!=w&&"constructor"in t&&"constructor"in e&&!("function"==typeof b&&b instanceof b&&"function"==typeof w&&w instanceof w)&&(h=!1)}return r.delete(t),r.delete(e),h},qr=1,Wr="[object Arguments]",Yr="[object Array]",$r="[object Object]",Gr=Object.prototype.hasOwnProperty;var Qr=function(t,e,n,i,o,r){var s=Wt(t),a=Wt(e),c=s?Yr:He(t),l=a?Yr:He(e),d=(c=c==Wr?$r:c)==$r,u=(l=l==Wr?$r:l)==$r,h=c==l;if(h&&Object(Yt.a)(t)){if(!Object(Yt.a)(e))return!1;s=!0,d=!1}if(h&&!d)return r||(r=new It),s||ie(t)?yr(t,e,n,i,o,r):zr(t,e,c,n,i,o,r);if(!(n&qr)){var f=d&&Gr.call(t,"__wrapped__"),m=u&&Gr.call(e,"__wrapped__");if(f||m){var p=f?t.value():t,g=m?e.value():e;return r||(r=new It),o(p,g,n,i,r)}}return!!h&&(r||(r=new It),Hr(t,e,n,i,o,r))};var Kr=function t(e,n,i,o,r){return e===n||(null==e||null==n||!w(e)&&!w(n)?e!=e&&n!=n:Qr(e,n,i,o,t,r))};var Jr=function(t,e,n){var i=(n="function"==typeof n?n:void 0)?n(t,e):void 0;return void 0===i?Kr(t,e,void 0,n):!!i};class Zr extends hr{constructor(t){super(t),this._config={childList:!0,characterData:!0,characterDataOldValue:!0,subtree:!0},this.domConverter=t.domConverter,this.renderer=t._renderer,this._domElements=[],this._mutationObserver=new window.MutationObserver(this._onMutations.bind(this))}flush(){this._onMutations(this._mutationObserver.takeRecords())}observe(t){this._domElements.push(t),this.isEnabled&&this._mutationObserver.observe(t,this._config)}enable(){super.enable();for(const t of this._domElements)this._mutationObserver.observe(t,this._config)}disable(){super.disable(),this._mutationObserver.disconnect()}destroy(){super.destroy(),this._mutationObserver.disconnect()}_onMutations(t){if(0===t.length)return;const e=this.domConverter,n=new Map,i=new Set;for(const n of t)if("childList"===n.type){const t=e.mapDomToView(n.target);if(t&&t.is("uiElement"))continue;t&&!this._isBogusBrMutation(n)&&i.add(t)}for(const o of t){const t=e.mapDomToView(o.target);if((!t||!t.is("uiElement"))&&"characterData"===o.type){const t=e.findCorrespondingViewText(o.target);t&&!i.has(t.parent)?n.set(t,{type:"text",oldText:t.data,newText:Uo(o.target),node:t}):!t&&zo(o.target)&&i.add(e.mapDomToView(o.target.parentNode))}}const o=[];for(const t of n.values())this.renderer.markToSync("text",t.node),o.push(t);for(const t of i){const n=e.mapViewToDom(t),i=Array.from(t.getChildren()),r=Array.from(e.domChildrenToView(n,{withChildren:!1}));Jr(i,r,a)||(this.renderer.markToSync("children",t),o.push({type:"children",oldChildren:i,newChildren:r,node:t}))}const r=t[0].target.ownerDocument.getSelection();let s=null;if(r&&r.anchorNode){const t=e.domPositionToView(r.anchorNode,r.anchorOffset),n=e.domPositionToView(r.focusNode,r.focusOffset);t&&n&&(s=new no(t)).setFocus(n)}function a(t,e){if(!Array.isArray(t))return t===e||!(!t.is("text")||!e.is("text"))&&t.data===e.data}this.document.fire("mutations",o,s),this.view.forceRender()}_isBogusBrMutation(t){let e=null;return null===t.nextSibling&&0===t.removedNodes.length&&1==t.addedNodes.length&&(e=this.domConverter.domToView(t.addedNodes[0],{withChildren:!1})),e&&e.is("element","br")}}class Xr{constructor(t,e,n){this.view=t,this.document=t.document,this.domEvent=e,this.domTarget=e.target,Li(this,n)}get target(){return this.view.domConverter.mapDomToView(this.domTarget)}preventDefault(){this.domEvent.preventDefault()}stopPropagation(){this.domEvent.stopPropagation()}}class ts extends hr{constructor(t){super(t),this.useCapture=!1}observe(t){("string"==typeof this.domEventType?[this.domEventType]:this.domEventType).forEach(e=>{this.listenTo(t,e,(t,e)=>{this.isEnabled&&this.onDomEvent(e)},{useCapture:this.useCapture})})}fire(t,e,n){this.isEnabled&&this.document.fire(t,new Xr(this.view,e,n))}}class es extends ts{constructor(t){super(t),this.domEventType=["keydown","keyup"]}onDomEvent(t){this.fire(t.type,t,{keyCode:t.keyCode,altKey:t.altKey,ctrlKey:t.ctrlKey||t.metaKey,shiftKey:t.shiftKey,get keystroke(){return wo(this)}})}}var ns=function(){return i.a.Date.now()},is="[object Symbol]";var os=function(t){return"symbol"==typeof t||w(t)&&p(t)==is},rs=NaN,ss=/^\s+|\s+$/g,as=/^[-+]0x[0-9a-f]+$/i,cs=/^0b[01]+$/i,ls=/^0o[0-7]+$/i,ds=parseInt;var us=function(t){if("number"==typeof t)return t;if(os(t))return rs;if(z(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=z(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(ss,"");var n=cs.test(t);return n||ls.test(t)?ds(t.slice(2),n?2:8):as.test(t)?rs:+t},hs="Expected a function",fs=Math.max,ms=Math.min;var ps=function(t,e,n){var i,o,r,s,a,c,l=0,d=!1,u=!1,h=!0;if("function"!=typeof t)throw new TypeError(hs);function f(e){var n=i,r=o;return i=o=void 0,l=e,s=t.apply(r,n)}function m(t){var n=t-c;return void 0===c||n>=e||n<0||u&&t-l>=r}function p(){var t=ns();if(m(t))return g(t);a=setTimeout(p,function(t){var n=e-(t-c);return u?ms(n,r-(t-l)):n}(t))}function g(t){return a=void 0,h&&i?f(t):(i=o=void 0,s)}function b(){var t=ns(),n=m(t);if(i=arguments,o=this,c=t,n){if(void 0===a)return function(t){return l=t,a=setTimeout(p,e),d?f(t):s}(c);if(u)return a=setTimeout(p,e),f(c)}return void 0===a&&(a=setTimeout(p,e)),s}return e=us(e)||0,z(n)&&(d=!!n.leading,r=(u="maxWait"in n)?fs(us(n.maxWait)||0,e):r,h="trailing"in n?!!n.trailing:h),b.cancel=function(){void 0!==a&&clearTimeout(a),l=0,i=c=o=a=void 0},b.flush=function(){return void 0===a?s:g(ns())},b};class gs extends hr{constructor(t){super(t),this._fireSelectionChangeDoneDebounced=ps(t=>this.document.fire("selectionChangeDone",t),200)}observe(){const t=this.document;t.on("keydown",(e,n)=>{t.selection.isFake&&function(t){return t==bo.arrowright||t==bo.arrowleft||t==bo.arrowup||t==bo.arrowdown}(n.keyCode)&&this.isEnabled&&(n.preventDefault(),this._handleSelectionMove(n.keyCode))},{priority:"lowest"})}destroy(){super.destroy(),this._fireSelectionChangeDoneDebounced.cancel()}_handleSelectionMove(t){const e=this.document.selection,n=new no(e.getRanges(),{backward:e.isBackward,fake:!1});t!=bo.arrowleft&&t!=bo.arrowup||n.setTo(n.getFirstPosition()),t!=bo.arrowright&&t!=bo.arrowdown||n.setTo(n.getLastPosition());const i={oldSelection:e,newSelection:n,domSelection:null};this.document.fire("selectionChange",i),this._fireSelectionChangeDoneDebounced(i)}}var bs=n(2);class ws extends hr{constructor(t){super(t),this.mutationObserver=t.getObserver(Zr),this.selection=this.document.selection,this.domConverter=t.domConverter,this._documents=new WeakSet,this._fireSelectionChangeDoneDebounced=ps(t=>this.document.fire("selectionChangeDone",t),200),this._clearInfiniteLoopInterval=setInterval(()=>this._clearInfiniteLoop(),1e3),this._loopbackCounter=0}observe(t){const e=t.ownerDocument;this._documents.has(e)||(this.listenTo(e,"selectionchange",()=>{this._handleSelectionChange(e)}),this._documents.add(e))}destroy(){super.destroy(),clearInterval(this._clearInfiniteLoopInterval),this._fireSelectionChangeDoneDebounced.cancel()}_handleSelectionChange(t){if(!this.isEnabled||!this.document.isFocused&&!this.document.isReadOnly)return;this.mutationObserver.flush();const e=t.defaultView.getSelection(),n=this.domConverter.domSelectionToView(e);if(!this.selection.isEqual(n)||!this.domConverter.isDomSelectionCorrect(e))if(++this._loopbackCounter>60)bs.a.warn("selectionchange-infinite-loop: Selection change observer detected an infinite rendering loop.");else if(this.selection.isSimilar(n))this.view.forceRender();else{const t={oldSelection:this.selection,newSelection:n,domSelection:e};this.document.fire("selectionChange",t),this._fireSelectionChangeDoneDebounced(t)}}_clearInfiniteLoop(){this._loopbackCounter=0}}class _s extends ts{constructor(t){super(t),this.domEventType=["focus","blur"],this.useCapture=!0;const e=this.document;e.on("focus",()=>{e.isFocused=!0,this._renderTimeoutId=setTimeout(()=>t.forceRender(),50)}),e.on("blur",(n,i)=>{const o=e.selection.editableElement;null!==o&&o!==i.target||(e.isFocused=!1,t.forceRender())})}onDomEvent(t){this.fire(t.type,t)}destroy(){this._renderTimeoutId&&clearTimeout(this._renderTimeoutId),super.destroy()}}class ks extends ts{constructor(t){super(t),this.domEventType=["compositionstart","compositionupdate","compositionend"];const e=this.document;e.on("compositionstart",()=>{e.isComposing=!0}),e.on("compositionend",()=>{e.isComposing=!1})}onDomEvent(t){this.fire(t.type,t)}}function vs(t){return"[object Range]"==Object.prototype.toString.apply(t)}function ys(t){const e=t.ownerDocument.defaultView.getComputedStyle(t);return{top:parseInt(e.borderTopWidth,10),right:parseInt(e.borderRightWidth,10),bottom:parseInt(e.borderBottomWidth,10),left:parseInt(e.borderLeftWidth,10)}}const xs=["top","right","bottom","left","width","height"];class As{constructor(t){const e=vs(t);if(Object.defineProperty(this,"_source",{value:t._source||t,writable:!0,enumerable:!1}),Wn(t)||e){const n=e?t.startContainer:t;n.ownerDocument&&n.ownerDocument.body.contains(n)||bs.a.warn("rect-source-not-in-dom: The source of this rect does not belong to any rendered DOM tree.",{source:t}),Cs(this,e?As.getDomRangeRects(t)[0]:t.getBoundingClientRect())}else if(cr(t)){const{innerWidth:e,innerHeight:n}=t;Cs(this,{top:0,right:e,bottom:n,left:0,width:e,height:n})}else Cs(this,t)}clone(){return new As(this)}moveTo(t,e){return this.top=e,this.right=t+this.width,this.bottom=e+this.height,this.left=t,this}moveBy(t,e){return this.top+=e,this.right+=t,this.left+=t,this.bottom+=e,this}getIntersection(t){const e={top:Math.max(this.top,t.top),right:Math.min(this.right,t.right),bottom:Math.min(this.bottom,t.bottom),left:Math.max(this.left,t.left)};return e.width=e.right-e.left,e.height=e.bottom-e.top,e.width<0||e.height<0?null:new As(e)}getIntersectionArea(t){const e=this.getIntersection(t);return e?e.getArea():0}getArea(){return this.width*this.height}getVisible(){const t=this._source;let e=this.clone();if(!Ts(t)){let n=t.parentNode||t.commonAncestorContainer;for(;n&&!Ts(n);){const t=new As(n),i=e.getIntersection(t);if(!i)return null;i.getArea()<e.getArea()&&(e=i),n=n.parentNode}}return e}isEqual(t){for(const e of xs)if(this[e]!==t[e])return!1;return!0}contains(t){const e=this.getIntersection(t);return!(!e||!e.isEqual(t))}excludeScrollbarsAndBorders(){const t=this._source;let e,n;if(cr(t))e=t.innerWidth-t.document.documentElement.clientWidth,n=t.innerHeight-t.document.documentElement.clientHeight;else{const i=ys(this._source);e=t.offsetWidth-t.clientWidth,n=t.offsetHeight-t.clientHeight,this.moveBy(i.left,i.top)}return this.width-=e,this.right-=e,this.height-=n,this.bottom-=n,this}static getDomRangeRects(t){const e=[],n=Array.from(t.getClientRects());if(n.length)for(const t of n)e.push(new As(t));else{let n=t.startContainer;Do(n)&&(n=n.parentNode);const i=new As(n.getBoundingClientRect());i.right=i.left,i.width=0,e.push(i)}return e}}function Cs(t,e){for(const n of xs)t[n]=e[n]}function Ts(t){return!!Wn(t)&&t===t.ownerDocument.body}function Ps({target:t,viewportOffset:e=0}){const n=Rs(t);let i=n,o=null;for(;i;){let r;Es(r=Ds(i==n?t:o),()=>Ls(t,i));const s=Ls(t,i);if(Ms(i,s,e),i.parent!=i){if(o=i.frameElement,i=i.parent,!o)return}else i=null}}function Ms(t,e,n){const i=e.clone().moveBy(0,n),o=e.clone().moveBy(0,-n),r=new As(t).excludeScrollbarsAndBorders();if(![o,i].every(t=>r.contains(t))){let{scrollX:s,scrollY:a}=t;Is(o,r)?a-=r.top-e.top+n:Ss(i,r)&&(a+=e.bottom-r.bottom+n),Ns(e,r)?s-=r.left-e.left+n:Os(e,r)&&(s+=e.right-r.right+n),t.scrollTo(s,a)}}function Es(t,e){const n=Rs(t);let i,o;for(;t!=n.document.body;)o=e(),(i=new As(t).excludeScrollbarsAndBorders()).contains(o)||(Is(o,i)?t.scrollTop-=i.top-o.top:Ss(o,i)&&(t.scrollTop+=o.bottom-i.bottom),Ns(o,i)?t.scrollLeft-=i.left-o.left:Os(o,i)&&(t.scrollLeft+=o.right-i.right)),t=t.parentNode}function Ss(t,e){return t.bottom>e.bottom}function Is(t,e){return t.top<e.top}function Ns(t,e){return t.left<e.left}function Os(t,e){return t.right>e.right}function Rs(t){return vs(t)?t.startContainer.ownerDocument.defaultView:t.ownerDocument.defaultView}function Ds(t){if(vs(t)){let e=t.commonAncestorContainer;return Do(e)&&(e=e.parentNode),e}return t.parentNode}function Ls(t,e){const n=Rs(t),i=new As(t);if(n===e)return i;{let t=n;for(;t!=e;){const e=t.frameElement,n=new As(e).excludeScrollbarsAndBorders();i.moveBy(n.left,n.top),t=t.parent}}return i}Object.assign({},{scrollViewportToShowTarget:Ps,scrollAncestorsToShowTarget:function(t){Es(Ds(t),()=>new As(t))}});class js{constructor(){this.document=new ro,this.domConverter=new rr,this.domRoots=new Map,this.set("isRenderingInProgress",!1),this._renderer=new Xo(this.domConverter,this.document.selection),this._renderer.bind("isFocused").to(this.document),this._initialDomRootAttributes=new WeakMap,this._observers=new Map,this._ongoingChange=!1,this._postFixersInProgress=!1,this._renderingDisabled=!1,this._hasChangedSinceTheLastRendering=!1,this._writer=new Co(this.document),this.addObserver(Zr),this.addObserver(ws),this.addObserver(_s),this.addObserver(es),this.addObserver(gs),this.addObserver(ks),function(t){t.document.on("keydown",Wo)}(this),yo(this),this.on("render",()=>{this._render(),this.document.fire("layoutChanged"),this._hasChangedSinceTheLastRendering=!1}),this.listenTo(this.document.selection,"change",()=>{this._hasChangedSinceTheLastRendering=!0})}attachDomRoot(t,e="main"){const n=this.document.getRoot(e);n._name=t.tagName.toLowerCase();const i={};for(const{name:e,value:o}of Array.from(t.attributes))i[e]=o,"class"===e?this._writer.addClass(o.split(" "),n):this._writer.setAttribute(e,o,n);this._initialDomRootAttributes.set(t,i);const o=()=>{this._writer.setAttribute("contenteditable",!n.isReadOnly,n),n.isReadOnly?this._writer.addClass("ck-read-only",n):this._writer.removeClass("ck-read-only",n)};o(),this.domRoots.set(e,t),this.domConverter.bindElements(t,n),this._renderer.markToSync("children",n),this._renderer.markToSync("attributes",n),this._renderer.domDocuments.add(t.ownerDocument),n.on("change:children",(t,e)=>this._renderer.markToSync("children",e)),n.on("change:attributes",(t,e)=>this._renderer.markToSync("attributes",e)),n.on("change:text",(t,e)=>this._renderer.markToSync("text",e)),n.on("change:isReadOnly",()=>this.change(o)),n.on("change",()=>{this._hasChangedSinceTheLastRendering=!0});for(const n of this._observers.values())n.observe(t,e)}detachDomRoot(t){const e=this.domRoots.get(t);Array.from(e.attributes).forEach(({name:t})=>e.removeAttribute(t));const n=this._initialDomRootAttributes.get(e);for(const t in n)e.setAttribute(t,n[t]);this.domRoots.delete(t),this.domConverter.unbindDomElement(e)}getDomRoot(t="main"){return this.domRoots.get(t)}addObserver(t){let e=this._observers.get(t);if(e)return e;e=new t(this),this._observers.set(t,e);for(const[t,n]of this.domRoots)e.observe(n,t);return e.enable(),e}getObserver(t){return this._observers.get(t)}disableObservers(){for(const t of this._observers.values())t.disable()}enableObservers(){for(const t of this._observers.values())t.enable()}scrollToTheSelection(){const t=this.document.selection.getFirstRange();t&&Ps({target:this.domConverter.viewRangeToDom(t),viewportOffset:20})}focus(){if(!this.document.isFocused){const t=this.document.selection.editableElement;t?(this.domConverter.focus(t),this.forceRender()):bs.a.warn("view-focus-no-selection: There is no selection in any editable to focus.")}}change(t){if(this.isRenderingInProgress||this._postFixersInProgress)throw new Gn.b("cannot-change-view-tree: Attempting to make changes to the view when it is in an incorrect state: rendering or post-fixers are in progress. This may cause some unexpected behavior and inconsistency between the DOM and the view.");if(this._ongoingChange)return t(this._writer);this._ongoingChange=!0;const e=t(this._writer);return this._ongoingChange=!1,!this._renderingDisabled&&this._hasChangedSinceTheLastRendering&&(this._postFixersInProgress=!0,this.document._callPostFixers(this._writer),this._postFixersInProgress=!1,this.fire("render")),e}forceRender(){this._hasChangedSinceTheLastRendering=!0,this.change(()=>{})}destroy(){for(const t of this._observers.values())t.destroy();this.document.destroy(),this.stopListening()}createPositionAt(t,e){return Zi._createAt(t,e)}createPositionAfter(t){return Zi._createAfter(t)}createPositionBefore(t){return Zi._createBefore(t)}createRange(t,e){return new Xi(t,e)}createRangeOn(t){return Xi._createOn(t)}createRangeIn(t){return Xi._createIn(t)}createSelection(t,e,n){return new no(t,e,n)}_disableRendering(t){this._renderingDisabled=t,0==t&&this.change(()=>{})}_render(){this.isRenderingInProgress=!0,this.disableObservers(),this._renderer.render(),this.enableObservers(),this.isRenderingInProgress=!1}}function Vs(t){return C(t)?pi(t):new Map(t)}ci(js,Fi);class Bs{constructor(t){this.parent=null,this._attrs=Vs(t)}get index(){let t;if(!this.parent)return null;if(null===(t=this.parent.getChildIndex(this)))throw new Gn.b("model-node-not-found-in-parent: The node's parent does not contain this node.");return t}get startOffset(){let t;if(!this.parent)return null;if(null===(t=this.parent.getChildStartOffset(this)))throw new Gn.b("model-node-not-found-in-parent: The node's parent does not contain this node.");return t}get offsetSize(){return 1}get endOffset(){return this.parent?this.startOffset+this.offsetSize:null}get nextSibling(){const t=this.index;return null!==t&&this.parent.getChild(t+1)||null}get previousSibling(){const t=this.index;return null!==t&&this.parent.getChild(t-1)||null}get root(){let t=this;for(;t.parent;)t=t.parent;return t}get document(){return this.root==this?null:this.root.document||null}getPath(){const t=[];let e=this;for(;e.parent;)t.unshift(e.startOffset),e=e.parent;return t}getAncestors(t={includeSelf:!1,parentFirst:!1}){const e=[];let n=t.includeSelf?this:this.parent;for(;n;)e[t.parentFirst?"push":"unshift"](n),n=n.parent;return e}getCommonAncestor(t,e={}){const n=this.getAncestors(e),i=t.getAncestors(e);let o=0;for(;n[o]==i[o]&&n[o];)o++;return 0===o?null:n[o-1]}isBefore(t){if(this==t)return!1;if(this.root!==t.root)return!1;const e=this.getPath(),n=t.getPath(),i=li(e,n);switch(i){case"prefix":return!0;case"extension":return!1;default:return e[i]<n[i]}}isAfter(t){return this!=t&&(this.root===t.root&&!this.isBefore(t))}hasAttribute(t){return this._attrs.has(t)}getAttribute(t){return this._attrs.get(t)}getAttributes(){return this._attrs.entries()}getAttributeKeys(){return this._attrs.keys()}toJSON(){const t={};return this._attrs.size&&(t.attributes=Array.from(this._attrs).reduce((t,e)=>(t[e[0]]=e[1],t),{})),t}_clone(){return new Bs(this._attrs)}_remove(){this.parent._removeChildren(this.index)}_setAttribute(t,e){this._attrs.set(t,e)}_setAttributesTo(t){this._attrs=Vs(t)}_removeAttribute(t){return this._attrs.delete(t)}_clearAttributes(){this._attrs.clear()}is(t){return"node"==t}}class zs extends Bs{constructor(t,e){super(e),this._data=t||""}get offsetSize(){return this.data.length}get data(){return this._data}is(t){return"text"==t||super.is(t)}toJSON(){const t=super.toJSON();return t.data=this.data,t}_clone(){return new zs(this.data,this.getAttributes())}static fromJSON(t){return new zs(t.data,t.attributes)}}class Fs{constructor(t,e,n){if(this.textNode=t,e<0||e>t.offsetSize)throw new Gn.b("model-textproxy-wrong-offsetintext: Given offsetInText value is incorrect.");if(n<0||e+n>t.offsetSize)throw new Gn.b("model-textproxy-wrong-length: Given length value is incorrect.");this.data=t.data.substring(e,e+n),this.offsetInText=e}get startOffset(){return null!==this.textNode.startOffset?this.textNode.startOffset+this.offsetInText:null}get offsetSize(){return this.data.length}get endOffset(){return null!==this.startOffset?this.startOffset+this.offsetSize:null}get isPartial(){return this.offsetSize!==this.textNode.offsetSize}get parent(){return this.textNode.parent}get root(){return this.textNode.root}get document(){return this.textNode.document}is(t){return"textProxy"==t}getPath(){const t=this.textNode.getPath();return t.length>0&&(t[t.length-1]+=this.offsetInText),t}getAncestors(t={includeSelf:!1,parentFirst:!1}){const e=[];let n=t.includeSelf?this:this.parent;for(;n;)e[t.parentFirst?"push":"unshift"](n),n=n.parent;return e}hasAttribute(t){return this.textNode.hasAttribute(t)}getAttribute(t){return this.textNode.getAttribute(t)}getAttributes(){return this.textNode.getAttributes()}getAttributeKeys(){return this.textNode.getAttributeKeys()}}class Us{constructor(t){this._nodes=[],t&&this._insertNodes(0,t)}[Symbol.iterator](){return this._nodes[Symbol.iterator]()}get length(){return this._nodes.length}get maxOffset(){return this._nodes.reduce((t,e)=>t+e.offsetSize,0)}getNode(t){return this._nodes[t]||null}getNodeIndex(t){const e=this._nodes.indexOf(t);return-1==e?null:e}getNodeStartOffset(t){const e=this.getNodeIndex(t);return null===e?null:this._nodes.slice(0,e).reduce((t,e)=>t+e.offsetSize,0)}indexToOffset(t){if(t==this._nodes.length)return this.maxOffset;const e=this._nodes[t];if(!e)throw new Gn.b("model-nodelist-index-out-of-bounds: Given index cannot be found in the node list.");return this.getNodeStartOffset(e)}offsetToIndex(t){let e=0;for(const n of this._nodes){if(t>=e&&t<e+n.offsetSize)return this.getNodeIndex(n);e+=n.offsetSize}if(e!=t)throw new Gn.b("model-nodelist-offset-out-of-bounds: Given offset cannot be found in the node list.",{offset:t,nodeList:this});return this.length}_insertNodes(t,e){for(const t of e)if(!(t instanceof Bs))throw new Gn.b("model-nodelist-insertNodes-not-node: Trying to insert an object which is not a Node instance.");this._nodes.splice(t,0,...e)}_removeNodes(t,e=1){return this._nodes.splice(t,e)}toJSON(){return this._nodes.map(t=>t.toJSON())}}class Hs extends Bs{constructor(t,e,n){super(e),this.name=t,this._children=new Us,n&&this._insertChild(0,n)}get childCount(){return this._children.length}get maxOffset(){return this._children.maxOffset}get isEmpty(){return 0===this.childCount}is(t,e=null){return e?"element"==t&&e==this.name:"element"==t||t==this.name||super.is(t)}getChild(t){return this._children.getNode(t)}getChildren(){return this._children[Symbol.iterator]()}getChildIndex(t){return this._children.getNodeIndex(t)}getChildStartOffset(t){return this._children.getNodeStartOffset(t)}offsetToIndex(t){return this._children.offsetToIndex(t)}getNodeByPath(t){let e=this;for(const n of t)e=e.getChild(e.offsetToIndex(n));return e}toJSON(){const t=super.toJSON();if(t.name=this.name,this._children.length>0){t.children=[];for(const e of this._children)t.children.push(e.toJSON())}return t}_clone(t=!1){const e=t?Array.from(this._children).map(t=>t._clone(!0)):null;return new Hs(this.name,this.getAttributes(),e)}_appendChild(t){this._insertChild(this.childCount,t)}_insertChild(t,e){const n=function(t){if("string"==typeof t)return[new zs(t)];gi(t)||(t=[t]);return Array.from(t).map(t=>"string"==typeof t?new zs(t):t instanceof Fs?new zs(t.data,t.getAttributes()):t)}(e);for(const t of n)null!==t.parent&&t._remove(),t.parent=this;this._children._insertNodes(t,n)}_removeChildren(t,e=1){const n=this._children._removeNodes(t,e);for(const t of n)t.parent=null;return n}static fromJSON(t){let e=null;if(t.children){e=[];for(const n of t.children)n.name?e.push(Hs.fromJSON(n)):e.push(zs.fromJSON(n))}return new Hs(t.name,t.attributes,e)}}class qs{constructor(t={}){if(!t.boundaries&&!t.startPosition)throw new Gn.b("model-tree-walker-no-start-position: Neither boundaries nor starting position have been defined.");const e=t.direction||"forward";if("forward"!=e&&"backward"!=e)throw new Gn.b("model-tree-walker-unknown-direction: Only `backward` and `forward` direction allowed.",{direction:e});this.direction=e,this.boundaries=t.boundaries||null,t.startPosition?this.position=t.startPosition.clone():this.position=$s._createAt(this.boundaries["backward"==this.direction?"end":"start"]),this.position.stickiness="toNone",this.singleCharacters=!!t.singleCharacters,this.shallow=!!t.shallow,this.ignoreElementEnd=!!t.ignoreElementEnd,this._boundaryStartParent=this.boundaries?this.boundaries.start.parent:null,this._boundaryEndParent=this.boundaries?this.boundaries.end.parent:null,this._visitedParent=this.position.parent}[Symbol.iterator](){return this}skip(t){let e,n,i,o;do{i=this.position,o=this._visitedParent,({done:e,value:n}=this.next())}while(!e&&t(n));e||(this.position=i,this._visitedParent=o)}next(){return"forward"==this.direction?this._next():this._previous()}_next(){const t=this.position,e=this.position.clone(),n=this._visitedParent;if(null===n.parent&&e.offset===n.maxOffset)return{done:!0};if(n===this._boundaryEndParent&&e.offset==this.boundaries.end.offset)return{done:!0};const i=e.textNode?e.textNode:e.nodeAfter;if(i instanceof Hs)return this.shallow?e.offset++:(e.path.push(0),this._visitedParent=i),this.position=e,Ws("elementStart",i,t,e,1);if(i instanceof zs){let o;if(this.singleCharacters)o=1;else{let t=i.endOffset;this._boundaryEndParent==n&&this.boundaries.end.offset<t&&(t=this.boundaries.end.offset),o=t-e.offset}const r=e.offset-i.startOffset,s=new Fs(i,r,o);return e.offset+=o,this.position=e,Ws("text",s,t,e,o)}return e.path.pop(),e.offset++,this.position=e,this._visitedParent=n.parent,this.ignoreElementEnd?this._next():Ws("elementEnd",n,t,e)}_previous(){const t=this.position,e=this.position.clone(),n=this._visitedParent;if(null===n.parent&&0===e.offset)return{done:!0};if(n==this._boundaryStartParent&&e.offset==this.boundaries.start.offset)return{done:!0};const i=e.textNode?e.textNode:e.nodeBefore;if(i instanceof Hs)return e.offset--,this.shallow?(this.position=e,Ws("elementStart",i,t,e,1)):(e.path.push(i.maxOffset),this.position=e,this._visitedParent=i,this.ignoreElementEnd?this._previous():Ws("elementEnd",i,t,e));if(i instanceof zs){let o;if(this.singleCharacters)o=1;else{let t=i.startOffset;this._boundaryStartParent==n&&this.boundaries.start.offset>t&&(t=this.boundaries.start.offset),o=e.offset-t}const r=e.offset-i.startOffset,s=new Fs(i,r-o,o);return e.offset-=o,this.position=e,Ws("text",s,t,e,o)}return e.path.pop(),this.position=e,this._visitedParent=n.parent,Ws("elementStart",n,t,e,1)}}function Ws(t,e,n,i,o){return{done:!1,value:{type:t,item:e,previousPosition:n,nextPosition:i,length:o}}}var Ys=function(t){var e=null==t?0:t.length;return e?t[e-1]:void 0};class $s{constructor(t,e,n="toNone"){if(!t.is("element")&&!t.is("documentFragment"))throw new Gn.b("model-position-root-invalid: Position root invalid.");if(!(e instanceof Array)||0===e.length)throw new Gn.b("model-position-path-incorrect: Position path must be an array with at least one item.",{path:e});e=t.getPath().concat(e),t=t.root,this.root=t,this.path=e,this.stickiness=n}get offset(){return Ys(this.path)}set offset(t){this.path[this.path.length-1]=t}get parent(){let t=this.root;for(let e=0;e<this.path.length-1;e++)t=t.getChild(t.offsetToIndex(this.path[e]));return t}get index(){return this.parent.offsetToIndex(this.offset)}get textNode(){const t=this.parent.getChild(this.index);return t instanceof zs&&t.startOffset<this.offset?t:null}get nodeAfter(){return null===this.textNode?this.parent.getChild(this.index):null}get nodeBefore(){return null===this.textNode?this.parent.getChild(this.index-1):null}get isAtStart(){return 0===this.offset}get isAtEnd(){return this.offset==this.parent.maxOffset}compareWith(t){if(this.root!=t.root)return"different";const e=li(this.path,t.path);switch(e){case"same":return"same";case"prefix":return"before";case"extension":return"after";default:return this.path[e]<t.path[e]?"before":"after"}}getLastMatchingPosition(t,e={}){e.startPosition=this;const n=new qs(e);return n.skip(t),n.position}getParentPath(){return this.path.slice(0,-1)}getAncestors(){return this.parent.is("documentFragment")?[this.parent]:this.parent.getAncestors({includeSelf:!0})}getCommonPath(t){if(this.root!=t.root)return[];const e=li(this.path,t.path),n="string"==typeof e?Math.min(this.path.length,t.path.length):e;return this.path.slice(0,n)}getCommonAncestor(t){const e=this.getAncestors(),n=t.getAncestors();let i=0;for(;e[i]==n[i]&&e[i];)i++;return 0===i?null:e[i-1]}getShiftedBy(t){const e=this.clone(),n=e.offset+t;return e.offset=n<0?0:n,e}isAfter(t){return"after"==this.compareWith(t)}isBefore(t){return"before"==this.compareWith(t)}isEqual(t){return"same"==this.compareWith(t)}isTouching(t){let e=null,n=null;switch(this.compareWith(t)){case"same":return!0;case"before":e=$s._createAt(this),n=$s._createAt(t);break;case"after":e=$s._createAt(t),n=$s._createAt(this);break;default:return!1}let i=e.parent;for(;e.path.length+n.path.length;){if(e.isEqual(n))return!0;if(e.path.length>n.path.length){if(e.offset!==i.maxOffset)return!1;e.path=e.path.slice(0,-1),i=i.parent,e.offset++}else{if(0!==n.offset)return!1;n.path=n.path.slice(0,-1)}}}hasSameParentAs(t){if(this.root!==t.root)return!1;return"same"==li(this.getParentPath(),t.getParentPath())}getTransformedByOperation(t){let e;switch(t.type){case"insert":e=this._getTransformedByInsertOperation(t);break;case"move":case"remove":case"reinsert":e=this._getTransformedByMoveOperation(t);break;case"split":e=this._getTransformedBySplitOperation(t);break;case"merge":e=this._getTransformedByMergeOperation(t);break;default:e=$s._createAt(this)}return e}_getTransformedByInsertOperation(t){return this._getTransformedByInsertion(t.position,t.howMany)}_getTransformedByMoveOperation(t){return this._getTransformedByMove(t.sourcePosition,t.targetPosition,t.howMany)}_getTransformedBySplitOperation(t){const e=t.movedRange;return e.containsPosition(this)||e.start.isEqual(this)&&"toNext"==this.stickiness?this._getCombined(t.splitPosition,t.moveTargetPosition):t.graveyardPosition?this._getTransformedByMove(t.graveyardPosition,t.insertionPosition,1):this._getTransformedByInsertion(t.insertionPosition,1)}_getTransformedByMergeOperation(t){const e=t.movedRange;let n;return e.containsPosition(this)||e.start.isEqual(this)?(n=this._getCombined(t.sourcePosition,t.targetPosition),t.sourcePosition.isBefore(t.targetPosition)&&(n=n._getTransformedByDeletion(t.deletionPosition,1))):n=this.isEqual(t.deletionPosition)?$s._createAt(t.deletionPosition):this._getTransformedByMove(t.deletionPosition,t.graveyardPosition,1),n}_getTransformedByDeletion(t,e){const n=$s._createAt(this);if(this.root!=t.root)return n;if("same"==li(t.getParentPath(),this.getParentPath())){if(t.offset<this.offset){if(t.offset+e>this.offset)return null;n.offset-=e}}else if("prefix"==li(t.getParentPath(),this.getParentPath())){const i=t.path.length-1;if(t.offset<=this.path[i]){if(t.offset+e>this.path[i])return null;n.path[i]-=e}}return n}_getTransformedByInsertion(t,e){const n=$s._createAt(this);if(this.root!=t.root)return n;if("same"==li(t.getParentPath(),this.getParentPath()))(t.offset<this.offset||t.offset==this.offset&&"toPrevious"!=this.stickiness)&&(n.offset+=e);else if("prefix"==li(t.getParentPath(),this.getParentPath())){const i=t.path.length-1;t.offset<=this.path[i]&&(n.path[i]+=e)}return n}_getTransformedByMove(t,e,n){if(e=e._getTransformedByDeletion(t,n),t.isEqual(e))return $s._createAt(this);const i=this._getTransformedByDeletion(t,n);return null===i||t.isEqual(this)&&"toNext"==this.stickiness||t.getShiftedBy(n).isEqual(this)&&"toPrevious"==this.stickiness?this._getCombined(t,e):i._getTransformedByInsertion(e,n)}_getCombined(t,e){const n=t.path.length-1,i=$s._createAt(e);return i.stickiness=this.stickiness,i.offset=i.offset+this.path[n]-t.offset,i.path=i.path.concat(this.path.slice(n+1)),i}toJSON(){return{root:this.root.toJSON(),path:Array.from(this.path),stickiness:this.stickiness}}clone(){return new this.constructor(this.root,this.path,this.stickiness)}static _createAt(t,e,n="toNone"){if(t instanceof $s)return new $s(t.root,t.path,t.stickiness);{const i=t;if("end"==e)e=i.maxOffset;else{if("before"==e)return this._createBefore(i,n);if("after"==e)return this._createAfter(i,n);if(0!==e&&!e)throw new Gn.b("model-createPositionAt-offset-required: Model#createPositionAt() requires the offset when the first parameter is a model item.")}if(!i.is("element")&&!i.is("documentFragment"))throw new Gn.b("model-position-parent-incorrect: Position parent have to be a element or document fragment.");const o=i.getPath();return o.push(e),new this(i.root,o,n)}}static _createAfter(t,e){if(!t.parent)throw new Gn.b("model-position-after-root: You cannot make a position after root.",{root:t});return this._createAt(t.parent,t.endOffset,e)}static _createBefore(t,e){if(!t.parent)throw new Gn.b("model-position-before-root: You cannot make a position before root.",{root:t});return this._createAt(t.parent,t.startOffset,e)}static fromJSON(t,e){if("$graveyard"===t.root){const n=new $s(e.graveyard,t.path);return n.stickiness=t.stickiness,n}if(!e.getRoot(t.root))throw new Gn.b("model-position-fromjson-no-root: Cannot create position for document. Root with specified name does not exist.",{rootName:t.root});return new $s(e.getRoot(t.root),t.path,t.stickiness)}}class Gs{constructor(t,e=null){this.start=$s._createAt(t),this.end=e?$s._createAt(e):$s._createAt(t),this.start.stickiness=this.isCollapsed?"toNone":"toNext",this.end.stickiness=this.isCollapsed?"toNone":"toPrevious"}*[Symbol.iterator](){yield*new qs({boundaries:this,ignoreElementEnd:!0})}get isCollapsed(){return this.start.isEqual(this.end)}get isFlat(){return"same"==li(this.start.getParentPath(),this.end.getParentPath())}get root(){return this.start.root}containsPosition(t){return t.isAfter(this.start)&&t.isBefore(this.end)}containsRange(t,e=!1){t.isCollapsed&&(e=!1);const n=this.containsPosition(t.start)||e&&this.start.isEqual(t.start),i=this.containsPosition(t.end)||e&&this.end.isEqual(t.end);return n&&i}containsItem(t){const e=$s._createBefore(t);return this.containsPosition(e)||this.start.isEqual(e)}isEqual(t){return this.start.isEqual(t.start)&&this.end.isEqual(t.end)}isIntersecting(t){return this.start.isBefore(t.end)&&this.end.isAfter(t.start)}getDifference(t){const e=[];return this.isIntersecting(t)?(this.containsPosition(t.start)&&e.push(new Gs(this.start,t.start)),this.containsPosition(t.end)&&e.push(new Gs(t.end,this.end))):e.push(new Gs(this.start,this.end)),e}getIntersection(t){if(this.isIntersecting(t)){let e=this.start,n=this.end;return this.containsPosition(t.start)&&(e=t.start),this.containsPosition(t.end)&&(n=t.end),new Gs(e,n)}return null}getMinimalFlatRanges(){const t=[],e=this.start.getCommonPath(this.end).length,n=$s._createAt(this.start);let i=n.parent;for(;n.path.length>e+1;){const e=i.maxOffset-n.offset;0!==e&&t.push(new Gs(n,n.getShiftedBy(e))),n.path=n.path.slice(0,-1),n.offset++,i=i.parent}for(;n.path.length<=this.end.path.length;){const e=this.end.path[n.path.length-1],i=e-n.offset;0!==i&&t.push(new Gs(n,n.getShiftedBy(i))),n.offset=e,n.path.push(0)}return t}getWalker(t={}){return t.boundaries=this,new qs(t)}*getItems(t={}){t.boundaries=this,t.ignoreElementEnd=!0;const e=new qs(t);for(const t of e)yield t.item}*getPositions(t={}){t.boundaries=this;const e=new qs(t);yield e.position;for(const t of e)yield t.nextPosition}getTransformedByOperation(t){switch(t.type){case"insert":return this._getTransformedByInsertOperation(t);case"move":case"remove":case"reinsert":return this._getTransformedByMoveOperation(t);case"split":return[this._getTransformedBySplitOperation(t)];case"merge":return[this._getTransformedByMergeOperation(t)]}return[new Gs(this.start,this.end)]}getTransformedByOperations(t){const e=[new Gs(this.start,this.end)];for(const n of t)for(let t=0;t<e.length;t++){const i=e[t].getTransformedByOperation(n);e.splice(t,1,...i),t+=i.length-1}for(let t=0;t<e.length;t++){const n=e[t];for(let i=t+1;i<e.length;i++){const t=e[i];(n.containsRange(t)||t.containsRange(n)||n.isEqual(t))&&e.splice(i,1)}}return e}getCommonAncestor(){return this.start.getCommonAncestor(this.end)}toJSON(){return{start:this.start.toJSON(),end:this.end.toJSON()}}clone(){return new this.constructor(this.start,this.end)}_getTransformedByInsertOperation(t,e=!1){return this._getTransformedByInsertion(t.position,t.howMany,e)}_getTransformedByMoveOperation(t,e=!1){const n=t.sourcePosition,i=t.howMany,o=t.targetPosition;return this._getTransformedByMove(n,o,i,e)}_getTransformedBySplitOperation(t){const e=this.start._getTransformedBySplitOperation(t);let n=this.end._getTransformedBySplitOperation(t);return this.end.isEqual(t.insertionPosition)&&(n=this.end.getShiftedBy(1)),e.root!=n.root&&(n=this.end.getShiftedBy(-1)),new Gs(e,n)}_getTransformedByMergeOperation(t){if(this.start.isEqual(t.targetPosition)&&this.end.isEqual(t.deletionPosition))return new Gs(this.start);let e=this.start._getTransformedByMergeOperation(t),n=this.end._getTransformedByMergeOperation(t);return e.root!=n.root&&(n=this.end.getShiftedBy(-1)),e.isAfter(n)?(t.sourcePosition.isBefore(t.targetPosition)?(e=$s._createAt(n)).offset=0:(t.deletionPosition.isEqual(e)||(n=t.deletionPosition),e=t.targetPosition),new Gs(e,n)):new Gs(e,n)}_getTransformedByInsertion(t,e,n=!1){if(n&&this.containsPosition(t))return[new Gs(this.start,t),new Gs(t.getShiftedBy(e),this.end._getTransformedByInsertion(t,e))];{const n=new Gs(this.start,this.end);return n.start=n.start._getTransformedByInsertion(t,e),n.end=n.end._getTransformedByInsertion(t,e),[n]}}_getTransformedByMove(t,e,n,i=!1){if(this.isCollapsed){const i=this.start._getTransformedByMove(t,e,n);return[new Gs(i)]}const o=Gs._createFromPositionAndShift(t,n),r=e._getTransformedByDeletion(t,n);if(this.containsPosition(e)&&!i&&(o.containsPosition(this.start)||o.containsPosition(this.end))){const i=this.start._getTransformedByMove(t,e,n),o=this.end._getTransformedByMove(t,e,n);return[new Gs(i,o)]}let s;const a=this.getDifference(o);let c=null;const l=this.getIntersection(o);if(1==a.length?c=new Gs(a[0].start._getTransformedByDeletion(t,n),a[0].end._getTransformedByDeletion(t,n)):2==a.length&&(c=new Gs(this.start,this.end._getTransformedByDeletion(t,n))),s=c?c._getTransformedByInsertion(r,n,null!==l||i):[],l){const t=new Gs(l.start._getCombined(o.start,r),l.end._getCombined(o.start,r));2==s.length?s.splice(1,0,t):s.push(t)}return s}_getTransformedByDeletion(t,e){let n=this.start._getTransformedByDeletion(t,e),i=this.end._getTransformedByDeletion(t,e);return null==n&&null==i?null:(null==n&&(n=t),null==i&&(i=t),new Gs(n,i))}static _createFromPositionAndShift(t,e){const n=t,i=t.getShiftedBy(e);return e>0?new this(n,i):new this(i,n)}static _createIn(t){return new this($s._createAt(t,0),$s._createAt(t,t.maxOffset))}static _createOn(t){return this._createFromPositionAndShift($s._createBefore(t),t.offsetSize)}static _createFromRanges(t){if(0===t.length)throw new Gn.b("range-create-from-ranges-empty-array: At least one range has to be passed.");if(1==t.length)return t[0].clone();const e=t[0];t.sort((t,e)=>t.start.isAfter(e.start)?1:-1);const n=t.indexOf(e),i=new this(e.start,e.end);if(n>0)for(let e=n-1;t[e].end.isEqual(i.start);e++)i.start=$s._createAt(t[e].start);for(let e=n+1;e<t.length&&t[e].start.isEqual(i.end);e++)i.end=$s._createAt(t[e].end);return i}static fromJSON(t,e){return new this($s.fromJSON(t.start,e),$s.fromJSON(t.end,e))}}class Qs{constructor(){this._modelToViewMapping=new WeakMap,this._viewToModelMapping=new WeakMap,this._viewToModelLengthCallbacks=new Map,this._markerNameToElements=new Map,this.on("modelToViewPosition",(t,e)=>{if(e.viewPosition)return;const n=this._modelToViewMapping.get(e.modelPosition.parent);e.viewPosition=this._findPositionIn(n,e.modelPosition.offset)},{priority:"low"}),this.on("viewToModelPosition",(t,e)=>{if(e.modelPosition)return;const n=this.findMappedViewAncestor(e.viewPosition),i=this._viewToModelMapping.get(n),o=this._toModelOffset(e.viewPosition.parent,e.viewPosition.offset,n);e.modelPosition=$s._createAt(i,o)},{priority:"low"})}bindElements(t,e){this._modelToViewMapping.set(t,e),this._viewToModelMapping.set(e,t)}unbindViewElement(t){const e=this.toModelElement(t);this._viewToModelMapping.delete(t),this._modelToViewMapping.get(e)==t&&this._modelToViewMapping.delete(e)}unbindModelElement(t){const e=this.toViewElement(t);this._modelToViewMapping.delete(t),this._viewToModelMapping.get(e)==t&&this._viewToModelMapping.delete(e)}bindElementToMarker(t,e){const n=this._markerNameToElements.get(e)||new Set;n.add(t),this._markerNameToElements.set(e,n)}unbindElementsFromMarkerName(t){this._markerNameToElements.delete(t)}clearBindings(){this._modelToViewMapping=new WeakMap,this._viewToModelMapping=new WeakMap,this._markerNameToElements=new Map}toModelElement(t){return this._viewToModelMapping.get(t)}toViewElement(t){return this._modelToViewMapping.get(t)}toModelRange(t){return new Gs(this.toModelPosition(t.start),this.toModelPosition(t.end))}toViewRange(t){return new Xi(this.toViewPosition(t.start),this.toViewPosition(t.end))}toModelPosition(t){const e={viewPosition:t,mapper:this};return this.fire("viewToModelPosition",e),e.modelPosition}toViewPosition(t,e={isPhantom:!1}){const n={modelPosition:t,mapper:this,isPhantom:e.isPhantom};return this.fire("modelToViewPosition",n),n.viewPosition}markerNameToElements(t){const e=this._markerNameToElements.get(t);if(!e)return null;const n=new Set;for(const t of e)if(t.is("attributeElement"))for(const e of t.getElementsWithSameId())n.add(e);else n.add(t);return n}registerViewToModelLength(t,e){this._viewToModelLengthCallbacks.set(t,e)}findMappedViewAncestor(t){let e=t.parent;for(;!this._viewToModelMapping.has(e);)e=e.parent;return e}_toModelOffset(t,e,n){if(n!=t){return this._toModelOffset(t.parent,t.index,n)+this._toModelOffset(t,e,t)}if(t.is("text"))return e;let i=0;for(let n=0;n<e;n++)i+=this.getModelLength(t.getChild(n));return i}getModelLength(t){if(this._viewToModelLengthCallbacks.get(t.name)){return this._viewToModelLengthCallbacks.get(t.name)(t)}if(this._viewToModelMapping.has(t))return 1;if(t.is("text"))return t.data.length;if(t.is("uiElement"))return 0;{let e=0;for(const n of t.getChildren())e+=this.getModelLength(n);return e}}_findPositionIn(t,e){let n,i=0,o=0,r=0;if(t.is("text"))return new Zi(t,e);for(;o<e;)n=t.getChild(r),o+=i=this.getModelLength(n),r++;return o==e?this._moveViewPositionToTextNode(new Zi(t,r)):this._findPositionIn(n,e-(o-i))}_moveViewPositionToTextNode(t){const e=t.nodeBefore,n=t.nodeAfter;return e instanceof fi?new Zi(e,e.data.length):n instanceof fi?new Zi(n,0):t}}ci(Qs,ei);class Ks{constructor(){this._consumable=new Map,this._textProxyRegistry=new Map}add(t,e){e=Js(e),t instanceof Fs&&(t=this._getSymbolForTextProxy(t)),this._consumable.has(t)||this._consumable.set(t,new Map),this._consumable.get(t).set(e,!0)}consume(t,e){return e=Js(e),t instanceof Fs&&(t=this._getSymbolForTextProxy(t)),!!this.test(t,e)&&(this._consumable.get(t).set(e,!1),!0)}test(t,e){e=Js(e),t instanceof Fs&&(t=this._getSymbolForTextProxy(t));const n=this._consumable.get(t);if(void 0===n)return null;const i=n.get(e);return void 0===i?null:i}revert(t,e){e=Js(e),t instanceof Fs&&(t=this._getSymbolForTextProxy(t));const n=this.test(t,e);return!1===n?(this._consumable.get(t).set(e,!0),!0):!0!==n&&null}_getSymbolForTextProxy(t){let e=null;const n=this._textProxyRegistry.get(t.startOffset);if(n){const i=n.get(t.endOffset);i&&(e=i.get(t.parent))}return e||(e=this._addSymbolForTextProxy(t.startOffset,t.endOffset,t.parent)),e}_addSymbolForTextProxy(t,e,n){const i=Symbol("textProxySymbol");let o,r;return(o=this._textProxyRegistry.get(t))||(o=new Map,this._textProxyRegistry.set(t,o)),(r=o.get(e))||(r=new Map,o.set(e,r)),r.set(n,i),i}}function Js(t){const e=t.split(":");return e.length>1?e[0]+":"+e[1]:e[0]}class Zs{constructor(t={}){this.conversionApi=Li({dispatcher:this},t)}convertChanges(t,e){for(const n of t.getMarkersToRemove())this.convertMarkerRemove(n.name,n.range,e);for(const n of t.getChanges())"insert"==n.type?this.convertInsert(Gs._createFromPositionAndShift(n.position,n.length),e):"remove"==n.type?this.convertRemove(n.position,n.length,n.name,e):this.convertAttribute(n.range,n.attributeKey,n.attributeOldValue,n.attributeNewValue,e);for(const n of t.getMarkersToAdd())this.convertMarkerAdd(n.name,n.range,e)}convertInsert(t,e){this.conversionApi.writer=e,this.conversionApi.consumable=this._createInsertConsumable(t);for(const e of t){const t=e.item,n={item:t,range:Gs._createFromPositionAndShift(e.previousPosition,e.length)};this._testAndFire("insert",n);for(const e of t.getAttributeKeys())n.attributeKey=e,n.attributeOldValue=null,n.attributeNewValue=t.getAttribute(e),this._testAndFire(`attribute:${e}`,n)}this._clearConversionApi()}convertRemove(t,e,n,i){this.conversionApi.writer=i,this.fire("remove:"+n,{position:t,length:e},this.conversionApi),this._clearConversionApi()}convertAttribute(t,e,n,i,o){this.conversionApi.writer=o,this.conversionApi.consumable=this._createConsumableForRange(t,`attribute:${e}`);for(const o of t){const t={item:o.item,range:Gs._createFromPositionAndShift(o.previousPosition,o.length),attributeKey:e,attributeOldValue:n,attributeNewValue:i};this._testAndFire(`attribute:${e}`,t)}this._clearConversionApi()}convertSelection(t,e,n){const i=Array.from(e.getMarkersAtPosition(t.getFirstPosition()));if(this.conversionApi.writer=n,this.conversionApi.consumable=this._createSelectionConsumable(t,i),this.fire("selection",{selection:t},this.conversionApi),t.isCollapsed){for(const e of i){const n=e.getRange();if(!Xs(t.getFirstPosition(),e,this.conversionApi.mapper))continue;const i={item:t,markerName:e.name,markerRange:n};this.conversionApi.consumable.test(t,"addMarker:"+e.name)&&this.fire("addMarker:"+e.name,i,this.conversionApi)}for(const e of t.getAttributeKeys()){const n={item:t,range:t.getFirstRange(),attributeKey:e,attributeOldValue:null,attributeNewValue:t.getAttribute(e)};this.conversionApi.consumable.test(t,"attribute:"+n.attributeKey)&&this.fire("attribute:"+n.attributeKey+":$text",n,this.conversionApi)}this._clearConversionApi()}}convertMarkerAdd(t,e,n){if(!e.root.document||"$graveyard"==e.root.rootName)return;this.conversionApi.writer=n;const i="addMarker:"+t,o=new Ks;if(o.add(e,i),this.conversionApi.consumable=o,this.fire(i,{markerName:t,markerRange:e},this.conversionApi),o.test(e,i)){this.conversionApi.consumable=this._createConsumableForRange(e,i);for(const n of e.getItems()){if(!this.conversionApi.consumable.test(n,i))continue;const o={item:n,range:Gs._createOn(n),markerName:t,markerRange:e};this.fire(i,o,this.conversionApi)}this._clearConversionApi()}}convertMarkerRemove(t,e,n){e.root.document&&"$graveyard"!=e.root.rootName&&(this.conversionApi.writer=n,this.fire("removeMarker:"+t,{markerName:t,markerRange:e},this.conversionApi),this._clearConversionApi())}_createInsertConsumable(t){const e=new Ks;for(const n of t){const t=n.item;e.add(t,"insert");for(const n of t.getAttributeKeys())e.add(t,"attribute:"+n)}return e}_createConsumableForRange(t,e){const n=new Ks;for(const i of t.getItems())n.add(i,e);return n}_createSelectionConsumable(t,e){const n=new Ks;n.add(t,"selection");for(const i of e)n.add(t,"addMarker:"+i.name);for(const e of t.getAttributeKeys())n.add(t,"attribute:"+e);return n}_testAndFire(t,e){if(!this.conversionApi.consumable.test(e.item,t))return;const n=e.item.name||"$text";this.fire(t+":"+n,e,this.conversionApi)}_clearConversionApi(){delete this.conversionApi.writer,delete this.conversionApi.consumable}}function Xs(t,e,n){const i=e.getRange(),o=Array.from(t.getAncestors());return o.shift(),o.reverse(),!o.some(t=>{if(i.containsItem(t)){return!!n.toViewElement(t).getCustomProperty("addHighlight")}})}ci(Zs,ei);class ta{constructor(t,e,n){this._lastRangeBackward=!1,this._ranges=[],this._attrs=new Map,t&&this.setTo(t,e,n)}get anchor(){if(this._ranges.length>0){const t=this._ranges[this._ranges.length-1];return this._lastRangeBackward?t.end:t.start}return null}get focus(){if(this._ranges.length>0){const t=this._ranges[this._ranges.length-1];return this._lastRangeBackward?t.start:t.end}return null}get isCollapsed(){return 1===this._ranges.length&&this._ranges[0].isCollapsed}get rangeCount(){return this._ranges.length}get isBackward(){return!this.isCollapsed&&this._lastRangeBackward}isEqual(t){if(this.rangeCount!=t.rangeCount)return!1;if(0===this.rangeCount)return!0;if(!this.anchor.isEqual(t.anchor)||!this.focus.isEqual(t.focus))return!1;for(const e of this._ranges){let n=!1;for(const i of t._ranges)if(e.isEqual(i)){n=!0;break}if(!n)return!1}return!0}*getRanges(){for(const t of this._ranges)yield new Gs(t.start,t.end)}getFirstRange(){let t=null;for(const e of this._ranges)t&&!e.start.isBefore(t.start)||(t=e);return t?new Gs(t.start,t.end):null}getLastRange(){let t=null;for(const e of this._ranges)t&&!e.end.isAfter(t.end)||(t=e);return t?new Gs(t.start,t.end):null}getFirstPosition(){const t=this.getFirstRange();return t?t.start.clone():null}getLastPosition(){const t=this.getLastRange();return t?t.end.clone():null}setTo(t,e,n){if(null===t)this._setRanges([]);else if(t instanceof ta)this._setRanges(t.getRanges(),t.isBackward);else if(t&&"function"==typeof t.getRanges)this._setRanges(t.getRanges(),t.isBackward);else if(t instanceof Gs)this._setRanges([t],!!e&&!!e.backward);else if(t instanceof $s)this._setRanges([new Gs(t)]);else if(t instanceof Bs){const i=!!n&&!!n.backward;let o;if("in"==e)o=Gs._createIn(t);else if("on"==e)o=Gs._createOn(t);else{if(void 0===e)throw new Gn.b("model-selection-setTo-required-second-parameter: selection.setTo requires the second parameter when the first parameter is a node.");o=new Gs($s._createAt(t,e))}this._setRanges([o],i)}else{if(!gi(t))throw new Gn.b("model-selection-setTo-not-selectable: Cannot set the selection to the given place.");this._setRanges(t,e&&!!e.backward)}}_setRanges(t,e=!1){const n=(t=Array.from(t)).some(t=>{if(!(t instanceof Gs))throw new Gn.b("model-selection-set-ranges-not-range: Selection range set to an object that is not an instance of model.Range.");return this._ranges.every(e=>!e.isEqual(t))});if(t.length!==this._ranges.length||n){this._removeAllRanges();for(const e of t)this._pushRange(e);this._lastRangeBackward=!!e,this.fire("change:range",{directChange:!0})}}setFocus(t,e){if(null===this.anchor)throw new Gn.b("model-selection-setFocus-no-ranges: Cannot set selection focus if there are no ranges in selection.");const n=$s._createAt(t,e);if("same"==n.compareWith(this.focus))return;const i=this.anchor;this._ranges.length&&this._popRange(),"before"==n.compareWith(i)?(this._pushRange(new Gs(n,i)),this._lastRangeBackward=!0):(this._pushRange(new Gs(i,n)),this._lastRangeBackward=!1),this.fire("change:range",{directChange:!0})}getAttribute(t){return this._attrs.get(t)}getAttributes(){return this._attrs.entries()}getAttributeKeys(){return this._attrs.keys()}hasAttribute(t){return this._attrs.has(t)}removeAttribute(t){this.hasAttribute(t)&&(this._attrs.delete(t),this.fire("change:attribute",{attributeKeys:[t],directChange:!0}))}setAttribute(t,e){this.getAttribute(t)!==e&&(this._attrs.set(t,e),this.fire("change:attribute",{attributeKeys:[t],directChange:!0}))}getSelectedElement(){if(1!==this.rangeCount)return null;const t=this.getFirstRange(),e=t.start.nodeAfter,n=t.end.nodeBefore;return e instanceof Hs&&e==n?e:null}is(t){return"selection"==t}*getSelectedBlocks(){const t=new WeakSet;for(const e of this.getRanges()){const n=na(e.start,t);n&&(yield n);for(const n of e.getWalker())"elementEnd"==n.type&&ea(n.item,t)&&(yield n.item);const i=na(e.end,t);i&&!e.end.isTouching($s._createAt(i,0))&&(yield i)}}*getTopMostBlocks(){const t=Array.from(this.getSelectedBlocks());for(const e of t){const n=ia(e);n&&t.includes(n)||(yield e)}}containsEntireContent(t=this.anchor.root){const e=$s._createAt(t,0),n=$s._createAt(t,"end");return e.isTouching(this.getFirstPosition())&&n.isTouching(this.getLastPosition())}_pushRange(t){this._checkRange(t),this._ranges.push(new Gs(t.start,t.end))}_checkRange(t){for(let e=0;e<this._ranges.length;e++)if(t.isIntersecting(this._ranges[e]))throw new Gn.b("model-selection-range-intersects: Trying to add a range that intersects with another range in the selection.",{addedRange:t,intersectingRange:this._ranges[e]})}_removeAllRanges(){for(;this._ranges.length>0;)this._popRange()}_popRange(){this._ranges.pop()}}function ea(t,e){return!e.has(t)&&(e.add(t),t.document.model.schema.isBlock(t)&&t.parent)}function na(t,e){const n=t.parent.document.model.schema,i=t.parent.getAncestors({parentFirst:!0,includeSelf:!0});let o=!1;const r=i.find(t=>!o&&(!(o=n.isLimit(t))&&ea(t,e)));return i.forEach(t=>e.add(t)),r}function ia(t){const e=t.document.model.schema;let n=t.parent;for(;n;){if(e.isBlock(n))return n;n=n.parent}}ci(ta,ei);class oa extends Gs{constructor(t,e){super(t,e),function(){this.listenTo(this.root.document.model,"applyOperation",(t,e)=>{const n=e[0];n.isDocumentOperation&&function(t){const e=this.getTransformedByOperation(t),n=Gs._createFromRanges(e),i=!n.isEqual(this),o=function(t,e){switch(e.type){case"insert":return t.containsPosition(e.position);case"move":case"remove":case"reinsert":case"merge":return t.containsPosition(e.sourcePosition)||t.start.isEqual(e.sourcePosition)||t.containsPosition(e.targetPosition);case"split":return t.containsPosition(e.splitPosition)||t.containsPosition(e.insertionPosition)}return!1}(this,t);let r=null;if(i){"$graveyard"==n.root.rootName&&(r="remove"==t.type?t.sourcePosition:t.deletionPosition);const e=this.toRange();this.start=n.start,this.end=n.end,this.fire("change:range",e,{deletionPosition:r})}else o&&this.fire("change:content",this.toRange(),{deletionPosition:r})}.call(this,n)},{priority:"low"})}.call(this)}detach(){this.stopListening()}toRange(){return new Gs(this.start,this.end)}static fromRange(t){return new oa(t.start,t.end)}}ci(oa,ei);const ra="selection:";class sa{constructor(t){this._selection=new aa(t),this._selection.delegate("change:range").to(this),this._selection.delegate("change:attribute").to(this)}get isCollapsed(){return this._selection.isCollapsed}get anchor(){return this._selection.anchor}get focus(){return this._selection.focus}get rangeCount(){return this._selection.rangeCount}get hasOwnRange(){return this._selection.hasOwnRange}get isBackward(){return this._selection.isBackward}get isGravityOverridden(){return this._selection.isGravityOverridden}get markers(){return this._selection.markers}get _ranges(){return this._selection._ranges}getRanges(){return this._selection.getRanges()}getFirstPosition(){return this._selection.getFirstPosition()}getLastPosition(){return this._selection.getLastPosition()}getFirstRange(){return this._selection.getFirstRange()}getLastRange(){return this._selection.getLastRange()}getSelectedBlocks(){return this._selection.getSelectedBlocks()}getTopMostBlocks(){return this._selection.getTopMostBlocks()}getSelectedElement(){return this._selection.getSelectedElement()}containsEntireContent(t){return this._selection.containsEntireContent(t)}destroy(){this._selection.destroy()}getAttributeKeys(){return this._selection.getAttributeKeys()}getAttributes(){return this._selection.getAttributes()}getAttribute(t){return this._selection.getAttribute(t)}hasAttribute(t){return this._selection.hasAttribute(t)}is(t){return"selection"==t||"documentSelection"==t}_setFocus(t,e){this._selection.setFocus(t,e)}_setTo(t,e,n){this._selection.setTo(t,e,n)}_setAttribute(t,e){this._selection.setAttribute(t,e)}_removeAttribute(t){this._selection.removeAttribute(t)}_getStoredAttributes(){return this._selection._getStoredAttributes()}_overrideGravity(){return this._selection.overrideGravity()}_restoreGravity(t){this._selection.restoreGravity(t)}static _getStoreAttributeKey(t){return ra+t}static _isStoreAttributeKey(t){return t.startsWith(ra)}}ci(sa,ei);class aa extends ta{constructor(t){super(),this.markers=new oo({idProperty:"name"}),this._model=t.model,this._document=t,this._attributePriority=new Map,this._fixGraveyardRangesData=[],this._hasChangedRange=!1,this._overriddenGravityRegister=new Set,this.on("change:range",()=>{for(const t of this.getRanges())if(!this._document._validateSelectionRange(t))throw new Gn.b("document-selection-wrong-position: Range from document selection starts or ends at incorrect position.",{range:t});this._updateMarkers(),this._updateAttributes(!1)}),this.listenTo(this._model.markers,"update",()=>this._updateMarkers()),this.listenTo(this._model,"applyOperation",(t,e)=>{const n=e[0];if(n.isDocumentOperation&&"marker"!=n.type&&"rename"!=n.type&&"noop"!=n.type){for(;this._fixGraveyardRangesData.length;){const{liveRange:t,sourcePosition:e}=this._fixGraveyardRangesData.shift();this._fixGraveyardSelection(t,e)}this._hasChangedRange&&(this._hasChangedRange=!1,this.fire("change:range",{directChange:!1})),this._updateMarkers(),this._updateAttributes(!1)}},{priority:"lowest"}),this.listenTo(this._document,"change",(t,e)=>{!function(t,e){const n=t.document.differ;for(const i of n.getChanges()){if("insert"!=i.type)continue;const n=i.position.parent,o=i.length===n.maxOffset;o&&t.enqueueChange(e,t=>{const e=Array.from(n.getAttributeKeys()).filter(t=>t.startsWith(ra));for(const i of e)t.removeAttribute(i,n)})}}(this._model,e)})}get isCollapsed(){return 0===this._ranges.length?this._document._getDefaultRange().isCollapsed:super.isCollapsed}get anchor(){return super.anchor||this._document._getDefaultRange().start}get focus(){return super.focus||this._document._getDefaultRange().end}get rangeCount(){return this._ranges.length?this._ranges.length:1}get hasOwnRange(){return this._ranges.length>0}get isGravityOverridden(){return!!this._overriddenGravityRegister.size}destroy(){for(let t=0;t<this._ranges.length;t++)this._ranges[t].detach();this.stopListening()}*getRanges(){this._ranges.length?yield*super.getRanges():yield this._document._getDefaultRange()}getFirstRange(){return super.getFirstRange()||this._document._getDefaultRange()}getLastRange(){return super.getLastRange()||this._document._getDefaultRange()}setTo(t,e,n){super.setTo(t,e,n),this._refreshAttributes()}setFocus(t,e){super.setFocus(t,e),this._refreshAttributes()}setAttribute(t,e){if(this._setAttribute(t,e)){const e=[t];this.fire("change:attribute",{attributeKeys:e,directChange:!0})}}removeAttribute(t){if(this._removeAttribute(t)){const e=[t];this.fire("change:attribute",{attributeKeys:e,directChange:!0})}}overrideGravity(){const t=Jn();return this._overriddenGravityRegister.add(t),1===this._overriddenGravityRegister.size&&this._refreshAttributes(),t}restoreGravity(t){if(!this._overriddenGravityRegister.has(t))throw new Gn.b("document-selection-gravity-wrong-restore: Attempting to restore the selection gravity for an unknown UID.",{uid:t});this._overriddenGravityRegister.delete(t),this.isGravityOverridden||this._refreshAttributes()}_refreshAttributes(){this._updateAttributes(!0)}_popRange(){this._ranges.pop().detach()}_pushRange(t){const e=this._prepareRange(t);e&&this._ranges.push(e)}_prepareRange(t){if(this._checkRange(t),t.root==this._document.graveyard)return void bs.a.warn("model-selection-range-in-graveyard: Trying to add a Range that is in the graveyard root. Range rejected.");const e=oa.fromRange(t);return e.on("change:range",(t,n,i)=>{this._hasChangedRange=!0,e.root==this._document.graveyard&&this._fixGraveyardRangesData.push({liveRange:e,sourcePosition:i.deletionPosition})}),e}_updateMarkers(){const t=[];for(const e of this._model.markers){const n=e.getRange();for(const i of this.getRanges())n.containsRange(i,!i.isCollapsed)&&t.push(e)}for(const e of t)this.markers.has(e)||this.markers.add(e);for(const e of Array.from(this.markers))t.includes(e)||this.markers.remove(e)}_updateAttributes(t){const e=Vs(this._getSurroundingAttributes()),n=Vs(this.getAttributes());if(t)this._attributePriority=new Map,this._attrs=new Map;else for(const[t,e]of this._attributePriority)"low"==e&&(this._attrs.delete(t),this._attributePriority.delete(t));this._setAttributesTo(e);const i=[];for(const[t,e]of this.getAttributes())n.has(t)&&n.get(t)===e||i.push(t);for(const[t]of n)this.hasAttribute(t)||i.push(t);i.length>0&&this.fire("change:attribute",{attributeKeys:i,directChange:!1})}_setAttribute(t,e,n=!0){const i=n?"normal":"low";return("low"!=i||"normal"!=this._attributePriority.get(t))&&(super.getAttribute(t)!==e&&(this._attrs.set(t,e),this._attributePriority.set(t,i),!0))}_removeAttribute(t,e=!0){const n=e?"normal":"low";return("low"!=n||"normal"!=this._attributePriority.get(t))&&(this._attributePriority.set(t,n),!!super.hasAttribute(t)&&(this._attrs.delete(t),!0))}_setAttributesTo(t){const e=new Set;for(const[e,n]of this.getAttributes())t.get(e)!==n&&this._removeAttribute(e,!1);for(const[n,i]of t){this._setAttribute(n,i,!1)&&e.add(n)}return e}*_getStoredAttributes(){const t=this.getFirstPosition().parent;if(this.isCollapsed&&t.isEmpty)for(const e of t.getAttributeKeys())if(e.startsWith(ra)){yield[e.substr(ra.length),t.getAttribute(e)]}}_getSurroundingAttributes(){const t=this.getFirstPosition(),e=this._model.schema;let n=null;if(this.isCollapsed){const e=t.textNode?t.textNode:t.nodeBefore,i=t.textNode?t.textNode:t.nodeAfter;if(this.isGravityOverridden||(n=ca(e)),n||(n=ca(i)),!this.isGravityOverridden&&!n){let t=e;for(;t&&!n;)n=ca(t=t.previousSibling)}if(!n){let t=i;for(;t&&!n;)n=ca(t=t.nextSibling)}n||(n=this._getStoredAttributes())}else{const t=this.getFirstRange();for(const i of t){if(i.item.is("element")&&e.isObject(i.item))break;if("text"==i.type){n=i.item.getAttributes();break}}}return n}_fixGraveyardSelection(t,e){const n=e.clone(),i=this._model.schema.getNearestSelectionRange(n),o=this._ranges.indexOf(t);if(this._ranges.splice(o,1),t.detach(),i){const t=this._prepareRange(i);this._ranges.splice(o,0,t)}}}function ca(t){return t instanceof Fs||t instanceof zs?t.getAttributes():null}class la{constructor(t){this._dispatchers=t}add(t){for(const e of this._dispatchers)t(e);return this}}var da=1,ua=4;var ha=function(t){return Fn(t,da|ua)};class fa extends la{elementToElement(t){return this.add(function(t){return(t=ha(t)).view=pa(t.view,"container"),e=>{e.on("insert:"+t.model,function(t){return(e,n,i)=>{const o=t(n.item,i.writer);if(!o)return;if(!i.consumable.consume(n.item,"insert"))return;const r=i.mapper.toViewPosition(n.range.start);i.mapper.bindElements(n.item,o),i.writer.insert(r,o)}}(t.view),{priority:t.converterPriority||"normal"})}}(t))}attributeToElement(t){return this.add(function(t){let e="attribute:"+((t=ha(t)).model.key?t.model.key:t.model);t.model.name&&(e+=":"+t.model.name);if(t.model.values)for(const e of t.model.values)t.view[e]=pa(t.view[e],"attribute");else t.view=pa(t.view,"attribute");const n=ga(t);return i=>{i.on(e,function(t){return(e,n,i)=>{const o=t(n.attributeOldValue,i.writer),r=t(n.attributeNewValue,i.writer);if(!o&&!r)return;if(!i.consumable.consume(n.item,e.name))return;const s=i.writer,a=s.document.selection;if(n.item instanceof ta||n.item instanceof sa)s.wrap(a.getFirstRange(),r);else{let t=i.mapper.toViewRange(n.range);null!==n.attributeOldValue&&o&&(t=s.unwrap(t,o)),null!==n.attributeNewValue&&r&&s.wrap(t,r)}}}(n),{priority:t.converterPriority||"normal"})}}(t))}attributeToAttribute(t){return this.add(function(t){let e="attribute:"+((t=ha(t)).model.key?t.model.key:t.model);t.model.name&&(e+=":"+t.model.name);if(t.model.values)for(const e of t.model.values)t.view[e]=ba(t.view[e]);else t.view=ba(t.view);const n=ga(t);return i=>{i.on(e,function(t){return(e,n,i)=>{const o=t(n.attributeOldValue,n),r=t(n.attributeNewValue,n);if(!o&&!r)return;if(!i.consumable.consume(n.item,e.name))return;const s=i.mapper.toViewElement(n.item),a=i.writer;if(s){if(null!==n.attributeOldValue&&o)if("class"==o.key){const t=Array.isArray(o.value)?o.value:[o.value];for(const e of t)a.removeClass(e,s)}else if("style"==o.key){const t=Object.keys(o.value);for(const e of t)a.removeStyle(e,s)}else a.removeAttribute(o.key,s);if(null!==n.attributeNewValue&&r)if("class"==r.key){const t=Array.isArray(r.value)?r.value:[r.value];for(const e of t)a.addClass(e,s)}else if("style"==r.key){const t=Object.keys(r.value);for(const e of t)a.setStyle(e,r.value[e],s)}else a.setAttribute(r.key,r.value,s)}else bs.a.warn("conversion-attribute-to-attribute-on-text: Trying to convert text node's attribute with attribute-to-attribute converter.")}}(n),{priority:t.converterPriority||"normal"})}}(t))}markerToElement(t){return this.add(function(t){return(t=ha(t)).view=pa(t.view,"ui"),e=>{e.on("addMarker:"+t.model,function(t){return(e,n,i)=>{n.isOpening=!0;const o=t(n,i.writer);n.isOpening=!1;const r=t(n,i.writer);if(!o||!r)return;const s=n.markerRange;if(s.isCollapsed&&!i.consumable.consume(s,e.name))return;for(const t of s)if(!i.consumable.consume(t.item,e.name))return;const a=i.mapper,c=i.writer;c.insert(a.toViewPosition(s.start),o),i.mapper.bindElementToMarker(o,n.markerName),s.isCollapsed||(c.insert(a.toViewPosition(s.end),r),i.mapper.bindElementToMarker(r,n.markerName)),e.stop()}}(t.view),{priority:t.converterPriority||"normal"}),e.on("removeMarker:"+t.model,(t.view,(t,e,n)=>{const i=n.mapper.markerNameToElements(e.markerName);if(i){n.mapper.unbindElementsFromMarkerName(e.markerName);for(const t of i)n.writer.clear(n.writer.createRangeOn(t),t);n.writer.clearClonedElementsGroup(e.markerName),t.stop()}}),{priority:t.converterPriority||"normal"})}}(t))}markerToHighlight(t){return this.add(function(t){return e=>{e.on("addMarker:"+t.model,function(t){return(e,n,i)=>{if(!n.item)return;if(!(n.item instanceof ta||n.item instanceof sa||n.item.is("textProxy")))return;const o=wa(t,n,i);if(!o)return;if(!i.consumable.consume(n.item,e.name))return;const r=ma(o),s=i.writer,a=s.document.selection;if(n.item instanceof ta||n.item instanceof sa)s.wrap(a.getFirstRange(),r,a);else{const t=i.mapper.toViewRange(n.range),e=s.wrap(t,r);for(const t of e.getItems())if(t.is("attributeElement")&&t.isSimilar(r)){i.mapper.bindElementToMarker(t,n.markerName);break}}}}(t.view),{priority:t.converterPriority||"normal"}),e.on("addMarker:"+t.model,function(t){return(e,n,i)=>{if(!n.item)return;if(!(n.item instanceof Hs))return;const o=wa(t,n,i);if(!o)return;if(!i.consumable.test(n.item,e.name))return;const r=i.mapper.toViewElement(n.item);if(r&&r.getCustomProperty("addHighlight")){i.consumable.consume(n.item,e.name);for(const t of Gs._createIn(n.item))i.consumable.consume(t.item,e.name);r.getCustomProperty("addHighlight")(r,o,i.writer),i.mapper.bindElementToMarker(r,n.markerName)}}}(t.view),{priority:t.converterPriority||"normal"}),e.on("removeMarker:"+t.model,function(t){return(e,n,i)=>{if(n.markerRange.isCollapsed)return;const o=wa(t,n,i);if(!o)return;const r=ma(o),s=i.mapper.markerNameToElements(n.markerName);if(s){i.mapper.unbindElementsFromMarkerName(n.markerName);for(const t of s)t.is("attributeElement")?i.writer.unwrap(i.writer.createRangeOn(t),r):t.getCustomProperty("removeHighlight")(t,o.id,i.writer);i.writer.clearClonedElementsGroup(n.markerName),e.stop()}}}(t.view),{priority:t.converterPriority||"normal"})}}(t))}}function ma(t){const e=new ao("span",t.attributes);return t.classes&&e._addClass(t.classes),t.priority&&(e._priority=t.priority),e._id=t.id,e}function pa(t,e){return"function"==typeof t?t:(n,i)=>(function(t,e,n){"string"==typeof t&&(t={name:t});let i;const o=Object.assign({},t.attributes);if("container"==n)i=e.createContainerElement(t.name,o);else if("attribute"==n){const n={priority:t.priority||ao.DEFAULT_PRIORITY};i=e.createAttributeElement(t.name,o,n)}else i=e.createUIElement(t.name,o);if(t.styles){const n=Object.keys(t.styles);for(const o of n)e.setStyle(o,t.styles[o],i)}if(t.classes){const n=t.classes;if("string"==typeof n)e.addClass(n,i);else for(const t of n)e.addClass(t,i)}return i})(t,i,e)}function ga(t){return t.model.values?(e,n)=>{const i=t.view[e];return i?i(e,n):null}:t.view}function ba(t){return"string"==typeof t?e=>({key:t,value:e}):"object"==typeof t?t.value?()=>t:e=>({key:t.key,value:e}):t}function wa(t,e,n){const i="function"==typeof t?t(e,n):t;return i?(i.priority||(i.priority=10),i.id||(i.id=e.markerName),i):null}class _a extends la{elementToElement(t){return this.add(ka(t))}elementToAttribute(t){return this.add(function(t){ya(t=ha(t));const e=xa(t,!1),n=va(t),i=n?"element:"+n:"element";return n=>{n.on(i,e,{priority:t.converterPriority||"low"})}}(t))}attributeToAttribute(t){return this.add(function(t){let e=null;("string"==typeof(t=ha(t)).view||t.view.key)&&(e=function(t){"string"==typeof t.view&&(t.view={key:t.view});const e=t.view.key;let n;if("class"==e||"style"==e){const i="class"==e?"classes":"styles";n={[i]:t.view.value}}else{const i=void 0===t.view.value?/[\s\S]*/:t.view.value;n={attributes:{[e]:i}}}t.view.name&&(n.name=t.view.name);return t.view=n,e}(t));ya(t,e);const n=xa(t,!0);return e=>{e.on("element",n,{priority:t.converterPriority||"low"})}}(t))}elementToMarker(t){return this.add(function(t){return function(t){const e=t.model;t.model=((t,n)=>{const i="string"==typeof e?e:e(t);return n.createElement("$marker",{"data-name":i})})}(t=ha(t)),ka(t)}(t))}}function ka(t){const e=function(t){const e=t.view?new bi(t.view):null;return(n,i,o)=>{let r={};if(e){const t=e.match(i.viewItem);if(!t)return;r=t.match}r.name=!0;const s=function(t,e,n){return t instanceof Function?t(e,n):n.createElement(t)}(t.model,i.viewItem,o.writer);if(!s)return;if(!o.consumable.test(i.viewItem,r))return;const a=o.splitToAllowedParent(s,i.modelCursor);if(!a)return;o.writer.insert(s,a.position),o.convertChildren(i.viewItem,o.writer.createPositionAt(s,0)),o.consumable.consume(i.viewItem,r);const c=o.getSplitParts(s);i.modelRange=new Gs(o.writer.createPositionBefore(s),o.writer.createPositionAfter(c[c.length-1])),a.cursorParent?i.modelCursor=o.writer.createPositionAt(a.cursorParent,0):i.modelCursor=i.modelRange.end}}(t=ha(t)),n=va(t),i=n?"element:"+n:"element";return n=>{n.on(i,e,{priority:t.converterPriority||"normal"})}}function va(t){return"string"==typeof t.view?t.view:"object"==typeof t.view&&"string"==typeof t.view.name?t.view.name:null}function ya(t,e=null){const n=null===e||(t=>t.getAttribute(e)),i="object"!=typeof t.model?t.model:t.model.key,o="object"!=typeof t.model||void 0===t.model.value?n:t.model.value;t.model={key:i,value:o}}function xa(t,e){const n=new bi(t.view);return(i,o,r)=>{const s=n.match(o.viewItem);if(!s)return;const a=t.model.key,c="function"==typeof t.model.value?t.model.value(o.viewItem):t.model.value;null!==c&&(!function(t){if("object"==typeof t.view&&!va(t))return!1;return!t.view.classes&&!t.view.attributes&&!t.view.styles}(t)?delete s.match.name:s.match.name=!0,r.consumable.test(o.viewItem,s.match)&&(o.modelRange||(o=Object.assign(o,r.convertChildren(o.viewItem,o.modelCursor))),function(t,e,n,i){let o=!1;for(const r of Array.from(t.getItems({shallow:n})))i.schema.checkAttribute(r,e.key)&&(i.writer.setAttribute(e.key,e.value,r),o=!0);return o}(o.modelRange,{key:a,value:c},e,r)&&r.consumable.consume(o.viewItem,s.match)))}}class Aa{constructor(t){this.model=t,this.view=new js,this.mapper=new Qs,this.downcastDispatcher=new Zs({mapper:this.mapper});const e=this.model.document,n=e.selection,i=this.model.markers;this.listenTo(this.model,"_beforeChanges",()=>{this.view._disableRendering(!0)},{priority:"highest"}),this.listenTo(this.model,"_afterChanges",()=>{this.view._disableRendering(!1)},{priority:"lowest"}),this.listenTo(e,"change",()=>{this.view.change(t=>{this.downcastDispatcher.convertChanges(e.differ,t),this.downcastDispatcher.convertSelection(n,i,t)})},{priority:"low"}),this.listenTo(this.view.document,"selectionChange",function(t,e){return(n,i)=>{const o=i.newSelection,r=new ta,s=[];for(const t of o.getRanges())s.push(e.toModelRange(t));r.setTo(s,{backward:o.isBackward}),r.isEqual(t.document.selection)||t.change(t=>{t.setSelection(r)})}}(this.model,this.mapper)),this.downcastDispatcher.on("insert:$text",(t,e,n)=>{if(!n.consumable.consume(e.item,"insert"))return;const i=n.writer,o=n.mapper.toViewPosition(e.range.start),r=i.createText(e.item.data);i.insert(o,r)},{priority:"lowest"}),this.downcastDispatcher.on("remove",(t,e,n)=>{const i=n.mapper.toViewPosition(e.position),o=e.position.getShiftedBy(e.length),r=n.mapper.toViewPosition(o,{isPhantom:!0}),s=n.writer.createRange(i,r),a=n.writer.remove(s.getTrimmed());for(const t of n.writer.createRangeIn(a).getItems())n.mapper.unbindViewElement(t)},{priority:"low"}),this.downcastDispatcher.on("selection",(t,e,n)=>{const i=n.writer,o=i.document.selection;for(const t of o.getRanges())t.isCollapsed&&t.end.parent.document&&n.writer.mergeAttributes(t.start);i.setSelection(null)},{priority:"low"}),this.downcastDispatcher.on("selection",(t,e,n)=>{const i=e.selection;if(i.isCollapsed)return;if(!n.consumable.consume(i,"selection"))return;const o=[];for(const t of i.getRanges()){const e=n.mapper.toViewRange(t);o.push(e)}n.writer.setSelection(o,{backward:i.isBackward})},{priority:"low"}),this.downcastDispatcher.on("selection",(t,e,n)=>{const i=e.selection;if(!i.isCollapsed)return;if(!n.consumable.consume(i,"selection"))return;const o=n.writer,r=i.getFirstPosition(),s=n.mapper.toViewPosition(r),a=o.breakAttributes(s);o.setSelection(a)},{priority:"low"}),this.view.document.roots.bindTo(this.model.document.roots).using(t=>{if("$graveyard"==t.rootName)return null;const e=new Ki(t.name);return e.rootName=t.rootName,e._document=this.view.document,this.mapper.bindElements(t,e),e})}destroy(){this.view.destroy(),this.stopListening()}}ci(Aa,Fi);class Ca{constructor(t,e=[]){this._editor=t,this._availablePlugins=new Map,this._plugins=new Map;for(const t of e)this._availablePlugins.set(t,t),t.pluginName&&this._availablePlugins.set(t.pluginName,t)}*[Symbol.iterator](){for(const t of this._plugins)"function"==typeof t[0]&&(yield t)}get(t){const e=this._plugins.get(t);if(!e){const e="plugincollection-plugin-not-loaded: The requested plugin is not loaded.";let n=t;throw"function"==typeof t&&(n=t.pluginName||t.name),new Gn.b(e,{plugin:n})}return e}has(t){return this._plugins.has(t)}init(t,e=[]){const n=this,i=this._editor,o=new Set,r=[],s=h(t),a=h(e),c=function(t){const e=[];for(const n of t)u(n)||e.push(n);return e.length?e:null}(t);if(c){const t="plugincollection-plugin-not-found: Some plugins are not available and could not be loaded.";return bs.a.error(t,{plugins:c}),Promise.reject(new Gn.b(t,{plugins:c}))}return Promise.all(s.map(l)).then(()=>d(r,"init")).then(()=>d(r,"afterInit")).then(()=>r);function l(t){if(!a.includes(t)&&!n._plugins.has(t)&&!o.has(t))return function(t){return new Promise(s=>{o.add(t),t.requires&&t.requires.forEach(n=>{const i=u(n);if(e.includes(i))throw new Gn.b("plugincollection-required: Cannot load a plugin because one of its dependencies is listed inthe `removePlugins` option.",{plugin:i,requiredBy:t});l(i)});const a=new t(i);n._add(t,a),r.push(a),s()})}(t).catch(e=>{throw bs.a.error("plugincollection-load: It was not possible to load the plugin.",{plugin:t}),e})}function d(t,e){return t.reduce((t,n)=>n[e]?t.then(n[e].bind(n)):t,Promise.resolve())}function u(t){return"function"==typeof t?t:n._availablePlugins.get(t)}function h(t){return t.map(t=>u(t)).filter(t=>!!t)}}destroy(){const t=Array.from(this).map(([,t])=>t).filter(t=>"function"==typeof t.destroy).map(t=>t.destroy());return Promise.all(t)}_add(t,e){this._plugins.set(t,e);const n=t.pluginName;n&&(this._plugins.has(n)?bs.a.warn("plugincollection-plugin-name-conflict: Two plugins with the same name were loaded.",{pluginName:n,plugin1:this._plugins.get(n).constructor,plugin2:t}):this._plugins.set(n,e))}}ci(Ca,ei);class Ta{constructor(){this._commands=new Map}add(t,e){this._commands.set(t,e)}get(t){return this._commands.get(t)}execute(t,...e){const n=this.get(t);if(!n)throw new Gn.b("commandcollection-command-not-found: Command does not exist.",{commandName:t});n.execute(...e)}*names(){yield*this._commands.keys()}*commands(){yield*this._commands.values()}[Symbol.iterator](){return this._commands[Symbol.iterator]()}destroy(){for(const t of this.commands())t.destroy()}}function Pa(t,e){const n=Object.keys(window.CKEDITOR_TRANSLATIONS).length;return 1===n&&(t=Object.keys(window.CKEDITOR_TRANSLATIONS)[0]),0!==n&&function(t,e){return t in window.CKEDITOR_TRANSLATIONS&&e in window.CKEDITOR_TRANSLATIONS[t]}(t,e)?window.CKEDITOR_TRANSLATIONS[t][e].replace(/ \[context: [^\]]+\]$/,""):e.replace(/ \[context: [^\]]+\]$/,"")}window.CKEDITOR_TRANSLATIONS||(window.CKEDITOR_TRANSLATIONS={});class Ma{constructor(t){this.language=t||"en",this.t=((...t)=>this._t(...t))}_t(t,e){let n=Pa(this.language,t);return e&&(n=n.replace(/%(\d+)/g,(t,n)=>n<e.length?e[n]:t)),n}}class Ea{constructor(){this._consumables=new Map}add(t,e){let n;t.is("text")||t.is("documentFragment")?this._consumables.set(t,!0):(this._consumables.has(t)?n=this._consumables.get(t):(n=new Sa,this._consumables.set(t,n)),n.add(e))}test(t,e){const n=this._consumables.get(t);return void 0===n?null:t.is("text")||t.is("documentFragment")?n:n.test(e)}consume(t,e){return!!this.test(t,e)&&(t.is("text")||t.is("documentFragment")?this._consumables.set(t,!1):this._consumables.get(t).consume(e),!0)}revert(t,e){const n=this._consumables.get(t);void 0!==n&&(t.is("text")||t.is("documentFragment")?this._consumables.set(t,!0):n.revert(e))}static consumablesFromElement(t){const e={name:!0,attributes:[],classes:[],styles:[]},n=t.getAttributeKeys();for(const t of n)"style"!=t&&"class"!=t&&e.attributes.push(t);const i=t.getClassNames();for(const t of i)e.classes.push(t);const o=t.getStyleNames();for(const t of o)e.styles.push(t);return e}static createFrom(t,e){if(e||(e=new Ea),t.is("text"))return e.add(t),e;t.is("element")&&e.add(t,Ea.consumablesFromElement(t)),t.is("documentFragment")&&e.add(t);for(const n of t.getChildren())e=Ea.createFrom(n,e);return e}}class Sa{constructor(){this._canConsumeName=null,this._consumables={attributes:new Map,styles:new Map,classes:new Map}}add(t){t.name&&(this._canConsumeName=!0);for(const e in this._consumables)e in t&&this._add(e,t[e])}test(t){if(t.name&&!this._canConsumeName)return this._canConsumeName;for(const e in this._consumables)if(e in t){const n=this._test(e,t[e]);if(!0!==n)return n}return!0}consume(t){t.name&&(this._canConsumeName=!1);for(const e in this._consumables)e in t&&this._consume(e,t[e])}revert(t){t.name&&(this._canConsumeName=!0);for(const e in this._consumables)e in t&&this._revert(e,t[e])}_add(t,e){const n=Wt(e)?e:[e],i=this._consumables[t];for(const e of n){if("attributes"===t&&("class"===e||"style"===e))throw new Gn.b("viewconsumable-invalid-attribute: Classes and styles should be handled separately.");i.set(e,!0)}}_test(t,e){const n=Wt(e)?e:[e],i=this._consumables[t];for(const e of n)if("attributes"!==t||"class"!==e&&"style"!==e){const t=i.get(e);if(void 0===t)return null;if(!t)return!1}else{const t="class"==e?"classes":"styles",n=this._test(t,[...this._consumables[t].keys()]);if(!0!==n)return n}return!0}_consume(t,e){const n=Wt(e)?e:[e],i=this._consumables[t];for(const e of n)if("attributes"!==t||"class"!==e&&"style"!==e)i.set(e,!1);else{const t="class"==e?"classes":"styles";this._consume(t,[...this._consumables[t].keys()])}}_revert(t,e){const n=Wt(e)?e:[e],i=this._consumables[t];for(const e of n)if("attributes"!==t||"class"!==e&&"style"!==e){!1===i.get(e)&&i.set(e,!0)}else{const t="class"==e?"classes":"styles";this._revert(t,[...this._consumables[t].keys()])}}}class Ia{constructor(){this._sourceDefinitions={},this._attributeProperties={},this.decorate("checkChild"),this.decorate("checkAttribute"),this.on("checkAttribute",(t,e)=>{e[0]=new Na(e[0])},{priority:"highest"}),this.on("checkChild",(t,e)=>{e[0]=new Na(e[0]),e[1]=this.getDefinition(e[1])},{priority:"highest"})}register(t,e){if(this._sourceDefinitions[t])throw new Gn.b("schema-cannot-register-item-twice: A single item cannot be registered twice in the schema.",{itemName:t});this._sourceDefinitions[t]=[Object.assign({},e)],this._clearCache()}extend(t,e){if(!this._sourceDefinitions[t])throw new Gn.b("schema-cannot-extend-missing-item: Cannot extend an item which was not registered yet.",{itemName:t});this._sourceDefinitions[t].push(Object.assign({},e)),this._clearCache()}getDefinitions(){return this._compiledDefinitions||this._compile(),this._compiledDefinitions}getDefinition(t){let e;return e="string"==typeof t?t:t.is&&(t.is("text")||t.is("textProxy"))?"$text":t.name,this.getDefinitions()[e]}isRegistered(t){return!!this.getDefinition(t)}isBlock(t){const e=this.getDefinition(t);return!(!e||!e.isBlock)}isLimit(t){const e=this.getDefinition(t);return!!e&&!(!e.isLimit&&!e.isObject)}isObject(t){const e=this.getDefinition(t);return!(!e||!e.isObject)}isInline(t){const e=this.getDefinition(t);return!(!e||!e.isInline)}checkChild(t,e){return!!e&&this._checkContextMatch(e,t)}checkAttribute(t,e){const n=this.getDefinition(t.last);return!!n&&n.allowAttributes.includes(e)}checkMerge(t,e=null){if(t instanceof $s){const e=t.nodeBefore,n=t.nodeAfter;if(!(e instanceof Hs))throw new Gn.b("schema-check-merge-no-element-before: The node before the merge position must be an element.");if(!(n instanceof Hs))throw new Gn.b("schema-check-merge-no-element-after: The node after the merge position must be an element.");return this.checkMerge(e,n)}for(const n of e.getChildren())if(!this.checkChild(t,n))return!1;return!0}addChildCheck(t){this.on("checkChild",(e,[n,i])=>{if(!i)return;const o=t(n,i);"boolean"==typeof o&&(e.stop(),e.return=o)},{priority:"high"})}addAttributeCheck(t){this.on("checkAttribute",(e,[n,i])=>{const o=t(n,i);"boolean"==typeof o&&(e.stop(),e.return=o)},{priority:"high"})}setAttributeProperties(t,e){this._attributeProperties[t]=Object.assign(this.getAttributeProperties(t),e)}getAttributeProperties(t){return this._attributeProperties[t]||{}}getLimitElement(t){let e;if(t instanceof $s)e=t.parent;else{e=(t instanceof Gs?[t]:Array.from(t.getRanges())).reduce((t,e)=>{const n=e.getCommonAncestor();return t?t.getCommonAncestor(n,{includeSelf:!0}):n},null)}for(;!this.isLimit(e)&&e.parent;)e=e.parent;return e}checkAttributeInSelection(t,e){if(t.isCollapsed){const n=[...t.getFirstPosition().getAncestors(),new zs("",t.getAttributes())];return this.checkAttribute(n,e)}{const n=t.getRanges();for(const t of n)for(const n of t)if(this.checkAttribute(n.item,e))return!0}return!1}*getValidRanges(t,e){t=function*(t){for(const e of t)yield*e.getMinimalFlatRanges()}(t);for(const n of t)yield*this._getValidRangesForRange(n,e)}getNearestSelectionRange(t,e="both"){if(this.checkChild(t,"$text"))return new Gs(t);let n,i;"both"!=e&&"backward"!=e||(n=new qs({startPosition:t,direction:"backward"})),"both"!=e&&"forward"!=e||(i=new qs({startPosition:t}));for(const t of function*(t,e){let n=!1;for(;!n;){if(n=!0,t){const e=t.next();e.done||(n=!1,yield{walker:t,value:e.value})}if(e){const t=e.next();t.done||(n=!1,yield{walker:e,value:t.value})}}}(n,i)){const e=t.walker==n?"elementEnd":"elementStart",i=t.value;if(i.type==e&&this.isObject(i.item))return Gs._createOn(i.item);if(this.checkChild(i.nextPosition,"$text"))return new Gs(i.nextPosition)}return null}findAllowedParent(t,e){let n=t.parent;for(;n;){if(this.checkChild(n,e))return n;if(this.isLimit(n))return null;n=n.parent}return null}removeDisallowedAttributes(t,e){for(const n of t){for(const t of n.getAttributeKeys())this.checkAttribute(n,t)||e.removeAttribute(t,n);n.is("element")&&this.removeDisallowedAttributes(n.getChildren(),e)}}createContext(t){return new Na(t)}_clearCache(){this._compiledDefinitions=null}_compile(){const t={},e=this._sourceDefinitions,n=Object.keys(e);for(const i of n)t[i]=Oa(e[i],i);for(const e of n)Ra(t,e);for(const e of n)Da(t,e);for(const e of n)La(t,e),ja(t,e);for(const e of n)Va(t,e),Ba(t,e);this._compiledDefinitions=t}_checkContextMatch(t,e,n=e.length-1){const i=e.getItem(n);if(t.allowIn.includes(i.name)){if(0==n)return!0;{const t=this.getDefinition(i);return this._checkContextMatch(t,e,n-1)}}return!1}*_getValidRangesForRange(t,e){let n=t.start,i=t.start;for(const o of t.getItems({shallow:!0}))o.is("element")&&(yield*this._getValidRangesForRange(Gs._createIn(o),e)),this.checkAttribute(o,e)||(n.isEqual(i)||(yield new Gs(n,i)),n=$s._createAfter(o)),i=$s._createAfter(o);n.isEqual(i)||(yield new Gs(n,i))}}ci(Ia,Fi);class Na{constructor(t){if(t instanceof Na)return t;"string"==typeof t?t=[t]:Array.isArray(t)||(t=t.getAncestors({includeSelf:!0})),t[0]&&"string"!=typeof t[0]&&t[0].is("documentFragment")&&t.shift(),this._items=t.map(Ua)}get length(){return this._items.length}get last(){return this._items[this._items.length-1]}[Symbol.iterator](){return this._items[Symbol.iterator]()}push(t){const e=new Na([t]);return e._items=[...this._items,...e._items],e}getItem(t){return this._items[t]}*getNames(){yield*this._items.map(t=>t.name)}endsWith(t){return Array.from(this.getNames()).join(" ").endsWith(t)}}function Oa(t,e){const n={name:e,allowIn:[],allowContentOf:[],allowWhere:[],allowAttributes:[],allowAttributesOf:[],inheritTypesFrom:[]};return function(t,e){for(const n of t){const t=Object.keys(n).filter(t=>t.startsWith("is"));for(const i of t)e[i]=n[i]}}(t,n),za(t,n,"allowIn"),za(t,n,"allowContentOf"),za(t,n,"allowWhere"),za(t,n,"allowAttributes"),za(t,n,"allowAttributesOf"),za(t,n,"inheritTypesFrom"),function(t,e){for(const n of t){const t=n.inheritAllFrom;t&&(e.allowContentOf.push(t),e.allowWhere.push(t),e.allowAttributesOf.push(t),e.inheritTypesFrom.push(t))}}(t,n),n}function Ra(t,e){for(const n of t[e].allowContentOf)if(t[n]){Fa(t,n).forEach(t=>{t.allowIn.push(e)})}delete t[e].allowContentOf}function Da(t,e){for(const n of t[e].allowWhere){const i=t[n];if(i){const n=i.allowIn;t[e].allowIn.push(...n)}}delete t[e].allowWhere}function La(t,e){for(const n of t[e].allowAttributesOf){const i=t[n];if(i){const n=i.allowAttributes;t[e].allowAttributes.push(...n)}}delete t[e].allowAttributesOf}function ja(t,e){const n=t[e];for(const e of n.inheritTypesFrom){const i=t[e];if(i){const t=Object.keys(i).filter(t=>t.startsWith("is"));for(const e of t)e in n||(n[e]=i[e])}}delete n.inheritTypesFrom}function Va(t,e){const n=t[e],i=n.allowIn.filter(e=>t[e]);n.allowIn=Array.from(new Set(i))}function Ba(t,e){const n=t[e];n.allowAttributes=Array.from(new Set(n.allowAttributes))}function za(t,e,n){for(const i of t)"string"==typeof i[n]?e[n].push(i[n]):Array.isArray(i[n])&&e[n].push(...i[n])}function Fa(t,e){const n=t[e];return function(t){return Object.keys(t).map(e=>t[e])}(t).filter(t=>t.allowIn.includes(n.name))}function Ua(t){return"string"==typeof t?{name:t,*getAttributeKeys(){},getAttribute(){}}:{name:t.is("element")?t.name:"$text",*getAttributeKeys(){yield*t.getAttributeKeys()},getAttribute:e=>t.getAttribute(e)}}class Ha{constructor(t={}){this._splitParts=new Map,this._modelCursor=null,this.conversionApi=Object.assign({},t),this.conversionApi.convertItem=this._convertItem.bind(this),this.conversionApi.convertChildren=this._convertChildren.bind(this),this.conversionApi.splitToAllowedParent=this._splitToAllowedParent.bind(this),this.conversionApi.getSplitParts=this._getSplitParts.bind(this)}convert(t,e,n=["$root"]){this.fire("viewCleanup",t),this._modelCursor=function(t,e){let n;for(const i of new Na(t)){const t={};for(const e of i.getAttributeKeys())t[e]=i.getAttribute(e);const o=e.createElement(i.name,t);n&&e.append(o,n),n=$s._createAt(o,0)}return n}(n,e),this.conversionApi.writer=e,this.conversionApi.consumable=Ea.createFrom(t),this.conversionApi.store={};const{modelRange:i}=this._convertItem(t,this._modelCursor),o=e.createDocumentFragment();if(i){this._removeEmptyElements();for(const t of Array.from(this._modelCursor.parent.getChildren()))e.append(t,o);o.markers=function(t,e){const n=new Set,i=new Map,o=Gs._createIn(t).getItems();for(const t of o)"$marker"==t.name&&n.add(t);for(const t of n){const n=t.getAttribute("data-name"),o=e.createPositionBefore(t);i.has(n)?i.get(n).end=o.clone():i.set(n,new Gs(o.clone())),e.remove(t)}return i}(o,e)}return this._modelCursor=null,this._splitParts.clear(),this.conversionApi.writer=null,this.conversionApi.store=null,o}_convertItem(t,e){const n=Object.assign({viewItem:t,modelCursor:e,modelRange:null});if(t.is("element")?this.fire("element:"+t.name,n,this.conversionApi):t.is("text")?this.fire("text",n,this.conversionApi):this.fire("documentFragment",n,this.conversionApi),n.modelRange&&!(n.modelRange instanceof Gs))throw new Gn.b("view-conversion-dispatcher-incorrect-result: Incorrect conversion result was dropped.");return{modelRange:n.modelRange,modelCursor:n.modelCursor}}_convertChildren(t,e){const n=new Gs(e);let i=e;for(const e of Array.from(t.getChildren())){const t=this._convertItem(e,i);t.modelRange instanceof Gs&&(n.end=t.modelRange.end,i=t.modelCursor)}return{modelRange:n,modelCursor:i}}_splitToAllowedParent(t,e){const n=this.conversionApi.schema.findAllowedParent(e,t);if(!n)return null;if(n===e.parent)return{position:e};if(this._modelCursor.parent.getAncestors().includes(n))return null;const i=this.conversionApi.writer.split(e,n),o=[];for(const t of i.range.getWalker())if("elementEnd"==t.type)o.push(t.item);else{const e=o.pop(),n=t.item;this._registerSplitPair(e,n)}return{position:i.position,cursorParent:i.range.end.parent}}_registerSplitPair(t,e){this._splitParts.has(t)||this._splitParts.set(t,[t]);const n=this._splitParts.get(t);this._splitParts.set(e,n),n.push(e)}_getSplitParts(t){let e;return e=this._splitParts.has(t)?this._splitParts.get(t):[t]}_removeEmptyElements(){let t=!1;for(const e of this._splitParts.keys())e.isEmpty&&(this.conversionApi.writer.remove(e),this._splitParts.delete(e),t=!0);t&&this._removeEmptyElements()}}ci(Ha,ei);class qa{constructor(t,e){this.model=t,this.processor=e,this.mapper=new Qs,this.downcastDispatcher=new Zs({mapper:this.mapper}),this.downcastDispatcher.on("insert:$text",(t,e,n)=>{if(!n.consumable.consume(e.item,"insert"))return;const i=n.writer,o=n.mapper.toViewPosition(e.range.start),r=i.createText(e.item.data);i.insert(o,r)},{priority:"lowest"}),this.upcastDispatcher=new Ha({schema:t.schema}),this.upcastDispatcher.on("text",(t,e,n)=>{if(n.schema.checkChild(e.modelCursor,"$text")&&n.consumable.consume(e.viewItem)){const t=n.writer.createText(e.viewItem.data);n.writer.insert(t,e.modelCursor),e.modelRange=Gs._createFromPositionAndShift(e.modelCursor,t.offsetSize),e.modelCursor=e.modelRange.end}},{priority:"lowest"}),this.upcastDispatcher.on("element",(t,e,n)=>{if(!e.modelRange&&n.consumable.consume(e.viewItem,{name:!0})){const{modelRange:t,modelCursor:i}=n.convertChildren(e.viewItem,e.modelCursor);e.modelRange=t,e.modelCursor=i}},{priority:"lowest"}),this.upcastDispatcher.on("documentFragment",(t,e,n)=>{if(!e.modelRange&&n.consumable.consume(e.viewItem,{name:!0})){const{modelRange:t,modelCursor:i}=n.convertChildren(e.viewItem,e.modelCursor);e.modelRange=t,e.modelCursor=i}},{priority:"lowest"}),this.decorate("init"),this.on("init",()=>{this.fire("ready")},{priority:"lowest"})}get(t){const{rootName:e="main",trim:n="empty"}=t||{};if(!this._checkIfRootsExists([e]))throw new Gn.b("datacontroller-get-non-existent-root: Attempting to get data from a non-existing root.");const i=this.model.document.getRoot(e);return"empty"!==n||this.model.hasContent(i,{ignoreWhitespaces:!0})?this.stringify(i):""}stringify(t){const e=this.toView(t);return this.processor.toData(e)}toView(t){this.mapper.clearBindings();const e=Gs._createIn(t),n=new Ao,i=new Co(new ro);if(this.mapper.bindElements(t,n),this.downcastDispatcher.convertInsert(e,i),!t.is("documentFragment")){const e=function(t){const e=[],n=t.root.document;if(!n)return[];const i=Gs._createIn(t);for(const t of n.model.markers){const n=i.getIntersection(t.getRange());n&&e.push([t.name,n])}return e}(t);for(const[t,n]of e)this.downcastDispatcher.convertMarkerAdd(t,n,i)}return n}init(t){if(this.model.document.version)throw new Gn.b("datacontroller-init-document-not-empty: Trying to set initial data to not empty document.");let e={};if("string"==typeof t?e.main=t:e=t,!this._checkIfRootsExists(Object.keys(e)))throw new Gn.b("datacontroller-init-non-existent-root: Attempting to init data on a non-existing root.");return this.model.enqueueChange("transparent",t=>{for(const n of Object.keys(e)){const i=this.model.document.getRoot(n);t.insert(this.parse(e[n],i),i,0)}}),Promise.resolve()}set(t){let e={};if("string"==typeof t?e.main=t:e=t,!this._checkIfRootsExists(Object.keys(e)))throw new Gn.b("datacontroller-set-non-existent-root: Attempting to set data on a non-existing root.");this.model.enqueueChange("transparent",t=>{t.setSelection(null),t.removeSelectionAttribute(this.model.document.selection.getAttributeKeys());for(const n of Object.keys(e)){const i=this.model.document.getRoot(n);t.remove(t.createRangeIn(i)),t.insert(this.parse(e[n],i),i,0)}})}parse(t,e="$root"){const n=this.processor.toView(t);return this.toModel(n,e)}toModel(t,e="$root"){return this.model.change(n=>this.upcastDispatcher.convert(t,n,e))}destroy(){this.stopListening()}_checkIfRootsExists(t){for(const e of t)if(!this.model.document.getRootNames().includes(e))return!1;return!0}}ci(qa,Fi);class Wa{constructor(t,e){this._helpers=new Map,this._downcast=Array.isArray(t)?t:[t],this._createConversionHelpers({name:"downcast",dispatchers:this._downcast,isDowncast:!0}),this._upcast=Array.isArray(e)?e:[e],this._createConversionHelpers({name:"upcast",dispatchers:this._upcast,isDowncast:!1})}addAlias(t,e){const n=this._downcast.includes(e);if(!this._upcast.includes(e)&&!n)throw new Gn.b("conversion-add-alias-dispatcher-not-registered: Trying to register and alias for a dispatcher that nas not been registered.");this._createConversionHelpers({name:t,dispatchers:[e],isDowncast:n})}for(t){if(!this._helpers.has(t))throw new Gn.b("conversion-for-unknown-group: Trying to add a converter to an unknown dispatchers group.");return this._helpers.get(t)}elementToElement(t){this.for("downcast").elementToElement(t);for(const{model:e,view:n}of Ya(t))this.for("upcast").elementToElement({model:e,view:n,converterPriority:t.converterPriority})}attributeToElement(t){this.for("downcast").attributeToElement(t);for(const{model:e,view:n}of Ya(t))this.for("upcast").elementToAttribute({view:n,model:e,converterPriority:t.converterPriority})}attributeToAttribute(t){this.for("downcast").attributeToAttribute(t);for(const{model:e,view:n}of Ya(t))this.for("upcast").attributeToAttribute({view:n,model:e})}_createConversionHelpers({name:t,dispatchers:e,isDowncast:n}){if(this._helpers.has(t))throw new Gn.b("conversion-group-exists: Trying to register a group name that has already been registered.");const i=n?new fa(e):new _a(e);this._helpers.set(t,i)}}function*Ya(t){if(t.model.values)for(const e of t.model.values){yield*$a({key:t.model.key,value:e},t.view[e],t.upcastAlso?t.upcastAlso[e]:void 0)}else yield*$a(t.model,t.view,t.upcastAlso)}function*$a(t,e,n){if(yield{model:t,view:e},n){n=Array.isArray(n)?n:[n];for(const e of n)yield{model:t,view:e}}}class Ga{constructor(t="default"){this.operations=[],this.type=t}get baseVersion(){for(const t of this.operations)if(null!==t.baseVersion)return t.baseVersion;return null}addOperation(t){return t.batch=this,this.operations.push(t),t}}class Qa{constructor(t){this.baseVersion=t,this.isDocumentOperation=null!==this.baseVersion,this.batch=null}_validate(){}toJSON(){const t=Object.assign({},this);return t.__className=this.constructor.className,delete t.batch,delete t.isDocumentOperation,t}static get className(){return"Operation"}static fromJSON(t){return new this(t.baseVersion)}}class Ka{constructor(t){this.markers=new Map,this._children=new Us,t&&this._insertChild(0,t)}[Symbol.iterator](){return this.getChildren()}get childCount(){return this._children.length}get maxOffset(){return this._children.maxOffset}get isEmpty(){return 0===this.childCount}get root(){return this}get parent(){return null}is(t){return"documentFragment"==t}getChild(t){return this._children.getNode(t)}getChildren(){return this._children[Symbol.iterator]()}getChildIndex(t){return this._children.getNodeIndex(t)}getChildStartOffset(t){return this._children.getNodeStartOffset(t)}getPath(){return[]}getNodeByPath(t){let e=this;for(const n of t)e=e.getChild(e.offsetToIndex(n));return e}offsetToIndex(t){return this._children.offsetToIndex(t)}toJSON(){const t=[];for(const e of this._children)t.push(e.toJSON());return t}static fromJSON(t){const e=[];for(const n of t)n.name?e.push(Hs.fromJSON(n)):e.push(zs.fromJSON(n));return new Ka(e)}_appendChild(t){this._insertChild(this.childCount,t)}_insertChild(t,e){const n=function(t){if("string"==typeof t)return[new zs(t)];gi(t)||(t=[t]);return Array.from(t).map(t=>"string"==typeof t?new zs(t):t instanceof Fs?new zs(t.data,t.getAttributes()):t)}(e);for(const t of n)null!==t.parent&&t._remove(),t.parent=this;this._children._insertNodes(t,n)}_removeChildren(t,e=1){const n=this._children._removeNodes(t,e);for(const t of n)t.parent=null;return n}}function Ja(t,e){const n=(e=tc(e)).reduce((t,e)=>t+e.offsetSize,0),i=t.parent;nc(t);const o=t.index;return i._insertChild(o,e),ec(i,o+e.length),ec(i,o),new Gs(t,t.getShiftedBy(n))}function Za(t){if(!t.isFlat)throw new Gn.b("operation-utils-remove-range-not-flat: Trying to remove a range which starts and ends in different element.");const e=t.start.parent;nc(t.start),nc(t.end);const n=e._removeChildren(t.start.index,t.end.index-t.start.index);return ec(e,t.start.index),n}function Xa(t,e){if(!t.isFlat)throw new Gn.b("operation-utils-move-range-not-flat: Trying to move a range which starts and ends in different element.");const n=Za(t);return Ja(e=e._getTransformedByDeletion(t.start,t.end.offset-t.start.offset),n)}function tc(t){const e=[];t instanceof Array||(t=[t]);for(let n=0;n<t.length;n++)if("string"==typeof t[n])e.push(new zs(t[n]));else if(t[n]instanceof Fs)e.push(new zs(t[n].data,t[n].getAttributes()));else if(t[n]instanceof Ka||t[n]instanceof Us)for(const i of t[n])e.push(i);else t[n]instanceof Bs&&e.push(t[n]);for(let t=1;t<e.length;t++){const n=e[t],i=e[t-1];n instanceof zs&&i instanceof zs&&ic(n,i)&&(e.splice(t-1,2,new zs(i.data+n.data,i.getAttributes())),t--)}return e}function ec(t,e){const n=t.getChild(e-1),i=t.getChild(e);if(n&&i&&n.is("text")&&i.is("text")&&ic(n,i)){const o=new zs(n.data+i.data,n.getAttributes());t._removeChildren(e-1,2),t._insertChild(e-1,o)}}function nc(t){const e=t.textNode,n=t.parent;if(e){const i=t.offset-e.startOffset,o=e.index;n._removeChildren(o,1);const r=new zs(e.data.substr(0,i),e.getAttributes()),s=new zs(e.data.substr(i),e.getAttributes());n._insertChild(o,[r,s])}}function ic(t,e){const n=t.getAttributes(),i=e.getAttributes();for(const t of n){if(t[1]!==e.getAttribute(t[0]))return!1;i.next()}return i.next().done}var oc=function(t,e){return Kr(t,e)};class rc extends Qa{constructor(t,e,n,i,o){super(o),this.range=t.clone(),this.key=e,this.oldValue=void 0===n?null:n,this.newValue=void 0===i?null:i}get type(){return null===this.oldValue?"addAttribute":null===this.newValue?"removeAttribute":"changeAttribute"}clone(){return new rc(this.range,this.key,this.oldValue,this.newValue,this.baseVersion)}getReversed(){return new rc(this.range,this.key,this.newValue,this.oldValue,this.baseVersion+1)}toJSON(){const t=super.toJSON();return t.range=this.range.toJSON(),t}_validate(){if(!this.range.isFlat)throw new Gn.b("attribute-operation-range-not-flat: The range to change is not flat.");for(const t of this.range.getItems({shallow:!0})){if(null!==this.oldValue&&!oc(t.getAttribute(this.key),this.oldValue))throw new Gn.b("attribute-operation-wrong-old-value: Changed node has different attribute value than operation's old attribute value.",{item:t,key:this.key,value:this.oldValue});if(null===this.oldValue&&null!==this.newValue&&t.hasAttribute(this.key))throw new Gn.b("attribute-operation-attribute-exists: The attribute with given key already exists.",{node:t,key:this.key})}}_execute(){oc(this.oldValue,this.newValue)||function(t,e,n){nc(t.start),nc(t.end);for(const i of t.getItems({shallow:!0})){const t=i.is("textProxy")?i.textNode:i;null!==n?t._setAttribute(e,n):t._removeAttribute(e),ec(t.parent,t.index)}ec(t.end.parent,t.end.index)}(this.range,this.key,this.newValue)}static get className(){return"AttributeOperation"}static fromJSON(t,e){return new rc(Gs.fromJSON(t.range,e),t.key,t.oldValue,t.newValue,t.baseVersion)}}class sc extends Qa{constructor(t,e){super(null),this.sourcePosition=t.clone(),this.howMany=e}get type(){return"detach"}toJSON(){const t=super.toJSON();return t.sourcePosition=this.sourcePosition.toJSON(),t}_validate(){if(this.sourcePosition.root.document)throw new Gn.b("detach-operation-on-document-node: Cannot detach document node.")}_execute(){Za(Gs._createFromPositionAndShift(this.sourcePosition,this.howMany))}static get className(){return"DetachOperation"}}class ac extends Qa{constructor(t,e,n,i){super(i),this.sourcePosition=t.clone(),this.sourcePosition.stickiness="toNext",this.howMany=e,this.targetPosition=n.clone(),this.targetPosition.stickiness="toNone"}get type(){return"$graveyard"==this.targetPosition.root.rootName?"remove":"$graveyard"==this.sourcePosition.root.rootName?"reinsert":"move"}clone(){return new this.constructor(this.sourcePosition,this.howMany,this.targetPosition,this.baseVersion)}getMovedRangeStart(){return this.targetPosition._getTransformedByDeletion(this.sourcePosition,this.howMany)}getReversed(){const t=this.sourcePosition._getTransformedByInsertion(this.targetPosition,this.howMany);return new this.constructor(this.getMovedRangeStart(),this.howMany,t,this.baseVersion+1)}_validate(){const t=this.sourcePosition.parent,e=this.targetPosition.parent,n=this.sourcePosition.offset,i=this.targetPosition.offset;if(!t||!e)throw new Gn.b("move-operation-position-invalid: Source position or target position is invalid.");if(n+this.howMany>t.maxOffset)throw new Gn.b("move-operation-nodes-do-not-exist: The nodes which should be moved do not exist.");if(t===e&&n<i&&i<n+this.howMany)throw new Gn.b("move-operation-range-into-itself: Trying to move a range of nodes to the inside of that range.");if(this.sourcePosition.root==this.targetPosition.root&&"prefix"==li(this.sourcePosition.getParentPath(),this.targetPosition.getParentPath())){const t=this.sourcePosition.path.length-1;if(this.targetPosition.path[t]>=n&&this.targetPosition.path[t]<n+this.howMany)throw new Gn.b("move-operation-node-into-itself: Trying to move a range of nodes into one of nodes from that range.")}}_execute(){Xa(Gs._createFromPositionAndShift(this.sourcePosition,this.howMany),this.targetPosition)}toJSON(){const t=super.toJSON();return t.sourcePosition=this.sourcePosition.toJSON(),t.targetPosition=this.targetPosition.toJSON(),t}static get className(){return"MoveOperation"}static fromJSON(t,e){const n=$s.fromJSON(t.sourcePosition,e),i=$s.fromJSON(t.targetPosition,e);return new this(n,t.howMany,i,t.baseVersion)}}class cc extends Qa{constructor(t,e,n){super(n),this.position=t.clone(),this.position.stickiness="toNone",this.nodes=new Us(tc(e)),this.shouldReceiveAttributes=!1}get type(){return"insert"}get howMany(){return this.nodes.maxOffset}clone(){const t=new Us([...this.nodes].map(t=>t._clone(!0))),e=new cc(this.position,t,this.baseVersion);return e.shouldReceiveAttributes=this.shouldReceiveAttributes,e}getReversed(){const t=this.position.root.document.graveyard,e=new $s(t,[0]);return new ac(this.position,this.nodes.maxOffset,e,this.baseVersion+1)}_validate(){const t=this.position.parent;if(!t||t.maxOffset<this.position.offset)throw new Gn.b("insert-operation-position-invalid: Insertion position is invalid.")}_execute(){const t=this.nodes;this.nodes=new Us([...t].map(t=>t._clone(!0))),Ja(this.position,t)}toJSON(){const t=super.toJSON();return t.position=this.position.toJSON(),t.nodes=this.nodes.toJSON(),t}static get className(){return"InsertOperation"}static fromJSON(t,e){const n=[];for(const e of t.nodes)e.name?n.push(Hs.fromJSON(e)):n.push(zs.fromJSON(e));const i=new cc($s.fromJSON(t.position,e),n,t.baseVersion);return i.shouldReceiveAttributes=t.shouldReceiveAttributes,i}}class lc extends Qa{constructor(t,e,n,i,o,r){super(r),this.name=t,this.oldRange=e?e.clone():null,this.newRange=n?n.clone():null,this.affectsData=o,this._markers=i}get type(){return"marker"}clone(){return new lc(this.name,this.oldRange,this.newRange,this._markers,this.affectsData,this.baseVersion)}getReversed(){return new lc(this.name,this.newRange,this.oldRange,this._markers,this.affectsData,this.baseVersion+1)}_execute(){const t=this.newRange?"_set":"_remove";this._markers[t](this.name,this.newRange,!0,this.affectsData)}toJSON(){const t=super.toJSON();return this.oldRange&&(t.oldRange=this.oldRange.toJSON()),this.newRange&&(t.newRange=this.newRange.toJSON()),delete t._markers,t}static get className(){return"MarkerOperation"}static fromJSON(t,e){return new lc(t.name,t.oldRange?Gs.fromJSON(t.oldRange,e):null,t.newRange?Gs.fromJSON(t.newRange,e):null,e.model.markers,t.affectsData,t.baseVersion)}}class dc extends Qa{constructor(t,e,n,i){super(i),this.position=t,this.position.stickiness="toNext",this.oldName=e,this.newName=n}get type(){return"rename"}clone(){return new dc(this.position.clone(),this.oldName,this.newName,this.baseVersion)}getReversed(){return new dc(this.position.clone(),this.newName,this.oldName,this.baseVersion+1)}_validate(){const t=this.position.nodeAfter;if(!(t instanceof Hs))throw new Gn.b("rename-operation-wrong-position: Given position is invalid or node after it is not an instance of Element.");if(t.name!==this.oldName)throw new Gn.b("rename-operation-wrong-name: Element to change has different name than operation's old name.")}_execute(){this.position.nodeAfter.name=this.newName}toJSON(){const t=super.toJSON();return t.position=this.position.toJSON(),t}static get className(){return"RenameOperation"}static fromJSON(t,e){return new dc($s.fromJSON(t.position,e),t.oldName,t.newName,t.baseVersion)}}class uc extends Qa{constructor(t,e,n,i,o){super(o),this.root=t,this.key=e,this.oldValue=n,this.newValue=i}get type(){return null===this.oldValue?"addRootAttribute":null===this.newValue?"removeRootAttribute":"changeRootAttribute"}clone(){return new uc(this.root,this.key,this.oldValue,this.newValue,this.baseVersion)}getReversed(){return new uc(this.root,this.key,this.newValue,this.oldValue,this.baseVersion+1)}_validate(){if(this.root!=this.root.root||this.root.is("documentFragment"))throw new Gn.b("rootattribute-operation-not-a-root: The element to change is not a root element.",{root:this.root,key:this.key});if(null!==this.oldValue&&this.root.getAttribute(this.key)!==this.oldValue)throw new Gn.b("rootattribute-operation-wrong-old-value: Changed node has different attribute value than operation's old attribute value.",{root:this.root,key:this.key});if(null===this.oldValue&&null!==this.newValue&&this.root.hasAttribute(this.key))throw new Gn.b("rootattribute-operation-attribute-exists: The attribute with given key already exists.",{root:this.root,key:this.key})}_execute(){null!==this.newValue?this.root._setAttribute(this.key,this.newValue):this.root._removeAttribute(this.key)}toJSON(){const t=super.toJSON();return t.root=this.root.toJSON(),t}static get className(){return"RootAttributeOperation"}static fromJSON(t,e){if(!e.getRoot(t.root))throw new Gn.b("rootattribute-operation-fromjson-no-root: Cannot create RootAttributeOperation. Root with specified name does not exist.",{rootName:t.root});return new uc(e.getRoot(t.root),t.key,t.oldValue,t.newValue,t.baseVersion)}}class hc extends Qa{constructor(t,e,n,i,o){super(o),this.sourcePosition=t.clone(),this.sourcePosition.stickiness="toPrevious",this.howMany=e,this.targetPosition=n.clone(),this.targetPosition.stickiness="toNext",this.graveyardPosition=i.clone()}get type(){return"merge"}get deletionPosition(){return new $s(this.sourcePosition.root,this.sourcePosition.path.slice(0,-1))}get movedRange(){const t=this.sourcePosition.getShiftedBy(Number.POSITIVE_INFINITY);return new Gs(this.sourcePosition,t)}clone(){return new this.constructor(this.sourcePosition,this.howMany,this.targetPosition,this.graveyardPosition,this.baseVersion)}getReversed(){const t=this.targetPosition._getTransformedByMergeOperation(this),e=this.sourcePosition.path.slice(0,-1),n=new $s(this.sourcePosition.root,e)._getTransformedByMergeOperation(this),i=new fc(t,this.howMany,this.graveyardPosition,this.baseVersion+1);return i.insertionPosition=n,i}_validate(){const t=this.sourcePosition.parent,e=this.targetPosition.parent;if(!(t&&t.is("element")&&t.parent))throw new Gn.b("merge-operation-source-position-invalid: Merge source position is invalid.");if(!(e&&e.is("element")&&e.parent))throw new Gn.b("merge-operation-target-position-invalid: Merge target position is invalid.");if(this.howMany!=t.maxOffset)throw new Gn.b("merge-operation-how-many-invalid: Merge operation specifies wrong number of nodes to move.")}_execute(){const t=this.sourcePosition.parent;Xa(Gs._createIn(t),this.targetPosition),Xa(Gs._createOn(t),this.graveyardPosition)}toJSON(){const t=super.toJSON();return t.sourcePosition=t.sourcePosition.toJSON(),t.targetPosition=t.targetPosition.toJSON(),t.graveyardPosition=t.graveyardPosition.toJSON(),t}static get className(){return"MergeOperation"}static fromJSON(t,e){const n=$s.fromJSON(t.sourcePosition,e),i=$s.fromJSON(t.targetPosition,e),o=$s.fromJSON(t.graveyardPosition,e);return new this(n,t.howMany,i,o,t.baseVersion)}}class fc extends Qa{constructor(t,e,n,i){super(i),this.splitPosition=t.clone(),this.splitPosition.stickiness="toNext",this.howMany=e,this.insertionPosition=fc.getInsertionPosition(t),this.insertionPosition.stickiness="toNone",this.graveyardPosition=n?n.clone():null,this.graveyardPosition&&(this.graveyardPosition.stickiness="toNext")}get type(){return"split"}get moveTargetPosition(){const t=this.insertionPosition.path.slice();return t.push(0),new $s(this.insertionPosition.root,t)}get movedRange(){const t=this.splitPosition.getShiftedBy(Number.POSITIVE_INFINITY);return new Gs(this.splitPosition,t)}clone(){const t=new this.constructor(this.splitPosition,this.howMany,this.graveyardPosition,this.baseVersion);return t.insertionPosition=this.insertionPosition,t}getReversed(){const t=this.splitPosition.root.document.graveyard,e=new $s(t,[0]);return new hc(this.moveTargetPosition,this.howMany,this.splitPosition,e,this.baseVersion+1)}_validate(){const t=this.splitPosition.parent,e=this.splitPosition.offset;if(!t||t.maxOffset<e)throw new Gn.b("split-operation-position-invalid: Split position is invalid.");if(!t.parent)throw new Gn.b("split-operation-split-in-root: Cannot split root element.");if(this.howMany!=t.maxOffset-this.splitPosition.offset)throw new Gn.b("split-operation-how-many-invalid: Split operation specifies wrong number of nodes to move.");if(this.graveyardPosition&&!this.graveyardPosition.nodeAfter)throw new Gn.b("split-operation-graveyard-position-invalid: Graveyard position invalid.")}_execute(){const t=this.splitPosition.parent;if(this.graveyardPosition)Xa(Gs._createFromPositionAndShift(this.graveyardPosition,1),this.insertionPosition);else{const e=t._clone();Ja(this.insertionPosition,e)}Xa(new Gs($s._createAt(t,this.splitPosition.offset),$s._createAt(t,t.maxOffset)),this.moveTargetPosition)}toJSON(){const t=super.toJSON();return t.splitPosition=this.splitPosition.toJSON(),t.insertionPosition=this.insertionPosition.toJSON(),this.graveyardPosition&&(t.graveyardPosition=this.graveyardPosition.toJSON()),t}static get className(){return"SplitOperation"}static getInsertionPosition(t){const e=t.path.slice(0,-1);return e[e.length-1]++,new $s(t.root,e)}static fromJSON(t,e){const n=$s.fromJSON(t.splitPosition,e),i=$s.fromJSON(t.insertionPosition,e),o=t.graveyardPosition?$s.fromJSON(t.graveyardPosition,e):null,r=new this(n,t.howMany,o,t.baseVersion);return r.insertionPosition=i,r}}class mc extends Hs{constructor(t,e,n="main"){super(e),this._doc=t,this.rootName=n}get document(){return this._doc}is(t,e){return e?"rootElement"==t&&e==this.name||super.is(t,e):"rootElement"==t||super.is(t)}toJSON(){return this.rootName}}class pc{constructor(t,e){this.model=t,this.batch=e}createText(t,e){return new zs(t,e)}createElement(t,e){return new Hs(t,e)}createDocumentFragment(){return new Ka}insert(t,e,n=0){if(this._assertWriterUsedCorrectly(),t instanceof zs&&""==t.data)return;const i=$s._createAt(e,n);if(t.parent){if(kc(t.root,i.root))return void this.move(Gs._createOn(t),i);if(t.root.document)throw new Error("model-writer-insert-forbidden-move: Cannot move a node from a document to a different tree.");this.remove(t)}const o=i.root.document?i.root.document.version:null,r=new cc(i,t,o);if(t instanceof zs&&(r.shouldReceiveAttributes=!0),this.batch.addOperation(r),this.model.applyOperation(r),t instanceof Ka)for(const[e,n]of t.markers){const t=$s._createAt(n.root,0),o=new Gs(n.start._getCombined(t,i),n.end._getCombined(t,i));this.addMarker(e,{range:o,usingOperation:!0,affectsData:!0})}}insertText(t,e,n,i){e instanceof Ka||e instanceof Hs||e instanceof $s?this.insert(this.createText(t),e,n):this.insert(this.createText(t,e),n,i)}insertElement(t,e,n,i){e instanceof Ka||e instanceof Hs||e instanceof $s?this.insert(this.createElement(t),e,n):this.insert(this.createElement(t,e),n,i)}append(t,e){this.insert(t,e,"end")}appendText(t,e,n){e instanceof Ka||e instanceof Hs?this.insert(this.createText(t),e,"end"):this.insert(this.createText(t,e),n,"end")}appendElement(t,e,n){e instanceof Ka||e instanceof Hs?this.insert(this.createElement(t),e,"end"):this.insert(this.createElement(t,e),n,"end")}setAttribute(t,e,n){if(this._assertWriterUsedCorrectly(),n instanceof Gs){const i=n.getMinimalFlatRanges();for(const n of i)gc(this,t,e,n)}else bc(this,t,e,n)}setAttributes(t,e){for(const[n,i]of Vs(t))this.setAttribute(n,i,e)}removeAttribute(t,e){if(this._assertWriterUsedCorrectly(),e instanceof Gs){const n=e.getMinimalFlatRanges();for(const e of n)gc(this,t,null,e)}else bc(this,t,null,e)}clearAttributes(t){this._assertWriterUsedCorrectly();const e=t=>{for(const e of t.getAttributeKeys())this.removeAttribute(e,t)};if(t instanceof Gs)for(const n of t.getItems())e(n);else e(t)}move(t,e,n){if(this._assertWriterUsedCorrectly(),!(t instanceof Gs))throw new Gn.b("writer-move-invalid-range: Invalid range to move.");if(!t.isFlat)throw new Gn.b("writer-move-range-not-flat: Range to move is not flat.");const i=$s._createAt(e,n);if(i.isEqual(t.start))return;if(this._addOperationForAffectedMarkers("move",t),!kc(t.root,i.root))throw new Gn.b("writer-move-different-document: Range is going to be moved between different documents.");const o=t.root.document?t.root.document.version:null,r=new ac(t.start,t.end.offset-t.start.offset,i,o);this.batch.addOperation(r),this.model.applyOperation(r)}remove(t){this._assertWriterUsedCorrectly();const e=(t instanceof Gs?t:Gs._createOn(t)).getMinimalFlatRanges().reverse();for(const t of e)this._addOperationForAffectedMarkers("move",t),_c(t.start,t.end.offset-t.start.offset,this.batch,this.model)}merge(t){this._assertWriterUsedCorrectly();const e=t.nodeBefore,n=t.nodeAfter;if(this._addOperationForAffectedMarkers("merge",t),!(e instanceof Hs))throw new Gn.b("writer-merge-no-element-before: Node before merge position must be an element.");if(!(n instanceof Hs))throw new Gn.b("writer-merge-no-element-after: Node after merge position must be an element.");t.root.document?this._merge(t):this._mergeDetached(t)}createPositionFromPath(t,e,n){return this.model.createPositionFromPath(t,e,n)}createPositionAt(t,e){return this.model.createPositionAt(t,e)}createPositionAfter(t){return this.model.createPositionAfter(t)}createPositionBefore(t){return this.model.createPositionBefore(t)}createRange(t,e){return this.model.createRange(t,e)}createRangeIn(t){return this.model.createRangeIn(t)}createRangeOn(t){return this.model.createRangeOn(t)}createSelection(t,e,n){return this.model.createSelection(t,e,n)}_mergeDetached(t){const e=t.nodeBefore,n=t.nodeAfter;this.move(Gs._createIn(n),$s._createAt(e,"end")),this.remove(n)}_merge(t){const e=$s._createAt(t.nodeBefore,"end"),n=$s._createAt(t.nodeAfter,0),i=t.root.document.graveyard,o=new $s(i,[0]),r=t.root.document.version,s=new hc(n,t.nodeAfter.maxOffset,e,o,r);this.batch.addOperation(s),this.model.applyOperation(s)}rename(t,e){if(this._assertWriterUsedCorrectly(),!(t instanceof Hs))throw new Gn.b("writer-rename-not-element-instance: Trying to rename an object which is not an instance of Element.");const n=t.root.document?t.root.document.version:null,i=new dc($s._createBefore(t),t.name,e,n);this.batch.addOperation(i),this.model.applyOperation(i)}split(t,e){this._assertWriterUsedCorrectly();let n,i,o=t.parent;if(!o.parent)throw new Gn.b("writer-split-element-no-parent: Element with no parent can not be split.");if(e||(e=o.parent),!t.parent.getAncestors({includeSelf:!0}).includes(e))throw new Gn.b("writer-split-invalid-limit-element: Limit element is not a position ancestor.");do{const e=o.root.document?o.root.document.version:null,r=o.maxOffset-t.offset,s=new fc(t,r,null,e);this.batch.addOperation(s),this.model.applyOperation(s),n||i||(n=o,i=t.parent.nextSibling),o=(t=this.createPositionAfter(t.parent)).parent}while(o!==e);return{position:t,range:new Gs($s._createAt(n,"end"),$s._createAt(i,0))}}wrap(t,e){if(this._assertWriterUsedCorrectly(),!t.isFlat)throw new Gn.b("writer-wrap-range-not-flat: Range to wrap is not flat.");const n=e instanceof Hs?e:new Hs(e);if(n.childCount>0)throw new Gn.b("writer-wrap-element-not-empty: Element to wrap with is not empty.");if(null!==n.parent)throw new Gn.b("writer-wrap-element-attached: Element to wrap with is already attached to tree model.");this.insert(n,t.start);const i=new Gs(t.start.getShiftedBy(1),t.end.getShiftedBy(1));this.move(i,$s._createAt(n,0))}unwrap(t){if(this._assertWriterUsedCorrectly(),null===t.parent)throw new Gn.b("writer-unwrap-element-no-parent: Trying to unwrap an element which has no parent.");this.move(Gs._createIn(t),this.createPositionAfter(t)),this.remove(t)}addMarker(t,e){if(this._assertWriterUsedCorrectly(),!e||"boolean"!=typeof e.usingOperation)throw new Gn.b("writer-addMarker-no-usingOperation: The options.usingOperation parameter is required when adding a new marker.");const n=e.usingOperation,i=e.range,o=void 0!==e.affectsData&&e.affectsData;if(this.model.markers.has(t))throw new Gn.b("writer-addMarker-marker-exists: Marker with provided name already exists.");if(!i)throw new Gn.b("writer-addMarker-no-range: Range parameter is required when adding a new marker.");return n?(wc(this,t,null,i,o),this.model.markers.get(t)):this.model.markers._set(t,i,n,o)}updateMarker(t,e){this._assertWriterUsedCorrectly();const n="string"==typeof t?t:t.name,i=this.model.markers.get(n);if(!i)throw new Gn.b("writer-updateMarker-marker-not-exists: Marker with provided name does not exists.");if(!e)return void this.model.markers._refresh(i);const o="boolean"==typeof e.usingOperation,r="boolean"==typeof e.affectsData,s=r?e.affectsData:i.affectsData;if(!o&&!e.range&&!r)throw new Gn.b("writer-updateMarker-wrong-options: One of the options is required - provide range, usingOperations or affectsData.");const a=i.getRange(),c=e.range?e.range:a;o&&e.usingOperation!==i.managedUsingOperations?e.usingOperation?wc(this,n,null,c,s):(wc(this,n,a,null,s),this.model.markers._set(n,c,void 0,s)):i.managedUsingOperations?wc(this,n,a,c,s):this.model.markers._set(n,c,void 0,s)}removeMarker(t){this._assertWriterUsedCorrectly();const e="string"==typeof t?t:t.name;if(!this.model.markers.has(e))throw new Gn.b("writer-removeMarker-no-marker: Trying to remove marker which does not exist.");const n=this.model.markers.get(e);n.managedUsingOperations?wc(this,e,n.getRange(),null,n.affectsData):this.model.markers._remove(e)}setSelection(t,e,n){this._assertWriterUsedCorrectly(),this.model.document.selection._setTo(t,e,n)}setSelectionFocus(t,e){this._assertWriterUsedCorrectly(),this.model.document.selection._setFocus(t,e)}setSelectionAttribute(t,e){if(this._assertWriterUsedCorrectly(),"string"==typeof t)this._setSelectionAttribute(t,e);else for(const[e,n]of Vs(t))this._setSelectionAttribute(e,n)}removeSelectionAttribute(t){if(this._assertWriterUsedCorrectly(),"string"==typeof t)this._removeSelectionAttribute(t);else for(const e of t)this._removeSelectionAttribute(e)}overrideSelectionGravity(){return this.model.document.selection._overrideGravity()}restoreSelectionGravity(t){this.model.document.selection._restoreGravity(t)}_setSelectionAttribute(t,e){const n=this.model.document.selection;if(n.isCollapsed&&n.anchor.parent.isEmpty){const i=sa._getStoreAttributeKey(t);this.setAttribute(i,e,n.anchor.parent)}n._setAttribute(t,e)}_removeSelectionAttribute(t){const e=this.model.document.selection;if(e.isCollapsed&&e.anchor.parent.isEmpty){const n=sa._getStoreAttributeKey(t);this.removeAttribute(n,e.anchor.parent)}e._removeAttribute(t)}_assertWriterUsedCorrectly(){if(this.model._currentWriter!==this)throw new Gn.b("writer-incorrect-use: Trying to use a writer outside the change() block.")}_addOperationForAffectedMarkers(t,e){for(const n of this.model.markers){if(!n.managedUsingOperations)continue;const i=n.getRange();let o=!1;if("move"==t)o=e.containsPosition(i.start)||e.start.isEqual(i.start)||e.containsPosition(i.end)||e.end.isEqual(i.end);else{const t=e.nodeBefore,n=e.nodeAfter,r=i.start.parent==t&&i.start.isAtEnd,s=i.end.parent==n&&0==i.end.offset;o=r||s}o&&this.updateMarker(n.name,{range:i})}}}function gc(t,e,n,i){const o=t.model,r=o.document;let s,a,c,l=i.start;for(const t of i.getWalker({shallow:!0}))c=t.item.getAttribute(e),s&&a!=c&&(a!=n&&d(),l=s),s=t.nextPosition,a=c;function d(){const i=new Gs(l,s),c=i.root.document?r.version:null,d=new rc(i,e,a,n,c);t.batch.addOperation(d),o.applyOperation(d)}s instanceof $s&&s!=l&&a!=n&&d()}function bc(t,e,n,i){const o=t.model,r=o.document,s=i.getAttribute(e);let a,c;if(s!=n){if(i.root===i){const t=i.document?r.version:null;c=new uc(i,e,s,n,t)}else{const o=(a=new Gs($s._createBefore(i),t.createPositionAfter(i))).root.document?r.version:null;c=new rc(a,e,s,n,o)}t.batch.addOperation(c),o.applyOperation(c)}}function wc(t,e,n,i,o){const r=t.model,s=r.document,a=new lc(e,n,i,r.markers,o,s.version);t.batch.addOperation(a),r.applyOperation(a)}function _c(t,e,n,i){let o;if(t.root.document){const n=i.document,r=new $s(n.graveyard,[0]);o=new ac(t,e,r,n.version)}else o=new sc(t,e);n.addOperation(o),i.applyOperation(o)}function kc(t,e){return t===e||t instanceof mc&&e instanceof mc}class vc{constructor(t){this._markerCollection=t,this._changesInElement=new Map,this._elementSnapshots=new Map,this._changedMarkers=new Map,this._changeCount=0,this._cachedChanges=null,this._cachedChangesWithGraveyard=null}get isEmpty(){return 0==this._changesInElement.size&&0==this._changedMarkers.size}bufferOperation(t){switch(t.type){case"insert":if(this._isInInsertedElement(t.position.parent))return;this._markInsert(t.position.parent,t.position.offset,t.nodes.maxOffset);break;case"addAttribute":case"removeAttribute":case"changeAttribute":for(const e of t.range.getItems())this._isInInsertedElement(e.parent)||this._markAttribute(e);break;case"remove":case"move":case"reinsert":{if(t.sourcePosition.isEqual(t.targetPosition)||t.sourcePosition.getShiftedBy(t.howMany).isEqual(t.targetPosition))return;const e=this._isInInsertedElement(t.sourcePosition.parent),n=this._isInInsertedElement(t.targetPosition.parent);e||this._markRemove(t.sourcePosition.parent,t.sourcePosition.offset,t.howMany),n||this._markInsert(t.targetPosition.parent,t.getMovedRangeStart().offset,t.howMany);break}case"rename":{if(this._isInInsertedElement(t.position.parent))return;this._markRemove(t.position.parent,t.position.offset,1),this._markInsert(t.position.parent,t.position.offset,1);const e=Gs._createFromPositionAndShift(t.position,1);for(const t of this._markerCollection.getMarkersIntersectingRange(e)){const e=t.getRange();this.bufferMarkerChange(t.name,e,e,t.affectsData)}break}case"split":{const e=t.splitPosition.parent;this._isInInsertedElement(e)||this._markRemove(e,t.splitPosition.offset,t.howMany),this._isInInsertedElement(t.insertionPosition.parent)||this._markInsert(t.insertionPosition.parent,t.insertionPosition.offset,1),t.graveyardPosition&&this._markRemove(t.graveyardPosition.parent,t.graveyardPosition.offset,1);break}case"merge":{const e=t.sourcePosition.parent;this._isInInsertedElement(e.parent)||this._markRemove(e.parent,e.startOffset,1);const n=t.graveyardPosition.parent;this._markInsert(n,t.graveyardPosition.offset,1);const i=t.targetPosition.parent;this._isInInsertedElement(i)||this._markInsert(i,t.targetPosition.offset,e.maxOffset);break}}this._cachedChanges=null}bufferMarkerChange(t,e,n,i){const o=this._changedMarkers.get(t);o?(o.newRange=n,o.affectsData=i,null==o.oldRange&&null==o.newRange&&this._changedMarkers.delete(t)):this._changedMarkers.set(t,{oldRange:e,newRange:n,affectsData:i})}getMarkersToRemove(){const t=[];for(const[e,n]of this._changedMarkers)null!=n.oldRange&&t.push({name:e,range:n.oldRange});return t}getMarkersToAdd(){const t=[];for(const[e,n]of this._changedMarkers)null!=n.newRange&&t.push({name:e,range:n.newRange});return t}getChangedMarkers(){return Array.from(this._changedMarkers).map(t=>({name:t[0],data:{oldRange:t[1].oldRange,newRange:t[1].newRange}}))}hasDataChanges(){for(const[,t]of this._changedMarkers)if(t.affectsData)return!0;return this._changesInElement.size>0}getChanges(t={includeChangesInGraveyard:!1}){if(this._cachedChanges)return t.includeChangesInGraveyard?this._cachedChangesWithGraveyard.slice():this._cachedChanges.slice();const e=[];for(const t of this._changesInElement.keys()){const n=this._changesInElement.get(t).sort((t,e)=>t.offset===e.offset?t.type!=e.type?"remove"==t.type?-1:1:0:t.offset<e.offset?-1:1),i=this._elementSnapshots.get(t),o=yc(t.getChildren()),r=xc(i.length,n);let s=0,a=0;for(const n of r)if("i"===n)e.push(this._getInsertDiff(t,s,o[s].name)),s++;else if("r"===n)e.push(this._getRemoveDiff(t,s,i[a].name)),a++;else if("a"===n){const n=o[s].attributes,r=i[a].attributes;let c;if("$text"==o[s].name)c=new Gs($s._createAt(t,s),$s._createAt(t,s+1));else{const e=t.offsetToIndex(s);c=new Gs($s._createAt(t,s),$s._createAt(t.getChild(e),0))}e.push(...this._getAttributesDiff(c,r,n)),s++,a++}else s++,a++}e.sort((t,e)=>t.position.root!=e.position.root?t.position.root.rootName<e.position.root.rootName?-1:1:t.position.isEqual(e.position)?t.changeCount-e.changeCount:t.position.isBefore(e.position)?-1:1);for(let t=1;t<e.length;t++){const n=e[t-1],i=e[t],o="remove"==n.type&&"remove"==i.type&&"$text"==n.name&&"$text"==i.name&&n.position.isEqual(i.position),r="insert"==n.type&&"insert"==i.type&&"$text"==n.name&&"$text"==i.name&&n.position.parent==i.position.parent&&n.position.offset+n.length==i.position.offset,s="attribute"==n.type&&"attribute"==i.type&&n.position.parent==i.position.parent&&n.range.isFlat&&i.range.isFlat&&n.position.offset+n.length==i.position.offset&&n.attributeKey==i.attributeKey&&n.attributeOldValue==i.attributeOldValue&&n.attributeNewValue==i.attributeNewValue;(o||r||s)&&(e[t-1].length++,s&&(e[t-1].range.end=e[t-1].range.end.getShiftedBy(1)),e.splice(t,1),t--)}for(const t of e)delete t.changeCount,"attribute"==t.type&&(delete t.position,delete t.length);return this._changeCount=0,this._cachedChangesWithGraveyard=e.slice(),this._cachedChanges=e.slice().filter(Ac),t.includeChangesInGraveyard?this._cachedChangesWithGraveyard:this._cachedChanges}reset(){this._changesInElement.clear(),this._elementSnapshots.clear(),this._changedMarkers.clear(),this._cachedChanges=null}_markInsert(t,e,n){const i={type:"insert",offset:e,howMany:n,count:this._changeCount++};this._markChange(t,i)}_markRemove(t,e,n){const i={type:"remove",offset:e,howMany:n,count:this._changeCount++};this._markChange(t,i),this._removeAllNestedChanges(t,e,n)}_markAttribute(t){const e={type:"attribute",offset:t.startOffset,howMany:t.offsetSize,count:this._changeCount++};this._markChange(t.parent,e)}_markChange(t,e){this._makeSnapshot(t);const n=this._getChangesForElement(t);this._handleChange(e,n),n.push(e);for(let t=0;t<n.length;t++)n[t].howMany<1&&(n.splice(t,1),t--)}_getChangesForElement(t){let e;return this._changesInElement.has(t)?e=this._changesInElement.get(t):(e=[],this._changesInElement.set(t,e)),e}_makeSnapshot(t){this._elementSnapshots.has(t)||this._elementSnapshots.set(t,yc(t.getChildren()))}_handleChange(t,e){t.nodesToHandle=t.howMany;for(const n of e){const i=t.offset+t.howMany,o=n.offset+n.howMany;if("insert"==t.type&&("insert"==n.type&&(t.offset<=n.offset?n.offset+=t.howMany:t.offset<o&&(n.howMany+=t.nodesToHandle,t.nodesToHandle=0)),"remove"==n.type&&t.offset<n.offset&&(n.offset+=t.howMany),"attribute"==n.type))if(t.offset<=n.offset)n.offset+=t.howMany;else if(t.offset<o){const o=n.howMany;n.howMany=t.offset-n.offset,e.unshift({type:"attribute",offset:i,howMany:o-n.howMany,count:this._changeCount++})}if("remove"==t.type){if("insert"==n.type)if(i<=n.offset)n.offset-=t.howMany;else if(i<=o)if(t.offset<n.offset){const e=i-n.offset;n.offset=t.offset,n.howMany-=e,t.nodesToHandle-=e}else n.howMany-=t.nodesToHandle,t.nodesToHandle=0;else if(t.offset<=n.offset)t.nodesToHandle-=n.howMany,n.howMany=0;else if(t.offset<o){const e=o-t.offset;n.howMany-=e,t.nodesToHandle-=e}if("remove"==n.type&&(i<=n.offset?n.offset-=t.howMany:t.offset<n.offset&&(t.nodesToHandle+=n.howMany,n.howMany=0)),"attribute"==n.type)if(i<=n.offset)n.offset-=t.howMany;else if(t.offset<n.offset){const e=i-n.offset;n.offset=t.offset,n.howMany-=e}else if(t.offset<o)if(i<=o){const i=n.howMany;n.howMany=t.offset-n.offset;const o=i-n.howMany-t.nodesToHandle;e.unshift({type:"attribute",offset:t.offset,howMany:o,count:this._changeCount++})}else n.howMany-=o-t.offset}if("attribute"==t.type){if("insert"==n.type)if(t.offset<n.offset&&i>n.offset){if(i>o){const t={type:"attribute",offset:o,howMany:i-o,count:this._changeCount++};this._handleChange(t,e),e.push(t)}t.nodesToHandle=n.offset-t.offset,t.howMany=t.nodesToHandle}else t.offset>=n.offset&&t.offset<o&&(i>o?(t.nodesToHandle=i-o,t.offset=o):t.nodesToHandle=0);if("remove"==n.type&&t.offset<n.offset&&i>n.offset){const o={type:"attribute",offset:n.offset,howMany:i-n.offset,count:this._changeCount++};this._handleChange(o,e),e.push(o),t.nodesToHandle=n.offset-t.offset,t.howMany=t.nodesToHandle}"attribute"==n.type&&(t.offset>=n.offset&&i<=o?(t.nodesToHandle=0,t.howMany=0,t.offset=0):t.offset<=n.offset&&i>=o&&(n.howMany=0))}}t.howMany=t.nodesToHandle,delete t.nodesToHandle}_getInsertDiff(t,e,n){return{type:"insert",position:$s._createAt(t,e),name:n,length:1,changeCount:this._changeCount++}}_getRemoveDiff(t,e,n){return{type:"remove",position:$s._createAt(t,e),name:n,length:1,changeCount:this._changeCount++}}_getAttributesDiff(t,e,n){const i=[];n=new Map(n);for(const[o,r]of e){const e=n.has(o)?n.get(o):null;e!==r&&i.push({type:"attribute",position:t.start,range:t.clone(),length:1,attributeKey:o,attributeOldValue:r,attributeNewValue:e,changeCount:this._changeCount++}),n.delete(o)}for(const[e,o]of n)i.push({type:"attribute",position:t.start,range:t.clone(),length:1,attributeKey:e,attributeOldValue:null,attributeNewValue:o,changeCount:this._changeCount++});return i}_isInInsertedElement(t){const e=t.parent;if(!e)return!1;const n=this._changesInElement.get(e),i=t.startOffset;if(n)for(const t of n)if("insert"==t.type&&i>=t.offset&&i<t.offset+t.howMany)return!0;return this._isInInsertedElement(e)}_removeAllNestedChanges(t,e,n){const i=new Gs($s._createAt(t,e),$s._createAt(t,e+n));for(const t of i.getItems({shallow:!0}))t.is("element")&&(this._elementSnapshots.delete(t),this._changesInElement.delete(t),this._removeAllNestedChanges(t,0,t.maxOffset))}}function yc(t){const e=[];for(const n of t)if(n.is("text"))for(let t=0;t<n.data.length;t++)e.push({name:"$text",attributes:new Map(n.getAttributes())});else e.push({name:n.name,attributes:new Map(n.getAttributes())});return e}function xc(t,e){const n=[];let i=0,o=0;for(const t of e)t.offset>i&&(n.push(..."e".repeat(t.offset-i).split("")),o+=t.offset-i),"insert"==t.type?(n.push(..."i".repeat(t.howMany).split("")),i=t.offset+t.howMany):"remove"==t.type?(n.push(..."r".repeat(t.howMany).split("")),i=t.offset,o+=t.howMany):(n.push(..."a".repeat(t.howMany).split("")),i=t.offset+t.howMany,o+=t.howMany);return o<t&&n.push(..."e".repeat(t-o).split("")),n}function Ac(t){const e=t.position&&"$graveyard"==t.position.root.rootName,n=t.range&&"$graveyard"==t.range.root.rootName;return!e&&!n}class Cc{constructor(){this._operations=[],this._undoPairs=new Map,this._undoneOperations=new Set}addOperation(t){this._operations.includes(t)||this._operations.push(t)}getOperations(t=0,e=Number.POSITIVE_INFINITY){return t<0?[]:this._operations.slice(t,e)}getOperation(t){return this._operations[t]}setOperationAsUndone(t,e){this._undoPairs.set(e,t),this._undoneOperations.add(t)}isUndoingOperation(t){return this._undoPairs.has(t)}isUndoneOperation(t){return this._undoneOperations.has(t)}getUndoneOperation(t){return this._undoPairs.get(t)}}function Tc(t,e){return function(t){return!!t&&1==t.length&&/[\ud800-\udbff]/.test(t)}(t.charAt(e-1))&&function(t){return!!t&&1==t.length&&/[\udc00-\udfff]/.test(t)}(t.charAt(e))}function Pc(t,e){return function(t){return!!t&&1==t.length&&/[\u0300-\u036f\u1ab0-\u1aff\u1dc0-\u1dff\u20d0-\u20ff\ufe20-\ufe2f]/.test(t)}(t.charAt(e))}const Mc="$graveyard";class Ec{constructor(t){this.model=t,this.version=0,this.history=new Cc(this),this.selection=new sa(this),this.roots=new oo({idProperty:"rootName"}),this.differ=new vc(t.markers),this._postFixers=new Set,this._hasSelectionChangedFromTheLastChangeBlock=!1,this.createRoot("$root",Mc),this.listenTo(t,"applyOperation",(t,e)=>{const n=e[0];if(n.isDocumentOperation&&n.baseVersion!==this.version)throw new Gn.b("model-document-applyOperation-wrong-version: Only operations with matching versions can be applied.",{operation:n})},{priority:"highest"}),this.listenTo(t,"applyOperation",(t,e)=>{const n=e[0];n.isDocumentOperation&&this.differ.bufferOperation(n)},{priority:"high"}),this.listenTo(t,"applyOperation",(t,e)=>{const n=e[0];n.isDocumentOperation&&(this.version++,this.history.addOperation(n))},{priority:"low"}),this.listenTo(this.selection,"change",()=>{this._hasSelectionChangedFromTheLastChangeBlock=!0}),this.listenTo(t.markers,"update",(t,e,n,i)=>{this.differ.bufferMarkerChange(e.name,n,i,e.affectsData),null===n&&e.on("change",(t,n)=>{this.differ.bufferMarkerChange(e.name,n,e.getRange(),e.affectsData)})})}get graveyard(){return this.getRoot(Mc)}createRoot(t="$root",e="main"){if(this.roots.get(e))throw new Gn.b("model-document-createRoot-name-exists: Root with specified name already exists.",{name:e});const n=new mc(this,t,e);return this.roots.add(n),n}destroy(){this.selection.destroy(),this.stopListening()}getRoot(t="main"){return this.roots.get(t)}getRootNames(){return Array.from(this.roots,t=>t.rootName).filter(t=>t!=Mc)}registerPostFixer(t){this._postFixers.add(t)}toJSON(){const t=ui(this);return t.selection="[engine.model.DocumentSelection]",t.model="[engine.model.Model]",t}_handleChangeBlock(t){this._hasDocumentChangedFromTheLastChangeBlock()&&(this._callPostFixers(t),this.differ.hasDataChanges()?this.fire("change:data",t.batch):this.fire("change",t.batch),this.differ.reset()),this._hasSelectionChangedFromTheLastChangeBlock=!1}_hasDocumentChangedFromTheLastChangeBlock(){return!this.differ.isEmpty||this._hasSelectionChangedFromTheLastChangeBlock}_getDefaultRoot(){for(const t of this.roots)if(t!==this.graveyard)return t;return this.graveyard}_getDefaultRange(){const t=this._getDefaultRoot(),e=this.model,n=e.schema,i=e.createPositionFromPath(t,[0]);return n.getNearestSelectionRange(i)||e.createRange(i)}_validateSelectionRange(t){return Sc(t.start)&&Sc(t.end)}_callPostFixers(t){let e=!1;do{for(const n of this._postFixers)if(e=n(t))break}while(e)}}function Sc(t){const e=t.textNode;if(e){const n=e.data,i=t.offset-e.startOffset;return!Tc(n,i)&&!Pc(n,i)}return!0}ci(Ec,ei);class Ic{constructor(){this._markers=new Map}[Symbol.iterator](){return this._markers.values()}has(t){return this._markers.has(t)}get(t){return this._markers.get(t)||null}_set(t,e,n=!1,i=!1){const o=t instanceof Nc?t.name:t,r=this._markers.get(o);if(r){const t=r.getRange();let s=!1;return t.isEqual(e)||(r._attachLiveRange(oa.fromRange(e)),s=!0),n!=r.managedUsingOperations&&(r._managedUsingOperations=n,s=!0),"boolean"==typeof i&&i!=r.affectsData&&(r._affectsData=i,s=!0),s&&this.fire("update:"+o,r,t,e),r}const s=oa.fromRange(e),a=new Nc(o,s,n,i);return this._markers.set(o,a),this.fire("update:"+o,a,null,e),a}_remove(t){const e=t instanceof Nc?t.name:t,n=this._markers.get(e);return!!n&&(this._markers.delete(e),this.fire("update:"+e,n,n.getRange(),null),this._destroyMarker(n),!0)}_refresh(t){const e=t instanceof Nc?t.name:t,n=this._markers.get(e);if(!n)throw new Gn.b("markercollection-refresh-marker-not-exists: Marker with provided name does not exists.");const i=n.getRange();this.fire("update:"+e,n,i,i,n.managedUsingOperations,n.affectsData)}*getMarkersAtPosition(t){for(const e of this)e.getRange().containsPosition(t)&&(yield e)}*getMarkersIntersectingRange(t){for(const e of this)null!==e.getRange().getIntersection(t)&&(yield e)}destroy(){for(const t of this._markers.values())this._destroyMarker(t);this._markers=null,this.stopListening()}*getMarkersGroup(t){for(const e of this._markers.values())e.name.startsWith(t+":")&&(yield e)}_destroyMarker(t){t.stopListening(),t._detachLiveRange()}}ci(Ic,ei);class Nc{constructor(t,e,n,i){this.name=t,this._liveRange=this._attachLiveRange(e),this._managedUsingOperations=n,this._affectsData=i}get managedUsingOperations(){if(!this._liveRange)throw new Gn.b("marker-destroyed: Cannot use a destroyed marker instance.");return this._managedUsingOperations}get affectsData(){if(!this._liveRange)throw new Gn.b("marker-destroyed: Cannot use a destroyed marker instance.");return this._affectsData}getStart(){if(!this._liveRange)throw new Gn.b("marker-destroyed: Cannot use a destroyed marker instance.");return this._liveRange.start.clone()}getEnd(){if(!this._liveRange)throw new Gn.b("marker-destroyed: Cannot use a destroyed marker instance.");return this._liveRange.end.clone()}getRange(){if(!this._liveRange)throw new Gn.b("marker-destroyed: Cannot use a destroyed marker instance.");return this._liveRange.toRange()}_attachLiveRange(t){return this._liveRange&&this._detachLiveRange(),t.delegate("change:range").to(this),t.delegate("change:content").to(this),this._liveRange=t,t}_detachLiveRange(){this._liveRange.stopDelegating("change:range",this),this._liveRange.stopDelegating("change:content",this),this._liveRange.detach(),this._liveRange=null}}ci(Nc,ei);class Oc extends $s{constructor(t,e,n="toNone"){if(super(t,e,n),!this.root.is("rootElement"))throw new Gn.b("model-liveposition-root-not-rootelement: LivePosition's root has to be an instance of RootElement.");(function(){this.listenTo(this.root.document.model,"applyOperation",(t,e)=>{const n=e[0];n.isDocumentOperation&&function(t){const e=this.getTransformedByOperation(t);if(!this.isEqual(e)){const t=this.toPosition();this.path=e.path,this.root=e.root,this.fire("change",t)}}.call(this,n)},{priority:"low"})}).call(this)}detach(){this.stopListening()}toPosition(){return new $s(this.root,this.path.slice(),this.stickiness)}static fromPosition(t,e){return new this(t.root,t.path.slice(),e||t.stickiness)}}ci(Oc,ei);class Rc{constructor(t,e,n){this.model=t,this.writer=e,this.position=n,this.canMergeWith=new Set([this.position.parent]),this.schema=t.schema,this._filterAttributesOf=[],this._affectedStart=null,this._affectedEnd=null}handleNodes(t,e){t=Array.from(t);for(let n=0;n<t.length;n++){const i=t[n];this._handleNode(i,{isFirst:0===n&&e.isFirst,isLast:n===t.length-1&&e.isLast})}this.schema.removeDisallowedAttributes(this._filterAttributesOf,this.writer),this._filterAttributesOf=[]}getSelectionRange(){return this.nodeToSelect?Gs._createOn(this.nodeToSelect):this.model.schema.getNearestSelectionRange(this.position)}getAffectedRange(){return this._affectedStart?new Gs(this._affectedStart,this._affectedEnd):null}destroy(){this._affectedStart&&this._affectedStart.detach(),this._affectedEnd&&this._affectedEnd.detach()}_handleNode(t,e){if(this.schema.isObject(t))return void this._handleObject(t,e);this._checkAndSplitToAllowedPosition(t,e)?(this._insert(t),this._mergeSiblingsOf(t,e)):this._handleDisallowedNode(t,e)}_handleObject(t,e){this._checkAndSplitToAllowedPosition(t)?this._insert(t):this._tryAutoparagraphing(t,e)}_handleDisallowedNode(t,e){t.is("element")?this.handleNodes(t.getChildren(),e):this._tryAutoparagraphing(t,e)}_insert(t){if(!this.schema.checkChild(this.position,t))return void bs.a.error("insertcontent-wrong-position: The node cannot be inserted on the given position.",{node:t,position:this.position});const e=Oc.fromPosition(this.position,"toNext");this._setAffectedBoundaries(this.position),this.writer.insert(t,this.position),this.position=e.toPosition(),e.detach(),this.schema.isObject(t)&&!this.schema.checkChild(this.position,"$text")?this.nodeToSelect=t:this.nodeToSelect=null,this._filterAttributesOf.push(t)}_setAffectedBoundaries(t){this._affectedStart||(this._affectedStart=Oc.fromPosition(t,"toPrevious")),this._affectedEnd&&!this._affectedEnd.isBefore(t)||(this._affectedEnd&&this._affectedEnd.detach(),this._affectedEnd=Oc.fromPosition(t,"toNext"))}_mergeSiblingsOf(t,e){if(!(t instanceof Hs))return;const n=this._canMergeLeft(t,e),i=this._canMergeRight(t,e),o=Oc._createBefore(t);o.stickiness="toNext";const r=Oc._createAfter(t);if(r.stickiness="toNext",n){const t=Oc.fromPosition(this.position);t.stickiness="toNext",this._affectedStart.isEqual(o)&&(this._affectedStart.detach(),this._affectedStart=Oc._createAt(o.nodeBefore,"end","toPrevious")),this.writer.merge(o),o.isEqual(this._affectedEnd)&&e.isLast&&(this._affectedEnd.detach(),this._affectedEnd=Oc._createAt(o.nodeBefore,"end","toNext")),this.position=t.toPosition(),t.detach()}if(i){this.position.isEqual(r)||bs.a.error("insertcontent-wrong-position-on-merge: The insertion position should equal the merge position"),this.position=$s._createAt(r.nodeBefore,"end");const t=Oc.fromPosition(this.position,"toPrevious");this._affectedEnd.isEqual(r)&&(this._affectedEnd.detach(),this._affectedEnd=Oc._createAt(r.nodeBefore,"end","toNext")),this.writer.merge(r),r.getShiftedBy(-1).isEqual(this._affectedStart)&&e.isFirst&&(this._affectedStart.detach(),this._affectedStart=Oc._createAt(r.nodeBefore,0,"toPrevious")),this.position=t.toPosition(),t.detach()}(n||i)&&this._filterAttributesOf.push(this.position.parent),o.detach(),r.detach()}_canMergeLeft(t,e){const n=t.previousSibling;return e.isFirst&&n instanceof Hs&&this.canMergeWith.has(n)&&this.model.schema.checkMerge(n,t)}_canMergeRight(t,e){const n=t.nextSibling;return e.isLast&&n instanceof Hs&&this.canMergeWith.has(n)&&this.model.schema.checkMerge(t,n)}_tryAutoparagraphing(t,e){const n=this.writer.createElement("paragraph");this._getAllowedIn(n,this.position.parent)&&this.schema.checkChild(n,t)&&(n._appendChild(t),this._handleNode(n,e))}_checkAndSplitToAllowedPosition(t){const e=this._getAllowedIn(t,this.position.parent);if(!e)return!1;for(;e!=this.position.parent;){if(this.schema.isLimit(this.position.parent))return!1;if(this.position.isAtStart){const t=this.position.parent;this.position=this.writer.createPositionBefore(t),t.isEmpty&&this.writer.remove(t)}else if(this.position.isAtEnd)this.position=this.writer.createPositionAfter(this.position.parent);else{const t=this.writer.createPositionAfter(this.position.parent);this._setAffectedBoundaries(this.position),this.writer.split(this.position),this.position=t,this.canMergeWith.add(this.position.nodeAfter)}}return!0}_getAllowedIn(t,e){return this.schema.checkChild(e,t)?e:e.parent?this._getAllowedIn(t,e.parent):null}}function Dc(t,e,n={}){if(e.isCollapsed)return;const i=e.getFirstRange();if("$graveyard"==i.root.rootName)return;const o=t.schema;t.change(t=>{if(!n.doNotResetEntireContent&&function(t,e){const n=t.getLimitElement(e);if(!e.containsEntireContent(n))return!1;const i=e.getFirstRange();if(i.start.parent==i.end.parent)return!1;return t.checkChild(n,"paragraph")}(o,e))return void function(t,e){const n=t.model.schema.getLimitElement(e);t.remove(t.createRangeIn(n)),Lc(t,t.createPositionAt(n,0),e)}(t,e);const r=i.start,s=Oc.fromPosition(i.end,"toNext");if(i.start.isTouching(i.end)||t.remove(i),n.leaveUnmerged||(!function t(e,n,i){const o=n.parent;const r=i.parent;if(o==r)return;if(e.model.schema.isLimit(o)||e.model.schema.isLimit(r))return;if(!function(t,e,n){const i=new Gs(t,e);for(const t of i.getWalker())if(n.isLimit(t.item))return!1;return!0}(n,i,e.model.schema))return;n=e.createPositionAfter(o);i=e.createPositionBefore(r);i.isEqual(n)||e.insert(r,n);e.merge(n);for(;i.parent.isEmpty;){const t=i.parent;i=e.createPositionBefore(t),e.remove(t)}t(e,n,i)}(t,r,s),o.removeDisallowedAttributes(r.parent.getChildren(),t)),jc(t,e,r),function(t,e){const n=t.checkChild(e,"$text"),i=t.checkChild(e,"paragraph");return!n&&i}(o,r)){const i=o.getNearestSelectionRange(r);n.doNotAutoparagraph&&i?jc(t,e,i):Lc(t,r,e)}s.detach()})}function Lc(t,e,n){const i=t.createElement("paragraph");t.insert(i,e),jc(t,n,t.createPositionAt(i,0))}function jc(t,e,n){e instanceof sa?t.setSelection(n):e.setTo(n)}const Vc=' ,.?!:;"-()';function Bc(t,e,n={}){const i=t.schema,o="backward"!=n.direction,r=n.unit?n.unit:"character",s=e.focus,a=new qs({boundaries:function(t,e){const n=t.root,i=$s._createAt(n,e?"end":0);return e?new Gs(t,i):new Gs(i,t)}(s,o),singleCharacters:!0,direction:o?"forward":"backward"}),c={walker:a,schema:i,isForward:o,unit:r};let l;for(;l=a.next();){if(l.done)return;const n=zc(c,l.value);if(n)return void(e instanceof sa?t.change(t=>{t.setSelectionFocus(n)}):e.setFocus(n))}}function zc(t,e){if("text"==e.type)return"word"===t.unit?function(t,e){let n=t.position.textNode;if(n){let i=t.position.offset-n.startOffset;for(;!Fc(n.data,i,e)&&!Uc(n,i,e);){t.next();const o=e?t.position.nodeAfter:t.position.nodeBefore;if(o&&o.is("text")){const i=o.data.charAt(e?0:o.data.length-1);Vc.includes(i)||(t.next(),n=t.position.textNode)}i=t.position.offset-n.startOffset}}return t.position}(t.walker,t.isForward):function(t,e){const n=t.position.textNode;if(n){const i=n.data;let o=t.position.offset-n.startOffset;for(;Tc(i,o)||"character"==e&&Pc(i,o);)t.next(),o=t.position.offset-n.startOffset}return t.position}(t.walker,t.unit,t.isForward);if(e.type==(t.isForward?"elementStart":"elementEnd")){if(t.schema.isObject(e.item))return $s._createAt(e.item,t.isForward?"after":"before");if(t.schema.checkChild(e.nextPosition,"$text"))return e.nextPosition}else{if(t.schema.isLimit(e.item))return void t.walker.skip(()=>!0);if(t.schema.checkChild(e.nextPosition,"$text"))return e.nextPosition}}function Fc(t,e,n){const i=e+(n?0:-1);return Vc.includes(t.charAt(i))}function Uc(t,e,n){return e===(n?t.endOffset:0)}function Hc(t,e){const n=[];Array.from(t.getItems({direction:"backward"})).map(t=>e.createRangeOn(t)).filter(e=>{return(e.start.isAfter(t.start)||e.start.isEqual(t.start))&&(e.end.isBefore(t.end)||e.end.isEqual(t.end))}).forEach(t=>{n.push(t.start.parent),e.remove(t)}),n.forEach(t=>{let n=t;for(;n.parent&&n.isEmpty;){const t=e.createRangeOn(n);n=n.parent,e.remove(t)}})}function qc(t){t.document.registerPostFixer(e=>(function(t,e){const n=e.document.selection,i=e.schema,o=[];let r=!1;for(const t of n.getRanges()){const e=Wc(t,i);e?(o.push(e),r=!0):o.push(t)}if(r){let e=o;if(o.length>1){const t=o[0].start,n=o[o.length-1].end;e=[new Gs(t,n)]}t.setSelection(e,{backward:n.isBackward})}})(e,t))}function Wc(t,e){return t.isCollapsed?function(t,e){const n=t.start,i=e.getNearestSelectionRange(n);if(!i)return null;const o=i.start;if(n.isEqual(o))return null;if(o.nodeAfter&&e.isLimit(o.nodeAfter))return new Gs(o,$s._createAfter(o.nodeAfter));return new Gs(o)}(t,e):function(t,e){const n=t.start,i=t.end,o=e.checkChild(n,"$text"),r=e.checkChild(i,"$text"),s=e.getLimitElement(n),a=e.getLimitElement(i);if(s===a){if(o&&r)return null;if(function(t,e,n){const i=t.nodeAfter&&!n.isLimit(t.nodeAfter)||n.checkChild(t,"$text"),o=e.nodeBefore&&!n.isLimit(e.nodeBefore)||n.checkChild(e,"$text");return i||o}(n,i,e)){const t=n.nodeAfter&&e.isObject(n.nodeAfter),o=t?null:e.getNearestSelectionRange(n,"forward"),r=i.nodeBefore&&e.isObject(i.nodeBefore),s=r?null:e.getNearestSelectionRange(i,"backward"),a=o?o.start:n,c=s?s.start:i;return new Gs(a,c)}}const c=s&&!s.is("rootElement"),l=a&&!a.is("rootElement");if(c||l){const t=n.nodeAfter&&i.nodeBefore&&n.nodeAfter.parent===i.nodeBefore.parent,o=c&&(!t||!$c(n.nodeAfter,e)),r=l&&(!t||!$c(i.nodeBefore,e));let d=n,u=i;return o&&(d=$s._createBefore(Yc(s,e))),r&&(u=$s._createAfter(Yc(a,e))),new Gs(d,u)}return null}(t,e)}function Yc(t,e){let n=t,i=n;for(;e.isLimit(i)&&i.parent;)n=i,i=i.parent;return n}function $c(t,e){return t&&e.isObject(t)}class Gc{constructor(){this.markers=new Ic,this.document=new Ec(this),this.schema=new Ia,this._pendingChanges=[],this._currentWriter=null,["insertContent","deleteContent","modifySelection","getSelectedContent","applyOperation"].forEach(t=>this.decorate(t)),this.on("applyOperation",(t,e)=>{e[0]._validate()},{priority:"highest"}),this.schema.register("$root",{isLimit:!0}),this.schema.register("$block",{allowIn:"$root",isBlock:!0}),this.schema.register("$text",{allowIn:"$block",isInline:!0}),this.schema.register("$clipboardHolder",{allowContentOf:"$root",isLimit:!0}),this.schema.extend("$text",{allowIn:"$clipboardHolder"}),this.schema.register("$marker"),this.schema.addChildCheck((t,e)=>{if("$marker"===e.name)return!0}),qc(this)}change(t){return 0===this._pendingChanges.length?(this._pendingChanges.push({batch:new Ga,callback:t}),this._runPendingChanges()[0]):t(this._currentWriter)}enqueueChange(t,e){"string"==typeof t?t=new Ga(t):"function"==typeof t&&(e=t,t=new Ga),this._pendingChanges.push({batch:t,callback:e}),1==this._pendingChanges.length&&this._runPendingChanges()}applyOperation(t){t._execute()}insertContent(t,e,n){return function(t,e,n,i){return t.change(o=>{let r;const s=(r=n?n instanceof ta||n instanceof sa?n:o.createSelection(n,i):t.document.selection).getFirstPosition();r.isCollapsed||t.deleteContent(r,{doNotAutoparagraph:!0});const a=new Rc(t,o,s);let c;c=e.is("documentFragment")?e.getChildren():[e],a.handleNodes(c,{isFirst:!0,isLast:!0});const l=a.getSelectionRange();l?r instanceof sa?o.setSelection(l):r.setTo(l):bs.a.warn("insertcontent-no-range: Cannot determine a proper selection range after insertion.");const d=a.getAffectedRange()||t.createRange(s);return a.destroy(),d})}(this,t,e,n)}deleteContent(t,e){Dc(this,t,e)}modifySelection(t,e){Bc(this,t,e)}getSelectedContent(t){return function(t,e){return t.change(t=>{const n=t.createDocumentFragment(),i=e.getFirstRange();if(!i||i.isCollapsed)return n;const o=i.start.root,r=i.start.getCommonPath(i.end),s=o.getNodeByPath(r);let a;const c=(a=i.start.parent==i.end.parent?i:t.createRange(t.createPositionAt(s,i.start.path[r.length]),t.createPositionAt(s,i.end.path[r.length]+1))).end.offset-a.start.offset;for(const e of a.getItems({shallow:!0}))e.is("textProxy")?t.appendText(e.data,e.getAttributes(),n):t.append(e._clone(!0),n);if(a!=i){const e=i._getTransformedByMove(a.start,t.createPositionAt(n,0),c)[0],o=t.createRange(t.createPositionAt(n,0),e.start);Hc(t.createRange(e.end,t.createPositionAt(n,"end")),t),Hc(o,t)}return n})}(this,t)}hasContent(t,e){const n=t instanceof Hs?Gs._createIn(t):t;if(n.isCollapsed)return!1;for(const t of this.markers.getMarkersIntersectingRange(n))if(t.affectsData)return!0;const{ignoreWhitespaces:i=!1}=e||{};for(const t of n.getItems())if(t.is("textProxy")){if(!i)return!0;if(-1!==t.data.search(/\S/))return!0}else if(this.schema.isObject(t))return!0;return!1}createPositionFromPath(t,e,n){return new $s(t,e,n)}createPositionAt(t,e){return $s._createAt(t,e)}createPositionAfter(t){return $s._createAfter(t)}createPositionBefore(t){return $s._createBefore(t)}createRange(t,e){return new Gs(t,e)}createRangeIn(t){return Gs._createIn(t)}createRangeOn(t){return Gs._createOn(t)}createSelection(t,e,n){return new ta(t,e,n)}createBatch(){return new Ga}destroy(){this.document.destroy(),this.stopListening()}_runPendingChanges(){const t=[];for(this.fire("_beforeChanges");this._pendingChanges.length;){const e=this._pendingChanges[0].batch;this._currentWriter=new pc(this,e);const n=this._pendingChanges[0].callback(this._currentWriter);t.push(n),this.document._handleChangeBlock(this._currentWriter),this._pendingChanges.shift(),this._currentWriter=null}return this.fire("_afterChanges"),t}}ci(Gc,Fi);class Qc{constructor(){this._listener=Object.create(lr)}listenTo(t){this._listener.listenTo(t,"keydown",(t,e)=>{this._listener.fire("_keydown:"+wo(e),e)})}set(t,e,n={}){const i=_o(t),o=n.priority;this._listener.listenTo(this._listener,"_keydown:"+i,(t,n)=>{e(n,()=>{n.preventDefault(),n.stopPropagation(),t.stop()}),t.return=!0},{priority:o})}press(t){return!!this._listener.fire("_keydown:"+wo(t),t)}destroy(){this._listener.stopListening()}}class Kc extends Qc{constructor(t){super(),this.editor=t}set(t,e,n={}){if("string"==typeof e){const t=e;e=((e,n)=>{this.editor.execute(t),n()})}super.set(t,e,n)}}class Jc{constructor(t){const e=this.constructor.builtinPlugins;this.config=new Yn(t,this.constructor.defaultConfig),this.config.define("plugins",e),this.plugins=new Ca(this,e),this.commands=new Ta,this.locale=new Ma(this.config.get("language")),this.t=this.locale.t,this.set("state","initializing"),this.once("ready",()=>this.state="ready",{priority:"high"}),this.once("destroy",()=>this.state="destroyed",{priority:"high"}),this.set("isReadOnly",!1),this.model=new Gc,this.data=new qa(this.model),this.editing=new Aa(this.model),this.editing.view.document.bind("isReadOnly").to(this),this.conversion=new Wa([this.editing.downcastDispatcher,this.data.downcastDispatcher],this.data.upcastDispatcher),this.conversion.addAlias("dataDowncast",this.data.downcastDispatcher),this.conversion.addAlias("editingDowncast",this.editing.downcastDispatcher),this.keystrokes=new Kc(this),this.keystrokes.listenTo(this.editing.view.document)}initPlugins(){const t=this.config,e=t.get("plugins")||[],n=t.get("removePlugins")||[],i=t.get("extraPlugins")||[];return this.plugins.init(e.concat(i),n)}destroy(){let t=Promise.resolve();return"initializing"==this.state&&(t=new Promise(t=>this.once("ready",t))),t.then(()=>{this.fire("destroy"),this.stopListening(),this.commands.destroy()}).then(()=>this.plugins.destroy()).then(()=>{this.model.destroy(),this.data.destroy(),this.editing.destroy(),this.keystrokes.destroy()})}execute(...t){this.commands.execute(...t)}}ci(Jc,Fi);var Zc={setData(t){this.data.set(t)},getData(t){return this.data.get(t)}};var Xc={updateSourceElement(){if(!this.sourceElement)throw new Gn.b("editor-missing-sourceelement: Cannot update the source element of a detached editor.");!function(t,e){t instanceof HTMLTextAreaElement&&(t.value=e),t.innerHTML=e}(this.sourceElement,this.data.get())}};class tl{getHtml(t){const e=document.implementation.createHTMLDocument("").createElement("div");return e.appendChild(t),e.innerHTML}}class el{constructor(){this._domParser=new DOMParser,this._domConverter=new rr({blockFiller:jo}),this._htmlWriter=new tl}toData(t){const e=this._domConverter.viewToDom(t,document);return this._htmlWriter.getHtml(e)}toView(t){const e=this._toDom(t);return this._domConverter.domToView(e)}_toDom(t){const e=this._domParser.parseFromString(t,"text/html"),n=e.createDocumentFragment(),i=e.body.childNodes;for(;i.length>0;)n.appendChild(i[0]);return n}}class nl{constructor(t){this.editor=t,this._components=new Map}*names(){for(const t of this._components.values())yield t.originalName}add(t,e){if(this.has(t))throw new Gn.b("componentfactory-item-exists: The item already exists in the component factory.",{name:t});this._components.set(il(t),{callback:e,originalName:t})}create(t){if(!this.has(t))throw new Gn.b("componentfactory-item-missing: The required component is not registered in the factory.",{name:t});return this._components.get(il(t)).callback(this.editor.locale)}has(t){return this._components.has(il(t))}}function il(t){return String(t).toLowerCase()}class ol{constructor(){this.set("isFocused",!1),this.set("focusedElement",null),this._elements=new Set,this._nextEventLoopTimeout=null}add(t){if(this._elements.has(t))throw new Gn.b("focusTracker-add-element-already-exist");this.listenTo(t,"focus",()=>this._focus(t),{useCapture:!0}),this.listenTo(t,"blur",()=>this._blur(),{useCapture:!0}),this._elements.add(t)}remove(t){t===this.focusedElement&&this._blur(t),this._elements.has(t)&&(this.stopListening(t),this._elements.delete(t))}destroy(){this.stopListening()}_focus(t){clearTimeout(this._nextEventLoopTimeout),this.focusedElement=t,this.isFocused=!0}_blur(){clearTimeout(this._nextEventLoopTimeout),this._nextEventLoopTimeout=setTimeout(()=>{this.focusedElement=null,this.isFocused=!1},0)}}ci(ol,lr),ci(ol,Fi);class rl{constructor(t){this.editor=t,this.componentFactory=new nl(t),this.focusTracker=new ol,this._editableElements=new Map,this.listenTo(t.editing.view.document,"layoutChanged",()=>this.update())}get element(){return null}update(){this.fire("update")}destroy(){this.stopListening(),this.focusTracker.destroy(),this._editableElements=new Map}getEditableElement(t="main"){return this._editableElements.get(t)}getEditableElementsNames(){return this._editableElements.keys()}}ci(rl,ei);n(53);const sl=new WeakMap;function al(t){const{view:e,element:n,text:i,isDirectHost:o=!0}=t,r=e.document;sl.has(r)||(sl.set(r,new Map),r.registerPostFixer(t=>ll(r,t))),sl.get(r).set(n,{text:i,isDirectHost:o}),e.change(t=>ll(r,t))}function cl(t,e){return!!e.hasClass("ck-placeholder")&&(t.removeClass("ck-placeholder",e),!0)}function ll(t,e){const n=sl.get(t);let i=!1;for(const[t,o]of n)dl(e,t,o)&&(i=!0);return i}function dl(t,e,n){const{text:i,isDirectHost:o}=n,r=o?e:function(t){if(1===t.childCount){const e=t.getChild(0);if(e.is("element")&&!e.is("uiElement"))return e}return null}(e);let s=!1;return!!r&&(n.hostElement=r,r.getAttribute("data-placeholder")!==i&&(t.setAttribute("data-placeholder",i,r),s=!0),!function(t){const e=t.document;if(!e)return!1;const n=!Array.from(t.getChildren()).some(t=>!t.is("uiElement"));if(!e.isFocused&&n)return!0;const i=e.selection.anchor;return!(!n||!i||i.parent===t)}(r)?cl(t,r)&&(s=!0):function(t,e){return!e.hasClass("ck-placeholder")&&(t.addClass("ck-placeholder",e),!0)}(t,r)&&(s=!0),s)}class ul{constructor(){this._replacedElements=[]}replace(t,e){this._replacedElements.push({element:t,newElement:e}),t.style.display="none",e&&t.parentNode.insertBefore(e,t.nextSibling)}restore(){this._replacedElements.forEach(({element:t,newElement:e})=>{t.style.display="",e&&e.remove()}),this._replacedElements=[]}}class hl extends rl{constructor(t,e){super(t),this.view=e,this._toolbarConfig=function(t){return Array.isArray(t)?{items:t}:t?Object.assign({items:[]},t):{items:[]}}(t.config.get("toolbar")),this._elementReplacer=new ul}get element(){return this.view.element}init(t){const e=this.editor,n=this.view,i=e.editing.view,o=n.editable,r=i.document.getRoot();o.name=r.rootName,n.render();const s=o.element;this._editableElements.set(o.name,s),this.focusTracker.add(s),n.editable.bind("isFocused").to(this.focusTracker),i.attachDomRoot(s),t&&this._elementReplacer.replace(t,this.element),this._initPlaceholder(),this._initToolbar(),this.fire("ready")}destroy(){const t=this.view,e=this.editor.editing.view;this._elementReplacer.restore(),e.detachDomRoot(t.editable.name),t.destroy(),super.destroy()}_initToolbar(){const t=this.editor,e=this.view,n=t.editing.view;e.stickyPanel.bind("isActive").to(this.focusTracker,"isFocused"),e.stickyPanel.limiterElement=e.element,this._toolbarConfig.viewportTopOffset&&(e.stickyPanel.viewportTopOffset=this._toolbarConfig.viewportTopOffset),e.toolbar.fillFromConfig(this._toolbarConfig.items,this.componentFactory),function({origin:t,originKeystrokeHandler:e,originFocusTracker:n,toolbar:i,beforeFocus:o,afterBlur:r}){n.add(i.element),e.set("Alt+F10",(t,e)=>{n.isFocused&&!i.focusTracker.isFocused&&(o&&o(),i.focus(),e())}),i.keystrokes.set("Esc",(e,n)=>{i.focusTracker.isFocused&&(t.focus(),r&&r(),n())})}({origin:n,originFocusTracker:this.focusTracker,originKeystrokeHandler:t.keystrokes,toolbar:e.toolbar})}_initPlaceholder(){const t=this.editor,e=t.editing.view,n=e.document.getRoot(),i=t.sourceElement,o=t.config.get("placeholder")||i&&"textarea"===i.tagName.toLowerCase()&&i.getAttribute("placeholder");o&&al({view:e,element:n,text:o,isDirectHost:!1})}}class fl extends oo{constructor(t){super({idProperty:"viewUid"}),this.on("add",(t,e,n)=>{e.isRendered||e.render(),e.element&&this._parentElement&&this._parentElement.insertBefore(e.element,this._parentElement.children[n])}),this.on("remove",(t,e)=>{e.element&&this._parentElement&&e.element.remove()}),this.locale=t,this._parentElement=null}destroy(){this.map(t=>t.destroy())}setParent(t){this._parentElement=t}delegate(...t){if(!t.length||!function(t){return t.every(t=>"string"==typeof t)}(t))throw new Gn.b("ui-viewcollection-delegate-wrong-events: All event names must be strings.");return{to:e=>{for(const n of this)for(const i of t)n.delegate(i).to(e);this.on("add",(n,i)=>{for(const n of t)i.delegate(n).to(e)}),this.on("remove",(n,i)=>{for(const n of t)i.stopDelegating(n,e)})}}}}ci(oo,Fi);const ml="http://www.w3.org/1999/xhtml";class pl{constructor(t){Object.assign(this,Al(xl(t))),this._isRendered=!1,this._revertData=null}render(){const t=this._renderNode({intoFragment:!0});return this._isRendered=!0,t}apply(t){return this._revertData={children:[],bindings:[],attributes:{}},this._renderNode({node:t,isApplying:!0,revertData:this._revertData}),t}revert(t){if(!this._revertData)throw new Gn.b("ui-template-revert-not-applied: Attempting to revert a template which has not been applied yet.");this._revertTemplateFromNode(t,this._revertData)}*getViews(){yield*function*t(e){if(e.children)for(const n of e.children)El(n)?yield n:Sl(n)&&(yield*t(n))}(this)}static bind(t,e){return{to:(n,i)=>new bl({eventNameOrFunction:n,attribute:n,observable:t,emitter:e,callback:i}),if:(n,i,o)=>new wl({observable:t,emitter:e,attribute:n,valueIfTrue:i,callback:o})}}static extend(t,e){t._isRendered&&bs.a.warn("template-extend-render: Attempting to extend a template which has already been rendered."),function t(e,n){n.attributes&&(e.attributes||(e.attributes={}),Pl(e.attributes,n.attributes));n.eventListeners&&(e.eventListeners||(e.eventListeners={}),Pl(e.eventListeners,n.eventListeners));n.text&&e.text.push(...n.text);if(n.children&&n.children.length){if(e.children.length!=n.children.length)throw new Gn.b("ui-template-extend-children-mismatch: The number of children in extended definition does not match.");let i=0;for(const o of n.children)t(e.children[i++],o)}}(t,Al(xl(e)))}_renderNode(t){let e;if(e=t.node?this.tag&&this.text:this.tag?this.text:!this.text)throw new Gn.b('ui-template-wrong-syntax: Node definition must have either "tag" or "text" when rendering a new Node.');return this.text?this._renderText(t):this._renderElement(t)}_renderElement(t){let e=t.node;return e||(e=t.node=document.createElementNS(this.ns||ml,this.tag)),this._renderAttributes(t),this._renderElementChildren(t),this._setUpListeners(t),e}_renderText(t){let e=t.node;return e?t.revertData.text=e.textContent:e=t.node=document.createTextNode(""),_l(this.text)?this._bindToObservable({schema:this.text,updater:function(t){return{set(e){t.textContent=e},remove(){t.textContent=""}}}(e),data:t}):e.textContent=this.text.join(""),e}_renderAttributes(t){let e,n,i,o;if(!this.attributes)return;const r=t.node,s=t.revertData;for(e in this.attributes)if(i=r.getAttribute(e),n=this.attributes[e],s&&(s.attributes[e]=i),o=z(n[0])&&n[0].ns?n[0].ns:null,_l(n)){const a=o?n[0].value:n;s&&Nl(e)&&a.unshift(i),this._bindToObservable({schema:a,updater:vl(r,e,o),data:t})}else"style"==e&&"string"!=typeof n[0]?this._renderStyleAttribute(n[0],t):(s&&i&&Nl(e)&&n.unshift(i),Ml(n=n.map(t=>t&&t.value||t).reduce((t,e)=>t.concat(e),[]).reduce(Tl,""))||r.setAttributeNS(o,e,n))}_renderStyleAttribute(t,e){const n=e.node;for(const i in t){const o=t[i];_l(o)?this._bindToObservable({schema:[o],updater:yl(n,i),data:e}):n.style[i]=o}}_renderElementChildren(t){const e=t.node,n=t.intoFragment?document.createDocumentFragment():e,i=t.isApplying;let o=0;for(const r of this.children)if(Il(r)){if(!i){r.setParent(e);for(const t of r)n.appendChild(t.element)}}else if(El(r))i||(r.isRendered||r.render(),n.appendChild(r.element));else if(Zo(r))n.appendChild(r);else if(i){const e={children:[],bindings:[],attributes:{}};t.revertData.children.push(e),r._renderNode({node:n.childNodes[o++],isApplying:!0,revertData:e})}else n.appendChild(r.render());t.intoFragment&&e.appendChild(n)}_setUpListeners(t){if(this.eventListeners)for(const e in this.eventListeners){const n=this.eventListeners[e].map(n=>{const[i,o]=e.split("@");return n.activateDomEventListener(i,o,t)});t.revertData&&t.revertData.bindings.push(n)}}_bindToObservable({schema:t,updater:e,data:n}){const i=n.revertData;kl(t,e,n);const o=t.filter(t=>!Ml(t)).filter(t=>t.observable).map(i=>i.activateAttributeListener(t,e,n));i&&i.bindings.push(o)}_revertTemplateFromNode(t,e){for(const t of e.bindings)for(const e of t)e();if(e.text)t.textContent=e.text;else{for(const n in e.attributes){const i=e.attributes[n];null===i?t.removeAttribute(n):t.setAttribute(n,i)}for(let n=0;n<e.children.length;++n)this._revertTemplateFromNode(t.childNodes[n],e.children[n])}}}ci(pl,ei);class gl{constructor(t){Object.assign(this,t)}getValue(t){const e=this.observable[this.attribute];return this.callback?this.callback(e,t):e}activateAttributeListener(t,e,n){const i=()=>kl(t,e,n);return this.emitter.listenTo(this.observable,"change:"+this.attribute,i),()=>{this.emitter.stopListening(this.observable,"change:"+this.attribute,i)}}}class bl extends gl{activateDomEventListener(t,e,n){const i=(t,n)=>{e&&!n.target.matches(e)||("function"==typeof this.eventNameOrFunction?this.eventNameOrFunction(n):this.observable.fire(this.eventNameOrFunction,n))};return this.emitter.listenTo(n.node,t,i),()=>{this.emitter.stopListening(n.node,t,i)}}}class wl extends gl{getValue(t){return!Ml(super.getValue(t))&&(this.valueIfTrue||!0)}}function _l(t){return!!t&&(t.value&&(t=t.value),Array.isArray(t)?t.some(_l):t instanceof gl)}function kl(t,e,{node:n}){let i=function(t,e){return t.map(t=>t instanceof gl?t.getValue(e):t)}(t,n);Ml(i=1==t.length&&t[0]instanceof wl?i[0]:i.reduce(Tl,""))?e.remove():e.set(i)}function vl(t,e,n){return{set(i){t.setAttributeNS(n,e,i)},remove(){t.removeAttributeNS(n,e)}}}function yl(t,e){return{set(n){t.style[e]=n},remove(){t.style[e]=null}}}function xl(t){return qn(t,t=>{if(t&&(t instanceof gl||Sl(t)||El(t)||Il(t)))return t})}function Al(t){if("string"==typeof t?t=function(t){return{text:[t]}}(t):t.text&&function(t){Array.isArray(t.text)||(t.text=[t.text])}(t),t.on&&(t.eventListeners=function(t){for(const e in t)Cl(t,e);return t}(t.on),delete t.on),!t.text){t.attributes&&function(t){for(const e in t)t[e].value&&(t[e].value=[].concat(t[e].value)),Cl(t,e)}(t.attributes);const e=[];if(t.children)if(Il(t.children))e.push(t.children);else for(const n of t.children)Sl(n)||El(n)||Zo(n)?e.push(n):e.push(new pl(n));t.children=e}return t}function Cl(t,e){Array.isArray(t[e])||(t[e]=[t[e]])}function Tl(t,e){return Ml(e)?t:Ml(t)?e:`${t} ${e}`}function Pl(t,e){for(const n in e)t[n]?t[n].push(...e[n]):t[n]=e[n]}function Ml(t){return!t&&0!==t}function El(t){return t instanceof Ol}function Sl(t){return t instanceof pl}function Il(t){return t instanceof fl}function Nl(t){return"class"==t||"style"==t}n(56);class Ol{constructor(t){this.element=null,this.isRendered=!1,this.locale=t,this.t=t&&t.t,this._viewCollections=new oo,this._unboundChildren=this.createCollection(),this._viewCollections.on("add",(e,n)=>{n.locale=t}),this.decorate("render")}get bindTemplate(){return this._bindTemplate?this._bindTemplate:this._bindTemplate=pl.bind(this,this)}createCollection(){const t=new fl;return this._viewCollections.add(t),t}registerChild(t){gi(t)||(t=[t]);for(const e of t)this._unboundChildren.add(e)}deregisterChild(t){gi(t)||(t=[t]);for(const e of t)this._unboundChildren.remove(e)}setTemplate(t){this.template=new pl(t)}extendTemplate(t){pl.extend(this.template,t)}render(){if(this.isRendered)throw new Gn.b("ui-view-render-already-rendered: This View has already been rendered.");this.template&&(this.element=this.template.render(),this.registerChild(this.template.getViews())),this.isRendered=!0}destroy(){this.stopListening(),this._viewCollections.map(t=>t.destroy()),this.template&&this.template._revertData&&this.template.revert(this.element)}}ci(Ol,lr),ci(Ol,Fi);n(58);class Rl extends Ol{constructor(t){super(t),this.body=this.createCollection()}render(){super.render(),this._renderBodyCollection()}destroy(){return this._bodyCollectionContainer.remove(),super.destroy()}_renderBodyCollection(){const t=this._bodyCollectionContainer=new pl({tag:"div",attributes:{class:["ck","ck-reset_all","ck-body","ck-rounded-corners"]},children:this.body}).render();document.body.appendChild(t)}}n(60);class Dl extends Ol{constructor(t){super(t),this.set("text"),this.set("for");const e=this.bindTemplate;this.setTemplate({tag:"label",attributes:{class:["ck","ck-label"],for:e.to("for")},children:[{text:e.to("text")}]})}}class Ll extends Rl{constructor(t){super(t);const e=Jn();this.top=this.createCollection(),this.main=this.createCollection(),this._voiceLabelView=this._createVoiceLabel(e),this.setTemplate({tag:"div",attributes:{class:["ck","ck-reset","ck-editor","ck-rounded-corners"],role:"application",dir:"ltr",lang:t.language,"aria-labelledby":`ck-editor__aria-label_${e}`},children:[this._voiceLabelView,{tag:"div",attributes:{class:["ck","ck-editor__top","ck-reset_all"],role:"presentation"},children:this.top},{tag:"div",attributes:{class:["ck","ck-editor__main"],role:"presentation"},children:this.main}]})}_createVoiceLabel(t){const e=this.t,n=new Dl;return n.text=e("bv"),n.extendTemplate({attributes:{id:`ck-editor__aria-label_${t}`,class:"ck-voice-label"}}),n}}class jl extends Ol{constructor(t,e,n){super(t),this.setTemplate({tag:"div",attributes:{class:["ck","ck-content","ck-editor__editable","ck-rounded-corners"]}}),this.name=null,this.set("isFocused",!1),this._editableElement=n,this._hasExternalElement=!!this._editableElement,this._editingView=e}render(){super.render(),this._hasExternalElement?this.template.apply(this.element=this._editableElement):this._editableElement=this.element,this.on("change:isFocused",()=>this._updateIsFocusedClasses()),this._updateIsFocusedClasses()}destroy(){this._hasExternalElement&&this.template.revert(this._editableElement),super.destroy()}_updateIsFocusedClasses(){const t=this._editingView;function e(e){t.change(n=>{const i=t.document.getRoot(e.name);n.addClass(e.isFocused?"ck-focused":"ck-blurred",i),n.removeClass(e.isFocused?"ck-blurred":"ck-focused",i)})}t.isRenderingInProgress?function n(i){t.once("change:isRenderingInProgress",(t,o,r)=>{r?n(i):e(i)})}(this):e(this)}}class Vl extends jl{constructor(t,e,n){super(t,e,n),this.extendTemplate({attributes:{role:"textbox",class:"ck-editor__editable_inline"}})}render(){super.render();const t=this._editingView,e=this.t;t.change(n=>{const i=t.document.getRoot(this.name);n.setAttribute("aria-label",e("bw",[this.name]),i)})}}function Bl(t){return e=>e+t}n(62);const zl=Bl("px");class Fl extends Ol{constructor(t){super(t);const e=this.bindTemplate;this.set("isActive",!1),this.set("isSticky",!1),this.set("limiterElement",null),this.set("limiterBottomOffset",50),this.set("viewportTopOffset",0),this.set("_marginLeft",null),this.set("_isStickyToTheLimiter",!1),this.set("_hasViewportTopOffset",!1),this.content=this.createCollection(),this._contentPanelPlaceholder=new pl({tag:"div",attributes:{class:["ck","ck-sticky-panel__placeholder"],style:{display:e.to("isSticky",t=>t?"block":"none"),height:e.to("isSticky",t=>t?zl(this._panelRect.height):null)}}}).render(),this._contentPanel=new pl({tag:"div",attributes:{class:["ck","ck-sticky-panel__content",e.if("isSticky","ck-sticky-panel__content_sticky"),e.if("_isStickyToTheLimiter","ck-sticky-panel__content_sticky_bottom-limit")],style:{width:e.to("isSticky",t=>t?zl(this._contentPanelPlaceholder.getBoundingClientRect().width):null),top:e.to("_hasViewportTopOffset",t=>t?zl(this.viewportTopOffset):null),bottom:e.to("_isStickyToTheLimiter",t=>t?zl(this.limiterBottomOffset):null),marginLeft:e.to("_marginLeft")}},children:this.content}).render(),this.setTemplate({tag:"div",attributes:{class:["ck","ck-sticky-panel"]},children:[this._contentPanelPlaceholder,this._contentPanel]})}render(){super.render(),this._checkIfShouldBeSticky(),this.listenTo(nr.window,"scroll",()=>{this._checkIfShouldBeSticky()}),this.listenTo(this,"change:isActive",()=>{this._checkIfShouldBeSticky()})}_checkIfShouldBeSticky(){const t=this._panelRect=this._contentPanel.getBoundingClientRect();let e;this.limiterElement?(e=this._limiterRect=this.limiterElement.getBoundingClientRect(),this.isSticky=this.isActive&&e.top<this.viewportTopOffset&&this._panelRect.height+this.limiterBottomOffset<e.height):this.isSticky=!1,this.isSticky?(this._isStickyToTheLimiter=e.bottom<t.height+this.limiterBottomOffset+this.viewportTopOffset,this._hasViewportTopOffset=!this._isStickyToTheLimiter&&!!this.viewportTopOffset,this._marginLeft=this._isStickyToTheLimiter?null:zl(-nr.window.scrollX)):(this._isStickyToTheLimiter=!1,this._hasViewportTopOffset=!1,this._marginLeft=null)}}class Ul{constructor(t){if(Object.assign(this,t),t.actions&&t.keystrokeHandler)for(const e in t.actions){let n=t.actions[e];"string"==typeof n&&(n=[n]);for(const i of n)t.keystrokeHandler.set(i,(t,n)=>{this[e](),n()})}}get first(){return this.focusables.find(Hl)||null}get last(){return this.focusables.filter(Hl).slice(-1)[0]||null}get next(){return this._getFocusableItem(1)}get previous(){return this._getFocusableItem(-1)}get current(){let t=null;return null===this.focusTracker.focusedElement?null:(this.focusables.find((e,n)=>{const i=e.element===this.focusTracker.focusedElement;return i&&(t=n),i}),t)}focusFirst(){this._focus(this.first)}focusLast(){this._focus(this.last)}focusNext(){this._focus(this.next)}focusPrevious(){this._focus(this.previous)}_focus(t){t&&t.focus()}_getFocusableItem(t){const e=this.current,n=this.focusables.length;if(!n)return null;if(null===e)return this[1===t?"first":"last"];let i=(e+n+t)%n;do{const e=this.focusables.get(i);if(Hl(e))return e;i=(i+n+t)%n}while(i!==e);return null}}function Hl(t){return!(!t.focus||"none"==nr.window.getComputedStyle(t.element).display)}class ql extends Ol{constructor(t){super(t),this.setTemplate({tag:"span",attributes:{class:["ck","ck-toolbar__separator"]}})}}n(64);class Wl extends Ol{constructor(t){super(t);const e=this.bindTemplate;this.items=this.createCollection(),this.focusTracker=new ol,this.keystrokes=new Qc,this.set("isVertical",!1),this.set("class"),this._focusCycler=new Ul({focusables:this.items,focusTracker:this.focusTracker,keystrokeHandler:this.keystrokes,actions:{focusPrevious:["arrowleft","arrowup"],focusNext:["arrowright","arrowdown"]}}),this.setTemplate({tag:"div",attributes:{class:["ck","ck-toolbar",e.if("isVertical","ck-toolbar_vertical"),e.to("class")]},children:this.items,on:{mousedown:function(t){return t.bindTemplate.to(e=>{e.target===t.element&&e.preventDefault()})}(this)}})}render(){super.render();for(const t of this.items)this.focusTracker.add(t.element);this.items.on("add",(t,e)=>{this.focusTracker.add(e.element)}),this.items.on("remove",(t,e)=>{this.focusTracker.remove(e.element)}),this.keystrokes.listenTo(this.element)}focus(){this._focusCycler.focusFirst()}focusLast(){this._focusCycler.focusLast()}fillFromConfig(t,e){t.map(t=>{"|"==t?this.items.add(new ql):e.has(t)?this.items.add(e.create(t)):bs.a.warn("toolbarview-item-unavailable: The requested toolbar item is unavailable.",{name:t})})}}n(66);class Yl extends Ll{constructor(t,e){super(t),this.stickyPanel=new Fl(t),this.toolbar=new Wl(t),this.editable=new Vl(t,e)}render(){super.render(),this.stickyPanel.content.add(this.toolbar),this.top.add(this.stickyPanel),this.main.add(this.editable)}}class $l extends Jc{constructor(t,e){super(e),Wn(t)&&(this.sourceElement=t),this.data.processor=new el,this.model.document.createRoot(),this.ui=new hl(this,new Yl(this.locale,this.editing.view)),function(t){if(!W(t.updateSourceElement))throw new Gn.b("attachtoform-missing-elementapi-interface: Editor passed to attachToForm() must implement ElementApi.");const e=t.sourceElement;if(e&&"textarea"===e.tagName.toLowerCase()&&e.form){let n;const i=e.form,o=()=>t.updateSourceElement();W(i.submit)&&(n=i.submit,i.submit=(()=>{o(),n.apply(i)})),i.addEventListener("submit",o),t.on("destroy",()=>{i.removeEventListener("submit",o),n&&(i.submit=n)})}}(this)}destroy(){return this.sourceElement&&this.updateSourceElement(),this.ui.destroy(),super.destroy()}static create(t,e={}){return new Promise(n=>{const i=new this(t,e);n(i.initPlugins().then(()=>i.ui.init(Wn(t)?t:null)).then(()=>{if(!Wn(t)&&e.initialData)throw new Gn.b("editor-create-initial-data: The config.initialData option cannot be used together with initial data passed in Editor.create().");const n=e.initialData||function(t){return Wn(t)?function(t){return t instanceof HTMLTextAreaElement?t.value:t.innerHTML}(t):t}(t);return i.data.init(n)}).then(()=>i.fire("ready")).then(()=>i))})}}ci($l,Zc),ci($l,Xc);class Gl{constructor(t){this.editor=t}destroy(){this.stopListening()}}ci(Gl,Fi);class Ql{constructor(t){this.files=function(t){const e=t.files?Array.from(t.files):[],n=t.items?Array.from(t.items):[];if(e.length)return e;return n.filter(t=>"file"===t.kind).map(t=>t.getAsFile())}(t),this._native=t}get types(){return this._native.types}getData(t){return this._native.getData(t)}setData(t,e){this._native.setData(t,e)}}class Kl extends ts{constructor(t){super(t);const e=this.document;function n(t,n){n.preventDefault();const i=n.dropRange?[n.dropRange]:Array.from(e.selection.getRanges()),o=new Kn(e,"clipboardInput");e.fire(o,{dataTransfer:n.dataTransfer,targetRanges:i}),o.stop.called&&n.stopPropagation()}this.domEventType=["paste","copy","cut","drop","dragover"],this.listenTo(e,"paste",n,{priority:"low"}),this.listenTo(e,"drop",n,{priority:"low"})}onDomEvent(t){const e={dataTransfer:new Ql(t.clipboardData?t.clipboardData:t.dataTransfer)};"drop"==t.type&&(e.dropRange=function(t,e){const n=e.target.ownerDocument,i=e.clientX,o=e.clientY;let r;n.caretRangeFromPoint&&n.caretRangeFromPoint(i,o)?r=n.caretRangeFromPoint(i,o):e.rangeParent&&((r=n.createRange()).setStart(e.rangeParent,e.rangeOffset),r.collapse(!0));return r?t.domConverter.domRangeToView(r):t.document.selection.getFirstRange()}(this.view,t)),this.fire(t.type,t,e)}}const Jl=["figcaption","li"];class Zl extends Gl{static get pluginName(){return"Clipboard"}init(){const t=this.editor,e=t.model.document,n=t.editing.view,i=n.document;function o(n,o){const r=o.dataTransfer;o.preventDefault();const s=t.data.toView(t.model.getSelectedContent(e.selection));i.fire("clipboardOutput",{dataTransfer:r,content:s,method:n.name})}this._htmlDataProcessor=new el,n.addObserver(Kl),this.listenTo(i,"clipboardInput",e=>{t.isReadOnly&&e.stop()},{priority:"highest"}),this.listenTo(i,"clipboardInput",(t,e)=>{const i=e.dataTransfer;let o="";i.getData("text/html")?o=function(t){return t.replace(/<span(?: class="Apple-converted-space"|)>(\s+)<\/span>/g,(t,e)=>1==e.length?" ":e)}(i.getData("text/html")):i.getData("text/plain")&&(o=function(t){return(t=t.replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/\n\n/g,"</p><p>").replace(/\n/g,"<br>").replace(/^\s/,"&nbsp;").replace(/\s$/,"&nbsp;").replace(/\s\s/g," &nbsp;")).indexOf("</p><p>")>-1&&(t=`<p>${t}</p>`),t}(i.getData("text/plain"))),o=this._htmlDataProcessor.toView(o),this.fire("inputTransformation",{content:o,dataTransfer:i}),n.scrollToTheSelection()},{priority:"low"}),this.listenTo(this,"inputTransformation",(t,e)=>{if(!e.content.isEmpty){const t=this.editor.data,n=this.editor.model,i=t.toModel(e.content,"$clipboardHolder");if(0==i.childCount)return;n.insertContent(i)}},{priority:"low"}),this.listenTo(i,"copy",o,{priority:"low"}),this.listenTo(i,"cut",(e,n)=>{t.isReadOnly?n.preventDefault():o(e,n)},{priority:"low"}),this.listenTo(i,"clipboardOutput",(n,i)=>{i.content.isEmpty||(i.dataTransfer.setData("text/html",this._htmlDataProcessor.toData(i.content)),i.dataTransfer.setData("text/plain",function t(e){let n="";if(e.is("text")||e.is("textProxy"))n=e.data;else if(e.is("img")&&e.hasAttribute("alt"))n=e.getAttribute("alt");else{let i=null;for(const o of e.getChildren()){const e=t(o);i&&(i.is("containerElement")||o.is("containerElement"))&&(Jl.includes(i.name)||Jl.includes(o.name)?n+="\n":n+="\n\n"),n+=e,i=o}}return n}(i.content))),"cut"==i.method&&t.model.deleteContent(e.selection)},{priority:"low"})}}class Xl{constructor(t){this.editor=t,this.set("value",void 0),this.set("isEnabled",!1),this._disableStack=new Set,this.decorate("execute"),this.listenTo(this.editor.model.document,"change",()=>{this.refresh()}),this.on("execute",t=>{this.isEnabled||t.stop()},{priority:"high"}),this.listenTo(t,"change:isReadOnly",(t,e,n)=>{n?this.forceDisabled("readOnlyMode"):this.clearForceDisabled("readOnlyMode")})}refresh(){this.isEnabled=!0}forceDisabled(t){this._disableStack.add(t),1==this._disableStack.size&&(this.on("set:isEnabled",td,{priority:"highest"}),this.isEnabled=!1)}clearForceDisabled(t){this._disableStack.delete(t),0==this._disableStack.size&&(this.off("set:isEnabled",td),this.refresh())}execute(){}destroy(){this.stopListening()}}function td(t){t.return=!1,t.stop()}ci(Xl,Fi);class ed extends Xl{execute(){const t=this.editor.model,e=t.document;t.change(n=>{!function(t,e,n,i){const o=n.isCollapsed,r=n.getFirstRange(),s=r.start.parent,a=r.end.parent;if(i.isLimit(s)||i.isLimit(a))return void(o||s!=a||t.deleteContent(n));if(o)nd(e,r.start);else{const i=!(r.start.isAtStart&&r.end.isAtEnd),o=s==a;t.deleteContent(n,{leaveUnmerged:i}),i&&(o?nd(e,n.focus):e.setSelection(a,0))}}(this.editor.model,n,e.selection,t.schema),this.fire("afterExecute",{writer:n})})}}function nd(t,e){t.split(e),t.setSelection(e.parent.nextSibling,0)}class id extends hr{constructor(t){super(t);const e=this.document;e.on("keydown",(t,n)=>{if(this.isEnabled&&n.keyCode==bo.enter){let i;e.once("enter",t=>i=t,{priority:"highest"}),e.fire("enter",new Xr(e,n.domEvent,{isSoft:n.shiftKey})),i&&i.stop.called&&t.stop()}})}observe(){}}class od extends Gl{static get pluginName(){return"Enter"}init(){const t=this.editor,e=t.editing.view,n=e.document;e.addObserver(id),t.commands.add("enter",new ed(t)),this.listenTo(n,"enter",(n,i)=>{i.preventDefault(),i.isSoft||(t.execute("enter"),e.scrollToTheSelection())},{priority:"low"})}}class rd extends Xl{execute(){const t=this.editor.model,e=t.document;t.change(n=>{!function(t,e,n){const i=n.isCollapsed,o=n.getFirstRange(),r=o.start.parent,s=o.end.parent,a=r==s;if(i)sd(e,o.end);else{const i=!(o.start.isAtStart&&o.end.isAtEnd);t.deleteContent(n,{leaveUnmerged:i}),a?sd(e,n.focus):i&&e.setSelection(s,0)}}(t,n,e.selection),this.fire("afterExecute",{writer:n})})}refresh(){const t=this.editor.model,e=t.document;this.isEnabled=function(t,e){if(e.rangeCount>1)return!1;const n=e.anchor;if(!n||!t.checkChild(n,"softBreak"))return!1;const i=e.getFirstRange(),o=i.start.parent,r=i.end.parent;if((ad(o,t)||ad(r,t))&&o!==r)return!1;return!0}(t.schema,e.selection)}}function sd(t,e){const n=t.createElement("softBreak");t.insert(n,e),t.setSelection(n,"after")}function ad(t,e){return!t.is("rootElement")&&(e.isLimit(t)||ad(t.parent,e))}class cd extends Gl{static get pluginName(){return"ShiftEnter"}init(){const t=this.editor,e=t.model.schema,n=t.conversion,i=t.editing.view,o=i.document;e.register("softBreak",{allowWhere:"$text",isInline:!0}),n.for("upcast").elementToElement({model:"softBreak",view:"br"}),n.for("downcast").elementToElement({model:"softBreak",view:(t,e)=>e.createEmptyElement("br")}),i.addObserver(id),t.commands.add("shiftEnter",new rd(t)),this.listenTo(o,"enter",(e,n)=>{n.preventDefault(),n.isSoft&&(t.execute("shiftEnter"),i.scrollToTheSelection())},{priority:"low"})}}class ld{constructor(t,e=20){this.model=t,this.size=0,this.limit=e,this.isLocked=!1,this._changeCallback=((t,e)=>{"transparent"!=e.type&&e!==this._batch&&this._reset(!0)}),this._selectionChangeCallback=(()=>{this._reset()}),this.model.document.on("change",this._changeCallback),this.model.document.selection.on("change:range",this._selectionChangeCallback),this.model.document.selection.on("change:attribute",this._selectionChangeCallback)}get batch(){return this._batch||(this._batch=this.model.createBatch()),this._batch}input(t){this.size+=t,this.size>=this.limit&&this._reset(!0)}lock(){this.isLocked=!0}unlock(){this.isLocked=!1}destroy(){this.model.document.off("change",this._changeCallback),this.model.document.selection.off("change:range",this._selectionChangeCallback),this.model.document.selection.off("change:attribute",this._selectionChangeCallback)}_reset(t){this.isLocked&&!t||(this._batch=null,this.size=0)}}class dd extends Xl{constructor(t,e){super(t),this._buffer=new ld(t.model,e)}get buffer(){return this._buffer}destroy(){super.destroy(),this._buffer.destroy()}execute(t={}){const e=this.editor.model,n=e.document,i=t.text||"",o=i.length,r=t.range||n.selection.getFirstRange(),s=t.resultRange;e.enqueueChange(this._buffer.batch,t=>{const a=r.isCollapsed;this._buffer.lock(),a||e.deleteContent(e.createSelection(r)),i&&t.insertText(i,n.selection.getAttributes(),r.start),s?t.setSelection(s):a&&t.setSelection(r.start.getShiftedBy(o)),this._buffer.unlock(),this._buffer.input(o)})}}function ud(t){let e=null;const n=t.model,i=t.editing.view,o=t.commands.get("input");function r(){const t=o.buffer;t.lock(),n.enqueueChange(t.batch,()=>{n.deleteContent(n.document.selection)}),t.unlock()}i.document.on("keydown",(t,s)=>(function(t){const s=n.document,a=i.document.isComposing,c=e&&e.isEqual(s.selection);if(e=null,!o.isEnabled)return;if(function(t){if(t.ctrlKey)return!0;return hd.includes(t.keyCode)}(t)||s.selection.isCollapsed)return;if(a&&229===t.keyCode)return;if(!a&&229===t.keyCode&&c)return;r()})(s),{priority:"lowest"}),i.document.on("compositionstart",function(){const t=n.document,e=1!==t.selection.rangeCount||t.selection.getFirstRange().isFlat;if(t.selection.isCollapsed||e)return;r()},{priority:"lowest"}),i.document.on("compositionend",()=>{e=n.createSelection(n.document.selection)},{priority:"lowest"})}const hd=[wo("arrowUp"),wo("arrowRight"),wo("arrowDown"),wo("arrowLeft"),9,16,17,18,19,20,27,33,34,35,36,45,91,93,144,145,173,174,175,176,177,178,179,255];for(let t=112;t<=135;t++)hd.push(t);function fd(t){if(0==t.length)return!1;for(const e of t)if("children"===e.type&&!md(e))return!0;return!1}function md(t){if(t.newChildren.length-t.oldChildren.length!=1)return;const e=function(t,e){const n=[];let i,o=0;return t.forEach(t=>{"equal"==t?(r(),o++):"insert"==t?(s("insert")?i.values.push(e[o]):(r(),i={type:"insert",index:o,values:[e[o]]}),o++):s("delete")?i.howMany++:(r(),i={type:"delete",index:o,howMany:1})}),r(),n;function r(){i&&(n.push(i),i=null)}function s(t){return i&&i.type==t}}(Qo(t.oldChildren,t.newChildren,pd),t.newChildren);if(e.length>1)return;const n=e[0];return n.values[0]&&n.values[0].is("text")?n:void 0}function pd(t,e){return t&&t.is("text")&&e&&e.is("text")?t.data===e.data:t===e}class gd{constructor(t){this.editor=t,this.editing=this.editor.editing}handle(t,e){if(fd(t))this._handleContainerChildrenMutations(t,e);else for(const n of t)this._handleTextMutation(n,e),this._handleTextNodeInsertion(n)}_handleContainerChildrenMutations(t,e){const n=function(t){const e=t.map(t=>t.node).reduce((t,e)=>t.getCommonAncestor(e,{includeSelf:!0}));if(!e)return;return e.getAncestors({includeSelf:!0,parentFirst:!0}).find(t=>t.is("containerElement")||t.is("rootElement"))}(t);if(!n)return;const i=this.editor.editing.view.domConverter.mapViewToDom(n),o=new rr,r=this.editor.data.toModel(o.domToView(i)).getChild(0),s=this.editor.editing.mapper.toModelElement(n);if(!s)return;const a=Array.from(r.getChildren()),c=Array.from(s.getChildren()),l=a[a.length-1],d=c[c.length-1];l&&l.is("softBreak")&&d&&!d.is("softBreak")&&a.pop();const u=this.editor.model.schema;if(!bd(a,u)||!bd(c,u))return;const h=a.map(t=>t.is("text")?t.data:"@").join("").replace(/\u00A0/g," "),f=c.map(t=>t.is("text")?t.data:"@").join("").replace(/\u00A0/g," ");if(f===h)return;const m=Qo(f,h),{firstChangeAt:p,insertions:g,deletions:b}=wd(m);let w=null;e&&(w=this.editing.mapper.toModelRange(e.getFirstRange()));const _=h.substr(p,g),k=this.editor.model.createRange(this.editor.model.createPositionAt(s,p),this.editor.model.createPositionAt(s,p+b));this.editor.execute("input",{text:_,range:k,resultRange:w})}_handleTextMutation(t,e){if("text"!=t.type)return;const n=t.newText.replace(/\u00A0/g," "),i=t.oldText.replace(/\u00A0/g," ");if(i===n)return;const o=Qo(i,n),{firstChangeAt:r,insertions:s,deletions:a}=wd(o);let c=null;e&&(c=this.editing.mapper.toModelRange(e.getFirstRange()));const l=this.editing.view.createPositionAt(t.node,r),d=this.editing.mapper.toModelPosition(l),u=this.editor.model.createRange(d,d.getShiftedBy(a)),h=n.substr(r,s);this.editor.execute("input",{text:h,range:u,resultRange:c})}_handleTextNodeInsertion(t){if("children"!=t.type)return;const e=md(t),n=this.editing.view.createPositionAt(t.node,e.index),i=this.editing.mapper.toModelPosition(n),o=e.values[0].data;this.editor.execute("input",{text:o.replace(/\u00A0/g," "),range:this.editor.model.createRange(i)})}}function bd(t,e){return t.every(t=>e.isInline(t))}function wd(t){let e=null,n=null;for(let i=0;i<t.length;i++){"equal"!=t[i]&&(e=null===e?i:e,n=i)}let i=0,o=0;for(let r=e;r<=n;r++)"insert"!=t[r]&&i++,"delete"!=t[r]&&o++;return{insertions:o,deletions:i,firstChangeAt:e}}class _d extends Gl{static get pluginName(){return"Input"}init(){const t=this.editor,e=new dd(t,t.config.get("typing.undoStep")||20);t.commands.add("input",e),ud(t),function(t){t.editing.view.document.on("mutations",(e,n,i)=>{new gd(t).handle(n,i)})}(t)}}class kd extends Xl{constructor(t,e){super(t),this.direction=e,this._buffer=new ld(t.model,t.config.get("typing.undoStep"))}get buffer(){return this._buffer}execute(t={}){const e=this.editor.model,n=e.document;e.enqueueChange(this._buffer.batch,i=>{this._buffer.lock();const o=i.createSelection(n.selection),r=o.isCollapsed;if(o.isCollapsed&&e.modifySelection(o,{direction:this.direction,unit:t.unit}),this._shouldEntireContentBeReplacedWithParagraph(t.sequence||1))return void this._replaceEntireContentWithParagraph(i);if(o.isCollapsed)return;let s=0;o.getFirstRange().getMinimalFlatRanges().forEach(t=>{s+=eo(t.getWalker({singleCharacters:!0,ignoreElementEnd:!0,shallow:!0}))}),e.deleteContent(o,{doNotResetEntireContent:r}),this._buffer.input(s),i.setSelection(o),this._buffer.unlock()})}_shouldEntireContentBeReplacedWithParagraph(t){if(t>1)return!1;const e=this.editor.model,n=e.document.selection,i=e.schema.getLimitElement(n);if(!(n.isCollapsed&&n.containsEntireContent(i)))return!1;if(!e.schema.checkChild(i,"paragraph"))return!1;const o=i.getChild(0);return!o||"paragraph"!==o.name}_replaceEntireContentWithParagraph(t){const e=this.editor.model,n=e.document.selection,i=e.schema.getLimitElement(n),o=t.createElement("paragraph");t.remove(t.createRangeIn(i)),t.insert(o,i),t.setSelection(o,0)}}class vd extends hr{constructor(t){super(t);const e=t.document;let n=0;e.on("keyup",(t,e)=>{e.keyCode!=bo.delete&&e.keyCode!=bo.backspace||(n=0)}),e.on("keydown",(t,i)=>{const o={};if(i.keyCode==bo.delete)o.direction="forward",o.unit="character";else{if(i.keyCode!=bo.backspace)return;o.direction="backward",o.unit="codePoint"}const r=mo.isMac?i.altKey:i.ctrlKey;let s;o.unit=r?"word":o.unit,o.sequence=++n,e.once("delete",t=>s=t,{priority:Number.POSITIVE_INFINITY});const a=new Xr(e,i.domEvent,o);e.fire("delete",a),s&&s.stop.called&&t.stop()})}observe(){}}function yd(t){const e=t.model,n=t.editing.view,i=200;let o=null,r=e.createSelection(e.document.selection),s=Date.now();e.document.selection.on("change",function(t){const n=e.createSelection(t.source);r.isEqual(n)||(o=r,r=n,s=Date.now())}),n.document.on("mutations",function(n,a){fd(a)&&function(t){for(const e of t){if("children"!==e.type)continue;const t=e.oldChildren,n=e.newChildren;if(!xd(t))continue;const i=Qo(t,n),o=i.some(t=>"delete"===t),r=i.some(t=>"insert"===t);if(o&&!r)return!0}return!1}(a)&&(!function(){Date.now()-s<i&&o&&!o.isCollapsed&&r.isCollapsed&&r.getLastPosition().isEqual(o.getLastPosition())&&e.enqueueChange(t=>{t.setSelection(o)});t.execute("delete")}(),n.stop())},{priority:"highest"})}function xd(t){return t.every(t=>t.is("containerElement"))}class Ad extends Gl{static get pluginName(){return"Delete"}init(){const t=this.editor,e=t.editing.view,n=e.document;e.addObserver(vd),t.commands.add("forwardDelete",new kd(t,"forward")),t.commands.add("delete",new kd(t,"backward")),this.listenTo(n,"delete",(n,i)=>{t.execute("forward"==i.direction?"forwardDelete":"delete",{unit:i.unit,sequence:i.sequence}),i.preventDefault(),e.scrollToTheSelection()}),yd(t)}}class Cd extends Gl{static get requires(){return[_d,Ad]}static get pluginName(){return"Typing"}}class Td extends Qa{get type(){return"noop"}clone(){return new Td(this.baseVersion)}getReversed(){return new Td(this.baseVersion+1)}_execute(){}static get className(){return"NoOperation"}}const Pd=new Map;function Md(t,e,n){let i=Pd.get(t);i||(i=new Map,Pd.set(t,i)),i.set(e,n)}function Ed(t){return[t]}function Sd(t,e,n={}){const i=function(t,e){const n=Pd.get(t);return n&&n.has(e)?n.get(e):Ed}(t.constructor,e.constructor);try{return i(t=t.clone(),e,n)}catch(i){throw bs.a.error("Error during operation transformation!",i.message),bs.a.error("Transformed operation",t),bs.a.error("Operation transformed by",e),bs.a.error("context.aIsStrong",n.aIsStrong),bs.a.error("context.aWasUndone",n.aWasUndone),bs.a.error("context.bWasUndone",n.bWasUndone),bs.a.error("context.abRelation",n.abRelation),bs.a.error("context.baRelation",n.baRelation),i}}function Id(t,e,n){if(t=t.slice(),e=e.slice(),0==t.length||0==e.length)return{operationsA:t,operationsB:e};const i=new WeakMap;for(const e of t)i.set(e,0);const o={nextBaseVersionA:t[t.length-1].baseVersion+1,nextBaseVersionB:e[e.length-1].baseVersion+1,originalOperationsACount:t.length,originalOperationsBCount:e.length},r=new Nd(n.document,n.useRelations,n.forceWeakRemove);r.setOriginalOperations(t),r.setOriginalOperations(e);let s=0;for(;s<t.length;){const n=t[s],o=i.get(n);if(o==e.length){s++;continue}const a=e[o],c=Sd(n,a,r.getContext(n,a,!0)),l=Sd(a,n,r.getContext(a,n,!1));r.updateRelation(n,a),r.setOriginalOperations(c,n),r.setOriginalOperations(l,a);for(const t of c)i.set(t,o+l.length);t.splice(s,1,...c),e.splice(o,1,...l)}if(n.padWithNoOps){const n=t.length-o.originalOperationsACount,i=e.length-o.originalOperationsBCount;Rd(t,i-n),Rd(e,n-i)}return Od(t,o.nextBaseVersionB),Od(e,o.nextBaseVersionA),{operationsA:t,operationsB:e}}class Nd{constructor(t,e,n=!1){this._history=t.history,this._useRelations=e,this._forceWeakRemove=!!n,this._originalOperations=new Map,this._relations=new Map}setOriginalOperations(t,e=null){const n=e?this._originalOperations.get(e):null;for(const e of t)this._originalOperations.set(e,n||e)}updateRelation(t,e){switch(t.constructor){case ac:switch(e.constructor){case hc:t.targetPosition.isEqual(e.sourcePosition)||e.movedRange.containsPosition(t.targetPosition)?this._setRelation(t,e,"insertAtSource"):t.targetPosition.isEqual(e.deletionPosition)?this._setRelation(t,e,"insertBetween"):t.targetPosition.isAfter(e.sourcePosition)&&this._setRelation(t,e,"moveTargetAfter");break;case ac:t.targetPosition.isEqual(e.sourcePosition)||t.targetPosition.isBefore(e.sourcePosition)?this._setRelation(t,e,"insertBefore"):this._setRelation(t,e,"insertAfter")}break;case fc:switch(e.constructor){case hc:t.splitPosition.isBefore(e.sourcePosition)&&this._setRelation(t,e,"splitBefore");break;case ac:(t.splitPosition.isEqual(e.sourcePosition)||t.splitPosition.isBefore(e.sourcePosition))&&this._setRelation(t,e,"splitBefore")}break;case hc:switch(e.constructor){case hc:t.targetPosition.isEqual(e.sourcePosition)||this._setRelation(t,e,"mergeTargetNotMoved"),t.sourcePosition.isEqual(e.targetPosition)&&this._setRelation(t,e,"mergeSourceNotMoved"),t.sourcePosition.isEqual(e.sourcePosition)&&this._setRelation(t,e,"mergeSameElement");break;case fc:t.sourcePosition.isEqual(e.splitPosition)&&this._setRelation(t,e,"splitAtSource")}break;case lc:{const n=t.newRange;if(!n)return;switch(e.constructor){case ac:{const i=Gs._createFromPositionAndShift(e.sourcePosition,e.howMany),o=i.containsPosition(n.start)||i.start.isEqual(n.start),r=i.containsPosition(n.end)||i.end.isEqual(n.end);!o&&!r||i.containsRange(n)||this._setRelation(t,e,{side:o?"left":"right",path:o?n.start.path.slice():n.end.path.slice()});break}case hc:{const i=n.start.isEqual(e.targetPosition),o=n.start.isEqual(e.deletionPosition),r=n.end.isEqual(e.deletionPosition),s=n.end.isEqual(e.sourcePosition);(i||o||r||s)&&this._setRelation(t,e,{wasInLeftElement:i,wasStartBeforeMergedElement:o,wasEndBeforeMergedElement:r,wasInRightElement:s});break}}break}}}getContext(t,e,n){return{aIsStrong:n,aWasUndone:this._wasUndone(t),bWasUndone:this._wasUndone(e),abRelation:this._useRelations?this._getRelation(t,e):null,baRelation:this._useRelations?this._getRelation(e,t):null,forceWeakRemove:this._forceWeakRemove}}_wasUndone(t){const e=this._originalOperations.get(t);return e.wasUndone||this._history.isUndoneOperation(e)}_getRelation(t,e){const n=this._originalOperations.get(e),i=this._history.getUndoneOperation(n);if(!i)return null;const o=this._originalOperations.get(t),r=this._relations.get(o);return r&&r.get(i)||null}_setRelation(t,e,n){const i=this._originalOperations.get(t),o=this._originalOperations.get(e);let r=this._relations.get(i);r||(r=new Map,this._relations.set(i,r)),r.set(o,n)}}function Od(t,e){for(const n of t)n.baseVersion=e++}function Rd(t,e){for(let n=0;n<e;n++)t.push(new Td(0))}function Dd(t,e,n){const i=t.nodes.getNode(0).getAttribute(e);if(i==n)return null;const o=new Gs(t.position,t.position.getShiftedBy(t.howMany));return new rc(o,e,i,n,0)}function Ld(t,e){return null===t.targetPosition._getTransformedByDeletion(e.sourcePosition,e.howMany)}function jd(t,e){const n=[];for(let i=0;i<t.length;i++){const o=t[i],r=new ac(o.start,o.end.offset-o.start.offset,e,0);n.push(r);for(let e=i+1;e<t.length;e++)t[e]=t[e]._getTransformedByMove(r.sourcePosition,r.targetPosition,r.howMany)[0];e=e._getTransformedByMove(r.sourcePosition,r.targetPosition,r.howMany)}return n}Md(rc,rc,(t,e,n)=>{if(t.key===e.key){const i=t.range.getDifference(e.range).map(e=>new rc(e,t.key,t.oldValue,t.newValue,0)),o=t.range.getIntersection(e.range);return o&&n.aIsStrong&&i.push(new rc(o,e.key,e.newValue,t.newValue,0)),0==i.length?[new Td(0)]:i}return[t]}),Md(rc,cc,(t,e)=>{if(t.range.start.hasSameParentAs(e.position)&&t.range.containsPosition(e.position)){const n=t.range._getTransformedByInsertion(e.position,e.howMany,!e.shouldReceiveAttributes).map(e=>new rc(e,t.key,t.oldValue,t.newValue,t.baseVersion));if(e.shouldReceiveAttributes){const i=Dd(e,t.key,t.oldValue);i&&n.unshift(i)}return n}return t.range=t.range._getTransformedByInsertion(e.position,e.howMany,!1)[0],[t]}),Md(rc,hc,(t,e)=>{const n=[];t.range.start.hasSameParentAs(e.deletionPosition)&&(t.range.containsPosition(e.deletionPosition)||t.range.start.isEqual(e.deletionPosition))&&n.push(Gs._createFromPositionAndShift(e.graveyardPosition,1));const i=t.range._getTransformedByMergeOperation(e);return i.isCollapsed||n.push(i),n.map(e=>new rc(e,t.key,t.oldValue,t.newValue,t.baseVersion))}),Md(rc,ac,(t,e)=>{return function(t,e){const n=Gs._createFromPositionAndShift(e.sourcePosition,e.howMany);let i=null,o=[];n.containsRange(t,!0)?i=t:t.start.hasSameParentAs(n.start)?(o=t.getDifference(n),i=t.getIntersection(n)):o=[t];const r=[];for(let t of o){t=t._getTransformedByDeletion(e.sourcePosition,e.howMany);const n=e.getMovedRangeStart(),i=t.start.hasSameParentAs(n);t=t._getTransformedByInsertion(n,e.howMany,i),r.push(...t)}i&&r.push(i._getTransformedByMove(e.sourcePosition,e.targetPosition,e.howMany,!1)[0]);return r}(t.range,e).map(e=>new rc(e,t.key,t.oldValue,t.newValue,t.baseVersion))}),Md(rc,fc,(t,e)=>{if(t.range.end.isEqual(e.insertionPosition))return e.graveyardPosition||t.range.end.offset++,[t];if(t.range.start.hasSameParentAs(e.splitPosition)&&t.range.containsPosition(e.splitPosition)){const n=t.clone();return n.range=new Gs(e.moveTargetPosition.clone(),t.range.end._getCombined(e.splitPosition,e.moveTargetPosition)),t.range.end=e.splitPosition.clone(),t.range.end.stickiness="toPrevious",[t,n]}return t.range=t.range._getTransformedBySplitOperation(e),[t]}),Md(cc,rc,(t,e)=>{const n=[t];if(t.shouldReceiveAttributes&&t.position.hasSameParentAs(e.range.start)&&e.range.containsPosition(t.position)){const i=Dd(t,e.key,e.newValue);i&&n.push(i)}return n}),Md(cc,cc,(t,e,n)=>t.position.isEqual(e.position)&&n.aIsStrong?[t]:(t.position=t.position._getTransformedByInsertOperation(e),[t])),Md(cc,ac,(t,e)=>(t.position=t.position._getTransformedByMoveOperation(e),[t])),Md(cc,fc,(t,e)=>(t.position=t.position._getTransformedBySplitOperation(e),[t])),Md(cc,hc,(t,e)=>(t.position=t.position._getTransformedByMergeOperation(e),[t])),Md(lc,cc,(t,e)=>(t.oldRange&&(t.oldRange=t.oldRange._getTransformedByInsertOperation(e)[0]),t.newRange&&(t.newRange=t.newRange._getTransformedByInsertOperation(e)[0]),[t])),Md(lc,lc,(t,e,n)=>{if(t.name==e.name){if(!n.aIsStrong)return[new Td(0)];t.oldRange=e.newRange?e.newRange.clone():null}return[t]}),Md(lc,hc,(t,e)=>(t.oldRange&&(t.oldRange=t.oldRange._getTransformedByMergeOperation(e)),t.newRange&&(t.newRange=t.newRange._getTransformedByMergeOperation(e)),[t])),Md(lc,ac,(t,e,n)=>{if(t.oldRange&&(t.oldRange=Gs._createFromRanges(t.oldRange._getTransformedByMoveOperation(e))),t.newRange){if(n.abRelation){const i=Gs._createFromRanges(t.newRange._getTransformedByMoveOperation(e));if("left"==n.abRelation.side&&e.targetPosition.isEqual(t.newRange.start))return t.newRange.start.path=n.abRelation.path,t.newRange.end=i.end,[t];if("right"==n.abRelation.side&&e.targetPosition.isEqual(t.newRange.end))return t.newRange.start=i.start,t.newRange.end.path=n.abRelation.path,[t]}t.newRange=Gs._createFromRanges(t.newRange._getTransformedByMoveOperation(e))}return[t]}),Md(lc,fc,(t,e,n)=>{if(t.oldRange&&(t.oldRange=t.oldRange._getTransformedBySplitOperation(e)),t.newRange){if(n.abRelation){const i=t.newRange._getTransformedBySplitOperation(e);return t.newRange.start.isEqual(e.splitPosition)&&n.abRelation.wasStartBeforeMergedElement?t.newRange.start=$s._createAt(e.insertionPosition):t.newRange.start.isEqual(e.splitPosition)&&!n.abRelation.wasInLeftElement&&(t.newRange.start=$s._createAt(e.moveTargetPosition)),t.newRange.end.isEqual(e.splitPosition)&&n.abRelation.wasInRightElement?t.newRange.end=$s._createAt(e.moveTargetPosition):t.newRange.end.isEqual(e.splitPosition)&&n.abRelation.wasEndBeforeMergedElement?t.newRange.end=$s._createAt(e.insertionPosition):t.newRange.end=i.end,[t]}t.newRange=t.newRange._getTransformedBySplitOperation(e)}return[t]}),Md(hc,cc,(t,e)=>(t.sourcePosition.hasSameParentAs(e.position)&&(t.howMany+=e.howMany),t.sourcePosition=t.sourcePosition._getTransformedByInsertOperation(e),t.targetPosition=t.targetPosition._getTransformedByInsertOperation(e),[t])),Md(hc,hc,(t,e,n)=>{if(t.sourcePosition.isEqual(e.sourcePosition)&&t.targetPosition.isEqual(e.targetPosition)){if(n.bWasUndone){const n=e.graveyardPosition.path.slice();return n.push(0),t.sourcePosition=new $s(e.graveyardPosition.root,n),t.howMany=0,[t]}return[new Td(0)]}if(t.sourcePosition.isEqual(e.sourcePosition)&&!t.targetPosition.isEqual(e.targetPosition)&&!n.bWasUndone&&"splitAtSource"!=n.abRelation){const i="$graveyard"==t.targetPosition.root.rootName,o="$graveyard"==e.targetPosition.root.rootName;if(o&&!i||!(i&&!o)&&n.aIsStrong){const n=e.targetPosition._getTransformedByMergeOperation(e),i=t.targetPosition._getTransformedByMergeOperation(e);return[new ac(n,t.howMany,i,0)]}return[new Td(0)]}return t.sourcePosition.hasSameParentAs(e.targetPosition)&&(t.howMany+=e.howMany),t.sourcePosition=t.sourcePosition._getTransformedByMergeOperation(e),t.targetPosition=t.targetPosition._getTransformedByMergeOperation(e),t.graveyardPosition.isEqual(e.graveyardPosition)&&n.aIsStrong||(t.graveyardPosition=t.graveyardPosition._getTransformedByMergeOperation(e)),[t]}),Md(hc,ac,(t,e,n)=>{const i=Gs._createFromPositionAndShift(e.sourcePosition,e.howMany);return"remove"==e.type&&!n.bWasUndone&&!n.forceWeakRemove&&t.deletionPosition.hasSameParentAs(e.sourcePosition)&&i.containsPosition(t.sourcePosition)?[new Td(0)]:(t.sourcePosition.hasSameParentAs(e.targetPosition)&&(t.howMany+=e.howMany),t.sourcePosition.hasSameParentAs(e.sourcePosition)&&(t.howMany-=e.howMany),t.sourcePosition=t.sourcePosition._getTransformedByMoveOperation(e),t.targetPosition=t.targetPosition._getTransformedByMoveOperation(e),t.graveyardPosition.isEqual(e.targetPosition)||(t.graveyardPosition=t.graveyardPosition._getTransformedByMoveOperation(e)),[t])}),Md(hc,fc,(t,e,n)=>{if(e.graveyardPosition&&(t.graveyardPosition=t.graveyardPosition._getTransformedByDeletion(e.graveyardPosition,1),t.deletionPosition.isEqual(e.graveyardPosition)&&(t.howMany=e.howMany)),t.targetPosition.isEqual(e.splitPosition)){const i=0!=e.howMany,o=e.graveyardPosition&&t.deletionPosition.isEqual(e.graveyardPosition);if(i||o||"mergeTargetNotMoved"==n.abRelation)return t.sourcePosition=t.sourcePosition._getTransformedBySplitOperation(e),[t]}if(t.sourcePosition.isEqual(e.splitPosition)){if("mergeSourceNotMoved"==n.abRelation)return t.howMany=0,t.targetPosition=t.targetPosition._getTransformedBySplitOperation(e),[t];if("mergeSameElement"==n.abRelation||t.sourcePosition.offset>0)return t.sourcePosition=e.moveTargetPosition.clone(),t.targetPosition=t.targetPosition._getTransformedBySplitOperation(e),[t]}return t.sourcePosition.hasSameParentAs(e.splitPosition)&&(t.howMany=e.splitPosition.offset),t.sourcePosition=t.sourcePosition._getTransformedBySplitOperation(e),t.targetPosition=t.targetPosition._getTransformedBySplitOperation(e),[t]}),Md(ac,cc,(t,e)=>{const n=Gs._createFromPositionAndShift(t.sourcePosition,t.howMany)._getTransformedByInsertOperation(e,!1)[0];return t.sourcePosition=n.start,t.howMany=n.end.offset-n.start.offset,t.targetPosition.isEqual(e.position)||(t.targetPosition=t.targetPosition._getTransformedByInsertOperation(e)),[t]}),Md(ac,ac,(t,e,n)=>{const i=Gs._createFromPositionAndShift(t.sourcePosition,t.howMany),o=Gs._createFromPositionAndShift(e.sourcePosition,e.howMany);let r,s=n.aIsStrong,a=!n.aIsStrong;if("insertBefore"==n.abRelation||"insertAfter"==n.baRelation?a=!0:"insertAfter"!=n.abRelation&&"insertBefore"!=n.baRelation||(a=!1),r=t.targetPosition.isEqual(e.targetPosition)&&a?t.targetPosition._getTransformedByDeletion(e.sourcePosition,e.howMany):t.targetPosition._getTransformedByMove(e.sourcePosition,e.targetPosition,e.howMany),Ld(t,e)&&Ld(e,t))return[e.getReversed()];if(i.containsPosition(e.targetPosition)&&i.containsRange(o,!0))return i.start=i.start._getTransformedByMove(e.sourcePosition,e.targetPosition,e.howMany),i.end=i.end._getTransformedByMove(e.sourcePosition,e.targetPosition,e.howMany),jd([i],r);if(o.containsPosition(t.targetPosition)&&o.containsRange(i,!0))return i.start=i.start._getCombined(e.sourcePosition,e.getMovedRangeStart()),i.end=i.end._getCombined(e.sourcePosition,e.getMovedRangeStart()),jd([i],r);const c=li(t.sourcePosition.getParentPath(),e.sourcePosition.getParentPath());if("prefix"==c||"extension"==c)return i.start=i.start._getTransformedByMove(e.sourcePosition,e.targetPosition,e.howMany),i.end=i.end._getTransformedByMove(e.sourcePosition,e.targetPosition,e.howMany),jd([i],r);"remove"!=t.type||"remove"==e.type||n.aWasUndone||n.forceWeakRemove?"remove"==t.type||"remove"!=e.type||n.bWasUndone||n.forceWeakRemove||(s=!1):s=!0;const l=[],d=i.getDifference(o);for(const t of d){t.start=t.start._getTransformedByDeletion(e.sourcePosition,e.howMany),t.end=t.end._getTransformedByDeletion(e.sourcePosition,e.howMany);const n="same"==li(t.start.getParentPath(),e.getMovedRangeStart().getParentPath()),i=t._getTransformedByInsertion(e.getMovedRangeStart(),e.howMany,n);l.push(...i)}const u=i.getIntersection(o);return null!==u&&s&&(u.start=u.start._getCombined(e.sourcePosition,e.getMovedRangeStart()),u.end=u.end._getCombined(e.sourcePosition,e.getMovedRangeStart()),0===l.length?l.push(u):1==l.length?o.start.isBefore(i.start)||o.start.isEqual(i.start)?l.unshift(u):l.push(u):l.splice(1,0,u)),0===l.length?[new Td(t.baseVersion)]:jd(l,r)}),Md(ac,fc,(t,e,n)=>{let i=t.targetPosition.clone();t.targetPosition.isEqual(e.insertionPosition)&&e.graveyardPosition&&"moveTargetAfter"!=n.abRelation||(i=t.targetPosition._getTransformedBySplitOperation(e));const o=Gs._createFromPositionAndShift(t.sourcePosition,t.howMany);if(o.end.isEqual(e.insertionPosition))return e.graveyardPosition||t.howMany++,t.targetPosition=i,[t];if(o.start.hasSameParentAs(e.splitPosition)&&o.containsPosition(e.splitPosition)){let t=new Gs(e.splitPosition,o.end);return t=t._getTransformedBySplitOperation(e),jd([new Gs(o.start,e.splitPosition),t],i)}t.targetPosition.isEqual(e.splitPosition)&&"insertAtSource"==n.abRelation&&(i=e.moveTargetPosition),t.targetPosition.isEqual(e.insertionPosition)&&"insertBetween"==n.abRelation&&(i=t.targetPosition);const r=[o._getTransformedBySplitOperation(e)];if(e.graveyardPosition){const i=o.start.isEqual(e.graveyardPosition)||o.containsPosition(e.graveyardPosition);t.howMany>1&&i&&!n.aWasUndone&&r.push(Gs._createFromPositionAndShift(e.insertionPosition,1))}return jd(r,i)}),Md(ac,hc,(t,e,n)=>{const i=Gs._createFromPositionAndShift(t.sourcePosition,t.howMany);if(e.deletionPosition.hasSameParentAs(t.sourcePosition)&&i.containsPosition(e.sourcePosition))if("remove"!=t.type||n.forceWeakRemove){if(1==t.howMany)return n.bWasUndone?(t.sourcePosition=e.graveyardPosition.clone(),t.targetPosition=t.targetPosition._getTransformedByMergeOperation(e),[t]):[new Td(0)]}else if(!n.aWasUndone){const n=[];let i=e.graveyardPosition.clone(),o=e.targetPosition._getTransformedByMergeOperation(e);t.howMany>1&&(n.push(new ac(t.sourcePosition,t.howMany-1,t.targetPosition,0)),i=i._getTransformedByMove(t.sourcePosition,t.targetPosition,t.howMany-1),o=o._getTransformedByMove(t.sourcePosition,t.targetPosition,t.howMany-1));const r=e.deletionPosition._getCombined(t.sourcePosition,t.targetPosition),s=new ac(i,1,r,0),a=s.getMovedRangeStart().path.slice();a.push(0);const c=new $s(s.targetPosition.root,a);o=o._getTransformedByMove(i,r,1);const l=new ac(o,e.howMany,c,0);return n.push(s),n.push(l),n}const o=Gs._createFromPositionAndShift(t.sourcePosition,t.howMany)._getTransformedByMergeOperation(e);return t.sourcePosition=o.start,t.howMany=o.end.offset-o.start.offset,t.targetPosition=t.targetPosition._getTransformedByMergeOperation(e),[t]}),Md(dc,cc,(t,e)=>(t.position=t.position._getTransformedByInsertOperation(e),[t])),Md(dc,hc,(t,e)=>t.position.isEqual(e.deletionPosition)?(t.position=e.graveyardPosition.clone(),t.position.stickiness="toNext",[t]):(t.position=t.position._getTransformedByMergeOperation(e),[t])),Md(dc,ac,(t,e)=>(t.position=t.position._getTransformedByMoveOperation(e),[t])),Md(dc,dc,(t,e,n)=>{if(t.position.isEqual(e.position)){if(!n.aIsStrong)return[new Td(0)];t.oldName=e.newName}return[t]}),Md(dc,fc,(t,e)=>{if("same"==li(t.position.path,e.splitPosition.getParentPath())&&!e.graveyardPosition){return[t,new dc(t.position.getShiftedBy(1),t.oldName,t.newName,0)]}return t.position=t.position._getTransformedBySplitOperation(e),[t]}),Md(uc,uc,(t,e,n)=>{if(t.root===e.root&&t.key===e.key){if(!n.aIsStrong||t.newValue===e.newValue)return[new Td(0)];t.oldValue=e.newValue}return[t]}),Md(fc,cc,(t,e)=>(t.splitPosition.hasSameParentAs(e.position)&&t.splitPosition.offset<e.position.offset&&(t.howMany+=e.howMany),t.splitPosition=t.splitPosition._getTransformedByInsertOperation(e),t.insertionPosition=fc.getInsertionPosition(t.splitPosition),[t])),Md(fc,hc,(t,e,n)=>{if(!t.graveyardPosition&&!n.bWasUndone&&t.splitPosition.hasSameParentAs(e.sourcePosition)){const n=e.graveyardPosition.path.slice();n.push(0);const i=new $s(e.graveyardPosition.root,n),o=fc.getInsertionPosition(new $s(e.graveyardPosition.root,n)),r=new fc(i,0,null,0);return r.insertionPosition=o,t.splitPosition=t.splitPosition._getTransformedByMergeOperation(e),t.insertionPosition=fc.getInsertionPosition(t.splitPosition),t.graveyardPosition=r.insertionPosition.clone(),t.graveyardPosition.stickiness="toNext",[r,t]}return t.splitPosition.hasSameParentAs(e.deletionPosition)&&!t.splitPosition.isAfter(e.deletionPosition)&&t.howMany--,t.splitPosition.hasSameParentAs(e.targetPosition)&&(t.howMany+=e.howMany),t.splitPosition=t.splitPosition._getTransformedByMergeOperation(e),t.insertionPosition=fc.getInsertionPosition(t.splitPosition),t.graveyardPosition&&(t.graveyardPosition=t.graveyardPosition._getTransformedByMergeOperation(e)),[t]}),Md(fc,ac,(t,e,n)=>{const i=Gs._createFromPositionAndShift(e.sourcePosition,e.howMany);if(t.graveyardPosition){const o=i.start.isEqual(t.graveyardPosition)||i.containsPosition(t.graveyardPosition);if(!n.bWasUndone&&o){const n=t.splitPosition._getTransformedByMoveOperation(e),i=t.graveyardPosition._getTransformedByMoveOperation(e),o=i.path.slice();o.push(0);const r=new $s(i.root,o);return[new ac(n,t.howMany,r,0)]}t.graveyardPosition=t.graveyardPosition._getTransformedByMoveOperation(e)}if(t.splitPosition.hasSameParentAs(e.sourcePosition)&&i.containsPosition(t.splitPosition)){const n=e.howMany-(t.splitPosition.offset-e.sourcePosition.offset);return t.howMany-=n,t.splitPosition.hasSameParentAs(e.targetPosition)&&t.splitPosition.offset<e.targetPosition.offset&&(t.howMany+=e.howMany),t.splitPosition=e.sourcePosition.clone(),t.insertionPosition=fc.getInsertionPosition(t.splitPosition),[t]}return!t.splitPosition.isEqual(e.targetPosition)||"insertAtSource"!=n.baRelation&&"splitBefore"!=n.abRelation?(e.sourcePosition.isEqual(e.targetPosition)||(t.splitPosition.hasSameParentAs(e.sourcePosition)&&t.splitPosition.offset<=e.sourcePosition.offset&&(t.howMany-=e.howMany),t.splitPosition.hasSameParentAs(e.targetPosition)&&t.splitPosition.offset<e.targetPosition.offset&&(t.howMany+=e.howMany)),t.splitPosition.stickiness="toNone",t.splitPosition=t.splitPosition._getTransformedByMoveOperation(e),t.splitPosition.stickiness="toNext",t.graveyardPosition?t.insertionPosition=t.insertionPosition._getTransformedByMoveOperation(e):t.insertionPosition=fc.getInsertionPosition(t.splitPosition),[t]):(t.howMany+=e.howMany,t.splitPosition=t.splitPosition._getTransformedByDeletion(e.sourcePosition,e.howMany),t.insertionPosition=fc.getInsertionPosition(t.splitPosition),[t])}),Md(fc,fc,(t,e,n)=>{if(t.splitPosition.isEqual(e.splitPosition)){if(!t.graveyardPosition&&!e.graveyardPosition)return[new Td(0)];if(t.graveyardPosition&&e.graveyardPosition&&t.graveyardPosition.isEqual(e.graveyardPosition))return[new Td(0)];if("splitBefore"==n.abRelation)return t.howMany=0,t.graveyardPosition=t.graveyardPosition._getTransformedBySplitOperation(e),[t]}if(t.graveyardPosition&&e.graveyardPosition&&t.graveyardPosition.isEqual(e.graveyardPosition)){const i="$graveyard"==t.splitPosition.root.rootName,o="$graveyard"==e.splitPosition.root.rootName;if(o&&!i||!(i&&!o)&&n.aIsStrong){const n=[];return e.howMany&&n.push(new ac(e.moveTargetPosition,e.howMany,e.splitPosition,0)),t.howMany&&n.push(new ac(t.splitPosition,t.howMany,t.moveTargetPosition,0)),n}return[new Td(0)]}if(t.graveyardPosition&&(t.graveyardPosition=t.graveyardPosition._getTransformedBySplitOperation(e)),t.splitPosition.isEqual(e.insertionPosition)&&"splitBefore"==n.abRelation)return t.howMany++,[t];if(e.splitPosition.isEqual(t.insertionPosition)&&"splitBefore"==n.baRelation){const n=e.insertionPosition.path.slice();n.push(0);const i=new $s(e.insertionPosition.root,n);return[t,new ac(t.insertionPosition,1,i,0)]}return t.splitPosition.hasSameParentAs(e.splitPosition)&&t.splitPosition.offset<e.splitPosition.offset&&(t.howMany-=e.howMany),t.splitPosition=t.splitPosition._getTransformedBySplitOperation(e),t.insertionPosition=fc.getInsertionPosition(t.splitPosition),[t]});class Vd extends Xl{constructor(t){super(t),this._stack=[],this._createdBatches=new WeakSet,this.refresh()}refresh(){this.isEnabled=this._stack.length>0}addBatch(t){const e=this.editor.model.document.selection,n={ranges:e.hasOwnRange?Array.from(e.getRanges()):[],isBackward:e.isBackward};this._stack.push({batch:t,selection:n}),this.refresh()}clearStack(){this._stack=[],this.refresh()}_restoreSelection(t,e,n){const i=this.editor.model,o=i.document,r=[];for(const e of t){const t=Bd(e,n).find(t=>t.start.root!=o.graveyard);t&&r.push(t)}r.length&&i.change(t=>{t.setSelection(r,{backward:e})})}_undo(t,e){const n=this.editor.model,i=n.document;this._createdBatches.add(e);const o=t.operations.slice().filter(t=>t.isDocumentOperation);o.reverse();for(const t of o){const o=t.baseVersion+1,r=Array.from(i.history.getOperations(o)),s=Id([t.getReversed()],r,{useRelations:!0,document:this.editor.model.document,padWithNoOps:!1,forceWeakRemove:!0}).operationsA;for(const o of s)e.addOperation(o),n.applyOperation(o),i.history.setOperationAsUndone(t,o)}}}function Bd(t,e){const n=t.getTransformedByOperations(e);n.sort((t,e)=>t.start.isBefore(e.start)?-1:1);for(let t=1;t<n.length;t++){const e=n[t-1],i=n[t];e.end.isTouching(i.start)&&(e.end=i.end,n.splice(t,1),t--)}return n}class zd extends Vd{execute(t=null){const e=t?this._stack.findIndex(e=>e.batch==t):this._stack.length-1,n=this._stack.splice(e,1)[0],i=this.editor.model.createBatch();this.editor.model.enqueueChange(i,()=>{this._undo(n.batch,i);const t=this.editor.model.document.history.getOperations(n.batch.baseVersion);this._restoreSelection(n.selection.ranges,n.selection.isBackward,t),this.fire("revert",n.batch,i)}),this.refresh()}}class Fd extends Vd{execute(){const t=this._stack.pop(),e=this.editor.model.createBatch();this.editor.model.enqueueChange(e,()=>{const n=t.batch.operations[t.batch.operations.length-1].baseVersion+1,i=this.editor.model.document.history.getOperations(n);this._restoreSelection(t.selection.ranges,t.selection.isBackward,i),this._undo(t.batch,e)}),this.refresh()}}class Ud extends Gl{constructor(t){super(t),this._batchRegistry=new WeakSet}init(){const t=this.editor;this._undoCommand=new zd(t),this._redoCommand=new Fd(t),t.commands.add("undo",this._undoCommand),t.commands.add("redo",this._redoCommand),this.listenTo(t.model,"applyOperation",(t,e)=>{const n=e[0];if(!n.isDocumentOperation)return;const i=n.batch;this._batchRegistry.has(i)||"transparent"==i.type||(this._redoCommand._createdBatches.has(i)?this._undoCommand.addBatch(i):this._undoCommand._createdBatches.has(i)||(this._undoCommand.addBatch(i),this._redoCommand.clearStack()),this._batchRegistry.add(i))},{priority:"highest"}),this.listenTo(this._undoCommand,"revert",(t,e,n)=>{this._redoCommand.addBatch(n)}),t.keystrokes.set("CTRL+Z","undo"),t.keystrokes.set("CTRL+Y","redo"),t.keystrokes.set("CTRL+SHIFT+Z","redo")}}n(68);class Hd extends Ol{constructor(){super();const t=this.bindTemplate;this.set("content",""),this.set("viewBox","0 0 20 20"),this.set("fillColor",""),this.setTemplate({tag:"svg",ns:"http://www.w3.org/2000/svg",attributes:{class:["ck","ck-icon"],viewBox:t.to("viewBox")}})}render(){super.render(),this._updateXMLContent(),this._colorFillPaths(),this.on("change:content",()=>{this._updateXMLContent(),this._colorFillPaths()}),this.on("change:fillColor",()=>{this._colorFillPaths()})}_updateXMLContent(){if(this.content){const t=(new DOMParser).parseFromString(this.content.trim(),"image/svg+xml").querySelector("svg"),e=t.getAttribute("viewBox");for(e&&(this.viewBox=e),this.element.innerHTML="";t.childNodes.length>0;)this.element.appendChild(t.childNodes[0])}}_colorFillPaths(){this.fillColor&&this.element.querySelectorAll(".ck-icon__fill").forEach(t=>{t.style.fill=this.fillColor})}}n(70);class qd extends Ol{constructor(t){super(t),this.set("text",""),this.set("position","s");const e=this.bindTemplate;this.setTemplate({tag:"span",attributes:{class:["ck","ck-tooltip",e.to("position",t=>"ck-tooltip_"+t),e.if("text","ck-hidden",t=>!t.trim())]},children:[{tag:"span",attributes:{class:["ck","ck-tooltip__text"]},children:[{text:e.to("text")}]}]})}}n(72);class Wd extends Ol{constructor(t){super(t);const e=this.bindTemplate,n=Jn();this.set("class"),this.set("labelStyle"),this.set("icon"),this.set("isEnabled",!0),this.set("isOn",!1),this.set("isVisible",!0),this.set("keystroke"),this.set("label"),this.set("tabindex",-1),this.set("tooltip"),this.set("tooltipPosition","s"),this.set("type","button"),this.set("withText",!1),this.children=this.createCollection(),this.tooltipView=this._createTooltipView(),this.labelView=this._createLabelView(n),this.iconView=new Hd,this.iconView.extendTemplate({attributes:{class:"ck-button__icon"}}),this.bind("_tooltipString").to(this,"tooltip",this,"label",this,"keystroke",this._getTooltipString.bind(this)),this.setTemplate({tag:"button",attributes:{class:["ck","ck-button",e.to("class"),e.if("isEnabled","ck-disabled",t=>!t),e.if("isVisible","ck-hidden",t=>!t),e.to("isOn",t=>t?"ck-on":"ck-off"),e.if("withText","ck-button_with-text")],type:e.to("type",t=>t||"button"),tabindex:e.to("tabindex"),"aria-labelledby":`ck-editor__aria-label_${n}`,"aria-disabled":e.if("isEnabled",!0,t=>!t),"aria-pressed":e.if("isOn",!0)},children:this.children,on:{mousedown:e.to(t=>{t.preventDefault()}),click:e.to(t=>{this.isEnabled?this.fire("execute"):t.preventDefault()})}})}render(){super.render(),this.icon&&(this.iconView.bind("content").to(this,"icon"),this.children.add(this.iconView)),this.children.add(this.tooltipView),this.children.add(this.labelView)}focus(){this.element.focus()}_createTooltipView(){const t=new qd;return t.bind("text").to(this,"_tooltipString"),t.bind("position").to(this,"tooltipPosition"),t}_createLabelView(t){const e=new Ol,n=this.bindTemplate;return e.setTemplate({tag:"span",attributes:{class:["ck","ck-button__label"],style:n.to("labelStyle"),id:`ck-editor__aria-label_${t}`},children:[{text:this.bindTemplate.to("label")}]}),e}_getTooltipString(t,e,n){return t?"string"==typeof t?t:(n&&(n=function(t){return mo.isMac?ko(t).map(t=>go[t.toLowerCase()]||t).reduce((t,e)=>t.slice(-1)in po?t+e:t+"+"+e):t}(n)),t instanceof Function?t(e,n):`${e}${n?` (${n})`:""}`):""}}var Yd=n(22),$d=n.n(Yd),Gd=n(23),Qd=n.n(Gd);class Kd extends Gl{init(){const t=this.editor.t;this._addButton("undo",t("bt"),"CTRL+Z",$d.a),this._addButton("redo",t("bu"),"CTRL+Y",Qd.a)}_addButton(t,e,n,i){const o=this.editor;o.ui.componentFactory.add(t,r=>{const s=o.commands.get(t),a=new Wd(r);return a.set({label:e,icon:i,keystroke:n,tooltip:!0}),a.bind("isEnabled").to(s,"isEnabled"),this.listenTo(a,"execute",()=>o.execute(t)),a})}}class Jd extends Gl{static get requires(){return[Ud,Kd]}static get pluginName(){return"Undo"}}class Zd extends Gl{static get pluginName(){return"PendingActions"}init(){this.set("hasAny",!1),this._actions=new oo({idProperty:"_id"}),this._actions.delegate("add","remove").to(this)}add(t){if("string"!=typeof t)throw new Gn.b("pendingactions-add-invalid-message: The message must be a string.");const e=Object.create(Fi);return e.set("message",t),this._actions.add(e),this.hasAny=!0,e}remove(t){this._actions.remove(t),this.hasAny=!!this._actions.length}get first(){return this._actions.get(0)}[Symbol.iterator](){return this._actions[Symbol.iterator]()}}class Xd{constructor(){const t=new window.FileReader;this._reader=t,this.set("loaded",0),t.onprogress=(t=>{this.loaded=t.loaded})}get error(){return this._reader.error}read(t){const e=this._reader;return this.total=t.size,new Promise((n,i)=>{e.onload=(()=>{n(e.result)}),e.onerror=(()=>{i("error")}),e.onabort=(()=>{i("aborted")}),this._reader.readAsDataURL(t)})}abort(){this._reader.abort()}}ci(Xd,Fi);class tu extends Gl{static get pluginName(){return"FileRepository"}static get requires(){return[Zd]}init(){this.loaders=new oo,this.loaders.on("add",()=>this._updatePendingAction()),this.loaders.on("remove",()=>this._updatePendingAction()),this._loadersMap=new Map,this._pendingAction=null,this.set("uploaded",0),this.set("uploadTotal",null),this.bind("uploadedPercent").to(this,"uploaded",this,"uploadTotal",(t,e)=>e?t/e*100:0)}getLoader(t){return this._loadersMap.get(t)||null}createLoader(t){if(!this.createUploadAdapter)return bs.a.error("filerepository-no-upload-adapter: Upload adapter is not defined."),null;const e=new eu(Promise.resolve(t),this.createUploadAdapter);return this.loaders.add(e),this._loadersMap.set(t,e),t instanceof Promise&&e.file.then(t=>{this._loadersMap.set(t,e)}),e.file.catch(()=>{}),e.on("change:uploaded",()=>{let t=0;for(const e of this.loaders)t+=e.uploaded;this.uploaded=t}),e.on("change:uploadTotal",()=>{let t=0;for(const e of this.loaders)e.uploadTotal&&(t+=e.uploadTotal);this.uploadTotal=t}),e}destroyLoader(t){const e=t instanceof eu?t:this.getLoader(t);e._destroy(),this.loaders.remove(e),this._loadersMap.forEach((t,n)=>{t===e&&this._loadersMap.delete(n)})}_updatePendingAction(){const t=this.editor.plugins.get(Zd);if(this.loaders.length){if(!this._pendingAction){const e=this.editor.t,n=t=>`${e("au")} ${parseInt(t)}%.`;this._pendingAction=t.add(n(this.uploadedPercent)),this._pendingAction.bind("message").to(this,"uploadedPercent",n)}}else t.remove(this._pendingAction),this._pendingAction=null}}ci(tu,Fi);class eu{constructor(t,e){this.id=Jn(),this._filePromiseWrapper=this._createFilePromiseWrapper(t),this._adapter=e(this),this._reader=new Xd,this.set("status","idle"),this.set("uploaded",0),this.set("uploadTotal",null),this.bind("uploadedPercent").to(this,"uploaded",this,"uploadTotal",(t,e)=>e?t/e*100:0),this.set("uploadResponse",null)}get file(){return this._filePromiseWrapper?this._filePromiseWrapper.promise.then(t=>this._filePromiseWrapper?t:null):Promise.resolve(null)}read(){if("idle"!=this.status)throw new Gn.b("filerepository-read-wrong-status: You cannot call read if the status is different than idle.");return this.status="reading",this._filePromiseWrapper.promise.then(t=>this._reader.read(t)).then(t=>(this.status="idle",t)).catch(t=>{if("aborted"===t)throw this.status="aborted","aborted";throw this.status="error",this._reader.error?this._reader.error:t})}upload(){if("idle"!=this.status)throw new Gn.b("filerepository-upload-wrong-status: You cannot call upload if the status is different than idle.");return this.status="uploading",this._filePromiseWrapper.promise.then(()=>this._adapter.upload()).then(t=>(this.uploadResponse=t,this.status="idle",t)).catch(t=>{if("aborted"===this.status)throw"aborted";throw this.status="error",t})}abort(){const t=this.status;this.status="aborted",this._filePromiseWrapper.isFulfilled?"reading"==t?this._reader.abort():"uploading"==t&&this._adapter.abort&&this._adapter.abort():this._filePromiseWrapper.rejecter("aborted"),this._destroy()}_destroy(){this._filePromiseWrapper=void 0,this._reader=void 0,this._adapter=void 0,this.data=void 0,this.uploadResponse=void 0}_createFilePromiseWrapper(t){const e={};return e.promise=new Promise((n,i)=>{e.resolver=n,e.rejecter=i,e.isFulfilled=!1,t.then(t=>{e.isFulfilled=!0,n(t)}).catch(t=>{e.isFulfilled=!0,i(t)})}),e}}ci(eu,Fi);const nu="ckCsrfToken",iu=40,ou="abcdefghijklmnopqrstuvwxyz0123456789";function ru(){let t=function(t){t=t.toLowerCase();const e=document.cookie.split(";");for(const n of e){const e=n.split("="),i=decodeURIComponent(e[0].trim().toLowerCase());if(i===t)return decodeURIComponent(e[1])}return null}(nu);return t&&t.length==iu||(t=function(t){let e="";const n=new Uint8Array(t);window.crypto.getRandomValues(n);for(let t=0;t<n.length;t++){const i=ou.charAt(n[t]%ou.length);e+=Math.random()>.5?i.toUpperCase():i}return e}(iu),function(t,e){document.cookie=encodeURIComponent(t)+"="+encodeURIComponent(e)+";path=/"}(nu,t)),t}class su extends Gl{static get requires(){return[tu]}static get pluginName(){return"CKFinderUploadAdapter"}init(){const t=this.editor.config.get("ckfinder.uploadUrl");t&&(this.editor.plugins.get(tu).createUploadAdapter=(e=>new au(e,t,this.editor.t)))}}class au{constructor(t,e,n){this.loader=t,this.url=e,this.t=n}upload(){return this.loader.file.then(t=>new Promise((e,n)=>{this._initRequest(),this._initListeners(e,n,t),this._sendRequest(t)}))}abort(){this.xhr&&this.xhr.abort()}_initRequest(){const t=this.xhr=new XMLHttpRequest;t.open("POST",this.url,!0),t.responseType="json"}_initListeners(t,e,n){const i=this.xhr,o=this.loader,r=(0,this.t)("a")+` ${n.name}.`;i.addEventListener("error",()=>e(r)),i.addEventListener("abort",()=>e()),i.addEventListener("load",()=>{const n=i.response;if(!n||!n.uploaded)return e(n&&n.error&&n.error.message?n.error.message:r);t({default:n.url})}),i.upload&&i.upload.addEventListener("progress",t=>{t.lengthComputable&&(o.uploadTotal=t.total,o.uploaded=t.loaded)})}_sendRequest(t){const e=new FormData;e.append("upload",t),e.append("ckCsrfToken",ru()),this.xhr.send(e)}}class cu extends Xl{constructor(t,e){super(t),this.attributeKey=e}refresh(){const t=this.editor.model,e=t.document;this.value=e.selection.getAttribute(this.attributeKey),this.isEnabled=t.schema.checkAttributeInSelection(e.selection,this.attributeKey)}execute(t={}){const e=this.editor.model,n=e.document.selection,i=t.value;e.change(t=>{if(n.isCollapsed)i?t.setSelectionAttribute(this.attributeKey,i):t.removeSelectionAttribute(this.attributeKey);else{const o=e.schema.getValidRanges(n.getRanges(),this.attributeKey);for(const e of o)i?t.setAttribute(this.attributeKey,i,e):t.removeAttribute(this.attributeKey,e)}})}}var lu=n(24),du=n.n(lu);class uu extends Wd{constructor(t){super(t);const e=this.bindTemplate;this.set("color"),this.set("hasBorder"),this.icon=du.a,this.extendTemplate({attributes:{style:{backgroundColor:e.to("color")},class:["ck","ck-color-grid__tile",e.if("hasBorder","ck-color-table__color-tile_bordered")]}})}render(){super.render(),this.iconView.fillColor="hsl(0, 0%, 100%)"}}n(74);class hu extends Ol{constructor(t,e){super(t);const n=e&&e.colorDefinitions||[],i={};e&&e.columns&&(i.gridTemplateColumns=`repeat( ${e.columns}, 1fr)`),this.set("selectedColor"),this.items=this.createCollection(),this.focusTracker=new ol,this.keystrokes=new Qc,this._focusCycler=new Ul({focusables:this.items,focusTracker:this.focusTracker,keystrokeHandler:this.keystrokes,actions:{focusPrevious:"arrowleft",focusNext:"arrowright"}}),n.forEach(t=>{const e=new uu;e.set({color:t.color,label:t.label,tooltip:!0,hasBorder:t.options.hasBorder}),e.on("execute",()=>{this.fire("execute",{value:t.color,hasBorder:t.options.hasBorder,label:t.label})}),this.items.add(e)}),this.setTemplate({tag:"div",children:this.items,attributes:{class:["ck","ck-color-grid"],style:i}}),this.on("change:selectedColor",(t,e,n)=>{for(const t of this.items)t.isOn=t.color===n})}focus(){this.items.length&&this.items.first.focus()}focusLast(){this.items.length&&this.items.last.focus()}render(){super.render();for(const t of this.items)this.focusTracker.add(t.element);this.items.on("add",(t,e)=>{this.focusTracker.add(e.element)}),this.items.on("remove",(t,e)=>{this.focusTracker.remove(e.element)}),this.keystrokes.listenTo(this.element)}}var fu=n(25),mu=n.n(fu);n(76);class pu extends Ol{constructor(t,{colors:e,columns:n,removeButtonLabel:i}){super(t),this.items=this.createCollection(),this.colorDefinitions=e,this.focusTracker=new ol,this.keystrokes=new Qc,this.set("selectedColor"),this.removeButtonLabel=i,this.columns=n,this._focusCycler=new Ul({focusables:this.items,focusTracker:this.focusTracker,keystrokeHandler:this.keystrokes,actions:{focusPrevious:"arrowup",focusNext:"arrowdown"}}),this.setTemplate({tag:"div",attributes:{class:["ck","ck-color-table"]},children:this.items}),this.items.add(this.removeColorButton()),this.items.add(this.createStaticColorTable())}removeColorButton(){const t=new Wd;return t.set({withText:!0,icon:mu.a,tooltip:!0,label:this.removeButtonLabel}),t.class="ck-color-table__remove-color",t.on("execute",()=>{this.fire("execute",{value:null})}),t}createStaticColorTable(){const t=new hu(this.locale,{colorDefinitions:this.colorDefinitions,columns:this.columns});return t.delegate("execute").to(this),t.bind("selectedColor").to(this),t}render(){super.render();for(const t of this.items)this.focusTracker.add(t.element);this.keystrokes.listenTo(this.element)}focus(){this._focusCycler.focusFirst()}focusLast(){this._focusCycler.focusLast()}}const gu="fontSize",bu="fontFamily",wu="fontColor",_u="fontBackgroundColor";function ku(t,e){const n={model:{key:t,values:[]},view:{},upcastAlso:{}};for(const t of e)n.model.values.push(t.model),n.view[t.model]=t.view,t.upcastAlso&&(n.upcastAlso[t.model]=t.upcastAlso);return n}function vu(t){return e=>(function(t){return t.replace(/\s/g,"")})(e.getStyle(t))}function yu(t){return(e,n)=>n.createAttributeElement("span",{style:`${t}:${e}`})}function xu(t){return"string"==typeof t?{model:t.replace(/ /g,""),label:t,hasBorder:!1,view:{name:"span",styles:{color:t},priority:5}}:{model:t.color.replace(/ /g,""),label:t.label||t.color,hasBorder:void 0!==t.hasBorder&&t.hasBorder,view:{name:"span",styles:{color:`${t.color}`},priority:5}}}class Au extends cu{constructor(t){super(t,bu)}}function Cu(t){return t.map(Tu).filter(t=>!!t)}function Tu(t){return"object"==typeof t?t:"default"===t?{title:"Default",model:void 0}:"string"==typeof t?function(t){const e=t.replace(/"|'/g,"").split(","),n=e[0],i=e.map(Pu).join(", ");return{title:n,model:n,view:{name:"span",styles:{"font-family":i},priority:5}}}(t):void 0}function Pu(t){return(t=t.trim()).indexOf(" ")>0&&(t=`'${t}'`),t}class Mu extends Gl{constructor(t){super(t),t.config.define(bu,{options:["default","Arial, Helvetica, sans-serif","Courier New, Courier, monospace","Georgia, serif","Lucida Sans Unicode, Lucida Grande, sans-serif","Tahoma, Geneva, sans-serif","Times New Roman, Times, serif","Trebuchet MS, Helvetica, sans-serif","Verdana, Geneva, sans-serif"]})}init(){const t=this.editor;t.model.schema.extend("$text",{allowAttributes:bu}),t.model.schema.setAttributeProperties(bu,{isFormatting:!0});const e=Cu(t.config.get("fontFamily.options")).filter(t=>t.model),n=ku(bu,e);t.conversion.attributeToElement(n),t.commands.add(bu,new Au(t))}}class Eu{constructor(t,e){e&&Li(this,e),t&&this.set(t)}}ci(Eu,Fi);class Su extends Ol{constructor(t){super(t);const e=this.bindTemplate;this.set("isVisible",!1),this.set("position","se"),this.children=this.createCollection(),this.setTemplate({tag:"div",attributes:{class:["ck","ck-reset","ck-dropdown__panel",e.to("position",t=>`ck-dropdown__panel_${t}`),e.if("isVisible","ck-dropdown__panel-visible")]},children:this.children,on:{selectstart:e.to(t=>t.preventDefault())}})}focus(){this.children.length&&this.children.first.focus()}focusLast(){if(this.children.length){const t=this.children.last;"function"==typeof t.focusLast?t.focusLast():t.focus()}}}n(78);function Iu({element:t,target:e,positions:n,limiter:i,fitInViewport:o}){W(e)&&(e=e()),W(i)&&(i=i());const r=function(t){for(;t&&"html"!=t.tagName.toLowerCase();){if("static"!=nr.window.getComputedStyle(t).position)return t;t=t.parentElement}return null}(t.parentElement),s=new As(t),a=new As(e);let c,l;if(i||o){const t=i&&new As(i).getVisible(),e=o&&new As(nr.window);[l,c]=function(t,e,n,i,o){let r,s,a=0,c=0;const l=n.getArea();return t.some(t=>{const[d,u]=Nu(t,e,n);let h,f;if(i)if(o){const t=i.getIntersection(o);h=t?t.getIntersectionArea(u):0}else h=i.getIntersectionArea(u);function m(){c=f,a=h,r=u,s=d}return o&&(f=o.getIntersectionArea(u)),o&&!i?f>c&&m():!o&&i?h>a&&m():f>c&&h>=a?m():f>=c&&h>a&&m(),h===l}),r?[s,r]:null}(n,a,s,t,e)||Nu(n[0],a,s)}else[l,c]=Nu(n[0],a,s);let{left:d,top:u}=Ou(c);if(r){const t=Ou(new As(r)),e=ys(r);d-=t.left,u-=t.top,d+=r.scrollLeft,u+=r.scrollTop,d-=e.left,u-=e.top}return{left:d,top:u,name:l}}function Nu(t,e,n){const{left:i,top:o,name:r}=t(e,n);return[r,n.clone().moveTo(i,o)]}function Ou({left:t,top:e}){const{scrollX:n,scrollY:i}=nr.window;return{left:t+n,top:e+i}}class Ru extends Ol{constructor(t,e,n){super(t);const i=this.bindTemplate;this.buttonView=e,this.panelView=n,this.set("isOpen",!1),this.set("isEnabled",!0),this.set("class"),this.set("panelPosition","auto"),this.focusTracker=new ol,this.keystrokes=new Qc,this.setTemplate({tag:"div",attributes:{class:["ck","ck-dropdown",i.to("class"),i.if("isEnabled","ck-disabled",t=>!t)]},children:[e,n]}),e.extendTemplate({attributes:{class:["ck-dropdown__button"]}})}render(){super.render(),this.listenTo(this.buttonView,"open",()=>{this.isOpen=!this.isOpen}),this.panelView.bind("isVisible").to(this,"isOpen"),this.on("change:isOpen",()=>{if(this.isOpen)if("auto"===this.panelPosition){const t=Ru.defaultPanelPositions;this.panelView.position=Iu({element:this.panelView.element,target:this.buttonView.element,fitInViewport:!0,positions:[t.southEast,t.southWest,t.northEast,t.northWest]}).name}else this.panelView.position=this.panelPosition}),this.keystrokes.listenTo(this.element),this.focusTracker.add(this.element);const t=(t,e)=>{this.isOpen&&(this.buttonView.focus(),this.isOpen=!1,e())};this.keystrokes.set("arrowdown",(t,e)=>{this.buttonView.isEnabled&&!this.isOpen&&(this.isOpen=!0,e())}),this.keystrokes.set("arrowright",(t,e)=>{this.isOpen&&e()}),this.keystrokes.set("arrowleft",t),this.keystrokes.set("esc",t)}focus(){this.buttonView.focus()}}Ru.defaultPanelPositions={southEast:t=>({top:t.bottom,left:t.left,name:"se"}),southWest:(t,e)=>({top:t.bottom,left:t.left-e.width+t.width,name:"sw"}),northEast:(t,e)=>({top:t.top-e.height,left:t.left,name:"ne"}),northWest:(t,e)=>({top:t.bottom-e.height,left:t.left-e.width+t.width,name:"nw"})};var Du=n(26),Lu=n.n(Du);class ju extends Wd{constructor(t){super(t),this.arrowView=this._createArrowView(),this.extendTemplate({attributes:{"aria-haspopup":!0}}),this.delegate("execute").to(this,"open")}render(){super.render(),this.children.add(this.arrowView)}_createArrowView(){const t=new Hd;return t.content=Lu.a,t.extendTemplate({attributes:{class:"ck-dropdown__arrow"}}),t}}n(80);class Vu extends Ol{constructor(){super(),this.items=this.createCollection(),this.focusTracker=new ol,this.keystrokes=new Qc,this._focusCycler=new Ul({focusables:this.items,focusTracker:this.focusTracker,keystrokeHandler:this.keystrokes,actions:{focusPrevious:"arrowup",focusNext:"arrowdown"}}),this.setTemplate({tag:"ul",attributes:{class:["ck","ck-reset","ck-list"]},children:this.items})}render(){super.render();for(const t of this.items)this.focusTracker.add(t.element);this.items.on("add",(t,e)=>{this.focusTracker.add(e.element)}),this.items.on("remove",(t,e)=>{this.focusTracker.remove(e.element)}),this.keystrokes.listenTo(this.element)}focus(){this._focusCycler.focusFirst()}focusLast(){this._focusCycler.focusLast()}}class Bu extends Ol{constructor(t){super(t),this.children=this.createCollection(),this.setTemplate({tag:"li",attributes:{class:["ck","ck-list__item"]},children:this.children})}focus(){this.children.first.focus()}}class zu extends Ol{constructor(t){super(t),this.setTemplate({tag:"li",attributes:{class:["ck","ck-list__separator"]}})}}n(82);class Fu extends Wd{constructor(t){super(t),this.toggleSwitchView=this._createToggleView(),this.extendTemplate({attributes:{class:"ck-switchbutton"}})}render(){super.render(),this.children.add(this.toggleSwitchView)}_createToggleView(){const t=new Ol;return t.setTemplate({tag:"span",attributes:{class:["ck","ck-button__toggle"]},children:[{tag:"span",attributes:{class:["ck","ck-button__toggle__inner"]}}]}),t}}function Uu({emitter:t,activator:e,callback:n,contextElements:i}){t.listenTo(document,"mousedown",(t,{target:o})=>{if(e()){for(const t of i)if(t.contains(o))return;n()}})}n(84),n(86);function Hu(t,e=ju){const n=new e(t),i=new Su(t),o=new Ru(t,n,i);return n.bind("isEnabled").to(o),n instanceof ju?n.bind("isOn").to(o,"isOpen"):n.arrowView.bind("isOn").to(o,"isOpen"),function(t){(function(t){t.on("render",()=>{Uu({emitter:t,activator:()=>t.isOpen,callback:()=>{t.isOpen=!1},contextElements:[t.element]})})})(t),function(t){t.on("execute",e=>{e.source instanceof Fu||(t.isOpen=!1)})}(t),function(t){t.keystrokes.set("arrowdown",(e,n)=>{t.isOpen&&(t.panelView.focus(),n())}),t.keystrokes.set("arrowup",(e,n)=>{t.isOpen&&(t.panelView.focusLast(),n())})}(t)}(o),o}function qu(t,e){const n=t.locale,i=t.listView=new Vu(n);i.items.bindTo(e).using(({type:t,model:e})=>{if("separator"===t)return new zu(n);if("button"===t||"switchbutton"===t){const i=new Bu(n);let o;return(o="button"===t?new Wd(n):new Fu(n)).bind(...Object.keys(e)).to(e),o.delegate("execute").to(i),i.children.add(o),i}}),t.panelView.children.add(i),i.items.delegate("execute").to(t)}var Wu=n(27),Yu=n.n(Wu);class $u extends Gl{init(){const t=this.editor,e=t.t,n=this._getLocalizedOptions(),i=t.commands.get(bu);t.ui.componentFactory.add(bu,o=>{const r=Hu(o);return qu(r,function(t,e){const n=new oo;for(const i of t){const t={type:"button",model:new Eu({commandName:bu,commandParam:i.model,label:i.title,withText:!0})};t.model.bind("isOn").to(e,"value",t=>t===i.model),i.view&&i.view.styles&&t.model.set("labelStyle",`font-family: ${i.view.styles["font-family"]}`),n.add(t)}return n}(n,i)),r.buttonView.set({label:e("av"),icon:Yu.a,tooltip:!0}),r.extendTemplate({attributes:{class:"ck-font-family-dropdown"}}),r.bind("isEnabled").to(i),this.listenTo(r,"execute",e=>{t.execute(e.source.commandName,{value:e.source.commandParam}),t.editing.view.focus()}),r})}_getLocalizedOptions(){const t=this.editor,e=t.t;return Cu(t.config.get(bu).options).map(t=>("Default"===t.title&&(t.title=e("aw")),t))}}class Gu extends Gl{static get requires(){return[Mu,$u]}static get pluginName(){return"FontFamily"}}class Qu extends cu{constructor(t){super(t,gu)}}function Ku(t){return t.map(Zu).filter(t=>!!t)}const Ju={tiny:{title:"Tiny",model:"tiny",view:{name:"span",classes:"text-tiny",priority:5}},small:{title:"Small",model:"small",view:{name:"span",classes:"text-small",priority:5}},big:{title:"Big",model:"big",view:{name:"span",classes:"text-big",priority:5}},huge:{title:"Huge",model:"huge",view:{name:"span",classes:"text-huge",priority:5}}};function Zu(t){if("object"==typeof t)return t;if(Ju[t])return Ju[t];if("default"===t)return{model:void 0,title:"Default"};const e=parseFloat(t);return isNaN(e)?void 0:function(t){return{title:String(t),model:t,view:{name:"span",styles:{"font-size":`${t}px`},priority:5}}}(e)}class Xu extends Gl{constructor(t){super(t),t.config.define(gu,{options:["tiny","small","default","big","huge"]});const e=Ku(this.editor.config.get("fontSize.options")).filter(t=>t.model),n=ku(gu,e);t.conversion.attributeToElement(n),t.commands.add(gu,new Qu(t))}init(){const t=this.editor;t.model.schema.extend("$text",{allowAttributes:gu}),t.model.schema.setAttributeProperties(gu,{isFormatting:!0})}}var th=n(28),eh=n.n(th);n(88);class nh extends Gl{init(){const t=this.editor,e=t.t,n=this._getLocalizedOptions(),i=t.commands.get(gu);t.ui.componentFactory.add(gu,o=>{const r=Hu(o);return qu(r,function(t,e){const n=new oo;for(const i of t){const t={type:"button",model:new Eu({commandName:gu,commandParam:i.model,label:i.title,class:"ck-fontsize-option",withText:!0})};i.view&&i.view.styles&&t.model.set("labelStyle",`font-size:${i.view.styles["font-size"]}`),i.view&&i.view.classes&&t.model.set("class",`${t.model.class} ${i.view.classes}`),t.model.bind("isOn").to(e,"value",t=>t===i.model),n.add(t)}return n}(n,i)),r.buttonView.set({label:e("ax"),icon:eh.a,tooltip:!0}),r.extendTemplate({attributes:{class:["ck-font-size-dropdown"]}}),r.bind("isEnabled").to(i),this.listenTo(r,"execute",e=>{t.execute(e.source.commandName,{value:e.source.commandParam}),t.editing.view.focus()}),r})}_getLocalizedOptions(){const t=this.editor,e=t.t,n={Default:e("aw"),Tiny:e("ay"),Small:e("az"),Big:e("ba"),Huge:e("bb")};return Ku(t.config.get(gu).options).map(t=>{const e=n[t.title];return e&&e!=t.title&&(t=Object.assign({},t,{title:e})),t})}}class ih extends Gl{static get requires(){return[Xu,nh]}static get pluginName(){return"FontSize"}}class oh extends cu{constructor(t){super(t,wu)}}class rh extends Gl{constructor(t){super(t),t.config.define(wu,{colors:[{color:"hsl(0, 0%, 0%)",label:"Black"},{color:"hsl(0, 0%, 30%)",label:"Dim grey"},{color:"hsl(0, 0%, 60%)",label:"Grey"},{color:"hsl(0, 0%, 90%)",label:"Light grey"},{color:"hsl(0, 0%, 100%)",label:"White",hasBorder:!0},{color:"hsl(0, 75%, 60%)",label:"Red"},{color:"hsl(30, 75%, 60%)",label:"Orange"},{color:"hsl(60, 75%, 60%)",label:"Yellow"},{color:"hsl(90, 75%, 60%)",label:"Light green"},{color:"hsl(120, 75%, 60%)",label:"Green"},{color:"hsl(150, 75%, 60%)",label:"Aquamarine"},{color:"hsl(180, 75%, 60%)",label:"Turquoise"},{color:"hsl(210, 75%, 60%)",label:"Light blue"},{color:"hsl(240, 75%, 60%)",label:"Blue"},{color:"hsl(270, 75%, 60%)",label:"Purple"}],columns:5}),t.conversion.for("upcast").elementToAttribute({view:{name:"span",styles:{color:/[\s\S]+/}},model:{key:wu,value:vu("color")}}),t.conversion.for("downcast").attributeToElement({model:wu,view:yu("color")}),t.commands.add(wu,new oh(t)),t.model.schema.extend("$text",{allowAttributes:wu}),t.model.schema.setAttributeProperties(wu,{isFormatting:!0})}}class sh extends Gl{constructor(t,{commandName:e,icon:n,componentName:i,dropdownLabel:o}){super(t),this.commandName=e,this.componentName=i,this.icon=n,this.dropdownLabel=o,this.columns=t.config.get(`${this.componentName}.columns`)}init(){const t=this.editor,e=t.t,n=t.commands.get(this.commandName),i=function(t){return t.map(xu).filter(t=>!!t)}(t.config.get(this.componentName).colors),o=function(t,e){const n=t.t,i={Black:n("bx"),"Dim grey":n("by"),Grey:n("bz"),"Light grey":n("ca"),White:n("cb"),Red:n("cc"),Orange:n("cd"),Yellow:n("ce"),"Light green":n("cf"),Green:n("cg"),Aquamarine:n("ch"),Turquoise:n("ci"),"Light blue":n("cj"),Blue:n("ck"),Purple:n("cl")};return e.map(t=>{const e=i[t.label];return e&&e!=t.label&&(t.label=e),t})}(t,i);t.ui.componentFactory.add(this.componentName,i=>{const r=Hu(i);return function({dropdownView:t,colors:e,columns:n,removeButtonLabel:i}){const o=t.locale,r=new pu(o,{colors:e,columns:n,removeButtonLabel:i});return t.colorTableView=r,t.panelView.children.add(r),r.delegate("execute").to(t,"execute"),r}({dropdownView:r,colors:o.map(t=>({label:t.label,color:t.model,options:{hasBorder:t.hasBorder}})),columns:this.columns,removeButtonLabel:e("cm")}).bind("selectedColor").to(n,"value"),r.buttonView.set({label:this.dropdownLabel,icon:this.icon,tooltip:!0}),r.extendTemplate({attributes:{class:"ck-color-ui-dropdown"}}),r.bind("isEnabled").to(n),r.on("execute",(e,n)=>{t.execute(this.commandName,n),t.editing.view.focus()}),r})}}var ah=n(29),ch=n.n(ah);class lh extends sh{constructor(t){const e=t.locale.t;super(t,{commandName:wu,componentName:wu,icon:ch.a,dropdownLabel:e("bd")})}static get pluginName(){return"FontColorUI"}}class dh extends Gl{static get requires(){return[rh,lh]}static get pluginName(){return"FontColor"}}class uh extends cu{constructor(t){super(t,_u)}}class hh extends Gl{constructor(t){super(t),t.config.define(_u,{colors:[{color:"hsl(0, 0%, 0%)",label:"Black"},{color:"hsl(0, 0%, 30%)",label:"Dim grey"},{color:"hsl(0, 0%, 60%)",label:"Grey"},{color:"hsl(0, 0%, 90%)",label:"Light grey"},{color:"hsl(0, 0%, 100%)",label:"White",hasBorder:!0},{color:"hsl(0, 75%, 60%)",label:"Red"},{color:"hsl(30, 75%, 60%)",label:"Orange"},{color:"hsl(60, 75%, 60%)",label:"Yellow"},{color:"hsl(90, 75%, 60%)",label:"Light green"},{color:"hsl(120, 75%, 60%)",label:"Green"},{color:"hsl(150, 75%, 60%)",label:"Aquamarine"},{color:"hsl(180, 75%, 60%)",label:"Turquoise"},{color:"hsl(210, 75%, 60%)",label:"Light blue"},{color:"hsl(240, 75%, 60%)",label:"Blue"},{color:"hsl(270, 75%, 60%)",label:"Purple"}],columns:5}),t.conversion.for("upcast").elementToAttribute({view:{name:"span",styles:{"background-color":/[\s\S]+/}},model:{key:_u,value:vu("background-color")}}),t.conversion.for("downcast").attributeToElement({model:_u,view:yu("background-color")}),t.commands.add(_u,new uh(t)),t.model.schema.extend("$text",{allowAttributes:_u}),t.model.schema.setAttributeProperties(_u,{isFormatting:!0})}}var fh=n(30),mh=n.n(fh);class ph extends sh{constructor(t){const e=t.locale.t;super(t,{commandName:_u,componentName:_u,icon:mh.a,dropdownLabel:e("bc")})}static get pluginName(){return"FontBackgroundColorUI"}}class gh extends Gl{static get requires(){return[hh,ph]}static get pluginName(){return"FontBackgroundColor"}}class bh extends Xl{constructor(t,e){super(t),this.attributeKey=e}refresh(){const t=this.editor.model,e=t.document;this.value=this._getValueFromFirstAllowedNode(),this.isEnabled=t.schema.checkAttributeInSelection(e.selection,this.attributeKey)}execute(t={}){const e=this.editor.model,n=e.document.selection,i=void 0===t.forceValue?!this.value:t.forceValue;e.change(t=>{if(n.isCollapsed)i?t.setSelectionAttribute(this.attributeKey,!0):t.removeSelectionAttribute(this.attributeKey);else{const o=e.schema.getValidRanges(n.getRanges(),this.attributeKey);for(const e of o)i?t.setAttribute(this.attributeKey,i,e):t.removeAttribute(this.attributeKey,e)}})}_getValueFromFirstAllowedNode(){const t=this.editor.model,e=t.schema,n=t.document.selection;if(n.isCollapsed)return n.hasAttribute(this.attributeKey);for(const t of n.getRanges())for(const n of t.getItems())if(e.checkAttribute(n,this.attributeKey))return n.hasAttribute(this.attributeKey);return!1}}const wh="bold";class _h extends Gl{init(){const t=this.editor;t.model.schema.extend("$text",{allowAttributes:wh}),t.model.schema.setAttributeProperties(wh,{isFormatting:!0}),t.conversion.attributeToElement({model:wh,view:"strong",upcastAlso:["b",{styles:{"font-weight":"bold"}}]}),t.commands.add(wh,new bh(t,wh)),t.keystrokes.set("CTRL+B",wh)}}var kh=n(31),vh=n.n(kh);const yh="bold";class xh extends Gl{init(){const t=this.editor,e=t.t;t.ui.componentFactory.add(yh,n=>{const i=t.commands.get(yh),o=new Wd(n);return o.set({label:e("b"),icon:vh.a,keystroke:"CTRL+B",tooltip:!0}),o.bind("isOn","isEnabled").to(i,"value","isEnabled"),this.listenTo(o,"execute",()=>t.execute(yh)),o})}}const Ah="italic";class Ch extends Gl{init(){const t=this.editor;t.model.schema.extend("$text",{allowAttributes:Ah}),t.model.schema.setAttributeProperties(Ah,{isFormatting:!0}),t.conversion.attributeToElement({model:Ah,view:"i",upcastAlso:["em",{styles:{"font-style":"italic"}}]}),t.commands.add(Ah,new bh(t,Ah)),t.keystrokes.set("CTRL+I",Ah)}}var Th=n(32),Ph=n.n(Th);const Mh="italic";class Eh extends Gl{init(){const t=this.editor,e=t.t;t.ui.componentFactory.add(Mh,n=>{const i=t.commands.get(Mh),o=new Wd(n);return o.set({label:e("c"),icon:Ph.a,keystroke:"CTRL+I",tooltip:!0}),o.bind("isOn","isEnabled").to(i,"value","isEnabled"),this.listenTo(o,"execute",()=>t.execute(Mh)),o})}}function Sh(t){const e=t.next();return e.done?null:e.value}const Ih=["left","right","center","justify"];function Nh(t){return Ih.includes(t)}function Oh(t){return"left"===t}const Rh="alignment";class Dh extends Xl{refresh(){const t=Sh(this.editor.model.document.selection.getSelectedBlocks());this.isEnabled=!!t&&this._canBeAligned(t),this.value=this.isEnabled&&t.hasAttribute("alignment")?t.getAttribute("alignment"):"left"}execute(t={}){const e=this.editor.model,n=e.document,i=t.value;e.change(t=>{const e=Array.from(n.selection.getSelectedBlocks()).filter(t=>this._canBeAligned(t)),o=e[0].getAttribute("alignment");Oh(i)||o===i||!i?function(t,e){for(const n of t)e.removeAttribute(Rh,n)}(e,t):function(t,e,n){for(const i of t)e.setAttribute(Rh,n,i)}(e,t,i)})}_canBeAligned(t){return this.editor.model.schema.checkAttribute(t,Rh)}}class Lh extends Gl{constructor(t){super(t),t.config.define("alignment",{options:[...Ih]})}init(){const t=this.editor,e=t.model.schema,n=t.config.get("alignment.options").filter(Nh);e.extend("$block",{allowAttributes:"alignment"}),t.model.schema.setAttributeProperties("alignment",{isFormatting:!0});const i=function(t){const e={model:{key:"alignment",values:t.slice()},view:{}};for(const n of t)e.view[n]={key:"style",value:{"text-align":n}};return e}(n.filter(t=>!Oh(t)));t.conversion.attributeToAttribute(i),t.commands.add("alignment",new Dh(t))}}var jh=n(13),Vh=n.n(jh),Bh=n(33),zh=n.n(Bh),Fh=n(34),Uh=n.n(Fh),Hh=n(35),qh=n.n(Hh);const Wh=new Map([["left",Vh.a],["right",zh.a],["center",Uh.a],["justify",qh.a]]);class Yh extends Gl{get localizedOptionTitles(){const t=this.editor.t;return{left:t("d"),right:t("e"),center:t("f"),justify:t("g")}}static get pluginName(){return"AlignmentUI"}init(){const t=this.editor,e=t.ui.componentFactory,n=t.t,i=t.config.get("alignment.options");i.filter(Nh).forEach(t=>this._addButton(t)),e.add("alignment",t=>{const o=Hu(t),r=i.map(t=>e.create(`alignment:${t}`));!function(t,e){const n=t.toolbarView=new Wl;t.extendTemplate({attributes:{class:["ck-toolbar-dropdown"]}}),e.map(t=>n.items.add(t)),t.panelView.children.add(n),n.items.delegate("execute").to(t)}(o,r),o.buttonView.set({label:n("h"),tooltip:!0}),o.toolbarView.isVertical=!0,o.extendTemplate({attributes:{class:"ck-alignment-dropdown"}});const s=Vh.a;return o.buttonView.bind("icon").toMany(r,"isOn",(...t)=>{const e=t.findIndex(t=>t);return e<0?s:r[e].icon}),o.bind("isEnabled").toMany(r,"isEnabled",(...t)=>t.some(t=>t)),o})}_addButton(t){const e=this.editor;e.ui.componentFactory.add(`alignment:${t}`,n=>{const i=e.commands.get("alignment"),o=new Wd(n);return o.set({label:this.localizedOptionTitles[t],icon:Wh.get(t),tooltip:!0}),o.bind("isEnabled").to(i),o.bind("isOn").to(i,"value",e=>e===t),this.listenTo(o,"execute",()=>{e.execute("alignment",{value:t}),e.editing.view.focus()}),o})}}class $h extends Xl{refresh(){this.value=this._getValue(),this.isEnabled=this._checkEnabled()}execute(){const t=this.editor.model,e=t.schema,n=t.document.selection,i=Array.from(n.getTopMostBlocks());t.change(t=>{if(this.value)this._removeQuote(t,i.filter(Gh));else{const n=i.filter(t=>Gh(t)||Kh(e,t));this._applyQuote(t,n)}})}_getValue(){const t=Sh(this.editor.model.document.selection.getTopMostBlocks());return!(!t||!Gh(t))}_checkEnabled(){if(this.value)return!0;const t=this.editor.model.document.selection,e=this.editor.model.schema,n=Sh(t.getSelectedBlocks());return!!n&&Kh(e,n)}_removeQuote(t,e){Qh(t,e).reverse().forEach(e=>{if(e.start.isAtStart&&e.end.isAtEnd)return void t.unwrap(e.start.parent);if(e.start.isAtStart){const n=t.createPositionBefore(e.start.parent);return void t.move(e,n)}e.end.isAtEnd||t.split(e.end);const n=t.createPositionAfter(e.end.parent);t.move(e,n)})}_applyQuote(t,e){const n=[];Qh(t,e).reverse().forEach(e=>{let i=Gh(e.start);i||(i=t.createElement("blockQuote"),t.wrap(e,i)),n.push(i)}),n.reverse().reduce((e,n)=>e.nextSibling==n?(t.merge(t.createPositionAfter(e)),e):n)}}function Gh(t){return"blockQuote"==t.parent.name?t.parent:null}function Qh(t,e){let n,i=0;const o=[];for(;i<e.length;){const r=e[i],s=e[i+1];n||(n=t.createPositionBefore(r)),s&&r.nextSibling==s||(o.push(t.createRange(n,t.createPositionAfter(r))),n=null),i++}return o}function Kh(t,e){const n=t.checkChild(e.parent,"blockQuote"),i=t.checkChild(["$root","blockQuote"],e);return n&&i}class Jh extends Gl{init(){const t=this.editor,e=t.model.schema;t.commands.add("blockQuote",new $h(t)),e.register("blockQuote",{allowWhere:"$block",allowContentOf:"$root"}),e.addChildCheck((t,e)=>{if(t.endsWith("blockQuote")&&"blockQuote"==e.name)return!1}),t.conversion.elementToElement({model:"blockQuote",view:"blockquote"}),t.model.document.registerPostFixer(n=>{const i=t.model.document.differ.getChanges();for(const t of i)if("insert"==t.type){const i=t.position.nodeAfter;if(!i)continue;if(i.is("blockQuote")&&i.isEmpty)return n.remove(i),!0;if(i.is("blockQuote")&&!e.checkChild(t.position,i))return n.unwrap(i),!0;if(i.is("element")){const t=n.createRangeIn(i);for(const i of t.getItems())if(i.is("blockQuote")&&!e.checkChild(n.createPositionBefore(i),i))return n.unwrap(i),!0}}else if("remove"==t.type){const e=t.position.parent;if(e.is("blockQuote")&&e.isEmpty)return n.remove(e),!0}return!1})}afterInit(){const t=this.editor.commands.get("blockQuote");this.listenTo(this.editor.editing.view.document,"enter",(e,n)=>{const i=this.editor.model.document,o=i.selection.getLastPosition().parent;i.selection.isCollapsed&&o.isEmpty&&t.value&&(this.editor.execute("blockQuote"),this.editor.editing.view.scrollToTheSelection(),n.preventDefault(),e.stop())})}}var Zh=n(36),Xh=n.n(Zh);n(90);class tf extends Gl{init(){const t=this.editor,e=t.t;t.ui.componentFactory.add("blockQuote",n=>{const i=t.commands.get("blockQuote"),o=new Wd(n);return o.set({label:e("i"),icon:Xh.a,tooltip:!0}),o.bind("isOn","isEnabled").to(i,"value","isEnabled"),this.listenTo(o,"execute",()=>t.execute("blockQuote")),o})}}var ef=n(37),nf=n.n(ef);class of extends Gl{static get pluginName(){return"CKFinderUI"}init(){const t=this.editor,e=t.ui.componentFactory,n=t.t;e.add("ckfinder",e=>{const i=t.commands.get("ckfinder"),o=new Wd(e);return o.set({label:n("j"),icon:nf.a,tooltip:!0}),o.bind("isEnabled").to(i),o.on("execute",()=>{t.execute("ckfinder"),t.editing.view.focus()}),o})}}class rf extends Gl{static get pluginName(){return"Notification"}init(){this.on("show:warning",(t,e)=>{window.alert(e.message)},{priority:"lowest"})}showSuccess(t,e={}){this._showNotification({message:t,type:"success",namespace:e.namespace,title:e.title})}showInfo(t,e={}){this._showNotification({message:t,type:"info",namespace:e.namespace,title:e.title})}showWarning(t,e={}){this._showNotification({message:t,type:"warning",namespace:e.namespace,title:e.title})}_showNotification(t){const e=`show:${t.type}`+(t.namespace?`:${t.namespace}`:"");this.fire(e,{message:t.message,type:t.type,title:t.title||""})}}class sf extends Xl{constructor(t){super(t),this.stopListening(this.editor.model.document,"change"),this.listenTo(this.editor.model.document,"change",()=>this.refresh(),{priority:"low"})}refresh(){const t=this.editor.commands.get("imageUpload"),e=this.editor.commands.get("link");this.isEnabled=t&&e&&(t.isEnabled||e.isEnabled)}execute(){const t=this.editor,e=this.editor.config.get("ckfinder.openerMethod")||"modal";if("popup"!=e&&"modal"!=e)throw new Gn.b('ckfinder-unknown-openerMethod: The openerMethod config option must by "popup" or "modal".');const n=this.editor.config.get("ckfinder.options")||{};n.chooseFiles=!0;const i=n.onInit;n.language||(n.language=t.locale.language),n.onInit=(e=>{i&&i(),e.on("files:choose",n=>{const i=n.data.files.toArray(),o=i.filter(t=>!t.isImage()),r=i.filter(t=>t.isImage());for(const e of o)t.execute("link",e.getUrl());const s=[];for(const t of r){const n=t.getUrl();s.push(n||e.request("file:getProxyUrl",{file:t}))}s.length&&af(t,s)}),e.on("file:choose:resizedImage",e=>{const n=e.data.resizedUrl;if(n)af(t,[n]);else{const e=t.plugins.get("Notification"),n=t.locale.t;e.showWarning(n("be"),{title:n("bf"),namespace:"ckfinder"})}})}),window.CKFinder[e](n)}}function af(t,e){if(t.commands.get("imageUpload").isEnabled)t.execute("imageInsert",{source:e});else{const e=t.plugins.get("Notification"),n=t.locale.t;e.showWarning(n("bg"),{title:n("bh"),namespace:"ckfinder"})}}class cf extends Gl{static get pluginName(){return"CKFinderEditing"}static get requires(){return[rf]}init(){const t=this.editor;t.commands.add("ckfinder",new sf(t))}}const lf=/^data:(\S*?);base64,/;class df{constructor(t,e,n){if(!t)throw new Error("File must be provided");if(!e)throw new Error("Token must be provided");if(!n)throw new Error("Api address must be provided");this.file=function(t){if("string"!=typeof t)return!1;const e=t.match(lf);return!(!e||!e.length)}(t)?function(t,e=512){try{const n=t.match(lf)[1],i=atob(t.replace(lf,"")),o=[];for(let t=0;t<i.length;t+=e){const n=i.slice(t,t+e),r=new Array(n.length);for(let t=0;t<n.length;t++)r[t]=n.charCodeAt(t);o.push(new Uint8Array(r))}return new Blob(o,{type:n})}catch(t){throw new Error("Problem with decoding Base64 image data.")}}(t):t,this._token=e,this._apiAddress=n}onProgress(t){return this.on("progress",(e,n)=>t(n)),this}onError(t){return this.once("error",(e,n)=>t(n)),this}abort(){this.xhr.abort()}send(){return this._prepareRequest(),this._attachXHRListeners(),this._sendRequest()}_prepareRequest(){const t=new XMLHttpRequest;t.open("POST",this._apiAddress),t.setRequestHeader("Authorization",this._token.value),t.responseType="json",this.xhr=t}_attachXHRListeners(){const t=this,e=this.xhr;function n(e){return()=>t.fire("error",e)}e.addEventListener("error",n("Network Error")),e.addEventListener("abort",n("Abort")),e.upload&&e.upload.addEventListener("progress",t=>{t.lengthComputable&&this.fire("progress",{total:t.total,uploaded:t.loaded})}),e.addEventListener("load",()=>{const t=e.status,n=e.response;if(t<200||t>299)return this.fire("error",n.message||n.error)})}_sendRequest(){const t=new FormData,e=this.xhr;return t.append("file",this.file),new Promise((n,i)=>{e.addEventListener("load",()=>{const t=e.status,o=e.response;return t<200||t>299?o.message?i(new Error(o.message)):i(o.error):n(o)}),e.addEventListener("error",()=>i(new Error("Network Error"))),e.addEventListener("abort",()=>i(new Error("Abort"))),e.send(t)})}}ci(df,ei);var uf=df;const hf={refreshInterval:36e5,autoRefresh:!0};class ff{constructor(t,e=hf){if(!t)throw new Error("A `tokenUrl` must be provided as the first constructor argument.");this.set("value",e.initValue),this._refresh="function"==typeof t?t:()=>(function(t){return new Promise((e,n)=>{const i=new XMLHttpRequest;i.open("GET",t),i.addEventListener("load",()=>{const t=i.status,o=i.response;return t<200||t>299?n(new Error("Cannot download new token!")):e(o)}),i.addEventListener("error",()=>n(new Error("Network Error"))),i.addEventListener("abort",()=>n(new Error("Abort"))),i.send()})})(t),this._options=Object.assign({},hf,e)}init(){return new Promise((t,e)=>{this._options.autoRefresh&&this._startRefreshing(),this.value?t(this):this._refreshToken().then(t).catch(e)})}_refreshToken(){return this._refresh().then(t=>this.set("value",t)).then(()=>this)}destroy(){this._stopRefreshing()}_startRefreshing(){this._refreshInterval=setInterval(()=>this._refreshToken(),this._options.refreshInterval)}_stopRefreshing(){clearInterval(this._refreshInterval)}static create(t,e=hf){return new ff(t,e).init()}}ci(ff,Fi);var mf=ff;class pf extends Gl{static get pluginName(){return"CloudServices"}init(){const t=this.editor.config.get("cloudServices")||{};for(const e in t)this[e]=t[e];if(this.tokenUrl)return this.token=new pf.Token(this.tokenUrl),this.token.init();this.token=null}}pf.Token=mf;class gf extends Gl{static get requires(){return[tu,pf]}init(){const t=this.editor,e=t.plugins.get(pf),n=e.token,i=e.uploadUrl;n&&(this._uploadGateway=new gf._UploadGateway(n,i),t.plugins.get(tu).createUploadAdapter=(t=>new bf(this._uploadGateway,t)))}}class bf{constructor(t,e){this.uploadGateway=t,this.loader=e}upload(){return this.loader.file.then(t=>(this.fileUploader=this.uploadGateway.upload(t),this.fileUploader.on("progress",(t,e)=>{this.loader.uploadTotal=e.total,this.loader.uploaded=e.uploaded}),this.fileUploader.send()))}abort(){this.fileUploader.abort()}}gf._UploadGateway=class{constructor(t,e){if(!t)throw new Error("Token must be provided");if(!e)throw new Error("Api address must be provided");this._token=t,this._apiAddress=e}upload(t){return new uf(t,this._token,this._apiAddress)}};class wf extends hr{constructor(t){super(t),this._observedElements=new Set}observe(t,e){this.document.getRoot(e).on("change:children",(e,n)=>{this.view.once("render",()=>this._updateObservedElements(t,n))})}_updateObservedElements(t,e){if(!e.is("element")||e.is("attributeElement"))return;const n=this.view.domConverter.mapViewToDom(e);if(n){for(const t of n.querySelectorAll("img"))this._observedElements.has(t)||(this.listenTo(t,"load",(t,e)=>this._fireEvents(e)),this._observedElements.add(t));for(const e of this._observedElements)t.contains(e)||(this.stopListening(e),this._observedElements.delete(e))}}_fireEvents(t){this.isEnabled&&(this.document.fire("layoutChanged"),this.document.fire("imageLoaded",t))}destroy(){this._observedElements.clear(),super.destroy()}}function _f(t){return n=>{n.on(`attribute:${t}:image`,e)};function e(t,e,n){if(!n.consumable.consume(e.item,t.name))return;const i=n.writer,o=n.mapper.toViewElement(e.item).getChild(0);null!==e.attributeNewValue?i.setAttribute(e.attributeKey,e.attributeNewValue,o):i.removeAttribute(e.attributeKey,o)}}class kf{constructor(){this._stack=[]}add(t,e){const n=this._stack,i=n[0];this._insertDescriptor(t);const o=n[0];i===o||vf(i,o)||this.fire("change:top",{oldDescriptor:i,newDescriptor:o,writer:e})}remove(t,e){const n=this._stack,i=n[0];this._removeDescriptor(t);const o=n[0];i===o||vf(i,o)||this.fire("change:top",{oldDescriptor:i,newDescriptor:o,writer:e})}_insertDescriptor(t){const e=this._stack,n=e.findIndex(e=>e.id===t.id);if(vf(t,e[n]))return;n>-1&&e.splice(n,1);let i=0;for(;e[i]&&yf(e[i],t);)i++;e.splice(i,0,t)}_removeDescriptor(t){const e=this._stack,n=e.findIndex(e=>e.id===t);n>-1&&e.splice(n,1)}}function vf(t,e){return t&&e&&t.priority==e.priority&&xf(t.classes)==xf(e.classes)}function yf(t,e){return t.priority>e.priority||!(t.priority<e.priority)&&xf(t.classes)>xf(e.classes)}function xf(t){return Array.isArray(t)?t.sort().join(","):t}ci(kf,ei);var Af=n(38),Cf=n.n(Af);const Tf="ck-widget",Pf="ck-widget_selected";function Mf(t){return!!t.is("element")&&!!t.getCustomProperty("widget")}function Ef(t,e,n={}){return mo.isEdge||e.setAttribute("contenteditable","false",t),e.addClass(Tf,t),e.setCustomProperty("widget",!0,t),t.getFillerOffset=Of,n.label&&function(t,e,n){n.setCustomProperty("widgetLabel",e,t)}(t,n.label,e),n.hasSelectionHandler&&function(t,e){const n=e.createUIElement("div",{class:"ck ck-widget__selection-handler"},function(t){const e=this.toDomElement(t),n=new Hd;return n.set("content",Cf.a),n.render(),e.appendChild(n.element),e});e.insert(e.createPositionAt(t,0),n),e.addClass(["ck-widget_with-selection-handler"],t)}(t,e),function(t,e,n,i){const o=new kf;o.on("change:top",(e,o)=>{o.oldDescriptor&&i(t,o.oldDescriptor,o.writer),o.newDescriptor&&n(t,o.newDescriptor,o.writer)}),e.setCustomProperty("addHighlight",(t,e,n)=>o.add(e,n),t),e.setCustomProperty("removeHighlight",(t,e,n)=>o.remove(e,n),t)}(t,e,(t,e,n)=>n.addClass(i(e.classes),t),(t,e,n)=>n.removeClass(i(e.classes),t)),t;function i(t){return Array.isArray(t)?t:[t]}}function Sf(t){const e=t.getCustomProperty("widgetLabel");return e?"function"==typeof e?e():e:""}function If(t,e){return e.addClass(["ck-editor__editable","ck-editor__nested-editable"],t),mo.isEdge||(e.setAttribute("contenteditable",t.isReadOnly?"false":"true",t),t.on("change:isReadOnly",(n,i,o)=>{e.setAttribute("contenteditable",o?"false":"true",t)})),t.on("change:isFocused",(n,i,o)=>{o?e.addClass("ck-editor__nested-editable_focused",t):e.removeClass("ck-editor__nested-editable_focused",t)}),t}function Nf(t,e){const n=t.getSelectedElement();if(n&&e.schema.isBlock(n))return e.createPositionAfter(n);const i=t.getSelectedBlocks().next().value;if(i){if(i.isEmpty)return e.createPositionAt(i,0);const n=e.createPositionAfter(i);return t.focus.isTouching(n)?n:e.createPositionBefore(i)}return t.focus}function Of(){return null}function Rf(t){const e=t.getSelectedElement();return e&&function(t){return!!t.getCustomProperty("image")&&Mf(t)}(e)?e:null}function Df(t){return!!t&&t.is("image")}function Lf(t,e,n={}){const i=t.createElement("image",n),o=Nf(e.document.selection,e);e.insertContent(i,o),i.parent&&t.setSelection(i,"on")}function jf(t){const e=t.schema,n=t.document.selection;return function(t,e,n){const i=function(t,e){const n=Nf(t,e).parent;if(n.isEmpty&&!n.is("$root"))return n.parent;return n}(t,n);return e.checkChild(i,"image")}(n,e,t)&&!function(t,e){const n=t.getSelectedElement();return n&&e.isObject(n)}(n,e)&&function(t){return[...t.focus.getAncestors()].every(t=>!t.is("image"))}(n)}class Vf extends Xl{refresh(){this.isEnabled=jf(this.editor.model)}execute(t){const e=this.editor.model;e.change(n=>{const i=Array.isArray(t.source)?t.source:[t.source];for(const t of i)Lf(n,e,{src:t})})}}class Bf extends Gl{init(){const t=this.editor,e=t.model.schema,n=t.t,i=t.conversion;t.editing.view.addObserver(wf),e.register("image",{isObject:!0,isBlock:!0,allowWhere:"$block",allowAttributes:["alt","src","srcset"]}),i.for("dataDowncast").elementToElement({model:"image",view:(t,e)=>zf(e)}),i.for("editingDowncast").elementToElement({model:"image",view:(t,e)=>(function(t,e,n){return e.setCustomProperty("image",!0,t),Ef(t,e,{label:function(){const e=t.getChild(0).getAttribute("alt");return e?`${e} ${n}`:n}})})(zf(e),e,n("k"))}),i.for("downcast").add(_f("src")).add(_f("alt")).add(function(){return e=>{e.on("attribute:srcset:image",t)};function t(t,e,n){if(!n.consumable.consume(e.item,t.name))return;const i=n.writer,o=n.mapper.toViewElement(e.item).getChild(0);if(null===e.attributeNewValue){const t=e.attributeOldValue;t.data&&(i.removeAttribute("srcset",o),i.removeAttribute("sizes",o),t.width&&i.removeAttribute("width",o))}else{const t=e.attributeNewValue;t.data&&(i.setAttribute("srcset",t.data,o),i.setAttribute("sizes","100vw",o),t.width&&i.setAttribute("width",t.width,o))}}}()),i.for("upcast").elementToElement({view:{name:"img",attributes:{src:!0}},model:(t,e)=>e.createElement("image",{src:t.getAttribute("src")})}).attributeToAttribute({view:{name:"img",key:"alt"},model:"alt"}).attributeToAttribute({view:{name:"img",key:"srcset"},model:{key:"srcset",value:t=>{const e={data:t.getAttribute("srcset")};return t.hasAttribute("width")&&(e.width=t.getAttribute("width")),e}}}).add(function(){return e=>{e.on("element:figure",t)};function t(t,e,n){if(!n.consumable.test(e.viewItem,{name:!0,classes:"image"}))return;const i=Array.from(e.viewItem.getChildren()).find(t=>t.is("img"));if(!i||!i.hasAttribute("src")||!n.consumable.test(i,{name:!0}))return;const o=n.convertItem(i,e.modelCursor),r=Sh(o.modelRange.getItems());r&&(n.convertChildren(e.viewItem,n.writer.createPositionAt(r,0)),e.modelRange=o.modelRange,e.modelCursor=o.modelCursor)}}()),t.commands.add("imageInsert",new Vf(t))}}function zf(t){const e=t.createEmptyElement("img"),n=t.createContainerElement("figure",{class:"image"});return t.insert(t.createPositionAt(n,0),e),n}class Ff extends ts{constructor(t){super(t),this.domEventType="mousedown"}onDomEvent(t){this.fire(t.type,t)}}n(92);const Uf=_o("Ctrl+A");class Hf extends Gl{static get pluginName(){return"Widget"}init(){const t=this.editor.editing.view,e=t.document;this._previouslySelected=new Set,this.editor.editing.downcastDispatcher.on("selection",(t,e,n)=>{this._clearPreviouslySelectedWidgets(n.writer);const i=n.writer,o=i.document.selection,r=o.getSelectedElement();let s=null;for(const t of o.getRanges())for(const e of t){const t=e.item;Mf(t)&&!qf(t,s)&&(i.addClass(Pf,t),this._previouslySelected.add(t),s=t,t==r&&i.setSelection(o.getRanges(),{fake:!0,label:Sf(r)}))}},{priority:"low"}),t.addObserver(Ff),this.listenTo(e,"mousedown",(...t)=>this._onMousedown(...t)),this.listenTo(e,"keydown",(...t)=>this._onKeydown(...t),{priority:"high"}),this.listenTo(e,"delete",(t,e)=>{this._handleDelete("forward"==e.direction)&&(e.preventDefault(),t.stop())},{priority:"high"})}_onMousedown(t,e){const n=this.editor,i=n.editing.view,o=i.document;let r=e.target;if(function(t){for(;t;){if(t.is("editableElement")&&!t.is("rootElement"))return!0;if(Mf(t))return!1;t=t.parent}return!1}(r)){if(mo.isSafari&&e.domEvent.detail>=3){const t=n.editing.mapper.toModelElement(r);this.editor.model.change(n=>{e.preventDefault(),n.setSelection(t,"in")})}return}if(!Mf(r)&&!(r=r.findAncestor(Mf)))return;e.preventDefault(),o.isFocused||i.focus();const s=n.editing.mapper.toModelElement(r);this._setSelectionOverElement(s)}_onKeydown(t,e){const n=e.keyCode,i=n==bo.arrowdown||n==bo.arrowright;let o=!1;!function(t){return t==bo.arrowright||t==bo.arrowleft||t==bo.arrowup||t==bo.arrowdown}(n)?!function(t){return wo(t)==Uf}(e)?n===bo.enter&&(o=this._handleEnterKey(e.shiftKey)):o=this._selectAllNestedEditableContent()||this._selectAllContent():o=this._handleArrowKeys(i),o&&(e.preventDefault(),t.stop())}_handleDelete(t){if(this.editor.isReadOnly)return;const e=this.editor.model.document.selection;if(!e.isCollapsed)return;const n=this._getObjectElementNextToSelection(t);return n?(this.editor.model.change(t=>{let i=e.anchor.parent;for(;i.isEmpty;){const e=i;i=e.parent,t.remove(e)}this._setSelectionOverElement(n)}),!0):void 0}_handleArrowKeys(t){const e=this.editor.model,n=e.schema,i=e.document.selection,o=i.getSelectedElement();if(o&&n.isObject(o)){const o=t?i.getLastPosition():i.getFirstPosition(),r=n.getNearestSelectionRange(o,t?"forward":"backward");return r&&e.change(t=>{t.setSelection(r)}),!0}if(!i.isCollapsed)return;const r=this._getObjectElementNextToSelection(t);return r&&n.isObject(r)?(this._setSelectionOverElement(r),!0):void 0}_handleEnterKey(t){const e=this.editor.model,n=e.document.selection.getSelectedElement();if(function(t,e){return t&&e.isObject(t)&&!e.isInline(t)}(n,e.schema))return e.change(i=>{let o=i.createPositionAt(n,t?"before":"after");const r=i.createElement("paragraph");if(e.schema.isBlock(n.parent)){const t=e.schema.findAllowedParent(o,r);o=i.split(o,t).position}i.insert(r,o),i.setSelection(r,"in")}),!0}_selectAllNestedEditableContent(){const t=this.editor.model,e=t.document.selection,n=t.schema.getLimitElement(e);return e.getFirstRange().root!=n&&(t.change(t=>{t.setSelection(t.createRangeIn(n))}),!0)}_selectAllContent(){const t=this.editor.model,e=this.editor.editing,n=e.view.document.selection.getSelectedElement();if(n&&Mf(n)){const i=e.mapper.toModelElement(n.parent);return t.change(t=>{t.setSelection(t.createRangeIn(i))}),!0}return!1}_setSelectionOverElement(t){this.editor.model.change(e=>{e.setSelection(e.createRangeOn(t))})}_getObjectElementNextToSelection(t){const e=this.editor.model,n=e.schema,i=e.document.selection,o=e.createSelection(i);e.modifySelection(o,{direction:t?"forward":"backward"});const r=t?o.focus.nodeBefore:o.focus.nodeAfter;return r&&n.isObject(r)?r:null}_clearPreviouslySelectedWidgets(t){for(const e of this._previouslySelected)t.removeClass(Pf,e);this._previouslySelected.clear()}}function qf(t,e){return!!e&&Array.from(t.getAncestors()).includes(e)}class Wf extends Xl{refresh(){const t=this.editor.model.document.selection.getSelectedElement();this.isEnabled=Df(t),Df(t)&&t.hasAttribute("alt")?this.value=t.getAttribute("alt"):this.value=!1}execute(t){const e=this.editor.model,n=e.document.selection.getSelectedElement();e.change(e=>{e.setAttribute("alt",t.newValue,n)})}}class Yf extends Gl{init(){this.editor.commands.add("imageTextAlternative",new Wf(this.editor))}}n(94);class $f extends Ol{constructor(t,e){super(t);const n=`ck-input-${Jn()}`,i=`ck-status-${Jn()}`;this.set("label"),this.set("value"),this.set("isReadOnly",!1),this.set("errorText",null),this.set("infoText",null),this.labelView=this._createLabelView(n),this.inputView=this._createInputView(e,n,i),this.statusView=this._createStatusView(i),this.bind("_statusText").to(this,"errorText",this,"infoText",(t,e)=>t||e);const o=this.bindTemplate;this.setTemplate({tag:"div",attributes:{class:["ck","ck-labeled-input",o.if("isReadOnly","ck-disabled")]},children:[this.labelView,this.inputView,this.statusView]})}_createLabelView(t){const e=new Dl(this.locale);return e.for=t,e.bind("text").to(this,"label"),e}_createInputView(t,e,n){const i=new t(this.locale,n);return i.id=e,i.ariaDesribedById=n,i.bind("value").to(this),i.bind("isReadOnly").to(this),i.bind("hasError").to(this,"errorText",t=>!!t),i.on("input",()=>{this.errorText=null}),i}_createStatusView(t){const e=new Ol(this.locale),n=this.bindTemplate;return e.setTemplate({tag:"div",attributes:{class:["ck","ck-labeled-input__status",n.if("errorText","ck-labeled-input__status_error"),n.if("_statusText","ck-hidden",t=>!t)],id:t},children:[{text:n.to("_statusText")}]}),e}select(){this.inputView.select()}focus(){this.inputView.focus()}}n(96);class Gf extends Ol{constructor(t){super(t),this.set("value"),this.set("id"),this.set("placeholder"),this.set("isReadOnly",!1),this.set("hasError",!1),this.set("ariaDesribedById");const e=this.bindTemplate;this.setTemplate({tag:"input",attributes:{type:"text",class:["ck","ck-input","ck-input-text",e.if("hasError","ck-error")],id:e.to("id"),placeholder:e.to("placeholder"),readonly:e.to("isReadOnly"),"aria-invalid":e.if("hasError",!0),"aria-describedby":e.to("ariaDesribedById")},on:{input:e.to("input")}})}render(){super.render();const t=t=>{this.element.value=t||0===t?t:""};t(this.value),this.on("change:value",(e,n,i)=>{t(i)})}select(){this.element.select()}focus(){this.element.focus()}}function Qf({view:t}){t.listenTo(t.element,"submit",(e,n)=>{n.preventDefault(),t.fire("submit")},{useCapture:!0})}var Kf=n(7),Jf=n.n(Kf),Zf=n(8),Xf=n.n(Zf);n(98);class tm extends Ol{constructor(t){super(t);const e=this.locale.t;this.focusTracker=new ol,this.keystrokes=new Qc,this.labeledInput=this._createLabeledInputView(),this.saveButtonView=this._createButton(e("bj"),Jf.a,"ck-button-save"),this.saveButtonView.type="submit",this.cancelButtonView=this._createButton(e("bk"),Xf.a,"ck-button-cancel","cancel"),this._focusables=new fl,this._focusCycler=new Ul({focusables:this._focusables,focusTracker:this.focusTracker,keystrokeHandler:this.keystrokes,actions:{focusPrevious:"shift + tab",focusNext:"tab"}}),this.setTemplate({tag:"form",attributes:{class:["ck","ck-text-alternative-form"],tabindex:"-1"},children:[this.labeledInput,this.saveButtonView,this.cancelButtonView]})}render(){super.render(),this.keystrokes.listenTo(this.element),Qf({view:this}),[this.labeledInput,this.saveButtonView,this.cancelButtonView].forEach(t=>{this._focusables.add(t),this.focusTracker.add(t.element)})}_createButton(t,e,n,i){const o=new Wd(this.locale);return o.set({label:t,icon:e,tooltip:!0}),o.extendTemplate({attributes:{class:n}}),i&&o.delegate("execute").to(this,i),o}_createLabeledInputView(){const t=this.locale.t,e=new $f(this.locale,Gf);return e.label=t("cn"),e.inputView.placeholder=t("cn"),e}}n(100);const em=Bl("px"),nm=nr.document.body;class im extends Ol{constructor(t){super(t);const e=this.bindTemplate;this.set("top",0),this.set("left",0),this.set("position","arrow_nw"),this.set("isVisible",!1),this.set("withArrow",!0),this.set("class"),this.content=this.createCollection(),this.setTemplate({tag:"div",attributes:{class:["ck","ck-balloon-panel",e.to("position",t=>`ck-balloon-panel_${t}`),e.if("isVisible","ck-balloon-panel_visible"),e.if("withArrow","ck-balloon-panel_with-arrow"),e.to("class")],style:{top:e.to("top",em),left:e.to("left",em)}},children:this.content})}show(){this.isVisible=!0}hide(){this.isVisible=!1}attachTo(t){this.show();const e=im.defaultPositions,n=Object.assign({},{element:this.element,positions:[e.southArrowNorth,e.southArrowNorthWest,e.southArrowNorthEast,e.northArrowSouth,e.northArrowSouthWest,e.northArrowSouthEast],limiter:nm,fitInViewport:!0},t),{top:i,left:o,name:r}=im._getOptimalPosition(n);Object.assign(this,{top:i,left:o,position:r})}pin(t){this.unpin(),this._pinWhenIsVisibleCallback=(()=>{this.isVisible?this._startPinning(t):this._stopPinning()}),this._startPinning(t),this.listenTo(this,"change:isVisible",this._pinWhenIsVisibleCallback)}unpin(){this._pinWhenIsVisibleCallback&&(this._stopPinning(),this.stopListening(this,"change:isVisible",this._pinWhenIsVisibleCallback),this._pinWhenIsVisibleCallback=null,this.hide())}_startPinning(t){this.attachTo(t);const e=om(t.target),n=t.limiter?om(t.limiter):nm;this.listenTo(nr.document,"scroll",(i,o)=>{const r=o.target,s=e&&r.contains(e),a=n&&r.contains(n);!s&&!a&&e&&n||this.attachTo(t)},{useCapture:!0}),this.listenTo(nr.window,"resize",()=>{this.attachTo(t)})}_stopPinning(){this.stopListening(nr.document,"scroll"),this.stopListening(nr.window,"resize")}}function om(t){return Wn(t)?t:vs(t)?t.commonAncestorContainer:"function"==typeof t?om(t()):null}function rm(t,e){return t.top-e.height-im.arrowVerticalOffset}function sm(t){return t.bottom+im.arrowVerticalOffset}im.arrowHorizontalOffset=25,im.arrowVerticalOffset=10,im._getOptimalPosition=Iu,im.defaultPositions={northArrowSouth:(t,e)=>({top:rm(t,e),left:t.left+t.width/2-e.width/2,name:"arrow_s"}),northArrowSouthEast:(t,e)=>({top:rm(t,e),left:t.left+t.width/2-e.width+im.arrowHorizontalOffset,name:"arrow_se"}),northArrowSouthWest:(t,e)=>({top:rm(t,e),left:t.left+t.width/2-im.arrowHorizontalOffset,name:"arrow_sw"}),northWestArrowSouth:(t,e)=>({top:rm(t,e),left:t.left-e.width/2,name:"arrow_s"}),northWestArrowSouthWest:(t,e)=>({top:rm(t,e),left:t.left-im.arrowHorizontalOffset,name:"arrow_sw"}),northWestArrowSouthEast:(t,e)=>({top:rm(t,e),left:t.left-e.width+im.arrowHorizontalOffset,name:"arrow_se"}),northEastArrowSouth:(t,e)=>({top:rm(t,e),left:t.right-e.width/2,name:"arrow_s"}),northEastArrowSouthEast:(t,e)=>({top:rm(t,e),left:t.right-e.width+im.arrowHorizontalOffset,name:"arrow_se"}),northEastArrowSouthWest:(t,e)=>({top:rm(t,e),left:t.right-im.arrowHorizontalOffset,name:"arrow_sw"}),southArrowNorth:(t,e)=>({top:sm(t),left:t.left+t.width/2-e.width/2,name:"arrow_n"}),southArrowNorthEast:(t,e)=>({top:sm(t),left:t.left+t.width/2-e.width+im.arrowHorizontalOffset,name:"arrow_ne"}),southArrowNorthWest:(t,e)=>({top:sm(t),left:t.left+t.width/2-im.arrowHorizontalOffset,name:"arrow_nw"}),southWestArrowNorth:(t,e)=>({top:sm(t),left:t.left-e.width/2,name:"arrow_n"}),southWestArrowNorthWest:(t,e)=>({top:sm(t),left:t.left-im.arrowHorizontalOffset,name:"arrow_nw"}),southWestArrowNorthEast:(t,e)=>({top:sm(t),left:t.left-e.width+im.arrowHorizontalOffset,name:"arrow_ne"}),southEastArrowNorth:(t,e)=>({top:sm(t),left:t.right-e.width/2,name:"arrow_n"}),southEastArrowNorthEast:(t,e)=>({top:sm(t),left:t.right-e.width+im.arrowHorizontalOffset,name:"arrow_ne"}),southEastArrowNorthWest:(t,e)=>({top:sm(t),left:t.right-im.arrowHorizontalOffset,name:"arrow_nw"})};class am extends Gl{static get pluginName(){return"ContextualBalloon"}init(){this.view=new im,this.positionLimiter=(()=>{const t=this.editor.editing.view,e=t.document.selection.editableElement;return e?t.domConverter.mapViewToDom(e.root):null}),this._stack=new Map,this.editor.ui.view.body.add(this.view),this.editor.ui.focusTracker.add(this.view.element)}get visibleView(){const t=this._stack.get(this.view.content.get(0));return t?t.view:null}hasView(t){return this._stack.has(t)}add(t){if(this.hasView(t.view))throw new Gn.b("contextualballoon-add-view-exist: Cannot add configuration of the same view twice.");this.visibleView&&this.view.content.remove(this.visibleView),this._stack.set(t.view,t),this._show(t)}remove(t){if(!this.hasView(t))throw new Gn.b("contextualballoon-remove-view-not-exist: Cannot remove configuration of not existing view.");if(this.visibleView===t){this.view.content.remove(t),this._stack.delete(t);const e=Array.from(this._stack.values()).pop();e?this._show(e):this.view.hide()}else this._stack.delete(t)}updatePosition(t){t&&(this._stack.get(this.visibleView).position=t),this.view.pin(this._getBalloonPosition())}_show({view:t,balloonClassName:e=""}){this.view.class=e,this.view.content.add(t),this.view.pin(this._getBalloonPosition())}_getBalloonPosition(){let t=Array.from(this._stack.values()).pop().position;return t&&!t.limiter&&(t=Object.assign({},t,{limiter:this.positionLimiter})),t}}var cm=n(39),lm=n.n(cm);function dm(t){const e=t.editing.view,n=im.defaultPositions;return{target:e.domConverter.viewToDom(e.document.selection.getSelectedElement()),positions:[n.northArrowSouth,n.northArrowSouthWest,n.northArrowSouthEast,n.southArrowNorth,n.southArrowNorthWest,n.southArrowNorthEast]}}class um extends Gl{static get requires(){return[am]}static get pluginName(){return"ImageTextAlternativeUI"}init(){this._createButton(),this._createForm()}destroy(){super.destroy(),this._form.destroy()}_createButton(){const t=this.editor,e=t.t;t.ui.componentFactory.add("imageTextAlternative",n=>{const i=t.commands.get("imageTextAlternative"),o=new Wd(n);return o.set({label:e("bi"),icon:lm.a,tooltip:!0}),o.bind("isEnabled").to(i,"isEnabled"),this.listenTo(o,"execute",()=>this._showForm()),o})}_createForm(){const t=this.editor,e=t.editing.view.document;this._balloon=this.editor.plugins.get("ContextualBalloon"),this._form=new tm(t.locale),this._form.render(),this.listenTo(this._form,"submit",()=>{t.execute("imageTextAlternative",{newValue:this._form.labeledInput.inputView.element.value}),this._hideForm(!0)}),this.listenTo(this._form,"cancel",()=>{this._hideForm(!0)}),this._form.keystrokes.set("Esc",(t,e)=>{this._hideForm(!0),e()}),this.listenTo(t.ui,"update",()=>{Rf(e.selection)?this._isVisible&&function(t){const e=t.plugins.get("ContextualBalloon");if(Rf(t.editing.view.document.selection)){const n=dm(t);e.updatePosition(n)}}(t):this._hideForm(!0)}),Uu({emitter:this._form,activator:()=>this._isVisible,contextElements:[this._form.element],callback:()=>this._hideForm()})}_showForm(){if(this._isVisible)return;const t=this.editor,e=t.commands.get("imageTextAlternative"),n=this._form.labeledInput;this._balloon.hasView(this._form)||this._balloon.add({view:this._form,position:dm(t)}),n.value=n.inputView.element.value=e.value||"",this._form.labeledInput.select()}_hideForm(t){this._isVisible&&(this._form.saveButtonView.focus(),this._balloon.remove(this._form),t&&this.editor.editing.view.focus())}get _isVisible(){return this._balloon.visibleView==this._form}}class hm extends Gl{static get requires(){return[Yf,um]}static get pluginName(){return"ImageTextAlternative"}}n(102);class fm extends Gl{static get requires(){return[Bf,Hf,hm]}static get pluginName(){return"Image"}}class mm extends Ol{constructor(t){super(t),this.buttonView=new Wd(t),this._fileInputView=new pm(t),this._fileInputView.bind("acceptedType").to(this),this._fileInputView.bind("allowMultipleFiles").to(this),this._fileInputView.delegate("done").to(this),this.setTemplate({tag:"span",attributes:{class:"ck-file-dialog-button"},children:[this.buttonView,this._fileInputView]}),this.buttonView.on("execute",()=>{this._fileInputView.open()})}focus(){this.buttonView.focus()}}class pm extends Ol{constructor(t){super(t),this.set("acceptedType"),this.set("allowMultipleFiles",!1);const e=this.bindTemplate;this.setTemplate({tag:"input",attributes:{class:["ck-hidden"],type:"file",tabindex:"-1",accept:e.to("acceptedType"),multiple:e.to("allowMultipleFiles")},on:{change:e.to(()=>{this.element&&this.element.files&&this.element.files.length&&this.fire("done",this.element.files),this.element.value=""})}})}open(){this.element.click()}}var gm=n(40),bm=n.n(gm);function wm(t){return/^image\/(jpeg|png|gif|bmp)$/.test(t.type)}function _m(t){return new Promise((e,n)=>{const i=t.getAttribute("src");fetch(i).then(t=>t.blob()).then(t=>{const o=function(t,e){return t.type?t.type:e.match(/data:(image\/\w+);base64/)?e.match(/data:(image\/\w+);base64/)[1].toLowerCase():"image/jpeg"}(t,i),r=function(t,e,n){try{return new File([t],e,{type:n})}catch(t){return null}}(t,`image.${o.replace("image/","")}`,o);r?e(r):n()}).catch(n)})}class km extends Gl{init(){const t=this.editor,e=t.t;t.ui.componentFactory.add("imageUpload",n=>{const i=new mm(n),o=t.commands.get("imageUpload");return i.set({acceptedType:"image/*",allowMultipleFiles:!0}),i.buttonView.set({label:e("o"),icon:bm.a,tooltip:!0}),i.buttonView.bind("isEnabled").to(o),i.on("done",(e,n)=>{const i=Array.from(n).filter(wm);i.length&&t.execute("imageUpload",{file:i})}),i})}}var vm=n(41),ym=n.n(vm);n(104),n(106),n(108);class xm extends Gl{constructor(t){super(t),this.placeholder="data:image/svg+xml;utf8,"+encodeURIComponent(ym.a)}init(){this.editor.editing.downcastDispatcher.on("attribute:uploadStatus:image",(...t)=>this.uploadStatusChange(...t))}uploadStatusChange(t,e,n){const i=this.editor,o=e.item,r=o.getAttribute("uploadId");if(!n.consumable.consume(e.item,t.name))return;const s=i.plugins.get(tu),a=r?e.attributeNewValue:null,c=this.placeholder,l=i.editing.mapper.toViewElement(o),d=n.writer;if("reading"==a)return Am(l,d),void Cm(c,l,d);if("uploading"==a){const t=s.loaders.get(r);return Am(l,d),void(t?(Tm(l,d),function(t,e,n,i){const o=function(t){const e=t.createUIElement("div",{class:"ck-progress-bar"});return t.setCustomProperty("progressBar",!0,e),e}(e);e.insert(e.createPositionAt(t,"end"),o),n.on("change:uploadedPercent",(t,e,n)=>{i.change(t=>{t.setStyle("width",n+"%",o)})})}(l,d,t,i.editing.view)):Cm(c,l,d))}"complete"==a&&s.loaders.get(r)&&!mo.isEdge&&function(t,e,n){const i=e.createUIElement("div",{class:"ck-image-upload-complete-icon"});e.insert(e.createPositionAt(t,"end"),i),setTimeout(()=>{n.change(t=>t.remove(t.createRangeOn(i)))},3e3)}(l,d,i.editing.view),function(t,e){Mm(t,e,"progressBar")}(l,d),Tm(l,d),function(t,e){e.removeClass("ck-appear",t)}(l,d)}}function Am(t,e){t.hasClass("ck-appear")||e.addClass("ck-appear",t)}function Cm(t,e,n){e.hasClass("ck-image-upload-placeholder")||n.addClass("ck-image-upload-placeholder",e);const i=e.getChild(0);i.getAttribute("src")!==t&&n.setAttribute("src",t,i),Pm(e,"placeholder")||n.insert(n.createPositionAfter(i),function(t){const e=t.createUIElement("div",{class:"ck-upload-placeholder-loader"});return t.setCustomProperty("placeholder",!0,e),e}(n))}function Tm(t,e){t.hasClass("ck-image-upload-placeholder")&&e.removeClass("ck-image-upload-placeholder",t),Mm(t,e,"placeholder")}function Pm(t,e){for(const n of t.getChildren())if(n.getCustomProperty(e))return n}function Mm(t,e,n){const i=Pm(t,n);i&&e.remove(e.createRangeOn(i))}class Em{createDocumentFragment(t){return new Ao(t)}createElement(t,e,n){return new _i(t,e,n)}createText(t){return new fi(t)}clone(t,e=!1){return t._clone(e)}appendChild(t,e){return e._appendChild(t)}insertChild(t,e,n){return n._insertChild(t,e)}removeChildren(t,e,n){return n._removeChildren(t,e)}remove(t){const e=t.parent;return e?this.removeChildren(e.getChildIndex(t),1,e):[]}replace(t,e){const n=t.parent;if(n){const i=n.getChildIndex(t);return this.removeChildren(i,1,n),this.insertChild(i,e,n),!0}return!1}rename(t,e){const n=new _i(t,e.getAttributes(),e.getChildren());return this.replace(e,n)?n:null}setAttribute(t,e,n){n._setAttribute(t,e)}removeAttribute(t,e){e._removeAttribute(t)}addClass(t,e){e._addClass(t)}removeClass(t,e){e._removeClass(t)}setStyle(t,e,n){C(t)&&void 0===n&&(n=e),n._setStyle(t,e)}removeStyle(t,e){e._removeStyle(t)}setCustomProperty(t,e,n){n._setCustomProperty(t,e)}removeCustomProperty(t,e){return e._removeCustomProperty(t)}createPositionAt(t,e){return Zi._createAt(t,e)}createPositionAfter(t){return Zi._createAfter(t)}createPositionBefore(t){return Zi._createBefore(t)}createRange(t,e){return new Xi(t,e)}createRangeOn(t){return Xi._createOn(t)}createRangeIn(t){return Xi._createIn(t)}createSelection(t,e,n){return new no(t,e,n)}}class Sm extends Xl{refresh(){this.isEnabled=jf(this.editor.model)}execute(t){const e=this.editor,n=e.model,i=e.plugins.get(tu);n.change(e=>{const o=Array.isArray(t.file)?t.file:[t.file];for(const t of o)Im(e,n,i,t)})}}function Im(t,e,n,i){const o=n.createLoader(i);o&&Lf(t,e,{uploadId:o.id})}class Nm extends Gl{static get requires(){return[tu,rf]}init(){const t=this.editor,e=t.model.document,n=t.model.schema,i=t.conversion,o=t.plugins.get(tu);n.extend("image",{allowAttributes:["uploadId","uploadStatus"]}),t.commands.add("imageUpload",new Sm(t)),i.for("upcast").attributeToAttribute({view:{name:"img",key:"uploadId"},model:"uploadId"}),this.listenTo(t.editing.view.document,"clipboardInput",(e,n)=>{if(function(t){return Array.from(t.types).includes("text/html")&&""!==t.getData("text/html")}(n.dataTransfer))return;const i=Array.from(n.dataTransfer.files).filter(t=>!!t&&wm(t)),o=n.targetRanges.map(e=>t.editing.mapper.toModelRange(e));t.model.change(n=>{n.setSelection(o),i.length&&(e.stop(),t.model.enqueueChange("default",()=>{t.execute("imageUpload",{file:i})}))})}),t.plugins.has("Clipboard")&&this.listenTo(t.plugins.get("Clipboard"),"inputTransformation",(e,n)=>{const i=Array.from(t.editing.view.createRangeIn(n.content)).filter(t=>(function(t){return!(!t.is("element","img")||!t.getAttribute("src"))&&(t.getAttribute("src").match(/^data:image\/\w+;base64,/g)||t.getAttribute("src").match(/^blob:/g))})(t.item)&&!t.item.getAttribute("uploadProcessed")).map(t=>({promise:_m(t.item),imageElement:t.item}));if(!i.length)return;const r=new Em;for(const t of i){r.setAttribute("uploadProcessed",!0,t.imageElement);const e=o.createLoader(t.promise);e&&(r.setAttribute("src","",t.imageElement),r.setAttribute("uploadId",e.id,t.imageElement))}}),t.editing.view.document.on("dragover",(t,e)=>{e.preventDefault()}),e.on("change",()=>{const t=e.differ.getChanges({includeChangesInGraveyard:!0});for(const e of t)if("insert"==e.type&&"image"==e.name){const t=e.position.nodeAfter,n="$graveyard"==e.position.root.rootName,i=t.getAttribute("uploadId");if(!i)continue;const r=o.loaders.get(i);if(!r)continue;n?r.abort():"idle"==r.status&&this._readAndUpload(r,t)}})}_readAndUpload(t,e){const n=this.editor,i=n.model,o=n.locale.t,r=n.plugins.get(tu),s=n.plugins.get(rf);return i.enqueueChange("transparent",t=>{t.setAttribute("uploadStatus","reading",e)}),t.read().then(o=>{const r=n.editing.mapper.toViewElement(e).getChild(0),s=t.upload();return n.editing.view.change(t=>{t.setAttribute("src",o,r)}),i.enqueueChange("transparent",t=>{t.setAttribute("uploadStatus","uploading",e)}),s}).then(t=>{i.enqueueChange("transparent",n=>{n.setAttributes({uploadStatus:"complete",src:t.default},e),this._parseAndSetSrcsetAttributeOnImage(t,e,n)}),a()}).catch(n=>{if("error"!==t.status&&"aborted"!==t.status)throw n;"error"==t.status&&n&&s.showWarning(n,{title:o("u"),namespace:"upload"}),a(),i.enqueueChange("transparent",t=>{t.remove(e)})});function a(){i.enqueueChange("transparent",t=>{t.removeAttribute("uploadId",e),t.removeAttribute("uploadStatus",e)}),r.destroyLoader(t)}}_parseAndSetSrcsetAttributeOnImage(t,e,n){let i=0;const o=Object.keys(t).filter(t=>{const e=parseInt(t,10);if(!isNaN(e))return i=Math.max(i,e),!0}).map(e=>`${t[e]} ${e}w`).join(", ");""!=o&&n.setAttribute("srcset",{data:o,width:i},e)}}class Om extends Gl{static get pluginName(){return"ImageUpload"}static get requires(){return[Nm,km,xm]}}class Rm extends Xl{refresh(){const t=this.editor.model,e=Sh(t.document.selection.getSelectedBlocks());this.value=!!e&&e.is("paragraph"),this.isEnabled=!!e&&Dm(e,t.schema)}execute(t={}){const e=this.editor.model,n=e.document;e.change(i=>{const o=(t.selection||n.selection).getSelectedBlocks();for(const t of o)!t.is("paragraph")&&Dm(t,e.schema)&&i.rename(t,"paragraph")})}}function Dm(t,e){return e.checkChild(t.parent,"paragraph")&&!e.isObject(t)}class Lm extends Gl{static get pluginName(){return"Paragraph"}init(){const t=this.editor,e=t.model,n=t.data;t.commands.add("paragraph",new Rm(t)),e.schema.register("paragraph",{inheritAllFrom:"$block"}),t.conversion.elementToElement({model:"paragraph",view:"p"}),t.conversion.for("upcast").elementToElement({model:(t,e)=>Lm.paragraphLikeElements.has(t.name)?t.isEmpty?null:e.createElement("paragraph"):null,converterPriority:"low"}),n.upcastDispatcher.on("element",(t,e,n)=>{n.consumable.test(e.viewItem,{name:e.viewItem.name})&&Vm(e.viewItem,e.modelCursor,n.schema)&&Object.assign(e,jm(e.viewItem,e.modelCursor,n))},{priority:"low"}),n.upcastDispatcher.on("text",(t,e,n)=>{e.modelRange||Vm(e.viewItem,e.modelCursor,n.schema)&&Object.assign(e,jm(e.viewItem,e.modelCursor,n))},{priority:"lowest"}),e.document.registerPostFixer(t=>this._autoparagraphEmptyRoots(t)),t.data.on("ready",()=>{e.enqueueChange("transparent",t=>this._autoparagraphEmptyRoots(t))},{priority:"lowest"})}_autoparagraphEmptyRoots(t){const e=this.editor.model;for(const n of e.document.getRootNames()){const i=e.document.getRoot(n);if(i.isEmpty&&"$graveyard"!=i.rootName&&e.schema.checkChild(i,"paragraph"))return t.insertElement("paragraph",i),!0}}}function jm(t,e,n){const i=n.writer.createElement("paragraph");return n.writer.insert(i,e),n.convertItem(t,n.writer.createPositionAt(i,0))}function Vm(t,e,n){const i=n.createContext(e);return!!n.checkChild(i,"paragraph")&&!!n.checkChild(i.push("paragraph"),t)}Lm.paragraphLikeElements=new Set(["blockquote","dd","div","dt","h1","h2","h3","h4","h5","h6","li","p","td"]);class Bm extends Xl{constructor(t,e){super(t),this.modelElements=e}refresh(){const t=Sh(this.editor.model.document.selection.getSelectedBlocks());this.value=!!t&&this.modelElements.includes(t.name)&&t.name,this.isEnabled=!!t&&this.modelElements.some(e=>zm(t,e,this.editor.model.schema))}execute(t){const e=this.editor.model,n=e.document,i=t.value;e.change(t=>{const o=Array.from(n.selection.getSelectedBlocks()).filter(t=>zm(t,i,e.schema));for(const e of o)e.is(i)||t.rename(e,i)})}}function zm(t,e,n){return n.checkChild(t.parent,e)&&!n.isObject(t)}const Fm="paragraph";class Um extends Gl{constructor(t){super(t),t.config.define("heading",{options:[{model:"paragraph",title:"Paragraph",class:"ck-heading_paragraph"},{model:"heading1",view:"h2",title:"Heading 1",class:"ck-heading_heading1"},{model:"heading2",view:"h3",title:"Heading 2",class:"ck-heading_heading2"},{model:"heading3",view:"h4",title:"Heading 3",class:"ck-heading_heading3"}]})}static get requires(){return[Lm]}init(){const t=this.editor,e=t.config.get("heading.options"),n=[];for(const i of e)i.model!==Fm&&(t.model.schema.register(i.model,{inheritAllFrom:"$block"}),t.conversion.elementToElement(i),n.push(i.model));this._addDefaultH1Conversion(t),t.commands.add("heading",new Bm(t,n))}afterInit(){const t=this.editor,e=t.commands.get("enter"),n=t.config.get("heading.options");e&&this.listenTo(e,"afterExecute",(e,i)=>{const o=t.model.document.selection.getFirstPosition().parent;n.some(t=>o.is(t.model))&&!o.is(Fm)&&0===o.childCount&&i.writer.rename(o,Fm)})}_addDefaultH1Conversion(t){t.conversion.for("upcast").elementToElement({model:"heading1",view:"h1",converterPriority:Zn.get("low")+1})}}n(18);class Hm extends Gl{init(){const t=this.editor,e=t.t,n=function(t){const e=t.t,n={Paragraph:e("co"),"Heading 1":e("cp"),"Heading 2":e("cq"),"Heading 3":e("cr"),"Heading 4":e("cs"),"Heading 5":e("ct"),"Heading 6":e("cu")};return t.config.get("heading.options").map(t=>{const e=n[t.title];return e&&e!=t.title&&(t.title=e),t})}(t),i=e("l"),o=e("m");t.ui.componentFactory.add("heading",e=>{const r={},s=new oo,a=t.commands.get("heading"),c=t.commands.get("paragraph"),l=[a];for(const t of n){const e={type:"button",model:new Eu({label:t.title,class:t.class,withText:!0})};"paragraph"===t.model?(e.model.bind("isOn").to(c,"value"),e.model.set("commandName","paragraph"),l.push(c)):(e.model.bind("isOn").to(a,"value",e=>e===t.model),e.model.set({commandName:"heading",commandValue:t.model})),s.add(e),r[t.model]=t.title}const d=Hu(e);return qu(d,s),d.buttonView.set({isOn:!1,withText:!0,tooltip:o}),d.extendTemplate({attributes:{class:["ck-heading-dropdown"]}}),d.bind("isEnabled").toMany(l,"isEnabled",(...t)=>t.some(t=>t)),d.buttonView.bind("label").to(a,"value",c,"value",(t,e)=>{const n=t||e&&"paragraph";return r[n]?r[n]:i}),this.listenTo(d,"execute",e=>{t.execute(e.source.commandName,e.source.commandValue?{value:e.source.commandValue}:void 0),t.editing.view.focus()}),d})}}function qm(t){for(const e of t.getChildren())if(e&&e.is("caption"))return e;return null}function Wm(t){const e=t.parent;return"figcaption"==t.name&&e&&"figure"==e.name&&e.hasClass("image")?{name:!0}:null}class Ym extends Gl{init(){const t=this.editor,e=t.editing.view,n=t.model.schema,i=t.data,o=t.editing,r=t.t;n.register("caption",{allowIn:"image",allowContentOf:"$block",isLimit:!0}),t.model.document.registerPostFixer(t=>this._insertMissingModelCaptionElement(t)),t.conversion.for("upcast").elementToElement({view:Wm,model:"caption"});i.downcastDispatcher.on("insert:caption",$m(t=>t.createContainerElement("figcaption"),!1));const s=function(t,e){return n=>{const i=n.createEditableElement("figcaption");return n.setCustomProperty("imageCaption",!0,i),al({view:t,element:i,text:e}),If(i,n)}}(e,r("n"));o.downcastDispatcher.on("insert:caption",$m(s)),o.downcastDispatcher.on("insert",this._fixCaptionVisibility(t=>t.item),{priority:"high"}),o.downcastDispatcher.on("remove",this._fixCaptionVisibility(t=>t.position.parent),{priority:"high"}),e.document.registerPostFixer(t=>this._updateCaptionVisibility(t))}_updateCaptionVisibility(t){const e=this.editor.editing.mapper,n=this._lastSelectedCaption;let i;const o=this.editor.model.document.selection,r=o.getSelectedElement();if(r&&r.is("image")){const t=qm(r);i=e.toViewElement(t)}const s=Gm(o.getFirstPosition().parent);if(s&&(i=e.toViewElement(s)),i)return n?n===i?Km(i,t):(Qm(n,t),this._lastSelectedCaption=i,Km(i,t)):(this._lastSelectedCaption=i,Km(i,t));if(n){const e=Qm(n,t);return this._lastSelectedCaption=null,e}return!1}_fixCaptionVisibility(t){return(e,n,i)=>{const o=Gm(t(n)),r=this.editor.editing.mapper,s=i.writer;if(o){const t=r.toViewElement(o);t&&(o.childCount?s.removeClass("ck-hidden",t):s.addClass("ck-hidden",t))}}}_insertMissingModelCaptionElement(t){const e=this.editor.model,n=e.document.differ.getChanges(),i=[];for(const t of n)if("insert"==t.type&&"$text"!=t.name){const n=t.position.nodeAfter;if(n.is("image")&&!qm(n)&&i.push(n),!n.is("image")&&n.childCount)for(const t of e.createRangeIn(n).getItems())t.is("image")&&!qm(t)&&i.push(t)}for(const e of i)t.appendElement("caption",e);return!!i.length}}function $m(t,e=!0){return(n,i,o)=>{const r=i.item;if((r.childCount||e)&&Df(r.parent)){if(!o.consumable.consume(i.item,"insert"))return;const e=o.mapper.toViewElement(i.range.start.parent),n=t(o.writer),s=o.writer;r.childCount||s.addClass("ck-hidden",n),function(t,e,n,i){const o=i.writer.createPositionAt(n,"end");i.writer.insert(o,t),i.mapper.bindElements(e,t)}(n,i.item,e,o)}}}function Gm(t){const e=t.getAncestors({includeSelf:!0}).find(t=>"caption"==t.name);return e&&e.parent&&"image"==e.parent.name?e:null}function Qm(t,e){return!t.childCount&&!t.hasClass("ck-hidden")&&(e.addClass("ck-hidden",t),!0)}function Km(t,e){return!!t.hasClass("ck-hidden")&&(e.removeClass("ck-hidden",t),!0)}n(111);class Jm extends Xl{constructor(t,e){super(t),this._defaultStyle=!1,this.styles=e.reduce((t,e)=>(t[e.name]=e,e.isDefault&&(this._defaultStyle=e.name),t),{})}refresh(){const t=this.editor.model.document.selection.getSelectedElement();if(this.isEnabled=Df(t),t)if(t.hasAttribute("imageStyle")){const e=t.getAttribute("imageStyle");this.value=!!this.styles[e]&&e}else this.value=this._defaultStyle;else this.value=!1}execute(t){const e=t.value,n=this.editor.model,i=n.document.selection.getSelectedElement();n.change(t=>{this.styles[e].isDefault?t.removeAttribute("imageStyle",i):t.setAttribute("imageStyle",e,i)})}}function Zm(t,e){for(const n of e)if(n.name===t)return n}var Xm=n(14),tp=n.n(Xm),ep=n(15),np=n.n(ep),ip=n(16),op=n.n(ip),rp=n(11),sp=n.n(rp);const ap={full:{name:"full",title:"Full size image",icon:tp.a,isDefault:!0},side:{name:"side",title:"Side image",icon:sp.a,className:"image-style-side"},alignLeft:{name:"alignLeft",title:"Left aligned image",icon:np.a,className:"image-style-align-left"},alignCenter:{name:"alignCenter",title:"Centered image",icon:op.a,className:"image-style-align-center"},alignRight:{name:"alignRight",title:"Right aligned image",icon:sp.a,className:"image-style-align-right"}},cp={full:tp.a,left:np.a,right:sp.a,center:op.a};function lp(t=[]){return t.map(dp)}function dp(t){if("string"==typeof t){const e=t;ap[e]?t=Object.assign({},ap[e]):(bs.a.warn("image-style-not-found: There is no such image style of given name.",{name:e}),t={name:e})}else if(ap[t.name]){const e=ap[t.name],n=Object.assign({},t);for(const i in e)t.hasOwnProperty(i)||(n[i]=e[i]);t=n}return"string"==typeof t.icon&&cp[t.icon]&&(t.icon=cp[t.icon]),t}class up extends Gl{static get pluginName(){return"ImageStyleEditing"}init(){const t=this.editor,e=t.model.schema,n=t.data,i=t.editing;t.config.define("image.styles",["full","side"]);const o=lp(t.config.get("image.styles"));e.extend("image",{allowAttributes:"imageStyle"});const r=function(t){return(e,n,i)=>{if(!i.consumable.consume(n.item,e.name))return;const o=Zm(n.attributeNewValue,t),r=Zm(n.attributeOldValue,t),s=i.mapper.toViewElement(n.item),a=i.writer;r&&a.removeClass(r.className,s),o&&a.addClass(o.className,s)}}(o);i.downcastDispatcher.on("attribute:imageStyle:image",r),n.downcastDispatcher.on("attribute:imageStyle:image",r),n.upcastDispatcher.on("element:figure",function(t){const e=t.filter(t=>!t.isDefault);return(t,n,i)=>{if(!n.modelRange)return;const o=n.viewItem,r=Sh(n.modelRange.getItems());if(i.schema.checkAttribute(r,"imageStyle"))for(const t of e)i.consumable.consume(o,{classes:t.className})&&i.writer.setAttribute("imageStyle",t.name,r)}}(o),{priority:"low"}),t.commands.add("imageStyle",new Jm(t,o))}}n(113);class hp extends Gl{static get pluginName(){return"ImageStyleUI"}get localizedDefaultStylesTitles(){const t=this.editor.t;return{"Full size image":t("p"),"Side image":t("q"),"Left aligned image":t("r"),"Centered image":t("s"),"Right aligned image":t("t")}}init(){const t=function(t,e){for(const n of t)e[n.title]&&(n.title=e[n.title]);return t}(lp(this.editor.config.get("image.styles")),this.localizedDefaultStylesTitles);for(const e of t)this._createButton(e)}_createButton(t){const e=this.editor,n=`imageStyle:${t.name}`;e.ui.componentFactory.add(n,n=>{const i=e.commands.get("imageStyle"),o=new Wd(n);return o.set({label:t.title,icon:t.icon,tooltip:!0}),o.bind("isEnabled").to(i,"isEnabled"),o.bind("isOn").to(i,"value",e=>e===t.name),this.listenTo(o,"execute",()=>e.execute("imageStyle",{value:t.name})),o})}}class fp extends Gl{static get requires(){return[am]}static get pluginName(){return"WidgetToolbarRepository"}init(){const t=this.editor;if(t.plugins.has("BalloonToolbar")){const e=t.plugins.get("BalloonToolbar");this.listenTo(e,"show",e=>{(function(t){const e=t.getSelectedElement();return!(!e||!Mf(e))})(t.editing.view.document.selection)&&e.stop()},{priority:"high"})}this._toolbarDefinitions=new Map,this._balloon=this.editor.plugins.get("ContextualBalloon"),this.listenTo(t.ui,"update",()=>{this._updateToolbarsVisibility()}),this.listenTo(t.ui.focusTracker,"change:isFocused",()=>{this._updateToolbarsVisibility()},{priority:"low"})}destroy(){super.destroy();for(const t of this._toolbarDefinitions.values())t.view.destroy()}register(t,{items:e,getRelatedElement:n,balloonClassName:i="ck-toolbar-container"}){const o=this.editor,r=new Wl;if(this._toolbarDefinitions.has(t))throw new Gn.b("widget-toolbar-duplicated: Toolbar with the given id was already added.",{toolbarId:t});r.fillFromConfig(e,o.ui.componentFactory),this._toolbarDefinitions.set(t,{view:r,getRelatedElement:n,balloonClassName:i})}_updateToolbarsVisibility(){let t=0,e=null,n=null;for(const i of this._toolbarDefinitions.values()){const o=i.getRelatedElement(this.editor.editing.view.document.selection);if(this.editor.ui.focusTracker.isFocused&&o){const r=o.getAncestors().length;r>t&&(t=r,e=o,n=i)}else this._hideToolbar(i)}n&&this._showToolbar(n,e)}_hideToolbar(t){this._isToolbarVisible(t)&&this._balloon.remove(t.view)}_showToolbar(t,e){this._isToolbarVisible(t)?function(t,e){const n=t.plugins.get("ContextualBalloon"),i=mp(t,e);n.updatePosition(i)}(this.editor,e):this._balloon.hasView(t.view)||this._balloon.add({view:t.view,position:mp(this.editor,e),balloonClassName:t.balloonClassName})}_isToolbarVisible(t){return this._balloon.visibleView==t.view}}function mp(t,e){const n=t.editing.view,i=im.defaultPositions;return{target:n.domConverter.viewToDom(e),positions:[i.northArrowSouth,i.northArrowSouthWest,i.northArrowSouthEast,i.southArrowNorth,i.southArrowNorthWest,i.southArrowNorthEast]}}function pp(t,e,n){return n.createRange(gp(t,e,!0,n),gp(t,e,!1,n))}function gp(t,e,n,i){let o=t.textNode||(n?t.nodeBefore:t.nodeAfter),r=null;for(;o&&o.getAttribute("linkHref")==e;)r=o,o=n?o.previousSibling:o.nextSibling;return r?i.createPositionAt(r,n?"before":"after"):t}class bp extends Xl{refresh(){const t=this.editor.model,e=t.document;this.value=e.selection.getAttribute("linkHref"),this.isEnabled=t.schema.checkAttributeInSelection(e.selection,"linkHref")}execute(t){const e=this.editor.model,n=e.document.selection;e.change(i=>{if(n.isCollapsed){const o=n.getFirstPosition();if(n.hasAttribute("linkHref")){const o=pp(n.getFirstPosition(),n.getAttribute("linkHref"),e);i.setAttribute("linkHref",t,o),i.setSelection(o)}else if(""!==t){const e=Vs(n.getAttributes());e.set("linkHref",t);const r=i.createText(t,e);i.insert(r,o),i.setSelection(i.createRangeOn(r))}}else{const o=e.schema.getValidRanges(n.getRanges(),"linkHref");for(const e of o)i.setAttribute("linkHref",t,e)}})}}class wp extends Xl{refresh(){this.isEnabled=this.editor.model.document.selection.hasAttribute("linkHref")}execute(){const t=this.editor.model,e=t.document.selection;t.change(n=>{const i=e.isCollapsed?[pp(e.getFirstPosition(),e.getAttribute("linkHref"),t)]:e.getRanges();for(const t of i)n.removeAttribute("linkHref",t)})}}const _p=/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205f\u3000]/g,kp=/^(?:(?:https?|ftps?|mailto):|[^a-z]|[a-z+.-]+(?:[^a-z+.:-]|$))/i;function vp(t,e){const n=e.createAttributeElement("a",{href:t},{priority:5});return e.setCustomProperty("link",!0,n),n}function yp(t){return function(t){return t.replace(_p,"").match(kp)}(t=String(t))?t:"#"}class xp{constructor(t,e,n){this.model=t,this.attribute=n,this._modelSelection=t.document.selection,this._overrideUid=null,this._isNextGravityRestorationSkipped=!1,e.listenTo(this._modelSelection,"change:range",(t,e)=>{this._isNextGravityRestorationSkipped?this._isNextGravityRestorationSkipped=!1:this._isGravityOverridden&&(!e.directChange&&Ap(this._modelSelection.getFirstPosition(),n)||this._restoreGravity())})}handleForwardMovement(t,e){const n=this.attribute;if(!(this._isGravityOverridden||t.isAtStart&&this._hasSelectionAttribute))return Pp(t,n)&&this._hasSelectionAttribute?(this._preventCaretMovement(e),this._removeSelectionAttribute(),!0):Cp(t,n)?(this._preventCaretMovement(e),this._overrideGravity(),!0):Tp(t,n)&&this._hasSelectionAttribute?(this._preventCaretMovement(e),this._overrideGravity(),!0):void 0}handleBackwardMovement(t,e){const n=this.attribute;return this._isGravityOverridden?Pp(t,n)&&this._hasSelectionAttribute?(this._preventCaretMovement(e),this._restoreGravity(),this._removeSelectionAttribute(),!0):(this._preventCaretMovement(e),this._restoreGravity(),t.isAtStart&&this._removeSelectionAttribute(),!0):Pp(t,n)&&!this._hasSelectionAttribute?(this._preventCaretMovement(e),this._setSelectionAttributeFromTheNodeBefore(t),!0):t.isAtEnd&&Tp(t,n)?this._hasSelectionAttribute?void(Mp(t,n)&&(this._skipNextAutomaticGravityRestoration(),this._overrideGravity())):(this._preventCaretMovement(e),this._setSelectionAttributeFromTheNodeBefore(t),!0):t.isAtStart?this._hasSelectionAttribute?(this._removeSelectionAttribute(),this._preventCaretMovement(e),!0):void 0:void(Mp(t,n)&&(this._skipNextAutomaticGravityRestoration(),this._overrideGravity()))}get _isGravityOverridden(){return!!this._overrideUid}get _hasSelectionAttribute(){return this._modelSelection.hasAttribute(this.attribute)}_overrideGravity(){this._overrideUid=this.model.change(t=>t.overrideSelectionGravity())}_restoreGravity(){this.model.change(t=>{t.restoreSelectionGravity(this._overrideUid),this._overrideUid=null})}_preventCaretMovement(t){t.preventDefault()}_removeSelectionAttribute(){this.model.change(t=>{t.removeSelectionAttribute(this.attribute)})}_setSelectionAttributeFromTheNodeBefore(t){const e=this.attribute;this.model.change(n=>{n.setSelectionAttribute(this.attribute,t.nodeBefore.getAttribute(e))})}_skipNextAutomaticGravityRestoration(){this._isNextGravityRestorationSkipped=!0}}function Ap(t,e){return Cp(t,e)||Tp(t,e)}function Cp(t,e){const{nodeBefore:n,nodeAfter:i}=t,o=!!n&&n.hasAttribute(e);return!!i&&i.hasAttribute(e)&&(!o||n.getAttribute(e)!==i.getAttribute(e))}function Tp(t,e){const{nodeBefore:n,nodeAfter:i}=t,o=!!n&&n.hasAttribute(e),r=!!i&&i.hasAttribute(e);return o&&(!r||n.getAttribute(e)!==i.getAttribute(e))}function Pp(t,e){const{nodeBefore:n,nodeAfter:i}=t,o=!!n&&n.hasAttribute(e);if(!!i&&i.hasAttribute(e)&&o)return i.getAttribute(e)!==n.getAttribute(e)}function Mp(t,e){return Ap(t.getShiftedBy(-1),e)}n(115);const Ep="ck-link_selected";class Sp extends Gl{init(){const t=this.editor;t.model.schema.extend("$text",{allowAttributes:"linkHref"}),t.conversion.for("dataDowncast").attributeToElement({model:"linkHref",view:vp}),t.conversion.for("editingDowncast").attributeToElement({model:"linkHref",view:(t,e)=>vp(yp(t),e)}),t.conversion.for("upcast").elementToAttribute({view:{name:"a",attributes:{href:!0}},model:{key:"linkHref",value:t=>t.getAttribute("href")}}),t.commands.add("link",new bp(t)),t.commands.add("unlink",new wp(t)),function(t,e,n,i){const o=new xp(e,n,i),r=e.document.selection;n.listenTo(t.document,"keydown",(t,e)=>{if(!r.isCollapsed)return;if(e.shiftKey||e.altKey||e.ctrlKey)return;const n=e.keyCode==bo.arrowright,i=e.keyCode==bo.arrowleft;if(!n&&!i)return;const s=r.getFirstPosition();let a;(a=n?o.handleForwardMovement(s,e):o.handleBackwardMovement(s,e))&&t.stop()},{priority:Zn.get("high")+1})}(t.editing.view,t.model,this,"linkHref"),this._setupLinkHighlight()}_setupLinkHighlight(){const t=this.editor,e=t.editing.view,n=new Set;e.document.registerPostFixer(e=>{const i=t.model.document.selection;if(i.hasAttribute("linkHref")){const o=pp(i.getFirstPosition(),i.getAttribute("linkHref"),t.model),r=t.editing.mapper.toViewRange(o);for(const t of r.getItems())t.is("a")&&(e.addClass(Ep,t),n.add(t))}}),t.conversion.for("editingDowncast").add(t=>{function i(){e.change(t=>{for(const e of n.values())t.removeClass(Ep,e),n.delete(e)})}t.on("insert",i,{priority:"highest"}),t.on("remove",i,{priority:"highest"}),t.on("attribute",i,{priority:"highest"}),t.on("selection",i,{priority:"highest"})})}}class Ip extends ts{constructor(t){super(t),this.domEventType="click"}onDomEvent(t){this.fire(t.type,t)}}n(117);class Np extends Ol{constructor(t){super(t);const e=t.t;this.focusTracker=new ol,this.keystrokes=new Qc,this.urlInputView=this._createUrlInput(),this.saveButtonView=this._createButton(e("bj"),Jf.a,"ck-button-save"),this.saveButtonView.type="submit",this.cancelButtonView=this._createButton(e("bk"),Xf.a,"ck-button-cancel","cancel"),this._focusables=new fl,this._focusCycler=new Ul({focusables:this._focusables,focusTracker:this.focusTracker,keystrokeHandler:this.keystrokes,actions:{focusPrevious:"shift + tab",focusNext:"tab"}}),this.setTemplate({tag:"form",attributes:{class:["ck","ck-link-form"],tabindex:"-1"},children:[this.urlInputView,this.saveButtonView,this.cancelButtonView]})}render(){super.render(),Qf({view:this}),[this.urlInputView,this.saveButtonView,this.cancelButtonView].forEach(t=>{this._focusables.add(t),this.focusTracker.add(t.element)}),this.keystrokes.listenTo(this.element)}focus(){this._focusCycler.focusFirst()}_createUrlInput(){const t=this.locale.t,e=new $f(this.locale,Gf);return e.label=t("bs"),e.inputView.placeholder="https://example.com",e}_createButton(t,e,n,i){const o=new Wd(this.locale);return o.set({label:t,icon:e,tooltip:!0}),o.extendTemplate({attributes:{class:n}}),i&&o.delegate("execute").to(this,i),o}}var Op=n(42),Rp=n.n(Op),Dp=n(43),Lp=n.n(Dp);n(119);class jp extends Ol{constructor(t){super(t);const e=t.t;this.focusTracker=new ol,this.keystrokes=new Qc,this.previewButtonView=this._createPreviewButton(),this.unlinkButtonView=this._createButton(e("bo"),Rp.a,"unlink"),this.editButtonView=this._createButton(e("bp"),Lp.a,"edit"),this.set("href"),this._focusables=new fl,this._focusCycler=new Ul({focusables:this._focusables,focusTracker:this.focusTracker,keystrokeHandler:this.keystrokes,actions:{focusPrevious:"shift + tab",focusNext:"tab"}}),this.setTemplate({tag:"div",attributes:{class:["ck","ck-link-actions"],tabindex:"-1"},children:[this.previewButtonView,this.editButtonView,this.unlinkButtonView]})}render(){super.render(),[this.previewButtonView,this.editButtonView,this.unlinkButtonView].forEach(t=>{this._focusables.add(t),this.focusTracker.add(t.element)}),this.keystrokes.listenTo(this.element)}focus(){this._focusCycler.focusFirst()}_createButton(t,e,n){const i=new Wd(this.locale);return i.set({label:t,icon:e,tooltip:!0}),i.delegate("execute").to(this,n),i}_createPreviewButton(){const t=new Wd(this.locale),e=this.bindTemplate,n=this.t;return t.set({withText:!0,tooltip:n("bq")}),t.extendTemplate({attributes:{class:["ck","ck-link-actions__preview"],href:e.to("href",t=>t&&yp(t)),target:"_blank"}}),t.bind("label").to(this,"href",t=>t||n("br")),t.bind("isEnabled").to(this,"href",t=>!!t),t.template.tag="a",t.template.eventListeners={},t}}var Vp=n(44),Bp=n.n(Vp);const zp="Ctrl+K";class Fp extends Gl{static get requires(){return[am]}static get pluginName(){return"LinkUI"}init(){const t=this.editor;t.editing.view.addObserver(Ip),this.actionsView=this._createActionsView(),this.formView=this._createFormView(),this._balloon=t.plugins.get(am),this._createToolbarLinkButton(),this._enableUserBalloonInteractions()}destroy(){super.destroy(),this.formView.destroy()}_createActionsView(){const t=this.editor,e=new jp(t.locale),n=t.commands.get("link"),i=t.commands.get("unlink");return e.bind("href").to(n,"value"),e.editButtonView.bind("isEnabled").to(n),e.unlinkButtonView.bind("isEnabled").to(i),this.listenTo(e,"edit",()=>{this._addFormView()}),this.listenTo(e,"unlink",()=>{t.execute("unlink"),this._hideUI()}),e.keystrokes.set("Esc",(t,e)=>{this._hideUI(),e()}),e.keystrokes.set(zp,(t,e)=>{this._addFormView(),e()}),e}_createFormView(){const t=this.editor,e=new Np(t.locale),n=t.commands.get("link");return e.urlInputView.bind("value").to(n,"value"),e.urlInputView.bind("isReadOnly").to(n,"isEnabled",t=>!t),e.saveButtonView.bind("isEnabled").to(n),this.listenTo(e,"submit",()=>{t.execute("link",e.urlInputView.inputView.element.value),this._removeFormView()}),this.listenTo(e,"cancel",()=>{this._removeFormView()}),e.keystrokes.set("Esc",(t,e)=>{this._removeFormView(),e()}),e}_createToolbarLinkButton(){const t=this.editor,e=t.commands.get("link"),n=t.t;t.keystrokes.set(zp,(t,n)=>{n(),e.isEnabled&&this._showUI()}),t.ui.componentFactory.add("link",t=>{const i=new Wd(t);return i.isEnabled=!0,i.label=n("x"),i.icon=Bp.a,i.keystroke=zp,i.tooltip=!0,i.bind("isOn","isEnabled").to(e,"value","isEnabled"),this.listenTo(i,"execute",()=>this._showUI()),i})}_enableUserBalloonInteractions(){const t=this.editor.editing.view.document;this.listenTo(t,"click",()=>{this._getSelectedLinkElement()&&this._showUI()}),this.editor.keystrokes.set("Tab",(t,e)=>{this._areActionsVisible&&!this.actionsView.focusTracker.isFocused&&(this.actionsView.focus(),e())},{priority:"high"}),this.editor.keystrokes.set("Esc",(t,e)=>{this._isUIVisible&&(this._hideUI(),e())}),Uu({emitter:this.formView,activator:()=>this._isUIVisible,contextElements:[this._balloon.view.element],callback:()=>this._hideUI()})}_addActionsView(){this._areActionsInPanel||this._balloon.add({view:this.actionsView,position:this._getBalloonPositionData()})}_addFormView(){if(this._isFormInPanel)return;const t=this.editor.commands.get("link");this._balloon.add({view:this.formView,position:this._getBalloonPositionData()}),this.formView.urlInputView.select(),this.formView.urlInputView.inputView.element.value=t.value||""}_removeFormView(){this._isFormInPanel&&(this.formView.saveButtonView.focus(),this._balloon.remove(this.formView),this.editor.editing.view.focus())}_showUI(){this.editor.commands.get("link").isEnabled&&(this._getSelectedLinkElement()?this._areActionsVisible?this._addFormView():this._addActionsView():(this._addActionsView(),this._addFormView()),this._startUpdatingUI())}_hideUI(){if(!this._isUIInPanel)return;const t=this.editor;this.stopListening(t.ui,"update"),t.editing.view.focus(),this._removeFormView(),this._balloon.remove(this.actionsView)}_startUpdatingUI(){const t=this.editor,e=t.editing.view.document;let n=this._getSelectedLinkElement(),i=o();function o(){return e.selection.focus.getAncestors().reverse().find(t=>t.is("element"))}this.listenTo(t.ui,"update",()=>{const t=this._getSelectedLinkElement(),e=o();n&&!t||!n&&e!==i?this._hideUI():this._balloon.updatePosition(this._getBalloonPositionData()),n=t,i=e})}get _isFormInPanel(){return this._balloon.hasView(this.formView)}get _areActionsInPanel(){return this._balloon.hasView(this.actionsView)}get _areActionsVisible(){return this._balloon.visibleView===this.actionsView}get _isUIInPanel(){return this._isFormInPanel||this._areActionsInPanel}get _isUIVisible(){return this._balloon.visibleView==this.formView||this._areActionsVisible}_getBalloonPositionData(){const t=this.editor.editing.view,e=t.document,n=this._getSelectedLinkElement();return{target:n?t.domConverter.mapViewToDom(n):t.domConverter.viewRangeToDom(e.selection.getFirstRange())}}_getSelectedLinkElement(){const t=this.editor.editing.view,e=t.document.selection;if(e.isCollapsed)return Up(e.getFirstPosition());{const n=e.getFirstRange().getTrimmed(),i=Up(n.start),o=Up(n.end);return i&&i==o&&t.createRangeIn(i).getTrimmed().isEqual(n)?i:null}}}function Up(t){return t.getAncestors().find(t=>(function(t){return t.is("attributeElement")&&!!t.getCustomProperty("link")})(t))}class Hp extends Xl{constructor(t,e){super(t),this.type="bulleted"==e?"bulleted":"numbered"}refresh(){this.value=this._getValue(),this.isEnabled=this._checkEnabled()}execute(){const t=this.editor.model,e=t.document,n=Array.from(e.selection.getSelectedBlocks()).filter(e=>Wp(e,t.schema)),i=!0===this.value;t.change(t=>{if(i){let e=n[n.length-1].nextSibling,i=Number.POSITIVE_INFINITY,o=[];for(;e&&"listItem"==e.name&&0!==e.getAttribute("listIndent");){const t=e.getAttribute("listIndent");t<i&&(i=t);const n=t-i;o.push({element:e,listIndent:n}),e=e.nextSibling}o=o.reverse();for(const e of o)t.setAttribute("listIndent",e.listIndent,e.element)}if(!i){let t=Number.POSITIVE_INFINITY;for(const e of n)e.is("listItem")&&e.getAttribute("listIndent")<t&&(t=e.getAttribute("listIndent"));qp(n,!0,t=0===t?1:t),qp(n,!1,t)}for(const e of n.reverse())i&&"listItem"==e.name?t.rename(e,"paragraph"):i||"listItem"==e.name?i||"listItem"!=e.name||e.getAttribute("listType")==this.type||t.setAttribute("listType",this.type,e):(t.setAttributes({listType:this.type,listIndent:0},e),t.rename(e,"listItem"))})}_getValue(){const t=Sh(this.editor.model.document.selection.getSelectedBlocks());return!!t&&t.is("listItem")&&t.getAttribute("listType")==this.type}_checkEnabled(){if(this.value)return!0;const t=this.editor.model.document.selection,e=this.editor.model.schema,n=Sh(t.getSelectedBlocks());return!!n&&Wp(n,e)}}function qp(t,e,n){const i=e?t[0]:t[t.length-1];if(i.is("listItem")){let o=i[e?"previousSibling":"nextSibling"],r=i.getAttribute("listIndent");for(;o&&o.is("listItem")&&o.getAttribute("listIndent")>=n;)r>o.getAttribute("listIndent")&&(r=o.getAttribute("listIndent")),o.getAttribute("listIndent")==r&&t[e?"unshift":"push"](o),o=o[e?"previousSibling":"nextSibling"]}}function Wp(t,e){return e.checkChild(t.parent,"listItem")&&!e.isObject(t)}class Yp extends Xl{constructor(t,e){super(t),this._indentBy="forward"==e?1:-1}refresh(){this.isEnabled=this._checkEnabled()}execute(){const t=this.editor.model,e=t.document;let n=Array.from(e.selection.getSelectedBlocks());t.change(t=>{const e=n[n.length-1];let i=e.nextSibling;for(;i&&"listItem"==i.name&&i.getAttribute("listIndent")>e.getAttribute("listIndent");)n.push(i),i=i.nextSibling;this._indentBy<0&&(n=n.reverse());for(const e of n){const n=e.getAttribute("listIndent")+this._indentBy;n<0?t.rename(e,"paragraph"):t.setAttribute("listIndent",n,e)}})}_checkEnabled(){const t=Sh(this.editor.model.document.selection.getSelectedBlocks());if(!t||!t.is("listItem"))return!1;if(this._indentBy>0){const e=t.getAttribute("listIndent"),n=t.getAttribute("listType");let i=t.previousSibling;for(;i&&i.is("listItem")&&i.getAttribute("listIndent")>=e;){if(i.getAttribute("listIndent")==e)return i.getAttribute("listType")==n;i=i.previousSibling}return!1}return!0}}function $p(){const t=!this.isEmpty&&("ul"==this.getChild(0).name||"ol"==this.getChild(0).name);return this.isEmpty||t?0:xi.call(this)}function Gp(t){return(e,n,i)=>{const o=i.consumable;if(!o.test(n.item,"insert")||!o.test(n.item,"attribute:listType")||!o.test(n.item,"attribute:listIndent"))return;o.consume(n.item,"insert"),o.consume(n.item,"attribute:listType"),o.consume(n.item,"attribute:listIndent");const r=n.item;cg(r,function(t,e){const n=e.mapper,i=e.writer,o="numbered"==t.getAttribute("listType")?"ol":"ul",r=function(t){const e=t.createContainerElement("li");return e.getFillerOffset=$p,e}(i),s=i.createContainerElement(o,null);return i.insert(i.createPositionAt(s,0),r),n.bindElements(t,r),r}(r,i),i,t)}}function Qp(t){return(e,n,i)=>{const o=i.mapper.toViewPosition(n.position).getLastMatchingPosition(t=>!t.item.is("li")).nodeAfter,r=i.writer;r.breakContainer(r.createPositionBefore(o)),r.breakContainer(r.createPositionAfter(o));const s=o.parent,a=s.previousSibling,c=r.createRangeOn(s),l=r.remove(c);a&&a.nextSibling&&ag(r,a,a.nextSibling),lg(i.mapper.toModelElement(o).getAttribute("listIndent")+1,n.position,c.start,o,i,t);for(const t of r.createRangeIn(l).getItems())i.mapper.unbindViewElement(t);e.stop()}}function Kp(t,e,n){if(!n.consumable.consume(e.item,"attribute:listType"))return;const i=n.mapper.toViewElement(e.item),o=n.writer;o.breakContainer(o.createPositionBefore(i)),o.breakContainer(o.createPositionAfter(i));let r=i.parent;const s="numbered"==e.attributeNewValue?"ol":"ul";ag(o,r=o.rename(s,r),r.nextSibling),ag(o,r.previousSibling,r);for(const t of e.item.getChildren())n.consumable.consume(t,"insert")}function Jp(t){return(e,n,i)=>{if(!i.consumable.consume(n.item,"attribute:listIndent"))return;const o=i.mapper.toViewElement(n.item),r=i.writer;r.breakContainer(r.createPositionBefore(o)),r.breakContainer(r.createPositionAfter(o));const s=o.parent,a=s.previousSibling,c=r.createRangeOn(s);r.remove(c),a&&a.nextSibling&&ag(r,a,a.nextSibling),lg(n.attributeOldValue+1,n.range.start,c.start,o,i,t),cg(n.item,o,i,t);for(const t of n.item.getChildren())i.consumable.consume(t,"insert")}}function Zp(t,e,n){if("listItem"!=e.item.name){let t=n.mapper.toViewPosition(e.range.start);const i=n.writer,o=[];for(;("ul"==t.parent.name||"ol"==t.parent.name)&&"li"==(t=i.breakContainer(t)).parent.name;){const e=t,n=i.createPositionAt(t.parent,"end");if(!e.isEqual(n)){const t=i.remove(i.createRange(e,n));o.push(t)}t=i.createPositionAfter(t.parent)}if(o.length>0){for(let e=0;e<o.length;e++){const n=t.nodeBefore;if(t=i.insert(t,o[e]).end,e>0){const e=ag(i,n,n.nextSibling);e&&e.parent==n&&t.offset--}}ag(i,t.nodeBefore,t.nodeAfter)}}}function Xp(t,e,n){const i=n.mapper.toViewPosition(e.position),o=i.nodeBefore,r=i.nodeAfter;ag(n.writer,o,r)}function tg(t,e,n){if(n.consumable.consume(e.viewItem,{name:!0})){const t=n.writer,i=this.conversionApi.store,o=t.createElement("listItem");i.indent=i.indent||0,t.setAttribute("listIndent",i.indent,o);const r=e.viewItem.parent&&"ol"==e.viewItem.parent.name?"numbered":"bulleted";t.setAttribute("listType",r,o),i.indent++;const s=n.splitToAllowedParent(o,e.modelCursor);if(!s)return;t.insert(o,s.position);const a=function(t,e,n){const{writer:i,schema:o}=n;let r=i.createPositionAfter(t);for(const s of e)if("ul"==s.name||"ol"==s.name)r=n.convertItem(s,r).modelCursor;else{const e=n.convertItem(s,i.createPositionAt(t,"end")),a=e.modelRange.start.nodeAfter,c=a&&a.is("element")&&!o.checkChild(t,a.name);c&&(t=e.modelCursor.parent.is("listItem")?e.modelCursor.parent:rg(e.modelCursor),r=i.createPositionAfter(t))}return r}(o,e.viewItem.getChildren(),n);i.indent--,e.modelRange=t.createRange(e.modelCursor,a),s.cursorParent?e.modelCursor=t.createPositionAt(s.cursorParent,0):e.modelCursor=e.modelRange.end}}function eg(t,e,n){if(n.consumable.test(e.viewItem,{name:!0})){const t=Array.from(e.viewItem.getChildren());for(const e of t)e.is("li")||e._remove()}}function ng(t,e,n){if(n.consumable.test(e.viewItem,{name:!0})){if(0===e.viewItem.childCount)return;const t=[...e.viewItem.getChildren()];let n=!1,i=!0;for(const e of t)!n||e.is("ul")||e.is("ol")||e._remove(),e.is("text")?(i&&(e._data=e.data.replace(/^\s+/,"")),(!e.nextSibling||e.nextSibling.is("ul")||e.nextSibling.is("ol"))&&(e._data=e.data.replace(/\s+$/,""))):(e.is("ul")||e.is("ol"))&&(n=!0),i=!1}}function ig(t){return(e,n)=>{if(n.isPhantom)return;const i=n.modelPosition.nodeBefore;if(i&&i.is("listItem")){const e=n.mapper.toViewElement(i),o=e.getAncestors().find(t=>t.is("ul")||t.is("ol")),r=t.createPositionAt(e,0).getWalker();for(const t of r){if("elementStart"==t.type&&t.item.is("li")){n.viewPosition=t.previousPosition;break}if("elementEnd"==t.type&&t.item==o){n.viewPosition=t.nextPosition;break}}}}}function og(t,[e,n]){let i,o=e.is("documentFragment")?e.getChild(0):e;if(i=n?this.createSelection(n):this.document.selection,o&&o.is("listItem")){const t=i.getFirstPosition();let e=null;if(t.parent.is("listItem")?e=t.parent:t.nodeBefore&&t.nodeBefore.is("listItem")&&(e=t.nodeBefore),e){const t=e.getAttribute("listIndent");if(t>0)for(;o&&o.is("listItem");)o._setAttribute("listIndent",o.getAttribute("listIndent")+t),o=o.nextSibling}}}function rg(t){const e=new qs({startPosition:t});let n;do{n=e.next()}while(!n.value.item.is("listItem"));return n.value.item}function sg(t,e){const n=!!e.sameIndent,i=!!e.smallerIndent,o=e.listIndent;let r=t;for(;r&&"listItem"==r.name;){const t=r.getAttribute("listIndent");if(n&&o==t||i&&o>t)return r;r=r.previousSibling}return null}function ag(t,e,n){return e&&n&&("ul"==e.name||"ol"==e.name)&&e.name==n.name?t.mergeContainers(t.createPositionAfter(e)):null}function cg(t,e,n,i){const o=e.parent,r=n.mapper,s=n.writer;let a=r.toViewPosition(i.createPositionBefore(t));const c=sg(t.previousSibling,{sameIndent:!0,smallerIndent:!0,listIndent:t.getAttribute("listIndent")}),l=t.previousSibling;if(c&&c.getAttribute("listIndent")==t.getAttribute("listIndent")){const t=r.toViewElement(c);a=s.breakContainer(s.createPositionAfter(t))}else a=l&&"listItem"==l.name?r.toViewPosition(i.createPositionAt(l,"end")):r.toViewPosition(i.createPositionBefore(t));if(a=dg(a),s.insert(a,o),l&&"listItem"==l.name){const t=r.toViewElement(l),n=s.createRange(s.createPositionAt(t,0),a).getWalker({ignoreElementEnd:!0});for(const t of n)if(t.item.is("li")){const i=s.breakContainer(s.createPositionBefore(t.item)),o=t.item.parent,r=s.createPositionAt(e,"end");ag(s,r.nodeBefore,r.nodeAfter),s.move(s.createRangeOn(o),r),n.position=i}}else{const n=o.nextSibling;if(n&&(n.is("ul")||n.is("ol"))){let i=null;for(const e of n.getChildren()){const n=r.toModelElement(e);if(!(n&&n.getAttribute("listIndent")>t.getAttribute("listIndent")))break;i=e}i&&(s.breakContainer(s.createPositionAfter(i)),s.move(s.createRangeOn(i.parent),s.createPositionAt(e,"end")))}}ag(s,o,o.nextSibling),ag(s,o.previousSibling,o)}function lg(t,e,n,i,o,r){const s=sg(e.nodeBefore,{sameIndent:!0,smallerIndent:!0,listIndent:t,foo:"b"}),a=o.mapper,c=o.writer,l=s?s.getAttribute("listIndent"):null;let d;if(s)if(l==t){const t=a.toViewElement(s).parent;d=c.createPositionAfter(t)}else{const t=r.createPositionAt(s,"end");d=a.toViewPosition(t)}else d=n;d=dg(d);for(const t of[...i.getChildren()])(t.is("ul")||t.is("ol"))&&(d=c.move(c.createRangeOn(t),d).end,ag(c,t,t.nextSibling),ag(c,t.previousSibling,t))}function dg(t){return t.getLastMatchingPosition(t=>t.item.is("uiElement"))}class ug extends Gl{static get requires(){return[Lm]}init(){const t=this.editor;t.model.schema.register("listItem",{inheritAllFrom:"$block",allowAttributes:["listType","listIndent"]});const e=t.data,n=t.editing;t.model.document.registerPostFixer(e=>(function(t,e){const n=t.document.differ.getChanges(),i=new Map;let o=!1;for(const t of n)if("insert"==t.type&&"listItem"==t.name)r(t.position);else if("insert"==t.type&&"listItem"!=t.name){if("$text"!=t.name){const n=t.position.nodeAfter;n.hasAttribute("listIndent")&&(e.removeAttribute("listIndent",n),o=!0),n.hasAttribute("listType")&&(e.removeAttribute("listType",n),o=!0)}r(t.position.getShiftedBy(t.length))}else"remove"==t.type&&"listItem"==t.name?r(t.position):"attribute"==t.type&&"listIndent"==t.attributeKey?r(t.range.start):"attribute"==t.type&&"listType"==t.attributeKey&&r(t.range.start);for(const t of i.values())s(t),a(t);return o;function r(t){const e=t.nodeBefore;if(e&&e.is("listItem")){let n=e;if(i.has(n))return;for(;n.previousSibling&&n.previousSibling.is("listItem");)if(n=n.previousSibling,i.has(n))return;i.set(t.nodeBefore,n)}else{const e=t.nodeAfter;e&&e.is("listItem")&&i.set(e,e)}}function s(t){let n=0,i=null;for(;t&&t.is("listItem");){const r=t.getAttribute("listIndent");if(r>n){let s;null===i?(i=r-n,s=n):(i>r&&(i=r),s=r-i),e.setAttribute("listIndent",s,t),o=!0}else i=null,n=t.getAttribute("listIndent")+1;t=t.nextSibling}}function a(t){let n=[],i=null;for(;t&&t.is("listItem");){const r=t.getAttribute("listIndent");if(i&&i.getAttribute("listIndent")>r&&(n=n.slice(0,r+1)),0!=r)if(n[r]){const i=n[r];t.getAttribute("listType")!=i&&(e.setAttribute("listType",i,t),o=!0)}else n[r]=t.getAttribute("listType");i=t,t=t.nextSibling}}})(t.model,e)),n.mapper.registerViewToModelLength("li",hg),e.mapper.registerViewToModelLength("li",hg),n.mapper.on("modelToViewPosition",ig(n.view)),n.mapper.on("viewToModelPosition",function(t){return(e,n)=>{const i=n.viewPosition,o=i.parent,r=n.mapper;if("ul"==o.name||"ol"==o.name){if(i.isAtEnd){const e=r.toModelElement(i.nodeBefore),o=r.getModelLength(i.nodeBefore);n.modelPosition=t.createPositionBefore(e).getShiftedBy(o)}else{const e=r.toModelElement(i.nodeAfter);n.modelPosition=t.createPositionBefore(e)}e.stop()}else if("li"==o.name&&i.nodeBefore&&("ul"==i.nodeBefore.name||"ol"==i.nodeBefore.name)){const s=r.toModelElement(o);let a=1,c=i.nodeBefore;for(;c&&(c.is("ul")||c.is("ol"));)a+=r.getModelLength(c),c=c.previousSibling;n.modelPosition=t.createPositionBefore(s).getShiftedBy(a),e.stop()}}}(t.model)),e.mapper.on("modelToViewPosition",ig(n.view)),n.downcastDispatcher.on("insert",Zp,{priority:"high"}),n.downcastDispatcher.on("insert:listItem",Gp(t.model)),e.downcastDispatcher.on("insert",Zp,{priority:"high"}),e.downcastDispatcher.on("insert:listItem",Gp(t.model)),n.downcastDispatcher.on("attribute:listType:listItem",Kp),e.downcastDispatcher.on("attribute:listType:listItem",Kp),n.downcastDispatcher.on("attribute:listIndent:listItem",Jp(t.model)),e.downcastDispatcher.on("attribute:listIndent:listItem",Jp(t.model)),n.downcastDispatcher.on("remove:listItem",Qp(t.model)),n.downcastDispatcher.on("remove",Xp,{priority:"low"}),e.downcastDispatcher.on("remove:listItem",Qp(t.model)),e.downcastDispatcher.on("remove",Xp,{priority:"low"}),e.upcastDispatcher.on("element:ul",eg,{priority:"high"}),e.upcastDispatcher.on("element:ol",eg,{priority:"high"}),e.upcastDispatcher.on("element:li",ng,{priority:"high"}),e.upcastDispatcher.on("element:li",tg),t.model.on("insertContent",og,{priority:"high"}),t.commands.add("numberedList",new Hp(t,"numbered")),t.commands.add("bulletedList",new Hp(t,"bulleted")),t.commands.add("indentList",new Yp(t,"forward")),t.commands.add("outdentList",new Yp(t,"backward"));const i=this.editor.editing.view.document;this.listenTo(i,"enter",(t,e)=>{const n=this.editor.model.document,i=n.selection.getLastPosition().parent;n.selection.isCollapsed&&"listItem"==i.name&&i.isEmpty&&(this.editor.execute("outdentList"),e.preventDefault(),t.stop())}),this.listenTo(i,"delete",(t,e)=>{if("backward"!==e.direction)return;const n=this.editor.model.document.selection;if(!n.isCollapsed)return;const i=n.getFirstPosition();if(!i.isAtStart)return;const o=i.parent;"listItem"===o.name&&(o.previousSibling&&"listItem"===o.previousSibling.name||(this.editor.execute("outdentList"),e.preventDefault(),t.stop()))},{priority:"high"});const o=t=>(e,n)=>{this.editor.commands.get(t).isEnabled&&(this.editor.execute(t),n())};this.editor.keystrokes.set("Tab",o("indentList")),this.editor.keystrokes.set("Shift+Tab",o("outdentList"))}}function hg(t){let e=1;for(const n of t.getChildren())if("ul"==n.name||"ol"==n.name)for(const t of n.getChildren())e+=hg(t);return e}var fg=n(45),mg=n.n(fg),pg=n(46),gg=n.n(pg);class bg extends Gl{init(){const t=this.editor.t;this._addButton("numberedList",t("v"),mg.a),this._addButton("bulletedList",t("w"),gg.a)}_addButton(t,e,n){const i=this.editor;i.ui.componentFactory.add(t,o=>{const r=i.commands.get(t),s=new Wd(o);return s.set({label:e,icon:n,tooltip:!0}),s.bind("isOn","isEnabled").to(r,"value","isEnabled"),this.listenTo(s,"execute",()=>i.execute(t)),s})}}function wg(t,e){return t=>{t.on("attribute:url:media",n)};function n(n,i,o){if(!o.consumable.consume(i.item,n.name))return;const r=i.attributeNewValue,s=o.writer,a=o.mapper.toViewElement(i.item);s.remove(s.createRangeIn(a));const c=t.getMediaViewElement(s,r,e);s.insert(s.createPositionAt(a,0),c)}}function _g(t,e,n,i){const o=t.createContainerElement("figure",{class:"media"});return o.getFillerOffset=yg,t.insert(t.createPositionAt(o,0),e.getMediaViewElement(t,n,i)),o}function kg(t){const e=t.getSelectedElement();return e&&e.is("media")?e:null}function vg(t,e,n){t.change(i=>{const o=i.createElement("media",{url:e});t.insertContent(o,n),i.setSelection(o,"on")})}function yg(){return null}class xg extends Xl{refresh(){const t=this.editor.model,e=t.document.selection,n=t.schema,i=e.getFirstPosition(),o=kg(e);let r=i.parent;r!=r.root&&(r=r.parent),this.value=o?o.getAttribute("url"):null,this.isEnabled=n.checkChild(r,"media")}execute(t){const e=this.editor.model,n=e.document.selection,i=kg(n);if(i)e.change(e=>{e.setAttribute("url",t,i)});else{const i=Nf(n,e);vg(e,t,i)}}}var Ag=n(47),Cg=n.n(Ag);const Tg="0 0 64 42";class Pg{constructor(t,e){const n=e.providers,i=e.extraProviders||[],o=new Set(e.removeProviders),r=n.concat(i).filter(t=>{const e=t.name;return e?!o.has(e):(bs.a.warn("media-embed-no-provider-name: The configured media provider has no name and cannot be used.",{provider:t}),!1)});this.locale=t,this.providerDefinitions=r}hasMedia(t){return!!this._getMedia(t)}getMediaViewElement(t,e,n){return this._getMedia(e).getViewElement(t,n)}_getMedia(t){if(!t)return new Mg(this.locale);t=t.trim();for(const e of this.providerDefinitions){const n=e.html;let i=e.url;Array.isArray(i)||(i=[i]);for(const e of i){const i=this._getUrlMatches(t,e);if(i)return new Mg(this.locale,t,i,n)}}return null}_getUrlMatches(t,e){let n=t.match(e);if(n)return n;let i=t.replace(/^https?:\/\//,"");return(n=i.match(e))?n:(n=(i=i.replace(/^www\./,"")).match(e))||null}}class Mg{constructor(t,e,n,i){this.url=this._getValidUrl(e),this._t=t.t,this._match=n,this._previewRenderer=i}getViewElement(t,e){const n={};if(e.renderForEditingView||e.renderMediaPreview&&this.url&&this._previewRenderer){this.url&&(n["data-oembed-url"]=this.url),e.renderForEditingView&&(n.class="ck-media__wrapper");const i=this._getPreviewHtml(e);return t.createUIElement("div",n,function(t){const e=this.toDomElement(t);return e.innerHTML=i,e})}return this.url&&(n.url=this.url),t.createEmptyElement("oembed",n)}_getPreviewHtml(t){return this._previewRenderer?this._previewRenderer(this._match):this.url&&t.renderForEditingView?this._getPlaceholderHtml():""}_getPlaceholderHtml(){const t=new qd,e=new Hd;return t.text=this._t("Open media in new tab"),e.content=Cg.a,e.viewBox=Tg,new pl({tag:"div",attributes:{class:"ck ck-reset_all ck-media__placeholder"},children:[{tag:"div",attributes:{class:"ck-media__placeholder__icon"},children:[e]},{tag:"a",attributes:{class:"ck-media__placeholder__url",target:"new",href:this.url},children:[{tag:"span",attributes:{class:"ck-media__placeholder__url__text"},children:[this.url]},t]}]}).render().outerHTML}_getValidUrl(t){return t?t.match(/^https?/)?t:"https://"+t:null}}n(121);class Eg extends Gl{static get pluginName(){return"MediaEmbedEditing"}constructor(t){super(t),t.config.define("mediaEmbed",{providers:[{name:"dailymotion",url:/^dailymotion\.com\/video\/(\w+)/,html:t=>{return'<div style="position: relative; padding-bottom: 100%; height: 0; ">'+`<iframe src="https://www.dailymotion.com/embed/video/${t[1]}" `+'style="position: absolute; width: 100%; height: 100%; top: 0; left: 0;" frameborder="0" width="480" height="270" allowfullscreen allow="autoplay"></iframe></div>'}},{name:"spotify",url:[/^open\.spotify\.com\/(artist\/\w+)/,/^open\.spotify\.com\/(album\/\w+)/,/^open\.spotify\.com\/(track\/\w+)/],html:t=>{return'<div style="position: relative; padding-bottom: 100%; height: 0; padding-bottom: 126%;">'+`<iframe src="https://open.spotify.com/embed/${t[1]}" `+'style="position: absolute; width: 100%; height: 100%; top: 0; left: 0;" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe></div>'}},{name:"youtube",url:[/^(?:m\.)?youtube\.com\/watch\?v=([\w-]+)/,/^(?:m\.)?youtube\.com\/v\/([\w-]+)/,/^youtube\.com\/embed\/([\w-]+)/,/^youtu\.be\/([\w-]+)/],html:t=>{return'<div style="position: relative; padding-bottom: 100%; height: 0; padding-bottom: 56.2493%;">'+`<iframe src="https://www.youtube.com/embed/${t[1]}" `+'style="position: absolute; width: 100%; height: 100%; top: 0; left: 0;" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe></div>'}},{name:"vimeo",url:[/^vimeo\.com\/(\d+)/,/^vimeo\.com\/[^/]+\/[^/]+\/video\/(\d+)/,/^vimeo\.com\/album\/[^/]+\/video\/(\d+)/,/^vimeo\.com\/channels\/[^/]+\/(\d+)/,/^vimeo\.com\/groups\/[^/]+\/videos\/(\d+)/,/^vimeo\.com\/ondemand\/[^/]+\/(\d+)/,/^player\.vimeo\.com\/video\/(\d+)/],html:t=>{return'<div style="position: relative; padding-bottom: 100%; height: 0; padding-bottom: 56.2493%;">'+`<iframe src="https://player.vimeo.com/video/${t[1]}" `+'style="position: absolute; width: 100%; height: 100%; top: 0; left: 0;" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe></div>'}},{name:"instagram",url:/^instagram\.com\/p\/(\w+)/},{name:"twitter",url:/^twitter\.com/},{name:"googleMaps",url:/^google\.com\/maps/},{name:"flickr",url:/^flickr\.com/},{name:"facebook",url:/^facebook\.com/}]}),this.registry=new Pg(t.locale,t.config.get("mediaEmbed"))}init(){const t=this.editor,e=t.model.schema,n=t.t,i=t.conversion,o=t.config.get("mediaEmbed.previewsInData"),r=this.registry;t.commands.add("mediaEmbed",new xg(t)),e.register("media",{isObject:!0,isBlock:!0,allowWhere:"$block",allowAttributes:["url"]}),i.for("dataDowncast").elementToElement({model:"media",view:(t,e)=>{const n=t.getAttribute("url");return _g(e,r,n,{renderMediaPreview:n&&o})}}),i.for("dataDowncast").add(wg(r,{renderMediaPreview:o})),i.for("editingDowncast").elementToElement({model:"media",view:(t,e)=>{const i=t.getAttribute("url");return function(t,e,n){return e.setCustomProperty("media",!0,t),Ef(t,e,{label:n})}(_g(e,r,i,{renderForEditingView:!0}),e,n("y"))}}),i.for("editingDowncast").add(wg(r,{renderForEditingView:!0})),i.for("upcast").elementToElement({view:{name:"oembed",attributes:{url:!0}},model:(t,e)=>{const n=t.getAttribute("url");if(r.hasMedia(n))return e.createElement("media",{url:n})}}).elementToElement({view:{name:"div",attributes:{"data-oembed-url":!0}},model:(t,e)=>{const n=t.getAttribute("data-oembed-url");if(r.hasMedia(n))return e.createElement("media",{url:n})}})}}const Sg=/^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w.-]+)+[\w\-._~:/?#[\]@!$&'()*+,;=]+$/;class Ig extends Gl{static get requires(){return[Zl,Jd]}static get pluginName(){return"AutoMediaEmbed"}constructor(t){super(t),this._timeoutId=null,this._positionToInsert=null}init(){const t=this.editor,e=t.model.document;this.listenTo(t.plugins.get(Zl),"inputTransformation",()=>{const t=e.selection.getFirstRange(),n=Oc.fromPosition(t.start);n.stickiness="toPrevious";const i=Oc.fromPosition(t.end);i.stickiness="toNext",e.once("change:data",()=>{this._embedMediaBetweenPositions(n,i),n.detach(),i.detach()},{priority:"high"})}),t.commands.get("undo").on("execute",()=>{this._timeoutId&&(nr.window.clearTimeout(this._timeoutId),this._positionToInsert.detach(),this._timeoutId=null,this._positionToInsert=null)},{priority:"high"})}_embedMediaBetweenPositions(t,e){const n=this.editor,i=n.plugins.get(Eg).registry,o=new oa(t,e),r=o.getWalker({ignoreElementEnd:!0});let s="";for(const t of r)t.item.is("textProxy")&&(s+=t.item.data);if(!(s=s.trim()).match(Sg))return;if(!i.hasMedia(s))return;n.commands.get("mediaEmbed").isEnabled&&(this._positionToInsert=Oc.fromPosition(t),this._timeoutId=nr.window.setTimeout(()=>{n.model.change(t=>{let e;this._timeoutId=null,t.remove(o),"$graveyard"!==this._positionToInsert.root.rootName&&(e=this._positionToInsert),vg(n.model,s,e),this._positionToInsert.detach(),this._positionToInsert=null})},100))}}n(123);class Ng extends Ol{constructor(t,e){super(e);const n=e.t;this.focusTracker=new ol,this.keystrokes=new Qc,this.urlInputView=this._createUrlInput(),this.saveButtonView=this._createButton(n("bj"),Jf.a,"ck-button-save"),this.saveButtonView.type="submit",this.cancelButtonView=this._createButton(n("bk"),Xf.a,"ck-button-cancel","cancel"),this._focusables=new fl,this._focusCycler=new Ul({focusables:this._focusables,focusTracker:this.focusTracker,keystrokeHandler:this.keystrokes,actions:{focusPrevious:"shift + tab",focusNext:"tab"}}),this._validators=t,this.setTemplate({tag:"form",attributes:{class:["ck","ck-media-form"],tabindex:"-1"},children:[this.urlInputView,this.saveButtonView,this.cancelButtonView]})}render(){super.render(),Qf({view:this}),[this.urlInputView,this.saveButtonView,this.cancelButtonView].forEach(t=>{this._focusables.add(t),this.focusTracker.add(t.element)}),this.keystrokes.listenTo(this.element);const t=t=>t.stopPropagation();this.keystrokes.set("arrowright",t),this.keystrokes.set("arrowleft",t),this.keystrokes.set("arrowup",t),this.keystrokes.set("arrowdown",t),this.listenTo(this.urlInputView.element,"selectstart",(t,e)=>{e.stopPropagation()},{priority:"high"})}focus(){this._focusCycler.focusFirst()}get url(){return this.urlInputView.inputView.element.value.trim()}set url(t){this.urlInputView.inputView.element.value=t.trim()}isValid(){this.resetFormStatus();for(const t of this._validators){const e=t(this);if(e)return this.urlInputView.errorText=e,!1}return!0}resetFormStatus(){this.urlInputView.errorText=null,this.urlInputView.infoText=this._urlInputViewInfoDefault}_createUrlInput(){const t=this.locale.t,e=new $f(this.locale,Gf),n=e.inputView;return this._urlInputViewInfoDefault=t("bl"),this._urlInputViewInfoTip=t("bm"),e.label=t("bn"),e.infoText=this._urlInputViewInfoDefault,n.placeholder="https://example.com",n.on("input",()=>{e.infoText=n.element.value?this._urlInputViewInfoTip:this._urlInputViewInfoDefault}),e}_createButton(t,e,n,i){const o=new Wd(this.locale);return o.set({label:t,icon:e,tooltip:!0}),o.extendTemplate({attributes:{class:n}}),i&&o.delegate("execute").to(this,i),o}}var Og=n(48),Rg=n.n(Og);class Dg extends Gl{static get requires(){return[Eg]}static get pluginName(){return"MediaEmbedUI"}init(){const t=this.editor,e=t.commands.get("mediaEmbed"),n=t.plugins.get(Eg).registry;this.form=new Ng(function(t,e){return[e=>{if(!e.url.length)return t("aa")},n=>{if(!e.hasMedia(n.url))return t("ab")}]}(t.t,n),t.locale),t.ui.componentFactory.add("mediaEmbed",n=>{const i=Hu(n);return this._setUpDropdown(i,this.form,e,t),this._setUpForm(this.form,i,e),i})}_setUpDropdown(t,e,n){const i=this.editor,o=i.t,r=t.buttonView;function s(){i.editing.view.focus(),t.isOpen=!1}t.bind("isEnabled").to(n),t.panelView.children.add(e),r.set({label:o("z"),icon:Rg.a,tooltip:!0}),r.on("open",()=>{e.url=n.value||"",e.urlInputView.select(),e.focus()},{priority:"low"}),t.on("submit",()=>{e.isValid()&&(i.execute("mediaEmbed",e.url),s())}),t.on("change:isOpen",()=>e.resetFormStatus()),t.on("cancel",()=>s())}_setUpForm(t,e,n){t.delegate("submit","cancel").to(e),t.urlInputView.bind("value").to(n,"value"),t.urlInputView.bind("isReadOnly").to(n,"isEnabled",t=>!t),t.saveButtonView.bind("isEnabled").to(n)}}n(125);function Lg(t){return t.replace(/<span(?: class="Apple-converted-space"|)>(\s+)<\/span>/g,(t,e)=>1===e.length?" ":Array(e.length+1).join("  ").substr(0,e.length))}function jg(t){const e=new DOMParser,n=function(t){return Lg(Lg(t)).replace(/(<span style=['"]mso-spacerun:yes['"]>[\s]*?)[\r\n]+(\s*<\/span>)/g,"$1$2").replace(/<span style=['"]mso-spacerun:yes['"]><\/span>/g,"").replace(/ <\//g," </").replace(/ <o:p><\/o:p>/g," <o:p></o:p>").replace(/>(\s*[\r\n]\s*)</g,"><")}(function(t){const e=t.match(/<\/body>(.*?)(<\/html>|$)/);e&&e[1]&&(t=t.slice(0,e.index)+t.slice(e.index).replace(e[1],""));return t}(t=t.replace(/<!--\[if gte vml 1]>/g,""))),i=e.parseFromString(n,"text/html");!function(t){t.querySelectorAll("span[style*=spacerun]").forEach(t=>{const e=t.childNodes[0].data.length;t.innerHTML=Array(e+1).join("  ").substr(0,e)})}(i);const o=i.body.innerHTML,r=function(t){const e=new rr({blockFiller:jo}),n=t.createDocumentFragment(),i=t.body.childNodes;for(;i.length>0;)n.appendChild(i[0]);return e.domToView(n)}(i),s=function(t){const e=[],n=[],i=Array.from(t.getElementsByTagName("style"));for(const t of i)t.sheet&&t.sheet.cssRules&&t.sheet.cssRules.length&&(e.push(t.sheet),n.push(t.innerHTML));return{styles:e,stylesString:n.join(" ")}}(i);return{body:r,bodyString:o,styles:s.styles,stylesString:s.stylesString}}function Vg(t,e){if(!t.childCount)return;const n=new Em,i=function(t,e){const n=e.createRangeIn(t),i=new bi({name:/^p|h\d+$/,styles:{"mso-list":/.*/}}),o=[];for(const t of n)if("elementStart"===t.type&&i.match(t.item)){const e=Bg(t.item);o.push({element:t.item,id:e.id,order:e.order,indent:e.indent})}return o}(t,n);if(!i.length)return;let o=null;i.forEach((t,r)=>{if(!o||function(t,e){if(t.id!==e.id)return!0;const n=e.element.previousSibling;if(!n)return!0;return!n.is("ul")&&!n.is("ol")}(i[r-1],t)){const i=function(t,e){const n=/mso-level-number-format:([^;]*);/gi,i=new RegExp(`@list l${t.id}:level${t.indent}\\s*({[^}]*)`,"gi").exec(e);let o="decimal";if(i&&i[1]){const t=n.exec(i[1]);t&&t[1]&&(o=t[1].trim())}return{type:"bullet"!==o&&"image"!==o?"ol":"ul",style:o}}(t,e);o=function(t,e,n){const i=new _i(t.type),o=e.parent.getChildIndex(e);return n.insertChild(o,i,e.parent),i}(i,t.element,n)}const s=function(t,e){return function(t,e){const n=new bi({name:"span",styles:{"mso-list":"Ignore"}}),i=e.createRangeIn(t);for(const t of i)"elementStart"===t.type&&n.match(t.item)&&e.remove(t.item)}(t,e),e.rename("li",t)}(t.element,n);n.appendChild(s,o)})}function Bg(t){const e={},n=t.getStyle("mso-list");return n&&(e.id=parseInt(n.match(/(^|\s+)l(\d+)/i)[2]),e.order=parseInt(n.match(/\s*lfo(\d+)/i)[1]),e.indent=parseInt(n.match(/\s*level(\d+)/i)[1])),e}function zg(t,e){if(!t.childCount)return;const n=new Em;!function(t,e,n){const i=n.createRangeIn(e),o=new bi({name:"img"}),r=[];for(const e of i)if(o.match(e.item)){const n=e.item,i=n.getAttribute("v:shapes")?n.getAttribute("v:shapes").split(" "):[];i.length&&i.every(e=>t.indexOf(e)>-1)?r.push(n):n.getAttribute("src")||r.push(n)}for(const t of r)n.remove(t)}(function(t,e){const n=e.createRangeIn(t),i=new bi({name:/v:(.+)/}),o=[];for(const t of n){const e=t.item,n=e.previousSibling&&e.previousSibling.name||null;i.match(e)&&e.getAttribute("o:gfxdata")&&"v:shapetype"!==n&&o.push(t.item.getAttribute("id"))}return o}(t,n),t,n),function(t,e){const n=e.createRangeIn(t),i=new bi({name:/v:(.+)/}),o=[];for(const t of n)i.match(t.item)&&o.push(t.item);for(const t of o)e.remove(t)}(t,n);const i=function(t,e){const n=e.createRangeIn(t),i=new bi({name:"img"}),o=[];for(const t of n)i.match(t.item)&&t.item.getAttribute("src").startsWith("file://")&&o.push(t.item);return o}(t,n);i.length&&function(t,e,n){if(t.length===e.length)for(let i=0;i<t.length;i++){const o=`data:${e[i].type};base64,${Fg(e[i].hex)}`;n.setAttribute("src",o,t[i])}}(i,function(t){if(!t)return[];const e=/{\\pict[\s\S]+?\\bliptag-?\d+(\\blipupi-?\d+)?({\\\*\\blipuid\s?[\da-fA-F]+)?[\s}]*?/,n=new RegExp("(?:("+e.source+"))([\\da-fA-F\\s]+)\\}","g"),i=t.match(n),o=[];if(i)for(const t of i){let n=!1;t.includes("\\pngblip")?n="image/png":t.includes("\\jpegblip")&&(n="image/jpeg"),n&&o.push({hex:t.replace(e,"").replace(/[^\da-fA-F]/g,""),type:n})}return o}(e),n)}function Fg(t){return btoa(t.match(/\w{2}/g).map(t=>String.fromCharCode(parseInt(t,16))).join(""))}function Ug(t,e){let n=e.parent;for(;n;){if(n.name===t)return n;n=n.parent}}function Hg(t,e,n,i,o=1){e>o?i.setAttribute(t,e,n):i.removeAttribute(t,n)}function qg(t,e,n={}){const i=t.createElement("tableCell",n);t.insertElement("paragraph",i),t.insert(i,e)}function Wg(){return t=>{t.on("element:table",(t,e,n)=>{const i=e.viewItem;if(!n.consumable.test(i,{name:!0}))return;const{rows:o,headingRows:r,headingColumns:s}=function(t){const e={headingRows:0,headingColumns:0},n=[],i=[];let o;for(const r of Array.from(t.getChildren()))if("tbody"===r.name||"thead"===r.name||"tfoot"===r.name){"thead"!==r.name||o||(o=r);const t=Array.from(r.getChildren()).filter(t=>t.is("element","tr"));for(const r of t)if("thead"===r.parent.name&&r.parent===o)e.headingRows++,n.push(r);else{i.push(r);const t=$g(r);t>e.headingColumns&&(e.headingColumns=t)}}return e.rows=[...n,...i],e}(i),a={};s&&(a.headingColumns=s),r&&(a.headingRows=r);const c=n.writer.createElement("table",a),l=n.splitToAllowedParent(c,e.modelCursor);if(l){if(n.writer.insert(c,l.position),n.consumable.consume(i,{name:!0}),o.length)o.forEach(t=>n.convertItem(t,n.writer.createPositionAt(c,"end")));else{const t=n.writer.createElement("tableRow");n.writer.insert(t,n.writer.createPositionAt(c,"end")),qg(n.writer,n.writer.createPositionAt(t,"end"))}e.modelRange=n.writer.createRange(n.writer.createPositionBefore(c),n.writer.createPositionAfter(c)),l.cursorParent?e.modelCursor=n.writer.createPositionAt(l.cursorParent,0):e.modelCursor=e.modelRange.end}})}}function Yg(t){return e=>{e.on(`element:${t}`,(t,e,n)=>{const i=e.viewItem;if(!n.consumable.test(i,{name:!0}))return;const o=n.writer.createElement("tableCell"),r=n.splitToAllowedParent(o,e.modelCursor);if(!r)return;n.writer.insert(o,r.position),n.consumable.consume(i,{name:!0});const s=n.writer.createPositionAt(o,0);n.convertChildren(i,s),o.childCount||n.writer.insertElement("paragraph",s),e.modelRange=n.writer.createRange(n.writer.createPositionBefore(o),n.writer.createPositionAfter(o)),e.modelCursor=e.modelRange.end})}}function $g(t){let e=0,n=0;const i=Array.from(t.getChildren()).filter(t=>"th"===t.name||"td"===t.name);for(;n<i.length&&"th"===i[n].name;){const t=i[n];e+=parseInt(t.getAttribute("colspan")||1),n++}return e}class Gg{constructor(t,e={}){this.table=t,this.startRow=e.startRow||0,this.endRow="number"==typeof e.endRow?e.endRow:void 0,this.includeSpanned=!!e.includeSpanned,this.column="number"==typeof e.column?e.column:void 0,this._skipRows=new Set,this._row=0,this._column=0,this._cell=0,this._spannedCells=new Map}[Symbol.iterator](){return this}next(){const t=this.table.getChild(this._row);if(!t||this._isOverEndRow())return{done:!0};if(this._isSpanned(this._row,this._column)){const t=this._column,e=this._formatOutValue(void 0,t);return this._column++,!this.includeSpanned||this._shouldSkipRow()||this._shouldSkipColumn(t,1)?this.next():e}const e=t.getChild(this._cell);if(!e)return this._row++,this._column=0,this._cell=0,this.next();const n=parseInt(e.getAttribute("colspan")||1),i=parseInt(e.getAttribute("rowspan")||1);(n>1||i>1)&&this._recordSpans(this._row,this._column,i,n);const o=this._column,r=this._formatOutValue(e,o,i,n);return this._column++,this._cell++,this._shouldSkipRow()||this._shouldSkipColumn(o,n)?this.next():r}skipRow(t){this._skipRows.add(t)}_isOverEndRow(){return void 0!==this.endRow&&this._row>this.endRow}_formatOutValue(t,e,n=1,i=1){return{done:!1,value:{cell:t,row:this._row,column:e,rowspan:n,colspan:i,cellIndex:this._cell}}}_shouldSkipRow(){const t=this._row<this.startRow,e=this._skipRows.has(this._row);return t||e}_shouldSkipColumn(t,e){if(void 0===this.column)return!1;const n=t===this.column,i=t<this.column&&t+e>this.column;return!n&&!i}_isSpanned(t,e){if(!this._spannedCells.has(t))return!1;return this._spannedCells.get(t).has(e)}_recordSpans(t,e,n,i){for(let n=e+1;n<=e+i-1;n++)this._markSpannedCell(t,n);for(let o=t+1;o<t+n;o++)for(let t=e;t<=e+i-1;t++)this._markSpannedCell(o,t)}_markSpannedCell(t,e){this._spannedCells.has(t)||this._spannedCells.set(t,new Map),this._spannedCells.get(t).set(e,!0)}}function Qg(t){return!!t.getCustomProperty("table")&&Mf(t)}function Kg(t){const e=t.getSelectedElement();return e&&Qg(e)?e:null}function Jg(t){const e=Ug("table",t.getFirstPosition());return e&&Qg(e.parent)?e.parent:null}function Zg(t={}){return e=>e.on("insert:table",(e,n,i)=>{const o=n.item;if(!i.consumable.consume(o,"insert"))return;i.consumable.consume(o,"attribute:headingRows:table"),i.consumable.consume(o,"attribute:headingColumns:table");const r=t&&t.asWidget,s=i.writer.createContainerElement("figure",{class:"table"}),a=i.writer.createContainerElement("table");let c;i.writer.insert(i.writer.createPositionAt(s,0),a),r&&(c=function(t,e){return e.setCustomProperty("table",!0,t),Ef(t,e,{hasSelectionHandler:!0})}(s,i.writer));const l=new Gg(o),d={headingRows:o.getAttribute("headingRows")||0,headingColumns:o.getAttribute("headingColumns")||0},u=new Map;for(const e of l){const{row:n,cell:r}=e,s=lb(cb(n,d),a,i),c=o.getChild(n),l=u.get(n)||sb(c,n,s,i);u.set(n,l),i.consumable.consume(r,"insert"),rb(e,d,i.writer.createPositionAt(l,"end"),i,t)}const h=i.mapper.toViewPosition(n.range.start);i.mapper.bindElements(o,r?c:s),i.writer.insert(h,r?c:s)})}function Xg(t={}){return e=>e.on("insert:tableRow",(e,n,i)=>{const o=n.item;if(!i.consumable.consume(o,"insert"))return;const r=o.parent,s=fb(i.mapper.toViewElement(r)),a=r.getChildIndex(o),c=new Gg(r,{startRow:a,endRow:a}),l={headingRows:r.getAttribute("headingRows")||0,headingColumns:r.getAttribute("headingColumns")||0},d=new Map;for(const e of c){const n=lb(cb(a,l),s,i),r=d.get(a)||sb(o,a,n,i);d.set(a,r),i.consumable.consume(e.cell,"insert"),rb(e,l,i.writer.createPositionAt(r,"end"),i,t)}})}function tb(t={}){return e=>e.on("insert:tableCell",(e,n,i)=>{const o=n.item;if(!i.consumable.consume(o,"insert"))return;const r=o.parent,s=r.parent,a=s.getChildIndex(r),c=new Gg(s,{startRow:a,endRow:a}),l={headingRows:s.getAttribute("headingRows")||0,headingColumns:s.getAttribute("headingColumns")||0};for(const e of c)if(e.cell===o){const n=i.mapper.toViewElement(r);return void rb(e,l,i.writer.createPositionAt(n,r.getChildIndex(o)),i,t)}})}function eb(t={}){const e=!!t.asWidget;return t=>t.on("attribute:headingRows:table",(t,n,i)=>{const o=n.item;if(!i.consumable.consume(n.item,t.name))return;const r=fb(i.mapper.toViewElement(o)),s=n.attributeOldValue,a=n.attributeNewValue;if(a>s){const t=Array.from(o.getChildren()).filter(({index:t})=>c(t,s-1,a));hb(t,lb("thead",r,i),i,"end");for(const n of t)for(const t of n.getChildren())ib(t,"th",i,e);ub("tbody",r,i)}else{hb(Array.from(o.getChildren()).filter(({index:t})=>c(t,a-1,s)).reverse(),lb("tbody",r,i),i,0);const t=new Gg(o,{startRow:a?a-1:a,endRow:s-1}),n={headingRows:o.getAttribute("headingRows")||0,headingColumns:o.getAttribute("headingColumns")||0};for(const o of t)ob(o,n,i,e);ub("thead",r,i)}function c(t,e,n){return t>e&&t<n}})}function nb(t={}){const e=!!t.asWidget;return t=>t.on("attribute:headingColumns:table",(t,n,i)=>{const o=n.item;if(!i.consumable.consume(n.item,t.name))return;const r={headingRows:o.getAttribute("headingRows")||0,headingColumns:o.getAttribute("headingColumns")||0},s=n.attributeOldValue,a=n.attributeNewValue,c=(s>a?s:a)-1;for(const t of new Gg(o))t.column>c||ob(t,r,i,e)})}function ib(t,e,n,i){const o=n.writer,r=n.mapper.toViewElement(t);if(!r)return;let s;if(i){s=If(o.createEditableElement(e,r.getAttributes()),o),o.insert(o.createPositionAfter(r),s),o.move(o.createRangeIn(r),o.createPositionAt(s,0)),o.remove(o.createRangeOn(r))}else s=o.rename(e,r);n.mapper.bindElements(t,s)}function ob(t,e,n,i){const{cell:o}=t,r=ab(t,e),s=n.mapper.toViewElement(o);s&&s.name!==r&&ib(o,r,n,i)}function rb(t,e,n,i,o){const r=o&&o.asWidget,s=ab(t,e),a=r?If(i.writer.createEditableElement(s),i.writer):i.writer.createContainerElement(s),c=t.cell,l=c.getChild(0),d=1===c.childCount&&"paragraph"===l.name;if(i.writer.insert(n,a),d&&!function(t){return!![...t.getAttributeKeys()].length}(l)){const t=c.getChild(0),e=i.writer.createPositionAt(a,"end");if(i.consumable.consume(t,"insert"),o.asWidget){const n=i.writer.createContainerElement("span");i.mapper.bindElements(t,n),i.writer.insert(e,n),i.mapper.bindElements(c,a)}else i.mapper.bindElements(c,a),i.mapper.bindElements(t,a)}else i.mapper.bindElements(c,a)}function sb(t,e,n,i){i.consumable.consume(t,"insert");const o=i.writer.createContainerElement("tr");i.mapper.bindElements(t,o);const r=t.parent.getAttribute("headingRows")||0,s=r>0&&e>=r?e-r:e,a=i.writer.createPositionAt(n,s);return i.writer.insert(a,o),o}function ab(t,e){const{row:n,column:i}=t,{headingColumns:o,headingRows:r}=e;return r&&r>n?"th":o&&o>i?"th":"td"}function cb(t,e){return t<e.headingRows?"thead":"tbody"}function lb(t,e,n){const i=db(t,e);return i||function(t,e,n){const i=n.writer.createContainerElement(t),o=n.writer.createPositionAt(e,"tbody"==t?"end":0);return n.writer.insert(o,i),i}(t,e,n)}function db(t,e){for(const n of e.getChildren())if(n.name==t)return n}function ub(t,e,n){const i=db(t,e);i&&0===i.childCount&&n.writer.remove(n.writer.createRangeOn(i))}function hb(t,e,n,i){for(const o of t){const t=n.mapper.toViewElement(o);t&&n.writer.move(n.writer.createRangeOn(t),n.writer.createPositionAt(e,i))}}function fb(t){for(const e of t.getChildren())if("table"===e.name)return e}class mb extends Xl{refresh(){const t=this.editor.model,e=t.document.selection,n=t.schema,i=function(t){const e=t.parent;return e===e.root?e:e.parent}(e.getFirstPosition());this.isEnabled=n.checkChild(i,"table")}execute(t={}){const e=this.editor.model,n=e.document.selection,i=this.editor.plugins.get("TableUtils"),o=parseInt(t.rows)||2,r=parseInt(t.columns)||2,s=Nf(n,e);e.change(t=>{const n=i.createTable(t,o,r);e.insertContent(n,s),t.setSelection(t.createPositionAt(n.getNodeByPath([0,0,0]),0))})}}class pb extends Xl{constructor(t,e={}){super(t),this.order=e.order||"below"}refresh(){const t=Ug("table",this.editor.model.document.selection.getFirstPosition());this.isEnabled=!!t}execute(){const t=this.editor,e=t.model.document.selection,n=t.plugins.get("TableUtils"),i=Ug("tableCell",e.getFirstPosition()).parent,o=i.parent,r=o.getChildIndex(i),s="below"===this.order?r+1:r;n.insertRows(o,{rows:1,at:s})}}class gb extends Xl{constructor(t,e={}){super(t),this.order=e.order||"right"}refresh(){const t=Ug("table",this.editor.model.document.selection.getFirstPosition());this.isEnabled=!!t}execute(){const t=this.editor,e=t.model.document.selection,n=t.plugins.get("TableUtils"),i=Ug("tableCell",e.getFirstPosition()),o=i.parent.parent,{column:r}=n.getCellLocation(i),s="right"===this.order?r+1:r;n.insertColumns(o,{columns:1,at:s})}}class bb extends Xl{constructor(t,e={}){super(t),this.direction=e.direction||"horizontally"}refresh(){const t=Ug("tableCell",this.editor.model.document.selection.getFirstPosition());this.isEnabled=!!t}execute(){const t=Ug("tableCell",this.editor.model.document.selection.getFirstPosition()),e="horizontally"===this.direction,n=this.editor.plugins.get("TableUtils");e?n.splitCellHorizontally(t,2):n.splitCellVertically(t,2)}}class wb extends Xl{constructor(t,e){super(t),this.direction=e.direction,this.isHorizontal="right"==this.direction||"left"==this.direction}refresh(){const t=this._getMergeableCell();this.isEnabled=!!t,this.value=t}execute(){const t=this.editor.model,e=Ug("tableCell",t.document.selection.getFirstPosition()),n=this.value,i=this.direction;t.change(t=>{const o="right"==i||"down"==i,r=o?e:n,s=o?n:e,a=s.parent;!function(t,e,n){_b(t)||(_b(e)&&n.remove(n.createRangeIn(e)),n.move(n.createRangeIn(t),n.createPositionAt(e,"end")));n.remove(t)}(s,r,t);const c=this.isHorizontal?"colspan":"rowspan",l=parseInt(e.getAttribute(c)||1),d=parseInt(n.getAttribute(c)||1);t.setAttribute(c,l+d,r),t.setSelection(t.createRangeIn(r)),a.childCount||function(t,e){const n=t.parent,i=n.getChildIndex(t);for(const{cell:t,row:o,rowspan:r}of new Gg(n,{endRow:i})){const n=o+r-1>=i;n&&Hg("rowspan",r-1,t,e)}e.remove(t)}(a,t)})}_getMergeableCell(){const t=Ug("tableCell",this.editor.model.document.selection.getFirstPosition());if(!t)return;const e=this.editor.plugins.get("TableUtils"),n=this.isHorizontal?function(t,e,n){const i="right"==e?t.nextSibling:t.previousSibling;if(!i)return;const o="right"==e?t:i,r="right"==e?i:t,{column:s}=n.getCellLocation(o),{column:a}=n.getCellLocation(r),c=parseInt(o.getAttribute("colspan")||1);return s+c===a?i:void 0}(t,this.direction,e):function(t,e){const n=t.parent,i=n.parent,o=i.getChildIndex(n);if("down"==e&&o===i.childCount-1||"up"==e&&0===o)return;const r=parseInt(t.getAttribute("rowspan")||1),s=i.getAttribute("headingRows")||0;if(s&&("down"==e&&o+r===s||"up"==e&&o===s))return;const a=parseInt(t.getAttribute("rowspan")||1),c="down"==e?o+a:o,l=[...new Gg(i,{endRow:c})],d=l.find(e=>e.cell===t).column,u=l.find(({row:t,rowspan:n,column:i})=>i===d&&("down"==e?t===c:c===t+n));return u&&u.cell}(t,this.direction);if(!n)return;const i=this.isHorizontal?"rowspan":"colspan",o=parseInt(t.getAttribute(i)||1);return parseInt(n.getAttribute(i)||1)===o?n:void 0}}function _b(t){return 1==t.childCount&&t.getChild(0).is("paragraph")&&t.getChild(0).isEmpty}class kb extends Xl{refresh(){const t=Ug("tableCell",this.editor.model.document.selection.getFirstPosition());this.isEnabled=!!t&&t.parent.parent.childCount>1}execute(){const t=this.editor.model,e=Ug("tableCell",t.document.selection.getFirstPosition()).parent,n=e.parent,i=n.getChildIndex(e),o=n.getAttribute("headingRows")||0;t.change(t=>{o&&i<=o&&Hg("headingRows",o-1,n,t,0);const r=[...new Gg(n,{endRow:i})],s=new Map;r.filter(({row:t,rowspan:e})=>t===i&&e>1).forEach(({column:t,cell:e,rowspan:n})=>s.set(t,{cell:e,rowspanToSet:n-1})),r.filter(({row:t,rowspan:e})=>t<=i-1&&t+e>i).forEach(({cell:e,rowspan:n})=>Hg("rowspan",n-1,e,t));const a=i+1,c=new Gg(n,{includeSpanned:!0,startRow:a,endRow:a});let l;for(const{row:e,column:i,cell:o}of[...c])if(s.has(i)){const{cell:o,rowspanToSet:r}=s.get(i),a=l?t.createPositionAfter(l):t.createPositionAt(n.getChild(e),0);t.move(t.createRangeOn(o),a),Hg("rowspan",r,o,t),l=o}else l=o;t.remove(e)})}}class vb extends Xl{refresh(){const t=this.editor,e=t.model.document.selection,n=t.plugins.get("TableUtils"),i=Ug("tableCell",e.getFirstPosition());this.isEnabled=!!i&&n.getColumns(i.parent.parent)>1}execute(){const t=this.editor.model,e=Ug("tableCell",t.document.selection.getFirstPosition()),n=e.parent,i=n.parent,o=i.getAttribute("headingColumns")||0,r=i.getChildIndex(n),s=[...new Gg(i)],a=s.find(t=>t.cell===e).column;t.change(t=>{o&&r<=o&&t.setAttribute("headingColumns",o-1,i);for(const{cell:e,column:n,colspan:i}of s)n<=a&&i>1&&n+i>a?Hg("colspan",i-1,e,t):n===a&&t.remove(e)})}}class yb extends Xl{refresh(){const t=Ug("tableCell",this.editor.model.document.selection.getFirstPosition()),e=!!t;this.isEnabled=e,this.value=e&&this._isInHeading(t,t.parent.parent)}execute(){const t=this.editor.model,e=Ug("tableCell",t.document.selection.getFirstPosition()).parent,n=e.parent,i=n.getAttribute("headingRows")||0,o=e.index,r=i>o?o:o+1;t.change(t=>{if(r){const e=function(t,e,n){const i=[],o=new Gg(t,{startRow:e>n?n:0,endRow:e-1});for(const{row:t,rowspan:n,cell:r}of o)n>1&&t+n>e&&i.push(r);return i}(n,r,i);for(const n of e)xb(n,r,t)}Hg("headingRows",r,n,t,0)})}_isInHeading(t,e){const n=parseInt(e.getAttribute("headingRows")||0);return!!n&&t.parent.index<n}}function xb(t,e,n){const i=t.parent,o=i.parent,r=e-i.index,s={},a=parseInt(t.getAttribute("rowspan"))-r;a>1&&(s.rowspan=a);const c=o.getChildIndex(i),l=c+r,d=[...new Gg(o,{startRow:c,endRow:l,includeSpanned:!0})];let u;for(const{row:e,column:i,cell:r,colspan:a,cellIndex:c}of d)if(r===t&&(u=i,a>1&&(s.colspan=a)),void 0!==u&&u===i&&e===l){const t=o.getChild(e);qg(n,n.createPositionAt(t,c),s)}Hg("rowspan",r,t,n)}class Ab extends Xl{refresh(){const t=Ug("tableCell",this.editor.model.document.selection.getFirstPosition()),e=!!t;this.isEnabled=e,this.value=e&&this._isInHeading(t,t.parent.parent)}execute(){const t=this.editor.model,e=t.document.selection,n=this.editor.plugins.get("TableUtils"),i=Ug("tableCell",e.getFirstPosition().parent),o=i.parent.parent,r=parseInt(o.getAttribute("headingColumns")||0),{column:s}=n.getCellLocation(i),a=r>s?s:s+1;t.change(t=>{Hg("headingColumns",a,o,t,0)})}_isInHeading(t,e){const n=parseInt(e.getAttribute("headingColumns")||0),i=this.editor.plugins.get("TableUtils"),{column:o}=i.getCellLocation(t);return!!n&&o<n}}class Cb extends Gl{static get pluginName(){return"TableUtils"}getCellLocation(t){const e=t.parent,n=e.parent,i=n.getChildIndex(e),o=new Gg(n,{startRow:i,endRow:i});for(const{cell:e,row:n,column:i}of o)if(e===t)return{row:n,column:i}}createTable(t,e,n){const i=t.createElement("table");return Tb(t,i,0,e,n),i}insertRows(t,e={}){const n=this.editor.model,i=e.at||0,o=e.rows||1;n.change(e=>{const n=t.getAttribute("headingRows")||0;if(n>i&&e.setAttribute("headingRows",n+o,t),0===i||i===t.childCount)return void Tb(e,t,i,o,this.getColumns(t));const r=new Gg(t,{endRow:i});let s=0;for(const{row:t,rowspan:n,colspan:a,cell:c}of r){t<i&&t+n>i&&e.setAttribute("rowspan",n+o,c),t===i&&(s+=a)}Tb(e,t,i,o,s)})}insertColumns(t,e={}){const n=this.editor.model,i=e.at||0,o=e.columns||1;n.change(e=>{const n=t.getAttribute("headingColumns");i<n&&e.setAttribute("headingColumns",n+o,t);const r=this.getColumns(t);if(0===i||r===i){for(const n of t.getChildren())Pb(o,e,e.createPositionAt(n,i?"end":0));return}const s=new Gg(t,{column:i,includeSpanned:!0});for(const{row:n,column:r,cell:a,colspan:c,rowspan:l,cellIndex:d}of s)if(r!==i){if(e.setAttribute("colspan",c+o,a),s.skipRow(n),l>1)for(let t=n+1;t<n+l;t++)s.skipRow(t)}else{const i=e.createPositionAt(t.getChild(n),d);Pb(o,e,i)}})}splitCellVertically(t,e=2){const n=this.editor.model,i=t.parent.parent,o=parseInt(t.getAttribute("rowspan")||1),r=parseInt(t.getAttribute("colspan")||1);n.change(n=>{if(r>1){const{newCellsSpan:i,updatedSpan:s}=Mb(r,e);Hg("colspan",s,t,n);const a={};i>1&&(a.colspan=i),o>1&&(a.rowspan=o),Pb(r>e?e-1:r-1,n,n.createPositionAfter(t),a)}if(r<e){const s=e-r,a=[...new Gg(i)],{column:c}=a.find(({cell:e})=>e===t),l=a.filter(({cell:e,colspan:n,column:i})=>{return e!==t&&i===c||i<c&&i+n>c});for(const{cell:t,colspan:e}of l)n.setAttribute("colspan",e+s,t);const d={};o>1&&(d.rowspan=o),Pb(s,n,n.createPositionAfter(t),d);const u=i.getAttribute("headingColumns")||0;u>c&&Hg("headingColumns",u+s,i,n)}})}splitCellHorizontally(t,e=2){const n=this.editor.model,i=t.parent,o=i.parent,r=o.getChildIndex(i),s=parseInt(t.getAttribute("rowspan")||1),a=parseInt(t.getAttribute("colspan")||1);n.change(n=>{if(s>1){const i=[...new Gg(o,{startRow:r,endRow:r+s-1,includeSpanned:!0})],{newCellsSpan:c,updatedSpan:l}=Mb(s,e);Hg("rowspan",l,t,n);const{column:d}=i.find(({cell:e})=>e===t),u={};c>1&&(u.rowspan=c),a>1&&(u.colspan=a);for(const{column:t,row:e,cellIndex:s}of i){if(e>=r+l&&t===d&&(e+r+l)%c==0){Pb(1,n,n.createPositionAt(o.getChild(e),s),u)}}}if(s<e){const i=e-s,c=[...new Gg(o,{startRow:0,endRow:r})];for(const{cell:e,rowspan:o,row:s}of c)if(e!==t&&s+o>r){const t=o+i;n.setAttribute("rowspan",t,e)}const l={};a>1&&(l.colspan=a),Tb(n,o,r+1,i,1,l);const d=o.getAttribute("headingRows")||0;d>r&&Hg("headingRows",d+i,o,n)}})}getColumns(t){return[...t.getChild(0).getChildren()].reduce((t,e)=>{return t+parseInt(e.getAttribute("colspan")||1)},0)}}function Tb(t,e,n,i,o,r={}){for(let s=0;s<i;s++){const i=t.createElement("tableRow");t.insert(i,e,n),Pb(o,t,t.createPositionAt(i,"end"),r)}}function Pb(t,e,n,i={}){for(let o=0;o<t;o++)qg(e,n,i)}function Mb(t,e){if(t<e)return{newCellsSpan:1,updatedSpan:1};const n=Math.floor(t/e);return{newCellsSpan:n,updatedSpan:t-n*e+n}}function Eb(t){t.document.registerPostFixer(e=>(function(t,e){const n=e.document.differ.getChanges();let i=!1;const o=new Set;for(const e of n){let n;"table"==e.name&&"insert"==e.type&&(n=e.position.nodeAfter),"tableRow"!=e.name&&"tableCell"!=e.name||(n=Ug("table",e.position)),Nb(e)&&(n=Ug("table",e.range.start)),n&&!o.has(n)&&(i=Sb(n,t)||i,i=Ib(n,t)||i,o.add(n))}return i})(e,t))}function Sb(t,e){let n=!1;const i=function(t){const e=parseInt(t.getAttribute("headingRows")||0),n=t.childCount,i=[];for(const{row:o,rowspan:r,cell:s}of new Gg(t)){if(r<2)continue;const t=o<e,a=t?e:n;if(o+r>a){const t=a-o;i.push({cell:s,rowspan:t})}}return i}(t);if(i.length){n=!0;for(const t of i)Hg("rowspan",t.rowspan,t.cell,e,1)}return n}function Ib(t,e){let n=!1;const i=function(t){const e={};for(const{row:n}of new Gg(t,{includeSpanned:!0}))e[n]||(e[n]=0),e[n]+=1;return e}(t),o=i[0];if(!Object.values(i).every(t=>t===o)){const o=Object.values(i).reduce((t,e)=>e>t?e:t,0);for(const[r,s]of Object.entries(i)){const i=o-s;if(i){for(let n=0;n<i;n++)qg(e,e.createPositionAt(t.getChild(r),"end"));n=!0}}}return n}function Nb(t){const e="attribute"===t.type,n=t.attributeKey;return e&&("headingRows"===n||"colspan"===n||"rowspan"===n)}function Ob(t){t.document.registerPostFixer(e=>(function(t,e){const n=e.document.differ.getChanges();let i=!1;for(const e of n)"remove"==e.type&&e.position.parent.is("tableCell")&&(i=Lb(e.position.parent,t)||i),"insert"==e.type&&("table"==e.name&&(i=Rb(e.position.nodeAfter,t)||i),"tableRow"==e.name&&(i=Db(e.position.nodeAfter,t)||i),"tableCell"==e.name&&(i=Lb(e.position.nodeAfter,t)||i));return i})(e,t))}function Rb(t,e){let n=!1;for(const i of t.getChildren())n=Db(i,e)||n;return n}function Db(t,e){let n=!1;for(const i of t.getChildren())n=Lb(i,e)||n;return n}function Lb(t,e){if(0==t.childCount)return e.insertElement("paragraph",t),!0;const n=Array.from(t.getChildren()).filter(t=>t.is("text"));for(const t of n)e.wrap(e.createRangeOn(t),"paragraph");return!!n.length}function jb(t,e){e.view.document.registerPostFixer(n=>(function(t,e,n,i){let o=!1;const r=function(t){const e=Array.from(t._renderer.markedAttributes).filter(t=>!!t.parent).filter(Bb).filter(t=>zb(t.parent)),n=Array.from(t._renderer.markedChildren).filter(t=>!!t.parent).filter(zb).reduce((t,e)=>{const n=Array.from(e.getChildren()).filter(Bb);return[...t,...n]},[]);return[...e,...n]}(i);for(const e of r)o=Vb(e,n,t)||o;o&&function(t,e,n){const i=Array.from(t.getRanges()).map(t=>e.toViewRange(t));n.setSelection(i,{backward:t.isBackward})}(e.document.selection,n,t);return o})(n,t,e.mapper,e.view))}function Vb(t,e,n){const i=e.toModelElement(t),o=function(t,e){const n=t.childCount>1,i=!![...e.getAttributes()].length;return n||i?"p":"span"}(i.parent,i);if(t.name!==o){e.unbindViewElement(t);const r=n.rename(o,t);return e.bindElements(i,r),!0}return!1}function Bb(t){return t.is("p")||t.is("span")}function zb(t){return t.is("td")||t.is("th")}n(127);class Fb extends Gl{init(){const t=this.editor,e=t.model,n=e.schema,i=t.conversion;n.register("table",{allowWhere:"$block",allowAttributes:["headingRows","headingColumns"],isLimit:!0,isObject:!0,isBlock:!0}),n.register("tableRow",{allowIn:"table",isLimit:!0}),n.register("tableCell",{allowIn:"tableRow",allowAttributes:["colspan","rowspan"],isLimit:!0}),n.extend("$block",{allowIn:"tableCell"}),n.addChildCheck((t,e)=>{if("table"==e.name&&Array.from(t.getNames()).includes("table"))return!1}),i.for("upcast").add(Wg()),i.for("editingDowncast").add(Zg({asWidget:!0})),i.for("dataDowncast").add(Zg()),i.for("upcast").elementToElement({model:"tableRow",view:"tr"}),i.for("editingDowncast").add(Xg({asWidget:!0})),i.for("dataDowncast").add(Xg()),i.for("downcast").add(t=>t.on("remove:tableRow",(t,e,n)=>{t.stop();const i=n.writer,o=n.mapper,r=o.toViewPosition(e.position).getLastMatchingPosition(t=>!t.item.is("tr")).nodeAfter,s=r.parent,a=i.createRangeOn(r),c=i.remove(a);for(const t of i.createRangeIn(c).getItems())o.unbindViewElement(t);s.childCount||i.remove(i.createRangeOn(s))},{priority:"higher"})),i.for("upcast").add(Yg("td")),i.for("upcast").add(Yg("th")),i.for("editingDowncast").add(tb({asWidget:!0})),i.for("dataDowncast").add(tb()),i.attributeToAttribute({model:"colspan",view:"colspan"}),i.attributeToAttribute({model:"rowspan",view:"rowspan"}),i.for("editingDowncast").add(nb({asWidget:!0})),i.for("dataDowncast").add(nb()),i.for("editingDowncast").add(eb({asWidget:!0})),i.for("dataDowncast").add(eb()),jb(t.model,t.editing),t.commands.add("insertTable",new mb(t)),t.commands.add("insertTableRowAbove",new pb(t,{order:"above"})),t.commands.add("insertTableRowBelow",new pb(t,{order:"below"})),t.commands.add("insertTableColumnLeft",new gb(t,{order:"left"})),t.commands.add("insertTableColumnRight",new gb(t,{order:"right"})),t.commands.add("removeTableRow",new kb(t)),t.commands.add("removeTableColumn",new vb(t)),t.commands.add("splitTableCellVertically",new bb(t,{direction:"vertically"})),t.commands.add("splitTableCellHorizontally",new bb(t,{direction:"horizontally"})),t.commands.add("mergeTableCellRight",new wb(t,{direction:"right"})),t.commands.add("mergeTableCellLeft",new wb(t,{direction:"left"})),t.commands.add("mergeTableCellDown",new wb(t,{direction:"down"})),t.commands.add("mergeTableCellUp",new wb(t,{direction:"up"})),t.commands.add("setTableColumnHeader",new Ab(t)),t.commands.add("setTableRowHeader",new yb(t)),Eb(e),Ob(e),this.editor.keystrokes.set("Tab",(...t)=>this._handleTabOnSelectedTable(...t),{priority:"low"}),this.editor.keystrokes.set("Tab",this._getTabHandler(!0),{priority:"low"}),this.editor.keystrokes.set("Shift+Tab",this._getTabHandler(!1),{priority:"low"})}static get requires(){return[Cb]}_handleTabOnSelectedTable(t,e){const n=this.editor,i=n.model.document.selection;if(!i.isCollapsed&&1===i.rangeCount&&i.getFirstRange().isFlat){const t=i.getSelectedElement();if(!t||!t.is("table"))return;e(),n.model.change(e=>{e.setSelection(e.createRangeIn(t.getChild(0).getChild(0)))})}}_getTabHandler(t){const e=this.editor;return(n,i)=>{const o=Ug("tableCell",e.model.document.selection.getFirstPosition());if(!o)return;i();const r=o.parent,s=r.parent,a=s.getChildIndex(r),c=r.getChildIndex(o),l=0===c;if(!t&&l&&0===a)return;const d=c===r.childCount-1,u=a===s.childCount-1;let h;if(t&&u&&d&&e.plugins.get("TableUtils").insertRows(s,{at:s.childCount}),t&&d){const t=s.getChild(a+1);h=t.getChild(0)}else if(!t&&l){const t=s.getChild(a-1);h=t.getChild(t.childCount-1)}else h=r.getChild(c+(t?1:-1));e.model.change(t=>{t.setSelection(t.createRangeIn(h))})}}}n(129);class Ub extends Ol{constructor(t){super(t);const e=this.bindTemplate;this.items=this.createCollection(),this.set("rows",0),this.set("columns",0),this.bind("label").to(this,"columns",this,"rows",(t,e)=>`${e} x ${t}`),this.setTemplate({tag:"div",attributes:{class:["ck"]},children:[{tag:"div",attributes:{class:["ck-insert-table-dropdown__grid"]},children:this.items},{tag:"div",attributes:{class:["ck-insert-table-dropdown__label"]},children:[{text:e.to("label")}]}],on:{mousedown:e.to(t=>{t.preventDefault()}),click:e.to(()=>{this.fire("execute")})}});for(let t=0;t<100;t++){const e=new Hb;e.on("over",()=>{const e=Math.floor(t/10),n=t%10;this.set("rows",e+1),this.set("columns",n+1)}),this.items.add(e)}this.on("change:columns",()=>{this._highlightGridBoxes()}),this.on("change:rows",()=>{this._highlightGridBoxes()})}focus(){}focusLast(){}_highlightGridBoxes(){const t=this.rows,e=this.columns;this.items.map((n,i)=>{const o=Math.floor(i/10)<t&&i%10<e;n.set("isOn",o)})}}class Hb extends Ol{constructor(t){super(t);const e=this.bindTemplate;this.set("isOn",!1),this.setTemplate({tag:"div",attributes:{class:["ck-insert-table-dropdown-grid-box",e.if("isOn","ck-on")]},on:{mouseover:e.to("over")}})}}var qb=n(49),Wb=n.n(qb),Yb=n(50),$b=n.n(Yb),Gb=n(51),Qb=n.n(Gb),Kb=n(52),Jb=n.n(Kb);class Zb extends Gl{init(){const t=this.editor,e=this.editor.t;t.ui.componentFactory.add("insertTable",n=>{const i=t.commands.get("insertTable"),o=Hu(n);o.bind("isEnabled").to(i),o.buttonView.set({icon:Wb.a,label:e("ac"),tooltip:!0});const r=new Ub(n);return o.panelView.children.add(r),r.delegate("execute").to(o),o.buttonView.on("open",()=>{r.rows=0,r.columns=0}),o.on("execute",()=>{t.execute("insertTable",{rows:r.rows,columns:r.columns}),t.editing.view.focus()}),o}),t.ui.componentFactory.add("tableColumn",t=>{const n=[{type:"switchbutton",model:{commandName:"setTableColumnHeader",label:e("ad"),bindIsOn:!0}},{type:"separator"},{type:"button",model:{commandName:"insertTableColumnLeft",label:e("ae")}},{type:"button",model:{commandName:"insertTableColumnRight",label:e("af")}},{type:"button",model:{commandName:"removeTableColumn",label:e("ag")}}];return this._prepareDropdown(e("ah"),$b.a,n,t)}),t.ui.componentFactory.add("tableRow",t=>{const n=[{type:"switchbutton",model:{commandName:"setTableRowHeader",label:e("ai"),bindIsOn:!0}},{type:"separator"},{type:"button",model:{commandName:"insertTableRowBelow",label:e("aj")}},{type:"button",model:{commandName:"insertTableRowAbove",label:e("ak")}},{type:"button",model:{commandName:"removeTableRow",label:e("al")}}];return this._prepareDropdown(e("am"),Qb.a,n,t)}),t.ui.componentFactory.add("mergeTableCells",t=>{const n=[{type:"button",model:{commandName:"mergeTableCellUp",label:e("an")}},{type:"button",model:{commandName:"mergeTableCellRight",label:e("ao")}},{type:"button",model:{commandName:"mergeTableCellDown",label:e("ap")}},{type:"button",model:{commandName:"mergeTableCellLeft",label:e("aq")}},{type:"separator"},{type:"button",model:{commandName:"splitTableCellVertically",label:e("ar")}},{type:"button",model:{commandName:"splitTableCellHorizontally",label:e("as")}}];return this._prepareDropdown(e("at"),Jb.a,n,t)})}_prepareDropdown(t,e,n,i){const o=this.editor,r=Hu(i),s=[],a=new oo;for(const t of n)Xb(t,o,s,a);return qu(r,a),r.buttonView.set({label:t,icon:e,tooltip:!0}),r.bind("isEnabled").toMany(s,"isEnabled",(...t)=>t.some(t=>t)),this.listenTo(r,"execute",t=>{o.execute(t.source.commandName),o.editing.view.focus()}),r}}function Xb(t,e,n,i){const o=t.model=new Eu(t.model),{commandName:r,bindIsOn:s}=t.model;if("separator"!==t.type){const t=e.commands.get(r);n.push(t),o.set({commandName:r}),o.bind("isEnabled").to(t),s&&o.bind("isOn").to(t,"value")}o.set({withText:!0}),i.add(t)}n(131);n.d(e,"default",function(){return tw});class tw extends $l{}tw.builtinPlugins=[class extends Gl{static get requires(){return[Zl,od,cd,Cd,Jd]}static get pluginName(){return"Essentials"}},su,class extends Gl{static get requires(){return[Gu,ih,dh,gh]}static get pluginName(){return"Font"}},class extends Gl{static get requires(){return[_h,xh]}static get pluginName(){return"Bold"}},class extends Gl{static get requires(){return[Ch,Eh]}static get pluginName(){return"Italic"}},class extends Gl{static get requires(){return[Lh,Yh]}static get pluginName(){return"Alignment"}},class extends Gl{static get requires(){return[Jh,tf]}static get pluginName(){return"BlockQuote"}},class extends Gl{static get pluginName(){return"CKFinder"}static get requires(){return[cf,of,su]}},class extends Gl{static get requires(){return[gf,fm,Om]}static get pluginName(){return"EasyImage"}},class extends Gl{static get requires(){return[Um,Hm]}static get pluginName(){return"Heading"}},fm,class extends Gl{static get requires(){return[Ym]}static get pluginName(){return"ImageCaption"}},class extends Gl{static get requires(){return[up,hp]}static get pluginName(){return"ImageStyle"}},class extends Gl{static get requires(){return[fp]}static get pluginName(){return"ImageToolbar"}afterInit(){const t=this.editor;t.plugins.get(fp).register("image",{items:t.config.get("image.toolbar")||[],getRelatedElement:Rf})}},Om,class extends Gl{static get requires(){return[Sp,Fp]}static get pluginName(){return"Link"}},class extends Gl{static get requires(){return[ug,bg]}static get pluginName(){return"List"}},class extends Gl{static get requires(){return[Eg,Dg,Ig,Hf]}static get pluginName(){return"MediaEmbed"}},Lm,class extends Gl{static get pluginName(){return"PasteFromOffice"}init(){const t=this.editor;this.listenTo(t.plugins.get(Zl),"inputTransformation",(t,e)=>{const n=e.dataTransfer.getData("text/html");!0!==e.pasteFromOfficeProcessed&&function(t){return!(!t||!t.match(/<meta\s*name="?generator"?\s*content="?microsoft\s*word\s*\d+"?\/?>/gi)&&!t.match(/xmlns:o="urn:schemas-microsoft-com/gi))}(n)&&(e.content=this._normalizeWordInput(n,e.dataTransfer),e.pasteFromOfficeProcessed=!0)},{priority:"high"})}_normalizeWordInput(t,e){const{body:n,stylesString:i}=jg(t);return Vg(n,i),zg(n,e.getData("text/rtf")),n}},class extends Gl{static get requires(){return[Fb,Zb,Hf]}static get pluginName(){return"Table"}},class extends Gl{static get requires(){return[fp]}static get pluginName(){return"TableToolbar"}afterInit(){const t=this.editor,e=t.plugins.get(fp),n=t.config.get("table.contentToolbar"),i=t.config.get("table.toolbar"),o=t.config.get("table.tableToolbar");i&&console.warn("`config.table.toolbar` is deprecated and will be removed in the next major release. Use `config.table.contentToolbar` instead."),(n||i)&&e.register("tableContent",{items:n||i,getRelatedElement:Jg}),o&&e.register("table",{items:o,getRelatedElement:Kg})}}]}]).default});
//# sourceMappingURL=ckeditor.js.map

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var NovaCKEditor5UploadAdapter = function () {
    function NovaCKEditor5UploadAdapter(loader, resourceName, field, draftId) {
        _classCallCheck(this, NovaCKEditor5UploadAdapter);

        this.loader = loader;
        this.resourceName = resourceName;
        this.field = field;
        this.draftId = draftId;
    }

    _createClass(NovaCKEditor5UploadAdapter, [{
        key: 'upload',
        value: function upload() {
            var _this = this;

            return this.loader.file.then(function (file) {
                var data = new FormData();
                data.append('Content-Type', file.type);
                data.append('attachment', file);
                data.append('draftId', _this.draftId);

                return Nova.request().post('/nova-vendor/ckeditor5-classic/' + _this.resourceName + '/upload/' + _this.field.attribute, data, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                }).then(function (response) {
                    if (response.data.uploaded) {
                        return {
                            default: response.data.url
                        };
                    }
                }).catch(function (error) {
                    console.log(error);
                    return Promise.reject(error);
                });
            });
        }
    }, {
        key: 'abort',
        value: function abort() {}
    }]);

    return NovaCKEditor5UploadAdapter;
}();

/* harmony default export */ __webpack_exports__["a"] = (NovaCKEditor5UploadAdapter);

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "default-field",
    {
      attrs: {
        field: _vm.field,
        errors: _vm.errors,
        "full-width-content": true
      }
    },
    [
      _c("template", { slot: "field" }, [
        _c(
          "div",
          { staticClass: "rounded-lg" },
          [
            _c("ckeditor", {
              class: _vm.errorClasses,
              attrs: {
                editor: _vm.editor,
                config: _vm.editorConfig,
                id: _vm.field.name,
                placeholder: _vm.field.name
              },
              on: { ready: _vm.setEditorInitialValue },
              model: {
                value: _vm.value,
                callback: function($$v) {
                  _vm.value = $$v
                },
                expression: "value"
              }
            })
          ],
          1
        )
      ])
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-c023248a", module.exports)
  }
}

/***/ }),
/* 16 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);