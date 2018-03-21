webpackJsonp([3],{

/***/ "+qb3":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function isCancel(value) {
  return !!(value && value.__CANCEL__);
};


/***/ }),

/***/ "1aAG":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__("oDjy");

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
      }

      if (!utils.isArray(val)) {
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

/***/ "5SZA":
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
  return baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '');
};


/***/ }),

/***/ "7YAZ":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  props: {
    backgroundImage: {
      type: String,
      default: ''
    }
  },
  computed: {
    style: function style() {
      return {
        backgroundImage: 'url(' + this.backgroundImage + ')'
      };
    }
  }
};

/***/ }),

/***/ "AclL":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var createError = __webpack_require__("AiSB");

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
      response
    ));
  }
};


/***/ }),

/***/ "AiSB":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var enhanceError = __webpack_require__("fg8a");

/**
 * Create an Error with the specified message, config, error code, and response.
 *
 * @param {string} message The error message.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 @ @param {Object} [response] The response.
 * @returns {Error} The created error.
 */
module.exports = function createError(message, config, code, response) {
  var error = new Error(message);
  return enhanceError(error, config, code, response);
};


/***/ }),

/***/ "EP1l":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__("oDjy");

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

/***/ "IMU1":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__("oDjy");
var bind = __webpack_require__("XiAw");
var Axios = __webpack_require__("w5p7");
var defaults = __webpack_require__("SiL4");

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
axios.Cancel = __webpack_require__("aJcp");
axios.CancelToken = __webpack_require__("yJAG");
axios.isCancel = __webpack_require__("+qb3");

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};
axios.spread = __webpack_require__("JJsM");

module.exports = axios;

// Allow use of default import syntax in TypeScript
module.exports.default = axios;


/***/ }),

/***/ "JJsM":
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

/***/ "Kb6n":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("sXd1");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("FIqI")("a883bfde", content, true, {});

/***/ }),

/***/ "LTAE":
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function() {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		var result = [];
		for(var i = 0; i < this.length; i++) {
			var item = this[i];
			if(item[2]) {
				result.push("@media " + item[2] + "{" + item[1] + "}");
			} else {
				result.push(item[1]);
			}
		}
		return result.join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};


/***/ }),

/***/ "Lmbg":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("LTAE")();
// imports


