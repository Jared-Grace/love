
function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

function $parcel$defineInteropFlag(a) {
  Object.defineProperty(a, '__esModule', {value: true, configurable: true});
}

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

      var $parcel$global = globalThis;
    var parcelRequire = $parcel$global["parcelRequire94c2"];
var parcelRegister = parcelRequire.register;
parcelRegister("3oAaF", function(module, exports) {
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

var $hPtJY = parcelRequire("hPtJY");
var $278fabd3bcda271a$var$getOwnPropertyDescriptors = Object.getOwnPropertyDescriptors || function getOwnPropertyDescriptors(obj) {
    var keys = Object.keys(obj);
    var descriptors = {};
    for(var i = 0; i < keys.length; i++)descriptors[keys[i]] = Object.getOwnPropertyDescriptor(obj, keys[i]);
    return descriptors;
};
var $278fabd3bcda271a$var$formatRegExp = /%[sdj%]/g;
module.exports.format = function(f) {
    if (!$278fabd3bcda271a$var$isString(f)) {
        var objects = [];
        for(var i = 0; i < arguments.length; i++)objects.push($278fabd3bcda271a$var$inspect(arguments[i]));
        return objects.join(' ');
    }
    var i = 1;
    var args = arguments;
    var len = args.length;
    var str = String(f).replace($278fabd3bcda271a$var$formatRegExp, function(x) {
        if (x === '%%') return '%';
        if (i >= len) return x;
        switch(x){
            case '%s':
                return String(args[i++]);
            case '%d':
                return Number(args[i++]);
            case '%j':
                try {
                    return JSON.stringify(args[i++]);
                } catch (_) {
                    return '[Circular]';
                }
            default:
                return x;
        }
    });
    for(var x = args[i]; i < len; x = args[++i])if ($278fabd3bcda271a$var$isNull(x) || !$278fabd3bcda271a$var$isObject(x)) str += ' ' + x;
    else str += ' ' + $278fabd3bcda271a$var$inspect(x);
    return str;
};
// Mark that a method should not be used.
// Returns a modified function which warns once by default.
// If --no-deprecation is set, then it is a no-op.
module.exports.deprecate = function(fn, msg) {
    var warned;
    return function() {
        return module.exports.deprecate(fn, msg).apply(this, arguments);
    };
    function deprecated() {
        if (!warned) {
            if ($hPtJY.throwDeprecation) throw new Error(msg);
            else if ($hPtJY.traceDeprecation) console.trace(msg);
            else console.error(msg);
            warned = true;
        }
        return fn.apply(this, arguments);
    }
};
var $278fabd3bcda271a$var$debugs = {};
var $278fabd3bcda271a$var$debugEnvRegex = /^$/;
var $278fabd3bcda271a$var$debugEnv;
module.exports.debuglog = function(set) {
    set = set.toUpperCase();
    if (!$278fabd3bcda271a$var$debugs[set]) {
        if ($278fabd3bcda271a$var$debugEnvRegex.test(set)) {
            var pid = $hPtJY.pid;
            $278fabd3bcda271a$var$debugs[set] = function() {
                var msg = module.exports.format.apply(module.exports, arguments);
                console.error('%s %d: %s', set, pid, msg);
            };
        } else $278fabd3bcda271a$var$debugs[set] = function() {};
    }
    return $278fabd3bcda271a$var$debugs[set];
};
/**
 * Echos the value of a value. Trys to print the value out
 * in the best way possible given the different types.
 *
 * @param {Object} obj The object to print out.
 * @param {Object} opts Optional options object that alters the output.
 */ /* legacy: obj, showHidden, depth, colors*/ function $278fabd3bcda271a$var$inspect(obj, opts) {
    // default options
    var ctx = {
        seen: [],
        stylize: $278fabd3bcda271a$var$stylizeNoColor
    };
    // legacy...
    if (arguments.length >= 3) ctx.depth = arguments[2];
    if (arguments.length >= 4) ctx.colors = arguments[3];
    if ($278fabd3bcda271a$var$isBoolean(opts)) // legacy...
    ctx.showHidden = opts;
    else if (opts) // got an "options" object
    module.exports._extend(ctx, opts);
    // set default options
    if ($278fabd3bcda271a$var$isUndefined(ctx.showHidden)) ctx.showHidden = false;
    if ($278fabd3bcda271a$var$isUndefined(ctx.depth)) ctx.depth = 2;
    if ($278fabd3bcda271a$var$isUndefined(ctx.colors)) ctx.colors = false;
    if ($278fabd3bcda271a$var$isUndefined(ctx.customInspect)) ctx.customInspect = true;
    if (ctx.colors) ctx.stylize = $278fabd3bcda271a$var$stylizeWithColor;
    return $278fabd3bcda271a$var$formatValue(ctx, obj, ctx.depth);
}
module.exports.inspect = $278fabd3bcda271a$var$inspect;
// http://en.wikipedia.org/wiki/ANSI_escape_code#graphics
$278fabd3bcda271a$var$inspect.colors = {
    'bold': [
        1,
        22
    ],
    'italic': [
        3,
        23
    ],
    'underline': [
        4,
        24
    ],
    'inverse': [
        7,
        27
    ],
    'white': [
        37,
        39
    ],
    'grey': [
        90,
        39
    ],
    'black': [
        30,
        39
    ],
    'blue': [
        34,
        39
    ],
    'cyan': [
        36,
        39
    ],
    'green': [
        32,
        39
    ],
    'magenta': [
        35,
        39
    ],
    'red': [
        31,
        39
    ],
    'yellow': [
        33,
        39
    ]
};
// Don't use 'blue' not visible on cmd.exe
$278fabd3bcda271a$var$inspect.styles = {
    'special': 'cyan',
    'number': 'yellow',
    'boolean': 'yellow',
    'undefined': 'grey',
    'null': 'bold',
    'string': 'green',
    'date': 'magenta',
    // "name": intentionally not styling
    'regexp': 'red'
};
function $278fabd3bcda271a$var$stylizeWithColor(str, styleType) {
    var style = $278fabd3bcda271a$var$inspect.styles[styleType];
    if (style) return '\u001b[' + $278fabd3bcda271a$var$inspect.colors[style][0] + 'm' + str + '\u001b[' + $278fabd3bcda271a$var$inspect.colors[style][1] + 'm';
    else return str;
}
function $278fabd3bcda271a$var$stylizeNoColor(str, styleType) {
    return str;
}
function $278fabd3bcda271a$var$arrayToHash(array) {
    var hash = {};
    array.forEach(function(val, idx) {
        hash[val] = true;
    });
    return hash;
}
function $278fabd3bcda271a$var$formatValue(ctx, value, recurseTimes) {
    // Provide a hook for user-specified inspect functions.
    // Check that value is an object with an inspect function on it
    if (ctx.customInspect && value && $278fabd3bcda271a$var$isFunction(value.inspect) && // Filter out the util module, it's inspect function is special
    value.inspect !== module.exports.inspect && // Also filter out any prototype objects using the circular check.
    !(value.constructor && value.constructor.prototype === value)) {
        var ret = value.inspect(recurseTimes, ctx);
        if (!$278fabd3bcda271a$var$isString(ret)) ret = $278fabd3bcda271a$var$formatValue(ctx, ret, recurseTimes);
        return ret;
    }
    // Primitive types cannot have properties
    var primitive = $278fabd3bcda271a$var$formatPrimitive(ctx, value);
    if (primitive) return primitive;
    // Look up the keys of the object.
    var keys = Object.keys(value);
    var visibleKeys = $278fabd3bcda271a$var$arrayToHash(keys);
    if (ctx.showHidden) keys = Object.getOwnPropertyNames(value);
    // IE doesn't make error fields non-enumerable
    // http://msdn.microsoft.com/en-us/library/ie/dww52sbt(v=vs.94).aspx
    if ($278fabd3bcda271a$var$isError(value) && (keys.indexOf('message') >= 0 || keys.indexOf('description') >= 0)) return $278fabd3bcda271a$var$formatError(value);
    // Some type of object without properties can be shortcutted.
    if (keys.length === 0) {
        if ($278fabd3bcda271a$var$isFunction(value)) {
            var name = value.name ? ': ' + value.name : '';
            return ctx.stylize('[Function' + name + ']', 'special');
        }
        if ($278fabd3bcda271a$var$isRegExp(value)) return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
        if ($278fabd3bcda271a$var$isDate(value)) return ctx.stylize(Date.prototype.toString.call(value), 'date');
        if ($278fabd3bcda271a$var$isError(value)) return $278fabd3bcda271a$var$formatError(value);
    }
    var base = '', array = false, braces = [
        '{',
        '}'
    ];
    // Make Array say that they are Array
    if ($278fabd3bcda271a$var$isArray(value)) {
        array = true;
        braces = [
            '[',
            ']'
        ];
    }
    // Make functions say that they are functions
    if ($278fabd3bcda271a$var$isFunction(value)) {
        var n = value.name ? ': ' + value.name : '';
        base = ' [Function' + n + ']';
    }
    // Make RegExps say that they are RegExps
    if ($278fabd3bcda271a$var$isRegExp(value)) base = ' ' + RegExp.prototype.toString.call(value);
    // Make dates with properties first say the date
    if ($278fabd3bcda271a$var$isDate(value)) base = ' ' + Date.prototype.toUTCString.call(value);
    // Make error with message first say the error
    if ($278fabd3bcda271a$var$isError(value)) base = ' ' + $278fabd3bcda271a$var$formatError(value);
    if (keys.length === 0 && (!array || value.length == 0)) return braces[0] + base + braces[1];
    if (recurseTimes < 0) {
        if ($278fabd3bcda271a$var$isRegExp(value)) return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
        else return ctx.stylize('[Object]', 'special');
    }
    ctx.seen.push(value);
    var output;
    if (array) output = $278fabd3bcda271a$var$formatArray(ctx, value, recurseTimes, visibleKeys, keys);
    else output = keys.map(function(key) {
        return $278fabd3bcda271a$var$formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
    });
    ctx.seen.pop();
    return $278fabd3bcda271a$var$reduceToSingleString(output, base, braces);
}
function $278fabd3bcda271a$var$formatPrimitive(ctx, value) {
    if ($278fabd3bcda271a$var$isUndefined(value)) return ctx.stylize('undefined', 'undefined');
    if ($278fabd3bcda271a$var$isString(value)) {
        var simple = '\'' + JSON.stringify(value).replace(/^"|"$/g, '').replace(/'/g, "\\'").replace(/\\"/g, '"') + '\'';
        return ctx.stylize(simple, 'string');
    }
    if ($278fabd3bcda271a$var$isNumber(value)) return ctx.stylize('' + value, 'number');
    if ($278fabd3bcda271a$var$isBoolean(value)) return ctx.stylize('' + value, 'boolean');
    // For some reason typeof null is "object", so special case here.
    if ($278fabd3bcda271a$var$isNull(value)) return ctx.stylize('null', 'null');
}
function $278fabd3bcda271a$var$formatError(value) {
    return '[' + Error.prototype.toString.call(value) + ']';
}
function $278fabd3bcda271a$var$formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
    var output = [];
    for(var i = 0, l = value.length; i < l; ++i)if ($278fabd3bcda271a$var$hasOwnProperty(value, String(i))) output.push($278fabd3bcda271a$var$formatProperty(ctx, value, recurseTimes, visibleKeys, String(i), true));
    else output.push('');
    keys.forEach(function(key) {
        if (!key.match(/^\d+$/)) output.push($278fabd3bcda271a$var$formatProperty(ctx, value, recurseTimes, visibleKeys, key, true));
    });
    return output;
}
function $278fabd3bcda271a$var$formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
    var name, str, desc;
    desc = Object.getOwnPropertyDescriptor(value, key) || {
        value: value[key]
    };
    if (desc.get) {
        if (desc.set) str = ctx.stylize('[Getter/Setter]', 'special');
        else str = ctx.stylize('[Getter]', 'special');
    } else if (desc.set) str = ctx.stylize('[Setter]', 'special');
    if (!$278fabd3bcda271a$var$hasOwnProperty(visibleKeys, key)) name = '[' + key + ']';
    if (!str) {
        if (ctx.seen.indexOf(desc.value) < 0) {
            if ($278fabd3bcda271a$var$isNull(recurseTimes)) str = $278fabd3bcda271a$var$formatValue(ctx, desc.value, null);
            else str = $278fabd3bcda271a$var$formatValue(ctx, desc.value, recurseTimes - 1);
            if (str.indexOf('\n') > -1) {
                if (array) str = str.split('\n').map(function(line) {
                    return '  ' + line;
                }).join('\n').slice(2);
                else str = '\n' + str.split('\n').map(function(line) {
                    return '   ' + line;
                }).join('\n');
            }
        } else str = ctx.stylize('[Circular]', 'special');
    }
    if ($278fabd3bcda271a$var$isUndefined(name)) {
        if (array && key.match(/^\d+$/)) return str;
        name = JSON.stringify('' + key);
        if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
            name = name.slice(1, -1);
            name = ctx.stylize(name, 'name');
        } else {
            name = name.replace(/'/g, "\\'").replace(/\\"/g, '"').replace(/(^"|"$)/g, "'");
            name = ctx.stylize(name, 'string');
        }
    }
    return name + ': ' + str;
}
function $278fabd3bcda271a$var$reduceToSingleString(output, base, braces) {
    var numLinesEst = 0;
    var length = output.reduce(function(prev, cur) {
        numLinesEst++;
        if (cur.indexOf('\n') >= 0) numLinesEst++;
        return prev + cur.replace(/\u001b\[\d\d?m/g, '').length + 1;
    }, 0);
    if (length > 60) return braces[0] + (base === '' ? '' : base + '\n ') + ' ' + output.join(',\n  ') + ' ' + braces[1];
    return braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];
}

