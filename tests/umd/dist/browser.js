(function () {
	'use strict';

	var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

	function unwrapExports (x) {
		return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
	}

	function createCommonjsModule(fn, module) {
		return module = { exports: {} }, fn(module, module.exports), module.exports;
	}

	var rudderSdkJsDevelop = createCommonjsModule(function (module, exports) {
	(function (global, factory) {
	   factory(exports) ;
	}(commonjsGlobal, (function (exports) {
	  function _typeof(obj) {
	    "@babel/helpers - typeof";

	    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
	      _typeof = function (obj) {
	        return typeof obj;
	      };
	    } else {
	      _typeof = function (obj) {
	        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
	      };
	    }

	    return _typeof(obj);
	  }

	  function _classCallCheck(instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	      throw new TypeError("Cannot call a class as a function");
	    }
	  }

	  function _defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];
	      descriptor.enumerable = descriptor.enumerable || false;
	      descriptor.configurable = true;
	      if ("value" in descriptor) descriptor.writable = true;
	      Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }

	  function _createClass(Constructor, protoProps, staticProps) {
	    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
	    if (staticProps) _defineProperties(Constructor, staticProps);
	    return Constructor;
	  }

	  function _defineProperty(obj, key, value) {
	    if (key in obj) {
	      Object.defineProperty(obj, key, {
	        value: value,
	        enumerable: true,
	        configurable: true,
	        writable: true
	      });
	    } else {
	      obj[key] = value;
	    }

	    return obj;
	  }

	  function ownKeys(object, enumerableOnly) {
	    var keys = Object.keys(object);

	    if (Object.getOwnPropertySymbols) {
	      var symbols = Object.getOwnPropertySymbols(object);
	      if (enumerableOnly) symbols = symbols.filter(function (sym) {
	        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
	      });
	      keys.push.apply(keys, symbols);
	    }

	    return keys;
	  }

	  function _objectSpread2(target) {
	    for (var i = 1; i < arguments.length; i++) {
	      var source = arguments[i] != null ? arguments[i] : {};

	      if (i % 2) {
	        ownKeys(Object(source), true).forEach(function (key) {
	          _defineProperty(target, key, source[key]);
	        });
	      } else if (Object.getOwnPropertyDescriptors) {
	        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
	      } else {
	        ownKeys(Object(source)).forEach(function (key) {
	          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
	        });
	      }
	    }

	    return target;
	  }

	  function _toConsumableArray(arr) {
	    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
	  }

	  function _arrayWithoutHoles(arr) {
	    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
	  }

	  function _iterableToArray(iter) {
	    if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
	  }

	  function _unsupportedIterableToArray(o, minLen) {
	    if (!o) return;
	    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
	    var n = Object.prototype.toString.call(o).slice(8, -1);
	    if (n === "Object" && o.constructor) n = o.constructor.name;
	    if (n === "Map" || n === "Set") return Array.from(o);
	    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
	  }

	  function _arrayLikeToArray(arr, len) {
	    if (len == null || len > arr.length) len = arr.length;

	    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

	    return arr2;
	  }

	  function _nonIterableSpread() {
	    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
	  }

	  var commonjsGlobal$1 = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof commonjsGlobal !== 'undefined' ? commonjsGlobal : typeof self !== 'undefined' ? self : {};

	  function createCommonjsModule(fn, module) {
	  	return module = { exports: {} }, fn(module, module.exports), module.exports;
	  }

	  var componentEmitter = createCommonjsModule(function (module) {
	    /**
	     * Expose `Emitter`.
	     */
	    {
	      module.exports = Emitter;
	    }
	    /**
	     * Initialize a new `Emitter`.
	     *
	     * @api public
	     */


	    function Emitter(obj) {
	      if (obj) return mixin(obj);
	    }
	    /**
	     * Mixin the emitter properties.
	     *
	     * @param {Object} obj
	     * @return {Object}
	     * @api private
	     */

	    function mixin(obj) {
	      for (var key in Emitter.prototype) {
	        obj[key] = Emitter.prototype[key];
	      }

	      return obj;
	    }
	    /**
	     * Listen on the given `event` with `fn`.
	     *
	     * @param {String} event
	     * @param {Function} fn
	     * @return {Emitter}
	     * @api public
	     */


	    Emitter.prototype.on = Emitter.prototype.addEventListener = function (event, fn) {
	      this._callbacks = this._callbacks || {};
	      (this._callbacks['$' + event] = this._callbacks['$' + event] || []).push(fn);
	      return this;
	    };
	    /**
	     * Adds an `event` listener that will be invoked a single
	     * time then automatically removed.
	     *
	     * @param {String} event
	     * @param {Function} fn
	     * @return {Emitter}
	     * @api public
	     */


	    Emitter.prototype.once = function (event, fn) {
	      function on() {
	        this.off(event, on);
	        fn.apply(this, arguments);
	      }

	      on.fn = fn;
	      this.on(event, on);
	      return this;
	    };
	    /**
	     * Remove the given callback for `event` or all
	     * registered callbacks.
	     *
	     * @param {String} event
	     * @param {Function} fn
	     * @return {Emitter}
	     * @api public
	     */


	    Emitter.prototype.off = Emitter.prototype.removeListener = Emitter.prototype.removeAllListeners = Emitter.prototype.removeEventListener = function (event, fn) {
	      this._callbacks = this._callbacks || {}; // all

	      if (0 == arguments.length) {
	        this._callbacks = {};
	        return this;
	      } // specific event


	      var callbacks = this._callbacks['$' + event];
	      if (!callbacks) return this; // remove all handlers

	      if (1 == arguments.length) {
	        delete this._callbacks['$' + event];
	        return this;
	      } // remove specific handler


	      var cb;

	      for (var i = 0; i < callbacks.length; i++) {
	        cb = callbacks[i];

	        if (cb === fn || cb.fn === fn) {
	          callbacks.splice(i, 1);
	          break;
	        }
	      } // Remove event specific arrays for event types that no
	      // one is subscribed for to avoid memory leak.


	      if (callbacks.length === 0) {
	        delete this._callbacks['$' + event];
	      }

	      return this;
	    };
	    /**
	     * Emit `event` with the given args.
	     *
	     * @param {String} event
	     * @param {Mixed} ...
	     * @return {Emitter}
	     */


	    Emitter.prototype.emit = function (event) {
	      this._callbacks = this._callbacks || {};
	      var args = new Array(arguments.length - 1),
	          callbacks = this._callbacks['$' + event];

	      for (var i = 1; i < arguments.length; i++) {
	        args[i - 1] = arguments[i];
	      }

	      if (callbacks) {
	        callbacks = callbacks.slice(0);

	        for (var i = 0, len = callbacks.length; i < len; ++i) {
	          callbacks[i].apply(this, args);
	        }
	      }

	      return this;
	    };
	    /**
	     * Return array of callbacks for `event`.
	     *
	     * @param {String} event
	     * @return {Array}
	     * @api public
	     */


	    Emitter.prototype.listeners = function (event) {
	      this._callbacks = this._callbacks || {};
	      return this._callbacks['$' + event] || [];
	    };
	    /**
	     * Check if this emitter has `event` handlers.
	     *
	     * @param {String} event
	     * @return {Boolean}
	     * @api public
	     */


	    Emitter.prototype.hasListeners = function (event) {
	      return !!this.listeners(event).length;
	    };
	  });

	  var after_1 = after;

	  function after(count, callback, err_cb) {
	    var bail = false;
	    err_cb = err_cb || noop;
	    proxy.count = count;
	    return count === 0 ? callback() : proxy;

	    function proxy(err, result) {
	      if (proxy.count <= 0) {
	        throw new Error('after called too many times');
	      }

	      --proxy.count; // after first error, rest are passed to err_cb

	      if (err) {
	        bail = true;
	        callback(err); // future error callbacks will go to error handler

	        callback = err_cb;
	      } else if (proxy.count === 0 && !bail) {
	        callback(null, result);
	      }
	    }
	  }

	  function noop() {}

	  var trim_1 = createCommonjsModule(function (module, exports) {
	    exports = module.exports = trim;

	    function trim(str) {
	      return str.replace(/^\s*|\s*$/g, '');
	    }

	    exports.left = function (str) {
	      return str.replace(/^\s*/, '');
	    };

	    exports.right = function (str) {
	      return str.replace(/\s*$/, '');
	    };
	  });
	  var trim_2 = trim_1.left;
	  var trim_3 = trim_1.right;

	  /**
	   * toString ref.
	   */
	  var toString = Object.prototype.toString;
	  /**
	   * Return the type of `val`.
	   *
	   * @param {Mixed} val
	   * @return {String}
	   * @api public
	   */

	  var componentType = function componentType(val) {
	    switch (toString.call(val)) {
	      case '[object Date]':
	        return 'date';

	      case '[object RegExp]':
	        return 'regexp';

	      case '[object Arguments]':
	        return 'arguments';

	      case '[object Array]':
	        return 'array';

	      case '[object Error]':
	        return 'error';
	    }

	    if (val === null) return 'null';
	    if (val === undefined) return 'undefined';
	    if (val !== val) return 'nan';
	    if (val && val.nodeType === 1) return 'element';
	    val = val.valueOf ? val.valueOf() : Object.prototype.valueOf.apply(val);
	    return _typeof(val);
	  };

	  /**
	   * Module dependencies.
	   */

	  var pattern = /(\w+)\[(\d+)\]/;
	  /**
	   * Safely encode the given string
	   * 
	   * @param {String} str
	   * @return {String}
	   * @api private
	   */

	  var encode = function encode(str) {
	    try {
	      return encodeURIComponent(str);
	    } catch (e) {
	      return str;
	    }
	  };
	  /**
	   * Safely decode the string
	   * 
	   * @param {String} str
	   * @return {String}
	   * @api private
	   */


	  var decode = function decode(str) {
	    try {
	      return decodeURIComponent(str.replace(/\+/g, ' '));
	    } catch (e) {
	      return str;
	    }
	  };
	  /**
	   * Parse the given query `str`.
	   *
	   * @param {String} str
	   * @return {Object}
	   * @api public
	   */


	  var parse = function parse(str) {
	    if ('string' != typeof str) return {};
	    str = trim_1(str);
	    if ('' == str) return {};
	    if ('?' == str.charAt(0)) str = str.slice(1);
	    var obj = {};
	    var pairs = str.split('&');

	    for (var i = 0; i < pairs.length; i++) {
	      var parts = pairs[i].split('=');
	      var key = decode(parts[0]);
	      var m;

	      if (m = pattern.exec(key)) {
	        obj[m[1]] = obj[m[1]] || [];
	        obj[m[1]][m[2]] = decode(parts[1]);
	        continue;
	      }

	      obj[parts[0]] = null == parts[1] ? '' : decode(parts[1]);
	    }

	    return obj;
	  };
	  /**
	   * Stringify the given `obj`.
	   *
	   * @param {Object} obj
	   * @return {String}
	   * @api public
	   */


	  var stringify = function stringify(obj) {
	    if (!obj) return '';
	    var pairs = [];

	    for (var key in obj) {
	      var value = obj[key];

	      if ('array' == componentType(value)) {
	        for (var i = 0; i < value.length; ++i) {
	          pairs.push(encode(key + '[' + i + ']') + '=' + encode(value[i]));
	        }

	        continue;
	      }

	      pairs.push(encode(key) + '=' + encode(obj[key]));
	    }

	    return pairs.join('&');
	  };

	  var componentQuerystring = {
	    parse: parse,
	    stringify: stringify
	  };

	  var lodash_merge = createCommonjsModule(function (module, exports) {
	    /**
	     * Lodash (Custom Build) <https://lodash.com/>
	     * Build: `lodash modularize exports="npm" -o ./`
	     * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
	     * Released under MIT license <https://lodash.com/license>
	     * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	     * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	     */

	    /** Used as the size to enable large array optimizations. */
	    var LARGE_ARRAY_SIZE = 200;
	    /** Used to stand-in for `undefined` hash values. */

	    var HASH_UNDEFINED = '__lodash_hash_undefined__';
	    /** Used to detect hot functions by number of calls within a span of milliseconds. */

	    var HOT_COUNT = 800,
	        HOT_SPAN = 16;
	    /** Used as references for various `Number` constants. */

	    var MAX_SAFE_INTEGER = 9007199254740991;
	    /** `Object#toString` result references. */

	    var argsTag = '[object Arguments]',
	        arrayTag = '[object Array]',
	        asyncTag = '[object AsyncFunction]',
	        boolTag = '[object Boolean]',
	        dateTag = '[object Date]',
	        errorTag = '[object Error]',
	        funcTag = '[object Function]',
	        genTag = '[object GeneratorFunction]',
	        mapTag = '[object Map]',
	        numberTag = '[object Number]',
	        nullTag = '[object Null]',
	        objectTag = '[object Object]',
	        proxyTag = '[object Proxy]',
	        regexpTag = '[object RegExp]',
	        setTag = '[object Set]',
	        stringTag = '[object String]',
	        undefinedTag = '[object Undefined]',
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
	    /**
	     * Used to match `RegExp`
	     * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
	     */

	    var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
	    /** Used to detect host constructors (Safari). */

	    var reIsHostCtor = /^\[object .+?Constructor\]$/;
	    /** Used to detect unsigned integer values. */

	    var reIsUint = /^(?:0|[1-9]\d*)$/;
	    /** Used to identify `toStringTag` values of typed arrays. */

	    var typedArrayTags = {};
	    typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
	    typedArrayTags[argsTag] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;
	    /** Detect free variable `global` from Node.js. */

	    var freeGlobal = _typeof(commonjsGlobal$1) == 'object' && commonjsGlobal$1 && commonjsGlobal$1.Object === Object && commonjsGlobal$1;
	    /** Detect free variable `self`. */

	    var freeSelf = (typeof self === "undefined" ? "undefined" : _typeof(self)) == 'object' && self && self.Object === Object && self;
	    /** Used as a reference to the global object. */

	    var root = freeGlobal || freeSelf || Function('return this')();
	    /** Detect free variable `exports`. */

	    var freeExports =  exports && !exports.nodeType && exports;
	    /** Detect free variable `module`. */

	    var freeModule = freeExports && 'object' == 'object' && module && !module.nodeType && module;
	    /** Detect the popular CommonJS extension `module.exports`. */

	    var moduleExports = freeModule && freeModule.exports === freeExports;
	    /** Detect free variable `process` from Node.js. */

	    var freeProcess = moduleExports && freeGlobal.process;
	    /** Used to access faster Node.js helpers. */

	    var nodeUtil = function () {
	      try {
	        // Use `util.types` for Node.js 10+.
	        var types = freeModule && freeModule.require && freeModule.require('util').types;

	        if (types) {
	          return types;
	        } // Legacy `process.binding('util')` for Node.js < 10.


	        return freeProcess && freeProcess.binding && freeProcess.binding('util');
	      } catch (e) {}
	    }();
	    /* Node.js helper references. */


	    var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;
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
	        case 0:
	          return func.call(thisArg);

	        case 1:
	          return func.call(thisArg, args[0]);

	        case 2:
	          return func.call(thisArg, args[0], args[1]);

	        case 3:
	          return func.call(thisArg, args[0], args[1], args[2]);
	      }

	      return func.apply(thisArg, args);
	    }
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
	    /**
	     * The base implementation of `_.unary` without support for storing metadata.
	     *
	     * @private
	     * @param {Function} func The function to cap arguments for.
	     * @returns {Function} Returns the new capped function.
	     */


	    function baseUnary(func) {
	      return function (value) {
	        return func(value);
	      };
	    }
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
	    /**
	     * Creates a unary function that invokes `func` with its argument transformed.
	     *
	     * @private
	     * @param {Function} func The function to wrap.
	     * @param {Function} transform The argument transform.
	     * @returns {Function} Returns the new function.
	     */


	    function overArg(func, transform) {
	      return function (arg) {
	        return func(transform(arg));
	      };
	    }
	    /** Used for built-in method references. */


	    var arrayProto = Array.prototype,
	        funcProto = Function.prototype,
	        objectProto = Object.prototype;
	    /** Used to detect overreaching core-js shims. */

	    var coreJsData = root['__core-js_shared__'];
	    /** Used to resolve the decompiled source of functions. */

	    var funcToString = funcProto.toString;
	    /** Used to check objects for own properties. */

	    var hasOwnProperty = objectProto.hasOwnProperty;
	    /** Used to detect methods masquerading as native. */

	    var maskSrcKey = function () {
	      var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
	      return uid ? 'Symbol(src)_1.' + uid : '';
	    }();
	    /**
	     * Used to resolve the
	     * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	     * of values.
	     */


	    var nativeObjectToString = objectProto.toString;
	    /** Used to infer the `Object` constructor. */

	    var objectCtorString = funcToString.call(Object);
	    /** Used to detect if a method is native. */

	    var reIsNative = RegExp('^' + funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&').replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$');
	    /** Built-in value references. */

	    var Buffer = moduleExports ? root.Buffer : undefined,
	        _Symbol = root.Symbol,
	        Uint8Array = root.Uint8Array,
	        allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined,
	        getPrototype = overArg(Object.getPrototypeOf, Object),
	        objectCreate = Object.create,
	        propertyIsEnumerable = objectProto.propertyIsEnumerable,
	        splice = arrayProto.splice,
	        symToStringTag = _Symbol ? _Symbol.toStringTag : undefined;

	    var defineProperty = function () {
	      try {
	        var func = getNative(Object, 'defineProperty');
	        func({}, '', {});
	        return func;
	      } catch (e) {}
	    }();
	    /* Built-in method references for those with the same name as other `lodash` methods. */


	    var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined,
	        nativeMax = Math.max,
	        nativeNow = Date.now;
	    /* Built-in method references that are verified to be native. */

	    var Map = getNative(root, 'Map'),
	        nativeCreate = getNative(Object, 'create');
	    /**
	     * The base implementation of `_.create` without support for assigning
	     * properties to the created object.
	     *
	     * @private
	     * @param {Object} proto The object to inherit from.
	     * @returns {Object} Returns the new object.
	     */

	    var baseCreate = function () {
	      function object() {}

	      return function (proto) {
	        if (!isObject(proto)) {
	          return {};
	        }

	        if (objectCreate) {
	          return objectCreate(proto);
	        }

	        object.prototype = proto;
	        var result = new object();
	        object.prototype = undefined;
	        return result;
	      };
	    }();
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
	      return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
	    }
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
	      data[key] = nativeCreate && value === undefined ? HASH_UNDEFINED : value;
	      return this;
	    } // Add methods to `Hash`.


	    Hash.prototype.clear = hashClear;
	    Hash.prototype['delete'] = hashDelete;
	    Hash.prototype.get = hashGet;
	    Hash.prototype.has = hashHas;
	    Hash.prototype.set = hashSet;
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
	    } // Add methods to `ListCache`.


	    ListCache.prototype.clear = listCacheClear;
	    ListCache.prototype['delete'] = listCacheDelete;
	    ListCache.prototype.get = listCacheGet;
	    ListCache.prototype.has = listCacheHas;
	    ListCache.prototype.set = listCacheSet;
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
	        'hash': new Hash(),
	        'map': new (Map || ListCache)(),
	        'string': new Hash()
	      };
	    }
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
	    } // Add methods to `MapCache`.


	    MapCache.prototype.clear = mapCacheClear;
	    MapCache.prototype['delete'] = mapCacheDelete;
	    MapCache.prototype.get = mapCacheGet;
	    MapCache.prototype.has = mapCacheHas;
	    MapCache.prototype.set = mapCacheSet;
	    /**
	     * Creates a stack cache object to store key-value pairs.
	     *
	     * @private
	     * @constructor
	     * @param {Array} [entries] The key-value pairs to cache.
	     */

	    function Stack(entries) {
	      var data = this.__data__ = new ListCache(entries);
	      this.size = data.size;
	    }
	    /**
	     * Removes all key-value entries from the stack.
	     *
	     * @private
	     * @name clear
	     * @memberOf Stack
	     */


	    function stackClear() {
	      this.__data__ = new ListCache();
	      this.size = 0;
	    }
	    /**
	     * Removes `key` and its value from the stack.
	     *
	     * @private
	     * @name delete
	     * @memberOf Stack
	     * @param {string} key The key of the value to remove.
	     * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	     */


	    function stackDelete(key) {
	      var data = this.__data__,
	          result = data['delete'](key);
	      this.size = data.size;
	      return result;
	    }
	    /**
	     * Gets the stack value for `key`.
	     *
	     * @private
	     * @name get
	     * @memberOf Stack
	     * @param {string} key The key of the value to get.
	     * @returns {*} Returns the entry value.
	     */


	    function stackGet(key) {
	      return this.__data__.get(key);
	    }
	    /**
	     * Checks if a stack value for `key` exists.
	     *
	     * @private
	     * @name has
	     * @memberOf Stack
	     * @param {string} key The key of the entry to check.
	     * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	     */


	    function stackHas(key) {
	      return this.__data__.has(key);
	    }
	    /**
	     * Sets the stack `key` to `value`.
	     *
	     * @private
	     * @name set
	     * @memberOf Stack
	     * @param {string} key The key of the value to set.
	     * @param {*} value The value to set.
	     * @returns {Object} Returns the stack cache instance.
	     */


	    function stackSet(key, value) {
	      var data = this.__data__;

	      if (data instanceof ListCache) {
	        var pairs = data.__data__;

	        if (!Map || pairs.length < LARGE_ARRAY_SIZE - 1) {
	          pairs.push([key, value]);
	          this.size = ++data.size;
	          return this;
	        }

	        data = this.__data__ = new MapCache(pairs);
	      }

	      data.set(key, value);
	      this.size = data.size;
	      return this;
	    } // Add methods to `Stack`.


	    Stack.prototype.clear = stackClear;
	    Stack.prototype['delete'] = stackDelete;
	    Stack.prototype.get = stackGet;
	    Stack.prototype.has = stackHas;
	    Stack.prototype.set = stackSet;
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
	        if ((inherited || hasOwnProperty.call(value, key)) && !(skipIndexes && ( // Safari 9 has enumerable `arguments.length` in strict mode.
	        key == 'length' || // Node.js 0.10 has enumerable non-index properties on buffers.
	        isBuff && (key == 'offset' || key == 'parent') || // PhantomJS 2 has enumerable non-index properties on typed arrays.
	        isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset') || // Skip index properties.
	        isIndex(key, length)))) {
	          result.push(key);
	        }
	      }

	      return result;
	    }
	    /**
	     * This function is like `assignValue` except that it doesn't assign
	     * `undefined` values.
	     *
	     * @private
	     * @param {Object} object The object to modify.
	     * @param {string} key The key of the property to assign.
	     * @param {*} value The value to assign.
	     */


	    function assignMergeValue(object, key, value) {
	      if (value !== undefined && !eq(object[key], value) || value === undefined && !(key in object)) {
	        baseAssignValue(object, key, value);
	      }
	    }
	    /**
	     * Assigns `value` to `key` of `object` if the existing value is not equivalent
	     * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	     * for equality comparisons.
	     *
	     * @private
	     * @param {Object} object The object to modify.
	     * @param {string} key The key of the property to assign.
	     * @param {*} value The value to assign.
	     */


	    function assignValue(object, key, value) {
	      var objValue = object[key];

	      if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) || value === undefined && !(key in object)) {
	        baseAssignValue(object, key, value);
	      }
	    }
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
	    /**
	     * The base implementation of `assignValue` and `assignMergeValue` without
	     * value checks.
	     *
	     * @private
	     * @param {Object} object The object to modify.
	     * @param {string} key The key of the property to assign.
	     * @param {*} value The value to assign.
	     */


	    function baseAssignValue(object, key, value) {
	      if (key == '__proto__' && defineProperty) {
	        defineProperty(object, key, {
	          'configurable': true,
	          'enumerable': true,
	          'value': value,
	          'writable': true
	        });
	      } else {
	        object[key] = value;
	      }
	    }
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

	      return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
	    }
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
	    /**
	     * The base implementation of `_.isTypedArray` without Node.js optimizations.
	     *
	     * @private
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
	     */


	    function baseIsTypedArray(value) {
	      return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
	    }
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
	    /**
	     * The base implementation of `_.merge` without support for multiple sources.
	     *
	     * @private
	     * @param {Object} object The destination object.
	     * @param {Object} source The source object.
	     * @param {number} srcIndex The index of `source`.
	     * @param {Function} [customizer] The function to customize merged values.
	     * @param {Object} [stack] Tracks traversed source values and their merged
	     *  counterparts.
	     */


	    function baseMerge(object, source, srcIndex, customizer, stack) {
	      if (object === source) {
	        return;
	      }

	      baseFor(source, function (srcValue, key) {
	        stack || (stack = new Stack());

	        if (isObject(srcValue)) {
	          baseMergeDeep(object, source, key, srcIndex, baseMerge, customizer, stack);
	        } else {
	          var newValue = customizer ? customizer(safeGet(object, key), srcValue, key + '', object, source, stack) : undefined;

	          if (newValue === undefined) {
	            newValue = srcValue;
	          }

	          assignMergeValue(object, key, newValue);
	        }
	      }, keysIn);
	    }
	    /**
	     * A specialized version of `baseMerge` for arrays and objects which performs
	     * deep merges and tracks traversed objects enabling objects with circular
	     * references to be merged.
	     *
	     * @private
	     * @param {Object} object The destination object.
	     * @param {Object} source The source object.
	     * @param {string} key The key of the value to merge.
	     * @param {number} srcIndex The index of `source`.
	     * @param {Function} mergeFunc The function to merge values.
	     * @param {Function} [customizer] The function to customize assigned values.
	     * @param {Object} [stack] Tracks traversed source values and their merged
	     *  counterparts.
	     */


	    function baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack) {
	      var objValue = safeGet(object, key),
	          srcValue = safeGet(source, key),
	          stacked = stack.get(srcValue);

	      if (stacked) {
	        assignMergeValue(object, key, stacked);
	        return;
	      }

	      var newValue = customizer ? customizer(objValue, srcValue, key + '', object, source, stack) : undefined;
	      var isCommon = newValue === undefined;

	      if (isCommon) {
	        var isArr = isArray(srcValue),
	            isBuff = !isArr && isBuffer(srcValue),
	            isTyped = !isArr && !isBuff && isTypedArray(srcValue);
	        newValue = srcValue;

	        if (isArr || isBuff || isTyped) {
	          if (isArray(objValue)) {
	            newValue = objValue;
	          } else if (isArrayLikeObject(objValue)) {
	            newValue = copyArray(objValue);
	          } else if (isBuff) {
	            isCommon = false;
	            newValue = cloneBuffer(srcValue, true);
	          } else if (isTyped) {
	            isCommon = false;
	            newValue = cloneTypedArray(srcValue, true);
	          } else {
	            newValue = [];
	          }
	        } else if (isPlainObject(srcValue) || isArguments(srcValue)) {
	          newValue = objValue;

	          if (isArguments(objValue)) {
	            newValue = toPlainObject(objValue);
	          } else if (!isObject(objValue) || isFunction(objValue)) {
	            newValue = initCloneObject(srcValue);
	          }
	        } else {
	          isCommon = false;
	        }
	      }

	      if (isCommon) {
	        // Recursively merge objects and arrays (susceptible to call stack limits).
	        stack.set(srcValue, newValue);
	        mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
	        stack['delete'](srcValue);
	      }

	      assignMergeValue(object, key, newValue);
	    }
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
	    /**
	     * The base implementation of `setToString` without support for hot loop shorting.
	     *
	     * @private
	     * @param {Function} func The function to modify.
	     * @param {Function} string The `toString` result.
	     * @returns {Function} Returns `func`.
	     */


	    var baseSetToString = !defineProperty ? identity : function (func, string) {
	      return defineProperty(func, 'toString', {
	        'configurable': true,
	        'enumerable': false,
	        'value': constant(string),
	        'writable': true
	      });
	    };
	    /**
	     * Creates a clone of  `buffer`.
	     *
	     * @private
	     * @param {Buffer} buffer The buffer to clone.
	     * @param {boolean} [isDeep] Specify a deep clone.
	     * @returns {Buffer} Returns the cloned buffer.
	     */

	    function cloneBuffer(buffer, isDeep) {
	      if (isDeep) {
	        return buffer.slice();
	      }

	      var length = buffer.length,
	          result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);
	      buffer.copy(result);
	      return result;
	    }
	    /**
	     * Creates a clone of `arrayBuffer`.
	     *
	     * @private
	     * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
	     * @returns {ArrayBuffer} Returns the cloned array buffer.
	     */


	    function cloneArrayBuffer(arrayBuffer) {
	      var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
	      new Uint8Array(result).set(new Uint8Array(arrayBuffer));
	      return result;
	    }
	    /**
	     * Creates a clone of `typedArray`.
	     *
	     * @private
	     * @param {Object} typedArray The typed array to clone.
	     * @param {boolean} [isDeep] Specify a deep clone.
	     * @returns {Object} Returns the cloned typed array.
	     */


	    function cloneTypedArray(typedArray, isDeep) {
	      var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
	      return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
	    }
	    /**
	     * Copies the values of `source` to `array`.
	     *
	     * @private
	     * @param {Array} source The array to copy values from.
	     * @param {Array} [array=[]] The array to copy values to.
	     * @returns {Array} Returns `array`.
	     */


	    function copyArray(source, array) {
	      var index = -1,
	          length = source.length;
	      array || (array = Array(length));

	      while (++index < length) {
	        array[index] = source[index];
	      }

	      return array;
	    }
	    /**
	     * Copies properties of `source` to `object`.
	     *
	     * @private
	     * @param {Object} source The object to copy properties from.
	     * @param {Array} props The property identifiers to copy.
	     * @param {Object} [object={}] The object to copy properties to.
	     * @param {Function} [customizer] The function to customize copied values.
	     * @returns {Object} Returns `object`.
	     */


	    function copyObject(source, props, object, customizer) {
	      var isNew = !object;
	      object || (object = {});
	      var index = -1,
	          length = props.length;

	      while (++index < length) {
	        var key = props[index];
	        var newValue = customizer ? customizer(object[key], source[key], key, object, source) : undefined;

	        if (newValue === undefined) {
	          newValue = source[key];
	        }

	        if (isNew) {
	          baseAssignValue(object, key, newValue);
	        } else {
	          assignValue(object, key, newValue);
	        }
	      }

	      return object;
	    }
	    /**
	     * Creates a function like `_.assign`.
	     *
	     * @private
	     * @param {Function} assigner The function to assign values.
	     * @returns {Function} Returns the new assigner function.
	     */


	    function createAssigner(assigner) {
	      return baseRest(function (object, sources) {
	        var index = -1,
	            length = sources.length,
	            customizer = length > 1 ? sources[length - 1] : undefined,
	            guard = length > 2 ? sources[2] : undefined;
	        customizer = assigner.length > 3 && typeof customizer == 'function' ? (length--, customizer) : undefined;

	        if (guard && isIterateeCall(sources[0], sources[1], guard)) {
	          customizer = length < 3 ? undefined : customizer;
	          length = 1;
	        }

	        object = Object(object);

	        while (++index < length) {
	          var source = sources[index];

	          if (source) {
	            assigner(object, source, index, customizer);
	          }
	        }

	        return object;
	      });
	    }
	    /**
	     * Creates a base function for methods like `_.forIn` and `_.forOwn`.
	     *
	     * @private
	     * @param {boolean} [fromRight] Specify iterating from right to left.
	     * @returns {Function} Returns the new base function.
	     */


	    function createBaseFor(fromRight) {
	      return function (object, iteratee, keysFunc) {
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
	      return isKeyable(key) ? data[typeof key == 'string' ? 'string' : 'hash'] : data.map;
	    }
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
	    /**
	     * Initializes an object clone.
	     *
	     * @private
	     * @param {Object} object The object to clone.
	     * @returns {Object} Returns the initialized clone.
	     */


	    function initCloneObject(object) {
	      return typeof object.constructor == 'function' && !isPrototype(object) ? baseCreate(getPrototype(object)) : {};
	    }
	    /**
	     * Checks if `value` is a valid array-like index.
	     *
	     * @private
	     * @param {*} value The value to check.
	     * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
	     * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
	     */


	    function isIndex(value, length) {
	      var type = _typeof(value);

	      length = length == null ? MAX_SAFE_INTEGER : length;
	      return !!length && (type == 'number' || type != 'symbol' && reIsUint.test(value)) && value > -1 && value % 1 == 0 && value < length;
	    }
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

	      var type = _typeof(index);

	      if (type == 'number' ? isArrayLike(object) && isIndex(index, object.length) : type == 'string' && index in object) {
	        return eq(object[index], value);
	      }

	      return false;
	    }
	    /**
	     * Checks if `value` is suitable for use as unique object key.
	     *
	     * @private
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
	     */


	    function isKeyable(value) {
	      var type = _typeof(value);

	      return type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean' ? value !== '__proto__' : value === null;
	    }
	    /**
	     * Checks if `func` has its source masked.
	     *
	     * @private
	     * @param {Function} func The function to check.
	     * @returns {boolean} Returns `true` if `func` is masked, else `false`.
	     */


	    function isMasked(func) {
	      return !!maskSrcKey && maskSrcKey in func;
	    }
	    /**
	     * Checks if `value` is likely a prototype object.
	     *
	     * @private
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
	     */


	    function isPrototype(value) {
	      var Ctor = value && value.constructor,
	          proto = typeof Ctor == 'function' && Ctor.prototype || objectProto;
	      return value === proto;
	    }
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
	      start = nativeMax(start === undefined ? func.length - 1 : start, 0);
	      return function () {
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
	    /**
	     * Gets the value at `key`, unless `key` is "__proto__" or "constructor".
	     *
	     * @private
	     * @param {Object} object The object to query.
	     * @param {string} key The key of the property to get.
	     * @returns {*} Returns the property value.
	     */


	    function safeGet(object, key) {
	      if (key === 'constructor' && typeof object[key] === 'function') {
	        return;
	      }

	      if (key == '__proto__') {
	        return;
	      }

	      return object[key];
	    }
	    /**
	     * Sets the `toString` method of `func` to return `string`.
	     *
	     * @private
	     * @param {Function} func The function to modify.
	     * @param {Function} string The `toString` result.
	     * @returns {Function} Returns `func`.
	     */


	    var setToString = shortOut(baseSetToString);
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
	      return function () {
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
	          return func + '';
	        } catch (e) {}
	      }

	      return '';
	    }
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
	      return value === other || value !== value && other !== other;
	    }
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


	    var isArguments = baseIsArguments(function () {
	      return arguments;
	    }()) ? baseIsArguments : function (value) {
	      return isObjectLike(value) && hasOwnProperty.call(value, 'callee') && !propertyIsEnumerable.call(value, 'callee');
	    };
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
	    /**
	     * This method is like `_.isArrayLike` except that it also checks if `value`
	     * is an object.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is an array-like object,
	     *  else `false`.
	     * @example
	     *
	     * _.isArrayLikeObject([1, 2, 3]);
	     * // => true
	     *
	     * _.isArrayLikeObject(document.body.children);
	     * // => true
	     *
	     * _.isArrayLikeObject('abc');
	     * // => false
	     *
	     * _.isArrayLikeObject(_.noop);
	     * // => false
	     */


	    function isArrayLikeObject(value) {
	      return isObjectLike(value) && isArrayLike(value);
	    }
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
	      } // The use of `Object#toString` avoids issues with the `typeof` operator
	      // in Safari 9 which returns 'object' for typed arrays and other constructors.


	      var tag = baseGetTag(value);
	      return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
	    }
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
	      return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
	    }
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
	      var type = _typeof(value);

	      return value != null && (type == 'object' || type == 'function');
	    }
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
	      return value != null && _typeof(value) == 'object';
	    }
	    /**
	     * Checks if `value` is a plain object, that is, an object created by the
	     * `Object` constructor or one with a `[[Prototype]]` of `null`.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.8.0
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
	     * @example
	     *
	     * function Foo() {
	     *   this.a = 1;
	     * }
	     *
	     * _.isPlainObject(new Foo);
	     * // => false
	     *
	     * _.isPlainObject([1, 2, 3]);
	     * // => false
	     *
	     * _.isPlainObject({ 'x': 0, 'y': 0 });
	     * // => true
	     *
	     * _.isPlainObject(Object.create(null));
	     * // => true
	     */


	    function isPlainObject(value) {
	      if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
	        return false;
	      }

	      var proto = getPrototype(value);

	      if (proto === null) {
	        return true;
	      }

	      var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
	      return typeof Ctor == 'function' && Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString;
	    }
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
	    /**
	     * Converts `value` to a plain object flattening inherited enumerable string
	     * keyed properties of `value` to own properties of the plain object.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.0.0
	     * @category Lang
	     * @param {*} value The value to convert.
	     * @returns {Object} Returns the converted plain object.
	     * @example
	     *
	     * function Foo() {
	     *   this.b = 2;
	     * }
	     *
	     * Foo.prototype.c = 3;
	     *
	     * _.assign({ 'a': 1 }, new Foo);
	     * // => { 'a': 1, 'b': 2 }
	     *
	     * _.assign({ 'a': 1 }, _.toPlainObject(new Foo));
	     * // => { 'a': 1, 'b': 2, 'c': 3 }
	     */

	    function toPlainObject(value) {
	      return copyObject(value, keysIn(value));
	    }
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
	    /**
	     * This method is like `_.assign` except that it recursively merges own and
	     * inherited enumerable string keyed properties of source objects into the
	     * destination object. Source properties that resolve to `undefined` are
	     * skipped if a destination value exists. Array and plain object properties
	     * are merged recursively. Other objects and value types are overridden by
	     * assignment. Source objects are applied from left to right. Subsequent
	     * sources overwrite property assignments of previous sources.
	     *
	     * **Note:** This method mutates `object`.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.5.0
	     * @category Object
	     * @param {Object} object The destination object.
	     * @param {...Object} [sources] The source objects.
	     * @returns {Object} Returns `object`.
	     * @example
	     *
	     * var object = {
	     *   'a': [{ 'b': 2 }, { 'd': 4 }]
	     * };
	     *
	     * var other = {
	     *   'a': [{ 'c': 3 }, { 'e': 5 }]
	     * };
	     *
	     * _.merge(object, other);
	     * // => { 'a': [{ 'b': 2, 'c': 3 }, { 'd': 4, 'e': 5 }] }
	     */


	    var merge = createAssigner(function (object, source, srcIndex) {
	      baseMerge(object, source, srcIndex);
	    });
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
	      return function () {
	        return value;
	      };
	    }
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

	    module.exports = merge;
	  });

	  var hop = Object.prototype.hasOwnProperty;
	  var strCharAt = String.prototype.charAt;
	  var toStr = Object.prototype.toString;
	  /**
	   * Returns the character at a given index.
	   *
	   * @param {string} str
	   * @param {number} index
	   * @return {string|undefined}
	   */
	  // TODO: Move to a library

	  var charAt = function charAt(str, index) {
	    return strCharAt.call(str, index);
	  };
	  /**
	   * hasOwnProperty, wrapped as a function.
	   *
	   * @name has
	   * @api private
	   * @param {*} context
	   * @param {string|number} prop
	   * @return {boolean}
	   */
	  // TODO: Move to a library


	  var has = function has(context, prop) {
	    return hop.call(context, prop);
	  };
	  /**
	   * Returns true if a value is a string, otherwise false.
	   *
	   * @name isString
	   * @api private
	   * @param {*} val
	   * @return {boolean}
	   */
	  // TODO: Move to a library


	  var isString = function isString(val) {
	    return toStr.call(val) === '[object String]';
	  };
	  /**
	   * Returns true if a value is array-like, otherwise false. Array-like means a
	   * value is not null, undefined, or a function, and has a numeric `length`
	   * property.
	   *
	   * @name isArrayLike
	   * @api private
	   * @param {*} val
	   * @return {boolean}
	   */
	  // TODO: Move to a library


	  var isArrayLike = function isArrayLike(val) {
	    return val != null && typeof val !== 'function' && typeof val.length === 'number';
	  };
	  /**
	   * indexKeys
	   *
	   * @name indexKeys
	   * @api private
	   * @param {} target
	   * @param {Function} pred
	   * @return {Array}
	   */


	  var indexKeys = function indexKeys(target, pred) {
	    pred = pred || has;
	    var results = [];

	    for (var i = 0, len = target.length; i < len; i += 1) {
	      if (pred(target, i)) {
	        results.push(String(i));
	      }
	    }

	    return results;
	  };
	  /**
	   * Returns an array of an object's owned keys.
	   *
	   * @name objectKeys
	   * @api private
	   * @param {*} target
	   * @param {Function} pred Predicate function used to include/exclude values from
	   * the resulting array.
	   * @return {Array}
	   */


	  var objectKeys = function objectKeys(target, pred) {
	    pred = pred || has;
	    var results = [];

	    for (var key in target) {
	      if (pred(target, key)) {
	        results.push(String(key));
	      }
	    }

	    return results;
	  };
	  /**
	   * Creates an array composed of all keys on the input object. Ignores any non-enumerable properties.
	   * More permissive than the native `Object.keys` function (non-objects will not throw errors).
	   *
	   * @name keys
	   * @api public
	   * @category Object
	   * @param {Object} source The value to retrieve keys from.
	   * @return {Array} An array containing all the input `source`'s keys.
	   * @example
	   * keys({ likes: 'avocado', hates: 'pineapple' });
	   * //=> ['likes', 'pineapple'];
	   *
	   * // Ignores non-enumerable properties
	   * var hasHiddenKey = { name: 'Tim' };
	   * Object.defineProperty(hasHiddenKey, 'hidden', {
	   *   value: 'i am not enumerable!',
	   *   enumerable: false
	   * })
	   * keys(hasHiddenKey);
	   * //=> ['name'];
	   *
	   * // Works on arrays
	   * keys(['a', 'b', 'c']);
	   * //=> ['0', '1', '2']
	   *
	   * // Skips unpopulated indices in sparse arrays
	   * var arr = [1];
	   * arr[4] = 4;
	   * keys(arr);
	   * //=> ['0', '4']
	   */


	  var keys = function keys(source) {
	    if (source == null) {
	      return [];
	    } // IE6-8 compatibility (string)


	    if (isString(source)) {
	      return indexKeys(source, charAt);
	    } // IE6-8 compatibility (arguments)


	    if (isArrayLike(source)) {
	      return indexKeys(source, has);
	    }

	    return objectKeys(source);
	  };
	  /*
	   * Exports.
	   */


	  var keys_1 = keys;

	  /*
	   * Module dependencies.
	   */


	  var objToString = Object.prototype.toString;
	  /**
	   * Tests if a value is a number.
	   *
	   * @name isNumber
	   * @api private
	   * @param {*} val The value to test.
	   * @return {boolean} Returns `true` if `val` is a number, otherwise `false`.
	   */
	  // TODO: Move to library

	  var isNumber = function isNumber(val) {
	    var type = _typeof(val);

	    return type === 'number' || type === 'object' && objToString.call(val) === '[object Number]';
	  };
	  /**
	   * Tests if a value is an array.
	   *
	   * @name isArray
	   * @api private
	   * @param {*} val The value to test.
	   * @return {boolean} Returns `true` if the value is an array, otherwise `false`.
	   */
	  // TODO: Move to library


	  var isArray = typeof Array.isArray === 'function' ? Array.isArray : function isArray(val) {
	    return objToString.call(val) === '[object Array]';
	  };
	  /**
	   * Tests if a value is array-like. Array-like means the value is not a function and has a numeric
	   * `.length` property.
	   *
	   * @name isArrayLike
	   * @api private
	   * @param {*} val
	   * @return {boolean}
	   */
	  // TODO: Move to library

	  var isArrayLike$1 = function isArrayLike(val) {
	    return val != null && (isArray(val) || val !== 'function' && isNumber(val.length));
	  };
	  /**
	   * Internal implementation of `each`. Works on arrays and array-like data structures.
	   *
	   * @name arrayEach
	   * @api private
	   * @param {Function(value, key, collection)} iterator The function to invoke per iteration.
	   * @param {Array} array The array(-like) structure to iterate over.
	   * @return {undefined}
	   */


	  var arrayEach = function arrayEach(iterator, array) {
	    for (var i = 0; i < array.length; i += 1) {
	      // Break iteration early if `iterator` returns `false`
	      if (iterator(array[i], i, array) === false) {
	        break;
	      }
	    }
	  };
	  /**
	   * Internal implementation of `each`. Works on objects.
	   *
	   * @name baseEach
	   * @api private
	   * @param {Function(value, key, collection)} iterator The function to invoke per iteration.
	   * @param {Object} object The object to iterate over.
	   * @return {undefined}
	   */


	  var baseEach = function baseEach(iterator, object) {
	    var ks = keys_1(object);

	    for (var i = 0; i < ks.length; i += 1) {
	      // Break iteration early if `iterator` returns `false`
	      if (iterator(object[ks[i]], ks[i], object) === false) {
	        break;
	      }
	    }
	  };
	  /**
	   * Iterate over an input collection, invoking an `iterator` function for each element in the
	   * collection and passing to it three arguments: `(value, index, collection)`. The `iterator`
	   * function can end iteration early by returning `false`.
	   *
	   * @name each
	   * @api public
	   * @param {Function(value, key, collection)} iterator The function to invoke per iteration.
	   * @param {Array|Object|string} collection The collection to iterate over.
	   * @return {undefined} Because `each` is run only for side effects, always returns `undefined`.
	   * @example
	   * var log = console.log.bind(console);
	   *
	   * each(log, ['a', 'b', 'c']);
	   * //-> 'a', 0, ['a', 'b', 'c']
	   * //-> 'b', 1, ['a', 'b', 'c']
	   * //-> 'c', 2, ['a', 'b', 'c']
	   * //=> undefined
	   *
	   * each(log, 'tim');
	   * //-> 't', 2, 'tim'
	   * //-> 'i', 1, 'tim'
	   * //-> 'm', 0, 'tim'
	   * //=> undefined
	   *
	   * // Note: Iteration order not guaranteed across environments
	   * each(log, { name: 'tim', occupation: 'enchanter' });
	   * //-> 'tim', 'name', { name: 'tim', occupation: 'enchanter' }
	   * //-> 'enchanter', 'occupation', { name: 'tim', occupation: 'enchanter' }
	   * //=> undefined
	   */


	  var each = function each(iterator, collection) {
	    return (isArrayLike$1(collection) ? arrayEach : baseEach).call(this, iterator, collection);
	  };
	  /*
	   * Exports.
	   */


	  var each_1 = each;

	  /*
	   * Module dependencies.
	   */

	  /**
	   * Reduces all the values in a collection down into a single value. Does so by iterating through the
	   * collection from left to right, repeatedly calling an `iterator` function and passing to it four
	   * arguments: `(accumulator, value, index, collection)`.
	   *
	   * Returns the final return value of the `iterator` function.
	   *
	   * @name foldl
	   * @api public
	   * @param {Function} iterator The function to invoke per iteration.
	   * @param {*} accumulator The initial accumulator value, passed to the first invocation of `iterator`.
	   * @param {Array|Object} collection The collection to iterate over.
	   * @return {*} The return value of the final call to `iterator`.
	   * @example
	   * foldl(function(total, n) {
	   *   return total + n;
	   * }, 0, [1, 2, 3]);
	   * //=> 6
	   *
	   * var phonebook = { bob: '555-111-2345', tim: '655-222-6789', sheila: '655-333-1298' };
	   *
	   * foldl(function(results, phoneNumber) {
	   *  if (phoneNumber[0] === '6') {
	   *    return results.concat(phoneNumber);
	   *  }
	   *  return results;
	   * }, [], phonebook);
	   * // => ['655-222-6789', '655-333-1298']
	   */


	  var foldl = function foldl(iterator, accumulator, collection) {
	    if (typeof iterator !== 'function') {
	      throw new TypeError('Expected a function but received a ' + _typeof(iterator));
	    }

	    each_1(function (val, i, collection) {
	      accumulator = iterator(accumulator, val, i, collection);
	    }, collection);
	    return accumulator;
	  };
	  /*
	   * Exports.
	   */


	  var foldl_1 = foldl;

	  /**
	   * Module dependencies.
	   */


	  var parse$1 = componentQuerystring.parse;
	  /**
	   * hasOwnProperty reference.
	   */

	  var has$1 = Object.prototype.hasOwnProperty;
	  /**
	   * Get all utm params from the given `querystring`
	   *
	   * @param {String} query
	   * @return {Object}
	   * @api private
	   */

	  function utm(query) {
	    // Remove leading ? if present
	    if (query.charAt(0) === '?') {
	      query = query.substring(1);
	    }

	    query = query.replace(/\?/g, '&');
	    var param;
	    var params = parse$1(query);
	    var results = {};

	    for (var key in params) {
	      if (has$1.call(params, key)) {
	        if (key.substr(0, 4) === 'utm_') {
	          param = key.substr(4);
	          if (param === 'campaign') param = 'name';
	          results[param] = params[key];
	        }
	      }
	    }

	    return results;
	  }

	  var allowedKeys = {
	    name: true,
	    term: true,
	    source: true,
	    medium: true,
	    content: true
	  };
	  /**
	   * Get strict utm params - from the given `querystring`
	   *
	   * @param {String} query
	   * @return {Object}
	   * @api private
	   */

	  function strict(query) {
	    return foldl_1(function (acc, val, key) {
	      if (has$1.call(allowedKeys, key)) acc[key] = val;
	      return acc;
	    }, {}, utm(query));
	  }
	  /*
	   * Exports.
	   */


	  var lib = utm;
	  var strict_1 = strict;
	  lib.strict = strict_1;

	  var componentUrl = createCommonjsModule(function (module, exports) {
	    /**
	     * Parse the given `url`.
	     *
	     * @param {String} str
	     * @return {Object}
	     * @api public
	     */
	    exports.parse = function (url) {
	      var a = document.createElement('a');
	      a.href = url;
	      return {
	        href: a.href,
	        host: a.host || location.host,
	        port: '0' === a.port || '' === a.port ? port(a.protocol) : a.port,
	        hash: a.hash,
	        hostname: a.hostname || location.hostname,
	        pathname: a.pathname.charAt(0) != '/' ? '/' + a.pathname : a.pathname,
	        protocol: !a.protocol || ':' == a.protocol ? location.protocol : a.protocol,
	        search: a.search,
	        query: a.search.slice(1)
	      };
	    };
	    /**
	     * Check if `url` is absolute.
	     *
	     * @param {String} url
	     * @return {Boolean}
	     * @api public
	     */


	    exports.isAbsolute = function (url) {
	      return 0 == url.indexOf('//') || !!~url.indexOf('://');
	    };
	    /**
	     * Check if `url` is relative.
	     *
	     * @param {String} url
	     * @return {Boolean}
	     * @api public
	     */


	    exports.isRelative = function (url) {
	      return !exports.isAbsolute(url);
	    };
	    /**
	     * Check if `url` is cross domain.
	     *
	     * @param {String} url
	     * @return {Boolean}
	     * @api public
	     */


	    exports.isCrossDomain = function (url) {
	      url = exports.parse(url);
	      var location = exports.parse(window.location.href);
	      return url.hostname !== location.hostname || url.port !== location.port || url.protocol !== location.protocol;
	    };
	    /**
	     * Return default port for `protocol`.
	     *
	     * @param  {String} protocol
	     * @return {String}
	     * @api private
	     */


	    function port(protocol) {
	      switch (protocol) {
	        case 'http:':
	          return 80;

	        case 'https:':
	          return 443;

	        default:
	          return location.port;
	      }
	    }
	  });
	  var componentUrl_1 = componentUrl.parse;
	  var componentUrl_2 = componentUrl.isAbsolute;
	  var componentUrl_3 = componentUrl.isRelative;
	  var componentUrl_4 = componentUrl.isCrossDomain;

	  var LOG_LEVEL_INFO = 1;
	  var LOG_LEVEL_DEBUG = 2;
	  var LOG_LEVEL_WARN = 3;
	  var LOG_LEVEL_ERROR = 4;
	  var LOG_LEVEL = LOG_LEVEL_ERROR;
	  var logger = {
	    setLogLevel: function setLogLevel(logLevel) {
	      switch (logLevel.toUpperCase()) {
	        case "INFO":
	          LOG_LEVEL = LOG_LEVEL_INFO;
	          return;

	        case "DEBUG":
	          LOG_LEVEL = LOG_LEVEL_DEBUG;
	          return;

	        case "WARN":
	          LOG_LEVEL = LOG_LEVEL_WARN;
	      }
	    },
	    info: function info() {
	      if (LOG_LEVEL <= LOG_LEVEL_INFO) {
	        var _console;

	        (_console = console).log.apply(_console, arguments);
	      }
	    },
	    debug: function debug() {
	      if (LOG_LEVEL <= LOG_LEVEL_DEBUG) {
	        var _console2;

	        (_console2 = console).log.apply(_console2, arguments);
	      }
	    },
	    warn: function warn() {
	      if (LOG_LEVEL <= LOG_LEVEL_WARN) {
	        var _console3;

	        (_console3 = console).log.apply(_console3, arguments);
	      }
	    },
	    error: function error() {
	      if (LOG_LEVEL <= LOG_LEVEL_ERROR) {
	        var _console4;

	        (_console4 = console).log.apply(_console4, arguments);
	      }
	    }
	  };

	  // for sdk side native integration identification
	  // add a mapping from common names to index.js exported key names as identified by Rudder
	  var commonNames = {
	    All: "All",
	    "Google Analytics": "GA",
	    GoogleAnalytics: "GA",
	    GA: "GA",
	    "Google Ads": "GOOGLEADS",
	    GoogleAds: "GOOGLEADS",
	    GOOGLEADS: "GOOGLEADS",
	    Braze: "BRAZE",
	    BRAZE: "BRAZE",
	    Chartbeat: "CHARTBEAT",
	    CHARTBEAT: "CHARTBEAT",
	    Comscore: "COMSCORE",
	    COMSCORE: "COMSCORE",
	    Customerio: "CUSTOMERIO",
	    "Customer.io": "CUSTOMERIO",
	    "FB Pixel": "FACEBOOK_PIXEL",
	    "Facebook Pixel": "FACEBOOK_PIXEL",
	    FB_PIXEL: "FACEBOOK_PIXEL",
	    "Google Tag Manager": "GOOGLETAGMANAGER",
	    GTM: "GTM",
	    Hotjar: "HOTJAR",
	    hotjar: "HOTJAR",
	    HOTJAR: "HOTJAR",
	    Hubspot: "HS",
	    HUBSPOT: "HS",
	    Intercom: "INTERCOM",
	    INTERCOM: "INTERCOM",
	    Keen: "KEEN",
	    "Keen.io": "KEEN",
	    KEEN: "KEEN",
	    Kissmetrics: "KISSMETRICS",
	    KISSMETRICS: "KISSMETRICS",
	    Lotame: "LOTAME",
	    LOTAME: "LOTAME",
	    "Visual Website Optimizer": "VWO",
	    VWO: "VWO",
	    OPTIMIZELY: "OPTIMIZELY",
	    Optimizely: "OPTIMIZELY",
	    FULLSTORY: "FULLSTORY",
	    Fullstory: "FULLSTORY",
	    BUGSNAG: "BUGSNAG",
	    TVSQUARED: "TVSQUARED",
	    "Google Analytics 4": "GA4",
	    GoogleAnalytics4: "GA4",
	    GA4: "GA4",
	    MOENGAGE: "MoEngage",
	    AM: "AM",
	    AMPLITUDE: "AM",
	    Amplitude: "AM",
	    Pendo: "PENDO",
	    PENDO: "PENDO",
	    Lytics: "Lytics",
	    LYTICS: "Lytics",
	    Appcues: "APPCUES",
	    APPCUES: "APPCUES"
	  };

	  // from client native integration name to server identified display name
	  // add a mapping from Rudder identified key names to Rudder server recognizable names
	  var clientToServerNames = {
	    All: "All",
	    GA: "Google Analytics",
	    GOOGLEADS: "Google Ads",
	    BRAZE: "Braze",
	    CHARTBEAT: "Chartbeat",
	    COMSCORE: "Comscore",
	    CUSTOMERIO: "Customer IO",
	    FACEBOOK_PIXEL: "Facebook Pixel",
	    GTM: "Google Tag Manager",
	    HOTJAR: "Hotjar",
	    HS: "HubSpot",
	    INTERCOM: "Intercom",
	    KEEN: "Keen",
	    KISSMETRICS: "Kiss Metrics",
	    LOTAME: "Lotame",
	    VWO: "VWO",
	    OPTIMIZELY: "Optimizely",
	    FULLSTORY: "Fullstory",
	    TVSQUUARED: "TVSquared",
	    GA4: "Google Analytics 4",
	    MOENGAGE: "MoEngage",
	    AM: "Amplitude",
	    PENDO: "Pendo",
	    LYTICS: "Lytics",
	    APPCUES: "Appcues"
	  };

	  // Message Type enumeration
	  var MessageType = {
	    TRACK: "track",
	    PAGE: "page",
	    // SCREEN: "screen",
	    IDENTIFY: "identify"
	  }; // ECommerce Parameter Names Enumeration

	  var ECommerceEvents = {
	    PRODUCTS_SEARCHED: "Products Searched",
	    PRODUCT_LIST_VIEWED: "Product List Viewed",
	    PRODUCT_LIST_FILTERED: "Product List Filtered",
	    PROMOTION_VIEWED: "Promotion Viewed",
	    PROMOTION_CLICKED: "Promotion Clicked",
	    PRODUCT_CLICKED: "Product Clicked",
	    PRODUCT_VIEWED: "Product Viewed",
	    PRODUCT_ADDED: "Product Added",
	    PRODUCT_REMOVED: "Product Removed",
	    CART_VIEWED: "Cart Viewed",
	    CHECKOUT_STARTED: "Checkout Started",
	    CHECKOUT_STEP_VIEWED: "Checkout Step Viewed",
	    CHECKOUT_STEP_COMPLETED: "Checkout Step Completed",
	    PAYMENT_INFO_ENTERED: "Payment Info Entered",
	    ORDER_UPDATED: "Order Updated",
	    ORDER_COMPLETED: "Order Completed",
	    ORDER_REFUNDED: "Order Refunded",
	    ORDER_CANCELLED: "Order Cancelled",
	    COUPON_ENTERED: "Coupon Entered",
	    COUPON_APPLIED: "Coupon Applied",
	    COUPON_DENIED: "Coupon Denied",
	    COUPON_REMOVED: "Coupon Removed",
	    PRODUCT_ADDED_TO_WISHLIST: "Product Added to Wishlist",
	    PRODUCT_REMOVED_FROM_WISHLIST: "Product Removed from Wishlist",
	    WISH_LIST_PRODUCT_ADDED_TO_CART: "Wishlist Product Added to Cart",
	    PRODUCT_SHARED: "Product Shared",
	    CART_SHARED: "Cart Shared",
	    PRODUCT_REVIEWED: "Product Reviewed"
	  }; // Enumeration for integrations supported

	  var CONFIG_URL = "https://api.rudderlabs.com/sourceConfig/?p=npm&v=1.0.12";
	  var MAX_WAIT_FOR_INTEGRATION_LOAD = 10000;
	  var INTEGRATION_LOAD_CHECK_INTERVAL = 1000;
	  /* module.exports = {
	    MessageType: MessageType,
	    ECommerceParamNames: ECommerceParamNames,
	    ECommerceEvents: ECommerceEvents,
	    RudderIntegrationPlatform: RudderIntegrationPlatform,
	    BASE_URL: BASE_URL,
	    CONFIG_URL: CONFIG_URL,
	    FLUSH_QUEUE_SIZE: FLUSH_QUEUE_SIZE
	  }; */

	  /**
	   *
	   * Utility method for excluding null and empty values in JSON
	   * @param {*} key
	   * @param {*} value
	   * @returns
	   */

	  function replacer(key, value) {
	    if (value === null || value === undefined) {
	      return undefined;
	    }

	    return value;
	  }
	  /**
	   *
	   * Utility function for UUID genration
	   * @returns
	   */


	  function generateUUID() {
	    // Public Domain/MIT
	    var d = new Date().getTime();

	    if (typeof performance !== "undefined" && typeof performance.now === "function") {
	      d += performance.now(); // use high-precision timer if available
	    }

	    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
	      var r = (d + Math.random() * 16) % 16 | 0;
	      d = Math.floor(d / 16);
	      return (c === "x" ? r : r & 0x3 | 0x8).toString(16);
	    });
	  }
	  /**
	   *
	   * Utility function to get current time (formatted) for including in sent_at field
	   * @returns
	   */


	  function getCurrentTimeFormatted() {
	    var curDateTime = new Date().toISOString(); // Keeping same as iso string

	    /* let curDate = curDateTime.split("T")[0];
	    let curTimeExceptMillis = curDateTime
	      .split("T")[1]
	      .split("Z")[0]
	      .split(".")[0];
	    let curTimeMillis = curDateTime.split("Z")[0].split(".")[1];
	    return curDate + " " + curTimeExceptMillis + "+" + curTimeMillis; */

	    return curDateTime;
	  }
	  /**
	   *
	   * Utility function to retrieve configuration JSON from server
	   * @param {*} context
	   * @param {*} url
	   * @param {*} callback
	   */


	  function getJSONTrimmed(context, url, writeKey, callback) {
	    // server-side integration, XHR is node module
	    var cb_ = callback.bind(context);
	    var xhr = new XMLHttpRequest();
	    xhr.open("GET", url, true);
	    xhr.setRequestHeader("Authorization", "Basic ".concat(btoa("".concat(writeKey, ":"))));

	    xhr.onload = function () {
	      var status = xhr.status;

	      if (status == 200) {
	        logger.debug("status 200 " + "calling callback");
	        cb_(200, xhr.responseText);
	      } else {
	        handleError(new Error("request failed with status: ".concat(xhr.status, " for url: ").concat(url)));
	        cb_(status);
	      }
	    };

	    xhr.send();
	  }

	  function handleError(error, analyticsInstance) {
	    var errorMessage = error.message ? error.message : undefined;
	    var sampleAdBlockTest;

	    try {
	      if (error instanceof Event) {
	        if (error.target && error.target.localName == "script") {
	          errorMessage = "error in script loading:: src::  ".concat(error.target.src, " id:: ").concat(error.target.id);

	          if (analyticsInstance && error.target.src.includes("adsbygoogle")) {
	            sampleAdBlockTest = true;
	            analyticsInstance.page("RudderJS-Initiated", "ad-block page request", {
	              path: "/ad-blocked",
	              title: errorMessage
	            }, analyticsInstance.sendAdblockPageOptions);
	          }
	        }
	      }

	      if (errorMessage && !sampleAdBlockTest) {
	        logger.error("[Util] handleError:: ", errorMessage);
	      }
	    } catch (e) {
	      logger.error("[Util] handleError:: ", e);
	    }
	  }

	  function getDefaultPageProperties() {
	    var canonicalUrl = getCanonicalUrl();
	    var path = canonicalUrl ? componentUrl_1(canonicalUrl).pathname : window.location.pathname;
	    var _document = document,
	        referrer = _document.referrer;
	    var search = window.location.search;
	    var _document2 = document,
	        title = _document2.title;
	    var url = getUrl(search);
	    return {
	      path: path,
	      referrer: referrer,
	      search: search,
	      title: title,
	      url: url
	    };
	  }

	  function getUrl(search) {
	    var canonicalUrl = getCanonicalUrl();
	    var url = canonicalUrl ? canonicalUrl.indexOf("?") > -1 ? canonicalUrl : canonicalUrl + search : window.location.href;
	    var hashIndex = url.indexOf("#");
	    return hashIndex > -1 ? url.slice(0, hashIndex) : url;
	  }

	  function getCanonicalUrl() {
	    var tags = document.getElementsByTagName("link");

	    for (var i = 0, tag; tag = tags[i]; i++) {
	      if (tag.getAttribute("rel") === "canonical") {
	        return tag.getAttribute("href");
	      }
	    }
	  }
	  /**
	   *
	   *
	   * @param {*} integrationObject
	   */


	  function tranformToRudderNames(integrationObject) {
	    Object.keys(integrationObject).forEach(function (key) {
	      if (integrationObject.hasOwnProperty(key)) {
	        if (commonNames[key]) {
	          integrationObject[commonNames[key]] = integrationObject[key];
	        }

	        if (key != "All") {
	          // delete user supplied keys except All and if except those where oldkeys are not present or oldkeys are same as transformed keys
	          if (commonNames[key] != undefined && commonNames[key] != key) {
	            delete integrationObject[key];
	          }
	        }
	      }
	    });
	  }

	  function transformToServerNames(integrationObject) {
	    Object.keys(integrationObject).forEach(function (key) {
	      if (integrationObject.hasOwnProperty(key)) {
	        if (clientToServerNames[key]) {
	          integrationObject[clientToServerNames[key]] = integrationObject[key];
	        }

	        if (key != "All") {
	          // delete user supplied keys except All and if except those where oldkeys are not present or oldkeys are same as transformed keys
	          if (clientToServerNames[key] != undefined && clientToServerNames[key] != key) {
	            delete integrationObject[key];
	          }
	        }
	      }
	    });
	  }
	  /**
	   *
	   * @param {*} sdkSuppliedIntegrations
	   * @param {*} configPlaneEnabledIntegrations
	   */


	  function findAllEnabledDestinations(sdkSuppliedIntegrations, configPlaneEnabledIntegrations) {
	    var enabledList = [];

	    if (!configPlaneEnabledIntegrations || configPlaneEnabledIntegrations.length == 0) {
	      return enabledList;
	    }

	    var allValue = true;

	    if (typeof configPlaneEnabledIntegrations[0] === "string") {
	      if (sdkSuppliedIntegrations.All != undefined) {
	        allValue = sdkSuppliedIntegrations.All;
	      }

	      configPlaneEnabledIntegrations.forEach(function (intg) {
	        if (!allValue) {
	          // All false ==> check if intg true supplied
	          if (sdkSuppliedIntegrations[intg] != undefined && sdkSuppliedIntegrations[intg] == true) {
	            enabledList.push(intg);
	          }
	        } else {
	          // All true ==> intg true by default
	          var intgValue = true; // check if intg false supplied

	          if (sdkSuppliedIntegrations[intg] != undefined && sdkSuppliedIntegrations[intg] == false) {
	            intgValue = false;
	          }

	          if (intgValue) {
	            enabledList.push(intg);
	          }
	        }
	      });
	      return enabledList;
	    }

	    if (_typeof(configPlaneEnabledIntegrations[0]) === "object") {
	      if (sdkSuppliedIntegrations.All != undefined) {
	        allValue = sdkSuppliedIntegrations.All;
	      }

	      configPlaneEnabledIntegrations.forEach(function (intg) {
	        if (!allValue) {
	          // All false ==> check if intg true supplied
	          if (sdkSuppliedIntegrations[intg.name] != undefined && sdkSuppliedIntegrations[intg.name] == true) {
	            enabledList.push(intg);
	          }
	        } else {
	          // All true ==> intg true by default
	          var intgValue = true; // check if intg false supplied

	          if (sdkSuppliedIntegrations[intg.name] != undefined && sdkSuppliedIntegrations[intg.name] == false) {
	            intgValue = false;
	          }

	          if (intgValue) {
	            enabledList.push(intg);
	          }
	        }
	      });
	      return enabledList;
	    }
	  }
	  /**
	   * check type of object incoming in the rejectArr function
	   * @param  {} val
	   */


	  function type(val) {
	    switch (Object.prototype.toString.call(val)) {
	      case "[object Function]":
	        return "function";

	      case "[object Date]":
	        return "date";

	      case "[object RegExp]":
	        return "regexp";

	      case "[object Arguments]":
	        return "arguments";

	      case "[object Array]":
	        return "array";
	    }

	    if (val === null) return "null";
	    if (val === undefined) return "undefined";
	    if (val === Object(val)) return "object";
	    return _typeof(val);
	  }

	  function getUserProvidedConfigUrl(configUrl) {
	    var url = configUrl;

	    if (configUrl.indexOf("sourceConfig") == -1) {
	      url = url.slice(-1) == "/" ? url.slice(0, -1) : url;
	      url = "".concat(url, "/sourceConfig/");
	    }

	    url = url.slice(-1) == "/" ? url : "".concat(url, "/");

	    if (url.indexOf("?") > -1) {
	      if (url.split("?")[1] !== CONFIG_URL.split("?")[1]) {
	        url = "".concat(url.split("?")[0], "?").concat(CONFIG_URL.split("?")[1]);
	      }
	    } else {
	      url = "".concat(url, "?").concat(CONFIG_URL.split("?")[1]);
	    }

	    return url;
	  }

	  var global$1 = typeof commonjsGlobal !== "undefined" ? commonjsGlobal : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {};

	  // based off https://github.com/defunctzombie/node-process/blob/master/browser.js

	  function defaultSetTimout() {
	    throw new Error('setTimeout has not been defined');
	  }

	  function defaultClearTimeout() {
	    throw new Error('clearTimeout has not been defined');
	  }

	  var cachedSetTimeout = defaultSetTimout;
	  var cachedClearTimeout = defaultClearTimeout;

	  if (typeof global$1.setTimeout === 'function') {
	    cachedSetTimeout = setTimeout;
	  }

	  if (typeof global$1.clearTimeout === 'function') {
	    cachedClearTimeout = clearTimeout;
	  }

	  function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	      //normal enviroments in sane situations
	      return setTimeout(fun, 0);
	    } // if setTimeout wasn't available but was latter defined


	    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
	      cachedSetTimeout = setTimeout;
	      return setTimeout(fun, 0);
	    }

	    try {
	      // when when somebody has screwed with setTimeout but no I.E. maddness
	      return cachedSetTimeout(fun, 0);
	    } catch (e) {
	      try {
	        // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	        return cachedSetTimeout.call(null, fun, 0);
	      } catch (e) {
	        // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
	        return cachedSetTimeout.call(this, fun, 0);
	      }
	    }
	  }

	  function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	      //normal enviroments in sane situations
	      return clearTimeout(marker);
	    } // if clearTimeout wasn't available but was latter defined


	    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
	      cachedClearTimeout = clearTimeout;
	      return clearTimeout(marker);
	    }

	    try {
	      // when when somebody has screwed with setTimeout but no I.E. maddness
	      return cachedClearTimeout(marker);
	    } catch (e) {
	      try {
	        // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	        return cachedClearTimeout.call(null, marker);
	      } catch (e) {
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

	    while (len) {
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

	  function nextTick(fun) {
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
	  } // v8 likes predictible objects

	  function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	  }

	  Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	  };

	  var title = 'browser';
	  var platform = 'browser';
	  var browser = true;
	  var env = {};
	  var argv = [];
	  var version = ''; // empty string to avoid regexp issues

	  var versions = {};
	  var release = {};
	  var config = {};

	  function noop$1() {}

	  var on = noop$1;
	  var addListener = noop$1;
	  var once = noop$1;
	  var off = noop$1;
	  var removeListener = noop$1;
	  var removeAllListeners = noop$1;
	  var emit = noop$1;
	  function binding(name) {
	    throw new Error('process.binding is not supported');
	  }
	  function cwd() {
	    return '/';
	  }
	  function chdir(dir) {
	    throw new Error('process.chdir is not supported');
	  }
	  function umask() {
	    return 0;
	  } // from https://github.com/kumavis/browser-process-hrtime/blob/master/index.js

	  var performance$1 = global$1.performance || {};

	  var performanceNow = performance$1.now || performance$1.mozNow || performance$1.msNow || performance$1.oNow || performance$1.webkitNow || function () {
	    return new Date().getTime();
	  }; // generate timestamp or delta
	  // see http://nodejs.org/api/process.html#process_process_hrtime


	  function hrtime(previousTimestamp) {
	    var clocktime = performanceNow.call(performance$1) * 1e-3;
	    var seconds = Math.floor(clocktime);
	    var nanoseconds = Math.floor(clocktime % 1 * 1e9);

	    if (previousTimestamp) {
	      seconds = seconds - previousTimestamp[0];
	      nanoseconds = nanoseconds - previousTimestamp[1];

	      if (nanoseconds < 0) {
	        seconds--;
	        nanoseconds += 1e9;
	      }
	    }

	    return [seconds, nanoseconds];
	  }
	  var startTime = new Date();
	  function uptime() {
	    var currentTime = new Date();
	    var dif = currentTime - startTime;
	    return dif / 1000;
	  }
	  var process = {
	    nextTick: nextTick,
	    title: title,
	    browser: browser,
	    env: env,
	    argv: argv,
	    version: version,
	    versions: versions,
	    on: on,
	    addListener: addListener,
	    once: once,
	    off: off,
	    removeListener: removeListener,
	    removeAllListeners: removeAllListeners,
	    emit: emit,
	    binding: binding,
	    cwd: cwd,
	    chdir: chdir,
	    umask: umask,
	    hrtime: hrtime,
	    platform: platform,
	    release: release,
	    config: config,
	    uptime: uptime
	  };

	  var lookup = [];
	  var revLookup = [];
	  var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array;
	  var inited = false;

	  function init() {
	    inited = true;
	    var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';

	    for (var i = 0, len = code.length; i < len; ++i) {
	      lookup[i] = code[i];
	      revLookup[code.charCodeAt(i)] = i;
	    }

	    revLookup['-'.charCodeAt(0)] = 62;
	    revLookup['_'.charCodeAt(0)] = 63;
	  }

	  function toByteArray(b64) {
	    if (!inited) {
	      init();
	    }

	    var i, j, l, tmp, placeHolders, arr;
	    var len = b64.length;

	    if (len % 4 > 0) {
	      throw new Error('Invalid string. Length must be a multiple of 4');
	    } // the number of equal signs (place holders)
	    // if there are two placeholders, than the two characters before it
	    // represent one byte
	    // if there is only one, then the three characters before it represent 2 bytes
	    // this is just a cheap hack to not do indexOf twice


	    placeHolders = b64[len - 2] === '=' ? 2 : b64[len - 1] === '=' ? 1 : 0; // base64 is 4/3 + up to two characters of the original data

	    arr = new Arr(len * 3 / 4 - placeHolders); // if there are placeholders, only get up to the last complete 4 chars

	    l = placeHolders > 0 ? len - 4 : len;
	    var L = 0;

	    for (i = 0, j = 0; i < l; i += 4, j += 3) {
	      tmp = revLookup[b64.charCodeAt(i)] << 18 | revLookup[b64.charCodeAt(i + 1)] << 12 | revLookup[b64.charCodeAt(i + 2)] << 6 | revLookup[b64.charCodeAt(i + 3)];
	      arr[L++] = tmp >> 16 & 0xFF;
	      arr[L++] = tmp >> 8 & 0xFF;
	      arr[L++] = tmp & 0xFF;
	    }

	    if (placeHolders === 2) {
	      tmp = revLookup[b64.charCodeAt(i)] << 2 | revLookup[b64.charCodeAt(i + 1)] >> 4;
	      arr[L++] = tmp & 0xFF;
	    } else if (placeHolders === 1) {
	      tmp = revLookup[b64.charCodeAt(i)] << 10 | revLookup[b64.charCodeAt(i + 1)] << 4 | revLookup[b64.charCodeAt(i + 2)] >> 2;
	      arr[L++] = tmp >> 8 & 0xFF;
	      arr[L++] = tmp & 0xFF;
	    }

	    return arr;
	  }

	  function tripletToBase64(num) {
	    return lookup[num >> 18 & 0x3F] + lookup[num >> 12 & 0x3F] + lookup[num >> 6 & 0x3F] + lookup[num & 0x3F];
	  }

	  function encodeChunk(uint8, start, end) {
	    var tmp;
	    var output = [];

	    for (var i = start; i < end; i += 3) {
	      tmp = (uint8[i] << 16) + (uint8[i + 1] << 8) + uint8[i + 2];
	      output.push(tripletToBase64(tmp));
	    }

	    return output.join('');
	  }

	  function fromByteArray(uint8) {
	    if (!inited) {
	      init();
	    }

	    var tmp;
	    var len = uint8.length;
	    var extraBytes = len % 3; // if we have 1 byte left, pad 2 bytes

	    var output = '';
	    var parts = [];
	    var maxChunkLength = 16383; // must be multiple of 3
	    // go through the array every three bytes, we'll deal with trailing stuff later

	    for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
	      parts.push(encodeChunk(uint8, i, i + maxChunkLength > len2 ? len2 : i + maxChunkLength));
	    } // pad the end with zeros, but make sure to not forget the extra bytes


	    if (extraBytes === 1) {
	      tmp = uint8[len - 1];
	      output += lookup[tmp >> 2];
	      output += lookup[tmp << 4 & 0x3F];
	      output += '==';
	    } else if (extraBytes === 2) {
	      tmp = (uint8[len - 2] << 8) + uint8[len - 1];
	      output += lookup[tmp >> 10];
	      output += lookup[tmp >> 4 & 0x3F];
	      output += lookup[tmp << 2 & 0x3F];
	      output += '=';
	    }

	    parts.push(output);
	    return parts.join('');
	  }

	  function read(buffer, offset, isLE, mLen, nBytes) {
	    var e, m;
	    var eLen = nBytes * 8 - mLen - 1;
	    var eMax = (1 << eLen) - 1;
	    var eBias = eMax >> 1;
	    var nBits = -7;
	    var i = isLE ? nBytes - 1 : 0;
	    var d = isLE ? -1 : 1;
	    var s = buffer[offset + i];
	    i += d;
	    e = s & (1 << -nBits) - 1;
	    s >>= -nBits;
	    nBits += eLen;

	    for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8) {}

	    m = e & (1 << -nBits) - 1;
	    e >>= -nBits;
	    nBits += mLen;

	    for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8) {}

	    if (e === 0) {
	      e = 1 - eBias;
	    } else if (e === eMax) {
	      return m ? NaN : (s ? -1 : 1) * Infinity;
	    } else {
	      m = m + Math.pow(2, mLen);
	      e = e - eBias;
	    }

	    return (s ? -1 : 1) * m * Math.pow(2, e - mLen);
	  }
	  function write(buffer, value, offset, isLE, mLen, nBytes) {
	    var e, m, c;
	    var eLen = nBytes * 8 - mLen - 1;
	    var eMax = (1 << eLen) - 1;
	    var eBias = eMax >> 1;
	    var rt = mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0;
	    var i = isLE ? 0 : nBytes - 1;
	    var d = isLE ? 1 : -1;
	    var s = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0;
	    value = Math.abs(value);

	    if (isNaN(value) || value === Infinity) {
	      m = isNaN(value) ? 1 : 0;
	      e = eMax;
	    } else {
	      e = Math.floor(Math.log(value) / Math.LN2);

	      if (value * (c = Math.pow(2, -e)) < 1) {
	        e--;
	        c *= 2;
	      }

	      if (e + eBias >= 1) {
	        value += rt / c;
	      } else {
	        value += rt * Math.pow(2, 1 - eBias);
	      }

	      if (value * c >= 2) {
	        e++;
	        c /= 2;
	      }

	      if (e + eBias >= eMax) {
	        m = 0;
	        e = eMax;
	      } else if (e + eBias >= 1) {
	        m = (value * c - 1) * Math.pow(2, mLen);
	        e = e + eBias;
	      } else {
	        m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
	        e = 0;
	      }
	    }

	    for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

	    e = e << mLen | m;
	    eLen += mLen;

	    for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

	    buffer[offset + i - d] |= s * 128;
	  }

	  var toString$1 = {}.toString;
	  var isArray$1 = Array.isArray || function (arr) {
	    return toString$1.call(arr) == '[object Array]';
	  };

	  var INSPECT_MAX_BYTES = 50;
	  /**
	   * If `Buffer.TYPED_ARRAY_SUPPORT`:
	   *   === true    Use Uint8Array implementation (fastest)
	   *   === false   Use Object implementation (most compatible, even IE6)
	   *
	   * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
	   * Opera 11.6+, iOS 4.2+.
	   *
	   * Due to various browser bugs, sometimes the Object implementation will be used even
	   * when the browser supports typed arrays.
	   *
	   * Note:
	   *
	   *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
	   *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
	   *
	   *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
	   *
	   *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
	   *     incorrect length in some situations.

	   * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
	   * get the Object implementation, which is slower but behaves correctly.
	   */

	  Buffer.TYPED_ARRAY_SUPPORT = global$1.TYPED_ARRAY_SUPPORT !== undefined ? global$1.TYPED_ARRAY_SUPPORT : true;

	  function kMaxLength() {
	    return Buffer.TYPED_ARRAY_SUPPORT ? 0x7fffffff : 0x3fffffff;
	  }

	  function createBuffer(that, length) {
	    if (kMaxLength() < length) {
	      throw new RangeError('Invalid typed array length');
	    }

	    if (Buffer.TYPED_ARRAY_SUPPORT) {
	      // Return an augmented `Uint8Array` instance, for best performance
	      that = new Uint8Array(length);
	      that.__proto__ = Buffer.prototype;
	    } else {
	      // Fallback: Return an object instance of the Buffer class
	      if (that === null) {
	        that = new Buffer(length);
	      }

	      that.length = length;
	    }

	    return that;
	  }
	  /**
	   * The Buffer constructor returns instances of `Uint8Array` that have their
	   * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
	   * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
	   * and the `Uint8Array` methods. Square bracket notation works as expected -- it
	   * returns a single octet.
	   *
	   * The `Uint8Array` prototype remains unmodified.
	   */


	  function Buffer(arg, encodingOrOffset, length) {
	    if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
	      return new Buffer(arg, encodingOrOffset, length);
	    } // Common case.


	    if (typeof arg === 'number') {
	      if (typeof encodingOrOffset === 'string') {
	        throw new Error('If encoding is specified then the first argument must be a string');
	      }

	      return allocUnsafe(this, arg);
	    }

	    return from(this, arg, encodingOrOffset, length);
	  }
	  Buffer.poolSize = 8192; // not used by this implementation
	  // TODO: Legacy, not needed anymore. Remove in next major version.

	  Buffer._augment = function (arr) {
	    arr.__proto__ = Buffer.prototype;
	    return arr;
	  };

	  function from(that, value, encodingOrOffset, length) {
	    if (typeof value === 'number') {
	      throw new TypeError('"value" argument must not be a number');
	    }

	    if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
	      return fromArrayBuffer(that, value, encodingOrOffset, length);
	    }

	    if (typeof value === 'string') {
	      return fromString(that, value, encodingOrOffset);
	    }

	    return fromObject(that, value);
	  }
	  /**
	   * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
	   * if value is a number.
	   * Buffer.from(str[, encoding])
	   * Buffer.from(array)
	   * Buffer.from(buffer)
	   * Buffer.from(arrayBuffer[, byteOffset[, length]])
	   **/


	  Buffer.from = function (value, encodingOrOffset, length) {
	    return from(null, value, encodingOrOffset, length);
	  };

	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    Buffer.prototype.__proto__ = Uint8Array.prototype;
	    Buffer.__proto__ = Uint8Array;
	  }

	  function assertSize(size) {
	    if (typeof size !== 'number') {
	      throw new TypeError('"size" argument must be a number');
	    } else if (size < 0) {
	      throw new RangeError('"size" argument must not be negative');
	    }
	  }

	  function alloc(that, size, fill, encoding) {
	    assertSize(size);

	    if (size <= 0) {
	      return createBuffer(that, size);
	    }

	    if (fill !== undefined) {
	      // Only pay attention to encoding if it's a string. This
	      // prevents accidentally sending in a number that would
	      // be interpretted as a start offset.
	      return typeof encoding === 'string' ? createBuffer(that, size).fill(fill, encoding) : createBuffer(that, size).fill(fill);
	    }

	    return createBuffer(that, size);
	  }
	  /**
	   * Creates a new filled Buffer instance.
	   * alloc(size[, fill[, encoding]])
	   **/


	  Buffer.alloc = function (size, fill, encoding) {
	    return alloc(null, size, fill, encoding);
	  };

	  function allocUnsafe(that, size) {
	    assertSize(size);
	    that = createBuffer(that, size < 0 ? 0 : checked(size) | 0);

	    if (!Buffer.TYPED_ARRAY_SUPPORT) {
	      for (var i = 0; i < size; ++i) {
	        that[i] = 0;
	      }
	    }

	    return that;
	  }
	  /**
	   * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
	   * */


	  Buffer.allocUnsafe = function (size) {
	    return allocUnsafe(null, size);
	  };
	  /**
	   * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
	   */


	  Buffer.allocUnsafeSlow = function (size) {
	    return allocUnsafe(null, size);
	  };

	  function fromString(that, string, encoding) {
	    if (typeof encoding !== 'string' || encoding === '') {
	      encoding = 'utf8';
	    }

	    if (!Buffer.isEncoding(encoding)) {
	      throw new TypeError('"encoding" must be a valid string encoding');
	    }

	    var length = byteLength(string, encoding) | 0;
	    that = createBuffer(that, length);
	    var actual = that.write(string, encoding);

	    if (actual !== length) {
	      // Writing a hex string, for example, that contains invalid characters will
	      // cause everything after the first invalid character to be ignored. (e.g.
	      // 'abxxcd' will be treated as 'ab')
	      that = that.slice(0, actual);
	    }

	    return that;
	  }

	  function fromArrayLike(that, array) {
	    var length = array.length < 0 ? 0 : checked(array.length) | 0;
	    that = createBuffer(that, length);

	    for (var i = 0; i < length; i += 1) {
	      that[i] = array[i] & 255;
	    }

	    return that;
	  }

	  function fromArrayBuffer(that, array, byteOffset, length) {
	    array.byteLength; // this throws if `array` is not a valid ArrayBuffer

	    if (byteOffset < 0 || array.byteLength < byteOffset) {
	      throw new RangeError('\'offset\' is out of bounds');
	    }

	    if (array.byteLength < byteOffset + (length || 0)) {
	      throw new RangeError('\'length\' is out of bounds');
	    }

	    if (byteOffset === undefined && length === undefined) {
	      array = new Uint8Array(array);
	    } else if (length === undefined) {
	      array = new Uint8Array(array, byteOffset);
	    } else {
	      array = new Uint8Array(array, byteOffset, length);
	    }

	    if (Buffer.TYPED_ARRAY_SUPPORT) {
	      // Return an augmented `Uint8Array` instance, for best performance
	      that = array;
	      that.__proto__ = Buffer.prototype;
	    } else {
	      // Fallback: Return an object instance of the Buffer class
	      that = fromArrayLike(that, array);
	    }

	    return that;
	  }

	  function fromObject(that, obj) {
	    if (internalIsBuffer(obj)) {
	      var len = checked(obj.length) | 0;
	      that = createBuffer(that, len);

	      if (that.length === 0) {
	        return that;
	      }

	      obj.copy(that, 0, 0, len);
	      return that;
	    }

	    if (obj) {
	      if (typeof ArrayBuffer !== 'undefined' && obj.buffer instanceof ArrayBuffer || 'length' in obj) {
	        if (typeof obj.length !== 'number' || isnan(obj.length)) {
	          return createBuffer(that, 0);
	        }

	        return fromArrayLike(that, obj);
	      }

	      if (obj.type === 'Buffer' && isArray$1(obj.data)) {
	        return fromArrayLike(that, obj.data);
	      }
	    }

	    throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.');
	  }

	  function checked(length) {
	    // Note: cannot use `length < kMaxLength()` here because that fails when
	    // length is NaN (which is otherwise coerced to zero.)
	    if (length >= kMaxLength()) {
	      throw new RangeError('Attempt to allocate Buffer larger than maximum ' + 'size: 0x' + kMaxLength().toString(16) + ' bytes');
	    }

	    return length | 0;
	  }
	  Buffer.isBuffer = isBuffer;

	  function internalIsBuffer(b) {
	    return !!(b != null && b._isBuffer);
	  }

	  Buffer.compare = function compare(a, b) {
	    if (!internalIsBuffer(a) || !internalIsBuffer(b)) {
	      throw new TypeError('Arguments must be Buffers');
	    }

	    if (a === b) return 0;
	    var x = a.length;
	    var y = b.length;

	    for (var i = 0, len = Math.min(x, y); i < len; ++i) {
	      if (a[i] !== b[i]) {
	        x = a[i];
	        y = b[i];
	        break;
	      }
	    }

	    if (x < y) return -1;
	    if (y < x) return 1;
	    return 0;
	  };

	  Buffer.isEncoding = function isEncoding(encoding) {
	    switch (String(encoding).toLowerCase()) {
	      case 'hex':
	      case 'utf8':
	      case 'utf-8':
	      case 'ascii':
	      case 'latin1':
	      case 'binary':
	      case 'base64':
	      case 'ucs2':
	      case 'ucs-2':
	      case 'utf16le':
	      case 'utf-16le':
	        return true;

	      default:
	        return false;
	    }
	  };

	  Buffer.concat = function concat(list, length) {
	    if (!isArray$1(list)) {
	      throw new TypeError('"list" argument must be an Array of Buffers');
	    }

	    if (list.length === 0) {
	      return Buffer.alloc(0);
	    }

	    var i;

	    if (length === undefined) {
	      length = 0;

	      for (i = 0; i < list.length; ++i) {
	        length += list[i].length;
	      }
	    }

	    var buffer = Buffer.allocUnsafe(length);
	    var pos = 0;

	    for (i = 0; i < list.length; ++i) {
	      var buf = list[i];

	      if (!internalIsBuffer(buf)) {
	        throw new TypeError('"list" argument must be an Array of Buffers');
	      }

	      buf.copy(buffer, pos);
	      pos += buf.length;
	    }

	    return buffer;
	  };

	  function byteLength(string, encoding) {
	    if (internalIsBuffer(string)) {
	      return string.length;
	    }

	    if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' && (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
	      return string.byteLength;
	    }

	    if (typeof string !== 'string') {
	      string = '' + string;
	    }

	    var len = string.length;
	    if (len === 0) return 0; // Use a for loop to avoid recursion

	    var loweredCase = false;

	    for (;;) {
	      switch (encoding) {
	        case 'ascii':
	        case 'latin1':
	        case 'binary':
	          return len;

	        case 'utf8':
	        case 'utf-8':
	        case undefined:
	          return utf8ToBytes(string).length;

	        case 'ucs2':
	        case 'ucs-2':
	        case 'utf16le':
	        case 'utf-16le':
	          return len * 2;

	        case 'hex':
	          return len >>> 1;

	        case 'base64':
	          return base64ToBytes(string).length;

	        default:
	          if (loweredCase) return utf8ToBytes(string).length; // assume utf8

	          encoding = ('' + encoding).toLowerCase();
	          loweredCase = true;
	      }
	    }
	  }

	  Buffer.byteLength = byteLength;

	  function slowToString(encoding, start, end) {
	    var loweredCase = false; // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
	    // property of a typed array.
	    // This behaves neither like String nor Uint8Array in that we set start/end
	    // to their upper/lower bounds if the value passed is out of range.
	    // undefined is handled specially as per ECMA-262 6th Edition,
	    // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.

	    if (start === undefined || start < 0) {
	      start = 0;
	    } // Return early if start > this.length. Done here to prevent potential uint32
	    // coercion fail below.


	    if (start > this.length) {
	      return '';
	    }

	    if (end === undefined || end > this.length) {
	      end = this.length;
	    }

	    if (end <= 0) {
	      return '';
	    } // Force coersion to uint32. This will also coerce falsey/NaN values to 0.


	    end >>>= 0;
	    start >>>= 0;

	    if (end <= start) {
	      return '';
	    }

	    if (!encoding) encoding = 'utf8';

	    while (true) {
	      switch (encoding) {
	        case 'hex':
	          return hexSlice(this, start, end);

	        case 'utf8':
	        case 'utf-8':
	          return utf8Slice(this, start, end);

	        case 'ascii':
	          return asciiSlice(this, start, end);

	        case 'latin1':
	        case 'binary':
	          return latin1Slice(this, start, end);

	        case 'base64':
	          return base64Slice(this, start, end);

	        case 'ucs2':
	        case 'ucs-2':
	        case 'utf16le':
	        case 'utf-16le':
	          return utf16leSlice(this, start, end);

	        default:
	          if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding);
	          encoding = (encoding + '').toLowerCase();
	          loweredCase = true;
	      }
	    }
	  } // The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
	  // Buffer instances.


	  Buffer.prototype._isBuffer = true;

	  function swap(b, n, m) {
	    var i = b[n];
	    b[n] = b[m];
	    b[m] = i;
	  }

	  Buffer.prototype.swap16 = function swap16() {
	    var len = this.length;

	    if (len % 2 !== 0) {
	      throw new RangeError('Buffer size must be a multiple of 16-bits');
	    }

	    for (var i = 0; i < len; i += 2) {
	      swap(this, i, i + 1);
	    }

	    return this;
	  };

	  Buffer.prototype.swap32 = function swap32() {
	    var len = this.length;

	    if (len % 4 !== 0) {
	      throw new RangeError('Buffer size must be a multiple of 32-bits');
	    }

	    for (var i = 0; i < len; i += 4) {
	      swap(this, i, i + 3);
	      swap(this, i + 1, i + 2);
	    }

	    return this;
	  };

	  Buffer.prototype.swap64 = function swap64() {
	    var len = this.length;

	    if (len % 8 !== 0) {
	      throw new RangeError('Buffer size must be a multiple of 64-bits');
	    }

	    for (var i = 0; i < len; i += 8) {
	      swap(this, i, i + 7);
	      swap(this, i + 1, i + 6);
	      swap(this, i + 2, i + 5);
	      swap(this, i + 3, i + 4);
	    }

	    return this;
	  };

	  Buffer.prototype.toString = function toString() {
	    var length = this.length | 0;
	    if (length === 0) return '';
	    if (arguments.length === 0) return utf8Slice(this, 0, length);
	    return slowToString.apply(this, arguments);
	  };

	  Buffer.prototype.equals = function equals(b) {
	    if (!internalIsBuffer(b)) throw new TypeError('Argument must be a Buffer');
	    if (this === b) return true;
	    return Buffer.compare(this, b) === 0;
	  };

	  Buffer.prototype.inspect = function inspect() {
	    var str = '';
	    var max = INSPECT_MAX_BYTES;

	    if (this.length > 0) {
	      str = this.toString('hex', 0, max).match(/.{2}/g).join(' ');
	      if (this.length > max) str += ' ... ';
	    }

	    return '<Buffer ' + str + '>';
	  };

	  Buffer.prototype.compare = function compare(target, start, end, thisStart, thisEnd) {
	    if (!internalIsBuffer(target)) {
	      throw new TypeError('Argument must be a Buffer');
	    }

	    if (start === undefined) {
	      start = 0;
	    }

	    if (end === undefined) {
	      end = target ? target.length : 0;
	    }

	    if (thisStart === undefined) {
	      thisStart = 0;
	    }

	    if (thisEnd === undefined) {
	      thisEnd = this.length;
	    }

	    if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
	      throw new RangeError('out of range index');
	    }

	    if (thisStart >= thisEnd && start >= end) {
	      return 0;
	    }

	    if (thisStart >= thisEnd) {
	      return -1;
	    }

	    if (start >= end) {
	      return 1;
	    }

	    start >>>= 0;
	    end >>>= 0;
	    thisStart >>>= 0;
	    thisEnd >>>= 0;
	    if (this === target) return 0;
	    var x = thisEnd - thisStart;
	    var y = end - start;
	    var len = Math.min(x, y);
	    var thisCopy = this.slice(thisStart, thisEnd);
	    var targetCopy = target.slice(start, end);

	    for (var i = 0; i < len; ++i) {
	      if (thisCopy[i] !== targetCopy[i]) {
	        x = thisCopy[i];
	        y = targetCopy[i];
	        break;
	      }
	    }

	    if (x < y) return -1;
	    if (y < x) return 1;
	    return 0;
	  }; // Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
	  // OR the last index of `val` in `buffer` at offset <= `byteOffset`.
	  //
	  // Arguments:
	  // - buffer - a Buffer to search
	  // - val - a string, Buffer, or number
	  // - byteOffset - an index into `buffer`; will be clamped to an int32
	  // - encoding - an optional encoding, relevant is val is a string
	  // - dir - true for indexOf, false for lastIndexOf


	  function bidirectionalIndexOf(buffer, val, byteOffset, encoding, dir) {
	    // Empty buffer means no match
	    if (buffer.length === 0) return -1; // Normalize byteOffset

	    if (typeof byteOffset === 'string') {
	      encoding = byteOffset;
	      byteOffset = 0;
	    } else if (byteOffset > 0x7fffffff) {
	      byteOffset = 0x7fffffff;
	    } else if (byteOffset < -0x80000000) {
	      byteOffset = -0x80000000;
	    }

	    byteOffset = +byteOffset; // Coerce to Number.

	    if (isNaN(byteOffset)) {
	      // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
	      byteOffset = dir ? 0 : buffer.length - 1;
	    } // Normalize byteOffset: negative offsets start from the end of the buffer


	    if (byteOffset < 0) byteOffset = buffer.length + byteOffset;

	    if (byteOffset >= buffer.length) {
	      if (dir) return -1;else byteOffset = buffer.length - 1;
	    } else if (byteOffset < 0) {
	      if (dir) byteOffset = 0;else return -1;
	    } // Normalize val


	    if (typeof val === 'string') {
	      val = Buffer.from(val, encoding);
	    } // Finally, search either indexOf (if dir is true) or lastIndexOf


	    if (internalIsBuffer(val)) {
	      // Special case: looking for empty string/buffer always fails
	      if (val.length === 0) {
	        return -1;
	      }

	      return arrayIndexOf(buffer, val, byteOffset, encoding, dir);
	    } else if (typeof val === 'number') {
	      val = val & 0xFF; // Search for a byte value [0-255]

	      if (Buffer.TYPED_ARRAY_SUPPORT && typeof Uint8Array.prototype.indexOf === 'function') {
	        if (dir) {
	          return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset);
	        } else {
	          return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset);
	        }
	      }

	      return arrayIndexOf(buffer, [val], byteOffset, encoding, dir);
	    }

	    throw new TypeError('val must be string, number or Buffer');
	  }

	  function arrayIndexOf(arr, val, byteOffset, encoding, dir) {
	    var indexSize = 1;
	    var arrLength = arr.length;
	    var valLength = val.length;

	    if (encoding !== undefined) {
	      encoding = String(encoding).toLowerCase();

	      if (encoding === 'ucs2' || encoding === 'ucs-2' || encoding === 'utf16le' || encoding === 'utf-16le') {
	        if (arr.length < 2 || val.length < 2) {
	          return -1;
	        }

	        indexSize = 2;
	        arrLength /= 2;
	        valLength /= 2;
	        byteOffset /= 2;
	      }
	    }

	    function read(buf, i) {
	      if (indexSize === 1) {
	        return buf[i];
	      } else {
	        return buf.readUInt16BE(i * indexSize);
	      }
	    }

	    var i;

	    if (dir) {
	      var foundIndex = -1;

	      for (i = byteOffset; i < arrLength; i++) {
	        if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
	          if (foundIndex === -1) foundIndex = i;
	          if (i - foundIndex + 1 === valLength) return foundIndex * indexSize;
	        } else {
	          if (foundIndex !== -1) i -= i - foundIndex;
	          foundIndex = -1;
	        }
	      }
	    } else {
	      if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength;

	      for (i = byteOffset; i >= 0; i--) {
	        var found = true;

	        for (var j = 0; j < valLength; j++) {
	          if (read(arr, i + j) !== read(val, j)) {
	            found = false;
	            break;
	          }
	        }

	        if (found) return i;
	      }
	    }

	    return -1;
	  }

	  Buffer.prototype.includes = function includes(val, byteOffset, encoding) {
	    return this.indexOf(val, byteOffset, encoding) !== -1;
	  };

	  Buffer.prototype.indexOf = function indexOf(val, byteOffset, encoding) {
	    return bidirectionalIndexOf(this, val, byteOffset, encoding, true);
	  };

	  Buffer.prototype.lastIndexOf = function lastIndexOf(val, byteOffset, encoding) {
	    return bidirectionalIndexOf(this, val, byteOffset, encoding, false);
	  };

	  function hexWrite(buf, string, offset, length) {
	    offset = Number(offset) || 0;
	    var remaining = buf.length - offset;

	    if (!length) {
	      length = remaining;
	    } else {
	      length = Number(length);

	      if (length > remaining) {
	        length = remaining;
	      }
	    } // must be an even number of digits


	    var strLen = string.length;
	    if (strLen % 2 !== 0) throw new TypeError('Invalid hex string');

	    if (length > strLen / 2) {
	      length = strLen / 2;
	    }

	    for (var i = 0; i < length; ++i) {
	      var parsed = parseInt(string.substr(i * 2, 2), 16);
	      if (isNaN(parsed)) return i;
	      buf[offset + i] = parsed;
	    }

	    return i;
	  }

	  function utf8Write(buf, string, offset, length) {
	    return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length);
	  }

	  function asciiWrite(buf, string, offset, length) {
	    return blitBuffer(asciiToBytes(string), buf, offset, length);
	  }

	  function latin1Write(buf, string, offset, length) {
	    return asciiWrite(buf, string, offset, length);
	  }

	  function base64Write(buf, string, offset, length) {
	    return blitBuffer(base64ToBytes(string), buf, offset, length);
	  }

	  function ucs2Write(buf, string, offset, length) {
	    return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length);
	  }

	  Buffer.prototype.write = function write(string, offset, length, encoding) {
	    // Buffer#write(string)
	    if (offset === undefined) {
	      encoding = 'utf8';
	      length = this.length;
	      offset = 0; // Buffer#write(string, encoding)
	    } else if (length === undefined && typeof offset === 'string') {
	      encoding = offset;
	      length = this.length;
	      offset = 0; // Buffer#write(string, offset[, length][, encoding])
	    } else if (isFinite(offset)) {
	      offset = offset | 0;

	      if (isFinite(length)) {
	        length = length | 0;
	        if (encoding === undefined) encoding = 'utf8';
	      } else {
	        encoding = length;
	        length = undefined;
	      } // legacy write(string, encoding, offset, length) - remove in v0.13

	    } else {
	      throw new Error('Buffer.write(string, encoding, offset[, length]) is no longer supported');
	    }

	    var remaining = this.length - offset;
	    if (length === undefined || length > remaining) length = remaining;

	    if (string.length > 0 && (length < 0 || offset < 0) || offset > this.length) {
	      throw new RangeError('Attempt to write outside buffer bounds');
	    }

	    if (!encoding) encoding = 'utf8';
	    var loweredCase = false;

	    for (;;) {
	      switch (encoding) {
	        case 'hex':
	          return hexWrite(this, string, offset, length);

	        case 'utf8':
	        case 'utf-8':
	          return utf8Write(this, string, offset, length);

	        case 'ascii':
	          return asciiWrite(this, string, offset, length);

	        case 'latin1':
	        case 'binary':
	          return latin1Write(this, string, offset, length);

	        case 'base64':
	          // Warning: maxLength not taken into account in base64Write
	          return base64Write(this, string, offset, length);

	        case 'ucs2':
	        case 'ucs-2':
	        case 'utf16le':
	        case 'utf-16le':
	          return ucs2Write(this, string, offset, length);

	        default:
	          if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding);
	          encoding = ('' + encoding).toLowerCase();
	          loweredCase = true;
	      }
	    }
	  };

	  Buffer.prototype.toJSON = function toJSON() {
	    return {
	      type: 'Buffer',
	      data: Array.prototype.slice.call(this._arr || this, 0)
	    };
	  };

	  function base64Slice(buf, start, end) {
	    if (start === 0 && end === buf.length) {
	      return fromByteArray(buf);
	    } else {
	      return fromByteArray(buf.slice(start, end));
	    }
	  }

	  function utf8Slice(buf, start, end) {
	    end = Math.min(buf.length, end);
	    var res = [];
	    var i = start;

	    while (i < end) {
	      var firstByte = buf[i];
	      var codePoint = null;
	      var bytesPerSequence = firstByte > 0xEF ? 4 : firstByte > 0xDF ? 3 : firstByte > 0xBF ? 2 : 1;

	      if (i + bytesPerSequence <= end) {
	        var secondByte, thirdByte, fourthByte, tempCodePoint;

	        switch (bytesPerSequence) {
	          case 1:
	            if (firstByte < 0x80) {
	              codePoint = firstByte;
	            }

	            break;

	          case 2:
	            secondByte = buf[i + 1];

	            if ((secondByte & 0xC0) === 0x80) {
	              tempCodePoint = (firstByte & 0x1F) << 0x6 | secondByte & 0x3F;

	              if (tempCodePoint > 0x7F) {
	                codePoint = tempCodePoint;
	              }
	            }

	            break;

	          case 3:
	            secondByte = buf[i + 1];
	            thirdByte = buf[i + 2];

	            if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
	              tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | thirdByte & 0x3F;

	              if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
	                codePoint = tempCodePoint;
	              }
	            }

	            break;

	          case 4:
	            secondByte = buf[i + 1];
	            thirdByte = buf[i + 2];
	            fourthByte = buf[i + 3];

	            if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
	              tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | fourthByte & 0x3F;

	              if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
	                codePoint = tempCodePoint;
	              }
	            }

	        }
	      }

	      if (codePoint === null) {
	        // we did not generate a valid codePoint so insert a
	        // replacement char (U+FFFD) and advance only 1 byte
	        codePoint = 0xFFFD;
	        bytesPerSequence = 1;
	      } else if (codePoint > 0xFFFF) {
	        // encode to utf16 (surrogate pair dance)
	        codePoint -= 0x10000;
	        res.push(codePoint >>> 10 & 0x3FF | 0xD800);
	        codePoint = 0xDC00 | codePoint & 0x3FF;
	      }

	      res.push(codePoint);
	      i += bytesPerSequence;
	    }

	    return decodeCodePointsArray(res);
	  } // Based on http://stackoverflow.com/a/22747272/680742, the browser with
	  // the lowest limit is Chrome, with 0x10000 args.
	  // We go 1 magnitude less, for safety


	  var MAX_ARGUMENTS_LENGTH = 0x1000;

	  function decodeCodePointsArray(codePoints) {
	    var len = codePoints.length;

	    if (len <= MAX_ARGUMENTS_LENGTH) {
	      return String.fromCharCode.apply(String, codePoints); // avoid extra slice()
	    } // Decode in chunks to avoid "call stack size exceeded".


	    var res = '';
	    var i = 0;

	    while (i < len) {
	      res += String.fromCharCode.apply(String, codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH));
	    }

	    return res;
	  }

	  function asciiSlice(buf, start, end) {
	    var ret = '';
	    end = Math.min(buf.length, end);

	    for (var i = start; i < end; ++i) {
	      ret += String.fromCharCode(buf[i] & 0x7F);
	    }

	    return ret;
	  }

	  function latin1Slice(buf, start, end) {
	    var ret = '';
	    end = Math.min(buf.length, end);

	    for (var i = start; i < end; ++i) {
	      ret += String.fromCharCode(buf[i]);
	    }

	    return ret;
	  }

	  function hexSlice(buf, start, end) {
	    var len = buf.length;
	    if (!start || start < 0) start = 0;
	    if (!end || end < 0 || end > len) end = len;
	    var out = '';

	    for (var i = start; i < end; ++i) {
	      out += toHex(buf[i]);
	    }

	    return out;
	  }

	  function utf16leSlice(buf, start, end) {
	    var bytes = buf.slice(start, end);
	    var res = '';

	    for (var i = 0; i < bytes.length; i += 2) {
	      res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256);
	    }

	    return res;
	  }

	  Buffer.prototype.slice = function slice(start, end) {
	    var len = this.length;
	    start = ~~start;
	    end = end === undefined ? len : ~~end;

	    if (start < 0) {
	      start += len;
	      if (start < 0) start = 0;
	    } else if (start > len) {
	      start = len;
	    }

	    if (end < 0) {
	      end += len;
	      if (end < 0) end = 0;
	    } else if (end > len) {
	      end = len;
	    }

	    if (end < start) end = start;
	    var newBuf;

	    if (Buffer.TYPED_ARRAY_SUPPORT) {
	      newBuf = this.subarray(start, end);
	      newBuf.__proto__ = Buffer.prototype;
	    } else {
	      var sliceLen = end - start;
	      newBuf = new Buffer(sliceLen, undefined);

	      for (var i = 0; i < sliceLen; ++i) {
	        newBuf[i] = this[i + start];
	      }
	    }

	    return newBuf;
	  };
	  /*
	   * Need to make sure that buffer isn't trying to write out of bounds.
	   */


	  function checkOffset(offset, ext, length) {
	    if (offset % 1 !== 0 || offset < 0) throw new RangeError('offset is not uint');
	    if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length');
	  }

	  Buffer.prototype.readUIntLE = function readUIntLE(offset, byteLength, noAssert) {
	    offset = offset | 0;
	    byteLength = byteLength | 0;
	    if (!noAssert) checkOffset(offset, byteLength, this.length);
	    var val = this[offset];
	    var mul = 1;
	    var i = 0;

	    while (++i < byteLength && (mul *= 0x100)) {
	      val += this[offset + i] * mul;
	    }

	    return val;
	  };

	  Buffer.prototype.readUIntBE = function readUIntBE(offset, byteLength, noAssert) {
	    offset = offset | 0;
	    byteLength = byteLength | 0;

	    if (!noAssert) {
	      checkOffset(offset, byteLength, this.length);
	    }

	    var val = this[offset + --byteLength];
	    var mul = 1;

	    while (byteLength > 0 && (mul *= 0x100)) {
	      val += this[offset + --byteLength] * mul;
	    }

	    return val;
	  };

	  Buffer.prototype.readUInt8 = function readUInt8(offset, noAssert) {
	    if (!noAssert) checkOffset(offset, 1, this.length);
	    return this[offset];
	  };

	  Buffer.prototype.readUInt16LE = function readUInt16LE(offset, noAssert) {
	    if (!noAssert) checkOffset(offset, 2, this.length);
	    return this[offset] | this[offset + 1] << 8;
	  };

	  Buffer.prototype.readUInt16BE = function readUInt16BE(offset, noAssert) {
	    if (!noAssert) checkOffset(offset, 2, this.length);
	    return this[offset] << 8 | this[offset + 1];
	  };

	  Buffer.prototype.readUInt32LE = function readUInt32LE(offset, noAssert) {
	    if (!noAssert) checkOffset(offset, 4, this.length);
	    return (this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16) + this[offset + 3] * 0x1000000;
	  };

	  Buffer.prototype.readUInt32BE = function readUInt32BE(offset, noAssert) {
	    if (!noAssert) checkOffset(offset, 4, this.length);
	    return this[offset] * 0x1000000 + (this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3]);
	  };

	  Buffer.prototype.readIntLE = function readIntLE(offset, byteLength, noAssert) {
	    offset = offset | 0;
	    byteLength = byteLength | 0;
	    if (!noAssert) checkOffset(offset, byteLength, this.length);
	    var val = this[offset];
	    var mul = 1;
	    var i = 0;

	    while (++i < byteLength && (mul *= 0x100)) {
	      val += this[offset + i] * mul;
	    }

	    mul *= 0x80;
	    if (val >= mul) val -= Math.pow(2, 8 * byteLength);
	    return val;
	  };

	  Buffer.prototype.readIntBE = function readIntBE(offset, byteLength, noAssert) {
	    offset = offset | 0;
	    byteLength = byteLength | 0;
	    if (!noAssert) checkOffset(offset, byteLength, this.length);
	    var i = byteLength;
	    var mul = 1;
	    var val = this[offset + --i];

	    while (i > 0 && (mul *= 0x100)) {
	      val += this[offset + --i] * mul;
	    }

	    mul *= 0x80;
	    if (val >= mul) val -= Math.pow(2, 8 * byteLength);
	    return val;
	  };

	  Buffer.prototype.readInt8 = function readInt8(offset, noAssert) {
	    if (!noAssert) checkOffset(offset, 1, this.length);
	    if (!(this[offset] & 0x80)) return this[offset];
	    return (0xff - this[offset] + 1) * -1;
	  };

	  Buffer.prototype.readInt16LE = function readInt16LE(offset, noAssert) {
	    if (!noAssert) checkOffset(offset, 2, this.length);
	    var val = this[offset] | this[offset + 1] << 8;
	    return val & 0x8000 ? val | 0xFFFF0000 : val;
	  };

	  Buffer.prototype.readInt16BE = function readInt16BE(offset, noAssert) {
	    if (!noAssert) checkOffset(offset, 2, this.length);
	    var val = this[offset + 1] | this[offset] << 8;
	    return val & 0x8000 ? val | 0xFFFF0000 : val;
	  };

	  Buffer.prototype.readInt32LE = function readInt32LE(offset, noAssert) {
	    if (!noAssert) checkOffset(offset, 4, this.length);
	    return this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16 | this[offset + 3] << 24;
	  };

	  Buffer.prototype.readInt32BE = function readInt32BE(offset, noAssert) {
	    if (!noAssert) checkOffset(offset, 4, this.length);
	    return this[offset] << 24 | this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3];
	  };

	  Buffer.prototype.readFloatLE = function readFloatLE(offset, noAssert) {
	    if (!noAssert) checkOffset(offset, 4, this.length);
	    return read(this, offset, true, 23, 4);
	  };

	  Buffer.prototype.readFloatBE = function readFloatBE(offset, noAssert) {
	    if (!noAssert) checkOffset(offset, 4, this.length);
	    return read(this, offset, false, 23, 4);
	  };

	  Buffer.prototype.readDoubleLE = function readDoubleLE(offset, noAssert) {
	    if (!noAssert) checkOffset(offset, 8, this.length);
	    return read(this, offset, true, 52, 8);
	  };

	  Buffer.prototype.readDoubleBE = function readDoubleBE(offset, noAssert) {
	    if (!noAssert) checkOffset(offset, 8, this.length);
	    return read(this, offset, false, 52, 8);
	  };

	  function checkInt(buf, value, offset, ext, max, min) {
	    if (!internalIsBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance');
	    if (value > max || value < min) throw new RangeError('"value" argument is out of bounds');
	    if (offset + ext > buf.length) throw new RangeError('Index out of range');
	  }

	  Buffer.prototype.writeUIntLE = function writeUIntLE(value, offset, byteLength, noAssert) {
	    value = +value;
	    offset = offset | 0;
	    byteLength = byteLength | 0;

	    if (!noAssert) {
	      var maxBytes = Math.pow(2, 8 * byteLength) - 1;
	      checkInt(this, value, offset, byteLength, maxBytes, 0);
	    }

	    var mul = 1;
	    var i = 0;
	    this[offset] = value & 0xFF;

	    while (++i < byteLength && (mul *= 0x100)) {
	      this[offset + i] = value / mul & 0xFF;
	    }

	    return offset + byteLength;
	  };

	  Buffer.prototype.writeUIntBE = function writeUIntBE(value, offset, byteLength, noAssert) {
	    value = +value;
	    offset = offset | 0;
	    byteLength = byteLength | 0;

	    if (!noAssert) {
	      var maxBytes = Math.pow(2, 8 * byteLength) - 1;
	      checkInt(this, value, offset, byteLength, maxBytes, 0);
	    }

	    var i = byteLength - 1;
	    var mul = 1;
	    this[offset + i] = value & 0xFF;

	    while (--i >= 0 && (mul *= 0x100)) {
	      this[offset + i] = value / mul & 0xFF;
	    }

	    return offset + byteLength;
	  };

	  Buffer.prototype.writeUInt8 = function writeUInt8(value, offset, noAssert) {
	    value = +value;
	    offset = offset | 0;
	    if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0);
	    if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value);
	    this[offset] = value & 0xff;
	    return offset + 1;
	  };

	  function objectWriteUInt16(buf, value, offset, littleEndian) {
	    if (value < 0) value = 0xffff + value + 1;

	    for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
	      buf[offset + i] = (value & 0xff << 8 * (littleEndian ? i : 1 - i)) >>> (littleEndian ? i : 1 - i) * 8;
	    }
	  }

	  Buffer.prototype.writeUInt16LE = function writeUInt16LE(value, offset, noAssert) {
	    value = +value;
	    offset = offset | 0;
	    if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0);

	    if (Buffer.TYPED_ARRAY_SUPPORT) {
	      this[offset] = value & 0xff;
	      this[offset + 1] = value >>> 8;
	    } else {
	      objectWriteUInt16(this, value, offset, true);
	    }

	    return offset + 2;
	  };

	  Buffer.prototype.writeUInt16BE = function writeUInt16BE(value, offset, noAssert) {
	    value = +value;
	    offset = offset | 0;
	    if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0);

	    if (Buffer.TYPED_ARRAY_SUPPORT) {
	      this[offset] = value >>> 8;
	      this[offset + 1] = value & 0xff;
	    } else {
	      objectWriteUInt16(this, value, offset, false);
	    }

	    return offset + 2;
	  };

	  function objectWriteUInt32(buf, value, offset, littleEndian) {
	    if (value < 0) value = 0xffffffff + value + 1;

	    for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
	      buf[offset + i] = value >>> (littleEndian ? i : 3 - i) * 8 & 0xff;
	    }
	  }

	  Buffer.prototype.writeUInt32LE = function writeUInt32LE(value, offset, noAssert) {
	    value = +value;
	    offset = offset | 0;
	    if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0);

	    if (Buffer.TYPED_ARRAY_SUPPORT) {
	      this[offset + 3] = value >>> 24;
	      this[offset + 2] = value >>> 16;
	      this[offset + 1] = value >>> 8;
	      this[offset] = value & 0xff;
	    } else {
	      objectWriteUInt32(this, value, offset, true);
	    }

	    return offset + 4;
	  };

	  Buffer.prototype.writeUInt32BE = function writeUInt32BE(value, offset, noAssert) {
	    value = +value;
	    offset = offset | 0;
	    if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0);

	    if (Buffer.TYPED_ARRAY_SUPPORT) {
	      this[offset] = value >>> 24;
	      this[offset + 1] = value >>> 16;
	      this[offset + 2] = value >>> 8;
	      this[offset + 3] = value & 0xff;
	    } else {
	      objectWriteUInt32(this, value, offset, false);
	    }

	    return offset + 4;
	  };

	  Buffer.prototype.writeIntLE = function writeIntLE(value, offset, byteLength, noAssert) {
	    value = +value;
	    offset = offset | 0;

	    if (!noAssert) {
	      var limit = Math.pow(2, 8 * byteLength - 1);
	      checkInt(this, value, offset, byteLength, limit - 1, -limit);
	    }

	    var i = 0;
	    var mul = 1;
	    var sub = 0;
	    this[offset] = value & 0xFF;

	    while (++i < byteLength && (mul *= 0x100)) {
	      if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
	        sub = 1;
	      }

	      this[offset + i] = (value / mul >> 0) - sub & 0xFF;
	    }

	    return offset + byteLength;
	  };

	  Buffer.prototype.writeIntBE = function writeIntBE(value, offset, byteLength, noAssert) {
	    value = +value;
	    offset = offset | 0;

	    if (!noAssert) {
	      var limit = Math.pow(2, 8 * byteLength - 1);
	      checkInt(this, value, offset, byteLength, limit - 1, -limit);
	    }

	    var i = byteLength - 1;
	    var mul = 1;
	    var sub = 0;
	    this[offset + i] = value & 0xFF;

	    while (--i >= 0 && (mul *= 0x100)) {
	      if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
	        sub = 1;
	      }

	      this[offset + i] = (value / mul >> 0) - sub & 0xFF;
	    }

	    return offset + byteLength;
	  };

	  Buffer.prototype.writeInt8 = function writeInt8(value, offset, noAssert) {
	    value = +value;
	    offset = offset | 0;
	    if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80);
	    if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value);
	    if (value < 0) value = 0xff + value + 1;
	    this[offset] = value & 0xff;
	    return offset + 1;
	  };

	  Buffer.prototype.writeInt16LE = function writeInt16LE(value, offset, noAssert) {
	    value = +value;
	    offset = offset | 0;
	    if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000);

	    if (Buffer.TYPED_ARRAY_SUPPORT) {
	      this[offset] = value & 0xff;
	      this[offset + 1] = value >>> 8;
	    } else {
	      objectWriteUInt16(this, value, offset, true);
	    }

	    return offset + 2;
	  };

	  Buffer.prototype.writeInt16BE = function writeInt16BE(value, offset, noAssert) {
	    value = +value;
	    offset = offset | 0;
	    if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000);

	    if (Buffer.TYPED_ARRAY_SUPPORT) {
	      this[offset] = value >>> 8;
	      this[offset + 1] = value & 0xff;
	    } else {
	      objectWriteUInt16(this, value, offset, false);
	    }

	    return offset + 2;
	  };

	  Buffer.prototype.writeInt32LE = function writeInt32LE(value, offset, noAssert) {
	    value = +value;
	    offset = offset | 0;
	    if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000);

	    if (Buffer.TYPED_ARRAY_SUPPORT) {
	      this[offset] = value & 0xff;
	      this[offset + 1] = value >>> 8;
	      this[offset + 2] = value >>> 16;
	      this[offset + 3] = value >>> 24;
	    } else {
	      objectWriteUInt32(this, value, offset, true);
	    }

	    return offset + 4;
	  };

	  Buffer.prototype.writeInt32BE = function writeInt32BE(value, offset, noAssert) {
	    value = +value;
	    offset = offset | 0;
	    if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000);
	    if (value < 0) value = 0xffffffff + value + 1;

	    if (Buffer.TYPED_ARRAY_SUPPORT) {
	      this[offset] = value >>> 24;
	      this[offset + 1] = value >>> 16;
	      this[offset + 2] = value >>> 8;
	      this[offset + 3] = value & 0xff;
	    } else {
	      objectWriteUInt32(this, value, offset, false);
	    }

	    return offset + 4;
	  };

	  function checkIEEE754(buf, value, offset, ext, max, min) {
	    if (offset + ext > buf.length) throw new RangeError('Index out of range');
	    if (offset < 0) throw new RangeError('Index out of range');
	  }

	  function writeFloat(buf, value, offset, littleEndian, noAssert) {
	    if (!noAssert) {
	      checkIEEE754(buf, value, offset, 4);
	    }

	    write(buf, value, offset, littleEndian, 23, 4);
	    return offset + 4;
	  }

	  Buffer.prototype.writeFloatLE = function writeFloatLE(value, offset, noAssert) {
	    return writeFloat(this, value, offset, true, noAssert);
	  };

	  Buffer.prototype.writeFloatBE = function writeFloatBE(value, offset, noAssert) {
	    return writeFloat(this, value, offset, false, noAssert);
	  };

	  function writeDouble(buf, value, offset, littleEndian, noAssert) {
	    if (!noAssert) {
	      checkIEEE754(buf, value, offset, 8);
	    }

	    write(buf, value, offset, littleEndian, 52, 8);
	    return offset + 8;
	  }

	  Buffer.prototype.writeDoubleLE = function writeDoubleLE(value, offset, noAssert) {
	    return writeDouble(this, value, offset, true, noAssert);
	  };

	  Buffer.prototype.writeDoubleBE = function writeDoubleBE(value, offset, noAssert) {
	    return writeDouble(this, value, offset, false, noAssert);
	  }; // copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)


	  Buffer.prototype.copy = function copy(target, targetStart, start, end) {
	    if (!start) start = 0;
	    if (!end && end !== 0) end = this.length;
	    if (targetStart >= target.length) targetStart = target.length;
	    if (!targetStart) targetStart = 0;
	    if (end > 0 && end < start) end = start; // Copy 0 bytes; we're done

	    if (end === start) return 0;
	    if (target.length === 0 || this.length === 0) return 0; // Fatal error conditions

	    if (targetStart < 0) {
	      throw new RangeError('targetStart out of bounds');
	    }

	    if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds');
	    if (end < 0) throw new RangeError('sourceEnd out of bounds'); // Are we oob?

	    if (end > this.length) end = this.length;

	    if (target.length - targetStart < end - start) {
	      end = target.length - targetStart + start;
	    }

	    var len = end - start;
	    var i;

	    if (this === target && start < targetStart && targetStart < end) {
	      // descending copy from end
	      for (i = len - 1; i >= 0; --i) {
	        target[i + targetStart] = this[i + start];
	      }
	    } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
	      // ascending copy from start
	      for (i = 0; i < len; ++i) {
	        target[i + targetStart] = this[i + start];
	      }
	    } else {
	      Uint8Array.prototype.set.call(target, this.subarray(start, start + len), targetStart);
	    }

	    return len;
	  }; // Usage:
	  //    buffer.fill(number[, offset[, end]])
	  //    buffer.fill(buffer[, offset[, end]])
	  //    buffer.fill(string[, offset[, end]][, encoding])


	  Buffer.prototype.fill = function fill(val, start, end, encoding) {
	    // Handle string cases:
	    if (typeof val === 'string') {
	      if (typeof start === 'string') {
	        encoding = start;
	        start = 0;
	        end = this.length;
	      } else if (typeof end === 'string') {
	        encoding = end;
	        end = this.length;
	      }

	      if (val.length === 1) {
	        var code = val.charCodeAt(0);

	        if (code < 256) {
	          val = code;
	        }
	      }

	      if (encoding !== undefined && typeof encoding !== 'string') {
	        throw new TypeError('encoding must be a string');
	      }

	      if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
	        throw new TypeError('Unknown encoding: ' + encoding);
	      }
	    } else if (typeof val === 'number') {
	      val = val & 255;
	    } // Invalid ranges are not set to a default, so can range check early.


	    if (start < 0 || this.length < start || this.length < end) {
	      throw new RangeError('Out of range index');
	    }

	    if (end <= start) {
	      return this;
	    }

	    start = start >>> 0;
	    end = end === undefined ? this.length : end >>> 0;
	    if (!val) val = 0;
	    var i;

	    if (typeof val === 'number') {
	      for (i = start; i < end; ++i) {
	        this[i] = val;
	      }
	    } else {
	      var bytes = internalIsBuffer(val) ? val : utf8ToBytes(new Buffer(val, encoding).toString());
	      var len = bytes.length;

	      for (i = 0; i < end - start; ++i) {
	        this[i + start] = bytes[i % len];
	      }
	    }

	    return this;
	  }; // HELPER FUNCTIONS
	  // ================


	  var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g;

	  function base64clean(str) {
	    // Node strips out invalid characters like \n and \t from the string, base64-js does not
	    str = stringtrim(str).replace(INVALID_BASE64_RE, ''); // Node converts strings with length < 2 to ''

	    if (str.length < 2) return ''; // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not

	    while (str.length % 4 !== 0) {
	      str = str + '=';
	    }

	    return str;
	  }

	  function stringtrim(str) {
	    if (str.trim) return str.trim();
	    return str.replace(/^\s+|\s+$/g, '');
	  }

	  function toHex(n) {
	    if (n < 16) return '0' + n.toString(16);
	    return n.toString(16);
	  }

	  function utf8ToBytes(string, units) {
	    units = units || Infinity;
	    var codePoint;
	    var length = string.length;
	    var leadSurrogate = null;
	    var bytes = [];

	    for (var i = 0; i < length; ++i) {
	      codePoint = string.charCodeAt(i); // is surrogate component

	      if (codePoint > 0xD7FF && codePoint < 0xE000) {
	        // last char was a lead
	        if (!leadSurrogate) {
	          // no lead yet
	          if (codePoint > 0xDBFF) {
	            // unexpected trail
	            if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
	            continue;
	          } else if (i + 1 === length) {
	            // unpaired lead
	            if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
	            continue;
	          } // valid lead


	          leadSurrogate = codePoint;
	          continue;
	        } // 2 leads in a row


	        if (codePoint < 0xDC00) {
	          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
	          leadSurrogate = codePoint;
	          continue;
	        } // valid surrogate pair


	        codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000;
	      } else if (leadSurrogate) {
	        // valid bmp char, but last char was a lead
	        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
	      }

	      leadSurrogate = null; // encode utf8

	      if (codePoint < 0x80) {
	        if ((units -= 1) < 0) break;
	        bytes.push(codePoint);
	      } else if (codePoint < 0x800) {
	        if ((units -= 2) < 0) break;
	        bytes.push(codePoint >> 0x6 | 0xC0, codePoint & 0x3F | 0x80);
	      } else if (codePoint < 0x10000) {
	        if ((units -= 3) < 0) break;
	        bytes.push(codePoint >> 0xC | 0xE0, codePoint >> 0x6 & 0x3F | 0x80, codePoint & 0x3F | 0x80);
	      } else if (codePoint < 0x110000) {
	        if ((units -= 4) < 0) break;
	        bytes.push(codePoint >> 0x12 | 0xF0, codePoint >> 0xC & 0x3F | 0x80, codePoint >> 0x6 & 0x3F | 0x80, codePoint & 0x3F | 0x80);
	      } else {
	        throw new Error('Invalid code point');
	      }
	    }

	    return bytes;
	  }

	  function asciiToBytes(str) {
	    var byteArray = [];

	    for (var i = 0; i < str.length; ++i) {
	      // Node's code seems to be doing this and not & 0x7F..
	      byteArray.push(str.charCodeAt(i) & 0xFF);
	    }

	    return byteArray;
	  }

	  function utf16leToBytes(str, units) {
	    var c, hi, lo;
	    var byteArray = [];

	    for (var i = 0; i < str.length; ++i) {
	      if ((units -= 2) < 0) break;
	      c = str.charCodeAt(i);
	      hi = c >> 8;
	      lo = c % 256;
	      byteArray.push(lo);
	      byteArray.push(hi);
	    }

	    return byteArray;
	  }

	  function base64ToBytes(str) {
	    return toByteArray(base64clean(str));
	  }

	  function blitBuffer(src, dst, offset, length) {
	    for (var i = 0; i < length; ++i) {
	      if (i + offset >= dst.length || i >= src.length) break;
	      dst[i + offset] = src[i];
	    }

	    return i;
	  }

	  function isnan(val) {
	    return val !== val; // eslint-disable-line no-self-compare
	  } // the following is from is-buffer, also by Feross Aboukhadijeh and with same lisence
	  // The _isBuffer check is for Safari 5-7 support, because it's missing
	  // Object.prototype.constructor. Remove this eventually


	  function isBuffer(obj) {
	    return obj != null && (!!obj._isBuffer || isFastBuffer(obj) || isSlowBuffer(obj));
	  }

	  function isFastBuffer(obj) {
	    return !!obj.constructor && typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj);
	  } // For Node v0.10 support. Remove this eventually.


	  function isSlowBuffer(obj) {
	    return typeof obj.readFloatLE === 'function' && typeof obj.slice === 'function' && isFastBuffer(obj.slice(0, 0));
	  }

	  var amplitude_umd = createCommonjsModule(function (module, exports) {
	    (function (global, factory) {
	       module.exports = factory() ;
	    })(commonjsGlobal$1, function () {

	      function _typeof$1(obj) {
	        if (typeof Symbol === "function" && _typeof(Symbol.iterator) === "symbol") {
	          _typeof$1 = function _typeof$1(obj) {
	            return _typeof(obj);
	          };
	        } else {
	          _typeof$1 = function _typeof$1(obj) {
	            return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof(obj);
	          };
	        }

	        return _typeof$1(obj);
	      }

	      function _classCallCheck(instance, Constructor) {
	        if (!(instance instanceof Constructor)) {
	          throw new TypeError("Cannot call a class as a function");
	        }
	      }

	      function _defineProperties(target, props) {
	        for (var i = 0; i < props.length; i++) {
	          var descriptor = props[i];
	          descriptor.enumerable = descriptor.enumerable || false;
	          descriptor.configurable = true;
	          if ("value" in descriptor) descriptor.writable = true;
	          Object.defineProperty(target, descriptor.key, descriptor);
	        }
	      }

	      function _createClass(Constructor, protoProps, staticProps) {
	        if (protoProps) _defineProperties(Constructor.prototype, protoProps);
	        if (staticProps) _defineProperties(Constructor, staticProps);
	        return Constructor;
	      }

	      function _defineProperty(obj, key, value) {
	        if (key in obj) {
	          Object.defineProperty(obj, key, {
	            value: value,
	            enumerable: true,
	            configurable: true,
	            writable: true
	          });
	        } else {
	          obj[key] = value;
	        }

	        return obj;
	      }

	      function _objectSpread(target) {
	        for (var i = 1; i < arguments.length; i++) {
	          var source = arguments[i] != null ? arguments[i] : {};
	          var ownKeys = Object.keys(source);

	          if (typeof Object.getOwnPropertySymbols === 'function') {
	            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
	              return Object.getOwnPropertyDescriptor(source, sym).enumerable;
	            }));
	          }

	          ownKeys.forEach(function (key) {
	            _defineProperty(target, key, source[key]);
	          });
	        }

	        return target;
	      }
	      /**
	       * Strings that have special meaning when used as an event's type
	       * and have different specifications.
	       */


	      var SpecialEventType;

	      (function (SpecialEventType) {
	        SpecialEventType["IDENTIFY"] = "$identify";
	      })(SpecialEventType || (SpecialEventType = {}));

	      var IdentifyOperation;

	      (function (IdentifyOperation) {
	        // Base Operations to set values
	        IdentifyOperation["SET"] = "$set";
	        IdentifyOperation["SET_ONCE"] = "$setOnce"; // Operations around modifying existing values

	        IdentifyOperation["ADD"] = "$add";
	        IdentifyOperation["APPEND"] = "$append";
	        IdentifyOperation["PREPEND"] = "$prepend";
	        IdentifyOperation["REMOVE"] = "$remove"; // Operations around appending values *if* they aren't present

	        IdentifyOperation["PREINSERT"] = "$preinsert";
	        IdentifyOperation["POSTINSERT"] = "$postinsert"; // Operations around removing properties/values

	        IdentifyOperation["UNSET"] = "$unset";
	        IdentifyOperation["CLEAR_ALL"] = "$clearAll";
	      })(IdentifyOperation || (IdentifyOperation = {}));
	      /** The default identity instance. Needs to match the default instance for the JS SDK */

	      /** Console logging verbosity for the SDK. */


	      var LogLevel;

	      (function (LogLevel) {
	        /** No logs will be generated. */
	        LogLevel[LogLevel["None"] = 0] = "None";
	        /** Only SDK internal errors will be logged. */

	        LogLevel[LogLevel["Error"] = 1] = "Error";
	        /** Information useful for debugging the SDK will be logged. */

	        LogLevel[LogLevel["Warn"] = 2] = "Warn";
	        /** All SDK actions will be logged. */

	        LogLevel[LogLevel["Verbose"] = 3] = "Verbose";
	      })(LogLevel || (LogLevel = {}));
	      /** The status of an event. */


	      var Status;

	      (function (Status) {
	        /** The status could not be determined. */
	        Status["Unknown"] = "unknown";
	        /** The event was skipped due to configuration or callbacks. */

	        Status["Skipped"] = "skipped";
	        /** The event was sent successfully. */

	        Status["Success"] = "success";
	        /** A user or device in the payload is currently rate limited and should try again later. */

	        Status["RateLimit"] = "rate_limit";
	        /** The sent payload was too large to be processed. */

	        Status["PayloadTooLarge"] = "payload_too_large";
	        /** The event could not be processed. */

	        Status["Invalid"] = "invalid";
	        /** A server-side error ocurred during submission. */

	        Status["Failed"] = "failed";
	      })(Status || (Status = {})); // tslint:disable:completed-docs
	      // tslint:disable:no-unnecessary-qualifier no-namespace


	      (function (Status) {
	        /**
	         * Converts a HTTP status code into a {@link Status}.
	         *
	         * @param code The HTTP response status code.
	         * @returns The send status or {@link Status.Unknown}.
	         */
	        function fromHttpCode(code) {
	          if (code >= 200 && code < 300) {
	            return Status.Success;
	          }

	          if (code === 429) {
	            return Status.RateLimit;
	          }

	          if (code === 413) {
	            return Status.PayloadTooLarge;
	          }

	          if (code >= 400 && code < 500) {
	            return Status.Invalid;
	          }

	          if (code >= 500) {
	            return Status.Failed;
	          }

	          return Status.Unknown;
	        }

	        Status.fromHttpCode = fromHttpCode;
	      })(Status || (Status = {}));
	      /** The Response to expect if a request might have been sent but it was skipped
	       *  e.g. no events to flush, user has opted out and nothing should be sent.
	       */


	      var SKIPPED_RESPONSE = {
	        status: Status.Skipped,
	        statusCode: 0
	      };
	      /**
	       * Checks whether we're in a Node.js environment
	       *
	       * @returns Answer to given question
	       */

	      function isNodeEnv() {
	        var _a;

	        return _typeof(process) === 'object' && ((_a = process === null || process === void 0 ? void 0 : process.versions) === null || _a === void 0 ? void 0 : _a.node) !== undefined;
	      }
	      /**
	       * Checks whether we're in a browser environment
	       *
	       * @returns Answer to given question
	       */


	      function isBrowserEnv() {
	        return (typeof window === "undefined" ? "undefined" : _typeof(window)) === 'object' && (window === null || window === void 0 ? void 0 : window.document) !== undefined;
	      }

	      var fallbackGlobalObject = {};
	      /**
	       * Safely get global scope object
	       *
	       * @returns Global scope object
	       */

	      var getGlobalObject = function getGlobalObject() {
	        return isNodeEnv() ? commonjsGlobal$1 : typeof window !== 'undefined' ? window : typeof self !== 'undefined' ? self : fallbackGlobalObject;
	      };

	      var getGlobalAmplitudeNamespace = function getGlobalAmplitudeNamespace() {
	        var global = getGlobalObject();
	        global.__AMPLITUDE__ = global.__AMPLITUDE__ || {};
	        return global.__AMPLITUDE__;
	      };
	      /**
	       * Fixes browser edge case where Prototype.js injects Array.prototype.toJSON and breaks the built-in JSON.stringify()
	       *
	       * @returns true if Array.prototype.toJSON was deleted, false if not
	       */


	      var prototypeJsFix = function prototypeJsFix() {
	        var _a;

	        if (isBrowserEnv()) {
	          var augmentedWindow = window;
	          var augmentedArray = Array;

	          if (augmentedWindow.Prototype !== undefined && ((_a = augmentedArray.prototype) === null || _a === void 0 ? void 0 : _a.toJSON) !== undefined) {
	            delete augmentedArray.prototype.toJSON;
	            return true;
	          }
	        }

	        return false;
	      }; // TODO: Type the global constant


	      var globalNamespace = getGlobalAmplitudeNamespace();
	      /** Prefix for logging strings */

	      var PREFIX = 'Amplitude Logger ';
	      /** JSDoc */

	      var Logger =
	      /** @class */
	      function () {
	        /** JSDoc */
	        function Logger() {
	          this._logLevel = 0;
	        }
	        /** JSDoc */


	        Logger.prototype.disable = function () {
	          this._logLevel = 0;
	        };
	        /** JSDoc */


	        Logger.prototype.enable = function (logLevel) {
	          if (logLevel === void 0) {
	            logLevel = LogLevel.Warn;
	          }

	          this._logLevel = logLevel;
	        };
	        /** JSDoc */


	        Logger.prototype.log = function () {
	          var args = [];

	          for (var _i = 0; _i < arguments.length; _i++) {
	            args[_i] = arguments[_i];
	          }

	          if (this._logLevel < LogLevel.Verbose) {
	            return;
	          }

	          commonjsGlobal$1.console.log(PREFIX + "[Log]: " + args.join(' ')); // tslint:disable-line:no-console
	        };
	        /** JSDoc */


	        Logger.prototype.warn = function () {
	          var args = [];

	          for (var _i = 0; _i < arguments.length; _i++) {
	            args[_i] = arguments[_i];
	          }

	          if (this._logLevel < LogLevel.Warn) {
	            return;
	          }

	          commonjsGlobal$1.console.warn(PREFIX + "[Warn]: " + args.join(' ')); // tslint:disable-line:no-console
	        };
	        /** JSDoc */


	        Logger.prototype.error = function () {
	          var args = [];

	          for (var _i = 0; _i < arguments.length; _i++) {
	            args[_i] = arguments[_i];
	          }

	          if (this._logLevel < LogLevel.Error) {
	            return;
	          }

	          commonjsGlobal$1.console.error(PREFIX + "[Error]: " + args.join(' ')); // tslint:disable-line:no-console
	        };

	        return Logger;
	      }(); // Ensure we only have a single logger instance, even if multiple versions of @amplitude/utils are being used


	      var logger = globalNamespace.logger || (globalNamespace.logger = new Logger());
	      var Constants = {
	        DEFAULT_INSTANCE: '$default_instance',
	        API_VERSION: 2,
	        MAX_STRING_LENGTH: 4096,
	        MAX_PROPERTY_KEYS: 1000,
	        IDENTIFY_EVENT: '$identify',
	        GROUP_IDENTIFY_EVENT: '$groupidentify',
	        // localStorageKeys
	        LAST_EVENT_ID: 'amplitude_lastEventId',
	        LAST_EVENT_TIME: 'amplitude_lastEventTime',
	        LAST_IDENTIFY_ID: 'amplitude_lastIdentifyId',
	        LAST_SEQUENCE_NUMBER: 'amplitude_lastSequenceNumber',
	        SESSION_ID: 'amplitude_sessionId',
	        // Used in cookie as well
	        DEVICE_ID: 'amplitude_deviceId',
	        OPT_OUT: 'amplitude_optOut',
	        USER_ID: 'amplitude_userId',
	        COOKIE_TEST_PREFIX: 'amp_cookie_test',
	        COOKIE_PREFIX: 'amp',
	        // Storage options
	        STORAGE_DEFAULT: '',
	        STORAGE_COOKIES: 'cookies',
	        STORAGE_NONE: 'none',
	        STORAGE_LOCAL: 'localStorage',
	        STORAGE_SESSION: 'sessionStorage',
	        // revenue keys
	        REVENUE_EVENT: 'revenue_amount',
	        REVENUE_PRODUCT_ID: '$productId',
	        REVENUE_QUANTITY: '$quantity',
	        REVENUE_PRICE: '$price',
	        REVENUE_REVENUE_TYPE: '$revenueType',
	        AMP_DEVICE_ID_PARAM: 'amp_device_id',
	        // url param
	        REFERRER: 'referrer',
	        // UTM Params
	        UTM_SOURCE: 'utm_source',
	        UTM_MEDIUM: 'utm_medium',
	        UTM_CAMPAIGN: 'utm_campaign',
	        UTM_TERM: 'utm_term',
	        UTM_CONTENT: 'utm_content',
	        ATTRIBUTION_EVENT: '[Amplitude] Attribution Captured'
	      };
	      /*
	       * UTF-8 encoder/decoder
	       * http://www.webtoolkit.info/
	       */

	      var UTF8 = {
	        encode: function encode(s) {
	          var utftext = '';

	          for (var n = 0; n < s.length; n++) {
	            var c = s.charCodeAt(n);

	            if (c < 128) {
	              utftext += String.fromCharCode(c);
	            } else if (c > 127 && c < 2048) {
	              utftext += String.fromCharCode(c >> 6 | 192);
	              utftext += String.fromCharCode(c & 63 | 128);
	            } else {
	              utftext += String.fromCharCode(c >> 12 | 224);
	              utftext += String.fromCharCode(c >> 6 & 63 | 128);
	              utftext += String.fromCharCode(c & 63 | 128);
	            }
	          }

	          return utftext;
	        },
	        decode: function decode(utftext) {
	          var s = '';
	          var i = 0;
	          var c = 0,
	              c1 = 0,
	              c2 = 0;

	          while (i < utftext.length) {
	            c = utftext.charCodeAt(i);

	            if (c < 128) {
	              s += String.fromCharCode(c);
	              i++;
	            } else if (c > 191 && c < 224) {
	              c1 = utftext.charCodeAt(i + 1);
	              s += String.fromCharCode((c & 31) << 6 | c1 & 63);
	              i += 2;
	            } else {
	              c1 = utftext.charCodeAt(i + 1);
	              c2 = utftext.charCodeAt(i + 2);
	              s += String.fromCharCode((c & 15) << 12 | (c1 & 63) << 6 | c2 & 63);
	              i += 3;
	            }
	          }

	          return s;
	        }
	      };
	      /*
	       * Base64 encoder/decoder
	       * http://www.webtoolkit.info/
	       */

	      var Base64 = {
	        _keyStr: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=',
	        encode: function encode(input) {
	          try {
	            if (window.btoa && window.atob) {
	              return window.btoa(unescape(encodeURIComponent(input)));
	            }
	          } catch (e) {//log(e);
	          }

	          return Base64._encode(input);
	        },
	        _encode: function _encode(input) {
	          var output = '';
	          var chr1, chr2, chr3, enc1, enc2, enc3, enc4;
	          var i = 0;
	          input = UTF8.encode(input);

	          while (i < input.length) {
	            chr1 = input.charCodeAt(i++);
	            chr2 = input.charCodeAt(i++);
	            chr3 = input.charCodeAt(i++);
	            enc1 = chr1 >> 2;
	            enc2 = (chr1 & 3) << 4 | chr2 >> 4;
	            enc3 = (chr2 & 15) << 2 | chr3 >> 6;
	            enc4 = chr3 & 63;

	            if (isNaN(chr2)) {
	              enc3 = enc4 = 64;
	            } else if (isNaN(chr3)) {
	              enc4 = 64;
	            }

	            output = output + Base64._keyStr.charAt(enc1) + Base64._keyStr.charAt(enc2) + Base64._keyStr.charAt(enc3) + Base64._keyStr.charAt(enc4);
	          }

	          return output;
	        },
	        decode: function decode(input) {
	          try {
	            if (window.btoa && window.atob) {
	              return decodeURIComponent(escape(window.atob(input)));
	            }
	          } catch (e) {//log(e);
	          }

	          return Base64._decode(input);
	        },
	        _decode: function _decode(input) {
	          var output = '';
	          var chr1, chr2, chr3;
	          var enc1, enc2, enc3, enc4;
	          var i = 0;
	          input = input.replace(/[^A-Za-z0-9+/=]/g, '');

	          while (i < input.length) {
	            enc1 = Base64._keyStr.indexOf(input.charAt(i++));
	            enc2 = Base64._keyStr.indexOf(input.charAt(i++));
	            enc3 = Base64._keyStr.indexOf(input.charAt(i++));
	            enc4 = Base64._keyStr.indexOf(input.charAt(i++));
	            chr1 = enc1 << 2 | enc2 >> 4;
	            chr2 = (enc2 & 15) << 4 | enc3 >> 2;
	            chr3 = (enc3 & 3) << 6 | enc4;
	            output = output + String.fromCharCode(chr1);

	            if (enc3 !== 64) {
	              output = output + String.fromCharCode(chr2);
	            }

	            if (enc4 !== 64) {
	              output = output + String.fromCharCode(chr3);
	            }
	          }

	          output = UTF8.decode(output);
	          return output;
	        }
	      };
	      /**
	       * toString ref.
	       * @private
	       */

	      var toString = Object.prototype.toString;
	      /**
	       * Return the type of `val`.
	       * @private
	       * @param {Mixed} val
	       * @return {String}
	       * @api public
	       */

	      function type(val) {
	        switch (toString.call(val)) {
	          case '[object Date]':
	            return 'date';

	          case '[object RegExp]':
	            return 'regexp';

	          case '[object Arguments]':
	            return 'arguments';

	          case '[object Array]':
	            return 'array';

	          case '[object Error]':
	            return 'error';
	        }

	        if (val === null) {
	          return 'null';
	        }

	        if (val === undefined) {
	          return 'undefined';
	        }

	        if (val !== val) {
	          return 'nan';
	        }

	        if (val && val.nodeType === 1) {
	          return 'element';
	        }

	        if (typeof Buffer !== 'undefined' && typeof isBuffer === 'function' && isBuffer(val)) {
	          return 'buffer';
	        }

	        val = val.valueOf ? val.valueOf() : Object.prototype.valueOf.apply(val);
	        return _typeof$1(val);
	      }

	      var logLevels = {
	        DISABLE: 0,
	        ERROR: 1,
	        WARN: 2,
	        INFO: 3
	      };
	      var logLevel = logLevels.WARN;

	      var setLogLevel = function setLogLevel(logLevelName) {
	        if (logLevels.hasOwnProperty(logLevelName)) {
	          logLevel = logLevels[logLevelName];
	        }
	      };

	      var getLogLevel = function getLogLevel() {
	        return logLevel;
	      };

	      var log = {
	        error: function error(s) {
	          if (logLevel >= logLevels.ERROR) {
	            _log(s);
	          }
	        },
	        warn: function warn(s) {
	          if (logLevel >= logLevels.WARN) {
	            _log(s);
	          }
	        },
	        info: function info(s) {
	          if (logLevel >= logLevels.INFO) {
	            _log(s);
	          }
	        }
	      };

	      var _log = function _log(s) {
	        try {
	          console.log('[Amplitude] ' + s);
	        } catch (e) {// console logging not available
	        }
	      };

	      var isEmptyString = function isEmptyString(str) {
	        return !str || str.length === 0;
	      };

	      var sessionStorageEnabled = function sessionStorageEnabled() {
	        try {
	          if (window.sessionStorage) {
	            return true;
	          }
	        } catch (e) {// sessionStorage disabled
	        }

	        return false;
	      }; // truncate string values in event and user properties so that request size does not get too large


	      var truncate = function truncate(value) {
	        if (type(value) === 'array') {
	          for (var i = 0; i < value.length; i++) {
	            value[i] = truncate(value[i]);
	          }
	        } else if (type(value) === 'object') {
	          for (var key in value) {
	            if (key in value) {
	              value[key] = truncate(value[key]);
	            }
	          }
	        } else {
	          value = _truncateValue(value);
	        }

	        return value;
	      };

	      var _truncateValue = function _truncateValue(value) {
	        if (type(value) === 'string') {
	          return value.length > Constants.MAX_STRING_LENGTH ? value.substring(0, Constants.MAX_STRING_LENGTH) : value;
	        }

	        return value;
	      };

	      var validateInput = function validateInput(input, name, expectedType) {
	        if (type(input) !== expectedType) {
	          log.error('Invalid ' + name + ' input type. Expected ' + expectedType + ' but received ' + type(input));
	          return false;
	        }

	        return true;
	      }; // do some basic sanitization and type checking, also catch property dicts with more than 1000 key/value pairs


	      var validateProperties = function validateProperties(properties) {
	        var propsType = type(properties);

	        if (propsType !== 'object') {
	          log.error('Error: invalid properties format. Expecting Javascript object, received ' + propsType + ', ignoring');
	          return {};
	        }

	        if (Object.keys(properties).length > Constants.MAX_PROPERTY_KEYS) {
	          log.error('Error: too many properties (more than 1000), ignoring');
	          return {};
	        }

	        var copy = {}; // create a copy with all of the valid properties

	        for (var property in properties) {
	          if (!(property in properties)) {
	            continue;
	          } // validate key


	          var key = property;
	          var keyType = type(key);

	          if (keyType !== 'string') {
	            key = String(key);
	            log.warn('WARNING: Non-string property key, received type ' + keyType + ', coercing to string "' + key + '"');
	          } // validate value


	          var value = validatePropertyValue(key, properties[property]);

	          if (value === null) {
	            continue;
	          }

	          copy[key] = value;
	        }

	        return copy;
	      };

	      var invalidValueTypes = ['nan', 'function', 'arguments', 'regexp', 'element'];

	      var validatePropertyValue = function validatePropertyValue(key, value) {
	        var valueType = type(value);

	        if (invalidValueTypes.indexOf(valueType) !== -1) {
	          log.warn('WARNING: Property key "' + key + '" with invalid value type ' + valueType + ', ignoring');
	          value = null;
	        } else if (valueType === 'undefined') {
	          value = null;
	        } else if (valueType === 'error') {
	          value = String(value);
	          log.warn('WARNING: Property key "' + key + '" with value type error, coercing to ' + value);
	        } else if (valueType === 'array') {
	          // check for nested arrays or objects
	          var arrayCopy = [];

	          for (var i = 0; i < value.length; i++) {
	            var element = value[i];
	            var elemType = type(element);

	            if (elemType === 'array') {
	              log.warn('WARNING: Cannot have ' + elemType + ' nested in an array property value, skipping');
	              continue;
	            } else if (elemType === 'object') {
	              arrayCopy.push(validateProperties(element));
	            } else {
	              arrayCopy.push(validatePropertyValue(key, element));
	            }
	          }

	          value = arrayCopy;
	        } else if (valueType === 'object') {
	          value = validateProperties(value);
	        }

	        return value;
	      };

	      var validateGroups = function validateGroups(groups) {
	        var groupsType = type(groups);

	        if (groupsType !== 'object') {
	          log.error('Error: invalid groups format. Expecting Javascript object, received ' + groupsType + ', ignoring');
	          return {};
	        }

	        var copy = {}; // create a copy with all of the valid properties

	        for (var group in groups) {
	          if (!groups.hasOwnProperty(group)) {
	            continue;
	          } // validate key


	          var key = group;
	          var keyType = type(key);

	          if (keyType !== 'string') {
	            key = String(key);
	            log.warn('WARNING: Non-string groupType, received type ' + keyType + ', coercing to string "' + key + '"');
	          } // validate value


	          var value = validateGroupName(key, groups[group]);

	          if (value === null) {
	            continue;
	          }

	          copy[key] = value;
	        }

	        return copy;
	      };

	      var validateGroupName = function validateGroupName(key, groupName) {
	        var groupNameType = type(groupName);

	        if (groupNameType === 'string') {
	          return groupName;
	        }

	        if (groupNameType === 'date' || groupNameType === 'number' || groupNameType === 'boolean') {
	          groupName = String(groupName);
	          log.warn('WARNING: Non-string groupName, received type ' + groupNameType + ', coercing to string "' + groupName + '"');
	          return groupName;
	        }

	        if (groupNameType === 'array') {
	          // check for nested arrays or objects
	          var arrayCopy = [];

	          for (var i = 0; i < groupName.length; i++) {
	            var element = groupName[i];
	            var elemType = type(element);

	            if (elemType === 'array' || elemType === 'object') {
	              log.warn('WARNING: Skipping nested ' + elemType + ' in array groupName');
	              continue;
	            } else if (elemType === 'string') {
	              arrayCopy.push(element);
	            } else if (elemType === 'date' || elemType === 'number' || elemType === 'boolean') {
	              element = String(element);
	              log.warn('WARNING: Non-string groupName, received type ' + elemType + ', coercing to string "' + element + '"');
	              arrayCopy.push(element);
	            }
	          }

	          return arrayCopy;
	        }

	        log.warn('WARNING: Non-string groupName, received type ' + groupNameType + '. Please use strings or array of strings for groupName');
	      }; // parses the value of a url param (for example ?gclid=1234&...)


	      var getQueryParam = function getQueryParam(name, query) {
	        name = name.replace(/[[]/, '\\[').replace(/[\]]/, '\\]');
	        var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
	        var results = regex.exec(query);
	        return results === null ? undefined : decodeURIComponent(results[1].replace(/\+/g, ' '));
	      };

	      var utils = {
	        setLogLevel: setLogLevel,
	        getLogLevel: getLogLevel,
	        logLevels: logLevels,
	        log: log,
	        isEmptyString: isEmptyString,
	        getQueryParam: getQueryParam,
	        sessionStorageEnabled: sessionStorageEnabled,
	        truncate: truncate,
	        validateGroups: validateGroups,
	        validateInput: validateInput,
	        validateProperties: validateProperties
	      };

	      var getLocation = function getLocation() {
	        return window.location;
	      }; // A URL safe variation on the the list of Base64 characters


	      var base64Chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_';

	      var base64Id = function base64Id() {
	        var str = '';

	        for (var i = 0; i < 22; ++i) {
	          str += base64Chars.charAt(Math.floor(Math.random() * 64));
	        }

	        return str;
	      };

	      var get = function get(name) {
	        try {
	          var ca = document.cookie.split(';');
	          var value = null;

	          for (var i = 0; i < ca.length; i++) {
	            var c = ca[i];

	            while (c.charAt(0) === ' ') {
	              c = c.substring(1, c.length);
	            }

	            if (c.indexOf(name) === 0) {
	              value = c.substring(name.length, c.length);
	              break;
	            }
	          }

	          return value;
	        } catch (e) {
	          return null;
	        }
	      };

	      var set = function set(name, value, opts) {
	        var expires = value !== null ? opts.expirationDays : -1;

	        if (expires) {
	          var date = new Date();
	          date.setTime(date.getTime() + expires * 24 * 60 * 60 * 1000);
	          expires = date;
	        }

	        var str = name + '=' + value;

	        if (expires) {
	          str += '; expires=' + expires.toUTCString();
	        }

	        str += '; path=/';

	        if (opts.domain) {
	          str += '; domain=' + opts.domain;
	        }

	        if (opts.secure) {
	          str += '; Secure';
	        }

	        if (opts.sameSite) {
	          str += '; SameSite=' + opts.sameSite;
	        }

	        document.cookie = str;
	      }; // test that cookies are enabled - navigator.cookiesEnabled yields false positives in IE, need to test directly


	      var areCookiesEnabled = function areCookiesEnabled() {
	        var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	        var uid = String(new Date());

	        try {
	          var cookieName = Constants.COOKIE_TEST_PREFIX + base64Id();
	          set(cookieName, uid, opts);

	          var _areCookiesEnabled = get(cookieName + '=') === uid;

	          set(cookieName, null, opts);
	          return _areCookiesEnabled;
	        } catch (e) {}
	        /* eslint-disable-line no-empty */


	        return false;
	      };

	      var baseCookie = {
	        set: set,
	        get: get,
	        areCookiesEnabled: areCookiesEnabled
	      };

	      var getHost = function getHost(url) {
	        var a = document.createElement('a');
	        a.href = url;
	        return a.hostname || location.hostname;
	      };

	      var topDomain = function topDomain(url) {
	        var host = getHost(url);
	        var parts = host.split('.');
	        var levels = [];
	        var cname = '_tldtest_' + base64Id();

	        for (var i = parts.length - 2; i >= 0; --i) {
	          levels.push(parts.slice(i).join('.'));
	        }

	        for (var _i = 0; _i < levels.length; ++_i) {
	          var domain = levels[_i];
	          var opts = {
	            domain: '.' + domain
	          };
	          baseCookie.set(cname, 1, opts);

	          if (baseCookie.get(cname)) {
	            baseCookie.set(cname, null, opts);
	            return domain;
	          }
	        }

	        return '';
	      };
	      /*
	       * Cookie data
	       */


	      var _options = {
	        expirationDays: undefined,
	        domain: undefined
	      };

	      var reset = function reset() {
	        _options = {
	          expirationDays: undefined,
	          domain: undefined
	        };
	      };

	      var options = function options(opts) {
	        if (arguments.length === 0) {
	          return _options;
	        }

	        opts = opts || {};
	        _options.expirationDays = opts.expirationDays;
	        _options.secure = opts.secure;
	        _options.sameSite = opts.sameSite;
	        var domain = !utils.isEmptyString(opts.domain) ? opts.domain : '.' + topDomain(getLocation().href);
	        var token = Math.random();
	        _options.domain = domain;
	        set$1('amplitude_test', token);
	        var stored = get$1('amplitude_test');

	        if (!stored || stored !== token) {
	          domain = null;
	        }

	        remove('amplitude_test');
	        _options.domain = domain;
	        return _options;
	      };

	      var _domainSpecific = function _domainSpecific(name) {
	        // differentiate between cookies on different domains
	        var suffix = '';

	        if (_options.domain) {
	          suffix = _options.domain.charAt(0) === '.' ? _options.domain.substring(1) : _options.domain;
	        }

	        return name + suffix;
	      };

	      var get$1 = function get(name) {
	        var nameEq = _domainSpecific(name) + '=';
	        var value = baseCookie.get(nameEq);

	        try {
	          if (value) {
	            return JSON.parse(Base64.decode(value));
	          }
	        } catch (e) {
	          return null;
	        }

	        return null;
	      };

	      var set$1 = function set(name, value) {
	        try {
	          baseCookie.set(_domainSpecific(name), Base64.encode(JSON.stringify(value)), _options);
	          return true;
	        } catch (e) {
	          return false;
	        }
	      };

	      var setRaw = function setRaw(name, value) {
	        try {
	          baseCookie.set(_domainSpecific(name), value, _options);
	          return true;
	        } catch (e) {
	          return false;
	        }
	      };

	      var getRaw = function getRaw(name) {
	        var nameEq = _domainSpecific(name) + '=';
	        return baseCookie.get(nameEq);
	      };

	      var remove = function remove(name) {
	        try {
	          baseCookie.set(_domainSpecific(name), null, _options);
	          return true;
	        } catch (e) {
	          return false;
	        }
	      };

	      var Cookie = {
	        reset: reset,
	        options: options,
	        get: get$1,
	        set: set$1,
	        remove: remove,
	        setRaw: setRaw,
	        getRaw: getRaw
	      };
	      /*
	       * Implement localStorage to support Firefox 2-3 and IE 5-7
	       */

	      var localStorage;
	      {
	        // test that Window.localStorage is available and works
	        var windowLocalStorageAvailable = function windowLocalStorageAvailable() {
	          var uid = new Date();
	          var result;

	          try {
	            window.localStorage.setItem(uid, uid);
	            result = window.localStorage.getItem(uid) === String(uid);
	            window.localStorage.removeItem(uid);
	            return result;
	          } catch (e) {// localStorage not available
	          }

	          return false;
	        };

	        if (windowLocalStorageAvailable()) {
	          localStorage = window.localStorage;
	        } else if (window.globalStorage) {
	          // Firefox 2-3 use globalStorage
	          // See https://developer.mozilla.org/en/dom/storage#globalStorage
	          try {
	            localStorage = window.globalStorage[window.location.hostname];
	          } catch (e) {// Something bad happened...
	          }
	        } else if (typeof document !== 'undefined') {
	          // IE 5-7 use userData
	          // See http://msdn.microsoft.com/en-us/library/ms531424(v=vs.85).aspx
	          var div = document.createElement('div'),
	              attrKey = 'localStorage';
	          div.style.display = 'none';
	          document.getElementsByTagName('head')[0].appendChild(div);

	          if (div.addBehavior) {
	            div.addBehavior('#default#userdata');
	            localStorage = {
	              length: 0,
	              setItem: function setItem(k, v) {
	                div.load(attrKey);

	                if (!div.getAttribute(k)) {
	                  this.length++;
	                }

	                div.setAttribute(k, v);
	                div.save(attrKey);
	              },
	              getItem: function getItem(k) {
	                div.load(attrKey);
	                return div.getAttribute(k);
	              },
	              removeItem: function removeItem(k) {
	                div.load(attrKey);

	                if (div.getAttribute(k)) {
	                  this.length--;
	                }

	                div.removeAttribute(k);
	                div.save(attrKey);
	              },
	              clear: function clear() {
	                div.load(attrKey);
	                var i = 0;
	                var attr;

	                while (attr = div.XMLDocument.documentElement.attributes[i++]) {
	                  div.removeAttribute(attr.name);
	                }

	                div.save(attrKey);
	                this.length = 0;
	              },
	              key: function key(k) {
	                div.load(attrKey);
	                return div.XMLDocument.documentElement.attributes[k];
	              }
	            };
	            div.load(attrKey);
	            localStorage.length = div.XMLDocument.documentElement.attributes.length;
	          }
	        }

	        if (!localStorage) {
	          /* eslint-disable no-unused-vars */
	          localStorage = {
	            length: 0,
	            setItem: function setItem(k, v) {},
	            getItem: function getItem(k) {},
	            removeItem: function removeItem(k) {},
	            clear: function clear() {},
	            key: function key(k) {}
	          };
	          /* eslint-enable no-unused-vars */
	        }
	      }
	      var localStorage$1 = localStorage;
	      /*
	       * Abstraction layer for cookie storage.
	       * Uses cookie if available, otherwise fallback to localstorage.
	       */

	      var cookieStorage = function cookieStorage() {
	        this.storage = null;
	      };

	      cookieStorage.prototype.getStorage = function () {
	        if (this.storage !== null) {
	          return this.storage;
	        }

	        if (baseCookie.areCookiesEnabled()) {
	          this.storage = Cookie;
	        } else {
	          // if cookies disabled, fallback to localstorage
	          // note: localstorage does not persist across subdomains
	          var keyPrefix = 'amp_cookiestore_';
	          this.storage = {
	            _options: {
	              expirationDays: undefined,
	              domain: undefined,
	              secure: false
	            },
	            reset: function reset() {
	              this._options = {
	                expirationDays: undefined,
	                domain: undefined,
	                secure: false
	              };
	            },
	            options: function options(opts) {
	              if (arguments.length === 0) {
	                return this._options;
	              }

	              opts = opts || {};
	              this._options.expirationDays = opts.expirationDays || this._options.expirationDays; // localStorage is specific to subdomains

	              this._options.domain = opts.domain || this._options.domain || window && window.location && window.location.hostname;
	              return this._options.secure = opts.secure || false;
	            },
	            get: function get(name) {
	              try {
	                return JSON.parse(localStorage$1.getItem(keyPrefix + name));
	              } catch (e) {}
	              /* eslint-disable-line no-empty */


	              return null;
	            },
	            set: function set(name, value) {
	              try {
	                localStorage$1.setItem(keyPrefix + name, JSON.stringify(value));
	                return true;
	              } catch (e) {}
	              /* eslint-disable-line no-empty */


	              return false;
	            },
	            remove: function remove(name) {
	              try {
	                localStorage$1.removeItem(keyPrefix + name);
	              } catch (e) {
	                return false;
	              }
	            }
	          };
	        }

	        return this.storage;
	      };

	      var _storageOptionExists;

	      var storageOptionExists = (_storageOptionExists = {}, _defineProperty(_storageOptionExists, Constants.STORAGE_COOKIES, true), _defineProperty(_storageOptionExists, Constants.STORAGE_NONE, true), _defineProperty(_storageOptionExists, Constants.STORAGE_LOCAL, true), _defineProperty(_storageOptionExists, Constants.STORAGE_SESSION, true), _storageOptionExists);
	      /**
	       * MetadataStorage involves SDK data persistance
	       * storage priority: cookies -> localStorage -> in memory
	       * This priority can be overriden by setting the storage options.
	       * if in localStorage, unable track users between subdomains
	       * if in memory, then memory can't be shared between different tabs
	       */

	      var MetadataStorage = /*#__PURE__*/function () {
	        function MetadataStorage(_ref) {
	          var storageKey = _ref.storageKey,
	              disableCookies = _ref.disableCookies,
	              domain = _ref.domain,
	              secure = _ref.secure,
	              sameSite = _ref.sameSite,
	              expirationDays = _ref.expirationDays,
	              storage = _ref.storage;

	          _classCallCheck(this, MetadataStorage);

	          this.storageKey = storageKey;
	          this.domain = domain;
	          this.secure = secure;
	          this.sameSite = sameSite;
	          this.expirationDays = expirationDays;
	          this.cookieDomain = '';
	          {
	            var writableTopDomain = topDomain(getLocation().href);
	            this.cookieDomain = domain || (writableTopDomain ? '.' + writableTopDomain : null);
	          }

	          if (storageOptionExists[storage]) {
	            this.storage = storage;
	          } else {
	            var disableCookieStorage = disableCookies || !baseCookie.areCookiesEnabled({
	              domain: this.cookieDomain,
	              secure: this.secure,
	              sameSite: this.sameSite,
	              expirationDays: this.expirationDays
	            });

	            if (disableCookieStorage) {
	              this.storage = Constants.STORAGE_LOCAL;
	            } else {
	              this.storage = Constants.STORAGE_COOKIES;
	            }
	          }
	        }

	        _createClass(MetadataStorage, [{
	          key: "getCookieStorageKey",
	          value: function getCookieStorageKey() {
	            if (!this.domain) {
	              return this.storageKey;
	            }

	            var suffix = this.domain.charAt(0) === '.' ? this.domain.substring(1) : this.domain;
	            return "".concat(this.storageKey).concat(suffix ? "_".concat(suffix) : '');
	          }
	          /*
	           * Data is saved as delimited values rather than JSO to minimize cookie space
	           * Should not change order of the items
	           */

	        }, {
	          key: "save",
	          value: function save(_ref2) {
	            var deviceId = _ref2.deviceId,
	                userId = _ref2.userId,
	                optOut = _ref2.optOut,
	                sessionId = _ref2.sessionId,
	                lastEventTime = _ref2.lastEventTime,
	                eventId = _ref2.eventId,
	                identifyId = _ref2.identifyId,
	                sequenceNumber = _ref2.sequenceNumber;

	            if (this.storage === Constants.STORAGE_NONE) {
	              return;
	            }

	            var value = [deviceId, Base64.encode(userId || ''), // used to convert not unicode to alphanumeric since cookies only use alphanumeric
	            optOut ? '1' : '', sessionId ? sessionId.toString(32) : '0', // generated when instantiated, timestamp (but re-uses session id in cookie if not expired) @TODO clients may want custom session id
	            lastEventTime ? lastEventTime.toString(32) : '0', // last time an event was set
	            eventId ? eventId.toString(32) : '0', identifyId ? identifyId.toString(32) : '0', sequenceNumber ? sequenceNumber.toString(32) : '0'].join('.');

	            switch (this.storage) {
	              case Constants.STORAGE_SESSION:
	                if (window.sessionStorage) {
	                  window.sessionStorage.setItem(this.storageKey, value);
	                }

	                break;

	              case Constants.STORAGE_LOCAL:
	                localStorage$1.setItem(this.storageKey, value);
	                break;

	              case Constants.STORAGE_COOKIES:
	                baseCookie.set(this.getCookieStorageKey(), value, {
	                  domain: this.cookieDomain,
	                  secure: this.secure,
	                  sameSite: this.sameSite,
	                  expirationDays: this.expirationDays
	                });
	                break;
	            }
	          }
	        }, {
	          key: "load",
	          value: function load() {
	            var str;

	            if (this.storage === Constants.STORAGE_COOKIES) {
	              str = baseCookie.get(this.getCookieStorageKey() + '=');
	            }

	            if (!str) {
	              str = localStorage$1.getItem(this.storageKey);
	            }

	            if (!str) {
	              str = window.sessionStorage && window.sessionStorage.getItem(this.storageKey);
	            }

	            if (!str) {
	              return null;
	            }

	            var values = str.split('.');
	            var userId = null;

	            if (values[1]) {
	              try {
	                userId = Base64.decode(values[1]);
	              } catch (e) {
	                userId = null;
	              }
	            }

	            return {
	              deviceId: values[0],
	              userId: userId,
	              optOut: values[2] === '1',
	              sessionId: parseInt(values[3], 32),
	              lastEventTime: parseInt(values[4], 32),
	              eventId: parseInt(values[5], 32),
	              identifyId: parseInt(values[6], 32),
	              sequenceNumber: parseInt(values[7], 32)
	            };
	          }
	        }]);

	        return MetadataStorage;
	      }();

	      var getUtmData = function getUtmData(rawCookie, query) {
	        // Translate the utmz cookie format into url query string format.
	        var cookie = rawCookie ? '?' + rawCookie.split('.').slice(-1)[0].replace(/\|/g, '&') : '';

	        var fetchParam = function fetchParam(queryName, query, cookieName, cookie) {
	          return utils.getQueryParam(queryName, query) || utils.getQueryParam(cookieName, cookie);
	        };

	        var utmSource = fetchParam(Constants.UTM_SOURCE, query, 'utmcsr', cookie);
	        var utmMedium = fetchParam(Constants.UTM_MEDIUM, query, 'utmcmd', cookie);
	        var utmCampaign = fetchParam(Constants.UTM_CAMPAIGN, query, 'utmccn', cookie);
	        var utmTerm = fetchParam(Constants.UTM_TERM, query, 'utmctr', cookie);
	        var utmContent = fetchParam(Constants.UTM_CONTENT, query, 'utmcct', cookie);
	        var utmData = {};

	        var addIfNotNull = function addIfNotNull(key, value) {
	          if (!utils.isEmptyString(value)) {
	            utmData[key] = value;
	          }
	        };

	        addIfNotNull(Constants.UTM_SOURCE, utmSource);
	        addIfNotNull(Constants.UTM_MEDIUM, utmMedium);
	        addIfNotNull(Constants.UTM_CAMPAIGN, utmCampaign);
	        addIfNotNull(Constants.UTM_TERM, utmTerm);
	        addIfNotNull(Constants.UTM_CONTENT, utmContent);
	        return utmData;
	      };
	      /*
	       * Wrapper for a user properties JSON object that supports operations.
	       * Note: if a user property is used in multiple operations on the same Identify object,
	       * only the first operation will be saved, and the rest will be ignored.
	       */


	      var AMP_OP_ADD = '$add';
	      var AMP_OP_APPEND = '$append';
	      var AMP_OP_CLEAR_ALL = '$clearAll';
	      var AMP_OP_PREPEND = '$prepend';
	      var AMP_OP_SET = '$set';
	      var AMP_OP_SET_ONCE = '$setOnce';
	      var AMP_OP_UNSET = '$unset';
	      /**
	       * Identify API - instance constructor. Identify objects are a wrapper for user property operations.
	       * Each method adds a user property operation to the Identify object, and returns the same Identify object,
	       * allowing you to chain multiple method calls together.
	       * Note: if the same user property is used in multiple operations on a single Identify object,
	       * only the first operation on that property will be saved, and the rest will be ignored.
	       * @constructor Identify
	       * @public
	       * @example var identify = new amplitude.Identify();
	       */

	      var Identify = function Identify() {
	        this.userPropertiesOperations = {};
	        this.properties = []; // keep track of keys that have been added
	      };
	      /**
	       * Increment a user property by a given value (can also be negative to decrement).
	       * If the user property does not have a value set yet, it will be initialized to 0 before being incremented.
	       * @public
	       * @param {string} property - The user property key.
	       * @param {number|string} value - The amount by which to increment the user property. Allows numbers as strings (ex: '123').
	       * @return {Identify} Returns the same Identify object, allowing you to chain multiple method calls together.
	       * @example var identify = new amplitude.Identify().add('karma', 1).add('friends', 1);
	       * amplitude.identify(identify); // send the Identify call
	       */


	      Identify.prototype.add = function (property, value) {
	        if (type(value) === 'number' || type(value) === 'string') {
	          this._addOperation(AMP_OP_ADD, property, value);
	        } else {
	          utils.log.error('Unsupported type for value: ' + type(value) + ', expecting number or string');
	        }

	        return this;
	      };
	      /**
	       * Append a value or values to a user property.
	       * If the user property does not have a value set yet,
	       * it will be initialized to an empty list before the new values are appended.
	       * If the user property has an existing value and it is not a list,
	       * the existing value will be converted into a list with the new values appended.
	       * @public
	       * @param {string} property - The user property key.
	       * @param {number|string|list|object} value - A value or values to append.
	       * Values can be numbers, strings, lists, or object (key:value dict will be flattened).
	       * @return {Identify} Returns the same Identify object, allowing you to chain multiple method calls together.
	       * @example var identify = new amplitude.Identify().append('ab-tests', 'new-user-tests');
	       * identify.append('some_list', [1, 2, 3, 4, 'values']);
	       * amplitude.identify(identify); // send the Identify call
	       */


	      Identify.prototype.append = function (property, value) {
	        this._addOperation(AMP_OP_APPEND, property, value);

	        return this;
	      };
	      /**
	       * Clear all user properties for the current user.
	       * SDK user should instead call amplitude.clearUserProperties() instead of using this.
	       * $clearAll needs to be sent on its own Identify object. If there are already other operations, then don't add $clearAll.
	       * If $clearAll already in an Identify object, don't allow other operations to be added.
	       * @private
	       */


	      Identify.prototype.clearAll = function () {
	        if (Object.keys(this.userPropertiesOperations).length > 0) {
	          if (!this.userPropertiesOperations.hasOwnProperty(AMP_OP_CLEAR_ALL)) {
	            utils.log.error('Need to send $clearAll on its own Identify object without any other operations, skipping $clearAll');
	          }

	          return this;
	        }

	        this.userPropertiesOperations[AMP_OP_CLEAR_ALL] = '-';
	        return this;
	      };
	      /**
	       * Prepend a value or values to a user property.
	       * Prepend means inserting the value or values at the front of a list.
	       * If the user property does not have a value set yet,
	       * it will be initialized to an empty list before the new values are prepended.
	       * If the user property has an existing value and it is not a list,
	       * the existing value will be converted into a list with the new values prepended.
	       * @public
	       * @param {string} property - The user property key.
	       * @param {number|string|list|object} value - A value or values to prepend.
	       * Values can be numbers, strings, lists, or object (key:value dict will be flattened).
	       * @return {Identify} Returns the same Identify object, allowing you to chain multiple method calls together.
	       * @example var identify = new amplitude.Identify().prepend('ab-tests', 'new-user-tests');
	       * identify.prepend('some_list', [1, 2, 3, 4, 'values']);
	       * amplitude.identify(identify); // send the Identify call
	       */


	      Identify.prototype.prepend = function (property, value) {
	        this._addOperation(AMP_OP_PREPEND, property, value);

	        return this;
	      };
	      /**
	       * Sets the value of a given user property. If a value already exists, it will be overwriten with the new value.
	       * @public
	       * @param {string} property - The user property key.
	       * @param {number|string|list|boolean|object} value - A value or values to set.
	       * Values can be numbers, strings, lists, or object (key:value dict will be flattened).
	       * @return {Identify} Returns the same Identify object, allowing you to chain multiple method calls together.
	       * @example var identify = new amplitude.Identify().set('user_type', 'beta');
	       * identify.set('name', {'first': 'John', 'last': 'Doe'}); // dict is flattened and becomes name.first: John, name.last: Doe
	       * amplitude.identify(identify); // send the Identify call
	       */


	      Identify.prototype.set = function (property, value) {
	        this._addOperation(AMP_OP_SET, property, value);

	        return this;
	      };
	      /**
	       * Sets the value of a given user property only once. Subsequent setOnce operations on that user property will be ignored;
	       * however, that user property can still be modified through any of the other operations.
	       * Useful for capturing properties such as 'initial_signup_date', 'initial_referrer', etc.
	       * @public
	       * @param {string} property - The user property key.
	       * @param {number|string|list|boolean|object} value - A value or values to set once.
	       * Values can be numbers, strings, lists, or object (key:value dict will be flattened).
	       * @return {Identify} Returns the same Identify object, allowing you to chain multiple method calls together.
	       * @example var identify = new amplitude.Identify().setOnce('sign_up_date', '2016-04-01');
	       * amplitude.identify(identify); // send the Identify call
	       */


	      Identify.prototype.setOnce = function (property, value) {
	        this._addOperation(AMP_OP_SET_ONCE, property, value);

	        return this;
	      };
	      /**
	       * Unset and remove a user property. This user property will no longer show up in a user's profile.
	       * @public
	       * @param {string} property - The user property key.
	       * @return {Identify} Returns the same Identify object, allowing you to chain multiple method calls together.
	       * @example var identify = new amplitude.Identify().unset('user_type').unset('age');
	       * amplitude.identify(identify); // send the Identify call
	       */


	      Identify.prototype.unset = function (property) {
	        this._addOperation(AMP_OP_UNSET, property, '-');

	        return this;
	      };
	      /**
	       * Helper function that adds operation to the Identify's object
	       * Handle's filtering of duplicate user property keys, and filtering for clearAll.
	       * @private
	       */


	      Identify.prototype._addOperation = function (operation, property, value) {
	        // check that the identify doesn't already contain a clearAll
	        if (this.userPropertiesOperations.hasOwnProperty(AMP_OP_CLEAR_ALL)) {
	          utils.log.error('This identify already contains a $clearAll operation, skipping operation ' + operation);
	          return;
	        } // check that property wasn't already used in this Identify


	        if (this.properties.indexOf(property) !== -1) {
	          utils.log.error('User property "' + property + '" already used in this identify, skipping operation ' + operation);
	          return;
	        }

	        if (!this.userPropertiesOperations.hasOwnProperty(operation)) {
	          this.userPropertiesOperations[operation] = {};
	        }

	        this.userPropertiesOperations[operation][property] = value;
	        this.properties.push(property);
	      };

	      var commonjsGlobal$1$1 = typeof window !== 'undefined' ? window : typeof commonjsGlobal$1 !== 'undefined' ? commonjsGlobal$1 : typeof self !== 'undefined' ? self : {};

	      function createCommonjsModule(fn, module) {
	        return module = {
	          exports: {}
	        }, fn(module, module.exports), module.exports;
	      }

	      var md5 = createCommonjsModule(function (module) {
	        (function ($) {
	          /*
	          * Add integers, wrapping at 2^32. This uses 16-bit operations internally
	          * to work around bugs in some JS interpreters.
	          */
	          function safeAdd(x, y) {
	            var lsw = (x & 0xffff) + (y & 0xffff);
	            var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
	            return msw << 16 | lsw & 0xffff;
	          }
	          /*
	          * Bitwise rotate a 32-bit number to the left.
	          */


	          function bitRotateLeft(num, cnt) {
	            return num << cnt | num >>> 32 - cnt;
	          }
	          /*
	          * These functions implement the four basic operations the algorithm uses.
	          */


	          function md5cmn(q, a, b, x, s, t) {
	            return safeAdd(bitRotateLeft(safeAdd(safeAdd(a, q), safeAdd(x, t)), s), b);
	          }

	          function md5ff(a, b, c, d, x, s, t) {
	            return md5cmn(b & c | ~b & d, a, b, x, s, t);
	          }

	          function md5gg(a, b, c, d, x, s, t) {
	            return md5cmn(b & d | c & ~d, a, b, x, s, t);
	          }

	          function md5hh(a, b, c, d, x, s, t) {
	            return md5cmn(b ^ c ^ d, a, b, x, s, t);
	          }

	          function md5ii(a, b, c, d, x, s, t) {
	            return md5cmn(c ^ (b | ~d), a, b, x, s, t);
	          }
	          /*
	          * Calculate the MD5 of an array of little-endian words, and a bit length.
	          */


	          function binlMD5(x, len) {
	            /* append padding */
	            x[len >> 5] |= 0x80 << len % 32;
	            x[(len + 64 >>> 9 << 4) + 14] = len;
	            var i;
	            var olda;
	            var oldb;
	            var oldc;
	            var oldd;
	            var a = 1732584193;
	            var b = -271733879;
	            var c = -1732584194;
	            var d = 271733878;

	            for (i = 0; i < x.length; i += 16) {
	              olda = a;
	              oldb = b;
	              oldc = c;
	              oldd = d;
	              a = md5ff(a, b, c, d, x[i], 7, -680876936);
	              d = md5ff(d, a, b, c, x[i + 1], 12, -389564586);
	              c = md5ff(c, d, a, b, x[i + 2], 17, 606105819);
	              b = md5ff(b, c, d, a, x[i + 3], 22, -1044525330);
	              a = md5ff(a, b, c, d, x[i + 4], 7, -176418897);
	              d = md5ff(d, a, b, c, x[i + 5], 12, 1200080426);
	              c = md5ff(c, d, a, b, x[i + 6], 17, -1473231341);
	              b = md5ff(b, c, d, a, x[i + 7], 22, -45705983);
	              a = md5ff(a, b, c, d, x[i + 8], 7, 1770035416);
	              d = md5ff(d, a, b, c, x[i + 9], 12, -1958414417);
	              c = md5ff(c, d, a, b, x[i + 10], 17, -42063);
	              b = md5ff(b, c, d, a, x[i + 11], 22, -1990404162);
	              a = md5ff(a, b, c, d, x[i + 12], 7, 1804603682);
	              d = md5ff(d, a, b, c, x[i + 13], 12, -40341101);
	              c = md5ff(c, d, a, b, x[i + 14], 17, -1502002290);
	              b = md5ff(b, c, d, a, x[i + 15], 22, 1236535329);
	              a = md5gg(a, b, c, d, x[i + 1], 5, -165796510);
	              d = md5gg(d, a, b, c, x[i + 6], 9, -1069501632);
	              c = md5gg(c, d, a, b, x[i + 11], 14, 643717713);
	              b = md5gg(b, c, d, a, x[i], 20, -373897302);
	              a = md5gg(a, b, c, d, x[i + 5], 5, -701558691);
	              d = md5gg(d, a, b, c, x[i + 10], 9, 38016083);
	              c = md5gg(c, d, a, b, x[i + 15], 14, -660478335);
	              b = md5gg(b, c, d, a, x[i + 4], 20, -405537848);
	              a = md5gg(a, b, c, d, x[i + 9], 5, 568446438);
	              d = md5gg(d, a, b, c, x[i + 14], 9, -1019803690);
	              c = md5gg(c, d, a, b, x[i + 3], 14, -187363961);
	              b = md5gg(b, c, d, a, x[i + 8], 20, 1163531501);
	              a = md5gg(a, b, c, d, x[i + 13], 5, -1444681467);
	              d = md5gg(d, a, b, c, x[i + 2], 9, -51403784);
	              c = md5gg(c, d, a, b, x[i + 7], 14, 1735328473);
	              b = md5gg(b, c, d, a, x[i + 12], 20, -1926607734);
	              a = md5hh(a, b, c, d, x[i + 5], 4, -378558);
	              d = md5hh(d, a, b, c, x[i + 8], 11, -2022574463);
	              c = md5hh(c, d, a, b, x[i + 11], 16, 1839030562);
	              b = md5hh(b, c, d, a, x[i + 14], 23, -35309556);
	              a = md5hh(a, b, c, d, x[i + 1], 4, -1530992060);
	              d = md5hh(d, a, b, c, x[i + 4], 11, 1272893353);
	              c = md5hh(c, d, a, b, x[i + 7], 16, -155497632);
	              b = md5hh(b, c, d, a, x[i + 10], 23, -1094730640);
	              a = md5hh(a, b, c, d, x[i + 13], 4, 681279174);
	              d = md5hh(d, a, b, c, x[i], 11, -358537222);
	              c = md5hh(c, d, a, b, x[i + 3], 16, -722521979);
	              b = md5hh(b, c, d, a, x[i + 6], 23, 76029189);
	              a = md5hh(a, b, c, d, x[i + 9], 4, -640364487);
	              d = md5hh(d, a, b, c, x[i + 12], 11, -421815835);
	              c = md5hh(c, d, a, b, x[i + 15], 16, 530742520);
	              b = md5hh(b, c, d, a, x[i + 2], 23, -995338651);
	              a = md5ii(a, b, c, d, x[i], 6, -198630844);
	              d = md5ii(d, a, b, c, x[i + 7], 10, 1126891415);
	              c = md5ii(c, d, a, b, x[i + 14], 15, -1416354905);
	              b = md5ii(b, c, d, a, x[i + 5], 21, -57434055);
	              a = md5ii(a, b, c, d, x[i + 12], 6, 1700485571);
	              d = md5ii(d, a, b, c, x[i + 3], 10, -1894986606);
	              c = md5ii(c, d, a, b, x[i + 10], 15, -1051523);
	              b = md5ii(b, c, d, a, x[i + 1], 21, -2054922799);
	              a = md5ii(a, b, c, d, x[i + 8], 6, 1873313359);
	              d = md5ii(d, a, b, c, x[i + 15], 10, -30611744);
	              c = md5ii(c, d, a, b, x[i + 6], 15, -1560198380);
	              b = md5ii(b, c, d, a, x[i + 13], 21, 1309151649);
	              a = md5ii(a, b, c, d, x[i + 4], 6, -145523070);
	              d = md5ii(d, a, b, c, x[i + 11], 10, -1120210379);
	              c = md5ii(c, d, a, b, x[i + 2], 15, 718787259);
	              b = md5ii(b, c, d, a, x[i + 9], 21, -343485551);
	              a = safeAdd(a, olda);
	              b = safeAdd(b, oldb);
	              c = safeAdd(c, oldc);
	              d = safeAdd(d, oldd);
	            }

	            return [a, b, c, d];
	          }
	          /*
	          * Convert an array of little-endian words to a string
	          */


	          function binl2rstr(input) {
	            var i;
	            var output = '';
	            var length32 = input.length * 32;

	            for (i = 0; i < length32; i += 8) {
	              output += String.fromCharCode(input[i >> 5] >>> i % 32 & 0xff);
	            }

	            return output;
	          }
	          /*
	          * Convert a raw string to an array of little-endian words
	          * Characters >255 have their high-byte silently ignored.
	          */


	          function rstr2binl(input) {
	            var i;
	            var output = [];
	            output[(input.length >> 2) - 1] = undefined;

	            for (i = 0; i < output.length; i += 1) {
	              output[i] = 0;
	            }

	            var length8 = input.length * 8;

	            for (i = 0; i < length8; i += 8) {
	              output[i >> 5] |= (input.charCodeAt(i / 8) & 0xff) << i % 32;
	            }

	            return output;
	          }
	          /*
	          * Calculate the MD5 of a raw string
	          */


	          function rstrMD5(s) {
	            return binl2rstr(binlMD5(rstr2binl(s), s.length * 8));
	          }
	          /*
	          * Calculate the HMAC-MD5, of a key and some data (raw strings)
	          */


	          function rstrHMACMD5(key, data) {
	            var i;
	            var bkey = rstr2binl(key);
	            var ipad = [];
	            var opad = [];
	            var hash;
	            ipad[15] = opad[15] = undefined;

	            if (bkey.length > 16) {
	              bkey = binlMD5(bkey, key.length * 8);
	            }

	            for (i = 0; i < 16; i += 1) {
	              ipad[i] = bkey[i] ^ 0x36363636;
	              opad[i] = bkey[i] ^ 0x5c5c5c5c;
	            }

	            hash = binlMD5(ipad.concat(rstr2binl(data)), 512 + data.length * 8);
	            return binl2rstr(binlMD5(opad.concat(hash), 512 + 128));
	          }
	          /*
	          * Convert a raw string to a hex string
	          */


	          function rstr2hex(input) {
	            var hexTab = '0123456789abcdef';
	            var output = '';
	            var x;
	            var i;

	            for (i = 0; i < input.length; i += 1) {
	              x = input.charCodeAt(i);
	              output += hexTab.charAt(x >>> 4 & 0x0f) + hexTab.charAt(x & 0x0f);
	            }

	            return output;
	          }
	          /*
	          * Encode a string as utf-8
	          */


	          function str2rstrUTF8(input) {
	            return unescape(encodeURIComponent(input));
	          }
	          /*
	          * Take string arguments and return either raw or hex encoded strings
	          */


	          function rawMD5(s) {
	            return rstrMD5(str2rstrUTF8(s));
	          }

	          function hexMD5(s) {
	            return rstr2hex(rawMD5(s));
	          }

	          function rawHMACMD5(k, d) {
	            return rstrHMACMD5(str2rstrUTF8(k), str2rstrUTF8(d));
	          }

	          function hexHMACMD5(k, d) {
	            return rstr2hex(rawHMACMD5(k, d));
	          }

	          function md5(string, key, raw) {
	            if (!key) {
	              if (!raw) {
	                return hexMD5(string);
	              }

	              return rawMD5(string);
	            }

	            if (!raw) {
	              return hexHMACMD5(key, string);
	            }

	            return rawHMACMD5(key, string);
	          }

	          if (module.exports) {
	            module.exports = md5;
	          } else {
	            $.md5 = md5;
	          }
	        })(commonjsGlobal$1$1);
	      });

	      var strictUriEncode = function strictUriEncode(str) {
	        return encodeURIComponent(str).replace(/[!'()*]/g, function (c) {
	          return '%' + c.charCodeAt(0).toString(16).toUpperCase();
	        });
	      };
	      /*
	      object-assign
	      (c) Sindre Sorhus
	      @license MIT
	      */

	      /* eslint-disable no-unused-vars */


	      var getOwnPropertySymbols = Object.getOwnPropertySymbols;
	      var hasOwnProperty = Object.prototype.hasOwnProperty;
	      var propIsEnumerable = Object.prototype.propertyIsEnumerable;

	      function toObject(val) {
	        if (val === null || val === undefined) {
	          throw new TypeError('Object.assign cannot be called with null or undefined');
	        }

	        return Object(val);
	      }

	      function shouldUseNative() {
	        try {
	          if (!Object.assign) {
	            return false;
	          } // Detect buggy property enumeration order in older V8 versions.
	          // https://bugs.chromium.org/p/v8/issues/detail?id=4118


	          var test1 = new String('abc'); // eslint-disable-line no-new-wrappers

	          test1[5] = 'de';

	          if (Object.getOwnPropertyNames(test1)[0] === '5') {
	            return false;
	          } // https://bugs.chromium.org/p/v8/issues/detail?id=3056


	          var test2 = {};

	          for (var i = 0; i < 10; i++) {
	            test2['_' + String.fromCharCode(i)] = i;
	          }

	          var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
	            return test2[n];
	          });

	          if (order2.join('') !== '0123456789') {
	            return false;
	          } // https://bugs.chromium.org/p/v8/issues/detail?id=3056


	          var test3 = {};
	          'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
	            test3[letter] = letter;
	          });

	          if (Object.keys(Object.assign({}, test3)).join('') !== 'abcdefghijklmnopqrst') {
	            return false;
	          }

	          return true;
	        } catch (err) {
	          // We don't expect any of the above to throw, but better to be safe.
	          return false;
	        }
	      }

	      var objectAssign = shouldUseNative() ? Object.assign : function (target, source) {
	        var from;
	        var to = toObject(target);
	        var symbols;

	        for (var s = 1; s < arguments.length; s++) {
	          from = Object(arguments[s]);

	          for (var key in from) {
	            if (hasOwnProperty.call(from, key)) {
	              to[key] = from[key];
	            }
	          }

	          if (getOwnPropertySymbols) {
	            symbols = getOwnPropertySymbols(from);

	            for (var i = 0; i < symbols.length; i++) {
	              if (propIsEnumerable.call(from, symbols[i])) {
	                to[symbols[i]] = from[symbols[i]];
	              }
	            }
	          }
	        }

	        return to;
	      };
	      var token = '%[a-f0-9]{2}';
	      var singleMatcher = new RegExp(token, 'gi');
	      var multiMatcher = new RegExp('(' + token + ')+', 'gi');

	      function decodeComponents(components, split) {
	        try {
	          // Try to decode the entire string first
	          return decodeURIComponent(components.join(''));
	        } catch (err) {// Do nothing
	        }

	        if (components.length === 1) {
	          return components;
	        }

	        split = split || 1; // Split the array in 2 parts

	        var left = components.slice(0, split);
	        var right = components.slice(split);
	        return Array.prototype.concat.call([], decodeComponents(left), decodeComponents(right));
	      }

	      function decode(input) {
	        try {
	          return decodeURIComponent(input);
	        } catch (err) {
	          var tokens = input.match(singleMatcher);

	          for (var i = 1; i < tokens.length; i++) {
	            input = decodeComponents(tokens, i).join('');
	            tokens = input.match(singleMatcher);
	          }

	          return input;
	        }
	      }

	      function customDecodeURIComponent(input) {
	        // Keep track of all the replacements and prefill the map with the `BOM`
	        var replaceMap = {
	          '%FE%FF': "\uFFFD\uFFFD",
	          '%FF%FE': "\uFFFD\uFFFD"
	        };
	        var match = multiMatcher.exec(input);

	        while (match) {
	          try {
	            // Decode as big chunks as possible
	            replaceMap[match[0]] = decodeURIComponent(match[0]);
	          } catch (err) {
	            var result = decode(match[0]);

	            if (result !== match[0]) {
	              replaceMap[match[0]] = result;
	            }
	          }

	          match = multiMatcher.exec(input);
	        } // Add `%C2` at the end of the map to make sure it does not replace the combinator before everything else


	        replaceMap['%C2'] = "\uFFFD";
	        var entries = Object.keys(replaceMap);

	        for (var i = 0; i < entries.length; i++) {
	          // Replace all decoded components
	          var key = entries[i];
	          input = input.replace(new RegExp(key, 'g'), replaceMap[key]);
	        }

	        return input;
	      }

	      var decodeUriComponent = function decodeUriComponent(encodedURI) {
	        if (typeof encodedURI !== 'string') {
	          throw new TypeError('Expected `encodedURI` to be of type `string`, got `' + _typeof(encodedURI) + '`');
	        }

	        try {
	          encodedURI = encodedURI.replace(/\+/g, ' '); // Try the built in decoder first

	          return decodeURIComponent(encodedURI);
	        } catch (err) {
	          // Fallback to a more advanced decoder
	          return customDecodeURIComponent(encodedURI);
	        }
	      };

	      function encoderForArrayFormat(opts) {
	        switch (opts.arrayFormat) {
	          case 'index':
	            return function (key, value, index) {
	              return value === null ? [encode(key, opts), '[', index, ']'].join('') : [encode(key, opts), '[', encode(index, opts), ']=', encode(value, opts)].join('');
	            };

	          case 'bracket':
	            return function (key, value) {
	              return value === null ? encode(key, opts) : [encode(key, opts), '[]=', encode(value, opts)].join('');
	            };

	          default:
	            return function (key, value) {
	              return value === null ? encode(key, opts) : [encode(key, opts), '=', encode(value, opts)].join('');
	            };
	        }
	      }

	      function parserForArrayFormat(opts) {
	        var result;

	        switch (opts.arrayFormat) {
	          case 'index':
	            return function (key, value, accumulator) {
	              result = /\[(\d*)\]$/.exec(key);
	              key = key.replace(/\[\d*\]$/, '');

	              if (!result) {
	                accumulator[key] = value;
	                return;
	              }

	              if (accumulator[key] === undefined) {
	                accumulator[key] = {};
	              }

	              accumulator[key][result[1]] = value;
	            };

	          case 'bracket':
	            return function (key, value, accumulator) {
	              result = /(\[\])$/.exec(key);
	              key = key.replace(/\[\]$/, '');

	              if (!result) {
	                accumulator[key] = value;
	                return;
	              } else if (accumulator[key] === undefined) {
	                accumulator[key] = [value];
	                return;
	              }

	              accumulator[key] = [].concat(accumulator[key], value);
	            };

	          default:
	            return function (key, value, accumulator) {
	              if (accumulator[key] === undefined) {
	                accumulator[key] = value;
	                return;
	              }

	              accumulator[key] = [].concat(accumulator[key], value);
	            };
	        }
	      }

	      function encode(value, opts) {
	        if (opts.encode) {
	          return opts.strict ? strictUriEncode(value) : encodeURIComponent(value);
	        }

	        return value;
	      }

	      function keysSorter(input) {
	        if (Array.isArray(input)) {
	          return input.sort();
	        } else if (_typeof(input) === 'object') {
	          return keysSorter(Object.keys(input)).sort(function (a, b) {
	            return Number(a) - Number(b);
	          }).map(function (key) {
	            return input[key];
	          });
	        }

	        return input;
	      }

	      function extract(str) {
	        var queryStart = str.indexOf('?');

	        if (queryStart === -1) {
	          return '';
	        }

	        return str.slice(queryStart + 1);
	      }

	      function parse(str, opts) {
	        opts = objectAssign({
	          arrayFormat: 'none'
	        }, opts);
	        var formatter = parserForArrayFormat(opts); // Create an object with no prototype
	        // https://github.com/sindresorhus/query-string/issues/47

	        var ret = Object.create(null);

	        if (typeof str !== 'string') {
	          return ret;
	        }

	        str = str.trim().replace(/^[?#&]/, '');

	        if (!str) {
	          return ret;
	        }

	        str.split('&').forEach(function (param) {
	          var parts = param.replace(/\+/g, ' ').split('='); // Firefox (pre 40) decodes `%3D` to `=`
	          // https://github.com/sindresorhus/query-string/pull/37

	          var key = parts.shift();
	          var val = parts.length > 0 ? parts.join('=') : undefined; // missing `=` should be `null`:
	          // http://w3.org/TR/2012/WD-url-20120524/#collect-url-parameters

	          val = val === undefined ? null : decodeUriComponent(val);
	          formatter(decodeUriComponent(key), val, ret);
	        });
	        return Object.keys(ret).sort().reduce(function (result, key) {
	          var val = ret[key];

	          if (Boolean(val) && _typeof(val) === 'object' && !Array.isArray(val)) {
	            // Sort object keys, not values
	            result[key] = keysSorter(val);
	          } else {
	            result[key] = val;
	          }

	          return result;
	        }, Object.create(null));
	      }

	      var extract_1 = extract;
	      var parse_1 = parse;

	      var stringify = function stringify(obj, opts) {
	        var defaults = {
	          encode: true,
	          strict: true,
	          arrayFormat: 'none'
	        };
	        opts = objectAssign(defaults, opts);

	        if (opts.sort === false) {
	          opts.sort = function () {};
	        }

	        var formatter = encoderForArrayFormat(opts);
	        return obj ? Object.keys(obj).sort(opts.sort).map(function (key) {
	          var val = obj[key];

	          if (val === undefined) {
	            return '';
	          }

	          if (val === null) {
	            return encode(key, opts);
	          }

	          if (Array.isArray(val)) {
	            var result = [];
	            val.slice().forEach(function (val2) {
	              if (val2 === undefined) {
	                return;
	              }

	              result.push(formatter(key, val2, result.length));
	            });
	            return result.join('&');
	          }

	          return encode(key, opts) + '=' + encode(val, opts);
	        }).filter(function (x) {
	          return x.length > 0;
	        }).join('&') : '';
	      };

	      var parseUrl = function parseUrl(str, opts) {
	        return {
	          url: str.split('?')[0] || '',
	          query: parse(extract(str), opts)
	        };
	      };

	      var queryString = {
	        extract: extract_1,
	        parse: parse_1,
	        stringify: stringify,
	        parseUrl: parseUrl
	      };
	      /*
	       * Simple AJAX request object
	       */

	      var Request = function Request(url, data) {
	        this.url = url;
	        this.data = data || {};
	      };

	      Request.prototype.send = function (callback) {
	        var isIE = window.XDomainRequest ? true : false;

	        if (isIE) {
	          var xdr = new window.XDomainRequest();
	          xdr.open('POST', this.url, true);

	          xdr.onload = function () {
	            callback(200, xdr.responseText);
	          };

	          xdr.onerror = function () {
	            // status code not available from xdr, try string matching on responseText
	            if (xdr.responseText === 'Request Entity Too Large') {
	              callback(413, xdr.responseText);
	            } else {
	              callback(500, xdr.responseText);
	            }
	          };

	          xdr.ontimeout = function () {};

	          xdr.onprogress = function () {};

	          xdr.send(queryString.stringify(this.data));
	        } else {
	          var xhr = new XMLHttpRequest();
	          xhr.open('POST', this.url, true);

	          xhr.onreadystatechange = function () {
	            if (xhr.readyState === 4) {
	              callback(xhr.status, xhr.responseText);
	            }
	          };

	          xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
	          xhr.send(queryString.stringify(this.data));
	        } //log('sent request to ' + this.url + ' with data ' + decodeURIComponent(queryString(this.data)));

	      };
	      /**
	       * Revenue API - instance constructor. Wrapper for logging Revenue data. Revenue objects get passed to amplitude.logRevenueV2 to send to Amplitude servers.
	       * Each method updates a revenue property in the Revenue object, and returns the same Revenue object,
	       * allowing you to chain multiple method calls together.
	       *
	       * Note: price is a required field to log revenue events.
	       * If quantity is not specified then defaults to 1.
	       * @constructor Revenue
	       * @public
	       * @example var revenue = new amplitude.Revenue();
	       */


	      var Revenue = function Revenue() {
	        // required fields
	        this._price = null; // optional fields

	        this._productId = null;
	        this._quantity = 1;
	        this._revenueType = null;
	        this._properties = null;
	      };
	      /**
	       * Set a value for the product identifer.
	       * @public
	       * @param {string} productId - The value for the product identifier. Empty and invalid strings are ignored.
	       * @return {Revenue} Returns the same Revenue object, allowing you to chain multiple method calls together.
	       * @example var revenue = new amplitude.Revenue().setProductId('productIdentifier').setPrice(10.99);
	       * amplitude.logRevenueV2(revenue);
	       */


	      Revenue.prototype.setProductId = function setProductId(productId) {
	        if (type(productId) !== 'string') {
	          utils.log.error('Unsupported type for productId: ' + type(productId) + ', expecting string');
	        } else if (utils.isEmptyString(productId)) {
	          utils.log.error('Invalid empty productId');
	        } else {
	          this._productId = productId;
	        }

	        return this;
	      };
	      /**
	       * Set a value for the quantity. Note revenue amount is calculated as price * quantity.
	       * @public
	       * @param {number} quantity - Integer value for the quantity. If not set, quantity defaults to 1.
	       * @return {Revenue} Returns the same Revenue object, allowing you to chain multiple method calls together.
	       * @example var revenue = new amplitude.Revenue().setProductId('productIdentifier').setPrice(10.99).setQuantity(5);
	       * amplitude.logRevenueV2(revenue);
	       */


	      Revenue.prototype.setQuantity = function setQuantity(quantity) {
	        if (type(quantity) !== 'number') {
	          utils.log.error('Unsupported type for quantity: ' + type(quantity) + ', expecting number');
	        } else {
	          this._quantity = parseInt(quantity);
	        }

	        return this;
	      };
	      /**
	       * Set a value for the price. This field is required for all revenue being logged.
	       *
	       * Note: revenue amount is calculated as price * quantity.
	       * @public
	       * @param {number} price - Double value for the quantity.
	       * @return {Revenue} Returns the same Revenue object, allowing you to chain multiple method calls together.
	       * @example var revenue = new amplitude.Revenue().setProductId('productIdentifier').setPrice(10.99);
	       * amplitude.logRevenueV2(revenue);
	       */


	      Revenue.prototype.setPrice = function setPrice(price) {
	        if (type(price) !== 'number') {
	          utils.log.error('Unsupported type for price: ' + type(price) + ', expecting number');
	        } else {
	          this._price = price;
	        }

	        return this;
	      };
	      /**
	       * Set a value for the revenueType (for example purchase, cost, tax, refund, etc).
	       * @public
	       * @param {string} revenueType - RevenueType to designate.
	       * @return {Revenue} Returns the same Revenue object, allowing you to chain multiple method calls together.
	       * @example var revenue = new amplitude.Revenue().setProductId('productIdentifier').setPrice(10.99).setRevenueType('purchase');
	       * amplitude.logRevenueV2(revenue);
	       */


	      Revenue.prototype.setRevenueType = function setRevenueType(revenueType) {
	        if (type(revenueType) !== 'string') {
	          utils.log.error('Unsupported type for revenueType: ' + type(revenueType) + ', expecting string');
	        } else {
	          this._revenueType = revenueType;
	        }

	        return this;
	      };
	      /**
	       * Set event properties for the revenue event.
	       * @public
	       * @param {object} eventProperties - Revenue event properties to set.
	       * @return {Revenue} Returns the same Revenue object, allowing you to chain multiple method calls together.
	       * @example var event_properties = {'city': 'San Francisco'};
	       * var revenue = new amplitude.Revenue().setProductId('productIdentifier').setPrice(10.99).setEventProperties(event_properties);
	       * amplitude.logRevenueV2(revenue);
	       */


	      Revenue.prototype.setEventProperties = function setEventProperties(eventProperties) {
	        if (type(eventProperties) !== 'object') {
	          utils.log.error('Unsupported type for eventProperties: ' + type(eventProperties) + ', expecting object');
	        } else {
	          this._properties = utils.validateProperties(eventProperties);
	        }

	        return this;
	      };
	      /**
	       * @private
	       */


	      Revenue.prototype._isValidRevenue = function _isValidRevenue() {
	        if (type(this._price) !== 'number') {
	          utils.log.error('Invalid revenue, need to set price field');
	          return false;
	        }

	        return true;
	      };
	      /**
	       * @private
	       */


	      Revenue.prototype._toJSONObject = function _toJSONObject() {
	        var obj = type(this._properties) === 'object' ? this._properties : {};

	        if (this._productId !== null) {
	          obj[Constants.REVENUE_PRODUCT_ID] = this._productId;
	        }

	        if (this._quantity !== null) {
	          obj[Constants.REVENUE_QUANTITY] = this._quantity;
	        }

	        if (this._price !== null) {
	          obj[Constants.REVENUE_PRICE] = this._price;
	        }

	        if (this._revenueType !== null) {
	          obj[Constants.REVENUE_REVENUE_TYPE] = this._revenueType;
	        }

	        return obj;
	      };

	      var uaParser = createCommonjsModule(function (module, exports) {
	        /*!
	         * UAParser.js v0.7.21
	         * Lightweight JavaScript-based User-Agent string parser
	         * https://github.com/faisalman/ua-parser-js
	         *
	         * Copyright © 2012-2019 Faisal Salman <f@faisalman.com>
	         * Licensed under MIT License
	         */
	        (function (window, undefined$1) {
	          //////////////
	          // Constants
	          /////////////
	          var LIBVERSION = '0.7.21',
	              EMPTY = '',
	              UNKNOWN = '?',
	              FUNC_TYPE = 'function',
	              OBJ_TYPE = 'object',
	              STR_TYPE = 'string',
	              MAJOR = 'major',
	              // deprecated
	          MODEL = 'model',
	              NAME = 'name',
	              TYPE = 'type',
	              VENDOR = 'vendor',
	              VERSION = 'version',
	              ARCHITECTURE = 'architecture',
	              CONSOLE = 'console',
	              MOBILE = 'mobile',
	              TABLET = 'tablet',
	              SMARTTV = 'smarttv',
	              WEARABLE = 'wearable',
	              EMBEDDED = 'embedded'; ///////////
	          // Helper
	          //////////

	          var util = {
	            extend: function extend(regexes, extensions) {
	              var mergedRegexes = {};

	              for (var i in regexes) {
	                if (extensions[i] && extensions[i].length % 2 === 0) {
	                  mergedRegexes[i] = extensions[i].concat(regexes[i]);
	                } else {
	                  mergedRegexes[i] = regexes[i];
	                }
	              }

	              return mergedRegexes;
	            },
	            has: function has(str1, str2) {
	              if (typeof str1 === "string") {
	                return str2.toLowerCase().indexOf(str1.toLowerCase()) !== -1;
	              } else {
	                return false;
	              }
	            },
	            lowerize: function lowerize(str) {
	              return str.toLowerCase();
	            },
	            major: function major(version) {
	              return _typeof(version) === STR_TYPE ? version.replace(/[^\d\.]/g, '').split(".")[0] : undefined$1;
	            },
	            trim: function trim(str) {
	              return str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
	            }
	          }; ///////////////
	          // Map helper
	          //////////////

	          var mapper = {
	            rgx: function rgx(ua, arrays) {
	              var i = 0,
	                  j,
	                  k,
	                  p,
	                  q,
	                  matches,
	                  match; // loop through all regexes maps

	              while (i < arrays.length && !matches) {
	                var regex = arrays[i],
	                    // even sequence (0,2,4,..)
	                props = arrays[i + 1]; // odd sequence (1,3,5,..)

	                j = k = 0; // try matching uastring with regexes

	                while (j < regex.length && !matches) {
	                  matches = regex[j++].exec(ua);

	                  if (!!matches) {
	                    for (p = 0; p < props.length; p++) {
	                      match = matches[++k];
	                      q = props[p]; // check if given property is actually array

	                      if (_typeof(q) === OBJ_TYPE && q.length > 0) {
	                        if (q.length == 2) {
	                          if (_typeof(q[1]) == FUNC_TYPE) {
	                            // assign modified match
	                            this[q[0]] = q[1].call(this, match);
	                          } else {
	                            // assign given value, ignore regex match
	                            this[q[0]] = q[1];
	                          }
	                        } else if (q.length == 3) {
	                          // check whether function or regex
	                          if (_typeof(q[1]) === FUNC_TYPE && !(q[1].exec && q[1].test)) {
	                            // call function (usually string mapper)
	                            this[q[0]] = match ? q[1].call(this, match, q[2]) : undefined$1;
	                          } else {
	                            // sanitize match using given regex
	                            this[q[0]] = match ? match.replace(q[1], q[2]) : undefined$1;
	                          }
	                        } else if (q.length == 4) {
	                          this[q[0]] = match ? q[3].call(this, match.replace(q[1], q[2])) : undefined$1;
	                        }
	                      } else {
	                        this[q] = match ? match : undefined$1;
	                      }
	                    }
	                  }
	                }

	                i += 2;
	              }
	            },
	            str: function str(_str, map) {
	              for (var i in map) {
	                // check if array
	                if (_typeof(map[i]) === OBJ_TYPE && map[i].length > 0) {
	                  for (var j = 0; j < map[i].length; j++) {
	                    if (util.has(map[i][j], _str)) {
	                      return i === UNKNOWN ? undefined$1 : i;
	                    }
	                  }
	                } else if (util.has(map[i], _str)) {
	                  return i === UNKNOWN ? undefined$1 : i;
	                }
	              }

	              return _str;
	            }
	          }; ///////////////
	          // String map
	          //////////////

	          var maps = {
	            browser: {
	              oldsafari: {
	                version: {
	                  '1.0': '/8',
	                  '1.2': '/1',
	                  '1.3': '/3',
	                  '2.0': '/412',
	                  '2.0.2': '/416',
	                  '2.0.3': '/417',
	                  '2.0.4': '/419',
	                  '?': '/'
	                }
	              }
	            },
	            device: {
	              amazon: {
	                model: {
	                  'Fire Phone': ['SD', 'KF']
	                }
	              },
	              sprint: {
	                model: {
	                  'Evo Shift 4G': '7373KT'
	                },
	                vendor: {
	                  'HTC': 'APA',
	                  'Sprint': 'Sprint'
	                }
	              }
	            },
	            os: {
	              windows: {
	                version: {
	                  'ME': '4.90',
	                  'NT 3.11': 'NT3.51',
	                  'NT 4.0': 'NT4.0',
	                  '2000': 'NT 5.0',
	                  'XP': ['NT 5.1', 'NT 5.2'],
	                  'Vista': 'NT 6.0',
	                  '7': 'NT 6.1',
	                  '8': 'NT 6.2',
	                  '8.1': 'NT 6.3',
	                  '10': ['NT 6.4', 'NT 10.0'],
	                  'RT': 'ARM'
	                }
	              }
	            }
	          }; //////////////
	          // Regex map
	          /////////////

	          var regexes = {
	            browser: [[// Presto based
	            /(opera\smini)\/([\w\.-]+)/i, // Opera Mini
	            /(opera\s[mobiletab]+).+version\/([\w\.-]+)/i, // Opera Mobi/Tablet
	            /(opera).+version\/([\w\.]+)/i, // Opera > 9.80
	            /(opera)[\/\s]+([\w\.]+)/i // Opera < 9.80
	            ], [NAME, VERSION], [/(opios)[\/\s]+([\w\.]+)/i // Opera mini on iphone >= 8.0
	            ], [[NAME, 'Opera Mini'], VERSION], [/\s(opr)\/([\w\.]+)/i // Opera Webkit
	            ], [[NAME, 'Opera'], VERSION], [// Mixed
	            /(kindle)\/([\w\.]+)/i, // Kindle
	            /(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w\.]*)/i, // Lunascape/Maxthon/Netfront/Jasmine/Blazer
	            // Trident based
	            /(avant\s|iemobile|slim)(?:browser)?[\/\s]?([\w\.]*)/i, // Avant/IEMobile/SlimBrowser
	            /(bidubrowser|baidubrowser)[\/\s]?([\w\.]+)/i, // Baidu Browser
	            /(?:ms|\()(ie)\s([\w\.]+)/i, // Internet Explorer
	            // Webkit/KHTML based
	            /(rekonq)\/([\w\.]*)/i, // Rekonq
	            /(chromium|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon)\/([\w\.-]+)/i // Chromium/Flock/RockMelt/Midori/Epiphany/Silk/Skyfire/Bolt/Iron/Iridium/PhantomJS/Bowser/QupZilla/Falkon
	            ], [NAME, VERSION], [/(konqueror)\/([\w\.]+)/i // Konqueror
	            ], [[NAME, 'Konqueror'], VERSION], [/(trident).+rv[:\s]([\w\.]+).+like\sgecko/i // IE11
	            ], [[NAME, 'IE'], VERSION], [/(edge|edgios|edga|edg)\/((\d+)?[\w\.]+)/i // Microsoft Edge
	            ], [[NAME, 'Edge'], VERSION], [/(yabrowser)\/([\w\.]+)/i // Yandex
	            ], [[NAME, 'Yandex'], VERSION], [/(Avast)\/([\w\.]+)/i // Avast Secure Browser
	            ], [[NAME, 'Avast Secure Browser'], VERSION], [/(AVG)\/([\w\.]+)/i // AVG Secure Browser
	            ], [[NAME, 'AVG Secure Browser'], VERSION], [/(puffin)\/([\w\.]+)/i // Puffin
	            ], [[NAME, 'Puffin'], VERSION], [/(focus)\/([\w\.]+)/i // Firefox Focus
	            ], [[NAME, 'Firefox Focus'], VERSION], [/(opt)\/([\w\.]+)/i // Opera Touch
	            ], [[NAME, 'Opera Touch'], VERSION], [/((?:[\s\/])uc?\s?browser|(?:juc.+)ucweb)[\/\s]?([\w\.]+)/i // UCBrowser
	            ], [[NAME, 'UCBrowser'], VERSION], [/(comodo_dragon)\/([\w\.]+)/i // Comodo Dragon
	            ], [[NAME, /_/g, ' '], VERSION], [/(windowswechat qbcore)\/([\w\.]+)/i // WeChat Desktop for Windows Built-in Browser
	            ], [[NAME, 'WeChat(Win) Desktop'], VERSION], [/(micromessenger)\/([\w\.]+)/i // WeChat
	            ], [[NAME, 'WeChat'], VERSION], [/(brave)\/([\w\.]+)/i // Brave browser
	            ], [[NAME, 'Brave'], VERSION], [/(qqbrowserlite)\/([\w\.]+)/i // QQBrowserLite
	            ], [NAME, VERSION], [/(QQ)\/([\d\.]+)/i // QQ, aka ShouQ
	            ], [NAME, VERSION], [/m?(qqbrowser)[\/\s]?([\w\.]+)/i // QQBrowser
	            ], [NAME, VERSION], [/(baiduboxapp)[\/\s]?([\w\.]+)/i // Baidu App
	            ], [NAME, VERSION], [/(2345Explorer)[\/\s]?([\w\.]+)/i // 2345 Browser
	            ], [NAME, VERSION], [/(MetaSr)[\/\s]?([\w\.]+)/i // SouGouBrowser
	            ], [NAME], [/(LBBROWSER)/i // LieBao Browser
	            ], [NAME], [/xiaomi\/miuibrowser\/([\w\.]+)/i // MIUI Browser
	            ], [VERSION, [NAME, 'MIUI Browser']], [/;fbav\/([\w\.]+);/i // Facebook App for iOS & Android
	            ], [VERSION, [NAME, 'Facebook']], [/safari\s(line)\/([\w\.]+)/i, // Line App for iOS
	            /android.+(line)\/([\w\.]+)\/iab/i // Line App for Android
	            ], [NAME, VERSION], [/headlesschrome(?:\/([\w\.]+)|\s)/i // Chrome Headless
	            ], [VERSION, [NAME, 'Chrome Headless']], [/\swv\).+(chrome)\/([\w\.]+)/i // Chrome WebView
	            ], [[NAME, /(.+)/, '$1 WebView'], VERSION], [/((?:oculus|samsung)browser)\/([\w\.]+)/i], [[NAME, /(.+(?:g|us))(.+)/, '$1 $2'], VERSION], [// Oculus / Samsung Browser
	            /((?:android.+)crmo|crios)\/([\w\.]+)/i, // Chrome for Android/iOS
	            /android.+(chrome)\/([\w\.]+)\s+(?:mobile\s?safari)/i], [[NAME, 'Chrome Mobile'], VERSION], [/android.+version\/([\w\.]+)\s+(?:mobile\s?safari|safari)*/i // Android Browser
	            ], [VERSION, [NAME, 'Android Browser']], [/(sailfishbrowser)\/([\w\.]+)/i // Sailfish Browser
	            ], [[NAME, 'Sailfish Browser'], VERSION], [/(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i // Chrome/OmniWeb/Arora/Tizen/Nokia
	            ], [NAME, VERSION], [/(dolfin)\/([\w\.]+)/i // Dolphin
	            ], [[NAME, 'Dolphin'], VERSION], [/(qihu|qhbrowser|qihoobrowser|360browser)/i // 360
	            ], [[NAME, '360 Browser']], [/(coast)\/([\w\.]+)/i // Opera Coast
	            ], [[NAME, 'Opera Coast'], VERSION], [/fxios\/([\w\.-]+)/i // Firefox for iOS
	            ], [VERSION, [NAME, 'Firefox']], [/version\/([\w\.]+).+?mobile\/\w+\s(safari)/i // Mobile Safari
	            ], [VERSION, [NAME, 'Mobile Safari']], [/version\/([\w\.]+).+?(mobile\s?safari|safari)/i // Safari & Safari Mobile
	            ], [VERSION, NAME], [/webkit.+?(gsa)\/([\w\.]+).+?(mobile\s?safari|safari)(\/[\w\.]+)/i // Google Search Appliance on iOS
	            ], [[NAME, 'GSA'], VERSION], [/webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i // Safari < 3.0
	            ], [NAME, [VERSION, mapper.str, maps.browser.oldsafari.version]], [/(webkit|khtml)\/([\w\.]+)/i], [NAME, VERSION], [// Gecko based
	            /(navigator|netscape)\/([\w\.-]+)/i // Netscape
	            ], [[NAME, 'Netscape'], VERSION], [/(swiftfox)/i, // Swiftfox
	            /(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i, // IceDragon/Iceweasel/Camino/Chimera/Fennec/Maemo/Minimo/Conkeror
	            /(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([\w\.-]+)/i, // Firefox/SeaMonkey/K-Meleon/IceCat/IceApe/Firebird/Phoenix
	            /(mozilla)\/([\w\.]+).+rv\:.+gecko\/\d+/i, // Mozilla
	            // Other
	            /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir)[\/\s]?([\w\.]+)/i, // Polaris/Lynx/Dillo/iCab/Doris/Amaya/w3m/NetSurf/Sleipnir
	            /(links)\s\(([\w\.]+)/i, // Links
	            /(gobrowser)\/?([\w\.]*)/i, // GoBrowser
	            /(ice\s?browser)\/v?([\w\._]+)/i, // ICE Browser
	            /(mosaic)[\/\s]([\w\.]+)/i // Mosaic
	            ], [NAME, VERSION]],
	            cpu: [[/(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i // AMD64
	            ], [[ARCHITECTURE, 'amd64']], [/(ia32(?=;))/i // IA32 (quicktime)
	            ], [[ARCHITECTURE, util.lowerize]], [/((?:i[346]|x)86)[;\)]/i // IA32
	            ], [[ARCHITECTURE, 'ia32']], [// PocketPC mistakenly identified as PowerPC
	            /windows\s(ce|mobile);\sppc;/i], [[ARCHITECTURE, 'arm']], [/((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i // PowerPC
	            ], [[ARCHITECTURE, /ower/, '', util.lowerize]], [/(sun4\w)[;\)]/i // SPARC
	            ], [[ARCHITECTURE, 'sparc']], [/((?:avr32|ia64(?=;))|68k(?=\))|arm(?:64|(?=v\d+[;l]))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?(?=;)|pa-risc)/i // IA64, 68K, ARM/64, AVR/32, IRIX/64, MIPS/64, SPARC/64, PA-RISC
	            ], [[ARCHITECTURE, util.lowerize]]],
	            device: [[/\((ipad|playbook);[\w\s\),;-]+(rim|apple)/i // iPad/PlayBook
	            ], [MODEL, VENDOR, [TYPE, TABLET]], [/applecoremedia\/[\w\.]+ \((ipad)/ // iPad
	            ], [MODEL, [VENDOR, 'Apple'], [TYPE, TABLET]], [/(apple\s{0,1}tv)/i // Apple TV
	            ], [[MODEL, 'Apple TV'], [VENDOR, 'Apple'], [TYPE, SMARTTV]], [/(archos)\s(gamepad2?)/i, // Archos
	            /(hp).+(touchpad)/i, // HP TouchPad
	            /(hp).+(tablet)/i, // HP Tablet
	            /(kindle)\/([\w\.]+)/i, // Kindle
	            /\s(nook)[\w\s]+build\/(\w+)/i, // Nook
	            /(dell)\s(strea[kpr\s\d]*[\dko])/i // Dell Streak
	            ], [VENDOR, MODEL, [TYPE, TABLET]], [/(kf[A-z]+)\sbuild\/.+silk\//i // Kindle Fire HD
	            ], [MODEL, [VENDOR, 'Amazon'], [TYPE, TABLET]], [/(sd|kf)[0349hijorstuw]+\sbuild\/.+silk\//i // Fire Phone
	            ], [[MODEL, mapper.str, maps.device.amazon.model], [VENDOR, 'Amazon'], [TYPE, MOBILE]], [/android.+aft([bms])\sbuild/i // Fire TV
	            ], [MODEL, [VENDOR, 'Amazon'], [TYPE, SMARTTV]], [/\((ip[honed|\s\w*]+);.+(apple)/i // iPod/iPhone
	            ], [MODEL, VENDOR, [TYPE, MOBILE]], [/\((ip[honed|\s\w*]+);/i // iPod/iPhone
	            ], [MODEL, [VENDOR, 'Apple'], [TYPE, MOBILE]], [/(blackberry)[\s-]?(\w+)/i, // BlackBerry
	            /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[\s_-]?([\w-]*)/i, // BenQ/Palm/Sony-Ericsson/Acer/Asus/Dell/Meizu/Motorola/Polytron
	            /(hp)\s([\w\s]+\w)/i, // HP iPAQ
	            /(asus)-?(\w+)/i // Asus
	            ], [VENDOR, MODEL, [TYPE, MOBILE]], [/\(bb10;\s(\w+)/i // BlackBerry 10
	            ], [MODEL, [VENDOR, 'BlackBerry'], [TYPE, MOBILE]], [// Asus Tablets
	            /android.+(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus 7|padfone|p00c)/i], [MODEL, [VENDOR, 'Asus'], [TYPE, TABLET]], [/(sony)\s(tablet\s[ps])\sbuild\//i, // Sony
	            /(sony)?(?:sgp.+)\sbuild\//i], [[VENDOR, 'Sony'], [MODEL, 'Xperia Tablet'], [TYPE, TABLET]], [/android.+\s([c-g]\d{4}|so[-l]\w+)(?=\sbuild\/|\).+chrome\/(?![1-6]{0,1}\d\.))/i], [MODEL, [VENDOR, 'Sony'], [TYPE, MOBILE]], [/\s(ouya)\s/i, // Ouya
	            /(nintendo)\s([wids3u]+)/i // Nintendo
	            ], [VENDOR, MODEL, [TYPE, CONSOLE]], [/android.+;\s(shield)\sbuild/i // Nvidia
	            ], [MODEL, [VENDOR, 'Nvidia'], [TYPE, CONSOLE]], [/(playstation\s[34portablevi]+)/i // Playstation
	            ], [MODEL, [VENDOR, 'Sony'], [TYPE, CONSOLE]], [/(sprint\s(\w+))/i // Sprint Phones
	            ], [[VENDOR, mapper.str, maps.device.sprint.vendor], [MODEL, mapper.str, maps.device.sprint.model], [TYPE, MOBILE]], [/(htc)[;_\s-]+([\w\s]+(?=\)|\sbuild)|\w+)/i, // HTC
	            /(zte)-(\w*)/i, // ZTE
	            /(alcatel|geeksphone|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]*)/i // Alcatel/GeeksPhone/Nexian/Panasonic/Sony
	            ], [VENDOR, [MODEL, /_/g, ' '], [TYPE, MOBILE]], [/(nexus\s9)/i // HTC Nexus 9
	            ], [MODEL, [VENDOR, 'HTC'], [TYPE, TABLET]], [/d\/huawei([\w\s-]+)[;\)]/i, /(nexus\s6p|vog-l29|ane-lx1|eml-l29)/i // Huawei
	            ], [MODEL, [VENDOR, 'Huawei'], [TYPE, MOBILE]], [/android.+(bah2?-a?[lw]\d{2})/i // Huawei MediaPad
	            ], [MODEL, [VENDOR, 'Huawei'], [TYPE, TABLET]], [/(microsoft);\s(lumia[\s\w]+)/i // Microsoft Lumia
	            ], [VENDOR, MODEL, [TYPE, MOBILE]], [/[\s\(;](xbox(?:\sone)?)[\s\);]/i // Microsoft Xbox
	            ], [MODEL, [VENDOR, 'Microsoft'], [TYPE, CONSOLE]], [/(kin\.[onetw]{3})/i // Microsoft Kin
	            ], [[MODEL, /\./g, ' '], [VENDOR, 'Microsoft'], [TYPE, MOBILE]], [// Motorola
	            /\s(milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?:?(\s4g)?)[\w\s]+build\//i, /mot[\s-]?(\w*)/i, /(XT\d{3,4}) build\//i, /(nexus\s6)/i], [MODEL, [VENDOR, 'Motorola'], [TYPE, MOBILE]], [/android.+\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i], [MODEL, [VENDOR, 'Motorola'], [TYPE, TABLET]], [/hbbtv\/\d+\.\d+\.\d+\s+\([\w\s]*;\s*(\w[^;]*);([^;]*)/i // HbbTV devices
	            ], [[VENDOR, util.trim], [MODEL, util.trim], [TYPE, SMARTTV]], [/hbbtv.+maple;(\d+)/i], [[MODEL, /^/, 'SmartTV'], [VENDOR, 'Samsung'], [TYPE, SMARTTV]], [/\(dtv[\);].+(aquos)/i // Sharp
	            ], [MODEL, [VENDOR, 'Sharp'], [TYPE, SMARTTV]], [/android.+((sch-i[89]0\d|shw-m380s|gt-p\d{4}|gt-n\d+|sgh-t8[56]9|nexus 10))/i, /((SM-T\w+))/i], [[VENDOR, 'Samsung'], MODEL, [TYPE, TABLET]], [// Samsung
	            /smart-tv.+(samsung)/i], [VENDOR, [TYPE, SMARTTV], MODEL], [/((s[cgp]h-\w+|gt-\w+|galaxy\snexus|sm-\w[\w\d]+))/i, /(sam[sung]*)[\s-]*(\w+-?[\w-]*)/i, /sec-((sgh\w+))/i], [[VENDOR, 'Samsung'], MODEL, [TYPE, MOBILE]], [/sie-(\w*)/i // Siemens
	            ], [MODEL, [VENDOR, 'Siemens'], [TYPE, MOBILE]], [/(maemo|nokia).*(n900|lumia\s\d+)/i, // Nokia
	            /(nokia)[\s_-]?([\w-]*)/i], [[VENDOR, 'Nokia'], MODEL, [TYPE, MOBILE]], [/android[x\d\.\s;]+\s([ab][1-7]\-?[0178a]\d\d?)/i // Acer
	            ], [MODEL, [VENDOR, 'Acer'], [TYPE, TABLET]], [/android.+([vl]k\-?\d{3})\s+build/i // LG Tablet
	            ], [MODEL, [VENDOR, 'LG'], [TYPE, TABLET]], [/android\s3\.[\s\w;-]{10}(lg?)-([06cv9]{3,4})/i // LG Tablet
	            ], [[VENDOR, 'LG'], MODEL, [TYPE, TABLET]], [/(lg) netcast\.tv/i // LG SmartTV
	            ], [VENDOR, MODEL, [TYPE, SMARTTV]], [/(nexus\s[45])/i, // LG
	            /lg[e;\s\/-]+(\w*)/i, /android.+lg(\-?[\d\w]+)\s+build/i], [MODEL, [VENDOR, 'LG'], [TYPE, MOBILE]], [/(lenovo)\s?(s(?:5000|6000)(?:[\w-]+)|tab(?:[\s\w]+))/i // Lenovo tablets
	            ], [VENDOR, MODEL, [TYPE, TABLET]], [/android.+(ideatab[a-z0-9\-\s]+)/i // Lenovo
	            ], [MODEL, [VENDOR, 'Lenovo'], [TYPE, TABLET]], [/(lenovo)[_\s-]?([\w-]+)/i], [VENDOR, MODEL, [TYPE, MOBILE]], [/linux;.+((jolla));/i // Jolla
	            ], [VENDOR, MODEL, [TYPE, MOBILE]], [/((pebble))app\/[\d\.]+\s/i // Pebble
	            ], [VENDOR, MODEL, [TYPE, WEARABLE]], [/android.+;\s(oppo)\s?([\w\s]+)\sbuild/i // OPPO
	            ], [VENDOR, MODEL, [TYPE, MOBILE]], [/crkey/i // Google Chromecast
	            ], [[MODEL, 'Chromecast'], [VENDOR, 'Google'], [TYPE, SMARTTV]], [/android.+;\s(glass)\s\d/i // Google Glass
	            ], [MODEL, [VENDOR, 'Google'], [TYPE, WEARABLE]], [/android.+;\s(pixel c)[\s)]/i // Google Pixel C
	            ], [MODEL, [VENDOR, 'Google'], [TYPE, TABLET]], [/android.+;\s(pixel( [23])?( xl)?)[\s)]/i // Google Pixel
	            ], [MODEL, [VENDOR, 'Google'], [TYPE, MOBILE]], [/android.+;\s(\w+)\s+build\/hm\1/i, // Xiaomi Hongmi 'numeric' models
	            /android.+(hm[\s\-_]*note?[\s_]*(?:\d\w)?)\s+build/i, // Xiaomi Hongmi
	            /android.+(mi[\s\-_]*(?:a\d|one|one[\s_]plus|note lte)?[\s_]*(?:\d?\w?)[\s_]*(?:plus)?)\s+build/i, // Xiaomi Mi
	            /android.+(redmi[\s\-_]*(?:note)?(?:[\s_]*[\w\s]+))\s+build/i // Redmi Phones
	            ], [[MODEL, /_/g, ' '], [VENDOR, 'Xiaomi'], [TYPE, MOBILE]], [/android.+(mi[\s\-_]*(?:pad)(?:[\s_]*[\w\s]+))\s+build/i // Mi Pad tablets
	            ], [[MODEL, /_/g, ' '], [VENDOR, 'Xiaomi'], [TYPE, TABLET]], [/android.+;\s(m[1-5]\snote)\sbuild/i // Meizu
	            ], [MODEL, [VENDOR, 'Meizu'], [TYPE, MOBILE]], [/(mz)-([\w-]{2,})/i], [[VENDOR, 'Meizu'], MODEL, [TYPE, MOBILE]], [/android.+a000(1)\s+build/i, // OnePlus
	            /android.+oneplus\s(a\d{4})[\s)]/i], [MODEL, [VENDOR, 'OnePlus'], [TYPE, MOBILE]], [/android.+[;\/]\s*(RCT[\d\w]+)\s+build/i // RCA Tablets
	            ], [MODEL, [VENDOR, 'RCA'], [TYPE, TABLET]], [/android.+[;\/\s]+(Venue[\d\s]{2,7})\s+build/i // Dell Venue Tablets
	            ], [MODEL, [VENDOR, 'Dell'], [TYPE, TABLET]], [/android.+[;\/]\s*(Q[T|M][\d\w]+)\s+build/i // Verizon Tablet
	            ], [MODEL, [VENDOR, 'Verizon'], [TYPE, TABLET]], [/android.+[;\/]\s+(Barnes[&\s]+Noble\s+|BN[RT])(V?.*)\s+build/i // Barnes & Noble Tablet
	            ], [[VENDOR, 'Barnes & Noble'], MODEL, [TYPE, TABLET]], [/android.+[;\/]\s+(TM\d{3}.*\b)\s+build/i // Barnes & Noble Tablet
	            ], [MODEL, [VENDOR, 'NuVision'], [TYPE, TABLET]], [/android.+;\s(k88)\sbuild/i // ZTE K Series Tablet
	            ], [MODEL, [VENDOR, 'ZTE'], [TYPE, TABLET]], [/android.+[;\/]\s*(gen\d{3})\s+build.*49h/i // Swiss GEN Mobile
	            ], [MODEL, [VENDOR, 'Swiss'], [TYPE, MOBILE]], [/android.+[;\/]\s*(zur\d{3})\s+build/i // Swiss ZUR Tablet
	            ], [MODEL, [VENDOR, 'Swiss'], [TYPE, TABLET]], [/android.+[;\/]\s*((Zeki)?TB.*\b)\s+build/i // Zeki Tablets
	            ], [MODEL, [VENDOR, 'Zeki'], [TYPE, TABLET]], [/(android).+[;\/]\s+([YR]\d{2})\s+build/i, /android.+[;\/]\s+(Dragon[\-\s]+Touch\s+|DT)(\w{5})\sbuild/i // Dragon Touch Tablet
	            ], [[VENDOR, 'Dragon Touch'], MODEL, [TYPE, TABLET]], [/android.+[;\/]\s*(NS-?\w{0,9})\sbuild/i // Insignia Tablets
	            ], [MODEL, [VENDOR, 'Insignia'], [TYPE, TABLET]], [/android.+[;\/]\s*((NX|Next)-?\w{0,9})\s+build/i // NextBook Tablets
	            ], [MODEL, [VENDOR, 'NextBook'], [TYPE, TABLET]], [/android.+[;\/]\s*(Xtreme\_)?(V(1[045]|2[015]|30|40|60|7[05]|90))\s+build/i], [[VENDOR, 'Voice'], MODEL, [TYPE, MOBILE]], [// Voice Xtreme Phones
	            /android.+[;\/]\s*(LVTEL\-)?(V1[12])\s+build/i // LvTel Phones
	            ], [[VENDOR, 'LvTel'], MODEL, [TYPE, MOBILE]], [/android.+;\s(PH-1)\s/i], [MODEL, [VENDOR, 'Essential'], [TYPE, MOBILE]], [// Essential PH-1
	            /android.+[;\/]\s*(V(100MD|700NA|7011|917G).*\b)\s+build/i // Envizen Tablets
	            ], [MODEL, [VENDOR, 'Envizen'], [TYPE, TABLET]], [/android.+[;\/]\s*(Le[\s\-]+Pan)[\s\-]+(\w{1,9})\s+build/i // Le Pan Tablets
	            ], [VENDOR, MODEL, [TYPE, TABLET]], [/android.+[;\/]\s*(Trio[\s\-]*.*)\s+build/i // MachSpeed Tablets
	            ], [MODEL, [VENDOR, 'MachSpeed'], [TYPE, TABLET]], [/android.+[;\/]\s*(Trinity)[\-\s]*(T\d{3})\s+build/i // Trinity Tablets
	            ], [VENDOR, MODEL, [TYPE, TABLET]], [/android.+[;\/]\s*TU_(1491)\s+build/i // Rotor Tablets
	            ], [MODEL, [VENDOR, 'Rotor'], [TYPE, TABLET]], [/android.+(KS(.+))\s+build/i // Amazon Kindle Tablets
	            ], [MODEL, [VENDOR, 'Amazon'], [TYPE, TABLET]], [/android.+(Gigaset)[\s\-]+(Q\w{1,9})\s+build/i // Gigaset Tablets
	            ], [VENDOR, MODEL, [TYPE, TABLET]], [/\s(tablet|tab)[;\/]/i, // Unidentifiable Tablet
	            /\s(mobile)(?:[;\/]|\ssafari)/i // Unidentifiable Mobile
	            ], [[TYPE, util.lowerize], VENDOR, MODEL], [/[\s\/\(](smart-?tv)[;\)]/i // SmartTV
	            ], [[TYPE, SMARTTV]], [/(android[\w\.\s\-]{0,9});.+build/i // Generic Android Device
	            ], [MODEL, [VENDOR, 'Generic']]],
	            engine: [[/windows.+\sedge\/([\w\.]+)/i // EdgeHTML
	            ], [VERSION, [NAME, 'EdgeHTML']], [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i // Blink
	            ], [VERSION, [NAME, 'Blink']], [/(presto)\/([\w\.]+)/i, // Presto
	            /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i, // WebKit/Trident/NetFront/NetSurf/Amaya/Lynx/w3m/Goanna
	            /(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i, // KHTML/Tasman/Links
	            /(icab)[\/\s]([23]\.[\d\.]+)/i // iCab
	            ], [NAME, VERSION], [/rv\:([\w\.]{1,9}).+(gecko)/i // Gecko
	            ], [VERSION, NAME]],
	            os: [[// Windows based
	            /microsoft\s(windows)\s(vista|xp)/i // Windows (iTunes)
	            ], [NAME, VERSION], [/(windows)\snt\s6\.2;\s(arm)/i, // Windows RT
	            /(windows\sphone(?:\sos)*)[\s\/]?([\d\.\s\w]*)/i, // Windows Phone
	            /(windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)/i], [[NAME, mapper.str, maps.os.windows.name], [VERSION, mapper.str, maps.os.windows.version]], [/(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i], [[NAME, 'Windows'], [VERSION, mapper.str, maps.os.windows.version]], [// Mobile/Embedded OS
	            /\((bb)(10);/i // BlackBerry 10
	            ], [[NAME, 'BlackBerry'], VERSION], [/(blackberry)\w*\/?([\w\.]*)/i, // Blackberry
	            /(tizen|kaios)[\/\s]([\w\.]+)/i, // Tizen/KaiOS
	            /(android|webos|palm\sos|qnx|bada|rim\stablet\sos|meego|sailfish|contiki)[\/\s-]?([\w\.]*)/i // Android/WebOS/Palm/QNX/Bada/RIM/MeeGo/Contiki/Sailfish OS
	            ], [NAME, VERSION], [/(symbian\s?os|symbos|s60(?=;))[\/\s-]?([\w\.]*)/i // Symbian
	            ], [[NAME, 'Symbian'], VERSION], [/\((series40);/i // Series 40
	            ], [NAME], [/mozilla.+\(mobile;.+gecko.+firefox/i // Firefox OS
	            ], [[NAME, 'Firefox OS'], VERSION], [// Console
	            /(nintendo|playstation)\s([wids34portablevu]+)/i, // Nintendo/Playstation
	            // GNU/Linux based
	            /(mint)[\/\s\(]?(\w*)/i, // Mint
	            /(mageia|vectorlinux)[;\s]/i, // Mageia/VectorLinux
	            /(joli|[kxln]?ubuntu|debian|suse|opensuse|gentoo|(?=\s)arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus)[\/\s-]?(?!chrom)([\w\.-]*)/i, // Joli/Ubuntu/Debian/SUSE/Gentoo/Arch/Slackware
	            // Fedora/Mandriva/CentOS/PCLinuxOS/RedHat/Zenwalk/Linpus
	            /(hurd|linux)\s?([\w\.]*)/i, // Hurd/Linux
	            /(gnu)\s?([\w\.]*)/i // GNU
	            ], [[NAME, 'Linux'], VERSION], [/(cros)\s[\w]+\s([\w\.]+\w)/i // Chromium OS
	            ], [[NAME, 'Chromium OS'], VERSION], [// Solaris
	            /(sunos)\s?([\w\.\d]*)/i // Solaris
	            ], [[NAME, 'Solaris'], VERSION], [// BSD based
	            /\s([frentopc-]{0,4}bsd|dragonfly)\s?([\w\.]*)/i // FreeBSD/NetBSD/OpenBSD/PC-BSD/DragonFly
	            ], [[NAME, 'Linux'], VERSION], [/(iphone)(?:.*os\s*([\w]*)\slike\smac|;\sopera)/i // iOS
	            ], [[NAME, 'iPhone'], [VERSION, /_/g, '.']], [/(ipad)(?:.*os\s*([\w]*)\slike\smac|;\sopera)/i // iOS
	            ], [[NAME, 'iPad'], [VERSION, /_/g, '.']], [/(haiku)\s(\w+)/i // Haiku
	            ], [NAME, VERSION], [/cfnetwork\/.+darwin/i, /ip[honead]{2,4}(?:.*os\s([\w]+)\slike\smac|;\sopera)/i // iOS
	            ], [[VERSION, /_/g, '.'], [NAME, 'iOS']], [/(mac\sos\sx)\s?([\w\s\.]*)/i, /(macintosh|mac(?=_powerpc)\s)/i // Mac OS
	            ], [[NAME, 'Mac'], [VERSION, /_/g, '.']], [// Other
	            /((?:open)?solaris)[\/\s-]?([\w\.]*)/i, // Solaris
	            /(aix)\s((\d)(?=\.|\)|\s)[\w\.])*/i, // AIX
	            /(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms|fuchsia)/i, // Plan9/Minix/BeOS/OS2/AmigaOS/MorphOS/RISCOS/OpenVMS/Fuchsia
	            /(unix)\s?([\w\.]*)/i // UNIX
	            ], [NAME, VERSION]]
	          }; /////////////////
	          // Constructor
	          ////////////////

	          var UAParser = function UAParser(uastring, extensions) {
	            if (_typeof(uastring) === 'object') {
	              extensions = uastring;
	              uastring = undefined$1;
	            }

	            if (!(this instanceof UAParser)) {
	              return new UAParser(uastring, extensions).getResult();
	            }

	            var ua = uastring || (window && window.navigator && window.navigator.userAgent ? window.navigator.userAgent : EMPTY);
	            var rgxmap = extensions ? util.extend(regexes, extensions) : regexes;

	            this.getBrowser = function () {
	              var browser = {
	                name: undefined$1,
	                version: undefined$1
	              };
	              mapper.rgx.call(browser, ua, rgxmap.browser);
	              browser.major = util.major(browser.version); // deprecated

	              return browser;
	            };

	            this.getCPU = function () {
	              var cpu = {
	                architecture: undefined$1
	              };
	              mapper.rgx.call(cpu, ua, rgxmap.cpu);
	              return cpu;
	            };

	            this.getDevice = function () {
	              var device = {
	                vendor: undefined$1,
	                model: undefined$1,
	                type: undefined$1
	              };
	              mapper.rgx.call(device, ua, rgxmap.device);
	              return device;
	            };

	            this.getEngine = function () {
	              var engine = {
	                name: undefined$1,
	                version: undefined$1
	              };
	              mapper.rgx.call(engine, ua, rgxmap.engine);
	              return engine;
	            };

	            this.getOS = function () {
	              var os = {
	                name: undefined$1,
	                version: undefined$1
	              };
	              mapper.rgx.call(os, ua, rgxmap.os);
	              return os;
	            };

	            this.getResult = function () {
	              return {
	                ua: this.getUA(),
	                browser: this.getBrowser(),
	                engine: this.getEngine(),
	                os: this.getOS(),
	                device: this.getDevice(),
	                cpu: this.getCPU()
	              };
	            };

	            this.getUA = function () {
	              return ua;
	            };

	            this.setUA = function (uastring) {
	              ua = uastring;
	              return this;
	            };

	            return this;
	          };

	          UAParser.VERSION = LIBVERSION;
	          UAParser.BROWSER = {
	            NAME: NAME,
	            MAJOR: MAJOR,
	            // deprecated
	            VERSION: VERSION
	          };
	          UAParser.CPU = {
	            ARCHITECTURE: ARCHITECTURE
	          };
	          UAParser.DEVICE = {
	            MODEL: MODEL,
	            VENDOR: VENDOR,
	            TYPE: TYPE,
	            CONSOLE: CONSOLE,
	            MOBILE: MOBILE,
	            SMARTTV: SMARTTV,
	            TABLET: TABLET,
	            WEARABLE: WEARABLE,
	            EMBEDDED: EMBEDDED
	          };
	          UAParser.ENGINE = {
	            NAME: NAME,
	            VERSION: VERSION
	          };
	          UAParser.OS = {
	            NAME: NAME,
	            VERSION: VERSION
	          }; ///////////
	          // Export
	          //////////
	          // check js environment

	          {
	            // nodejs env
	            if (module.exports) {
	              exports = module.exports = UAParser;
	            }

	            exports.UAParser = UAParser;
	          } // jQuery/Zepto specific (optional)
	          // Note:
	          //   In AMD env the global scope should be kept clean, but jQuery is an exception.
	          //   jQuery always exports to global scope, unless jQuery.noConflict(true) is used,
	          //   and we should catch that.

	          var $ = window && (window.jQuery || window.Zepto);

	          if ($ && !$.ua) {
	            var parser = new UAParser();
	            $.ua = parser.getResult();

	            $.ua.get = function () {
	              return parser.getUA();
	            };

	            $.ua.set = function (uastring) {
	              parser.setUA(uastring);
	              var result = parser.getResult();

	              for (var prop in result) {
	                $.ua[prop] = result[prop];
	              }
	            };
	          }
	        })((typeof window === "undefined" ? "undefined" : _typeof(window)) === 'object' ? window : commonjsGlobal$1$1);
	      });
	      var uaParser_1 = uaParser.UAParser;
	      /**
	       * Source: [jed's gist]{@link https://gist.github.com/982883}.
	       * Returns a random v4 UUID of the form xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx,
	       * where each x is replaced with a random hexadecimal digit from 0 to f, and
	       * y is replaced with a random hexadecimal digit from 8 to b.
	       * Used to generate UUIDs for deviceIds.
	       * @private
	       */

	      var uuid = function uuid(a) {
	        return a // if the placeholder was passed, return
	        ? // a random number from 0 to 15
	        (a ^ // unless b is 8,
	        Math.random() * // in which case
	        16 >> // a random number from
	        a / 4). // 8 to 11
	        toString(16) // in hexadecimal
	        : // or otherwise a concatenated string:
	        ([1e7] + // 10000000 +
	        -1e3 + // -1000 +
	        -4e3 + // -4000 +
	        -8e3 + // -80000000 +
	        -1e11). // -100000000000,
	        replace( // replacing
	        /[018]/g, // zeroes, ones, and eights with
	        uuid // random hex digits
	        );
	      };

	      var version = "7.4.0";

	      var getLanguage = function getLanguage() {
	        return navigator && (navigator.languages && navigator.languages[0] || navigator.language || navigator.userLanguage) || '';
	      };

	      var language = {
	        getLanguage: getLanguage
	      };
	      var platform = 'Web';
	      /**
	       * Options used when initializing Amplitude
	       * @typedef {Object} Options
	       * @property {string} [apiEndpoint=`api.amplitude.com`] - Endpoint to send amplitude event requests to.
	       * @property {boolean} [batchEvents=`false`] -  If `true`, then events are batched together and uploaded only when the number of unsent events is greater than or equal to eventUploadThreshold or after eventUploadPeriodMillis milliseconds have passed since the first unsent event was logged.
	       * @property {number} [cookieExpiration=`365`] - The number of days after which the Amplitude cookie will expire. 12 months is for GDPR compliance.
	       * @property {string} [cookieName=`amplitude_id`] - *DEPRECATED*
	       * @property {string} [sameSiteCookie='None'] -  Sets the SameSite flag on the amplitude cookie. Decides cookie privacy policy.
	       * @property {boolean} [cookieForceUpgrade=`false`] - Forces pre-v6.0.0 instances to adopt post-v6.0.0 compat cookie formats.
	       * @property {boolean} [deferInitialization=`null`] -  If `true`, disables the core functionality of the sdk, including saving a cookie and all logging, until explicitly enabled. To enable tracking, please call `amplitude.getInstance().enableTracking()` *Note: This will not affect users who already have an amplitude cookie. The decision to track events is determined by whether or not a user has an amplitude analytics cookie. If the `cookieExpiration</code> is manually defined to be a short lifespan, you may need to run `amplitude.getInstance().enableTracking()` upon the cookie expiring or upon logging in.*
	       * @property {boolean} [disableCookies=`false`] -  Disable Ampllitude cookies altogether.
	       * @property {string} [deviceId=A randomly generated UUID.] -  The custom Device ID to set. *Note: This is not recommended unless you know what you are doing (e.g. you have your own system for tracking user devices).*
	       * @property {boolean} [deviceIdFromUrlParam=`false`] -  If `true`, then the SDK will parse Device ID values from the URL parameter amp_device_id if available. Device IDs defined in the configuration options during init will take priority over Device IDs from URL parameters.
	       * @property {string} [domain=The top domain of the current page's URL. ('https://amplitude.com')] -  Set a custom domain for the Amplitude cookie. To include subdomains, add a preceding period, eg: `.amplitude.com`.
	       * @property {number} [eventUploadPeriodMillis=`30000` (30 sec)] -  Amount of time in milliseconds that the SDK waits before uploading events if batchEvents is true.
	       * @property {number} [eventUploadThreshold=`30`] -  Minimum number of events to batch together per request if batchEvents is true.
	       * @property {boolean} [forceHttps=`true`] -  If `true`, the events will always be uploaded to HTTPS endpoint. Otherwise, it will use the embedding site's protocol.
	       * @property {boolean} [includeFbclid=`false`] -  If `true`, captures the fbclid URL parameter as well as the user's initial_fbclid via a setOnce operation.
	       * @property {boolean} [includeGclid=`false`] -  If `true`, captures the gclid URL parameter as well as the user's initial_gclid via a setOnce operation.
	       * @property {boolean} [includeReferrer=`false`] -  If `true`, captures the referrer and referring_domain for each session, as well as the user's initial_referrer and initial_referring_domain via a setOnce operation.
	       * @property {boolean} [includeUtm=`false`] -  If `true`, finds UTM parameters in the query string or the _utmz cookie, parses, and includes them as user properties on all events uploaded. This also captures initial UTM parameters for each session via a setOnce operation.
	       * @property {string} [language=The language determined by the browser] -  Custom language to set.
	       * @property {string} [logLevel=`WARN`] -  Level of logs to be printed in the developer console. Valid values are 'DISABLE', 'ERROR', 'WARN', 'INFO'. To learn more about the different options, see below.
	       * @property {boolean} [logAttributionCapturedEvent=`false`] - If `true`, the SDK will log an Amplitude event anytime new attribution values are captured from the user. **Note: These events count towards your event volume.** Event name being logged: [Amplitude] Attribution Captured. Event Properties that can be logged: `utm_source`, `utm_medium`, `utm_campaign`, `utm_term`, `utm_content`, `referrer`, `referring_domain`, `gclid`, `fbclid`. For UTM properties to be logged, `includeUtm` must be set to `true`. For the `referrer` and `referring_domain` properties to be logged, `includeReferrer` must be set to `true`. For the `gclid` property to be logged, `includeGclid` must be set to `true`. For the `fbclid` property to be logged, `includeFbclid` must be set to `true`.
	       * @property {boolean} [optOut=`false`] -  Whether or not to disable tracking for the current user.
	       * @property {function} [onError=`() => {}`] - Function to call on error.
	       * @property {string} [platform=`Web`|`iOS`|`Android`] -  Platform device is running on. `Web` is a browser (including mobile browsers). `iOS` and `Android` are relevant only for react-native apps.
	       * @property {number} [savedMaxCount=`1000`] -  Maximum number of events to save in localStorage. If more events are logged while offline, then old events are removed.
	       * @property {boolean} [saveEvents=`true`] -  If `true`, saves events to localStorage and removes them upon successful upload. *Note: Without saving events, events may be lost if the user navigates to another page before the events are uploaded.*
	       * @property {boolean} [saveParamsReferrerOncePerSession=`true`] -  If `true`, then includeGclid, includeFbclid, includeReferrer, and includeUtm will only track their respective properties once per session. New values that come in during the middle of the user's session will be ignored. Set to false to always capture new values.
	       * @property {boolean} [secureCookie=`false`] -  If `true`, the amplitude cookie will be set with the Secure flag.
	       * @property {number} [sessionTimeout=`30*60*1000` (30 min)] -  The time between logged events before a new session starts in milliseconds.
	       * @property {Object} [trackingOptions=`{ city: true, country: true, carrier: true, device_manufacturer: true, device_model: true, dma: true, ip_address: true, language: true, os_name: true, os_version: true, platform: true, region: true, version_name: true}`] - Type of data associated with a user.
	       * @property {boolean} [unsetParamsReferrerOnNewSession=`false`] -  If `false`, the existing `referrer` and `utm_parameter` values will be carried through each new session. If set to `true`, the `referrer` and `utm_parameter` user properties, which include `referrer`, `utm_source`, `utm_medium`, `utm_campaign`, `utm_term`, and `utm_content`, will be set to `null` upon instantiating a new session. Note: This only works if `includeReferrer` or `includeUtm` is set to `true`.
	       * @property {string} [unsentKey=`amplitude_unsent`] - localStorage key that stores unsent events.
	       * @property {string} [unsentIdentifyKey=`amplitude_unsent_identify`] - localStorage key that stores unsent identifies.
	       * @property {number} [uploadBatchSize=`100`] -  The maximum number of events to send to the server per request.
	       */

	      var DEFAULT_OPTIONS = {
	        apiEndpoint: 'api.amplitude.com',
	        batchEvents: false,
	        cookieExpiration: 365,
	        // 12 months is for GDPR compliance
	        cookieName: 'amplitude_id',
	        // this is a deprecated option
	        sameSiteCookie: 'Lax',
	        // cookie privacy policy
	        cookieForceUpgrade: false,
	        deferInitialization: false,
	        disableCookies: false,
	        // this is a deprecated option
	        deviceIdFromUrlParam: false,
	        domain: '',
	        eventUploadPeriodMillis: 30 * 1000,
	        // 30s
	        eventUploadThreshold: 30,
	        forceHttps: true,
	        includeFbclid: false,
	        includeGclid: false,
	        includeReferrer: false,
	        includeUtm: false,
	        language: language.getLanguage(),
	        logLevel: 'WARN',
	        logAttributionCapturedEvent: false,
	        optOut: false,
	        onError: function onError() {},
	        platform: platform,
	        savedMaxCount: 1000,
	        saveEvents: true,
	        saveParamsReferrerOncePerSession: true,
	        secureCookie: false,
	        sessionTimeout: 30 * 60 * 1000,
	        storage: Constants.STORAGE_DEFAULT,
	        trackingOptions: {
	          city: true,
	          country: true,
	          carrier: true,
	          device_manufacturer: true,
	          device_model: true,
	          dma: true,
	          ip_address: true,
	          language: true,
	          os_name: true,
	          os_version: true,
	          platform: true,
	          region: true,
	          version_name: true
	        },
	        unsetParamsReferrerOnNewSession: false,
	        unsentKey: 'amplitude_unsent',
	        unsentIdentifyKey: 'amplitude_unsent_identify',
	        uploadBatchSize: 100
	      };
	      var AsyncStorage;
	      var DeviceInfo;
	      /**
	       * AmplitudeClient SDK API - instance constructor.
	       * The Amplitude class handles creation of client instances, all you need to do is call amplitude.getInstance()
	       * @constructor AmplitudeClient
	       * @public
	       * @example var amplitudeClient = new AmplitudeClient();
	       */

	      var AmplitudeClient = function AmplitudeClient(instanceName) {
	        if (!isBrowserEnv()) {
	          utils.log.warn('amplitude-js will not work in a non-browser environment. If you are planning to add Amplitude to a node environment, please use @amplitude/node');
	        }

	        this._instanceName = utils.isEmptyString(instanceName) ? Constants.DEFAULT_INSTANCE : instanceName.toLowerCase();
	        this._unsentEvents = [];
	        this._unsentIdentifys = [];
	        this._ua = new uaParser(navigator.userAgent).getResult();
	        this.options = _objectSpread({}, DEFAULT_OPTIONS, {
	          trackingOptions: _objectSpread({}, DEFAULT_OPTIONS.trackingOptions)
	        });
	        this.cookieStorage = new cookieStorage().getStorage();
	        this._q = []; // queue for proxied functions before script load

	        this._sending = false;
	        this._updateScheduled = false;
	        this._onInit = []; // event meta data

	        this._eventId = 0;
	        this._identifyId = 0;
	        this._lastEventTime = null;
	        this._newSession = false; // sequence used for by frontend for prioritizing event send retries

	        this._sequenceNumber = 0;
	        this._sessionId = null;
	        this._isInitialized = false;
	        this._userAgent = navigator && navigator.userAgent || null;
	      };

	      AmplitudeClient.prototype.Identify = Identify;
	      AmplitudeClient.prototype.Revenue = Revenue;
	      /**
	       * Initializes the Amplitude Javascript SDK with your apiKey and any optional configurations.
	       * This is required before any other methods can be called.
	       * @public
	       * @param {string} apiKey - The API key for your app.
	       * @param {string} opt_userId - (optional) An identifier for this user.
	       * @param {object} opt_config - (optional) Configuration options.
	       * See [options.js](https://amplitude.github.io/Amplitude-JavaScript/Options) for a list of options and default values.
	       * @param {function} opt_callback - (optional) Provide a callback function to run after initialization is complete.
	       * @example amplitudeClient.init('API_KEY', 'USER_ID', {includeReferrer: true, includeUtm: true}, function() { alert('init complete'); });
	       */

	      AmplitudeClient.prototype.init = function init(apiKey, opt_userId, opt_config, opt_callback) {
	        var _this = this;

	        if (type(apiKey) !== 'string' || utils.isEmptyString(apiKey)) {
	          utils.log.error('Invalid apiKey. Please re-initialize with a valid apiKey');
	          return;
	        }

	        try {
	          _parseConfig(this.options, opt_config);

	          if (isBrowserEnv() && window.Prototype !== undefined && Array.prototype.toJSON) {
	            prototypeJsFix();
	            utils.log.warn('Prototype.js injected Array.prototype.toJSON. Deleting Array.prototype.toJSON to prevent double-stringify');
	          }

	          if (this.options.cookieName !== DEFAULT_OPTIONS.cookieName) {
	            utils.log.warn('The cookieName option is deprecated. We will be ignoring it for newer cookies');
	          }

	          this.options.apiKey = apiKey;
	          this._storageSuffix = '_' + apiKey + (this._instanceName === Constants.DEFAULT_INSTANCE ? '' : '_' + this._instanceName);
	          this._storageSuffixV5 = apiKey.slice(0, 6);
	          this._oldCookiename = this.options.cookieName + this._storageSuffix;
	          this._unsentKey = this.options.unsentKey + this._storageSuffix;
	          this._unsentIdentifyKey = this.options.unsentIdentifyKey + this._storageSuffix;
	          this._cookieName = Constants.COOKIE_PREFIX + '_' + this._storageSuffixV5;
	          this.cookieStorage.options({
	            expirationDays: this.options.cookieExpiration,
	            domain: this.options.domain,
	            secure: this.options.secureCookie,
	            sameSite: this.options.sameSiteCookie
	          });
	          this._metadataStorage = new MetadataStorage({
	            storageKey: this._cookieName,
	            disableCookies: this.options.disableCookies,
	            expirationDays: this.options.cookieExpiration,
	            domain: this.options.domain,
	            secure: this.options.secureCookie,
	            sameSite: this.options.sameSiteCookie,
	            storage: this.options.storage
	          });
	          var hasOldCookie = !!this.cookieStorage.get(this._oldCookiename);
	          var hasNewCookie = !!this._metadataStorage.load();
	          this._useOldCookie = !hasNewCookie && hasOldCookie && !this.options.cookieForceUpgrade;
	          var hasCookie = hasNewCookie || hasOldCookie;
	          this.options.domain = this.cookieStorage.options().domain;

	          if (this.options.deferInitialization && !hasCookie) {
	            this._deferInitialization(apiKey, opt_userId, opt_config, opt_callback);

	            return;
	          }

	          if (type(this.options.logLevel) === 'string') {
	            utils.setLogLevel(this.options.logLevel);
	          }

	          var trackingOptions = _generateApiPropertiesTrackingConfig(this);

	          this._apiPropertiesTrackingOptions = Object.keys(trackingOptions).length > 0 ? {
	            tracking_options: trackingOptions
	          } : {};

	          if (this.options.cookieForceUpgrade && hasOldCookie) {
	            if (!hasNewCookie) {
	              _upgradeCookieData(this);
	            }

	            this.cookieStorage.remove(this._oldCookiename);
	          }

	          _loadCookieData(this);

	          this._pendingReadStorage = true;

	          var initFromStorage = function initFromStorage(storedDeviceId) {
	            _this.options.deviceId = _this._getInitialDeviceId(opt_config && opt_config.deviceId, storedDeviceId);
	            _this.options.userId = type(opt_userId) === 'string' && !utils.isEmptyString(opt_userId) && opt_userId || type(opt_userId) === 'number' && opt_userId.toString() || _this.options.userId || null;
	            var now = new Date().getTime();

	            if (!_this._sessionId || !_this._lastEventTime || now - _this._lastEventTime > _this.options.sessionTimeout) {
	              if (_this.options.unsetParamsReferrerOnNewSession) {
	                _this._unsetUTMParams();
	              }

	              _this._newSession = true;
	              _this._sessionId = now; // only capture UTM params and referrer if new session

	              if (_this.options.saveParamsReferrerOncePerSession) {
	                _this._trackParamsAndReferrer();
	              }
	            }

	            if (!_this.options.saveParamsReferrerOncePerSession) {
	              _this._trackParamsAndReferrer();
	            } // load unsent events and identifies before any attempt to log new ones


	            if (_this.options.saveEvents) {
	              _validateUnsentEventQueue(_this._unsentEvents);

	              _validateUnsentEventQueue(_this._unsentIdentifys);
	            }

	            _this._lastEventTime = now;

	            _saveCookieData(_this);

	            _this._pendingReadStorage = false;

	            _this._sendEventsIfReady(); // try sending unsent events


	            for (var i = 0; i < _this._onInit.length; i++) {
	              _this._onInit[i](_this);
	            }

	            _this._onInit = [];
	            _this._isInitialized = true;
	          };

	          if (AsyncStorage) ; else {
	            if (this.options.saveEvents) {
	              this._unsentEvents = this._loadSavedUnsentEvents(this.options.unsentKey).map(function (event) {
	                return {
	                  event: event
	                };
	              }).concat(this._unsentEvents);
	              this._unsentIdentifys = this._loadSavedUnsentEvents(this.options.unsentIdentifyKey).map(function (event) {
	                return {
	                  event: event
	                };
	              }).concat(this._unsentIdentifys);
	            }

	            initFromStorage();
	            this.runQueuedFunctions();

	            if (type(opt_callback) === 'function') {
	              opt_callback(this);
	            }
	          }
	        } catch (err) {
	          utils.log.error(err);
	          this.options.onError(err);
	        }
	      };

	      AmplitudeClient.prototype.deleteLowerLevelDomainCookies = function () {
	        var host = getHost();
	        var cookieHost = this.options.domain && this.options.domain[0] === '.' ? this.options.domain.slice(1) : this.options.domain;

	        if (!cookieHost) {
	          return;
	        }

	        if (host !== cookieHost) {
	          if (new RegExp(cookieHost + '$').test(host)) {
	            var hostParts = host.split('.');
	            var cookieHostParts = cookieHost.split('.');

	            for (var i = hostParts.length; i > cookieHostParts.length; --i) {
	              var deleteDomain = hostParts.slice(hostParts.length - i).join('.');
	              baseCookie.set(this._cookieName, null, {
	                domain: '.' + deleteDomain
	              });
	            }

	            baseCookie.set(this._cookieName, null, {});
	          }
	        }
	      };

	      AmplitudeClient.prototype._getInitialDeviceId = function (configDeviceId, storedDeviceId) {
	        if (configDeviceId) {
	          return configDeviceId;
	        }

	        if (this.options.deviceIdFromUrlParam) {
	          var deviceIdFromUrlParam = this._getDeviceIdFromUrlParam(this._getUrlParams());

	          if (deviceIdFromUrlParam) {
	            return deviceIdFromUrlParam;
	          }
	        }

	        if (this.options.deviceId) {
	          return this.options.deviceId;
	        }

	        if (storedDeviceId) {
	          return storedDeviceId;
	        }

	        return base64Id();
	      }; // validate properties for unsent events


	      var _validateUnsentEventQueue = function _validateUnsentEventQueue(queue) {
	        for (var i = 0; i < queue.length; i++) {
	          var userProperties = queue[i].event.user_properties;
	          var eventProperties = queue[i].event.event_properties;
	          var groups = queue[i].event.groups;
	          queue[i].event.user_properties = utils.validateProperties(userProperties);
	          queue[i].event.event_properties = utils.validateProperties(eventProperties);
	          queue[i].event.groups = utils.validateGroups(groups);
	        }
	      };
	      /**
	       * @private
	       */


	      AmplitudeClient.prototype._migrateUnsentEvents = function _migrateUnsentEvents(cb) {
	        var _this2 = this;

	        Promise.all([AsyncStorage.getItem(this.options.unsentKey), AsyncStorage.getItem(this.options.unsentIdentifyKey)]).then(function (values) {
	          if (_this2.options.saveEvents) {
	            var unsentEventsString = values[0];
	            var unsentIdentifyKey = values[1];
	            var itemsToSet = [];
	            var itemsToRemove = [];

	            if (unsentEventsString) {
	              itemsToSet.push(AsyncStorage.setItem(_this2.options.unsentKey + _this2._storageSuffix, JSON.stringify(unsentEventsString)));
	              itemsToRemove.push(AsyncStorage.removeItem(_this2.options.unsentKey));
	            }

	            if (unsentIdentifyKey) {
	              itemsToSet.push(AsyncStorage.setItem(_this2.options.unsentIdentifyKey + _this2._storageSuffix, JSON.stringify(unsentIdentifyKey)));
	              itemsToRemove.push(AsyncStorage.removeItem(_this2.options.unsentIdentifyKey));
	            }

	            if (itemsToSet.length > 0) {
	              Promise.all(itemsToSet).then(function () {})["catch"](function (err) {
	                _this2.options.onError(err);
	              });
	            }
	          }
	        }).then(cb)["catch"](function (err) {
	          _this2.options.onError(err);
	        });
	      };
	      /**
	       * @private
	       */


	      AmplitudeClient.prototype._trackParamsAndReferrer = function _trackParamsAndReferrer() {
	        var utmProperties;
	        var referrerProperties;
	        var gclidProperties;
	        var fbclidProperties;

	        if (this.options.includeUtm) {
	          utmProperties = this._initUtmData();
	        }

	        if (this.options.includeReferrer) {
	          referrerProperties = this._saveReferrer(this._getReferrer());
	        }

	        if (this.options.includeGclid) {
	          gclidProperties = this._saveGclid(this._getUrlParams());
	        }

	        if (this.options.includeFbclid) {
	          fbclidProperties = this._saveFbclid(this._getUrlParams());
	        }

	        if (this.options.logAttributionCapturedEvent) {
	          var attributionProperties = _objectSpread({}, utmProperties, referrerProperties, gclidProperties, fbclidProperties);

	          if (Object.keys(attributionProperties).length > 0) {
	            this.logEvent(Constants.ATTRIBUTION_EVENT, attributionProperties);
	          }
	        }
	      };
	      /**
	       * Parse and validate user specified config values and overwrite existing option value
	       * DEFAULT_OPTIONS provides list of all config keys that are modifiable, as well as expected types for values
	       * @private
	       */


	      var _parseConfig = function _parseConfig(options, config) {
	        if (type(config) !== 'object') {
	          return;
	        } // validates config value is defined, is the correct type, and some additional value sanity checks


	        var parseValidateAndLoad = function parseValidateAndLoad(key) {
	          if (!options.hasOwnProperty(key)) {
	            return; // skip bogus config values
	          }

	          var inputValue = config[key];
	          var expectedType = type(options[key]);

	          if (!utils.validateInput(inputValue, key + ' option', expectedType)) {
	            return;
	          }

	          if (expectedType === 'boolean') {
	            options[key] = !!inputValue;
	          } else if (expectedType === 'string' && !utils.isEmptyString(inputValue) || expectedType === 'number' && inputValue > 0) {
	            options[key] = inputValue;
	          } else if (expectedType === 'object') {
	            _parseConfig(options[key], inputValue);
	          }
	        };

	        for (var key in config) {
	          if (config.hasOwnProperty(key)) {
	            parseValidateAndLoad(key);
	          }
	        }
	      };
	      /**
	       * Run functions queued up by proxy loading snippet
	       * @private
	       */


	      AmplitudeClient.prototype.runQueuedFunctions = function () {
	        var queue = this._q;
	        this._q = [];

	        for (var i = 0; i < queue.length; i++) {
	          var fn = this[queue[i][0]];

	          if (type(fn) === 'function') {
	            fn.apply(this, queue[i].slice(1));
	          }
	        }
	      };
	      /**
	       * Check that the apiKey is set before calling a function. Logs a warning message if not set.
	       * @private
	       */


	      AmplitudeClient.prototype._apiKeySet = function _apiKeySet(methodName) {
	        if (utils.isEmptyString(this.options.apiKey)) {
	          utils.log.error('Invalid apiKey. Please set a valid apiKey with init() before calling ' + methodName);
	          return false;
	        }

	        return true;
	      };
	      /**
	       * Load saved events from localStorage. JSON deserializes event array. Handles case where string is corrupted.
	       * @private
	       */


	      AmplitudeClient.prototype._loadSavedUnsentEvents = function _loadSavedUnsentEvents(unsentKey) {
	        var savedUnsentEventsString = this._getFromStorage(localStorage$1, unsentKey);

	        var unsentEvents = this._parseSavedUnsentEventsString(savedUnsentEventsString, unsentKey);

	        this._setInStorage(localStorage$1, unsentKey, JSON.stringify(unsentEvents));

	        return unsentEvents;
	      };
	      /**
	       * Load saved events from localStorage. JSON deserializes event array. Handles case where string is corrupted.
	       * @private
	       */


	      AmplitudeClient.prototype._parseSavedUnsentEventsString = function _parseSavedUnsentEventsString(savedUnsentEventsString, unsentKey) {
	        if (utils.isEmptyString(savedUnsentEventsString)) {
	          return []; // new app, does not have any saved events
	        }

	        if (type(savedUnsentEventsString) === 'string') {
	          try {
	            var events = JSON.parse(savedUnsentEventsString);

	            if (type(events) === 'array') {
	              // handle case where JSON dumping of unsent events is corrupted
	              return events;
	            }
	          } catch (e) {}
	          /* eslint-disable-line no-empty */

	        }

	        utils.log.error('Unable to load ' + unsentKey + ' events. Restart with a new empty queue.');
	        return [];
	      };
	      /**
	       * Returns true if a new session was created during initialization, otherwise false.
	       * @public
	       * @return {boolean} Whether a new session was created during initialization.
	       */


	      AmplitudeClient.prototype.isNewSession = function isNewSession() {
	        return this._newSession;
	      };
	      /**
	       * Add callbacks to call after init. Useful for users who load Amplitude through a snippet.
	       * @public
	       */


	      AmplitudeClient.prototype.onInit = function (callback) {
	        if (this._isInitialized) {
	          callback(this);
	        } else {
	          this._onInit.push(callback);
	        }
	      };
	      /**
	       * Returns the id of the current session.
	       * @public
	       * @return {number} Id of the current session.
	       */


	      AmplitudeClient.prototype.getSessionId = function getSessionId() {
	        return this._sessionId;
	      };
	      /**
	       * Increments the eventId and returns it.
	       * @private
	       */


	      AmplitudeClient.prototype.nextEventId = function nextEventId() {
	        this._eventId++;
	        return this._eventId;
	      };
	      /**
	       * Increments the identifyId and returns it.
	       * @private
	       */


	      AmplitudeClient.prototype.nextIdentifyId = function nextIdentifyId() {
	        this._identifyId++;
	        return this._identifyId;
	      };
	      /**
	       * Increments the sequenceNumber and returns it.
	       * @private
	       */


	      AmplitudeClient.prototype.nextSequenceNumber = function nextSequenceNumber() {
	        this._sequenceNumber++;
	        return this._sequenceNumber;
	      };
	      /**
	       * Returns the total count of unsent events and identifys
	       * @private
	       */


	      AmplitudeClient.prototype._unsentCount = function _unsentCount() {
	        return this._unsentEvents.length + this._unsentIdentifys.length;
	      };
	      /**
	       * Send events if ready. Returns true if events are sent.
	       * @private
	       */


	      AmplitudeClient.prototype._sendEventsIfReady = function _sendEventsIfReady() {
	        if (this._unsentCount() === 0) {
	          return false;
	        } // if batching disabled, send any unsent events immediately


	        if (!this.options.batchEvents) {
	          this.sendEvents();
	          return true;
	        } // if batching enabled, check if min threshold met for batch size


	        if (this._unsentCount() >= this.options.eventUploadThreshold) {
	          this.sendEvents();
	          return true;
	        } // otherwise schedule an upload after 30s


	        if (!this._updateScheduled) {
	          // make sure we only schedule 1 upload
	          this._updateScheduled = true;
	          setTimeout(function () {
	            this._updateScheduled = false;
	            this.sendEvents();
	          }.bind(this), this.options.eventUploadPeriodMillis);
	        }

	        return false; // an upload was scheduled, no events were uploaded
	      };
	      /**
	       * Helper function to fetch values from storage
	       * Storage argument allows for localStoraoge and sessionStoraoge
	       * @private
	       */


	      AmplitudeClient.prototype._getFromStorage = function _getFromStorage(storage, key) {
	        return storage.getItem(key + this._storageSuffix);
	      };
	      /**
	       * Helper function to set values in storage
	       * Storage argument allows for localStoraoge and sessionStoraoge
	       * @private
	       */


	      AmplitudeClient.prototype._setInStorage = function _setInStorage(storage, key, value) {
	        storage.setItem(key + this._storageSuffix, value);
	      };
	      /**
	       * Fetches deviceId, userId, event meta data from amplitude cookie
	       * @private
	       */


	      var _loadCookieData = function _loadCookieData(scope) {
	        if (!scope._useOldCookie) {
	          var props = scope._metadataStorage.load();

	          if (type(props) === 'object') {
	            _loadCookieDataProps(scope, props);
	          }

	          return;
	        }

	        var cookieData = scope.cookieStorage.get(scope._oldCookiename);

	        if (type(cookieData) === 'object') {
	          _loadCookieDataProps(scope, cookieData);

	          return;
	        }
	      };

	      var _upgradeCookieData = function _upgradeCookieData(scope) {
	        var cookieData = scope.cookieStorage.get(scope._oldCookiename);

	        if (type(cookieData) === 'object') {
	          _loadCookieDataProps(scope, cookieData);

	          _saveCookieData(scope);
	        }
	      };

	      var _loadCookieDataProps = function _loadCookieDataProps(scope, cookieData) {
	        if (cookieData.deviceId) {
	          scope.options.deviceId = cookieData.deviceId;
	        }

	        if (cookieData.userId) {
	          scope.options.userId = cookieData.userId;
	        }

	        if (cookieData.optOut !== null && cookieData.optOut !== undefined) {
	          // Do not clobber config opt out value if cookieData has optOut as false
	          if (cookieData.optOut !== false) {
	            scope.options.optOut = cookieData.optOut;
	          }
	        }

	        if (cookieData.sessionId) {
	          scope._sessionId = parseInt(cookieData.sessionId, 10);
	        }

	        if (cookieData.lastEventTime) {
	          scope._lastEventTime = parseInt(cookieData.lastEventTime, 10);
	        }

	        if (cookieData.eventId) {
	          scope._eventId = parseInt(cookieData.eventId, 10);
	        }

	        if (cookieData.identifyId) {
	          scope._identifyId = parseInt(cookieData.identifyId, 10);
	        }

	        if (cookieData.sequenceNumber) {
	          scope._sequenceNumber = parseInt(cookieData.sequenceNumber, 10);
	        }
	      };
	      /**
	       * Saves deviceId, userId, event meta data to amplitude cookie
	       * @private
	       */


	      var _saveCookieData = function _saveCookieData(scope) {
	        var cookieData = {
	          deviceId: scope.options.deviceId,
	          userId: scope.options.userId,
	          optOut: scope.options.optOut,
	          sessionId: scope._sessionId,
	          lastEventTime: scope._lastEventTime,
	          eventId: scope._eventId,
	          identifyId: scope._identifyId,
	          sequenceNumber: scope._sequenceNumber
	        };

	        if (scope._useOldCookie) {
	          scope.cookieStorage.set(scope.options.cookieName + scope._storageSuffix, cookieData);
	        } else {
	          scope._metadataStorage.save(cookieData);
	        }
	      };
	      /**
	       * Parse the utm properties out of cookies and query for adding to user properties.
	       * @private
	       */


	      AmplitudeClient.prototype._initUtmData = function _initUtmData(queryParams, cookieParams) {
	        queryParams = queryParams || this._getUrlParams();
	        cookieParams = cookieParams || this.cookieStorage.get('__utmz');
	        var utmProperties = getUtmData(cookieParams, queryParams);

	        _sendParamsReferrerUserProperties(this, utmProperties);

	        return utmProperties;
	      };
	      /**
	       * Unset the utm params from the Amplitude instance and update the identify.
	       * @private
	       */


	      AmplitudeClient.prototype._unsetUTMParams = function _unsetUTMParams() {
	        var identify = new Identify();
	        identify.unset(Constants.REFERRER);
	        identify.unset(Constants.UTM_SOURCE);
	        identify.unset(Constants.UTM_MEDIUM);
	        identify.unset(Constants.UTM_CAMPAIGN);
	        identify.unset(Constants.UTM_TERM);
	        identify.unset(Constants.UTM_CONTENT);
	        this.identify(identify);
	      };
	      /**
	       * The calling function should determine when it is appropriate to send these user properties. This function
	       * will no longer contain any session storage checking logic.
	       * @private
	       */


	      var _sendParamsReferrerUserProperties = function _sendParamsReferrerUserProperties(scope, userProperties) {
	        if (type(userProperties) !== 'object' || Object.keys(userProperties).length === 0) {
	          return;
	        } // setOnce the initial user properties


	        var identify = new Identify();

	        for (var key in userProperties) {
	          if (userProperties.hasOwnProperty(key)) {
	            identify.setOnce('initial_' + key, userProperties[key]);
	            identify.set(key, userProperties[key]);
	          }
	        }

	        scope.identify(identify);
	      };
	      /**
	       * @private
	       */


	      AmplitudeClient.prototype._getReferrer = function _getReferrer() {
	        return document.referrer;
	      };
	      /**
	       * @private
	       */


	      AmplitudeClient.prototype._getUrlParams = function _getUrlParams() {
	        return location.search;
	      };
	      /**
	       * Try to fetch Google Gclid from url params.
	       * @private
	       */


	      AmplitudeClient.prototype._saveGclid = function _saveGclid(urlParams) {
	        var gclid = utils.getQueryParam('gclid', urlParams);

	        if (utils.isEmptyString(gclid)) {
	          return;
	        }

	        var gclidProperties = {
	          gclid: gclid
	        };

	        _sendParamsReferrerUserProperties(this, gclidProperties);

	        return gclidProperties;
	      };
	      /**
	       * Try to fetch Facebook Fbclid from url params.
	       * @private
	       */


	      AmplitudeClient.prototype._saveFbclid = function _saveFbclid(urlParams) {
	        var fbclid = utils.getQueryParam('fbclid', urlParams);

	        if (utils.isEmptyString(fbclid)) {
	          return;
	        }

	        var fbclidProperties = {
	          fbclid: fbclid
	        };

	        _sendParamsReferrerUserProperties(this, fbclidProperties);

	        return fbclidProperties;
	      };
	      /**
	       * Try to fetch Amplitude device id from url params.
	       * @private
	       */


	      AmplitudeClient.prototype._getDeviceIdFromUrlParam = function _getDeviceIdFromUrlParam(urlParams) {
	        return utils.getQueryParam(Constants.AMP_DEVICE_ID_PARAM, urlParams);
	      };
	      /**
	       * Parse the domain from referrer info
	       * @private
	       */


	      AmplitudeClient.prototype._getReferringDomain = function _getReferringDomain(referrer) {
	        if (utils.isEmptyString(referrer)) {
	          return null;
	        }

	        var parts = referrer.split('/');

	        if (parts.length >= 3) {
	          return parts[2];
	        }

	        return null;
	      };
	      /**
	       * Fetch the referrer information, parse the domain and send.
	       * Since user properties are propagated on the server, only send once per session, don't need to send with every event
	       * @private
	       */


	      AmplitudeClient.prototype._saveReferrer = function _saveReferrer(referrer) {
	        if (utils.isEmptyString(referrer)) {
	          return;
	        }

	        var referrerInfo = {
	          referrer: referrer,
	          referring_domain: this._getReferringDomain(referrer)
	        };

	        _sendParamsReferrerUserProperties(this, referrerInfo);

	        return referrerInfo;
	      };
	      /**
	       * Saves unsent events and identifies to localStorage. JSON stringifies event queues before saving.
	       * Note: this is called automatically every time events are logged, unless you explicitly set option saveEvents to false.
	       * @private
	       */


	      AmplitudeClient.prototype.saveEvents = function saveEvents() {
	        try {
	          var serializedUnsentEvents = JSON.stringify(this._unsentEvents.map(function (_ref) {
	            var event = _ref.event;
	            return event;
	          }));

	          if (AsyncStorage) ; else {
	            this._setInStorage(localStorage$1, this.options.unsentKey, serializedUnsentEvents);
	          }
	        } catch (e) {}
	        /* eslint-disable-line no-empty */


	        try {
	          var serializedIdentifys = JSON.stringify(this._unsentIdentifys.map(function (unsentIdentify) {
	            return unsentIdentify.event;
	          }));

	          if (AsyncStorage) ; else {
	            this._setInStorage(localStorage$1, this.options.unsentIdentifyKey, serializedIdentifys);
	          }
	        } catch (e) {}
	        /* eslint-disable-line no-empty */

	      };
	      /**
	       * Sets a customer domain for the amplitude cookie. Useful if you want to support cross-subdomain tracking.
	       * @public
	       * @param {string} domain to set.
	       * @example amplitudeClient.setDomain('.amplitude.com');
	       */


	      AmplitudeClient.prototype.setDomain = function setDomain(domain) {
	        if (this._shouldDeferCall()) {
	          return this._q.push(['setDomain'].concat(Array.prototype.slice.call(arguments, 0)));
	        }

	        if (!utils.validateInput(domain, 'domain', 'string')) {
	          return;
	        }

	        try {
	          this.cookieStorage.options({
	            expirationDays: this.options.cookieExpiration,
	            secure: this.options.secureCookie,
	            domain: domain,
	            sameSite: this.options.sameSiteCookie
	          });
	          this.options.domain = this.cookieStorage.options().domain;

	          _loadCookieData(this);

	          _saveCookieData(this);
	        } catch (e) {
	          utils.log.error(e);
	        }
	      };
	      /**
	       * Sets an identifier for the current user.
	       * @public
	       * @param {string} userId - identifier to set. Can be null.
	       * @example amplitudeClient.setUserId('joe@gmail.com');
	       */


	      AmplitudeClient.prototype.setUserId = function setUserId(userId) {
	        if (this._shouldDeferCall()) {
	          return this._q.push(['setUserId'].concat(Array.prototype.slice.call(arguments, 0)));
	        }

	        try {
	          this.options.userId = userId !== undefined && userId !== null && '' + userId || null;

	          _saveCookieData(this);
	        } catch (e) {
	          utils.log.error(e);
	        }
	      };
	      /**
	       * Add user to a group or groups. You need to specify a groupType and groupName(s).
	       *
	       * For example you can group people by their organization.
	       * In that case, groupType is "orgId" and groupName would be the actual ID(s).
	       * groupName can be a string or an array of strings to indicate a user in multiple gruups.
	       * You can also call setGroup multiple times with different groupTypes to track multiple types of groups (up to 5 per app).
	       *
	       * Note: this will also set groupType: groupName as a user property.
	       * See the [advanced topics article](https://developers.amplitude.com/docs/setting-user-groups) for more information.
	       * @public
	       * @param {string} groupType - the group type (ex: orgId)
	       * @param {string|list} groupName - the name of the group (ex: 15), or a list of names of the groups
	       * @example amplitudeClient.setGroup('orgId', 15); // this adds the current user to orgId 15.
	       */


	      AmplitudeClient.prototype.setGroup = function (groupType, groupName) {
	        if (this._shouldDeferCall()) {
	          return this._q.push(['setGroup'].concat(Array.prototype.slice.call(arguments, 0)));
	        }

	        if (!this._apiKeySet('setGroup()') || !utils.validateInput(groupType, 'groupType', 'string') || utils.isEmptyString(groupType)) {
	          return;
	        }

	        var groups = {};
	        groups[groupType] = groupName;
	        var identify = new Identify().set(groupType, groupName);

	        this._logEvent(Constants.IDENTIFY_EVENT, null, null, identify.userPropertiesOperations, groups, null, null, null);
	      };
	      /**
	       * Sets whether to opt current user out of tracking.
	       * @public
	       * @param {boolean} enable - if true then no events will be logged or sent.
	       * @example: amplitude.setOptOut(true);
	       */


	      AmplitudeClient.prototype.setOptOut = function setOptOut(enable) {
	        if (this._shouldDeferCall()) {
	          return this._q.push(['setOptOut'].concat(Array.prototype.slice.call(arguments, 0)));
	        }

	        if (!utils.validateInput(enable, 'enable', 'boolean')) {
	          return;
	        }

	        try {
	          this.options.optOut = enable;

	          _saveCookieData(this);
	        } catch (e) {
	          utils.log.error(e);
	        }
	      };

	      AmplitudeClient.prototype.setSessionId = function setSessionId(sessionId) {
	        if (!utils.validateInput(sessionId, 'sessionId', 'number')) {
	          return;
	        }

	        try {
	          this._sessionId = sessionId;

	          _saveCookieData(this);
	        } catch (e) {
	          utils.log.error(e);
	        }
	      };

	      AmplitudeClient.prototype.resetSessionId = function resetSessionId() {
	        this.setSessionId(new Date().getTime());
	      };
	      /**
	       * Regenerates a new random deviceId for current user. Note: this is not recommended unless you know what you
	       * are doing. This can be used in conjunction with `setUserId(null)` to anonymize users after they log out.
	       * With a null userId and a completely new deviceId, the current user would appear as a brand new user in dashboard.
	       * This uses src/uuid.js to regenerate the deviceId.
	       * @public
	       */


	      AmplitudeClient.prototype.regenerateDeviceId = function regenerateDeviceId() {
	        if (this._shouldDeferCall()) {
	          return this._q.push(['regenerateDeviceId'].concat(Array.prototype.slice.call(arguments, 0)));
	        }

	        this.setDeviceId(base64Id());
	      };
	      /**
	       * Sets a custom deviceId for current user. Note: this is not recommended unless you know what you are doing
	       * (like if you have your own system for managing deviceIds). Make sure the deviceId you set is sufficiently unique
	       * (we recommend something like a UUID - see src/uuid.js for an example of how to generate) to prevent conflicts with other devices in our system.
	       * @public
	       * @param {string} deviceId - custom deviceId for current user.
	       * @example amplitudeClient.setDeviceId('45f0954f-eb79-4463-ac8a-233a6f45a8f0');
	       */


	      AmplitudeClient.prototype.setDeviceId = function setDeviceId(deviceId) {
	        if (this._shouldDeferCall()) {
	          return this._q.push(['setDeviceId'].concat(Array.prototype.slice.call(arguments, 0)));
	        }

	        if (!utils.validateInput(deviceId, 'deviceId', 'string')) {
	          return;
	        }

	        try {
	          if (!utils.isEmptyString(deviceId)) {
	            this.options.deviceId = '' + deviceId;

	            _saveCookieData(this);
	          }
	        } catch (e) {
	          utils.log.error(e);
	        }
	      };
	      /**
	       * Sets user properties for the current user.
	       * @public
	       * @param {object} - object with string keys and values for the user properties to set.
	       * @param {boolean} - DEPRECATED opt_replace: in earlier versions of the JS SDK the user properties object was kept in
	       * memory and replace = true would replace the object in memory. Now the properties are no longer stored in memory, so replace is deprecated.
	       * @example amplitudeClient.setUserProperties({'gender': 'female', 'sign_up_complete': true})
	       */


	      AmplitudeClient.prototype.setUserProperties = function setUserProperties(userProperties) {
	        if (this._shouldDeferCall()) {
	          return this._q.push(['setUserProperties'].concat(Array.prototype.slice.call(arguments, 0)));
	        }

	        if (!this._apiKeySet('setUserProperties()') || !utils.validateInput(userProperties, 'userProperties', 'object')) {
	          return;
	        } // sanitize the userProperties dict before converting into identify


	        var sanitized = utils.truncate(utils.validateProperties(userProperties));

	        if (Object.keys(sanitized).length === 0) {
	          return;
	        } // convert userProperties into an identify call


	        var identify = new Identify();

	        for (var property in sanitized) {
	          if (sanitized.hasOwnProperty(property)) {
	            identify.set(property, sanitized[property]);
	          }
	        }

	        this.identify(identify);
	      };
	      /**
	       * Clear all of the user properties for the current user. Note: clearing user properties is irreversible!
	       * @public
	       * @example amplitudeClient.clearUserProperties();
	       */


	      AmplitudeClient.prototype.clearUserProperties = function clearUserProperties() {
	        if (this._shouldDeferCall()) {
	          return this._q.push(['clearUserProperties'].concat(Array.prototype.slice.call(arguments, 0)));
	        }

	        if (!this._apiKeySet('clearUserProperties()')) {
	          return;
	        }

	        var identify = new Identify();
	        identify.clearAll();
	        this.identify(identify);
	      };
	      /**
	       * Applies the proxied functions on the proxied object to an instance of the real object.
	       * Used to convert proxied Identify and Revenue objects.
	       * @private
	       */


	      var _convertProxyObjectToRealObject = function _convertProxyObjectToRealObject(instance, proxy) {
	        for (var i = 0; i < proxy._q.length; i++) {
	          var fn = instance[proxy._q[i][0]];

	          if (type(fn) === 'function') {
	            fn.apply(instance, proxy._q[i].slice(1));
	          }
	        }

	        return instance;
	      };
	      /**
	       * Send an identify call containing user property operations to Amplitude servers.
	       * See the [Identify](https://amplitude.github.io/Amplitude-JavaScript/Identify/)
	       * reference page for more information on the Identify API and user property operations.
	       * @param {Identify} identify_obj - the Identify object containing the user property operations to send.
	       * @param {Amplitude~eventCallback} opt_callback - (optional) callback function to run when the identify event has been sent.
	       * Note: the server response code and response body from the identify event upload are passed to the callback function.
	       * @example
	       * var identify = new amplitude.Identify().set('colors', ['rose', 'gold']).add('karma', 1).setOnce('sign_up_date', '2016-03-31');
	       * amplitude.identify(identify);
	       */


	      AmplitudeClient.prototype.identify = function (identify_obj, opt_callback) {
	        if (this._shouldDeferCall()) {
	          return this._q.push(['identify'].concat(Array.prototype.slice.call(arguments, 0)));
	        }

	        if (!this._apiKeySet('identify()')) {
	          if (type(opt_callback) === 'function') {
	            opt_callback(0, 'No request sent', {
	              reason: 'API key is not set'
	            });
	          }

	          return;
	        } // if identify input is a proxied object created by the async loading snippet, convert it into an identify object


	        if (type(identify_obj) === 'object' && identify_obj.hasOwnProperty('_q')) {
	          identify_obj = _convertProxyObjectToRealObject(new Identify(), identify_obj);
	        }

	        if (identify_obj instanceof Identify) {
	          // only send if there are operations
	          if (Object.keys(identify_obj.userPropertiesOperations).length > 0) {
	            return this._logEvent(Constants.IDENTIFY_EVENT, null, null, identify_obj.userPropertiesOperations, null, null, null, opt_callback);
	          } else {
	            if (type(opt_callback) === 'function') {
	              opt_callback(0, 'No request sent', {
	                reason: 'No user property operations'
	              });
	            }
	          }
	        } else {
	          utils.log.error('Invalid identify input type. Expected Identify object but saw ' + type(identify_obj));

	          if (type(opt_callback) === 'function') {
	            opt_callback(0, 'No request sent', {
	              reason: 'Invalid identify input type'
	            });
	          }
	        }
	      };

	      AmplitudeClient.prototype.groupIdentify = function (group_type, group_name, identify_obj, opt_callback) {
	        if (this._shouldDeferCall()) {
	          return this._q.push(['groupIdentify'].concat(Array.prototype.slice.call(arguments, 0)));
	        }

	        if (!this._apiKeySet('groupIdentify()')) {
	          if (type(opt_callback) === 'function') {
	            opt_callback(0, 'No request sent', {
	              reason: 'API key is not set'
	            });
	          }

	          return;
	        }

	        if (!utils.validateInput(group_type, 'group_type', 'string') || utils.isEmptyString(group_type)) {
	          if (type(opt_callback) === 'function') {
	            opt_callback(0, 'No request sent', {
	              reason: 'Invalid group type'
	            });
	          }

	          return;
	        }

	        if (group_name === null || group_name === undefined) {
	          if (type(opt_callback) === 'function') {
	            opt_callback(0, 'No request sent', {
	              reason: 'Invalid group name'
	            });
	          }

	          return;
	        } // if identify input is a proxied object created by the async loading snippet, convert it into an identify object


	        if (type(identify_obj) === 'object' && identify_obj.hasOwnProperty('_q')) {
	          identify_obj = _convertProxyObjectToRealObject(new Identify(), identify_obj);
	        }

	        if (identify_obj instanceof Identify) {
	          // only send if there are operations
	          if (Object.keys(identify_obj.userPropertiesOperations).length > 0) {
	            return this._logEvent(Constants.GROUP_IDENTIFY_EVENT, null, null, null, _defineProperty({}, group_type, group_name), identify_obj.userPropertiesOperations, null, opt_callback);
	          } else {
	            if (type(opt_callback) === 'function') {
	              opt_callback(0, 'No request sent', {
	                reason: 'No group property operations'
	              });
	            }
	          }
	        } else {
	          utils.log.error('Invalid identify input type. Expected Identify object but saw ' + type(identify_obj));

	          if (type(opt_callback) === 'function') {
	            opt_callback(0, 'No request sent', {
	              reason: 'Invalid identify input type'
	            });
	          }
	        }
	      };
	      /**
	       * Set a versionName for your application.
	       * @public
	       * @param {string} versionName - The version to set for your application.
	       * @example amplitudeClient.setVersionName('1.12.3');
	       */


	      AmplitudeClient.prototype.setVersionName = function setVersionName(versionName) {
	        if (this._shouldDeferCall()) {
	          return this._q.push(['setVersionName'].concat(Array.prototype.slice.call(arguments, 0)));
	        }

	        if (!utils.validateInput(versionName, 'versionName', 'string')) {
	          return;
	        }

	        this.options.versionName = versionName;
	      };
	      /**
	       * Private logEvent method. Keeps apiProperties from being publicly exposed.
	       * @private
	       */


	      AmplitudeClient.prototype._logEvent = function _logEvent(eventType, eventProperties, apiProperties, userProperties, groups, groupProperties, timestamp, callback) {
	        {
	          _loadCookieData(this); // reload cookie before each log event to sync event meta-data between windows and tabs

	        }

	        if (!eventType) {
	          if (type(callback) === 'function') {
	            callback(0, 'No request sent', {
	              reason: 'Missing eventType'
	            });
	          }

	          return;
	        }

	        if (this.options.optOut) {
	          if (type(callback) === 'function') {
	            callback(0, 'No request sent', {
	              reason: 'optOut is set to true'
	            });
	          }

	          return;
	        }

	        try {
	          var eventId;

	          if (eventType === Constants.IDENTIFY_EVENT || eventType === Constants.GROUP_IDENTIFY_EVENT) {
	            eventId = this.nextIdentifyId();
	          } else {
	            eventId = this.nextEventId();
	          }

	          var sequenceNumber = this.nextSequenceNumber();
	          var eventTime = type(timestamp) === 'number' ? timestamp : new Date().getTime();

	          if (!this._sessionId || !this._lastEventTime || eventTime - this._lastEventTime > this.options.sessionTimeout) {
	            this._sessionId = eventTime;
	          }

	          this._lastEventTime = eventTime;

	          _saveCookieData(this);

	          var osName = this._ua.browser.name;
	          var osVersion = this._ua.browser.major;
	          var deviceModel = this._ua.os.name;
	          var deviceManufacturer;
	          var versionName;
	          var carrier;
	          userProperties = userProperties || {};

	          var trackingOptions = _objectSpread({}, this._apiPropertiesTrackingOptions);

	          apiProperties = _objectSpread({}, apiProperties || {}, trackingOptions);
	          eventProperties = eventProperties || {};
	          groups = groups || {};
	          groupProperties = groupProperties || {};
	          var event = {
	            device_id: this.options.deviceId,
	            user_id: this.options.userId,
	            timestamp: eventTime,
	            event_id: eventId,
	            session_id: this._sessionId || -1,
	            event_type: eventType,
	            version_name: _shouldTrackField(this, 'version_name') ? this.options.versionName || versionName || null : null,
	            platform: _shouldTrackField(this, 'platform') ? this.options.platform : null,
	            os_name: _shouldTrackField(this, 'os_name') ? osName || null : null,
	            os_version: _shouldTrackField(this, 'os_version') ? osVersion || null : null,
	            device_model: _shouldTrackField(this, 'device_model') ? deviceModel || null : null,
	            device_manufacturer: _shouldTrackField(this, 'device_manufacturer') ? deviceManufacturer || null : null,
	            language: _shouldTrackField(this, 'language') ? this.options.language : null,
	            carrier: _shouldTrackField(this, 'carrier') ? carrier || null : null,
	            api_properties: apiProperties,
	            event_properties: utils.truncate(utils.validateProperties(eventProperties)),
	            user_properties: utils.truncate(utils.validateProperties(userProperties)),
	            uuid: uuid(),
	            library: {
	              name: 'amplitude-js',
	              version: version
	            },
	            sequence_number: sequenceNumber,
	            // for ordering events and identifys
	            groups: utils.truncate(utils.validateGroups(groups)),
	            group_properties: utils.truncate(utils.validateProperties(groupProperties)),
	            user_agent: this._userAgent
	          };

	          if (eventType === Constants.IDENTIFY_EVENT || eventType === Constants.GROUP_IDENTIFY_EVENT) {
	            this._unsentIdentifys.push({
	              event: event,
	              callback: callback
	            });

	            this._limitEventsQueued(this._unsentIdentifys);
	          } else {
	            this._unsentEvents.push({
	              event: event,
	              callback: callback
	            });

	            this._limitEventsQueued(this._unsentEvents);
	          }

	          if (this.options.saveEvents) {
	            this.saveEvents();
	          }

	          this._sendEventsIfReady(callback);

	          return eventId;
	        } catch (e) {
	          utils.log.error(e);
	        }
	      };

	      var _shouldTrackField = function _shouldTrackField(scope, field) {
	        return !!scope.options.trackingOptions[field];
	      };

	      var _generateApiPropertiesTrackingConfig = function _generateApiPropertiesTrackingConfig(scope) {
	        // to limit size of config payload, only send fields that have been disabled
	        var fields = ['city', 'country', 'dma', 'ip_address', 'region'];
	        var config = {};

	        for (var i = 0; i < fields.length; i++) {
	          var field = fields[i];

	          if (!_shouldTrackField(scope, field)) {
	            config[field] = false;
	          }
	        }

	        return config;
	      };
	      /**
	       * Remove old events from the beginning of the array if too many have accumulated. Default limit is 1000 events.
	       * @private
	       */


	      AmplitudeClient.prototype._limitEventsQueued = function _limitEventsQueued(queue) {
	        if (queue.length > this.options.savedMaxCount) {
	          queue.splice(0, queue.length - this.options.savedMaxCount);
	        }
	      };
	      /**
	       * This is the callback for logEvent and identify calls. It gets called after the event/identify is uploaded,
	       * and the server response code and response body from the upload request are passed to the callback function.
	       * @callback Amplitude~eventCallback
	       * @param {number} responseCode - Server response code for the event / identify upload request.
	       * @param {string} responseBody - Server response body for the event / identify upload request.
	       */

	      /**
	       * Log an event with eventType and eventProperties
	       * @public
	       * @param {string} eventType - name of event
	       * @param {object} eventProperties - (optional) an object with string keys and values for the event properties.
	       * @param {Amplitude~eventCallback} opt_callback - (optional) a callback function to run after the event is logged.
	       * Note: the server response code and response body from the event upload are passed to the callback function.
	       * @example amplitudeClient.logEvent('Clicked Homepage Button', {'finished_flow': false, 'clicks': 15});
	       */


	      AmplitudeClient.prototype.logEvent = function logEvent(eventType, eventProperties, opt_callback) {
	        if (this._shouldDeferCall()) {
	          return this._q.push(['logEvent'].concat(Array.prototype.slice.call(arguments, 0)));
	        }

	        return this.logEventWithTimestamp(eventType, eventProperties, null, opt_callback);
	      };
	      /**
	       * Log an event with eventType and eventProperties and a custom timestamp
	       * @public
	       * @param {string} eventType - name of event
	       * @param {object} eventProperties - (optional) an object with string keys and values for the event properties.
	       * @param {number} timestamp - (optional) the custom timestamp as milliseconds since epoch.
	       * @param {Amplitude~eventCallback} opt_callback - (optional) a callback function to run after the event is logged.
	       * Note: the server response code and response body from the event upload are passed to the callback function.
	       * @example amplitudeClient.logEvent('Clicked Homepage Button', {'finished_flow': false, 'clicks': 15});
	       */


	      AmplitudeClient.prototype.logEventWithTimestamp = function logEvent(eventType, eventProperties, timestamp, opt_callback) {
	        if (this._shouldDeferCall()) {
	          return this._q.push(['logEventWithTimestamp'].concat(Array.prototype.slice.call(arguments, 0)));
	        }

	        if (!this._apiKeySet('logEvent()')) {
	          if (type(opt_callback) === 'function') {
	            opt_callback(0, 'No request sent', {
	              reason: 'API key not set'
	            });
	          }

	          return -1;
	        }

	        if (!utils.validateInput(eventType, 'eventType', 'string')) {
	          if (type(opt_callback) === 'function') {
	            opt_callback(0, 'No request sent', {
	              reason: 'Invalid type for eventType'
	            });
	          }

	          return -1;
	        }

	        if (utils.isEmptyString(eventType)) {
	          if (type(opt_callback) === 'function') {
	            opt_callback(0, 'No request sent', {
	              reason: 'Missing eventType'
	            });
	          }

	          return -1;
	        }

	        return this._logEvent(eventType, eventProperties, null, null, null, null, timestamp, opt_callback);
	      };
	      /**
	       * Log an event with eventType, eventProperties, and groups. Use this to set event-level groups.
	       * Note: the group(s) set only apply for the specific event type being logged and does not persist on the user
	       * (unless you explicitly set it with setGroup).
	       *
	       * See the [advanced topics article](https://developers.amplitude.com/docs/setting-user-groups) for more information.
	       * about groups and Count by Distinct on the Amplitude platform.
	       * @public
	       * @param {string} eventType - name of event
	       * @param {object} eventProperties - (optional) an object with string keys and values for the event properties.
	       * @param {object} groups - (optional) an object with string groupType: groupName values for the event being logged.
	       * groupName can be a string or an array of strings.
	       * @param {Amplitude~eventCallback} opt_callback - (optional) a callback function to run after the event is logged.
	       * Note: the server response code and response body from the event upload are passed to the callback function.
	       * @example amplitudeClient.logEventWithGroups('Clicked Button', null, {'orgId': 24});
	       */


	      AmplitudeClient.prototype.logEventWithGroups = function (eventType, eventProperties, groups, opt_callback) {
	        if (this._shouldDeferCall()) {
	          return this._q.push(['logEventWithGroups'].concat(Array.prototype.slice.call(arguments, 0)));
	        }

	        if (!this._apiKeySet('logEventWithGroups()')) {
	          if (type(opt_callback) === 'function') {
	            opt_callback(0, 'No request sent', {
	              reason: 'API key not set'
	            });
	          }

	          return -1;
	        }

	        if (!utils.validateInput(eventType, 'eventType', 'string')) {
	          if (type(opt_callback) === 'function') {
	            opt_callback(0, 'No request sent', {
	              reason: 'Invalid type for eventType'
	            });
	          }

	          return -1;
	        }

	        return this._logEvent(eventType, eventProperties, null, null, groups, null, null, opt_callback);
	      };
	      /**
	       * Test that n is a number or a numeric value.
	       * @private
	       */


	      var _isNumber = function _isNumber(n) {
	        return !isNaN(parseFloat(n)) && isFinite(n);
	      };
	      /**
	       * Log revenue with Revenue interface. The new revenue interface allows for more revenue fields like
	       * revenueType and event properties.
	       *
	       * See the [Revenue](https://amplitude.github.io/Amplitude-JavaScript/Revenue/)
	       * reference page for more information on the Revenue interface and logging revenue.
	       * @public
	       * @param {Revenue} revenue_obj - the revenue object containing the revenue data being logged.
	       * @example var revenue = new amplitude.Revenue().setProductId('productIdentifier').setPrice(10.99);
	       * amplitude.logRevenueV2(revenue);
	       */


	      AmplitudeClient.prototype.logRevenueV2 = function logRevenueV2(revenue_obj) {
	        if (this._shouldDeferCall()) {
	          return this._q.push(['logRevenueV2'].concat(Array.prototype.slice.call(arguments, 0)));
	        }

	        if (!this._apiKeySet('logRevenueV2()')) {
	          return;
	        } // if revenue input is a proxied object created by the async loading snippet, convert it into an revenue object


	        if (type(revenue_obj) === 'object' && revenue_obj.hasOwnProperty('_q')) {
	          revenue_obj = _convertProxyObjectToRealObject(new Revenue(), revenue_obj);
	        }

	        if (revenue_obj instanceof Revenue) {
	          // only send if revenue is valid
	          if (revenue_obj && revenue_obj._isValidRevenue()) {
	            return this.logEvent(Constants.REVENUE_EVENT, revenue_obj._toJSONObject());
	          }
	        } else {
	          utils.log.error('Invalid revenue input type. Expected Revenue object but saw ' + type(revenue_obj));
	        }
	      };

	      {
	        /**
	         * Log revenue event with a price, quantity, and product identifier. DEPRECATED - use logRevenueV2
	         * @public
	         * @deprecated
	         * @param {number} price - price of revenue event
	         * @param {number} quantity - (optional) quantity of products in revenue event. If no quantity specified default to 1.
	         * @param {string} product - (optional) product identifier
	         * @example amplitudeClient.logRevenue(3.99, 1, 'product_1234');
	         */
	        AmplitudeClient.prototype.logRevenue = function logRevenue(price, quantity, product) {
	          if (this._shouldDeferCall()) {
	            return this._q.push(['logRevenue'].concat(Array.prototype.slice.call(arguments, 0)));
	          } // Test that the parameters are of the right type.


	          if (!this._apiKeySet('logRevenue()') || !_isNumber(price) || quantity !== undefined && !_isNumber(quantity)) {
	            // utils.log('Price and quantity arguments to logRevenue must be numbers');
	            return -1;
	          }

	          return this._logEvent(Constants.REVENUE_EVENT, {}, {
	            productId: product,
	            special: 'revenue_amount',
	            quantity: quantity || 1,
	            price: price
	          }, null, null, null, null, null);
	        };
	      }
	      /**
	       * Remove events in storage with event ids up to and including maxEventId.
	       * @private
	       */

	      AmplitudeClient.prototype.removeEvents = function removeEvents(maxEventId, maxIdentifyId, status, response) {
	        _removeEvents(this, '_unsentEvents', maxEventId, status, response);

	        _removeEvents(this, '_unsentIdentifys', maxIdentifyId, status, response);
	      };
	      /**
	       * Helper function to remove events up to maxId from a single queue.
	       * Does a true filter in case events get out of order or old events are removed.
	       * @private
	       */


	      var _removeEvents = function _removeEvents(scope, eventQueue, maxId, status, response) {
	        if (maxId < 0) {
	          return;
	        }

	        var filteredEvents = [];

	        for (var i = 0; i < scope[eventQueue].length || 0; i++) {
	          var unsentEvent = scope[eventQueue][i];

	          if (unsentEvent.event.event_id > maxId) {
	            filteredEvents.push(unsentEvent);
	          } else {
	            if (unsentEvent.callback) {
	              unsentEvent.callback(status, response);
	            }
	          }
	        }

	        scope[eventQueue] = filteredEvents;
	      };
	      /**
	       * Send unsent events. Note: this is called automatically after events are logged if option batchEvents is false.
	       * If batchEvents is true, then events are only sent when batch criterias are met.
	       * @private
	       */


	      AmplitudeClient.prototype.sendEvents = function sendEvents() {
	        if (!this._apiKeySet('sendEvents()')) {
	          this.removeEvents(Infinity, Infinity, 0, 'No request sent', {
	            reason: 'API key not set'
	          });
	          return;
	        }

	        if (this.options.optOut) {
	          this.removeEvents(Infinity, Infinity, 0, 'No request sent', {
	            reason: 'Opt out is set to true'
	          });
	          return;
	        } // How is it possible to get into this state?


	        if (this._unsentCount() === 0) {
	          return;
	        } // We only make one request at a time. sendEvents will be invoked again once
	        // the last request completes.


	        if (this._sending) {
	          return;
	        }

	        this._sending = true;
	        var protocol = this.options.forceHttps ? 'https' : 'https:' === window.location.protocol ? 'https' : 'http';
	        var url = protocol + '://' + this.options.apiEndpoint; // fetch events to send

	        var numEvents = Math.min(this._unsentCount(), this.options.uploadBatchSize);

	        var mergedEvents = this._mergeEventsAndIdentifys(numEvents);

	        var maxEventId = mergedEvents.maxEventId;
	        var maxIdentifyId = mergedEvents.maxIdentifyId;
	        var events = JSON.stringify(mergedEvents.eventsToSend.map(function (_ref2) {
	          var event = _ref2.event;
	          return event;
	        }));
	        var uploadTime = new Date().getTime();
	        var data = {
	          client: this.options.apiKey,
	          e: events,
	          v: Constants.API_VERSION,
	          upload_time: uploadTime,
	          checksum: md5(Constants.API_VERSION + this.options.apiKey + events + uploadTime)
	        };
	        var scope = this;
	        new Request(url, data).send(function (status, response) {
	          scope._sending = false;

	          try {
	            if (status === 200 && response === 'success') {
	              scope.removeEvents(maxEventId, maxIdentifyId, status, response); // Update the event cache after the removal of sent events.

	              if (scope.options.saveEvents) {
	                scope.saveEvents();
	              } // Send more events if any queued during previous send.


	              scope._sendEventsIfReady(); // handle payload too large

	            } else if (status === 413) {
	              // utils.log('request too large');
	              // Can't even get this one massive event through. Drop it, even if it is an identify.
	              if (scope.options.uploadBatchSize === 1) {
	                scope.removeEvents(maxEventId, maxIdentifyId, status, response);
	              } // The server complained about the length of the request. Backoff and try again.


	              scope.options.uploadBatchSize = Math.ceil(numEvents / 2);
	              scope.sendEvents();
	            } // else {
	            //  all the events are still queued, and will be retried when the next
	            //  event is sent In the interest of debugging, it would be nice to have
	            //  something like an event emitter for a better debugging experince
	            //  here.
	            // }

	          } catch (e) {// utils.log('failed upload');
	          }
	        });
	      };
	      /**
	       * Merge unsent events and identifys together in sequential order based on their sequence number, for uploading.
	       * Identifys given higher priority than Events. Also earlier sequence given priority
	       * @private
	       */


	      AmplitudeClient.prototype._mergeEventsAndIdentifys = function _mergeEventsAndIdentifys(numEvents) {
	        // coalesce events from both queues
	        var eventsToSend = [];
	        var eventIndex = 0;
	        var maxEventId = -1;
	        var identifyIndex = 0;
	        var maxIdentifyId = -1;

	        while (eventsToSend.length < numEvents) {
	          var unsentEvent = void 0;
	          var noIdentifys = identifyIndex >= this._unsentIdentifys.length;
	          var noEvents = eventIndex >= this._unsentEvents.length; // case 0: no events or identifys left
	          // note this should not happen, this means we have less events and identifys than expected

	          if (noEvents && noIdentifys) {
	            utils.log.error('Merging Events and Identifys, less events and identifys than expected');
	            break;
	          } // case 1: no identifys - grab from events
	          else if (noIdentifys) {
	              unsentEvent = this._unsentEvents[eventIndex++];
	              maxEventId = unsentEvent.event.event_id; // case 2: no events - grab from identifys
	            } else if (noEvents) {
	              unsentEvent = this._unsentIdentifys[identifyIndex++];
	              maxIdentifyId = unsentEvent.event.event_id; // case 3: need to compare sequence numbers
	            } else {
	              // events logged before v2.5.0 won't have a sequence number, put those first
	              if (!('sequence_number' in this._unsentEvents[eventIndex].event) || this._unsentEvents[eventIndex].event.sequence_number < this._unsentIdentifys[identifyIndex].event.sequence_number) {
	                unsentEvent = this._unsentEvents[eventIndex++];
	                maxEventId = unsentEvent.event.event_id;
	              } else {
	                unsentEvent = this._unsentIdentifys[identifyIndex++];
	                maxIdentifyId = unsentEvent.event.event_id;
	              }
	            }

	          eventsToSend.push(unsentEvent);
	        }

	        return {
	          eventsToSend: eventsToSend,
	          maxEventId: maxEventId,
	          maxIdentifyId: maxIdentifyId
	        };
	      };

	      {
	        /**
	         * Set global user properties. Note this is deprecated, and we recommend using setUserProperties
	         * @public
	         * @deprecated
	         */
	        AmplitudeClient.prototype.setGlobalUserProperties = function setGlobalUserProperties(userProperties) {
	          this.setUserProperties(userProperties);
	        };
	      }
	      /**
	       * Get the current version of Amplitude's Javascript SDK.
	       * @public
	       * @returns {number} version number
	       * @example var amplitudeVersion = amplitude.__VERSION__;
	       */

	      AmplitudeClient.prototype.__VERSION__ = version;
	      /**
	       * Determines whether or not to push call to this._q or invoke it
	       * @private
	       */

	      AmplitudeClient.prototype._shouldDeferCall = function _shouldDeferCall() {
	        return this._pendingReadStorage || this._initializationDeferred;
	      };
	      /**
	       * Defers Initialization by putting all functions into storage until users
	       * have accepted terms for tracking
	       * @private
	       */


	      AmplitudeClient.prototype._deferInitialization = function _deferInitialization() {
	        this._initializationDeferred = true;

	        this._q.push(['init'].concat(Array.prototype.slice.call(arguments, 0)));
	      };
	      /**
	       * Enable tracking via logging events and dropping a cookie
	       * Intended to be used with the deferInitialization configuration flag
	       * This will drop a cookie and reset initialization deferred
	       * @public
	       */


	      AmplitudeClient.prototype.enableTracking = function enableTracking() {
	        // This will call init (which drops the cookie) and will run any pending tasks
	        this._initializationDeferred = false;

	        _saveCookieData(this);

	        this.runQueuedFunctions();
	      };
	      /**
	       * Deprecated legacy API of the Amplitude JS SDK - instance manager.
	       *
	       * Wraps around the current [AmplitudeClient](https://amplitude.github.io/Amplitude-JavaScript/) which provides more features
	       * Function calls directly on amplitude have been deprecated. Please call methods on the default shared instance: amplitude.getInstance() instead.
	       *
	       * See the [3.0.0 changelog](https://github.com/amplitude/Amplitude-JavaScript/blob/ed405afb5f06d5cf5b72539a5d09179abcf7e1fe/README.md#300-update-and-logging-events-to-multiple-amplitude-apps) for more information about this change.
	       * @constructor Amplitude
	       * @public
	       * @deprecated
	       * @example var amplitude = new Amplitude();
	       */


	      var Amplitude = function Amplitude() {
	        this.options = _objectSpread({}, DEFAULT_OPTIONS);
	        this._q = [];
	        this._instances = {}; // mapping of instance names to instances
	      };

	      Amplitude.prototype.Identify = Identify;
	      Amplitude.prototype.Revenue = Revenue;

	      Amplitude.prototype.getInstance = function getInstance(instance) {
	        instance = utils.isEmptyString(instance) ? Constants.DEFAULT_INSTANCE : instance.toLowerCase();
	        var client = this._instances[instance];

	        if (client === undefined) {
	          client = new AmplitudeClient(instance);
	          this._instances[instance] = client;
	        }

	        return client;
	      };

	      {
	        /**
	         * Run functions queued up by proxy loading snippet
	         * @private
	         */
	        Amplitude.prototype.runQueuedFunctions = function () {
	          // run queued up old versions of functions
	          for (var i = 0; i < this._q.length; i++) {
	            var fn = this[this._q[i][0]];

	            if (type(fn) === 'function') {
	              fn.apply(this, this._q[i].slice(1));
	            }
	          }

	          this._q = []; // clear function queue after running
	          // run queued up functions on instances

	          for (var instance in this._instances) {
	            if (this._instances.hasOwnProperty(instance)) {
	              this._instances[instance].runQueuedFunctions();
	            }
	          }
	        };
	      }
	      {
	        /**
	         * Initializes the Amplitude Javascript SDK with your apiKey and any optional configurations.
	         * This is required before any other methods can be called.
	         * @public
	         * @param {string} apiKey - The API key for your app.
	         * @param {string} opt_userId - (optional) An identifier for this user.
	         * @param {object} opt_config - (optional) Configuration options.
	         * See [options.js](https://github.com/amplitude/Amplitude-JavaScript/blob/master/src/options.js#L14) for list of options and default values.
	         * @param {function} opt_callback - (optional) Provide a callback function to run after initialization is complete.
	         * @deprecated Please use amplitude.getInstance().init(apiKey, opt_userId, opt_config, opt_callback);
	         * @example amplitude.init('API_KEY', 'USER_ID', {includeReferrer: true, includeUtm: true}, function() { alert('init complete'); });
	         */
	        Amplitude.prototype.init = function init(apiKey, opt_userId, opt_config, opt_callback) {
	          this.getInstance().init(apiKey, opt_userId, opt_config, function (instance) {
	            // make options such as deviceId available for callback functions
	            this.options = instance.options;

	            if (type(opt_callback) === 'function') {
	              opt_callback(instance);
	            }
	          }.bind(this));
	        };
	        /**
	         * Returns true if a new session was created during initialization, otherwise false.
	         * @public
	         * @return {boolean} Whether a new session was created during initialization.
	         * @deprecated Please use amplitude.getInstance().isNewSession();
	         */


	        Amplitude.prototype.isNewSession = function isNewSession() {
	          return this.getInstance().isNewSession();
	        };
	        /**
	         * Returns the id of the current session.
	         * @public
	         * @return {number} Id of the current session.
	         * @deprecated Please use amplitude.getInstance().getSessionId();
	         */


	        Amplitude.prototype.getSessionId = function getSessionId() {
	          return this.getInstance().getSessionId();
	        };
	        /**
	         * Increments the eventId and returns it.
	         * @private
	         */


	        Amplitude.prototype.nextEventId = function nextEventId() {
	          return this.getInstance().nextEventId();
	        };
	        /**
	         * Increments the identifyId and returns it.
	         * @private
	         */


	        Amplitude.prototype.nextIdentifyId = function nextIdentifyId() {
	          return this.getInstance().nextIdentifyId();
	        };
	        /**
	         * Increments the sequenceNumber and returns it.
	         * @private
	         */


	        Amplitude.prototype.nextSequenceNumber = function nextSequenceNumber() {
	          return this.getInstance().nextSequenceNumber();
	        };
	        /**
	         * Saves unsent events and identifies to localStorage. JSON stringifies event queues before saving.
	         * Note: this is called automatically every time events are logged, unless you explicitly set option saveEvents to false.
	         * @private
	         */


	        Amplitude.prototype.saveEvents = function saveEvents() {
	          this.getInstance().saveEvents();
	        };
	        /**
	         * Sets a customer domain for the amplitude cookie. Useful if you want to support cross-subdomain tracking.
	         * @public
	         * @param {string} domain to set.
	         * @deprecated Please use amplitude.getInstance().setDomain(domain);
	         * @example amplitude.setDomain('.amplitude.com');
	         */


	        Amplitude.prototype.setDomain = function setDomain(domain) {
	          this.getInstance().setDomain(domain);
	        };
	        /**
	         * Sets an identifier for the current user.
	         * @public
	         * @param {string} userId - identifier to set. Can be null.
	         * @deprecated Please use amplitude.getInstance().setUserId(userId);
	         * @example amplitude.setUserId('joe@gmail.com');
	         */


	        Amplitude.prototype.setUserId = function setUserId(userId) {
	          this.getInstance().setUserId(userId);
	        };
	        /**
	         * Add user to a group or groups. You need to specify a groupType and groupName(s).
	         * For example you can group people by their organization.
	         * In that case groupType is "orgId" and groupName would be the actual ID(s).
	         * groupName can be a string or an array of strings to indicate a user in multiple gruups.
	         * You can also call setGroup multiple times with different groupTypes to track multiple types of groups (up to 5 per app).
	         * Note: this will also set groupType: groupName as a user property.
	         * See the [advanced topics article](https://developers.amplitude.com/docs/setting-user-groups) for more information.
	         * @public
	         * @param {string} groupType - the group type (ex: orgId)
	         * @param {string|list} groupName - the name of the group (ex: 15), or a list of names of the groups
	         * @deprecated Please use amplitude.getInstance().setGroup(groupType, groupName);
	         * @example amplitude.setGroup('orgId', 15); // this adds the current user to orgId 15.
	         */


	        Amplitude.prototype.setGroup = function (groupType, groupName) {
	          this.getInstance().setGroup(groupType, groupName);
	        };
	        /**
	         * Sets whether to opt current user out of tracking.
	         * @public
	         * @param {boolean} enable - if true then no events will be logged or sent.
	         * @deprecated Please use amplitude.getInstance().setOptOut(enable);
	         * @example: amplitude.setOptOut(true);
	         */


	        Amplitude.prototype.setOptOut = function setOptOut(enable) {
	          this.getInstance().setOptOut(enable);
	        };
	        /**
	         * Regenerates a new random deviceId for current user. Note: this is not recommended unless you know what you
	         * are doing. This can be used in conjunction with `setUserId(null)` to anonymize users after they log out.
	         * With a null userId and a completely new deviceId, the current user would appear as a brand new user in dashboard.
	         * This uses src/uuid.js to regenerate the deviceId.
	         * @public
	         * @deprecated Please use amplitude.getInstance().regenerateDeviceId();
	         */


	        Amplitude.prototype.regenerateDeviceId = function regenerateDeviceId() {
	          this.getInstance().regenerateDeviceId();
	        };
	        /**
	         * Sets a custom deviceId for current user. Note: this is not recommended unless you know what you are doing
	         * (like if you have your own system for managing deviceIds).
	         *
	         * Make sure the deviceId you set is sufficiently unique
	         * (we recommend something like a UUID - see src/uuid.js for an example of how to generate) to prevent conflicts with other devices in our system.
	         * @public
	         * @param {string} deviceId - custom deviceId for current user.
	         * @deprecated Please use amplitude.getInstance().setDeviceId(deviceId);
	         * @example amplitude.setDeviceId('45f0954f-eb79-4463-ac8a-233a6f45a8f0');
	         */


	        Amplitude.prototype.setDeviceId = function setDeviceId(deviceId) {
	          this.getInstance().setDeviceId(deviceId);
	        };
	        /**
	         * Sets user properties for the current user.
	         * @public
	         * @param {object} userProperties - object with string keys and values for the user properties to set.
	         * @param {boolean} opt_replace - Deprecated. In earlier versions of the JS SDK the user properties object was kept in
	         * memory and replace = true would replace the object in memory. Now the properties are no longer stored in memory, so replace is deprecated.
	         * @deprecated Please use amplitude.getInstance().setUserProperties(userProperties);
	         * @example amplitude.setUserProperties({'gender': 'female', 'sign_up_complete': true})
	         */


	        Amplitude.prototype.setUserProperties = function setUserProperties(userProperties) {
	          this.getInstance().setUserProperties(userProperties);
	        };
	        /**
	         * Clear all of the user properties for the current user. Note: clearing user properties is irreversible!
	         * @public
	         * @deprecated Please use amplitude.getInstance().clearUserProperties();
	         * @example amplitude.clearUserProperties();
	         */


	        Amplitude.prototype.clearUserProperties = function clearUserProperties() {
	          this.getInstance().clearUserProperties();
	        };
	        /**
	         * Send an identify call containing user property operations to Amplitude servers.
	         * See the [Identify](https://amplitude.github.io/Amplitude-JavaScript/Identify/)
	         * reference page for more information on the Identify API and user property operations.
	         * @param {Identify} identify_obj - the Identify object containing the user property operations to send.
	         * @param {Amplitude~eventCallback} opt_callback - (optional) callback function to run when the identify event has been sent.
	         * Note: the server response code and response body from the identify event upload are passed to the callback function.
	         * @deprecated Please use amplitude.getInstance().identify(identify);
	         * @example
	         * var identify = new amplitude.Identify().set('colors', ['rose', 'gold']).add('karma', 1).setOnce('sign_up_date', '2016-03-31');
	         * amplitude.identify(identify);
	         */


	        Amplitude.prototype.identify = function (identify_obj, opt_callback) {
	          this.getInstance().identify(identify_obj, opt_callback);
	        };
	        /**
	         * Set a versionName for your application.
	         * @public
	         * @param {string} versionName - The version to set for your application.
	         * @deprecated Please use amplitude.getInstance().setVersionName(versionName);
	         * @example amplitude.setVersionName('1.12.3');
	         */


	        Amplitude.prototype.setVersionName = function setVersionName(versionName) {
	          this.getInstance().setVersionName(versionName);
	        };
	        /**
	         * This is the callback for logEvent and identify calls. It gets called after the event/identify is uploaded,
	         * and the server response code and response body from the upload request are passed to the callback function.
	         * @callback Amplitude~eventCallback
	         * @param {number} responseCode - Server response code for the event / identify upload request.
	         * @param {string} responseBody - Server response body for the event / identify upload request.
	         */

	        /**
	         * Log an event with eventType and eventProperties
	         * @public
	         * @param {string} eventType - name of event
	         * @param {object} eventProperties - (optional) an object with string keys and values for the event properties.
	         * @param {Amplitude~eventCallback} opt_callback - (optional) a callback function to run after the event is logged.
	         * Note: the server response code and response body from the event upload are passed to the callback function.
	         * @deprecated Please use amplitude.getInstance().logEvent(eventType, eventProperties, opt_callback);
	         * @example amplitude.logEvent('Clicked Homepage Button', {'finished_flow': false, 'clicks': 15});
	         */


	        Amplitude.prototype.logEvent = function logEvent(eventType, eventProperties, opt_callback) {
	          return this.getInstance().logEvent(eventType, eventProperties, opt_callback);
	        };
	        /**
	         * Log an event with eventType, eventProperties, and groups. Use this to set event-level groups.
	         *
	         * Note: the group(s) set only apply for the specific event type being logged and does not persist on the user
	         * (unless you explicitly set it with setGroup).
	         *
	         * See the [advanced topics article](https://developers.amplitude.com/docs/setting-user-groups) for more information.
	         * about groups and Count by Distinct on the Amplitude platform.
	         * @public
	         * @param {string} eventType - name of event
	         * @param {object} eventProperties - (optional) an object with string keys and values for the event properties.
	         * @param {object} groups - (optional) an object with string groupType: groupName values for the event being logged.
	         * groupName can be a string or an array of strings.
	         * @param {Amplitude~eventCallback} opt_callback - (optional) a callback function to run after the event is logged.
	         * Note: the server response code and response body from the event upload are passed to the callback function.
	         * @deprecated Please use amplitude.getInstance().logEventWithGroups(eventType, eventProperties, groups, opt_callback);
	         * @example amplitude.logEventWithGroups('Clicked Button', null, {'orgId': 24});
	         */


	        Amplitude.prototype.logEventWithGroups = function (eventType, eventProperties, groups, opt_callback) {
	          return this.getInstance().logEventWithGroups(eventType, eventProperties, groups, opt_callback);
	        };
	        /**
	         * Log revenue with Revenue interface. The new revenue interface allows for more revenue fields like
	         * revenueType and event properties.
	         *
	         * See the [Revenue](https://amplitude.github.io/Amplitude-JavaScript/Revenue/)
	         * reference page for more information on the Revenue interface and logging revenue.
	         * @public
	         * @param {Revenue} revenue_obj - the revenue object containing the revenue data being logged.
	         * @deprecated Please use amplitude.getInstance().logRevenueV2(revenue_obj);
	         * @example var revenue = new amplitude.Revenue().setProductId('productIdentifier').setPrice(10.99);
	         * amplitude.logRevenueV2(revenue);
	         */


	        Amplitude.prototype.logRevenueV2 = function logRevenueV2(revenue_obj) {
	          return this.getInstance().logRevenueV2(revenue_obj);
	        };
	        /**
	         * Log revenue event with a price, quantity, and product identifier.
	         * @public
	         * @param {number} price - price of revenue event
	         * @param {number} quantity - (optional) quantity of products in revenue event. If no quantity specified default to 1.
	         * @param {string} product - (optional) product identifier
	         * @deprecated Please use amplitude.getInstance().logRevenueV2(revenue_obj);
	         * @example amplitude.logRevenue(3.99, 1, 'product_1234');
	         */


	        Amplitude.prototype.logRevenue = function logRevenue(price, quantity, product) {
	          return this.getInstance().logRevenue(price, quantity, product);
	        };
	        /**
	         * Remove events in storage with event ids up to and including maxEventId.
	         * @private
	         */


	        Amplitude.prototype.removeEvents = function removeEvents(maxEventId, maxIdentifyId) {
	          this.getInstance().removeEvents(maxEventId, maxIdentifyId);
	        };
	        /**
	         * Send unsent events. Note: this is called automatically after events are logged if option batchEvents is false.
	         * If batchEvents is true, then events are only sent when batch criterias are met.
	         * @private
	         * @param {Amplitude~eventCallback} callback - (optional) callback to run after events are sent.
	         * Note the server response code and response body are passed to the callback as input arguments.
	         */


	        Amplitude.prototype.sendEvents = function sendEvents(callback) {
	          this.getInstance().sendEvents(callback);
	        };
	        /**
	         * Set global user properties.
	         * @public
	         * @deprecated Please use amplitudeClient.setUserProperties
	         */


	        Amplitude.prototype.setGlobalUserProperties = function setGlobalUserProperties(userProperties) {
	          this.getInstance().setUserProperties(userProperties);
	        };
	      }
	      /**
	       * Get the current version of Amplitude's Javascript SDK.
	       * @public
	       * @returns {number} version number
	       * @example var amplitudeVersion = amplitude.__VERSION__;
	       */

	      Amplitude.prototype.__VERSION__ = version; // Entry point

	      var old = window.amplitude || {};
	      var newInstance = new Amplitude();
	      newInstance._q = old._q || [];
	      /**
	       * Instantiates Amplitude object and runs all queued function logged by stubbed methods provided by snippets
	       * Event queue allows async loading of SDK to not blocking client's app
	       */

	      for (var instance in old._iq) {
	        // migrate each instance's queue
	        if (old._iq.hasOwnProperty(instance)) {
	          newInstance.getInstance(instance)._q = old._iq[instance]._q || [];
	        }
	      } // If SDK is enabled as snippet, process the events queued by stubbed function


	      {
	        newInstance.runQueuedFunctions();
	      } // export the instance

	      return newInstance;
	    });
	  });

	  var Amplitude = /*#__PURE__*/function () {
	    function Amplitude(config, analytics) {
	      var _this = this;

	      _classCallCheck(this, Amplitude);

	      this.name = "AM";
	      this.analytics = analytics;
	      this.apiKey = config.apiKey;
	      this.trackAllPages = config.trackAllPages || false;
	      this.trackNamedPages = config.trackNamedPages || false;
	      this.trackCategorizedPages = config.trackCategorizedPages || false;
	      this.trackUtmProperties = config.trackUtmProperties || false;
	      this.trackReferrer = config.trackReferrer || false;
	      this.batchEvents = config.batchEvents || false;
	      this.eventUploadThreshold = +config.eventUploadThreshold || 30;
	      this.eventUploadPeriodMillis = +config.eventUploadPeriodMillis || 30000;
	      this.forceHttps = config.forceHttps || false;
	      this.trackGclid = config.trackGclid || false;
	      this.saveParamsReferrerOncePerSession = config.saveParamsReferrerOncePerSession || false;
	      this.deviceIdFromUrlParam = config.deviceIdFromUrlParam || false; // this.mapQueryParams = config.mapQueryParams;

	      this.trackRevenuePerProduct = config.trackRevenuePerProduct || false;
	      this.preferAnonymousIdForDeviceId = config.preferAnonymousIdForDeviceId || false;
	      this.traitsToSetOnce = [];
	      this.traitsToIncrement = [];
	      this.appendFieldsToEventProps = config.appendFieldsToEventProps || false;
	      this.unsetParamsReferrerOnNewSession = config.unsetParamsReferrerOnNewSession || false;
	      this.trackProductsOnce = config.trackProductsOnce || false;
	      this.versionName = config.versionName;

	      if (config.traitsToSetOnce && config.traitsToSetOnce.length > 0) {
	        config.traitsToSetOnce.forEach(function (element) {
	          if (element && element.traits && element.traits !== "") {
	            _this.traitsToSetOnce.push(element.traits);
	          }
	        });
	      }

	      if (config.traitsToIncrement && config.traitsToIncrement.length > 0) {
	        config.traitsToIncrement.forEach(function (element) {
	          if (element && element.traits && element.traits !== "") {
	            _this.traitsToIncrement.push(element.traits);
	          }
	        });
	      }
	    }

	    _createClass(Amplitude, [{
	      key: "init",
	      value: function init() {
	        window.amplitude = amplitude_umd;
	        var initOptions = {
	          includeUtm: this.trackUtmProperties,
	          batchEvents: this.batchEvents,
	          eventUploadThreshold: this.eventUploadThreshold,
	          eventUploadPeriodMillis: this.eventUploadPeriodMillis,
	          forceHttps: this.forceHttps,
	          includeGclid: this.trackGclid,
	          includeReferrer: this.trackReferrer,
	          saveParamsReferrerOncePerSession: this.saveParamsReferrerOncePerSession,
	          deviceIdFromUrlParam: this.deviceIdFromUrlParam,
	          unsetParamsReferrerOnNewSession: this.unsetParamsReferrerOnNewSession,
	          deviceId: this.preferAnonymousIdForDeviceId && this.analytics && this.analytics.getAnonymousId()
	        };
	        window.amplitude.getInstance().init(this.apiKey, null, initOptions);

	        if (this.versionName) {
	          window.amplitude.getInstance().setVersionName(this.versionName);
	        }
	      }
	    }, {
	      key: "identify",
	      value: function identify(rudderElement) {
	        logger.debug("in Amplitude identify");
	        this.setDeviceId(rudderElement); // rudderElement.message.context will always be present as part of identify event payload.

	        var traits = rudderElement.message.context.traits;
	        var userId = rudderElement.message.userId;

	        if (userId) {
	          window.amplitude.getInstance().setUserId(userId);
	        }

	        if (traits) {
	          var amplitudeIdentify = new window.amplitude.Identify();

	          for (var trait in traits) {
	            if (!traits.hasOwnProperty(trait)) {
	              continue;
	            }

	            var shouldIncrement = this.traitsToIncrement.indexOf(trait) >= 0;
	            var shouldSetOnce = this.traitsToSetOnce.indexOf(trait) >= 0;

	            if (shouldIncrement) {
	              amplitudeIdentify.add(trait, traits[trait]);
	            }

	            if (shouldSetOnce) {
	              amplitudeIdentify.setOnce(trait, traits[trait]);
	            }

	            if (!shouldIncrement && !shouldSetOnce) {
	              amplitudeIdentify.set(trait, traits[trait]);
	            }
	          }

	          window.amplitude.identify(amplitudeIdentify);
	        }
	      }
	    }, {
	      key: "track",
	      value: function track(rudderElement) {
	        logger.debug("in Amplitude track");
	        this.setDeviceId(rudderElement);
	        var properties = rudderElement.message.properties; // message.properties will always be present as part of track event.

	        var products = properties.products;
	        var clonedTrackEvent = {};
	        Object.assign(clonedTrackEvent, rudderElement.message); // For track products once, we will send the products in a single call.

	        if (this.trackProductsOnce) {
	          if (products && type(products) == "array") {
	            // track all the products in a single event.
	            var allProducts = [];
	            var productKeys = Object.keys(products);

	            for (var index = 0; index < productKeys.length; index++) {
	              var product = {};
	              product = this.getProductAttributes(products[index]);
	              allProducts.push(product);
	            }

	            clonedTrackEvent.properties.products = allProducts;
	            this.logEventAndCorrespondingRevenue(clonedTrackEvent, this.trackRevenuePerProduct); // we do not want to track revenue as a whole if trackRevenuePerProduct is enabled.
	            // If trackRevenuePerProduct is enabled, track revenues per product.

	            if (this.trackRevenuePerProduct) {
	              var trackEventMessage = {};
	              Object.assign(trackEventMessage, clonedTrackEvent);
	              this.trackingEventAndRevenuePerProduct(trackEventMessage, products, false); // also track revenue only and not event per product.
	            }
	          } else {
	            // track event and revenue as a whole as products array is not available.
	            this.logEventAndCorrespondingRevenue(clonedTrackEvent, false);
	          }

	          return;
	        }

	        if (products && type(products) == "array") {
	          // track events iterating over product array individually.
	          // Log the actuall event without products array. We will subsequently track each product with 'Product Purchased' event.
	          delete clonedTrackEvent.properties.products;
	          this.logEventAndCorrespondingRevenue(clonedTrackEvent, this.trackRevenuePerProduct);
	          var _trackEventMessage = {};
	          Object.assign(_trackEventMessage, clonedTrackEvent); // track products and revenue per product basis.

	          this.trackingEventAndRevenuePerProduct(_trackEventMessage, products, true); // track both event and revenue on per product basis.
	        } else {
	          // track event and revenue as a whole as no product array is present.
	          this.logEventAndCorrespondingRevenue(clonedTrackEvent, false);
	        }
	      }
	    }, {
	      key: "trackingEventAndRevenuePerProduct",
	      value: function trackingEventAndRevenuePerProduct(trackEventMessage, products, shouldTrackEventPerProduct) {
	        var _trackEventMessage$pr = trackEventMessage.properties,
	            revenue = _trackEventMessage$pr.revenue,
	            revenueType = _trackEventMessage$pr.revenueType,
	            revenue_type = _trackEventMessage$pr.revenue_type;
	        revenueType = revenueType || revenue_type;

	        for (var index = 0; index < products.length; index++) {
	          var product = products[index];
	          trackEventMessage.properties = product;
	          trackEventMessage.event = "Product Purchased";

	          if (this.trackRevenuePerProduct) {
	            if (revenueType) {
	              trackEventMessage.properties.revenueType = revenueType;
	            }

	            if (revenue) {
	              trackEventMessage.properties.revenue = revenue;
	            }

	            this.trackRevenue(trackEventMessage);
	          }

	          if (shouldTrackEventPerProduct) {
	            this.logEventAndCorrespondingRevenue(trackEventMessage, true);
	          }
	        }
	      } // Always to be called for general and top level events (and not product level)
	      // For these events we expect top level revenue property.

	    }, {
	      key: "logEventAndCorrespondingRevenue",
	      value: function logEventAndCorrespondingRevenue(rudderMessage, dontTrackRevenue) {
	        var properties = rudderMessage.properties,
	            event = rudderMessage.event;
	        window.amplitude.getInstance().logEvent(event, properties);

	        if (properties.revenue && !dontTrackRevenue) {
	          this.trackRevenue(rudderMessage);
	        }
	      }
	      /**
	       * track page events base on destination settings. If more than one settings is enabled, multiple events may be logged for a single page event.
	       * For example, if category of a page is present, and both trackAllPages and trackCategorizedPages are enabled, then 2 events will be tracked for
	       * a single pageview - 'Loaded a page' and `Viewed page ${category}`.
	       *
	       * @memberof Amplitude
	       */

	    }, {
	      key: "page",
	      value: function page(rudderElement) {
	        logger.debug("in Amplitude page");
	        this.setDeviceId(rudderElement);
	        var _rudderElement$messag = rudderElement.message,
	            properties = _rudderElement$messag.properties,
	            name = _rudderElement$messag.name,
	            category = _rudderElement$messag.category; // all pages

	        if (this.trackAllPages) {
	          var event = "Loaded a page";
	          amplitude_umd.getInstance().logEvent(event, properties);
	        } // categorized pages


	        if (category && this.trackCategorizedPages) {
	          var _event = "Viewed page ".concat(category);

	          amplitude_umd.getInstance().logEvent(_event, properties);
	        } // named pages


	        if (name && this.trackNamedPages) {
	          var _event2 = "Viewed page ".concat(name);

	          amplitude_umd.getInstance().logEvent(_event2, properties);
	        }
	      }
	    }, {
	      key: "group",
	      value: function group(rudderElement) {
	        logger.debug("in Amplitude group");
	        this.setDeviceId(rudderElement);
	        var _rudderElement$messag2 = rudderElement.message,
	            groupId = _rudderElement$messag2.groupId,
	            traits = _rudderElement$messag2.traits;
	        var groupTypeTrait = this.groupTypeTrait;
	        var groupValueTrait = this.groupValueTrait;

	        if (groupTypeTrait && groupValueTrait && traits) {
	          var groupType = traits[groupTypeTrait];
	          var groupValue = traits[groupValueTrait];
	        }

	        if (groupType && groupValue) {
	          window.amplitude.getInstance().setGroup(groupTypeTrait, groupValueTrait);
	        } else if (groupId) {
	          // Similar as segment but not sure whether we need it as our cloud mode supports only the above if block
	          window.amplitude.getInstance().setGroup("[Rudderstack] Group", groupId);
	        } // https://developers.amplitude.com/docs/setting-user-properties#setting-group-properties
	        // no other api for setting group properties for javascript

	      }
	    }, {
	      key: "setDeviceId",
	      value: function setDeviceId(rudderElement) {
	        var anonymousId = rudderElement.message.anonymousId;

	        if (this.preferAnonymousIdForDeviceId && anonymousId) {
	          window.amplitude.getInstance().setDeviceId(anonymousId);
	        }
	      }
	      /**
	       * Tracks revenue with logRevenueV2() api based on revenue/price present in event payload. If neither of revenue/price present, it returns.
	       * The event payload may contain ruddermessage of an original track event payload (from trackEvent method) or it is derived from a product
	       * array (from trackingRevenuePerProduct) in an e-comm event.
	       *
	       * @param {*} rudderMessage
	       * @returns
	       * @memberof Amplitude
	       */

	    }, {
	      key: "trackRevenue",
	      value: function trackRevenue(rudderMessage) {
	        var mapRevenueType = {
	          "order completed": "Purchase",
	          "completed order": "Purchase",
	          "product purchased": "Purchase"
	        };
	        var properties = rudderMessage.properties,
	            event = rudderMessage.event;
	        var price = properties.price,
	            productId = properties.productId,
	            quantity = properties.quantity,
	            revenue = properties.revenue,
	            product_id = properties.product_id;
	        var revenueType = properties.revenueType || properties.revenue_type || mapRevenueType[event.toLowerCase()];
	        productId = productId || product_id; // If neither revenue nor price is present, then return
	        // else send price and quantity from properties to amplitude
	        // If price not present set price as revenue's value and force quantity to be 1.
	        // Ultimately set quantity to 1 if not already present from above logic.

	        if (!revenue && !price) {
	          console.debug("revenue or price is not present.");
	          return;
	        }

	        if (!price) {
	          price = revenue;
	          quantity = 1;
	        }

	        if (!quantity) {
	          quantity = 1;
	        }

	        var amplitudeRevenue = new window.amplitude.Revenue().setPrice(price).setQuantity(quantity).setEventProperties(properties);

	        if (revenueType) {
	          amplitudeRevenue.setRevenueType(revenueType);
	        }

	        if (productId) {
	          amplitudeRevenue.setProductId(productId);
	        }

	        window.amplitude.getInstance().logRevenueV2(amplitudeRevenue);
	      }
	    }, {
	      key: "getProductAttributes",
	      value: function getProductAttributes(product) {
	        return {
	          productId: product.productId || product.product_id,
	          sku: product.sku,
	          name: product.name,
	          price: product.price,
	          quantity: product.quantity,
	          category: product.category
	        };
	      }
	    }, {
	      key: "isLoaded",
	      value: function isLoaded() {
	        logger.debug("in Amplitude isLoaded");
	        return !!(window.amplitude && window.amplitude.getInstance().options);
	      }
	    }, {
	      key: "isReady",
	      value: function isReady() {
	        return !!(window.amplitude && window.amplitude.getInstance().options);
	      }
	    }]);

	    return Amplitude;
	  }();

	  /* import * as HubSpot from "./HubSpot";
	  import * as GA from "./GA";
	  import * as Hotjar from "./Hotjar";
	  import * as GoogleAds from "./GoogleAds";
	  import * as VWO from "./VWO";
	  import * as GoogleTagManager from "./GoogleTagManager";
	  import * as Braze from "./Braze";
	  import * as INTERCOM from "./INTERCOM";
	  import * as Keen from "./Keen";
	  import * as Kissmetrics from "./Kissmetrics";
	  import * as CustomerIO from "./CustomerIO";
	  import * as Chartbeat from "./Chartbeat";
	  import * as Comscore from "./Comscore";
	  import * as FBPixel from "./FacebookPixel";
	  import * as Lotame from "./Lotame";
	  import * as Optimizely from "./Optimizely";
	  import * as Bugsnag from "./Bugsnag";
	  import * as Fullstory from "./Fullstory";
	  import * as TVSquared from "./TVSquared";
	  import * as GA4 from "./GA4";
	  import * as MoEngage from "./MoEngage"; */
	  /* import * as Pendo from "./Pendo";
	  import * as Lytics from "./Lytics";
	  import * as Appcues from "./Appcues"; */
	  // the key names should match the destination.name value to keep partity everywhere
	  // (config-plan name, native destination.name , exported integration name(this one below))

	  var integrations = {
	    /* HS: HubSpot.default,
	    GA: GA.default,
	    HOTJAR: Hotjar.default,
	    GOOGLEADS: GoogleAds.default,
	    VWO: VWO.default,
	    GTM: GoogleTagManager.default,
	    BRAZE: Braze.default,
	    INTERCOM: INTERCOM.default,
	    KEEN: Keen.default,
	    KISSMETRICS: Kissmetrics.default,
	    CUSTOMERIO: CustomerIO.default,
	    CHARTBEAT: Chartbeat.default,
	    COMSCORE: Comscore.default,
	    FACEBOOK_PIXEL: FBPixel.default,
	    LOTAME: Lotame.default,
	    OPTIMIZELY: Optimizely.default,
	    BUGSNAG: Bugsnag.default,
	    FULLSTORY: Fullstory.default,
	    TVSQUARED: TVSquared.default,
	    GA4: GA4.default,
	    MOENGAGE: MoEngage.default, */
	    AM: Amplitude
	    /* PENDO: Pendo.default,
	    LYTICS: Lytics.default,
	    APPCUES: Appcues.default, */

	  };

	  // Application class
	  var RudderApp = function RudderApp() {
	    _classCallCheck(this, RudderApp);

	    this.build = "1.0.0";
	    this.name = "RudderLabs JavaScript SDK";
	    this.namespace = "com.rudderlabs.javascript";
	    this.version = "1.0.12";
	  };

	  // Library information class
	  var RudderLibraryInfo = function RudderLibraryInfo() {
	    _classCallCheck(this, RudderLibraryInfo);

	    this.name = "RudderLabs JavaScript SDK";
	    this.version = "1.0.12";
	  }; // Operating System information class


	  var RudderOSInfo = function RudderOSInfo() {
	    _classCallCheck(this, RudderOSInfo);

	    this.name = "";
	    this.version = "";
	  }; // Screen information class


	  var RudderScreenInfo = function RudderScreenInfo() {
	    _classCallCheck(this, RudderScreenInfo);

	    this.density = 0;
	    this.width = 0;
	    this.height = 0;
	  }; // Device information class

	  var RudderContext = function RudderContext() {
	    _classCallCheck(this, RudderContext);

	    this.app = new RudderApp();
	    this.traits = null;
	    this.library = new RudderLibraryInfo(); // this.os = null;

	    var os = new RudderOSInfo();
	    os.version = ""; // skipping version for simplicity now

	    var screen = new RudderScreenInfo(); // Depending on environment within which the code is executing, screen
	    // dimensions can be set
	    // User agent and locale can be retrieved only for browser
	    // For server-side integration, same needs to be set by calling program

	    {
	      // running within browser
	      screen.width = window.width;
	      screen.height = window.height;
	      screen.density = window.devicePixelRatio;
	      this.userAgent = navigator.userAgent; // property name differs based on browser version

	      this.locale = navigator.language || navigator.browserLanguage;
	    }

	    this.os = os;
	    this.screen = screen;
	    this.device = null;
	    this.network = null;
	  };

	  var RudderMessage = /*#__PURE__*/function () {
	    function RudderMessage() {
	      _classCallCheck(this, RudderMessage);

	      this.channel = "web";
	      this.context = new RudderContext();
	      this.type = null;
	      this.action = null;
	      this.messageId = generateUUID().toString();
	      this.originalTimestamp = new Date().toISOString();
	      this.anonymousId = null;
	      this.userId = null;
	      this.event = null;
	      this.properties = {};
	      this.integrations = {}; // By default, all integrations will be set as enabled from client
	      // Decision to route to specific destinations will be taken at server end

	      this.integrations.All = true;
	    } // Get property


	    _createClass(RudderMessage, [{
	      key: "getProperty",
	      value: function getProperty(key) {
	        return this.properties[key];
	      } // Add property

	    }, {
	      key: "addProperty",
	      value: function addProperty(key, value) {
	        this.properties[key] = value;
	      } // Validate whether this message is semantically valid for the type mentioned

	    }, {
	      key: "validateFor",
	      value: function validateFor(messageType) {
	        // First check that properties is populated
	        if (!this.properties) {
	          throw new Error("Key properties is required");
	        } // Event type specific checks


	        switch (messageType) {
	          case MessageType.TRACK:
	            // check if event is present
	            if (!this.event) {
	              throw new Error("Key event is required for track event");
	            } // Next make specific checks for e-commerce events


	            if (this.event in Object.values(ECommerceEvents)) {
	              switch (this.event) {
	                case ECommerceEvents.CHECKOUT_STEP_VIEWED:
	                case ECommerceEvents.CHECKOUT_STEP_COMPLETED:
	                case ECommerceEvents.PAYMENT_INFO_ENTERED:
	                  this.checkForKey("checkout_id");
	                  this.checkForKey("step");
	                  break;

	                case ECommerceEvents.PROMOTION_VIEWED:
	                case ECommerceEvents.PROMOTION_CLICKED:
	                  this.checkForKey("promotion_id");
	                  break;

	                case ECommerceEvents.ORDER_REFUNDED:
	                  this.checkForKey("order_id");
	                  break;
	              }
	            } else if (!this.properties.category) {
	              // if category is not there, set to event
	              this.properties.category = this.event;
	            }

	            break;

	          case MessageType.PAGE:
	            break;

	          case MessageType.SCREEN:
	            if (!this.properties.name) {
	              throw new Error("Key 'name' is required in properties");
	            }

	            break;
	        }
	      } // Function for checking existence of a particular property

	    }, {
	      key: "checkForKey",
	      value: function checkForKey(propertyName) {
	        if (!this.properties[propertyName]) {
	          throw new Error("Key '".concat(propertyName, "' is required in properties"));
	        }
	      }
	    }]);

	    return RudderMessage;
	  }();

	  var RudderElement = /*#__PURE__*/function () {
	    function RudderElement() {
	      _classCallCheck(this, RudderElement);

	      this.message = new RudderMessage();
	    } // Setters that in turn set the field values for the contained object


	    _createClass(RudderElement, [{
	      key: "setType",
	      value: function setType(type) {
	        this.message.type = type;
	      }
	    }, {
	      key: "setProperty",
	      value: function setProperty(rudderProperty) {
	        this.message.properties = rudderProperty;
	      }
	    }, {
	      key: "setUserProperty",
	      value: function setUserProperty(rudderUserProperty) {
	        this.message.user_properties = rudderUserProperty;
	      }
	    }, {
	      key: "setUserId",
	      value: function setUserId(userId) {
	        this.message.userId = userId;
	      }
	    }, {
	      key: "setEventName",
	      value: function setEventName(eventName) {
	        this.message.event = eventName;
	      }
	    }, {
	      key: "updateTraits",
	      value: function updateTraits(traits) {
	        this.message.context.traits = traits;
	      }
	    }, {
	      key: "getElementContent",
	      value: function getElementContent() {
	        return this.message;
	      }
	    }]);

	    return RudderElement;
	  }();

	  var RudderElementBuilder = /*#__PURE__*/function () {
	    function RudderElementBuilder() {
	      _classCallCheck(this, RudderElementBuilder);

	      this.rudderProperty = null;
	      this.rudderUserProperty = null;
	      this.event = null;
	      this.userId = null;
	      this.channel = null;
	      this.type = null;
	    } // Set the property


	    _createClass(RudderElementBuilder, [{
	      key: "setProperty",
	      value: function setProperty(inputRudderProperty) {
	        this.rudderProperty = inputRudderProperty;
	        return this;
	      } // Build and set the property object

	    }, {
	      key: "setPropertyBuilder",
	      value: function setPropertyBuilder(rudderPropertyBuilder) {
	        this.rudderProperty = rudderPropertyBuilder.build();
	        return this;
	      }
	    }, {
	      key: "setUserProperty",
	      value: function setUserProperty(inputRudderUserProperty) {
	        this.rudderUserProperty = inputRudderUserProperty;
	        return this;
	      }
	    }, {
	      key: "setUserPropertyBuilder",
	      value: function setUserPropertyBuilder(rudderUserPropertyBuilder) {
	        this.rudderUserProperty = rudderUserPropertyBuilder.build();
	        return this;
	      } // Setter methods for all variables. Instance is returned for each call in
	      // accordance with the Builder pattern

	    }, {
	      key: "setEvent",
	      value: function setEvent(event) {
	        this.event = event;
	        return this;
	      }
	    }, {
	      key: "setUserId",
	      value: function setUserId(userId) {
	        this.userId = userId;
	        return this;
	      }
	    }, {
	      key: "setChannel",
	      value: function setChannel(channel) {
	        this.channel = channel;
	        return this;
	      }
	    }, {
	      key: "setType",
	      value: function setType(eventType) {
	        this.type = eventType;
	        return this;
	      }
	    }, {
	      key: "build",
	      value: function build() {
	        var element = new RudderElement();
	        element.setUserId(this.userId);
	        element.setType(this.type);
	        element.setEventName(this.event);
	        element.setProperty(this.rudderProperty);
	        element.setUserProperty(this.rudderUserProperty);
	        return element;
	      }
	    }]);

	    return RudderElementBuilder;
	  }();

	  var core = createCommonjsModule(function (module, exports) {

	    (function (root, factory) {
	      {
	        // CommonJS
	        module.exports = exports = factory();
	      }
	    })(commonjsGlobal$1, function () {
	      /**
	       * CryptoJS core components.
	       */
	      var CryptoJS = CryptoJS || function (Math, undefined$1) {
	        /*
	         * Local polyfil of Object.create
	         */
	        var create = Object.create || function () {
	          function F() {}
	          return function (obj) {
	            var subtype;
	            F.prototype = obj;
	            subtype = new F();
	            F.prototype = null;
	            return subtype;
	          };
	        }();
	        /**
	         * CryptoJS namespace.
	         */


	        var C = {};
	        /**
	         * Library namespace.
	         */

	        var C_lib = C.lib = {};
	        /**
	         * Base object for prototypal inheritance.
	         */

	        var Base = C_lib.Base = function () {
	          return {
	            /**
	             * Creates a new object that inherits from this object.
	             *
	             * @param {Object} overrides Properties to copy into the new object.
	             *
	             * @return {Object} The new object.
	             *
	             * @static
	             *
	             * @example
	             *
	             *     var MyType = CryptoJS.lib.Base.extend({
	             *         field: 'value',
	             *
	             *         method: function () {
	             *         }
	             *     });
	             */
	            extend: function extend(overrides) {
	              // Spawn
	              var subtype = create(this); // Augment

	              if (overrides) {
	                subtype.mixIn(overrides);
	              } // Create default initializer


	              if (!subtype.hasOwnProperty('init') || this.init === subtype.init) {
	                subtype.init = function () {
	                  subtype.$super.init.apply(this, arguments);
	                };
	              } // Initializer's prototype is the subtype object


	              subtype.init.prototype = subtype; // Reference supertype

	              subtype.$super = this;
	              return subtype;
	            },

	            /**
	             * Extends this object and runs the init method.
	             * Arguments to create() will be passed to init().
	             *
	             * @return {Object} The new object.
	             *
	             * @static
	             *
	             * @example
	             *
	             *     var instance = MyType.create();
	             */
	            create: function create() {
	              var instance = this.extend();
	              instance.init.apply(instance, arguments);
	              return instance;
	            },

	            /**
	             * Initializes a newly created object.
	             * Override this method to add some logic when your objects are created.
	             *
	             * @example
	             *
	             *     var MyType = CryptoJS.lib.Base.extend({
	             *         init: function () {
	             *             // ...
	             *         }
	             *     });
	             */
	            init: function init() {},

	            /**
	             * Copies properties into this object.
	             *
	             * @param {Object} properties The properties to mix in.
	             *
	             * @example
	             *
	             *     MyType.mixIn({
	             *         field: 'value'
	             *     });
	             */
	            mixIn: function mixIn(properties) {
	              for (var propertyName in properties) {
	                if (properties.hasOwnProperty(propertyName)) {
	                  this[propertyName] = properties[propertyName];
	                }
	              } // IE won't copy toString using the loop above


	              if (properties.hasOwnProperty('toString')) {
	                this.toString = properties.toString;
	              }
	            },

	            /**
	             * Creates a copy of this object.
	             *
	             * @return {Object} The clone.
	             *
	             * @example
	             *
	             *     var clone = instance.clone();
	             */
	            clone: function clone() {
	              return this.init.prototype.extend(this);
	            }
	          };
	        }();
	        /**
	         * An array of 32-bit words.
	         *
	         * @property {Array} words The array of 32-bit words.
	         * @property {number} sigBytes The number of significant bytes in this word array.
	         */


	        var WordArray = C_lib.WordArray = Base.extend({
	          /**
	           * Initializes a newly created word array.
	           *
	           * @param {Array} words (Optional) An array of 32-bit words.
	           * @param {number} sigBytes (Optional) The number of significant bytes in the words.
	           *
	           * @example
	           *
	           *     var wordArray = CryptoJS.lib.WordArray.create();
	           *     var wordArray = CryptoJS.lib.WordArray.create([0x00010203, 0x04050607]);
	           *     var wordArray = CryptoJS.lib.WordArray.create([0x00010203, 0x04050607], 6);
	           */
	          init: function init(words, sigBytes) {
	            words = this.words = words || [];

	            if (sigBytes != undefined$1) {
	              this.sigBytes = sigBytes;
	            } else {
	              this.sigBytes = words.length * 4;
	            }
	          },

	          /**
	           * Converts this word array to a string.
	           *
	           * @param {Encoder} encoder (Optional) The encoding strategy to use. Default: CryptoJS.enc.Hex
	           *
	           * @return {string} The stringified word array.
	           *
	           * @example
	           *
	           *     var string = wordArray + '';
	           *     var string = wordArray.toString();
	           *     var string = wordArray.toString(CryptoJS.enc.Utf8);
	           */
	          toString: function toString(encoder) {
	            return (encoder || Hex).stringify(this);
	          },

	          /**
	           * Concatenates a word array to this word array.
	           *
	           * @param {WordArray} wordArray The word array to append.
	           *
	           * @return {WordArray} This word array.
	           *
	           * @example
	           *
	           *     wordArray1.concat(wordArray2);
	           */
	          concat: function concat(wordArray) {
	            // Shortcuts
	            var thisWords = this.words;
	            var thatWords = wordArray.words;
	            var thisSigBytes = this.sigBytes;
	            var thatSigBytes = wordArray.sigBytes; // Clamp excess bits

	            this.clamp(); // Concat

	            if (thisSigBytes % 4) {
	              // Copy one byte at a time
	              for (var i = 0; i < thatSigBytes; i++) {
	                var thatByte = thatWords[i >>> 2] >>> 24 - i % 4 * 8 & 0xff;
	                thisWords[thisSigBytes + i >>> 2] |= thatByte << 24 - (thisSigBytes + i) % 4 * 8;
	              }
	            } else {
	              // Copy one word at a time
	              for (var i = 0; i < thatSigBytes; i += 4) {
	                thisWords[thisSigBytes + i >>> 2] = thatWords[i >>> 2];
	              }
	            }

	            this.sigBytes += thatSigBytes; // Chainable

	            return this;
	          },

	          /**
	           * Removes insignificant bits.
	           *
	           * @example
	           *
	           *     wordArray.clamp();
	           */
	          clamp: function clamp() {
	            // Shortcuts
	            var words = this.words;
	            var sigBytes = this.sigBytes; // Clamp

	            words[sigBytes >>> 2] &= 0xffffffff << 32 - sigBytes % 4 * 8;
	            words.length = Math.ceil(sigBytes / 4);
	          },

	          /**
	           * Creates a copy of this word array.
	           *
	           * @return {WordArray} The clone.
	           *
	           * @example
	           *
	           *     var clone = wordArray.clone();
	           */
	          clone: function clone() {
	            var clone = Base.clone.call(this);
	            clone.words = this.words.slice(0);
	            return clone;
	          },

	          /**
	           * Creates a word array filled with random bytes.
	           *
	           * @param {number} nBytes The number of random bytes to generate.
	           *
	           * @return {WordArray} The random word array.
	           *
	           * @static
	           *
	           * @example
	           *
	           *     var wordArray = CryptoJS.lib.WordArray.random(16);
	           */
	          random: function random(nBytes) {
	            var words = [];

	            var r = function r(m_w) {
	              var m_w = m_w;
	              var m_z = 0x3ade68b1;
	              var mask = 0xffffffff;
	              return function () {
	                m_z = 0x9069 * (m_z & 0xFFFF) + (m_z >> 0x10) & mask;
	                m_w = 0x4650 * (m_w & 0xFFFF) + (m_w >> 0x10) & mask;
	                var result = (m_z << 0x10) + m_w & mask;
	                result /= 0x100000000;
	                result += 0.5;
	                return result * (Math.random() > .5 ? 1 : -1);
	              };
	            };

	            for (var i = 0, rcache; i < nBytes; i += 4) {
	              var _r = r((rcache || Math.random()) * 0x100000000);

	              rcache = _r() * 0x3ade67b7;
	              words.push(_r() * 0x100000000 | 0);
	            }

	            return new WordArray.init(words, nBytes);
	          }
	        });
	        /**
	         * Encoder namespace.
	         */

	        var C_enc = C.enc = {};
	        /**
	         * Hex encoding strategy.
	         */

	        var Hex = C_enc.Hex = {
	          /**
	           * Converts a word array to a hex string.
	           *
	           * @param {WordArray} wordArray The word array.
	           *
	           * @return {string} The hex string.
	           *
	           * @static
	           *
	           * @example
	           *
	           *     var hexString = CryptoJS.enc.Hex.stringify(wordArray);
	           */
	          stringify: function stringify(wordArray) {
	            // Shortcuts
	            var words = wordArray.words;
	            var sigBytes = wordArray.sigBytes; // Convert

	            var hexChars = [];

	            for (var i = 0; i < sigBytes; i++) {
	              var bite = words[i >>> 2] >>> 24 - i % 4 * 8 & 0xff;
	              hexChars.push((bite >>> 4).toString(16));
	              hexChars.push((bite & 0x0f).toString(16));
	            }

	            return hexChars.join('');
	          },

	          /**
	           * Converts a hex string to a word array.
	           *
	           * @param {string} hexStr The hex string.
	           *
	           * @return {WordArray} The word array.
	           *
	           * @static
	           *
	           * @example
	           *
	           *     var wordArray = CryptoJS.enc.Hex.parse(hexString);
	           */
	          parse: function parse(hexStr) {
	            // Shortcut
	            var hexStrLength = hexStr.length; // Convert

	            var words = [];

	            for (var i = 0; i < hexStrLength; i += 2) {
	              words[i >>> 3] |= parseInt(hexStr.substr(i, 2), 16) << 24 - i % 8 * 4;
	            }

	            return new WordArray.init(words, hexStrLength / 2);
	          }
	        };
	        /**
	         * Latin1 encoding strategy.
	         */

	        var Latin1 = C_enc.Latin1 = {
	          /**
	           * Converts a word array to a Latin1 string.
	           *
	           * @param {WordArray} wordArray The word array.
	           *
	           * @return {string} The Latin1 string.
	           *
	           * @static
	           *
	           * @example
	           *
	           *     var latin1String = CryptoJS.enc.Latin1.stringify(wordArray);
	           */
	          stringify: function stringify(wordArray) {
	            // Shortcuts
	            var words = wordArray.words;
	            var sigBytes = wordArray.sigBytes; // Convert

	            var latin1Chars = [];

	            for (var i = 0; i < sigBytes; i++) {
	              var bite = words[i >>> 2] >>> 24 - i % 4 * 8 & 0xff;
	              latin1Chars.push(String.fromCharCode(bite));
	            }

	            return latin1Chars.join('');
	          },

	          /**
	           * Converts a Latin1 string to a word array.
	           *
	           * @param {string} latin1Str The Latin1 string.
	           *
	           * @return {WordArray} The word array.
	           *
	           * @static
	           *
	           * @example
	           *
	           *     var wordArray = CryptoJS.enc.Latin1.parse(latin1String);
	           */
	          parse: function parse(latin1Str) {
	            // Shortcut
	            var latin1StrLength = latin1Str.length; // Convert

	            var words = [];

	            for (var i = 0; i < latin1StrLength; i++) {
	              words[i >>> 2] |= (latin1Str.charCodeAt(i) & 0xff) << 24 - i % 4 * 8;
	            }

	            return new WordArray.init(words, latin1StrLength);
	          }
	        };
	        /**
	         * UTF-8 encoding strategy.
	         */

	        var Utf8 = C_enc.Utf8 = {
	          /**
	           * Converts a word array to a UTF-8 string.
	           *
	           * @param {WordArray} wordArray The word array.
	           *
	           * @return {string} The UTF-8 string.
	           *
	           * @static
	           *
	           * @example
	           *
	           *     var utf8String = CryptoJS.enc.Utf8.stringify(wordArray);
	           */
	          stringify: function stringify(wordArray) {
	            try {
	              return decodeURIComponent(escape(Latin1.stringify(wordArray)));
	            } catch (e) {
	              throw new Error('Malformed UTF-8 data');
	            }
	          },

	          /**
	           * Converts a UTF-8 string to a word array.
	           *
	           * @param {string} utf8Str The UTF-8 string.
	           *
	           * @return {WordArray} The word array.
	           *
	           * @static
	           *
	           * @example
	           *
	           *     var wordArray = CryptoJS.enc.Utf8.parse(utf8String);
	           */
	          parse: function parse(utf8Str) {
	            return Latin1.parse(unescape(encodeURIComponent(utf8Str)));
	          }
	        };
	        /**
	         * Abstract buffered block algorithm template.
	         *
	         * The property blockSize must be implemented in a concrete subtype.
	         *
	         * @property {number} _minBufferSize The number of blocks that should be kept unprocessed in the buffer. Default: 0
	         */

	        var BufferedBlockAlgorithm = C_lib.BufferedBlockAlgorithm = Base.extend({
	          /**
	           * Resets this block algorithm's data buffer to its initial state.
	           *
	           * @example
	           *
	           *     bufferedBlockAlgorithm.reset();
	           */
	          reset: function reset() {
	            // Initial values
	            this._data = new WordArray.init();
	            this._nDataBytes = 0;
	          },

	          /**
	           * Adds new data to this block algorithm's buffer.
	           *
	           * @param {WordArray|string} data The data to append. Strings are converted to a WordArray using UTF-8.
	           *
	           * @example
	           *
	           *     bufferedBlockAlgorithm._append('data');
	           *     bufferedBlockAlgorithm._append(wordArray);
	           */
	          _append: function _append(data) {
	            // Convert string to WordArray, else assume WordArray already
	            if (typeof data == 'string') {
	              data = Utf8.parse(data);
	            } // Append


	            this._data.concat(data);

	            this._nDataBytes += data.sigBytes;
	          },

	          /**
	           * Processes available data blocks.
	           *
	           * This method invokes _doProcessBlock(offset), which must be implemented by a concrete subtype.
	           *
	           * @param {boolean} doFlush Whether all blocks and partial blocks should be processed.
	           *
	           * @return {WordArray} The processed data.
	           *
	           * @example
	           *
	           *     var processedData = bufferedBlockAlgorithm._process();
	           *     var processedData = bufferedBlockAlgorithm._process(!!'flush');
	           */
	          _process: function _process(doFlush) {
	            // Shortcuts
	            var data = this._data;
	            var dataWords = data.words;
	            var dataSigBytes = data.sigBytes;
	            var blockSize = this.blockSize;
	            var blockSizeBytes = blockSize * 4; // Count blocks ready

	            var nBlocksReady = dataSigBytes / blockSizeBytes;

	            if (doFlush) {
	              // Round up to include partial blocks
	              nBlocksReady = Math.ceil(nBlocksReady);
	            } else {
	              // Round down to include only full blocks,
	              // less the number of blocks that must remain in the buffer
	              nBlocksReady = Math.max((nBlocksReady | 0) - this._minBufferSize, 0);
	            } // Count words ready


	            var nWordsReady = nBlocksReady * blockSize; // Count bytes ready

	            var nBytesReady = Math.min(nWordsReady * 4, dataSigBytes); // Process blocks

	            if (nWordsReady) {
	              for (var offset = 0; offset < nWordsReady; offset += blockSize) {
	                // Perform concrete-algorithm logic
	                this._doProcessBlock(dataWords, offset);
	              } // Remove processed words


	              var processedWords = dataWords.splice(0, nWordsReady);
	              data.sigBytes -= nBytesReady;
	            } // Return processed words


	            return new WordArray.init(processedWords, nBytesReady);
	          },

	          /**
	           * Creates a copy of this object.
	           *
	           * @return {Object} The clone.
	           *
	           * @example
	           *
	           *     var clone = bufferedBlockAlgorithm.clone();
	           */
	          clone: function clone() {
	            var clone = Base.clone.call(this);
	            clone._data = this._data.clone();
	            return clone;
	          },
	          _minBufferSize: 0
	        });
	        /**
	         * Abstract hasher template.
	         *
	         * @property {number} blockSize The number of 32-bit words this hasher operates on. Default: 16 (512 bits)
	         */

	        var Hasher = C_lib.Hasher = BufferedBlockAlgorithm.extend({
	          /**
	           * Configuration options.
	           */
	          cfg: Base.extend(),

	          /**
	           * Initializes a newly created hasher.
	           *
	           * @param {Object} cfg (Optional) The configuration options to use for this hash computation.
	           *
	           * @example
	           *
	           *     var hasher = CryptoJS.algo.SHA256.create();
	           */
	          init: function init(cfg) {
	            // Apply config defaults
	            this.cfg = this.cfg.extend(cfg); // Set initial values

	            this.reset();
	          },

	          /**
	           * Resets this hasher to its initial state.
	           *
	           * @example
	           *
	           *     hasher.reset();
	           */
	          reset: function reset() {
	            // Reset data buffer
	            BufferedBlockAlgorithm.reset.call(this); // Perform concrete-hasher logic

	            this._doReset();
	          },

	          /**
	           * Updates this hasher with a message.
	           *
	           * @param {WordArray|string} messageUpdate The message to append.
	           *
	           * @return {Hasher} This hasher.
	           *
	           * @example
	           *
	           *     hasher.update('message');
	           *     hasher.update(wordArray);
	           */
	          update: function update(messageUpdate) {
	            // Append
	            this._append(messageUpdate); // Update the hash


	            this._process(); // Chainable


	            return this;
	          },

	          /**
	           * Finalizes the hash computation.
	           * Note that the finalize operation is effectively a destructive, read-once operation.
	           *
	           * @param {WordArray|string} messageUpdate (Optional) A final message update.
	           *
	           * @return {WordArray} The hash.
	           *
	           * @example
	           *
	           *     var hash = hasher.finalize();
	           *     var hash = hasher.finalize('message');
	           *     var hash = hasher.finalize(wordArray);
	           */
	          finalize: function finalize(messageUpdate) {
	            // Final message update
	            if (messageUpdate) {
	              this._append(messageUpdate);
	            } // Perform concrete-hasher logic


	            var hash = this._doFinalize();

	            return hash;
	          },
	          blockSize: 512 / 32,

	          /**
	           * Creates a shortcut function to a hasher's object interface.
	           *
	           * @param {Hasher} hasher The hasher to create a helper for.
	           *
	           * @return {Function} The shortcut function.
	           *
	           * @static
	           *
	           * @example
	           *
	           *     var SHA256 = CryptoJS.lib.Hasher._createHelper(CryptoJS.algo.SHA256);
	           */
	          _createHelper: function _createHelper(hasher) {
	            return function (message, cfg) {
	              return new hasher.init(cfg).finalize(message);
	            };
	          },

	          /**
	           * Creates a shortcut function to the HMAC's object interface.
	           *
	           * @param {Hasher} hasher The hasher to use in this HMAC helper.
	           *
	           * @return {Function} The shortcut function.
	           *
	           * @static
	           *
	           * @example
	           *
	           *     var HmacSHA256 = CryptoJS.lib.Hasher._createHmacHelper(CryptoJS.algo.SHA256);
	           */
	          _createHmacHelper: function _createHmacHelper(hasher) {
	            return function (message, key) {
	              return new C_algo.HMAC.init(hasher, key).finalize(message);
	            };
	          }
	        });
	        /**
	         * Algorithm namespace.
	         */

	        var C_algo = C.algo = {};
	        return C;
	      }(Math);

	      return CryptoJS;
	    });
	  });

	  var encBase64 = createCommonjsModule(function (module, exports) {

	    (function (root, factory) {
	      {
	        // CommonJS
	        module.exports = exports = factory(core);
	      }
	    })(commonjsGlobal$1, function (CryptoJS) {
	      (function () {
	        // Shortcuts
	        var C = CryptoJS;
	        var C_lib = C.lib;
	        var WordArray = C_lib.WordArray;
	        var C_enc = C.enc;
	        /**
	         * Base64 encoding strategy.
	         */

	        var Base64 = C_enc.Base64 = {
	          /**
	           * Converts a word array to a Base64 string.
	           *
	           * @param {WordArray} wordArray The word array.
	           *
	           * @return {string} The Base64 string.
	           *
	           * @static
	           *
	           * @example
	           *
	           *     var base64String = CryptoJS.enc.Base64.stringify(wordArray);
	           */
	          stringify: function stringify(wordArray) {
	            // Shortcuts
	            var words = wordArray.words;
	            var sigBytes = wordArray.sigBytes;
	            var map = this._map; // Clamp excess bits

	            wordArray.clamp(); // Convert

	            var base64Chars = [];

	            for (var i = 0; i < sigBytes; i += 3) {
	              var byte1 = words[i >>> 2] >>> 24 - i % 4 * 8 & 0xff;
	              var byte2 = words[i + 1 >>> 2] >>> 24 - (i + 1) % 4 * 8 & 0xff;
	              var byte3 = words[i + 2 >>> 2] >>> 24 - (i + 2) % 4 * 8 & 0xff;
	              var triplet = byte1 << 16 | byte2 << 8 | byte3;

	              for (var j = 0; j < 4 && i + j * 0.75 < sigBytes; j++) {
	                base64Chars.push(map.charAt(triplet >>> 6 * (3 - j) & 0x3f));
	              }
	            } // Add padding


	            var paddingChar = map.charAt(64);

	            if (paddingChar) {
	              while (base64Chars.length % 4) {
	                base64Chars.push(paddingChar);
	              }
	            }

	            return base64Chars.join('');
	          },

	          /**
	           * Converts a Base64 string to a word array.
	           *
	           * @param {string} base64Str The Base64 string.
	           *
	           * @return {WordArray} The word array.
	           *
	           * @static
	           *
	           * @example
	           *
	           *     var wordArray = CryptoJS.enc.Base64.parse(base64String);
	           */
	          parse: function parse(base64Str) {
	            // Shortcuts
	            var base64StrLength = base64Str.length;
	            var map = this._map;
	            var reverseMap = this._reverseMap;

	            if (!reverseMap) {
	              reverseMap = this._reverseMap = [];

	              for (var j = 0; j < map.length; j++) {
	                reverseMap[map.charCodeAt(j)] = j;
	              }
	            } // Ignore padding


	            var paddingChar = map.charAt(64);

	            if (paddingChar) {
	              var paddingIndex = base64Str.indexOf(paddingChar);

	              if (paddingIndex !== -1) {
	                base64StrLength = paddingIndex;
	              }
	            } // Convert


	            return parseLoop(base64Str, base64StrLength, reverseMap);
	          },
	          _map: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/='
	        };

	        function parseLoop(base64Str, base64StrLength, reverseMap) {
	          var words = [];
	          var nBytes = 0;

	          for (var i = 0; i < base64StrLength; i++) {
	            if (i % 4) {
	              var bits1 = reverseMap[base64Str.charCodeAt(i - 1)] << i % 4 * 2;
	              var bits2 = reverseMap[base64Str.charCodeAt(i)] >>> 6 - i % 4 * 2;
	              words[nBytes >>> 2] |= (bits1 | bits2) << 24 - nBytes % 4 * 8;
	              nBytes++;
	            }
	          }

	          return WordArray.create(words, nBytes);
	        }
	      })();

	      return CryptoJS.enc.Base64;
	    });
	  });

	  var md5 = createCommonjsModule(function (module, exports) {

	    (function (root, factory) {
	      {
	        // CommonJS
	        module.exports = exports = factory(core);
	      }
	    })(commonjsGlobal$1, function (CryptoJS) {
	      (function (Math) {
	        // Shortcuts
	        var C = CryptoJS;
	        var C_lib = C.lib;
	        var WordArray = C_lib.WordArray;
	        var Hasher = C_lib.Hasher;
	        var C_algo = C.algo; // Constants table

	        var T = []; // Compute constants

	        (function () {
	          for (var i = 0; i < 64; i++) {
	            T[i] = Math.abs(Math.sin(i + 1)) * 0x100000000 | 0;
	          }
	        })();
	        /**
	         * MD5 hash algorithm.
	         */


	        var MD5 = C_algo.MD5 = Hasher.extend({
	          _doReset: function _doReset() {
	            this._hash = new WordArray.init([0x67452301, 0xefcdab89, 0x98badcfe, 0x10325476]);
	          },
	          _doProcessBlock: function _doProcessBlock(M, offset) {
	            // Swap endian
	            for (var i = 0; i < 16; i++) {
	              // Shortcuts
	              var offset_i = offset + i;
	              var M_offset_i = M[offset_i];
	              M[offset_i] = (M_offset_i << 8 | M_offset_i >>> 24) & 0x00ff00ff | (M_offset_i << 24 | M_offset_i >>> 8) & 0xff00ff00;
	            } // Shortcuts


	            var H = this._hash.words;
	            var M_offset_0 = M[offset + 0];
	            var M_offset_1 = M[offset + 1];
	            var M_offset_2 = M[offset + 2];
	            var M_offset_3 = M[offset + 3];
	            var M_offset_4 = M[offset + 4];
	            var M_offset_5 = M[offset + 5];
	            var M_offset_6 = M[offset + 6];
	            var M_offset_7 = M[offset + 7];
	            var M_offset_8 = M[offset + 8];
	            var M_offset_9 = M[offset + 9];
	            var M_offset_10 = M[offset + 10];
	            var M_offset_11 = M[offset + 11];
	            var M_offset_12 = M[offset + 12];
	            var M_offset_13 = M[offset + 13];
	            var M_offset_14 = M[offset + 14];
	            var M_offset_15 = M[offset + 15]; // Working varialbes

	            var a = H[0];
	            var b = H[1];
	            var c = H[2];
	            var d = H[3]; // Computation

	            a = FF(a, b, c, d, M_offset_0, 7, T[0]);
	            d = FF(d, a, b, c, M_offset_1, 12, T[1]);
	            c = FF(c, d, a, b, M_offset_2, 17, T[2]);
	            b = FF(b, c, d, a, M_offset_3, 22, T[3]);
	            a = FF(a, b, c, d, M_offset_4, 7, T[4]);
	            d = FF(d, a, b, c, M_offset_5, 12, T[5]);
	            c = FF(c, d, a, b, M_offset_6, 17, T[6]);
	            b = FF(b, c, d, a, M_offset_7, 22, T[7]);
	            a = FF(a, b, c, d, M_offset_8, 7, T[8]);
	            d = FF(d, a, b, c, M_offset_9, 12, T[9]);
	            c = FF(c, d, a, b, M_offset_10, 17, T[10]);
	            b = FF(b, c, d, a, M_offset_11, 22, T[11]);
	            a = FF(a, b, c, d, M_offset_12, 7, T[12]);
	            d = FF(d, a, b, c, M_offset_13, 12, T[13]);
	            c = FF(c, d, a, b, M_offset_14, 17, T[14]);
	            b = FF(b, c, d, a, M_offset_15, 22, T[15]);
	            a = GG(a, b, c, d, M_offset_1, 5, T[16]);
	            d = GG(d, a, b, c, M_offset_6, 9, T[17]);
	            c = GG(c, d, a, b, M_offset_11, 14, T[18]);
	            b = GG(b, c, d, a, M_offset_0, 20, T[19]);
	            a = GG(a, b, c, d, M_offset_5, 5, T[20]);
	            d = GG(d, a, b, c, M_offset_10, 9, T[21]);
	            c = GG(c, d, a, b, M_offset_15, 14, T[22]);
	            b = GG(b, c, d, a, M_offset_4, 20, T[23]);
	            a = GG(a, b, c, d, M_offset_9, 5, T[24]);
	            d = GG(d, a, b, c, M_offset_14, 9, T[25]);
	            c = GG(c, d, a, b, M_offset_3, 14, T[26]);
	            b = GG(b, c, d, a, M_offset_8, 20, T[27]);
	            a = GG(a, b, c, d, M_offset_13, 5, T[28]);
	            d = GG(d, a, b, c, M_offset_2, 9, T[29]);
	            c = GG(c, d, a, b, M_offset_7, 14, T[30]);
	            b = GG(b, c, d, a, M_offset_12, 20, T[31]);
	            a = HH(a, b, c, d, M_offset_5, 4, T[32]);
	            d = HH(d, a, b, c, M_offset_8, 11, T[33]);
	            c = HH(c, d, a, b, M_offset_11, 16, T[34]);
	            b = HH(b, c, d, a, M_offset_14, 23, T[35]);
	            a = HH(a, b, c, d, M_offset_1, 4, T[36]);
	            d = HH(d, a, b, c, M_offset_4, 11, T[37]);
	            c = HH(c, d, a, b, M_offset_7, 16, T[38]);
	            b = HH(b, c, d, a, M_offset_10, 23, T[39]);
	            a = HH(a, b, c, d, M_offset_13, 4, T[40]);
	            d = HH(d, a, b, c, M_offset_0, 11, T[41]);
	            c = HH(c, d, a, b, M_offset_3, 16, T[42]);
	            b = HH(b, c, d, a, M_offset_6, 23, T[43]);
	            a = HH(a, b, c, d, M_offset_9, 4, T[44]);
	            d = HH(d, a, b, c, M_offset_12, 11, T[45]);
	            c = HH(c, d, a, b, M_offset_15, 16, T[46]);
	            b = HH(b, c, d, a, M_offset_2, 23, T[47]);
	            a = II(a, b, c, d, M_offset_0, 6, T[48]);
	            d = II(d, a, b, c, M_offset_7, 10, T[49]);
	            c = II(c, d, a, b, M_offset_14, 15, T[50]);
	            b = II(b, c, d, a, M_offset_5, 21, T[51]);
	            a = II(a, b, c, d, M_offset_12, 6, T[52]);
	            d = II(d, a, b, c, M_offset_3, 10, T[53]);
	            c = II(c, d, a, b, M_offset_10, 15, T[54]);
	            b = II(b, c, d, a, M_offset_1, 21, T[55]);
	            a = II(a, b, c, d, M_offset_8, 6, T[56]);
	            d = II(d, a, b, c, M_offset_15, 10, T[57]);
	            c = II(c, d, a, b, M_offset_6, 15, T[58]);
	            b = II(b, c, d, a, M_offset_13, 21, T[59]);
	            a = II(a, b, c, d, M_offset_4, 6, T[60]);
	            d = II(d, a, b, c, M_offset_11, 10, T[61]);
	            c = II(c, d, a, b, M_offset_2, 15, T[62]);
	            b = II(b, c, d, a, M_offset_9, 21, T[63]); // Intermediate hash value

	            H[0] = H[0] + a | 0;
	            H[1] = H[1] + b | 0;
	            H[2] = H[2] + c | 0;
	            H[3] = H[3] + d | 0;
	          },
	          _doFinalize: function _doFinalize() {
	            // Shortcuts
	            var data = this._data;
	            var dataWords = data.words;
	            var nBitsTotal = this._nDataBytes * 8;
	            var nBitsLeft = data.sigBytes * 8; // Add padding

	            dataWords[nBitsLeft >>> 5] |= 0x80 << 24 - nBitsLeft % 32;
	            var nBitsTotalH = Math.floor(nBitsTotal / 0x100000000);
	            var nBitsTotalL = nBitsTotal;
	            dataWords[(nBitsLeft + 64 >>> 9 << 4) + 15] = (nBitsTotalH << 8 | nBitsTotalH >>> 24) & 0x00ff00ff | (nBitsTotalH << 24 | nBitsTotalH >>> 8) & 0xff00ff00;
	            dataWords[(nBitsLeft + 64 >>> 9 << 4) + 14] = (nBitsTotalL << 8 | nBitsTotalL >>> 24) & 0x00ff00ff | (nBitsTotalL << 24 | nBitsTotalL >>> 8) & 0xff00ff00;
	            data.sigBytes = (dataWords.length + 1) * 4; // Hash final blocks

	            this._process(); // Shortcuts


	            var hash = this._hash;
	            var H = hash.words; // Swap endian

	            for (var i = 0; i < 4; i++) {
	              // Shortcut
	              var H_i = H[i];
	              H[i] = (H_i << 8 | H_i >>> 24) & 0x00ff00ff | (H_i << 24 | H_i >>> 8) & 0xff00ff00;
	            } // Return final computed hash


	            return hash;
	          },
	          clone: function clone() {
	            var clone = Hasher.clone.call(this);
	            clone._hash = this._hash.clone();
	            return clone;
	          }
	        });

	        function FF(a, b, c, d, x, s, t) {
	          var n = a + (b & c | ~b & d) + x + t;
	          return (n << s | n >>> 32 - s) + b;
	        }

	        function GG(a, b, c, d, x, s, t) {
	          var n = a + (b & d | c & ~d) + x + t;
	          return (n << s | n >>> 32 - s) + b;
	        }

	        function HH(a, b, c, d, x, s, t) {
	          var n = a + (b ^ c ^ d) + x + t;
	          return (n << s | n >>> 32 - s) + b;
	        }

	        function II(a, b, c, d, x, s, t) {
	          var n = a + (c ^ (b | ~d)) + x + t;
	          return (n << s | n >>> 32 - s) + b;
	        }
	        /**
	         * Shortcut function to the hasher's object interface.
	         *
	         * @param {WordArray|string} message The message to hash.
	         *
	         * @return {WordArray} The hash.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var hash = CryptoJS.MD5('message');
	         *     var hash = CryptoJS.MD5(wordArray);
	         */


	        C.MD5 = Hasher._createHelper(MD5);
	        /**
	         * Shortcut function to the HMAC's object interface.
	         *
	         * @param {WordArray|string} message The message to hash.
	         * @param {WordArray|string} key The secret key.
	         *
	         * @return {WordArray} The HMAC.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var hmac = CryptoJS.HmacMD5(message, key);
	         */

	        C.HmacMD5 = Hasher._createHmacHelper(MD5);
	      })(Math);

	      return CryptoJS.MD5;
	    });
	  });

	  var sha1 = createCommonjsModule(function (module, exports) {

	    (function (root, factory) {
	      {
	        // CommonJS
	        module.exports = exports = factory(core);
	      }
	    })(commonjsGlobal$1, function (CryptoJS) {
	      (function () {
	        // Shortcuts
	        var C = CryptoJS;
	        var C_lib = C.lib;
	        var WordArray = C_lib.WordArray;
	        var Hasher = C_lib.Hasher;
	        var C_algo = C.algo; // Reusable object

	        var W = [];
	        /**
	         * SHA-1 hash algorithm.
	         */

	        var SHA1 = C_algo.SHA1 = Hasher.extend({
	          _doReset: function _doReset() {
	            this._hash = new WordArray.init([0x67452301, 0xefcdab89, 0x98badcfe, 0x10325476, 0xc3d2e1f0]);
	          },
	          _doProcessBlock: function _doProcessBlock(M, offset) {
	            // Shortcut
	            var H = this._hash.words; // Working variables

	            var a = H[0];
	            var b = H[1];
	            var c = H[2];
	            var d = H[3];
	            var e = H[4]; // Computation

	            for (var i = 0; i < 80; i++) {
	              if (i < 16) {
	                W[i] = M[offset + i] | 0;
	              } else {
	                var n = W[i - 3] ^ W[i - 8] ^ W[i - 14] ^ W[i - 16];
	                W[i] = n << 1 | n >>> 31;
	              }

	              var t = (a << 5 | a >>> 27) + e + W[i];

	              if (i < 20) {
	                t += (b & c | ~b & d) + 0x5a827999;
	              } else if (i < 40) {
	                t += (b ^ c ^ d) + 0x6ed9eba1;
	              } else if (i < 60) {
	                t += (b & c | b & d | c & d) - 0x70e44324;
	              } else
	                /* if (i < 80) */
	                {
	                  t += (b ^ c ^ d) - 0x359d3e2a;
	                }

	              e = d;
	              d = c;
	              c = b << 30 | b >>> 2;
	              b = a;
	              a = t;
	            } // Intermediate hash value


	            H[0] = H[0] + a | 0;
	            H[1] = H[1] + b | 0;
	            H[2] = H[2] + c | 0;
	            H[3] = H[3] + d | 0;
	            H[4] = H[4] + e | 0;
	          },
	          _doFinalize: function _doFinalize() {
	            // Shortcuts
	            var data = this._data;
	            var dataWords = data.words;
	            var nBitsTotal = this._nDataBytes * 8;
	            var nBitsLeft = data.sigBytes * 8; // Add padding

	            dataWords[nBitsLeft >>> 5] |= 0x80 << 24 - nBitsLeft % 32;
	            dataWords[(nBitsLeft + 64 >>> 9 << 4) + 14] = Math.floor(nBitsTotal / 0x100000000);
	            dataWords[(nBitsLeft + 64 >>> 9 << 4) + 15] = nBitsTotal;
	            data.sigBytes = dataWords.length * 4; // Hash final blocks

	            this._process(); // Return final computed hash


	            return this._hash;
	          },
	          clone: function clone() {
	            var clone = Hasher.clone.call(this);
	            clone._hash = this._hash.clone();
	            return clone;
	          }
	        });
	        /**
	         * Shortcut function to the hasher's object interface.
	         *
	         * @param {WordArray|string} message The message to hash.
	         *
	         * @return {WordArray} The hash.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var hash = CryptoJS.SHA1('message');
	         *     var hash = CryptoJS.SHA1(wordArray);
	         */

	        C.SHA1 = Hasher._createHelper(SHA1);
	        /**
	         * Shortcut function to the HMAC's object interface.
	         *
	         * @param {WordArray|string} message The message to hash.
	         * @param {WordArray|string} key The secret key.
	         *
	         * @return {WordArray} The HMAC.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var hmac = CryptoJS.HmacSHA1(message, key);
	         */

	        C.HmacSHA1 = Hasher._createHmacHelper(SHA1);
	      })();

	      return CryptoJS.SHA1;
	    });
	  });

	  var hmac = createCommonjsModule(function (module, exports) {

	    (function (root, factory) {
	      {
	        // CommonJS
	        module.exports = exports = factory(core);
	      }
	    })(commonjsGlobal$1, function (CryptoJS) {
	      (function () {
	        // Shortcuts
	        var C = CryptoJS;
	        var C_lib = C.lib;
	        var Base = C_lib.Base;
	        var C_enc = C.enc;
	        var Utf8 = C_enc.Utf8;
	        var C_algo = C.algo;
	        /**
	         * HMAC algorithm.
	         */

	        var HMAC = C_algo.HMAC = Base.extend({
	          /**
	           * Initializes a newly created HMAC.
	           *
	           * @param {Hasher} hasher The hash algorithm to use.
	           * @param {WordArray|string} key The secret key.
	           *
	           * @example
	           *
	           *     var hmacHasher = CryptoJS.algo.HMAC.create(CryptoJS.algo.SHA256, key);
	           */
	          init: function init(hasher, key) {
	            // Init hasher
	            hasher = this._hasher = new hasher.init(); // Convert string to WordArray, else assume WordArray already

	            if (typeof key == 'string') {
	              key = Utf8.parse(key);
	            } // Shortcuts


	            var hasherBlockSize = hasher.blockSize;
	            var hasherBlockSizeBytes = hasherBlockSize * 4; // Allow arbitrary length keys

	            if (key.sigBytes > hasherBlockSizeBytes) {
	              key = hasher.finalize(key);
	            } // Clamp excess bits


	            key.clamp(); // Clone key for inner and outer pads

	            var oKey = this._oKey = key.clone();
	            var iKey = this._iKey = key.clone(); // Shortcuts

	            var oKeyWords = oKey.words;
	            var iKeyWords = iKey.words; // XOR keys with pad constants

	            for (var i = 0; i < hasherBlockSize; i++) {
	              oKeyWords[i] ^= 0x5c5c5c5c;
	              iKeyWords[i] ^= 0x36363636;
	            }

	            oKey.sigBytes = iKey.sigBytes = hasherBlockSizeBytes; // Set initial values

	            this.reset();
	          },

	          /**
	           * Resets this HMAC to its initial state.
	           *
	           * @example
	           *
	           *     hmacHasher.reset();
	           */
	          reset: function reset() {
	            // Shortcut
	            var hasher = this._hasher; // Reset

	            hasher.reset();
	            hasher.update(this._iKey);
	          },

	          /**
	           * Updates this HMAC with a message.
	           *
	           * @param {WordArray|string} messageUpdate The message to append.
	           *
	           * @return {HMAC} This HMAC instance.
	           *
	           * @example
	           *
	           *     hmacHasher.update('message');
	           *     hmacHasher.update(wordArray);
	           */
	          update: function update(messageUpdate) {
	            this._hasher.update(messageUpdate); // Chainable


	            return this;
	          },

	          /**
	           * Finalizes the HMAC computation.
	           * Note that the finalize operation is effectively a destructive, read-once operation.
	           *
	           * @param {WordArray|string} messageUpdate (Optional) A final message update.
	           *
	           * @return {WordArray} The HMAC.
	           *
	           * @example
	           *
	           *     var hmac = hmacHasher.finalize();
	           *     var hmac = hmacHasher.finalize('message');
	           *     var hmac = hmacHasher.finalize(wordArray);
	           */
	          finalize: function finalize(messageUpdate) {
	            // Shortcut
	            var hasher = this._hasher; // Compute HMAC

	            var innerHash = hasher.finalize(messageUpdate);
	            hasher.reset();
	            var hmac = hasher.finalize(this._oKey.clone().concat(innerHash));
	            return hmac;
	          }
	        });
	      })();
	    });
	  });

	  var evpkdf = createCommonjsModule(function (module, exports) {

	    (function (root, factory, undef) {
	      {
	        // CommonJS
	        module.exports = exports = factory(core, sha1, hmac);
	      }
	    })(commonjsGlobal$1, function (CryptoJS) {
	      (function () {
	        // Shortcuts
	        var C = CryptoJS;
	        var C_lib = C.lib;
	        var Base = C_lib.Base;
	        var WordArray = C_lib.WordArray;
	        var C_algo = C.algo;
	        var MD5 = C_algo.MD5;
	        /**
	         * This key derivation function is meant to conform with EVP_BytesToKey.
	         * www.openssl.org/docs/crypto/EVP_BytesToKey.html
	         */

	        var EvpKDF = C_algo.EvpKDF = Base.extend({
	          /**
	           * Configuration options.
	           *
	           * @property {number} keySize The key size in words to generate. Default: 4 (128 bits)
	           * @property {Hasher} hasher The hash algorithm to use. Default: MD5
	           * @property {number} iterations The number of iterations to perform. Default: 1
	           */
	          cfg: Base.extend({
	            keySize: 128 / 32,
	            hasher: MD5,
	            iterations: 1
	          }),

	          /**
	           * Initializes a newly created key derivation function.
	           *
	           * @param {Object} cfg (Optional) The configuration options to use for the derivation.
	           *
	           * @example
	           *
	           *     var kdf = CryptoJS.algo.EvpKDF.create();
	           *     var kdf = CryptoJS.algo.EvpKDF.create({ keySize: 8 });
	           *     var kdf = CryptoJS.algo.EvpKDF.create({ keySize: 8, iterations: 1000 });
	           */
	          init: function init(cfg) {
	            this.cfg = this.cfg.extend(cfg);
	          },

	          /**
	           * Derives a key from a password.
	           *
	           * @param {WordArray|string} password The password.
	           * @param {WordArray|string} salt A salt.
	           *
	           * @return {WordArray} The derived key.
	           *
	           * @example
	           *
	           *     var key = kdf.compute(password, salt);
	           */
	          compute: function compute(password, salt) {
	            // Shortcut
	            var cfg = this.cfg; // Init hasher

	            var hasher = cfg.hasher.create(); // Initial values

	            var derivedKey = WordArray.create(); // Shortcuts

	            var derivedKeyWords = derivedKey.words;
	            var keySize = cfg.keySize;
	            var iterations = cfg.iterations; // Generate key

	            while (derivedKeyWords.length < keySize) {
	              if (block) {
	                hasher.update(block);
	              }

	              var block = hasher.update(password).finalize(salt);
	              hasher.reset(); // Iterations

	              for (var i = 1; i < iterations; i++) {
	                block = hasher.finalize(block);
	                hasher.reset();
	              }

	              derivedKey.concat(block);
	            }

	            derivedKey.sigBytes = keySize * 4;
	            return derivedKey;
	          }
	        });
	        /**
	         * Derives a key from a password.
	         *
	         * @param {WordArray|string} password The password.
	         * @param {WordArray|string} salt A salt.
	         * @param {Object} cfg (Optional) The configuration options to use for this computation.
	         *
	         * @return {WordArray} The derived key.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var key = CryptoJS.EvpKDF(password, salt);
	         *     var key = CryptoJS.EvpKDF(password, salt, { keySize: 8 });
	         *     var key = CryptoJS.EvpKDF(password, salt, { keySize: 8, iterations: 1000 });
	         */

	        C.EvpKDF = function (password, salt, cfg) {
	          return EvpKDF.create(cfg).compute(password, salt);
	        };
	      })();

	      return CryptoJS.EvpKDF;
	    });
	  });

	  var cipherCore = createCommonjsModule(function (module, exports) {

	    (function (root, factory, undef) {
	      {
	        // CommonJS
	        module.exports = exports = factory(core, evpkdf);
	      }
	    })(commonjsGlobal$1, function (CryptoJS) {
	      /**
	       * Cipher core components.
	       */
	      CryptoJS.lib.Cipher || function (undefined$1) {
	        // Shortcuts
	        var C = CryptoJS;
	        var C_lib = C.lib;
	        var Base = C_lib.Base;
	        var WordArray = C_lib.WordArray;
	        var BufferedBlockAlgorithm = C_lib.BufferedBlockAlgorithm;
	        var C_enc = C.enc;
	        var Utf8 = C_enc.Utf8;
	        var Base64 = C_enc.Base64;
	        var C_algo = C.algo;
	        var EvpKDF = C_algo.EvpKDF;
	        /**
	         * Abstract base cipher template.
	         *
	         * @property {number} keySize This cipher's key size. Default: 4 (128 bits)
	         * @property {number} ivSize This cipher's IV size. Default: 4 (128 bits)
	         * @property {number} _ENC_XFORM_MODE A constant representing encryption mode.
	         * @property {number} _DEC_XFORM_MODE A constant representing decryption mode.
	         */

	        var Cipher = C_lib.Cipher = BufferedBlockAlgorithm.extend({
	          /**
	           * Configuration options.
	           *
	           * @property {WordArray} iv The IV to use for this operation.
	           */
	          cfg: Base.extend(),

	          /**
	           * Creates this cipher in encryption mode.
	           *
	           * @param {WordArray} key The key.
	           * @param {Object} cfg (Optional) The configuration options to use for this operation.
	           *
	           * @return {Cipher} A cipher instance.
	           *
	           * @static
	           *
	           * @example
	           *
	           *     var cipher = CryptoJS.algo.AES.createEncryptor(keyWordArray, { iv: ivWordArray });
	           */
	          createEncryptor: function createEncryptor(key, cfg) {
	            return this.create(this._ENC_XFORM_MODE, key, cfg);
	          },

	          /**
	           * Creates this cipher in decryption mode.
	           *
	           * @param {WordArray} key The key.
	           * @param {Object} cfg (Optional) The configuration options to use for this operation.
	           *
	           * @return {Cipher} A cipher instance.
	           *
	           * @static
	           *
	           * @example
	           *
	           *     var cipher = CryptoJS.algo.AES.createDecryptor(keyWordArray, { iv: ivWordArray });
	           */
	          createDecryptor: function createDecryptor(key, cfg) {
	            return this.create(this._DEC_XFORM_MODE, key, cfg);
	          },

	          /**
	           * Initializes a newly created cipher.
	           *
	           * @param {number} xformMode Either the encryption or decryption transormation mode constant.
	           * @param {WordArray} key The key.
	           * @param {Object} cfg (Optional) The configuration options to use for this operation.
	           *
	           * @example
	           *
	           *     var cipher = CryptoJS.algo.AES.create(CryptoJS.algo.AES._ENC_XFORM_MODE, keyWordArray, { iv: ivWordArray });
	           */
	          init: function init(xformMode, key, cfg) {
	            // Apply config defaults
	            this.cfg = this.cfg.extend(cfg); // Store transform mode and key

	            this._xformMode = xformMode;
	            this._key = key; // Set initial values

	            this.reset();
	          },

	          /**
	           * Resets this cipher to its initial state.
	           *
	           * @example
	           *
	           *     cipher.reset();
	           */
	          reset: function reset() {
	            // Reset data buffer
	            BufferedBlockAlgorithm.reset.call(this); // Perform concrete-cipher logic

	            this._doReset();
	          },

	          /**
	           * Adds data to be encrypted or decrypted.
	           *
	           * @param {WordArray|string} dataUpdate The data to encrypt or decrypt.
	           *
	           * @return {WordArray} The data after processing.
	           *
	           * @example
	           *
	           *     var encrypted = cipher.process('data');
	           *     var encrypted = cipher.process(wordArray);
	           */
	          process: function process(dataUpdate) {
	            // Append
	            this._append(dataUpdate); // Process available blocks


	            return this._process();
	          },

	          /**
	           * Finalizes the encryption or decryption process.
	           * Note that the finalize operation is effectively a destructive, read-once operation.
	           *
	           * @param {WordArray|string} dataUpdate The final data to encrypt or decrypt.
	           *
	           * @return {WordArray} The data after final processing.
	           *
	           * @example
	           *
	           *     var encrypted = cipher.finalize();
	           *     var encrypted = cipher.finalize('data');
	           *     var encrypted = cipher.finalize(wordArray);
	           */
	          finalize: function finalize(dataUpdate) {
	            // Final data update
	            if (dataUpdate) {
	              this._append(dataUpdate);
	            } // Perform concrete-cipher logic


	            var finalProcessedData = this._doFinalize();

	            return finalProcessedData;
	          },
	          keySize: 128 / 32,
	          ivSize: 128 / 32,
	          _ENC_XFORM_MODE: 1,
	          _DEC_XFORM_MODE: 2,

	          /**
	           * Creates shortcut functions to a cipher's object interface.
	           *
	           * @param {Cipher} cipher The cipher to create a helper for.
	           *
	           * @return {Object} An object with encrypt and decrypt shortcut functions.
	           *
	           * @static
	           *
	           * @example
	           *
	           *     var AES = CryptoJS.lib.Cipher._createHelper(CryptoJS.algo.AES);
	           */
	          _createHelper: function () {
	            function selectCipherStrategy(key) {
	              if (typeof key == 'string') {
	                return PasswordBasedCipher;
	              } else {
	                return SerializableCipher;
	              }
	            }

	            return function (cipher) {
	              return {
	                encrypt: function encrypt(message, key, cfg) {
	                  return selectCipherStrategy(key).encrypt(cipher, message, key, cfg);
	                },
	                decrypt: function decrypt(ciphertext, key, cfg) {
	                  return selectCipherStrategy(key).decrypt(cipher, ciphertext, key, cfg);
	                }
	              };
	            };
	          }()
	        });
	        /**
	         * Abstract base stream cipher template.
	         *
	         * @property {number} blockSize The number of 32-bit words this cipher operates on. Default: 1 (32 bits)
	         */

	        var StreamCipher = C_lib.StreamCipher = Cipher.extend({
	          _doFinalize: function _doFinalize() {
	            // Process partial blocks
	            var finalProcessedBlocks = this._process(!!'flush');

	            return finalProcessedBlocks;
	          },
	          blockSize: 1
	        });
	        /**
	         * Mode namespace.
	         */

	        var C_mode = C.mode = {};
	        /**
	         * Abstract base block cipher mode template.
	         */

	        var BlockCipherMode = C_lib.BlockCipherMode = Base.extend({
	          /**
	           * Creates this mode for encryption.
	           *
	           * @param {Cipher} cipher A block cipher instance.
	           * @param {Array} iv The IV words.
	           *
	           * @static
	           *
	           * @example
	           *
	           *     var mode = CryptoJS.mode.CBC.createEncryptor(cipher, iv.words);
	           */
	          createEncryptor: function createEncryptor(cipher, iv) {
	            return this.Encryptor.create(cipher, iv);
	          },

	          /**
	           * Creates this mode for decryption.
	           *
	           * @param {Cipher} cipher A block cipher instance.
	           * @param {Array} iv The IV words.
	           *
	           * @static
	           *
	           * @example
	           *
	           *     var mode = CryptoJS.mode.CBC.createDecryptor(cipher, iv.words);
	           */
	          createDecryptor: function createDecryptor(cipher, iv) {
	            return this.Decryptor.create(cipher, iv);
	          },

	          /**
	           * Initializes a newly created mode.
	           *
	           * @param {Cipher} cipher A block cipher instance.
	           * @param {Array} iv The IV words.
	           *
	           * @example
	           *
	           *     var mode = CryptoJS.mode.CBC.Encryptor.create(cipher, iv.words);
	           */
	          init: function init(cipher, iv) {
	            this._cipher = cipher;
	            this._iv = iv;
	          }
	        });
	        /**
	         * Cipher Block Chaining mode.
	         */

	        var CBC = C_mode.CBC = function () {
	          /**
	           * Abstract base CBC mode.
	           */
	          var CBC = BlockCipherMode.extend();
	          /**
	           * CBC encryptor.
	           */

	          CBC.Encryptor = CBC.extend({
	            /**
	             * Processes the data block at offset.
	             *
	             * @param {Array} words The data words to operate on.
	             * @param {number} offset The offset where the block starts.
	             *
	             * @example
	             *
	             *     mode.processBlock(data.words, offset);
	             */
	            processBlock: function processBlock(words, offset) {
	              // Shortcuts
	              var cipher = this._cipher;
	              var blockSize = cipher.blockSize; // XOR and encrypt

	              xorBlock.call(this, words, offset, blockSize);
	              cipher.encryptBlock(words, offset); // Remember this block to use with next block

	              this._prevBlock = words.slice(offset, offset + blockSize);
	            }
	          });
	          /**
	           * CBC decryptor.
	           */

	          CBC.Decryptor = CBC.extend({
	            /**
	             * Processes the data block at offset.
	             *
	             * @param {Array} words The data words to operate on.
	             * @param {number} offset The offset where the block starts.
	             *
	             * @example
	             *
	             *     mode.processBlock(data.words, offset);
	             */
	            processBlock: function processBlock(words, offset) {
	              // Shortcuts
	              var cipher = this._cipher;
	              var blockSize = cipher.blockSize; // Remember this block to use with next block

	              var thisBlock = words.slice(offset, offset + blockSize); // Decrypt and XOR

	              cipher.decryptBlock(words, offset);
	              xorBlock.call(this, words, offset, blockSize); // This block becomes the previous block

	              this._prevBlock = thisBlock;
	            }
	          });

	          function xorBlock(words, offset, blockSize) {
	            // Shortcut
	            var iv = this._iv; // Choose mixing block

	            if (iv) {
	              var block = iv; // Remove IV for subsequent blocks

	              this._iv = undefined$1;
	            } else {
	              var block = this._prevBlock;
	            } // XOR blocks


	            for (var i = 0; i < blockSize; i++) {
	              words[offset + i] ^= block[i];
	            }
	          }

	          return CBC;
	        }();
	        /**
	         * Padding namespace.
	         */


	        var C_pad = C.pad = {};
	        /**
	         * PKCS #5/7 padding strategy.
	         */

	        var Pkcs7 = C_pad.Pkcs7 = {
	          /**
	           * Pads data using the algorithm defined in PKCS #5/7.
	           *
	           * @param {WordArray} data The data to pad.
	           * @param {number} blockSize The multiple that the data should be padded to.
	           *
	           * @static
	           *
	           * @example
	           *
	           *     CryptoJS.pad.Pkcs7.pad(wordArray, 4);
	           */
	          pad: function pad(data, blockSize) {
	            // Shortcut
	            var blockSizeBytes = blockSize * 4; // Count padding bytes

	            var nPaddingBytes = blockSizeBytes - data.sigBytes % blockSizeBytes; // Create padding word

	            var paddingWord = nPaddingBytes << 24 | nPaddingBytes << 16 | nPaddingBytes << 8 | nPaddingBytes; // Create padding

	            var paddingWords = [];

	            for (var i = 0; i < nPaddingBytes; i += 4) {
	              paddingWords.push(paddingWord);
	            }

	            var padding = WordArray.create(paddingWords, nPaddingBytes); // Add padding

	            data.concat(padding);
	          },

	          /**
	           * Unpads data that had been padded using the algorithm defined in PKCS #5/7.
	           *
	           * @param {WordArray} data The data to unpad.
	           *
	           * @static
	           *
	           * @example
	           *
	           *     CryptoJS.pad.Pkcs7.unpad(wordArray);
	           */
	          unpad: function unpad(data) {
	            // Get number of padding bytes from last byte
	            var nPaddingBytes = data.words[data.sigBytes - 1 >>> 2] & 0xff; // Remove padding

	            data.sigBytes -= nPaddingBytes;
	          }
	        };
	        /**
	         * Abstract base block cipher template.
	         *
	         * @property {number} blockSize The number of 32-bit words this cipher operates on. Default: 4 (128 bits)
	         */

	        var BlockCipher = C_lib.BlockCipher = Cipher.extend({
	          /**
	           * Configuration options.
	           *
	           * @property {Mode} mode The block mode to use. Default: CBC
	           * @property {Padding} padding The padding strategy to use. Default: Pkcs7
	           */
	          cfg: Cipher.cfg.extend({
	            mode: CBC,
	            padding: Pkcs7
	          }),
	          reset: function reset() {
	            // Reset cipher
	            Cipher.reset.call(this); // Shortcuts

	            var cfg = this.cfg;
	            var iv = cfg.iv;
	            var mode = cfg.mode; // Reset block mode

	            if (this._xformMode == this._ENC_XFORM_MODE) {
	              var modeCreator = mode.createEncryptor;
	            } else
	              /* if (this._xformMode == this._DEC_XFORM_MODE) */
	              {
	                var modeCreator = mode.createDecryptor; // Keep at least one block in the buffer for unpadding

	                this._minBufferSize = 1;
	              }

	            if (this._mode && this._mode.__creator == modeCreator) {
	              this._mode.init(this, iv && iv.words);
	            } else {
	              this._mode = modeCreator.call(mode, this, iv && iv.words);
	              this._mode.__creator = modeCreator;
	            }
	          },
	          _doProcessBlock: function _doProcessBlock(words, offset) {
	            this._mode.processBlock(words, offset);
	          },
	          _doFinalize: function _doFinalize() {
	            // Shortcut
	            var padding = this.cfg.padding; // Finalize

	            if (this._xformMode == this._ENC_XFORM_MODE) {
	              // Pad data
	              padding.pad(this._data, this.blockSize); // Process final blocks

	              var finalProcessedBlocks = this._process(!!'flush');
	            } else
	              /* if (this._xformMode == this._DEC_XFORM_MODE) */
	              {
	                // Process final blocks
	                var finalProcessedBlocks = this._process(!!'flush'); // Unpad data


	                padding.unpad(finalProcessedBlocks);
	              }

	            return finalProcessedBlocks;
	          },
	          blockSize: 128 / 32
	        });
	        /**
	         * A collection of cipher parameters.
	         *
	         * @property {WordArray} ciphertext The raw ciphertext.
	         * @property {WordArray} key The key to this ciphertext.
	         * @property {WordArray} iv The IV used in the ciphering operation.
	         * @property {WordArray} salt The salt used with a key derivation function.
	         * @property {Cipher} algorithm The cipher algorithm.
	         * @property {Mode} mode The block mode used in the ciphering operation.
	         * @property {Padding} padding The padding scheme used in the ciphering operation.
	         * @property {number} blockSize The block size of the cipher.
	         * @property {Format} formatter The default formatting strategy to convert this cipher params object to a string.
	         */

	        var CipherParams = C_lib.CipherParams = Base.extend({
	          /**
	           * Initializes a newly created cipher params object.
	           *
	           * @param {Object} cipherParams An object with any of the possible cipher parameters.
	           *
	           * @example
	           *
	           *     var cipherParams = CryptoJS.lib.CipherParams.create({
	           *         ciphertext: ciphertextWordArray,
	           *         key: keyWordArray,
	           *         iv: ivWordArray,
	           *         salt: saltWordArray,
	           *         algorithm: CryptoJS.algo.AES,
	           *         mode: CryptoJS.mode.CBC,
	           *         padding: CryptoJS.pad.PKCS7,
	           *         blockSize: 4,
	           *         formatter: CryptoJS.format.OpenSSL
	           *     });
	           */
	          init: function init(cipherParams) {
	            this.mixIn(cipherParams);
	          },

	          /**
	           * Converts this cipher params object to a string.
	           *
	           * @param {Format} formatter (Optional) The formatting strategy to use.
	           *
	           * @return {string} The stringified cipher params.
	           *
	           * @throws Error If neither the formatter nor the default formatter is set.
	           *
	           * @example
	           *
	           *     var string = cipherParams + '';
	           *     var string = cipherParams.toString();
	           *     var string = cipherParams.toString(CryptoJS.format.OpenSSL);
	           */
	          toString: function toString(formatter) {
	            return (formatter || this.formatter).stringify(this);
	          }
	        });
	        /**
	         * Format namespace.
	         */

	        var C_format = C.format = {};
	        /**
	         * OpenSSL formatting strategy.
	         */

	        var OpenSSLFormatter = C_format.OpenSSL = {
	          /**
	           * Converts a cipher params object to an OpenSSL-compatible string.
	           *
	           * @param {CipherParams} cipherParams The cipher params object.
	           *
	           * @return {string} The OpenSSL-compatible string.
	           *
	           * @static
	           *
	           * @example
	           *
	           *     var openSSLString = CryptoJS.format.OpenSSL.stringify(cipherParams);
	           */
	          stringify: function stringify(cipherParams) {
	            // Shortcuts
	            var ciphertext = cipherParams.ciphertext;
	            var salt = cipherParams.salt; // Format

	            if (salt) {
	              var wordArray = WordArray.create([0x53616c74, 0x65645f5f]).concat(salt).concat(ciphertext);
	            } else {
	              var wordArray = ciphertext;
	            }

	            return wordArray.toString(Base64);
	          },

	          /**
	           * Converts an OpenSSL-compatible string to a cipher params object.
	           *
	           * @param {string} openSSLStr The OpenSSL-compatible string.
	           *
	           * @return {CipherParams} The cipher params object.
	           *
	           * @static
	           *
	           * @example
	           *
	           *     var cipherParams = CryptoJS.format.OpenSSL.parse(openSSLString);
	           */
	          parse: function parse(openSSLStr) {
	            // Parse base64
	            var ciphertext = Base64.parse(openSSLStr); // Shortcut

	            var ciphertextWords = ciphertext.words; // Test for salt

	            if (ciphertextWords[0] == 0x53616c74 && ciphertextWords[1] == 0x65645f5f) {
	              // Extract salt
	              var salt = WordArray.create(ciphertextWords.slice(2, 4)); // Remove salt from ciphertext

	              ciphertextWords.splice(0, 4);
	              ciphertext.sigBytes -= 16;
	            }

	            return CipherParams.create({
	              ciphertext: ciphertext,
	              salt: salt
	            });
	          }
	        };
	        /**
	         * A cipher wrapper that returns ciphertext as a serializable cipher params object.
	         */

	        var SerializableCipher = C_lib.SerializableCipher = Base.extend({
	          /**
	           * Configuration options.
	           *
	           * @property {Formatter} format The formatting strategy to convert cipher param objects to and from a string. Default: OpenSSL
	           */
	          cfg: Base.extend({
	            format: OpenSSLFormatter
	          }),

	          /**
	           * Encrypts a message.
	           *
	           * @param {Cipher} cipher The cipher algorithm to use.
	           * @param {WordArray|string} message The message to encrypt.
	           * @param {WordArray} key The key.
	           * @param {Object} cfg (Optional) The configuration options to use for this operation.
	           *
	           * @return {CipherParams} A cipher params object.
	           *
	           * @static
	           *
	           * @example
	           *
	           *     var ciphertextParams = CryptoJS.lib.SerializableCipher.encrypt(CryptoJS.algo.AES, message, key);
	           *     var ciphertextParams = CryptoJS.lib.SerializableCipher.encrypt(CryptoJS.algo.AES, message, key, { iv: iv });
	           *     var ciphertextParams = CryptoJS.lib.SerializableCipher.encrypt(CryptoJS.algo.AES, message, key, { iv: iv, format: CryptoJS.format.OpenSSL });
	           */
	          encrypt: function encrypt(cipher, message, key, cfg) {
	            // Apply config defaults
	            cfg = this.cfg.extend(cfg); // Encrypt

	            var encryptor = cipher.createEncryptor(key, cfg);
	            var ciphertext = encryptor.finalize(message); // Shortcut

	            var cipherCfg = encryptor.cfg; // Create and return serializable cipher params

	            return CipherParams.create({
	              ciphertext: ciphertext,
	              key: key,
	              iv: cipherCfg.iv,
	              algorithm: cipher,
	              mode: cipherCfg.mode,
	              padding: cipherCfg.padding,
	              blockSize: cipher.blockSize,
	              formatter: cfg.format
	            });
	          },

	          /**
	           * Decrypts serialized ciphertext.
	           *
	           * @param {Cipher} cipher The cipher algorithm to use.
	           * @param {CipherParams|string} ciphertext The ciphertext to decrypt.
	           * @param {WordArray} key The key.
	           * @param {Object} cfg (Optional) The configuration options to use for this operation.
	           *
	           * @return {WordArray} The plaintext.
	           *
	           * @static
	           *
	           * @example
	           *
	           *     var plaintext = CryptoJS.lib.SerializableCipher.decrypt(CryptoJS.algo.AES, formattedCiphertext, key, { iv: iv, format: CryptoJS.format.OpenSSL });
	           *     var plaintext = CryptoJS.lib.SerializableCipher.decrypt(CryptoJS.algo.AES, ciphertextParams, key, { iv: iv, format: CryptoJS.format.OpenSSL });
	           */
	          decrypt: function decrypt(cipher, ciphertext, key, cfg) {
	            // Apply config defaults
	            cfg = this.cfg.extend(cfg); // Convert string to CipherParams

	            ciphertext = this._parse(ciphertext, cfg.format); // Decrypt

	            var plaintext = cipher.createDecryptor(key, cfg).finalize(ciphertext.ciphertext);
	            return plaintext;
	          },

	          /**
	           * Converts serialized ciphertext to CipherParams,
	           * else assumed CipherParams already and returns ciphertext unchanged.
	           *
	           * @param {CipherParams|string} ciphertext The ciphertext.
	           * @param {Formatter} format The formatting strategy to use to parse serialized ciphertext.
	           *
	           * @return {CipherParams} The unserialized ciphertext.
	           *
	           * @static
	           *
	           * @example
	           *
	           *     var ciphertextParams = CryptoJS.lib.SerializableCipher._parse(ciphertextStringOrParams, format);
	           */
	          _parse: function _parse(ciphertext, format) {
	            if (typeof ciphertext == 'string') {
	              return format.parse(ciphertext, this);
	            } else {
	              return ciphertext;
	            }
	          }
	        });
	        /**
	         * Key derivation function namespace.
	         */

	        var C_kdf = C.kdf = {};
	        /**
	         * OpenSSL key derivation function.
	         */

	        var OpenSSLKdf = C_kdf.OpenSSL = {
	          /**
	           * Derives a key and IV from a password.
	           *
	           * @param {string} password The password to derive from.
	           * @param {number} keySize The size in words of the key to generate.
	           * @param {number} ivSize The size in words of the IV to generate.
	           * @param {WordArray|string} salt (Optional) A 64-bit salt to use. If omitted, a salt will be generated randomly.
	           *
	           * @return {CipherParams} A cipher params object with the key, IV, and salt.
	           *
	           * @static
	           *
	           * @example
	           *
	           *     var derivedParams = CryptoJS.kdf.OpenSSL.execute('Password', 256/32, 128/32);
	           *     var derivedParams = CryptoJS.kdf.OpenSSL.execute('Password', 256/32, 128/32, 'saltsalt');
	           */
	          execute: function execute(password, keySize, ivSize, salt) {
	            // Generate random salt
	            if (!salt) {
	              salt = WordArray.random(64 / 8);
	            } // Derive key and IV


	            var key = EvpKDF.create({
	              keySize: keySize + ivSize
	            }).compute(password, salt); // Separate key and IV

	            var iv = WordArray.create(key.words.slice(keySize), ivSize * 4);
	            key.sigBytes = keySize * 4; // Return params

	            return CipherParams.create({
	              key: key,
	              iv: iv,
	              salt: salt
	            });
	          }
	        };
	        /**
	         * A serializable cipher wrapper that derives the key from a password,
	         * and returns ciphertext as a serializable cipher params object.
	         */

	        var PasswordBasedCipher = C_lib.PasswordBasedCipher = SerializableCipher.extend({
	          /**
	           * Configuration options.
	           *
	           * @property {KDF} kdf The key derivation function to use to generate a key and IV from a password. Default: OpenSSL
	           */
	          cfg: SerializableCipher.cfg.extend({
	            kdf: OpenSSLKdf
	          }),

	          /**
	           * Encrypts a message using a password.
	           *
	           * @param {Cipher} cipher The cipher algorithm to use.
	           * @param {WordArray|string} message The message to encrypt.
	           * @param {string} password The password.
	           * @param {Object} cfg (Optional) The configuration options to use for this operation.
	           *
	           * @return {CipherParams} A cipher params object.
	           *
	           * @static
	           *
	           * @example
	           *
	           *     var ciphertextParams = CryptoJS.lib.PasswordBasedCipher.encrypt(CryptoJS.algo.AES, message, 'password');
	           *     var ciphertextParams = CryptoJS.lib.PasswordBasedCipher.encrypt(CryptoJS.algo.AES, message, 'password', { format: CryptoJS.format.OpenSSL });
	           */
	          encrypt: function encrypt(cipher, message, password, cfg) {
	            // Apply config defaults
	            cfg = this.cfg.extend(cfg); // Derive key and other params

	            var derivedParams = cfg.kdf.execute(password, cipher.keySize, cipher.ivSize); // Add IV to config

	            cfg.iv = derivedParams.iv; // Encrypt

	            var ciphertext = SerializableCipher.encrypt.call(this, cipher, message, derivedParams.key, cfg); // Mix in derived params

	            ciphertext.mixIn(derivedParams);
	            return ciphertext;
	          },

	          /**
	           * Decrypts serialized ciphertext using a password.
	           *
	           * @param {Cipher} cipher The cipher algorithm to use.
	           * @param {CipherParams|string} ciphertext The ciphertext to decrypt.
	           * @param {string} password The password.
	           * @param {Object} cfg (Optional) The configuration options to use for this operation.
	           *
	           * @return {WordArray} The plaintext.
	           *
	           * @static
	           *
	           * @example
	           *
	           *     var plaintext = CryptoJS.lib.PasswordBasedCipher.decrypt(CryptoJS.algo.AES, formattedCiphertext, 'password', { format: CryptoJS.format.OpenSSL });
	           *     var plaintext = CryptoJS.lib.PasswordBasedCipher.decrypt(CryptoJS.algo.AES, ciphertextParams, 'password', { format: CryptoJS.format.OpenSSL });
	           */
	          decrypt: function decrypt(cipher, ciphertext, password, cfg) {
	            // Apply config defaults
	            cfg = this.cfg.extend(cfg); // Convert string to CipherParams

	            ciphertext = this._parse(ciphertext, cfg.format); // Derive key and other params

	            var derivedParams = cfg.kdf.execute(password, cipher.keySize, cipher.ivSize, ciphertext.salt); // Add IV to config

	            cfg.iv = derivedParams.iv; // Decrypt

	            var plaintext = SerializableCipher.decrypt.call(this, cipher, ciphertext, derivedParams.key, cfg);
	            return plaintext;
	          }
	        });
	      }();
	    });
	  });

	  var aes = createCommonjsModule(function (module, exports) {

	    (function (root, factory, undef) {
	      {
	        // CommonJS
	        module.exports = exports = factory(core, encBase64, md5, evpkdf, cipherCore);
	      }
	    })(commonjsGlobal$1, function (CryptoJS) {
	      (function () {
	        // Shortcuts
	        var C = CryptoJS;
	        var C_lib = C.lib;
	        var BlockCipher = C_lib.BlockCipher;
	        var C_algo = C.algo; // Lookup tables

	        var SBOX = [];
	        var INV_SBOX = [];
	        var SUB_MIX_0 = [];
	        var SUB_MIX_1 = [];
	        var SUB_MIX_2 = [];
	        var SUB_MIX_3 = [];
	        var INV_SUB_MIX_0 = [];
	        var INV_SUB_MIX_1 = [];
	        var INV_SUB_MIX_2 = [];
	        var INV_SUB_MIX_3 = []; // Compute lookup tables

	        (function () {
	          // Compute double table
	          var d = [];

	          for (var i = 0; i < 256; i++) {
	            if (i < 128) {
	              d[i] = i << 1;
	            } else {
	              d[i] = i << 1 ^ 0x11b;
	            }
	          } // Walk GF(2^8)


	          var x = 0;
	          var xi = 0;

	          for (var i = 0; i < 256; i++) {
	            // Compute sbox
	            var sx = xi ^ xi << 1 ^ xi << 2 ^ xi << 3 ^ xi << 4;
	            sx = sx >>> 8 ^ sx & 0xff ^ 0x63;
	            SBOX[x] = sx;
	            INV_SBOX[sx] = x; // Compute multiplication

	            var x2 = d[x];
	            var x4 = d[x2];
	            var x8 = d[x4]; // Compute sub bytes, mix columns tables

	            var t = d[sx] * 0x101 ^ sx * 0x1010100;
	            SUB_MIX_0[x] = t << 24 | t >>> 8;
	            SUB_MIX_1[x] = t << 16 | t >>> 16;
	            SUB_MIX_2[x] = t << 8 | t >>> 24;
	            SUB_MIX_3[x] = t; // Compute inv sub bytes, inv mix columns tables

	            var t = x8 * 0x1010101 ^ x4 * 0x10001 ^ x2 * 0x101 ^ x * 0x1010100;
	            INV_SUB_MIX_0[sx] = t << 24 | t >>> 8;
	            INV_SUB_MIX_1[sx] = t << 16 | t >>> 16;
	            INV_SUB_MIX_2[sx] = t << 8 | t >>> 24;
	            INV_SUB_MIX_3[sx] = t; // Compute next counter

	            if (!x) {
	              x = xi = 1;
	            } else {
	              x = x2 ^ d[d[d[x8 ^ x2]]];
	              xi ^= d[d[xi]];
	            }
	          }
	        })(); // Precomputed Rcon lookup


	        var RCON = [0x00, 0x01, 0x02, 0x04, 0x08, 0x10, 0x20, 0x40, 0x80, 0x1b, 0x36];
	        /**
	         * AES block cipher algorithm.
	         */

	        var AES = C_algo.AES = BlockCipher.extend({
	          _doReset: function _doReset() {
	            // Skip reset of nRounds has been set before and key did not change
	            if (this._nRounds && this._keyPriorReset === this._key) {
	              return;
	            } // Shortcuts


	            var key = this._keyPriorReset = this._key;
	            var keyWords = key.words;
	            var keySize = key.sigBytes / 4; // Compute number of rounds

	            var nRounds = this._nRounds = keySize + 6; // Compute number of key schedule rows

	            var ksRows = (nRounds + 1) * 4; // Compute key schedule

	            var keySchedule = this._keySchedule = [];

	            for (var ksRow = 0; ksRow < ksRows; ksRow++) {
	              if (ksRow < keySize) {
	                keySchedule[ksRow] = keyWords[ksRow];
	              } else {
	                var t = keySchedule[ksRow - 1];

	                if (!(ksRow % keySize)) {
	                  // Rot word
	                  t = t << 8 | t >>> 24; // Sub word

	                  t = SBOX[t >>> 24] << 24 | SBOX[t >>> 16 & 0xff] << 16 | SBOX[t >>> 8 & 0xff] << 8 | SBOX[t & 0xff]; // Mix Rcon

	                  t ^= RCON[ksRow / keySize | 0] << 24;
	                } else if (keySize > 6 && ksRow % keySize == 4) {
	                  // Sub word
	                  t = SBOX[t >>> 24] << 24 | SBOX[t >>> 16 & 0xff] << 16 | SBOX[t >>> 8 & 0xff] << 8 | SBOX[t & 0xff];
	                }

	                keySchedule[ksRow] = keySchedule[ksRow - keySize] ^ t;
	              }
	            } // Compute inv key schedule


	            var invKeySchedule = this._invKeySchedule = [];

	            for (var invKsRow = 0; invKsRow < ksRows; invKsRow++) {
	              var ksRow = ksRows - invKsRow;

	              if (invKsRow % 4) {
	                var t = keySchedule[ksRow];
	              } else {
	                var t = keySchedule[ksRow - 4];
	              }

	              if (invKsRow < 4 || ksRow <= 4) {
	                invKeySchedule[invKsRow] = t;
	              } else {
	                invKeySchedule[invKsRow] = INV_SUB_MIX_0[SBOX[t >>> 24]] ^ INV_SUB_MIX_1[SBOX[t >>> 16 & 0xff]] ^ INV_SUB_MIX_2[SBOX[t >>> 8 & 0xff]] ^ INV_SUB_MIX_3[SBOX[t & 0xff]];
	              }
	            }
	          },
	          encryptBlock: function encryptBlock(M, offset) {
	            this._doCryptBlock(M, offset, this._keySchedule, SUB_MIX_0, SUB_MIX_1, SUB_MIX_2, SUB_MIX_3, SBOX);
	          },
	          decryptBlock: function decryptBlock(M, offset) {
	            // Swap 2nd and 4th rows
	            var t = M[offset + 1];
	            M[offset + 1] = M[offset + 3];
	            M[offset + 3] = t;

	            this._doCryptBlock(M, offset, this._invKeySchedule, INV_SUB_MIX_0, INV_SUB_MIX_1, INV_SUB_MIX_2, INV_SUB_MIX_3, INV_SBOX); // Inv swap 2nd and 4th rows


	            var t = M[offset + 1];
	            M[offset + 1] = M[offset + 3];
	            M[offset + 3] = t;
	          },
	          _doCryptBlock: function _doCryptBlock(M, offset, keySchedule, SUB_MIX_0, SUB_MIX_1, SUB_MIX_2, SUB_MIX_3, SBOX) {
	            // Shortcut
	            var nRounds = this._nRounds; // Get input, add round key

	            var s0 = M[offset] ^ keySchedule[0];
	            var s1 = M[offset + 1] ^ keySchedule[1];
	            var s2 = M[offset + 2] ^ keySchedule[2];
	            var s3 = M[offset + 3] ^ keySchedule[3]; // Key schedule row counter

	            var ksRow = 4; // Rounds

	            for (var round = 1; round < nRounds; round++) {
	              // Shift rows, sub bytes, mix columns, add round key
	              var t0 = SUB_MIX_0[s0 >>> 24] ^ SUB_MIX_1[s1 >>> 16 & 0xff] ^ SUB_MIX_2[s2 >>> 8 & 0xff] ^ SUB_MIX_3[s3 & 0xff] ^ keySchedule[ksRow++];
	              var t1 = SUB_MIX_0[s1 >>> 24] ^ SUB_MIX_1[s2 >>> 16 & 0xff] ^ SUB_MIX_2[s3 >>> 8 & 0xff] ^ SUB_MIX_3[s0 & 0xff] ^ keySchedule[ksRow++];
	              var t2 = SUB_MIX_0[s2 >>> 24] ^ SUB_MIX_1[s3 >>> 16 & 0xff] ^ SUB_MIX_2[s0 >>> 8 & 0xff] ^ SUB_MIX_3[s1 & 0xff] ^ keySchedule[ksRow++];
	              var t3 = SUB_MIX_0[s3 >>> 24] ^ SUB_MIX_1[s0 >>> 16 & 0xff] ^ SUB_MIX_2[s1 >>> 8 & 0xff] ^ SUB_MIX_3[s2 & 0xff] ^ keySchedule[ksRow++]; // Update state

	              s0 = t0;
	              s1 = t1;
	              s2 = t2;
	              s3 = t3;
	            } // Shift rows, sub bytes, add round key


	            var t0 = (SBOX[s0 >>> 24] << 24 | SBOX[s1 >>> 16 & 0xff] << 16 | SBOX[s2 >>> 8 & 0xff] << 8 | SBOX[s3 & 0xff]) ^ keySchedule[ksRow++];
	            var t1 = (SBOX[s1 >>> 24] << 24 | SBOX[s2 >>> 16 & 0xff] << 16 | SBOX[s3 >>> 8 & 0xff] << 8 | SBOX[s0 & 0xff]) ^ keySchedule[ksRow++];
	            var t2 = (SBOX[s2 >>> 24] << 24 | SBOX[s3 >>> 16 & 0xff] << 16 | SBOX[s0 >>> 8 & 0xff] << 8 | SBOX[s1 & 0xff]) ^ keySchedule[ksRow++];
	            var t3 = (SBOX[s3 >>> 24] << 24 | SBOX[s0 >>> 16 & 0xff] << 16 | SBOX[s1 >>> 8 & 0xff] << 8 | SBOX[s2 & 0xff]) ^ keySchedule[ksRow++]; // Set output

	            M[offset] = t0;
	            M[offset + 1] = t1;
	            M[offset + 2] = t2;
	            M[offset + 3] = t3;
	          },
	          keySize: 256 / 32
	        });
	        /**
	         * Shortcut functions to the cipher's object interface.
	         *
	         * @example
	         *
	         *     var ciphertext = CryptoJS.AES.encrypt(message, key, cfg);
	         *     var plaintext  = CryptoJS.AES.decrypt(ciphertext, key, cfg);
	         */

	        C.AES = BlockCipher._createHelper(AES);
	      })();

	      return CryptoJS.AES;
	    });
	  });

	  var encUtf8 = createCommonjsModule(function (module, exports) {

	    (function (root, factory) {
	      {
	        // CommonJS
	        module.exports = exports = factory(core);
	      }
	    })(commonjsGlobal$1, function (CryptoJS) {
	      return CryptoJS.enc.Utf8;
	    });
	  });

	  /**
	   * toString ref.
	   */
	  var toString$2 = Object.prototype.toString;
	  /**
	   * Return the type of `val`.
	   *
	   * @param {Mixed} val
	   * @return {String}
	   * @api public
	   */

	  var componentType$1 = function componentType(val) {
	    switch (toString$2.call(val)) {
	      case '[object Date]':
	        return 'date';

	      case '[object RegExp]':
	        return 'regexp';

	      case '[object Arguments]':
	        return 'arguments';

	      case '[object Array]':
	        return 'array';

	      case '[object Error]':
	        return 'error';
	    }

	    if (val === null) return 'null';
	    if (val === undefined) return 'undefined';
	    if (val !== val) return 'nan';
	    if (val && val.nodeType === 1) return 'element';
	    if (isBuffer$1(val)) return 'buffer';
	    val = val.valueOf ? val.valueOf() : Object.prototype.valueOf.apply(val);
	    return _typeof(val);
	  }; // code borrowed from https://github.com/feross/is-buffer/blob/master/index.js


	  function isBuffer$1(obj) {
	    return !!(obj != null && (obj._isBuffer || // For Safari 5-7 (missing Object.prototype.constructor)
	    obj.constructor && typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj)));
	  }

	  /*
	   * Module dependencies.
	   */

	  /**
	   * Deeply clone an object.
	   *
	   * @param {*} obj Any object.
	   */


	  var clone = function clone(obj) {
	    var t = componentType$1(obj);

	    if (t === 'object') {
	      var copy = {};

	      for (var key in obj) {
	        if (obj.hasOwnProperty(key)) {
	          copy[key] = clone(obj[key]);
	        }
	      }

	      return copy;
	    }

	    if (t === 'array') {
	      var copy = new Array(obj.length);

	      for (var i = 0, l = obj.length; i < l; i++) {
	        copy[i] = clone(obj[i]);
	      }

	      return copy;
	    }

	    if (t === 'regexp') {
	      // from millermedeiros/amd-utils - MIT
	      var flags = '';
	      flags += obj.multiline ? 'm' : '';
	      flags += obj.global ? 'g' : '';
	      flags += obj.ignoreCase ? 'i' : '';
	      return new RegExp(obj.source, flags);
	    }

	    if (t === 'date') {
	      return new Date(obj.getTime());
	    } // string, number, boolean, etc.


	    return obj;
	  };
	  /*
	   * Exports.
	   */


	  var clone_1 = clone;

	  /**
	   * Helpers.
	   */
	  var s = 1000;
	  var m = s * 60;
	  var h = m * 60;
	  var d = h * 24;
	  var y = d * 365.25;
	  /**
	   * Parse or format the given `val`.
	   *
	   * Options:
	   *
	   *  - `long` verbose formatting [false]
	   *
	   * @param {String|Number} val
	   * @param {Object} options
	   * @return {String|Number}
	   * @api public
	   */

	  var ms = function ms(val, options) {
	    options = options || {};
	    if ('string' == typeof val) return parse$2(val);
	    return options["long"] ? _long(val) : _short(val);
	  };
	  /**
	   * Parse the given `str` and return milliseconds.
	   *
	   * @param {String} str
	   * @return {Number}
	   * @api private
	   */


	  function parse$2(str) {
	    str = '' + str;
	    if (str.length > 10000) return;
	    var match = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(str);
	    if (!match) return;
	    var n = parseFloat(match[1]);
	    var type = (match[2] || 'ms').toLowerCase();

	    switch (type) {
	      case 'years':
	      case 'year':
	      case 'yrs':
	      case 'yr':
	      case 'y':
	        return n * y;

	      case 'days':
	      case 'day':
	      case 'd':
	        return n * d;

	      case 'hours':
	      case 'hour':
	      case 'hrs':
	      case 'hr':
	      case 'h':
	        return n * h;

	      case 'minutes':
	      case 'minute':
	      case 'mins':
	      case 'min':
	      case 'm':
	        return n * m;

	      case 'seconds':
	      case 'second':
	      case 'secs':
	      case 'sec':
	      case 's':
	        return n * s;

	      case 'milliseconds':
	      case 'millisecond':
	      case 'msecs':
	      case 'msec':
	      case 'ms':
	        return n;
	    }
	  }
	  /**
	   * Short format for `ms`.
	   *
	   * @param {Number} ms
	   * @return {String}
	   * @api private
	   */


	  function _short(ms) {
	    if (ms >= d) return Math.round(ms / d) + 'd';
	    if (ms >= h) return Math.round(ms / h) + 'h';
	    if (ms >= m) return Math.round(ms / m) + 'm';
	    if (ms >= s) return Math.round(ms / s) + 's';
	    return ms + 'ms';
	  }
	  /**
	   * Long format for `ms`.
	   *
	   * @param {Number} ms
	   * @return {String}
	   * @api private
	   */


	  function _long(ms) {
	    return plural(ms, d, 'day') || plural(ms, h, 'hour') || plural(ms, m, 'minute') || plural(ms, s, 'second') || ms + ' ms';
	  }
	  /**
	   * Pluralization helper.
	   */


	  function plural(ms, n, name) {
	    if (ms < n) return;
	    if (ms < n * 1.5) return Math.floor(ms / n) + ' ' + name;
	    return Math.ceil(ms / n) + ' ' + name + 's';
	  }

	  var debug_1 = createCommonjsModule(function (module, exports) {
	    /**
	     * This is the common logic for both the Node.js and web browser
	     * implementations of `debug()`.
	     *
	     * Expose `debug()` as the module.
	     */
	    exports = module.exports = debug;
	    exports.coerce = coerce;
	    exports.disable = disable;
	    exports.enable = enable;
	    exports.enabled = enabled;
	    exports.humanize = ms;
	    /**
	     * The currently active debug mode names, and names to skip.
	     */

	    exports.names = [];
	    exports.skips = [];
	    /**
	     * Map of special "%n" handling functions, for the debug "format" argument.
	     *
	     * Valid key names are a single, lowercased letter, i.e. "n".
	     */

	    exports.formatters = {};
	    /**
	     * Previously assigned color.
	     */

	    var prevColor = 0;
	    /**
	     * Previous log timestamp.
	     */

	    var prevTime;
	    /**
	     * Select a color.
	     *
	     * @return {Number}
	     * @api private
	     */

	    function selectColor() {
	      return exports.colors[prevColor++ % exports.colors.length];
	    }
	    /**
	     * Create a debugger with the given `namespace`.
	     *
	     * @param {String} namespace
	     * @return {Function}
	     * @api public
	     */


	    function debug(namespace) {
	      // define the `disabled` version
	      function disabled() {}

	      disabled.enabled = false; // define the `enabled` version

	      function enabled() {
	        var self = enabled; // set `diff` timestamp

	        var curr = +new Date();
	        var ms = curr - (prevTime || curr);
	        self.diff = ms;
	        self.prev = prevTime;
	        self.curr = curr;
	        prevTime = curr; // add the `color` if not set

	        if (null == self.useColors) self.useColors = exports.useColors();
	        if (null == self.color && self.useColors) self.color = selectColor();
	        var args = Array.prototype.slice.call(arguments);
	        args[0] = exports.coerce(args[0]);

	        if ('string' !== typeof args[0]) {
	          // anything else let's inspect with %o
	          args = ['%o'].concat(args);
	        } // apply any `formatters` transformations


	        var index = 0;
	        args[0] = args[0].replace(/%([a-z%])/g, function (match, format) {
	          // if we encounter an escaped % then don't increase the array index
	          if (match === '%%') return match;
	          index++;
	          var formatter = exports.formatters[format];

	          if ('function' === typeof formatter) {
	            var val = args[index];
	            match = formatter.call(self, val); // now we need to remove `args[index]` since it's inlined in the `format`

	            args.splice(index, 1);
	            index--;
	          }

	          return match;
	        });

	        if ('function' === typeof exports.formatArgs) {
	          args = exports.formatArgs.apply(self, args);
	        }

	        var logFn = enabled.log || exports.log || console.log.bind(console);
	        logFn.apply(self, args);
	      }

	      enabled.enabled = true;
	      var fn = exports.enabled(namespace) ? enabled : disabled;
	      fn.namespace = namespace;
	      return fn;
	    }
	    /**
	     * Enables a debug mode by namespaces. This can include modes
	     * separated by a colon and wildcards.
	     *
	     * @param {String} namespaces
	     * @api public
	     */


	    function enable(namespaces) {
	      exports.save(namespaces);
	      var split = (namespaces || '').split(/[\s,]+/);
	      var len = split.length;

	      for (var i = 0; i < len; i++) {
	        if (!split[i]) continue; // ignore empty strings

	        namespaces = split[i].replace(/\*/g, '.*?');

	        if (namespaces[0] === '-') {
	          exports.skips.push(new RegExp('^' + namespaces.substr(1) + '$'));
	        } else {
	          exports.names.push(new RegExp('^' + namespaces + '$'));
	        }
	      }
	    }
	    /**
	     * Disable debug output.
	     *
	     * @api public
	     */


	    function disable() {
	      exports.enable('');
	    }
	    /**
	     * Returns true if the given mode name is enabled, false otherwise.
	     *
	     * @param {String} name
	     * @return {Boolean}
	     * @api public
	     */


	    function enabled(name) {
	      var i, len;

	      for (i = 0, len = exports.skips.length; i < len; i++) {
	        if (exports.skips[i].test(name)) {
	          return false;
	        }
	      }

	      for (i = 0, len = exports.names.length; i < len; i++) {
	        if (exports.names[i].test(name)) {
	          return true;
	        }
	      }

	      return false;
	    }
	    /**
	     * Coerce `val`.
	     *
	     * @param {Mixed} val
	     * @return {Mixed}
	     * @api private
	     */


	    function coerce(val) {
	      if (val instanceof Error) return val.stack || val.message;
	      return val;
	    }
	  });
	  var debug_2 = debug_1.coerce;
	  var debug_3 = debug_1.disable;
	  var debug_4 = debug_1.enable;
	  var debug_5 = debug_1.enabled;
	  var debug_6 = debug_1.humanize;
	  var debug_7 = debug_1.names;
	  var debug_8 = debug_1.skips;
	  var debug_9 = debug_1.formatters;

	  var browser$1 = createCommonjsModule(function (module, exports) {
	    /**
	     * This is the web browser implementation of `debug()`.
	     *
	     * Expose `debug()` as the module.
	     */
	    exports = module.exports = debug_1;
	    exports.log = log;
	    exports.formatArgs = formatArgs;
	    exports.save = save;
	    exports.load = load;
	    exports.useColors = useColors;
	    exports.storage = 'undefined' != typeof chrome && 'undefined' != typeof chrome.storage ? chrome.storage.local : localstorage();
	    /**
	     * Colors.
	     */

	    exports.colors = ['lightseagreen', 'forestgreen', 'goldenrod', 'dodgerblue', 'darkorchid', 'crimson'];
	    /**
	     * Currently only WebKit-based Web Inspectors, Firefox >= v31,
	     * and the Firebug extension (any Firefox version) are known
	     * to support "%c" CSS customizations.
	     *
	     * TODO: add a `localStorage` variable to explicitly enable/disable colors
	     */

	    function useColors() {
	      // is webkit? http://stackoverflow.com/a/16459606/376773
	      return 'WebkitAppearance' in document.documentElement.style || // is firebug? http://stackoverflow.com/a/398120/376773
	      window.console && (console.firebug || console.exception && console.table) || // is firefox >= v31?
	      // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
	      navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31;
	    }
	    /**
	     * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
	     */


	    exports.formatters.j = function (v) {
	      return JSON.stringify(v);
	    };
	    /**
	     * Colorize log arguments if enabled.
	     *
	     * @api public
	     */


	    function formatArgs() {
	      var args = arguments;
	      var useColors = this.useColors;
	      args[0] = (useColors ? '%c' : '') + this.namespace + (useColors ? ' %c' : ' ') + args[0] + (useColors ? '%c ' : ' ') + '+' + exports.humanize(this.diff);
	      if (!useColors) return args;
	      var c = 'color: ' + this.color;
	      args = [args[0], c, 'color: inherit'].concat(Array.prototype.slice.call(args, 1)); // the final "%c" is somewhat tricky, because there could be other
	      // arguments passed either before or after the %c, so we need to
	      // figure out the correct index to insert the CSS into

	      var index = 0;
	      var lastC = 0;
	      args[0].replace(/%[a-z%]/g, function (match) {
	        if ('%%' === match) return;
	        index++;

	        if ('%c' === match) {
	          // we only are interested in the *last* %c
	          // (the user may have provided their own)
	          lastC = index;
	        }
	      });
	      args.splice(lastC, 0, c);
	      return args;
	    }
	    /**
	     * Invokes `console.log()` when available.
	     * No-op when `console.log` is not a "function".
	     *
	     * @api public
	     */


	    function log() {
	      // this hackery is required for IE8/9, where
	      // the `console.log` function doesn't have 'apply'
	      return 'object' === (typeof console === "undefined" ? "undefined" : _typeof(console)) && console.log && Function.prototype.apply.call(console.log, console, arguments);
	    }
	    /**
	     * Save `namespaces`.
	     *
	     * @param {String} namespaces
	     * @api private
	     */


	    function save(namespaces) {
	      try {
	        if (null == namespaces) {
	          exports.storage.removeItem('debug');
	        } else {
	          exports.storage.debug = namespaces;
	        }
	      } catch (e) {}
	    }
	    /**
	     * Load `namespaces`.
	     *
	     * @return {String} returns the previously persisted debug modes
	     * @api private
	     */


	    function load() {
	      var r;

	      try {
	        r = exports.storage.debug;
	      } catch (e) {}

	      return r;
	    }
	    /**
	     * Enable namespaces listed in `localStorage.debug` initially.
	     */


	    exports.enable(load());
	    /**
	     * Localstorage attempts to return the localstorage.
	     *
	     * This is necessary because safari throws
	     * when a user disables cookies/localstorage
	     * and you attempt to access it.
	     *
	     * @return {LocalStorage}
	     * @api private
	     */

	    function localstorage() {
	      try {
	        return window.localStorage;
	      } catch (e) {}
	    }
	  });
	  var browser_1 = browser$1.log;
	  var browser_2 = browser$1.formatArgs;
	  var browser_3 = browser$1.save;
	  var browser_4 = browser$1.load;
	  var browser_5 = browser$1.useColors;
	  var browser_6 = browser$1.storage;
	  var browser_7 = browser$1.colors;

	  /**
	   * Module dependencies.
	   */

	  var debug = browser$1('cookie');
	  /**
	   * Set or get cookie `name` with `value` and `options` object.
	   *
	   * @param {String} name
	   * @param {String} value
	   * @param {Object} options
	   * @return {Mixed}
	   * @api public
	   */

	  var rudderComponentCookie = function rudderComponentCookie(name, value, options) {
	    switch (arguments.length) {
	      case 3:
	      case 2:
	        return set(name, value, options);

	      case 1:
	        return get(name);

	      default:
	        return all();
	    }
	  };
	  /**
	   * Set cookie `name` to `value`.
	   *
	   * @param {String} name
	   * @param {String} value
	   * @param {Object} options
	   * @api private
	   */


	  function set(name, value, options) {
	    options = options || {};
	    var str = encode$1(name) + '=' + encode$1(value);
	    if (null == value) options.maxage = -1;

	    if (options.maxage) {
	      options.expires = new Date(+new Date() + options.maxage);
	    }

	    if (options.path) str += '; path=' + options.path;
	    if (options.domain) str += '; domain=' + options.domain;
	    if (options.expires) str += '; expires=' + options.expires.toUTCString();
	    if (options.samesite) str += '; samesite=' + options.samesite;
	    if (options.secure) str += '; secure';
	    document.cookie = str;
	  }
	  /**
	   * Return all cookies.
	   *
	   * @return {Object}
	   * @api private
	   */


	  function all() {
	    var str;

	    try {
	      str = document.cookie;
	    } catch (err) {
	      if (typeof console !== 'undefined' && typeof console.error === 'function') {
	        console.error(err.stack || err);
	      }

	      return {};
	    }

	    return parse$3(str);
	  }
	  /**
	   * Get cookie `name`.
	   *
	   * @param {String} name
	   * @return {String}
	   * @api private
	   */


	  function get(name) {
	    return all()[name];
	  }
	  /**
	   * Parse cookie `str`.
	   *
	   * @param {String} str
	   * @return {Object}
	   * @api private
	   */


	  function parse$3(str) {
	    var obj = {};
	    var pairs = str.split(/ *; */);
	    var pair;
	    if ('' == pairs[0]) return obj;

	    for (var i = 0; i < pairs.length; ++i) {
	      pair = pairs[i].split('=');
	      obj[decode$1(pair[0])] = decode$1(pair[1]);
	    }

	    return obj;
	  }
	  /**
	   * Encode.
	   */


	  function encode$1(value) {
	    try {
	      return encodeURIComponent(value);
	    } catch (e) {
	      debug('error `encode(%o)` - %o', value, e);
	    }
	  }
	  /**
	   * Decode.
	   */


	  function decode$1(value) {
	    try {
	      return decodeURIComponent(value);
	    } catch (e) {
	      debug('error `decode(%o)` - %o', value, e);
	    }
	  }

	  var max = Math.max;
	  /**
	   * Produce a new array composed of all but the first `n` elements of an input `collection`.
	   *
	   * @name drop
	   * @api public
	   * @param {number} count The number of elements to drop.
	   * @param {Array} collection The collection to iterate over.
	   * @return {Array} A new array containing all but the first element from `collection`.
	   * @example
	   * drop(0, [1, 2, 3]); // => [1, 2, 3]
	   * drop(1, [1, 2, 3]); // => [2, 3]
	   * drop(2, [1, 2, 3]); // => [3]
	   * drop(3, [1, 2, 3]); // => []
	   * drop(4, [1, 2, 3]); // => []
	   */

	  var drop = function drop(count, collection) {
	    var length = collection ? collection.length : 0;

	    if (!length) {
	      return [];
	    } // Preallocating an array *significantly* boosts performance when dealing with
	    // `arguments` objects on v8. For a summary, see:
	    // https://github.com/petkaantonov/bluebird/wiki/Optimization-killers#32-leaking-arguments


	    var toDrop = max(Number(count) || 0, 0);
	    var resultsLength = max(length - toDrop, 0);
	    var results = new Array(resultsLength);

	    for (var i = 0; i < resultsLength; i += 1) {
	      results[i] = collection[i + toDrop];
	    }

	    return results;
	  };
	  /*
	   * Exports.
	   */


	  var drop_1 = drop;

	  var max$1 = Math.max;
	  /**
	   * Produce a new array by passing each value in the input `collection` through a transformative
	   * `iterator` function. The `iterator` function is passed three arguments:
	   * `(value, index, collection)`.
	   *
	   * @name rest
	   * @api public
	   * @param {Array} collection The collection to iterate over.
	   * @return {Array} A new array containing all but the first element from `collection`.
	   * @example
	   * rest([1, 2, 3]); // => [2, 3]
	   */

	  var rest = function rest(collection) {
	    if (collection == null || !collection.length) {
	      return [];
	    } // Preallocating an array *significantly* boosts performance when dealing with
	    // `arguments` objects on v8. For a summary, see:
	    // https://github.com/petkaantonov/bluebird/wiki/Optimization-killers#32-leaking-arguments


	    var results = new Array(max$1(collection.length - 2, 0));

	    for (var i = 1; i < collection.length; i += 1) {
	      results[i - 1] = collection[i];
	    }

	    return results;
	  };
	  /*
	   * Exports.
	   */


	  var rest_1 = rest;

	  /*
	   * Module dependencies.
	   */


	  var has$2 = Object.prototype.hasOwnProperty;
	  var objToString$1 = Object.prototype.toString;
	  /**
	   * Returns `true` if a value is an object, otherwise `false`.
	   *
	   * @name isObject
	   * @api private
	   * @param {*} val The value to test.
	   * @return {boolean}
	   */
	  // TODO: Move to a library

	  var isObject = function isObject(value) {
	    return Boolean(value) && _typeof(value) === 'object';
	  };
	  /**
	   * Returns `true` if a value is a plain object, otherwise `false`.
	   *
	   * @name isPlainObject
	   * @api private
	   * @param {*} val The value to test.
	   * @return {boolean}
	   */
	  // TODO: Move to a library


	  var isPlainObject = function isPlainObject(value) {
	    return Boolean(value) && objToString$1.call(value) === '[object Object]';
	  };
	  /**
	   * Assigns a key-value pair to a target object when the value assigned is owned,
	   * and where target[key] is undefined.
	   *
	   * @name shallowCombiner
	   * @api private
	   * @param {Object} target
	   * @param {Object} source
	   * @param {*} value
	   * @param {string} key
	   */


	  var shallowCombiner = function shallowCombiner(target, source, value, key) {
	    if (has$2.call(source, key) && target[key] === undefined) {
	      target[key] = value;
	    }

	    return source;
	  };
	  /**
	   * Assigns a key-value pair to a target object when the value assigned is owned,
	   * and where target[key] is undefined; also merges objects recursively.
	   *
	   * @name deepCombiner
	   * @api private
	   * @param {Object} target
	   * @param {Object} source
	   * @param {*} value
	   * @param {string} key
	   * @return {Object}
	   */


	  var deepCombiner = function deepCombiner(target, source, value, key) {
	    if (has$2.call(source, key)) {
	      if (isPlainObject(target[key]) && isPlainObject(value)) {
	        target[key] = defaultsDeep(target[key], value);
	      } else if (target[key] === undefined) {
	        target[key] = value;
	      }
	    }

	    return source;
	  };
	  /**
	   * TODO: Document
	   *
	   * @name defaultsWith
	   * @api private
	   * @param {Function} combiner
	   * @param {Object} target
	   * @param {...Object} sources
	   * @return {Object} Return the input `target`.
	   */


	  var defaultsWith = function defaultsWith(combiner, target
	  /*, ...sources */
	  ) {
	    if (!isObject(target)) {
	      return target;
	    }

	    combiner = combiner || shallowCombiner;
	    var sources = drop_1(2, arguments);

	    for (var i = 0; i < sources.length; i += 1) {
	      for (var key in sources[i]) {
	        combiner(target, sources[i], sources[i][key], key);
	      }
	    }

	    return target;
	  };
	  /**
	   * Copies owned, enumerable properties from a source object(s) to a target
	   * object when the value of that property on the source object is `undefined`.
	   * Recurses on objects.
	   *
	   * @name defaultsDeep
	   * @api public
	   * @param {Object} target
	   * @param {...Object} sources
	   * @return {Object} The input `target`.
	   */


	  var defaultsDeep = function defaultsDeep(target
	  /*, sources */
	  ) {
	    // TODO: Replace with `partial` call?
	    return defaultsWith.apply(null, [deepCombiner, target].concat(rest_1(arguments)));
	  };
	  /**
	   * Copies owned, enumerable properties from a source object(s) to a target
	   * object when the value of that property on the source object is `undefined`.
	   *
	   * @name defaults
	   * @api public
	   * @param {Object} target
	   * @param {...Object} sources
	   * @return {Object}
	   * @example
	   * var a = { a: 1 };
	   * var b = { a: 2, b: 2 };
	   *
	   * defaults(a, b);
	   * console.log(a); //=> { a: 1, b: 2 }
	   */


	  var defaults = function defaults(target
	  /*, ...sources */
	  ) {
	    // TODO: Replace with `partial` call?
	    return defaultsWith.apply(null, [null, target].concat(rest_1(arguments)));
	  };
	  /*
	   * Exports.
	   */


	  var defaults_1 = defaults;
	  var deep = defaultsDeep;
	  defaults_1.deep = deep;

	  var json3 = createCommonjsModule(function (module, exports) {
	    (function () {
	      // Detect the `define` function exposed by asynchronous module loaders. The
	      // strict `define` check is necessary for compatibility with `r.js`.
	      var isLoader = typeof undefined === "function" ; // A set of types used to distinguish objects from primitives.

	      var objectTypes = {
	        "function": true,
	        "object": true
	      }; // Detect the `exports` object exposed by CommonJS implementations.

	      var freeExports = objectTypes['object'] && exports && !exports.nodeType && exports; // Use the `global` object exposed by Node (including Browserify via
	      // `insert-module-globals`), Narwhal, and Ringo as the default context,
	      // and the `window` object in browsers. Rhino exports a `global` function
	      // instead.

	      var root = objectTypes[typeof window === "undefined" ? "undefined" : _typeof(window)] && window || this,
	          freeGlobal = freeExports && objectTypes['object'] && module && !module.nodeType && _typeof(commonjsGlobal$1) == "object" && commonjsGlobal$1;

	      if (freeGlobal && (freeGlobal.global === freeGlobal || freeGlobal.window === freeGlobal || freeGlobal.self === freeGlobal)) {
	        root = freeGlobal;
	      } // Public: Initializes JSON 3 using the given `context` object, attaching the
	      // `stringify` and `parse` functions to the specified `exports` object.


	      function runInContext(context, exports) {
	        context || (context = root.Object());
	        exports || (exports = root.Object()); // Native constructor aliases.

	        var Number = context.Number || root.Number,
	            String = context.String || root.String,
	            Object = context.Object || root.Object,
	            Date = context.Date || root.Date,
	            SyntaxError = context.SyntaxError || root.SyntaxError,
	            TypeError = context.TypeError || root.TypeError,
	            Math = context.Math || root.Math,
	            nativeJSON = context.JSON || root.JSON; // Delegate to the native `stringify` and `parse` implementations.

	        if (_typeof(nativeJSON) == "object" && nativeJSON) {
	          exports.stringify = nativeJSON.stringify;
	          exports.parse = nativeJSON.parse;
	        } // Convenience aliases.


	        var objectProto = Object.prototype,
	            getClass = objectProto.toString,
	            isProperty = objectProto.hasOwnProperty,
	            undefined$1; // Internal: Contains `try...catch` logic used by other functions.
	        // This prevents other functions from being deoptimized.

	        function attempt(func, errorFunc) {
	          try {
	            func();
	          } catch (exception) {
	            if (errorFunc) {
	              errorFunc();
	            }
	          }
	        } // Test the `Date#getUTC*` methods. Based on work by @Yaffle.


	        var isExtended = new Date(-3509827334573292);
	        attempt(function () {
	          // The `getUTCFullYear`, `Month`, and `Date` methods return nonsensical
	          // results for certain dates in Opera >= 10.53.
	          isExtended = isExtended.getUTCFullYear() == -109252 && isExtended.getUTCMonth() === 0 && isExtended.getUTCDate() === 1 && isExtended.getUTCHours() == 10 && isExtended.getUTCMinutes() == 37 && isExtended.getUTCSeconds() == 6 && isExtended.getUTCMilliseconds() == 708;
	        }); // Internal: Determines whether the native `JSON.stringify` and `parse`
	        // implementations are spec-compliant. Based on work by Ken Snyder.

	        function has(name) {
	          if (has[name] != null) {
	            // Return cached feature test result.
	            return has[name];
	          }

	          var isSupported;

	          if (name == "bug-string-char-index") {
	            // IE <= 7 doesn't support accessing string characters using square
	            // bracket notation. IE 8 only supports this for primitives.
	            isSupported = "a"[0] != "a";
	          } else if (name == "json") {
	            // Indicates whether both `JSON.stringify` and `JSON.parse` are
	            // supported.
	            isSupported = has("json-stringify") && has("date-serialization") && has("json-parse");
	          } else if (name == "date-serialization") {
	            // Indicates whether `Date`s can be serialized accurately by `JSON.stringify`.
	            isSupported = has("json-stringify") && isExtended;

	            if (isSupported) {
	              var stringify = exports.stringify;
	              attempt(function () {
	                isSupported = // JSON 2, Prototype <= 1.7, and older WebKit builds incorrectly
	                // serialize extended years.
	                stringify(new Date(-8.64e15)) == '"-271821-04-20T00:00:00.000Z"' && // The milliseconds are optional in ES 5, but required in 5.1.
	                stringify(new Date(8.64e15)) == '"+275760-09-13T00:00:00.000Z"' && // Firefox <= 11.0 incorrectly serializes years prior to 0 as negative
	                // four-digit years instead of six-digit years. Credits: @Yaffle.
	                stringify(new Date(-621987552e5)) == '"-000001-01-01T00:00:00.000Z"' && // Safari <= 5.1.5 and Opera >= 10.53 incorrectly serialize millisecond
	                // values less than 1000. Credits: @Yaffle.
	                stringify(new Date(-1)) == '"1969-12-31T23:59:59.999Z"';
	              });
	            }
	          } else {
	            var value,
	                serialized = "{\"a\":[1,true,false,null,\"\\u0000\\b\\n\\f\\r\\t\"]}"; // Test `JSON.stringify`.

	            if (name == "json-stringify") {
	              var stringify = exports.stringify,
	                  stringifySupported = typeof stringify == "function";

	              if (stringifySupported) {
	                // A test function object with a custom `toJSON` method.
	                (value = function value() {
	                  return 1;
	                }).toJSON = value;
	                attempt(function () {
	                  stringifySupported = // Firefox 3.1b1 and b2 serialize string, number, and boolean
	                  // primitives as object literals.
	                  stringify(0) === "0" && // FF 3.1b1, b2, and JSON 2 serialize wrapped primitives as object
	                  // literals.
	                  stringify(new Number()) === "0" && stringify(new String()) == '""' && // FF 3.1b1, 2 throw an error if the value is `null`, `undefined`, or
	                  // does not define a canonical JSON representation (this applies to
	                  // objects with `toJSON` properties as well, *unless* they are nested
	                  // within an object or array).
	                  stringify(getClass) === undefined$1 && // IE 8 serializes `undefined` as `"undefined"`. Safari <= 5.1.7 and
	                  // FF 3.1b3 pass this test.
	                  stringify(undefined$1) === undefined$1 && // Safari <= 5.1.7 and FF 3.1b3 throw `Error`s and `TypeError`s,
	                  // respectively, if the value is omitted entirely.
	                  stringify() === undefined$1 && // FF 3.1b1, 2 throw an error if the given value is not a number,
	                  // string, array, object, Boolean, or `null` literal. This applies to
	                  // objects with custom `toJSON` methods as well, unless they are nested
	                  // inside object or array literals. YUI 3.0.0b1 ignores custom `toJSON`
	                  // methods entirely.
	                  stringify(value) === "1" && stringify([value]) == "[1]" && // Prototype <= 1.6.1 serializes `[undefined]` as `"[]"` instead of
	                  // `"[null]"`.
	                  stringify([undefined$1]) == "[null]" && // YUI 3.0.0b1 fails to serialize `null` literals.
	                  stringify(null) == "null" && // FF 3.1b1, 2 halts serialization if an array contains a function:
	                  // `[1, true, getClass, 1]` serializes as "[1,true,],". FF 3.1b3
	                  // elides non-JSON values from objects and arrays, unless they
	                  // define custom `toJSON` methods.
	                  stringify([undefined$1, getClass, null]) == "[null,null,null]" && // Simple serialization test. FF 3.1b1 uses Unicode escape sequences
	                  // where character escape codes are expected (e.g., `\b` => `\u0008`).
	                  stringify({
	                    "a": [value, true, false, null, "\x00\b\n\f\r\t"]
	                  }) == serialized && // FF 3.1b1 and b2 ignore the `filter` and `width` arguments.
	                  stringify(null, value) === "1" && stringify([1, 2], null, 1) == "[\n 1,\n 2\n]";
	                }, function () {
	                  stringifySupported = false;
	                });
	              }

	              isSupported = stringifySupported;
	            } // Test `JSON.parse`.


	            if (name == "json-parse") {
	              var parse = exports.parse,
	                  parseSupported;

	              if (typeof parse == "function") {
	                attempt(function () {
	                  // FF 3.1b1, b2 will throw an exception if a bare literal is provided.
	                  // Conforming implementations should also coerce the initial argument to
	                  // a string prior to parsing.
	                  if (parse("0") === 0 && !parse(false)) {
	                    // Simple parsing test.
	                    value = parse(serialized);
	                    parseSupported = value["a"].length == 5 && value["a"][0] === 1;

	                    if (parseSupported) {
	                      attempt(function () {
	                        // Safari <= 5.1.2 and FF 3.1b1 allow unescaped tabs in strings.
	                        parseSupported = !parse('"\t"');
	                      });

	                      if (parseSupported) {
	                        attempt(function () {
	                          // FF 4.0 and 4.0.1 allow leading `+` signs and leading
	                          // decimal points. FF 4.0, 4.0.1, and IE 9-10 also allow
	                          // certain octal literals.
	                          parseSupported = parse("01") !== 1;
	                        });
	                      }

	                      if (parseSupported) {
	                        attempt(function () {
	                          // FF 4.0, 4.0.1, and Rhino 1.7R3-R4 allow trailing decimal
	                          // points. These environments, along with FF 3.1b1 and 2,
	                          // also allow trailing commas in JSON objects and arrays.
	                          parseSupported = parse("1.") !== 1;
	                        });
	                      }
	                    }
	                  }
	                }, function () {
	                  parseSupported = false;
	                });
	              }

	              isSupported = parseSupported;
	            }
	          }

	          return has[name] = !!isSupported;
	        }

	        has["bug-string-char-index"] = has["date-serialization"] = has["json"] = has["json-stringify"] = has["json-parse"] = null;

	        if (!has("json")) {
	          // Common `[[Class]]` name aliases.
	          var functionClass = "[object Function]",
	              dateClass = "[object Date]",
	              numberClass = "[object Number]",
	              stringClass = "[object String]",
	              arrayClass = "[object Array]",
	              booleanClass = "[object Boolean]"; // Detect incomplete support for accessing string characters by index.

	          var charIndexBuggy = has("bug-string-char-index"); // Internal: Normalizes the `for...in` iteration algorithm across
	          // environments. Each enumerated key is yielded to a `callback` function.

	          var _forOwn = function forOwn(object, callback) {
	            var size = 0,
	                Properties,
	                dontEnums,
	                property; // Tests for bugs in the current environment's `for...in` algorithm. The
	            // `valueOf` property inherits the non-enumerable flag from
	            // `Object.prototype` in older versions of IE, Netscape, and Mozilla.

	            (Properties = function Properties() {
	              this.valueOf = 0;
	            }).prototype.valueOf = 0; // Iterate over a new instance of the `Properties` class.

	            dontEnums = new Properties();

	            for (property in dontEnums) {
	              // Ignore all properties inherited from `Object.prototype`.
	              if (isProperty.call(dontEnums, property)) {
	                size++;
	              }
	            }

	            Properties = dontEnums = null; // Normalize the iteration algorithm.

	            if (!size) {
	              // A list of non-enumerable properties inherited from `Object.prototype`.
	              dontEnums = ["valueOf", "toString", "toLocaleString", "propertyIsEnumerable", "isPrototypeOf", "hasOwnProperty", "constructor"]; // IE <= 8, Mozilla 1.0, and Netscape 6.2 ignore shadowed non-enumerable
	              // properties.

	              _forOwn = function forOwn(object, callback) {
	                var isFunction = getClass.call(object) == functionClass,
	                    property,
	                    length;
	                var hasProperty = !isFunction && typeof object.constructor != "function" && objectTypes[_typeof(object.hasOwnProperty)] && object.hasOwnProperty || isProperty;

	                for (property in object) {
	                  // Gecko <= 1.0 enumerates the `prototype` property of functions under
	                  // certain conditions; IE does not.
	                  if (!(isFunction && property == "prototype") && hasProperty.call(object, property)) {
	                    callback(property);
	                  }
	                } // Manually invoke the callback for each non-enumerable property.


	                for (length = dontEnums.length; property = dontEnums[--length];) {
	                  if (hasProperty.call(object, property)) {
	                    callback(property);
	                  }
	                }
	              };
	            } else {
	              // No bugs detected; use the standard `for...in` algorithm.
	              _forOwn = function forOwn(object, callback) {
	                var isFunction = getClass.call(object) == functionClass,
	                    property,
	                    isConstructor;

	                for (property in object) {
	                  if (!(isFunction && property == "prototype") && isProperty.call(object, property) && !(isConstructor = property === "constructor")) {
	                    callback(property);
	                  }
	                } // Manually invoke the callback for the `constructor` property due to
	                // cross-environment inconsistencies.


	                if (isConstructor || isProperty.call(object, property = "constructor")) {
	                  callback(property);
	                }
	              };
	            }

	            return _forOwn(object, callback);
	          }; // Public: Serializes a JavaScript `value` as a JSON string. The optional
	          // `filter` argument may specify either a function that alters how object and
	          // array members are serialized, or an array of strings and numbers that
	          // indicates which properties should be serialized. The optional `width`
	          // argument may be either a string or number that specifies the indentation
	          // level of the output.


	          if (!has("json-stringify") && !has("date-serialization")) {
	            // Internal: A map of control characters and their escaped equivalents.
	            var Escapes = {
	              92: "\\\\",
	              34: '\\"',
	              8: "\\b",
	              12: "\\f",
	              10: "\\n",
	              13: "\\r",
	              9: "\\t"
	            }; // Internal: Converts `value` into a zero-padded string such that its
	            // length is at least equal to `width`. The `width` must be <= 6.

	            var leadingZeroes = "000000";

	            var toPaddedString = function toPaddedString(width, value) {
	              // The `|| 0` expression is necessary to work around a bug in
	              // Opera <= 7.54u2 where `0 == -0`, but `String(-0) !== "0"`.
	              return (leadingZeroes + (value || 0)).slice(-width);
	            }; // Internal: Serializes a date object.


	            var _serializeDate = function serializeDate(value) {
	              var getData, year, month, date, time, hours, minutes, seconds, milliseconds; // Define additional utility methods if the `Date` methods are buggy.

	              if (!isExtended) {
	                var floor = Math.floor; // A mapping between the months of the year and the number of days between
	                // January 1st and the first of the respective month.

	                var Months = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334]; // Internal: Calculates the number of days between the Unix epoch and the
	                // first day of the given month.

	                var getDay = function getDay(year, month) {
	                  return Months[month] + 365 * (year - 1970) + floor((year - 1969 + (month = +(month > 1))) / 4) - floor((year - 1901 + month) / 100) + floor((year - 1601 + month) / 400);
	                };

	                getData = function getData(value) {
	                  // Manually compute the year, month, date, hours, minutes,
	                  // seconds, and milliseconds if the `getUTC*` methods are
	                  // buggy. Adapted from @Yaffle's `date-shim` project.
	                  date = floor(value / 864e5);

	                  for (year = floor(date / 365.2425) + 1970 - 1; getDay(year + 1, 0) <= date; year++) {
	                  }

	                  for (month = floor((date - getDay(year, 0)) / 30.42); getDay(year, month + 1) <= date; month++) {
	                  }

	                  date = 1 + date - getDay(year, month); // The `time` value specifies the time within the day (see ES
	                  // 5.1 section 15.9.1.2). The formula `(A % B + B) % B` is used
	                  // to compute `A modulo B`, as the `%` operator does not
	                  // correspond to the `modulo` operation for negative numbers.

	                  time = (value % 864e5 + 864e5) % 864e5; // The hours, minutes, seconds, and milliseconds are obtained by
	                  // decomposing the time within the day. See section 15.9.1.10.

	                  hours = floor(time / 36e5) % 24;
	                  minutes = floor(time / 6e4) % 60;
	                  seconds = floor(time / 1e3) % 60;
	                  milliseconds = time % 1e3;
	                };
	              } else {
	                getData = function getData(value) {
	                  year = value.getUTCFullYear();
	                  month = value.getUTCMonth();
	                  date = value.getUTCDate();
	                  hours = value.getUTCHours();
	                  minutes = value.getUTCMinutes();
	                  seconds = value.getUTCSeconds();
	                  milliseconds = value.getUTCMilliseconds();
	                };
	              }

	              _serializeDate = function serializeDate(value) {
	                if (value > -1 / 0 && value < 1 / 0) {
	                  // Dates are serialized according to the `Date#toJSON` method
	                  // specified in ES 5.1 section 15.9.5.44. See section 15.9.1.15
	                  // for the ISO 8601 date time string format.
	                  getData(value); // Serialize extended years correctly.

	                  value = (year <= 0 || year >= 1e4 ? (year < 0 ? "-" : "+") + toPaddedString(6, year < 0 ? -year : year) : toPaddedString(4, year)) + "-" + toPaddedString(2, month + 1) + "-" + toPaddedString(2, date) + // Months, dates, hours, minutes, and seconds should have two
	                  // digits; milliseconds should have three.
	                  "T" + toPaddedString(2, hours) + ":" + toPaddedString(2, minutes) + ":" + toPaddedString(2, seconds) + // Milliseconds are optional in ES 5.0, but required in 5.1.
	                  "." + toPaddedString(3, milliseconds) + "Z";
	                  year = month = date = hours = minutes = seconds = milliseconds = null;
	                } else {
	                  value = null;
	                }

	                return value;
	              };

	              return _serializeDate(value);
	            }; // For environments with `JSON.stringify` but buggy date serialization,
	            // we override the native `Date#toJSON` implementation with a
	            // spec-compliant one.


	            if (has("json-stringify") && !has("date-serialization")) {
	              // Internal: the `Date#toJSON` implementation used to override the native one.
	              var dateToJSON = function dateToJSON(key) {
	                return _serializeDate(this);
	              }; // Public: `JSON.stringify`. See ES 5.1 section 15.12.3.


	              var nativeStringify = exports.stringify;

	              exports.stringify = function (source, filter, width) {
	                var nativeToJSON = Date.prototype.toJSON;
	                Date.prototype.toJSON = dateToJSON;
	                var result = nativeStringify(source, filter, width);
	                Date.prototype.toJSON = nativeToJSON;
	                return result;
	              };
	            } else {
	              // Internal: Double-quotes a string `value`, replacing all ASCII control
	              // characters (characters with code unit values between 0 and 31) with
	              // their escaped equivalents. This is an implementation of the
	              // `Quote(value)` operation defined in ES 5.1 section 15.12.3.
	              var unicodePrefix = "\\u00";

	              var escapeChar = function escapeChar(character) {
	                var charCode = character.charCodeAt(0),
	                    escaped = Escapes[charCode];

	                if (escaped) {
	                  return escaped;
	                }

	                return unicodePrefix + toPaddedString(2, charCode.toString(16));
	              };

	              var reEscape = /[\x00-\x1f\x22\x5c]/g;

	              var quote = function quote(value) {
	                reEscape.lastIndex = 0;
	                return '"' + (reEscape.test(value) ? value.replace(reEscape, escapeChar) : value) + '"';
	              }; // Internal: Recursively serializes an object. Implements the
	              // `Str(key, holder)`, `JO(value)`, and `JA(value)` operations.


	              var serialize = function serialize(property, object, callback, properties, whitespace, indentation, stack) {
	                var value, type, className, results, element, index, length, prefix, result;
	                attempt(function () {
	                  // Necessary for host object support.
	                  value = object[property];
	                });

	                if (_typeof(value) == "object" && value) {
	                  if (value.getUTCFullYear && getClass.call(value) == dateClass && value.toJSON === Date.prototype.toJSON) {
	                    value = _serializeDate(value);
	                  } else if (typeof value.toJSON == "function") {
	                    value = value.toJSON(property);
	                  }
	                }

	                if (callback) {
	                  // If a replacement function was provided, call it to obtain the value
	                  // for serialization.
	                  value = callback.call(object, property, value);
	                } // Exit early if value is `undefined` or `null`.


	                if (value == undefined$1) {
	                  return value === undefined$1 ? value : "null";
	                }

	                type = _typeof(value); // Only call `getClass` if the value is an object.

	                if (type == "object") {
	                  className = getClass.call(value);
	                }

	                switch (className || type) {
	                  case "boolean":
	                  case booleanClass:
	                    // Booleans are represented literally.
	                    return "" + value;

	                  case "number":
	                  case numberClass:
	                    // JSON numbers must be finite. `Infinity` and `NaN` are serialized as
	                    // `"null"`.
	                    return value > -1 / 0 && value < 1 / 0 ? "" + value : "null";

	                  case "string":
	                  case stringClass:
	                    // Strings are double-quoted and escaped.
	                    return quote("" + value);
	                } // Recursively serialize objects and arrays.


	                if (_typeof(value) == "object") {
	                  // Check for cyclic structures. This is a linear search; performance
	                  // is inversely proportional to the number of unique nested objects.
	                  for (length = stack.length; length--;) {
	                    if (stack[length] === value) {
	                      // Cyclic structures cannot be serialized by `JSON.stringify`.
	                      throw TypeError();
	                    }
	                  } // Add the object to the stack of traversed objects.


	                  stack.push(value);
	                  results = []; // Save the current indentation level and indent one additional level.

	                  prefix = indentation;
	                  indentation += whitespace;

	                  if (className == arrayClass) {
	                    // Recursively serialize array elements.
	                    for (index = 0, length = value.length; index < length; index++) {
	                      element = serialize(index, value, callback, properties, whitespace, indentation, stack);
	                      results.push(element === undefined$1 ? "null" : element);
	                    }

	                    result = results.length ? whitespace ? "[\n" + indentation + results.join(",\n" + indentation) + "\n" + prefix + "]" : "[" + results.join(",") + "]" : "[]";
	                  } else {
	                    // Recursively serialize object members. Members are selected from
	                    // either a user-specified list of property names, or the object
	                    // itself.
	                    _forOwn(properties || value, function (property) {
	                      var element = serialize(property, value, callback, properties, whitespace, indentation, stack);

	                      if (element !== undefined$1) {
	                        // According to ES 5.1 section 15.12.3: "If `gap` {whitespace}
	                        // is not the empty string, let `member` {quote(property) + ":"}
	                        // be the concatenation of `member` and the `space` character."
	                        // The "`space` character" refers to the literal space
	                        // character, not the `space` {width} argument provided to
	                        // `JSON.stringify`.
	                        results.push(quote(property) + ":" + (whitespace ? " " : "") + element);
	                      }
	                    });

	                    result = results.length ? whitespace ? "{\n" + indentation + results.join(",\n" + indentation) + "\n" + prefix + "}" : "{" + results.join(",") + "}" : "{}";
	                  } // Remove the object from the traversed object stack.


	                  stack.pop();
	                  return result;
	                }
	              }; // Public: `JSON.stringify`. See ES 5.1 section 15.12.3.


	              exports.stringify = function (source, filter, width) {
	                var whitespace, callback, properties, className;

	                if (objectTypes[_typeof(filter)] && filter) {
	                  className = getClass.call(filter);

	                  if (className == functionClass) {
	                    callback = filter;
	                  } else if (className == arrayClass) {
	                    // Convert the property names array into a makeshift set.
	                    properties = {};

	                    for (var index = 0, length = filter.length, value; index < length;) {
	                      value = filter[index++];
	                      className = getClass.call(value);

	                      if (className == "[object String]" || className == "[object Number]") {
	                        properties[value] = 1;
	                      }
	                    }
	                  }
	                }

	                if (width) {
	                  className = getClass.call(width);

	                  if (className == numberClass) {
	                    // Convert the `width` to an integer and create a string containing
	                    // `width` number of space characters.
	                    if ((width -= width % 1) > 0) {
	                      if (width > 10) {
	                        width = 10;
	                      }

	                      for (whitespace = ""; whitespace.length < width;) {
	                        whitespace += " ";
	                      }
	                    }
	                  } else if (className == stringClass) {
	                    whitespace = width.length <= 10 ? width : width.slice(0, 10);
	                  }
	                } // Opera <= 7.54u2 discards the values associated with empty string keys
	                // (`""`) only if they are used directly within an object member list
	                // (e.g., `!("" in { "": 1})`).


	                return serialize("", (value = {}, value[""] = source, value), callback, properties, whitespace, "", []);
	              };
	            }
	          } // Public: Parses a JSON source string.


	          if (!has("json-parse")) {
	            var fromCharCode = String.fromCharCode; // Internal: A map of escaped control characters and their unescaped
	            // equivalents.

	            var Unescapes = {
	              92: "\\",
	              34: '"',
	              47: "/",
	              98: "\b",
	              116: "\t",
	              110: "\n",
	              102: "\f",
	              114: "\r"
	            }; // Internal: Stores the parser state.

	            var Index, Source; // Internal: Resets the parser state and throws a `SyntaxError`.

	            var abort = function abort() {
	              Index = Source = null;
	              throw SyntaxError();
	            }; // Internal: Returns the next token, or `"$"` if the parser has reached
	            // the end of the source string. A token may be a string, number, `null`
	            // literal, or Boolean literal.


	            var lex = function lex() {
	              var source = Source,
	                  length = source.length,
	                  value,
	                  begin,
	                  position,
	                  isSigned,
	                  charCode;

	              while (Index < length) {
	                charCode = source.charCodeAt(Index);

	                switch (charCode) {
	                  case 9:
	                  case 10:
	                  case 13:
	                  case 32:
	                    // Skip whitespace tokens, including tabs, carriage returns, line
	                    // feeds, and space characters.
	                    Index++;
	                    break;

	                  case 123:
	                  case 125:
	                  case 91:
	                  case 93:
	                  case 58:
	                  case 44:
	                    // Parse a punctuator token (`{`, `}`, `[`, `]`, `:`, or `,`) at
	                    // the current position.
	                    value = charIndexBuggy ? source.charAt(Index) : source[Index];
	                    Index++;
	                    return value;

	                  case 34:
	                    // `"` delimits a JSON string; advance to the next character and
	                    // begin parsing the string. String tokens are prefixed with the
	                    // sentinel `@` character to distinguish them from punctuators and
	                    // end-of-string tokens.
	                    for (value = "@", Index++; Index < length;) {
	                      charCode = source.charCodeAt(Index);

	                      if (charCode < 32) {
	                        // Unescaped ASCII control characters (those with a code unit
	                        // less than the space character) are not permitted.
	                        abort();
	                      } else if (charCode == 92) {
	                        // A reverse solidus (`\`) marks the beginning of an escaped
	                        // control character (including `"`, `\`, and `/`) or Unicode
	                        // escape sequence.
	                        charCode = source.charCodeAt(++Index);

	                        switch (charCode) {
	                          case 92:
	                          case 34:
	                          case 47:
	                          case 98:
	                          case 116:
	                          case 110:
	                          case 102:
	                          case 114:
	                            // Revive escaped control characters.
	                            value += Unescapes[charCode];
	                            Index++;
	                            break;

	                          case 117:
	                            // `\u` marks the beginning of a Unicode escape sequence.
	                            // Advance to the first character and validate the
	                            // four-digit code point.
	                            begin = ++Index;

	                            for (position = Index + 4; Index < position; Index++) {
	                              charCode = source.charCodeAt(Index); // A valid sequence comprises four hexdigits (case-
	                              // insensitive) that form a single hexadecimal value.

	                              if (!(charCode >= 48 && charCode <= 57 || charCode >= 97 && charCode <= 102 || charCode >= 65 && charCode <= 70)) {
	                                // Invalid Unicode escape sequence.
	                                abort();
	                              }
	                            } // Revive the escaped character.


	                            value += fromCharCode("0x" + source.slice(begin, Index));
	                            break;

	                          default:
	                            // Invalid escape sequence.
	                            abort();
	                        }
	                      } else {
	                        if (charCode == 34) {
	                          // An unescaped double-quote character marks the end of the
	                          // string.
	                          break;
	                        }

	                        charCode = source.charCodeAt(Index);
	                        begin = Index; // Optimize for the common case where a string is valid.

	                        while (charCode >= 32 && charCode != 92 && charCode != 34) {
	                          charCode = source.charCodeAt(++Index);
	                        } // Append the string as-is.


	                        value += source.slice(begin, Index);
	                      }
	                    }

	                    if (source.charCodeAt(Index) == 34) {
	                      // Advance to the next character and return the revived string.
	                      Index++;
	                      return value;
	                    } // Unterminated string.


	                    abort();

	                  default:
	                    // Parse numbers and literals.
	                    begin = Index; // Advance past the negative sign, if one is specified.

	                    if (charCode == 45) {
	                      isSigned = true;
	                      charCode = source.charCodeAt(++Index);
	                    } // Parse an integer or floating-point value.


	                    if (charCode >= 48 && charCode <= 57) {
	                      // Leading zeroes are interpreted as octal literals.
	                      if (charCode == 48 && (charCode = source.charCodeAt(Index + 1), charCode >= 48 && charCode <= 57)) {
	                        // Illegal octal literal.
	                        abort();
	                      }

	                      isSigned = false; // Parse the integer component.

	                      for (; Index < length && (charCode = source.charCodeAt(Index), charCode >= 48 && charCode <= 57); Index++) {
	                      } // Floats cannot contain a leading decimal point; however, this
	                      // case is already accounted for by the parser.


	                      if (source.charCodeAt(Index) == 46) {
	                        position = ++Index; // Parse the decimal component.

	                        for (; position < length; position++) {
	                          charCode = source.charCodeAt(position);

	                          if (charCode < 48 || charCode > 57) {
	                            break;
	                          }
	                        }

	                        if (position == Index) {
	                          // Illegal trailing decimal.
	                          abort();
	                        }

	                        Index = position;
	                      } // Parse exponents. The `e` denoting the exponent is
	                      // case-insensitive.


	                      charCode = source.charCodeAt(Index);

	                      if (charCode == 101 || charCode == 69) {
	                        charCode = source.charCodeAt(++Index); // Skip past the sign following the exponent, if one is
	                        // specified.

	                        if (charCode == 43 || charCode == 45) {
	                          Index++;
	                        } // Parse the exponential component.


	                        for (position = Index; position < length; position++) {
	                          charCode = source.charCodeAt(position);

	                          if (charCode < 48 || charCode > 57) {
	                            break;
	                          }
	                        }

	                        if (position == Index) {
	                          // Illegal empty exponent.
	                          abort();
	                        }

	                        Index = position;
	                      } // Coerce the parsed value to a JavaScript number.


	                      return +source.slice(begin, Index);
	                    } // A negative sign may only precede numbers.


	                    if (isSigned) {
	                      abort();
	                    } // `true`, `false`, and `null` literals.


	                    var temp = source.slice(Index, Index + 4);

	                    if (temp == "true") {
	                      Index += 4;
	                      return true;
	                    } else if (temp == "fals" && source.charCodeAt(Index + 4) == 101) {
	                      Index += 5;
	                      return false;
	                    } else if (temp == "null") {
	                      Index += 4;
	                      return null;
	                    } // Unrecognized token.


	                    abort();
	                }
	              } // Return the sentinel `$` character if the parser has reached the end
	              // of the source string.


	              return "$";
	            }; // Internal: Parses a JSON `value` token.


	            var get = function get(value) {
	              var results, hasMembers;

	              if (value == "$") {
	                // Unexpected end of input.
	                abort();
	              }

	              if (typeof value == "string") {
	                if ((charIndexBuggy ? value.charAt(0) : value[0]) == "@") {
	                  // Remove the sentinel `@` character.
	                  return value.slice(1);
	                } // Parse object and array literals.


	                if (value == "[") {
	                  // Parses a JSON array, returning a new JavaScript array.
	                  results = [];

	                  for (;;) {
	                    value = lex(); // A closing square bracket marks the end of the array literal.

	                    if (value == "]") {
	                      break;
	                    } // If the array literal contains elements, the current token
	                    // should be a comma separating the previous element from the
	                    // next.


	                    if (hasMembers) {
	                      if (value == ",") {
	                        value = lex();

	                        if (value == "]") {
	                          // Unexpected trailing `,` in array literal.
	                          abort();
	                        }
	                      } else {
	                        // A `,` must separate each array element.
	                        abort();
	                      }
	                    } else {
	                      hasMembers = true;
	                    } // Elisions and leading commas are not permitted.


	                    if (value == ",") {
	                      abort();
	                    }

	                    results.push(get(value));
	                  }

	                  return results;
	                } else if (value == "{") {
	                  // Parses a JSON object, returning a new JavaScript object.
	                  results = {};

	                  for (;;) {
	                    value = lex(); // A closing curly brace marks the end of the object literal.

	                    if (value == "}") {
	                      break;
	                    } // If the object literal contains members, the current token
	                    // should be a comma separator.


	                    if (hasMembers) {
	                      if (value == ",") {
	                        value = lex();

	                        if (value == "}") {
	                          // Unexpected trailing `,` in object literal.
	                          abort();
	                        }
	                      } else {
	                        // A `,` must separate each object member.
	                        abort();
	                      }
	                    } else {
	                      hasMembers = true;
	                    } // Leading commas are not permitted, object property names must be
	                    // double-quoted strings, and a `:` must separate each property
	                    // name and value.


	                    if (value == "," || typeof value != "string" || (charIndexBuggy ? value.charAt(0) : value[0]) != "@" || lex() != ":") {
	                      abort();
	                    }

	                    results[value.slice(1)] = get(lex());
	                  }

	                  return results;
	                } // Unexpected token encountered.


	                abort();
	              }

	              return value;
	            }; // Internal: Updates a traversed object member.


	            var update = function update(source, property, callback) {
	              var element = walk(source, property, callback);

	              if (element === undefined$1) {
	                delete source[property];
	              } else {
	                source[property] = element;
	              }
	            }; // Internal: Recursively traverses a parsed JSON object, invoking the
	            // `callback` function for each value. This is an implementation of the
	            // `Walk(holder, name)` operation defined in ES 5.1 section 15.12.2.


	            var walk = function walk(source, property, callback) {
	              var value = source[property],
	                  length;

	              if (_typeof(value) == "object" && value) {
	                // `forOwn` can't be used to traverse an array in Opera <= 8.54
	                // because its `Object#hasOwnProperty` implementation returns `false`
	                // for array indices (e.g., `![1, 2, 3].hasOwnProperty("0")`).
	                if (getClass.call(value) == arrayClass) {
	                  for (length = value.length; length--;) {
	                    update(getClass, _forOwn, value, length, callback);
	                  }
	                } else {
	                  _forOwn(value, function (property) {
	                    update(value, property, callback);
	                  });
	                }
	              }

	              return callback.call(source, property, value);
	            }; // Public: `JSON.parse`. See ES 5.1 section 15.12.2.


	            exports.parse = function (source, callback) {
	              var result, value;
	              Index = 0;
	              Source = "" + source;
	              result = get(lex()); // If a JSON string contains multiple tokens, it is invalid.

	              if (lex() != "$") {
	                abort();
	              } // Reset the parser state.


	              Index = Source = null;
	              return callback && getClass.call(callback) == functionClass ? walk((value = {}, value[""] = result, value), "", callback) : result;
	            };
	          }
	        }

	        exports.runInContext = runInContext;
	        return exports;
	      }

	      if (freeExports && !isLoader) {
	        // Export for CommonJS environments.
	        runInContext(root, freeExports);
	      } else {
	        // Export for web browsers and JavaScript engines.
	        var nativeJSON = root.JSON,
	            previousJSON = root.JSON3,
	            isRestored = false;
	        var JSON3 = runInContext(root, root.JSON3 = {
	          // Public: Restores the original value of the global `JSON` object and
	          // returns a reference to the `JSON3` object.
	          "noConflict": function noConflict() {
	            if (!isRestored) {
	              isRestored = true;
	              root.JSON = nativeJSON;
	              root.JSON3 = previousJSON;
	              nativeJSON = previousJSON = null;
	            }

	            return JSON3;
	          }
	        });
	        root.JSON = {
	          "parse": JSON3.parse,
	          "stringify": JSON3.stringify
	        };
	      } // Export for asynchronous module loaders.
	    }).call(commonjsGlobal$1);
	  });

	  var debug_1$1 = createCommonjsModule(function (module, exports) {
	    /**
	     * This is the common logic for both the Node.js and web browser
	     * implementations of `debug()`.
	     *
	     * Expose `debug()` as the module.
	     */
	    exports = module.exports = debug;
	    exports.coerce = coerce;
	    exports.disable = disable;
	    exports.enable = enable;
	    exports.enabled = enabled;
	    exports.humanize = ms;
	    /**
	     * The currently active debug mode names, and names to skip.
	     */

	    exports.names = [];
	    exports.skips = [];
	    /**
	     * Map of special "%n" handling functions, for the debug "format" argument.
	     *
	     * Valid key names are a single, lowercased letter, i.e. "n".
	     */

	    exports.formatters = {};
	    /**
	     * Previously assigned color.
	     */

	    var prevColor = 0;
	    /**
	     * Previous log timestamp.
	     */

	    var prevTime;
	    /**
	     * Select a color.
	     *
	     * @return {Number}
	     * @api private
	     */

	    function selectColor() {
	      return exports.colors[prevColor++ % exports.colors.length];
	    }
	    /**
	     * Create a debugger with the given `namespace`.
	     *
	     * @param {String} namespace
	     * @return {Function}
	     * @api public
	     */


	    function debug(namespace) {
	      // define the `disabled` version
	      function disabled() {}

	      disabled.enabled = false; // define the `enabled` version

	      function enabled() {
	        var self = enabled; // set `diff` timestamp

	        var curr = +new Date();
	        var ms = curr - (prevTime || curr);
	        self.diff = ms;
	        self.prev = prevTime;
	        self.curr = curr;
	        prevTime = curr; // add the `color` if not set

	        if (null == self.useColors) self.useColors = exports.useColors();
	        if (null == self.color && self.useColors) self.color = selectColor();
	        var args = Array.prototype.slice.call(arguments);
	        args[0] = exports.coerce(args[0]);

	        if ('string' !== typeof args[0]) {
	          // anything else let's inspect with %o
	          args = ['%o'].concat(args);
	        } // apply any `formatters` transformations


	        var index = 0;
	        args[0] = args[0].replace(/%([a-z%])/g, function (match, format) {
	          // if we encounter an escaped % then don't increase the array index
	          if (match === '%%') return match;
	          index++;
	          var formatter = exports.formatters[format];

	          if ('function' === typeof formatter) {
	            var val = args[index];
	            match = formatter.call(self, val); // now we need to remove `args[index]` since it's inlined in the `format`

	            args.splice(index, 1);
	            index--;
	          }

	          return match;
	        });

	        if ('function' === typeof exports.formatArgs) {
	          args = exports.formatArgs.apply(self, args);
	        }

	        var logFn = enabled.log || exports.log || console.log.bind(console);
	        logFn.apply(self, args);
	      }

	      enabled.enabled = true;
	      var fn = exports.enabled(namespace) ? enabled : disabled;
	      fn.namespace = namespace;
	      return fn;
	    }
	    /**
	     * Enables a debug mode by namespaces. This can include modes
	     * separated by a colon and wildcards.
	     *
	     * @param {String} namespaces
	     * @api public
	     */


	    function enable(namespaces) {
	      exports.save(namespaces);
	      var split = (namespaces || '').split(/[\s,]+/);
	      var len = split.length;

	      for (var i = 0; i < len; i++) {
	        if (!split[i]) continue; // ignore empty strings

	        namespaces = split[i].replace(/\*/g, '.*?');

	        if (namespaces[0] === '-') {
	          exports.skips.push(new RegExp('^' + namespaces.substr(1) + '$'));
	        } else {
	          exports.names.push(new RegExp('^' + namespaces + '$'));
	        }
	      }
	    }
	    /**
	     * Disable debug output.
	     *
	     * @api public
	     */


	    function disable() {
	      exports.enable('');
	    }
	    /**
	     * Returns true if the given mode name is enabled, false otherwise.
	     *
	     * @param {String} name
	     * @return {Boolean}
	     * @api public
	     */


	    function enabled(name) {
	      var i, len;

	      for (i = 0, len = exports.skips.length; i < len; i++) {
	        if (exports.skips[i].test(name)) {
	          return false;
	        }
	      }

	      for (i = 0, len = exports.names.length; i < len; i++) {
	        if (exports.names[i].test(name)) {
	          return true;
	        }
	      }

	      return false;
	    }
	    /**
	     * Coerce `val`.
	     *
	     * @param {Mixed} val
	     * @return {Mixed}
	     * @api private
	     */


	    function coerce(val) {
	      if (val instanceof Error) return val.stack || val.message;
	      return val;
	    }
	  });
	  var debug_2$1 = debug_1$1.coerce;
	  var debug_3$1 = debug_1$1.disable;
	  var debug_4$1 = debug_1$1.enable;
	  var debug_5$1 = debug_1$1.enabled;
	  var debug_6$1 = debug_1$1.humanize;
	  var debug_7$1 = debug_1$1.names;
	  var debug_8$1 = debug_1$1.skips;
	  var debug_9$1 = debug_1$1.formatters;

	  var browser$2 = createCommonjsModule(function (module, exports) {
	    /**
	     * This is the web browser implementation of `debug()`.
	     *
	     * Expose `debug()` as the module.
	     */
	    exports = module.exports = debug_1$1;
	    exports.log = log;
	    exports.formatArgs = formatArgs;
	    exports.save = save;
	    exports.load = load;
	    exports.useColors = useColors;
	    exports.storage = 'undefined' != typeof chrome && 'undefined' != typeof chrome.storage ? chrome.storage.local : localstorage();
	    /**
	     * Colors.
	     */

	    exports.colors = ['lightseagreen', 'forestgreen', 'goldenrod', 'dodgerblue', 'darkorchid', 'crimson'];
	    /**
	     * Currently only WebKit-based Web Inspectors, Firefox >= v31,
	     * and the Firebug extension (any Firefox version) are known
	     * to support "%c" CSS customizations.
	     *
	     * TODO: add a `localStorage` variable to explicitly enable/disable colors
	     */

	    function useColors() {
	      // is webkit? http://stackoverflow.com/a/16459606/376773
	      return 'WebkitAppearance' in document.documentElement.style || // is firebug? http://stackoverflow.com/a/398120/376773
	      window.console && (console.firebug || console.exception && console.table) || // is firefox >= v31?
	      // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
	      navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31;
	    }
	    /**
	     * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
	     */


	    exports.formatters.j = function (v) {
	      return JSON.stringify(v);
	    };
	    /**
	     * Colorize log arguments if enabled.
	     *
	     * @api public
	     */


	    function formatArgs() {
	      var args = arguments;
	      var useColors = this.useColors;
	      args[0] = (useColors ? '%c' : '') + this.namespace + (useColors ? ' %c' : ' ') + args[0] + (useColors ? '%c ' : ' ') + '+' + exports.humanize(this.diff);
	      if (!useColors) return args;
	      var c = 'color: ' + this.color;
	      args = [args[0], c, 'color: inherit'].concat(Array.prototype.slice.call(args, 1)); // the final "%c" is somewhat tricky, because there could be other
	      // arguments passed either before or after the %c, so we need to
	      // figure out the correct index to insert the CSS into

	      var index = 0;
	      var lastC = 0;
	      args[0].replace(/%[a-z%]/g, function (match) {
	        if ('%%' === match) return;
	        index++;

	        if ('%c' === match) {
	          // we only are interested in the *last* %c
	          // (the user may have provided their own)
	          lastC = index;
	        }
	      });
	      args.splice(lastC, 0, c);
	      return args;
	    }
	    /**
	     * Invokes `console.log()` when available.
	     * No-op when `console.log` is not a "function".
	     *
	     * @api public
	     */


	    function log() {
	      // this hackery is required for IE8/9, where
	      // the `console.log` function doesn't have 'apply'
	      return 'object' === (typeof console === "undefined" ? "undefined" : _typeof(console)) && console.log && Function.prototype.apply.call(console.log, console, arguments);
	    }
	    /**
	     * Save `namespaces`.
	     *
	     * @param {String} namespaces
	     * @api private
	     */


	    function save(namespaces) {
	      try {
	        if (null == namespaces) {
	          exports.storage.removeItem('debug');
	        } else {
	          exports.storage.debug = namespaces;
	        }
	      } catch (e) {}
	    }
	    /**
	     * Load `namespaces`.
	     *
	     * @return {String} returns the previously persisted debug modes
	     * @api private
	     */


	    function load() {
	      var r;

	      try {
	        r = exports.storage.debug;
	      } catch (e) {}

	      return r;
	    }
	    /**
	     * Enable namespaces listed in `localStorage.debug` initially.
	     */


	    exports.enable(load());
	    /**
	     * Localstorage attempts to return the localstorage.
	     *
	     * This is necessary because safari throws
	     * when a user disables cookies/localstorage
	     * and you attempt to access it.
	     *
	     * @return {LocalStorage}
	     * @api private
	     */

	    function localstorage() {
	      try {
	        return window.localStorage;
	      } catch (e) {}
	    }
	  });
	  var browser_1$1 = browser$2.log;
	  var browser_2$1 = browser$2.formatArgs;
	  var browser_3$1 = browser$2.save;
	  var browser_4$1 = browser$2.load;
	  var browser_5$1 = browser$2.useColors;
	  var browser_6$1 = browser$2.storage;
	  var browser_7$1 = browser$2.colors;

	  /**
	   * Module dependencies.
	   */

	  var debug$1 = browser$2('cookie');
	  /**
	   * Set or get cookie `name` with `value` and `options` object.
	   *
	   * @param {String} name
	   * @param {String} value
	   * @param {Object} options
	   * @return {Mixed}
	   * @api public
	   */

	  var componentCookie = function componentCookie(name, value, options) {
	    switch (arguments.length) {
	      case 3:
	      case 2:
	        return set$1(name, value, options);

	      case 1:
	        return get$1(name);

	      default:
	        return all$1();
	    }
	  };
	  /**
	   * Set cookie `name` to `value`.
	   *
	   * @param {String} name
	   * @param {String} value
	   * @param {Object} options
	   * @api private
	   */


	  function set$1(name, value, options) {
	    options = options || {};
	    var str = encode$2(name) + '=' + encode$2(value);
	    if (null == value) options.maxage = -1;

	    if (options.maxage) {
	      options.expires = new Date(+new Date() + options.maxage);
	    }

	    if (options.path) str += '; path=' + options.path;
	    if (options.domain) str += '; domain=' + options.domain;
	    if (options.expires) str += '; expires=' + options.expires.toUTCString();
	    if (options.secure) str += '; secure';
	    document.cookie = str;
	  }
	  /**
	   * Return all cookies.
	   *
	   * @return {Object}
	   * @api private
	   */


	  function all$1() {
	    var str;

	    try {
	      str = document.cookie;
	    } catch (err) {
	      if (typeof console !== 'undefined' && typeof console.error === 'function') {
	        console.error(err.stack || err);
	      }

	      return {};
	    }

	    return parse$4(str);
	  }
	  /**
	   * Get cookie `name`.
	   *
	   * @param {String} name
	   * @return {String}
	   * @api private
	   */


	  function get$1(name) {
	    return all$1()[name];
	  }
	  /**
	   * Parse cookie `str`.
	   *
	   * @param {String} str
	   * @return {Object}
	   * @api private
	   */


	  function parse$4(str) {
	    var obj = {};
	    var pairs = str.split(/ *; */);
	    var pair;
	    if ('' == pairs[0]) return obj;

	    for (var i = 0; i < pairs.length; ++i) {
	      pair = pairs[i].split('=');
	      obj[decode$2(pair[0])] = decode$2(pair[1]);
	    }

	    return obj;
	  }
	  /**
	   * Encode.
	   */


	  function encode$2(value) {
	    try {
	      return encodeURIComponent(value);
	    } catch (e) {
	      debug$1('error `encode(%o)` - %o', value, e);
	    }
	  }
	  /**
	   * Decode.
	   */


	  function decode$2(value) {
	    try {
	      return decodeURIComponent(value);
	    } catch (e) {
	      debug$1('error `decode(%o)` - %o', value, e);
	    }
	  }

	  var lib$1 = createCommonjsModule(function (module, exports) {
	    /**
	     * Module dependencies.
	     */

	    var parse = componentUrl.parse;
	    /**
	     * Get the top domain.
	     *
	     * The function constructs the levels of domain and attempts to set a global
	     * cookie on each one when it succeeds it returns the top level domain.
	     *
	     * The method returns an empty string when the hostname is an ip or `localhost`.
	     *
	     * Example levels:
	     *
	     *      domain.levels('http://www.google.co.uk');
	     *      // => ["co.uk", "google.co.uk", "www.google.co.uk"]
	     *
	     * Example:
	     *
	     *      domain('http://localhost:3000/baz');
	     *      // => ''
	     *      domain('http://dev:3000/baz');
	     *      // => ''
	     *      domain('http://127.0.0.1:3000/baz');
	     *      // => ''
	     *      domain('http://segment.io/baz');
	     *      // => 'segment.io'
	     *
	     * @param {string} url
	     * @return {string}
	     * @api public
	     */

	    function domain(url) {
	      var cookie = exports.cookie;
	      var levels = exports.levels(url); // Lookup the real top level one.

	      for (var i = 0; i < levels.length; ++i) {
	        var cname = '__tld__';
	        var domain = levels[i];
	        var opts = {
	          domain: '.' + domain
	        };
	        cookie(cname, 1, opts);

	        if (cookie(cname)) {
	          cookie(cname, null, opts);
	          return domain;
	        }
	      }

	      return '';
	    }
	    /**
	     * Levels returns all levels of the given url.
	     *
	     * @param {string} url
	     * @return {Array}
	     * @api public
	     */


	    domain.levels = function (url) {
	      var host = parse(url).hostname;
	      var parts = host.split('.');
	      var last = parts[parts.length - 1];
	      var levels = []; // Ip address.

	      if (parts.length === 4 && last === parseInt(last, 10)) {
	        return levels;
	      } // Localhost.


	      if (parts.length <= 1) {
	        return levels;
	      } // Create levels.


	      for (var i = parts.length - 2; i >= 0; --i) {
	        levels.push(parts.slice(i).join('.'));
	      }

	      return levels;
	    };
	    /**
	     * Expose cookie on domain.
	     */


	    domain.cookie = componentCookie;
	    /*
	     * Exports.
	     */

	    exports = module.exports = domain;
	  });

	  /**
	   * An object utility to persist values in cookies
	   */

	  var CookieLocal = /*#__PURE__*/function () {
	    function CookieLocal(options) {
	      _classCallCheck(this, CookieLocal);

	      this._options = {};
	      this.options(options);
	    }
	    /**
	     *
	     * @param {*} options
	     */


	    _createClass(CookieLocal, [{
	      key: "options",
	      value: function options() {
	        var _options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

	        if (arguments.length === 0) return this._options;
	        var domain = ".".concat(lib$1(window.location.href));
	        if (domain === ".") domain = null; // the default maxage and path

	        this._options = defaults_1(_options, {
	          maxage: 31536000000,
	          path: "/",
	          domain: domain,
	          samesite: "Lax"
	        }); // try setting a cookie first

	        this.set("test_rudder", true);

	        if (!this.get("test_rudder")) {
	          this._options.domain = null;
	        }

	        this.remove("test_rudder");
	      }
	      /**
	       *
	       * @param {*} key
	       * @param {*} value
	       */

	    }, {
	      key: "set",
	      value: function set(key, value) {
	        try {
	          rudderComponentCookie(key, value, clone_1(this._options));
	          return true;
	        } catch (e) {
	          logger.error(e);
	          return false;
	        }
	      }
	      /**
	       *
	       * @param {*} key
	       */

	    }, {
	      key: "get",
	      value: function get(key) {
	        return rudderComponentCookie(key);
	      }
	      /**
	       *
	       * @param {*} key
	       */

	    }, {
	      key: "remove",
	      value: function remove(key) {
	        try {
	          rudderComponentCookie(key, null, clone_1(this._options));
	          return true;
	        } catch (e) {
	          return false;
	        }
	      }
	    }]);

	    return CookieLocal;
	  }(); // Exporting only the instance


	  var Cookie = new CookieLocal({});

	  var store = function () {
	    // Store.js
	    var store = {},
	        win = typeof window != 'undefined' ? window : commonjsGlobal$1,
	        doc = win.document,
	        localStorageName = 'localStorage',
	        scriptTag = 'script',
	        storage;
	    store.disabled = false;
	    store.version = '1.3.20';

	    store.set = function (key, value) {};

	    store.get = function (key, defaultVal) {};

	    store.has = function (key) {
	      return store.get(key) !== undefined;
	    };

	    store.remove = function (key) {};

	    store.clear = function () {};

	    store.transact = function (key, defaultVal, transactionFn) {
	      if (transactionFn == null) {
	        transactionFn = defaultVal;
	        defaultVal = null;
	      }

	      if (defaultVal == null) {
	        defaultVal = {};
	      }

	      var val = store.get(key, defaultVal);
	      transactionFn(val);
	      store.set(key, val);
	    };

	    store.getAll = function () {
	      var ret = {};
	      store.forEach(function (key, val) {
	        ret[key] = val;
	      });
	      return ret;
	    };

	    store.forEach = function () {};

	    store.serialize = function (value) {
	      return json3.stringify(value);
	    };

	    store.deserialize = function (value) {
	      if (typeof value != 'string') {
	        return undefined;
	      }

	      try {
	        return json3.parse(value);
	      } catch (e) {
	        return value || undefined;
	      }
	    }; // Functions to encapsulate questionable FireFox 3.6.13 behavior
	    // when about.config::dom.storage.enabled === false
	    // See https://github.com/marcuswestin/store.js/issues#issue/13


	    function isLocalStorageNameSupported() {
	      try {
	        return localStorageName in win && win[localStorageName];
	      } catch (err) {
	        return false;
	      }
	    }

	    if (isLocalStorageNameSupported()) {
	      storage = win[localStorageName];

	      store.set = function (key, val) {
	        if (val === undefined) {
	          return store.remove(key);
	        }

	        storage.setItem(key, store.serialize(val));
	        return val;
	      };

	      store.get = function (key, defaultVal) {
	        var val = store.deserialize(storage.getItem(key));
	        return val === undefined ? defaultVal : val;
	      };

	      store.remove = function (key) {
	        storage.removeItem(key);
	      };

	      store.clear = function () {
	        storage.clear();
	      };

	      store.forEach = function (callback) {
	        for (var i = 0; i < storage.length; i++) {
	          var key = storage.key(i);
	          callback(key, store.get(key));
	        }
	      };
	    } else if (doc && doc.documentElement.addBehavior) {
	      var storageOwner, storageContainer; // Since #userData storage applies only to specific paths, we need to
	      // somehow link our data to a specific path.  We choose /favicon.ico
	      // as a pretty safe option, since all browsers already make a request to
	      // this URL anyway and being a 404 will not hurt us here.  We wrap an
	      // iframe pointing to the favicon in an ActiveXObject(htmlfile) object
	      // (see: http://msdn.microsoft.com/en-us/library/aa752574(v=VS.85).aspx)
	      // since the iframe access rules appear to allow direct access and
	      // manipulation of the document element, even for a 404 page.  This
	      // document can be used instead of the current document (which would
	      // have been limited to the current path) to perform #userData storage.

	      try {
	        storageContainer = new ActiveXObject('htmlfile');
	        storageContainer.open();
	        storageContainer.write('<' + scriptTag + '>document.w=window</' + scriptTag + '><iframe src="/favicon.ico"></iframe>');
	        storageContainer.close();
	        storageOwner = storageContainer.w.frames[0].document;
	        storage = storageOwner.createElement('div');
	      } catch (e) {
	        // somehow ActiveXObject instantiation failed (perhaps some special
	        // security settings or otherwse), fall back to per-path storage
	        storage = doc.createElement('div');
	        storageOwner = doc.body;
	      }

	      var withIEStorage = function withIEStorage(storeFunction) {
	        return function () {
	          var args = Array.prototype.slice.call(arguments, 0);
	          args.unshift(storage); // See http://msdn.microsoft.com/en-us/library/ms531081(v=VS.85).aspx
	          // and http://msdn.microsoft.com/en-us/library/ms531424(v=VS.85).aspx

	          storageOwner.appendChild(storage);
	          storage.addBehavior('#default#userData');
	          storage.load(localStorageName);
	          var result = storeFunction.apply(store, args);
	          storageOwner.removeChild(storage);
	          return result;
	        };
	      }; // In IE7, keys cannot start with a digit or contain certain chars.
	      // See https://github.com/marcuswestin/store.js/issues/40
	      // See https://github.com/marcuswestin/store.js/issues/83


	      var forbiddenCharsRegex = new RegExp("[!\"#$%&'()*+,/\\\\:;<=>?@[\\]^`{|}~]", "g");

	      var ieKeyFix = function ieKeyFix(key) {
	        return key.replace(/^d/, '___$&').replace(forbiddenCharsRegex, '___');
	      };

	      store.set = withIEStorage(function (storage, key, val) {
	        key = ieKeyFix(key);

	        if (val === undefined) {
	          return store.remove(key);
	        }

	        storage.setAttribute(key, store.serialize(val));
	        storage.save(localStorageName);
	        return val;
	      });
	      store.get = withIEStorage(function (storage, key, defaultVal) {
	        key = ieKeyFix(key);
	        var val = store.deserialize(storage.getAttribute(key));
	        return val === undefined ? defaultVal : val;
	      });
	      store.remove = withIEStorage(function (storage, key) {
	        key = ieKeyFix(key);
	        storage.removeAttribute(key);
	        storage.save(localStorageName);
	      });
	      store.clear = withIEStorage(function (storage) {
	        var attributes = storage.XMLDocument.documentElement.attributes;
	        storage.load(localStorageName);

	        for (var i = attributes.length - 1; i >= 0; i--) {
	          storage.removeAttribute(attributes[i].name);
	        }

	        storage.save(localStorageName);
	      });
	      store.forEach = withIEStorage(function (storage, callback) {
	        var attributes = storage.XMLDocument.documentElement.attributes;

	        for (var i = 0, attr; attr = attributes[i]; ++i) {
	          callback(attr.name, store.deserialize(storage.getAttribute(attr.name)));
	        }
	      });
	    }

	    try {
	      var testKey = '__storejs__';
	      store.set(testKey, testKey);

	      if (store.get(testKey) != testKey) {
	        store.disabled = true;
	      }

	      store.remove(testKey);
	    } catch (e) {
	      store.disabled = true;
	    }

	    store.enabled = !store.disabled;
	    return store;
	  }();

	  /**
	   * An object utility to persist user and other values in localstorage
	   */

	  var StoreLocal = /*#__PURE__*/function () {
	    function StoreLocal(options) {
	      _classCallCheck(this, StoreLocal);

	      this._options = {};
	      this.enabled = false;
	      this.options(options);
	    }
	    /**
	     *
	     * @param {*} options
	     */


	    _createClass(StoreLocal, [{
	      key: "options",
	      value: function options() {
	        var _options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

	        if (arguments.length === 0) return this._options;
	        defaults_1(_options, {
	          enabled: true
	        });
	        this.enabled = _options.enabled && store.enabled;
	        this._options = _options;
	      }
	      /**
	       *
	       * @param {*} key
	       * @param {*} value
	       */

	    }, {
	      key: "set",
	      value: function set(key, value) {
	        if (!this.enabled) return false;
	        return store.set(key, value);
	      }
	      /**
	       *
	       * @param {*} key
	       */

	    }, {
	      key: "get",
	      value: function get(key) {
	        if (!this.enabled) return null;
	        return store.get(key);
	      }
	      /**
	       *
	       * @param {*} key
	       */

	    }, {
	      key: "remove",
	      value: function remove(key) {
	        if (!this.enabled) return false;
	        return store.remove(key);
	      }
	    }]);

	    return StoreLocal;
	  }(); // Exporting only the instance


	  var Store = new StoreLocal({});

	  var defaults$1 = {
	    user_storage_key: "rl_user_id",
	    user_storage_trait: "rl_trait",
	    user_storage_anonymousId: "rl_anonymous_id",
	    group_storage_key: "rl_group_id",
	    group_storage_trait: "rl_group_trait",
	    prefix: "RudderEncrypt:",
	    key: "Rudder"
	  };
	  /**
	   * An object that handles persisting key-val from Analytics
	   */

	  var Storage = /*#__PURE__*/function () {
	    function Storage() {
	      _classCallCheck(this, Storage);

	      // First try setting the storage to cookie else to localstorage
	      Cookie.set("rudder_cookies", true);

	      if (Cookie.get("rudder_cookies")) {
	        Cookie.remove("rudder_cookies");
	        this.storage = Cookie;
	        return;
	      } // localStorage is enabled.


	      if (Store.enabled) {
	        this.storage = Store;
	      }
	    }
	    /**
	     * Json stringify the given value
	     * @param {*} value
	     */


	    _createClass(Storage, [{
	      key: "stringify",
	      value: function stringify(value) {
	        return JSON.stringify(value);
	      }
	      /**
	       * JSON parse the value
	       * @param {*} value
	       */

	    }, {
	      key: "parse",
	      value: function parse(value) {
	        // if not parseable, return as is without json parse
	        try {
	          return value ? JSON.parse(value) : null;
	        } catch (e) {
	          logger.error(e);
	          return value || null;
	        }
	      }
	      /**
	       * trim using regex for browser polyfill
	       * @param {*} value
	       */

	    }, {
	      key: "trim",
	      value: function trim(value) {
	        return value.replace(/^\s+|\s+$/gm, "");
	      }
	      /**
	       * AES encrypt value with constant prefix
	       * @param {*} value
	       */

	    }, {
	      key: "encryptValue",
	      value: function encryptValue(value) {
	        if (this.trim(value) == "") {
	          return value;
	        }

	        var prefixedVal = "".concat(defaults$1.prefix).concat(aes.encrypt(value, defaults$1.key).toString());
	        return prefixedVal;
	      }
	      /**
	       * decrypt value
	       * @param {*} value
	       */

	    }, {
	      key: "decryptValue",
	      value: function decryptValue(value) {
	        if (!value || typeof value === "string" && this.trim(value) == "") {
	          return value;
	        }

	        if (value.substring(0, defaults$1.prefix.length) == defaults$1.prefix) {
	          return aes.decrypt(value.substring(defaults$1.prefix.length), defaults$1.key).toString(encUtf8);
	        }

	        return value;
	      }
	      /**
	       *
	       * @param {*} key
	       * @param {*} value
	       */

	    }, {
	      key: "setItem",
	      value: function setItem(key, value) {
	        this.storage.set(key, this.encryptValue(this.stringify(value)));
	      }
	      /**
	       *
	       * @param {*} value
	       */

	    }, {
	      key: "setUserId",
	      value: function setUserId(value) {
	        if (typeof value !== "string") {
	          logger.error("[Storage] setUserId:: userId should be string");
	          return;
	        }

	        this.storage.set(defaults$1.user_storage_key, this.encryptValue(this.stringify(value)));
	      }
	      /**
	       *
	       * @param {*} value
	       */

	    }, {
	      key: "setUserTraits",
	      value: function setUserTraits(value) {
	        this.storage.set(defaults$1.user_storage_trait, this.encryptValue(this.stringify(value)));
	      }
	      /**
	       *
	       * @param {*} value
	       */

	    }, {
	      key: "setGroupId",
	      value: function setGroupId(value) {
	        if (typeof value !== "string") {
	          logger.error("[Storage] setGroupId:: groupId should be string");
	          return;
	        }

	        this.storage.set(defaults$1.group_storage_key, this.encryptValue(this.stringify(value)));
	      }
	      /**
	       *
	       * @param {*} value
	       */

	    }, {
	      key: "setGroupTraits",
	      value: function setGroupTraits(value) {
	        this.storage.set(defaults$1.group_storage_trait, this.encryptValue(this.stringify(value)));
	      }
	      /**
	       *
	       * @param {*} value
	       */

	    }, {
	      key: "setAnonymousId",
	      value: function setAnonymousId(value) {
	        if (typeof value !== "string") {
	          logger.error("[Storage] setAnonymousId:: anonymousId should be string");
	          return;
	        }

	        this.storage.set(defaults$1.user_storage_anonymousId, this.encryptValue(this.stringify(value)));
	      }
	      /**
	       *
	       * @param {*} key
	       */

	    }, {
	      key: "getItem",
	      value: function getItem(key) {
	        return this.parse(this.decryptValue(this.storage.get(key)));
	      }
	      /**
	       * get the stored userId
	       */

	    }, {
	      key: "getUserId",
	      value: function getUserId() {
	        return this.parse(this.decryptValue(this.storage.get(defaults$1.user_storage_key)));
	      }
	      /**
	       * get the stored user traits
	       */

	    }, {
	      key: "getUserTraits",
	      value: function getUserTraits() {
	        return this.parse(this.decryptValue(this.storage.get(defaults$1.user_storage_trait)));
	      }
	      /**
	       * get the stored userId
	       */

	    }, {
	      key: "getGroupId",
	      value: function getGroupId() {
	        return this.parse(this.decryptValue(this.storage.get(defaults$1.group_storage_key)));
	      }
	      /**
	       * get the stored user traits
	       */

	    }, {
	      key: "getGroupTraits",
	      value: function getGroupTraits() {
	        return this.parse(this.decryptValue(this.storage.get(defaults$1.group_storage_trait)));
	      }
	      /**
	       * get stored anonymous id
	       */

	    }, {
	      key: "getAnonymousId",
	      value: function getAnonymousId() {
	        return this.parse(this.decryptValue(this.storage.get(defaults$1.user_storage_anonymousId)));
	      }
	      /**
	       *
	       * @param {*} key
	       */

	    }, {
	      key: "removeItem",
	      value: function removeItem(key) {
	        return this.storage.remove(key);
	      }
	      /**
	       * remove stored keys
	       */

	    }, {
	      key: "clear",
	      value: function clear() {
	        this.storage.remove(defaults$1.user_storage_key);
	        this.storage.remove(defaults$1.user_storage_trait);
	        this.storage.remove(defaults$1.group_storage_key);
	        this.storage.remove(defaults$1.group_storage_trait); // this.storage.remove(defaults.user_storage_anonymousId);
	      }
	    }]);

	    return Storage;
	  }();

	  var Storage$1 = new Storage();

	  var rngBrowser = createCommonjsModule(function (module) {
	    // Unique ID creation requires a high quality random # generator.  In the
	    // browser this is a little complicated due to unknown quality of Math.random()
	    // and inconsistent support for the `crypto` API.  We do the best we can via
	    // feature-detection
	    // getRandomValues needs to be invoked in a context where "this" is a Crypto
	    // implementation. Also, find the complete implementation of crypto on IE11.
	    var getRandomValues = typeof crypto != 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto != 'undefined' && typeof window.msCrypto.getRandomValues == 'function' && msCrypto.getRandomValues.bind(msCrypto);

	    if (getRandomValues) {
	      // WHATWG crypto RNG - http://wiki.whatwg.org/wiki/Crypto
	      var rnds8 = new Uint8Array(16); // eslint-disable-line no-undef

	      module.exports = function whatwgRNG() {
	        getRandomValues(rnds8);
	        return rnds8;
	      };
	    } else {
	      // Math.random()-based (RNG)
	      //
	      // If all else fails, use Math.random().  It's fast, but is of unspecified
	      // quality.
	      var rnds = new Array(16);

	      module.exports = function mathRNG() {
	        for (var i = 0, r; i < 16; i++) {
	          if ((i & 0x03) === 0) r = Math.random() * 0x100000000;
	          rnds[i] = r >>> ((i & 0x03) << 3) & 0xff;
	        }

	        return rnds;
	      };
	    }
	  });

	  /**
	   * Convert array of 16 byte values to UUID string format of the form:
	   * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
	   */
	  var byteToHex = [];

	  for (var i = 0; i < 256; ++i) {
	    byteToHex[i] = (i + 0x100).toString(16).substr(1);
	  }

	  function bytesToUuid(buf, offset) {
	    var i = offset || 0;
	    var bth = byteToHex; // join used to fix memory issue caused by concatenation: https://bugs.chromium.org/p/v8/issues/detail?id=3175#c4

	    return [bth[buf[i++]], bth[buf[i++]], bth[buf[i++]], bth[buf[i++]], '-', bth[buf[i++]], bth[buf[i++]], '-', bth[buf[i++]], bth[buf[i++]], '-', bth[buf[i++]], bth[buf[i++]], '-', bth[buf[i++]], bth[buf[i++]], bth[buf[i++]], bth[buf[i++]], bth[buf[i++]], bth[buf[i++]]].join('');
	  }

	  var bytesToUuid_1 = bytesToUuid;

	  //
	  // Inspired by https://github.com/LiosK/UUID.js
	  // and http://docs.python.org/library/uuid.html

	  var _nodeId;

	  var _clockseq; // Previous uuid creation time


	  var _lastMSecs = 0;
	  var _lastNSecs = 0; // See https://github.com/uuidjs/uuid for API details

	  function v1(options, buf, offset) {
	    var i = buf && offset || 0;
	    var b = buf || [];
	    options = options || {};
	    var node = options.node || _nodeId;
	    var clockseq = options.clockseq !== undefined ? options.clockseq : _clockseq; // node and clockseq need to be initialized to random values if they're not
	    // specified.  We do this lazily to minimize issues related to insufficient
	    // system entropy.  See #189

	    if (node == null || clockseq == null) {
	      var seedBytes = rngBrowser();

	      if (node == null) {
	        // Per 4.5, create and 48-bit node id, (47 random bits + multicast bit = 1)
	        node = _nodeId = [seedBytes[0] | 0x01, seedBytes[1], seedBytes[2], seedBytes[3], seedBytes[4], seedBytes[5]];
	      }

	      if (clockseq == null) {
	        // Per 4.2.2, randomize (14 bit) clockseq
	        clockseq = _clockseq = (seedBytes[6] << 8 | seedBytes[7]) & 0x3fff;
	      }
	    } // UUID timestamps are 100 nano-second units since the Gregorian epoch,
	    // (1582-10-15 00:00).  JSNumbers aren't precise enough for this, so
	    // time is handled internally as 'msecs' (integer milliseconds) and 'nsecs'
	    // (100-nanoseconds offset from msecs) since unix epoch, 1970-01-01 00:00.


	    var msecs = options.msecs !== undefined ? options.msecs : new Date().getTime(); // Per 4.2.1.2, use count of uuid's generated during the current clock
	    // cycle to simulate higher resolution clock

	    var nsecs = options.nsecs !== undefined ? options.nsecs : _lastNSecs + 1; // Time since last uuid creation (in msecs)

	    var dt = msecs - _lastMSecs + (nsecs - _lastNSecs) / 10000; // Per 4.2.1.2, Bump clockseq on clock regression

	    if (dt < 0 && options.clockseq === undefined) {
	      clockseq = clockseq + 1 & 0x3fff;
	    } // Reset nsecs if clock regresses (new clockseq) or we've moved onto a new
	    // time interval


	    if ((dt < 0 || msecs > _lastMSecs) && options.nsecs === undefined) {
	      nsecs = 0;
	    } // Per 4.2.1.2 Throw error if too many uuids are requested


	    if (nsecs >= 10000) {
	      throw new Error('uuid.v1(): Can\'t create more than 10M uuids/sec');
	    }

	    _lastMSecs = msecs;
	    _lastNSecs = nsecs;
	    _clockseq = clockseq; // Per 4.1.4 - Convert from unix epoch to Gregorian epoch

	    msecs += 12219292800000; // `time_low`

	    var tl = ((msecs & 0xfffffff) * 10000 + nsecs) % 0x100000000;
	    b[i++] = tl >>> 24 & 0xff;
	    b[i++] = tl >>> 16 & 0xff;
	    b[i++] = tl >>> 8 & 0xff;
	    b[i++] = tl & 0xff; // `time_mid`

	    var tmh = msecs / 0x100000000 * 10000 & 0xfffffff;
	    b[i++] = tmh >>> 8 & 0xff;
	    b[i++] = tmh & 0xff; // `time_high_and_version`

	    b[i++] = tmh >>> 24 & 0xf | 0x10; // include version

	    b[i++] = tmh >>> 16 & 0xff; // `clock_seq_hi_and_reserved` (Per 4.2.2 - include variant)

	    b[i++] = clockseq >>> 8 | 0x80; // `clock_seq_low`

	    b[i++] = clockseq & 0xff; // `node`

	    for (var n = 0; n < 6; ++n) {
	      b[i + n] = node[n];
	    }

	    return buf ? buf : bytesToUuid_1(b);
	  }

	  var v1_1 = v1;

	  function v4(options, buf, offset) {
	    var i = buf && offset || 0;

	    if (typeof options == 'string') {
	      buf = options === 'binary' ? new Array(16) : null;
	      options = null;
	    }

	    options = options || {};
	    var rnds = options.random || (options.rng || rngBrowser)(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`

	    rnds[6] = rnds[6] & 0x0f | 0x40;
	    rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided

	    if (buf) {
	      for (var ii = 0; ii < 16; ++ii) {
	        buf[i + ii] = rnds[ii];
	      }
	    }

	    return buf || bytesToUuid_1(rnds);
	  }

	  var v4_1 = v4;

	  var uuid = v4_1;
	  uuid.v1 = v1_1;
	  uuid.v4 = v4_1;
	  var uuid_1 = uuid;

	  var uuid$1 = uuid_1.v4;
	  var inMemoryStore = {
	    _data: {},
	    length: 0,
	    setItem: function setItem(key, value) {
	      this._data[key] = value;
	      this.length = keys_1(this._data).length;
	      return value;
	    },
	    getItem: function getItem(key) {
	      if (key in this._data) {
	        return this._data[key];
	      }

	      return null;
	    },
	    removeItem: function removeItem(key) {
	      if (key in this._data) {
	        delete this._data[key];
	      }

	      this.length = keys_1(this._data).length;
	      return null;
	    },
	    clear: function clear() {
	      this._data = {};
	      this.length = 0;
	    },
	    key: function key(index) {
	      return keys_1(this._data)[index];
	    }
	  };

	  function isSupportedNatively() {
	    try {
	      if (!window.localStorage) return false;
	      var key = uuid$1();
	      window.localStorage.setItem(key, 'test_value');
	      var value = window.localStorage.getItem(key);
	      window.localStorage.removeItem(key); // handle localStorage silently failing

	      return value === 'test_value';
	    } catch (e) {
	      // Can throw if localStorage is disabled
	      return false;
	    }
	  }

	  function pickStorage() {
	    if (isSupportedNatively()) {
	      return window.localStorage;
	    } // fall back to in-memory


	    return inMemoryStore;
	  } // Return a shared instance


	  var defaultEngine = pickStorage(); // Expose the in-memory store explicitly for testing

	  var inMemoryEngine = inMemoryStore;
	  var engine = {
	    defaultEngine: defaultEngine,
	    inMemoryEngine: inMemoryEngine
	  };

	  var defaultEngine$1 = engine.defaultEngine;
	  var inMemoryEngine$1 = engine.inMemoryEngine;
	  /**
	  * Store Implementation with dedicated
	  */

	  function Store$1(name, id, keys, optionalEngine) {
	    this.id = id;
	    this.name = name;
	    this.keys = keys || {};
	    this.engine = optionalEngine || defaultEngine$1;
	    this.originalEngine = this.engine;
	  }
	  /**
	  * Set value by key.
	  */


	  Store$1.prototype.set = function (key, value) {
	    var compoundKey = this._createValidKey(key);

	    if (!compoundKey) return;

	    try {
	      this.engine.setItem(compoundKey, json3.stringify(value));
	    } catch (err) {
	      if (isQuotaExceeded(err)) {
	        // switch to inMemory engine
	        this._swapEngine(); // and save it there


	        this.set(key, value);
	      }
	    }
	  };
	  /**
	  * Get by Key.
	  */


	  Store$1.prototype.get = function (key) {
	    try {
	      var str = this.engine.getItem(this._createValidKey(key));

	      if (str === null) {
	        return null;
	      }

	      return json3.parse(str);
	    } catch (err) {
	      return null;
	    }
	  };
	  /**
	   * Get original engine
	   */


	  Store$1.prototype.getOriginalEngine = function () {
	    return this.originalEngine;
	  };
	  /**
	  * Remove by Key.
	  */


	  Store$1.prototype.remove = function (key) {
	    this.engine.removeItem(this._createValidKey(key));
	  };
	  /**
	  * Ensure the key is valid
	  */


	  Store$1.prototype._createValidKey = function (key) {
	    var name = this.name;
	    var id = this.id;
	    if (!keys_1(this.keys).length) return [name, id, key].join('.'); // validate and return undefined if invalid key

	    var compoundKey;
	    each_1(function (value) {
	      if (value === key) {
	        compoundKey = [name, id, key].join('.');
	      }
	    }, this.keys);
	    return compoundKey;
	  };
	  /**
	  * Switch to inMemoryEngine, bringing any existing data with.
	  */


	  Store$1.prototype._swapEngine = function () {
	    var self = this; // grab existing data, but only for this page's queue instance, not all
	    // better to keep other queues in localstorage to be flushed later
	    // than to pull them into memory and remove them from durable storage

	    each_1(function (key) {
	      var value = self.get(key);
	      inMemoryEngine$1.setItem([self.name, self.id, key].join('.'), value);
	      self.remove(key);
	    }, this.keys);
	    this.engine = inMemoryEngine$1;
	  };

	  var store$1 = Store$1;

	  function isQuotaExceeded(e) {
	    var quotaExceeded = false;

	    if (e.code) {
	      switch (e.code) {
	        case 22:
	          quotaExceeded = true;
	          break;

	        case 1014:
	          // Firefox
	          if (e.name === 'NS_ERROR_DOM_QUOTA_REACHED') {
	            quotaExceeded = true;
	          }

	          break;
	      }
	    } else if (e.number === -2147024882) {
	      // Internet Explorer 8
	      quotaExceeded = true;
	    }

	    return quotaExceeded;
	  }

	  var defaultClock = {
	    setTimeout: function setTimeout(fn, ms) {
	      return window.setTimeout(fn, ms);
	    },
	    clearTimeout: function clearTimeout(id) {
	      return window.clearTimeout(id);
	    },
	    Date: window.Date
	  };
	  var clock = defaultClock;

	  function Schedule() {
	    this.tasks = {};
	    this.nextId = 1;
	  }

	  Schedule.prototype.now = function () {
	    return +new clock.Date();
	  };

	  Schedule.prototype.run = function (task, timeout) {
	    var id = this.nextId++;
	    this.tasks[id] = clock.setTimeout(this._handle(id, task), timeout);
	    return id;
	  };

	  Schedule.prototype.cancel = function (id) {
	    if (this.tasks[id]) {
	      clock.clearTimeout(this.tasks[id]);
	      delete this.tasks[id];
	    }
	  };

	  Schedule.prototype.cancelAll = function () {
	    each_1(clock.clearTimeout, this.tasks);
	    this.tasks = {};
	  };

	  Schedule.prototype._handle = function (id, callback) {
	    var self = this;
	    return function () {
	      delete self.tasks[id];
	      return callback();
	    };
	  };

	  Schedule.setClock = function (newClock) {
	    clock = newClock;
	  };

	  Schedule.resetClock = function () {
	    clock = defaultClock;
	  };

	  var schedule = Schedule;

	  /**
	   * Expose `debug()` as the module.
	   */
	  var debug_1$2 = debug$2;
	  /**
	   * Create a debugger with the given `name`.
	   *
	   * @param {String} name
	   * @return {Type}
	   * @api public
	   */

	  function debug$2(name) {
	    if (!debug$2.enabled(name)) return function () {};
	    return function (fmt) {
	      fmt = coerce(fmt);
	      var curr = new Date();
	      var ms = curr - (debug$2[name] || curr);
	      debug$2[name] = curr;
	      fmt = name + ' ' + fmt + ' +' + debug$2.humanize(ms); // This hackery is required for IE8
	      // where `console.log` doesn't have 'apply'

	      window.console && console.log && Function.prototype.apply.call(console.log, console, arguments);
	    };
	  }
	  /**
	   * The currently active debug mode names.
	   */


	  debug$2.names = [];
	  debug$2.skips = [];
	  /**
	   * Enables a debug mode by name. This can include modes
	   * separated by a colon and wildcards.
	   *
	   * @param {String} name
	   * @api public
	   */

	  debug$2.enable = function (name) {
	    try {
	      localStorage.debug = name;
	    } catch (e) {}

	    var split = (name || '').split(/[\s,]+/),
	        len = split.length;

	    for (var i = 0; i < len; i++) {
	      name = split[i].replace('*', '.*?');

	      if (name[0] === '-') {
	        debug$2.skips.push(new RegExp('^' + name.substr(1) + '$'));
	      } else {
	        debug$2.names.push(new RegExp('^' + name + '$'));
	      }
	    }
	  };
	  /**
	   * Disable debug output.
	   *
	   * @api public
	   */


	  debug$2.disable = function () {
	    debug$2.enable('');
	  };
	  /**
	   * Humanize the given `ms`.
	   *
	   * @param {Number} m
	   * @return {String}
	   * @api private
	   */


	  debug$2.humanize = function (ms) {
	    var sec = 1000,
	        min = 60 * 1000,
	        hour = 60 * min;
	    if (ms >= hour) return (ms / hour).toFixed(1) + 'h';
	    if (ms >= min) return (ms / min).toFixed(1) + 'm';
	    if (ms >= sec) return (ms / sec | 0) + 's';
	    return ms + 'ms';
	  };
	  /**
	   * Returns true if the given mode name is enabled, false otherwise.
	   *
	   * @param {String} name
	   * @return {Boolean}
	   * @api public
	   */


	  debug$2.enabled = function (name) {
	    for (var i = 0, len = debug$2.skips.length; i < len; i++) {
	      if (debug$2.skips[i].test(name)) {
	        return false;
	      }
	    }

	    for (var i = 0, len = debug$2.names.length; i < len; i++) {
	      if (debug$2.names[i].test(name)) {
	        return true;
	      }
	    }

	    return false;
	  };
	  /**
	   * Coerce `val`.
	   */


	  function coerce(val) {
	    if (val instanceof Error) return val.stack || val.message;
	    return val;
	  } // persist


	  try {
	    if (window.localStorage) debug$2.enable(localStorage.debug);
	  } catch (e) {}

	  var uuid$2 = uuid_1.v4;
	  var debug$3 = debug_1$2('localstorage-retry'); // Some browsers don't support Function.prototype.bind, so just including a simplified version here

	  function bind(func, obj) {
	    return function () {
	      return func.apply(obj, arguments);
	    };
	  }
	  /**
	   * @callback processFunc
	   * @param {Mixed} item The item added to the queue to process
	   * @param {Function} done A function to call when processing is completed.
	   *   @param {Error} Optional error parameter if the processing failed
	   *   @param {Response} Optional response parameter to emit for async handling
	   */

	  /**
	   * Constructs a Queue backed by localStorage
	   *
	   * @constructor
	   * @param {String} name The name of the queue. Will be used to find abandoned queues and retry their items
	   * @param {processFunc} fn The function to call in order to process an item added to the queue
	   */


	  function Queue(name, opts, fn) {
	    if (typeof opts === 'function') fn = opts;
	    this.name = name;
	    this.id = uuid$2();
	    this.fn = fn;
	    this.maxItems = opts.maxItems || Infinity;
	    this.maxAttempts = opts.maxAttempts || Infinity;
	    this.backoff = {
	      MIN_RETRY_DELAY: opts.minRetryDelay || 1000,
	      MAX_RETRY_DELAY: opts.maxRetryDelay || 30000,
	      FACTOR: opts.backoffFactor || 2,
	      JITTER: opts.backoffJitter || 0
	    }; // painstakingly tuned. that's why they're not "easily" configurable

	    this.timeouts = {
	      ACK_TIMER: 1000,
	      RECLAIM_TIMER: 3000,
	      RECLAIM_TIMEOUT: 10000,
	      RECLAIM_WAIT: 500
	    };
	    this.keys = {
	      IN_PROGRESS: 'inProgress',
	      QUEUE: 'queue',
	      RECLAIM_START: 'reclaimStart',
	      RECLAIM_END: 'reclaimEnd',
	      ACK: 'ack'
	    };
	    this._schedule = new schedule();
	    this._processId = 0; // Set up our empty queues

	    this._store = new store$1(this.name, this.id, this.keys);

	    this._store.set(this.keys.IN_PROGRESS, {});

	    this._store.set(this.keys.QUEUE, []); // bind recurring tasks for ease of use


	    this._ack = bind(this._ack, this);
	    this._checkReclaim = bind(this._checkReclaim, this);
	    this._processHead = bind(this._processHead, this);
	    this._running = false;
	  }
	  /**
	   * Mix in event emitter
	   */


	  componentEmitter(Queue.prototype);
	  /**
	   * Starts processing the queue
	   */

	  Queue.prototype.start = function () {
	    if (this._running) {
	      this.stop();
	    }

	    this._running = true;

	    this._ack();

	    this._checkReclaim();

	    this._processHead();
	  };
	  /**
	   * Stops processing the queue
	   */


	  Queue.prototype.stop = function () {
	    this._schedule.cancelAll();

	    this._running = false;
	  };
	  /**
	   * Decides whether to retry. Overridable.
	   *
	   * @param {Object} item The item being processed
	   * @param {Number} attemptNumber The attemptNumber (1 for first retry)
	   * @param {Error} error The error from previous attempt, if there was one
	   * @return {Boolean} Whether to requeue the message
	   */


	  Queue.prototype.shouldRetry = function (_, attemptNumber) {
	    if (attemptNumber > this.maxAttempts) return false;
	    return true;
	  };
	  /**
	   * Calculates the delay (in ms) for a retry attempt
	   *
	   * @param {Number} attemptNumber The attemptNumber (1 for first retry)
	   * @return {Number} The delay in milliseconds to wait before attempting a retry
	   */


	  Queue.prototype.getDelay = function (attemptNumber) {
	    var ms = this.backoff.MIN_RETRY_DELAY * Math.pow(this.backoff.FACTOR, attemptNumber);

	    if (this.backoff.JITTER) {
	      var rand = Math.random();
	      var deviation = Math.floor(rand * this.backoff.JITTER * ms);

	      if (Math.floor(rand * 10) < 5) {
	        ms -= deviation;
	      } else {
	        ms += deviation;
	      }
	    }

	    return Number(Math.min(ms, this.backoff.MAX_RETRY_DELAY).toPrecision(1));
	  };
	  /**
	   * Adds an item to the queue
	   *
	   * @param {Mixed} item The item to process
	   */


	  Queue.prototype.addItem = function (item) {
	    this._enqueue({
	      item: item,
	      attemptNumber: 0,
	      time: this._schedule.now()
	    });
	  };
	  /**
	   * Adds an item to the retry queue
	   *
	   * @param {Mixed} item The item to retry
	   * @param {Number} attemptNumber The attempt number (1 for first retry)
	   * @param {Error} [error] The error from previous attempt, if there was one
	   */


	  Queue.prototype.requeue = function (item, attemptNumber, error) {
	    if (this.shouldRetry(item, attemptNumber, error)) {
	      this._enqueue({
	        item: item,
	        attemptNumber: attemptNumber,
	        time: this._schedule.now() + this.getDelay(attemptNumber)
	      });
	    } else {
	      this.emit('discard', item, attemptNumber);
	    }
	  };

	  Queue.prototype._enqueue = function (entry) {
	    var queue = this._store.get(this.keys.QUEUE) || [];
	    queue = queue.slice(-(this.maxItems - 1));
	    queue.push(entry);
	    queue = queue.sort(function (a, b) {
	      return a.time - b.time;
	    });

	    this._store.set(this.keys.QUEUE, queue);

	    if (this._running) {
	      this._processHead();
	    }
	  };

	  Queue.prototype._processHead = function () {
	    var self = this;
	    var store = this._store; // cancel the scheduled task if it exists

	    this._schedule.cancel(this._processId); // Pop the head off the queue


	    var queue = store.get(this.keys.QUEUE) || [];
	    var inProgress = store.get(this.keys.IN_PROGRESS) || {};

	    var now = this._schedule.now();

	    var toRun = [];

	    function enqueue(el, id) {
	      toRun.push({
	        item: el.item,
	        done: function handle(err, res) {
	          var inProgress = store.get(self.keys.IN_PROGRESS) || {};
	          delete inProgress[id];
	          store.set(self.keys.IN_PROGRESS, inProgress);
	          self.emit('processed', err, res, el.item);

	          if (err) {
	            self.requeue(el.item, el.attemptNumber + 1, err);
	          }
	        }
	      });
	    }

	    var inProgressSize = Object.keys(inProgress).length;

	    while (queue.length && queue[0].time <= now && inProgressSize++ < self.maxItems) {
	      var el = queue.shift();
	      var id = uuid$2(); // Save this to the in progress map

	      inProgress[id] = {
	        item: el.item,
	        attemptNumber: el.attemptNumber,
	        time: self._schedule.now()
	      };
	      enqueue(el, id);
	    }

	    store.set(this.keys.QUEUE, queue);
	    store.set(this.keys.IN_PROGRESS, inProgress);
	    each_1(function (el) {
	      // TODO: handle fn timeout
	      try {
	        self.fn(el.item, el.done);
	      } catch (err) {
	        debug$3('Process function threw error: ' + err);
	      }
	    }, toRun); // re-read the queue in case the process function finished immediately or added another item

	    queue = store.get(this.keys.QUEUE) || [];

	    this._schedule.cancel(this._processId);

	    if (queue.length > 0) {
	      this._processId = this._schedule.run(this._processHead, queue[0].time - now);
	    }
	  }; // Ack continuously to prevent other tabs from claiming our queue


	  Queue.prototype._ack = function () {
	    this._store.set(this.keys.ACK, this._schedule.now());

	    this._store.set(this.keys.RECLAIM_START, null);

	    this._store.set(this.keys.RECLAIM_END, null);

	    this._schedule.run(this._ack, this.timeouts.ACK_TIMER);
	  };

	  Queue.prototype._checkReclaim = function () {
	    var self = this;

	    function tryReclaim(store) {
	      store.set(self.keys.RECLAIM_START, self.id);
	      store.set(self.keys.ACK, self._schedule.now());

	      self._schedule.run(function () {
	        if (store.get(self.keys.RECLAIM_START) !== self.id) return;
	        store.set(self.keys.RECLAIM_END, self.id);

	        self._schedule.run(function () {
	          if (store.get(self.keys.RECLAIM_END) !== self.id) return;
	          if (store.get(self.keys.RECLAIM_START) !== self.id) return;

	          self._reclaim(store.id);
	        }, self.timeouts.RECLAIM_WAIT);
	      }, self.timeouts.RECLAIM_WAIT);
	    }

	    function findOtherQueues(name) {
	      var res = [];

	      var storage = self._store.getOriginalEngine();

	      for (var i = 0; i < storage.length; i++) {
	        var k = storage.key(i);
	        var parts = k.split('.');
	        if (parts.length !== 3) continue;
	        if (parts[0] !== name) continue;
	        if (parts[2] !== 'ack') continue;
	        res.push(new store$1(name, parts[1], self.keys));
	      }

	      return res;
	    }

	    each_1(function (store) {
	      if (store.id === self.id) return;
	      if (self._schedule.now() - store.get(self.keys.ACK) < self.timeouts.RECLAIM_TIMEOUT) return;
	      tryReclaim(store);
	    }, findOtherQueues(this.name));

	    this._schedule.run(this._checkReclaim, this.timeouts.RECLAIM_TIMER);
	  };

	  Queue.prototype._reclaim = function (id) {
	    var self = this;
	    var other = new store$1(this.name, id, this.keys);
	    var our = {
	      queue: this._store.get(this.keys.QUEUE) || []
	    };
	    var their = {
	      inProgress: other.get(this.keys.IN_PROGRESS) || {},
	      queue: other.get(this.keys.QUEUE) || []
	    }; // add their queue to ours, resetting run-time to immediate and copying the attempt#

	    each_1(function (el) {
	      our.queue.push({
	        item: el.item,
	        attemptNumber: el.attemptNumber,
	        time: self._schedule.now()
	      });
	    }, their.queue); // if the queue is abandoned, all the in-progress are failed. retry them immediately and increment the attempt#

	    each_1(function (el) {
	      our.queue.push({
	        item: el.item,
	        attemptNumber: el.attemptNumber + 1,
	        time: self._schedule.now()
	      });
	    }, their.inProgress);
	    our.queue = our.queue.sort(function (a, b) {
	      return a.time - b.time;
	    });

	    this._store.set(this.keys.QUEUE, our.queue); // remove all keys


	    other.remove(this.keys.IN_PROGRESS);
	    other.remove(this.keys.QUEUE);
	    other.remove(this.keys.RECLAIM_START);
	    other.remove(this.keys.RECLAIM_END);
	    other.remove(this.keys.ACK); // process the new items we claimed

	    this._processHead();
	  };

	  var lib$2 = Queue;

	  // Payload class, contains batch of Elements
	  var RudderPayload = function RudderPayload() {
	    _classCallCheck(this, RudderPayload);

	    this.batch = null;
	    this.writeKey = null;
	  };

	  var queueOptions = {
	    maxRetryDelay: 360000,
	    minRetryDelay: 1000,
	    backoffFactor: 2,
	    maxAttempts: 10,
	    maxItems: 100
	  };
	  var MESSAGE_LENGTH = 32 * 1000; // ~32 Kb

	  /**
	   *
	   * @class EventRepository responsible for adding events into
	   * flush queue and sending data to rudder backend
	   * in batch and maintains order of the event.
	   */

	  var EventRepository = /*#__PURE__*/function () {
	    /**
	     *Creates an instance of EventRepository.
	     * @memberof EventRepository
	     */
	    function EventRepository(options) {
	      _classCallCheck(this, EventRepository);

	      this.eventsBuffer = [];
	      this.writeKey = "";
	      this.url = "";
	      this.state = "READY";
	      this.batchSize = 0; // previous implementation
	      // setInterval(this.preaparePayloadAndFlush, FLUSH_INTERVAL_DEFAULT, this);
	    }

	    _createClass(EventRepository, [{
	      key: "startQueue",
	      value: function startQueue(options) {
	        if (options) {
	          // TODO: add checks for value - has to be +ve?
	          Object.assign(queueOptions, options);
	        }

	        this.payloadQueue = new lib$2("rudder", queueOptions, function (item, done) {
	          // apply sentAt at flush time and reset on each retry
	          item.message.sentAt = getCurrentTimeFormatted(); // send this item for processing, with a callback to enable queue to get the done status

	          eventRepository.processQueueElement(item.url, item.headers, item.message, 10 * 1000, function (err, res) {
	            if (err) {
	              return done(err);
	            }

	            done(null, res);
	          });
	        }); // start queue

	        this.payloadQueue.start();
	      }
	      /**
	       *
	       *
	       * @param {EventRepository} repo
	       * @returns
	       * @memberof EventRepository
	       */

	    }, {
	      key: "preaparePayloadAndFlush",
	      value: function preaparePayloadAndFlush(repo) {
	        // construct payload
	        logger.debug("==== in preaparePayloadAndFlush with state: ".concat(repo.state));
	        logger.debug(repo.eventsBuffer);

	        if (repo.eventsBuffer.length == 0 || repo.state === "PROCESSING") {
	          return;
	        }

	        var eventsPayload = repo.eventsBuffer;
	        var payload = new RudderPayload();
	        payload.batch = eventsPayload;
	        payload.writeKey = repo.writeKey;
	        payload.sentAt = getCurrentTimeFormatted(); // add sentAt to individual events as well

	        payload.batch.forEach(function (event) {
	          event.sentAt = payload.sentAt;
	        });
	        repo.batchSize = repo.eventsBuffer.length; // server-side integration, XHR is node module

	        var xhr; {
	          var xhr = new XMLHttpRequest();
	        }

	        logger.debug("==== in flush sending to Rudder BE ====");
	        logger.debug(JSON.stringify(payload, replacer));
	        xhr.open("POST", repo.url, true);
	        xhr.setRequestHeader("Content-Type", "application/json");

	        {
	          xhr.setRequestHeader("Authorization", "Basic ".concat(btoa("".concat(payload.writeKey, ":"))));
	        } // register call back to reset event buffer on successfull POST


	        xhr.onreadystatechange = function () {
	          if (xhr.readyState === 4 && xhr.status === 200) {
	            logger.debug("====== request processed successfully: ".concat(xhr.status));
	            repo.eventsBuffer = repo.eventsBuffer.slice(repo.batchSize);
	            logger.debug(repo.eventsBuffer.length);
	          } else if (xhr.readyState === 4 && xhr.status !== 200) {
	            handleError(new Error("request failed with status: ".concat(xhr.status, " for url: ").concat(repo.url)));
	          }

	          repo.state = "READY";
	        };

	        xhr.send(JSON.stringify(payload, replacer));
	        repo.state = "PROCESSING";
	      }
	      /**
	       * the queue item proceesor
	       * @param {*} url to send requests to
	       * @param {*} headers
	       * @param {*} message
	       * @param {*} timeout
	       * @param {*} queueFn the function to call after request completion
	       */

	    }, {
	      key: "processQueueElement",
	      value: function processQueueElement(url, headers, message, timeout, queueFn) {
	        try {
	          var xhr = new XMLHttpRequest();
	          xhr.open("POST", url, true);

	          for (var k in headers) {
	            xhr.setRequestHeader(k, headers[k]);
	          }

	          xhr.timeout = timeout;
	          xhr.ontimeout = queueFn;
	          xhr.onerror = queueFn;

	          xhr.onreadystatechange = function () {
	            if (xhr.readyState === 4) {
	              if (xhr.status === 429 || xhr.status >= 500 && xhr.status < 600) {
	                handleError(new Error("request failed with status: ".concat(xhr.status).concat(xhr.statusText, " for url: ").concat(url)));
	                queueFn(new Error("request failed with status: ".concat(xhr.status).concat(xhr.statusText, " for url: ").concat(url)));
	              } else {
	                logger.debug("====== request processed successfully: ".concat(xhr.status));
	                queueFn(null, xhr.status);
	              }
	            }
	          };

	          xhr.send(JSON.stringify(message, replacer));
	        } catch (error) {
	          queueFn(error);
	        }
	      }
	      /**
	       *
	       *
	       * @param {RudderElement} rudderElement
	       * @memberof EventRepository
	       */

	    }, {
	      key: "enqueue",
	      value: function enqueue(rudderElement, type) {
	        var message = rudderElement.getElementContent();
	        var headers = {
	          "Content-Type": "application/json",
	          Authorization: "Basic ".concat(btoa("".concat(this.writeKey, ":"))),
	          AnonymousId: btoa(message.anonymousId)
	        };
	        message.originalTimestamp = getCurrentTimeFormatted();
	        message.sentAt = getCurrentTimeFormatted(); // add this, will get modified when actually being sent
	        // check message size, if greater log an error

	        if (JSON.stringify(message).length > MESSAGE_LENGTH) {
	          logger.error("[EventRepository] enqueue:: message length greater 32 Kb ", message);
	        } // modify the url for event specific endpoints


	        var url = this.url.slice(-1) == "/" ? this.url.slice(0, -1) : this.url; // add items to the queue

	        this.payloadQueue.addItem({
	          url: "".concat(url, "/v1/").concat(type),
	          headers: headers,
	          message: message
	        });
	      }
	    }]);

	    return EventRepository;
	  }();

	  var eventRepository = new EventRepository();

	  function addDomEventHandlers(rudderanalytics) {
	    logger.error("[AutoTrack]: This functionality has been moved to a different deployment");
	  }

	  var ScriptLoader = function ScriptLoader(id, src) {
	    logger.debug("in script loader=== ".concat(id));
	    var js = document.createElement("script");
	    js.src = src;
	    js.async = true;
	    js.type = "text/javascript";
	    js.id = id;
	    var e = document.getElementsByTagName("script")[0];
	    logger.debug("==script==", e);
	    e.parentNode.insertBefore(js, e);
	  };

	  var queryDefaults = {
	    trait: "ajs_trait_",
	    prop: "ajs_prop_"
	  }; // https://unpkg.com/test-rudder-sdk@1.0.5/dist/browser.js

	  /**
	   * Add the rudderelement object to flush queue
	   *
	   * @param {RudderElement} rudderElement
	   */

	  function enqueue(rudderElement, type) {
	    if (!this.eventRepository) {
	      this.eventRepository = eventRepository;
	    }

	    this.eventRepository.enqueue(rudderElement, type);
	  }
	  /**
	   * class responsible for handling core
	   * event tracking functionalities
	   */


	  var Analytics = /*#__PURE__*/function () {
	    /**
	     * Creates an instance of Analytics.
	     * @memberof Analytics
	     */
	    function Analytics() {
	      _classCallCheck(this, Analytics);

	      this.autoTrackHandlersRegistered = false;
	      this.autoTrackFeatureEnabled = false;
	      this.initialized = false;
	      this.trackValues = [];
	      this.eventsBuffer = [];
	      this.clientIntegrations = [];
	      this.loadOnlyIntegrations = {};
	      this.clientIntegrationObjects = undefined;
	      this.successfullyLoadedIntegration = [];
	      this.failedToBeLoadedIntegration = [];
	      this.toBeProcessedArray = [];
	      this.toBeProcessedByIntegrationArray = [];
	      this.storage = Storage$1;
	      this.eventRepository = eventRepository;
	      this.sendAdblockPage = false;
	      this.sendAdblockPageOptions = {};
	      this.clientSuppliedCallbacks = {};

	      this.readyCallback = function () {};

	      this.executeReadyCallback = undefined;
	      this.methodToCallbackMapping = {
	        syncPixel: "syncPixelCallback"
	      };
	      this.loaded = false;
	    }
	    /**
	     * initialize the user after load config
	     */


	    _createClass(Analytics, [{
	      key: "initializeUser",
	      value: function initializeUser() {
	        this.userId = this.storage.getUserId() != undefined ? this.storage.getUserId() : "";
	        this.userTraits = this.storage.getUserTraits() != undefined ? this.storage.getUserTraits() : {};
	        this.groupId = this.storage.getGroupId() != undefined ? this.storage.getGroupId() : "";
	        this.groupTraits = this.storage.getGroupTraits() != undefined ? this.storage.getGroupTraits() : {};
	        this.anonymousId = this.getAnonymousId(); // save once for storing older values to encrypted

	        this.storage.setUserId(this.userId);
	        this.storage.setAnonymousId(this.anonymousId);
	        this.storage.setGroupId(this.groupId);
	        this.storage.setUserTraits(this.userTraits);
	        this.storage.setGroupTraits(this.groupTraits);
	      }
	      /**
	       * Process the response from control plane and
	       * call initialize for integrations
	       *
	       * @param {*} status
	       * @param {*} response
	       * @memberof Analytics
	       */

	    }, {
	      key: "processResponse",
	      value: function processResponse(status, response) {
	        try {
	          logger.debug("===in process response=== ".concat(status));
	          response = JSON.parse(response);

	          if (response.source.useAutoTracking && !this.autoTrackHandlersRegistered) {
	            this.autoTrackFeatureEnabled = true;
	            addDomEventHandlers(this);
	            this.autoTrackHandlersRegistered = true;
	          }

	          response.source.destinations.forEach(function (destination, index) {
	            logger.debug("Destination ".concat(index, " Enabled? ").concat(destination.enabled, " Type: ").concat(destination.destinationDefinition.name, " Use Native SDK? ").concat(destination.config.useNativeSDK));

	            if (destination.enabled) {
	              this.clientIntegrations.push({
	                name: destination.destinationDefinition.name,
	                config: destination.config
	              });
	            }
	          }, this);
	          logger.debug("this.clientIntegrations: ", this.clientIntegrations); // intersection of config-plane native sdk destinations with sdk load time destination list

	          this.clientIntegrations = findAllEnabledDestinations(this.loadOnlyIntegrations, this.clientIntegrations); // remove from the list which don't have support yet in SDK

	          this.clientIntegrations = this.clientIntegrations.filter(function (intg) {
	            return integrations[intg.name] != undefined;
	          });
	          this.init(this.clientIntegrations);
	        } catch (error) {
	          handleError(error);
	          logger.debug("===handling config BE response processing error===");
	          logger.debug("autoTrackHandlersRegistered", this.autoTrackHandlersRegistered);

	          if (this.autoTrackFeatureEnabled && !this.autoTrackHandlersRegistered) {
	            addDomEventHandlers();
	            this.autoTrackHandlersRegistered = true;
	          }
	        }
	      }
	      /**
	       * Initialize integrations by addinfg respective scripts
	       * keep the instances reference in core
	       *
	       * @param {*} intgArray
	       * @returns
	       * @memberof Analytics
	       */

	    }, {
	      key: "init",
	      value: function init(intgArray) {
	        var _this = this;

	        var self = this;
	        logger.debug("supported intgs ", integrations); // this.clientIntegrationObjects = [];

	        if (!intgArray || intgArray.length == 0) {
	          if (this.readyCallback) {
	            this.readyCallback();
	          }

	          this.toBeProcessedByIntegrationArray = [];
	          return;
	        }

	        intgArray.forEach(function (intg) {
	          try {
	            logger.debug("[Analytics] init :: trying to initialize integration name:: ", intg.name);
	            var intgClass = integrations[intg.name];
	            var destConfig = intg.config;
	            var intgInstance = new intgClass(destConfig, self);
	            intgInstance.init();
	            logger.debug("initializing destination: ", intg);

	            _this.isInitialized(intgInstance).then(_this.replayEvents);
	          } catch (e) {
	            logger.error("[Analytics] initialize integration (integration.init()) failed :: ", intg.name);
	          }
	        });
	      } // eslint-disable-next-line class-methods-use-this

	    }, {
	      key: "replayEvents",
	      value: function replayEvents(object) {
	        if (object.successfullyLoadedIntegration.length + object.failedToBeLoadedIntegration.length === object.clientIntegrations.length) {
	          logger.debug("===replay events called====", object.successfullyLoadedIntegration.length, object.failedToBeLoadedIntegration.length); // eslint-disable-next-line no-param-reassign

	          object.clientIntegrationObjects = []; // eslint-disable-next-line no-param-reassign

	          object.clientIntegrationObjects = object.successfullyLoadedIntegration;
	          logger.debug("==registering after callback===", object.clientIntegrationObjects.length);
	          object.executeReadyCallback = after_1(object.clientIntegrationObjects.length, object.readyCallback);
	          logger.debug("==registering ready callback===");
	          object.on("ready", object.executeReadyCallback);
	          object.clientIntegrationObjects.forEach(function (intg) {
	            logger.debug("===looping over each successful integration====");

	            if (!intg.isReady || intg.isReady()) {
	              logger.debug("===letting know I am ready=====", intg.name);
	              object.emit("ready");
	            }
	          });

	          if (object.toBeProcessedByIntegrationArray.length > 0) {
	            // send the queued events to the fetched integration
	            object.toBeProcessedByIntegrationArray.forEach(function (event) {
	              var methodName = event[0];
	              event.shift(); // convert common names to sdk identified name

	              if (Object.keys(event[0].message.integrations).length > 0) {
	                tranformToRudderNames(event[0].message.integrations);
	              } // if not specified at event level, All: true is default


	              var clientSuppliedIntegrations = event[0].message.integrations; // get intersection between config plane native enabled destinations
	              // (which were able to successfully load on the page) vs user supplied integrations

	              var succesfulLoadedIntersectClientSuppliedIntegrations = findAllEnabledDestinations(clientSuppliedIntegrations, object.clientIntegrationObjects); // send to all integrations now from the 'toBeProcessedByIntegrationArray' replay queue

	              for (var i = 0; i < succesfulLoadedIntersectClientSuppliedIntegrations.length; i += 1) {
	                try {
	                  if (!succesfulLoadedIntersectClientSuppliedIntegrations[i].isFailed || !succesfulLoadedIntersectClientSuppliedIntegrations[i].isFailed()) {
	                    if (succesfulLoadedIntersectClientSuppliedIntegrations[i][methodName]) {
	                      var _succesfulLoadedInter;

	                      (_succesfulLoadedInter = succesfulLoadedIntersectClientSuppliedIntegrations[i])[methodName].apply(_succesfulLoadedInter, _toConsumableArray(event));
	                    }
	                  }
	                } catch (error) {
	                  handleError(error);
	                }
	              }
	            });
	            object.toBeProcessedByIntegrationArray = [];
	          }
	        }
	      }
	    }, {
	      key: "pause",
	      value: function pause(time) {
	        return new Promise(function (resolve) {
	          setTimeout(resolve, time);
	        });
	      }
	    }, {
	      key: "isInitialized",
	      value: function isInitialized(instance) {
	        var _this2 = this;

	        var time = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
	        return new Promise(function (resolve) {
	          if (instance.isLoaded()) {
	            logger.debug("===integration loaded successfully====", instance.name);

	            _this2.successfullyLoadedIntegration.push(instance);

	            return resolve(_this2);
	          }

	          if (time >= MAX_WAIT_FOR_INTEGRATION_LOAD) {
	            logger.debug("====max wait over====");

	            _this2.failedToBeLoadedIntegration.push(instance);

	            return resolve(_this2);
	          }

	          _this2.pause(INTEGRATION_LOAD_CHECK_INTERVAL).then(function () {
	            logger.debug("====after pause, again checking====");
	            return _this2.isInitialized(instance, time + INTEGRATION_LOAD_CHECK_INTERVAL).then(resolve);
	          });
	        });
	      }
	      /**
	       * Process page params and forward to page call
	       *
	       * @param {*} category
	       * @param {*} name
	       * @param {*} properties
	       * @param {*} options
	       * @param {*} callback
	       * @memberof Analytics
	       */

	    }, {
	      key: "page",
	      value: function page(category, name, properties, options, callback) {
	        if (!this.loaded) return;
	        if (typeof options === "function") callback = options, options = null;
	        if (typeof properties === "function") callback = properties, options = properties = null;
	        if (typeof name === "function") callback = name, options = properties = name = null;
	        if (_typeof(category) === "object" && category != null && category != undefined) options = name, properties = category, name = category = null;
	        if (_typeof(name) === "object" && name != null && name != undefined) options = properties, properties = name, name = null;
	        if (typeof category === "string" && typeof name !== "string") name = category, category = null;

	        if (this.sendAdblockPage && category != "RudderJS-Initiated") {
	          this.sendSampleRequest();
	        }

	        this.processPage(category, name, properties, options, callback);
	      }
	      /**
	       * Process track params and forward to track call
	       *
	       * @param {*} event
	       * @param {*} properties
	       * @param {*} options
	       * @param {*} callback
	       * @memberof Analytics
	       */

	    }, {
	      key: "track",
	      value: function track(event, properties, options, callback) {
	        if (!this.loaded) return;
	        if (typeof options === "function") callback = options, options = null;
	        if (typeof properties === "function") callback = properties, options = null, properties = null;
	        this.processTrack(event, properties, options, callback);
	      }
	      /**
	       * Process identify params and forward to indentify  call
	       *
	       * @param {*} userId
	       * @param {*} traits
	       * @param {*} options
	       * @param {*} callback
	       * @memberof Analytics
	       */

	    }, {
	      key: "identify",
	      value: function identify(userId, traits, options, callback) {
	        if (!this.loaded) return;
	        if (typeof options === "function") callback = options, options = null;
	        if (typeof traits === "function") callback = traits, options = null, traits = null;
	        if (_typeof(userId) === "object") options = traits, traits = userId, userId = this.userId;
	        this.processIdentify(userId, traits, options, callback);
	      }
	      /**
	       *
	       * @param {*} to
	       * @param {*} from
	       * @param {*} options
	       * @param {*} callback
	       */

	    }, {
	      key: "alias",
	      value: function alias(to, from, options, callback) {
	        if (!this.loaded) return;
	        if (typeof options === "function") callback = options, options = null;
	        if (typeof from === "function") callback = from, options = null, from = null;
	        if (_typeof(from) === "object") options = from, from = null;
	        var rudderElement = new RudderElementBuilder().setType("alias").build();
	        rudderElement.message.previousId = from || (this.userId ? this.userId : this.getAnonymousId());
	        rudderElement.message.userId = to;
	        this.processAndSendDataToDestinations("alias", rudderElement, options, callback);
	      }
	      /**
	       *
	       * @param {*} to
	       * @param {*} from
	       * @param {*} options
	       * @param {*} callback
	       */

	    }, {
	      key: "group",
	      value: function group(groupId, traits, options, callback) {
	        if (!this.loaded) return;
	        if (!arguments.length) return;
	        if (typeof options === "function") callback = options, options = null;
	        if (typeof traits === "function") callback = traits, options = null, traits = null;
	        if (_typeof(groupId) === "object") options = traits, traits = groupId, groupId = this.groupId;
	        this.groupId = groupId;
	        this.storage.setGroupId(this.groupId);
	        var rudderElement = new RudderElementBuilder().setType("group").build();

	        if (traits) {
	          for (var key in traits) {
	            this.groupTraits[key] = traits[key];
	          }
	        } else {
	          this.groupTraits = {};
	        }

	        this.storage.setGroupTraits(this.groupTraits);
	        this.processAndSendDataToDestinations("group", rudderElement, options, callback);
	      }
	      /**
	       * Send page call to Rudder BE and to initialized integrations
	       *
	       * @param {*} category
	       * @param {*} name
	       * @param {*} properties
	       * @param {*} options
	       * @param {*} callback
	       * @memberof Analytics
	       */

	    }, {
	      key: "processPage",
	      value: function processPage(category, name, properties, options, callback) {
	        var rudderElement = new RudderElementBuilder().setType("page").build();

	        if (!properties) {
	          properties = {};
	        }

	        if (name) {
	          rudderElement.message.name = name;
	          properties.name = name;
	        }

	        if (category) {
	          rudderElement.message.category = category;
	          properties.category = category;
	        }

	        rudderElement.message.properties = this.getPageProperties(properties); // properties;

	        this.trackPage(rudderElement, options, callback);
	      }
	      /**
	       * Send track call to Rudder BE and to initialized integrations
	       *
	       * @param {*} event
	       * @param {*} properties
	       * @param {*} options
	       * @param {*} callback
	       * @memberof Analytics
	       */

	    }, {
	      key: "processTrack",
	      value: function processTrack(event, properties, options, callback) {
	        var rudderElement = new RudderElementBuilder().setType("track").build();

	        if (event) {
	          rudderElement.setEventName(event);
	        }

	        if (properties) {
	          rudderElement.setProperty(properties);
	        } else {
	          rudderElement.setProperty({});
	        }

	        this.trackEvent(rudderElement, options, callback);
	      }
	      /**
	       * Send identify call to Rudder BE and to initialized integrations
	       *
	       * @param {*} userId
	       * @param {*} traits
	       * @param {*} options
	       * @param {*} callback
	       * @memberof Analytics
	       */

	    }, {
	      key: "processIdentify",
	      value: function processIdentify(userId, traits, options, callback) {
	        if (userId && this.userId && userId !== this.userId) {
	          this.reset();
	        }

	        this.userId = userId;
	        this.storage.setUserId(this.userId);
	        var rudderElement = new RudderElementBuilder().setType("identify").build();

	        if (traits) {
	          for (var key in traits) {
	            this.userTraits[key] = traits[key];
	          }

	          this.storage.setUserTraits(this.userTraits);
	        }

	        this.identifyUser(rudderElement, options, callback);
	      }
	      /**
	       * Identify call supporting rudderelement from builder
	       *
	       * @param {*} rudderElement
	       * @param {*} callback
	       * @memberof Analytics
	       */

	    }, {
	      key: "identifyUser",
	      value: function identifyUser(rudderElement, options, callback) {
	        if (rudderElement.message.userId) {
	          this.userId = rudderElement.message.userId;
	          this.storage.setUserId(this.userId);
	        }

	        if (rudderElement && rudderElement.message && rudderElement.message.context && rudderElement.message.context.traits) {
	          this.userTraits = _objectSpread2({}, rudderElement.message.context.traits);
	          this.storage.setUserTraits(this.userTraits);
	        }

	        this.processAndSendDataToDestinations("identify", rudderElement, options, callback);
	      }
	      /**
	       * Page call supporting rudderelement from builder
	       *
	       * @param {*} rudderElement
	       * @param {*} callback
	       * @memberof Analytics
	       */

	    }, {
	      key: "trackPage",
	      value: function trackPage(rudderElement, options, callback) {
	        this.processAndSendDataToDestinations("page", rudderElement, options, callback);
	      }
	      /**
	       * Track call supporting rudderelement from builder
	       *
	       * @param {*} rudderElement
	       * @param {*} callback
	       * @memberof Analytics
	       */

	    }, {
	      key: "trackEvent",
	      value: function trackEvent(rudderElement, options, callback) {
	        this.processAndSendDataToDestinations("track", rudderElement, options, callback);
	      }
	      /**
	       * Process and send data to destinations along with rudder BE
	       *
	       * @param {*} type
	       * @param {*} rudderElement
	       * @param {*} callback
	       * @memberof Analytics
	       */

	    }, {
	      key: "processAndSendDataToDestinations",
	      value: function processAndSendDataToDestinations(type, rudderElement, options, callback) {
	        try {
	          if (!this.anonymousId) {
	            this.setAnonymousId();
	          } // assign page properties to context
	          // rudderElement.message.context.page = getDefaultPageProperties();


	          rudderElement.message.context.traits = _objectSpread2({}, this.userTraits);
	          logger.debug("anonymousId: ", this.anonymousId);
	          rudderElement.message.anonymousId = this.anonymousId;
	          rudderElement.message.userId = rudderElement.message.userId ? rudderElement.message.userId : this.userId;

	          if (type == "group") {
	            if (this.groupId) {
	              rudderElement.message.groupId = this.groupId;
	            }

	            if (this.groupTraits) {
	              rudderElement.message.traits = _objectSpread2({}, this.groupTraits);
	            }
	          }

	          this.processOptionsParam(rudderElement, options);
	          logger.debug(JSON.stringify(rudderElement)); // structure user supplied integrations object to rudder format

	          if (Object.keys(rudderElement.message.integrations).length > 0) {
	            tranformToRudderNames(rudderElement.message.integrations);
	          } // if not specified at event level, All: true is default


	          var clientSuppliedIntegrations = rudderElement.message.integrations; // get intersection between config plane native enabled destinations
	          // (which were able to successfully load on the page) vs user supplied integrations

	          var succesfulLoadedIntersectClientSuppliedIntegrations = findAllEnabledDestinations(clientSuppliedIntegrations, this.clientIntegrationObjects); // try to first send to all integrations, if list populated from BE

	          try {
	            succesfulLoadedIntersectClientSuppliedIntegrations.forEach(function (obj) {
	              if (!obj.isFailed || !obj.isFailed()) {
	                if (obj[type]) {
	                  obj[type](rudderElement);
	                }
	              }
	            });
	          } catch (err) {
	            handleError({
	              message: "[sendToNative]:".concat(err)
	            });
	          } // config plane native enabled destinations, still not completely loaded
	          // in the page, add the events to a queue and process later


	          if (!this.clientIntegrationObjects) {
	            logger.debug("pushing in replay queue"); // new event processing after analytics initialized  but integrations not fetched from BE

	            this.toBeProcessedByIntegrationArray.push([type, rudderElement]);
	          } // convert integrations object to server identified names, kind of hack now!


	          transformToServerNames(rudderElement.message.integrations); // self analytics process, send to rudder

	          enqueue.call(this, rudderElement, type);
	          logger.debug("".concat(type, " is called "));

	          if (callback) {
	            callback();
	          }
	        } catch (error) {
	          handleError(error);
	        }
	      }
	      /**
	       * add campaign parsed details under context
	       * @param {*} rudderElement
	       */

	    }, {
	      key: "addCampaignInfo",
	      value: function addCampaignInfo(rudderElement) {
	        var _getDefaultPageProper = getDefaultPageProperties(),
	            search = _getDefaultPageProper.search;

	        var campaign = lib(search);

	        if (rudderElement.message.context && _typeof(rudderElement.message.context) === "object") {
	          rudderElement.message.context.campaign = campaign;
	        }
	      }
	      /**
	       * process options parameter
	       * Apart from top level keys merge everyting under context
	       * context.page's default properties are overriden by same keys of
	       * provided properties in case of page call
	       *
	       * @param {*} rudderElement
	       * @param {*} options
	       * @memberof Analytics
	       */

	    }, {
	      key: "processOptionsParam",
	      value: function processOptionsParam(rudderElement, options) {
	        var _rudderElement$messag = rudderElement.message,
	            type = _rudderElement$messag.type,
	            properties = _rudderElement$messag.properties;
	        this.addCampaignInfo(rudderElement); // assign page properties to context.page

	        rudderElement.message.context.page = type == "page" ? this.getContextPageProperties(properties) : this.getContextPageProperties();
	        var toplevelElements = ["integrations", "anonymousId", "originalTimestamp"];

	        for (var key in options) {
	          if (toplevelElements.includes(key)) {
	            rudderElement.message[key] = options[key];
	          } else if (key !== "context") {
	            rudderElement.message.context = lodash_merge(rudderElement.message.context, _defineProperty({}, key, options[key]));
	          } else if (_typeof(options[key]) === "object" && options[key] != null) {
	            rudderElement.message.context = lodash_merge(rudderElement.message.context, _objectSpread2({}, options[key]));
	          } else {
	            logger.error("[Analytics: processOptionsParam] context passed in options is not object");
	          }
	        }
	      }
	    }, {
	      key: "getPageProperties",
	      value: function getPageProperties(properties, options) {
	        var defaultPageProperties = getDefaultPageProperties();
	        var optionPageProperties = options && options.page ? options.page : {};

	        for (var key in defaultPageProperties) {
	          if (properties[key] === undefined) {
	            properties[key] = optionPageProperties[key] || defaultPageProperties[key];
	          }
	        }

	        return properties;
	      } // Assign page properties to context.page if the same property is not provided under context.page

	    }, {
	      key: "getContextPageProperties",
	      value: function getContextPageProperties(properties) {
	        var defaultPageProperties = getDefaultPageProperties();
	        var contextPageProperties = {};

	        for (var key in defaultPageProperties) {
	          contextPageProperties[key] = properties && properties[key] ? properties[key] : defaultPageProperties[key];
	        }

	        return contextPageProperties;
	      }
	      /**
	       * Clear user information
	       *
	       * @memberof Analytics
	       */

	    }, {
	      key: "reset",
	      value: function reset() {
	        if (!this.loaded) return;
	        this.userId = "";
	        this.userTraits = {};
	        this.groupId = "";
	        this.groupTraits = {};
	        this.storage.clear();
	      }
	    }, {
	      key: "getAnonymousId",
	      value: function getAnonymousId() {
	        // if (!this.loaded) return;
	        this.anonymousId = this.storage.getAnonymousId();

	        if (!this.anonymousId) {
	          this.setAnonymousId();
	        }

	        return this.anonymousId;
	      }
	    }, {
	      key: "setAnonymousId",
	      value: function setAnonymousId(anonymousId) {
	        // if (!this.loaded) return;
	        this.anonymousId = anonymousId || generateUUID();
	        this.storage.setAnonymousId(this.anonymousId);
	      }
	    }, {
	      key: "isValidWriteKey",
	      value: function isValidWriteKey(writeKey) {
	        if (!writeKey || typeof writeKey !== "string" || writeKey.trim().length == 0) {
	          return false;
	        }

	        return true;
	      }
	    }, {
	      key: "isValidServerUrl",
	      value: function isValidServerUrl(serverUrl) {
	        if (!serverUrl || typeof serverUrl !== "string" || serverUrl.trim().length == 0) {
	          return false;
	        }

	        return true;
	      }
	      /**
	       * Call control pane to get client configs
	       *
	       * @param {*} writeKey
	       * @memberof Analytics
	       */

	    }, {
	      key: "load",
	      value: function load(writeKey, serverUrl, options) {
	        var _this3 = this;

	        logger.debug("inside load ");
	        if (this.loaded) return;
	        var configUrl = CONFIG_URL;

	        if (!this.isValidWriteKey(writeKey) || !this.isValidServerUrl(serverUrl)) {
	          handleError({
	            message: "[Analytics] load:: Unable to load due to wrong writeKey or serverUrl"
	          });
	          throw Error("failed to initialize");
	        }

	        if (options && options.logLevel) {
	          logger.setLogLevel(options.logLevel);
	        }

	        if (options && options.integrations) {
	          Object.assign(this.loadOnlyIntegrations, options.integrations);
	          tranformToRudderNames(this.loadOnlyIntegrations);
	        }

	        if (options && options.configUrl) {
	          configUrl = getUserProvidedConfigUrl(options.configUrl);
	        }

	        if (options && options.sendAdblockPage) {
	          this.sendAdblockPage = true;
	        }

	        if (options && options.sendAdblockPageOptions) {
	          if (_typeof(options.sendAdblockPageOptions) === "object") {
	            this.sendAdblockPageOptions = options.sendAdblockPageOptions;
	          }
	        }

	        if (options && options.clientSuppliedCallbacks) {
	          // convert to rudder recognised method names
	          var tranformedCallbackMapping = {};
	          Object.keys(this.methodToCallbackMapping).forEach(function (methodName) {
	            if (_this3.methodToCallbackMapping.hasOwnProperty(methodName)) {
	              if (options.clientSuppliedCallbacks[_this3.methodToCallbackMapping[methodName]]) {
	                tranformedCallbackMapping[methodName] = options.clientSuppliedCallbacks[_this3.methodToCallbackMapping[methodName]];
	              }
	            }
	          });
	          Object.assign(this.clientSuppliedCallbacks, tranformedCallbackMapping);
	          this.registerCallbacks(true);
	        }

	        if (options && options.queueOptions && options.queueOptions != null && _typeof(options.queueOptions) == "object") {
	          this.eventRepository.startQueue(options.queueOptions);
	        } else {
	          this.eventRepository.startQueue({});
	        }

	        this.eventRepository.writeKey = writeKey;

	        if (serverUrl) {
	          this.eventRepository.url = serverUrl;
	        }

	        this.initializeUser();
	        this.loaded = true;

	        if (options && options.valTrackingList && options.valTrackingList.push == Array.prototype.push) {
	          this.trackValues = options.valTrackingList;
	        }

	        if (options && options.useAutoTracking) {
	          this.autoTrackFeatureEnabled = true;

	          if (this.autoTrackFeatureEnabled && !this.autoTrackHandlersRegistered) {
	            addDomEventHandlers();
	            this.autoTrackHandlersRegistered = true;
	            logger.debug("autoTrackHandlersRegistered", this.autoTrackHandlersRegistered);
	          }
	        }

	        try {
	          getJSONTrimmed(this, configUrl, writeKey, this.processResponse);
	        } catch (error) {
	          handleError(error);

	          if (this.autoTrackFeatureEnabled && !this.autoTrackHandlersRegistered) {
	            addDomEventHandlers();
	          }
	        }
	      }
	    }, {
	      key: "ready",
	      value: function ready(callback) {
	        if (!this.loaded) return;

	        if (typeof callback === "function") {
	          this.readyCallback = callback;
	          return;
	        }

	        logger.error("ready callback is not a function");
	      }
	    }, {
	      key: "initializeCallbacks",
	      value: function initializeCallbacks() {
	        var _this4 = this;

	        Object.keys(this.methodToCallbackMapping).forEach(function (methodName) {
	          if (_this4.methodToCallbackMapping.hasOwnProperty(methodName)) {
	            _this4.on(methodName, function () {});
	          }
	        });
	      }
	    }, {
	      key: "registerCallbacks",
	      value: function registerCallbacks(calledFromLoad) {
	        var _this5 = this;

	        if (!calledFromLoad) {
	          Object.keys(this.methodToCallbackMapping).forEach(function (methodName) {
	            if (_this5.methodToCallbackMapping.hasOwnProperty(methodName)) {
	              if (window.rudderanalytics) {
	                if (typeof window.rudderanalytics[_this5.methodToCallbackMapping[methodName]] === "function") {
	                  _this5.clientSuppliedCallbacks[methodName] = window.rudderanalytics[_this5.methodToCallbackMapping[methodName]];
	                }
	              } // let callback =
	              //   ? typeof window.rudderanalytics[
	              //       this.methodToCallbackMapping[methodName]
	              //     ] == "function"
	              //     ? window.rudderanalytics[this.methodToCallbackMapping[methodName]]
	              //     : () => {}
	              //   : () => {};
	              // logger.debug("registerCallbacks", methodName, callback);
	              // this.on(methodName, callback);

	            }
	          });
	        }

	        Object.keys(this.clientSuppliedCallbacks).forEach(function (methodName) {
	          if (_this5.clientSuppliedCallbacks.hasOwnProperty(methodName)) {
	            logger.debug("registerCallbacks", methodName, _this5.clientSuppliedCallbacks[methodName]);

	            _this5.on(methodName, _this5.clientSuppliedCallbacks[methodName]);
	          }
	        });
	      }
	    }, {
	      key: "sendSampleRequest",
	      value: function sendSampleRequest() {
	        ScriptLoader("ad-block", "//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js");
	      }
	      /**
	       * parse the given query string into usable Rudder object
	       * @param {*} query
	       */

	    }, {
	      key: "parseQueryString",
	      value: function parseQueryString(query) {
	        function getTraitsFromQueryObject(qObj) {
	          var traits = {};
	          Object.keys(qObj).forEach(function (key) {
	            if (key.substr(0, queryDefaults.trait.length) == queryDefaults.trait) {
	              traits[key.substr(queryDefaults.trait.length)] = qObj[key];
	            }
	          });
	          return traits;
	        }

	        function getEventPropertiesFromQueryObject(qObj) {
	          var props = {};
	          Object.keys(qObj).forEach(function (key) {
	            if (key.substr(0, queryDefaults.prop.length) == queryDefaults.prop) {
	              props[key.substr(queryDefaults.prop.length)] = qObj[key];
	            }
	          });
	          return props;
	        }

	        var returnObj = {};
	        var queryObject = componentQuerystring.parse(query);
	        var userTraits = getTraitsFromQueryObject(queryObject);
	        var eventProps = getEventPropertiesFromQueryObject(queryObject);

	        if (queryObject.ajs_uid) {
	          returnObj.userId = queryObject.ajs_uid;
	          returnObj.traits = userTraits;
	        }

	        if (queryObject.ajs_aid) {
	          returnObj.anonymousId = queryObject.ajs_aid;
	        }

	        if (queryObject.ajs_event) {
	          returnObj.event = queryObject.ajs_event;
	          returnObj.properties = eventProps;
	        }

	        return returnObj;
	      }
	    }]);

	    return Analytics;
	  }();

	  function pushDataToAnalyticsArray(argumentsArray, obj) {
	    if (obj.anonymousId) {
	      if (obj.userId) {
	        argumentsArray.unshift(["setAnonymousId", obj.anonymousId], ["identify", obj.userId, obj.traits]);
	      } else {
	        argumentsArray.unshift(["setAnonymousId", obj.anonymousId]);
	      }
	    } else if (obj.userId) {
	      argumentsArray.unshift(["identify", obj.userId, obj.traits]);
	    }

	    if (obj.event) {
	      argumentsArray.push(["track", obj.event, obj.properties]);
	    }
	  }

	  var instance = new Analytics();
	  componentEmitter(instance);
	  window.addEventListener("error", function (e) {
	    handleError(e, instance);
	  }, true); // if (true) {
	  // test for adblocker
	  // instance.sendSampleRequest()
	  // initialize supported callbacks

	  instance.initializeCallbacks(); // register supported callbacks

	  instance.registerCallbacks(false);
	  var eventsPushedAlready = !!window.rudderanalytics && window.rudderanalytics.push == Array.prototype.push;
	  var argumentsArray = window.rudderanalytics;

	  while (argumentsArray && argumentsArray[0] && argumentsArray[0][0] !== "load") {
	    argumentsArray.shift();
	  }

	  if (argumentsArray && argumentsArray.length > 0 && argumentsArray[0][0] === "load") {
	    var method = argumentsArray[0][0];
	    argumentsArray[0].shift();
	    logger.debug("=====from init, calling method:: ", method);
	    instance[method].apply(instance, _toConsumableArray(argumentsArray[0]));
	    argumentsArray.shift();
	  } // once loaded, parse querystring of the page url to send events


	  var parsedQueryObject = instance.parseQueryString(window.location.search);
	  pushDataToAnalyticsArray(argumentsArray, parsedQueryObject);

	  if (eventsPushedAlready && argumentsArray && argumentsArray.length > 0) {
	    for (var i$1 = 0; i$1 < argumentsArray.length; i$1++) {
	      instance.toBeProcessedArray.push(argumentsArray[i$1]);
	    }

	    for (var _i = 0; _i < instance.toBeProcessedArray.length; _i++) {
	      var event = _toConsumableArray(instance.toBeProcessedArray[_i]);

	      var _method = event[0];
	      event.shift();
	      logger.debug("=====from init, calling method:: ", _method);

	      instance[_method].apply(instance, _toConsumableArray(event));
	    }

	    instance.toBeProcessedArray = [];
	  } // }


	  var ready = instance.ready.bind(instance);
	  var identify = instance.identify.bind(instance);
	  var page = instance.page.bind(instance);
	  var track = instance.track.bind(instance);
	  var alias = instance.alias.bind(instance);
	  var group = instance.group.bind(instance);
	  var reset = instance.reset.bind(instance);
	  var load = instance.load.bind(instance);
	  var initialized = instance.initialized = true;
	  var getAnonymousId = instance.getAnonymousId.bind(instance);
	  var setAnonymousId = instance.setAnonymousId.bind(instance);

	  exports.alias = alias;
	  exports.getAnonymousId = getAnonymousId;
	  exports.group = group;
	  exports.identify = identify;
	  exports.initialized = initialized;
	  exports.load = load;
	  exports.page = page;
	  exports.ready = ready;
	  exports.reset = reset;
	  exports.setAnonymousId = setAnonymousId;
	  exports.track = track;

	  Object.defineProperty(exports, '__esModule', { value: true });

	})));
	});

	var analytics = unwrapExports(rudderSdkJsDevelop);

	analytics.load("1mdgM4QbwpIASnXJPaOhwEidftp", "http://localhost:8080/", {
	  //integrations: { All: false, GA: true, Hotjar: true },
	  logLevel: "DEBUG",
	  configUrl: "http://localhost:5000/sourceConfig",
	  loadIntegration: false
	}); //analytics.setAnonymousId("my-user-id");

	analytics.page();
	analytics.identify("12345");
	analytics.track("my event", {
	  prop1: "val1"
	}, {
	  integrations: {
	    All: true
	  }
	}); //analytics.alias("new-user-id");

}());
