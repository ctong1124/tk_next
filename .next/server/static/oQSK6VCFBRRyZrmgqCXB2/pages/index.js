module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ "/Ikq":
/***/ (function(module, exports) {

module.exports = require("remark-html");

/***/ }),

/***/ "/jkW":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
}); // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

exports.isDynamicRoute = isDynamicRoute;

/***/ }),

/***/ "0Bsm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router = __webpack_require__("nOHt");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return _react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (false) { var name; }

  return WithRouterWrapper;
}

/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cMU6");


/***/ }),

/***/ "1VTK":
/***/ (function(module, exports) {

module.exports = require("remark");

/***/ }),

/***/ "284h":
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__("cDf5");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "73Hj":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"buttonContainer": "Button_buttonContainer__3sZyM",
	"buttonArea": "Button_buttonArea__1jcW3",
	"text": "Button_text__3qTV9",
	"screen-xxxs": "Button_screen-xxxs__IdSSJ",
	"screen-xxs": "Button_screen-xxs__3DVmH",
	"screen-xs": "Button_screen-xs__Hcc7f",
	"screen-s": "Button_screen-s__TdNOE",
	"screen-m": "Button_screen-m__3VRaQ",
	"screen-l": "Button_screen-l__1EQrE",
	"screen-xl": "Button_screen-xl__3SarM",
	"screen-xxl": "Button_screen-xxl__3UNI_",
	"screen-xxxl": "Button_screen-xxxl__8Nnui",
	"screen-xxxxl": "Button_screen-xxxxl__3VXgC"
};

/***/ }),

/***/ "7vHd":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"placeholder": "homePage_placeholder__1J2VI",
	"featuredRecipes": "homePage_featuredRecipes__EpRQY",
	"featuredRecipesFlex": "homePage_featuredRecipesFlex__1dreP",
	"cardSection": "homePage_cardSection__3DfTv",
	"adSection": "homePage_adSection__1lMeh"
};

/***/ }),

/***/ "K2gz":
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),

/***/ "Osoz":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "TqRt":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "Tu/p":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"heroContainer": "Hero_heroContainer__3SaZB",
	"mediaContainer": "Hero_mediaContainer__2qMig",
	"textContainer": "Hero_textContainer__3JZZU",
	"bar": "Hero_bar__3GfU5",
	"preText": "Hero_preText__hTrs_",
	"hero-headline": "Hero_hero-headline__C_zft"
};

/***/ }),

/***/ "VuTL":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"cardContainer": "Card_cardContainer__3Etoi",
	"mediaContainer": "Card_mediaContainer__1GZGo",
	"imageContainer": "Card_imageContainer__3erCM",
	"textContainer": "Card_textContainer__3BB6T",
	"cardTextTop": "Card_cardTextTop__dXw13",
	"cardTextBottom": "Card_cardTextBottom__3q_Mg",
	"cardTextBottomSection": "Card_cardTextBottomSection__3SrOW",
	"highlight": "Card_highlight__io8St"
};

/***/ }),

/***/ "YFqc":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cTJO")


/***/ }),

/***/ "YTqd":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  const escapedRoute = (normalizedRoute.replace(/\/$/, '') || '/').replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
    const isCatchAll = /^(\\\.){3}/.test($1);
    groups[$1 // Un-escape key
    .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '') // eslint-disable-next-line no-sequences
    ] = {
      pos: groupIndex++,
      repeat: isCatchAll
    };
    return isCatchAll ? '/(.+?)' : '/([^/]+?)';
  });
  return {
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups
  };
}

exports.getRouteRegex = getRouteRegex;

/***/ }),

/***/ "ZGd0":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"cardGridContainer": "CardGrid_cardGridContainer__3aHV1",
	"cardsContainer": "CardGrid_cardsContainer__CM9Jj",
	"cardChildContainer": "CardGrid_cardChildContainer__2kQoe"
};

/***/ }),

/***/ "bzos":
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cDf5":
/***/ (function(module, exports) {

function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "cMU6":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "getStaticProps", function() { return /* binding */ getStaticProps; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");

// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__("K2gz");
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);

// EXTERNAL MODULE: ./components/index.js + 16 modules
var components = __webpack_require__("e+cM");

// EXTERNAL MODULE: external "fs"
var external_fs_ = __webpack_require__("mw/K");
var external_fs_default = /*#__PURE__*/__webpack_require__.n(external_fs_);

// EXTERNAL MODULE: external "path"
var external_path_ = __webpack_require__("oyvS");
var external_path_default = /*#__PURE__*/__webpack_require__.n(external_path_);

// EXTERNAL MODULE: external "gray-matter"
var external_gray_matter_ = __webpack_require__("uo/4");
var external_gray_matter_default = /*#__PURE__*/__webpack_require__.n(external_gray_matter_);

// EXTERNAL MODULE: external "remark"
var external_remark_ = __webpack_require__("1VTK");
var external_remark_default = /*#__PURE__*/__webpack_require__.n(external_remark_);

// EXTERNAL MODULE: external "remark-html"
var external_remark_html_ = __webpack_require__("/Ikq");
var external_remark_html_default = /*#__PURE__*/__webpack_require__.n(external_remark_html_);

// CONCATENATED MODULE: ./lib/posts.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const postsDirectory = external_path_default.a.join(process.cwd(), 'data');
function getSortedPostsData() {
  // Get file names under /posts
  const fileNames = external_fs_default.a.readdirSync(postsDirectory);
  const allPostsData = fileNames.map(fileName => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, ''); // Read markdown file as string

    const fullPath = external_path_default.a.join(postsDirectory, fileName);
    const fileContents = external_fs_default.a.readFileSync(fullPath, 'utf8'); // Use gray-matter to parse the post metadata section

    const matterResult = external_gray_matter_default()(fileContents); // Combine the data with the id

    return _objectSpread({
      id
    }, matterResult.data);
  }); // Sort posts by date

  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}