// module
exports.push([module.i, "/**\n* actionsheet\n*/\n/**\n* datetime\n*/\n/**\n* tabbar\n*/\n/**\n* tab\n*/\n/**\n* dialog\n*/\n/**\n* x-number\n*/\n/**\n* checkbox\n*/\n/**\n* check-icon\n*/\n/**\n* Cell\n*/\n/**\n* Mask\n*/\n/**\n* Range\n*/\n/**\n* Tabbar\n*/\n/**\n* Header\n*/\n/**\n* Timeline\n*/\n/**\n* Switch\n*/\n/**\n* Button\n*/\n/**\n* swipeout\n*/\n/**\n* Cell\n*/\n/**\n* Badge\n*/\n/**\n* Popover\n*/\n/**\n* Button tab\n*/\n/* alias */\n/**\n* Swiper\n*/\n/**\n* checklist\n*/\n/**\n* popup-picker\n*/\n/**\n* popup\n*/\n/**\n* popup-header\n*/\n/**\n* form-preview\n*/\n/**\n* sticky\n*/\n/**\n* group\n*/\n/**\n* toast\n*/\n/**\n* icon\n*/\n/**\n* calendar\n*/\n/**\n* week-calendar\n*/\n/**\n* search\n*/\n/**\n* radio\n*/\n/**\n* loadmore\n*/\n.weui-uploader__hd[data-v-e15cacd4] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  padding-bottom: 10px;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n.weui-uploader__title[data-v-e15cacd4] {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n}\n.weui-uploader__info[data-v-e15cacd4] {\n  color: #B2B2B2;\n}\n.weui-uploader__bd[data-v-e15cacd4] {\n  margin-bottom: -4px;\n  margin-right: -9px;\n  overflow: hidden;\n}\n.weui-uploader__files[data-v-e15cacd4] {\n  list-style: none;\n}\n.weui-uploader__file[data-v-e15cacd4] {\n  float: left;\n  margin-right: 9px;\n  margin-bottom: 9px;\n  width: 79px;\n  height: 79px;\n  background: no-repeat center center;\n  background-size: cover;\n}\n.weui-uploader__file_status[data-v-e15cacd4] {\n  position: relative;\n}\n.weui-uploader__file_status[data-v-e15cacd4]:before {\n  content: \" \";\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  background-color: rgba(0, 0, 0, 0.5);\n}\n.weui-uploader__file_status .weui-uploader__file-content[data-v-e15cacd4] {\n  display: block;\n}\n.weui-uploader__file-content[data-v-e15cacd4] {\n  display: none;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  color: #FFFFFF;\n}\n.weui-uploader__file-content .weui-icon-warn[data-v-e15cacd4] {\n  display: inline-block;\n}\n.weui-uploader__input-box[data-v-e15cacd4] {\n  float: left;\n  position: relative;\n  margin-right: 9px;\n  margin-bottom: 9px;\n  width: 77px;\n  height: 77px;\n  border: 1px solid #D9D9D9;\n}\n.weui-uploader__input-box[data-v-e15cacd4]:before,\n.weui-uploader__input-box[data-v-e15cacd4]:after {\n  content: \" \";\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  background-color: #D9D9D9;\n}\n.weui-uploader__input-box[data-v-e15cacd4]:before {\n  width: 2px;\n  height: 39.5px;\n}\n.weui-uploader__input-box[data-v-e15cacd4]:after {\n  width: 39.5px;\n  height: 2px;\n}\n.weui-uploader__input-box[data-v-e15cacd4]:active {\n  border-color: #999999;\n}\n.weui-uploader__input-box[data-v-e15cacd4]:active:before,\n.weui-uploader__input-box[data-v-e15cacd4]:active:after {\n  background-color: #999999;\n}\n.weui-uploader__input[data-v-e15cacd4] {\n  position: absolute;\n  z-index: 1;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  opacity: 0;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n}\n.remove[data-v-e15cacd4]:before {\n  width: 0;\n  height: 0;\n}\n.weui-uploader__bd.small .weui-uploader__input-box[data-v-e15cacd4] {\n  margin-right: 5px;\n  margin-bottom: 5px;\n  width: 58px;\n  height: 58px;\n}\n.weui-uploader__bd.small .weui-uploader__file[data-v-e15cacd4] {\n  width: 60px;\n  height: 60px;\n  margin-right: 5px;\n  margin-bottom: 5px;\n}\n", "", {"version":3,"sources":["/./node_modules/_vux-uploader@0.1.9@vux-uploader/src/components/uploader.vue"],"names":[],"mappings":"AAAA;;EAEE;AACF;;EAEE;AACF;;EAEE;AACF;;EAEE;AACF;;EAEE;AACF;;EAEE;AACF;;EAEE;AACF;;EAEE;AACF;;EAEE;AACF;;EAEE;AACF;;EAEE;AACF;;EAEE;AACF;;EAEE;AACF;;EAEE;AACF;;EAEE;AACF;;EAEE;AACF;;EAEE;AACF;;EAEE;AACF;;EAEE;AACF;;EAEE;AACF;;EAEE;AACF,WAAW;AACX;;EAEE;AACF;;EAEE;AACF;;EAEE;AACF;;EAEE;AACF;;EAEE;AACF;;EAEE;AACF;;EAEE;AACF;;EAEE;AACF;;EAEE;AACF;;EAEE;AACF;;EAEE;AACF;;EAEE;AACF;;EAEE;AACF;;EAEE;AACF;;EAEE;AACF;EACE,qBAAqB;EACrB,qBAAqB;EACrB,cAAc;EACd,qBAAqB;EACrB,0BAA0B;MACtB,uBAAuB;UACnB,oBAAoB;CAC7B;AACD;EACE,oBAAoB;MAChB,YAAY;UACR,QAAQ;CACjB;AACD;EACE,eAAe;CAChB;AACD;EACE,oBAAoB;EACpB,mBAAmB;EACnB,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,YAAY;EACZ,kBAAkB;EAClB,mBAAmB;EACnB,YAAY;EACZ,aAAa;EACb,oCAAoC;EACpC,uBAAuB;CACxB;AACD;EACE,mBAAmB;CACpB;AACD;EACE,aAAa;EACb,mBAAmB;EACnB,OAAO;EACP,SAAS;EACT,UAAU;EACV,QAAQ;EACR,qCAAqC;CACtC;AACD;EACE,eAAe;CAChB;AACD;EACE,cAAc;EACd,mBAAmB;EACnB,SAAS;EACT,UAAU;EACV,yCAAyC;UACjC,iCAAiC;EACzC,eAAe;CAChB;AACD;EACE,sBAAsB;CACvB;AACD;EACE,YAAY;EACZ,mBAAmB;EACnB,kBAAkB;EAClB,mBAAmB;EACnB,YAAY;EACZ,aAAa;EACb,0BAA0B;CAC3B;AACD;;EAEE,aAAa;EACb,mBAAmB;EACnB,SAAS;EACT,UAAU;EACV,yCAAyC;UACjC,iCAAiC;EACzC,0BAA0B;CAC3B;AACD;EACE,WAAW;EACX,eAAe;CAChB;AACD;EACE,cAAc;EACd,YAAY;CACb;AACD;EACE,sBAAsB;CACvB;AACD;;EAEE,0BAA0B;CAC3B;AACD;EACE,mBAAmB;EACnB,WAAW;EACX,OAAO;EACP,QAAQ;EACR,YAAY;EACZ,aAAa;EACb,WAAW;EACX,8CAA8C;CAC/C;AACD;EACE,SAAS;EACT,UAAU;CACX;AACD;EACE,kBAAkB;EAClB,mBAAmB;EACnB,YAAY;EACZ,aAAa;CACd;AACD;EACE,YAAY;EACZ,aAAa;EACb,kBAAkB;EAClB,mBAAmB;CACpB","file":"uploader.vue","sourcesContent":["/**\n* actionsheet\n*/\n/**\n* datetime\n*/\n/**\n* tabbar\n*/\n/**\n* tab\n*/\n/**\n* dialog\n*/\n/**\n* x-number\n*/\n/**\n* checkbox\n*/\n/**\n* check-icon\n*/\n/**\n* Cell\n*/\n/**\n* Mask\n*/\n/**\n* Range\n*/\n/**\n* Tabbar\n*/\n/**\n* Header\n*/\n/**\n* Timeline\n*/\n/**\n* Switch\n*/\n/**\n* Button\n*/\n/**\n* swipeout\n*/\n/**\n* Cell\n*/\n/**\n* Badge\n*/\n/**\n* Popover\n*/\n/**\n* Button tab\n*/\n/* alias */\n/**\n* Swiper\n*/\n/**\n* checklist\n*/\n/**\n* popup-picker\n*/\n/**\n* popup\n*/\n/**\n* popup-header\n*/\n/**\n* form-preview\n*/\n/**\n* sticky\n*/\n/**\n* group\n*/\n/**\n* toast\n*/\n/**\n* icon\n*/\n/**\n* calendar\n*/\n/**\n* week-calendar\n*/\n/**\n* search\n*/\n/**\n* radio\n*/\n/**\n* loadmore\n*/\n.weui-uploader__hd[data-v-e15cacd4] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  padding-bottom: 10px;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n.weui-uploader__title[data-v-e15cacd4] {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n}\n.weui-uploader__info[data-v-e15cacd4] {\n  color: #B2B2B2;\n}\n.weui-uploader__bd[data-v-e15cacd4] {\n  margin-bottom: -4px;\n  margin-right: -9px;\n  overflow: hidden;\n}\n.weui-uploader__files[data-v-e15cacd4] {\n  list-style: none;\n}\n.weui-uploader__file[data-v-e15cacd4] {\n  float: left;\n  margin-right: 9px;\n  margin-bottom: 9px;\n  width: 79px;\n  height: 79px;\n  background: no-repeat center center;\n  background-size: cover;\n}\n.weui-uploader__file_status[data-v-e15cacd4] {\n  position: relative;\n}\n.weui-uploader__file_status[data-v-e15cacd4]:before {\n  content: \" \";\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  background-color: rgba(0, 0, 0, 0.5);\n}\n.weui-uploader__file_status .weui-uploader__file-content[data-v-e15cacd4] {\n  display: block;\n}\n.weui-uploader__file-content[data-v-e15cacd4] {\n  display: none;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  color: #FFFFFF;\n}\n.weui-uploader__file-content .weui-icon-warn[data-v-e15cacd4] {\n  display: inline-block;\n}\n.weui-uploader__input-box[data-v-e15cacd4] {\n  float: left;\n  position: relative;\n  margin-right: 9px;\n  margin-bottom: 9px;\n  width: 77px;\n  height: 77px;\n  border: 1px solid #D9D9D9;\n}\n.weui-uploader__input-box[data-v-e15cacd4]:before,\n.weui-uploader__input-box[data-v-e15cacd4]:after {\n  content: \" \";\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  background-color: #D9D9D9;\n}\n.weui-uploader__input-box[data-v-e15cacd4]:before {\n  width: 2px;\n  height: 39.5px;\n}\n.weui-uploader__input-box[data-v-e15cacd4]:after {\n  width: 39.5px;\n  height: 2px;\n}\n.weui-uploader__input-box[data-v-e15cacd4]:active {\n  border-color: #999999;\n}\n.weui-uploader__input-box[data-v-e15cacd4]:active:before,\n.weui-uploader__input-box[data-v-e15cacd4]:active:after {\n  background-color: #999999;\n}\n.weui-uploader__input[data-v-e15cacd4] {\n  position: absolute;\n  z-index: 1;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  opacity: 0;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n}\n.remove[data-v-e15cacd4]:before {\n  width: 0;\n  height: 0;\n}\n.weui-uploader__bd.small .weui-uploader__input-box[data-v-e15cacd4] {\n  margin-right: 5px;\n  margin-bottom: 5px;\n  width: 58px;\n  height: 58px;\n}\n.weui-uploader__bd.small .weui-uploader__file[data-v-e15cacd4] {\n  width: 60px;\n  height: 60px;\n  margin-right: 5px;\n  margin-bottom: 5px;\n}\n"],"sourceRoot":"webpack://"}]);

// exports


/***/ }),

/***/ "NiCj":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__("oDjy");

module.exports = function normalizeHeaderName(headers, normalizedName) {
  utils.forEach(headers, function processHeader(value, name) {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = value;
      delete headers[name];
    }
  });
};


/***/ }),

/***/ "Orwr":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _uploaderItem = __webpack_require__("To8q");

var _uploaderItem2 = _interopRequireDefault(_uploaderItem);