// NOTE: These type checking functions intentionally don't use `instanceof`
// because it is fragile and can be easily faked with `Object.create()`.
module.exports.types = (parcelRequire("7ylTZ"));
function $278fabd3bcda271a$var$isArray(ar) {
    return Array.isArray(ar);
}
module.exports.isArray = $278fabd3bcda271a$var$isArray;
function $278fabd3bcda271a$var$isBoolean(arg) {
    return typeof arg === 'boolean';
}
module.exports.isBoolean = $278fabd3bcda271a$var$isBoolean;
function $278fabd3bcda271a$var$isNull(arg) {
    return arg === null;
}
module.exports.isNull = $278fabd3bcda271a$var$isNull;
function $278fabd3bcda271a$var$isNullOrUndefined(arg) {
    return arg == null;
}
module.exports.isNullOrUndefined = $278fabd3bcda271a$var$isNullOrUndefined;
function $278fabd3bcda271a$var$isNumber(arg) {
    return typeof arg === 'number';
}
module.exports.isNumber = $278fabd3bcda271a$var$isNumber;
function $278fabd3bcda271a$var$isString(arg) {
    return typeof arg === 'string';
}
module.exports.isString = $278fabd3bcda271a$var$isString;
function $278fabd3bcda271a$var$isSymbol(arg) {
    return typeof arg === 'symbol';
}
module.exports.isSymbol = $278fabd3bcda271a$var$isSymbol;
function $278fabd3bcda271a$var$isUndefined(arg) {
    return arg === void 0;
}
module.exports.isUndefined = $278fabd3bcda271a$var$isUndefined;
function $278fabd3bcda271a$var$isRegExp(re) {
    return $278fabd3bcda271a$var$isObject(re) && $278fabd3bcda271a$var$objectToString(re) === '[object RegExp]';
}
module.exports.isRegExp = $278fabd3bcda271a$var$isRegExp;
module.exports.types.isRegExp = $278fabd3bcda271a$var$isRegExp;
function $278fabd3bcda271a$var$isObject(arg) {
    return typeof arg === 'object' && arg !== null;
}
module.exports.isObject = $278fabd3bcda271a$var$isObject;
function $278fabd3bcda271a$var$isDate(d) {
    return $278fabd3bcda271a$var$isObject(d) && $278fabd3bcda271a$var$objectToString(d) === '[object Date]';
}
module.exports.isDate = $278fabd3bcda271a$var$isDate;
module.exports.types.isDate = $278fabd3bcda271a$var$isDate;
function $278fabd3bcda271a$var$isError(e) {
    return $278fabd3bcda271a$var$isObject(e) && ($278fabd3bcda271a$var$objectToString(e) === '[object Error]' || e instanceof Error);
}
module.exports.isError = $278fabd3bcda271a$var$isError;
module.exports.types.isNativeError = $278fabd3bcda271a$var$isError;
function $278fabd3bcda271a$var$isFunction(arg) {
    return typeof arg === 'function';
}
module.exports.isFunction = $278fabd3bcda271a$var$isFunction;
function $278fabd3bcda271a$var$isPrimitive(arg) {
    return arg === null || typeof arg === 'boolean' || typeof arg === 'number' || typeof arg === 'string' || typeof arg === 'symbol' || // ES6 symbol
    typeof arg === 'undefined';
}
module.exports.isPrimitive = $278fabd3bcda271a$var$isPrimitive;

module.exports.isBuffer = (parcelRequire("fLd3X"));
function $278fabd3bcda271a$var$objectToString(o) {
    return Object.prototype.toString.call(o);
}
function $278fabd3bcda271a$var$pad(n) {
    return n < 10 ? '0' + n.toString(10) : n.toString(10);
}
var $278fabd3bcda271a$var$months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec'
];
// 26 Feb 16:19:34
function $278fabd3bcda271a$var$timestamp() {
    var d = new Date();
    var time = [
        $278fabd3bcda271a$var$pad(d.getHours()),
        $278fabd3bcda271a$var$pad(d.getMinutes()),
        $278fabd3bcda271a$var$pad(d.getSeconds())
    ].join(':');
    return [
        d.getDate(),
        $278fabd3bcda271a$var$months[d.getMonth()],
        time
    ].join(' ');
}
// log is just a thin wrapper to console.log that prepends a timestamp
module.exports.log = function() {
    console.log('%s - %s', $278fabd3bcda271a$var$timestamp(), module.exports.format.apply(module.exports, arguments));
};

/**
 * Inherit the prototype methods from one constructor into another.
 *
 * The Function.prototype.inherits from lang.js rewritten as a standalone
 * function (not on Function.prototype). NOTE: If this file is to be loaded
 * during bootstrapping this function needs to be rewritten using some native
 * functions as prototype setup using normal JavaScript does not work as
 * expected during bootstrapping (see mirror.js in r114903).
 *
 * @param {function} ctor Constructor function which needs to inherit the
 *     prototype.
 * @param {function} superCtor Constructor function to inherit prototype from.
 */ module.exports.inherits = (parcelRequire("k5o3C"));
module.exports._extend = function(origin, add) {
    // Don't do anything if add isn't an object
    if (!add || !$278fabd3bcda271a$var$isObject(add)) return origin;
    var keys = Object.keys(add);
    var i = keys.length;
    while(i--)origin[keys[i]] = add[keys[i]];
    return origin;
};
function $278fabd3bcda271a$var$hasOwnProperty(obj, prop) {
    return Object.prototype.hasOwnProperty.call(obj, prop);
}
var $278fabd3bcda271a$var$kCustomPromisifiedSymbol = typeof Symbol !== 'undefined' ? Symbol('util.promisify.custom') : undefined;
module.exports.promisify = function promisify(original) {
    if (typeof original !== 'function') throw new TypeError('The "original" argument must be of type Function');
    if ($278fabd3bcda271a$var$kCustomPromisifiedSymbol && original[$278fabd3bcda271a$var$kCustomPromisifiedSymbol]) {
        var fn = original[$278fabd3bcda271a$var$kCustomPromisifiedSymbol];
        if (typeof fn !== 'function') throw new TypeError('The "util.promisify.custom" argument must be of type Function');
        Object.defineProperty(fn, $278fabd3bcda271a$var$kCustomPromisifiedSymbol, {
            value: fn,
            enumerable: false,
            writable: false,
            configurable: true
        });
        return fn;
    }
    function fn() {
        var promiseResolve, promiseReject;
        var promise = new Promise(function(resolve, reject) {
            promiseResolve = resolve;
            promiseReject = reject;
        });
        var args = [];
        for(var i = 0; i < arguments.length; i++)args.push(arguments[i]);
        args.push(function(err, value) {
            if (err) promiseReject(err);
            else promiseResolve(value);
        });
        try {
            original.apply(this, args);
        } catch (err) {
            promiseReject(err);
        }
        return promise;
    }
    Object.setPrototypeOf(fn, Object.getPrototypeOf(original));
    if ($278fabd3bcda271a$var$kCustomPromisifiedSymbol) Object.defineProperty(fn, $278fabd3bcda271a$var$kCustomPromisifiedSymbol, {
        value: fn,
        enumerable: false,
        writable: false,
        configurable: true
    });
    return Object.defineProperties(fn, $278fabd3bcda271a$var$getOwnPropertyDescriptors(original));
};
module.exports.promisify.custom = $278fabd3bcda271a$var$kCustomPromisifiedSymbol;
function $278fabd3bcda271a$var$callbackifyOnRejected(reason, cb) {
    // `!reason` guard inspired by bluebird (Ref: https://goo.gl/t5IS6M).
    // Because `null` is a special error value in callbacks which means "no error
    // occurred", we error-wrap so the callback consumer can distinguish between
    // "the promise rejected with null" or "the promise fulfilled with undefined".
    if (!reason) {
        var newReason = new Error('Promise was rejected with a falsy value');
        newReason.reason = reason;
        reason = newReason;
    }
    return cb(reason);
}
function $278fabd3bcda271a$var$callbackify(original) {
    if (typeof original !== 'function') throw new TypeError('The "original" argument must be of type Function');
    // We DO NOT return the promise as it gives the user a false sense that
    // the promise is actually somehow related to the callback's execution
    // and that the callback throwing will reject the promise.
    function callbackified() {
        var args = [];
        for(var i = 0; i < arguments.length; i++)args.push(arguments[i]);
        var maybeCb = args.pop();
        if (typeof maybeCb !== 'function') throw new TypeError('The last argument must be of type Function');
        var self = this;
        var cb = function() {
            return maybeCb.apply(self, arguments);
        };
        // In true node style we process the callback on `nextTick` with all the
        // implications (stack, `uncaughtException`, `async_hooks`)
        original.apply(this, args).then(function(ret) {
            $hPtJY.nextTick(cb.bind(null, null, ret));
        }, function(rej) {
            $hPtJY.nextTick($278fabd3bcda271a$var$callbackifyOnRejected.bind(null, rej, cb));
        });
    }
    Object.setPrototypeOf(callbackified, Object.getPrototypeOf(original));
    Object.defineProperties(callbackified, $278fabd3bcda271a$var$getOwnPropertyDescriptors(original));
    return callbackified;
}
module.exports.callbackify = $278fabd3bcda271a$var$callbackify;

});
parcelRegister("hPtJY", function(module, exports) {
// shim for using process in browser
var $cfae44f0dfdf62c0$var$process = module.exports = {};
// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.
var $cfae44f0dfdf62c0$var$cachedSetTimeout;
var $cfae44f0dfdf62c0$var$cachedClearTimeout;
function $cfae44f0dfdf62c0$var$defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function $cfae44f0dfdf62c0$var$defaultClearTimeout() {
    throw new Error('clearTimeout has not been defined');
}
(function() {
    try {
        if (typeof setTimeout === 'function') $cfae44f0dfdf62c0$var$cachedSetTimeout = setTimeout;
        else $cfae44f0dfdf62c0$var$cachedSetTimeout = $cfae44f0dfdf62c0$var$defaultSetTimout;
    } catch (e) {
        $cfae44f0dfdf62c0$var$cachedSetTimeout = $cfae44f0dfdf62c0$var$defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') $cfae44f0dfdf62c0$var$cachedClearTimeout = clearTimeout;
        else $cfae44f0dfdf62c0$var$cachedClearTimeout = $cfae44f0dfdf62c0$var$defaultClearTimeout;
    } catch (e) {
        $cfae44f0dfdf62c0$var$cachedClearTimeout = $cfae44f0dfdf62c0$var$defaultClearTimeout;
    }
})();
function $cfae44f0dfdf62c0$var$runTimeout(fun) {
    if ($cfae44f0dfdf62c0$var$cachedSetTimeout === setTimeout) //normal enviroments in sane situations
    return setTimeout(fun, 0);
    // if setTimeout wasn't available but was latter defined
    if (($cfae44f0dfdf62c0$var$cachedSetTimeout === $cfae44f0dfdf62c0$var$defaultSetTimout || !$cfae44f0dfdf62c0$var$cachedSetTimeout) && setTimeout) {
        $cfae44f0dfdf62c0$var$cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return $cfae44f0dfdf62c0$var$cachedSetTimeout(fun, 0);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return $cfae44f0dfdf62c0$var$cachedSetTimeout.call(null, fun, 0);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return $cfae44f0dfdf62c0$var$cachedSetTimeout.call(this, fun, 0);
        }
    }
}
function $cfae44f0dfdf62c0$var$runClearTimeout(marker) {
    if ($cfae44f0dfdf62c0$var$cachedClearTimeout === clearTimeout) //normal enviroments in sane situations
    return clearTimeout(marker);
    // if clearTimeout wasn't available but was latter defined
    if (($cfae44f0dfdf62c0$var$cachedClearTimeout === $cfae44f0dfdf62c0$var$defaultClearTimeout || !$cfae44f0dfdf62c0$var$cachedClearTimeout) && clearTimeout) {
        $cfae44f0dfdf62c0$var$cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return $cfae44f0dfdf62c0$var$cachedClearTimeout(marker);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return $cfae44f0dfdf62c0$var$cachedClearTimeout.call(null, marker);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return $cfae44f0dfdf62c0$var$cachedClearTimeout.call(this, marker);
        }
    }
}
var $cfae44f0dfdf62c0$var$queue = [];
var $cfae44f0dfdf62c0$var$draining = false;
var $cfae44f0dfdf62c0$var$currentQueue;
var $cfae44f0dfdf62c0$var$queueIndex = -1;
function $cfae44f0dfdf62c0$var$cleanUpNextTick() {
    if (!$cfae44f0dfdf62c0$var$draining || !$cfae44f0dfdf62c0$var$currentQueue) return;
    $cfae44f0dfdf62c0$var$draining = false;
    if ($cfae44f0dfdf62c0$var$currentQueue.length) $cfae44f0dfdf62c0$var$queue = $cfae44f0dfdf62c0$var$currentQueue.concat($cfae44f0dfdf62c0$var$queue);
    else $cfae44f0dfdf62c0$var$queueIndex = -1;
    if ($cfae44f0dfdf62c0$var$queue.length) $cfae44f0dfdf62c0$var$drainQueue();
}
function $cfae44f0dfdf62c0$var$drainQueue() {
    if ($cfae44f0dfdf62c0$var$draining) return;
    var timeout = $cfae44f0dfdf62c0$var$runTimeout($cfae44f0dfdf62c0$var$cleanUpNextTick);
    $cfae44f0dfdf62c0$var$draining = true;
    var len = $cfae44f0dfdf62c0$var$queue.length;
    while(len){
        $cfae44f0dfdf62c0$var$currentQueue = $cfae44f0dfdf62c0$var$queue;
        $cfae44f0dfdf62c0$var$queue = [];
        while(++$cfae44f0dfdf62c0$var$queueIndex < len)if ($cfae44f0dfdf62c0$var$currentQueue) $cfae44f0dfdf62c0$var$currentQueue[$cfae44f0dfdf62c0$var$queueIndex].run();
        $cfae44f0dfdf62c0$var$queueIndex = -1;
        len = $cfae44f0dfdf62c0$var$queue.length;
    }
    $cfae44f0dfdf62c0$var$currentQueue = null;
    $cfae44f0dfdf62c0$var$draining = false;
    $cfae44f0dfdf62c0$var$runClearTimeout(timeout);
}
$cfae44f0dfdf62c0$var$process.nextTick = function(fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) for(var i = 1; i < arguments.length; i++)args[i - 1] = arguments[i];
    $cfae44f0dfdf62c0$var$queue.push(new $cfae44f0dfdf62c0$var$Item(fun, args));
    if ($cfae44f0dfdf62c0$var$queue.length === 1 && !$cfae44f0dfdf62c0$var$draining) $cfae44f0dfdf62c0$var$runTimeout($cfae44f0dfdf62c0$var$drainQueue);
};
// v8 likes predictible objects
function $cfae44f0dfdf62c0$var$Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
$cfae44f0dfdf62c0$var$Item.prototype.run = function() {
    this.fun.apply(null, this.array);
};
$cfae44f0dfdf62c0$var$process.title = 'browser';
$cfae44f0dfdf62c0$var$process.browser = true;
$cfae44f0dfdf62c0$var$process.env = {};
$cfae44f0dfdf62c0$var$process.argv = [];
$cfae44f0dfdf62c0$var$process.version = ''; // empty string to avoid regexp issues
$cfae44f0dfdf62c0$var$process.versions = {};
function $cfae44f0dfdf62c0$var$noop() {}
$cfae44f0dfdf62c0$var$process.on = $cfae44f0dfdf62c0$var$noop;
$cfae44f0dfdf62c0$var$process.addListener = $cfae44f0dfdf62c0$var$noop;
$cfae44f0dfdf62c0$var$process.once = $cfae44f0dfdf62c0$var$noop;
$cfae44f0dfdf62c0$var$process.off = $cfae44f0dfdf62c0$var$noop;
$cfae44f0dfdf62c0$var$process.removeListener = $cfae44f0dfdf62c0$var$noop;
$cfae44f0dfdf62c0$var$process.removeAllListeners = $cfae44f0dfdf62c0$var$noop;
$cfae44f0dfdf62c0$var$process.emit = $cfae44f0dfdf62c0$var$noop;
$cfae44f0dfdf62c0$var$process.prependListener = $cfae44f0dfdf62c0$var$noop;
$cfae44f0dfdf62c0$var$process.prependOnceListener = $cfae44f0dfdf62c0$var$noop;
$cfae44f0dfdf62c0$var$process.listeners = function(name) {
    return [];
};
$cfae44f0dfdf62c0$var$process.binding = function(name) {
    throw new Error('process.binding is not supported');
};
$cfae44f0dfdf62c0$var$process.cwd = function() {
    return '/';
};
$cfae44f0dfdf62c0$var$process.chdir = function(dir) {
    throw new Error('process.chdir is not supported');
};
$cfae44f0dfdf62c0$var$process.umask = function() {
    return 0;
};

});