function getAllPostIds() {
  const fileNames = external_fs_default.a.readdirSync(postsDirectory); // Returns an array that looks like this:
  // [
  //   {
  //     params: {
  //       id: 'ssg-ssr'
  //     }
  //   },
  //   {
  //     params: {
  //       id: 'pre-rendering'
  //     }
  //   }
  // ]

  return fileNames.map(fileName => {
    return {
      params: {
        id: fileName.replace(/\.md$/, '')
      }
    };
  });
}
async function getPostData(id) {
  const fullPath = external_path_default.a.join(postsDirectory, `${id}.md`);
  const fileContents = external_fs_default.a.readFileSync(fullPath, 'utf8'); // Use gray-matter to parse the post metadata section

  const matterResult = external_gray_matter_default()(fileContents); // Use remark to convert markdown into HTML string

  const processedContent = await external_remark_default()().use(external_remark_html_default.a).process(matterResult.content);
  const contentHtml = processedContent.toString(); // Combine the data with the id and contentHtml

  return _objectSpread({
    id,
    contentHtml
  }, matterResult.data);
}
// EXTERNAL MODULE: ./styles/pages/homePage.module.scss
var homePage_module = __webpack_require__("7vHd");
var homePage_module_default = /*#__PURE__*/__webpack_require__.n(homePage_module);

// EXTERNAL MODULE: ./styles/utils.module.scss
var utils_module = __webpack_require__("vnQH");
var utils_module_default = /*#__PURE__*/__webpack_require__.n(utils_module);

// CONCATENATED MODULE: ./pages/index.jsx

var __jsx = external_react_default.a.createElement;








const HomePage = ({
  allPostsData
}) => {
  console.log('getStaticProps', allPostsData);
  return __jsx(components["f" /* Layout */], {
    home: true
  }, __jsx("div", {
    className: utils_module_default.a.sectionSpacing
  }, __jsx(components["e" /* Hero */], {
    heroHeadline: "Hero headline",
    heroPostText: "View recipe"
  })), __jsx("div", {
    className: utils_module_default.a.containedSection
  }, __jsx("div", {
    className: external_classnames_default()(utils_module_default.a.sectionSpacing, homePage_module_default.a.featuredRecipes)
  }, __jsx("h2", null, "Featured recipes"), __jsx("div", {
    className: external_classnames_default()(utils_module_default.a.flexboxGridContainer, homePage_module_default.a.featuredRecipesFlex)
  }, __jsx("div", {
    className: external_classnames_default()(utils_module_default.a.flexboxGridChild, homePage_module_default.a.cardSection)
  }, __jsx(components["d" /* DescriptionCard */], {
    cardTitle: `Card title`,
    cardBottomInfo: [{
      title: 'Time',
      subtitle: '20 mins'
    }, {
      title: 'Time',
      subtitle: '20 mins'
    }],
    cardImage: "https://picsum.photos/id/1045/1000/500",
    cardLink: "/recipe/recipe1"
  }), __jsx(components["d" /* DescriptionCard */], {
    cardTitle: `Card title`,
    cardBottomInfo: [{
      title: 'Time',
      subtitle: '20 mins'
    }, {
      title: 'Time',
      subtitle: '20 mins'
    }],
    cardImage: "https://picsum.photos/id/1045/1000/500",
    cardLink: "/recipe/recipe1"
  }), __jsx(components["d" /* DescriptionCard */], {
    cardTitle: `Card title`,
    cardBottomInfo: [{
      title: 'Time',
      subtitle: '20 mins'
    }, {
      title: 'Time',
      subtitle: '20 mins'
    }],
    cardImage: "https://picsum.photos/id/1045/1000/500",
    cardLink: "/recipe/recipe1"
  })), __jsx("div", {
    className: external_classnames_default()(homePage_module_default.a.adSection, utils_module_default.a.flexboxGridChild)
  }, __jsx("div", {
    className: homePage_module_default.a.placeholder
  })))), __jsx("div", {
    className: external_classnames_default()(utils_module_default.a.sectionSpacing)
  }, __jsx(components["c" /* CardGrid */], {
    cardGridTitle: "Latest recipes"
  }, __jsx(components["b" /* Card */], {
    cardTitle: "Card title",
    cardBottomInfo: [{
      title: 'Time',
      subtitle: '20 mins'
    }, {
      title: 'Time',
      subtitle: '20 mins'
    }],
    cardImage: "https://picsum.photos/id/1045/1000/500",
    cardLink: "/recipe/recipe1"
  }), __jsx(components["b" /* Card */], {
    cardTitle: "Card title",
    cardBottomInfo: [{
      title: 'Time',
      subtitle: '20 mins'
    }, {
      title: 'Time',
      subtitle: '20 mins'
    }],
    cardImage: "https://picsum.photos/id/1045/1000/500",
    cardLink: "/recipe/recipe1"
  }), __jsx(components["b" /* Card */], {
    cardTitle: "Card title",
    cardBottomInfo: [{
      title: 'Time',
      subtitle: '20 mins'
    }, {
      title: 'Time',
      subtitle: '20 mins'
    }],
    cardImage: "https://picsum.photos/id/1045/1000/500",
    cardLink: "/recipe/recipe1"
  }), __jsx(components["b" /* Card */], {
    cardTitle: "Card title",
    cardBottomInfo: [{
      title: 'Time',
      subtitle: '20 mins'
    }, {
      title: 'Time',
      subtitle: '20 mins'
    }],
    cardImage: "https://picsum.photos/id/1045/1000/500",
    cardLink: "/recipe/recipe1"
  }), __jsx(components["b" /* Card */], {
    cardTitle: "Card title",
    cardBottomInfo: [{
      title: 'Time',
      subtitle: '20 mins'
    }, {
      title: 'Time',
      subtitle: '20 mins'
    }],
    cardImage: "https://picsum.photos/id/1045/1000/500",
    cardLink: "/recipe/recipe1"
  }), __jsx(components["b" /* Card */], {
    cardTitle: "Card title",
    cardBottomInfo: [{
      title: 'Time',
      subtitle: '20 mins'
    }, {
      title: 'Time',
      subtitle: '20 mins'
    }],
    cardImage: "https://picsum.photos/id/1045/1000/500",
    cardLink: "/recipe/recipe1"
  })), __jsx(components["a" /* Button */], {
    text: "See all",
    link: "/recipes"
  }))));
};