var _axios = __webpack_require__("Vv9y");

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
	props: {
		images: {
			type: Array,
			default: function _default() {
				return [];
			}
		},
		max: {
			type: Number,
			default: 1
		},
		showHeader: {
			type: Boolean,
			default: true
		},
		showTip: {
			type: Boolean,
			default: true
		},
		readonly: {
			type: Boolean,
			default: false
		},
		title: {
			type: String,
			default: '图片上传'
		},

		handleClick: {
			type: Boolean,
			default: false
		},

		autoUpload: {
			type: Boolean,
			default: true
		},
		uploadUrl: {
			type: String,
			default: ''
		},
		size: {
			type: String,
			default: 'normal'
		},
		capture: {
			type: String,
			default: ''
		},
		name: {
			type: String,
			default: 'img'
		},
		params: {
			type: Object,
			default: null
		}
	},
	components: {
		UploaderItem: _uploaderItem2.default
	},
	methods: {
		add: function add() {
			if (this.handleClick) {
				this.$emit('add-image');
			}
		},
		remove: function remove() {
			if (this.handleClick) {
				this.$emit('remove-image');
			} else {
				this.images.shift();
			}
		},
		preview: function preview(image) {
			this.$emit('preview', image);
		},
		change: function change() {
			var _this = this;

			if (this.handleClick) {
				return;
			}

			var formData = new window.FormData();
			formData.append(this.name, this.$refs.input.files[0]);
			if (this.params) {
				for (var key in this.params) {
					formData.append(key, this.params[key]);
				}
			}

			if (this.autoUpload) {
				if (!this.uploadUrl) {
					console.error('uploadUrl不应为空');
				}

				if (this.$vux && this.$vux.loading) {
					this.$vux.loading.show('正在上传');
				}

				_axios2.default.post(this.uploadUrl, formData).then(function (response) {
					if (_this.$vux && _this.$vux.loading) {
						_this.$vux.loading.hide();
					}
					_this.$refs.input.value = '';
					_this.images.push(response.data.data);
				});
			} else {
				this.$emit('upload-image', formData);
			}
		}
	},
	computed: {
		showCapture: function showCapture() {
			return this.capture || undefined;
		}
	}
};

/***/ }),

/***/ "PGBR":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('li',{staticClass:"weui-uploader__file",style:(_vm.style)})}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "Q1vf":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__("oDjy");

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

/***/ "SiL4":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var utils = __webpack_require__("oDjy");
var normalizeHeaderName = __webpack_require__("NiCj");

var PROTECTION_PREFIX = /^\)\]\}',?\n/;
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
    adapter = __webpack_require__("fIC2");
  } else if (typeof process !== 'undefined') {
    // For node use HTTP adapter
    adapter = __webpack_require__("fIC2");
  }
  return adapter;
}

var defaults = {
  adapter: getDefaultAdapter(),

  transformRequest: [function transformRequest(data, headers) {
    normalizeHeaderName(headers, 'Content-Type');
    if (utils.isFormData(data) ||
      utils.isArrayBuffer(data) ||
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
      data = data.replace(PROTECTION_PREFIX, '');
      try {
        data = JSON.parse(data);
      } catch (e) { /* Ignore */ }
    }
    return data;
  }],

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

utils.forEach(['delete', 'get', 'head'], function forEachMehtodNoData(method) {
  defaults.headers[method] = {};
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
});

module.exports = defaults;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("V0EG")))

/***/ }),

/***/ "To8q":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_vux_loader_1_2_1_vux_loader_src_script_loader_js_vux_loader_1_2_1_vux_loader_src_script_loader_js_vue_loader_13_7_1_vue_loader_lib_selector_type_script_index_0_uploader_item_vue__ = __webpack_require__("xyfH");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_vux_loader_1_2_1_vux_loader_src_script_loader_js_vux_loader_1_2_1_vux_loader_src_script_loader_js_vue_loader_13_7_1_vue_loader_lib_selector_type_script_index_0_uploader_item_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_vux_loader_1_2_1_vux_loader_src_script_loader_js_vux_loader_1_2_1_vux_loader_src_script_loader_js_vue_loader_13_7_1_vue_loader_lib_selector_type_script_index_0_uploader_item_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_vux_loader_1_2_1_vux_loader_src_script_loader_js_vux_loader_1_2_1_vux_loader_src_script_loader_js_vue_loader_13_7_1_vue_loader_lib_selector_type_script_index_0_uploader_item_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_vux_loader_1_2_1_vux_loader_src_script_loader_js_vux_loader_1_2_1_vux_loader_src_script_loader_js_vue_loader_13_7_1_vue_loader_lib_selector_type_script_index_0_uploader_item_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_vux_loader_1_2_1_vux_loader_src_script_loader_js_vue_loader_13_7_1_vue_loader_lib_selector_type_script_index_0_uploader_item_vue__ = __webpack_require__("7YAZ");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_vux_loader_1_2_1_vux_loader_src_script_loader_js_vue_loader_13_7_1_vue_loader_lib_selector_type_script_index_0_uploader_item_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__babel_loader_vux_loader_1_2_1_vux_loader_src_script_loader_js_vue_loader_13_7_1_vue_loader_lib_selector_type_script_index_0_uploader_item_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__vue_loader_13_7_1_vue_loader_lib_template_compiler_index_id_data_v_54864eda_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_vux_loader_1_2_1_vux_loader_src_before_template_compiler_loader_js_vux_loader_1_2_1_vux_loader_src_template_loader_js_vue_loader_13_7_1_vue_loader_lib_selector_type_template_index_0_uploader_item_vue__ = __webpack_require__("PGBR");
var normalizeComponent = __webpack_require__("Z0/y")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_1__babel_loader_vux_loader_1_2_1_vux_loader_src_script_loader_js_vue_loader_13_7_1_vue_loader_lib_selector_type_script_index_0_uploader_item_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_2__vue_loader_13_7_1_vue_loader_lib_template_compiler_index_id_data_v_54864eda_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_vux_loader_1_2_1_vux_loader_src_before_template_compiler_loader_js_vux_loader_1_2_1_vux_loader_src_template_loader_js_vue_loader_13_7_1_vue_loader_lib_selector_type_template_index_0_uploader_item_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "Vv9y":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("IMU1");

/***/ }),

/***/ "XiAw":
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

/***/ "aJcp":
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

/***/ "eX4u":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"weui-cell"},[_c('div',{staticClass:"weui-cell__bd"},[_c('div',{staticClass:"weui-uploader"},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.showHeader),expression:"showHeader"}],staticClass:"weui-uploader__hd"},[_c('p',{staticClass:"weui-uploader__title"},[_vm._v(" "+_vm._s(_vm.title)+" ")]),_vm._v(" "),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.showHeader && _vm.showTip),expression:"showHeader && showTip"}],staticClass:"weui-uploader__info"},[_vm._v("\n\t\t\t\t\t"+_vm._s(_vm.images.length)+" / "+_vm._s(_vm.max)+"\n\t\t\t\t")])]),_vm._v(" "),_c('div',{staticClass:"weui-uploader__bd",class:{small: _vm.size === 'small'}},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(!_vm.readonly && _vm.images.length > 0),expression:"!readonly && images.length > 0"}],staticClass:"weui-uploader__input-box remove",on:{"click":_vm.remove}}),_vm._v(" "),_c('ul',{staticClass:"weui-uploader__files"},_vm._l((_vm.images),function(image){return _c('uploader-item',{key:image.url,attrs:{"background-image":image.url},nativeOn:{"click":function($event){_vm.preview(image)}}})})),_vm._v(" "),_c('div',{directives:[{name:"show",rawName:"v-show",value:(!_vm.readonly && _vm.images.length < _vm.max),expression:"!readonly && images.length < max"}],staticClass:"weui-uploader__input-box",on:{"click":_vm.add}},[(!_vm.handleClick)?_c('input',{ref:"input",staticClass:"weui-uploader__input",attrs:{"type":"file","accept":"image/*","capture":_vm.showCapture},on:{"change":_vm.change}}):_vm._e()])])])])])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "fIC2":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__("oDjy");
var settle = __webpack_require__("AclL");
var buildURL = __webpack_require__("1aAG");
var parseHeaders = __webpack_require__("zP4l");
var isURLSameOrigin = __webpack_require__("EP1l");
var createError = __webpack_require__("AiSB");
var btoa = (typeof window !== 'undefined' && window.btoa && window.btoa.bind(window)) || __webpack_require__("q0/r");

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
    if ("production" !== 'test' &&
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
        // IE sends 1223 instead of 204 (https://github.com/mzabriskie/axios/issues/201)
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
      reject(createError('Network Error', config));

      // Clean up request
      request = null;
    };

    // Handle timeout
    request.ontimeout = function handleTimeout() {
      reject(createError('timeout of ' + config.timeout + 'ms exceeded', config, 'ECONNABORTED'));

      // Clean up request
      request = null;
    };

    // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.
    if (utils.isStandardBrowserEnv()) {
      var cookies = __webpack_require__("Q1vf");

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
        if (request.responseType !== 'json') {
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


/***/ }),