parcelRegister("7ylTZ", function(module, exports) {
// Currently in sync with Node.js lib/internal/util/types.js
// https://github.com/nodejs/node/commit/112cc7c27551254aa2b17098fb774867f05ed0d9
'use strict';

var $95b5P = parcelRequire("95b5P");

var $e8xYU = parcelRequire("e8xYU");

var $lzUQS = parcelRequire("lzUQS");

var $2ligd = parcelRequire("2ligd");
function $57fcb2b0d42c6ab6$var$uncurryThis(f) {
    return f.call.bind(f);
}
var $57fcb2b0d42c6ab6$var$BigIntSupported = typeof BigInt !== 'undefined';
var $57fcb2b0d42c6ab6$var$SymbolSupported = typeof Symbol !== 'undefined';
var $57fcb2b0d42c6ab6$var$ObjectToString = $57fcb2b0d42c6ab6$var$uncurryThis(Object.prototype.toString);
var $57fcb2b0d42c6ab6$var$numberValue = $57fcb2b0d42c6ab6$var$uncurryThis(Number.prototype.valueOf);
var $57fcb2b0d42c6ab6$var$stringValue = $57fcb2b0d42c6ab6$var$uncurryThis(String.prototype.valueOf);
var $57fcb2b0d42c6ab6$var$booleanValue = $57fcb2b0d42c6ab6$var$uncurryThis(Boolean.prototype.valueOf);
if ($57fcb2b0d42c6ab6$var$BigIntSupported) var $57fcb2b0d42c6ab6$var$bigIntValue = $57fcb2b0d42c6ab6$var$uncurryThis(BigInt.prototype.valueOf);
if ($57fcb2b0d42c6ab6$var$SymbolSupported) var $57fcb2b0d42c6ab6$var$symbolValue = $57fcb2b0d42c6ab6$var$uncurryThis(Symbol.prototype.valueOf);
function $57fcb2b0d42c6ab6$var$checkBoxedPrimitive(value, prototypeValueOf) {
    if (typeof value !== 'object') return false;
    try {
        prototypeValueOf(value);
        return true;
    } catch (e) {
        return false;
    }
}
module.exports.isArgumentsObject = $95b5P;
module.exports.isGeneratorFunction = $e8xYU;
module.exports.isTypedArray = $2ligd;
// Taken from here and modified for better browser support
// https://github.com/sindresorhus/p-is-promise/blob/cda35a513bda03f977ad5cde3a079d237e82d7ef/index.js
function $57fcb2b0d42c6ab6$var$isPromise(input) {
    return typeof Promise !== 'undefined' && input instanceof Promise || input !== null && typeof input === 'object' && typeof input.then === 'function' && typeof input.catch === 'function';
}
module.exports.isPromise = $57fcb2b0d42c6ab6$var$isPromise;
function $57fcb2b0d42c6ab6$var$isArrayBufferView(value) {
    if (typeof ArrayBuffer !== 'undefined' && ArrayBuffer.isView) return ArrayBuffer.isView(value);
    return $2ligd(value) || $57fcb2b0d42c6ab6$var$isDataView(value);
}
module.exports.isArrayBufferView = $57fcb2b0d42c6ab6$var$isArrayBufferView;
function $57fcb2b0d42c6ab6$var$isUint8Array(value) {
    return $lzUQS(value) === 'Uint8Array';
}
module.exports.isUint8Array = $57fcb2b0d42c6ab6$var$isUint8Array;
function $57fcb2b0d42c6ab6$var$isUint8ClampedArray(value) {
    return $lzUQS(value) === 'Uint8ClampedArray';
}
module.exports.isUint8ClampedArray = $57fcb2b0d42c6ab6$var$isUint8ClampedArray;
function $57fcb2b0d42c6ab6$var$isUint16Array(value) {
    return $lzUQS(value) === 'Uint16Array';
}
module.exports.isUint16Array = $57fcb2b0d42c6ab6$var$isUint16Array;
function $57fcb2b0d42c6ab6$var$isUint32Array(value) {
    return $lzUQS(value) === 'Uint32Array';
}
module.exports.isUint32Array = $57fcb2b0d42c6ab6$var$isUint32Array;
function $57fcb2b0d42c6ab6$var$isInt8Array(value) {
    return $lzUQS(value) === 'Int8Array';
}
module.exports.isInt8Array = $57fcb2b0d42c6ab6$var$isInt8Array;
function $57fcb2b0d42c6ab6$var$isInt16Array(value) {
    return $lzUQS(value) === 'Int16Array';
}
module.exports.isInt16Array = $57fcb2b0d42c6ab6$var$isInt16Array;
function $57fcb2b0d42c6ab6$var$isInt32Array(value) {
    return $lzUQS(value) === 'Int32Array';
}
module.exports.isInt32Array = $57fcb2b0d42c6ab6$var$isInt32Array;
function $57fcb2b0d42c6ab6$var$isFloat32Array(value) {
    return $lzUQS(value) === 'Float32Array';
}
module.exports.isFloat32Array = $57fcb2b0d42c6ab6$var$isFloat32Array;
function $57fcb2b0d42c6ab6$var$isFloat64Array(value) {
    return $lzUQS(value) === 'Float64Array';
}
module.exports.isFloat64Array = $57fcb2b0d42c6ab6$var$isFloat64Array;
function $57fcb2b0d42c6ab6$var$isBigInt64Array(value) {
    return $lzUQS(value) === 'BigInt64Array';
}
module.exports.isBigInt64Array = $57fcb2b0d42c6ab6$var$isBigInt64Array;
function $57fcb2b0d42c6ab6$var$isBigUint64Array(value) {
    return $lzUQS(value) === 'BigUint64Array';
}
module.exports.isBigUint64Array = $57fcb2b0d42c6ab6$var$isBigUint64Array;
function $57fcb2b0d42c6ab6$var$isMapToString(value) {
    return $57fcb2b0d42c6ab6$var$ObjectToString(value) === '[object Map]';
}
$57fcb2b0d42c6ab6$var$isMapToString.working = typeof Map !== 'undefined' && $57fcb2b0d42c6ab6$var$isMapToString(new Map());
function $57fcb2b0d42c6ab6$var$isMap(value) {
    if (typeof Map === 'undefined') return false;
    return $57fcb2b0d42c6ab6$var$isMapToString.working ? $57fcb2b0d42c6ab6$var$isMapToString(value) : value instanceof Map;
}
module.exports.isMap = $57fcb2b0d42c6ab6$var$isMap;
function $57fcb2b0d42c6ab6$var$isSetToString(value) {
    return $57fcb2b0d42c6ab6$var$ObjectToString(value) === '[object Set]';
}
$57fcb2b0d42c6ab6$var$isSetToString.working = typeof Set !== 'undefined' && $57fcb2b0d42c6ab6$var$isSetToString(new Set());
function $57fcb2b0d42c6ab6$var$isSet(value) {
    if (typeof Set === 'undefined') return false;
    return $57fcb2b0d42c6ab6$var$isSetToString.working ? $57fcb2b0d42c6ab6$var$isSetToString(value) : value instanceof Set;
}
module.exports.isSet = $57fcb2b0d42c6ab6$var$isSet;
function $57fcb2b0d42c6ab6$var$isWeakMapToString(value) {
    return $57fcb2b0d42c6ab6$var$ObjectToString(value) === '[object WeakMap]';
}
$57fcb2b0d42c6ab6$var$isWeakMapToString.working = typeof WeakMap !== 'undefined' && $57fcb2b0d42c6ab6$var$isWeakMapToString(new WeakMap());
function $57fcb2b0d42c6ab6$var$isWeakMap(value) {
    if (typeof WeakMap === 'undefined') return false;
    return $57fcb2b0d42c6ab6$var$isWeakMapToString.working ? $57fcb2b0d42c6ab6$var$isWeakMapToString(value) : value instanceof WeakMap;
}
module.exports.isWeakMap = $57fcb2b0d42c6ab6$var$isWeakMap;
function $57fcb2b0d42c6ab6$var$isWeakSetToString(value) {
    return $57fcb2b0d42c6ab6$var$ObjectToString(value) === '[object WeakSet]';
}
$57fcb2b0d42c6ab6$var$isWeakSetToString.working = typeof WeakSet !== 'undefined' && $57fcb2b0d42c6ab6$var$isWeakSetToString(new WeakSet());
function $57fcb2b0d42c6ab6$var$isWeakSet(value) {
    return $57fcb2b0d42c6ab6$var$isWeakSetToString(value);
}
module.exports.isWeakSet = $57fcb2b0d42c6ab6$var$isWeakSet;
function $57fcb2b0d42c6ab6$var$isArrayBufferToString(value) {
    return $57fcb2b0d42c6ab6$var$ObjectToString(value) === '[object ArrayBuffer]';
}
$57fcb2b0d42c6ab6$var$isArrayBufferToString.working = typeof ArrayBuffer !== 'undefined' && $57fcb2b0d42c6ab6$var$isArrayBufferToString(new ArrayBuffer());
function $57fcb2b0d42c6ab6$var$isArrayBuffer(value) {
    if (typeof ArrayBuffer === 'undefined') return false;
    return $57fcb2b0d42c6ab6$var$isArrayBufferToString.working ? $57fcb2b0d42c6ab6$var$isArrayBufferToString(value) : value instanceof ArrayBuffer;
}
module.exports.isArrayBuffer = $57fcb2b0d42c6ab6$var$isArrayBuffer;
function $57fcb2b0d42c6ab6$var$isDataViewToString(value) {
    return $57fcb2b0d42c6ab6$var$ObjectToString(value) === '[object DataView]';
}
$57fcb2b0d42c6ab6$var$isDataViewToString.working = typeof ArrayBuffer !== 'undefined' && typeof DataView !== 'undefined' && $57fcb2b0d42c6ab6$var$isDataViewToString(new DataView(new ArrayBuffer(1), 0, 1));
function $57fcb2b0d42c6ab6$var$isDataView(value) {
    if (typeof DataView === 'undefined') return false;
    return $57fcb2b0d42c6ab6$var$isDataViewToString.working ? $57fcb2b0d42c6ab6$var$isDataViewToString(value) : value instanceof DataView;
}
module.exports.isDataView = $57fcb2b0d42c6ab6$var$isDataView;
// Store a copy of SharedArrayBuffer in case it's deleted elsewhere
var $57fcb2b0d42c6ab6$var$SharedArrayBufferCopy = typeof SharedArrayBuffer !== 'undefined' ? SharedArrayBuffer : undefined;
function $57fcb2b0d42c6ab6$var$isSharedArrayBufferToString(value) {
    return $57fcb2b0d42c6ab6$var$ObjectToString(value) === '[object SharedArrayBuffer]';
}
function $57fcb2b0d42c6ab6$var$isSharedArrayBuffer(value) {
    if (typeof $57fcb2b0d42c6ab6$var$SharedArrayBufferCopy === 'undefined') return false;
    if (typeof $57fcb2b0d42c6ab6$var$isSharedArrayBufferToString.working === 'undefined') $57fcb2b0d42c6ab6$var$isSharedArrayBufferToString.working = $57fcb2b0d42c6ab6$var$isSharedArrayBufferToString(new $57fcb2b0d42c6ab6$var$SharedArrayBufferCopy());
    return $57fcb2b0d42c6ab6$var$isSharedArrayBufferToString.working ? $57fcb2b0d42c6ab6$var$isSharedArrayBufferToString(value) : value instanceof $57fcb2b0d42c6ab6$var$SharedArrayBufferCopy;
}
module.exports.isSharedArrayBuffer = $57fcb2b0d42c6ab6$var$isSharedArrayBuffer;
function $57fcb2b0d42c6ab6$var$isAsyncFunction(value) {
    return $57fcb2b0d42c6ab6$var$ObjectToString(value) === '[object AsyncFunction]';
}
module.exports.isAsyncFunction = $57fcb2b0d42c6ab6$var$isAsyncFunction;
function $57fcb2b0d42c6ab6$var$isMapIterator(value) {
    return $57fcb2b0d42c6ab6$var$ObjectToString(value) === '[object Map Iterator]';
}
module.exports.isMapIterator = $57fcb2b0d42c6ab6$var$isMapIterator;
function $57fcb2b0d42c6ab6$var$isSetIterator(value) {
    return $57fcb2b0d42c6ab6$var$ObjectToString(value) === '[object Set Iterator]';
}
module.exports.isSetIterator = $57fcb2b0d42c6ab6$var$isSetIterator;
function $57fcb2b0d42c6ab6$var$isGeneratorObject(value) {
    return $57fcb2b0d42c6ab6$var$ObjectToString(value) === '[object Generator]';
}
module.exports.isGeneratorObject = $57fcb2b0d42c6ab6$var$isGeneratorObject;
function $57fcb2b0d42c6ab6$var$isWebAssemblyCompiledModule(value) {
    return $57fcb2b0d42c6ab6$var$ObjectToString(value) === '[object WebAssembly.Module]';
}
module.exports.isWebAssemblyCompiledModule = $57fcb2b0d42c6ab6$var$isWebAssemblyCompiledModule;
function $57fcb2b0d42c6ab6$var$isNumberObject(value) {
    return $57fcb2b0d42c6ab6$var$checkBoxedPrimitive(value, $57fcb2b0d42c6ab6$var$numberValue);
}
module.exports.isNumberObject = $57fcb2b0d42c6ab6$var$isNumberObject;
function $57fcb2b0d42c6ab6$var$isStringObject(value) {
    return $57fcb2b0d42c6ab6$var$checkBoxedPrimitive(value, $57fcb2b0d42c6ab6$var$stringValue);
}
module.exports.isStringObject = $57fcb2b0d42c6ab6$var$isStringObject;
function $57fcb2b0d42c6ab6$var$isBooleanObject(value) {
    return $57fcb2b0d42c6ab6$var$checkBoxedPrimitive(value, $57fcb2b0d42c6ab6$var$booleanValue);
}
module.exports.isBooleanObject = $57fcb2b0d42c6ab6$var$isBooleanObject;
function $57fcb2b0d42c6ab6$var$isBigIntObject(value) {
    return $57fcb2b0d42c6ab6$var$BigIntSupported && $57fcb2b0d42c6ab6$var$checkBoxedPrimitive(value, $57fcb2b0d42c6ab6$var$bigIntValue);
}
module.exports.isBigIntObject = $57fcb2b0d42c6ab6$var$isBigIntObject;
function $57fcb2b0d42c6ab6$var$isSymbolObject(value) {
    return $57fcb2b0d42c6ab6$var$SymbolSupported && $57fcb2b0d42c6ab6$var$checkBoxedPrimitive(value, $57fcb2b0d42c6ab6$var$symbolValue);
}
module.exports.isSymbolObject = $57fcb2b0d42c6ab6$var$isSymbolObject;
function $57fcb2b0d42c6ab6$var$isBoxedPrimitive(value) {
    return $57fcb2b0d42c6ab6$var$isNumberObject(value) || $57fcb2b0d42c6ab6$var$isStringObject(value) || $57fcb2b0d42c6ab6$var$isBooleanObject(value) || $57fcb2b0d42c6ab6$var$isBigIntObject(value) || $57fcb2b0d42c6ab6$var$isSymbolObject(value);
}
module.exports.isBoxedPrimitive = $57fcb2b0d42c6ab6$var$isBoxedPrimitive;
function $57fcb2b0d42c6ab6$var$isAnyArrayBuffer(value) {
    return typeof Uint8Array !== 'undefined' && ($57fcb2b0d42c6ab6$var$isArrayBuffer(value) || $57fcb2b0d42c6ab6$var$isSharedArrayBuffer(value));
}
module.exports.isAnyArrayBuffer = $57fcb2b0d42c6ab6$var$isAnyArrayBuffer;
[
    'isProxy',
    'isExternal',
    'isModuleNamespaceObject'
].forEach(function(method) {
    Object.defineProperty(module.exports, method, {
        enumerable: false,
        value: function() {
            throw new Error(method + ' is not supported in userland');
        }
    });
});

});
parcelRegister("95b5P", function(module, exports) {
'use strict';

var $69cd2f8338ae8d2d$var$hasToStringTag = (parcelRequire("34kOE"))();

var $8oBT0 = parcelRequire("8oBT0");
var $69cd2f8338ae8d2d$var$$toString = $8oBT0('Object.prototype.toString');
/** @type {import('.')} */ var $69cd2f8338ae8d2d$var$isStandardArguments = function isArguments(value) {
    if ($69cd2f8338ae8d2d$var$hasToStringTag && value && typeof value === 'object' && Symbol.toStringTag in value) return false;
    return $69cd2f8338ae8d2d$var$$toString(value) === '[object Arguments]';
};
/** @type {import('.')} */ var $69cd2f8338ae8d2d$var$isLegacyArguments = function isArguments(value) {
    if ($69cd2f8338ae8d2d$var$isStandardArguments(value)) return true;
    return value !== null && typeof value === 'object' && 'length' in value && typeof value.length === 'number' && value.length >= 0 && $69cd2f8338ae8d2d$var$$toString(value) !== '[object Array]' && 'callee' in value && $69cd2f8338ae8d2d$var$$toString(value.callee) === '[object Function]';
};
var $69cd2f8338ae8d2d$var$supportsStandardArguments = function() {
    return $69cd2f8338ae8d2d$var$isStandardArguments(arguments);
}();
// @ts-expect-error TODO make this not error
$69cd2f8338ae8d2d$var$isStandardArguments.isLegacyArguments = $69cd2f8338ae8d2d$var$isLegacyArguments; // for tests
/** @type {import('.')} */ module.exports = $69cd2f8338ae8d2d$var$supportsStandardArguments ? $69cd2f8338ae8d2d$var$isStandardArguments : $69cd2f8338ae8d2d$var$isLegacyArguments;

});
parcelRegister("34kOE", function(module, exports) {
'use strict';

var $iOGVa = parcelRequire("iOGVa");
/** @type {import('.')} */ module.exports = function hasToStringTagShams() {
    return $iOGVa() && !!Symbol.toStringTag;
};

});
parcelRegister("iOGVa", function(module, exports) {
'use strict';
/** @type {import('./shams')} */ /* eslint complexity: [2, 18], max-statements: [2, 33] */ module.exports = function hasSymbols() {
    if (typeof Symbol !== 'function' || typeof Object.getOwnPropertySymbols !== 'function') return false;
    if (typeof Symbol.iterator === 'symbol') return true;
    /** @type {{ [k in symbol]?: unknown }} */ var obj = {};
    var sym = Symbol('test');
    var symObj = Object(sym);
    if (typeof sym === 'string') return false;
    if (Object.prototype.toString.call(sym) !== '[object Symbol]') return false;
    if (Object.prototype.toString.call(symObj) !== '[object Symbol]') return false;
    // temp disabled per https://github.com/ljharb/object.assign/issues/17
    // if (sym instanceof Symbol) { return false; }
    // temp disabled per https://github.com/WebReflection/get-own-property-symbols/issues/4
    // if (!(symObj instanceof Symbol)) { return false; }
    // if (typeof Symbol.prototype.toString !== 'function') { return false; }
    // if (String(sym) !== Symbol.prototype.toString.call(sym)) { return false; }
    var symVal = 42;
    obj[sym] = symVal;
    for(var _ in obj)return false;
     // eslint-disable-line no-restricted-syntax, no-unreachable-loop
    if (typeof Object.keys === 'function' && Object.keys(obj).length !== 0) return false;
    if (typeof Object.getOwnPropertyNames === 'function' && Object.getOwnPropertyNames(obj).length !== 0) return false;
    var syms = Object.getOwnPropertySymbols(obj);
    if (syms.length !== 1 || syms[0] !== sym) return false;
    if (!Object.prototype.propertyIsEnumerable.call(obj, sym)) return false;
    if (typeof Object.getOwnPropertyDescriptor === 'function') {
        // eslint-disable-next-line no-extra-parens
        var descriptor = /** @type {PropertyDescriptor} */ Object.getOwnPropertyDescriptor(obj, sym);
        if (descriptor.value !== symVal || descriptor.enumerable !== true) return false;
    }
    return true;
};

});