async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData
    }
  };
}
/* harmony default export */ var pages = __webpack_exports__["default"] = (HomePage);

/***/ }),

/***/ "cTJO":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

var _interopRequireWildcard = __webpack_require__("284h");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__("cDcd"));

var _url = __webpack_require__("bzos");

var _utils = __webpack_require__("kYf9");

var _router = _interopRequireDefault(__webpack_require__("nOHt"));

var _router2 = __webpack_require__("elyg");

function isLocal(href) {
  var url = (0, _url.parse)(href, false, true);
  var origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

var observer;
var listeners = new Map();
var IntersectionObserver = false ? undefined : null;
var prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      var cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

var listenToIntersections = (el, cb) => {
  var observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: (0, _router2.addBasePath)(formatUrl(href)),
        as: asHref ? (0, _router2.addBasePath)(formatUrl(asHref)) : asHref
      };
    });

    this.linkClicked = e => {
      var {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      var {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (false) {}

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  getPaths() {
    var {
      pathname
    } = window.location;
    var {
      href: parsedHref,
      as: parsedAs
    } = this.formatUrls(this.props.href, this.props.as);
    var resolvedHref = (0, _url.resolve)(pathname, parsedHref);
    return [resolvedHref, parsedAs ? (0, _url.resolve)(pathname, parsedAs) : resolvedHref];
  }

  handleRef(ref) {
    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();
      var isPrefetched = prefetched[this.getPaths().join( // Join on an invalid URI character
      '%')];

      if (!isPrefetched) {
        this.cleanUpListeners = listenToIntersections(ref, () => {
          this.prefetch();
        });
      }
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch(options) {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    var paths = this.getPaths(); // We need to handle a prefetch error here since we may be
    // loading with priority which can reject but we don't
    // want to force navigation since this is only a prefetch

    _router.default.prefetch(paths[
    /* href */
    0], paths[
    /* asPath */
    1], options).catch(err => {
      if (false) {}
    });

    prefetched[paths.join( // Join on an invalid URI character
    '%')] = true;
  }

  render() {
    var {
      children
    } = this.props;
    var {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = _react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    var child = _react.Children.only(children);

    var props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch({
          priority: true
        });
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      }
    }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
    // defined, we specify the current 'href', so that repetition is not needed by the user

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) { var rewriteUrlForNextExport; }

    return _react.default.cloneElement(child, props);
  }

}

if (false) { var exact, PropTypes, warn; }

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "dZ6Y":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
MIT License

Copyright (c) Jason Miller (https://jasonformat.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

Object.defineProperty(exports, "__esModule", {
  value: true
});

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

exports.default = mitt;

/***/ }),

/***/ "e+cM":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "e", function() { return /* reexport */ components_Hero; });
__webpack_require__.d(__webpack_exports__, "b", function() { return /* reexport */ components_Card; });
__webpack_require__.d(__webpack_exports__, "c", function() { return /* reexport */ components_CardGrid; });
__webpack_require__.d(__webpack_exports__, "f", function() { return /* reexport */ components_Layout; });
__webpack_require__.d(__webpack_exports__, "d", function() { return /* reexport */ components_DescriptionCard; });
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ components_Button; });

