
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
parcelRegister("3zIaa", function(module, exports) {
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

var $4DZrq = parcelRequire("4DZrq");
var $29a6e5d32eeb792a$var$getOwnPropertyDescriptors = Object.getOwnPropertyDescriptors || function getOwnPropertyDescriptors(obj) {
    var keys = Object.keys(obj);
    var descriptors = {};
    for(var i = 0; i < keys.length; i++)descriptors[keys[i]] = Object.getOwnPropertyDescriptor(obj, keys[i]);
    return descriptors;
};
var $29a6e5d32eeb792a$var$formatRegExp = /%[sdj%]/g;
module.exports.format = function(f) {
    if (!$29a6e5d32eeb792a$var$isString(f)) {
        var objects = [];
        for(var i = 0; i < arguments.length; i++)objects.push($29a6e5d32eeb792a$var$inspect(arguments[i]));
        return objects.join(' ');
    }
    var i = 1;
    var args = arguments;
    var len = args.length;
    var str = String(f).replace($29a6e5d32eeb792a$var$formatRegExp, function(x) {
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
    for(var x = args[i]; i < len; x = args[++i])if ($29a6e5d32eeb792a$var$isNull(x) || !$29a6e5d32eeb792a$var$isObject(x)) str += ' ' + x;
    else str += ' ' + $29a6e5d32eeb792a$var$inspect(x);
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
            if ($4DZrq.throwDeprecation) throw new Error(msg);
            else if ($4DZrq.traceDeprecation) console.trace(msg);
            else console.error(msg);
            warned = true;
        }
        return fn.apply(this, arguments);
    }
};
var $29a6e5d32eeb792a$var$debugs = {};
var $29a6e5d32eeb792a$var$debugEnvRegex = /^$/;
var $29a6e5d32eeb792a$var$debugEnv;
module.exports.debuglog = function(set) {
    set = set.toUpperCase();
    if (!$29a6e5d32eeb792a$var$debugs[set]) {
        if ($29a6e5d32eeb792a$var$debugEnvRegex.test(set)) {
            var pid = $4DZrq.pid;
            $29a6e5d32eeb792a$var$debugs[set] = function() {
                var msg = module.exports.format.apply(module.exports, arguments);
                console.error('%s %d: %s', set, pid, msg);
            };
        } else $29a6e5d32eeb792a$var$debugs[set] = function() {};
    }
    return $29a6e5d32eeb792a$var$debugs[set];
};
/**
 * Echos the value of a value. Trys to print the value out
 * in the best way possible given the different types.
 *
 * @param {Object} obj The object to print out.
 * @param {Object} opts Optional options object that alters the output.
 */ /* legacy: obj, showHidden, depth, colors*/ function $29a6e5d32eeb792a$var$inspect(obj, opts) {
    // default options
    var ctx = {
        seen: [],
        stylize: $29a6e5d32eeb792a$var$stylizeNoColor
    };
    // legacy...
    if (arguments.length >= 3) ctx.depth = arguments[2];
    if (arguments.length >= 4) ctx.colors = arguments[3];
    if ($29a6e5d32eeb792a$var$isBoolean(opts)) // legacy...
    ctx.showHidden = opts;
    else if (opts) // got an "options" object
    module.exports._extend(ctx, opts);
    // set default options
    if ($29a6e5d32eeb792a$var$isUndefined(ctx.showHidden)) ctx.showHidden = false;
    if ($29a6e5d32eeb792a$var$isUndefined(ctx.depth)) ctx.depth = 2;
    if ($29a6e5d32eeb792a$var$isUndefined(ctx.colors)) ctx.colors = false;
    if ($29a6e5d32eeb792a$var$isUndefined(ctx.customInspect)) ctx.customInspect = true;
    if (ctx.colors) ctx.stylize = $29a6e5d32eeb792a$var$stylizeWithColor;
    return $29a6e5d32eeb792a$var$formatValue(ctx, obj, ctx.depth);
}
module.exports.inspect = $29a6e5d32eeb792a$var$inspect;
// http://en.wikipedia.org/wiki/ANSI_escape_code#graphics
$29a6e5d32eeb792a$var$inspect.colors = {
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
$29a6e5d32eeb792a$var$inspect.styles = {
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
function $29a6e5d32eeb792a$var$stylizeWithColor(str, styleType) {
    var style = $29a6e5d32eeb792a$var$inspect.styles[styleType];
    if (style) return '\u001b[' + $29a6e5d32eeb792a$var$inspect.colors[style][0] + 'm' + str + '\u001b[' + $29a6e5d32eeb792a$var$inspect.colors[style][1] + 'm';
    else return str;
}
function $29a6e5d32eeb792a$var$stylizeNoColor(str, styleType) {
    return str;
}
function $29a6e5d32eeb792a$var$arrayToHash(array) {
    var hash = {};
    array.forEach(function(val, idx) {
        hash[val] = true;
    });
    return hash;
}
function $29a6e5d32eeb792a$var$formatValue(ctx, value, recurseTimes) {
    // Provide a hook for user-specified inspect functions.
    // Check that value is an object with an inspect function on it
    if (ctx.customInspect && value && $29a6e5d32eeb792a$var$isFunction(value.inspect) && // Filter out the util module, it's inspect function is special
    value.inspect !== module.exports.inspect && // Also filter out any prototype objects using the circular check.
    !(value.constructor && value.constructor.prototype === value)) {
        var ret = value.inspect(recurseTimes, ctx);
        if (!$29a6e5d32eeb792a$var$isString(ret)) ret = $29a6e5d32eeb792a$var$formatValue(ctx, ret, recurseTimes);
        return ret;
    }
    // Primitive types cannot have properties
    var primitive = $29a6e5d32eeb792a$var$formatPrimitive(ctx, value);
    if (primitive) return primitive;
    // Look up the keys of the object.
    var keys = Object.keys(value);
    var visibleKeys = $29a6e5d32eeb792a$var$arrayToHash(keys);
    if (ctx.showHidden) keys = Object.getOwnPropertyNames(value);
    // IE doesn't make error fields non-enumerable
    // http://msdn.microsoft.com/en-us/library/ie/dww52sbt(v=vs.94).aspx
    if ($29a6e5d32eeb792a$var$isError(value) && (keys.indexOf('message') >= 0 || keys.indexOf('description') >= 0)) return $29a6e5d32eeb792a$var$formatError(value);
    // Some type of object without properties can be shortcutted.
    if (keys.length === 0) {
        if ($29a6e5d32eeb792a$var$isFunction(value)) {
            var name = value.name ? ': ' + value.name : '';
            return ctx.stylize('[Function' + name + ']', 'special');
        }
        if ($29a6e5d32eeb792a$var$isRegExp(value)) return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
        if ($29a6e5d32eeb792a$var$isDate(value)) return ctx.stylize(Date.prototype.toString.call(value), 'date');
        if ($29a6e5d32eeb792a$var$isError(value)) return $29a6e5d32eeb792a$var$formatError(value);
    }
    var base = '', array = false, braces = [
        '{',
        '}'
    ];
    // Make Array say that they are Array
    if ($29a6e5d32eeb792a$var$isArray(value)) {
        array = true;
        braces = [
            '[',
            ']'
        ];
    }
    // Make functions say that they are functions
    if ($29a6e5d32eeb792a$var$isFunction(value)) {
        var n = value.name ? ': ' + value.name : '';
        base = ' [Function' + n + ']';
    }
    // Make RegExps say that they are RegExps
    if ($29a6e5d32eeb792a$var$isRegExp(value)) base = ' ' + RegExp.prototype.toString.call(value);
    // Make dates with properties first say the date
    if ($29a6e5d32eeb792a$var$isDate(value)) base = ' ' + Date.prototype.toUTCString.call(value);
    // Make error with message first say the error
    if ($29a6e5d32eeb792a$var$isError(value)) base = ' ' + $29a6e5d32eeb792a$var$formatError(value);
    if (keys.length === 0 && (!array || value.length == 0)) return braces[0] + base + braces[1];
    if (recurseTimes < 0) {
        if ($29a6e5d32eeb792a$var$isRegExp(value)) return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
        else return ctx.stylize('[Object]', 'special');
    }
    ctx.seen.push(value);
    var output;
    if (array) output = $29a6e5d32eeb792a$var$formatArray(ctx, value, recurseTimes, visibleKeys, keys);
    else output = keys.map(function(key) {
        return $29a6e5d32eeb792a$var$formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
    });
    ctx.seen.pop();
    return $29a6e5d32eeb792a$var$reduceToSingleString(output, base, braces);
}
function $29a6e5d32eeb792a$var$formatPrimitive(ctx, value) {
    if ($29a6e5d32eeb792a$var$isUndefined(value)) return ctx.stylize('undefined', 'undefined');
    if ($29a6e5d32eeb792a$var$isString(value)) {
        var simple = '\'' + JSON.stringify(value).replace(/^"|"$/g, '').replace(/'/g, "\\'").replace(/\\"/g, '"') + '\'';
        return ctx.stylize(simple, 'string');
    }
    if ($29a6e5d32eeb792a$var$isNumber(value)) return ctx.stylize('' + value, 'number');
    if ($29a6e5d32eeb792a$var$isBoolean(value)) return ctx.stylize('' + value, 'boolean');
    // For some reason typeof null is "object", so special case here.
    if ($29a6e5d32eeb792a$var$isNull(value)) return ctx.stylize('null', 'null');
}
function $29a6e5d32eeb792a$var$formatError(value) {
    return '[' + Error.prototype.toString.call(value) + ']';
}
function $29a6e5d32eeb792a$var$formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
    var output = [];
    for(var i = 0, l = value.length; i < l; ++i)if ($29a6e5d32eeb792a$var$hasOwnProperty(value, String(i))) output.push($29a6e5d32eeb792a$var$formatProperty(ctx, value, recurseTimes, visibleKeys, String(i), true));
    else output.push('');
    keys.forEach(function(key) {
        if (!key.match(/^\d+$/)) output.push($29a6e5d32eeb792a$var$formatProperty(ctx, value, recurseTimes, visibleKeys, key, true));
    });
    return output;
}
function $29a6e5d32eeb792a$var$formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
    var name, str, desc;
    desc = Object.getOwnPropertyDescriptor(value, key) || {
        value: value[key]
    };
    if (desc.get) {
        if (desc.set) str = ctx.stylize('[Getter/Setter]', 'special');
        else str = ctx.stylize('[Getter]', 'special');
    } else if (desc.set) str = ctx.stylize('[Setter]', 'special');
    if (!$29a6e5d32eeb792a$var$hasOwnProperty(visibleKeys, key)) name = '[' + key + ']';
    if (!str) {
        if (ctx.seen.indexOf(desc.value) < 0) {
            if ($29a6e5d32eeb792a$var$isNull(recurseTimes)) str = $29a6e5d32eeb792a$var$formatValue(ctx, desc.value, null);
            else str = $29a6e5d32eeb792a$var$formatValue(ctx, desc.value, recurseTimes - 1);
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
    if ($29a6e5d32eeb792a$var$isUndefined(name)) {
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
function $29a6e5d32eeb792a$var$reduceToSingleString(output, base, braces) {
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
module.exports.types = (parcelRequire("1YEmT"));
function $29a6e5d32eeb792a$var$isArray(ar) {
    return Array.isArray(ar);
}
module.exports.isArray = $29a6e5d32eeb792a$var$isArray;
function $29a6e5d32eeb792a$var$isBoolean(arg) {
    return typeof arg === 'boolean';
}
module.exports.isBoolean = $29a6e5d32eeb792a$var$isBoolean;
function $29a6e5d32eeb792a$var$isNull(arg) {
    return arg === null;
}
module.exports.isNull = $29a6e5d32eeb792a$var$isNull;
function $29a6e5d32eeb792a$var$isNullOrUndefined(arg) {
    return arg == null;
}
module.exports.isNullOrUndefined = $29a6e5d32eeb792a$var$isNullOrUndefined;
function $29a6e5d32eeb792a$var$isNumber(arg) {
    return typeof arg === 'number';
}
module.exports.isNumber = $29a6e5d32eeb792a$var$isNumber;
function $29a6e5d32eeb792a$var$isString(arg) {
    return typeof arg === 'string';
}
module.exports.isString = $29a6e5d32eeb792a$var$isString;
function $29a6e5d32eeb792a$var$isSymbol(arg) {
    return typeof arg === 'symbol';
}
module.exports.isSymbol = $29a6e5d32eeb792a$var$isSymbol;
function $29a6e5d32eeb792a$var$isUndefined(arg) {
    return arg === void 0;
}
module.exports.isUndefined = $29a6e5d32eeb792a$var$isUndefined;
function $29a6e5d32eeb792a$var$isRegExp(re) {
    return $29a6e5d32eeb792a$var$isObject(re) && $29a6e5d32eeb792a$var$objectToString(re) === '[object RegExp]';
}
module.exports.isRegExp = $29a6e5d32eeb792a$var$isRegExp;
module.exports.types.isRegExp = $29a6e5d32eeb792a$var$isRegExp;
function $29a6e5d32eeb792a$var$isObject(arg) {
    return typeof arg === 'object' && arg !== null;
}
module.exports.isObject = $29a6e5d32eeb792a$var$isObject;
function $29a6e5d32eeb792a$var$isDate(d) {
    return $29a6e5d32eeb792a$var$isObject(d) && $29a6e5d32eeb792a$var$objectToString(d) === '[object Date]';
}
module.exports.isDate = $29a6e5d32eeb792a$var$isDate;
module.exports.types.isDate = $29a6e5d32eeb792a$var$isDate;
function $29a6e5d32eeb792a$var$isError(e) {
    return $29a6e5d32eeb792a$var$isObject(e) && ($29a6e5d32eeb792a$var$objectToString(e) === '[object Error]' || e instanceof Error);
}
module.exports.isError = $29a6e5d32eeb792a$var$isError;
module.exports.types.isNativeError = $29a6e5d32eeb792a$var$isError;
function $29a6e5d32eeb792a$var$isFunction(arg) {
    return typeof arg === 'function';
}
module.exports.isFunction = $29a6e5d32eeb792a$var$isFunction;
function $29a6e5d32eeb792a$var$isPrimitive(arg) {
    return arg === null || typeof arg === 'boolean' || typeof arg === 'number' || typeof arg === 'string' || typeof arg === 'symbol' || // ES6 symbol
    typeof arg === 'undefined';
}
module.exports.isPrimitive = $29a6e5d32eeb792a$var$isPrimitive;

module.exports.isBuffer = (parcelRequire("3wJir"));
function $29a6e5d32eeb792a$var$objectToString(o) {
    return Object.prototype.toString.call(o);
}
function $29a6e5d32eeb792a$var$pad(n) {
    return n < 10 ? '0' + n.toString(10) : n.toString(10);
}
var $29a6e5d32eeb792a$var$months = [
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
function $29a6e5d32eeb792a$var$timestamp() {
    var d = new Date();
    var time = [
        $29a6e5d32eeb792a$var$pad(d.getHours()),
        $29a6e5d32eeb792a$var$pad(d.getMinutes()),
        $29a6e5d32eeb792a$var$pad(d.getSeconds())
    ].join(':');
    return [
        d.getDate(),
        $29a6e5d32eeb792a$var$months[d.getMonth()],
        time
    ].join(' ');
}
// log is just a thin wrapper to console.log that prepends a timestamp
module.exports.log = function() {
    console.log('%s - %s', $29a6e5d32eeb792a$var$timestamp(), module.exports.format.apply(module.exports, arguments));
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
 */ module.exports.inherits = (parcelRequire("fHPjQ"));
module.exports._extend = function(origin, add) {
    // Don't do anything if add isn't an object
    if (!add || !$29a6e5d32eeb792a$var$isObject(add)) return origin;
    var keys = Object.keys(add);
    var i = keys.length;
    while(i--)origin[keys[i]] = add[keys[i]];
    return origin;
};
function $29a6e5d32eeb792a$var$hasOwnProperty(obj, prop) {
    return Object.prototype.hasOwnProperty.call(obj, prop);
}
var $29a6e5d32eeb792a$var$kCustomPromisifiedSymbol = typeof Symbol !== 'undefined' ? Symbol('util.promisify.custom') : undefined;
module.exports.promisify = function promisify(original) {
    if (typeof original !== 'function') throw new TypeError('The "original" argument must be of type Function');
    if ($29a6e5d32eeb792a$var$kCustomPromisifiedSymbol && original[$29a6e5d32eeb792a$var$kCustomPromisifiedSymbol]) {
        var fn = original[$29a6e5d32eeb792a$var$kCustomPromisifiedSymbol];
        if (typeof fn !== 'function') throw new TypeError('The "util.promisify.custom" argument must be of type Function');
        Object.defineProperty(fn, $29a6e5d32eeb792a$var$kCustomPromisifiedSymbol, {
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
    if ($29a6e5d32eeb792a$var$kCustomPromisifiedSymbol) Object.defineProperty(fn, $29a6e5d32eeb792a$var$kCustomPromisifiedSymbol, {
        value: fn,
        enumerable: false,
        writable: false,
        configurable: true
    });
    return Object.defineProperties(fn, $29a6e5d32eeb792a$var$getOwnPropertyDescriptors(original));
};
module.exports.promisify.custom = $29a6e5d32eeb792a$var$kCustomPromisifiedSymbol;
function $29a6e5d32eeb792a$var$callbackifyOnRejected(reason, cb) {
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
function $29a6e5d32eeb792a$var$callbackify(original) {
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
            $4DZrq.nextTick(cb.bind(null, null, ret));
        }, function(rej) {
            $4DZrq.nextTick($29a6e5d32eeb792a$var$callbackifyOnRejected.bind(null, rej, cb));
        });
    }
    Object.setPrototypeOf(callbackified, Object.getPrototypeOf(original));
    Object.defineProperties(callbackified, $29a6e5d32eeb792a$var$getOwnPropertyDescriptors(original));
    return callbackified;
}
module.exports.callbackify = $29a6e5d32eeb792a$var$callbackify;

});
parcelRegister("4DZrq", function(module, exports) {
// shim for using process in browser
var $361a76e6ea33591f$var$process = module.exports = {};
// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.
var $361a76e6ea33591f$var$cachedSetTimeout;
var $361a76e6ea33591f$var$cachedClearTimeout;
function $361a76e6ea33591f$var$defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function $361a76e6ea33591f$var$defaultClearTimeout() {
    throw new Error('clearTimeout has not been defined');
}
(function() {
    try {
        if (typeof setTimeout === 'function') $361a76e6ea33591f$var$cachedSetTimeout = setTimeout;
        else $361a76e6ea33591f$var$cachedSetTimeout = $361a76e6ea33591f$var$defaultSetTimout;
    } catch (e) {
        $361a76e6ea33591f$var$cachedSetTimeout = $361a76e6ea33591f$var$defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') $361a76e6ea33591f$var$cachedClearTimeout = clearTimeout;
        else $361a76e6ea33591f$var$cachedClearTimeout = $361a76e6ea33591f$var$defaultClearTimeout;
    } catch (e) {
        $361a76e6ea33591f$var$cachedClearTimeout = $361a76e6ea33591f$var$defaultClearTimeout;
    }
})();
function $361a76e6ea33591f$var$runTimeout(fun) {
    if ($361a76e6ea33591f$var$cachedSetTimeout === setTimeout) //normal enviroments in sane situations
    return setTimeout(fun, 0);
    // if setTimeout wasn't available but was latter defined
    if (($361a76e6ea33591f$var$cachedSetTimeout === $361a76e6ea33591f$var$defaultSetTimout || !$361a76e6ea33591f$var$cachedSetTimeout) && setTimeout) {
        $361a76e6ea33591f$var$cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return $361a76e6ea33591f$var$cachedSetTimeout(fun, 0);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return $361a76e6ea33591f$var$cachedSetTimeout.call(null, fun, 0);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return $361a76e6ea33591f$var$cachedSetTimeout.call(this, fun, 0);
        }
    }
}
function $361a76e6ea33591f$var$runClearTimeout(marker) {
    if ($361a76e6ea33591f$var$cachedClearTimeout === clearTimeout) //normal enviroments in sane situations
    return clearTimeout(marker);
    // if clearTimeout wasn't available but was latter defined
    if (($361a76e6ea33591f$var$cachedClearTimeout === $361a76e6ea33591f$var$defaultClearTimeout || !$361a76e6ea33591f$var$cachedClearTimeout) && clearTimeout) {
        $361a76e6ea33591f$var$cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return $361a76e6ea33591f$var$cachedClearTimeout(marker);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return $361a76e6ea33591f$var$cachedClearTimeout.call(null, marker);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return $361a76e6ea33591f$var$cachedClearTimeout.call(this, marker);
        }
    }
}
var $361a76e6ea33591f$var$queue = [];
var $361a76e6ea33591f$var$draining = false;
var $361a76e6ea33591f$var$currentQueue;
var $361a76e6ea33591f$var$queueIndex = -1;
function $361a76e6ea33591f$var$cleanUpNextTick() {
    if (!$361a76e6ea33591f$var$draining || !$361a76e6ea33591f$var$currentQueue) return;
    $361a76e6ea33591f$var$draining = false;
    if ($361a76e6ea33591f$var$currentQueue.length) $361a76e6ea33591f$var$queue = $361a76e6ea33591f$var$currentQueue.concat($361a76e6ea33591f$var$queue);
    else $361a76e6ea33591f$var$queueIndex = -1;
    if ($361a76e6ea33591f$var$queue.length) $361a76e6ea33591f$var$drainQueue();
}
function $361a76e6ea33591f$var$drainQueue() {
    if ($361a76e6ea33591f$var$draining) return;
    var timeout = $361a76e6ea33591f$var$runTimeout($361a76e6ea33591f$var$cleanUpNextTick);
    $361a76e6ea33591f$var$draining = true;
    var len = $361a76e6ea33591f$var$queue.length;
    while(len){
        $361a76e6ea33591f$var$currentQueue = $361a76e6ea33591f$var$queue;
        $361a76e6ea33591f$var$queue = [];
        while(++$361a76e6ea33591f$var$queueIndex < len)if ($361a76e6ea33591f$var$currentQueue) $361a76e6ea33591f$var$currentQueue[$361a76e6ea33591f$var$queueIndex].run();
        $361a76e6ea33591f$var$queueIndex = -1;
        len = $361a76e6ea33591f$var$queue.length;
    }
    $361a76e6ea33591f$var$currentQueue = null;
    $361a76e6ea33591f$var$draining = false;
    $361a76e6ea33591f$var$runClearTimeout(timeout);
}
$361a76e6ea33591f$var$process.nextTick = function(fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) for(var i = 1; i < arguments.length; i++)args[i - 1] = arguments[i];
    $361a76e6ea33591f$var$queue.push(new $361a76e6ea33591f$var$Item(fun, args));
    if ($361a76e6ea33591f$var$queue.length === 1 && !$361a76e6ea33591f$var$draining) $361a76e6ea33591f$var$runTimeout($361a76e6ea33591f$var$drainQueue);
};
// v8 likes predictible objects
function $361a76e6ea33591f$var$Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
$361a76e6ea33591f$var$Item.prototype.run = function() {
    this.fun.apply(null, this.array);
};
$361a76e6ea33591f$var$process.title = 'browser';
$361a76e6ea33591f$var$process.browser = true;
$361a76e6ea33591f$var$process.env = {};
$361a76e6ea33591f$var$process.argv = [];
$361a76e6ea33591f$var$process.version = ''; // empty string to avoid regexp issues
$361a76e6ea33591f$var$process.versions = {};
function $361a76e6ea33591f$var$noop() {}
$361a76e6ea33591f$var$process.on = $361a76e6ea33591f$var$noop;
$361a76e6ea33591f$var$process.addListener = $361a76e6ea33591f$var$noop;
$361a76e6ea33591f$var$process.once = $361a76e6ea33591f$var$noop;
$361a76e6ea33591f$var$process.off = $361a76e6ea33591f$var$noop;
$361a76e6ea33591f$var$process.removeListener = $361a76e6ea33591f$var$noop;
$361a76e6ea33591f$var$process.removeAllListeners = $361a76e6ea33591f$var$noop;
$361a76e6ea33591f$var$process.emit = $361a76e6ea33591f$var$noop;
$361a76e6ea33591f$var$process.prependListener = $361a76e6ea33591f$var$noop;
$361a76e6ea33591f$var$process.prependOnceListener = $361a76e6ea33591f$var$noop;
$361a76e6ea33591f$var$process.listeners = function(name) {
    return [];
};
$361a76e6ea33591f$var$process.binding = function(name) {
    throw new Error('process.binding is not supported');
};
$361a76e6ea33591f$var$process.cwd = function() {
    return '/';
};
$361a76e6ea33591f$var$process.chdir = function(dir) {
    throw new Error('process.chdir is not supported');
};
$361a76e6ea33591f$var$process.umask = function() {
    return 0;
};

});

parcelRegister("1YEmT", function(module, exports) {
// Currently in sync with Node.js lib/internal/util/types.js
// https://github.com/nodejs/node/commit/112cc7c27551254aa2b17098fb774867f05ed0d9
'use strict';

var $blfS1 = parcelRequire("blfS1");

var $3Fo5l = parcelRequire("3Fo5l");

var $idend = parcelRequire("idend");

var $72FfL = parcelRequire("72FfL");
function $170ab554337e8f4c$var$uncurryThis(f) {
    return f.call.bind(f);
}
var $170ab554337e8f4c$var$BigIntSupported = typeof BigInt !== 'undefined';
var $170ab554337e8f4c$var$SymbolSupported = typeof Symbol !== 'undefined';
var $170ab554337e8f4c$var$ObjectToString = $170ab554337e8f4c$var$uncurryThis(Object.prototype.toString);
var $170ab554337e8f4c$var$numberValue = $170ab554337e8f4c$var$uncurryThis(Number.prototype.valueOf);
var $170ab554337e8f4c$var$stringValue = $170ab554337e8f4c$var$uncurryThis(String.prototype.valueOf);
var $170ab554337e8f4c$var$booleanValue = $170ab554337e8f4c$var$uncurryThis(Boolean.prototype.valueOf);
if ($170ab554337e8f4c$var$BigIntSupported) var $170ab554337e8f4c$var$bigIntValue = $170ab554337e8f4c$var$uncurryThis(BigInt.prototype.valueOf);
if ($170ab554337e8f4c$var$SymbolSupported) var $170ab554337e8f4c$var$symbolValue = $170ab554337e8f4c$var$uncurryThis(Symbol.prototype.valueOf);
function $170ab554337e8f4c$var$checkBoxedPrimitive(value, prototypeValueOf) {
    if (typeof value !== 'object') return false;
    try {
        prototypeValueOf(value);
        return true;
    } catch (e) {
        return false;
    }
}
module.exports.isArgumentsObject = $blfS1;
module.exports.isGeneratorFunction = $3Fo5l;
module.exports.isTypedArray = $72FfL;
// Taken from here and modified for better browser support
// https://github.com/sindresorhus/p-is-promise/blob/cda35a513bda03f977ad5cde3a079d237e82d7ef/index.js
function $170ab554337e8f4c$var$isPromise(input) {
    return typeof Promise !== 'undefined' && input instanceof Promise || input !== null && typeof input === 'object' && typeof input.then === 'function' && typeof input.catch === 'function';
}
module.exports.isPromise = $170ab554337e8f4c$var$isPromise;
function $170ab554337e8f4c$var$isArrayBufferView(value) {
    if (typeof ArrayBuffer !== 'undefined' && ArrayBuffer.isView) return ArrayBuffer.isView(value);
    return $72FfL(value) || $170ab554337e8f4c$var$isDataView(value);
}
module.exports.isArrayBufferView = $170ab554337e8f4c$var$isArrayBufferView;
function $170ab554337e8f4c$var$isUint8Array(value) {
    return $idend(value) === 'Uint8Array';
}
module.exports.isUint8Array = $170ab554337e8f4c$var$isUint8Array;
function $170ab554337e8f4c$var$isUint8ClampedArray(value) {
    return $idend(value) === 'Uint8ClampedArray';
}
module.exports.isUint8ClampedArray = $170ab554337e8f4c$var$isUint8ClampedArray;
function $170ab554337e8f4c$var$isUint16Array(value) {
    return $idend(value) === 'Uint16Array';
}
module.exports.isUint16Array = $170ab554337e8f4c$var$isUint16Array;
function $170ab554337e8f4c$var$isUint32Array(value) {
    return $idend(value) === 'Uint32Array';
}
module.exports.isUint32Array = $170ab554337e8f4c$var$isUint32Array;
function $170ab554337e8f4c$var$isInt8Array(value) {
    return $idend(value) === 'Int8Array';
}
module.exports.isInt8Array = $170ab554337e8f4c$var$isInt8Array;
function $170ab554337e8f4c$var$isInt16Array(value) {
    return $idend(value) === 'Int16Array';
}
module.exports.isInt16Array = $170ab554337e8f4c$var$isInt16Array;
function $170ab554337e8f4c$var$isInt32Array(value) {
    return $idend(value) === 'Int32Array';
}
module.exports.isInt32Array = $170ab554337e8f4c$var$isInt32Array;
function $170ab554337e8f4c$var$isFloat32Array(value) {
    return $idend(value) === 'Float32Array';
}
module.exports.isFloat32Array = $170ab554337e8f4c$var$isFloat32Array;
function $170ab554337e8f4c$var$isFloat64Array(value) {
    return $idend(value) === 'Float64Array';
}
module.exports.isFloat64Array = $170ab554337e8f4c$var$isFloat64Array;
function $170ab554337e8f4c$var$isBigInt64Array(value) {
    return $idend(value) === 'BigInt64Array';
}
module.exports.isBigInt64Array = $170ab554337e8f4c$var$isBigInt64Array;
function $170ab554337e8f4c$var$isBigUint64Array(value) {
    return $idend(value) === 'BigUint64Array';
}
module.exports.isBigUint64Array = $170ab554337e8f4c$var$isBigUint64Array;
function $170ab554337e8f4c$var$isMapToString(value) {
    return $170ab554337e8f4c$var$ObjectToString(value) === '[object Map]';
}
$170ab554337e8f4c$var$isMapToString.working = typeof Map !== 'undefined' && $170ab554337e8f4c$var$isMapToString(new Map());
function $170ab554337e8f4c$var$isMap(value) {
    if (typeof Map === 'undefined') return false;
    return $170ab554337e8f4c$var$isMapToString.working ? $170ab554337e8f4c$var$isMapToString(value) : value instanceof Map;
}
module.exports.isMap = $170ab554337e8f4c$var$isMap;
function $170ab554337e8f4c$var$isSetToString(value) {
    return $170ab554337e8f4c$var$ObjectToString(value) === '[object Set]';
}
$170ab554337e8f4c$var$isSetToString.working = typeof Set !== 'undefined' && $170ab554337e8f4c$var$isSetToString(new Set());
function $170ab554337e8f4c$var$isSet(value) {
    if (typeof Set === 'undefined') return false;
    return $170ab554337e8f4c$var$isSetToString.working ? $170ab554337e8f4c$var$isSetToString(value) : value instanceof Set;
}
module.exports.isSet = $170ab554337e8f4c$var$isSet;
function $170ab554337e8f4c$var$isWeakMapToString(value) {
    return $170ab554337e8f4c$var$ObjectToString(value) === '[object WeakMap]';
}
$170ab554337e8f4c$var$isWeakMapToString.working = typeof WeakMap !== 'undefined' && $170ab554337e8f4c$var$isWeakMapToString(new WeakMap());
function $170ab554337e8f4c$var$isWeakMap(value) {
    if (typeof WeakMap === 'undefined') return false;
    return $170ab554337e8f4c$var$isWeakMapToString.working ? $170ab554337e8f4c$var$isWeakMapToString(value) : value instanceof WeakMap;
}
module.exports.isWeakMap = $170ab554337e8f4c$var$isWeakMap;
function $170ab554337e8f4c$var$isWeakSetToString(value) {
    return $170ab554337e8f4c$var$ObjectToString(value) === '[object WeakSet]';
}
$170ab554337e8f4c$var$isWeakSetToString.working = typeof WeakSet !== 'undefined' && $170ab554337e8f4c$var$isWeakSetToString(new WeakSet());
function $170ab554337e8f4c$var$isWeakSet(value) {
    return $170ab554337e8f4c$var$isWeakSetToString(value);
}
module.exports.isWeakSet = $170ab554337e8f4c$var$isWeakSet;
function $170ab554337e8f4c$var$isArrayBufferToString(value) {
    return $170ab554337e8f4c$var$ObjectToString(value) === '[object ArrayBuffer]';
}
$170ab554337e8f4c$var$isArrayBufferToString.working = typeof ArrayBuffer !== 'undefined' && $170ab554337e8f4c$var$isArrayBufferToString(new ArrayBuffer());
function $170ab554337e8f4c$var$isArrayBuffer(value) {
    if (typeof ArrayBuffer === 'undefined') return false;
    return $170ab554337e8f4c$var$isArrayBufferToString.working ? $170ab554337e8f4c$var$isArrayBufferToString(value) : value instanceof ArrayBuffer;
}
module.exports.isArrayBuffer = $170ab554337e8f4c$var$isArrayBuffer;
function $170ab554337e8f4c$var$isDataViewToString(value) {
    return $170ab554337e8f4c$var$ObjectToString(value) === '[object DataView]';
}
$170ab554337e8f4c$var$isDataViewToString.working = typeof ArrayBuffer !== 'undefined' && typeof DataView !== 'undefined' && $170ab554337e8f4c$var$isDataViewToString(new DataView(new ArrayBuffer(1), 0, 1));
function $170ab554337e8f4c$var$isDataView(value) {
    if (typeof DataView === 'undefined') return false;
    return $170ab554337e8f4c$var$isDataViewToString.working ? $170ab554337e8f4c$var$isDataViewToString(value) : value instanceof DataView;
}
module.exports.isDataView = $170ab554337e8f4c$var$isDataView;
// Store a copy of SharedArrayBuffer in case it's deleted elsewhere
var $170ab554337e8f4c$var$SharedArrayBufferCopy = typeof SharedArrayBuffer !== 'undefined' ? SharedArrayBuffer : undefined;
function $170ab554337e8f4c$var$isSharedArrayBufferToString(value) {
    return $170ab554337e8f4c$var$ObjectToString(value) === '[object SharedArrayBuffer]';
}
function $170ab554337e8f4c$var$isSharedArrayBuffer(value) {
    if (typeof $170ab554337e8f4c$var$SharedArrayBufferCopy === 'undefined') return false;
    if (typeof $170ab554337e8f4c$var$isSharedArrayBufferToString.working === 'undefined') $170ab554337e8f4c$var$isSharedArrayBufferToString.working = $170ab554337e8f4c$var$isSharedArrayBufferToString(new $170ab554337e8f4c$var$SharedArrayBufferCopy());
    return $170ab554337e8f4c$var$isSharedArrayBufferToString.working ? $170ab554337e8f4c$var$isSharedArrayBufferToString(value) : value instanceof $170ab554337e8f4c$var$SharedArrayBufferCopy;
}
module.exports.isSharedArrayBuffer = $170ab554337e8f4c$var$isSharedArrayBuffer;
function $170ab554337e8f4c$var$isAsyncFunction(value) {
    return $170ab554337e8f4c$var$ObjectToString(value) === '[object AsyncFunction]';
}
module.exports.isAsyncFunction = $170ab554337e8f4c$var$isAsyncFunction;
function $170ab554337e8f4c$var$isMapIterator(value) {
    return $170ab554337e8f4c$var$ObjectToString(value) === '[object Map Iterator]';
}
module.exports.isMapIterator = $170ab554337e8f4c$var$isMapIterator;
function $170ab554337e8f4c$var$isSetIterator(value) {
    return $170ab554337e8f4c$var$ObjectToString(value) === '[object Set Iterator]';
}
module.exports.isSetIterator = $170ab554337e8f4c$var$isSetIterator;
function $170ab554337e8f4c$var$isGeneratorObject(value) {
    return $170ab554337e8f4c$var$ObjectToString(value) === '[object Generator]';
}
module.exports.isGeneratorObject = $170ab554337e8f4c$var$isGeneratorObject;
function $170ab554337e8f4c$var$isWebAssemblyCompiledModule(value) {
    return $170ab554337e8f4c$var$ObjectToString(value) === '[object WebAssembly.Module]';
}
module.exports.isWebAssemblyCompiledModule = $170ab554337e8f4c$var$isWebAssemblyCompiledModule;
function $170ab554337e8f4c$var$isNumberObject(value) {
    return $170ab554337e8f4c$var$checkBoxedPrimitive(value, $170ab554337e8f4c$var$numberValue);
}
module.exports.isNumberObject = $170ab554337e8f4c$var$isNumberObject;
function $170ab554337e8f4c$var$isStringObject(value) {
    return $170ab554337e8f4c$var$checkBoxedPrimitive(value, $170ab554337e8f4c$var$stringValue);
}
module.exports.isStringObject = $170ab554337e8f4c$var$isStringObject;
function $170ab554337e8f4c$var$isBooleanObject(value) {
    return $170ab554337e8f4c$var$checkBoxedPrimitive(value, $170ab554337e8f4c$var$booleanValue);
}
module.exports.isBooleanObject = $170ab554337e8f4c$var$isBooleanObject;
function $170ab554337e8f4c$var$isBigIntObject(value) {
    return $170ab554337e8f4c$var$BigIntSupported && $170ab554337e8f4c$var$checkBoxedPrimitive(value, $170ab554337e8f4c$var$bigIntValue);
}
module.exports.isBigIntObject = $170ab554337e8f4c$var$isBigIntObject;
function $170ab554337e8f4c$var$isSymbolObject(value) {
    return $170ab554337e8f4c$var$SymbolSupported && $170ab554337e8f4c$var$checkBoxedPrimitive(value, $170ab554337e8f4c$var$symbolValue);
}
module.exports.isSymbolObject = $170ab554337e8f4c$var$isSymbolObject;
function $170ab554337e8f4c$var$isBoxedPrimitive(value) {
    return $170ab554337e8f4c$var$isNumberObject(value) || $170ab554337e8f4c$var$isStringObject(value) || $170ab554337e8f4c$var$isBooleanObject(value) || $170ab554337e8f4c$var$isBigIntObject(value) || $170ab554337e8f4c$var$isSymbolObject(value);
}
module.exports.isBoxedPrimitive = $170ab554337e8f4c$var$isBoxedPrimitive;
function $170ab554337e8f4c$var$isAnyArrayBuffer(value) {
    return typeof Uint8Array !== 'undefined' && ($170ab554337e8f4c$var$isArrayBuffer(value) || $170ab554337e8f4c$var$isSharedArrayBuffer(value));
}
module.exports.isAnyArrayBuffer = $170ab554337e8f4c$var$isAnyArrayBuffer;
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
parcelRegister("blfS1", function(module, exports) {
'use strict';

var $841df76715d6998c$var$hasToStringTag = (parcelRequire("lv9Si"))();

var $45BCf = parcelRequire("45BCf");
var $841df76715d6998c$var$$toString = $45BCf('Object.prototype.toString');
/** @type {import('.')} */ var $841df76715d6998c$var$isStandardArguments = function isArguments(value) {
    if ($841df76715d6998c$var$hasToStringTag && value && typeof value === 'object' && Symbol.toStringTag in value) return false;
    return $841df76715d6998c$var$$toString(value) === '[object Arguments]';
};
/** @type {import('.')} */ var $841df76715d6998c$var$isLegacyArguments = function isArguments(value) {
    if ($841df76715d6998c$var$isStandardArguments(value)) return true;
    return value !== null && typeof value === 'object' && 'length' in value && typeof value.length === 'number' && value.length >= 0 && $841df76715d6998c$var$$toString(value) !== '[object Array]' && 'callee' in value && $841df76715d6998c$var$$toString(value.callee) === '[object Function]';
};
var $841df76715d6998c$var$supportsStandardArguments = function() {
    return $841df76715d6998c$var$isStandardArguments(arguments);
}();
// @ts-expect-error TODO make this not error
$841df76715d6998c$var$isStandardArguments.isLegacyArguments = $841df76715d6998c$var$isLegacyArguments; // for tests
/** @type {import('.')} */ module.exports = $841df76715d6998c$var$supportsStandardArguments ? $841df76715d6998c$var$isStandardArguments : $841df76715d6998c$var$isLegacyArguments;

});
parcelRegister("lv9Si", function(module, exports) {
'use strict';

var $hyLgC = parcelRequire("hyLgC");
/** @type {import('.')} */ module.exports = function hasToStringTagShams() {
    return $hyLgC() && !!Symbol.toStringTag;
};

});
parcelRegister("hyLgC", function(module, exports) {
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


parcelRegister("45BCf", function(module, exports) {
'use strict';

var $9i2m0 = parcelRequire("9i2m0");

var $2WHEN = parcelRequire("2WHEN");
/** @type {(thisArg: string, searchString: string, position?: number) => number} */ var $2fa4cecb182009eb$var$$indexOf = $2WHEN([
    $9i2m0('%String.prototype.indexOf%')
]);
/** @type {import('.')} */ module.exports = function callBoundIntrinsic(name, allowMissing) {
    /* eslint no-extra-parens: 0 */ var intrinsic = /** @type {(this: unknown, ...args: unknown[]) => unknown} */ $9i2m0(name, !!allowMissing);
    if (typeof intrinsic === 'function' && $2fa4cecb182009eb$var$$indexOf(name, '.prototype.') > -1) return $2WHEN(/** @type {const} */ [
        intrinsic
    ]);
    return intrinsic;
};

});
parcelRegister("9i2m0", function(module, exports) {
'use strict';
var $6c379ef42bd27da7$var$undefined1;

var $3C2rv = parcelRequire("3C2rv");

var $3m4fy = parcelRequire("3m4fy");

var $8oO1l = parcelRequire("8oO1l");

var $eRew9 = parcelRequire("eRew9");

var $3oxwt = parcelRequire("3oxwt");

var $2hnFc = parcelRequire("2hnFc");

var $5zdHu = parcelRequire("5zdHu");

var $i1Sop = parcelRequire("i1Sop");

var $hmLLf = parcelRequire("hmLLf");

var $1q3Eb = parcelRequire("1q3Eb");

var $35L2X = parcelRequire("35L2X");

var $lDGPe = parcelRequire("lDGPe");

var $jx6gG = parcelRequire("jx6gG");

var $4Xm3M = parcelRequire("4Xm3M");

var $lvT3z = parcelRequire("lvT3z");
var $6c379ef42bd27da7$var$$Function = Function;
// eslint-disable-next-line consistent-return
var $6c379ef42bd27da7$var$getEvalledConstructor = function(expressionSyntax) {
    try {
        return $6c379ef42bd27da7$var$$Function('"use strict"; return (' + expressionSyntax + ').constructor;')();
    } catch (e) {}
};

var $bJVQv = parcelRequire("bJVQv");

var $4Sfyb = parcelRequire("4Sfyb");
var $6c379ef42bd27da7$var$throwTypeError = function() {
    throw new $5zdHu();
};
var $6c379ef42bd27da7$var$ThrowTypeError = $bJVQv ? function() {
    try {
        // eslint-disable-next-line no-unused-expressions, no-caller, no-restricted-properties
        arguments.callee; // IE 8 does not throw here
        return $6c379ef42bd27da7$var$throwTypeError;
    } catch (calleeThrows) {
        try {
            // IE 8 throws on Object.getOwnPropertyDescriptor(arguments, '')
            return $bJVQv(arguments, 'callee').get;
        } catch (gOPDthrows) {
            return $6c379ef42bd27da7$var$throwTypeError;
        }
    }
}() : $6c379ef42bd27da7$var$throwTypeError;

var $6c379ef42bd27da7$var$hasSymbols = (parcelRequire("4hDtc"))();

var $5v4Nf = parcelRequire("5v4Nf");

var $4R3Ax = parcelRequire("4R3Ax");

var $iEXzV = parcelRequire("iEXzV");

var $a9dGt = parcelRequire("a9dGt");

var $gC2yN = parcelRequire("gC2yN");
var $6c379ef42bd27da7$var$needsEval = {};
var $6c379ef42bd27da7$var$TypedArray = typeof Uint8Array === 'undefined' || !$5v4Nf ? undefined : $5v4Nf(Uint8Array);
var $6c379ef42bd27da7$var$INTRINSICS = {
    __proto__: null,
    '%AggregateError%': typeof AggregateError === 'undefined' ? undefined : AggregateError,
    '%Array%': Array,
    '%ArrayBuffer%': typeof ArrayBuffer === 'undefined' ? undefined : ArrayBuffer,
    '%ArrayIteratorPrototype%': $6c379ef42bd27da7$var$hasSymbols && $5v4Nf ? $5v4Nf([][Symbol.iterator]()) : undefined,
    '%AsyncFromSyncIteratorPrototype%': undefined,
    '%AsyncFunction%': $6c379ef42bd27da7$var$needsEval,
    '%AsyncGenerator%': $6c379ef42bd27da7$var$needsEval,
    '%AsyncGeneratorFunction%': $6c379ef42bd27da7$var$needsEval,
    '%AsyncIteratorPrototype%': $6c379ef42bd27da7$var$needsEval,
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
    '%Error%': $3m4fy,
    '%eval%': eval,
    '%EvalError%': $8oO1l,
    '%Float16Array%': typeof Float16Array === 'undefined' ? undefined : Float16Array,
    '%Float32Array%': typeof Float32Array === 'undefined' ? undefined : Float32Array,
    '%Float64Array%': typeof Float64Array === 'undefined' ? undefined : Float64Array,
    '%FinalizationRegistry%': typeof FinalizationRegistry === 'undefined' ? undefined : FinalizationRegistry,
    '%Function%': $6c379ef42bd27da7$var$$Function,
    '%GeneratorFunction%': $6c379ef42bd27da7$var$needsEval,
    '%Int8Array%': typeof Int8Array === 'undefined' ? undefined : Int8Array,
    '%Int16Array%': typeof Int16Array === 'undefined' ? undefined : Int16Array,
    '%Int32Array%': typeof Int32Array === 'undefined' ? undefined : Int32Array,
    '%isFinite%': isFinite,
    '%isNaN%': isNaN,
    '%IteratorPrototype%': $6c379ef42bd27da7$var$hasSymbols && $5v4Nf ? $5v4Nf($5v4Nf([][Symbol.iterator]())) : undefined,
    '%JSON%': typeof JSON === 'object' ? JSON : undefined,
    '%Map%': typeof Map === 'undefined' ? undefined : Map,
    '%MapIteratorPrototype%': typeof Map === 'undefined' || !$6c379ef42bd27da7$var$hasSymbols || !$5v4Nf ? undefined : $5v4Nf(new Map()[Symbol.iterator]()),
    '%Math%': Math,
    '%Number%': Number,
    '%Object%': $3C2rv,
    '%Object.getOwnPropertyDescriptor%': $bJVQv,
    '%parseFloat%': parseFloat,
    '%parseInt%': parseInt,
    '%Promise%': typeof Promise === 'undefined' ? undefined : Promise,
    '%Proxy%': typeof Proxy === 'undefined' ? undefined : Proxy,
    '%RangeError%': $eRew9,
    '%ReferenceError%': $3oxwt,
    '%Reflect%': typeof Reflect === 'undefined' ? undefined : Reflect,
    '%RegExp%': RegExp,
    '%Set%': typeof Set === 'undefined' ? undefined : Set,
    '%SetIteratorPrototype%': typeof Set === 'undefined' || !$6c379ef42bd27da7$var$hasSymbols || !$5v4Nf ? undefined : $5v4Nf(new Set()[Symbol.iterator]()),
    '%SharedArrayBuffer%': typeof SharedArrayBuffer === 'undefined' ? undefined : SharedArrayBuffer,
    '%String%': String,
    '%StringIteratorPrototype%': $6c379ef42bd27da7$var$hasSymbols && $5v4Nf ? $5v4Nf(''[Symbol.iterator]()) : undefined,
    '%Symbol%': $6c379ef42bd27da7$var$hasSymbols ? Symbol : undefined,
    '%SyntaxError%': $2hnFc,
    '%ThrowTypeError%': $6c379ef42bd27da7$var$ThrowTypeError,
    '%TypedArray%': $6c379ef42bd27da7$var$TypedArray,
    '%TypeError%': $5zdHu,
    '%Uint8Array%': typeof Uint8Array === 'undefined' ? undefined : Uint8Array,
    '%Uint8ClampedArray%': typeof Uint8ClampedArray === 'undefined' ? undefined : Uint8ClampedArray,
    '%Uint16Array%': typeof Uint16Array === 'undefined' ? undefined : Uint16Array,
    '%Uint32Array%': typeof Uint32Array === 'undefined' ? undefined : Uint32Array,
    '%URIError%': $i1Sop,
    '%WeakMap%': typeof WeakMap === 'undefined' ? undefined : WeakMap,
    '%WeakRef%': typeof WeakRef === 'undefined' ? undefined : WeakRef,
    '%WeakSet%': typeof WeakSet === 'undefined' ? undefined : WeakSet,
    '%Function.prototype.call%': $gC2yN,
    '%Function.prototype.apply%': $a9dGt,
    '%Object.defineProperty%': $4Sfyb,
    '%Object.getPrototypeOf%': $4R3Ax,
    '%Math.abs%': $hmLLf,
    '%Math.floor%': $1q3Eb,
    '%Math.max%': $35L2X,
    '%Math.min%': $lDGPe,
    '%Math.pow%': $jx6gG,
    '%Math.round%': $4Xm3M,
    '%Math.sign%': $lvT3z,
    '%Reflect.getPrototypeOf%': $iEXzV
};
if ($5v4Nf) try {
    null.error; // eslint-disable-line no-unused-expressions
} catch (e) {
    // https://github.com/tc39/proposal-shadowrealm/pull/384#issuecomment-1364264229
    var $6c379ef42bd27da7$var$errorProto = $5v4Nf($5v4Nf(e));
    $6c379ef42bd27da7$var$INTRINSICS['%Error.prototype%'] = $6c379ef42bd27da7$var$errorProto;
}
var $6c379ef42bd27da7$var$doEval = function doEval(name) {
    var value;
    if (name === '%AsyncFunction%') value = $6c379ef42bd27da7$var$getEvalledConstructor('async function () {}');
    else if (name === '%GeneratorFunction%') value = $6c379ef42bd27da7$var$getEvalledConstructor('function* () {}');
    else if (name === '%AsyncGeneratorFunction%') value = $6c379ef42bd27da7$var$getEvalledConstructor('async function* () {}');
    else if (name === '%AsyncGenerator%') {
        var fn = doEval('%AsyncGeneratorFunction%');
        if (fn) value = fn.prototype;
    } else if (name === '%AsyncIteratorPrototype%') {
        var gen = doEval('%AsyncGenerator%');
        if (gen && $5v4Nf) value = $5v4Nf(gen.prototype);
    }
    $6c379ef42bd27da7$var$INTRINSICS[name] = value;
    return value;
};
var $6c379ef42bd27da7$var$LEGACY_ALIASES = {
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

var $1MnY9 = parcelRequire("1MnY9");

var $9tArM = parcelRequire("9tArM");
var $6c379ef42bd27da7$var$$concat = $1MnY9.call($gC2yN, Array.prototype.concat);
var $6c379ef42bd27da7$var$$spliceApply = $1MnY9.call($a9dGt, Array.prototype.splice);
var $6c379ef42bd27da7$var$$replace = $1MnY9.call($gC2yN, String.prototype.replace);
var $6c379ef42bd27da7$var$$strSlice = $1MnY9.call($gC2yN, String.prototype.slice);
var $6c379ef42bd27da7$var$$exec = $1MnY9.call($gC2yN, RegExp.prototype.exec);
/* adapted from https://github.com/lodash/lodash/blob/4.17.15/dist/lodash.js#L6735-L6744 */ var $6c379ef42bd27da7$var$rePropName = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g;
var $6c379ef42bd27da7$var$reEscapeChar = /\\(\\)?/g; /** Used to match backslashes in property paths. */ 
var $6c379ef42bd27da7$var$stringToPath = function stringToPath(string) {
    var first = $6c379ef42bd27da7$var$$strSlice(string, 0, 1);
    var last = $6c379ef42bd27da7$var$$strSlice(string, -1);
    if (first === '%' && last !== '%') throw new $2hnFc('invalid intrinsic syntax, expected closing `%`');
    else if (last === '%' && first !== '%') throw new $2hnFc('invalid intrinsic syntax, expected opening `%`');
    var result = [];
    $6c379ef42bd27da7$var$$replace(string, $6c379ef42bd27da7$var$rePropName, function(match, number, quote, subString) {
        result[result.length] = quote ? $6c379ef42bd27da7$var$$replace(subString, $6c379ef42bd27da7$var$reEscapeChar, '$1') : number || match;
    });
    return result;
};
/* end adaptation */ var $6c379ef42bd27da7$var$getBaseIntrinsic = function getBaseIntrinsic(name, allowMissing) {
    var intrinsicName = name;
    var alias;
    if ($9tArM($6c379ef42bd27da7$var$LEGACY_ALIASES, intrinsicName)) {
        alias = $6c379ef42bd27da7$var$LEGACY_ALIASES[intrinsicName];
        intrinsicName = '%' + alias[0] + '%';
    }
    if ($9tArM($6c379ef42bd27da7$var$INTRINSICS, intrinsicName)) {
        var value = $6c379ef42bd27da7$var$INTRINSICS[intrinsicName];
        if (value === $6c379ef42bd27da7$var$needsEval) value = $6c379ef42bd27da7$var$doEval(intrinsicName);
        if (typeof value === 'undefined' && !allowMissing) throw new $5zdHu('intrinsic ' + name + ' exists, but is not available. Please file an issue!');
        return {
            alias: alias,
            name: intrinsicName,
            value: value
        };
    }
    throw new $2hnFc('intrinsic ' + name + ' does not exist!');
};
module.exports = function GetIntrinsic(name, allowMissing) {
    if (typeof name !== 'string' || name.length === 0) throw new $5zdHu('intrinsic name must be a non-empty string');
    if (arguments.length > 1 && typeof allowMissing !== 'boolean') throw new $5zdHu('"allowMissing" argument must be a boolean');
    if ($6c379ef42bd27da7$var$$exec(/^%?[^%]*%?$/, name) === null) throw new $2hnFc('`%` may not be present anywhere but at the beginning and end of the intrinsic name');
    var parts = $6c379ef42bd27da7$var$stringToPath(name);
    var intrinsicBaseName = parts.length > 0 ? parts[0] : '';
    var intrinsic = $6c379ef42bd27da7$var$getBaseIntrinsic('%' + intrinsicBaseName + '%', allowMissing);
    var intrinsicRealName = intrinsic.name;
    var value = intrinsic.value;
    var skipFurtherCaching = false;
    var alias = intrinsic.alias;
    if (alias) {
        intrinsicBaseName = alias[0];
        $6c379ef42bd27da7$var$$spliceApply(parts, $6c379ef42bd27da7$var$$concat([
            0,
            1
        ], alias));
    }
    for(var i = 1, isOwn = true; i < parts.length; i += 1){
        var part = parts[i];
        var first = $6c379ef42bd27da7$var$$strSlice(part, 0, 1);
        var last = $6c379ef42bd27da7$var$$strSlice(part, -1);
        if ((first === '"' || first === "'" || first === '`' || last === '"' || last === "'" || last === '`') && first !== last) throw new $2hnFc('property names with quotes must have matching quotes');
        if (part === 'constructor' || !isOwn) skipFurtherCaching = true;
        intrinsicBaseName += '.' + part;
        intrinsicRealName = '%' + intrinsicBaseName + '%';
        if ($9tArM($6c379ef42bd27da7$var$INTRINSICS, intrinsicRealName)) value = $6c379ef42bd27da7$var$INTRINSICS[intrinsicRealName];
        else if (value != null) {
            if (!(part in value)) {
                if (!allowMissing) throw new $5zdHu('base intrinsic for ' + name + ' exists, but the property is not available.');
                return void 0;
            }
            if ($bJVQv && i + 1 >= parts.length) {
                var desc = $bJVQv(value, part);
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
                isOwn = $9tArM(value, part);
                value = value[part];
            }
            if (isOwn && !skipFurtherCaching) $6c379ef42bd27da7$var$INTRINSICS[intrinsicRealName] = value;
        }
    }
    return value;
};

});
parcelRegister("3C2rv", function(module, exports) {
'use strict';
/** @type {import('.')} */ module.exports = Object;

});

parcelRegister("3m4fy", function(module, exports) {
'use strict';
/** @type {import('.')} */ module.exports = Error;

});

parcelRegister("8oO1l", function(module, exports) {
'use strict';
/** @type {import('./eval')} */ module.exports = EvalError;

});

parcelRegister("eRew9", function(module, exports) {
'use strict';
/** @type {import('./range')} */ module.exports = RangeError;

});

parcelRegister("3oxwt", function(module, exports) {
'use strict';
/** @type {import('./ref')} */ module.exports = ReferenceError;

});

parcelRegister("2hnFc", function(module, exports) {
'use strict';
/** @type {import('./syntax')} */ module.exports = SyntaxError;

});

parcelRegister("5zdHu", function(module, exports) {
'use strict';
/** @type {import('./type')} */ module.exports = TypeError;

});

parcelRegister("i1Sop", function(module, exports) {
'use strict';
/** @type {import('./uri')} */ module.exports = URIError;

});

parcelRegister("hmLLf", function(module, exports) {
'use strict';
/** @type {import('./abs')} */ module.exports = Math.abs;

});

parcelRegister("1q3Eb", function(module, exports) {
'use strict';
/** @type {import('./floor')} */ module.exports = Math.floor;

});

parcelRegister("35L2X", function(module, exports) {
'use strict';
/** @type {import('./max')} */ module.exports = Math.max;

});

parcelRegister("lDGPe", function(module, exports) {
'use strict';
/** @type {import('./min')} */ module.exports = Math.min;

});

parcelRegister("jx6gG", function(module, exports) {
'use strict';
/** @type {import('./pow')} */ module.exports = Math.pow;

});

parcelRegister("4Xm3M", function(module, exports) {
'use strict';
/** @type {import('./round')} */ module.exports = Math.round;

});

parcelRegister("lvT3z", function(module, exports) {
'use strict';

var $fR3rH = parcelRequire("fR3rH");
/** @type {import('./sign')} */ module.exports = function sign(number) {
    if ($fR3rH(number) || number === 0) return number;
    return number < 0 ? -1 : 1;
};

});
parcelRegister("fR3rH", function(module, exports) {
'use strict';
/** @type {import('./isNaN')} */ module.exports = Number.isNaN || function isNaN(a) {
    return a !== a;
};

});


parcelRegister("bJVQv", function(module, exports) {
'use strict';

var $iy9XF = parcelRequire("iy9XF");
var $88c0c4a6abffb5e6$require$$gOPD = $iy9XF;
if ($88c0c4a6abffb5e6$require$$gOPD) try {
    $88c0c4a6abffb5e6$require$$gOPD([], 'length');
} catch (e) {
    // IE 8 has a broken gOPD
    $88c0c4a6abffb5e6$require$$gOPD = null;
}
module.exports = $88c0c4a6abffb5e6$require$$gOPD;

});
parcelRegister("iy9XF", function(module, exports) {
'use strict';
/** @type {import('./gOPD')} */ module.exports = Object.getOwnPropertyDescriptor;

});


parcelRegister("4Sfyb", function(module, exports) {
'use strict';
/** @type {import('.')} */ var $38c8448ef713695a$var$$defineProperty = Object.defineProperty || false;
if ($38c8448ef713695a$var$$defineProperty) try {
    $38c8448ef713695a$var$$defineProperty({}, 'a', {
        value: 1
    });
} catch (e) {
    // IE 8 has a broken defineProperty
    $38c8448ef713695a$var$$defineProperty = false;
}
module.exports = $38c8448ef713695a$var$$defineProperty;

});

parcelRegister("4hDtc", function(module, exports) {
'use strict';
var $31e75de324cd087f$var$origSymbol = typeof Symbol !== 'undefined' && Symbol;

var $hyLgC = parcelRequire("hyLgC");
/** @type {import('.')} */ module.exports = function hasNativeSymbols() {
    if (typeof $31e75de324cd087f$var$origSymbol !== 'function') return false;
    if (typeof Symbol !== 'function') return false;
    if (typeof $31e75de324cd087f$var$origSymbol('foo') !== 'symbol') return false;
    if (typeof Symbol('bar') !== 'symbol') return false;
    return $hyLgC();
};

});

parcelRegister("5v4Nf", function(module, exports) {
'use strict';

var $iEXzV = parcelRequire("iEXzV");

var $4R3Ax = parcelRequire("4R3Ax");

var $3Eygv = parcelRequire("3Eygv");
/** @type {import('.')} */ module.exports = $iEXzV ? function getProto(O) {
    // @ts-expect-error TS can't narrow inside a closure, for some reason
    return $iEXzV(O);
} : $4R3Ax ? function getProto(O) {
    if (!O || typeof O !== 'object' && typeof O !== 'function') throw new TypeError('getProto: not an object');
    // @ts-expect-error TS can't narrow inside a closure, for some reason
    return $4R3Ax(O);
} : $3Eygv ? function getProto(O) {
    // @ts-expect-error TS can't narrow inside a closure, for some reason
    return $3Eygv(O);
} : null;

});
parcelRegister("iEXzV", function(module, exports) {
'use strict';
/** @type {import('./Reflect.getPrototypeOf')} */ module.exports = typeof Reflect !== 'undefined' && Reflect.getPrototypeOf || null;

});

parcelRegister("4R3Ax", function(module, exports) {
'use strict';

var $3C2rv = parcelRequire("3C2rv");
/** @type {import('./Object.getPrototypeOf')} */ module.exports = $3C2rv.getPrototypeOf || null;

});

parcelRegister("3Eygv", function(module, exports) {
'use strict';

var $2WHEN = parcelRequire("2WHEN");

var $bJVQv = parcelRequire("bJVQv");
var $2a8fafe26464d771$var$hasProtoAccessor;
try {
    // eslint-disable-next-line no-extra-parens, no-proto
    $2a8fafe26464d771$var$hasProtoAccessor = /** @type {{ __proto__?: typeof Array.prototype }} */ [].__proto__ === Array.prototype;
} catch (e) {
    if (!e || typeof e !== 'object' || !('code' in e) || e.code !== 'ERR_PROTO_ACCESS') throw e;
}
// eslint-disable-next-line no-extra-parens
var $2a8fafe26464d771$var$desc = !!$2a8fafe26464d771$var$hasProtoAccessor && $bJVQv && $bJVQv(Object.prototype, /** @type {keyof typeof Object.prototype} */ '__proto__');
var $2a8fafe26464d771$var$$Object = Object;
var $2a8fafe26464d771$var$$getPrototypeOf = $2a8fafe26464d771$var$$Object.getPrototypeOf;
/** @type {import('./get')} */ module.exports = $2a8fafe26464d771$var$desc && typeof $2a8fafe26464d771$var$desc.get === 'function' ? $2WHEN([
    $2a8fafe26464d771$var$desc.get
]) : typeof $2a8fafe26464d771$var$$getPrototypeOf === 'function' ? /** @type {import('./get')} */ function getDunder(value) {
    // eslint-disable-next-line eqeqeq
    return $2a8fafe26464d771$var$$getPrototypeOf(value == null ? value : $2a8fafe26464d771$var$$Object(value));
} : false;

});
parcelRegister("2WHEN", function(module, exports) {
'use strict';

var $1MnY9 = parcelRequire("1MnY9");

var $5zdHu = parcelRequire("5zdHu");

var $gC2yN = parcelRequire("gC2yN");

var $6thZZ = parcelRequire("6thZZ");
/** @type {(args: [Function, thisArg?: unknown, ...args: unknown[]]) => Function} TODO FIXME, find a way to use import('.') */ module.exports = function callBindBasic(args) {
    if (args.length < 1 || typeof args[0] !== 'function') throw new $5zdHu('a function is required');
    return $6thZZ($1MnY9, $gC2yN, args);
};

});
parcelRegister("1MnY9", function(module, exports) {
'use strict';

var $OgEAC = parcelRequire("OgEAC");
module.exports = Function.prototype.bind || $OgEAC;

});
parcelRegister("OgEAC", function(module, exports) {
'use strict';
/* eslint no-invalid-this: 1 */ var $097196b2e6122181$var$ERROR_MESSAGE = 'Function.prototype.bind called on incompatible ';
var $097196b2e6122181$var$toStr = Object.prototype.toString;
var $097196b2e6122181$var$max = Math.max;
var $097196b2e6122181$var$funcType = '[object Function]';
var $097196b2e6122181$var$concatty = function concatty(a, b) {
    var arr = [];
    for(var i = 0; i < a.length; i += 1)arr[i] = a[i];
    for(var j = 0; j < b.length; j += 1)arr[j + a.length] = b[j];
    return arr;
};
var $097196b2e6122181$var$slicy = function slicy(arrLike, offset) {
    var arr = [];
    for(var i = offset || 0, j = 0; i < arrLike.length; i += 1, j += 1)arr[j] = arrLike[i];
    return arr;
};
var $097196b2e6122181$var$joiny = function(arr, joiner) {
    var str = '';
    for(var i = 0; i < arr.length; i += 1){
        str += arr[i];
        if (i + 1 < arr.length) str += joiner;
    }
    return str;
};
module.exports = function bind(that) {
    var target = this;
    if (typeof target !== 'function' || $097196b2e6122181$var$toStr.apply(target) !== $097196b2e6122181$var$funcType) throw new TypeError($097196b2e6122181$var$ERROR_MESSAGE + target);
    var args = $097196b2e6122181$var$slicy(arguments, 1);
    var bound;
    var binder = function() {
        if (this instanceof bound) {
            var result = target.apply(this, $097196b2e6122181$var$concatty(args, arguments));
            if (Object(result) === result) return result;
            return this;
        }
        return target.apply(that, $097196b2e6122181$var$concatty(args, arguments));
    };
    var boundLength = $097196b2e6122181$var$max(0, target.length - args.length);
    var boundArgs = [];
    for(var i = 0; i < boundLength; i++)boundArgs[i] = '$' + i;
    bound = Function('binder', 'return function (' + $097196b2e6122181$var$joiny(boundArgs, ',') + '){ return binder.apply(this,arguments); }')(binder);
    if (target.prototype) {
        var Empty = function Empty() {};
        Empty.prototype = target.prototype;
        bound.prototype = new Empty();
        Empty.prototype = null;
    }
    return bound;
};

});


parcelRegister("gC2yN", function(module, exports) {
'use strict';
/** @type {import('./functionCall')} */ module.exports = Function.prototype.call;

});

parcelRegister("6thZZ", function(module, exports) {
'use strict';

var $1MnY9 = parcelRequire("1MnY9");

var $a9dGt = parcelRequire("a9dGt");

var $gC2yN = parcelRequire("gC2yN");

var $7Xb99 = parcelRequire("7Xb99");
/** @type {import('./actualApply')} */ module.exports = $7Xb99 || $1MnY9.call($gC2yN, $a9dGt);

});
parcelRegister("a9dGt", function(module, exports) {
'use strict';
/** @type {import('./functionApply')} */ module.exports = Function.prototype.apply;

});

parcelRegister("7Xb99", function(module, exports) {
'use strict';
/** @type {import('./reflectApply')} */ module.exports = typeof Reflect !== 'undefined' && Reflect && Reflect.apply;

});





parcelRegister("9tArM", function(module, exports) {
'use strict';
var $6e63181fc9decbb1$var$call = Function.prototype.call;
var $6e63181fc9decbb1$var$$hasOwn = Object.prototype.hasOwnProperty;

var $1MnY9 = parcelRequire("1MnY9");
/** @type {import('.')} */ module.exports = $1MnY9.call($6e63181fc9decbb1$var$call, $6e63181fc9decbb1$var$$hasOwn);

});




parcelRegister("3Fo5l", function(module, exports) {
'use strict';

var $45BCf = parcelRequire("45BCf");

var $jU3yN = parcelRequire("jU3yN");
var $2ab7e241e02fe2cf$var$isFnRegex = $jU3yN(/^\s*(?:function)?\*/);

var $2ab7e241e02fe2cf$var$hasToStringTag = (parcelRequire("lv9Si"))();

var $5v4Nf = parcelRequire("5v4Nf");
var $2ab7e241e02fe2cf$var$toStr = $45BCf('Object.prototype.toString');
var $2ab7e241e02fe2cf$var$fnToStr = $45BCf('Function.prototype.toString');

var $9OeFY = parcelRequire("9OeFY");
/** @type {import('.')} */ module.exports = function isGeneratorFunction(fn) {
    if (typeof fn !== 'function') return false;
    if ($2ab7e241e02fe2cf$var$isFnRegex($2ab7e241e02fe2cf$var$fnToStr(fn))) return true;
    if (!$2ab7e241e02fe2cf$var$hasToStringTag) {
        var str = $2ab7e241e02fe2cf$var$toStr(fn);
        return str === '[object GeneratorFunction]';
    }
    if (!$5v4Nf) return false;
    var GeneratorFunction = $9OeFY();
    return GeneratorFunction && $5v4Nf(fn) === GeneratorFunction.prototype;
};

});
parcelRegister("jU3yN", function(module, exports) {
'use strict';

var $45BCf = parcelRequire("45BCf");

var $3dkr1 = parcelRequire("3dkr1");
var $e7d60241956d39d7$var$$exec = $45BCf('RegExp.prototype.exec');

var $5zdHu = parcelRequire("5zdHu");
/** @type {import('.')} */ module.exports = function regexTester(regex) {
    if (!$3dkr1(regex)) throw new $5zdHu('`regex` must be a RegExp');
    return function test(s) {
        return $e7d60241956d39d7$var$$exec(regex, s) !== null;
    };
};

});
parcelRegister("3dkr1", function(module, exports) {
'use strict';

var $45BCf = parcelRequire("45BCf");

var $25726fee313a3c40$var$hasToStringTag = (parcelRequire("lv9Si"))();

var $9tArM = parcelRequire("9tArM");

var $bJVQv = parcelRequire("bJVQv");
/** @type {import('.')} */ var $25726fee313a3c40$var$fn;
if ($25726fee313a3c40$var$hasToStringTag) {
    /** @type {(receiver: ThisParameterType<typeof RegExp.prototype.exec>, ...args: Parameters<typeof RegExp.prototype.exec>) => ReturnType<typeof RegExp.prototype.exec>} */ var $25726fee313a3c40$var$$exec = $45BCf('RegExp.prototype.exec');
    /** @type {object} */ var $25726fee313a3c40$var$isRegexMarker = {};
    var $25726fee313a3c40$var$throwRegexMarker = function() {
        throw $25726fee313a3c40$var$isRegexMarker;
    };
    /** @type {{ toString(): never, valueOf(): never, [Symbol.toPrimitive]?(): never }} */ var $25726fee313a3c40$var$badStringifier = {
        toString: $25726fee313a3c40$var$throwRegexMarker,
        valueOf: $25726fee313a3c40$var$throwRegexMarker
    };
    if (typeof Symbol.toPrimitive === 'symbol') $25726fee313a3c40$var$badStringifier[Symbol.toPrimitive] = $25726fee313a3c40$var$throwRegexMarker;
    /** @type {import('.')} */ // @ts-expect-error TS can't figure out that the $exec call always throws
    // eslint-disable-next-line consistent-return
    $25726fee313a3c40$var$fn = function isRegex(value) {
        if (!value || typeof value !== 'object') return false;
        // eslint-disable-next-line no-extra-parens
        var descriptor = /** @type {NonNullable<typeof gOPD>} */ $bJVQv(/** @type {{ lastIndex?: unknown }} */ value, 'lastIndex');
        var hasLastIndexDataProperty = descriptor && $9tArM(descriptor, 'value');
        if (!hasLastIndexDataProperty) return false;
        try {
            // eslint-disable-next-line no-extra-parens
            $25726fee313a3c40$var$$exec(value, /** @type {unknown} */ $25726fee313a3c40$var$badStringifier);
        } catch (e) {
            return e === $25726fee313a3c40$var$isRegexMarker;
        }
    };
} else {
    /** @type {(receiver: ThisParameterType<typeof Object.prototype.toString>, ...args: Parameters<typeof Object.prototype.toString>) => ReturnType<typeof Object.prototype.toString>} */ var $25726fee313a3c40$var$$toString = $45BCf('Object.prototype.toString');
    /** @const @type {'[object RegExp]'} */ var $25726fee313a3c40$var$regexClass = '[object RegExp]';
    /** @type {import('.')} */ $25726fee313a3c40$var$fn = function isRegex(value) {
        // In older browsers, typeof regex incorrectly returns 'function'
        if (!value || typeof value !== 'object' && typeof value !== 'function') return false;
        return $25726fee313a3c40$var$$toString(value) === $25726fee313a3c40$var$regexClass;
    };
}
module.exports = $25726fee313a3c40$var$fn;

});


parcelRegister("9OeFY", function(module, exports) {

$parcel$defineInteropFlag(module.exports);

$parcel$export(module.exports, "default", () => $33063670d237b179$export$2e2bcd8739ae039);

var $8RUGi = parcelRequire("8RUGi");
var /** @type {import('./index.d.mts').default} */ $33063670d237b179$export$2e2bcd8739ae039 = (0, (/*@__PURE__*/$parcel$interopDefault($8RUGi)));

});
parcelRegister("8RUGi", function(module, exports) {
'use strict';
// eslint-disable-next-line no-extra-parens, no-empty-function
const $674f3dacae7c9bb1$var$cached = /** @type {GeneratorFunctionConstructor} */ (function*() {}).constructor;
/** @type {import('.')} */ module.exports = ()=>$674f3dacae7c9bb1$var$cached;

});



parcelRegister("idend", function(module, exports) {
'use strict';

var $14o9P = parcelRequire("14o9P");

var $itarC = parcelRequire("itarC");

var $c82dB = parcelRequire("c82dB");

var $45BCf = parcelRequire("45BCf");

var $bJVQv = parcelRequire("bJVQv");

var $5v4Nf = parcelRequire("5v4Nf");
var $d4249724f4fd7d89$var$$toString = $45BCf('Object.prototype.toString');

var $d4249724f4fd7d89$var$hasToStringTag = (parcelRequire("lv9Si"))();
var $d4249724f4fd7d89$var$g = typeof globalThis === 'undefined' ? $parcel$global : globalThis;
var $d4249724f4fd7d89$var$typedArrays = $itarC();
var $d4249724f4fd7d89$var$$slice = $45BCf('String.prototype.slice');
/** @type {<T = unknown>(array: readonly T[], value: unknown) => number} */ var $d4249724f4fd7d89$var$$indexOf = $45BCf('Array.prototype.indexOf', true) || function indexOf(array, value) {
    for(var i = 0; i < array.length; i += 1){
        if (array[i] === value) return i;
    }
    return -1;
};
/** @typedef {import('./types').Getter} Getter */ /** @type {import('./types').Cache} */ var $d4249724f4fd7d89$var$cache = {
    __proto__: null
};
if ($d4249724f4fd7d89$var$hasToStringTag && $bJVQv && $5v4Nf) $14o9P($d4249724f4fd7d89$var$typedArrays, function(typedArray) {
    var arr = new $d4249724f4fd7d89$var$g[typedArray]();
    if (Symbol.toStringTag in arr && $5v4Nf) {
        var proto = $5v4Nf(arr);
        // @ts-expect-error TS won't narrow inside a closure
        var descriptor = $bJVQv(proto, Symbol.toStringTag);
        if (!descriptor && proto) {
            var superProto = $5v4Nf(proto);
            // @ts-expect-error TS won't narrow inside a closure
            descriptor = $bJVQv(superProto, Symbol.toStringTag);
        }
        if (descriptor && descriptor.get) {
            var bound = $c82dB(descriptor.get);
            $d4249724f4fd7d89$var$cache[/** @type {`$${import('.').TypedArrayName}`} */ '$' + typedArray] = bound;
        }
    }
});
else $14o9P($d4249724f4fd7d89$var$typedArrays, function(typedArray) {
    var arr = new $d4249724f4fd7d89$var$g[typedArray]();
    var fn = arr.slice || arr.set;
    if (fn) {
        var bound = /** @type {import('./types').BoundSlice | import('./types').BoundSet} */ // @ts-expect-error TODO FIXME
        $c82dB(fn);
        $d4249724f4fd7d89$var$cache[/** @type {`$${import('.').TypedArrayName}`} */ '$' + typedArray] = bound;
    }
});
/** @type {(value: object) => false | import('.').TypedArrayName} */ var $d4249724f4fd7d89$var$tryTypedArrays = function tryAllTypedArrays(value) {
    /** @type {ReturnType<typeof tryAllTypedArrays>} */ var found = false;
    $14o9P(/** @type {Record<`\$${import('.').TypedArrayName}`, Getter>} */ $d4249724f4fd7d89$var$cache, /** @type {(getter: Getter, name: `\$${import('.').TypedArrayName}`) => void} */ function(getter, typedArray) {
        if (!found) try {
            // @ts-expect-error a throw is fine here
            if ('$' + getter(value) === typedArray) found = /** @type {import('.').TypedArrayName} */ $d4249724f4fd7d89$var$$slice(typedArray, 1);
        } catch (e) {}
    });
    return found;
};
/** @type {(value: object) => false | import('.').TypedArrayName} */ var $d4249724f4fd7d89$var$trySlices = function tryAllSlices(value) {
    /** @type {ReturnType<typeof tryAllSlices>} */ var found = false;
    $14o9P(/** @type {Record<`\$${import('.').TypedArrayName}`, Getter>} */ $d4249724f4fd7d89$var$cache, /** @type {(getter: Getter, name: `\$${import('.').TypedArrayName}`) => void} */ function(getter, name) {
        if (!found) try {
            // @ts-expect-error a throw is fine here
            getter(value);
            found = /** @type {import('.').TypedArrayName} */ $d4249724f4fd7d89$var$$slice(name, 1);
        } catch (e) {}
    });
    return found;
};
/** @type {import('.')} */ module.exports = function whichTypedArray(value) {
    if (!value || typeof value !== 'object') return false;
    if (!$d4249724f4fd7d89$var$hasToStringTag) {
        /** @type {string} */ var tag = $d4249724f4fd7d89$var$$slice($d4249724f4fd7d89$var$$toString(value), 8, -1);
        if ($d4249724f4fd7d89$var$$indexOf($d4249724f4fd7d89$var$typedArrays, tag) > -1) return tag;
        if (tag !== 'Object') return false;
        // node < 0.6 hits here on real Typed Arrays
        return $d4249724f4fd7d89$var$trySlices(value);
    }
    if (!$bJVQv) return null;
     // unknown engine
    return $d4249724f4fd7d89$var$tryTypedArrays(value);
};

});
parcelRegister("14o9P", function(module, exports) {
'use strict';

var $5JMOI = parcelRequire("5JMOI");
var $0c78e759a0afa6af$var$toStr = Object.prototype.toString;
var $0c78e759a0afa6af$var$hasOwnProperty = Object.prototype.hasOwnProperty;
/** @type {<This, A extends readonly unknown[]>(arr: A, iterator: (this: This | void, value: A[number], index: number, arr: A) => void, receiver: This | undefined) => void} */ var $0c78e759a0afa6af$var$forEachArray = function forEachArray(array, iterator, receiver) {
    for(var i = 0, len = array.length; i < len; i++)if ($0c78e759a0afa6af$var$hasOwnProperty.call(array, i)) {
        if (receiver == null) iterator(array[i], i, array);
        else iterator.call(receiver, array[i], i, array);
    }
};
/** @type {<This, S extends string>(string: S, iterator: (this: This | void, value: S[number], index: number, string: S) => void, receiver: This | undefined) => void} */ var $0c78e759a0afa6af$var$forEachString = function forEachString(string, iterator, receiver) {
    for(var i = 0, len = string.length; i < len; i++)// no such thing as a sparse string.
    if (receiver == null) iterator(string.charAt(i), i, string);
    else iterator.call(receiver, string.charAt(i), i, string);
};
/** @type {<This, O>(obj: O, iterator: (this: This | void, value: O[keyof O], index: keyof O, obj: O) => void, receiver: This | undefined) => void} */ var $0c78e759a0afa6af$var$forEachObject = function forEachObject(object, iterator, receiver) {
    for(var k in object)if ($0c78e759a0afa6af$var$hasOwnProperty.call(object, k)) {
        if (receiver == null) iterator(object[k], k, object);
        else iterator.call(receiver, object[k], k, object);
    }
};
/** @type {(x: unknown) => x is readonly unknown[]} */ function $0c78e759a0afa6af$var$isArray(x) {
    return $0c78e759a0afa6af$var$toStr.call(x) === '[object Array]';
}
/** @type {import('.')._internal} */ module.exports = function forEach(list, iterator, thisArg) {
    if (!$5JMOI(iterator)) throw new TypeError('iterator must be a function');
    var receiver;
    if (arguments.length >= 3) receiver = thisArg;
    if ($0c78e759a0afa6af$var$isArray(list)) $0c78e759a0afa6af$var$forEachArray(list, iterator, receiver);
    else if (typeof list === 'string') $0c78e759a0afa6af$var$forEachString(list, iterator, receiver);
    else $0c78e759a0afa6af$var$forEachObject(list, iterator, receiver);
};

});
parcelRegister("5JMOI", function(module, exports) {
'use strict';
var $42d705c02e39f159$var$fnToStr = Function.prototype.toString;
var $42d705c02e39f159$var$reflectApply = typeof Reflect === 'object' && Reflect !== null && Reflect.apply;
var $42d705c02e39f159$var$badArrayLike;
var $42d705c02e39f159$var$isCallableMarker;
if (typeof $42d705c02e39f159$var$reflectApply === 'function' && typeof Object.defineProperty === 'function') try {
    $42d705c02e39f159$var$badArrayLike = Object.defineProperty({}, 'length', {
        get: function() {
            throw $42d705c02e39f159$var$isCallableMarker;
        }
    });
    $42d705c02e39f159$var$isCallableMarker = {};
    // eslint-disable-next-line no-throw-literal
    $42d705c02e39f159$var$reflectApply(function() {
        throw 42;
    }, null, $42d705c02e39f159$var$badArrayLike);
} catch (_) {
    if (_ !== $42d705c02e39f159$var$isCallableMarker) $42d705c02e39f159$var$reflectApply = null;
}
else $42d705c02e39f159$var$reflectApply = null;
var $42d705c02e39f159$var$constructorRegex = /^\s*class\b/;
var $42d705c02e39f159$var$isES6ClassFn = function isES6ClassFunction(value) {
    try {
        var fnStr = $42d705c02e39f159$var$fnToStr.call(value);
        return $42d705c02e39f159$var$constructorRegex.test(fnStr);
    } catch (e) {
        return false; // not a function
    }
};
var $42d705c02e39f159$var$tryFunctionObject = function tryFunctionToStr(value) {
    try {
        if ($42d705c02e39f159$var$isES6ClassFn(value)) return false;
        $42d705c02e39f159$var$fnToStr.call(value);
        return true;
    } catch (e) {
        return false;
    }
};
var $42d705c02e39f159$var$toStr = Object.prototype.toString;
var $42d705c02e39f159$var$objectClass = '[object Object]';
var $42d705c02e39f159$var$fnClass = '[object Function]';
var $42d705c02e39f159$var$genClass = '[object GeneratorFunction]';
var $42d705c02e39f159$var$ddaClass = '[object HTMLAllCollection]'; // IE 11
var $42d705c02e39f159$var$ddaClass2 = '[object HTML document.all class]';
var $42d705c02e39f159$var$ddaClass3 = '[object HTMLCollection]'; // IE 9-10
var $42d705c02e39f159$var$hasToStringTag = typeof Symbol === 'function' && !!Symbol.toStringTag; // better: use `has-tostringtag`
var $42d705c02e39f159$var$isIE68 = !(0 in [
    , 
]); // eslint-disable-line no-sparse-arrays, comma-spacing
var $42d705c02e39f159$var$isDDA = function isDocumentDotAll() {
    return false;
};
if (typeof document === 'object') {
    // Firefox 3 canonicalizes DDA to undefined when it's not accessed directly
    var $42d705c02e39f159$var$all = document.all;
    if ($42d705c02e39f159$var$toStr.call($42d705c02e39f159$var$all) === $42d705c02e39f159$var$toStr.call(document.all)) $42d705c02e39f159$var$isDDA = function isDocumentDotAll(value) {
        /* globals document: false */ // in IE 6-8, typeof document.all is "object" and it's truthy
        if (($42d705c02e39f159$var$isIE68 || !value) && (typeof value === 'undefined' || typeof value === 'object')) try {
            var str = $42d705c02e39f159$var$toStr.call(value);
            return (str === $42d705c02e39f159$var$ddaClass || str === $42d705c02e39f159$var$ddaClass2 || str === $42d705c02e39f159$var$ddaClass3 // opera 12.16
             || str === $42d705c02e39f159$var$objectClass // IE 6-8
            ) && value('') == null; // eslint-disable-line eqeqeq
        } catch (e) {}
        return false;
    };
}
module.exports = $42d705c02e39f159$var$reflectApply ? function isCallable(value) {
    if ($42d705c02e39f159$var$isDDA(value)) return true;
    if (!value) return false;
    if (typeof value !== 'function' && typeof value !== 'object') return false;
    try {
        $42d705c02e39f159$var$reflectApply(value, null, $42d705c02e39f159$var$badArrayLike);
    } catch (e) {
        if (e !== $42d705c02e39f159$var$isCallableMarker) return false;
    }
    return !$42d705c02e39f159$var$isES6ClassFn(value) && $42d705c02e39f159$var$tryFunctionObject(value);
} : function isCallable(value) {
    if ($42d705c02e39f159$var$isDDA(value)) return true;
    if (!value) return false;
    if (typeof value !== 'function' && typeof value !== 'object') return false;
    if ($42d705c02e39f159$var$hasToStringTag) return $42d705c02e39f159$var$tryFunctionObject(value);
    if ($42d705c02e39f159$var$isES6ClassFn(value)) return false;
    var strClass = $42d705c02e39f159$var$toStr.call(value);
    if (strClass !== $42d705c02e39f159$var$fnClass && strClass !== $42d705c02e39f159$var$genClass && !/^\[object HTML/.test(strClass)) return false;
    return $42d705c02e39f159$var$tryFunctionObject(value);
};

});


parcelRegister("itarC", function(module, exports) {
'use strict';

var $gH9mr = parcelRequire("gH9mr");
var $d723097925564c7d$var$g = typeof globalThis === 'undefined' ? $parcel$global : globalThis;
/** @type {import('.')} */ module.exports = function availableTypedArrays() {
    var /** @type {ReturnType<typeof availableTypedArrays>} */ out = [];
    for(var i = 0; i < $gH9mr.length; i++)if (typeof $d723097925564c7d$var$g[$gH9mr[i]] === 'function') // @ts-expect-error
    out[out.length] = $gH9mr[i];
    return out;
};

});
parcelRegister("gH9mr", function(module, exports) {
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


parcelRegister("c82dB", function(module, exports) {
'use strict';

var $htoEj = parcelRequire("htoEj");

var $4Sfyb = parcelRequire("4Sfyb");

var $2WHEN = parcelRequire("2WHEN");

var $gq5Ba = parcelRequire("gq5Ba");
module.exports = function callBind(originalFunction) {
    var func = $2WHEN(arguments);
    var adjustedLength = originalFunction.length - (arguments.length - 1);
    return $htoEj(func, 1 + (adjustedLength > 0 ? adjustedLength : 0), true);
};
if ($4Sfyb) $4Sfyb(module.exports, 'apply', {
    value: $gq5Ba
});
else module.exports.apply = $gq5Ba;

});
parcelRegister("htoEj", function(module, exports) {
'use strict';

var $9i2m0 = parcelRequire("9i2m0");

var $aVmFZ = parcelRequire("aVmFZ");

var $cb8843e69c6d67a5$var$hasDescriptors = (parcelRequire("dlRe3"))();

var $bJVQv = parcelRequire("bJVQv");

var $5zdHu = parcelRequire("5zdHu");
var $cb8843e69c6d67a5$var$$floor = $9i2m0('%Math.floor%');
/** @type {import('.')} */ module.exports = function setFunctionLength(fn, length) {
    if (typeof fn !== 'function') throw new $5zdHu('`fn` is not a function');
    if (typeof length !== 'number' || length < 0 || length > 0xFFFFFFFF || $cb8843e69c6d67a5$var$$floor(length) !== length) throw new $5zdHu('`length` must be a positive 32-bit integer');
    var loose = arguments.length > 2 && !!arguments[2];
    var functionLengthIsConfigurable = true;
    var functionLengthIsWritable = true;
    if ('length' in fn && $bJVQv) {
        var desc = $bJVQv(fn, 'length');
        if (desc && !desc.configurable) functionLengthIsConfigurable = false;
        if (desc && !desc.writable) functionLengthIsWritable = false;
    }
    if (functionLengthIsConfigurable || functionLengthIsWritable || !loose) {
        if ($cb8843e69c6d67a5$var$hasDescriptors) $aVmFZ(/** @type {Parameters<define>[0]} */ fn, 'length', length, true, true);
        else $aVmFZ(/** @type {Parameters<define>[0]} */ fn, 'length', length);
    }
    return fn;
};

});
parcelRegister("aVmFZ", function(module, exports) {
'use strict';

var $4Sfyb = parcelRequire("4Sfyb");

var $2hnFc = parcelRequire("2hnFc");

var $5zdHu = parcelRequire("5zdHu");

var $bJVQv = parcelRequire("bJVQv");
/** @type {import('.')} */ module.exports = function defineDataProperty(obj, property, value) {
    if (!obj || typeof obj !== 'object' && typeof obj !== 'function') throw new $5zdHu('`obj` must be an object or a function`');
    if (typeof property !== 'string' && typeof property !== 'symbol') throw new $5zdHu('`property` must be a string or a symbol`');
    if (arguments.length > 3 && typeof arguments[3] !== 'boolean' && arguments[3] !== null) throw new $5zdHu('`nonEnumerable`, if provided, must be a boolean or null');
    if (arguments.length > 4 && typeof arguments[4] !== 'boolean' && arguments[4] !== null) throw new $5zdHu('`nonWritable`, if provided, must be a boolean or null');
    if (arguments.length > 5 && typeof arguments[5] !== 'boolean' && arguments[5] !== null) throw new $5zdHu('`nonConfigurable`, if provided, must be a boolean or null');
    if (arguments.length > 6 && typeof arguments[6] !== 'boolean') throw new $5zdHu('`loose`, if provided, must be a boolean');
    var nonEnumerable = arguments.length > 3 ? arguments[3] : null;
    var nonWritable = arguments.length > 4 ? arguments[4] : null;
    var nonConfigurable = arguments.length > 5 ? arguments[5] : null;
    var loose = arguments.length > 6 ? arguments[6] : false;
    /* @type {false | TypedPropertyDescriptor<unknown>} */ var desc = !!$bJVQv && $bJVQv(obj, property);
    if ($4Sfyb) $4Sfyb(obj, property, {
        configurable: nonConfigurable === null && desc ? desc.configurable : !nonConfigurable,
        enumerable: nonEnumerable === null && desc ? desc.enumerable : !nonEnumerable,
        value: value,
        writable: nonWritable === null && desc ? desc.writable : !nonWritable
    });
    else if (loose || !nonEnumerable && !nonWritable && !nonConfigurable) // must fall back to [[Set]], and was not explicitly asked to make non-enumerable, non-writable, or non-configurable
    obj[property] = value; // eslint-disable-line no-param-reassign
    else throw new $2hnFc('This environment does not support defining a property as non-configurable, non-writable, or non-enumerable.');
};

});

parcelRegister("dlRe3", function(module, exports) {
'use strict';

var $4Sfyb = parcelRequire("4Sfyb");
var $9b8686053707aef4$var$hasPropertyDescriptors = function hasPropertyDescriptors() {
    return !!$4Sfyb;
};
$9b8686053707aef4$var$hasPropertyDescriptors.hasArrayLengthDefineBug = function hasArrayLengthDefineBug() {
    // node v0.6 has a bug where array lengths can be Set but not Defined
    if (!$4Sfyb) return null;
    try {
        return $4Sfyb([], 'length', {
            value: 1
        }).length !== 1;
    } catch (e) {
        // In Firefox 4-22, defining length on an array throws an exception.
        return true;
    }
};
module.exports = $9b8686053707aef4$var$hasPropertyDescriptors;

});


parcelRegister("gq5Ba", function(module, exports) {
'use strict';

var $1MnY9 = parcelRequire("1MnY9");

var $a9dGt = parcelRequire("a9dGt");

var $6thZZ = parcelRequire("6thZZ");
/** @type {import('./applyBind')} */ module.exports = function applyBind() {
    return $6thZZ($1MnY9, $a9dGt, arguments);
};

});



parcelRegister("72FfL", function(module, exports) {
'use strict';

var $idend = parcelRequire("idend");
/** @type {import('.')} */ module.exports = function isTypedArray(value) {
    return !!$idend(value);
};

});


parcelRegister("3wJir", function(module, exports) {
module.exports = function isBuffer(arg) {
    return arg && typeof arg === 'object' && typeof arg.copy === 'function' && typeof arg.fill === 'function' && typeof arg.readUInt8 === 'function';
};

});

parcelRegister("fHPjQ", function(module, exports) {
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


parcelRegister("jaI73", function(module, exports) {
// shim for using process in browser
var $df512b65909a804d$var$process = module.exports = {};
// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.
var $df512b65909a804d$var$cachedSetTimeout;
var $df512b65909a804d$var$cachedClearTimeout;
function $df512b65909a804d$var$defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function $df512b65909a804d$var$defaultClearTimeout() {
    throw new Error('clearTimeout has not been defined');
}
(function() {
    try {
        if (typeof setTimeout === 'function') $df512b65909a804d$var$cachedSetTimeout = setTimeout;
        else $df512b65909a804d$var$cachedSetTimeout = $df512b65909a804d$var$defaultSetTimout;
    } catch (e) {
        $df512b65909a804d$var$cachedSetTimeout = $df512b65909a804d$var$defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') $df512b65909a804d$var$cachedClearTimeout = clearTimeout;
        else $df512b65909a804d$var$cachedClearTimeout = $df512b65909a804d$var$defaultClearTimeout;
    } catch (e) {
        $df512b65909a804d$var$cachedClearTimeout = $df512b65909a804d$var$defaultClearTimeout;
    }
})();
function $df512b65909a804d$var$runTimeout(fun) {
    if ($df512b65909a804d$var$cachedSetTimeout === setTimeout) //normal enviroments in sane situations
    return setTimeout(fun, 0);
    // if setTimeout wasn't available but was latter defined
    if (($df512b65909a804d$var$cachedSetTimeout === $df512b65909a804d$var$defaultSetTimout || !$df512b65909a804d$var$cachedSetTimeout) && setTimeout) {
        $df512b65909a804d$var$cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return $df512b65909a804d$var$cachedSetTimeout(fun, 0);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return $df512b65909a804d$var$cachedSetTimeout.call(null, fun, 0);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return $df512b65909a804d$var$cachedSetTimeout.call(this, fun, 0);
        }
    }
}
function $df512b65909a804d$var$runClearTimeout(marker) {
    if ($df512b65909a804d$var$cachedClearTimeout === clearTimeout) //normal enviroments in sane situations
    return clearTimeout(marker);
    // if clearTimeout wasn't available but was latter defined
    if (($df512b65909a804d$var$cachedClearTimeout === $df512b65909a804d$var$defaultClearTimeout || !$df512b65909a804d$var$cachedClearTimeout) && clearTimeout) {
        $df512b65909a804d$var$cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return $df512b65909a804d$var$cachedClearTimeout(marker);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return $df512b65909a804d$var$cachedClearTimeout.call(null, marker);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return $df512b65909a804d$var$cachedClearTimeout.call(this, marker);
        }
    }
}
var $df512b65909a804d$var$queue = [];
var $df512b65909a804d$var$draining = false;
var $df512b65909a804d$var$currentQueue;
var $df512b65909a804d$var$queueIndex = -1;
function $df512b65909a804d$var$cleanUpNextTick() {
    if (!$df512b65909a804d$var$draining || !$df512b65909a804d$var$currentQueue) return;
    $df512b65909a804d$var$draining = false;
    if ($df512b65909a804d$var$currentQueue.length) $df512b65909a804d$var$queue = $df512b65909a804d$var$currentQueue.concat($df512b65909a804d$var$queue);
    else $df512b65909a804d$var$queueIndex = -1;
    if ($df512b65909a804d$var$queue.length) $df512b65909a804d$var$drainQueue();
}
function $df512b65909a804d$var$drainQueue() {
    if ($df512b65909a804d$var$draining) return;
    var timeout = $df512b65909a804d$var$runTimeout($df512b65909a804d$var$cleanUpNextTick);
    $df512b65909a804d$var$draining = true;
    var len = $df512b65909a804d$var$queue.length;
    while(len){
        $df512b65909a804d$var$currentQueue = $df512b65909a804d$var$queue;
        $df512b65909a804d$var$queue = [];
        while(++$df512b65909a804d$var$queueIndex < len)if ($df512b65909a804d$var$currentQueue) $df512b65909a804d$var$currentQueue[$df512b65909a804d$var$queueIndex].run();
        $df512b65909a804d$var$queueIndex = -1;
        len = $df512b65909a804d$var$queue.length;
    }
    $df512b65909a804d$var$currentQueue = null;
    $df512b65909a804d$var$draining = false;
    $df512b65909a804d$var$runClearTimeout(timeout);
}
$df512b65909a804d$var$process.nextTick = function(fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) for(var i = 1; i < arguments.length; i++)args[i - 1] = arguments[i];
    $df512b65909a804d$var$queue.push(new $df512b65909a804d$var$Item(fun, args));
    if ($df512b65909a804d$var$queue.length === 1 && !$df512b65909a804d$var$draining) $df512b65909a804d$var$runTimeout($df512b65909a804d$var$drainQueue);
};
// v8 likes predictible objects
function $df512b65909a804d$var$Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
$df512b65909a804d$var$Item.prototype.run = function() {
    this.fun.apply(null, this.array);
};
$df512b65909a804d$var$process.title = 'browser';
$df512b65909a804d$var$process.browser = true;
$df512b65909a804d$var$process.env = {};
$df512b65909a804d$var$process.argv = [];
$df512b65909a804d$var$process.version = ''; // empty string to avoid regexp issues
$df512b65909a804d$var$process.versions = {};
function $df512b65909a804d$var$noop() {}
$df512b65909a804d$var$process.on = $df512b65909a804d$var$noop;
$df512b65909a804d$var$process.addListener = $df512b65909a804d$var$noop;
$df512b65909a804d$var$process.once = $df512b65909a804d$var$noop;
$df512b65909a804d$var$process.off = $df512b65909a804d$var$noop;
$df512b65909a804d$var$process.removeListener = $df512b65909a804d$var$noop;
$df512b65909a804d$var$process.removeAllListeners = $df512b65909a804d$var$noop;
$df512b65909a804d$var$process.emit = $df512b65909a804d$var$noop;
$df512b65909a804d$var$process.prependListener = $df512b65909a804d$var$noop;
$df512b65909a804d$var$process.prependOnceListener = $df512b65909a804d$var$noop;
$df512b65909a804d$var$process.listeners = function(name) {
    return [];
};
$df512b65909a804d$var$process.binding = function(name) {
    throw new Error('process.binding is not supported');
};
$df512b65909a804d$var$process.cwd = function() {
    return '/';
};
$df512b65909a804d$var$process.chdir = function(dir) {
    throw new Error('process.chdir is not supported');
};
$df512b65909a804d$var$process.umask = function() {
    return 0;
};

});


//# sourceMappingURL=util.8d56dfd8.js.map