/***/ "fg8a":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Update an Error with the specified config, error code, and response.
 *
 * @param {Error} error The error to update.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 @ @param {Object} [response] The response.
 * @returns {Error} The error.
 */
module.exports = function enhanceError(error, config, code, response) {
  error.config = config;
  if (code) {
    error.code = code;
  }
  error.response = response;
  return error;
};


/***/ }),

/***/ "hUDH":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/_vux@2.8.0@vux/src/components/flexbox/flexbox.vue + 3 modules
var flexbox = __webpack_require__("EsTV");

// EXTERNAL MODULE: ./node_modules/_vux@2.8.0@vux/src/components/flexbox/flexbox-item.vue + 3 modules
var flexbox_item = __webpack_require__("Ris4");

// EXTERNAL MODULE: ./node_modules/_vux@2.8.0@vux/src/components/toast/index.vue + 3 modules
var toast = __webpack_require__("MX9l");

// EXTERNAL MODULE: ./node_modules/_vux@2.8.0@vux/src/components/x-header/index.vue + 3 modules
var x_header = __webpack_require__("OVFY");

// EXTERNAL MODULE: ./node_modules/_vux@2.8.0@vux/src/components/view-box/index.vue + 3 modules
var view_box = __webpack_require__("utzS");

// EXTERNAL MODULE: ./node_modules/_vux@2.8.0@vux/src/components/group/index.vue + 3 modules
var group = __webpack_require__("F07p");

// EXTERNAL MODULE: ./node_modules/_vux@2.8.0@vux/src/components/cell/index.vue + 5 modules
var cell = __webpack_require__("rR7n");

// EXTERNAL MODULE: ./node_modules/_vux@2.8.0@vux/src/components/confirm/index.vue + 7 modules
var components_confirm = __webpack_require__("gAZd");

// EXTERNAL MODULE: ./node_modules/_vux@2.8.0@vux/src/directives/transfer-dom/index.js
var transfer_dom = __webpack_require__("KgYO");

// EXTERNAL MODULE: ./node_modules/_vux-uploader@0.1.9@vux-uploader/src/main.js
var main = __webpack_require__("iw8f");
var main_default = /*#__PURE__*/__webpack_require__.n(main);

// CONCATENATED MODULE: ./node_modules/_babel-loader@7.1.4@babel-loader/lib!./node_modules/_vux-loader@1.2.1@vux-loader/src/script-loader.js!./node_modules/_vux-loader@1.2.1@vux-loader/src/script-loader.js!./node_modules/_vue-loader@13.7.1@vue-loader/lib/selector.js?type=script&index=0!./src/pages/userSet/userSet.vue












/* harmony default export */ var userSet = ({
  name: 'app',
  directives: {
    TransferDom: transfer_dom["a" /* default */]
  },
  components: {
    XHeader: x_header["a" /* default */],
    ViewBox: view_box["a" /* default */],
    Group: group["a" /* default */],
    Cell: cell["a" /* default */],
    Confirm: components_confirm["a" /* default */],
    Toast: toast["a" /* default */],
    Uploader: main_default.a,
    Flexbox: flexbox["a" /* default */],
    FlexboxItem: flexbox_item["a" /* default */]
  },
  data() {
    return {
      varmax: 1,
      images: [],
      uploadUrl: 'use/upFile',
      autoUpload: true,

      head: '',

      nickName: '',

      wxName: '',

      signName: '',

      IDName: '15065',

      money: '0' + '元',

      nameShow: false,

      wxShow: false,

      signShow: false,

      nameToast: false,

      success: false,

      fail: false,

      wxToast: false,

      signToast: false
    };
  },
  mounted() {
    this.$get("user/getUserInfo", {
      field: ["user_name", "user_head", "user_info", "user_weixin"]
    }, _res => {
      this.nickName = _res.msg.user_name;
      this.wxName = _res.msg.user_weixin;
      this.signName = _res.msg.user_info;
      console.log("ppp", _res);
      if (_res.res >= 1) {
        localStorage.user_info = JSON.stringify(_res.msg);
        return;
      }
    });
    var user_info = JSON.parse(localStorage.user_info);
    var nickName = user_info.user_name;
    var wxName = user_info.user_weixin;
    var signName = user_info.user_info;
    this.nickName = nickName;
    this.wxName = wxName;
    this.signName = signName;
  },
  methods: {
    toSetHead() {
      console.log("去设置用户头像");

      /*
      this.$post(
      "user/save", {
      save: {
      user_name: msg,
      }
      },
      res => {
      console.log(res);
      if(res.res >= 1) {
      this.$vux.toast.show({
      text: "修改成功",
      type: "text",
      position: "middle"
      });
      }
      if(res < 0) {
      this.$vux.toast.show({
      text: "网络错误,请重试",
      type: "text",
      position: "middle"
      });
      }
      
      }
      );
      */
    },

    toSetNickName() {
      console.log("去设置昵称");
      this.nameShow = true;
    },

    onName(msg) {
      var _this = this;
      if (msg.length < 2 || msg.length > 16) {
        _this.nameToast = true;
        return false;
      }

      this.$post("user/save", {
        save: {
          user_name: msg
        }
      }, res => {
        console.log(res);
        if (res.res >= 1) {
          _this.nickName = msg;
          localStorage.nickName = msg;
          this.$vux.toast.show({
            text: "修改成功",
            type: "text",
            position: "middle"
          });
        }
        if (res < 0) {
          this.$vux.toast.show({
            text: "网络错误,请重试",
            type: "text",
            position: "middle"
          });
        }
      });
    },

    toSetWx() {
      this.wxShow = true;
    },

    onWx(msg) {
      var _this = this;
      if (msg.length > 28) {
        _this.wxToast = true;
        return false;
      }
      this.$post("user/save", {
        save: {
          user_weixin: msg
        }
      }, res => {
        console.log(res);
        if (res.res >= 1) {
          _this.wxName = msg;
          localStorage.wxName = msg;
          this.$vux.toast.show({
            text: "修改成功",
            type: "text",
            position: "middle"
          });
        }
        if (res < 0) {
          this.$vux.toast.show({
            text: "网络错误,请重试",
            type: "text",
            position: "middle"
          });
        }
      });
    },

    toSetSign() {
      this.signShow = true;
    },

    onSign(msg) {
      var _this = this;
      if (msg.length > 26) {
        _this.signToast = true;
        return false;
      }
      this.$post("user/save", {
        save: {
          user_info: msg
        }
      }, res => {
        console.log(res);
        if (res.res >= 1) {
          _this.signName = msg;
          localStorage.signName = msg;
          this.$vux.toast.show({
            text: "修改成功",
            type: "text",
            position: "middle"
          });
        }
        if (res < 0) {
          this.$vux.toast.show({
            text: "网络错误,请重试",
            type: "text",
            position: "middle"
          });
        }
      });
    },

    back() {}
  }
});
// CONCATENATED MODULE: ./node_modules/_babel-loader@7.1.4@babel-loader/lib!./node_modules/_vux-loader@1.2.1@vux-loader/src/script-loader.js!./node_modules/_vue-loader@13.7.1@vue-loader/lib/selector.js?type=script&index=0!./src/pages/userSet/userSet.vue