// UNUSED EXPORTS: Header, Footer

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__("K2gz");
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);

// EXTERNAL MODULE: ./styles/utils.module.scss
var utils_module = __webpack_require__("vnQH");
var utils_module_default = /*#__PURE__*/__webpack_require__.n(utils_module);

// EXTERNAL MODULE: ./components/Header/Header.module.scss
var Header_module = __webpack_require__("yzvi");
var Header_module_default = /*#__PURE__*/__webpack_require__.n(Header_module);

// CONCATENATED MODULE: ./components/Header/Header.jsx
var __jsx = external_react_default.a.createElement;






const Header = () => {
  const activeStyle = {
    color: 'blue'
  };
  return __jsx("header", {
    className: Header_module_default.a.headerContainer
  }, __jsx(link_default.a, {
    href: "/"
  }, __jsx("a", null, __jsx("div", {
    className: Header_module_default.a.logo
  }, __jsx("img", {
    src: "/images/tk_logo.png",
    alt: "Logo"
  }), __jsx("div", {
    className: external_classnames_default()(Header_module_default.a.logoText, utils_module_default.a.bold)
  }, "Tong's", "\n", "Kitchen", __jsx("div", {
    className: Header_module_default.a.highlight
  }))))), __jsx("nav", null, __jsx("div", {
    className: Header_module_default.a.linkContainer
  }, __jsx(link_default.a, {
    href: "/recipes"
  }, __jsx("a", {
    className: Header_module_default.a.headerLink
  }, "Recipes")), __jsx("div", {
    className: Header_module_default.a.highlight
  })), __jsx("div", {
    className: Header_module_default.a.linkContainer
  }, __jsx(link_default.a, {
    href: "/about"
  }, __jsx("a", {
    className: Header_module_default.a.headerLink
  }, "About")), __jsx("div", {
    className: Header_module_default.a.highlight
  }))));
};

/* harmony default export */ var Header_Header = (Header);
// CONCATENATED MODULE: ./components/Header/index.js

/* harmony default export */ var components_Header = (Header_Header);
// EXTERNAL MODULE: ./components/Hero/Hero.module.scss
var Hero_module = __webpack_require__("Tu/p");
var Hero_module_default = /*#__PURE__*/__webpack_require__.n(Hero_module);

// CONCATENATED MODULE: ./components/Hero/Hero.jsx
var Hero_jsx = external_react_default.a.createElement;





const Hero = ({
  heroPreText,
  heroHeadline,
  heroPostText,
  image
}) => {
  return Hero_jsx("div", {
    className: Hero_module_default.a.heroContainer
  }, Hero_jsx("div", {
    className: Hero_module_default.a.mediaContainer
  }, Hero_jsx("img", {
    src: "https://picsum.photos/id/1045/1000/500"
  })), Hero_jsx("div", {
    className: Hero_module_default.a.textContainer
  }, Hero_jsx("div", {
    className: Hero_module_default.a.bar
  }), Hero_jsx("p", {
    className: external_classnames_default()(Hero_module_default.a.preText, utils_module_default.a.textSmall)
  }, heroPreText), Hero_jsx("h1", {
    className: external_classnames_default()(Hero_module_default.a.heroHeadline, utils_module_default.a.headline)
  }, heroHeadline), Hero_jsx("p", {
    className: Hero_module_default.a.postText
  }, heroPostText)));
};

Hero.defaultProps = {
  heroPreText: '',
  heroHeadline: '',
  heroPostText: '',
  image: ''
};
/* harmony default export */ var Hero_Hero = (Hero);
// CONCATENATED MODULE: ./components/Hero/index.js

/* harmony default export */ var components_Hero = (Hero_Hero);
// EXTERNAL MODULE: ./components/Card/Card.module.scss
var Card_module = __webpack_require__("VuTL");
var Card_module_default = /*#__PURE__*/__webpack_require__.n(Card_module);

// CONCATENATED MODULE: ./components/Card/Card.jsx
var Card_jsx = external_react_default.a.createElement;






const Card = ({
  cardTitle,
  cardBottomInfo,
  cardImage,
  cardLink
}) => {
  const card = Card_jsx("div", {
    className: Card_module_default.a.cardContainer
  }, Card_jsx("div", {
    className: Card_module_default.a.mediaContainer
  }, Card_jsx("div", {
    className: Card_module_default.a.imageContainer
  }, Card_jsx("img", {
    src: cardImage
  }))), Card_jsx("div", {
    className: Card_module_default.a.textContainer
  }, Card_jsx("div", {
    className: Card_module_default.a.cardTextTop
  }, Card_jsx("h4", {
    className: Card_module_default.a.title
  }, cardTitle)), Card_jsx("div", {
    className: Card_module_default.a.cardTextBottom
  }, cardBottomInfo.map((section, i) => Card_jsx("div", {
    className: Card_module_default.a.cardTextBottomSection,
    key: `${section.title}-${i}`
  }, Card_jsx("p", {
    className: utils_module_default.a.primaryText
  }, section.title), Card_jsx("p", {
    className: utils_module_default.a.secondaryText
  }, section.subtitle))))), Card_jsx("div", {
    className: Card_module_default.a.highlight
  }));

  return cardLink ? Card_jsx(link_default.a, {
    href: cardLink
  }, Card_jsx("a", null, card)) : card;
};