parcelRegister("8oBT0", function(module, exports) {
'use strict';

var $arPKQ = parcelRequire("arPKQ");

var $4W5Ez = parcelRequire("4W5Ez");
/** @type {(thisArg: string, searchString: string, position?: number) => number} */ var $61cdf40a068f775d$var$$indexOf = $4W5Ez([
    $arPKQ('%String.prototype.indexOf%')
]);
/** @type {import('.')} */ module.exports = function callBoundIntrinsic(name, allowMissing) {
    /* eslint no-extra-parens: 0 */ var intrinsic = /** @type {(this: unknown, ...args: unknown[]) => unknown} */ $arPKQ(name, !!allowMissing);
    if (typeof intrinsic === 'function' && $61cdf40a068f775d$var$$indexOf(name, '.prototype.') > -1) return $4W5Ez(/** @type {const} */ [
        intrinsic
    ]);
    return intrinsic;
};

});
parcelRegister("arPKQ", function(module, exports) {
'use strict';
var $79b492659a99b6c8$var$undefined1;

var $jcNaC = parcelRequire("jcNaC");

var $46vTc = parcelRequire("46vTc");

var $cRlsM = parcelRequire("cRlsM");

var $6nccP = parcelRequire("6nccP");

var $bhcUq = parcelRequire("bhcUq");

var $3xtAj = parcelRequire("3xtAj");

var $eEvec = parcelRequire("eEvec");

var $hmlBF = parcelRequire("hmlBF");

var $bCvJd = parcelRequire("bCvJd");

var $5PYPA = parcelRequire("5PYPA");

var $jdsJi = parcelRequire("jdsJi");

var $1yHRw = parcelRequire("1yHRw");

var $i38ez = parcelRequire("i38ez");

var $7F4t8 = parcelRequire("7F4t8");

var $liuGg = parcelRequire("liuGg");
var $79b492659a99b6c8$var$$Function = Function;
// eslint-disable-next-line consistent-return
var $79b492659a99b6c8$var$getEvalledConstructor = function(expressionSyntax) {
    try {
        return $79b492659a99b6c8$var$$Function('"use strict"; return (' + expressionSyntax + ').constructor;')();
    } catch (e) {}
};

var $5aNmz = parcelRequire("5aNmz");

var $9GnfT = parcelRequire("9GnfT");
var $79b492659a99b6c8$var$throwTypeError = function() {
    throw new $eEvec();
};
var $79b492659a99b6c8$var$ThrowTypeError = $5aNmz ? function() {
    try {
        // eslint-disable-next-line no-unused-expressions, no-caller, no-restricted-properties
        arguments.callee; // IE 8 does not throw here
        return $79b492659a99b6c8$var$throwTypeError;
    } catch (calleeThrows) {
        try {
            // IE 8 throws on Object.getOwnPropertyDescriptor(arguments, '')
            return $5aNmz(arguments, 'callee').get;
        } catch (gOPDthrows) {
            return $79b492659a99b6c8$var$throwTypeError;
        }
    }
}() : $79b492659a99b6c8$var$throwTypeError;

var $79b492659a99b6c8$var$hasSymbols = (parcelRequire("5Faxr"))();

var $fJlcU = parcelRequire("fJlcU");

var $8Jifo = parcelRequire("8Jifo");

var $fAaF4 = parcelRequire("fAaF4");

var $aIFlr = parcelRequire("aIFlr");

var $72NGy = parcelRequire("72NGy");
var $79b492659a99b6c8$var$needsEval = {};
var $79b492659a99b6c8$var$TypedArray = typeof Uint8Array === 'undefined' || !$fJlcU ? undefined : $fJlcU(Uint8Array);
var $79b492659a99b6c8$var$INTRINSICS = {
    __proto__: null,
    '%AggregateError%': typeof AggregateError === 'undefined' ? undefined : AggregateError,
    '%Array%': Array,
    '%ArrayBuffer%': typeof ArrayBuffer === 'undefined' ? undefined : ArrayBuffer,
    '%ArrayIteratorPrototype%': $79b492659a99b6c8$var$hasSymbols && $fJlcU ? $fJlcU([][Symbol.iterator]()) : undefined,
    '%AsyncFromSyncIteratorPrototype%': undefined,
    '%AsyncFunction%': $79b492659a99b6c8$var$needsEval,
    '%AsyncGenerator%': $79b492659a99b6c8$var$needsEval,
    '%AsyncGeneratorFunction%': $79b492659a99b6c8$var$needsEval,
    '%AsyncIteratorPrototype%': $79b492659a99b6c8$var$needsEval,
    '%Atomics%': typeof Atomics === 'undefined' ? undefined : Atomics,
    '%BigInt%': typeof BigInt === 'undefined' ? undefined : BigInt,
    '%BigInt64Array%': typeof BigInt64Array === 'undefined' ? undefined : BigInt64Array,
    '%BigUint64Array%': typeof BigUint64Array === 'undefined' ? undefined : BigUint64Array,
    '%Boolean%': Boolean,
    '%DataView%': typeof DataView === 'undefined' ? undefined : DataView,
    '%Date%': Date,
    '%decodeURI%': decodeURI,
    '%decodeURIComponent%': decodeURIComponent,
    '%encodeURI%': encodeURI,
    '%encodeURIComponent%': encodeURIComponent,
    '%Error%': $46vTc,
    '%eval%': eval,
    '%EvalError%': $cRlsM,
    '%Float16Array%': typeof Float16Array === 'undefined' ? undefined : Float16Array,
    '%Float32Array%': typeof Float32Array === 'undefined' ? undefined : Float32Array,
    '%Float64Array%': typeof Float64Array === 'undefined' ? undefined : Float64Array,
    '%FinalizationRegistry%': typeof FinalizationRegistry === 'undefined' ? undefined : FinalizationRegistry,
    '%Function%': $79b492659a99b6c8$var$$Function,
    '%GeneratorFunction%': $79b492659a99b6c8$var$needsEval,
    '%Int8Array%': typeof Int8Array === 'undefined' ? undefined : Int8Array,
    '%Int16Array%': typeof Int16Array === 'undefined' ? undefined : Int16Array,
    '%Int32Array%': typeof Int32Array === 'undefined' ? undefined : Int32Array,
    '%isFinite%': isFinite,
    '%isNaN%': isNaN,
    '%IteratorPrototype%': $79b492659a99b6c8$var$hasSymbols && $fJlcU ? $fJlcU($fJlcU([][Symbol.iterator]())) : undefined,
    '%JSON%': typeof JSON === 'object' ? JSON : undefined,
    '%Map%': typeof Map === 'undefined' ? undefined : Map,
    '%MapIteratorPrototype%': typeof Map === 'undefined' || !$79b492659a99b6c8$var$hasSymbols || !$fJlcU ? undefined : $fJlcU(new Map()[Symbol.iterator]()),
    '%Math%': Math,
    '%Number%': Number,
    '%Object%': $jcNaC,
    '%Object.getOwnPropertyDescriptor%': $5aNmz,
    '%parseFloat%': parseFloat,
    '%parseInt%': parseInt,
    '%Promise%': typeof Promise === 'undefined' ? undefined : Promise,
    '%Proxy%': typeof Proxy === 'undefined' ? undefined : Proxy,
    '%RangeError%': $6nccP,
    '%ReferenceError%': $bhcUq,
    '%Reflect%': typeof Reflect === 'undefined' ? undefined : Reflect,
    '%RegExp%': RegExp,
    '%Set%': typeof Set === 'undefined' ? undefined : Set,
    '%SetIteratorPrototype%': typeof Set === 'undefined' || !$79b492659a99b6c8$var$hasSymbols || !$fJlcU ? undefined : $fJlcU(new Set()[Symbol.iterator]()),
    '%SharedArrayBuffer%': typeof SharedArrayBuffer === 'undefined' ? undefined : SharedArrayBuffer,
    '%String%': String,
    '%StringIteratorPrototype%': $79b492659a99b6c8$var$hasSymbols && $fJlcU ? $fJlcU(''[Symbol.iterator]()) : undefined,
    '%Symbol%': $79b492659a99b6c8$var$hasSymbols ? Symbol : undefined,
    '%SyntaxError%': $3xtAj,
    '%ThrowTypeError%': $79b492659a99b6c8$var$ThrowTypeError,
    '%TypedArray%': $79b492659a99b6c8$var$TypedArray,
    '%TypeError%': $eEvec,
    '%Uint8Array%': typeof Uint8Array === 'undefined' ? undefined : Uint8Array,
    '%Uint8ClampedArray%': typeof Uint8ClampedArray === 'undefined' ? undefined : Uint8ClampedArray,
    '%Uint16Array%': typeof Uint16Array === 'undefined' ? undefined : Uint16Array,
    '%Uint32Array%': typeof Uint32Array === 'undefined' ? undefined : Uint32Array,
    '%URIError%': $hmlBF,
    '%WeakMap%': typeof WeakMap === 'undefined' ? undefined : WeakMap,
    '%WeakRef%': typeof WeakRef === 'undefined' ? undefined : WeakRef,
    '%WeakSet%': typeof WeakSet === 'undefined' ? undefined : WeakSet,
    '%Function.prototype.call%': $72NGy,
    '%Function.prototype.apply%': $aIFlr,
    '%Object.defineProperty%': $9GnfT,
    '%Object.getPrototypeOf%': $8Jifo,
    '%Math.abs%': $bCvJd,
    '%Math.floor%': $5PYPA,
    '%Math.max%': $jdsJi,
    '%Math.min%': $1yHRw,
    '%Math.pow%': $i38ez,
    '%Math.round%': $7F4t8,
    '%Math.sign%': $liuGg,
    '%Reflect.getPrototypeOf%': $fAaF4
};
if ($fJlcU) try {
    null.error; // eslint-disable-line no-unused-expressions
} catch (e) {
    // https://github.com/tc39/proposal-shadowrealm/pull/384#issuecomment-1364264229
    var $79b492659a99b6c8$var$errorProto = $fJlcU($fJlcU(e));
    $79b492659a99b6c8$var$INTRINSICS['%Error.prototype%'] = $79b492659a99b6c8$var$errorProto;
}
var $79b492659a99b6c8$var$doEval = function doEval(name) {
    var value;
    if (name === '%AsyncFunction%') value = $79b492659a99b6c8$var$getEvalledConstructor('async function () {}');
    else if (name === '%GeneratorFunction%') value = $79b492659a99b6c8$var$getEvalledConstructor('function* () {}');
    else if (name === '%AsyncGeneratorFunction%') value = $79b492659a99b6c8$var$getEvalledConstructor('async function* () {}');
    else if (name === '%AsyncGenerator%') {
        var fn = doEval('%AsyncGeneratorFunction%');
        if (fn) value = fn.prototype;
    } else if (name === '%AsyncIteratorPrototype%') {
        var gen = doEval('%AsyncGenerator%');
        if (gen && $fJlcU) value = $fJlcU(gen.prototype);
    }
    $79b492659a99b6c8$var$INTRINSICS[name] = value;
    return value;
};
var $79b492659a99b6c8$var$LEGACY_ALIASES = {
    __proto__: null,
    '%ArrayBufferPrototype%': [
        'ArrayBuffer',
        'prototype'
    ],
    '%ArrayPrototype%': [
        'Array',
        'prototype'
    ],
    '%ArrayProto_entries%': [
        'Array',
        'prototype',
        'entries'
    ],
    '%ArrayProto_forEach%': [
        'Array',
        'prototype',
        'forEach'
    ],
    '%ArrayProto_keys%': [
        'Array',
        'prototype',
        'keys'
    ],
    '%ArrayProto_values%': [
        'Array',
        'prototype',
        'values'
    ],
    '%AsyncFunctionPrototype%': [
        'AsyncFunction',
        'prototype'
    ],
    '%AsyncGenerator%': [
        'AsyncGeneratorFunction',
        'prototype'
    ],
    '%AsyncGeneratorPrototype%': [
        'AsyncGeneratorFunction',
        'prototype',
        'prototype'
    ],
    '%BooleanPrototype%': [
        'Boolean',
        'prototype'
    ],
    '%DataViewPrototype%': [
        'DataView',
        'prototype'
    ],
    '%DatePrototype%': [
        'Date',
        'prototype'
    ],
    '%ErrorPrototype%': [
        'Error',
        'prototype'
    ],
    '%EvalErrorPrototype%': [
        'EvalError',
        'prototype'
    ],
    '%Float32ArrayPrototype%': [
        'Float32Array',
        'prototype'
    ],
    '%Float64ArrayPrototype%': [
        'Float64Array',
        'prototype'
    ],
    '%FunctionPrototype%': [
        'Function',
        'prototype'
    ],
    '%Generator%': [
        'GeneratorFunction',
        'prototype'
    ],
    '%GeneratorPrototype%': [
        'GeneratorFunction',
        'prototype',
        'prototype'
    ],
    '%Int8ArrayPrototype%': [
        'Int8Array',
        'prototype'
    ],
    '%Int16ArrayPrototype%': [
        'Int16Array',
        'prototype'
    ],
    '%Int32ArrayPrototype%': [
        'Int32Array',
        'prototype'
    ],
    '%JSONParse%': [
        'JSON',
        'parse'
    ],
    '%JSONStringify%': [
        'JSON',
        'stringify'
    ],
    '%MapPrototype%': [
        'Map',
        'prototype'
    ],
    '%NumberPrototype%': [
        'Number',
        'prototype'
    ],
    '%ObjectPrototype%': [
        'Object',
        'prototype'
    ],
    '%ObjProto_toString%': [
        'Object',
        'prototype',
        'toString'
    ],
    '%ObjProto_valueOf%': [
        'Object',
        'prototype',
        'valueOf'
    ],
    '%PromisePrototype%': [
        'Promise',
        'prototype'
    ],
    '%PromiseProto_then%': [
        'Promise',
        'prototype',
        'then'
    ],
    '%Promise_all%': [
        'Promise',
        'all'
    ],
    '%Promise_reject%': [
        'Promise',
        'reject'
    ],
    '%Promise_resolve%': [
        'Promise',
        'resolve'
    ],
    '%RangeErrorPrototype%': [
        'RangeError',
        'prototype'
    ],
    '%ReferenceErrorPrototype%': [
        'ReferenceError',
        'prototype'
    ],
    '%RegExpPrototype%': [
        'RegExp',
        'prototype'
    ],
    '%SetPrototype%': [
        'Set',
        'prototype'
    ],
    '%SharedArrayBufferPrototype%': [
        'SharedArrayBuffer',
        'prototype'
    ],
    '%StringPrototype%': [
        'String',
        'prototype'
    ],
    '%SymbolPrototype%': [
        'Symbol',
        'prototype'
    ],
    '%SyntaxErrorPrototype%': [
        'SyntaxError',
        'prototype'
    ],
    '%TypedArrayPrototype%': [
        'TypedArray',
        'prototype'
    ],
    '%TypeErrorPrototype%': [
        'TypeError',
        'prototype'
    ],
    '%Uint8ArrayPrototype%': [
        'Uint8Array',
        'prototype'
    ],
    '%Uint8ClampedArrayPrototype%': [
        'Uint8ClampedArray',
        'prototype'
    ],
    '%Uint16ArrayPrototype%': [
        'Uint16Array',
        'prototype'
    ],
    '%Uint32ArrayPrototype%': [
        'Uint32Array',
        'prototype'
    ],
    '%URIErrorPrototype%': [
        'URIError',
        'prototype'
    ],
    '%WeakMapPrototype%': [
        'WeakMap',
        'prototype'
    ],
    '%WeakSetPrototype%': [
        'WeakSet',
        'prototype'
    ]
};

var $bAaqj = parcelRequire("bAaqj");

var $6YH8u = parcelRequire("6YH8u");
var $79b492659a99b6c8$var$$concat = $bAaqj.call($72NGy, Array.prototype.concat);
var $79b492659a99b6c8$var$$spliceApply = $bAaqj.call($aIFlr, Array.prototype.splice);
var $79b492659a99b6c8$var$$replace = $bAaqj.call($72NGy, String.prototype.replace);
var $79b492659a99b6c8$var$$strSlice = $bAaqj.call($72NGy, String.prototype.slice);
var $79b492659a99b6c8$var$$exec = $bAaqj.call($72NGy, RegExp.prototype.exec);
/* adapted from https://github.com/lodash/lodash/blob/4.17.15/dist/lodash.js#L6735-L6744 */ var $79b492659a99b6c8$var$rePropName = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g;
var $79b492659a99b6c8$var$reEscapeChar = /\\(\\)?/g; /** Used to match backslashes in property paths. */ 
var $79b492659a99b6c8$var$stringToPath = function stringToPath(string) {
    var first = $79b492659a99b6c8$var$$strSlice(string, 0, 1);
    var last = $79b492659a99b6c8$var$$strSlice(string, -1);
    if (first === '%' && last !== '%') throw new $3xtAj('invalid intrinsic syntax, expected closing `%`');
    else if (last === '%' && first !== '%') throw new $3xtAj('invalid intrinsic syntax, expected opening `%`');
    var result = [];
    $79b492659a99b6c8$var$$replace(string, $79b492659a99b6c8$var$rePropName, function(match, number, quote, subString) {
        result[result.length] = quote ? $79b492659a99b6c8$var$$replace(subString, $79b492659a99b6c8$var$reEscapeChar, '$1') : number || match;
    });
    return result;
};
/* end adaptation */ var $79b492659a99b6c8$var$getBaseIntrinsic = function getBaseIntrinsic(name, allowMissing) {
    var intrinsicName = name;
    var alias;
    if ($6YH8u($79b492659a99b6c8$var$LEGACY_ALIASES, intrinsicName)) {
        alias = $79b492659a99b6c8$var$LEGACY_ALIASES[intrinsicName];
        intrinsicName = '%' + alias[0] + '%';
    }
    if ($6YH8u($79b492659a99b6c8$var$INTRINSICS, intrinsicName)) {
        var value = $79b492659a99b6c8$var$INTRINSICS[intrinsicName];
        if (value === $79b492659a99b6c8$var$needsEval) value = $79b492659a99b6c8$var$doEval(intrinsicName);
        if (typeof value === 'undefined' && !allowMissing) throw new $eEvec('intrinsic ' + name + ' exists, but is not available. Please file an issue!');
        return {
            alias: alias,
            name: intrinsicName,
            value: value
        };
    }
    throw new $3xtAj('intrinsic ' + name + ' does not exist!');
};
module.exports = function GetIntrinsic(name, allowMissing) {
    if (typeof name !== 'string' || name.length === 0) throw new $eEvec('intrinsic name must be a non-empty string');
    if (arguments.length > 1 && typeof allowMissing !== 'boolean') throw new $eEvec('"allowMissing" argument must be a boolean');
    if ($79b492659a99b6c8$var$$exec(/^%?[^%]*%?$/, name) === null) throw new $3xtAj('`%` may not be present anywhere but at the beginning and end of the intrinsic name');
    var parts = $79b492659a99b6c8$var$stringToPath(name);
    var intrinsicBaseName = parts.length > 0 ? parts[0] : '';
    var intrinsic = $79b492659a99b6c8$var$getBaseIntrinsic('%' + intrinsicBaseName + '%', allowMissing);
    var intrinsicRealName = intrinsic.name;
    var value = intrinsic.value;
    var skipFurtherCaching = false;
    var alias = intrinsic.alias;
    if (alias) {
        intrinsicBaseName = alias[0];
        $79b492659a99b6c8$var$$spliceApply(parts, $79b492659a99b6c8$var$$concat([
            0,
            1
        ], alias));
    }
    for(var i = 1, isOwn = true; i < parts.length; i += 1){
        var part = parts[i];
        var first = $79b492659a99b6c8$var$$strSlice(part, 0, 1);
        var last = $79b492659a99b6c8$var$$strSlice(part, -1);
        if ((first === '"' || first === "'" || first === '`' || last === '"' || last === "'" || last === '`') && first !== last) throw new $3xtAj('property names with quotes must have matching quotes');
        if (part === 'constructor' || !isOwn) skipFurtherCaching = true;
        intrinsicBaseName += '.' + part;
        intrinsicRealName = '%' + intrinsicBaseName + '%';
        if ($6YH8u($79b492659a99b6c8$var$INTRINSICS, intrinsicRealName)) value = $79b492659a99b6c8$var$INTRINSICS[intrinsicRealName];
        else if (value != null) {
            if (!(part in value)) {
                if (!allowMissing) throw new $eEvec('base intrinsic for ' + name + ' exists, but the property is not available.');
                return void 0;
            }
            if ($5aNmz && i + 1 >= parts.length) {
                var desc = $5aNmz(value, part);
                isOwn = !!desc;
                // By convention, when a data property is converted to an accessor
                // property to emulate a data property that does not suffer from
                // the override mistake, that accessor's getter is marked with
                // an `originalValue` property. Here, when we detect this, we
                // uphold the illusion by pretending to see that original data
                // property, i.e., returning the value rather than the getter
                // itself.
                if (isOwn && 'get' in desc && !('originalValue' in desc.get)) value = desc.get;
                else value = value[part];
            } else {
                isOwn = $6YH8u(value, part);
                value = value[part];
            }
            if (isOwn && !skipFurtherCaching) $79b492659a99b6c8$var$INTRINSICS[intrinsicRealName] = value;
        }
    }
    return value;
};

});
parcelRegister("jcNaC", function(module, exports) {
'use strict';
/** @type {import('.')} */ module.exports = Object;

});

