module.exports =
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!***********************************!*\
  !*** external "immutable-assign" ***!
  \***********************************/
/*! no static exports found */
/*! exports used: deepFreeze, default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = require("immutable-assign");

/***/ }),
/* 1 */
/*!**************************!*\
  !*** external "aws-sdk" ***!
  \**************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = require("aws-sdk");

/***/ }),
/* 2 */
/*!*****************************!*\
  !*** external "clone-deep" ***!
  \*****************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = require("clone-deep");

/***/ }),
/* 3 */
/*!***************************************!*\
  !*** external "lodash/fp/isFunction" ***!
  \***************************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = require("lodash/fp/isFunction");

/***/ }),
/* 4 */
/*!********************************!*\
  !*** external "lodash/filter" ***!
  \********************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = require("lodash/filter");

/***/ }),
/* 5 */
/*!************************!*\
  !*** multi ./index.js ***!
  \************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/pongli/my/git/engineforce/libs/packages/aws-lambda-helpers/index.js */6);


/***/ }),
/* 6 */
/*!******************************!*\
  !*** ./index.js + 3 modules ***!
  \******************************/
/*! exports provided: findFunctions, mapAppSyncEvent, handleLambdaFunction */
/*! all exports used */
/*! ModuleConcatenation bailout: Cannot concat with external "aws-sdk" (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with external "clone-deep" (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with external "immutable-assign" (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with external "lodash/filter" (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with external "lodash/fp/isFunction" (<- Module is not an ECMAScript module) */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "aws-sdk"
var external_aws_sdk_ = __webpack_require__(1);
var external_aws_sdk_default = /*#__PURE__*/__webpack_require__.n(external_aws_sdk_);

// EXTERNAL MODULE: external "immutable-assign"
var external_immutable_assign_ = __webpack_require__(0);
var external_immutable_assign_default = /*#__PURE__*/__webpack_require__.n(external_immutable_assign_);

// EXTERNAL MODULE: external "clone-deep"
var external_clone_deep_ = __webpack_require__(2);
var external_clone_deep_default = /*#__PURE__*/__webpack_require__.n(external_clone_deep_);

// CONCATENATED MODULE: ./src/mapAppSyncEvent.js


function mapAppSyncEvent(event) {
  if (typeof event != 'object') {
    event = {
      header: {},
      data: {}
    };
  } else {
    event = external_immutable_assign_default()(event, e => {
      if (event.header == undefined) {
        e.header = {};
      }

      if (event.data == undefined) {
        e.data = {};
      }

      return e;
    });
  }

  return external_immutable_assign_default()(event, e => e.header, header => {
    header = external_clone_deep_default()(header);

    if (header.context) {
      if (header.context.identity) {
        header.userId = header.context.identity.username;
        header.userGroups = header.context.identity.groups;

        if (header.context.identity.claims) {
          header.userRoles = header.context.identity.claims['cognito:roles'];
          header.userEmail = header.context.identity.claims.email;
        }
      } // GraphQL parent node data


      header.source = header.context.source;
    } // Only expose properties you use like above.


    delete header.context;
    return header;
  });
}
// EXTERNAL MODULE: external "lodash/fp/isFunction"
var isFunction_ = __webpack_require__(3);
var isFunction_default = /*#__PURE__*/__webpack_require__.n(isFunction_);

// CONCATENATED MODULE: ./src/handleLambdaFunction.js


function handleLambdaFunction(handler, eventMapper) {
  return function handle(event, context, callback) {
    console.log('Inputs:', JSON.stringify(event, undefined, 2), JSON.stringify(context, undefined, 2));

    const unhandledRejection = async ex => {
      console.warn('unhandledRejection: ' + ex, ex);
      await fail(ex, callback, unhandledRejection, uncaughtException);
    };

    process.on('unhandledRejection', unhandledRejection);

    const uncaughtException = async ex => {
      console.warn('uncaughtException: ' + ex, ex);
      await fail(ex, callback, unhandledRejection, uncaughtException);
    };

    process.on('uncaughtException', uncaughtException);
    let promise = Promise.resolve();
    promise = promise.then(() => {
      event = Object(external_immutable_assign_["deepFreeze"])(event);

      if (eventMapper && isFunction_default()(eventMapper)) {
        event = eventMapper(event);
      }

      console.log('Mapped Inputs', JSON.stringify(event, undefined, 2));
      return handler(event);
    });
    promise.then(async data => {
      await pass(data, callback, unhandledRejection, uncaughtException);
    }, async ex => {
      await fail(ex, callback, unhandledRejection, uncaughtException);
    });
  };
}

async function pass(data, callback, unhandledRejection, uncaughtException) {
  cleanup(unhandledRejection, uncaughtException);
  console.log('Pass:', data);
  callback(undefined, data);
}

async function fail(ex, callback, unhandledRejection, uncaughtException) {
  cleanup(unhandledRejection, uncaughtException);
  console.error('Error:', ex);
  callback(ex, 'Error');
}

function cleanup(unhandledRejection, uncaughtException) {
  if (unhandledRejection) {
    process.removeListener('unhandledRejection', unhandledRejection);
  }

  if (uncaughtException) {
    process.removeListener('uncaughtException', uncaughtException);
  }
}
// EXTERNAL MODULE: external "lodash/filter"
var filter_ = __webpack_require__(4);
var filter_default = /*#__PURE__*/__webpack_require__.n(filter_);

// CONCATENATED MODULE: ./src/findFunctions.js

function loadFindFunctions(options) {
  return function findFunctions(functionName) {
    return _findFunctions(options, functionName);
  };
}

async function _findFunctions(options, functionName, nextMarker) {
  let result = await options.lambda.listFunctions({
    Marker: nextMarker
  }).promise();
  let functions = result.Functions;

  if (functionName) {
    functions = filter_default()(functions, func => func.FunctionName == functionName);
  }

  if (result.NextMarker) {
    functions = [...functions, ...(await _findFunctions(options, functionName, result.NextMarker))];
  }

  return functions;
}
// CONCATENATED MODULE: ./index.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findFunctions", function() { return findFunctions; });
/* concated harmony reexport mapAppSyncEvent */__webpack_require__.d(__webpack_exports__, "mapAppSyncEvent", function() { return mapAppSyncEvent; });
/* concated harmony reexport handleLambdaFunction */__webpack_require__.d(__webpack_exports__, "handleLambdaFunction", function() { return handleLambdaFunction; });




const lambda = new external_aws_sdk_default.a.Lambda();
const findFunctions = loadFindFunctions({
  lambda
});

/***/ })
/******/ ]);