Card.defaultProps = {
  cardTitle: '',
  cardBottomInfo: [],
  cardImage: '',
  cardLink: ''
};
/* harmony default export */ var Card_Card = (Card);
// CONCATENATED MODULE: ./components/Card/index.js

/* harmony default export */ var components_Card = (Card_Card);
// EXTERNAL MODULE: ./components/CardGrid/CardGrid.module.scss
var CardGrid_module = __webpack_require__("ZGd0");
var CardGrid_module_default = /*#__PURE__*/__webpack_require__.n(CardGrid_module);

// CONCATENATED MODULE: ./components/CardGrid/CardGrid.jsx
var CardGrid_jsx = external_react_default.a.createElement;





const CardGrid = ({
  cardGridTitle,
  children
}) => {
  return CardGrid_jsx("div", {
    className: CardGrid_module_default.a.cardGridContainer
  }, cardGridTitle && CardGrid_jsx("h2", null, cardGridTitle), CardGrid_jsx("div", {
    className: external_classnames_default()(CardGrid_module_default.a.cardsContainer, utils_module_default.a.flexboxGridContainer)
  }, external_react_default.a.Children.map(children, child => CardGrid_jsx("div", {
    className: external_classnames_default()(CardGrid_module_default.a.cardChildContainer, utils_module_default.a.flexboxGridChild)
  }, child))));
};

CardGrid.defaultProps = {
  cardGridTitle: '',
  children: null
};
/* harmony default export */ var CardGrid_CardGrid = (CardGrid);
// CONCATENATED MODULE: ./components/CardGrid/index.js

/* harmony default export */ var components_CardGrid = (CardGrid_CardGrid);
// CONCATENATED MODULE: ./components/Footer/Footer.jsx
var Footer_jsx = external_react_default.a.createElement;




const Footer = () => {
  return Footer_jsx("footer", {
    className: "footer-container"
  });
};

/* harmony default export */ var Footer_Footer = (Footer);
// CONCATENATED MODULE: ./components/Footer/index.js

/* harmony default export */ var components_Footer = (Footer_Footer);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// CONCATENATED MODULE: ./components/Layout/Layout.jsx

var Layout_jsx = external_react_default.a.createElement;





const NAME = 'CARISA';

const Layout = ({
  children
}) => {
  return Layout_jsx("div", null, Layout_jsx(head_default.a, null, Layout_jsx("link", {
    rel: "icon",
    href: "/favicon.ico"
  }), Layout_jsx("meta", {
    name: "description",
    content: "Learn how to build a personal website using Next.js"
  }), Layout_jsx("meta", {
    name: "og:title",
    content: "title"
  }), Layout_jsx("meta", {
    name: "twitter:card",
    content: "summary_large_image"
  }), Layout_jsx("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1, shrink-to-fit=no"
  })), Layout_jsx(components_Header, null), Layout_jsx("main", null, children));
};

/* harmony default export */ var Layout_Layout = (Layout);
// CONCATENATED MODULE: ./components/Layout/index.js

/* harmony default export */ var components_Layout = (Layout_Layout);
// EXTERNAL MODULE: ./components/DescriptionCard/DescriptionCard.module.scss
var DescriptionCard_module = __webpack_require__("lQNC");
var DescriptionCard_module_default = /*#__PURE__*/__webpack_require__.n(DescriptionCard_module);

// CONCATENATED MODULE: ./components/DescriptionCard/DescriptionCard.jsx
var DescriptionCard_jsx = external_react_default.a.createElement;






const DescriptionCard = ({
  cardTitle,
  cardBottomInfo,
  cardImage,
  cardLink
}) => {
  const card = DescriptionCard_jsx("div", {
    className: DescriptionCard_module_default.a.cardContainer
  }, DescriptionCard_jsx("div", {
    className: DescriptionCard_module_default.a.mediaContainer
  }, DescriptionCard_jsx("div", {
    className: DescriptionCard_module_default.a.imageContainer
  }, DescriptionCard_jsx("img", {
    src: cardImage
  }))), DescriptionCard_jsx("div", {
    className: DescriptionCard_module_default.a.textContainer
  }, DescriptionCard_jsx("div", {
    className: DescriptionCard_module_default.a.cardTextTop
  }, DescriptionCard_jsx("h4", {
    className: DescriptionCard_module_default.a.title
  }, cardTitle), DescriptionCard_jsx("p", {
    className: external_classnames_default()(DescriptionCard_module_default.a.description, utils_module_default.a.secondaryText)
  }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. ")), DescriptionCard_jsx("div", {
    className: DescriptionCard_module_default.a.cardTextBottom
  }, cardBottomInfo.map((section, i) => DescriptionCard_jsx("div", {
    className: DescriptionCard_module_default.a.cardTextBottomSection,
    key: `section-${i}`
  }, DescriptionCard_jsx("p", {
    className: utils_module_default.a.primaryText
  }, section.title), DescriptionCard_jsx("p", {
    className: utils_module_default.a.secondaryText
  }, section.subtitle))))), DescriptionCard_jsx("div", {
    className: DescriptionCard_module_default.a.highlight
  }));

  return cardLink ? DescriptionCard_jsx(link_default.a, {
    href: cardLink
  }, DescriptionCard_jsx("a", null, card)) : card;
};