parcelRegister("46vTc", function(module, exports) {
'use strict';
/** @type {import('.')} */ module.exports = Error;

});

parcelRegister("cRlsM", function(module, exports) {
'use strict';
/** @type {import('./eval')} */ module.exports = EvalError;

});

parcelRegister("6nccP", function(module, exports) {
'use strict';
/** @type {import('./range')} */ module.exports = RangeError;

});

parcelRegister("bhcUq", function(module, exports) {
'use strict';
/** @type {import('./ref')} */ module.exports = ReferenceError;

});

parcelRegister("3xtAj", function(module, exports) {
'use strict';
/** @type {import('./syntax')} */ module.exports = SyntaxError;

});

parcelRegister("eEvec", function(module, exports) {
'use strict';
/** @type {import('./type')} */ module.exports = TypeError;

});

parcelRegister("hmlBF", function(module, exports) {
'use strict';
/** @type {import('./uri')} */ module.exports = URIError;

});

parcelRegister("bCvJd", function(module, exports) {
'use strict';
/** @type {import('./abs')} */ module.exports = Math.abs;

});

parcelRegister("5PYPA", function(module, exports) {
'use strict';
/** @type {import('./floor')} */ module.exports = Math.floor;

});

parcelRegister("jdsJi", function(module, exports) {
'use strict';
/** @type {import('./max')} */ module.exports = Math.max;

});

parcelRegister("1yHRw", function(module, exports) {
'use strict';
/** @type {import('./min')} */ module.exports = Math.min;

});

parcelRegister("i38ez", function(module, exports) {
'use strict';
/** @type {import('./pow')} */ module.exports = Math.pow;

});

parcelRegister("7F4t8", function(module, exports) {
'use strict';
/** @type {import('./round')} */ module.exports = Math.round;

});

