(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = global || self, factory(global.rudderanalytics = {}));
}(this, (function (exports) { 'use strict';

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

  var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

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

    var freeGlobal = _typeof(commonjsGlobal) == 'object' && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;
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

  function getCurrency(val) {
    if (!val) return;

    if (typeof val === "number") {
      return val;
    }

    if (typeof val !== "string") {
      return;
    }

    val = val.replace(/\$/g, "");
    val = parseFloat(val);

    if (!isNaN(val)) {
      return val;
    }
  }

  function getRevenue(properties, eventName) {
    var revenue = properties.revenue;
    var orderCompletedRegExp = /^[ _]?completed[ _]?order[ _]?|^[ _]?order[ _]?completed[ _]?$/i; // it's always revenue, unless it's called during an order completion.

    if (!revenue && eventName && eventName.match(orderCompletedRegExp)) {
      revenue = properties.total;
    }

    return getCurrency(revenue);
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
   * reject all null values from array/object
   * @param  {} obj
   * @param  {} fn
   */


  function rejectArr(obj, fn) {
    fn = fn || compact;
    return type(obj) == "array" ? rejectarray(obj, fn) : rejectobject(obj, fn);
  }
  /**
   * particular case when rejecting an array
   * @param  {} arr
   * @param  {} fn
   */


  var rejectarray = function rejectarray(arr, fn) {
    var ret = [];

    for (var i = 0; i < arr.length; ++i) {
      if (!fn(arr[i], i)) ret[ret.length] = arr[i];
    }

    return ret;
  };
  /**
   * Rejecting null from any object other than arrays
   * @param  {} obj
   * @param  {} fn
   *
   */


  var rejectobject = function rejectobject(obj, fn) {
    var ret = {};

    for (var k in obj) {
      if (obj.hasOwnProperty(k) && !fn(obj[k], k)) {
        ret[k] = obj[k];
      }
    }

    return ret;
  };

  function compact(value) {
    return value == null;
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
  /* ------- Start FlattenJson -----------
   * This function flatten given json object to single level.
   * So if there is nested object or array, all will apear in first level properties of an object.
   * Following is case we are handling in this function ::
   * condition 1: String
   * condition 2: Array
   * condition 3: Nested object
   */


  function recurse(cur, prop, result) {
    var res = result;

    if (Object(cur) !== cur) {
      res[prop] = cur;
    } else if (Array.isArray(cur)) {
      var l = cur.length;

      for (var i = 0; i < l; i += 1) {
        recurse(cur[i], prop ? "".concat(prop, ".").concat(i) : "".concat(i), res);
      }

      if (l === 0) res[prop] = [];
    } else {
      var isEmpty = true;
      Object.keys(cur).forEach(function (key) {
        isEmpty = false;
        recurse(cur[key], prop ? "".concat(prop, ".").concat(key) : key, res);
      });
      if (isEmpty) res[prop] = {};
    }

    return res;
  }

  function flattenJsonPayload(data) {
    return recurse(data, "", {});
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

  var HubSpot = /*#__PURE__*/function () {
    function HubSpot(config) {
      _classCallCheck(this, HubSpot);

      this.hubId = config.hubID; // 6405167

      this.name = "HS";
    }

    _createClass(HubSpot, [{
      key: "init",
      value: function init() {
        var hubspotJs = "https://js.hs-scripts.com/".concat(this.hubId, ".js");
        ScriptLoader("hubspot-integration", hubspotJs);
        logger.debug("===in init HS===");
      }
    }, {
      key: "identify",
      value: function identify(rudderElement) {
        logger.debug("in HubspotAnalyticsManager identify");
        var traits = rudderElement.message.context.traits;
        var traitsValue = {};

        for (var k in traits) {
          if (!!Object.getOwnPropertyDescriptor(traits, k) && traits[k]) {
            var hubspotkey = k; // k.startsWith("rl_") ? k.substring(3, k.length) : k;

            if (Object.prototype.toString.call(traits[k]) == "[object Date]") {
              traitsValue[hubspotkey] = traits[k].getTime();
            } else {
              traitsValue[hubspotkey] = traits[k];
            }
          }
        }
        /* if (traitsValue["address"]) {
          let address = traitsValue["address"];
          //traitsValue.delete(address)
          delete traitsValue["address"];
          for (let k in address) {
            if (!!Object.getOwnPropertyDescriptor(address, k) && address[k]) {
              let hubspotkey = k;//k.startsWith("rl_") ? k.substring(3, k.length) : k;
              hubspotkey = hubspotkey == "street" ? "address" : hubspotkey;
              traitsValue[hubspotkey] = address[k];
            }
          }
        } */


        var userProperties = rudderElement.message.context.user_properties;

        for (var _k in userProperties) {
          if (!!Object.getOwnPropertyDescriptor(userProperties, _k) && userProperties[_k]) {
            var _hubspotkey = _k; // k.startsWith("rl_") ? k.substring(3, k.length) : k;

            traitsValue[_hubspotkey] = userProperties[_k];
          }
        }

        logger.debug(traitsValue);

        if ((typeof window === "undefined" ? "undefined" : _typeof(window)) !== undefined) {
          var _hsq = window._hsq = window._hsq || [];

          _hsq.push(["identify", traitsValue]);
        }
      }
    }, {
      key: "track",
      value: function track(rudderElement) {
        logger.debug("in HubspotAnalyticsManager track");

        var _hsq = window._hsq = window._hsq || [];

        var eventValue = {};
        eventValue.id = rudderElement.message.event;

        if (rudderElement.message.properties && (rudderElement.message.properties.revenue || rudderElement.message.properties.value)) {
          eventValue.value = rudderElement.message.properties.revenue || rudderElement.message.properties.value;
        }

        _hsq.push(["trackEvent", eventValue]);
      }
    }, {
      key: "page",
      value: function page(rudderElement) {
        logger.debug("in HubspotAnalyticsManager page");

        var _hsq = window._hsq = window._hsq || []; // logger.debug("path: " + rudderElement.message.properties.path);
        // _hsq.push(["setPath", rudderElement.message.properties.path]);

        /* _hsq.push(["identify",{
            email: "testtrackpage@email.com"
        }]); */


        if (rudderElement.message.properties && rudderElement.message.properties.path) {
          _hsq.push(["setPath", rudderElement.message.properties.path]);
        }

        _hsq.push(["trackPageView"]);
      }
    }, {
      key: "isLoaded",
      value: function isLoaded() {
        logger.debug("in hubspot isLoaded");
        return !!(window._hsq && window._hsq.push !== Array.prototype.push);
      }
    }, {
      key: "isReady",
      value: function isReady() {
        return !!(window._hsq && window._hsq.push !== Array.prototype.push);
      }
    }]);

    return HubSpot;
  }();

  var index =  HubSpot ;

  /* globals window, HTMLElement */
  var objProto = Object.prototype;
  var owns = objProto.hasOwnProperty;
  var toStr$1 = objProto.toString;
  var symbolValueOf;

  if (typeof Symbol === 'function') {
    symbolValueOf = Symbol.prototype.valueOf;
  }

  var bigIntValueOf;

  if (typeof BigInt === 'function') {
    bigIntValueOf = BigInt.prototype.valueOf;
  }

  var isActualNaN = function isActualNaN(value) {
    return value !== value;
  };

  var NON_HOST_TYPES = {
    'boolean': 1,
    number: 1,
    string: 1,
    undefined: 1
  };
  var base64Regex = /^([A-Za-z0-9+/]{4})*([A-Za-z0-9+/]{4}|[A-Za-z0-9+/]{3}=|[A-Za-z0-9+/]{2}==)$/;
  var hexRegex = /^[A-Fa-f0-9]+$/;
  /**
   * Expose `is`
   */

  var is = {};
  /**
   * Test general.
   */

  /**
   * is.type
   * Test if `value` is a type of `type`.
   *
   * @param {*} value value to test
   * @param {String} type type
   * @return {Boolean} true if `value` is a type of `type`, false otherwise
   * @api public
   */

  is.a = is.type = function (value, type) {
    return _typeof(value) === type;
  };
  /**
   * is.defined
   * Test if `value` is defined.
   *
   * @param {*} value value to test
   * @return {Boolean} true if 'value' is defined, false otherwise
   * @api public
   */


  is.defined = function (value) {
    return typeof value !== 'undefined';
  };
  /**
   * is.empty
   * Test if `value` is empty.
   *
   * @param {*} value value to test
   * @return {Boolean} true if `value` is empty, false otherwise
   * @api public
   */


  is.empty = function (value) {
    var type = toStr$1.call(value);
    var key;

    if (type === '[object Array]' || type === '[object Arguments]' || type === '[object String]') {
      return value.length === 0;
    }

    if (type === '[object Object]') {
      for (key in value) {
        if (owns.call(value, key)) {
          return false;
        }
      }

      return true;
    }

    return !value;
  };
  /**
   * is.equal
   * Test if `value` is equal to `other`.
   *
   * @param {*} value value to test
   * @param {*} other value to compare with
   * @return {Boolean} true if `value` is equal to `other`, false otherwise
   */


  is.equal = function equal(value, other) {
    if (value === other) {
      return true;
    }

    var type = toStr$1.call(value);
    var key;

    if (type !== toStr$1.call(other)) {
      return false;
    }

    if (type === '[object Object]') {
      for (key in value) {
        if (!is.equal(value[key], other[key]) || !(key in other)) {
          return false;
        }
      }

      for (key in other) {
        if (!is.equal(value[key], other[key]) || !(key in value)) {
          return false;
        }
      }

      return true;
    }

    if (type === '[object Array]') {
      key = value.length;

      if (key !== other.length) {
        return false;
      }

      while (key--) {
        if (!is.equal(value[key], other[key])) {
          return false;
        }
      }

      return true;
    }

    if (type === '[object Function]') {
      return value.prototype === other.prototype;
    }

    if (type === '[object Date]') {
      return value.getTime() === other.getTime();
    }

    return false;
  };
  /**
   * is.hosted
   * Test if `value` is hosted by `host`.
   *
   * @param {*} value to test
   * @param {*} host host to test with
   * @return {Boolean} true if `value` is hosted by `host`, false otherwise
   * @api public
   */


  is.hosted = function (value, host) {
    var type = _typeof(host[value]);

    return type === 'object' ? !!host[value] : !NON_HOST_TYPES[type];
  };
  /**
   * is.instance
   * Test if `value` is an instance of `constructor`.
   *
   * @param {*} value value to test
   * @return {Boolean} true if `value` is an instance of `constructor`
   * @api public
   */


  is.instance = is['instanceof'] = function (value, constructor) {
    return value instanceof constructor;
  };
  /**
   * is.nil / is.null
   * Test if `value` is null.
   *
   * @param {*} value value to test
   * @return {Boolean} true if `value` is null, false otherwise
   * @api public
   */


  is.nil = is['null'] = function (value) {
    return value === null;
  };
  /**
   * is.undef / is.undefined
   * Test if `value` is undefined.
   *
   * @param {*} value value to test
   * @return {Boolean} true if `value` is undefined, false otherwise
   * @api public
   */


  is.undef = is.undefined = function (value) {
    return typeof value === 'undefined';
  };
  /**
   * Test arguments.
   */

  /**
   * is.args
   * Test if `value` is an arguments object.
   *
   * @param {*} value value to test
   * @return {Boolean} true if `value` is an arguments object, false otherwise
   * @api public
   */


  is.args = is.arguments = function (value) {
    var isStandardArguments = toStr$1.call(value) === '[object Arguments]';
    var isOldArguments = !is.array(value) && is.arraylike(value) && is.object(value) && is.fn(value.callee);
    return isStandardArguments || isOldArguments;
  };
  /**
   * Test array.
   */

  /**
   * is.array
   * Test if 'value' is an array.
   *
   * @param {*} value value to test
   * @return {Boolean} true if `value` is an array, false otherwise
   * @api public
   */


  is.array = Array.isArray || function (value) {
    return toStr$1.call(value) === '[object Array]';
  };
  /**
   * is.arguments.empty
   * Test if `value` is an empty arguments object.
   *
   * @param {*} value value to test
   * @return {Boolean} true if `value` is an empty arguments object, false otherwise
   * @api public
   */


  is.args.empty = function (value) {
    return is.args(value) && value.length === 0;
  };
  /**
   * is.array.empty
   * Test if `value` is an empty array.
   *
   * @param {*} value value to test
   * @return {Boolean} true if `value` is an empty array, false otherwise
   * @api public
   */


  is.array.empty = function (value) {
    return is.array(value) && value.length === 0;
  };
  /**
   * is.arraylike
   * Test if `value` is an arraylike object.
   *
   * @param {*} value value to test
   * @return {Boolean} true if `value` is an arguments object, false otherwise
   * @api public
   */


  is.arraylike = function (value) {
    return !!value && !is.bool(value) && owns.call(value, 'length') && isFinite(value.length) && is.number(value.length) && value.length >= 0;
  };
  /**
   * Test boolean.
   */

  /**
   * is.bool
   * Test if `value` is a boolean.
   *
   * @param {*} value value to test
   * @return {Boolean} true if `value` is a boolean, false otherwise
   * @api public
   */


  is.bool = is['boolean'] = function (value) {
    return toStr$1.call(value) === '[object Boolean]';
  };
  /**
   * is.false
   * Test if `value` is false.
   *
   * @param {*} value value to test
   * @return {Boolean} true if `value` is false, false otherwise
   * @api public
   */


  is['false'] = function (value) {
    return is.bool(value) && Boolean(Number(value)) === false;
  };
  /**
   * is.true
   * Test if `value` is true.
   *
   * @param {*} value value to test
   * @return {Boolean} true if `value` is true, false otherwise
   * @api public
   */


  is['true'] = function (value) {
    return is.bool(value) && Boolean(Number(value)) === true;
  };
  /**
   * Test date.
   */

  /**
   * is.date
   * Test if `value` is a date.
   *
   * @param {*} value value to test
   * @return {Boolean} true if `value` is a date, false otherwise
   * @api public
   */


  is.date = function (value) {
    return toStr$1.call(value) === '[object Date]';
  };
  /**
   * is.date.valid
   * Test if `value` is a valid date.
   *
   * @param {*} value value to test
   * @returns {Boolean} true if `value` is a valid date, false otherwise
   */


  is.date.valid = function (value) {
    return is.date(value) && !isNaN(Number(value));
  };
  /**
   * Test element.
   */

  /**
   * is.element
   * Test if `value` is an html element.
   *
   * @param {*} value value to test
   * @return {Boolean} true if `value` is an HTML Element, false otherwise
   * @api public
   */


  is.element = function (value) {
    return value !== undefined && typeof HTMLElement !== 'undefined' && value instanceof HTMLElement && value.nodeType === 1;
  };
  /**
   * Test error.
   */

  /**
   * is.error
   * Test if `value` is an error object.
   *
   * @param {*} value value to test
   * @return {Boolean} true if `value` is an error object, false otherwise
   * @api public
   */


  is.error = function (value) {
    return toStr$1.call(value) === '[object Error]';
  };
  /**
   * Test function.
   */

  /**
   * is.fn / is.function (deprecated)
   * Test if `value` is a function.
   *
   * @param {*} value value to test
   * @return {Boolean} true if `value` is a function, false otherwise
   * @api public
   */


  is.fn = is['function'] = function (value) {
    var isAlert = typeof window !== 'undefined' && value === window.alert;

    if (isAlert) {
      return true;
    }

    var str = toStr$1.call(value);
    return str === '[object Function]' || str === '[object GeneratorFunction]' || str === '[object AsyncFunction]';
  };
  /**
   * Test number.
   */

  /**
   * is.number
   * Test if `value` is a number.
   *
   * @param {*} value value to test
   * @return {Boolean} true if `value` is a number, false otherwise
   * @api public
   */


  is.number = function (value) {
    return toStr$1.call(value) === '[object Number]';
  };
  /**
   * is.infinite
   * Test if `value` is positive or negative infinity.
   *
   * @param {*} value value to test
   * @return {Boolean} true if `value` is positive or negative Infinity, false otherwise
   * @api public
   */


  is.infinite = function (value) {
    return value === Infinity || value === -Infinity;
  };
  /**
   * is.decimal
   * Test if `value` is a decimal number.
   *
   * @param {*} value value to test
   * @return {Boolean} true if `value` is a decimal number, false otherwise
   * @api public
   */


  is.decimal = function (value) {
    return is.number(value) && !isActualNaN(value) && !is.infinite(value) && value % 1 !== 0;
  };
  /**
   * is.divisibleBy
   * Test if `value` is divisible by `n`.
   *
   * @param {Number} value value to test
   * @param {Number} n dividend
   * @return {Boolean} true if `value` is divisible by `n`, false otherwise
   * @api public
   */


  is.divisibleBy = function (value, n) {
    var isDividendInfinite = is.infinite(value);
    var isDivisorInfinite = is.infinite(n);
    var isNonZeroNumber = is.number(value) && !isActualNaN(value) && is.number(n) && !isActualNaN(n) && n !== 0;
    return isDividendInfinite || isDivisorInfinite || isNonZeroNumber && value % n === 0;
  };
  /**
   * is.integer
   * Test if `value` is an integer.
   *
   * @param value to test
   * @return {Boolean} true if `value` is an integer, false otherwise
   * @api public
   */


  is.integer = is['int'] = function (value) {
    return is.number(value) && !isActualNaN(value) && value % 1 === 0;
  };
  /**
   * is.maximum
   * Test if `value` is greater than 'others' values.
   *
   * @param {Number} value value to test
   * @param {Array} others values to compare with
   * @return {Boolean} true if `value` is greater than `others` values
   * @api public
   */


  is.maximum = function (value, others) {
    if (isActualNaN(value)) {
      throw new TypeError('NaN is not a valid value');
    } else if (!is.arraylike(others)) {
      throw new TypeError('second argument must be array-like');
    }

    var len = others.length;

    while (--len >= 0) {
      if (value < others[len]) {
        return false;
      }
    }

    return true;
  };
  /**
   * is.minimum
   * Test if `value` is less than `others` values.
   *
   * @param {Number} value value to test
   * @param {Array} others values to compare with
   * @return {Boolean} true if `value` is less than `others` values
   * @api public
   */


  is.minimum = function (value, others) {
    if (isActualNaN(value)) {
      throw new TypeError('NaN is not a valid value');
    } else if (!is.arraylike(others)) {
      throw new TypeError('second argument must be array-like');
    }

    var len = others.length;

    while (--len >= 0) {
      if (value > others[len]) {
        return false;
      }
    }

    return true;
  };
  /**
   * is.nan
   * Test if `value` is not a number.
   *
   * @param {*} value value to test
   * @return {Boolean} true if `value` is not a number, false otherwise
   * @api public
   */


  is.nan = function (value) {
    return !is.number(value) || value !== value;
  };
  /**
   * is.even
   * Test if `value` is an even number.
   *
   * @param {Number} value value to test
   * @return {Boolean} true if `value` is an even number, false otherwise
   * @api public
   */


  is.even = function (value) {
    return is.infinite(value) || is.number(value) && value === value && value % 2 === 0;
  };
  /**
   * is.odd
   * Test if `value` is an odd number.
   *
   * @param {Number} value value to test
   * @return {Boolean} true if `value` is an odd number, false otherwise
   * @api public
   */


  is.odd = function (value) {
    return is.infinite(value) || is.number(value) && value === value && value % 2 !== 0;
  };
  /**
   * is.ge
   * Test if `value` is greater than or equal to `other`.
   *
   * @param {Number} value value to test
   * @param {Number} other value to compare with
   * @return {Boolean}
   * @api public
   */


  is.ge = function (value, other) {
    if (isActualNaN(value) || isActualNaN(other)) {
      throw new TypeError('NaN is not a valid value');
    }

    return !is.infinite(value) && !is.infinite(other) && value >= other;
  };
  /**
   * is.gt
   * Test if `value` is greater than `other`.
   *
   * @param {Number} value value to test
   * @param {Number} other value to compare with
   * @return {Boolean}
   * @api public
   */


  is.gt = function (value, other) {
    if (isActualNaN(value) || isActualNaN(other)) {
      throw new TypeError('NaN is not a valid value');
    }

    return !is.infinite(value) && !is.infinite(other) && value > other;
  };
  /**
   * is.le
   * Test if `value` is less than or equal to `other`.
   *
   * @param {Number} value value to test
   * @param {Number} other value to compare with
   * @return {Boolean} if 'value' is less than or equal to 'other'
   * @api public
   */


  is.le = function (value, other) {
    if (isActualNaN(value) || isActualNaN(other)) {
      throw new TypeError('NaN is not a valid value');
    }

    return !is.infinite(value) && !is.infinite(other) && value <= other;
  };
  /**
   * is.lt
   * Test if `value` is less than `other`.
   *
   * @param {Number} value value to test
   * @param {Number} other value to compare with
   * @return {Boolean} if `value` is less than `other`
   * @api public
   */


  is.lt = function (value, other) {
    if (isActualNaN(value) || isActualNaN(other)) {
      throw new TypeError('NaN is not a valid value');
    }

    return !is.infinite(value) && !is.infinite(other) && value < other;
  };
  /**
   * is.within
   * Test if `value` is within `start` and `finish`.
   *
   * @param {Number} value value to test
   * @param {Number} start lower bound
   * @param {Number} finish upper bound
   * @return {Boolean} true if 'value' is is within 'start' and 'finish'
   * @api public
   */


  is.within = function (value, start, finish) {
    if (isActualNaN(value) || isActualNaN(start) || isActualNaN(finish)) {
      throw new TypeError('NaN is not a valid value');
    } else if (!is.number(value) || !is.number(start) || !is.number(finish)) {
      throw new TypeError('all arguments must be numbers');
    }

    var isAnyInfinite = is.infinite(value) || is.infinite(start) || is.infinite(finish);
    return isAnyInfinite || value >= start && value <= finish;
  };
  /**
   * Test object.
   */

  /**
   * is.object
   * Test if `value` is an object.
   *
   * @param {*} value value to test
   * @return {Boolean} true if `value` is an object, false otherwise
   * @api public
   */


  is.object = function (value) {
    return toStr$1.call(value) === '[object Object]';
  };
  /**
   * is.primitive
   * Test if `value` is a primitive.
   *
   * @param {*} value value to test
   * @return {Boolean} true if `value` is a primitive, false otherwise
   * @api public
   */


  is.primitive = function isPrimitive(value) {
    if (!value) {
      return true;
    }

    if (_typeof(value) === 'object' || is.object(value) || is.fn(value) || is.array(value)) {
      return false;
    }

    return true;
  };
  /**
   * is.hash
   * Test if `value` is a hash - a plain object literal.
   *
   * @param {*} value value to test
   * @return {Boolean} true if `value` is a hash, false otherwise
   * @api public
   */


  is.hash = function (value) {
    return is.object(value) && value.constructor === Object && !value.nodeType && !value.setInterval;
  };
  /**
   * Test regexp.
   */

  /**
   * is.regexp
   * Test if `value` is a regular expression.
   *
   * @param {*} value value to test
   * @return {Boolean} true if `value` is a regexp, false otherwise
   * @api public
   */


  is.regexp = function (value) {
    return toStr$1.call(value) === '[object RegExp]';
  };
  /**
   * Test string.
   */

  /**
   * is.string
   * Test if `value` is a string.
   *
   * @param {*} value value to test
   * @return {Boolean} true if 'value' is a string, false otherwise
   * @api public
   */


  is.string = function (value) {
    return toStr$1.call(value) === '[object String]';
  };
  /**
   * Test base64 string.
   */

  /**
   * is.base64
   * Test if `value` is a valid base64 encoded string.
   *
   * @param {*} value value to test
   * @return {Boolean} true if 'value' is a base64 encoded string, false otherwise
   * @api public
   */


  is.base64 = function (value) {
    return is.string(value) && (!value.length || base64Regex.test(value));
  };
  /**
   * Test base64 string.
   */

  /**
   * is.hex
   * Test if `value` is a valid hex encoded string.
   *
   * @param {*} value value to test
   * @return {Boolean} true if 'value' is a hex encoded string, false otherwise
   * @api public
   */


  is.hex = function (value) {
    return is.string(value) && (!value.length || hexRegex.test(value));
  };
  /**
   * is.symbol
   * Test if `value` is an ES6 Symbol
   *
   * @param {*} value value to test
   * @return {Boolean} true if `value` is a Symbol, false otherise
   * @api public
   */


  is.symbol = function (value) {
    return typeof Symbol === 'function' && toStr$1.call(value) === '[object Symbol]' && _typeof(symbolValueOf.call(value)) === 'symbol';
  };
  /**
   * is.bigint
   * Test if `value` is an ES-proposed BigInt
   *
   * @param {*} value value to test
   * @return {Boolean} true if `value` is a BigInt, false otherise
   * @api public
   */


  is.bigint = function (value) {
    // eslint-disable-next-line valid-typeof
    return typeof BigInt === 'function' && toStr$1.call(value) === '[object BigInt]' && typeof bigIntValueOf.call(value) === 'bigint';
  };

  var is_1 = is;

  /**
   * toString ref.
   */
  var toString$1 = Object.prototype.toString;
  /**
   * Return the type of `val`.
   *
   * @param {Mixed} val
   * @return {String}
   * @api public
   */

  var componentType$1 = function componentType(val) {
    switch (toString$1.call(val)) {
      case '[object Function]':
        return 'function';

      case '[object Date]':
        return 'date';

      case '[object RegExp]':
        return 'regexp';

      case '[object Arguments]':
        return 'arguments';

      case '[object Array]':
        return 'array';

      case '[object String]':
        return 'string';
    }

    if (val === null) return 'null';
    if (val === undefined) return 'undefined';
    if (val && val.nodeType === 1) return 'element';
    if (val === Object(val)) return 'object';
    return _typeof(val);
  };

  /**
   * Global Names
   */
  var globals = /\b(Array|Date|Object|Math|JSON)\b/g;
  /**
   * Return immediate identifiers parsed from `str`.
   *
   * @param {String} str
   * @param {String|Function} map function or prefix
   * @return {Array}
   * @api public
   */

  var componentProps = function componentProps(str, fn) {
    var p = unique(props(str));
    if (fn && 'string' == typeof fn) fn = prefixed(fn);
    if (fn) return map(str, p, fn);
    return p;
  };
  /**
   * Return immediate identifiers in `str`.
   *
   * @param {String} str
   * @return {Array}
   * @api private
   */


  function props(str) {
    return str.replace(/\.\w+|\w+ *\(|"[^"]*"|'[^']*'|\/([^/]+)\//g, '').replace(globals, '').match(/[a-zA-Z_]\w*/g) || [];
  }
  /**
   * Return `str` with `props` mapped with `fn`.
   *
   * @param {String} str
   * @param {Array} props
   * @param {Function} fn
   * @return {String}
   * @api private
   */


  function map(str, props, fn) {
    var re = /\.\w+|\w+ *\(|"[^"]*"|'[^']*'|\/([^/]+)\/|[a-zA-Z_]\w*/g;
    return str.replace(re, function (_) {
      if ('(' == _[_.length - 1]) return fn(_);
      if (!~props.indexOf(_)) return _;
      return fn(_);
    });
  }
  /**
   * Return unique array.
   *
   * @param {Array} arr
   * @return {Array}
   * @api private
   */


  function unique(arr) {
    var ret = [];

    for (var i = 0; i < arr.length; i++) {
      if (~ret.indexOf(arr[i])) continue;
      ret.push(arr[i]);
    }

    return ret;
  }
  /**
   * Map with prefix `str`.
   */


  function prefixed(str) {
    return function (_) {
      return str + _;
    };
  }

  /**
   * Module Dependencies
   */

  var expr;

  try {
    expr = componentProps;
  } catch (e) {
    expr = componentProps;
  }
  /**
   * Expose `toFunction()`.
   */


  var toFunction_1 = toFunction;
  /**
   * Convert `obj` to a `Function`.
   *
   * @param {Mixed} obj
   * @return {Function}
   * @api private
   */

  function toFunction(obj) {
    switch ({}.toString.call(obj)) {
      case '[object Object]':
        return objectToFunction(obj);

      case '[object Function]':
        return obj;

      case '[object String]':
        return stringToFunction(obj);

      case '[object RegExp]':
        return regexpToFunction(obj);

      default:
        return defaultToFunction(obj);
    }
  }
  /**
   * Default to strict equality.
   *
   * @param {Mixed} val
   * @return {Function}
   * @api private
   */


  function defaultToFunction(val) {
    return function (obj) {
      return val === obj;
    };
  }
  /**
   * Convert `re` to a function.
   *
   * @param {RegExp} re
   * @return {Function}
   * @api private
   */


  function regexpToFunction(re) {
    return function (obj) {
      return re.test(obj);
    };
  }
  /**
   * Convert property `str` to a function.
   *
   * @param {String} str
   * @return {Function}
   * @api private
   */


  function stringToFunction(str) {
    // immediate such as "> 20"
    if (/^ *\W+/.test(str)) return new Function('_', 'return _ ' + str); // properties such as "name.first" or "age > 18" or "age > 18 && age < 36"

    return new Function('_', 'return ' + get(str));
  }
  /**
   * Convert `object` to a function.
   *
   * @param {Object} object
   * @return {Function}
   * @api private
   */


  function objectToFunction(obj) {
    var match = {};

    for (var key in obj) {
      match[key] = typeof obj[key] === 'string' ? defaultToFunction(obj[key]) : toFunction(obj[key]);
    }

    return function (val) {
      if (_typeof(val) !== 'object') return false;

      for (var key in match) {
        if (!(key in val)) return false;
        if (!match[key](val[key])) return false;
      }

      return true;
    };
  }
  /**
   * Built the getter function. Supports getter style functions
   *
   * @param {String} str
   * @return {String}
   * @api private
   */


  function get(str) {
    var props = expr(str);
    if (!props.length) return '_.' + str;
    var val, i, prop;

    for (i = 0; i < props.length; i++) {
      prop = props[i];
      val = '_.' + prop;
      val = "('function' == typeof " + val + " ? " + val + "() : " + val + ")"; // mimic negative lookbehind to avoid problems with nested properties

      str = stripNested(prop, str, val);
    }

    return str;
  }
  /**
   * Mimic negative lookbehind to avoid problems with nested properties.
   *
   * See: http://blog.stevenlevithan.com/archives/mimic-lookbehind-javascript
   *
   * @param {String} prop
   * @param {String} str
   * @param {String} val
   * @return {String}
   * @api private
   */


  function stripNested(prop, str, val) {
    return str.replace(new RegExp('(\\.)?' + prop, 'g'), function ($0, $1) {
      return $1 ? $0 : val;
    });
  }

  /**
   * Module dependencies.
   */

  try {
    var type$1 = componentType$1;
  } catch (err) {
    var type$1 = componentType$1;
  }
  /**
   * HOP reference.
   */


  var has$2 = Object.prototype.hasOwnProperty;
  /**
   * Iterate the given `obj` and invoke `fn(val, i)`
   * in optional context `ctx`.
   *
   * @param {String|Array|Object} obj
   * @param {Function} fn
   * @param {Object} [ctx]
   * @api public
   */

  var componentEach = function componentEach(obj, fn, ctx) {
    fn = toFunction_1(fn);
    ctx = ctx || this;

    switch (type$1(obj)) {
      case 'array':
        return array(obj, fn, ctx);

      case 'object':
        if ('number' == typeof obj.length) return array(obj, fn, ctx);
        return object(obj, fn, ctx);

      case 'string':
        return string(obj, fn, ctx);
    }
  };
  /**
   * Iterate string chars.
   *
   * @param {String} obj
   * @param {Function} fn
   * @param {Object} ctx
   * @api private
   */


  function string(obj, fn, ctx) {
    for (var i = 0; i < obj.length; ++i) {
      fn.call(ctx, obj.charAt(i), i);
    }
  }
  /**
   * Iterate object keys.
   *
   * @param {Object} obj
   * @param {Function} fn
   * @param {Object} ctx
   * @api private
   */


  function object(obj, fn, ctx) {
    for (var key in obj) {
      if (has$2.call(obj, key)) {
        fn.call(ctx, key, obj[key]);
      }
    }
  }
  /**
   * Iterate array-ish.
   *
   * @param {Array|Object} obj
   * @param {Function} fn
   * @param {Object} ctx
   * @api private
   */


  function array(obj, fn, ctx) {
    for (var i = 0; i < obj.length; ++i) {
      fn.call(ctx, obj[i], i);
    }
  }

  var GA = /*#__PURE__*/function () {
    function GA(config) {
      _classCallCheck(this, GA);

      this.trackingID = config.trackingID;
      this.sendUserId = config.sendUserId || false;
      this.dimensions = config.dimensions || [];
      this.metrics = config.metrics || [];
      this.contentGroupings = config.contentGroupings || [];
      this.nonInteraction = config.nonInteraction || false;
      this.anonymizeIp = config.anonymizeIp || false;
      this.useGoogleAmpClientId = config.useGoogleAmpClientId || false;
      this.domain = config.domain || "auto";
      this.doubleClick = config.doubleClick || false;
      this.enhancedEcommerce = config.enhancedEcommerce || false;
      this.enhancedLinkAttribution = config.enhancedLinkAttribution || false;
      this.includeSearch = config.includeSearch || false;
      this.setAllMappedProps = config.setAllMappedProps || true;
      this.siteSpeedSampleRate = config.siteSpeedSampleRate || 1;
      this.sampleRate = config.sampleRate || 100;
      this.trackCategorizedPages = config.trackCategorizedPages || true;
      this.trackNamedPages = config.trackNamedPages || true;
      this.optimizeContainerId = config.optimize || "";
      this.resetCustomDimensionsOnPage = config.resetCustomDimensionsOnPage || [];
      this.enhancedEcommerceLoaded = 0;
      this.namedTracker = config.namedTracker || false;
      this.name = "GA";
      this.eventWithCategoryFieldProductScoped = ["product clicked", "product added", "product viewed", "product removed"];
    }

    _createClass(GA, [{
      key: "loadScript",
      value: function loadScript() {
        ScriptLoader("google-analytics", "https://www.google-analytics.com/analytics.js");
      }
    }, {
      key: "init",
      value: function init() {
        var _this = this;

        this.pageCalled = false;
        this.dimensionsArray = {};
        var elementTo;
        this.dimensions.forEach(function (element) {
          if (element.to.startsWith("dimension")) {
            _this.dimensionsArray[element.from] = element.to;
          } else {
            /* eslint-disable no-param-reassign */
            elementTo = element.to.replace(/cd/g, "dimension");
            _this.dimensionsArray[element.from] = elementTo;
          }
        });
        this.metricsArray = {};
        this.metrics.forEach(function (element) {
          if (element.to.startsWith("dimension")) {
            _this.metricsArray[element.from] = element.to;
          } else {
            elementTo = element.to.replace(/cm/g, "metric");
            _this.metricsArray[element.from] = elementTo;
          }
        });
        this.contentGroupingsArray = {};
        this.contentGroupings.forEach(function (element) {
          _this.contentGroupingsArray[element.from] = element.to;
        });
        window.GoogleAnalyticsObject = "ga";

        window.ga = window.ga || function a() {
          window.ga.q = window.ga.q || [];
          window.ga.q.push(arguments);
        };

        window.ga.l = new Date().getTime();
        this.loadScript(); // create ga with these properties. if the properties are empty it will take default values.

        var config = {
          cookieDomain: this.domain || GA.prototype.defaults.domain,
          siteSpeedSampleRate: this.siteSpeedSampleRate,
          sampleRate: this.sampleRate,
          allowLinker: true,
          useAmpClientId: this.useGoogleAmpClientId
        }; // set tracker name to rudderGATracker if on

        if (this.namedTracker) {
          config.name = "rudderGATracker";
          this.trackerName = "rudderGATracker.";
        } else {
          this.trackerName = "";
        }

        window.ga("create", this.trackingID, config);

        if (this.optimizeContainerId) {
          window.ga("".concat(this.trackerName, "require"), this.optimizeContainerId);
        } // ecommerce is required


        if (!this.ecommerce) {
          window.ga("".concat(this.trackerName, "require"), "ecommerce");
          this.ecommerce = true;
        } // this is to display advertising


        if (this.doubleClick) {
          window.ga("".concat(this.trackerName, "require"), "displayfeatures");
        } // https://support.google.com/analytics/answer/2558867?hl=en


        if (this.enhancedLinkAttribution) {
          window.ga("".concat(this.trackerName, "require"), "linkid");
        } // a warning is in ga debugger if anonymize is false after initialization


        if (this.anonymizeIp) {
          window.ga("".concat(this.trackerName, "set"), "anonymizeIp", true);
        }

        logger.debug("===in init GA===");
      }
    }, {
      key: "identify",
      value: function identify(rudderElement) {
        // send global id
        if (this.sendUserId && rudderElement.message.userId) {
          window.ga("".concat(this.trackerName, "set"), "userId", rudderElement.message.userId);
        } // custom dimensions and metrics


        var custom = this.metricsFunction(rudderElement.message.context.traits, this.dimensionsArray, this.metricsArray, this.contentGroupingsArray);

        if (Object.keys(custom).length) {
          window.ga("".concat(this.trackerName, "set"), custom);
        }

        logger.debug("in GoogleAnalyticsManager identify");
      }
    }, {
      key: "track",
      value: function track(rudderElement) {
        var _this2 = this;

        var self = this; // Ecommerce events

        var _rudderElement$messag = rudderElement.message,
            event = _rudderElement$messag.event,
            properties = _rudderElement$messag.properties,
            name = _rudderElement$messag.name;
        var options = this.extractCheckoutOptions(rudderElement);
        var props = rudderElement.message.properties;
        var products = properties.products;
        var total = properties.total;
        var data = {};
        var eventCategory = rudderElement.message.properties.category;
        var orderId = properties.order_id;
        var eventAction = event || name || "";
        var eventLabel = rudderElement.message.properties.label;
        var eventValue = "";
        var payload;
        var campaign = rudderElement.message.context.campaign;
        var params;
        var filters;
        var sorts;

        if (event === "Order Completed" && !this.enhancedEcommerce) {
          // order_id is required
          if (!orderId) {
            logger.debug("order_id not present events are not sent to GA");
            return;
          } // add transaction


          window.ga("".concat(this.trackerName, "ecommerce:addTransaction"), {
            affiliation: properties.affiliation,
            shipping: properties.shipping,
            revenue: total,
            tax: properties.tax,
            id: orderId,
            currency: properties.currency
          }); // products added

          products.forEach(function (product) {
            var productTrack = self.createProductTrack(rudderElement, product);
            window.ga("".concat(_this2.trackerName, "ecommerce:addItem"), {
              category: productTrack.properties.category,
              quantity: productTrack.properties.quantity,
              price: productTrack.properties.price,
              name: productTrack.properties.name,
              sku: productTrack.properties.sku,
              id: orderId,
              currency: productTrack.properties.currency
            });
          });
          window.ga("".concat(this.trackerName, "ecommerce:send"));
        } // enhanced ecommerce events
        else if (this.enhancedEcommerce) {
            switch (event) {
              case "Checkout Started":
              case "Checkout Step Viewed":
              case "Order Updated":
                this.loadEnhancedEcommerce(rudderElement);
                componentEach(products, function (product) {
                  var productTrack = self.createProductTrack(rudderElement, product);
                  productTrack = {
                    message: productTrack
                  };
                  self.enhancedEcommerceTrackProduct(productTrack);
                });
                window.ga("".concat(this.trackerName, "ec:setAction"), "checkout", {
                  step: properties.step || 1,
                  option: options || undefined
                });
                this.pushEnhancedEcommerce(rudderElement);
                break;

              case "Checkout Step Completed":
                if (!props.step) {
                  logger.debug("step not present events are not sent to GA");
                  return;
                }

                params = {
                  step: props.step || 1,
                  option: options || undefined
                };
                this.loadEnhancedEcommerce(rudderElement);
                window.ga("".concat(this.trackerName, "ec:setAction"), "checkout_option", params);
                window.ga("".concat(this.trackerName, "send"), "event", "Checkout", "Option");
                break;

              case "Order Completed":
                total = rudderElement.message.properties.total || rudderElement.message.properties.revenue || 0;

                if (!orderId) {
                  logger.debug("order_id not present events are not sent to GA");
                  return;
                }

                this.loadEnhancedEcommerce(rudderElement);
                componentEach(products, function (product) {
                  var productTrack = self.createProductTrack(rudderElement, product);
                  productTrack = {
                    message: productTrack
                  };
                  self.enhancedEcommerceTrackProduct(productTrack);
                });
                window.ga("".concat(this.trackerName, "ec:setAction"), "purchase", {
                  id: orderId,
                  affiliation: props.affiliation,
                  revenue: total,
                  tax: props.tax,
                  shipping: props.shipping,
                  coupon: props.coupon
                });
                this.pushEnhancedEcommerce(rudderElement);
                break;

              case "Order Refunded":
                if (!orderId) {
                  logger.debug("order_id not present events are not sent to GA");
                  return;
                }

                this.loadEnhancedEcommerce(rudderElement);
                componentEach(products, function (product) {
                  var track = {
                    properties: product
                  };
                  window.ga("".concat(_this2.trackerName, "ec:addProduct"), {
                    id: track.properties.product_id || track.properties.id || track.properties.sku,
                    quantity: track.properties.quantity
                  });
                });
                window.ga("".concat(this.trackerName, "ec:setAction"), "refund", {
                  id: orderId
                });
                this.pushEnhancedEcommerce(rudderElement);
                break;

              case "Product Added":
                this.loadEnhancedEcommerce(rudderElement);
                this.enhancedEcommerceTrackProductAction(rudderElement, "add", null);
                this.pushEnhancedEcommerce(rudderElement);
                break;

              case "Product Removed":
                this.loadEnhancedEcommerce(rudderElement);
                this.enhancedEcommerceTrackProductAction(rudderElement, "remove", null);
                this.pushEnhancedEcommerce(rudderElement);
                break;

              case "Product Viewed":
                this.loadEnhancedEcommerce(rudderElement);
                if (props.list) data.list = props.list;
                this.enhancedEcommerceTrackProductAction(rudderElement, "detail", data);
                this.pushEnhancedEcommerce(rudderElement);
                break;

              case "Product Clicked":
                this.loadEnhancedEcommerce(rudderElement);
                if (props.list) data.list = props.list;
                this.enhancedEcommerceTrackProductAction(rudderElement, "click", data);
                this.pushEnhancedEcommerce(rudderElement);
                break;

              case "Promotion Viewed":
                this.loadEnhancedEcommerce(rudderElement);
                window.ga("".concat(this.trackerName, "ec:addPromo"), {
                  id: props.promotion_id || props.id,
                  name: props.name,
                  creative: props.creative,
                  position: props.position
                });
                this.pushEnhancedEcommerce(rudderElement);
                break;

              case "Promotion Clicked":
                this.loadEnhancedEcommerce(rudderElement);
                window.ga("".concat(this.trackerName, "ec:addPromo"), {
                  id: props.promotion_id || props.id,
                  name: props.name,
                  creative: props.creative,
                  position: props.position
                });
                window.ga("".concat(this.trackerName, "ec:setAction"), "promo_click", {});
                this.pushEnhancedEcommerce(rudderElement);
                break;

              case "Product List Viewed":
                this.loadEnhancedEcommerce(rudderElement);
                componentEach(products, function (product) {
                  var item = {
                    properties: product
                  };

                  if (!(item.properties.product_id || item.properties.sku) && !item.properties.name) {
                    logger.debug("product_id/sku/name of product not present events are not sent to GA");
                    return;
                  }

                  var impressionObj = {
                    id: item.properties.product_id || item.properties.sku,
                    name: item.properties.name,
                    category: item.properties.category || props.category,
                    list: props.list_id || props.category || "products",
                    brand: item.properties.band,
                    variant: item.properties.variant,
                    price: item.properties.price,
                    position: self.getProductPosition(item, products)
                  };
                  impressionObj = _objectSpread2(_objectSpread2({}, impressionObj), self.metricsFunction(item.properties, self.dimensionsArray, self.metricsArray, self.contentGroupingsArray));
                  Object.keys(impressionObj).forEach(function (key) {
                    if (impressionObj[key] === undefined) delete impressionObj[key];
                  });
                  window.ga("".concat(_this2.trackerName, "ec:addImpression"), impressionObj);
                });
                this.pushEnhancedEcommerce(rudderElement);
                break;

              case "Product List Filtered":
                props.filters = props.filters || [];
                props.sorts = props.sorts || [];
                filters = props.filters.map(function (obj) {
                  return "".concat(obj.type, ":").concat(obj.value);
                }).join();
                sorts = props.sorters.map(function (obj) {
                  return "".concat(obj.type, ":").concat(obj.value);
                }).join();
                this.loadEnhancedEcommerce(rudderElement);
                componentEach(products, function (product) {
                  var item = {
                    properties: product
                  };

                  if (!(item.properties.product_id || item.properties.sku) && !item.properties.name) {
                    logger.debug("product_id/sku/name of product not present events are not sent to GA");
                    return;
                  }

                  var impressionObj = {
                    id: item.properties.product_id || item.sku,
                    name: item.name,
                    category: item.category || props.category,
                    list: props.list_id || props.category || "search results",
                    brand: props.brand,
                    variant: "".concat(filters, "::").concat(sorts),
                    price: item.price,
                    position: self.getProductPosition(item, products)
                  };
                  impressionObj = _objectSpread2({
                    impressionObj: impressionObj
                  }, self.metricsFunction(item.properties, self.dimensionsArray, self.metricsArray, self.contentGroupingsArray));
                  Object.keys(impressionObj).forEach(function (key) {
                    if (impressionObj[key] === undefined) delete impressionObj[key];
                  });
                  window.ga("".concat(_this2.trackerName, "ec:addImpression"), impressionObj);
                });
                this.pushEnhancedEcommerce(rudderElement);
                break;

              default:
                if (rudderElement.message.properties) {
                  eventValue = rudderElement.message.properties.value ? rudderElement.message.properties.value : rudderElement.message.properties.revenue;
                }

                payload = {
                  eventCategory: eventCategory || "All",
                  eventAction: eventAction,
                  eventLabel: eventLabel,
                  eventValue: this.formatValue(eventValue),
                  // Allow users to override their nonInteraction integration setting for any single particluar event.
                  nonInteraction: rudderElement.message.properties.nonInteraction !== undefined ? !!rudderElement.message.properties.nonInteraction : !!this.nonInteraction
                };

                if (campaign) {
                  if (campaign.name) payload.campaignName = campaign.name;
                  if (campaign.source) payload.campaignSource = campaign.source;
                  if (campaign.medium) payload.campaignMedium = campaign.medium;
                  if (campaign.content) payload.campaignContent = campaign.content;
                  if (campaign.term) payload.campaignKeyword = campaign.term;
                }

                payload = _objectSpread2({
                  payload: payload
                }, this.setCustomDimenionsAndMetrics(rudderElement.message.properties));
                window.ga("".concat(this.trackerName, "send"), "event", payload.payload);
                logger.debug("in GoogleAnalyticsManager track");
            }
          } else {
            if (rudderElement.message.properties) {
              eventValue = rudderElement.message.properties.value ? rudderElement.message.properties.value : rudderElement.message.properties.revenue;
            }

            payload = {
              eventCategory: eventCategory || "All",
              eventAction: eventAction,
              eventLabel: eventLabel,
              eventValue: this.formatValue(eventValue),
              // Allow users to override their nonInteraction integration setting for any single particluar event.
              nonInteraction: rudderElement.message.properties.nonInteraction !== undefined ? !!rudderElement.message.properties.nonInteraction : !!this.nonInteraction
            };

            if (campaign) {
              if (campaign.name) payload.campaignName = campaign.name;
              if (campaign.source) payload.campaignSource = campaign.source;
              if (campaign.medium) payload.campaignMedium = campaign.medium;
              if (campaign.content) payload.campaignContent = campaign.content;
              if (campaign.term) payload.campaignKeyword = campaign.term;
            }

            payload = _objectSpread2({
              payload: payload
            }, this.setCustomDimenionsAndMetrics(rudderElement.message.properties));
            window.ga("".concat(this.trackerName, "send"), "event", payload.payload);
            logger.debug("in GoogleAnalyticsManager track");
          }
      }
    }, {
      key: "page",
      value: function page(rudderElement) {
        logger.debug("in GoogleAnalyticsManager page");
        var category = rudderElement.message.properties.category;
        var eventProperties = rudderElement.message.properties;
        var name;

        if (rudderElement.message.properties.category && rudderElement.message.name) {
          name = "".concat(rudderElement.message.properties.category, " ").concat(rudderElement.message.name);
        } else if (!rudderElement.message.properties.category && !rudderElement.message.name) {
          name = "";
        } else {
          name = rudderElement.message.name || rudderElement.message.properties.category;
        }

        var campaign = rudderElement.message.context.campaign || {};
        var pageview = {};
        var pagePath = this.path(eventProperties, this.includeSearch);
        var pageReferrer = rudderElement.message.properties.referrer || "";
        var pageTitle;
        if (!rudderElement.message.properties.category && !rudderElement.message.name) pageTitle = eventProperties.title;else if (!rudderElement.message.properties.category) pageTitle = rudderElement.message.name;else if (!rudderElement.message.name) pageTitle = rudderElement.message.properties.category;else pageTitle = name;
        pageview.page = pagePath;
        pageview.title = pageTitle;
        pageview.location = eventProperties.url;

        if (campaign) {
          if (campaign.name) pageview.campaignName = campaign.name;
          if (campaign.source) pageview.campaignSource = campaign.source;
          if (campaign.medium) pageview.campaignMedium = campaign.medium;
          if (campaign.content) pageview.campaignContent = campaign.content;
          if (campaign.term) pageview.campaignKeyword = campaign.term;
        }

        var resetCustomDimensions = {};

        for (var i = 0; i < this.resetCustomDimensionsOnPage.length; i += 1) {
          var property = this.resetCustomDimensionsOnPage[i].resetCustomDimensionsOnPage;

          if (this.dimensionsArray[property]) {
            resetCustomDimensions[this.dimensionsArray[property]] = null;
          }
        }

        window.ga("".concat(this.trackerName, "set"), resetCustomDimensions); // adds more properties to pageview which will be sent

        pageview = _objectSpread2(_objectSpread2({}, pageview), this.setCustomDimenionsAndMetrics(eventProperties));
        var payload = {
          page: pagePath,
          title: pageTitle
        };
        logger.debug(pageReferrer);
        logger.debug(document.referrer);
        if (pageReferrer !== document.referrer) payload.referrer = pageReferrer;
        window.ga("".concat(this.trackerName, "set"), payload);
        if (this.pageCalled) delete pageview.location;
        window.ga("".concat(this.trackerName, "send"), "pageview", pageview); // categorized pages

        if (category && this.trackCategorizedPages) {
          this.track(rudderElement, {
            nonInteraction: 1
          });
        } // named pages


        if (name && this.trackNamedPages) {
          this.track(rudderElement, {
            nonInteraction: 1
          });
        }

        this.pageCalled = true;
      }
    }, {
      key: "isLoaded",
      value: function isLoaded() {
        logger.debug("in GA isLoaded");
        return !!window.gaplugins;
      }
    }, {
      key: "isReady",
      value: function isReady() {
        return !!window.gaplugins;
      }
      /**
       *
       *
       * @param  {} obj  incoming properties
       * @param  {} dimensions   the dimension mapping which is entered by the user in the ui. Eg: firstName : dimension1
       * @param  {} metrics  the metrics mapping which is entered by the user in the ui. Eg: age : metrics1
       * @param  {} contentGroupings the contentGrouping mapping which is entered by the user in the ui. Eg: section : contentGrouping1
       *
       * This function maps these dimensions,metrics and contentGroupings with the incoming properties to send it to GA where the user has to set the corresponding dimension/metric/content group.
       * For example if:
       * if obj -> {age: 24}
       * metrics -> {age: metric1}
       * then the function will return {metric1:24} and it will be shown sent to GA if metric1 is set there.
       *
       * if obj -> {age: 24}
       * metrics - {revenue: metric2}
       * then the function will return {} as there is no corresponding mapping of metric.
       *
       */

    }, {
      key: "metricsFunction",
      value: function metricsFunction(obj, dimensions, metrics, contentGroupings) {
        var ret = {};
        componentEach([metrics, dimensions, contentGroupings], function (group) {
          componentEach(group, function (prop, key) {
            var value = obj[prop];
            if (is_1["boolean"](value)) value = value.toString();
            if (value || value === 0) ret[key] = value;
          });
        });
        return ret;
      }
    }, {
      key: "formatValue",
      value: function formatValue(value) {
        if (!value || value < 0) return 0;
        return Math.round(value);
      }
      /**
       * @param  {} props
       * @param  {} inputs
       */

    }, {
      key: "setCustomDimenionsAndMetrics",
      value: function setCustomDimenionsAndMetrics(props) {
        var ret = {};
        var custom = this.metricsFunction(props, this.dimensionsArray, this.metricsArray, this.contentGroupingsArray);

        if (Object.keys(custom).length) {
          if (this.setAllMappedProps) {
            window.ga("".concat(this.trackerName, "set"), custom);
          } else {
            Object.keys(custom).forEach(function (key) {
              ret[key] = custom[key];
            }); // each(custom, (key, value) => {
            //   ret[key] = value;
            // });
          }
        }

        return ret;
      }
      /**
       *  Return the path based on `properties` and `options`
       *
       * @param  {} properties
       * @param  {} includeSearch
       */

    }, {
      key: "path",
      value: function path(properties, includeSearch) {
        var str = properties.path;

        if (properties) {
          if (includeSearch && properties.search) {
            str += properties.search;
          }
        }

        return str;
      }
      /**
       * Creates a track out of product properties
       * @param  {} rudderElement
       * @param  {} properties
       */

    }, {
      key: "createProductTrack",
      value: function createProductTrack(rudderElement, properties) {
        var props = properties || {};
        props.currency = properties.currency || rudderElement.message.properties.currency;
        return {
          properties: props
        };
      }
      /**
       * Loads ec.js (unless already loaded)
       * @param  {} rudderElement
       * @param  {} a
       */

    }, {
      key: "loadEnhancedEcommerce",
      value: function loadEnhancedEcommerce(rudderElement) {
        if (this.enhancedEcommerceLoaded === 0) {
          window.ga("".concat(this.trackerName, "require"), "ec");
          this.enhancedEcommerceLoaded = 1;
        }

        window.ga("".concat(this.trackerName, "set"), "&cu", rudderElement.message.properties.currency);
      }
      /**
       * helper class to not repeat `ec:addProduct`
       * @param  {} rudderElement
       * @param  {} inputs
       */

    }, {
      key: "enhancedEcommerceTrackProduct",
      value: function enhancedEcommerceTrackProduct(rudderElement) {
        var props = rudderElement.message.properties;
        var product = {
          id: props.product_id || props.id || props.sku,
          name: props.name,
          category: props.category,
          quantity: props.quantity,
          price: props.price,
          brand: props.brand,
          variant: props.variant,
          currency: props.currency
        };

        if (props.position != null) {
          product.position = Math.round(props.position);
        }

        var coupon = props.coupon;
        if (coupon) product.coupon = coupon;
        product = _objectSpread2(_objectSpread2({}, product), this.metricsFunction(props, this.dimensionsArray, this.metricsArray, this.contentGroupingsArray));
        window.ga("".concat(this.trackerName, "ec:addProduct"), product);
      }
      /**
       * set action with data
       * @param  {} rudderElement
       * @param  {} action
       * @param  {} data
       * @param  {} inputs
       */

    }, {
      key: "enhancedEcommerceTrackProductAction",
      value: function enhancedEcommerceTrackProductAction(rudderElement, action, data) {
        this.enhancedEcommerceTrackProduct(rudderElement);
        window.ga("".concat(this.trackerName, "ec:setAction"), action, data || {});
      }
      /**
       * @param  {} rudderElement
       * @param  {} inputs
       */

    }, {
      key: "pushEnhancedEcommerce",
      value: function pushEnhancedEcommerce(rudderElement) {
        var _window$ga;

        var args = rejectArr(["send", "event", rudderElement.message.properties.category || "EnhancedEcommerce", rudderElement.message.event || "Action not defined", rudderElement.message.properties.label, _objectSpread2({
          nonInteraction: 1
        }, this.setCustomDimenionsAndMetrics(rudderElement.message.properties))]);
        var event = rudderElement.message.event;
        event = event.toLowerCase();

        if (this.eventWithCategoryFieldProductScoped.includes(event)) {
          args[2] = "EnhancedEcommerce";
        }

        (_window$ga = window.ga).call.apply(_window$ga, [window].concat(_toConsumableArray(args)));
      }
      /**
       * @param  {} item
       * @param  {} products
       */

    }, {
      key: "getProductPosition",
      value: function getProductPosition(item, products) {
        var position = item.properties.position;

        if (typeof position !== "undefined" && !Number.isNaN(Number(position)) && Number(position) > -1) {
          return position;
        }

        return products.map(function (x) {
          return x.product_id;
        }).indexOf(item.properties.product_id) + 1;
      }
      /**
       *extracts checkout options
       * @param  {} rudderElement
       */

    }, {
      key: "extractCheckoutOptions",
      value: function extractCheckoutOptions(rudderElement) {
        var options = [rudderElement.message.properties.paymentMethod, rudderElement.message.properties.shippingMethod]; // remove all nulls and join with commas.

        var valid = rejectArr(options);
        return valid.length > 0 ? valid.join(", ") : null;
      }
    }]);

    return GA;
  }();

  var index$1 =  GA ;

  var Hotjar = /*#__PURE__*/function () {
    function Hotjar(config) {
      _classCallCheck(this, Hotjar);

      this.siteId = config.siteID; // 1549611

      this.name = "HOTJAR";
      this._ready = false;
    }

    _createClass(Hotjar, [{
      key: "init",
      value: function init() {
        window.hotjarSiteId = this.siteId;

        (function (h, o, t, j, a, r) {
          h.hj = h.hj || function () {
            (h.hj.q = h.hj.q || []).push(arguments);
          };

          h._hjSettings = {
            hjid: h.hotjarSiteId,
            hjsv: 6
          };
          a = o.getElementsByTagName("head")[0];
          r = o.createElement("script");
          r.async = 1;
          r.src = t + h._hjSettings.hjid + j + h._hjSettings.hjsv;
          a.appendChild(r);
        })(window, document, "https://static.hotjar.com/c/hotjar-", ".js?sv=");

        this._ready = true;
        logger.debug("===in init Hotjar===");
      }
    }, {
      key: "identify",
      value: function identify(rudderElement) {
        var userId = rudderElement.message.userId || rudderElement.message.anonymousId;

        if (!userId) {
          logger.debug("[Hotjar] identify:: user id is required");
          return;
        }

        var traits = rudderElement.message.context.traits;
        window.hj("identify", rudderElement.message.userId, traits);
      }
    }, {
      key: "track",
      value: function track(rudderElement) {
        logger.debug("[Hotjar] track:: method not supported");
      }
    }, {
      key: "page",
      value: function page(rudderElement) {
        logger.debug("[Hotjar] page:: method not supported");
      }
    }, {
      key: "isLoaded",
      value: function isLoaded() {
        return this._ready;
      }
    }, {
      key: "isReady",
      value: function isReady() {
        return this._ready;
      }
    }]);

    return Hotjar;
  }();

  var index$2 =  Hotjar ;

  var GoogleAds = /*#__PURE__*/function () {
    function GoogleAds(config) {
      _classCallCheck(this, GoogleAds);

      // this.accountId = config.accountId;//AW-696901813
      this.conversionId = config.conversionID;
      this.pageLoadConversions = config.pageLoadConversions;
      this.clickEventConversions = config.clickEventConversions;
      this.defaultPageConversion = config.defaultPageConversion;
      this.name = "GOOGLEADS";
    }

    _createClass(GoogleAds, [{
      key: "init",
      value: function init() {
        var sourceUrl = "https://www.googletagmanager.com/gtag/js?id=".concat(this.conversionId);

        (function (id, src, document) {
          logger.debug("in script loader=== ".concat(id));
          var js = document.createElement("script");
          js.src = src;
          js.async = 1;
          js.type = "text/javascript";
          js.id = id;
          var e = document.getElementsByTagName("head")[0];
          logger.debug("==script==", e);
          e.appendChild(js);
        })("googleAds-integration", sourceUrl, document);

        window.dataLayer = window.dataLayer || [];

        window.gtag = function () {
          window.dataLayer.push(arguments);
        };

        window.gtag("js", new Date());
        window.gtag("config", this.conversionId);
        logger.debug("===in init Google Ads===");
      }
    }, {
      key: "identify",
      value: function identify(rudderElement) {
        logger.debug("[GoogleAds] identify:: method not supported");
      } // https://developers.google.com/gtagjs/reference/event

    }, {
      key: "track",
      value: function track(rudderElement) {
        logger.debug("in GoogleAdsAnalyticsManager track");
        var conversionData = this.getConversionData(this.clickEventConversions, rudderElement.message.event);

        if (conversionData.conversionLabel) {
          var conversionLabel = conversionData.conversionLabel;
          var eventName = conversionData.eventName;
          var sendToValue = "".concat(this.conversionId, "/").concat(conversionLabel);
          var properties = {};

          if (rudderElement.properties) {
            properties.value = rudderElement.properties.revenue;
            properties.currency = rudderElement.properties.currency;
            properties.transaction_id = rudderElement.properties.order_id;
          }

          properties.send_to = sendToValue;
          window.gtag("event", eventName, properties);
        }
      }
    }, {
      key: "page",
      value: function page(rudderElement) {
        logger.debug("in GoogleAdsAnalyticsManager page");
        var conversionData = this.getConversionData(this.pageLoadConversions, rudderElement.message.name);

        if (conversionData.conversionLabel) {
          var conversionLabel = conversionData.conversionLabel;
          var eventName = conversionData.eventName;
          window.gtag("event", eventName, {
            send_to: "".concat(this.conversionId, "/").concat(conversionLabel)
          });
        }
      }
    }, {
      key: "getConversionData",
      value: function getConversionData(eventTypeConversions, eventName) {
        var conversionData = {};

        if (eventTypeConversions) {
          if (eventName) {
            eventTypeConversions.forEach(function (eventTypeConversion) {
              if (eventTypeConversion.name.toLowerCase() === eventName.toLowerCase()) {
                // rudderElement["message"]["name"]
                conversionData.conversionLabel = eventTypeConversion.conversionLabel;
                conversionData.eventName = eventTypeConversion.name;
              }
            });
          } else if (this.defaultPageConversion) {
            conversionData.conversionLabel = this.defaultPageConversion;
            conversionData.eventName = "Viewed a Page";
          }
        }

        return conversionData;
      }
    }, {
      key: "isLoaded",
      value: function isLoaded() {
        return window.dataLayer.push !== Array.prototype.push;
      }
    }, {
      key: "isReady",
      value: function isReady() {
        return window.dataLayer.push !== Array.prototype.push;
      }
    }]);

    return GoogleAds;
  }();

  var index$3 =  GoogleAds ;

  var VWO = /*#__PURE__*/function () {
    function VWO(config, analytics) {
      _classCallCheck(this, VWO);

      this.accountId = config.accountId; // 1549611

      this.settingsTolerance = config.settingsTolerance;
      this.isSPA = config.isSPA;
      this.libraryTolerance = config.libraryTolerance;
      this.useExistingJquery = config.useExistingJquery;
      this.sendExperimentTrack = config.sendExperimentTrack;
      this.sendExperimentIdentify = config.sendExperimentIdentify;
      this.name = "VWO";
      this.analytics = analytics;
      logger.debug("Config ", config);
    }

    _createClass(VWO, [{
      key: "init",
      value: function init() {
        logger.debug("===in init VWO===");
        var account_id = this.accountId;
        var settings_tolerance = this.settingsTolerance;
        var _library_tolerance = this.libraryTolerance;
        var _use_existing_jquery = this.useExistingJquery;
        var isSPA = this.isSPA;

        window._vwo_code = function () {
          var f = false;
          var d = document;
          return {
            use_existing_jquery: function use_existing_jquery() {
              return _use_existing_jquery;
            },
            library_tolerance: function library_tolerance() {
              return _library_tolerance;
            },
            finish: function finish() {
              if (!f) {
                f = true;
                var a = d.getElementById("_vis_opt_path_hides");
                if (a) a.parentNode.removeChild(a);
              }
            },
            finished: function finished() {
              return f;
            },
            load: function load(a) {
              var b = d.createElement("script");
              b.src = a;
              b.type = "text/javascript";
              b.innerText;

              b.onerror = function () {
                _vwo_code.finish();
              };

              d.getElementsByTagName("head")[0].appendChild(b);
            },
            init: function init() {
              var settings_timer = setTimeout("_vwo_code.finish()", settings_tolerance);
              var a = d.createElement("style");
              var b = "body{opacity:0 !important;filter:alpha(opacity=0) !important;background:none !important;}";
              var h = d.getElementsByTagName("head")[0];
              a.setAttribute("id", "_vis_opt_path_hides");
              a.setAttribute("type", "text/css");
              if (a.styleSheet) a.styleSheet.cssText = b;else a.appendChild(d.createTextNode(b));
              h.appendChild(a);
              this.load("//dev.visualwebsiteoptimizer.com/j.php?a=".concat(account_id, "&u=").concat(encodeURIComponent(d.URL), "&r=").concat(Math.random(), "&f=").concat(+isSPA));
              return settings_timer;
            }
          };
        }();

        window._vwo_settings_timer = window._vwo_code.init(); // Send track or iddentify when

        if (this.sendExperimentTrack || this.experimentViewedIdentify) {
          this.experimentViewed();
        }
      }
    }, {
      key: "experimentViewed",
      value: function experimentViewed() {
        var _this = this;

        window.VWO = window.VWO || [];
        var self = this;
        window.VWO.push(["onVariationApplied", function (data) {
          if (!data) {
            return;
          }

          logger.debug("Variation Applied");
          var expId = data[1];
          var variationId = data[2];
          logger.debug("experiment id:", expId, "Variation Name:", _vwo_exp[expId].comb_n[variationId]);

          if (typeof _vwo_exp[expId].comb_n[variationId] !== "undefined" && ["VISUAL_AB", "VISUAL", "SPLIT_URL", "SURVEY"].indexOf(_vwo_exp[expId].type) > -1) {
            try {
              if (self.sendExperimentTrack) {
                logger.debug("Tracking...");

                _this.analytics.track("Experiment Viewed", {
                  experimentId: expId,
                  variationName: _vwo_exp[expId].comb_n[variationId]
                });
              }
            } catch (error) {
              logger.error("[VWO] experimentViewed:: ", error);
            }

            try {
              if (self.sendExperimentIdentify) {
                logger.debug("Identifying...");

                _this.analytics.identify(_defineProperty({}, "Experiment: ".concat(expId), _vwo_exp[expId].comb_n[variationId]));
              }
            } catch (error) {
              logger.error("[VWO] experimentViewed:: ", error);
            }
          }
        }]);
      }
    }, {
      key: "identify",
      value: function identify(rudderElement) {
        logger.debug("method not supported");
      }
    }, {
      key: "track",
      value: function track(rudderElement) {
        var eventName = rudderElement.message.event;

        if (eventName === "Order Completed") {
          var total = rudderElement.message.properties ? rudderElement.message.properties.total || rudderElement.message.properties.revenue : 0;
          logger.debug("Revenue", total);
          window.VWO = window.VWO || [];
          window.VWO.push(["track.revenueConversion", total]);
        }
      }
    }, {
      key: "page",
      value: function page(rudderElement) {
        logger.debug("method not supported");
      }
    }, {
      key: "isLoaded",
      value: function isLoaded() {
        return !!window._vwo_code;
      }
    }, {
      key: "isReady",
      value: function isReady() {
        return !!window._vwo_code;
      }
    }]);

    return VWO;
  }();

  var GoogleTagManager = /*#__PURE__*/function () {
    function GoogleTagManager(config) {
      _classCallCheck(this, GoogleTagManager);

      this.containerID = config.containerID;
      this.name = "GOOGLETAGMANAGER";
    }

    _createClass(GoogleTagManager, [{
      key: "init",
      value: function init() {
        logger.debug("===in init GoogleTagManager===");

        (function (w, d, s, l, i) {
          w[l] = w[l] || [];
          w[l].push({
            "gtm.start": new Date().getTime(),
            event: "gtm.js"
          });
          var f = d.getElementsByTagName(s)[0];
          var j = d.createElement(s);
          var dl = l != "dataLayer" ? "&l=".concat(l) : "";
          j.async = true;
          j.src = "https://www.googletagmanager.com/gtm.js?id=".concat(i).concat(dl);
          f.parentNode.insertBefore(j, f);
        })(window, document, "script", "dataLayer", this.containerID);
      }
    }, {
      key: "identify",
      value: function identify(rudderElement) {
        logger.debug("[GTM] identify:: method not supported");
      }
    }, {
      key: "track",
      value: function track(rudderElement) {
        logger.debug("===in track GoogleTagManager===");
        var rudderMessage = rudderElement.message;

        var props = _objectSpread2({
          event: rudderMessage.event,
          userId: rudderMessage.userId,
          anonymousId: rudderMessage.anonymousId
        }, rudderMessage.properties);

        this.sendToGTMDatalayer(props);
      }
    }, {
      key: "page",
      value: function page(rudderElement) {
        logger.debug("===in page GoogleTagManager===");
        var rudderMessage = rudderElement.message;
        var pageName = rudderMessage.name;
        var pageCategory = rudderMessage.properties ? rudderMessage.properties.category : undefined;
        var eventName;

        if (pageName) {
          eventName = "Viewed ".concat(pageName, " page");
        }

        if (pageCategory && pageName) {
          eventName = "Viewed ".concat(pageCategory, " ").concat(pageName, " page");
        }

        if (!eventName) {
          eventName = "Viewed a Page";
        }

        var props = _objectSpread2({
          event: eventName,
          userId: rudderMessage.userId,
          anonymousId: rudderMessage.anonymousId
        }, rudderMessage.properties);

        this.sendToGTMDatalayer(props);
      }
    }, {
      key: "isLoaded",
      value: function isLoaded() {
        return !!(window.dataLayer && Array.prototype.push !== window.dataLayer.push);
      }
    }, {
      key: "sendToGTMDatalayer",
      value: function sendToGTMDatalayer(props) {
        window.dataLayer.push(props);
      }
    }, {
      key: "isReady",
      value: function isReady() {
        return !!(window.dataLayer && Array.prototype.push !== window.dataLayer.push);
      }
    }]);

    return GoogleTagManager;
  }();

  /*
  E-commerce support required for logPurchase support & other e-commerce events as track with productId changed
  */

  var Braze = /*#__PURE__*/function () {
    function Braze(config, analytics) {
      _classCallCheck(this, Braze);

      this.analytics = analytics;
      this.appKey = config.appKey;
      if (!config.appKey) this.appKey = "";
      this.endPoint = "";

      if (config.dataCenter) {
        var dataCenterArr = config.dataCenter.trim().split("-");

        if (dataCenterArr[0].toLowerCase() === "eu") {
          this.endPoint = "sdk.fra-01.braze.eu";
        } else {
          this.endPoint = "sdk.iad-".concat(dataCenterArr[1], ".braze.com");
        }
      }

      this.name = "BRAZE";
      logger.debug("Config ", config);
    }
    /** https://js.appboycdn.com/web-sdk/latest/doc/ab.User.html#toc4
     */


    _createClass(Braze, [{
      key: "formatGender",
      value: function formatGender(gender) {
        if (!gender) return;
        if (typeof gender !== "string") return;
        var femaleGenders = ["woman", "female", "w", "f"];
        var maleGenders = ["man", "male", "m"];
        var otherGenders = ["other", "o"];
        if (femaleGenders.indexOf(gender.toLowerCase()) > -1) return window.appboy.ab.User.Genders.FEMALE;
        if (maleGenders.indexOf(gender.toLowerCase()) > -1) return window.appboy.ab.User.Genders.MALE;
        if (otherGenders.indexOf(gender.toLowerCase()) > -1) return window.appboy.ab.User.Genders.OTHER;
      }
    }, {
      key: "init",
      value: function init() {
        logger.debug("===in init Braze==="); // load appboy

        +function (a, p, P, b, y) {
          a.appboy = {};
          a.appboyQueue = [];

          for (var s = "initialize destroy getDeviceId toggleAppboyLogging setLogger openSession changeUser requestImmediateDataFlush requestFeedRefresh subscribeToFeedUpdates requestContentCardsRefresh subscribeToContentCardsUpdates logCardImpressions logCardClick logCardDismissal logFeedDisplayed logContentCardsDisplayed logInAppMessageImpression logInAppMessageClick logInAppMessageButtonClick logInAppMessageHtmlClick subscribeToNewInAppMessages subscribeToInAppMessage removeSubscription removeAllSubscriptions logCustomEvent logPurchase isPushSupported isPushBlocked isPushGranted isPushPermissionGranted registerAppboyPushMessages unregisterAppboyPushMessages trackLocation stopWebTracking resumeWebTracking wipeData ab ab.DeviceProperties ab.User ab.User.Genders ab.User.NotificationSubscriptionTypes ab.User.prototype.getUserId ab.User.prototype.setFirstName ab.User.prototype.setLastName ab.User.prototype.setEmail ab.User.prototype.setGender ab.User.prototype.setDateOfBirth ab.User.prototype.setCountry ab.User.prototype.setHomeCity ab.User.prototype.setLanguage ab.User.prototype.setEmailNotificationSubscriptionType ab.User.prototype.setPushNotificationSubscriptionType ab.User.prototype.setPhoneNumber ab.User.prototype.setAvatarImageUrl ab.User.prototype.setLastKnownLocation ab.User.prototype.setUserAttribute ab.User.prototype.setCustomUserAttribute ab.User.prototype.addToCustomAttributeArray ab.User.prototype.removeFromCustomAttributeArray ab.User.prototype.incrementCustomUserAttribute ab.User.prototype.addAlias ab.User.prototype.setCustomLocationAttribute ab.InAppMessage ab.InAppMessage.SlideFrom ab.InAppMessage.ClickAction ab.InAppMessage.DismissType ab.InAppMessage.OpenTarget ab.InAppMessage.ImageStyle ab.InAppMessage.TextAlignment ab.InAppMessage.Orientation ab.InAppMessage.CropType ab.InAppMessage.prototype.subscribeToClickedEvent ab.InAppMessage.prototype.subscribeToDismissedEvent ab.InAppMessage.prototype.removeSubscription ab.InAppMessage.prototype.removeAllSubscriptions ab.InAppMessage.prototype.closeMessage ab.InAppMessage.Button ab.InAppMessage.Button.prototype.subscribeToClickedEvent ab.InAppMessage.Button.prototype.removeSubscription ab.InAppMessage.Button.prototype.removeAllSubscriptions ab.SlideUpMessage ab.ModalMessage ab.FullScreenMessage ab.HtmlMessage ab.ControlMessage ab.Feed ab.Feed.prototype.getUnreadCardCount ab.ContentCards ab.ContentCards.prototype.getUnviewedCardCount ab.Card ab.Card.prototype.dismissCard ab.ClassicCard ab.CaptionedImage ab.Banner ab.ControlCard ab.WindowUtils display display.automaticallyShowNewInAppMessages display.showInAppMessage display.showFeed display.destroyFeed display.toggleFeed display.showContentCards display.hideContentCards display.toggleContentCards sharedLib".split(" "), i = 0; i < s.length; i++) {
            for (var m = s[i], k = a.appboy, l = m.split("."), j = 0; j < l.length - 1; j++) {
              k = k[l[j]];
            }

            k[l[j]] = new Function("return function ".concat(m.replace(/\./g, "_"), "(){window.appboyQueue.push(arguments); return true}"))();
          }

          window.appboy.getUser = function () {
            return new window.appboy.ab.User();
          };

          window.appboy.getCachedFeed = function () {
            return new window.appboy.ab.Feed();
          };

          window.appboy.getCachedContentCards = function () {
            return new window.appboy.ab.ContentCards();
          };

          (y = p.createElement(P)).type = "text/javascript";
          y.src = "https://js.appboycdn.com/web-sdk/2.4/appboy.min.js";
          y.async = 1;
          (b = p.getElementsByTagName(P)[0]).parentNode.insertBefore(y, b);
        }(window, document, "script");
        window.appboy.initialize(this.appKey, {
          enableLogging: true,
          baseUrl: this.endPoint
        });
        window.appboy.display.automaticallyShowNewInAppMessages();
        var userId = this.analytics.userId; // send userId if you have it https://js.appboycdn.com/web-sdk/latest/doc/module-appboy.html#.changeUser

        if (userId) appboy.changeUser(userId);
        window.appboy.openSession();
      }
    }, {
      key: "handleReservedProperties",
      value: function handleReservedProperties(props) {
        // remove reserved keys from custom event properties
        // https://www.appboy.com/documentation/Platform_Wide/#reserved-keys
        var reserved = ["time", "product_id", "quantity", "event_name", "price", "currency"];
        reserved.forEach(function (element) {
          delete props[element];
        });
        return props;
      }
    }, {
      key: "identify",
      value: function identify(rudderElement) {
        var userId = rudderElement.message.userId;
        var address = rudderElement.message.context.traits.address;
        var avatar = rudderElement.message.context.traits.avatar;
        var birthday = rudderElement.message.context.traits.birthday;
        var email = rudderElement.message.context.traits.email;
        var firstname = rudderElement.message.context.traits.firstname;
        var gender = rudderElement.message.context.traits.gender;
        var lastname = rudderElement.message.context.traits.lastname;
        var phone = rudderElement.message.context.traits.phone; // This is a hack to make a deep copy that is not recommended because it will often fail:

        var traits = JSON.parse(JSON.stringify(rudderElement.message.context.traits));
        window.appboy.changeUser(userId);
        window.appboy.getUser().setAvatarImageUrl(avatar);
        if (email) window.appboy.getUser().setEmail(email);
        if (firstname) window.appboy.getUser().setFirstName(firstname);
        if (gender) window.appboy.getUser().setGender(this.formatGender(gender));
        if (lastname) window.appboy.getUser().setLastName(lastname);
        if (phone) window.appboy.getUser().setPhoneNumber(phone);

        if (address) {
          window.appboy.getUser().setCountry(address.country);
          window.appboy.getUser().setHomeCity(address.city);
        }

        if (birthday) {
          window.appboy.getUser().setDateOfBirth(birthday.getUTCFullYear(), birthday.getUTCMonth() + 1, birthday.getUTCDate());
        } // remove reserved keys https://www.appboy.com/documentation/Platform_Wide/#reserved-keys


        var reserved = ["avatar", "address", "birthday", "email", "id", "firstname", "gender", "lastname", "phone", "facebook", "twitter", "first_name", "last_name", "dob", "external_id", "country", "home_city", "bio", "gender", "phone", "email_subscribe", "push_subscribe"];
        reserved.forEach(function (element) {
          delete traits[element];
        });
        Object.keys(traits).forEach(function (key) {
          window.appboy.getUser().setCustomUserAttribute(key, traits[key]);
        });
      }
    }, {
      key: "handlePurchase",
      value: function handlePurchase(properties, userId) {
        var products = properties.products;
        var currencyCode = properties.currency;
        window.appboy.changeUser(userId); // del used properties

        del(properties, "products");
        del(properties, "currency"); // we have to make a separate call to appboy for each product

        products.forEach(function (product) {
          var productId = product.product_id;
          var price = product.price;
          var quantity = product.quantity;
          if (quantity && price && productId) window.appboy.logPurchase(productId, price, currencyCode, quantity, properties);
        });
      }
    }, {
      key: "track",
      value: function track(rudderElement) {
        var userId = rudderElement.message.userId;
        var eventName = rudderElement.message.event;
        var properties = rudderElement.message.properties;
        window.appboy.changeUser(userId);

        if (eventName.toLowerCase() === "order completed") {
          this.handlePurchase(properties, userId);
        } else {
          properties = this.handleReservedProperties(properties);
          window.appboy.logCustomEvent(eventName, properties);
        }
      }
    }, {
      key: "page",
      value: function page(rudderElement) {
        var userId = rudderElement.message.userId;
        var eventName = rudderElement.message.name;
        var properties = rudderElement.message.properties;
        properties = this.handleReservedProperties(properties);
        window.appboy.changeUser(userId);
        window.appboy.logCustomEvent(eventName, properties);
      }
    }, {
      key: "isLoaded",
      value: function isLoaded() {
        return window.appboyQueue === null;
      }
    }, {
      key: "isReady",
      value: function isReady() {
        return window.appboyQueue === null;
      }
    }]);

    return Braze;
  }();

  var crypt = createCommonjsModule(function (module) {
    (function () {
      var base64map = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/',
          crypt = {
        // Bit-wise rotation left
        rotl: function rotl(n, b) {
          return n << b | n >>> 32 - b;
        },
        // Bit-wise rotation right
        rotr: function rotr(n, b) {
          return n << 32 - b | n >>> b;
        },
        // Swap big-endian to little-endian and vice versa
        endian: function endian(n) {
          // If number given, swap endian
          if (n.constructor == Number) {
            return crypt.rotl(n, 8) & 0x00FF00FF | crypt.rotl(n, 24) & 0xFF00FF00;
          } // Else, assume array and swap all items


          for (var i = 0; i < n.length; i++) {
            n[i] = crypt.endian(n[i]);
          }

          return n;
        },
        // Generate an array of any length of random bytes
        randomBytes: function randomBytes(n) {
          for (var bytes = []; n > 0; n--) {
            bytes.push(Math.floor(Math.random() * 256));
          }

          return bytes;
        },
        // Convert a byte array to big-endian 32-bit words
        bytesToWords: function bytesToWords(bytes) {
          for (var words = [], i = 0, b = 0; i < bytes.length; i++, b += 8) {
            words[b >>> 5] |= bytes[i] << 24 - b % 32;
          }

          return words;
        },
        // Convert big-endian 32-bit words to a byte array
        wordsToBytes: function wordsToBytes(words) {
          for (var bytes = [], b = 0; b < words.length * 32; b += 8) {
            bytes.push(words[b >>> 5] >>> 24 - b % 32 & 0xFF);
          }

          return bytes;
        },
        // Convert a byte array to a hex string
        bytesToHex: function bytesToHex(bytes) {
          for (var hex = [], i = 0; i < bytes.length; i++) {
            hex.push((bytes[i] >>> 4).toString(16));
            hex.push((bytes[i] & 0xF).toString(16));
          }

          return hex.join('');
        },
        // Convert a hex string to a byte array
        hexToBytes: function hexToBytes(hex) {
          for (var bytes = [], c = 0; c < hex.length; c += 2) {
            bytes.push(parseInt(hex.substr(c, 2), 16));
          }

          return bytes;
        },
        // Convert a byte array to a base-64 string
        bytesToBase64: function bytesToBase64(bytes) {
          for (var base64 = [], i = 0; i < bytes.length; i += 3) {
            var triplet = bytes[i] << 16 | bytes[i + 1] << 8 | bytes[i + 2];

            for (var j = 0; j < 4; j++) {
              if (i * 8 + j * 6 <= bytes.length * 8) base64.push(base64map.charAt(triplet >>> 6 * (3 - j) & 0x3F));else base64.push('=');
            }
          }

          return base64.join('');
        },
        // Convert a base-64 string to a byte array
        base64ToBytes: function base64ToBytes(base64) {
          // Remove non-base-64 characters
          base64 = base64.replace(/[^A-Z0-9+\/]/ig, '');

          for (var bytes = [], i = 0, imod4 = 0; i < base64.length; imod4 = ++i % 4) {
            if (imod4 == 0) continue;
            bytes.push((base64map.indexOf(base64.charAt(i - 1)) & Math.pow(2, -2 * imod4 + 8) - 1) << imod4 * 2 | base64map.indexOf(base64.charAt(i)) >>> 6 - imod4 * 2);
          }

          return bytes;
        }
      };
      module.exports = crypt;
    })();
  });

  var charenc = {
    // UTF-8 encoding
    utf8: {
      // Convert a string to a byte array
      stringToBytes: function stringToBytes(str) {
        return charenc.bin.stringToBytes(unescape(encodeURIComponent(str)));
      },
      // Convert a byte array to a string
      bytesToString: function bytesToString(bytes) {
        return decodeURIComponent(escape(charenc.bin.bytesToString(bytes)));
      }
    },
    // Binary encoding
    bin: {
      // Convert a string to a byte array
      stringToBytes: function stringToBytes(str) {
        for (var bytes = [], i = 0; i < str.length; i++) {
          bytes.push(str.charCodeAt(i) & 0xFF);
        }

        return bytes;
      },
      // Convert a byte array to a string
      bytesToString: function bytesToString(bytes) {
        for (var str = [], i = 0; i < bytes.length; i++) {
          str.push(String.fromCharCode(bytes[i]));
        }

        return str.join('');
      }
    }
  };
  var charenc_1 = charenc;

  /*!
   * Determine if an object is a Buffer
   *
   * @author   Feross Aboukhadijeh <https://feross.org>
   * @license  MIT
   */
  // The _isBuffer check is for Safari 5-7 support, because it's missing
  // Object.prototype.constructor. Remove this eventually
  var isBuffer_1 = function isBuffer_1(obj) {
    return obj != null && (isBuffer(obj) || isSlowBuffer(obj) || !!obj._isBuffer);
  };

  function isBuffer(obj) {
    return !!obj.constructor && typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj);
  } // For Node v0.10 support. Remove this eventually.


  function isSlowBuffer(obj) {
    return typeof obj.readFloatLE === 'function' && typeof obj.slice === 'function' && isBuffer(obj.slice(0, 0));
  }

  var md5 = createCommonjsModule(function (module) {
    (function () {
      var crypt$1 = crypt,
          utf8 = charenc_1.utf8,
          isBuffer = isBuffer_1,
          bin = charenc_1.bin,
          // The core
      md5 = function md5(message, options) {
        // Convert to byte array
        if (message.constructor == String) {
          if (options && options.encoding === 'binary') message = bin.stringToBytes(message);else message = utf8.stringToBytes(message);
        } else if (isBuffer(message)) message = Array.prototype.slice.call(message, 0);else if (!Array.isArray(message) && message.constructor !== Uint8Array) message = message.toString(); // else, assume byte array already

        var m = crypt$1.bytesToWords(message),
            l = message.length * 8,
            a = 1732584193,
            b = -271733879,
            c = -1732584194,
            d = 271733878; // Swap endian

        for (var i = 0; i < m.length; i++) {
          m[i] = (m[i] << 8 | m[i] >>> 24) & 0x00FF00FF | (m[i] << 24 | m[i] >>> 8) & 0xFF00FF00;
        } // Padding


        m[l >>> 5] |= 0x80 << l % 32;
        m[(l + 64 >>> 9 << 4) + 14] = l; // Method shortcuts

        var FF = md5._ff,
            GG = md5._gg,
            HH = md5._hh,
            II = md5._ii;

        for (var i = 0; i < m.length; i += 16) {
          var aa = a,
              bb = b,
              cc = c,
              dd = d;
          a = FF(a, b, c, d, m[i + 0], 7, -680876936);
          d = FF(d, a, b, c, m[i + 1], 12, -389564586);
          c = FF(c, d, a, b, m[i + 2], 17, 606105819);
          b = FF(b, c, d, a, m[i + 3], 22, -1044525330);
          a = FF(a, b, c, d, m[i + 4], 7, -176418897);
          d = FF(d, a, b, c, m[i + 5], 12, 1200080426);
          c = FF(c, d, a, b, m[i + 6], 17, -1473231341);
          b = FF(b, c, d, a, m[i + 7], 22, -45705983);
          a = FF(a, b, c, d, m[i + 8], 7, 1770035416);
          d = FF(d, a, b, c, m[i + 9], 12, -1958414417);
          c = FF(c, d, a, b, m[i + 10], 17, -42063);
          b = FF(b, c, d, a, m[i + 11], 22, -1990404162);
          a = FF(a, b, c, d, m[i + 12], 7, 1804603682);
          d = FF(d, a, b, c, m[i + 13], 12, -40341101);
          c = FF(c, d, a, b, m[i + 14], 17, -1502002290);
          b = FF(b, c, d, a, m[i + 15], 22, 1236535329);
          a = GG(a, b, c, d, m[i + 1], 5, -165796510);
          d = GG(d, a, b, c, m[i + 6], 9, -1069501632);
          c = GG(c, d, a, b, m[i + 11], 14, 643717713);
          b = GG(b, c, d, a, m[i + 0], 20, -373897302);
          a = GG(a, b, c, d, m[i + 5], 5, -701558691);
          d = GG(d, a, b, c, m[i + 10], 9, 38016083);
          c = GG(c, d, a, b, m[i + 15], 14, -660478335);
          b = GG(b, c, d, a, m[i + 4], 20, -405537848);
          a = GG(a, b, c, d, m[i + 9], 5, 568446438);
          d = GG(d, a, b, c, m[i + 14], 9, -1019803690);
          c = GG(c, d, a, b, m[i + 3], 14, -187363961);
          b = GG(b, c, d, a, m[i + 8], 20, 1163531501);
          a = GG(a, b, c, d, m[i + 13], 5, -1444681467);
          d = GG(d, a, b, c, m[i + 2], 9, -51403784);
          c = GG(c, d, a, b, m[i + 7], 14, 1735328473);
          b = GG(b, c, d, a, m[i + 12], 20, -1926607734);
          a = HH(a, b, c, d, m[i + 5], 4, -378558);
          d = HH(d, a, b, c, m[i + 8], 11, -2022574463);
          c = HH(c, d, a, b, m[i + 11], 16, 1839030562);
          b = HH(b, c, d, a, m[i + 14], 23, -35309556);
          a = HH(a, b, c, d, m[i + 1], 4, -1530992060);
          d = HH(d, a, b, c, m[i + 4], 11, 1272893353);
          c = HH(c, d, a, b, m[i + 7], 16, -155497632);
          b = HH(b, c, d, a, m[i + 10], 23, -1094730640);
          a = HH(a, b, c, d, m[i + 13], 4, 681279174);
          d = HH(d, a, b, c, m[i + 0], 11, -358537222);
          c = HH(c, d, a, b, m[i + 3], 16, -722521979);
          b = HH(b, c, d, a, m[i + 6], 23, 76029189);
          a = HH(a, b, c, d, m[i + 9], 4, -640364487);
          d = HH(d, a, b, c, m[i + 12], 11, -421815835);
          c = HH(c, d, a, b, m[i + 15], 16, 530742520);
          b = HH(b, c, d, a, m[i + 2], 23, -995338651);
          a = II(a, b, c, d, m[i + 0], 6, -198630844);
          d = II(d, a, b, c, m[i + 7], 10, 1126891415);
          c = II(c, d, a, b, m[i + 14], 15, -1416354905);
          b = II(b, c, d, a, m[i + 5], 21, -57434055);
          a = II(a, b, c, d, m[i + 12], 6, 1700485571);
          d = II(d, a, b, c, m[i + 3], 10, -1894986606);
          c = II(c, d, a, b, m[i + 10], 15, -1051523);
          b = II(b, c, d, a, m[i + 1], 21, -2054922799);
          a = II(a, b, c, d, m[i + 8], 6, 1873313359);
          d = II(d, a, b, c, m[i + 15], 10, -30611744);
          c = II(c, d, a, b, m[i + 6], 15, -1560198380);
          b = II(b, c, d, a, m[i + 13], 21, 1309151649);
          a = II(a, b, c, d, m[i + 4], 6, -145523070);
          d = II(d, a, b, c, m[i + 11], 10, -1120210379);
          c = II(c, d, a, b, m[i + 2], 15, 718787259);
          b = II(b, c, d, a, m[i + 9], 21, -343485551);
          a = a + aa >>> 0;
          b = b + bb >>> 0;
          c = c + cc >>> 0;
          d = d + dd >>> 0;
        }

        return crypt$1.endian([a, b, c, d]);
      }; // Auxiliary functions


      md5._ff = function (a, b, c, d, x, s, t) {
        var n = a + (b & c | ~b & d) + (x >>> 0) + t;
        return (n << s | n >>> 32 - s) + b;
      };

      md5._gg = function (a, b, c, d, x, s, t) {
        var n = a + (b & d | c & ~d) + (x >>> 0) + t;
        return (n << s | n >>> 32 - s) + b;
      };

      md5._hh = function (a, b, c, d, x, s, t) {
        var n = a + (b ^ c ^ d) + (x >>> 0) + t;
        return (n << s | n >>> 32 - s) + b;
      };

      md5._ii = function (a, b, c, d, x, s, t) {
        var n = a + (c ^ (b | ~d)) + (x >>> 0) + t;
        return (n << s | n >>> 32 - s) + b;
      }; // Package private blocksize


      md5._blocksize = 16;
      md5._digestsize = 16;

      module.exports = function (message, options) {
        if (message === undefined || message === null) throw new Error('Illegal argument ' + message);
        var digestbytes = crypt$1.wordsToBytes(md5(message, options));
        return options && options.asBytes ? digestbytes : options && options.asString ? bin.bytesToString(digestbytes) : crypt$1.bytesToHex(digestbytes);
      };
    })();
  });

  var INTERCOM = /*#__PURE__*/function () {
    function INTERCOM(config) {
      _classCallCheck(this, INTERCOM);

      this.NAME = "INTERCOM";
      this.API_KEY = config.apiKey;
      this.APP_ID = config.appId;
      this.MOBILE_APP_ID = config.mobileAppId;
      logger.debug("Config ", config);
    }

    _createClass(INTERCOM, [{
      key: "init",
      value: function init() {
        window.intercomSettings = {
          app_id: this.APP_ID
        };

        (function () {
          var w = window;
          var ic = w.Intercom;

          if (typeof ic === "function") {
            ic("reattach_activator");
            ic("update", w.intercomSettings);
          } else {
            var d = document;

            var i = function i() {
              i.c(arguments);
            };

            i.q = [];

            i.c = function (args) {
              i.q.push(args);
            };

            w.Intercom = i;

            var l = function l() {
              var s = d.createElement("script");
              s.type = "text/javascript";
              s.async = true;
              s.src = "https://widget.intercom.io/widget/".concat(window.intercomSettings.app_id);
              var x = d.getElementsByTagName("script")[0];
              x.parentNode.insertBefore(s, x);
            };

            if (document.readyState === "complete") {
              l();
              window.intercom_code = true;
            } else if (w.attachEvent) {
              w.attachEvent("onload", l);
              window.intercom_code = true;
            } else {
              w.addEventListener("load", l, false);
              window.intercom_code = true;
            }
          }
        })();
      }
    }, {
      key: "page",
      value: function page() {
        // Get new messages of the current user
        window.Intercom("update");
      }
    }, {
      key: "identify",
      value: function identify(rudderElement) {
        var rawPayload = {};
        var context = rudderElement.message.context;
        var identityVerificationProps = context.Intercom ? context.Intercom : null;

        if (identityVerificationProps != null) {
          // user hash
          var userHash = context.Intercom.user_hash ? context.Intercom.user_hash : null;

          if (userHash != null) {
            rawPayload.user_hash = userHash;
          } // hide default launcher


          var hideDefaultLauncher = context.Intercom.hideDefaultLauncher ? context.Intercom.hideDefaultLauncher : null;

          if (hideDefaultLauncher != null) {
            rawPayload.hide_default_launcher = hideDefaultLauncher;
          }
        } // map rudderPayload to desired


        Object.keys(context.traits).forEach(function (field) {
          if (context.traits.hasOwnProperty(field)) {
            var value = context.traits[field];

            if (field === "company") {
              var companies = [];
              var company = {}; // special handling string

              if (typeof context.traits[field] === "string") {
                company.company_id = md5(context.traits[field]);
              }

              var companyFields = _typeof(context.traits[field]) === "object" && Object.keys(context.traits[field]) || [];
              companyFields.forEach(function (key) {
                if (companyFields.hasOwnProperty(key)) {
                  if (key != "id") {
                    company[key] = context.traits[field][key];
                  } else {
                    company.company_id = context.traits[field][key];
                  }
                }
              });

              if (_typeof(context.traits[field]) === "object" && !companyFields.includes("id")) {
                company.company_id = md5(company.name);
              }

              companies.push(company);
              rawPayload.companies = companies;
            } else {
              rawPayload[field] = context.traits[field];
            }

            switch (field) {
              case "createdAt":
                rawPayload.created_at = value;
                break;

              case "anonymousId":
                rawPayload.user_id = value;
                break;
            }
          }
        });
        rawPayload.user_id = rudderElement.message.userId;
        window.Intercom("update", rawPayload);
      }
    }, {
      key: "track",
      value: function track(rudderElement) {
        var rawPayload = {};
        var message = rudderElement.message;
        var properties = message.properties ? Object.keys(message.properties) : null;
        properties.forEach(function (property) {
          var value = message.properties[property];
          rawPayload[property] = value;
        });

        if (message.event) {
          rawPayload.event_name = message.event;
        }

        rawPayload.user_id = message.userId ? message.userId : message.anonymousId;
        rawPayload.created_at = Math.floor(new Date(message.originalTimestamp).getTime() / 1000);
        window.Intercom("trackEvent", rawPayload.event_name, rawPayload);
      }
    }, {
      key: "isLoaded",
      value: function isLoaded() {
        return !!window.intercom_code;
      }
    }, {
      key: "isReady",
      value: function isReady() {
        return !!window.intercom_code;
      }
    }]);

    return INTERCOM;
  }();

  var Keen = /*#__PURE__*/function () {
    function Keen(config) {
      _classCallCheck(this, Keen);

      this.projectID = config.projectID;
      this.writeKey = config.writeKey;
      this.ipAddon = config.ipAddon;
      this.uaAddon = config.uaAddon;
      this.urlAddon = config.urlAddon;
      this.referrerAddon = config.referrerAddon;
      this.client = null;
      this.name = "KEEN";
    }

    _createClass(Keen, [{
      key: "init",
      value: function init() {
        logger.debug("===in init Keen===");
        ScriptLoader("keen-integration", "https://cdn.jsdelivr.net/npm/keen-tracking@4");
        var check = setInterval(checkAndInitKeen.bind(this), 1000);

        function initKeen(object) {
          object.client = new window.KeenTracking({
            projectId: object.projectID,
            writeKey: object.writeKey
          });
          return object.client;
        }

        function checkAndInitKeen() {
          if (window.KeenTracking !== undefined && window.KeenTracking !== void 0) {
            this.client = initKeen(this);
            clearInterval(check);
          }
        }
      }
    }, {
      key: "identify",
      value: function identify(rudderElement) {
        logger.debug("in Keen identify");
        var traits = rudderElement.message.context.traits;
        var userId = rudderElement.message.userId ? rudderElement.message.userId : rudderElement.message.anonymousId;
        var properties = rudderElement.message.properties ? Object.assign(properties, rudderElement.message.properties) : {};
        properties.user = {
          userId: userId,
          traits: traits
        };
        properties = this.getAddOn(properties);
        this.client.extendEvents(properties);
      }
    }, {
      key: "track",
      value: function track(rudderElement) {
        logger.debug("in Keen track");
        var event = rudderElement.message.event;
        var properties = rudderElement.message.properties;
        properties = this.getAddOn(properties);
        this.client.recordEvent(event, properties);
      }
    }, {
      key: "page",
      value: function page(rudderElement) {
        logger.debug("in Keen page");
        var pageName = rudderElement.message.name;
        var pageCategory = rudderElement.message.properties ? rudderElement.message.properties.category : undefined;
        var name = "Loaded a Page";

        if (pageName) {
          name = "Viewed ".concat(pageName, " page");
        }

        if (pageCategory && pageName) {
          name = "Viewed ".concat(pageCategory, " ").concat(pageName, " page");
        }

        var properties = rudderElement.message.properties;
        properties = this.getAddOn(properties);
        this.client.recordEvent(name, properties);
      }
    }, {
      key: "isLoaded",
      value: function isLoaded() {
        logger.debug("in Keen isLoaded");
        return !!(this.client != null);
      }
    }, {
      key: "isReady",
      value: function isReady() {
        return !!(this.client != null);
      }
    }, {
      key: "getAddOn",
      value: function getAddOn(properties) {
        var addOns = [];

        if (this.ipAddon) {
          properties.ip_address = "${keen.ip}";
          addOns.push({
            name: "keen:ip_to_geo",
            input: {
              ip: "ip_address"
            },
            output: "ip_geo_info"
          });
        }

        if (this.uaAddon) {
          properties.user_agent = "${keen.user_agent}";
          addOns.push({
            name: "keen:ua_parser",
            input: {
              ua_string: "user_agent"
            },
            output: "parsed_user_agent"
          });
        }

        if (this.urlAddon) {
          properties.page_url = document.location.href;
          addOns.push({
            name: "keen:url_parser",
            input: {
              url: "page_url"
            },
            output: "parsed_page_url"
          });
        }

        if (this.referrerAddon) {
          properties.page_url = document.location.href;
          properties.referrer_url = document.referrer;
          addOns.push({
            name: "keen:referrer_parser",
            input: {
              referrer_url: "referrer_url",
              page_url: "page_url"
            },
            output: "referrer_info"
          });
        }

        properties.keen = {
          addons: addOns
        };
        return properties;
      }
    }]);

    return Keen;
  }();

  var has$3 = Object.prototype.hasOwnProperty;
  /**
   * Copy the properties of one or more `objects` onto a destination object. Input objects are iterated over
   * in left-to-right order, so duplicate properties on later objects will overwrite those from
   * erevious ones. Only enumerable and own properties of the input objects are copied onto the
   * resulting object.
   *
   * @name extend
   * @api public
   * @category Object
   * @param {Object} dest The destination object.
   * @param {...Object} sources The source objects.
   * @return {Object} `dest`, extended with the properties of all `sources`.
   * @example
   * var a = { a: 'a' };
   * var b = { b: 'b' };
   * var c = { c: 'c' };
   *
   * extend(a, b, c);
   * //=> { a: 'a', b: 'b', c: 'c' };
   */

  var extend = function extend(dest
  /*, sources */
  ) {
    var sources = Array.prototype.slice.call(arguments, 1);

    for (var i = 0; i < sources.length; i += 1) {
      for (var key in sources[i]) {
        if (has$3.call(sources[i], key)) {
          dest[key] = sources[i][key];
        }
      }
    }

    return dest;
  };
  /*
   * Exports.
   */


  var extend_1 = extend;

  var objCase = createCommonjsModule(function (module) {
    /**
     * Module exports, export
     */


    module.exports = multiple(find);
    module.exports.find = module.exports;
    /**
     * Export the replacement function, return the modified object
     */

    module.exports.replace = function (obj, key, val, options) {
      multiple(replace).call(this, obj, key, val, options);
      return obj;
    };
    /**
     * Export the delete function, return the modified object
     */


    module.exports.del = function (obj, key, options) {
      multiple(del).call(this, obj, key, null, options);
      return obj;
    };
    /**
     * Compose applying the function to a nested key
     */


    function multiple(fn) {
      return function (obj, path, val, options) {
        normalize = options && isFunction(options.normalizer) ? options.normalizer : defaultNormalize;
        path = normalize(path);
        var key;
        var finished = false;

        while (!finished) {
          loop();
        }

        function loop() {
          for (key in obj) {
            var normalizedKey = normalize(key);

            if (0 === path.indexOf(normalizedKey)) {
              var temp = path.substr(normalizedKey.length);

              if (temp.charAt(0) === '.' || temp.length === 0) {
                path = temp.substr(1);
                var child = obj[key]; // we're at the end and there is nothing.

                if (null == child) {
                  finished = true;
                  return;
                } // we're at the end and there is something.


                if (!path.length) {
                  finished = true;
                  return;
                } // step into child


                obj = child; // but we're done here

                return;
              }
            }
          }

          key = undefined; // if we found no matching properties
          // on the current object, there's no match.

          finished = true;
        }

        if (!key) return;
        if (null == obj) return obj; // the `obj` and `key` is one above the leaf object and key, so
        // start object: { a: { 'b.c': 10 } }
        // end object: { 'b.c': 10 }
        // end key: 'b.c'
        // this way, you can do `obj[key]` and get `10`.

        return fn(obj, key, val);
      };
    }
    /**
     * Find an object by its key
     *
     * find({ first_name : 'Calvin' }, 'firstName')
     */


    function find(obj, key) {
      if (obj.hasOwnProperty(key)) return obj[key];
    }
    /**
     * Delete a value for a given key
     *
     * del({ a : 'b', x : 'y' }, 'X' }) -> { a : 'b' }
     */


    function del(obj, key) {
      if (obj.hasOwnProperty(key)) delete obj[key];
      return obj;
    }
    /**
     * Replace an objects existing value with a new one
     *
     * replace({ a : 'b' }, 'a', 'c') -> { a : 'c' }
     */


    function replace(obj, key, val) {
      if (obj.hasOwnProperty(key)) obj[key] = val;
      return obj;
    }
    /**
     * Normalize a `dot.separated.path`.
     *
     * A.HELL(!*&#(!)O_WOR   LD.bar => ahelloworldbar
     *
     * @param {String} path
     * @return {String}
     */


    function defaultNormalize(path) {
      return path.replace(/[^a-zA-Z0-9\.]+/g, '').toLowerCase();
    }
    /**
     * Check if a value is a function.
     *
     * @param {*} val
     * @return {boolean} Returns `true` if `val` is a function, otherwise `false`.
     */


    function isFunction(val) {
      return typeof val === 'function';
    }
  });
  var objCase_1 = objCase.find;
  var objCase_2 = objCase.replace;
  var objCase_3 = objCase.del;

  var Kissmetrics = /*#__PURE__*/function () {
    function Kissmetrics(config) {
      _classCallCheck(this, Kissmetrics);

      this.apiKey = config.apiKey;
      this.prefixProperties = config.prefixProperties;
      this.name = "KISSMETRICS";
    }

    _createClass(Kissmetrics, [{
      key: "init",
      value: function init() {
        logger.debug("===in init Kissmetrics===");
        window._kmq = window._kmq || [];

        var _kmk = window._kmk || this.apiKey;

        function _kms(u) {
          setTimeout(function () {
            var d = document;
            var f = d.getElementsByTagName("script")[0];
            var s = d.createElement("script");
            s.type = "text/javascript";
            s.async = true;
            s.src = u;
            f.parentNode.insertBefore(s, f);
          }, 1);
        }

        _kms("//i.kissmetrics.com/i.js");

        _kms("//scripts.kissmetrics.com/".concat(_kmk, ".2.js"));

        if (this.isEnvMobile()) {
          window._kmq.push(["set", {
            "Mobile Session": "Yes"
          }]);
        }
      }
    }, {
      key: "isEnvMobile",
      value: function isEnvMobile() {
        return navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/IEMobile/i) || navigator.userAgent.match(/Opera Mini/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPhone|iPod/i);
      } // source : https://github.com/segment-integrations/analytics.js-integration-kissmetrics/blob/master/lib/index.js

    }, {
      key: "toUnixTimestamp",
      value: function toUnixTimestamp(date) {
        date = new Date(date);
        return Math.floor(date.getTime() / 1000);
      } // source : https://github.com/segment-integrations/analytics.js-integration-kissmetrics/blob/master/lib/index.js

    }, {
      key: "clean",
      value: function clean(obj) {
        var ret = {};

        for (var k in obj) {
          if (obj.hasOwnProperty(k)) {
            var value = obj[k];
            if (value === null || typeof value === "undefined") continue; // convert date to unix

            if (is_1.date(value)) {
              ret[k] = this.toUnixTimestamp(value);
              continue;
            } // leave boolean as is


            if (is_1.bool(value)) {
              ret[k] = value;
              continue;
            } // leave  numbers as is


            if (is_1.number(value)) {
              ret[k] = value;
              continue;
            } // convert non objects to strings


            logger.debug(value.toString());

            if (value.toString() !== "[object Object]") {
              ret[k] = value.toString();
              continue;
            } // json
            // must flatten including the name of the original trait/property


            var nestedObj = {};
            nestedObj[k] = value;
            var flattenedObj = this.flatten(nestedObj, {
              safe: true
            }); // stringify arrays inside nested object to be consistent with top level behavior of arrays

            for (var key in flattenedObj) {
              if (is_1.array(flattenedObj[key])) {
                flattenedObj[key] = flattenedObj[key].toString();
              }
            }

            ret = extend_1(ret, flattenedObj);
            delete ret[k];
          }
        }

        return ret;
      } // source : https://github.com/segment-integrations/analytics.js-integration-kissmetrics/blob/master/lib/index.js

    }, {
      key: "flatten",
      value: function flatten(target, opts) {
        opts = opts || {};
        var delimiter = opts.delimiter || ".";
        var _opts = opts,
            maxDepth = _opts.maxDepth;
        var currentDepth = 1;
        var output = {};

        function step(object, prev) {
          for (var key in object) {
            if (object.hasOwnProperty(key)) {
              var value = object[key];
              var isarray = opts.safe && is_1.array(value);
              var type = Object.prototype.toString.call(value);
              var isobject = type === "[object Object]" || type === "[object Array]";
              var arr = [];
              var newKey = prev ? prev + delimiter + key : key;

              if (!opts.maxDepth) {
                maxDepth = currentDepth + 1;
              }

              for (var keys in value) {
                if (value.hasOwnProperty(keys)) {
                  arr.push(keys);
                }
              }

              if (!isarray && isobject && arr.length && currentDepth < maxDepth) {
                ++currentDepth;
                return step(value, newKey);
              }

              output[newKey] = value;
            }
          }
        }

        step(target);
        return output;
      } //  source : https://github.com/segment-integrations/analytics.js-integration-kissmetrics/blob/master/lib/index.js

    }, {
      key: "prefix",
      value: function prefix(event, properties) {
        var prefixed = {};
        componentEach(properties, function (key, val) {
          if (key === "Billing Amount") {
            prefixed[key] = val;
          } else if (key === "revenue") {
            prefixed["".concat(event, " - ").concat(key)] = val;
            prefixed["Billing Amount"] = val;
          } else {
            prefixed["".concat(event, " - ").concat(key)] = val;
          }
        });
        return prefixed;
      }
    }, {
      key: "identify",
      value: function identify(rudderElement) {
        logger.debug("in Kissmetrics identify");
        var traits = this.clean(rudderElement.message.context.traits);
        var userId = rudderElement.message.userId && rudderElement.message.userId != "" ? rudderElement.message.userId : undefined;

        if (userId) {
          window._kmq.push(["identify", userId]);
        }

        if (traits) {
          window._kmq.push(["set", traits]);
        }
      }
    }, {
      key: "track",
      value: function track(rudderElement) {
        logger.debug("in Kissmetrics track");
        var event = rudderElement.message.event;
        var properties = JSON.parse(JSON.stringify(rudderElement.message.properties));
        var timestamp = this.toUnixTimestamp(new Date());
        var revenue = getRevenue(properties);

        if (revenue) {
          properties.revenue = revenue;
        }

        var _properties = properties,
            products = _properties.products;

        if (products) {
          delete properties.products;
        }

        properties = this.clean(properties);
        logger.debug(JSON.stringify(properties));

        if (this.prefixProperties) {
          properties = this.prefix(event, properties);
        }

        window._kmq.push(["record", event, properties]);

        var iterator = function pushItem(product, i) {
          var item = product;
          if (this.prefixProperties) item = this.prefix(event, item);
          item._t = timestamp + i;
          item._d = 1;
          window.KM.set(item);
        }.bind(this);

        if (products) {
          window._kmq.push(function () {
            componentEach(products, iterator);
          });
        }
      }
    }, {
      key: "page",
      value: function page(rudderElement) {
        logger.debug("in Kissmetrics page");
        var pageName = rudderElement.message.name;
        var pageCategory = rudderElement.message.properties ? rudderElement.message.properties.category : undefined;
        var name = "Loaded a Page";

        if (pageName) {
          name = "Viewed ".concat(pageName, " page");
        }

        if (pageCategory && pageName) {
          name = "Viewed ".concat(pageCategory, " ").concat(pageName, " page");
        }

        var properties = rudderElement.message.properties;

        if (this.prefixProperties) {
          properties = this.prefix("Page", properties);
        }

        window._kmq.push(["record", name, properties]);
      }
    }, {
      key: "alias",
      value: function alias(rudderElement) {
        var prev = rudderElement.message.previousId;
        var userId = rudderElement.message.userId;

        window._kmq.push(["alias", userId, prev]);
      }
    }, {
      key: "group",
      value: function group(rudderElement) {
        var groupId = rudderElement.message.groupId;
        var groupTraits = rudderElement.message.traits;
        groupTraits = this.prefix("Group", groupTraits);

        if (groupId) {
          groupTraits["Group - id"] = groupId;
        }

        window._kmq.push(["set", groupTraits]);

        logger.debug("in Kissmetrics group");
      }
    }, {
      key: "isLoaded",
      value: function isLoaded() {
        return is_1.object(window.KM);
      }
    }, {
      key: "isReady",
      value: function isReady() {
        return is_1.object(window.KM);
      }
    }]);

    return Kissmetrics;
  }();

  var CustomerIO = /*#__PURE__*/function () {
    function CustomerIO(config) {
      _classCallCheck(this, CustomerIO);

      this.siteID = config.siteID;
      this.apiKey = config.apiKey;
      this.name = "CUSTOMERIO";
    }

    _createClass(CustomerIO, [{
      key: "init",
      value: function init() {
        logger.debug("===in init Customer IO init===");
        window._cio = window._cio || [];
        var siteID = this.siteID;

        (function () {
          var a;
          var b;
          var c;

          a = function a(f) {
            return function () {
              window._cio.push([f].concat(Array.prototype.slice.call(arguments, 0)));
            };
          };

          b = ["load", "identify", "sidentify", "track", "page"];

          for (c = 0; c < b.length; c++) {
            window._cio[b[c]] = a(b[c]);
          }

          var t = document.createElement("script");
          var s = document.getElementsByTagName("script")[0];
          t.async = true;
          t.id = "cio-tracker";
          t.setAttribute("data-site-id", siteID);
          t.src = "https://assets.customer.io/assets/track.js";
          s.parentNode.insertBefore(t, s);
        })();
      }
    }, {
      key: "identify",
      value: function identify(rudderElement) {
        logger.debug("in Customer IO identify");
        var userId = rudderElement.message.userId ? rudderElement.message.userId : rudderElement.message.anonymousId;
        var traits = rudderElement.message.context.traits ? rudderElement.message.context.traits : {};

        if (!traits.created_at) {
          traits.created_at = Math.floor(new Date().getTime() / 1000);
        }

        traits.id = userId;

        window._cio.identify(traits);
      }
    }, {
      key: "track",
      value: function track(rudderElement) {
        logger.debug("in Customer IO track");
        var eventName = rudderElement.message.event;
        var properties = rudderElement.message.properties;

        window._cio.track(eventName, properties);
      }
    }, {
      key: "page",
      value: function page(rudderElement) {
        logger.debug("in Customer IO page");
        var name = rudderElement.message.name || rudderElement.message.properties.url;

        window._cio.page(name, rudderElement.message.properties);
      }
    }, {
      key: "isLoaded",
      value: function isLoaded() {
        return !!(window._cio && window._cio.push !== Array.prototype.push);
      }
    }, {
      key: "isReady",
      value: function isReady() {
        return !!(window._cio && window._cio.push !== Array.prototype.push);
      }
    }]);

    return CustomerIO;
  }();

  /**
   * Cache whether `<body>` exists.
   */

  var body = false;
  /**
   * Callbacks to call when the body exists.
   */

  var callbacks = [];
  /**
   * Export a way to add handlers to be invoked once the body exists.
   *
   * @param {Function} callback  A function to call when the body exists.
   */

  var onBody = function onBody(callback) {
    if (body) {
      call(callback);
    } else {
      callbacks.push(callback);
    }
  };
  /**
   * Set an interval to check for `document.body`.
   */


  var interval = setInterval(function () {
    if (!document.body) return;
    body = true;
    componentEach(callbacks, call);
    clearInterval(interval);
  }, 5);
  /**
   * Call a callback, passing it the body.
   *
   * @param {Function} callback  The callback to call.
   */

  function call(callback) {
    callback(document.body);
  }

  var Chartbeat = /*#__PURE__*/function () {
    function Chartbeat(config, analytics) {
      _classCallCheck(this, Chartbeat);

      this.analytics = analytics; // use this to modify failed integrations or for passing events from callback to other destinations

      this._sf_async_config = window._sf_async_config = window._sf_async_config || {};
      window._sf_async_config.useCanonical = true;
      window._sf_async_config.uid = config.uid;
      window._sf_async_config.domain = config.domain;
      this.isVideo = !!config.video;
      this.sendNameAndCategoryAsTitle = config.sendNameAndCategoryAsTitle || true;
      this.subscriberEngagementKeys = config.subscriberEngagementKeys || [];
      this.replayEvents = [];
      this.failed = false;
      this.isFirstPageCallMade = false;
      this.name = "CHARTBEAT";
    }

    _createClass(Chartbeat, [{
      key: "init",
      value: function init() {
        logger.debug("===in init Chartbeat===");
      }
    }, {
      key: "identify",
      value: function identify(rudderElement) {
        logger.debug("in Chartbeat identify");
      }
    }, {
      key: "track",
      value: function track(rudderElement) {
        logger.debug("in Chartbeat track");
      }
    }, {
      key: "page",
      value: function page(rudderElement) {
        logger.debug("in Chartbeat page");
        this.loadConfig(rudderElement);

        if (!this.isFirstPageCallMade) {
          this.isFirstPageCallMade = true;
          this.initAfterPage();
        } else {
          if (this.failed) {
            logger.debug("===ignoring cause failed integration===");
            this.replayEvents = [];
            return;
          }

          if (!this.isLoaded() && !this.failed) {
            logger.debug("===pushing to replay queue for chartbeat===");
            this.replayEvents.push(["page", rudderElement]);
            return;
          }

          logger.debug("===processing page event in chartbeat===");
          var properties = rudderElement.message.properties;
          window.pSUPERFLY.virtualPage(properties.path);
        }
      }
    }, {
      key: "isLoaded",
      value: function isLoaded() {
        logger.debug("in Chartbeat isLoaded");

        if (!this.isFirstPageCallMade) {
          return true;
        }

        return !!window.pSUPERFLY;
      }
    }, {
      key: "isFailed",
      value: function isFailed() {
        return this.failed;
      }
    }, {
      key: "isReady",
      value: function isReady() {
        return !!window.pSUPERFLY;
      }
    }, {
      key: "loadConfig",
      value: function loadConfig(rudderElement) {
        var properties = rudderElement.message.properties;
        var category = properties ? properties.category : undefined;
        var name = rudderElement.message.name;
        var author = properties ? properties.author : undefined;
        var title;

        if (this.sendNameAndCategoryAsTitle) {
          title = category && name ? "".concat(category, " ").concat(name) : name;
        }

        if (category) window._sf_async_config.sections = category;
        if (author) window._sf_async_config.authors = author;
        if (title) window._sf_async_config.title = title;

        var _cbq = window._cbq = window._cbq || [];

        for (var key in properties) {
          if (!properties.hasOwnProperty(key)) continue;

          if (this.subscriberEngagementKeys.indexOf(key) > -1) {
            _cbq.push([key, properties[key]]);
          }
        }
      }
    }, {
      key: "initAfterPage",
      value: function initAfterPage() {
        var _this = this;

        onBody(function () {
          var script = _this.isVideo ? "chartbeat_video.js" : "chartbeat.js";

          function loadChartbeat() {
            var e = document.createElement("script");
            var n = document.getElementsByTagName("script")[0];
            e.type = "text/javascript";
            e.async = true;
            e.src = "//static.chartbeat.com/js/".concat(script);
            n.parentNode.insertBefore(e, n);
          }

          loadChartbeat();
        });

        this._isReady(this).then(function (instance) {
          logger.debug("===replaying on chartbeat===");
          instance.replayEvents.forEach(function (event) {
            instance[event[0]](event[1]);
          });
        });
      }
    }, {
      key: "pause",
      value: function pause(time) {
        return new Promise(function (resolve) {
          setTimeout(resolve, time);
        });
      }
    }, {
      key: "_isReady",
      value: function _isReady(instance) {
        var _this2 = this;

        var time = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
        return new Promise(function (resolve) {
          if (_this2.isLoaded()) {
            _this2.failed = false;
            logger.debug("===chartbeat loaded successfully===");
            instance.analytics.emit("ready");
            return resolve(instance);
          }

          if (time >= MAX_WAIT_FOR_INTEGRATION_LOAD) {
            _this2.failed = true;
            logger.debug("===chartbeat failed===");
            return resolve(instance);
          }

          _this2.pause(INTEGRATION_LOAD_CHECK_INTERVAL).then(function () {
            return _this2._isReady(instance, time + INTEGRATION_LOAD_CHECK_INTERVAL).then(resolve);
          });
        });
      }
    }]);

    return Chartbeat;
  }();

  var Comscore = /*#__PURE__*/function () {
    function Comscore(config, analytics) {
      _classCallCheck(this, Comscore);

      this.c2ID = config.c2ID;
      this.analytics = analytics;
      this.comScoreBeaconParam = config.comScoreBeaconParam ? config.comScoreBeaconParam : {};
      this.isFirstPageCallMade = false;
      this.failed = false;
      this.comScoreParams = {};
      this.replayEvents = [];
      this.name = "COMSCORE";
    }

    _createClass(Comscore, [{
      key: "init",
      value: function init() {
        logger.debug("===in init Comscore init===");
      }
    }, {
      key: "identify",
      value: function identify(rudderElement) {
        logger.debug("in Comscore identify");
      }
    }, {
      key: "track",
      value: function track(rudderElement) {
        logger.debug("in Comscore track");
      }
    }, {
      key: "page",
      value: function page(rudderElement) {
        logger.debug("in Comscore page");
        this.loadConfig(rudderElement);

        if (!this.isFirstPageCallMade) {
          this.isFirstPageCallMade = true;
          this.initAfterPage();
        } else {
          if (this.failed) {
            this.replayEvents = [];
            return;
          }

          if (!this.isLoaded() && !this.failed) {
            this.replayEvents.push(["page", rudderElement]);
            return;
          }

          var properties = rudderElement.message.properties; // window.COMSCORE.beacon({c1:"2", c2: ""});
          // this.comScoreParams = this.mapComscoreParams(properties);

          window.COMSCORE.beacon(this.comScoreParams);
        }
      }
    }, {
      key: "loadConfig",
      value: function loadConfig(rudderElement) {
        logger.debug("=====in loadConfig=====");
        this.comScoreParams = this.mapComscoreParams(rudderElement.message.properties);
        window._comscore = window._comscore || [];

        window._comscore.push(this.comScoreParams);
      }
    }, {
      key: "initAfterPage",
      value: function initAfterPage() {
        logger.debug("=====in initAfterPage=====");

        (function () {
          var s = document.createElement("script");
          var el = document.getElementsByTagName("script")[0];
          s.async = true;
          s.src = "".concat(document.location.protocol == "https:" ? "https://sb" : "http://b", ".scorecardresearch.com/beacon.js");
          el.parentNode.insertBefore(s, el);
        })();

        this._isReady(this).then(function (instance) {
          instance.replayEvents.forEach(function (event) {
            instance[event[0]](event[1]);
          });
        });
      }
    }, {
      key: "pause",
      value: function pause(time) {
        return new Promise(function (resolve) {
          setTimeout(resolve, time);
        });
      }
    }, {
      key: "_isReady",
      value: function _isReady(instance) {
        var _this = this;

        var time = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
        return new Promise(function (resolve) {
          if (_this.isLoaded()) {
            _this.failed = false;
            instance.analytics.emit("ready");
            return resolve(instance);
          }

          if (time >= MAX_WAIT_FOR_INTEGRATION_LOAD) {
            _this.failed = true;
            return resolve(instance);
          }

          _this.pause(INTEGRATION_LOAD_CHECK_INTERVAL).then(function () {
            return _this._isReady(instance, time + INTEGRATION_LOAD_CHECK_INTERVAL).then(resolve);
          });
        });
      }
    }, {
      key: "mapComscoreParams",
      value: function mapComscoreParams(properties) {
        logger.debug("=====in mapComscoreParams=====");
        var comScoreBeaconParamsMap = this.comScoreBeaconParam;
        var comScoreParams = {};
        Object.keys(comScoreBeaconParamsMap).forEach(function (property) {
          if (property in properties) {
            var key = comScoreBeaconParamsMap[property];
            var value = properties[property];
            comScoreParams[key] = value;
          }
        });
        comScoreParams.c1 = "2";
        comScoreParams.c2 = this.c2ID;
        /* if (this.options.comscorekw.length) {
          comScoreParams.comscorekw = this.options.comscorekw;
        } */

        logger.debug("=====in mapComscoreParams=====", comScoreParams);
        return comScoreParams;
      }
    }, {
      key: "isLoaded",
      value: function isLoaded() {
        logger.debug("in Comscore isLoaded");

        if (!this.isFirstPageCallMade) {
          return true;
        }

        return !!window.COMSCORE;
      }
    }, {
      key: "isReady",
      value: function isReady() {
        return !!window.COMSCORE;
      }
    }]);

    return Comscore;
  }();

  var FacebookPixel = /*#__PURE__*/function () {
    function FacebookPixel(config) {
      _classCallCheck(this, FacebookPixel);

      this.blacklistPiiProperties = config.blacklistPiiProperties;
      this.categoryToContent = config.categoryToContent;
      this.pixelId = config.pixelId;
      this.eventsToEvents = config.eventsToEvents;
      this.eventCustomProperties = config.eventCustomProperties;
      this.valueFieldIdentifier = config.valueFieldIdentifier;
      this.advancedMapping = config.advancedMapping;
      this.traitKeyToExternalId = config.traitKeyToExternalId;
      this.legacyConversionPixelId = config.legacyConversionPixelId;
      this.userIdAsPixelId = config.userIdAsPixelId;
      this.whitelistPiiProperties = config.whitelistPiiProperties;
      this.name = "FB_PIXEL";
    }

    _createClass(FacebookPixel, [{
      key: "init",
      value: function init() {
        if (this.categoryToContent === undefined) {
          this.categoryToContent = [];
        }

        if (this.legacyConversionPixelId === undefined) {
          this.legacyConversionPixelId = [];
        }

        if (this.userIdAsPixelId === undefined) {
          this.userIdAsPixelId = [];
        }

        logger.debug("===in init FbPixel===");

        window._fbq = function () {
          if (window.fbq.callMethod) {
            window.fbq.callMethod.apply(window.fbq, arguments);
          } else {
            window.fbq.queue.push(arguments);
          }
        };

        window.fbq = window.fbq || window._fbq;
        window.fbq.push = window.fbq;
        window.fbq.loaded = true;
        window.fbq.disablePushState = true; // disables automatic pageview tracking

        window.fbq.allowDuplicatePageViews = true; // enables fb

        window.fbq.version = "2.0";
        window.fbq.queue = [];
        window.fbq("init", this.pixelId);
        ScriptLoader("fbpixel-integration", "https://connect.facebook.net/en_US/fbevents.js");
      }
    }, {
      key: "isLoaded",
      value: function isLoaded() {
        logger.debug("in FBPixel isLoaded");
        return !!(window.fbq && window.fbq.callMethod);
      }
    }, {
      key: "isReady",
      value: function isReady() {
        logger.debug("in FBPixel isReady");
        return !!(window.fbq && window.fbq.callMethod);
      }
    }, {
      key: "page",
      value: function page(rudderElement) {
        window.fbq("track", "PageView");
      }
    }, {
      key: "identify",
      value: function identify(rudderElement) {
        if (this.advancedMapping) {
          window.fbq("init", this.pixelId, rudderElement.message.context.traits);
        }
      }
    }, {
      key: "track",
      value: function track(rudderElement) {
        var _this = this;

        var self = this;
        var event = rudderElement.message.event;
        var revenue = this.formatRevenue(rudderElement.message.properties.revenue);
        var payload = this.buildPayLoad(rudderElement, true);

        if (this.categoryToContent === undefined) {
          this.categoryToContent = [];
        }

        if (this.legacyConversionPixelId === undefined) {
          this.legacyConversionPixelId = [];
        }

        if (this.userIdAsPixelId === undefined) {
          this.userIdAsPixelId = [];
        }

        payload.value = revenue;
        var standard = this.eventsToEvents;
        var legacy = this.legacyConversionPixelId;
        var standardTo;
        var legacyTo;
        standardTo = standard.reduce(function (filtered, standard) {
          if (standard.from === event) {
            filtered.push(standard.to);
          }

          return filtered;
        }, []);
        legacyTo = legacy.reduce(function (filtered, legacy) {
          if (legacy.from === event) {
            filtered.push(legacy.to);
          }

          return filtered;
        }, []);
        each_1(function (event) {
          payload.currency = rudderElement.message.properties.currency || "USD";
          window.fbq("trackSingle", self.pixelId, event, payload, {
            eventID: rudderElement.message.messageId
          });
        }, standardTo);
        each_1(function (event) {
          window.fbq("trackSingle", self.pixelId, event, {
            currency: rudderElement.message.properties.currency,
            value: revenue
          }, {
            eventID: rudderElement.message.messageId
          });
        }, legacyTo);

        if (event === "Product List Viewed") {
          var contentType;
          var contentIds;
          var contents = [];
          var products = rudderElement.message.properties.products;
          var customProperties = this.buildPayLoad(rudderElement, true);

          if (Array.isArray(products)) {
            products.forEach(function (product) {
              var productId = product.product_id;

              if (productId) {
                contentIds.push(productId);
                contents.push({
                  id: productId,
                  quantity: rudderElement.message.properties.quantity
                });
              }
            });
          }

          if (contentIds.length) {
            contentType = ["product"];
          } else {
            contentIds.push(rudderElement.message.properties.category || "");
            contents.push({
              id: rudderElement.message.properties.category || "",
              quantity: 1
            });
            contentType = ["product_group"];
          }

          window.fbq("trackSingle", self.pixelId, "ViewContent", this.merge({
            content_ids: contentIds,
            content_type: this.getContentType(rudderElement, contentType),
            contents: contents
          }, customProperties), {
            eventID: rudderElement.message.messageId
          });
          each_1(function (event) {
            window.fbq("trackSingle", self.pixelId, event, {
              currency: rudderElement.message.properties.currency,
              value: _this.formatRevenue(rudderElement.message.properties.revenue)
            }, {
              eventID: rudderElement.message.messageId
            });
          }, legacyTo);
        } else if (event === "Product Viewed") {
          var useValue = this.valueFieldIdentifier === "properties.value";
          var customProperties = this.buildPayLoad(rudderElement, true);
          window.fbq("trackSingle", self.pixelId, "ViewContent", this.merge({
            content_ids: [rudderElement.message.properties.product_id || rudderElement.message.properties.id || rudderElement.message.properties.sku || ""],
            content_type: this.getContentType(rudderElement, ["product"]),
            content_name: rudderElement.message.properties.product_name || "",
            content_category: rudderElement.message.properties.category || "",
            currency: rudderElement.message.properties.currency,
            value: useValue ? this.formatRevenue(rudderElement.message.properties.value) : this.formatRevenue(rudderElement.message.properties.price),
            contents: [{
              id: rudderElement.message.properties.product_id || rudderElement.message.properties.id || rudderElement.message.properties.sku || "",
              quantity: rudderElement.message.properties.quantity,
              item_price: rudderElement.message.properties.price
            }]
          }, customProperties), {
            eventID: rudderElement.message.messageId
          });
          each_1(function (event) {
            window.fbq("trackSingle", self.pixelId, event, {
              currency: rudderElement.message.properties.currency,
              value: useValue ? _this.formatRevenue(rudderElement.message.properties.value) : _this.formatRevenue(rudderElement.message.properties.price)
            }, {
              eventID: rudderElement.message.messageId
            });
          }, legacyTo);
        } else if (event === "Product Added") {
          var useValue = this.valueFieldIdentifier === "properties.value";
          var customProperties = this.buildPayLoad(rudderElement, true);
          window.fbq("trackSingle", self.pixelId, "AddToCart", this.merge({
            content_ids: [rudderElement.message.properties.product_id || rudderElement.message.properties.id || rudderElement.message.properties.sku || ""],
            content_type: this.getContentType(rudderElement, ["product"]),
            content_name: rudderElement.message.properties.product_name || "",
            content_category: rudderElement.message.properties.category || "",
            currency: rudderElement.message.properties.currency,
            value: useValue ? this.formatRevenue(rudderElement.message.properties.value) : this.formatRevenue(rudderElement.message.properties.price),
            contents: [{
              id: rudderElement.message.properties.product_id || rudderElement.message.properties.id || rudderElement.message.properties.sku || "",
              quantity: rudderElement.message.properties.quantity,
              item_price: rudderElement.message.properties.price
            }]
          }, customProperties), {
            eventID: rudderElement.message.messageId
          });
          each_1(function (event) {
            window.fbq("trackSingle", self.pixelId, event, {
              currency: rudderElement.message.properties.currency,
              value: useValue ? _this.formatRevenue(rudderElement.message.properties.value) : _this.formatRevenue(rudderElement.message.properties.price)
            }, {
              eventID: rudderElement.message.messageId
            });
          }, legacyTo);
          this.merge({
            content_ids: [rudderElement.message.properties.product_id || rudderElement.message.properties.id || rudderElement.message.properties.sku || ""],
            content_type: this.getContentType(rudderElement, ["product"]),
            content_name: rudderElement.message.properties.product_name || "",
            content_category: rudderElement.message.properties.category || "",
            currency: rudderElement.message.properties.currency,
            value: useValue ? this.formatRevenue(rudderElement.message.properties.value) : this.formatRevenue(rudderElement.message.properties.price),
            contents: [{
              id: rudderElement.message.properties.product_id || rudderElement.message.properties.id || rudderElement.message.properties.sku || "",
              quantity: rudderElement.message.properties.quantity,
              item_price: rudderElement.message.properties.price
            }]
          }, customProperties);
        } else if (event === "Order Completed") {
          var products = rudderElement.message.properties.products;
          var customProperties = this.buildPayLoad(rudderElement, true);
          var revenue = this.formatRevenue(rudderElement.message.properties.revenue);
          var contentType = this.getContentType(rudderElement, ["product"]);
          var contentIds = [];
          var contents = [];

          for (var i = 0; i < products.length; i++) {
            var pId = product.product_id;
            contentIds.push(pId);
            var content = {
              id: pId,
              quantity: rudderElement.message.properties.quantity
            };

            if (rudderElement.message.properties.price) {
              content.item_price = rudderElement.message.properties.price;
            }

            contents.push(content);
          }

          window.fbq("trackSingle", self.pixelId, "Purchase", this.merge({
            content_ids: contentIds,
            content_type: contentType,
            currency: rudderElement.message.properties.currency,
            value: revenue,
            contents: contents,
            num_items: contentIds.length
          }, customProperties), {
            eventID: rudderElement.message.messageId
          });
          each_1(function (event) {
            window.fbq("trackSingle", self.pixelId, event, {
              currency: rudderElement.message.properties.currency,
              value: _this.formatRevenue(rudderElement.message.properties.revenue)
            }, {
              eventID: rudderElement.message.messageId
            });
          }, legacyTo);
        } else if (event === "Products Searched") {
          var customProperties = this.buildPayLoad(rudderElement, true);
          window.fbq("trackSingle", self.pixelId, "Search", this.merge({
            search_string: rudderElement.message.properties.query
          }, customProperties), {
            eventID: rudderElement.message.messageId
          });
          each_1(function (event) {
            window.fbq("trackSingle", self.pixelId, event, {
              currency: rudderElement.message.properties.currency,
              value: formatRevenue(rudderElement.message.properties.revenue)
            }, {
              eventID: rudderElement.message.messageId
            });
          }, legacyTo);
        } else if (event === "Checkout Started") {
          var products = rudderElement.message.properties.products;
          var customProperties = this.buildPayLoad(rudderElement, true);
          var revenue = this.formatRevenue(rudderElement.message.properties.revenue);
          var contentCategory = rudderElement.message.properties.category;
          var contentIds = [];
          var contents = [];

          for (var i = 0; i < products.length; i++) {
            var _product = products[i];
            var pId = _product.product_id;
            contentIds.push(pId);
            var content = {
              id: pId,
              quantity: rudderElement.message.properties.quantity,
              item_price: rudderElement.message.properties.price
            };

            if (rudderElement.message.properties.price) {
              content.item_price = rudderElement.message.properties.price;
            }

            contents.push(content);
          }

          if (!contentCategory && products[0] && products[0].category) {
            contentCategory = products[0].category;
          }

          window.fbq("trackSingle", self.pixelId, "InitiateCheckout", this.merge({
            content_category: contentCategory,
            content_ids: contentIds,
            content_type: this.getContentType(rudderElement, ["product"]),
            currency: rudderElement.message.properties.currency,
            value: revenue,
            contents: contents,
            num_items: contentIds.length
          }, customProperties), {
            eventID: rudderElement.message.messageId
          });
          each_1(function (event) {
            window.fbq("trackSingle", self.pixelId, event, {
              currency: rudderElement.message.properties.currency,
              value: _this.formatRevenue(rudderElement.message.properties.revenue)
            }, {
              eventID: rudderElement.message.messageId
            });
          }, legacyTo);
        }
      }
    }, {
      key: "getContentType",
      value: function getContentType(rudderElement, defaultValue) {
        var options = rudderElement.message.options;

        if (options && options.contentType) {
          return [options.contentType];
        }

        var category = rudderElement.message.properties.category;

        if (!category) {
          var products = rudderElement.message.properties.products;

          if (products && products.length) {
            category = products[0].category;
          }
        }

        if (category) {
          var mapped = this.categoryToContent;
          var mappedTo;
          mappedTo = mapped.reduce(function (filtered, mapped) {
            if (mapped.from == category) {
              filtered.push(mapped.to);
            }

            return filtered;
          }, []);

          if (mappedTo.length) {
            return mappedTo;
          }
        }

        return defaultValue;
      }
    }, {
      key: "merge",
      value: function merge(obj1, obj2) {
        var res = {}; // All properties of obj1

        for (var propObj1 in obj1) {
          if (obj1.hasOwnProperty(propObj1)) {
            res[propObj1] = obj1[propObj1];
          }
        } // Extra properties of obj2


        for (var propObj2 in obj2) {
          if (obj2.hasOwnProperty(propObj2) && !res.hasOwnProperty(propObj2)) {
            res[propObj2] = obj2[propObj2];
          }
        }

        return res;
      }
    }, {
      key: "formatRevenue",
      value: function formatRevenue(revenue) {
        return Number(revenue || 0).toFixed(2);
      }
    }, {
      key: "buildPayLoad",
      value: function buildPayLoad(rudderElement, isStandardEvent) {
        var dateFields = ["checkinDate", "checkoutDate", "departingArrivalDate", "departingDepartureDate", "returningArrivalDate", "returningDepartureDate", "travelEnd", "travelStart"];
        var defaultPiiProperties = ["email", "firstName", "lastName", "gender", "city", "country", "phone", "state", "zip", "birthday"];
        var whitelistPiiProperties = this.whitelistPiiProperties || [];
        var blacklistPiiProperties = this.blacklistPiiProperties || [];
        var eventCustomProperties = this.eventCustomProperties || [];
        var customPiiProperties = {};

        for (var i = 0; i < blacklistPiiProperties[i]; i++) {
          var configuration = blacklistPiiProperties[i];
          customPiiProperties[configuration.blacklistPiiProperties] = configuration.blacklistPiiHash;
        }

        var payload = {};
        var properties = rudderElement.message.properties;

        for (var property in properties) {
          if (!properties.hasOwnProperty(property)) {
            continue;
          }

          if (isStandardEvent && eventCustomProperties.indexOf(property) < 0) {
            continue;
          }

          var value = properties[property];

          if (dateFields.indexOf(properties) >= 0) {
            if (is_1.date(value)) {
              payload[property] = value.toISOTring().split("T")[0];
              continue;
            }
          }

          if (customPiiProperties.hasOwnProperty(property)) {
            if (customPiiProperties[property] && typeof value === "string") {
              payload[property] = sha256(value);
            }

            continue;
          }

          var isPropertyPii = defaultPiiProperties.indexOf(property) >= 0;
          var isProperyWhiteListed = whitelistPiiProperties.indexOf(property) >= 0;

          if (!isPropertyPii || isProperyWhiteListed) {
            payload[property] = value;
          }
        }

        return payload;
      }
    }]);

    return FacebookPixel;
  }();

  var core = createCommonjsModule(function (module, exports) {

    (function (root, factory) {
      {
        // CommonJS
        module.exports = exports = factory();
      }
    })(commonjsGlobal, function () {
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
    })(commonjsGlobal, function (CryptoJS) {
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

  var md5$1 = createCommonjsModule(function (module, exports) {

    (function (root, factory) {
      {
        // CommonJS
        module.exports = exports = factory(core);
      }
    })(commonjsGlobal, function (CryptoJS) {
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
    })(commonjsGlobal, function (CryptoJS) {
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
    })(commonjsGlobal, function (CryptoJS) {
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
    })(commonjsGlobal, function (CryptoJS) {
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
    })(commonjsGlobal, function (CryptoJS) {
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
        module.exports = exports = factory(core, encBase64, md5$1, evpkdf, cipherCore);
      }
    })(commonjsGlobal, function (CryptoJS) {
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
    })(commonjsGlobal, function (CryptoJS) {
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

  var componentType$2 = function componentType(val) {
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
    var t = componentType$2(obj);

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

  var browser = createCommonjsModule(function (module, exports) {
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
  var browser_1 = browser.log;
  var browser_2 = browser.formatArgs;
  var browser_3 = browser.save;
  var browser_4 = browser.load;
  var browser_5 = browser.useColors;
  var browser_6 = browser.storage;
  var browser_7 = browser.colors;

  /**
   * Module dependencies.
   */

  var debug = browser('cookie');
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
        return get$1(name);

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


  function get$1(name) {
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


  var has$4 = Object.prototype.hasOwnProperty;
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
    if (has$4.call(source, key) && target[key] === undefined) {
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
    if (has$4.call(source, key)) {
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
          freeGlobal = freeExports && objectTypes['object'] && module && !module.nodeType && _typeof(commonjsGlobal) == "object" && commonjsGlobal;

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
    }).call(commonjsGlobal);
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

  var browser$1 = createCommonjsModule(function (module, exports) {
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
  var browser_1$1 = browser$1.log;
  var browser_2$1 = browser$1.formatArgs;
  var browser_3$1 = browser$1.save;
  var browser_4$1 = browser$1.load;
  var browser_5$1 = browser$1.useColors;
  var browser_6$1 = browser$1.storage;
  var browser_7$1 = browser$1.colors;

  /**
   * Module dependencies.
   */

  var debug$1 = browser$1('cookie');
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
        return get$2(name);

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


  function get$2(name) {
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
        win = typeof window != 'undefined' ? window : commonjsGlobal,
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

  var defaults$2 = {
    lotame_synch_time_key: "lt_synch_timestamp"
  };

  var LotameStorage = /*#__PURE__*/function () {
    function LotameStorage() {
      _classCallCheck(this, LotameStorage);

      this.storage = Storage$1; // new Storage();
    }

    _createClass(LotameStorage, [{
      key: "setLotameSynchTime",
      value: function setLotameSynchTime(value) {
        this.storage.setItem(defaults$2.lotame_synch_time_key, value);
      }
    }, {
      key: "getLotameSynchTime",
      value: function getLotameSynchTime() {
        return this.storage.getItem(defaults$2.lotame_synch_time_key);
      }
    }]);

    return LotameStorage;
  }();

  var lotameStorage = new LotameStorage();

  var Lotame = /*#__PURE__*/function () {
    function Lotame(config, analytics) {
      var _this = this;

      _classCallCheck(this, Lotame);

      this.name = "LOTAME";
      this.analytics = analytics;
      this.storage = lotameStorage;
      this.bcpUrlSettingsPixel = config.bcpUrlSettingsPixel;
      this.bcpUrlSettingsIframe = config.bcpUrlSettingsIframe;
      this.dspUrlSettingsPixel = config.dspUrlSettingsPixel;
      this.dspUrlSettingsIframe = config.dspUrlSettingsIframe;
      this.mappings = {};
      config.mappings.forEach(function (mapping) {
        var key = mapping.key;
        var value = mapping.value;
        _this.mappings[key] = value;
      });
    }

    _createClass(Lotame, [{
      key: "init",
      value: function init() {
        logger.debug("===in init Lotame===");

        window.LOTAME_SYNCH_CALLBACK = function () {};
      }
    }, {
      key: "addPixel",
      value: function addPixel(source, width, height) {
        logger.debug("Adding pixel for :: ".concat(source));
        var image = document.createElement("img");
        image.src = source;
        image.setAttribute("width", width);
        image.setAttribute("height", height);
        logger.debug("Image Pixel :: ".concat(image));
        document.getElementsByTagName("body")[0].appendChild(image);
      }
    }, {
      key: "addIFrame",
      value: function addIFrame(source) {
        logger.debug("Adding iframe for :: ".concat(source));
        var iframe = document.createElement("iframe");
        iframe.src = source;
        iframe.title = "empty";
        iframe.setAttribute("id", "LOTCCFrame");
        iframe.setAttribute("tabindex", "-1");
        iframe.setAttribute("role", "presentation");
        iframe.setAttribute("aria-hidden", "true");
        iframe.setAttribute("style", "border: 0px; width: 0px; height: 0px; display: block;");
        logger.debug("IFrame :: ".concat(iframe));
        document.getElementsByTagName("body")[0].appendChild(iframe);
      }
    }, {
      key: "syncPixel",
      value: function syncPixel(userId) {
        var _this2 = this;

        logger.debug("===== in syncPixel ======");
        logger.debug("Firing DSP Pixel URLs");

        if (this.dspUrlSettingsPixel && this.dspUrlSettingsPixel.length > 0) {
          var currentTime = Date.now();
          this.dspUrlSettingsPixel.forEach(function (urlSettings) {
            var dspUrl = _this2.compileUrl(_objectSpread2(_objectSpread2({}, _this2.mappings), {}, {
              userId: userId,
              random: currentTime
            }), urlSettings.dspUrlTemplate);

            _this2.addPixel(dspUrl, "1", "1");
          });
        }

        logger.debug("Firing DSP IFrame URLs");

        if (this.dspUrlSettingsIframe && this.dspUrlSettingsIframe.length > 0) {
          var _currentTime = Date.now();

          this.dspUrlSettingsIframe.forEach(function (urlSettings) {
            var dspUrl = _this2.compileUrl(_objectSpread2(_objectSpread2({}, _this2.mappings), {}, {
              userId: userId,
              random: _currentTime
            }), urlSettings.dspUrlTemplate);

            _this2.addIFrame(dspUrl);
          });
        }

        this.storage.setLotameSynchTime(Date.now()); // emit on syncPixel

        if (this.analytics.methodToCallbackMapping.syncPixel) {
          this.analytics.emit("syncPixel", {
            destination: this.name
          });
        }
      }
    }, {
      key: "compileUrl",
      value: function compileUrl(map, url) {
        Object.keys(map).forEach(function (key) {
          if (map.hasOwnProperty(key)) {
            var replaceKey = "{{".concat(key, "}}");
            var regex = new RegExp(replaceKey, "gi");
            url = url.replace(regex, map[key]);
          }
        });
        return url;
      }
    }, {
      key: "identify",
      value: function identify(rudderElement) {
        logger.debug("in Lotame identify");
        var userId = rudderElement.message.userId;
        this.syncPixel(userId);
      }
    }, {
      key: "track",
      value: function track(rudderElement) {
        logger.debug("track not supported for lotame");
      }
    }, {
      key: "page",
      value: function page(rudderElement) {
        var _this3 = this;

        logger.debug("in Lotame page");
        logger.debug("Firing BCP Pixel URLs");

        if (this.bcpUrlSettingsPixel && this.bcpUrlSettingsPixel.length > 0) {
          var currentTime = Date.now();
          this.bcpUrlSettingsPixel.forEach(function (urlSettings) {
            var bcpUrl = _this3.compileUrl(_objectSpread2(_objectSpread2({}, _this3.mappings), {}, {
              random: currentTime
            }), urlSettings.bcpUrlTemplate);

            _this3.addPixel(bcpUrl, "1", "1");
          });
        }

        logger.debug("Firing BCP IFrame URLs");

        if (this.bcpUrlSettingsIframe && this.bcpUrlSettingsIframe.length > 0) {
          var _currentTime2 = Date.now();

          this.bcpUrlSettingsIframe.forEach(function (urlSettings) {
            var bcpUrl = _this3.compileUrl(_objectSpread2(_objectSpread2({}, _this3.mappings), {}, {
              random: _currentTime2
            }), urlSettings.bcpUrlTemplate);

            _this3.addIFrame(bcpUrl);
          });
        }

        if (rudderElement.message.userId && this.isPixelToBeSynched()) {
          this.syncPixel(rudderElement.message.userId);
        }
      }
    }, {
      key: "isPixelToBeSynched",
      value: function isPixelToBeSynched() {
        var lastSynchedTime = this.storage.getLotameSynchTime();
        var currentTime = Date.now();

        if (!lastSynchedTime) {
          return true;
        }

        var difference = Math.floor((currentTime - lastSynchedTime) / (1000 * 3600 * 24));
        return difference >= 7;
      }
    }, {
      key: "isLoaded",
      value: function isLoaded() {
        logger.debug("in Lotame isLoaded");
        return true;
      }
    }, {
      key: "isReady",
      value: function isReady() {
        return true;
      }
    }]);

    return Lotame;
  }();

  var Optimizely = /*#__PURE__*/function () {
    function Optimizely(config, analytics) {
      var _this = this;

      _classCallCheck(this, Optimizely);

      this.referrerOverride = function (referrer) {
        if (referrer) {
          window.optimizelyEffectiveReferrer = referrer;
          return referrer;
        }

        return undefined;
      };

      this.sendDataToRudder = function (campaignState) {
        logger.debug(campaignState);
        var experiment = campaignState.experiment;
        var variation = campaignState.variation;
        var context = {
          integrations: {
            All: true
          }
        };
        var audiences = campaignState.audiences; // Reformatting this data structure into hash map so concatenating variation ids and names is easier later

        var audiencesMap = {};
        audiences.forEach(function (audience) {
          audiencesMap[audience.id] = audience.name;
        });
        var audienceIds = Object.keys(audiencesMap).sort().join();
        var audienceNames = Object.values(audiencesMap).sort().join(", ");

        if (_this.sendExperimentTrack) {
          var props = {
            campaignName: campaignState.campaignName,
            campaignId: campaignState.id,
            experimentId: experiment.id,
            experimentName: experiment.name,
            variationName: variation.name,
            variationId: variation.id,
            audienceId: audienceIds,
            // eg. '7527562222,7527111138'
            audienceName: audienceNames,
            // eg. 'Peaky Blinders, Trust Tree'
            isInCampaignHoldback: campaignState.isInCampaignHoldback
          }; // If this was a redirect experiment and the effective referrer is different from document.referrer,
          // this value is made available. So if a customer came in via google.com/ad -> tb12.com -> redirect experiment -> Belichickgoat.com
          // `experiment.referrer` would be google.com/ad here NOT `tb12.com`.

          if (experiment.referrer) {
            props.referrer = experiment.referrer;
            context.page = {
              referrer: experiment.referrer
            };
          } // For Google's nonInteraction flag


          if (_this.sendExperimentTrackAsNonInteractive) props.nonInteraction = 1; // If customCampaignProperties is provided overide the props with it.
          // If valid customCampaignProperties present it will override existing props.
          // const data = window.optimizely && window.optimizely.get("data");

          var data = campaignState;

          if (data && _this.customCampaignProperties.length > 0) {
            for (var index = 0; index < _this.customCampaignProperties.length; index += 1) {
              var rudderProp = _this.customCampaignProperties[index].from;
              var optimizelyProp = _this.customCampaignProperties[index].to;

              if (typeof props[optimizelyProp] !== "undefined") {
                props[rudderProp] = props[optimizelyProp];
                delete props[optimizelyProp];
              }
            }
          } // Send to Rudder


          _this.analytics.track("Experiment Viewed", props, context);
        }

        if (_this.sendExperimentIdentify) {
          var traits = {};
          traits["Experiment: ".concat(experiment.name)] = variation.name; // Send to Rudder

          _this.analytics.identify(traits);
        }
      };

      this.analytics = analytics;
      this.sendExperimentTrack = config.sendExperimentTrack;
      this.sendExperimentIdentify = config.sendExperimentIdentify;
      this.sendExperimentTrackAsNonInteractive = config.sendExperimentTrackAsNonInteractive;
      this.revenueOnlyOnOrderCompleted = config.revenueOnlyOnOrderCompleted;
      this.trackCategorizedPages = config.trackCategorizedPages;
      this.trackNamedPages = config.trackNamedPages;
      this.customCampaignProperties = config.customCampaignProperties ? config.customCampaignProperties : [];
      this.customExperimentProperties = config.customExperimentProperties ? config.customExperimentProperties : [];
      this.name = "OPTIMIZELY";
    }

    _createClass(Optimizely, [{
      key: "init",
      value: function init() {
        logger.debug("=== in optimizely init ===");
        this.initOptimizelyIntegration(this.referrerOverride, this.sendDataToRudder);
      }
    }, {
      key: "initOptimizelyIntegration",
      value: function initOptimizelyIntegration(referrerOverride, sendCampaignData) {
        var newActiveCampaign = function newActiveCampaign(id, referrer) {
          var state = window.optimizely.get && window.optimizely.get("state");

          if (state) {
            var activeCampaigns = state.getCampaignStates({
              isActive: true
            });
            var campaignState = activeCampaigns[id];
            if (referrer) campaignState.experiment.referrer = referrer;
            sendCampaignData(campaignState);
          }
        };

        var checkReferrer = function checkReferrer() {
          var state = window.optimizely.get && window.optimizely.get("state");

          if (state) {
            var referrer = state.getRedirectInfo() && state.getRedirectInfo().referrer;

            if (referrer) {
              referrerOverride(referrer);
              return referrer;
            }
          }

          return undefined;
        };

        var registerFutureActiveCampaigns = function registerFutureActiveCampaigns() {
          window.optimizely = window.optimizely || [];
          window.optimizely.push({
            type: "addListener",
            filter: {
              type: "lifecycle",
              name: "campaignDecided"
            },
            handler: function handler(event) {
              var id = event.data.campaign.id;
              newActiveCampaign(id);
            }
          });
        };

        var registerCurrentlyActiveCampaigns = function registerCurrentlyActiveCampaigns() {
          window.optimizely = window.optimizely || [];
          var state = window.optimizely.get && window.optimizely.get("state");

          if (state) {
            var referrer = checkReferrer();
            var activeCampaigns = state.getCampaignStates({
              isActive: true
            });
            Object.keys(activeCampaigns).forEach(function (id) {
              if (referrer) {
                newActiveCampaign(id, referrer);
              } else {
                newActiveCampaign(id);
              }
            });
          } else {
            window.optimizely.push({
              type: "addListener",
              filter: {
                type: "lifecycle",
                name: "initialized"
              },
              handler: function handler() {
                checkReferrer();
              }
            });
          }
        };

        registerCurrentlyActiveCampaigns();
        registerFutureActiveCampaigns();
      }
    }, {
      key: "track",
      value: function track(rudderElement) {
        logger.debug("in Optimizely web track");
        var eventProperties = rudderElement.message.properties;
        var event = rudderElement.message.event;

        if (eventProperties.revenue && this.revenueOnlyOnOrderCompleted) {
          if (event === "Order Completed") {
            eventProperties.revenue = Math.round(eventProperties.revenue * 100);
          } else if (event !== "Order Completed") {
            delete eventProperties.revenue;
          }
        }

        var eventName = event.replace(/:/g, "_"); // can't have colons so replacing with underscores

        var payload = {
          type: "event",
          eventName: eventName,
          tags: eventProperties
        };
        window.optimizely.push(payload);
      }
    }, {
      key: "page",
      value: function page(rudderElement) {
        logger.debug("in Optimizely web page");
        var category = rudderElement.message.properties.category;
        var name = rudderElement.message.name;
        /* const contextOptimizely = {
          integrations: { All: false, Optimizely: true },
        }; */
        // categorized pages

        if (category && this.trackCategorizedPages) {
          // this.analytics.track(`Viewed ${category} page`, {}, contextOptimizely);
          rudderElement.message.event = "Viewed ".concat(category, " page");
          rudderElement.message.type = "track";
          this.track(rudderElement);
        } // named pages


        if (name && this.trackNamedPages) {
          // this.analytics.track(`Viewed ${name} page`, {}, contextOptimizely);
          rudderElement.message.event = "Viewed ".concat(name, " page");
          rudderElement.message.type = "track";
          this.track(rudderElement);
        }
      }
    }, {
      key: "isLoaded",
      value: function isLoaded() {
        return !!(window.optimizely && window.optimizely.push !== Array.prototype.push);
      }
    }, {
      key: "isReady",
      value: function isReady() {
        return !!(window.optimizely && window.optimizely.push !== Array.prototype.push);
      }
    }]);

    return Optimizely;
  }();

  var Bugsnag = /*#__PURE__*/function () {
    function Bugsnag(config) {
      _classCallCheck(this, Bugsnag);

      this.releaseStage = config.releaseStage;
      this.apiKey = config.apiKey;
      this.name = "BUGSNAG";
      this.setIntervalHandler = undefined;
    }

    _createClass(Bugsnag, [{
      key: "init",
      value: function init() {
        logger.debug("===in init Bugsnag===");
        ScriptLoader("bugsnag-id", "https://d2wy8f7a9ursnm.cloudfront.net/v6/bugsnag.min.js");
        this.setIntervalHandler = setInterval(this.initBugsnagClient.bind(this), 1000);
      }
    }, {
      key: "initBugsnagClient",
      value: function initBugsnagClient() {
        if (window.bugsnag !== undefined) {
          window.bugsnagClient = window.bugsnag(this.apiKey);
          window.bugsnagClient.releaseStage = this.releaseStage;
          clearInterval(this.setIntervalHandler);
        }
      }
    }, {
      key: "isLoaded",
      value: function isLoaded() {
        logger.debug("in bugsnag isLoaded");
        return !!window.bugsnagClient;
      }
    }, {
      key: "isReady",
      value: function isReady() {
        logger.debug("in bugsnag isReady");
        return !!window.bugsnagClient;
      }
    }, {
      key: "identify",
      value: function identify(rudderElement) {
        var traits = rudderElement.message.context.traits;
        var traitsFinal = {
          id: rudderElement.message.userId || rudderElement.message.anonymousId,
          name: traits.name,
          email: traits.email
        };
        window.bugsnagClient.user = traitsFinal;
        window.bugsnagClient.notify(new Error("error in identify"));
      }
    }]);

    return Bugsnag;
  }();

  var preserveCamelCase = function preserveCamelCase(string) {
    var isLastCharLower = false;
    var isLastCharUpper = false;
    var isLastLastCharUpper = false;

    for (var i = 0; i < string.length; i++) {
      var character = string[i];

      if (isLastCharLower && /(?:[A-Z\xC0-\xD6\xD8-\xDE\u0100\u0102\u0104\u0106\u0108\u010A\u010C\u010E\u0110\u0112\u0114\u0116\u0118\u011A\u011C\u011E\u0120\u0122\u0124\u0126\u0128\u012A\u012C\u012E\u0130\u0132\u0134\u0136\u0139\u013B\u013D\u013F\u0141\u0143\u0145\u0147\u014A\u014C\u014E\u0150\u0152\u0154\u0156\u0158\u015A\u015C\u015E\u0160\u0162\u0164\u0166\u0168\u016A\u016C\u016E\u0170\u0172\u0174\u0176\u0178\u0179\u017B\u017D\u0181\u0182\u0184\u0186\u0187\u0189-\u018B\u018E-\u0191\u0193\u0194\u0196-\u0198\u019C\u019D\u019F\u01A0\u01A2\u01A4\u01A6\u01A7\u01A9\u01AC\u01AE\u01AF\u01B1-\u01B3\u01B5\u01B7\u01B8\u01BC\u01C4\u01C7\u01CA\u01CD\u01CF\u01D1\u01D3\u01D5\u01D7\u01D9\u01DB\u01DE\u01E0\u01E2\u01E4\u01E6\u01E8\u01EA\u01EC\u01EE\u01F1\u01F4\u01F6-\u01F8\u01FA\u01FC\u01FE\u0200\u0202\u0204\u0206\u0208\u020A\u020C\u020E\u0210\u0212\u0214\u0216\u0218\u021A\u021C\u021E\u0220\u0222\u0224\u0226\u0228\u022A\u022C\u022E\u0230\u0232\u023A\u023B\u023D\u023E\u0241\u0243-\u0246\u0248\u024A\u024C\u024E\u0370\u0372\u0376\u037F\u0386\u0388-\u038A\u038C\u038E\u038F\u0391-\u03A1\u03A3-\u03AB\u03CF\u03D2-\u03D4\u03D8\u03DA\u03DC\u03DE\u03E0\u03E2\u03E4\u03E6\u03E8\u03EA\u03EC\u03EE\u03F4\u03F7\u03F9\u03FA\u03FD-\u042F\u0460\u0462\u0464\u0466\u0468\u046A\u046C\u046E\u0470\u0472\u0474\u0476\u0478\u047A\u047C\u047E\u0480\u048A\u048C\u048E\u0490\u0492\u0494\u0496\u0498\u049A\u049C\u049E\u04A0\u04A2\u04A4\u04A6\u04A8\u04AA\u04AC\u04AE\u04B0\u04B2\u04B4\u04B6\u04B8\u04BA\u04BC\u04BE\u04C0\u04C1\u04C3\u04C5\u04C7\u04C9\u04CB\u04CD\u04D0\u04D2\u04D4\u04D6\u04D8\u04DA\u04DC\u04DE\u04E0\u04E2\u04E4\u04E6\u04E8\u04EA\u04EC\u04EE\u04F0\u04F2\u04F4\u04F6\u04F8\u04FA\u04FC\u04FE\u0500\u0502\u0504\u0506\u0508\u050A\u050C\u050E\u0510\u0512\u0514\u0516\u0518\u051A\u051C\u051E\u0520\u0522\u0524\u0526\u0528\u052A\u052C\u052E\u0531-\u0556\u10A0-\u10C5\u10C7\u10CD\u13A0-\u13F5\u1C90-\u1CBA\u1CBD-\u1CBF\u1E00\u1E02\u1E04\u1E06\u1E08\u1E0A\u1E0C\u1E0E\u1E10\u1E12\u1E14\u1E16\u1E18\u1E1A\u1E1C\u1E1E\u1E20\u1E22\u1E24\u1E26\u1E28\u1E2A\u1E2C\u1E2E\u1E30\u1E32\u1E34\u1E36\u1E38\u1E3A\u1E3C\u1E3E\u1E40\u1E42\u1E44\u1E46\u1E48\u1E4A\u1E4C\u1E4E\u1E50\u1E52\u1E54\u1E56\u1E58\u1E5A\u1E5C\u1E5E\u1E60\u1E62\u1E64\u1E66\u1E68\u1E6A\u1E6C\u1E6E\u1E70\u1E72\u1E74\u1E76\u1E78\u1E7A\u1E7C\u1E7E\u1E80\u1E82\u1E84\u1E86\u1E88\u1E8A\u1E8C\u1E8E\u1E90\u1E92\u1E94\u1E9E\u1EA0\u1EA2\u1EA4\u1EA6\u1EA8\u1EAA\u1EAC\u1EAE\u1EB0\u1EB2\u1EB4\u1EB6\u1EB8\u1EBA\u1EBC\u1EBE\u1EC0\u1EC2\u1EC4\u1EC6\u1EC8\u1ECA\u1ECC\u1ECE\u1ED0\u1ED2\u1ED4\u1ED6\u1ED8\u1EDA\u1EDC\u1EDE\u1EE0\u1EE2\u1EE4\u1EE6\u1EE8\u1EEA\u1EEC\u1EEE\u1EF0\u1EF2\u1EF4\u1EF6\u1EF8\u1EFA\u1EFC\u1EFE\u1F08-\u1F0F\u1F18-\u1F1D\u1F28-\u1F2F\u1F38-\u1F3F\u1F48-\u1F4D\u1F59\u1F5B\u1F5D\u1F5F\u1F68-\u1F6F\u1FB8-\u1FBB\u1FC8-\u1FCB\u1FD8-\u1FDB\u1FE8-\u1FEC\u1FF8-\u1FFB\u2102\u2107\u210B-\u210D\u2110-\u2112\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u2130-\u2133\u213E\u213F\u2145\u2183\u2C00-\u2C2E\u2C60\u2C62-\u2C64\u2C67\u2C69\u2C6B\u2C6D-\u2C70\u2C72\u2C75\u2C7E-\u2C80\u2C82\u2C84\u2C86\u2C88\u2C8A\u2C8C\u2C8E\u2C90\u2C92\u2C94\u2C96\u2C98\u2C9A\u2C9C\u2C9E\u2CA0\u2CA2\u2CA4\u2CA6\u2CA8\u2CAA\u2CAC\u2CAE\u2CB0\u2CB2\u2CB4\u2CB6\u2CB8\u2CBA\u2CBC\u2CBE\u2CC0\u2CC2\u2CC4\u2CC6\u2CC8\u2CCA\u2CCC\u2CCE\u2CD0\u2CD2\u2CD4\u2CD6\u2CD8\u2CDA\u2CDC\u2CDE\u2CE0\u2CE2\u2CEB\u2CED\u2CF2\uA640\uA642\uA644\uA646\uA648\uA64A\uA64C\uA64E\uA650\uA652\uA654\uA656\uA658\uA65A\uA65C\uA65E\uA660\uA662\uA664\uA666\uA668\uA66A\uA66C\uA680\uA682\uA684\uA686\uA688\uA68A\uA68C\uA68E\uA690\uA692\uA694\uA696\uA698\uA69A\uA722\uA724\uA726\uA728\uA72A\uA72C\uA72E\uA732\uA734\uA736\uA738\uA73A\uA73C\uA73E\uA740\uA742\uA744\uA746\uA748\uA74A\uA74C\uA74E\uA750\uA752\uA754\uA756\uA758\uA75A\uA75C\uA75E\uA760\uA762\uA764\uA766\uA768\uA76A\uA76C\uA76E\uA779\uA77B\uA77D\uA77E\uA780\uA782\uA784\uA786\uA78B\uA78D\uA790\uA792\uA796\uA798\uA79A\uA79C\uA79E\uA7A0\uA7A2\uA7A4\uA7A6\uA7A8\uA7AA-\uA7AE\uA7B0-\uA7B4\uA7B6\uA7B8\uA7BA\uA7BC\uA7BE\uA7C2\uA7C4-\uA7C7\uA7C9\uA7F5\uFF21-\uFF3A]|\uD801[\uDC00-\uDC27\uDCB0-\uDCD3]|\uD803[\uDC80-\uDCB2]|\uD806[\uDCA0-\uDCBF]|\uD81B[\uDE40-\uDE5F]|\uD835[\uDC00-\uDC19\uDC34-\uDC4D\uDC68-\uDC81\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB5\uDCD0-\uDCE9\uDD04\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD38\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD6C-\uDD85\uDDA0-\uDDB9\uDDD4-\uDDED\uDE08-\uDE21\uDE3C-\uDE55\uDE70-\uDE89\uDEA8-\uDEC0\uDEE2-\uDEFA\uDF1C-\uDF34\uDF56-\uDF6E\uDF90-\uDFA8\uDFCA]|\uD83A[\uDD00-\uDD21])/.test(character)) {
        string = string.slice(0, i) + '-' + string.slice(i);
        isLastCharLower = false;
        isLastLastCharUpper = isLastCharUpper;
        isLastCharUpper = true;
        i++;
      } else if (isLastCharUpper && isLastLastCharUpper && /(?:[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5E\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C3\uA7C8\uA7CA\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A]|\uD801[\uDC28-\uDC4F\uDCD8-\uDCFB]|\uD803[\uDCC0-\uDCF2]|\uD806[\uDCC0-\uDCDF]|\uD81B[\uDE60-\uDE7F]|\uD835[\uDC1A-\uDC33\uDC4E-\uDC54\uDC56-\uDC67\uDC82-\uDC9B\uDCB6-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDCCF\uDCEA-\uDD03\uDD1E-\uDD37\uDD52-\uDD6B\uDD86-\uDD9F\uDDBA-\uDDD3\uDDEE-\uDE07\uDE22-\uDE3B\uDE56-\uDE6F\uDE8A-\uDEA5\uDEC2-\uDEDA\uDEDC-\uDEE1\uDEFC-\uDF14\uDF16-\uDF1B\uDF36-\uDF4E\uDF50-\uDF55\uDF70-\uDF88\uDF8A-\uDF8F\uDFAA-\uDFC2\uDFC4-\uDFC9\uDFCB]|\uD83A[\uDD22-\uDD43])/.test(character)) {
        string = string.slice(0, i - 1) + '-' + string.slice(i - 1);
        isLastLastCharUpper = isLastCharUpper;
        isLastCharUpper = false;
        isLastCharLower = true;
      } else {
        isLastCharLower = character.toLocaleLowerCase() === character && character.toLocaleUpperCase() !== character;
        isLastLastCharUpper = isLastCharUpper;
        isLastCharUpper = character.toLocaleUpperCase() === character && character.toLocaleLowerCase() !== character;
      }
    }

    return string;
  };

  var camelCase = function camelCase(input, options) {
    if (!(typeof input === 'string' || Array.isArray(input))) {
      throw new TypeError('Expected the input to be `string | string[]`');
    }

    options = _objectSpread2(_objectSpread2({}, {
      pascalCase: false
    }), options);

    var postProcess = function postProcess(x) {
      return options.pascalCase ? x.charAt(0).toLocaleUpperCase() + x.slice(1) : x;
    };

    if (Array.isArray(input)) {
      input = input.map(function (x) {
        return x.trim();
      }).filter(function (x) {
        return x.length;
      }).join('-');
    } else {
      input = input.trim();
    }

    if (input.length === 0) {
      return '';
    }

    if (input.length === 1) {
      return options.pascalCase ? input.toLocaleUpperCase() : input.toLocaleLowerCase();
    }

    var hasUpperCase = input !== input.toLocaleLowerCase();

    if (hasUpperCase) {
      input = preserveCamelCase(input);
    }

    input = input.replace(/^[_.\- ]+/, '').toLocaleLowerCase().replace(/[ \x2D\._]+((?:[0-9A-Z_a-z\xAA\xB2\xB3\xB5\xB9\xBA\xBC-\xBE\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0345\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05B0-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05EF-\u05F2\u0610-\u061A\u0620-\u0657\u0659-\u0669\u066E-\u06D3\u06D5-\u06DC\u06E1-\u06E8\u06ED-\u06FC\u06FF\u0710-\u073F\u074D-\u07B1\u07C0-\u07EA\u07F4\u07F5\u07FA\u0800-\u0817\u081A-\u082C\u0840-\u0858\u0860-\u086A\u08A0-\u08B4\u08B6-\u08C7\u08D4-\u08DF\u08E3-\u08E9\u08F0-\u093B\u093D-\u094C\u094E-\u0950\u0955-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD-\u09C4\u09C7\u09C8\u09CB\u09CC\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u09F4-\u09F9\u09FC\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3E-\u0A42\u0A47\u0A48\u0A4B\u0A4C\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD-\u0AC5\u0AC7-\u0AC9\u0ACB\u0ACC\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0AF9-\u0AFC\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D-\u0B44\u0B47\u0B48\u0B4B\u0B4C\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71-\u0B77\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCC\u0BD0\u0BD7\u0BE6-\u0BF2\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4C\u0C55\u0C56\u0C58-\u0C5A\u0C60-\u0C63\u0C66-\u0C6F\u0C78-\u0C7E\u0C80-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCC\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D00-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D-\u0D44\u0D46-\u0D48\u0D4A-\u0D4C\u0D4E\u0D54-\u0D63\u0D66-\u0D78\u0D7A-\u0D7F\u0D81-\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E46\u0E4D\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F20-\u0F33\u0F40-\u0F47\u0F49-\u0F6C\u0F71-\u0F81\u0F88-\u0F97\u0F99-\u0FBC\u1000-\u1036\u1038\u103B-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1369-\u137C\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1713\u1720-\u1733\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17B3\u17B6-\u17C8\u17D7\u17DC\u17E0-\u17E9\u17F0-\u17F9\u1810-\u1819\u1820-\u1878\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u1938\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19DA\u1A00-\u1A1B\u1A20-\u1A5E\u1A61-\u1A74\u1A80-\u1A89\u1A90-\u1A99\u1AA7\u1ABF\u1AC0\u1B00-\u1B33\u1B35-\u1B43\u1B45-\u1B4B\u1B50-\u1B59\u1B80-\u1BA9\u1BAC-\u1BE5\u1BE7-\u1BF1\u1C00-\u1C36\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1DE7-\u1DF4\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2070\u2071\u2074-\u2079\u207F-\u2089\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2189\u2150-\u2182\u2460-\u249B\u24B6-\u24FF\u2776-\u2793\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2CFD\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u2E2F\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u3192-\u3195\u31A0-\u31BF\u31F0-\u31FF\u3220-\u3229\u3248-\u324F\u3251-\u325F\u3280-\u3289\u32B1-\u32BF\u3400-\u4DBF\u4E00-\u9FFC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66E\uA674-\uA67B\uA67F-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7BF\uA7C2-\uA7CA\uA7F5-\uA805\uA807-\uA827\uA830-\uA835\uA840-\uA873\uA880-\uA8C3\uA8C5\uA8D0-\uA8D9\uA8F2-\uA8F7\uA8FB\uA8FD-\uA92A\uA930-\uA952\uA960-\uA97C\uA980-\uA9B2\uA9B4-\uA9BF\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAABE\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF5\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABEA\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD07-\uDD33\uDD40-\uDD78\uDD8A\uDD8B\uDE80-\uDE9C\uDEA0-\uDED0\uDEE1-\uDEFB\uDF00-\uDF23\uDF2D-\uDF4A\uDF50-\uDF7A\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC58-\uDC76\uDC79-\uDC9E\uDCA7-\uDCAF\uDCE0-\uDCF2\uDCF4\uDCF5\uDCFB-\uDD1B\uDD20-\uDD39\uDD80-\uDDB7\uDDBC-\uDDCF\uDDD2-\uDE03\uDE05\uDE06\uDE0C-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE40-\uDE48\uDE60-\uDE7E\uDE80-\uDE9F\uDEC0-\uDEC7\uDEC9-\uDEE4\uDEEB-\uDEEF\uDF00-\uDF35\uDF40-\uDF55\uDF58-\uDF72\uDF78-\uDF91\uDFA9-\uDFAF]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDCFA-\uDD27\uDD30-\uDD39\uDE60-\uDE7E\uDE80-\uDEA9\uDEAB\uDEAC\uDEB0\uDEB1\uDF00-\uDF27\uDF30-\uDF45\uDF51-\uDF54\uDFB0-\uDFCB\uDFE0-\uDFF6]|\uD804[\uDC00-\uDC45\uDC52-\uDC6F\uDC82-\uDCB8\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD00-\uDD32\uDD36-\uDD3F\uDD44-\uDD47\uDD50-\uDD72\uDD76\uDD80-\uDDBF\uDDC1-\uDDC4\uDDCE-\uDDDA\uDDDC\uDDE1-\uDDF4\uDE00-\uDE11\uDE13-\uDE34\uDE37\uDE3E\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEE8\uDEF0-\uDEF9\uDF00-\uDF03\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D-\uDF44\uDF47\uDF48\uDF4B\uDF4C\uDF50\uDF57\uDF5D-\uDF63]|\uD805[\uDC00-\uDC41\uDC43-\uDC45\uDC47-\uDC4A\uDC50-\uDC59\uDC5F-\uDC61\uDC80-\uDCC1\uDCC4\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDB5\uDDB8-\uDDBE\uDDD8-\uDDDD\uDE00-\uDE3E\uDE40\uDE44\uDE50-\uDE59\uDE80-\uDEB5\uDEB8\uDEC0-\uDEC9\uDF00-\uDF1A\uDF1D-\uDF2A\uDF30-\uDF3B]|\uD806[\uDC00-\uDC38\uDCA0-\uDCF2\uDCFF-\uDD06\uDD09\uDD0C-\uDD13\uDD15\uDD16\uDD18-\uDD35\uDD37\uDD38\uDD3B\uDD3C\uDD3F-\uDD42\uDD50-\uDD59\uDDA0-\uDDA7\uDDAA-\uDDD7\uDDDA-\uDDDF\uDDE1\uDDE3\uDDE4\uDE00-\uDE32\uDE35-\uDE3E\uDE50-\uDE97\uDE9D\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC36\uDC38-\uDC3E\uDC40\uDC50-\uDC6C\uDC72-\uDC8F\uDC92-\uDCA7\uDCA9-\uDCB6\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD36\uDD3A\uDD3C\uDD3D\uDD3F-\uDD41\uDD43\uDD46\uDD47\uDD50-\uDD59\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD8E\uDD90\uDD91\uDD93-\uDD96\uDD98\uDDA0-\uDDA9\uDEE0-\uDEF6\uDFB0\uDFC0-\uDFD4]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD822\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF50-\uDF59\uDF5B-\uDF61\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDE40-\uDE96\uDF00-\uDF4A\uDF4F-\uDF87\uDF8F-\uDF9F\uDFE0\uDFE1\uDFE3\uDFF0\uDFF1]|\uD821[\uDC00-\uDFF7]|\uD823[\uDC00-\uDCD5\uDD00-\uDD08]|\uD82C[\uDC00-\uDD1E\uDD50-\uDD52\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99\uDC9E]|\uD834[\uDEE0-\uDEF3\uDF60-\uDF78]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A\uDD00-\uDD2C\uDD37-\uDD3D\uDD40-\uDD49\uDD4E\uDEC0-\uDEEB\uDEF0-\uDEF9]|\uD83A[\uDC00-\uDCC4\uDCC7-\uDCCF\uDD00-\uDD43\uDD47\uDD4B\uDD50-\uDD59]|\uD83B[\uDC71-\uDCAB\uDCAD-\uDCAF\uDCB1-\uDCB4\uDD01-\uDD2D\uDD2F-\uDD3D\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD83C[\uDD00-\uDD0C\uDD30-\uDD49\uDD50-\uDD69\uDD70-\uDD89]|\uD83E[\uDFF0-\uDFF9]|\uD869[\uDC00-\uDEDD\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A])|$)/g, function (_, p1) {
      return p1.toLocaleUpperCase();
    }).replace(/[0-9]+((?:[0-9A-Z_a-z\xAA\xB2\xB3\xB5\xB9\xBA\xBC-\xBE\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0345\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05B0-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05EF-\u05F2\u0610-\u061A\u0620-\u0657\u0659-\u0669\u066E-\u06D3\u06D5-\u06DC\u06E1-\u06E8\u06ED-\u06FC\u06FF\u0710-\u073F\u074D-\u07B1\u07C0-\u07EA\u07F4\u07F5\u07FA\u0800-\u0817\u081A-\u082C\u0840-\u0858\u0860-\u086A\u08A0-\u08B4\u08B6-\u08C7\u08D4-\u08DF\u08E3-\u08E9\u08F0-\u093B\u093D-\u094C\u094E-\u0950\u0955-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD-\u09C4\u09C7\u09C8\u09CB\u09CC\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u09F4-\u09F9\u09FC\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3E-\u0A42\u0A47\u0A48\u0A4B\u0A4C\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD-\u0AC5\u0AC7-\u0AC9\u0ACB\u0ACC\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0AF9-\u0AFC\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D-\u0B44\u0B47\u0B48\u0B4B\u0B4C\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71-\u0B77\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCC\u0BD0\u0BD7\u0BE6-\u0BF2\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4C\u0C55\u0C56\u0C58-\u0C5A\u0C60-\u0C63\u0C66-\u0C6F\u0C78-\u0C7E\u0C80-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCC\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D00-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D-\u0D44\u0D46-\u0D48\u0D4A-\u0D4C\u0D4E\u0D54-\u0D63\u0D66-\u0D78\u0D7A-\u0D7F\u0D81-\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E46\u0E4D\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F20-\u0F33\u0F40-\u0F47\u0F49-\u0F6C\u0F71-\u0F81\u0F88-\u0F97\u0F99-\u0FBC\u1000-\u1036\u1038\u103B-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1369-\u137C\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1713\u1720-\u1733\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17B3\u17B6-\u17C8\u17D7\u17DC\u17E0-\u17E9\u17F0-\u17F9\u1810-\u1819\u1820-\u1878\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u1938\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19DA\u1A00-\u1A1B\u1A20-\u1A5E\u1A61-\u1A74\u1A80-\u1A89\u1A90-\u1A99\u1AA7\u1ABF\u1AC0\u1B00-\u1B33\u1B35-\u1B43\u1B45-\u1B4B\u1B50-\u1B59\u1B80-\u1BA9\u1BAC-\u1BE5\u1BE7-\u1BF1\u1C00-\u1C36\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1DE7-\u1DF4\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2070\u2071\u2074-\u2079\u207F-\u2089\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2189\u2150-\u2182\u2460-\u249B\u24B6-\u24FF\u2776-\u2793\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2CFD\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u2E2F\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u3192-\u3195\u31A0-\u31BF\u31F0-\u31FF\u3220-\u3229\u3248-\u324F\u3251-\u325F\u3280-\u3289\u32B1-\u32BF\u3400-\u4DBF\u4E00-\u9FFC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66E\uA674-\uA67B\uA67F-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7BF\uA7C2-\uA7CA\uA7F5-\uA805\uA807-\uA827\uA830-\uA835\uA840-\uA873\uA880-\uA8C3\uA8C5\uA8D0-\uA8D9\uA8F2-\uA8F7\uA8FB\uA8FD-\uA92A\uA930-\uA952\uA960-\uA97C\uA980-\uA9B2\uA9B4-\uA9BF\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAABE\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF5\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABEA\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD07-\uDD33\uDD40-\uDD78\uDD8A\uDD8B\uDE80-\uDE9C\uDEA0-\uDED0\uDEE1-\uDEFB\uDF00-\uDF23\uDF2D-\uDF4A\uDF50-\uDF7A\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC58-\uDC76\uDC79-\uDC9E\uDCA7-\uDCAF\uDCE0-\uDCF2\uDCF4\uDCF5\uDCFB-\uDD1B\uDD20-\uDD39\uDD80-\uDDB7\uDDBC-\uDDCF\uDDD2-\uDE03\uDE05\uDE06\uDE0C-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE40-\uDE48\uDE60-\uDE7E\uDE80-\uDE9F\uDEC0-\uDEC7\uDEC9-\uDEE4\uDEEB-\uDEEF\uDF00-\uDF35\uDF40-\uDF55\uDF58-\uDF72\uDF78-\uDF91\uDFA9-\uDFAF]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDCFA-\uDD27\uDD30-\uDD39\uDE60-\uDE7E\uDE80-\uDEA9\uDEAB\uDEAC\uDEB0\uDEB1\uDF00-\uDF27\uDF30-\uDF45\uDF51-\uDF54\uDFB0-\uDFCB\uDFE0-\uDFF6]|\uD804[\uDC00-\uDC45\uDC52-\uDC6F\uDC82-\uDCB8\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD00-\uDD32\uDD36-\uDD3F\uDD44-\uDD47\uDD50-\uDD72\uDD76\uDD80-\uDDBF\uDDC1-\uDDC4\uDDCE-\uDDDA\uDDDC\uDDE1-\uDDF4\uDE00-\uDE11\uDE13-\uDE34\uDE37\uDE3E\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEE8\uDEF0-\uDEF9\uDF00-\uDF03\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D-\uDF44\uDF47\uDF48\uDF4B\uDF4C\uDF50\uDF57\uDF5D-\uDF63]|\uD805[\uDC00-\uDC41\uDC43-\uDC45\uDC47-\uDC4A\uDC50-\uDC59\uDC5F-\uDC61\uDC80-\uDCC1\uDCC4\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDB5\uDDB8-\uDDBE\uDDD8-\uDDDD\uDE00-\uDE3E\uDE40\uDE44\uDE50-\uDE59\uDE80-\uDEB5\uDEB8\uDEC0-\uDEC9\uDF00-\uDF1A\uDF1D-\uDF2A\uDF30-\uDF3B]|\uD806[\uDC00-\uDC38\uDCA0-\uDCF2\uDCFF-\uDD06\uDD09\uDD0C-\uDD13\uDD15\uDD16\uDD18-\uDD35\uDD37\uDD38\uDD3B\uDD3C\uDD3F-\uDD42\uDD50-\uDD59\uDDA0-\uDDA7\uDDAA-\uDDD7\uDDDA-\uDDDF\uDDE1\uDDE3\uDDE4\uDE00-\uDE32\uDE35-\uDE3E\uDE50-\uDE97\uDE9D\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC36\uDC38-\uDC3E\uDC40\uDC50-\uDC6C\uDC72-\uDC8F\uDC92-\uDCA7\uDCA9-\uDCB6\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD36\uDD3A\uDD3C\uDD3D\uDD3F-\uDD41\uDD43\uDD46\uDD47\uDD50-\uDD59\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD8E\uDD90\uDD91\uDD93-\uDD96\uDD98\uDDA0-\uDDA9\uDEE0-\uDEF6\uDFB0\uDFC0-\uDFD4]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD822\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF50-\uDF59\uDF5B-\uDF61\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDE40-\uDE96\uDF00-\uDF4A\uDF4F-\uDF87\uDF8F-\uDF9F\uDFE0\uDFE1\uDFE3\uDFF0\uDFF1]|\uD821[\uDC00-\uDFF7]|\uD823[\uDC00-\uDCD5\uDD00-\uDD08]|\uD82C[\uDC00-\uDD1E\uDD50-\uDD52\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99\uDC9E]|\uD834[\uDEE0-\uDEF3\uDF60-\uDF78]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A\uDD00-\uDD2C\uDD37-\uDD3D\uDD40-\uDD49\uDD4E\uDEC0-\uDEEB\uDEF0-\uDEF9]|\uD83A[\uDC00-\uDCC4\uDCC7-\uDCCF\uDD00-\uDD43\uDD47\uDD4B\uDD50-\uDD59]|\uD83B[\uDC71-\uDCAB\uDCAD-\uDCAF\uDCB1-\uDCB4\uDD01-\uDD2D\uDD2F-\uDD3D\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD83C[\uDD00-\uDD0C\uDD30-\uDD49\uDD50-\uDD69\uDD70-\uDD89]|\uD83E[\uDFF0-\uDFF9]|\uD869[\uDC00-\uDEDD\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A])|$)/g, function (m) {
      return m.toLocaleUpperCase();
    });
    return postProcess(input);
  };

  var camelcase = camelCase; // TODO: Remove this for the next major release

  var default_1 = camelCase;
  camelcase["default"] = default_1;

  var Fullstory = /*#__PURE__*/function () {
    function Fullstory(config) {
      _classCallCheck(this, Fullstory);

      this.fs_org = config.fs_org;
      this.fs_debug_mode = config.fs_debug_mode;
      this.name = "FULLSTORY";
    }

    _createClass(Fullstory, [{
      key: "init",
      value: function init() {
        logger.debug("===in init FULLSTORY===");
        window._fs_debug = this.fs_debug_mode;
        window._fs_host = "fullstory.com";
        window._fs_script = "edge.fullstory.com/s/fs.js";
        window._fs_org = this.fs_org;
        window._fs_namespace = "FS";

        (function (m, n, e, t, l, o, g, y) {
          if (e in m) {
            if (m.console && m.console.log) {
              m.console.log('FullStory namespace conflict. Please set window["_fs_namespace"].');
            }

            return;
          }

          g = m[e] = function (a, b, s) {
            g.q ? g.q.push([a, b, s]) : g._api(a, b, s);
          };

          g.q = [];
          o = n.createElement(t);
          o.async = 1;
          o.crossOrigin = "anonymous";
          o.src = "https://".concat(_fs_script);
          y = n.getElementsByTagName(t)[0];
          y.parentNode.insertBefore(o, y);

          g.identify = function (i, v, s) {
            g(l, {
              uid: i
            }, s);
            if (v) g(l, v, s);
          };

          g.setUserVars = function (v, s) {
            g(l, v, s);
          };

          g.event = function (i, v, s) {
            g("event", {
              n: i,
              p: v
            }, s);
          };

          g.shutdown = function () {
            g("rec", !1);
          };

          g.restart = function () {
            g("rec", !0);
          };

          g.log = function (a, b) {
            g("log", [a, b]);
          };

          g.consent = function (a) {
            g("consent", !arguments.length || a);
          };

          g.identifyAccount = function (i, v) {
            o = "account";
            v = v || {};
            v.acctId = i;
            g(o, v);
          };

          g.clearUserCookie = function () {};

          g._w = {};
          y = "XMLHttpRequest";
          g._w[y] = m[y];
          y = "fetch";
          g._w[y] = m[y];
          if (m[y]) m[y] = function () {
            return g._w[y].apply(this, arguments);
          };
        })(window, document, window._fs_namespace, "script", "user");
      }
    }, {
      key: "page",
      value: function page(rudderElement) {
        logger.debug("in FULLSORY page");
        var rudderMessage = rudderElement.message;
        var pageName = rudderMessage.name;

        var props = _objectSpread2({
          name: pageName
        }, rudderMessage.properties);

        window.FS.event("Viewed a Page", Fullstory.getFSProperties(props));
      }
    }, {
      key: "identify",
      value: function identify(rudderElement) {
        logger.debug("in FULLSORY identify");
        var userId = rudderElement.message.userId;
        var traits = rudderElement.message.context.traits;
        if (!userId) userId = rudderElement.message.anonymousId;
        if (Object.keys(traits).length === 0 && traits.constructor === Object) window.FS.identify(userId);else window.FS.identify(userId, Fullstory.getFSProperties(traits));
      }
    }, {
      key: "track",
      value: function track(rudderElement) {
        logger.debug("in FULLSTORY track");
        window.FS.event(rudderElement.message.event, Fullstory.getFSProperties(rudderElement.message.properties));
      }
    }, {
      key: "isLoaded",
      value: function isLoaded() {
        logger.debug("in FULLSTORY isLoaded");
        return !!window.FS;
      }
    }], [{
      key: "getFSProperties",
      value: function getFSProperties(properties) {
        var FS_properties = {};
        Object.keys(properties).map(function (key, index) {
          FS_properties[key === "displayName" || key === "email" ? key : Fullstory.camelCaseField(key)] = properties[key];
        });
        return FS_properties;
      }
    }, {
      key: "camelCaseField",
      value: function camelCaseField(fieldName) {
        // Do not camel case across type suffixes.
        var parts = fieldName.split("_");

        if (parts.length > 1) {
          var typeSuffix = parts.pop();

          switch (typeSuffix) {
            case "str":
            case "int":
            case "date":
            case "real":
            case "bool":
            case "strs":
            case "ints":
            case "dates":
            case "reals":
            case "bools":
              return "".concat(camelcase(parts.join("_")), "_").concat(typeSuffix);

          }
        } // No type suffix found. Camel case the whole field name.


        return camelcase(fieldName);
      }
    }]);

    return Fullstory;
  }();

  var TVSquared = /*#__PURE__*/function () {
    function TVSquared(config) {
      _classCallCheck(this, TVSquared);

      this.isLoaded = function () {
        logger.debug("in TVSqaured isLoaded");
        return !!(window._tvq && window._tvq.push !== Array.prototype.push);
      };

      this.isReady = function () {
        logger.debug("in TVSqaured isReady");
        return !!(window._tvq && window._tvq.push !== Array.prototype.push);
      };

      this.page = function () {
        window._tvq.push(["trackPageView"]);
      };

      this.formatRevenue = function (revenue) {
        var rev = revenue;
        rev = parseFloat(rev.toString().replace(/^[^\d.]*/, ""));
        return rev;
      };

      this.brandId = config.brandId;
      this.clientId = config.clientId;
      this.eventWhiteList = config.eventWhiteList || [];
      this.customMetrics = config.customMetrics || [];
      this.name = "TVSquared";
    }

    _createClass(TVSquared, [{
      key: "init",
      value: function init() {
        logger.debug("===in init TVSquared===");
        window._tvq = window._tvq || [];
        var url = document.location.protocol === "https:" ? "https://" : "http://";
        url += "collector-".concat(this.clientId, ".tvsquared.com/");

        window._tvq.push(["setSiteId", this.brandId]);

        window._tvq.push(["setTrackerUrl", "".concat(url, "tv2track.php")]);

        ScriptLoader("TVSquared-integration", "".concat(url, "tv2track.js"));
      }
    }, {
      key: "track",
      value: function track(rudderElement) {
        var _rudderElement$messag = rudderElement.message,
            event = _rudderElement$messag.event,
            userId = _rudderElement$messag.userId,
            anonymousId = _rudderElement$messag.anonymousId;
        var _rudderElement$messag2 = rudderElement.message.properties,
            revenue = _rudderElement$messag2.revenue,
            productType = _rudderElement$messag2.productType,
            category = _rudderElement$messag2.category,
            order_id = _rudderElement$messag2.order_id,
            promotion_id = _rudderElement$messag2.promotion_id;
        var i;
        var j;
        var whitelist = this.eventWhiteList.slice();
        whitelist = whitelist.filter(function (wl) {
          return wl.event !== "";
        });

        for (i = 0; i < whitelist.length; i += 1) {
          if (event.toUpperCase() === whitelist[i].event.toUpperCase()) {
            break;
          }

          if (i === whitelist.length - 1) {
            return;
          }
        }

        var session = {
          user: userId || anonymousId || ""
        };
        var action = {
          rev: revenue ? this.formatRevenue(revenue) : "",
          prod: category || productType || "",
          id: order_id || "",
          promo: promotion_id || ""
        };
        var customMetrics = this.customMetrics.slice();
        customMetrics = customMetrics.filter(function (cm) {
          return cm.propertyName !== "";
        });

        if (customMetrics.length) {
          for (j = 0; j < customMetrics.length; j += 1) {
            var key = customMetrics[j].propertyName;
            var value = rudderElement.message.properties[key];

            if (value) {
              action[key] = value;
            }
          }
        }

        window._tvq.push([function () {
          this.setCustomVariable(5, "session", JSON.stringify(session), "visit");
        }]);

        if (event.toUpperCase() !== "RESPONSE") {
          window._tvq.push([function () {
            this.setCustomVariable(5, event, JSON.stringify(action), "page");
          }]);

          window._tvq.push(["trackPageView"]);
        }
      }
    }]);

    return TVSquared;
  }();

  var requiredEventParameters = {
    PromotionId: "promotion_id",
    PromotionName: "promotion_name",
    Search: "search_term",
    ProductId: "item_id",
    ProductName: "item_name"
  }; // To Do : Future Scope :: We can remove this one and add everything in include list.
  // This will also simplify our existing code and complex logics related to that

  var includeParams = {
    CartShare: {
      defaults: {
        content_type: "Cart"
      },
      mappings: {
        share_via: "method",
        cart_id: "content_id"
      }
    },
    ProductShare: {
      defaults: {
        content_type: "Product"
      },
      mappings: {
        share_via: "method",
        product_id: "content_id"
      }
    },
    Search: {
      mappings: {
        query: "search_term"
      }
    },
    Promotion: {
      mappings: {
        position: "location_id"
      }
    }
  };
  var eventParametersConfigArray = {
    ListId: {
      src: "list_id",
      dest: "item_list_id",
      inItems: true
    },
    Category: {
      src: "category",
      dest: "item_list_name",
      inItems: true
    },
    Price: {
      src: "price",
      dest: "value"
    },
    Currency: {
      src: "currency",
      dest: "currency",
      inItems: true
    },
    Coupon: {
      src: "coupon",
      dest: "coupon",
      inItems: true
    },
    Affiliation: {
      src: "affiliation",
      dest: "affiliation",
      inItems: true
    },
    Shipping: {
      src: "shipping",
      dest: "shipping"
    },
    Tax: {
      src: "tax",
      dest: "tax"
    },
    Total: {
      src: "total",
      dest: "value"
    },
    CheckoutId: {
      src: "checkout_id",
      dest: "transaction_id"
    },
    ShippingMethod: {
      src: "shipping_method",
      dest: "shipping_tier"
    },
    PaymentMethod: {
      src: "payment_method",
      dest: "payment_type"
    }
  };
  var itemParametersConfigArray = [{
    src: "product_id",
    dest: "item_id"
  }, {
    src: "order_id",
    dest: "item_id"
  }, {
    src: "name",
    dest: "item_name"
  }, {
    src: "coupon",
    dest: "coupon"
  }, {
    src: "category",
    dest: "item_category"
  }, {
    src: "brand",
    dest: "item_brand"
  }, {
    src: "variant",
    dest: "item_variant"
  }, {
    src: "price",
    dest: "price"
  }, {
    src: "quantity",
    dest: "quantity"
  }, {
    src: "position",
    dest: "index"
  }];
  var eventNamesConfigArray = [// Browsing Section
  {
    src: ["products searched", "product searched"],
    dest: "search",
    requiredParams: requiredEventParameters.Search,
    onlyIncludeParams: includeParams.Search
  }, {
    src: ["product list viewed"],
    dest: "view_item_list",
    requiredParams: [requiredEventParameters.ProductId, requiredEventParameters.ProductName],
    hasItem: true,
    includeList: [eventParametersConfigArray.ListId, eventParametersConfigArray.Category]
  }, // Promotion Section
  {
    src: ["promotion viewed"],
    dest: "view_promotion",
    onlyIncludeParams: includeParams.Promotion
  }, {
    src: ["promotion clicked"],
    dest: "select_promotion",
    onlyIncludeParams: includeParams.Promotion
  }, // Ordering Section
  {
    src: ["product clicked", "products clicked"],
    dest: "select_item",
    requiredParams: [requiredEventParameters.ProductId, requiredEventParameters.ProductName],
    hasItem: true,
    includeList: [eventParametersConfigArray.ListId, eventParametersConfigArray.Category]
  }, {
    src: ["product viewed"],
    dest: "view_item",
    requiredParams: [requiredEventParameters.ProductId, requiredEventParameters.ProductName],
    hasItem: true,
    includeList: [eventParametersConfigArray.Currency, eventParametersConfigArray.Total]
  }, {
    src: ["product added"],
    dest: "add_to_cart",
    requiredParams: [requiredEventParameters.ProductId, requiredEventParameters.ProductName],
    hasItem: true,
    includeList: [eventParametersConfigArray.Currency, eventParametersConfigArray.Total]
  }, {
    src: ["product removed"],
    dest: "remove_from_cart",
    requiredParams: [requiredEventParameters.ProductId, requiredEventParameters.ProductName],
    hasItem: true,
    includeList: [eventParametersConfigArray.Currency, eventParametersConfigArray.Total]
  }, {
    src: ["cart viewed"],
    dest: "view_cart",
    requiredParams: [requiredEventParameters.ProductId, requiredEventParameters.ProductName],
    hasItem: true,
    includeList: [eventParametersConfigArray.Currency, eventParametersConfigArray.Total]
  }, {
    src: ["checkout started"],
    dest: "begin_checkout",
    requiredParams: [requiredEventParameters.ProductId, requiredEventParameters.ProductName],
    hasItem: true,
    includeList: [eventParametersConfigArray.Coupon, eventParametersConfigArray.Currency, eventParametersConfigArray.Total]
  }, {
    src: ["payment info entered"],
    dest: "add_payment_info",
    hasItem: false,
    includeList: [eventParametersConfigArray.PaymentMethod]
  }, {
    src: ["payment info entered"],
    dest: "add_shipping_info",
    hasItem: false,
    includeList: [eventParametersConfigArray.ShippingMethod]
  }, {
    src: ["order completed"],
    dest: "purchase",
    requiredParams: [requiredEventParameters.ProductId, requiredEventParameters.ProductName],
    hasItem: true,
    includeList: [eventParametersConfigArray.Affiliation, eventParametersConfigArray.Coupon, eventParametersConfigArray.Currency, eventParametersConfigArray.CheckoutId, eventParametersConfigArray.Shipping, eventParametersConfigArray.Tax, eventParametersConfigArray.Total]
  }, {
    src: ["order refunded"],
    dest: "refund",
    hasItem: true,
    includeList: [eventParametersConfigArray.Affiliation, eventParametersConfigArray.Coupon, eventParametersConfigArray.Currency, eventParametersConfigArray.CheckoutId, eventParametersConfigArray.Shipping, eventParametersConfigArray.Tax, eventParametersConfigArray.Total]
  },
  /* Coupon Section
    No Coupon Events present in GA4
  /----------  */
  // Wishlist Section
  {
    src: ["product added to wishlist"],
    dest: "add_to_wishlist",
    requiredParams: [requiredEventParameters.ProductId, requiredEventParameters.ProductName],
    hasItem: true,
    includeList: [eventParametersConfigArray.Currency, eventParametersConfigArray.Total]
  }, //-------
  // Sharing Section
  {
    src: ["product shared"],
    dest: "share",
    hasItem: false,
    onlyIncludeParams: includeParams.ProductShare
  }, {
    src: ["cart shared"],
    dest: "share",
    hasItem: false,
    onlyIncludeParams: includeParams.CartShare
  } //---------
  ];

  var pageEventParametersConfigArray = [{
    src: "path",
    dest: "page_location"
  }, {
    src: "referrer",
    dest: "page_referrer"
  }, {
    src: "title",
    dest: "page_title"
  }];

  /**
   * Check if event name is not one of the following reserved names
   * @param {*} name
   */

  function isReservedName(name) {
    var reservedEventNames = ["ad_activeview", "ad_click", "ad_exposure", "ad_impression", "ad_query", "adunit_exposure", "app_clear_data", "app_install", "app_update", "app_remove", "error", "first_open", "first_visit", "in_app_purchase", "notification_dismiss", "notification_foreground", "notification_open", "notification_receive", "os_update", "screen_view", "session_start", "user_engagement"];
    return reservedEventNames.includes(name);
  }
  /**
   * map rudder event name to ga4 ecomm event name and return array
   * @param {*} event
   */


  function getDestinationEventName(event) {
    return eventNamesConfigArray.filter(function (p) {
      return p.src.includes(event.toLowerCase());
    });
  }
  /**
   * Create item array and add into destination parameters
   * If 'items' prop is present push new key value into it else create a new and push data
   * 'items' -> name of GA4 Ecommerce property name.
   * For now its hard coded, we can think of some better soln. later.
   * @param {*} dest
   * @param {*} key
   * @param {*} value
   */


  function createItemProperty(dest, key, value) {
    var destinationProperties = dest;

    if (!destinationProperties.items) {
      destinationProperties.items = [];
      destinationProperties.items.push(_defineProperty({}, key, value));
    } else {
      destinationProperties.items[0][key] = value;
    }

    return destinationProperties;
  }
  /**
   * Check if your payload contains required parameters to map to ga4 ecomm
   * @param {*} includeRequiredParams this can be boolean or an array or required object
   * @param {*} key
   * @param {*} src
   */


  function hasRequiredParameters(props, eventMappingObj) {
    var requiredParams = eventMappingObj.requiredParams || false;
    if (!requiredParams) return true;

    if (!Array.isArray(requiredParams)) {
      if (props[requiredParams]) {
        return true;
      }

      return false;
    }

    for (var i in props.items) {
      for (var p in requiredParams) {
        if (!props.items[i][requiredParams[p]]) {
          return false;
        }
      }
    }

    return true;
  }
  /**
   * TO DO Future Improvement ::::
   * Here we only support mapping single level object mapping.
   * Implement using recursion to handle multi level prop mapping.
   * @param {*} props { product_id: 123456_abcdef, name: "chess-board", list_id: "ls_abcdef", category: games }
   * @param {*} destParameterConfig
   * Defined Parameter present GA4/utils.js ex: [{ src: "category", dest: "item_list_name", inItems: true }]
   * @param {*} includeRequiredParams contains object of required parameter to be mapped from source payload
   * output: {
    "item_list_id": "ls_abcdef",
    "items": [
      {
        "item_id": "123456_abcdef",
        "item_name": "chess-board",
        "item_list_id": "ls_abc",
        "item_list_name": "games"
      }
    ],
    "item_list_name": "games"
  }
  */


  function getDestinationEventProperties(props, destParameterConfig) {
    var hasItem = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
    var destinationProperties = {};
    Object.keys(props).forEach(function (key) {
      destParameterConfig.forEach(function (param) {
        if (key === param.src) {
          // handle case where the key needs to go inside items as well as top level params in GA4
          if (param.inItems && hasItem) {
            destinationProperties = createItemProperty(destinationProperties, param.dest, props[key]);
          }

          destinationProperties[param.dest] = props[key]; // eslint-disable-next-line no-param-reassign

          delete props[key];
        }
      });
    });
    return destinationProperties;
  }
  /**
   * Map rudder products arrays payload to ga4 ecomm items array
   * @param {*} products
   * @param {*} item
   */


  function getDestinationItemProperties(products, item) {
    var items = [];
    var obj = {};

    if (type(products) !== "array") {
      logger.debug("Event payload doesn't have products array");
    } else {
      // get the dest keys from itemParameters config
      // append the already created item object keys (this is done to get the keys that are actually top level props in Rudder payload but GA expects them under items too)
      products.forEach(function (p) {
        obj = _objectSpread2(_objectSpread2({}, getDestinationEventProperties(p, itemParametersConfigArray)), item && type(item) === "array" && item[0] || {});
        items.push(obj);
      });
    }

    return items;
  }
  /**
   * Generate ga4 page_view events payload
   * @param {*} props
   */


  function getPageViewProperty(props) {
    return getDestinationEventProperties(props, pageEventParametersConfigArray);
  }

  var GA4 = /*#__PURE__*/function () {
    function GA4(config, analytics) {
      _classCallCheck(this, GA4);

      this.measurementId = config.measurementId;
      this.analytics = analytics;
      this.sendUserId = config.sendUserId || false;
      this.blockPageView = config.blockPageViewEvent || false;
      this.extendPageViewParams = config.extendPageViewParams || false;
      this.name = "GA4";
    }

    _createClass(GA4, [{
      key: "loadScript",
      value: function loadScript(measurementId, userId) {
        window.dataLayer = window.dataLayer || [];

        window.gtag = window.gtag || function gt() {
          // eslint-disable-next-line prefer-rest-params
          window.dataLayer.push(arguments);
        };

        window.gtag("js", new Date()); // This condition is not working, even after disabling page view
        // page_view is even getting called on page load

        if (this.blockPageView) {
          if (this.sendUserId) {
            window.gtag("config", measurementId, {
              user_id: userId,
              send_page_view: false
            });
          } else {
            window.gtag("config", measurementId, {
              send_page_view: false
            });
          }
        } else if (this.sendUserId) {
          window.gtag("config", measurementId, {
            user_id: userId
          });
        } else {
          window.gtag("config", measurementId);
        }

        ScriptLoader("google-analytics 4", "https://www.googletagmanager.com/gtag/js?id=".concat(measurementId));
      }
    }, {
      key: "init",
      value: function init() {
        // To do :: check how custom dimension and metrics is used
        var userId = this.analytics.userId || this.analytics.anonymousId;
        this.loadScript(this.measurementId, userId);
      }
      /* utility functions ---Start here ---  */

    }, {
      key: "isLoaded",
      value: function isLoaded() {
        return !!(window.gtag && window.gtag.push !== Array.prototype.push);
      }
    }, {
      key: "isReady",
      value: function isReady() {
        return !!(window.gtag && window.gtag.push !== Array.prototype.push);
      }
      /* utility functions --- Ends here ---  */

      /**
       * Function to get destination properties for both event parameters and items array if present
       * For top level properties, include only those properties that are in the includeList
       * @param {*} properties
       * @param {*} hasItem
       * @param {*} products
       * @param {*} includeList
       */

    }, {
      key: "getdestinationProperties",
      value: function getdestinationProperties(properties, hasItem, products, includeList) {
        var destinationProperties = {};
        destinationProperties = getDestinationEventProperties(properties, includeList, hasItem);

        if (hasItem) {
          // only for events where GA requires an items array to be sent
          // get the product related destination keys || if products is not present use the rudder message properties to get the product related destination keys
          destinationProperties.items = getDestinationItemProperties(products || [properties], destinationProperties.items);
        }

        return destinationProperties;
      }
      /**
       * Only include params that are present in given mapping config for things like Cart/Product shared, Product/Products shared
       * @param {*} params
       * @param {*} properties
       */

    }, {
      key: "getIncludedParameters",
      value: function getIncludedParameters(params, properties) {
        var destinationProperties = {};

        if (type(params) === "object") {
          var defaults = params.defaults,
              mappings = params.mappings;

          if (type(defaults) === "object") {
            Object.keys(defaults).forEach(function (key) {
              destinationProperties[key] = defaults[key];
            });
          }

          if (type(mappings) === "object") {
            Object.keys(mappings).forEach(function (key) {
              destinationProperties[mappings[key]] = properties[key];
            });
          }
        }

        return destinationProperties;
      }
    }, {
      key: "sendGAEvent",
      value: function sendGAEvent(event, parameters, checkRequiredParameters, eventMappingObj) {
        if (checkRequiredParameters) {
          if (!hasRequiredParameters(parameters, eventMappingObj)) {
            throw Error("Payload must have required parameters..");
          }
        }

        window.gtag("event", event, parameters);
      }
    }, {
      key: "handleEventMapper",
      value: function handleEventMapper(eventMappingObj, properties, products) {
        var destinationProperties = {};
        var event = eventMappingObj.dest;

        if (eventMappingObj.onlyIncludeParams) {
          /* Only include params that are present in given mapping config for things like Cart/Product shared, Product/Products shared
           */
          var includeParams = eventMappingObj.onlyIncludeParams;
          destinationProperties = this.getIncludedParameters(includeParams, properties);
        } else {
          destinationProperties = this.getdestinationProperties(properties, eventMappingObj.hasItem, products, eventMappingObj.includeList);
        }

        this.sendGAEvent(event, destinationProperties, true, eventMappingObj);
      }
      /**
       *
       * @param {*} rudderElement
       */

    }, {
      key: "track",
      value: function track(rudderElement) {
        var _this = this;

        var event = rudderElement.message.event;
        var properties = rudderElement.message.properties;
        var products = properties.products;

        if (!event || isReservedName(event)) {
          throw Error("Cannot call un-named/reserved named track event");
        } // get GA4 event name and corresponding configs defined to add properties to that event


        var eventMappingArray = getDestinationEventName(event);

        if (eventMappingArray && eventMappingArray.length) {
          eventMappingArray.forEach(function (events) {
            _this.handleEventMapper(events, properties, products);
          });
        } else {
          this.sendGAEvent(event, flattenJsonPayload(properties), false);
        }
      }
    }, {
      key: "identify",
      value: function identify(rudderElement) {
        window.gtag("set", "user_properties", flattenJsonPayload(this.analytics.userTraits));

        if (this.sendUserId && rudderElement.message.userId) {
          var userId = this.analytics.userId || this.analytics.anonymousId;

          if (this.blockPageView) {
            window.gtag("config", this.measurementId, {
              user_id: userId,
              send_page_view: false
            });
          } else {
            window.gtag("config", this.measurementId, {
              user_id: userId
            });
          }
        }

        logger.debug("in GoogleAnalyticsManager identify");
      }
    }, {
      key: "page",
      value: function page(rudderElement) {
        var pageProps = rudderElement.message.properties;
        if (!pageProps) return;
        pageProps = flattenJsonPayload(pageProps);

        if (this.extendPageViewParams) {
          window.gtag("event", "page_view", _objectSpread2(_objectSpread2({}, pageProps), getPageViewProperty(pageProps)));
        } else {
          window.gtag("event", "page_view", getPageViewProperty(pageProps));
        }
      }
    }]);

    return GA4;
  }();

  var traitsMap = {
    firstName: "first_name",
    lastName: "last_name",
    firstname: "first_name",
    lastname: "last_name",
    email: "email",
    phone: "mobile",
    name: "user_name",
    username: "user_name",
    userName: "user_name",
    gender: "gender",
    birthday: "birthday",
    id: null
  };

  var MoEngage = /*#__PURE__*/function () {
    function MoEngage(config, analyticsinstance) {
      _classCallCheck(this, MoEngage);

      this.isLoaded = function () {
        logger.debug("in MoEngage isLoaded");
        return !!window.moeBannerText;
      };

      this.isReady = function () {
        logger.debug("in MoEngage isReady");
        return !!window.moeBannerText;
      };

      this.apiId = config.apiId;
      this.debug = config.debug;
      this.region = config.region;
      this.name = "MoEngage";
      this.analyticsinstance = analyticsinstance;
    }

    _createClass(MoEngage, [{
      key: "init",
      value: function init() {
        var self = this;
        logger.debug("===in init MoEnagage==="); // loading the script for moengage web sdk

        /* eslint-disable */

        (function (i, s, o, g, r, a, m, n) {
          i.moengage_object = r;
          var t = {};

          var q = function q(f) {
            return function () {
              (i.moengage_q = i.moengage_q || []).push({
                f: f,
                a: arguments
              });
            };
          };

          var f = ["track_event", "add_user_attribute", "add_first_name", "add_last_name", "add_email", "add_mobile", "add_user_name", "add_gender", "add_birthday", "destroy_session", "add_unique_user_id", "moe_events", "call_web_push", "track", "location_type_attribute"];
          var h = {
            onsite: ["getData", "registerCallback"]
          };

          for (var k in f) {
            t[f[k]] = q(f[k]);
          }

          for (var k in h) {
            for (var l in h[k]) {
              null == t[k] && (t[k] = {}), t[k][h[k][l]] = q(k + "." + h[k][l]);
            }
          }

          a = s.createElement(o);
          m = s.getElementsByTagName(o)[0];
          a.async = 1;
          a.src = g;
          m.parentNode.insertBefore(a, m);

          i.moe = i.moe || function () {
            n = arguments[0];
            return t;
          };

          a.onload = function () {
            if (n) {
              i[r] = moe(n);
            }
          };
        })(window, document, "script", document.location.protocol === "https:" ? "https://cdn.moengage.com/webpush/moe_webSdk.min.latest.js" : "http://cdn.moengage.com/webpush/moe_webSdk.min.latest.js", "Moengage");
        /* eslint-enable */
        // setting the region if us then not needed.


        if (this.region !== "US") {
          self.moeClient = window.moe({
            app_id: this.apiId,
            debug_logs: this.debug ? 1 : 0,
            cluster: this.region === "EU" ? "eu" : "in"
          });
        } else {
          self.moeClient = window.moe({
            app_id: this.apiId,
            debug_logs: this.debug ? 1 : 0
          });
        }

        this.initialUserId = this.analyticsinstance.userId;
      }
    }, {
      key: "track",
      value: function track(rudderElement) {
        logger.debug("inside track"); // Check if the user id is same as previous session if not a new session will start

        if (!rudderElement.message) {
          logger.error("Payload not correct");
          return;
        }

        var _rudderElement$messag = rudderElement.message,
            event = _rudderElement$messag.event,
            properties = _rudderElement$messag.properties,
            userId = _rudderElement$messag.userId;

        if (userId) {
          if (this.initialUserId !== userId) {
            this.reset();
          }
        } // track event : https://docs.moengage.com/docs/tracking-events


        if (!event) {
          logger.error("Event name not present");
          return;
        }

        if (properties) {
          this.moeClient.track_event(event, properties);
        } else {
          this.moeClient.track_event(event);
        }
      }
    }, {
      key: "reset",
      value: function reset() {
        logger.debug("inside reset"); // reset the user id

        this.initialUserId = this.analyticsinstance.userId;
        this.moeClient.destroy_session();
      }
    }, {
      key: "identify",
      value: function identify(rudderElement) {
        var self = this;
        var userId = rudderElement.message.userId;
        var traits = null;

        if (rudderElement.message.context) {
          traits = rudderElement.message.context.traits;
        } // check if user id is same or not


        if (this.initialUserId !== userId) {
          this.reset();
        } // if user is present map


        if (userId) {
          this.moeClient.add_unique_user_id(userId);
        } // track user attributes : https://docs.moengage.com/docs/tracking-web-user-attributes


        if (traits) {
          each_1(function add(value, key) {
            // check if name is present
            if (key === "name") {
              self.moeClient.add_user_name(value);
            }

            if (Object.prototype.hasOwnProperty.call(traitsMap, key)) {
              var method = "add_".concat(traitsMap[key]);
              self.moeClient[method](value);
            } else {
              self.moeClient.add_user_attribute(key, value);
            }
          }, traits);
        }
      }
    }]);

    return MoEngage;
  }();

  var global$1 = typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {};

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
  var browser$2 = true;
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
    browser: browser$2,
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

  var toString$3 = {}.toString;
  var isArray$1 = Array.isArray || function (arr) {
    return toString$3.call(arr) == '[object Array]';
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
  Buffer.isBuffer = isBuffer$2;

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


  function isBuffer$2(obj) {
    return obj != null && (!!obj._isBuffer || isFastBuffer(obj) || isSlowBuffer$1(obj));
  }

  function isFastBuffer(obj) {
    return !!obj.constructor && typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj);
  } // For Node v0.10 support. Remove this eventually.


  function isSlowBuffer$1(obj) {
    return typeof obj.readFloatLE === 'function' && typeof obj.slice === 'function' && isFastBuffer(obj.slice(0, 0));
  }

  var amplitude_umd = createCommonjsModule(function (module, exports) {
    (function (global, factory) {
       module.exports = factory() ;
    })(commonjsGlobal, function () {

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
        return isNodeEnv() ? commonjsGlobal : typeof window !== 'undefined' ? window : typeof self !== 'undefined' ? self : fallbackGlobalObject;
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

          commonjsGlobal.console.log(PREFIX + "[Log]: " + args.join(' ')); // tslint:disable-line:no-console
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

          commonjsGlobal.console.warn(PREFIX + "[Warn]: " + args.join(' ')); // tslint:disable-line:no-console
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

          commonjsGlobal.console.error(PREFIX + "[Error]: " + args.join(' ')); // tslint:disable-line:no-console
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

        if (typeof Buffer !== 'undefined' && typeof isBuffer$2 === 'function' && isBuffer$2(val)) {
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

      var commonjsGlobal$1 = typeof window !== 'undefined' ? window : typeof commonjsGlobal !== 'undefined' ? commonjsGlobal : typeof self !== 'undefined' ? self : {};

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
        })(commonjsGlobal$1);
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
        })((typeof window === "undefined" ? "undefined" : _typeof(window)) === 'object' ? window : commonjsGlobal$1);
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

          if (AsyncStorage) {
            this._migrateUnsentEvents(function () {
              Promise.all([AsyncStorage.getItem(_this._storageSuffix), AsyncStorage.getItem(_this.options.unsentKey + _this._storageSuffix), AsyncStorage.getItem(_this.options.unsentIdentifyKey + _this._storageSuffix)]).then(function (values) {
                if (values[0]) {
                  var cookieData = JSON.parse(values[0]);

                  if (cookieData) {
                    _loadCookieDataProps(_this, cookieData);
                  }
                }

                if (_this.options.saveEvents) {
                  _this._unsentEvents = _this._parseSavedUnsentEventsString(values[1]).map(function (event) {
                    return {
                      event: event
                    };
                  }).concat(_this._unsentEvents);
                  _this._unsentIdentifys = _this._parseSavedUnsentEventsString(values[2]).map(function (event) {
                    return {
                      event: event
                    };
                  }).concat(_this._unsentIdentifys);
                }

                if (DeviceInfo) {
                  Promise.all([DeviceInfo.getCarrier(), DeviceInfo.getModel(), DeviceInfo.getManufacturer(), DeviceInfo.getVersion(), DeviceInfo.getUniqueId()]).then(function (values) {
                    _this.deviceInfo = {
                      carrier: values[0],
                      model: values[1],
                      manufacturer: values[2],
                      version: values[3]
                    };
                    initFromStorage(values[4]);

                    _this.runQueuedFunctions();

                    if (type(opt_callback) === 'function') {
                      opt_callback(_this);
                    }
                  })["catch"](function (err) {
                    _this.options.onError(err);
                  });
                } else {
                  initFromStorage();

                  _this.runQueuedFunctions();
                }
              })["catch"](function (err) {
                _this.options.onError(err);
              });
            });
          } else {
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

          if (AsyncStorage) {
            AsyncStorage.setItem(this.options.unsentKey + this._storageSuffix, serializedUnsentEvents);
          } else {
            this._setInStorage(localStorage$1, this.options.unsentKey, serializedUnsentEvents);
          }
        } catch (e) {}
        /* eslint-disable-line no-empty */


        try {
          var serializedIdentifys = JSON.stringify(this._unsentIdentifys.map(function (unsentIdentify) {
            return unsentIdentify.event;
          }));

          if (AsyncStorage) {
            AsyncStorage.setItem(this.options.unsentIdentifyKey + this._storageSuffix, serializedIdentifys);
          } else {
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

  var Pendo = /*#__PURE__*/function () {
    function Pendo(config, analytics) {
      _classCallCheck(this, Pendo);

      this.analytics = analytics;
      this.apiKey = !config.apiKey ? "" : config.apiKey;
      this.name = "PENDO";
      logger.debug("Config ", config);
    }

    _createClass(Pendo, [{
      key: "init",
      value: function init() {
        (function (apiKey) {
          (function (p, e, n, d, o) {
            var v, w, x, y, z;
            o = p[d] = p[d] || {};
            o._q = [];
            v = ["initialize", "identify", "updateOptions", "pageLoad", "track"];

            for (w = 0, x = v.length; w < x; ++w) {
              (function (m) {
                o[m] = o[m] || function () {
                  o._q[m === v[0] ? "unshift" : "push"]([m].concat([].slice.call(arguments, 0)));
                };
              })(v[w]);
            }

            y = e.createElement(n);
            y.async = !0;
            y.src = "https://cdn.pendo.io/agent/static/".concat(apiKey, "/pendo.js");
            z = e.getElementsByTagName(n)[0];
            z.parentNode.insertBefore(y, z);
          })(window, document, "script", "pendo");
        })(this.apiKey);

        this.initializeMe();
        logger.debug("===in init Pendo===");
      }
    }, {
      key: "initializeMe",
      value: function initializeMe() {
        var userId = this.analytics.userId || this.constructPendoAnonymousId(this.analytics.anonymousId);

        var accountObj = _objectSpread2({
          id: this.analytics.groupId
        }, this.analytics.groupTraits);

        var visitorObj = _objectSpread2({
          id: userId
        }, this.analytics.userTraits);

        window.pendo.initialize({
          account: accountObj,
          visitor: visitorObj
        });
      }
      /* utility functions ---Start here ---  */

    }, {
      key: "isLoaded",
      value: function isLoaded() {
        return !!(window.pendo && window.pendo.push !== Array.prototype.push);
      }
    }, {
      key: "isReady",
      value: function isReady() {
        return !!(window.pendo && window.pendo.push !== Array.prototype.push);
      }
    }, {
      key: "constructPendoAnonymousId",
      value: function constructPendoAnonymousId(id) {
        return "_PENDO_T_".concat(id);
      }
      /* utility functions --- Ends here ---  */

      /*
       * PENDO MAPPED FUNCTIONS :: identify, track, group
       */

      /* Pendo's identify call works intelligently, once u have identified a visitor/user,
       *or associated a visitor to a group/account then Pendo save this data in local storage and
       *any further upcoming calls are done taking user info from local.
       * To track user perndo maps user to Visitor in Pendo.
       */

    }, {
      key: "identify",
      value: function identify(rudderElement) {
        var visitorObj = {};
        var accountObj = {};
        var groupId = this.analytics.groupId;
        var id = this.analytics.userId || this.constructPendoAnonymousId(this.analytics.anonymousId);
        visitorObj = _objectSpread2({
          id: id
        }, this.analytics.userTraits);

        if (groupId) {
          accountObj = _objectSpread2({
            id: groupId
          }, this.analytics.groupTraits);
        }

        window.pendo.identify({
          visitor: visitorObj,
          account: accountObj
        });
      }
      /*
       *Group call maps to an account for which visitor belongs.
       *It is same as identify call but here we send account object.
       */

    }, {
      key: "group",
      value: function group(rudderElement) {
        var accountObj = {};
        var visitorObj = {};
        var _rudderElement$messag = rudderElement.message,
            userId = _rudderElement$messag.userId,
            traits = _rudderElement$messag.traits;
        accountObj.id = this.analytics.groupId || this.analytics.anonymousId;
        accountObj = _objectSpread2(_objectSpread2({}, accountObj), traits);

        if (userId) {
          visitorObj = _objectSpread2({
            id: userId
          }, rudderElement.message.context && rudderElement.message.context.traits);
        }

        window.pendo.identify({
          account: accountObj,
          visitor: visitorObj
        });
      }
      /* Once user is identified Pendo makes Track call to track user activity.
       */

    }, {
      key: "track",
      value: function track(rudderElement) {
        var event = rudderElement.message.event;

        if (!event) {
          throw Error("Cannot call un-named track event");
        }

        var props = rudderElement.message.properties;
        window.pendo.track(event, props);
      }
    }]);

    return Pendo;
  }();

  var Lytics = /*#__PURE__*/function () {
    function Lytics(config) {
      _classCallCheck(this, Lytics);

      this.accountId = config.accountId;
      this.stream = config.stream;
      this.blockload = config.blockload;
      this.loadid = config.loadid;
      this.name = "LYTICS";
    }

    _createClass(Lytics, [{
      key: "loadLyticsScript",
      value: function loadLyticsScript() {
        (function () {

          var o = window.jstag || (window.jstag = {}),
              r = [];

          function n(e) {
            o[e] = function () {
              for (var n = arguments.length, t = new Array(n), i = 0; i < n; i++) {
                t[i] = arguments[i];
              }

              r.push([e, t]);
            };
          }

          n("send"), n("mock"), n("identify"), n("pageView"), n("unblock"), n("getid"), n("setid"), n("loadEntity"), n("getEntity"), n("on"), n("once"), n("call"), o.loadScript = function (n, t, i) {
            var e = document.createElement("script");
            e.async = !0, e.src = n, e.onload = t, e.onerror = i;
            var o = document.getElementsByTagName("script")[0],
                r = o && o.parentNode || document.head || document.body,
                c = o || r.lastChild;
            return null != c ? r.insertBefore(e, c) : r.appendChild(e), this;
          }, o.init = function n(t) {
            return this.config = t, this.loadScript(t.src, function () {
              if (o.init === n) throw new Error("Load error!"); // eslint-disable-next-line no-unused-expressions

              o.init(o.config), // eslint-disable-next-line func-names
              function () {
                for (var n = 0; n < r.length; n++) {
                  var t = r[n][0],
                      i = r[n][1];
                  o[t].apply(o, i);
                }

                r = void 0;
              }();
            }), this;
          };
        })(); // Define config and initialize Lytics tracking tag.


        window.jstag.init({
          loadid: this.loadid,
          blocked: this.blockload,
          stream: this.stream,
          sessecs: 1800,
          src: document.location.protocal === "https:" ? "https://c.lytics.io/api/tag/".concat(this.accountId, "/latest.min.js") : "http://c.lytics.io/api/tag/".concat(this.accountId, "/latest.min.js")
        });
      }
    }, {
      key: "init",
      value: function init() {
        this.loadLyticsScript();
        logger.debug("===in init Lytics===");
      }
    }, {
      key: "isLoaded",
      value: function isLoaded() {
        logger.debug("in Lytics isLoaded");
        logger.debug(!!(window.jstag && window.jstag.push !== Array.prototype.push));
        return !!(window.jstag && window.jstag.push !== Array.prototype.push);
      }
    }, {
      key: "isReady",
      value: function isReady() {
        logger.debug("in Lytics isReady");
        return !!(window.jstag && window.jstag.push !== Array.prototype.push);
      }
    }, {
      key: "identify",
      value: function identify(rudderElement) {
        logger.debug("in Lytics identify"); // eslint-disable-next-line camelcase

        var user_id = rudderElement.message.userId || rudderElement.message.anonymousId;
        var traits = rudderElement.message.context.traits;

        var payload = _objectSpread2({
          user_id: user_id
        }, traits);

        window.jstag.send(this.stream, payload);
      }
    }, {
      key: "page",
      value: function page(rudderElement) {
        logger.debug("in Lytics page");
        var properties = rudderElement.message.properties;

        var payload = _objectSpread2({
          event: rudderElement.message.name
        }, properties);

        window.jstag.pageView(this.stream, payload);
      }
    }, {
      key: "track",
      value: function track(rudderElement) {
        logger.debug("in Lytics track");
        var properties = rudderElement.message.properties;

        var payload = _objectSpread2({
          _e: rudderElement.message.event
        }, properties);

        window.jstag.send(this.stream, payload);
      }
    }]);

    return Lytics;
  }();

  var Appcues = /*#__PURE__*/function () {
    function Appcues(config) {
      _classCallCheck(this, Appcues);

      this.accountId = config.accountId;
      this.apiKey = config.apiKey;
      this.name = "APPCUES"; //this.sendToAllDestinations = config.sendToAll;
    }

    _createClass(Appcues, [{
      key: "init",
      value: function init() {
        logger.debug("===in init Appcues===");
        ScriptLoader("appcues-id", "https://fast.appcues.com/".concat(this.accountId, ".js"));
      }
    }, {
      key: "isLoaded",
      value: function isLoaded() {
        logger.debug("in appcues isLoaded");
        return !!window.Appcues;
      }
    }, {
      key: "isReady",
      value: function isReady() {
        logger.debug("in appcues isReady"); // This block of code enables us to send Appcues Flow events to all the other destinations connected to the same source (we might use it in future)
        // if (this.sendToAllDestinations && window.Appcues) {
        //   window.Appcues.on("all", function(eventName, event) {
        //     window.rudderanalytics.track(eventName, event, {
        //       integrations: {
        //         All: true,
        //         APPCUES: false
        //       }
        //     });
        //   });
        // }

        return !!window.Appcues;
      }
    }, {
      key: "identify",
      value: function identify(rudderElement) {
        var traits = rudderElement.message.context.traits;
        var userId = rudderElement.message.userId;

        if (userId) {
          window.Appcues.identify(userId, traits);
        } else {
          logger.error("user id is empty");
        }
      }
    }, {
      key: "track",
      value: function track(rudderElement) {
        var eventName = rudderElement.message.event;
        var properties = rudderElement.message.properties;

        if (eventName) {
          window.Appcues.track(eventName, properties);
        } else {
          logger.error("event name is empty");
        }
      }
    }, {
      key: "page",
      value: function page(rudderElement) {
        var _rudderElement$messag = rudderElement.message,
            properties = _rudderElement$messag.properties,
            name = _rudderElement$messag.name;
        window.Appcues.page(name, properties);
      } // To be uncommented after adding Reset feature to our SDK
      // reset() {
      //   window.Appcues.reset();
      // }

    }]);

    return Appcues;
  }();

  // (config-plan name, native destination.name , exported integration name(this one below))

  var integrations = {
    HS: index,
    GA: index$1,
    HOTJAR: index$2,
    GOOGLEADS: index$3,
    VWO: VWO,
    GTM: GoogleTagManager,
    BRAZE: Braze,
    INTERCOM: INTERCOM,
    KEEN: Keen,
    KISSMETRICS: Kissmetrics,
    CUSTOMERIO: CustomerIO,
    CHARTBEAT: Chartbeat,
    COMSCORE: Comscore,
    FACEBOOK_PIXEL: FacebookPixel,
    LOTAME: Lotame,
    OPTIMIZELY: Optimizely,
    BUGSNAG: Bugsnag,
    FULLSTORY: Fullstory,
    TVSQUARED: TVSquared,
    GA4: GA4,
    MOENGAGE: MoEngage,
    AM: Amplitude,
    PENDO: Pendo,
    LYTICS: Lytics,
    APPCUES: Appcues
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

        if (true) {
          var xhr = new XMLHttpRequest();
        } else {
          var xhr;
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