DescriptionCard.defaultProps = {
  cardTitle: '',
  cardBottomInfo: [],
  cardImage: '',
  cardLink: ''
};
/* harmony default export */ var DescriptionCard_DescriptionCard = (DescriptionCard);
// CONCATENATED MODULE: ./components/DescriptionCard/index.js

/* harmony default export */ var components_DescriptionCard = (DescriptionCard_DescriptionCard);
// EXTERNAL MODULE: ./components/Button/Button.module.scss
var Button_module = __webpack_require__("73Hj");
var Button_module_default = /*#__PURE__*/__webpack_require__.n(Button_module);

// CONCATENATED MODULE: ./components/Button/Button.jsx
var Button_jsx = external_react_default.a.createElement;






const Button = ({
  text,
  link,
  fullWidthBreakpoint
}) => {
  return Button_jsx("div", {
    className: external_classnames_default()(Button_module_default.a.buttonContainer, Button_module_default.a[`screen-${fullWidthBreakpoint}`])
  }, Button_jsx(link_default.a, {
    href: link
  }, Button_jsx("a", null, Button_jsx("div", {
    className: Button_module_default.a.buttonArea
  }, Button_jsx("div", {
    className: Button_module_default.a.text
  }, text)))));
};

Button.defaultProps = {
  fullWidthBreakpoint: 'xxxs'
};
/* harmony default export */ var Button_Button = (Button);
// CONCATENATED MODULE: ./components/Button/index.js

/* harmony default export */ var components_Button = (Button_Button);
// CONCATENATED MODULE: ./components/index.js










/***/ }),

/***/ "elyg":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__("bzos");

const mitt_1 = __importDefault(__webpack_require__("dZ6Y"));

const utils_1 = __webpack_require__("g/15");

const is_dynamic_1 = __webpack_require__("/jkW");

const route_matcher_1 = __webpack_require__("gguc");

const route_regex_1 = __webpack_require__("YTqd");

const basePath =  false || '';

function addBasePath(path) {
  return path.indexOf(basePath) !== 0 ? basePath + path : path;
}

exports.addBasePath = addBasePath;

function delBasePath(path) {
  return path.indexOf(basePath) === 0 ? path.substr(basePath.length) || '/' : path;
}

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

const prepareRoute = path => toRoute(!path || path === '/' ? '/index' : path);

function fetchNextData(pathname, query, isServerRender, cb) {
  let attempts = isServerRender ? 3 : 1;

  function getResponse() {
    return fetch(utils_1.formatWithValidation({
      // @ts-ignore __NEXT_DATA__
      pathname: `/_next/data/${__NEXT_DATA__.buildId}${pathname}.json`,
      query
    }), {
      // Cookies are required to be present for Next.js' SSG "Preview Mode".
      // Cookies may also be required for `getServerSideProps`.
      //
      // > `fetch` won’t send cookies, unless you set the credentials init
      // > option.
      // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
      //
      // > For maximum browser compatibility when it comes to sending &
      // > receiving cookies, always supply the `credentials: 'same-origin'`
      // > option instead of relying on the default.
      // https://github.com/github/fetch#caveats
      credentials: 'same-origin'
    }).then(res => {
      if (!res.ok) {
        if (--attempts > 0 && res.status >= 500) {
          return getResponse();
        }

        throw new Error(`Failed to load static props`);
      }

      return res.json();
    });
  }

  return getResponse().then(data => {
    return cb ? cb(data) : data;
  }).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      ;
      err.code = 'PAGE_LOAD_ERROR';
    }

    throw err;
  });
}