parcelRegister("liuGg", function(module, exports) {
'use strict';

var $cbU5o = parcelRequire("cbU5o");
/** @type {import('./sign')} */ module.exports = function sign(number) {
    if ($cbU5o(number) || number === 0) return number;
    return number < 0 ? -1 : 1;
};

});
parcelRegister("cbU5o", function(module, exports) {
'use strict';
/** @type {import('./isNaN')} */ module.exports = Number.isNaN || function isNaN(a) {
    return a !== a;
};

});


parcelRegister("5aNmz", function(module, exports) {
'use strict';

var $170m1 = parcelRequire("170m1");
var $3c442d5fdd46b93f$require$$gOPD = $170m1;
if ($3c442d5fdd46b93f$require$$gOPD) try {
    $3c442d5fdd46b93f$require$$gOPD([], 'length');
} catch (e) {
    // IE 8 has a broken gOPD
    $3c442d5fdd46b93f$require$$gOPD = null;
}
module.exports = $3c442d5fdd46b93f$require$$gOPD;

});
parcelRegister("170m1", function(module, exports) {
'use strict';
/** @type {import('./gOPD')} */ module.exports = Object.getOwnPropertyDescriptor;

});


parcelRegister("9GnfT", function(module, exports) {
'use strict';
/** @type {import('.')} */ var $70ca135181c633b5$var$$defineProperty = Object.defineProperty || false;
if ($70ca135181c633b5$var$$defineProperty) try {
    $70ca135181c633b5$var$$defineProperty({}, 'a', {
        value: 1
    });
} catch (e) {
    // IE 8 has a broken defineProperty
    $70ca135181c633b5$var$$defineProperty = false;
}
module.exports = $70ca135181c633b5$var$$defineProperty;

});

parcelRegister("5Faxr", function(module, exports) {
'use strict';
var $41f8f4c710074bb0$var$origSymbol = typeof Symbol !== 'undefined' && Symbol;

var $iOGVa = parcelRequire("iOGVa");
/** @type {import('.')} */ module.exports = function hasNativeSymbols() {
    if (typeof $41f8f4c710074bb0$var$origSymbol !== 'function') return false;
    if (typeof Symbol !== 'function') return false;
    if (typeof $41f8f4c710074bb0$var$origSymbol('foo') !== 'symbol') return false;
    if (typeof Symbol('bar') !== 'symbol') return false;
    return $iOGVa();
};

});

parcelRegister("fJlcU", function(module, exports) {
'use strict';

var $fAaF4 = parcelRequire("fAaF4");

var $8Jifo = parcelRequire("8Jifo");

var $1ZwKe = parcelRequire("1ZwKe");
/** @type {import('.')} */ module.exports = $fAaF4 ? function getProto(O) {
    // @ts-expect-error TS can't narrow inside a closure, for some reason
    return $fAaF4(O);
} : $8Jifo ? function getProto(O) {
    if (!O || typeof O !== 'object' && typeof O !== 'function') throw new TypeError('getProto: not an object');
    // @ts-expect-error TS can't narrow inside a closure, for some reason
    return $8Jifo(O);
} : $1ZwKe ? function getProto(O) {
    // @ts-expect-error TS can't narrow inside a closure, for some reason
    return $1ZwKe(O);
} : null;

});
parcelRegister("fAaF4", function(module, exports) {
'use strict';
/** @type {import('./Reflect.getPrototypeOf')} */ module.exports = typeof Reflect !== 'undefined' && Reflect.getPrototypeOf || null;

});

parcelRegister("8Jifo", function(module, exports) {
'use strict';

var $jcNaC = parcelRequire("jcNaC");
/** @type {import('./Object.getPrototypeOf')} */ module.exports = $jcNaC.getPrototypeOf || null;

});

parcelRegister("1ZwKe", function(module, exports) {
'use strict';

var $4W5Ez = parcelRequire("4W5Ez");

var $5aNmz = parcelRequire("5aNmz");
var $1734e357823f5ca0$var$hasProtoAccessor;
try {
    // eslint-disable-next-line no-extra-parens, no-proto
    $1734e357823f5ca0$var$hasProtoAccessor = /** @type {{ __proto__?: typeof Array.prototype }} */ [].__proto__ === Array.prototype;
} catch (e) {
    if (!e || typeof e !== 'object' || !('code' in e) || e.code !== 'ERR_PROTO_ACCESS') throw e;
}
// eslint-disable-next-line no-extra-parens
var $1734e357823f5ca0$var$desc = !!$1734e357823f5ca0$var$hasProtoAccessor && $5aNmz && $5aNmz(Object.prototype, /** @type {keyof typeof Object.prototype} */ '__proto__');
var $1734e357823f5ca0$var$$Object = Object;
var $1734e357823f5ca0$var$$getPrototypeOf = $1734e357823f5ca0$var$$Object.getPrototypeOf;
/** @type {import('./get')} */ module.exports = $1734e357823f5ca0$var$desc && typeof $1734e357823f5ca0$var$desc.get === 'function' ? $4W5Ez([
    $1734e357823f5ca0$var$desc.get
]) : typeof $1734e357823f5ca0$var$$getPrototypeOf === 'function' ? /** @type {import('./get')} */ function getDunder(value) {
    // eslint-disable-next-line eqeqeq
    return $1734e357823f5ca0$var$$getPrototypeOf(value == null ? value : $1734e357823f5ca0$var$$Object(value));
} : false;

});
parcelRegister("4W5Ez", function(module, exports) {
'use strict';

var $bAaqj = parcelRequire("bAaqj");

var $eEvec = parcelRequire("eEvec");

var $72NGy = parcelRequire("72NGy");

var $ajGUw = parcelRequire("ajGUw");
/** @type {(args: [Function, thisArg?: unknown, ...args: unknown[]]) => Function} TODO FIXME, find a way to use import('.') */ module.exports = function callBindBasic(args) {
    if (args.length < 1 || typeof args[0] !== 'function') throw new $eEvec('a function is required');
    return $ajGUw($bAaqj, $72NGy, args);
};

});
parcelRegister("bAaqj", function(module, exports) {
'use strict';

var $43xNN = parcelRequire("43xNN");
module.exports = Function.prototype.bind || $43xNN;

});
parcelRegister("43xNN", function(module, exports) {
'use strict';
/* eslint no-invalid-this: 1 */ var $2f41a99e6bb8595b$var$ERROR_MESSAGE = 'Function.prototype.bind called on incompatible ';
var $2f41a99e6bb8595b$var$toStr = Object.prototype.toString;
var $2f41a99e6bb8595b$var$max = Math.max;
var $2f41a99e6bb8595b$var$funcType = '[object Function]';
var $2f41a99e6bb8595b$var$concatty = function concatty(a, b) {
    var arr = [];
    for(var i = 0; i < a.length; i += 1)arr[i] = a[i];
    for(var j = 0; j < b.length; j += 1)arr[j + a.length] = b[j];
    return arr;
};
var $2f41a99e6bb8595b$var$slicy = function slicy(arrLike, offset) {
    var arr = [];
    for(var i = offset || 0, j = 0; i < arrLike.length; i += 1, j += 1)arr[j] = arrLike[i];
    return arr;
};
var $2f41a99e6bb8595b$var$joiny = function(arr, joiner) {
    var str = '';
    for(var i = 0; i < arr.length; i += 1){
        str += arr[i];
        if (i + 1 < arr.length) str += joiner;
    }
    return str;
};
module.exports = function bind(that) {
    var target = this;
    if (typeof target !== 'function' || $2f41a99e6bb8595b$var$toStr.apply(target) !== $2f41a99e6bb8595b$var$funcType) throw new TypeError($2f41a99e6bb8595b$var$ERROR_MESSAGE + target);
    var args = $2f41a99e6bb8595b$var$slicy(arguments, 1);
    var bound;
    var binder = function() {
        if (this instanceof bound) {
            var result = target.apply(this, $2f41a99e6bb8595b$var$concatty(args, arguments));
            if (Object(result) === result) return result;
            return this;
        }
        return target.apply(that, $2f41a99e6bb8595b$var$concatty(args, arguments));
    };
    var boundLength = $2f41a99e6bb8595b$var$max(0, target.length - args.length);
    var boundArgs = [];
    for(var i = 0; i < boundLength; i++)boundArgs[i] = '$' + i;
    bound = Function('binder', 'return function (' + $2f41a99e6bb8595b$var$joiny(boundArgs, ',') + '){ return binder.apply(this,arguments); }')(binder);
    if (target.prototype) {
        var Empty = function Empty() {};
        Empty.prototype = target.prototype;
        bound.prototype = new Empty();
        Empty.prototype = null;
    }
    return bound;
};

});


parcelRegister("72NGy", function(module, exports) {
'use strict';
/** @type {import('./functionCall')} */ module.exports = Function.prototype.call;

});

parcelRegister("ajGUw", function(module, exports) {
'use strict';

var $bAaqj = parcelRequire("bAaqj");

var $aIFlr = parcelRequire("aIFlr");

var $72NGy = parcelRequire("72NGy");

var $9uvC0 = parcelRequire("9uvC0");
/** @type {import('./actualApply')} */ module.exports = $9uvC0 || $bAaqj.call($72NGy, $aIFlr);

});
parcelRegister("aIFlr", function(module, exports) {
'use strict';
/** @type {import('./functionApply')} */ module.exports = Function.prototype.apply;

});

parcelRegister("9uvC0", function(module, exports) {
'use strict';
/** @type {import('./reflectApply')} */ module.exports = typeof Reflect !== 'undefined' && Reflect && Reflect.apply;

});





parcelRegister("6YH8u", function(module, exports) {
'use strict';
var $5149ce9424223b65$var$call = Function.prototype.call;
var $5149ce9424223b65$var$$hasOwn = Object.prototype.hasOwnProperty;

var $bAaqj = parcelRequire("bAaqj");
/** @type {import('.')} */ module.exports = $bAaqj.call($5149ce9424223b65$var$call, $5149ce9424223b65$var$$hasOwn);

});




parcelRegister("e8xYU", function(module, exports) {
'use strict';

var $8oBT0 = parcelRequire("8oBT0");

var $iLCBf = parcelRequire("iLCBf");
var $a4ac2c0a879d8594$var$isFnRegex = $iLCBf(/^\s*(?:function)?\*/);

var $a4ac2c0a879d8594$var$hasToStringTag = (parcelRequire("34kOE"))();

var $fJlcU = parcelRequire("fJlcU");
var $a4ac2c0a879d8594$var$toStr = $8oBT0('Object.prototype.toString');
var $a4ac2c0a879d8594$var$fnToStr = $8oBT0('Function.prototype.toString');

var $fZxAW = parcelRequire("fZxAW");
/** @type {import('.')} */ module.exports = function isGeneratorFunction(fn) {
    if (typeof fn !== 'function') return false;
    if ($a4ac2c0a879d8594$var$isFnRegex($a4ac2c0a879d8594$var$fnToStr(fn))) return true;
    if (!$a4ac2c0a879d8594$var$hasToStringTag) {
        var str = $a4ac2c0a879d8594$var$toStr(fn);
        return str === '[object GeneratorFunction]';
    }
    if (!$fJlcU) return false;
    var GeneratorFunction = $fZxAW();
    return GeneratorFunction && $fJlcU(fn) === GeneratorFunction.prototype;
};

});
parcelRegister("iLCBf", function(module, exports) {
'use strict';

var $8oBT0 = parcelRequire("8oBT0");

var $gRMXe = parcelRequire("gRMXe");
var $da9a8ee072e5f471$var$$exec = $8oBT0('RegExp.prototype.exec');

var $eEvec = parcelRequire("eEvec");
/** @type {import('.')} */ module.exports = function regexTester(regex) {
    if (!$gRMXe(regex)) throw new $eEvec('`regex` must be a RegExp');
    return function test(s) {
        return $da9a8ee072e5f471$var$$exec(regex, s) !== null;
    };
};

});
parcelRegister("gRMXe", function(module, exports) {
'use strict';

var $8oBT0 = parcelRequire("8oBT0");

var $c47791e194833937$var$hasToStringTag = (parcelRequire("34kOE"))();

var $6YH8u = parcelRequire("6YH8u");

var $5aNmz = parcelRequire("5aNmz");
/** @type {import('.')} */ var $c47791e194833937$var$fn;
if ($c47791e194833937$var$hasToStringTag) {
    /** @type {(receiver: ThisParameterType<typeof RegExp.prototype.exec>, ...args: Parameters<typeof RegExp.prototype.exec>) => ReturnType<typeof RegExp.prototype.exec>} */ var $c47791e194833937$var$$exec = $8oBT0('RegExp.prototype.exec');
    /** @type {object} */ var $c47791e194833937$var$isRegexMarker = {};
    var $c47791e194833937$var$throwRegexMarker = function() {
        throw $c47791e194833937$var$isRegexMarker;
    };
    /** @type {{ toString(): never, valueOf(): never, [Symbol.toPrimitive]?(): never }} */ var $c47791e194833937$var$badStringifier = {
        toString: $c47791e194833937$var$throwRegexMarker,
        valueOf: $c47791e194833937$var$throwRegexMarker
    };
    if (typeof Symbol.toPrimitive === 'symbol') $c47791e194833937$var$badStringifier[Symbol.toPrimitive] = $c47791e194833937$var$throwRegexMarker;
    /** @type {import('.')} */ // @ts-expect-error TS can't figure out that the $exec call always throws
    // eslint-disable-next-line consistent-return
    $c47791e194833937$var$fn = function isRegex(value) {
        if (!value || typeof value !== 'object') return false;
        // eslint-disable-next-line no-extra-parens
        var descriptor = /** @type {NonNullable<typeof gOPD>} */ $5aNmz(/** @type {{ lastIndex?: unknown }} */ value, 'lastIndex');
        var hasLastIndexDataProperty = descriptor && $6YH8u(descriptor, 'value');
        if (!hasLastIndexDataProperty) return false;
        try {
            // eslint-disable-next-line no-extra-parens
            $c47791e194833937$var$$exec(value, /** @type {unknown} */ $c47791e194833937$var$badStringifier);
        } catch (e) {
            return e === $c47791e194833937$var$isRegexMarker;
        }
    };
} else {
    /** @type {(receiver: ThisParameterType<typeof Object.prototype.toString>, ...args: Parameters<typeof Object.prototype.toString>) => ReturnType<typeof Object.prototype.toString>} */ var $c47791e194833937$var$$toString = $8oBT0('Object.prototype.toString');
    /** @const @type {'[object RegExp]'} */ var $c47791e194833937$var$regexClass = '[object RegExp]';
    /** @type {import('.')} */ $c47791e194833937$var$fn = function isRegex(value) {
        // In older browsers, typeof regex incorrectly returns 'function'
        if (!value || typeof value !== 'object' && typeof value !== 'function') return false;
        return $c47791e194833937$var$$toString(value) === $c47791e194833937$var$regexClass;
    };
}
module.exports = $c47791e194833937$var$fn;

});