/* harmony default export */ var userSet_userSet = ({
  name: 'app',
  directives: {
    TransferDom: transfer_dom["a" /* default */]
  },
  components: {
    XHeader: x_header["a" /* default */],
    ViewBox: view_box["a" /* default */],
    Group: group["a" /* default */],
    Cell: cell["a" /* default */],
    Confirm: components_confirm["a" /* default */],
    Toast: toast["a" /* default */],
    Uploader: main_default.a,
    Flexbox: flexbox["a" /* default */],
    FlexboxItem: flexbox_item["a" /* default */]
  },
  data() {
    return {
      varmax: 1,
      images: [],
      uploadUrl: 'use/upFile',
      autoUpload: true,

      head: '',

      nickName: '',

      wxName: '',

      signName: '',

      IDName: '15065',

      money: '0' + '元',

      nameShow: false,

      wxShow: false,

      signShow: false,

      nameToast: false,

      success: false,

      fail: false,

      wxToast: false,

      signToast: false
    };
  },
  mounted() {
    this.$get("user/getUserInfo", {
      field: ["user_name", "user_head", "user_info", "user_weixin"]
    }, _res => {
      this.nickName = _res.msg.user_name;
      this.wxName = _res.msg.user_weixin;
      this.signName = _res.msg.user_info;
      console.log("ppp", _res);
      if (_res.res >= 1) {
        localStorage.user_info = JSON.stringify(_res.msg);
        return;
      }
    });
    var user_info = JSON.parse(localStorage.user_info);
    var nickName = user_info.user_name;
    var wxName = user_info.user_weixin;
    var signName = user_info.user_info;
    this.nickName = nickName;
    this.wxName = wxName;
    this.signName = signName;
  },
  methods: {
    toSetHead() {
      console.log("去设置用户头像");

      /*
      this.$post(
      "user/save", {
      save: {
      user_name: msg,
      }
      },
      res => {
      console.log(res);
      if(res.res >= 1) {
      this.$vux.toast.show({
      text: "修改成功",
      type: "text",
      position: "middle"
      });
      }
      if(res < 0) {
      this.$vux.toast.show({
      text: "网络错误,请重试",
      type: "text",
      position: "middle"
      });
      }
      
      }
      );
      */
    },

    toSetNickName() {
      console.log("去设置昵称");
      this.nameShow = true;
    },

    onName(msg) {
      var _this = this;
      if (msg.length < 2 || msg.length > 16) {
        _this.nameToast = true;
        return false;
      }

      this.$post("user/save", {
        save: {
          user_name: msg
        }
      }, res => {
        console.log(res);
        if (res.res >= 1) {
          _this.nickName = msg;
          localStorage.nickName = msg;
          this.$vux.toast.show({
            text: "修改成功",
            type: "text",
            position: "middle"
          });
        }
        if (res < 0) {
          this.$vux.toast.show({
            text: "网络错误,请重试",
            type: "text",
            position: "middle"
          });
        }
      });
    },

    toSetWx() {
      this.wxShow = true;
    },

    onWx(msg) {
      var _this = this;
      if (msg.length > 28) {
        _this.wxToast = true;
        return false;
      }
      this.$post("user/save", {
        save: {
          user_weixin: msg
        }
      }, res => {
        console.log(res);
        if (res.res >= 1) {
          _this.wxName = msg;
          localStorage.wxName = msg;
          this.$vux.toast.show({
            text: "修改成功",
            type: "text",
            position: "middle"
          });
        }
        if (res < 0) {
          this.$vux.toast.show({
            text: "网络错误,请重试",
            type: "text",
            position: "middle"
          });
        }
      });
    },

    toSetSign() {
      this.signShow = true;
    },

    onSign(msg) {
      var _this = this;
      if (msg.length > 26) {
        _this.signToast = true;
        return false;
      }
      this.$post("user/save", {
        save: {
          user_info: msg
        }
      }, res => {
        console.log(res);
        if (res.res >= 1) {
          _this.signName = msg;
          localStorage.signName = msg;
          this.$vux.toast.show({
            text: "修改成功",
            type: "text",
            position: "middle"
          });
        }
        if (res < 0) {
          this.$vux.toast.show({
            text: "网络错误,请重试",
            type: "text",
            position: "middle"
          });
        }
      });
    },

    back() {}
  }
});
// CONCATENATED MODULE: ./node_modules/_vue-loader@13.7.1@vue-loader/lib/template-compiler?{"id":"data-v-3ac178c9","hasScoped":false,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/_vux-loader@1.2.1@vux-loader/src/before-template-compiler-loader.js!./node_modules/_vux-loader@1.2.1@vux-loader/src/template-loader.js!./node_modules/_vue-loader@13.7.1@vue-loader/lib/selector.js?type=template&index=0!./src/pages/userSet/userSet.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"user-set"},[_c('x-header',{attrs:{"left-options":{backText: '个人信息'}}},[_c('a',{attrs:{"slot":"left"},slot:"left"}),_vm._v(" "),_c('a',{attrs:{"slot":"right"},slot:"right"})]),_vm._v(" "),_c('view-box',[_c('group',[_c('flexbox',{attrs:{"gutter":0}},[_c('flexbox-item',{attrs:{"span":2}},[_c('div',{staticClass:"user-set-title"},[_vm._v("\n\t\t\t\t\t\t头像\n\t\t\t\t\t")])]),_vm._v(" "),_c('flexbox-item',{attrs:{"span":9}},[_c('div',{staticClass:"user-set-up"},[_c('uploader',{staticClass:"up-img",attrs:{"max":_vm.varmax,"images":_vm.images,"size":"small","upload-url":_vm.uploadUrl,"auto-upload":_vm.autoUpload,"show-header":false}})],1)]),_vm._v(" "),_c('flexbox-item',{attrs:{"span":1}},[_c('div',{staticClass:"user-set-icon text-right"},[_c('i',{staticClass:"fa fa-angle-right"})])])],1),_vm._v(" "),_c('cell',{attrs:{"border-intent":false,"title":('昵称'),"value":_vm.nickName,"is-link":""},nativeOn:{"click":function($event){return _vm.toSetNickName($event)}}}),_vm._v(" "),_c('cell',{attrs:{"border-intent":false,"title":('微信号'),"value":_vm.wxName,"is-link":""},nativeOn:{"click":function($event){return _vm.toSetWx($event)}}}),_vm._v(" "),_c('cell',{attrs:{"border-intent":false,"title":('个性签名'),"value":_vm.signName,"is-link":""},nativeOn:{"click":function($event){return _vm.toSetSign($event)}}})],1),_vm._v(" "),_c('br'),_vm._v(" "),_c('group',[_c('cell',{attrs:{"border-intent":false,"title":('ID'),"value":_vm.IDName}}),_vm._v(" "),_c('cell',{attrs:{"border-intent":false,"title":('累计消费'),"value":_vm.money}})],1),_vm._v(" "),_c('div',{directives:[{name:"transfer-dom",rawName:"v-transfer-dom"}]},[_c('confirm',{attrs:{"show-input":"","title":('修改昵称'),"input-attrs":{type: 'text'}},on:{"on-confirm":_vm.onName},model:{value:(_vm.nameShow),callback:function ($$v) {_vm.nameShow=$$v},expression:"nameShow"}})],1),_vm._v(" "),_c('div',{directives:[{name:"transfer-dom",rawName:"v-transfer-dom"}]},[_c('confirm',{attrs:{"show-input":"","title":('修改微信号'),"input-attrs":{type: 'text'}},on:{"on-confirm":_vm.onWx},model:{value:(_vm.wxShow),callback:function ($$v) {_vm.wxShow=$$v},expression:"wxShow"}})],1),_vm._v(" "),_c('div',{directives:[{name:"transfer-dom",rawName:"v-transfer-dom"}]},[_c('confirm',{attrs:{"show-input":"","title":('设置个性签名'),"input-attrs":{type: 'text'}},on:{"on-confirm":_vm.onSign},model:{value:(_vm.signShow),callback:function ($$v) {_vm.signShow=$$v},expression:"signShow"}})],1),_vm._v(" "),_c('toast',{attrs:{"type":"text","text":"限2-16个字符"},model:{value:(_vm.nameToast),callback:function ($$v) {_vm.nameToast=$$v},expression:"nameToast"}}),_vm._v(" "),_c('toast',{attrs:{"type":"text","text":"修改成功"},model:{value:(_vm.success),callback:function ($$v) {_vm.success=$$v},expression:"success"}}),_vm._v(" "),_c('toast',{attrs:{"type":"text","text":"网络错误"},model:{value:(_vm.fail),callback:function ($$v) {_vm.fail=$$v},expression:"fail"}}),_vm._v(" "),_c('toast',{attrs:{"type":"text","text":"最多28个字符"},model:{value:(_vm.wxToast),callback:function ($$v) {_vm.wxToast=$$v},expression:"wxToast"}}),_vm._v(" "),_c('toast',{attrs:{"type":"text","text":"最多26个字符"},model:{value:(_vm.signToast),callback:function ($$v) {_vm.signToast=$$v},expression:"signToast"}})],1)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var pages_userSet_userSet = (esExports);
// CONCATENATED MODULE: ./src/pages/userSet/userSet.vue
function injectStyle (ssrContext) {
  __webpack_require__("Kb6n")
}
var normalizeComponent = __webpack_require__("Z0/y")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  userSet_userSet,
  pages_userSet_userSet,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var src_pages_userSet_userSet = __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "iw8f":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("ynE7")