class Router {
  constructor(pathname, query, as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback
  }) {
    // Static Data Cache
    this.sdc = {};

    this.onPopState = e => {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', utils_1.formatWithValidation({
          pathname,
          query
        }), utils_1.getURL());
        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state && this.isSsr && e.state.as === this.asPath && url_1.parse(e.state.url).pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(e.state)) {
        return;
      }

      const {
        url,
        as,
        options
      } = e.state;

      if (false) {}

      this.replace(url, as, options);
    };

    this._getStaticData = asPath => {
      const pathname = prepareRoute(url_1.parse(asPath).pathname);
      return  true && this.sdc[pathname] ? Promise.resolve(this.sdc[pathname]) : fetchNextData(pathname, null, this.isSsr, data => this.sdc[pathname] = data);
    };

    this._getServerData = asPath => {
      let {
        pathname,
        query
      } = url_1.parse(asPath, true);
      pathname = prepareRoute(pathname);
      return fetchNextData(pathname, query, this.isSsr);
    }; // represents the current component key


    this.route = toRoute(pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname;
    this.query = query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    is_dynamic_1.isDynamicRoute(pathname) && __NEXT_DATA__.autoExport ? pathname : as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (false) {}
  } // @deprecated backwards compatibility even though it's a private method.


  static _rewriteUrlForNextExport(url) {
    if (false) {} else {
      return url;
    }
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = Object.assign(Object.assign({}, data), {
      Component,
      __N_SSG: mod.__N_SSG,
      __N_SSP: mod.__N_SSP
    });
    this.components[route] = newData; // pages/_app.js updated

    if (route === '/_app') {
      this.notify(this.components[this.route]);
      return;
    }

    if (route === this.route) {
      this.notify(newData);
    }
  }

  reload() {
    window.location.reload();
  }
  /**
   * Go back in history
   */


  back() {
    window.history.back();
  }
  /**
   * Performs a `pushState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  push(url, as = url, options = {}) {
    return this.change('pushState', url, as, options);
  }
  /**
   * Performs a `replaceState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  replace(url, as = url, options = {}) {
    return this.change('replaceState', url, as, options);
  }

  change(method, _url, _as, options) {
    return new Promise((resolve, reject) => {
      if (!options._h) {
        this.isSsr = false;
      } // marking route changes as a navigation start entry


      if (utils_1.ST) {
        performance.mark('routeChange');
      } // If url and as provided as an object representation,
      // we'll format them into the string version here.


      let url = typeof _url === 'object' ? utils_1.formatWithValidation(_url) : _url;
      let as = typeof _as === 'object' ? utils_1.formatWithValidation(_as) : _as;
      url = addBasePath(url);
      as = addBasePath(as); // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly for the SSR page.

      if (false) {}

      this.abortComponentLoad(as); // If the url change is only related to a hash change
      // We should not proceed. We should only change the state.
      // WARNING: `_h` is an internal option for handing Next.js client-side
      // hydration. Your app should _never_ use this property. It may change at
      // any time without notice.

      if (!options._h && this.onlyAHashChange(as)) {
        this.asPath = as;
        Router.events.emit('hashChangeStart', as);
        this.changeState(method, url, as, options);
        this.scrollToHash(as);
        Router.events.emit('hashChangeComplete', as);
        return resolve(true);
      }

      const {
        pathname,
        query,
        protocol
      } = url_1.parse(url, true);

      if (!pathname || protocol) {
        if (false) {}

        return resolve(false);
      } // If asked to change the current URL we should reload the current page
      // (not location.reload() but reload getInitialProps and other Next.js stuffs)
      // We also need to set the method = replaceState always
      // as this should not go into the history (That's how browsers work)
      // We should compare the new asPath to the current asPath, not the url


      if (!this.urlIsNew(as)) {
        method = 'replaceState';
      }

      const route = toRoute(pathname);
      const {
        shallow = false
      } = options;

      if (is_dynamic_1.isDynamicRoute(route)) {
        const {
          pathname: asPathname
        } = url_1.parse(as);
        const routeRegex = route_regex_1.getRouteRegex(route);
        const routeMatch = route_matcher_1.getRouteMatcher(routeRegex)(asPathname);

        if (!routeMatch) {
          const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

          if (missingParams.length > 0) {
            if (false) {}

            return reject(new Error(`The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). ` + `Read more: https://err.sh/zeit/next.js/incompatible-href-as`));
          }
        } else {
          // Merge params into `query`, overwriting any specified in search
          Object.assign(query, routeMatch);
        }
      }

      Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result

      this.getRouteInfo(route, pathname, query, as, shallow).then(routeInfo => {
        const {
          error
        } = routeInfo;

        if (error && error.cancelled) {
          return resolve(false);
        }

        Router.events.emit('beforeHistoryChange', as);
        this.changeState(method, url, as, options);

        if (false) {}

        this.set(route, pathname, query, as, routeInfo);

        if (error) {
          Router.events.emit('routeChangeError', error, as);
          throw error;
        }

        Router.events.emit('routeChangeComplete', as);
        return resolve(true);
      }, reject);
    });
  }

  changeState(method, url, as, options = {}) {
    if (false) {}

    if (method !== 'pushState' || utils_1.getURL() !== as) {
      window.history[method]({
        url,
        as,
        options
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  getRouteInfo(route, pathname, query, as, shallow = false) {
    const cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
    // If the route is already rendered on the screen.

    if (shallow && cachedRouteInfo && this.route === route) {
      return Promise.resolve(cachedRouteInfo);
    }

    const handleError = (err, loadErrorFail) => {
      return new Promise(resolve => {
        if (err.code === 'PAGE_LOAD_ERROR' || loadErrorFail) {
          // If we can't load the page it could be one of following reasons
          //  1. Page doesn't exists
          //  2. Page does exist in a different zone
          //  3. Internal error while loading the page
          // So, doing a hard reload is the proper way to deal with this.
          window.location.href = as; // Changing the URL doesn't block executing the current code path.
          // So, we need to mark it as a cancelled error and stop the routing logic.

          err.cancelled = true; // @ts-ignore TODO: fix the control flow here

          return resolve({
            error: err
          });
        }

        if (err.cancelled) {
          // @ts-ignore TODO: fix the control flow here
          return resolve({
            error: err
          });
        }

        resolve(this.fetchComponent('/_error').then(res => {
          const {
            page: Component
          } = res;
          const routeInfo = {
            Component,
            err
          };
          return new Promise(resolve => {
            this.getInitialProps(Component, {
              err,
              pathname,
              query
            }).then(props => {
              routeInfo.props = props;
              routeInfo.error = err;
              resolve(routeInfo);
            }, gipErr => {
              console.error('Error in error page `getInitialProps`: ', gipErr);
              routeInfo.error = err;
              routeInfo.props = {};
              resolve(routeInfo);
            });
          });
        }).catch(err => handleError(err, true)));
      });
    };

    return new Promise((resolve, reject) => {
      if (cachedRouteInfo) {
        return resolve(cachedRouteInfo);
      }

      this.fetchComponent(route).then(res => resolve({
        Component: res.page,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }), reject);
    }).then(routeInfo => {
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (false) {}

      return this._getData(() => __N_SSG ? this._getStaticData(as) : __N_SSP ? this._getServerData(as) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      })).then(props => {
        routeInfo.props = props;
        this.components[route] = routeInfo;
        return routeInfo;
      });
    }).catch(handleError);
  }

  set(route, pathname, query, as, data) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    this.notify(data);
  }
  /**
   * Callback to execute before replacing router state
   * @param cb callback to be executed
   */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
   * Prefetch page code, you may wait for the data during page rendering.
   * This feature only works in production!
   * @param url the href of prefetched page
   * @param asPath the as path of the prefetched page
   */


  prefetch(url, asPath = url, options = {}) {
    return new Promise((resolve, reject) => {
      const {
        pathname,
        protocol
      } = url_1.parse(url);

      if (!pathname || protocol) {
        if (false) {}

        return;
      } // Prefetch is not supported in development mode because it would trigger on-demand-entries


      if (false) {}

      const route = delBasePath(toRoute(pathname));
      Promise.all([this.pageLoader.prefetchData(url, delBasePath(asPath)), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]).then(() => resolve(), reject);
    });
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    route = delBasePath(route);
    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return utils_1.loadGetInitialProps(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      const e = new Error('Route Cancelled');
      e.cancelled = true;
      Router.events.emit('routeChangeError', e, as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = mitt_1.default();

/***/ }),

/***/ "g/15":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__("bzos");
/**
 * Utils
 */


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

exports.getURL = getURL;

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

exports.getDisplayName = getDisplayName;

function isResSent(res) {
  return res.finished || res.headersSent;
}

exports.isResSent = isResSent;

async function loadGetInitialProps(App, ctx) {
  var _a;

  if (false) {} // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (false) {}

  return props;
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (false) {}

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SP = typeof performance !== 'undefined';
exports.ST = exports.SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "gguc":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

exports.getRouteMatcher = getRouteMatcher;

/***/ }),