parcelRegister("fZxAW", function(module, exports) {

$parcel$defineInteropFlag(module.exports);

$parcel$export(module.exports, "default", () => $b746150f0d8f0b49$export$2e2bcd8739ae039);

var $k2h7e = parcelRequire("k2h7e");
var /** @type {import('./index.d.mts').default} */ $b746150f0d8f0b49$export$2e2bcd8739ae039 = (0, (/*@__PURE__*/$parcel$interopDefault($k2h7e)));

});
parcelRegister("k2h7e", function(module, exports) {
'use strict';
// eslint-disable-next-line no-extra-parens, no-empty-function
const $e9614556e305797f$var$cached = /** @type {GeneratorFunctionConstructor} */ (function*() {}).constructor;
/** @type {import('.')} */ module.exports = ()=>$e9614556e305797f$var$cached;

});



parcelRegister("lzUQS", function(module, exports) {
'use strict';

var $fl5AH = parcelRequire("fl5AH");

var $ja5h3 = parcelRequire("ja5h3");

var $jeKUl = parcelRequire("jeKUl");

var $8oBT0 = parcelRequire("8oBT0");

var $5aNmz = parcelRequire("5aNmz");

var $fJlcU = parcelRequire("fJlcU");
var $fb58f7750da6539b$var$$toString = $8oBT0('Object.prototype.toString');

var $fb58f7750da6539b$var$hasToStringTag = (parcelRequire("34kOE"))();
var $fb58f7750da6539b$var$g = typeof globalThis === 'undefined' ? $parcel$global : globalThis;
var $fb58f7750da6539b$var$typedArrays = $ja5h3();
var $fb58f7750da6539b$var$$slice = $8oBT0('String.prototype.slice');
/** @type {<T = unknown>(array: readonly T[], value: unknown) => number} */ var $fb58f7750da6539b$var$$indexOf = $8oBT0('Array.prototype.indexOf', true) || function indexOf(array, value) {
    for(var i = 0; i < array.length; i += 1){
        if (array[i] === value) return i;
    }
    return -1;
};
/** @typedef {import('./types').Getter} Getter */ /** @type {import('./types').Cache} */ var $fb58f7750da6539b$var$cache = {
    __proto__: null
};
if ($fb58f7750da6539b$var$hasToStringTag && $5aNmz && $fJlcU) $fl5AH($fb58f7750da6539b$var$typedArrays, function(typedArray) {
    var arr = new $fb58f7750da6539b$var$g[typedArray]();
    if (Symbol.toStringTag in arr && $fJlcU) {
        var proto = $fJlcU(arr);
        // @ts-expect-error TS won't narrow inside a closure
        var descriptor = $5aNmz(proto, Symbol.toStringTag);
        if (!descriptor && proto) {
            var superProto = $fJlcU(proto);
            // @ts-expect-error TS won't narrow inside a closure
            descriptor = $5aNmz(superProto, Symbol.toStringTag);
        }
        if (descriptor && descriptor.get) {
            var bound = $jeKUl(descriptor.get);
            $fb58f7750da6539b$var$cache[/** @type {`$${import('.').TypedArrayName}`} */ '$' + typedArray] = bound;
        }
    }
});
else $fl5AH($fb58f7750da6539b$var$typedArrays, function(typedArray) {
    var arr = new $fb58f7750da6539b$var$g[typedArray]();
    var fn = arr.slice || arr.set;
    if (fn) {
        var bound = /** @type {import('./types').BoundSlice | import('./types').BoundSet} */ // @ts-expect-error TODO FIXME
        $jeKUl(fn);
        $fb58f7750da6539b$var$cache[/** @type {`$${import('.').TypedArrayName}`} */ '$' + typedArray] = bound;
    }
});
/** @type {(value: object) => false | import('.').TypedArrayName} */ var $fb58f7750da6539b$var$tryTypedArrays = function tryAllTypedArrays(value) {
    /** @type {ReturnType<typeof tryAllTypedArrays>} */ var found = false;
    $fl5AH(/** @type {Record<`\$${import('.').TypedArrayName}`, Getter>} */ $fb58f7750da6539b$var$cache, /** @type {(getter: Getter, name: `\$${import('.').TypedArrayName}`) => void} */ function(getter, typedArray) {
        if (!found) try {
            // @ts-expect-error a throw is fine here
            if ('$' + getter(value) === typedArray) found = /** @type {import('.').TypedArrayName} */ $fb58f7750da6539b$var$$slice(typedArray, 1);
        } catch (e) {}
    });
    return found;
};
/** @type {(value: object) => false | import('.').TypedArrayName} */ var $fb58f7750da6539b$var$trySlices = function tryAllSlices(value) {
    /** @type {ReturnType<typeof tryAllSlices>} */ var found = false;
    $fl5AH(/** @type {Record<`\$${import('.').TypedArrayName}`, Getter>} */ $fb58f7750da6539b$var$cache, /** @type {(getter: Getter, name: `\$${import('.').TypedArrayName}`) => void} */ function(getter, name) {
        if (!found) try {
            // @ts-expect-error a throw is fine here
            getter(value);
            found = /** @type {import('.').TypedArrayName} */ $fb58f7750da6539b$var$$slice(name, 1);
        } catch (e) {}
    });
    return found;
};
/** @type {import('.')} */ module.exports = function whichTypedArray(value) {
    if (!value || typeof value !== 'object') return false;
    if (!$fb58f7750da6539b$var$hasToStringTag) {
        /** @type {string} */ var tag = $fb58f7750da6539b$var$$slice($fb58f7750da6539b$var$$toString(value), 8, -1);
        if ($fb58f7750da6539b$var$$indexOf($fb58f7750da6539b$var$typedArrays, tag) > -1) return tag;
        if (tag !== 'Object') return false;
        // node < 0.6 hits here on real Typed Arrays
        return $fb58f7750da6539b$var$trySlices(value);
    }
    if (!$5aNmz) return null;
     // unknown engine
    return $fb58f7750da6539b$var$tryTypedArrays(value);
};

});
parcelRegister("fl5AH", function(module, exports) {
'use strict';

var $boTdz = parcelRequire("boTdz");
var $b2ad276b3082d5ae$var$toStr = Object.prototype.toString;
var $b2ad276b3082d5ae$var$hasOwnProperty = Object.prototype.hasOwnProperty;
/** @type {<This, A extends readonly unknown[]>(arr: A, iterator: (this: This | void, value: A[number], index: number, arr: A) => void, receiver: This | undefined) => void} */ var $b2ad276b3082d5ae$var$forEachArray = function forEachArray(array, iterator, receiver) {
    for(var i = 0, len = array.length; i < len; i++)if ($b2ad276b3082d5ae$var$hasOwnProperty.call(array, i)) {
        if (receiver == null) iterator(array[i], i, array);
        else iterator.call(receiver, array[i], i, array);
    }
};
/** @type {<This, S extends string>(string: S, iterator: (this: This | void, value: S[number], index: number, string: S) => void, receiver: This | undefined) => void} */ var $b2ad276b3082d5ae$var$forEachString = function forEachString(string, iterator, receiver) {
    for(var i = 0, len = string.length; i < len; i++)// no such thing as a sparse string.
    if (receiver == null) iterator(string.charAt(i), i, string);
    else iterator.call(receiver, string.charAt(i), i, string);
};
/** @type {<This, O>(obj: O, iterator: (this: This | void, value: O[keyof O], index: keyof O, obj: O) => void, receiver: This | undefined) => void} */ var $b2ad276b3082d5ae$var$forEachObject = function forEachObject(object, iterator, receiver) {
    for(var k in object)if ($b2ad276b3082d5ae$var$hasOwnProperty.call(object, k)) {
        if (receiver == null) iterator(object[k], k, object);
        else iterator.call(receiver, object[k], k, object);
    }
};
/** @type {(x: unknown) => x is readonly unknown[]} */ function $b2ad276b3082d5ae$var$isArray(x) {
    return $b2ad276b3082d5ae$var$toStr.call(x) === '[object Array]';
}
/** @type {import('.')._internal} */ module.exports = function forEach(list, iterator, thisArg) {
    if (!$boTdz(iterator)) throw new TypeError('iterator must be a function');
    var receiver;
    if (arguments.length >= 3) receiver = thisArg;
    if ($b2ad276b3082d5ae$var$isArray(list)) $b2ad276b3082d5ae$var$forEachArray(list, iterator, receiver);
    else if (typeof list === 'string') $b2ad276b3082d5ae$var$forEachString(list, iterator, receiver);
    else $b2ad276b3082d5ae$var$forEachObject(list, iterator, receiver);
};

});
parcelRegister("boTdz", function(module, exports) {
'use strict';
var $84ccc4bb671cd7a3$var$fnToStr = Function.prototype.toString;
var $84ccc4bb671cd7a3$var$reflectApply = typeof Reflect === 'object' && Reflect !== null && Reflect.apply;
var $84ccc4bb671cd7a3$var$badArrayLike;
var $84ccc4bb671cd7a3$var$isCallableMarker;
if (typeof $84ccc4bb671cd7a3$var$reflectApply === 'function' && typeof Object.defineProperty === 'function') try {
    $84ccc4bb671cd7a3$var$badArrayLike = Object.defineProperty({}, 'length', {
        get: function() {
            throw $84ccc4bb671cd7a3$var$isCallableMarker;
        }
    });
    $84ccc4bb671cd7a3$var$isCallableMarker = {};
    // eslint-disable-next-line no-throw-literal
    $84ccc4bb671cd7a3$var$reflectApply(function() {
        throw 42;
    }, null, $84ccc4bb671cd7a3$var$badArrayLike);
} catch (_) {
    if (_ !== $84ccc4bb671cd7a3$var$isCallableMarker) $84ccc4bb671cd7a3$var$reflectApply = null;
}
else $84ccc4bb671cd7a3$var$reflectApply = null;
var $84ccc4bb671cd7a3$var$constructorRegex = /^\s*class\b/;
var $84ccc4bb671cd7a3$var$isES6ClassFn = function isES6ClassFunction(value) {
    try {
        var fnStr = $84ccc4bb671cd7a3$var$fnToStr.call(value);
        return $84ccc4bb671cd7a3$var$constructorRegex.test(fnStr);
    } catch (e) {
        return false; // not a function
    }
};
var $84ccc4bb671cd7a3$var$tryFunctionObject = function tryFunctionToStr(value) {
    try {
        if ($84ccc4bb671cd7a3$var$isES6ClassFn(value)) return false;
        $84ccc4bb671cd7a3$var$fnToStr.call(value);
        return true;
    } catch (e) {
        return false;
    }
};
var $84ccc4bb671cd7a3$var$toStr = Object.prototype.toString;
var $84ccc4bb671cd7a3$var$objectClass = '[object Object]';
var $84ccc4bb671cd7a3$var$fnClass = '[object Function]';
var $84ccc4bb671cd7a3$var$genClass = '[object GeneratorFunction]';
var $84ccc4bb671cd7a3$var$ddaClass = '[object HTMLAllCollection]'; // IE 11
var $84ccc4bb671cd7a3$var$ddaClass2 = '[object HTML document.all class]';
var $84ccc4bb671cd7a3$var$ddaClass3 = '[object HTMLCollection]'; // IE 9-10
var $84ccc4bb671cd7a3$var$hasToStringTag = typeof Symbol === 'function' && !!Symbol.toStringTag; // better: use `has-tostringtag`
var $84ccc4bb671cd7a3$var$isIE68 = !(0 in [
    , 
]); // eslint-disable-line no-sparse-arrays, comma-spacing
var $84ccc4bb671cd7a3$var$isDDA = function isDocumentDotAll() {
    return false;
};
if (typeof document === 'object') {
    // Firefox 3 canonicalizes DDA to undefined when it's not accessed directly
    var $84ccc4bb671cd7a3$var$all = document.all;
    if ($84ccc4bb671cd7a3$var$toStr.call($84ccc4bb671cd7a3$var$all) === $84ccc4bb671cd7a3$var$toStr.call(document.all)) $84ccc4bb671cd7a3$var$isDDA = function isDocumentDotAll(value) {
        /* globals document: false */ // in IE 6-8, typeof document.all is "object" and it's truthy
        if (($84ccc4bb671cd7a3$var$isIE68 || !value) && (typeof value === 'undefined' || typeof value === 'object')) try {
            var str = $84ccc4bb671cd7a3$var$toStr.call(value);
            return (str === $84ccc4bb671cd7a3$var$ddaClass || str === $84ccc4bb671cd7a3$var$ddaClass2 || str === $84ccc4bb671cd7a3$var$ddaClass3 // opera 12.16
             || str === $84ccc4bb671cd7a3$var$objectClass // IE 6-8
            ) && value('') == null; // eslint-disable-line eqeqeq
        } catch (e) {}
        return false;
    };
}
module.exports = $84ccc4bb671cd7a3$var$reflectApply ? function isCallable(value) {
    if ($84ccc4bb671cd7a3$var$isDDA(value)) return true;
    if (!value) return false;
    if (typeof value !== 'function' && typeof value !== 'object') return false;
    try {
        $84ccc4bb671cd7a3$var$reflectApply(value, null, $84ccc4bb671cd7a3$var$badArrayLike);
    } catch (e) {
        if (e !== $84ccc4bb671cd7a3$var$isCallableMarker) return false;
    }
    return !$84ccc4bb671cd7a3$var$isES6ClassFn(value) && $84ccc4bb671cd7a3$var$tryFunctionObject(value);
} : function isCallable(value) {
    if ($84ccc4bb671cd7a3$var$isDDA(value)) return true;
    if (!value) return false;
    if (typeof value !== 'function' && typeof value !== 'object') return false;
    if ($84ccc4bb671cd7a3$var$hasToStringTag) return $84ccc4bb671cd7a3$var$tryFunctionObject(value);
    if ($84ccc4bb671cd7a3$var$isES6ClassFn(value)) return false;
    var strClass = $84ccc4bb671cd7a3$var$toStr.call(value);
    if (strClass !== $84ccc4bb671cd7a3$var$fnClass && strClass !== $84ccc4bb671cd7a3$var$genClass && !/^\[object HTML/.test(strClass)) return false;
    return $84ccc4bb671cd7a3$var$tryFunctionObject(value);
};

});


parcelRegister("ja5h3", function(module, exports) {
'use strict';

var $cNRjF = parcelRequire("cNRjF");
var $df330acf8b11318d$var$g = typeof globalThis === 'undefined' ? $parcel$global : globalThis;
/** @type {import('.')} */ module.exports = function availableTypedArrays() {
    var /** @type {ReturnType<typeof availableTypedArrays>} */ out = [];
    for(var i = 0; i < $cNRjF.length; i++)if (typeof $df330acf8b11318d$var$g[$cNRjF[i]] === 'function') // @ts-expect-error
    out[out.length] = $cNRjF[i];
    return out;
};

});
parcelRegister("cNRjF", function(module, exports) {
'use strict';
/** @type {import('.')} */ module.exports = [
    'Float16Array',
    'Float32Array',
    'Float64Array',
    'Int8Array',
    'Int16Array',
    'Int32Array',
    'Uint8Array',
    'Uint8ClampedArray',
    'Uint16Array',
    'Uint32Array',
    'BigInt64Array',
    'BigUint64Array'
];

});


parcelRegister("jeKUl", function(module, exports) {
'use strict';

var $9Eymf = parcelRequire("9Eymf");

var $9GnfT = parcelRequire("9GnfT");

var $4W5Ez = parcelRequire("4W5Ez");

var $18cdk = parcelRequire("18cdk");
module.exports = function callBind(originalFunction) {
    var func = $4W5Ez(arguments);
    var adjustedLength = originalFunction.length - (arguments.length - 1);
    return $9Eymf(func, 1 + (adjustedLength > 0 ? adjustedLength : 0), true);
};
if ($9GnfT) $9GnfT(module.exports, 'apply', {
    value: $18cdk
});
else module.exports.apply = $18cdk;

});
parcelRegister("9Eymf", function(module, exports) {
'use strict';

var $arPKQ = parcelRequire("arPKQ");

var $4pzcx = parcelRequire("4pzcx");

var $7072803dc2a170cf$var$hasDescriptors = (parcelRequire("lvdOv"))();

var $5aNmz = parcelRequire("5aNmz");

var $eEvec = parcelRequire("eEvec");
var $7072803dc2a170cf$var$$floor = $arPKQ('%Math.floor%');
/** @type {import('.')} */ module.exports = function setFunctionLength(fn, length) {
    if (typeof fn !== 'function') throw new $eEvec('`fn` is not a function');
    if (typeof length !== 'number' || length < 0 || length > 0xFFFFFFFF || $7072803dc2a170cf$var$$floor(length) !== length) throw new $eEvec('`length` must be a positive 32-bit integer');
    var loose = arguments.length > 2 && !!arguments[2];
    var functionLengthIsConfigurable = true;
    var functionLengthIsWritable = true;
    if ('length' in fn && $5aNmz) {
        var desc = $5aNmz(fn, 'length');
        if (desc && !desc.configurable) functionLengthIsConfigurable = false;
        if (desc && !desc.writable) functionLengthIsWritable = false;
    }
    if (functionLengthIsConfigurable || functionLengthIsWritable || !loose) {
        if ($7072803dc2a170cf$var$hasDescriptors) $4pzcx(/** @type {Parameters<define>[0]} */ fn, 'length', length, true, true);
        else $4pzcx(/** @type {Parameters<define>[0]} */ fn, 'length', length);
    }
    return fn;
};

});
parcelRegister("4pzcx", function(module, exports) {
'use strict';

var $9GnfT = parcelRequire("9GnfT");

var $3xtAj = parcelRequire("3xtAj");

var $eEvec = parcelRequire("eEvec");

var $5aNmz = parcelRequire("5aNmz");
/** @type {import('.')} */ module.exports = function defineDataProperty(obj, property, value) {
    if (!obj || typeof obj !== 'object' && typeof obj !== 'function') throw new $eEvec('`obj` must be an object or a function`');
    if (typeof property !== 'string' && typeof property !== 'symbol') throw new $eEvec('`property` must be a string or a symbol`');
    if (arguments.length > 3 && typeof arguments[3] !== 'boolean' && arguments[3] !== null) throw new $eEvec('`nonEnumerable`, if provided, must be a boolean or null');
    if (arguments.length > 4 && typeof arguments[4] !== 'boolean' && arguments[4] !== null) throw new $eEvec('`nonWritable`, if provided, must be a boolean or null');
    if (arguments.length > 5 && typeof arguments[5] !== 'boolean' && arguments[5] !== null) throw new $eEvec('`nonConfigurable`, if provided, must be a boolean or null');
    if (arguments.length > 6 && typeof arguments[6] !== 'boolean') throw new $eEvec('`loose`, if provided, must be a boolean');
    var nonEnumerable = arguments.length > 3 ? arguments[3] : null;
    var nonWritable = arguments.length > 4 ? arguments[4] : null;
    var nonConfigurable = arguments.length > 5 ? arguments[5] : null;
    var loose = arguments.length > 6 ? arguments[6] : false;
    /* @type {false | TypedPropertyDescriptor<unknown>} */ var desc = !!$5aNmz && $5aNmz(obj, property);
    if ($9GnfT) $9GnfT(obj, property, {
        configurable: nonConfigurable === null && desc ? desc.configurable : !nonConfigurable,
        enumerable: nonEnumerable === null && desc ? desc.enumerable : !nonEnumerable,
        value: value,
        writable: nonWritable === null && desc ? desc.writable : !nonWritable
    });
    else if (loose || !nonEnumerable && !nonWritable && !nonConfigurable) // must fall back to [[Set]], and was not explicitly asked to make non-enumerable, non-writable, or non-configurable
    obj[property] = value; // eslint-disable-line no-param-reassign
    else throw new $3xtAj('This environment does not support defining a property as non-configurable, non-writable, or non-enumerable.');
};

});

parcelRegister("lvdOv", function(module, exports) {
'use strict';

var $9GnfT = parcelRequire("9GnfT");
var $fa7735583afc2019$var$hasPropertyDescriptors = function hasPropertyDescriptors() {
    return !!$9GnfT;
};
$fa7735583afc2019$var$hasPropertyDescriptors.hasArrayLengthDefineBug = function hasArrayLengthDefineBug() {
    // node v0.6 has a bug where array lengths can be Set but not Defined
    if (!$9GnfT) return null;
    try {
        return $9GnfT([], 'length', {
            value: 1
        }).length !== 1;
    } catch (e) {
        // In Firefox 4-22, defining length on an array throws an exception.
        return true;
    }
};
module.exports = $fa7735583afc2019$var$hasPropertyDescriptors;

});


parcelRegister("18cdk", function(module, exports) {
'use strict';

var $bAaqj = parcelRequire("bAaqj");

var $aIFlr = parcelRequire("aIFlr");

var $ajGUw = parcelRequire("ajGUw");
/** @type {import('./applyBind')} */ module.exports = function applyBind() {
    return $ajGUw($bAaqj, $aIFlr, arguments);
};

});



parcelRegister("2ligd", function(module, exports) {
'use strict';

var $lzUQS = parcelRequire("lzUQS");
/** @type {import('.')} */ module.exports = function isTypedArray(value) {
    return !!$lzUQS(value);
};

});


parcelRegister("fLd3X", function(module, exports) {
module.exports = function isBuffer(arg) {
    return arg && typeof arg === 'object' && typeof arg.copy === 'function' && typeof arg.fill === 'function' && typeof arg.readUInt8 === 'function';
};

});

parcelRegister("k5o3C", function(module, exports) {
if (typeof Object.create === 'function') // implementation from standard node.js 'util' module
module.exports = function inherits(ctor, superCtor) {
    if (superCtor) {
        ctor.super_ = superCtor;
        ctor.prototype = Object.create(superCtor.prototype, {
            constructor: {
                value: ctor,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
    }
};
else // old school shim for old browsers
module.exports = function inherits(ctor, superCtor) {
    if (superCtor) {
        ctor.super_ = superCtor;
        var TempCtor = function() {};
        TempCtor.prototype = superCtor.prototype;
        ctor.prototype = new TempCtor();
        ctor.prototype.constructor = ctor;
    }
};

});


parcelRegister("5cRxU", function(module, exports) {
// shim for using process in browser
var $3ca79bd3659d75d3$var$process = module.exports = {};
// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.
var $3ca79bd3659d75d3$var$cachedSetTimeout;
var $3ca79bd3659d75d3$var$cachedClearTimeout;
function $3ca79bd3659d75d3$var$defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function $3ca79bd3659d75d3$var$defaultClearTimeout() {
    throw new Error('clearTimeout has not been defined');
}
(function() {
    try {
        if (typeof setTimeout === 'function') $3ca79bd3659d75d3$var$cachedSetTimeout = setTimeout;
        else $3ca79bd3659d75d3$var$cachedSetTimeout = $3ca79bd3659d75d3$var$defaultSetTimout;
    } catch (e) {
        $3ca79bd3659d75d3$var$cachedSetTimeout = $3ca79bd3659d75d3$var$defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') $3ca79bd3659d75d3$var$cachedClearTimeout = clearTimeout;
        else $3ca79bd3659d75d3$var$cachedClearTimeout = $3ca79bd3659d75d3$var$defaultClearTimeout;
    } catch (e) {
        $3ca79bd3659d75d3$var$cachedClearTimeout = $3ca79bd3659d75d3$var$defaultClearTimeout;
    }
})();
function $3ca79bd3659d75d3$var$runTimeout(fun) {
    if ($3ca79bd3659d75d3$var$cachedSetTimeout === setTimeout) //normal enviroments in sane situations
    return setTimeout(fun, 0);
    // if setTimeout wasn't available but was latter defined
    if (($3ca79bd3659d75d3$var$cachedSetTimeout === $3ca79bd3659d75d3$var$defaultSetTimout || !$3ca79bd3659d75d3$var$cachedSetTimeout) && setTimeout) {
        $3ca79bd3659d75d3$var$cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return $3ca79bd3659d75d3$var$cachedSetTimeout(fun, 0);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return $3ca79bd3659d75d3$var$cachedSetTimeout.call(null, fun, 0);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return $3ca79bd3659d75d3$var$cachedSetTimeout.call(this, fun, 0);
        }
    }
}
function $3ca79bd3659d75d3$var$runClearTimeout(marker) {
    if ($3ca79bd3659d75d3$var$cachedClearTimeout === clearTimeout) //normal enviroments in sane situations
    return clearTimeout(marker);
    // if clearTimeout wasn't available but was latter defined
    if (($3ca79bd3659d75d3$var$cachedClearTimeout === $3ca79bd3659d75d3$var$defaultClearTimeout || !$3ca79bd3659d75d3$var$cachedClearTimeout) && clearTimeout) {
        $3ca79bd3659d75d3$var$cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return $3ca79bd3659d75d3$var$cachedClearTimeout(marker);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return $3ca79bd3659d75d3$var$cachedClearTimeout.call(null, marker);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return $3ca79bd3659d75d3$var$cachedClearTimeout.call(this, marker);
        }
    }
}
var $3ca79bd3659d75d3$var$queue = [];
var $3ca79bd3659d75d3$var$draining = false;
var $3ca79bd3659d75d3$var$currentQueue;
var $3ca79bd3659d75d3$var$queueIndex = -1;
function $3ca79bd3659d75d3$var$cleanUpNextTick() {
    if (!$3ca79bd3659d75d3$var$draining || !$3ca79bd3659d75d3$var$currentQueue) return;
    $3ca79bd3659d75d3$var$draining = false;
    if ($3ca79bd3659d75d3$var$currentQueue.length) $3ca79bd3659d75d3$var$queue = $3ca79bd3659d75d3$var$currentQueue.concat($3ca79bd3659d75d3$var$queue);
    else $3ca79bd3659d75d3$var$queueIndex = -1;
    if ($3ca79bd3659d75d3$var$queue.length) $3ca79bd3659d75d3$var$drainQueue();
}
function $3ca79bd3659d75d3$var$drainQueue() {
    if ($3ca79bd3659d75d3$var$draining) return;
    var timeout = $3ca79bd3659d75d3$var$runTimeout($3ca79bd3659d75d3$var$cleanUpNextTick);
    $3ca79bd3659d75d3$var$draining = true;
    var len = $3ca79bd3659d75d3$var$queue.length;
    while(len){
        $3ca79bd3659d75d3$var$currentQueue = $3ca79bd3659d75d3$var$queue;
        $3ca79bd3659d75d3$var$queue = [];
        while(++$3ca79bd3659d75d3$var$queueIndex < len)if ($3ca79bd3659d75d3$var$currentQueue) $3ca79bd3659d75d3$var$currentQueue[$3ca79bd3659d75d3$var$queueIndex].run();
        $3ca79bd3659d75d3$var$queueIndex = -1;
        len = $3ca79bd3659d75d3$var$queue.length;
    }
    $3ca79bd3659d75d3$var$currentQueue = null;
    $3ca79bd3659d75d3$var$draining = false;
    $3ca79bd3659d75d3$var$runClearTimeout(timeout);
}
$3ca79bd3659d75d3$var$process.nextTick = function(fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) for(var i = 1; i < arguments.length; i++)args[i - 1] = arguments[i];
    $3ca79bd3659d75d3$var$queue.push(new $3ca79bd3659d75d3$var$Item(fun, args));
    if ($3ca79bd3659d75d3$var$queue.length === 1 && !$3ca79bd3659d75d3$var$draining) $3ca79bd3659d75d3$var$runTimeout($3ca79bd3659d75d3$var$drainQueue);
};
// v8 likes predictible objects
function $3ca79bd3659d75d3$var$Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
$3ca79bd3659d75d3$var$Item.prototype.run = function() {
    this.fun.apply(null, this.array);
};
$3ca79bd3659d75d3$var$process.title = 'browser';
$3ca79bd3659d75d3$var$process.browser = true;
$3ca79bd3659d75d3$var$process.env = {};
$3ca79bd3659d75d3$var$process.argv = [];
$3ca79bd3659d75d3$var$process.version = ''; // empty string to avoid regexp issues
$3ca79bd3659d75d3$var$process.versions = {};
function $3ca79bd3659d75d3$var$noop() {}
$3ca79bd3659d75d3$var$process.on = $3ca79bd3659d75d3$var$noop;
$3ca79bd3659d75d3$var$process.addListener = $3ca79bd3659d75d3$var$noop;
$3ca79bd3659d75d3$var$process.once = $3ca79bd3659d75d3$var$noop;
$3ca79bd3659d75d3$var$process.off = $3ca79bd3659d75d3$var$noop;
$3ca79bd3659d75d3$var$process.removeListener = $3ca79bd3659d75d3$var$noop;
$3ca79bd3659d75d3$var$process.removeAllListeners = $3ca79bd3659d75d3$var$noop;
$3ca79bd3659d75d3$var$process.emit = $3ca79bd3659d75d3$var$noop;
$3ca79bd3659d75d3$var$process.prependListener = $3ca79bd3659d75d3$var$noop;
$3ca79bd3659d75d3$var$process.prependOnceListener = $3ca79bd3659d75d3$var$noop;
$3ca79bd3659d75d3$var$process.listeners = function(name) {
    return [];
};
$3ca79bd3659d75d3$var$process.binding = function(name) {
    throw new Error('process.binding is not supported');
};
$3ca79bd3659d75d3$var$process.cwd = function() {
    return '/';
};
$3ca79bd3659d75d3$var$process.chdir = function(dir) {
    throw new Error('process.chdir is not supported');
};
$3ca79bd3659d75d3$var$process.umask = function() {
    return 0;
};

});


//# sourceMappingURL=util.f03b2cb8.js.map