/***/ }),

/***/ "kmeC":
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

/***/ "o6vB":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__("oDjy");

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

/***/ "oDjy":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__("XiAw");

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
 *  typeof document.createElement -> undefined
 */
function isStandardBrowserEnv() {
  return (
    typeof window !== 'undefined' &&
    typeof document !== 'undefined' &&
    typeof document.createElement === 'function'
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
  if (typeof obj !== 'object' && !isArray(obj)) {
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

/***/ "pNpD":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _uploaderItem = __webpack_require__("To8q");

var _uploaderItem2 = _interopRequireDefault(_uploaderItem);

var _axios = __webpack_require__("Vv9y");

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
	props: {
		images: {
			type: Array,
			default: function _default() {
				return [];
			}
		},
		max: {
			type: Number,
			default: 1
		},
		showHeader: {
			type: Boolean,
			default: true
		},
		showTip: {
			type: Boolean,
			default: true
		},
		readonly: {
			type: Boolean,
			default: false
		},
		title: {
			type: String,
			default: '图片上传'
		},

		handleClick: {
			type: Boolean,
			default: false
		},

		autoUpload: {
			type: Boolean,
			default: true
		},
		uploadUrl: {
			type: String,
			default: ''
		},
		size: {
			type: String,
			default: 'normal'
		},
		capture: {
			type: String,
			default: ''
		},
		name: {
			type: String,
			default: 'img'
		},
		params: {
			type: Object,
			default: null
		}
	},
	components: {
		UploaderItem: _uploaderItem2.default
	},
	methods: {
		add: function add() {
			if (this.handleClick) {
				this.$emit('add-image');
			}
		},
		remove: function remove() {
			if (this.handleClick) {
				this.$emit('remove-image');
			} else {
				this.images.shift();
			}
		},
		preview: function preview(image) {
			this.$emit('preview', image);
		},
		change: function change() {
			var _this = this;

			if (this.handleClick) {
				return;
			}

			var formData = new window.FormData();
			formData.append(this.name, this.$refs.input.files[0]);
			if (this.params) {
				for (var key in this.params) {
					formData.append(key, this.params[key]);
				}
			}

			if (this.autoUpload) {
				if (!this.uploadUrl) {
					console.error('uploadUrl不应为空');
				}

				if (this.$vux && this.$vux.loading) {
					this.$vux.loading.show('正在上传');
				}

				_axios2.default.post(this.uploadUrl, formData).then(function (response) {
					if (_this.$vux && _this.$vux.loading) {
						_this.$vux.loading.hide();
					}
					_this.$refs.input.value = '';
					_this.images.push(response.data.data);
				});
			} else {
				this.$emit('upload-image', formData);
			}
		}
	},
	computed: {
		showCapture: function showCapture() {
			return this.capture || undefined;
		}
	}
};

/***/ }),

/***/ "pjov":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__("oDjy");
var transformData = __webpack_require__("sRsa");
var isCancel = __webpack_require__("+qb3");
var defaults = __webpack_require__("SiL4");

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

/***/ "q0/r":
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

