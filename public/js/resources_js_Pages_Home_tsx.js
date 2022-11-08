"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_Home_tsx"],{

/***/ "./resources/js/Pages/Home.tsx":
/*!*************************************!*\
  !*** ./resources/js/Pages/Home.tsx ***!
  \*************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  var desc = Object.getOwnPropertyDescriptor(m, k);
  if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
    desc = {
      enumerable: true,
      get: function get() {
        return m[k];
      }
    };
  }
  Object.defineProperty(o, k2, desc);
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});
var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
});
var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
  }
  __setModuleDefault(result, mod);
  return result;
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var react_1 = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var Home = function Home(props) {
  var foo = "React";
  var bar = "TypeScript";
  var _ref = (0, react_1.useState)(0),
    _ref2 = _slicedToArray(_ref, 2),
    counter = _ref2[0],
    setCounter = _ref2[1];
  if (counter < 0) {
    setCounter(0);
  }
  var increment = function increment() {
    setCounter(counter + 1);
  };
  var decrement = function decrement() {
    setCounter(counter - 1);
  };
  (0, react_1.useEffect)(function () {
    console.log('this is props:', {
      props: props
    });
  }, [counter]);
  return react_1["default"].createElement(react_1["default"].Fragment, null, react_1["default"].createElement("h1", {
    style: {
      textAlign: 'center'
    }
  }, foo, " + ", bar, " + it's beautiful", react_1["default"].createElement("br", null), "this is props of the controller in laravel: ", props.title), react_1["default"].createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '300%',
      position: 'absolute',
      width: '100%',
      height: '100%',
      top: '-15%'
    }
  }, "Counter App", react_1["default"].createElement("div", {
    style: {
      fontSize: '120%',
      position: 'relative',
      top: '10vh'
    }
  }, counter), react_1["default"].createElement("div", {
    className: "buttons"
  }, react_1["default"].createElement("button", {
    style: {
      fontSize: '60%',
      position: 'relative',
      top: '20vh',
      marginRight: '5px',
      backgroundColor: 'green',
      borderRadius: '8%',
      color: 'white'
    },
    onClick: increment
  }, "Increment"), react_1["default"].createElement("button", {
    style: {
      fontSize: '60%',
      position: 'relative',
      top: '20vh',
      marginLeft: '5px',
      backgroundColor: 'red',
      borderRadius: '8%',
      color: 'white'
    },
    onClick: decrement
  }, "Decrement"))));
};
exports["default"] = Home;

/***/ })

}]);