/***/ "kYf9":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/utils.js");

/***/ }),

/***/ "lQNC":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"cardContainer": "DescriptionCard_cardContainer__2qHLP",
	"mediaContainer": "DescriptionCard_mediaContainer__SMczL",
	"imageContainer": "DescriptionCard_imageContainer__2VkG1",
	"textContainer": "DescriptionCard_textContainer__3LxQ-",
	"cardTextTop": "DescriptionCard_cardTextTop__9K3zx",
	"title": "DescriptionCard_title__3L3UH",
	"description": "DescriptionCard_description__CPM2h",
	"cardTextBottom": "DescriptionCard_cardTextBottom__Tvwko",
	"cardTextBottomSection": "DescriptionCard_cardTextBottomSection__20GYJ",
	"highlight": "DescriptionCard_highlight__2gQhf"
};

/***/ }),

/***/ "mw/K":
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),

/***/ "nOHt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("284h");

var _interopRequireDefault = __webpack_require__("TqRt");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router2 = _interopRequireWildcard(__webpack_require__("elyg"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__("Osoz");

var _withRouter = _interopRequireDefault(__webpack_require__("0Bsm"));

exports.withRouter = _withRouter.default;
/* global window */

var singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      var router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    var router = getRouter();
    return router[field](...arguments);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, function () {
      var eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      var _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


var createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  var _router = router;
  var instance = {};

  for (var property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = function () {
      return _router[field](...arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "oyvS":
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),

/***/ "uo/4":
/***/ (function(module, exports) {

module.exports = require("gray-matter");

/***/ }),

/***/ "vnQH":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"containedSection": "utils_containedSection__mJhfv",
	"sectionSpacing": "utils_sectionSpacing__1CABB",
	"bold": "utils_bold__uV-eo",
	"headline": "utils_headline__3WVGk",
	"headline2": "utils_headline2__3aKDe",
	"textSmall": "utils_textSmall__2mS_x",
	"primaryText": "utils_primaryText__MWOab",
	"secondaryText": "utils_secondaryText__1D6oY",
	"flexboxGridContainer": "utils_flexboxGridContainer__ChA8t",
	"flexboxGridChild": "utils_flexboxGridChild__3EsSr"
};

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "yzvi":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"headerContainer": "Header_headerContainer__MEyVv",
	"logo": "Header_logo__1QUnI",
	"logoText": "Header_logoText__2gUeh",
	"highlight": "Header_highlight__h2VNg",
	"linkContainer": "Header_linkContainer__22qxQ",
	"headerLink": "Header_headerLink__VSS8i"
};

/***/ })

/******/ });