/***/ "rnZg":
/***/ (function(module, exports, __webpack_require__) {

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/

var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

var listToStyles = __webpack_require__("y+uz")

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

module.exports = function (parentId, list, _isProduction) {
  isProduction = _isProduction

  var styles = listToStyles(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = listToStyles(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[data-vue-ssr-id~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),

/***/ "sRsa":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__("oDjy");

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

/***/ "sXd1":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("XLS9")(true);
// imports


// module
exports.push([module.i, "/*全部字体14px*/\n* {\r\n\tfont-size: 14px;\n}\r\n\r\n/*去掉li的顶外边距*/\n.user-set .weui-cells {\r\n\tmargin-top: 0 !important;\n}\r\n\r\n/*用户头像的设置*/\n.user-set img {\r\n\twidth: 30px;\r\n\theight: 30px;\r\n\tline-height: 30px;\r\n\tvertical-align: middle;\r\n\tborder-radius: 50%;\n}\r\n\r\n/*全部的padding加大*/\n.user-set .weui-cell {\r\n\tpadding: 13px 15px !important;\n}\r\n\r\n/*第一个  头像的padding减小*/\n.user-set .weui-cell.user-set-head {\r\n\tpadding: 7.5px 15px !important;\n}\r\n\r\n/*改变图片上传的样式*/\n.user-set .weui-uploader__input-box[data-v-4acb4ad2] {\r\n\tfloat: right !important;\n}\n.user-set .weui-uploader__input[data-v-4acb4ad2] {\r\n\tright: 0px !important;\n}\n.user-set .weui-uploader__bd.small .weui-uploader__input-box[data-v-4acb4ad2] {\r\n\twidth: 25px;\r\n\theight: 25px;\n}\r\n\r\n/*竖着的线*/\n.user-set .weui-uploader__input-box[data-v-4acb4ad2]:before {\r\n\theight: 20px;\n}\n.user-set .weui-uploader__input-box[data-v-4acb4ad2]:after {\r\n\twidth: 20px;\n}\n.user-set .weui-uploader__bd[data-v-4acb4ad2] {\r\n\tmargin-right: 0 !important;\n}\n.user-set .weui-cell.up-img {\r\n\tpadding: 9px 0 !important;\n}\n.user-set .user-set-title {\r\n\tpadding-left: 15px;\n}\n.user-set .user-set-icon {\r\n\tpadding-right: 15px;\r\n\tcolor: #C8C8CD;\n}\n.user-set .fa-angle-right {\r\n\tfont-size: 20px;\n}\n.fl {\r\n\tfloat: left;\n}\n.fr {\r\n\tfloat: right;\n}\n.two-line {\r\n\ttext-overflow: -o-ellipsis-lastline;\r\n\toverflow: hidden;\r\n\ttext-overflow: ellipsis;\r\n\tdisplay: -webkit-box;\r\n\t-webkit-line-clamp: 2;\r\n\t-webkit-box-orient: vertical;\n}\n.one-line {\r\n\toverflow: hidden;\r\n\twhite-space: nowrap;\r\n\ttext-overflow: ellipsis;\n}\n.font-weight {\r\n\tfont-weight: 500;\n}\n.font-gray {\r\n\tcolor: #4A4A4A;\n}\n.font-red {\r\n\tcolor: #f00;\n}\n.font-gray-white {\r\n\tcolor: #DDDDDD;\n}\n.font-glod {\r\n\tcolor: #bda57e;\n}\n.font-18 {\r\n\tfont-size: 18px;\n}\n.font-16 {\r\n\tfont-size: 16px;\n}\n.font-14 {\r\n\tfont-size: 14px;\n}\n.font-13 {\r\n\tfont-size: 13px;\n}\n.font-12 {\r\n\tfont-size: 12px;\n}\n.font-white {\r\n\tcolor: #fff;\n}\n.border-right {\r\n\tborder-right: 1px solid #D9D9D9;\n}\n.border-top {\r\n\tborder-top: 1px solid #D9D9D9;\n}\n.bc-black {\r\n\tbackground: #000;\n}\n.text-center {\r\n\ttext-align: center;\n}\n.margin-top-10 {\r\n\tmargin-top: 10px;\n}\n.text-right {\r\n\ttext-align: right;\n}\n.text-left {\r\n\ttext-align: left;\n}\n.bc-orange {\r\n\tbackground: #fe7704;\n}\n.font-black {\r\n\tcolor: #000;\n}\n.float-right {\r\n\tfloat: right\n}\n.float-lfet {\r\n\tfloat: left\n}\r\n\r\n/* 字体颜色类 */\n.text-info,\r\n.text-muted {\r\n\tcolor: #777;\n}\n.text-primary {\r\n\tcolor: #337ab7\n}\n.text-success {\r\n\tcolor: #3c763d\n}\n.text-warning {\r\n\tcolor: #8a6d3b\n}\n.text-danger {\r\n\tcolor: #a94442\n}\n.padding-2 {\r\n\tpadding: 2px;\n}\n.padding-5 {\r\n\tpadding: 5px;\n}\n.border-right-1 {\r\n\tborder-right: 1px solid #DDDDDD;\n}\n.display-inline {\r\n\tdisplay: inline-block;\n}\n", "", {"version":3,"sources":["D:/working/formal/ceshi/src/pages/userSet/userSet.vue"],"names":[],"mappings":"AAAA,YAAY;AACZ;CACC,gBAAgB;CAChB;;AAED,aAAa;AACb;CACC,yBAAyB;CACzB;;AAED,WAAW;AACX;CACC,YAAY;CACZ,aAAa;CACb,kBAAkB;CAClB,uBAAuB;CACvB,mBAAmB;CACnB;;AAED,gBAAgB;AAChB;CACC,8BAA8B;CAC9B;;AAED,qBAAqB;AACrB;CACC,+BAA+B;CAC/B;;AAED,aAAa;AACb;CACC,wBAAwB;CACxB;AACD;CACC,sBAAsB;CACtB;AACD;CACC,YAAY;CACZ,aAAa;CACb;;AAED,QAAQ;AACR;CACC,aAAa;CACb;AACD;CACC,YAAY;CACZ;AACD;CACC,2BAA2B;CAC3B;AACD;CACC,0BAA0B;CAC1B;AACD;CACC,mBAAmB;CACnB;AACD;CACC,oBAAoB;CACpB,eAAe;CACf;AACD;CACC,gBAAgB;CAChB;AACD;CACC,YAAY;CACZ;AACD;CACC,aAAa;CACb;AACD;CACC,oCAAoC;CACpC,iBAAiB;CACjB,wBAAwB;CACxB,qBAAqB;CACrB,sBAAsB;CACtB,6BAA6B;CAC7B;AACD;CACC,iBAAiB;CACjB,oBAAoB;CACpB,wBAAwB;CACxB;AACD;CACC,iBAAiB;CACjB;AACD;CACC,eAAe;CACf;AACD;CACC,YAAY;CACZ;AACD;CACC,eAAe;CACf;AACD;CACC,eAAe;CACf;AACD;CACC,gBAAgB;CAChB;AACD;CACC,gBAAgB;CAChB;AACD;CACC,gBAAgB;CAChB;AACD;CACC,gBAAgB;CAChB;AACD;CACC,gBAAgB;CAChB;AACD;CACC,YAAY;CACZ;AACD;CACC,gCAAgC;CAChC;AACD;CACC,8BAA8B;CAC9B;AACD;CACC,iBAAiB;CACjB;AACD;CACC,mBAAmB;CACnB;AACD;CACC,iBAAiB;CACjB;AACD;CACC,kBAAkB;CAClB;AACD;CACC,iBAAiB;CACjB;AACD;CACC,oBAAoB;CACpB;AACD;CACC,YAAY;CACZ;AACD;CACC,YAAY;CACZ;AACD;CACC,WAAW;CACX;;AAED,WAAW;AACX;;CAEC,YAAY;CACZ;AACD;CACC,cAAc;CACd;AACD;CACC,cAAc;CACd;AACD;CACC,cAAc;CACd;AACD;CACC,cAAc;CACd;AACD;CACC,aAAa;CACb;AACD;CACC,aAAa;CACb;AACD;CACC,gCAAgC;CAChC;AACD;CACC,sBAAsB;CACtB","file":"userSet.vue","sourcesContent":["/*全部字体14px*/\n* {\r\n\tfont-size: 14px;\n}\r\n\r\n/*去掉li的顶外边距*/\n.user-set .weui-cells {\r\n\tmargin-top: 0 !important;\n}\r\n\r\n/*用户头像的设置*/\n.user-set img {\r\n\twidth: 30px;\r\n\theight: 30px;\r\n\tline-height: 30px;\r\n\tvertical-align: middle;\r\n\tborder-radius: 50%;\n}\r\n\r\n/*全部的padding加大*/\n.user-set .weui-cell {\r\n\tpadding: 13px 15px !important;\n}\r\n\r\n/*第一个  头像的padding减小*/\n.user-set .weui-cell.user-set-head {\r\n\tpadding: 7.5px 15px !important;\n}\r\n\r\n/*改变图片上传的样式*/\n.user-set .weui-uploader__input-box[data-v-4acb4ad2] {\r\n\tfloat: right !important;\n}\n.user-set .weui-uploader__input[data-v-4acb4ad2] {\r\n\tright: 0px !important;\n}\n.user-set .weui-uploader__bd.small .weui-uploader__input-box[data-v-4acb4ad2] {\r\n\twidth: 25px;\r\n\theight: 25px;\n}\r\n\r\n/*竖着的线*/\n.user-set .weui-uploader__input-box[data-v-4acb4ad2]:before {\r\n\theight: 20px;\n}\n.user-set .weui-uploader__input-box[data-v-4acb4ad2]:after {\r\n\twidth: 20px;\n}\n.user-set .weui-uploader__bd[data-v-4acb4ad2] {\r\n\tmargin-right: 0 !important;\n}\n.user-set .weui-cell.up-img {\r\n\tpadding: 9px 0 !important;\n}\n.user-set .user-set-title {\r\n\tpadding-left: 15px;\n}\n.user-set .user-set-icon {\r\n\tpadding-right: 15px;\r\n\tcolor: #C8C8CD;\n}\n.user-set .fa-angle-right {\r\n\tfont-size: 20px;\n}\n.fl {\r\n\tfloat: left;\n}\n.fr {\r\n\tfloat: right;\n}\n.two-line {\r\n\ttext-overflow: -o-ellipsis-lastline;\r\n\toverflow: hidden;\r\n\ttext-overflow: ellipsis;\r\n\tdisplay: -webkit-box;\r\n\t-webkit-line-clamp: 2;\r\n\t-webkit-box-orient: vertical;\n}\n.one-line {\r\n\toverflow: hidden;\r\n\twhite-space: nowrap;\r\n\ttext-overflow: ellipsis;\n}\n.font-weight {\r\n\tfont-weight: 500;\n}\n.font-gray {\r\n\tcolor: #4A4A4A;\n}\n.font-red {\r\n\tcolor: #f00;\n}\n.font-gray-white {\r\n\tcolor: #DDDDDD;\n}\n.font-glod {\r\n\tcolor: #bda57e;\n}\n.font-18 {\r\n\tfont-size: 18px;\n}\n.font-16 {\r\n\tfont-size: 16px;\n}\n.font-14 {\r\n\tfont-size: 14px;\n}\n.font-13 {\r\n\tfont-size: 13px;\n}\n.font-12 {\r\n\tfont-size: 12px;\n}\n.font-white {\r\n\tcolor: #fff;\n}\n.border-right {\r\n\tborder-right: 1px solid #D9D9D9;\n}\n.border-top {\r\n\tborder-top: 1px solid #D9D9D9;\n}\n.bc-black {\r\n\tbackground: #000;\n}\n.text-center {\r\n\ttext-align: center;\n}\n.margin-top-10 {\r\n\tmargin-top: 10px;\n}\n.text-right {\r\n\ttext-align: right;\n}\n.text-left {\r\n\ttext-align: left;\n}\n.bc-orange {\r\n\tbackground: #fe7704;\n}\n.font-black {\r\n\tcolor: #000;\n}\n.float-right {\r\n\tfloat: right\n}\n.float-lfet {\r\n\tfloat: left\n}\r\n\r\n/* 字体颜色类 */\n.text-info,\r\n.text-muted {\r\n\tcolor: #777;\n}\n.text-primary {\r\n\tcolor: #337ab7\n}\n.text-success {\r\n\tcolor: #3c763d\n}\n.text-warning {\r\n\tcolor: #8a6d3b\n}\n.text-danger {\r\n\tcolor: #a94442\n}\n.padding-2 {\r\n\tpadding: 2px;\n}\n.padding-5 {\r\n\tpadding: 5px;\n}\n.border-right-1 {\r\n\tborder-right: 1px solid #DDDDDD;\n}\n.display-inline {\r\n\tdisplay: inline-block;\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ "v9Bq":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("Lmbg");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("rnZg")("72f498a6", content, true);

/***/ }),

/***/ "w5p7":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var defaults = __webpack_require__("SiL4");
var utils = __webpack_require__("oDjy");
var InterceptorManager = __webpack_require__("o6vB");
var dispatchRequest = __webpack_require__("pjov");
var isAbsoluteURL = __webpack_require__("kmeC");
var combineURLs = __webpack_require__("5SZA");

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

  config = utils.merge(defaults, this.defaults, { method: 'get' }, config);

  // Support baseURL config
  if (config.baseURL && !isAbsoluteURL(config.url)) {
    config.url = combineURLs(config.baseURL, config.url);
  }

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
utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
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

/***/ "xyfH":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  props: {
    backgroundImage: {
      type: String,
      default: ''
    }
  },
  computed: {
    style: function style() {
      return {
        backgroundImage: 'url(' + this.backgroundImage + ')'
      };
    }
  }
};

/***/ }),

/***/ "y+uz":
/***/ (function(module, exports) {

/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
module.exports = function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}


/***/ }),

/***/ "yJAG":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Cancel = __webpack_require__("aJcp");

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

/***/ "ynE7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_vux_loader_1_2_1_vux_loader_src_script_loader_js_vux_loader_1_2_1_vux_loader_src_script_loader_js_vue_loader_13_7_1_vue_loader_lib_selector_type_script_index_0_uploader_vue__ = __webpack_require__("pNpD");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_vux_loader_1_2_1_vux_loader_src_script_loader_js_vux_loader_1_2_1_vux_loader_src_script_loader_js_vue_loader_13_7_1_vue_loader_lib_selector_type_script_index_0_uploader_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_vux_loader_1_2_1_vux_loader_src_script_loader_js_vux_loader_1_2_1_vux_loader_src_script_loader_js_vue_loader_13_7_1_vue_loader_lib_selector_type_script_index_0_uploader_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_vux_loader_1_2_1_vux_loader_src_script_loader_js_vux_loader_1_2_1_vux_loader_src_script_loader_js_vue_loader_13_7_1_vue_loader_lib_selector_type_script_index_0_uploader_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_vux_loader_1_2_1_vux_loader_src_script_loader_js_vux_loader_1_2_1_vux_loader_src_script_loader_js_vue_loader_13_7_1_vue_loader_lib_selector_type_script_index_0_uploader_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_vux_loader_1_2_1_vux_loader_src_script_loader_js_vue_loader_13_7_1_vue_loader_lib_selector_type_script_index_0_uploader_vue__ = __webpack_require__("Orwr");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_vux_loader_1_2_1_vux_loader_src_script_loader_js_vue_loader_13_7_1_vue_loader_lib_selector_type_script_index_0_uploader_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__babel_loader_vux_loader_1_2_1_vux_loader_src_script_loader_js_vue_loader_13_7_1_vue_loader_lib_selector_type_script_index_0_uploader_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__vue_loader_13_7_1_vue_loader_lib_template_compiler_index_id_data_v_e15cacd4_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_vux_loader_1_2_1_vux_loader_src_before_template_compiler_loader_js_vux_loader_1_2_1_vux_loader_src_template_loader_js_vue_loader_13_7_1_vue_loader_lib_selector_type_template_index_0_uploader_vue__ = __webpack_require__("eX4u");
function injectStyle (ssrContext) {
  __webpack_require__("v9Bq")
}
var normalizeComponent = __webpack_require__("Z0/y")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-e15cacd4"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_1__babel_loader_vux_loader_1_2_1_vux_loader_src_script_loader_js_vue_loader_13_7_1_vue_loader_lib_selector_type_script_index_0_uploader_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_2__vue_loader_13_7_1_vue_loader_lib_template_compiler_index_id_data_v_e15cacd4_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_vux_loader_1_2_1_vux_loader_src_before_template_compiler_loader_js_vux_loader_1_2_1_vux_loader_src_template_loader_js_vue_loader_13_7_1_vue_loader_lib_selector_type_template_index_0_uploader_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "zP4l":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__("oDjy");

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
      parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
    }
  });

  return parsed;
};


/***/ })

});
//# sourceMappingURL=3.f21cfa628872d1bb7bb9.js.map