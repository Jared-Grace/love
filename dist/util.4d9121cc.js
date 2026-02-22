
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
parcelRegister("7tYa1", function(module, exports) {
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
var $5729e87c08f652e0$var$getOwnPropertyDescriptors = Object.getOwnPropertyDescriptors || function getOwnPropertyDescriptors(obj) {
    var keys = Object.keys(obj);
    var descriptors = {};
    for(var i = 0; i < keys.length; i++)descriptors[keys[i]] = Object.getOwnPropertyDescriptor(obj, keys[i]);
    return descriptors;
};
var $5729e87c08f652e0$var$formatRegExp = /%[sdj%]/g;
module.exports.format = function(f) {
    if (!$5729e87c08f652e0$var$isString(f)) {
        var objects = [];
        for(var i = 0; i < arguments.length; i++)objects.push($5729e87c08f652e0$var$inspect(arguments[i]));
        return objects.join(' ');
    }
    var i = 1;
    var args = arguments;
    var len = args.length;
    var str = String(f).replace($5729e87c08f652e0$var$formatRegExp, function(x) {
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
    for(var x = args[i]; i < len; x = args[++i])if ($5729e87c08f652e0$var$isNull(x) || !$5729e87c08f652e0$var$isObject(x)) str += ' ' + x;
    else str += ' ' + $5729e87c08f652e0$var$inspect(x);
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
var $5729e87c08f652e0$var$debugs = {};
var $5729e87c08f652e0$var$debugEnvRegex = /^$/;
var $5729e87c08f652e0$var$debugEnv;
module.exports.debuglog = function(set) {
    set = set.toUpperCase();
    if (!$5729e87c08f652e0$var$debugs[set]) {
        if ($5729e87c08f652e0$var$debugEnvRegex.test(set)) {
            var pid = $4DZrq.pid;
            $5729e87c08f652e0$var$debugs[set] = function() {
                var msg = module.exports.format.apply(module.exports, arguments);
                console.error('%s %d: %s', set, pid, msg);
            };
        } else $5729e87c08f652e0$var$debugs[set] = function() {};
    }
    return $5729e87c08f652e0$var$debugs[set];
};
/**
 * Echos the value of a value. Trys to print the value out
 * in the best way possible given the different types.
 *
 * @param {Object} obj The object to print out.
 * @param {Object} opts Optional options object that alters the output.
 */ /* legacy: obj, showHidden, depth, colors*/ function $5729e87c08f652e0$var$inspect(obj, opts) {
    // default options
    var ctx = {
        seen: [],
        stylize: $5729e87c08f652e0$var$stylizeNoColor
    };
    // legacy...
    if (arguments.length >= 3) ctx.depth = arguments[2];
    if (arguments.length >= 4) ctx.colors = arguments[3];
    if ($5729e87c08f652e0$var$isBoolean(opts)) // legacy...
    ctx.showHidden = opts;
    else if (opts) // got an "options" object
    module.exports._extend(ctx, opts);
    // set default options
    if ($5729e87c08f652e0$var$isUndefined(ctx.showHidden)) ctx.showHidden = false;
    if ($5729e87c08f652e0$var$isUndefined(ctx.depth)) ctx.depth = 2;
    if ($5729e87c08f652e0$var$isUndefined(ctx.colors)) ctx.colors = false;
    if ($5729e87c08f652e0$var$isUndefined(ctx.customInspect)) ctx.customInspect = true;
    if (ctx.colors) ctx.stylize = $5729e87c08f652e0$var$stylizeWithColor;
    return $5729e87c08f652e0$var$formatValue(ctx, obj, ctx.depth);
}
module.exports.inspect = $5729e87c08f652e0$var$inspect;
// http://en.wikipedia.org/wiki/ANSI_escape_code#graphics
$5729e87c08f652e0$var$inspect.colors = {
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
$5729e87c08f652e0$var$inspect.styles = {
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
function $5729e87c08f652e0$var$stylizeWithColor(str, styleType) {
    var style = $5729e87c08f652e0$var$inspect.styles[styleType];
    if (style) return '\u001b[' + $5729e87c08f652e0$var$inspect.colors[style][0] + 'm' + str + '\u001b[' + $5729e87c08f652e0$var$inspect.colors[style][1] + 'm';
    else return str;
}
function $5729e87c08f652e0$var$stylizeNoColor(str, styleType) {
    return str;
}
function $5729e87c08f652e0$var$arrayToHash(array) {
    var hash = {};
    array.forEach(function(val, idx) {
        hash[val] = true;
    });
    return hash;
}
function $5729e87c08f652e0$var$formatValue(ctx, value, recurseTimes) {
    // Provide a hook for user-specified inspect functions.
    // Check that value is an object with an inspect function on it
    if (ctx.customInspect && value && $5729e87c08f652e0$var$isFunction(value.inspect) && // Filter out the util module, it's inspect function is special
    value.inspect !== module.exports.inspect && // Also filter out any prototype objects using the circular check.
    !(value.constructor && value.constructor.prototype === value)) {
        var ret = value.inspect(recurseTimes, ctx);
        if (!$5729e87c08f652e0$var$isString(ret)) ret = $5729e87c08f652e0$var$formatValue(ctx, ret, recurseTimes);
        return ret;
    }
    // Primitive types cannot have properties
    var primitive = $5729e87c08f652e0$var$formatPrimitive(ctx, value);
    if (primitive) return primitive;
    // Look up the keys of the object.
    var keys = Object.keys(value);
    var visibleKeys = $5729e87c08f652e0$var$arrayToHash(keys);
    if (ctx.showHidden) keys = Object.getOwnPropertyNames(value);
    // IE doesn't make error fields non-enumerable
    // http://msdn.microsoft.com/en-us/library/ie/dww52sbt(v=vs.94).aspx
    if ($5729e87c08f652e0$var$isError(value) && (keys.indexOf('message') >= 0 || keys.indexOf('description') >= 0)) return $5729e87c08f652e0$var$formatError(value);
    // Some type of object without properties can be shortcutted.
    if (keys.length === 0) {
        if ($5729e87c08f652e0$var$isFunction(value)) {
            var name = value.name ? ': ' + value.name : '';
            return ctx.stylize('[Function' + name + ']', 'special');
        }
        if ($5729e87c08f652e0$var$isRegExp(value)) return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
        if ($5729e87c08f652e0$var$isDate(value)) return ctx.stylize(Date.prototype.toString.call(value), 'date');
        if ($5729e87c08f652e0$var$isError(value)) return $5729e87c08f652e0$var$formatError(value);
    }
    var base = '', array = false, braces = [
        '{',
        '}'
    ];
    // Make Array say that they are Array
    if ($5729e87c08f652e0$var$isArray(value)) {
        array = true;
        braces = [
            '[',
            ']'
        ];
    }
    // Make functions say that they are functions
    if ($5729e87c08f652e0$var$isFunction(value)) {
        var n = value.name ? ': ' + value.name : '';
        base = ' [Function' + n + ']';
    }
    // Make RegExps say that they are RegExps
    if ($5729e87c08f652e0$var$isRegExp(value)) base = ' ' + RegExp.prototype.toString.call(value);
    // Make dates with properties first say the date
    if ($5729e87c08f652e0$var$isDate(value)) base = ' ' + Date.prototype.toUTCString.call(value);
    // Make error with message first say the error
    if ($5729e87c08f652e0$var$isError(value)) base = ' ' + $5729e87c08f652e0$var$formatError(value);
    if (keys.length === 0 && (!array || value.length == 0)) return braces[0] + base + braces[1];
    if (recurseTimes < 0) {
        if ($5729e87c08f652e0$var$isRegExp(value)) return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
        else return ctx.stylize('[Object]', 'special');
    }
    ctx.seen.push(value);
    var output;
    if (array) output = $5729e87c08f652e0$var$formatArray(ctx, value, recurseTimes, visibleKeys, keys);
    else output = keys.map(function(key) {
        return $5729e87c08f652e0$var$formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
    });
    ctx.seen.pop();
    return $5729e87c08f652e0$var$reduceToSingleString(output, base, braces);
}
function $5729e87c08f652e0$var$formatPrimitive(ctx, value) {
    if ($5729e87c08f652e0$var$isUndefined(value)) return ctx.stylize('undefined', 'undefined');
    if ($5729e87c08f652e0$var$isString(value)) {
        var simple = '\'' + JSON.stringify(value).replace(/^"|"$/g, '').replace(/'/g, "\\'").replace(/\\"/g, '"') + '\'';
        return ctx.stylize(simple, 'string');
    }
    if ($5729e87c08f652e0$var$isNumber(value)) return ctx.stylize('' + value, 'number');
    if ($5729e87c08f652e0$var$isBoolean(value)) return ctx.stylize('' + value, 'boolean');
    // For some reason typeof null is "object", so special case here.
    if ($5729e87c08f652e0$var$isNull(value)) return ctx.stylize('null', 'null');
}
function $5729e87c08f652e0$var$formatError(value) {
    return '[' + Error.prototype.toString.call(value) + ']';
}
function $5729e87c08f652e0$var$formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
    var output = [];
    for(var i = 0, l = value.length; i < l; ++i)if ($5729e87c08f652e0$var$hasOwnProperty(value, String(i))) output.push($5729e87c08f652e0$var$formatProperty(ctx, value, recurseTimes, visibleKeys, String(i), true));
    else output.push('');
    keys.forEach(function(key) {
        if (!key.match(/^\d+$/)) output.push($5729e87c08f652e0$var$formatProperty(ctx, value, recurseTimes, visibleKeys, key, true));
    });
    return output;
}
function $5729e87c08f652e0$var$formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
    var name, str, desc;
    desc = Object.getOwnPropertyDescriptor(value, key) || {
        value: value[key]
    };
    if (desc.get) {
        if (desc.set) str = ctx.stylize('[Getter/Setter]', 'special');
        else str = ctx.stylize('[Getter]', 'special');
    } else if (desc.set) str = ctx.stylize('[Setter]', 'special');
    if (!$5729e87c08f652e0$var$hasOwnProperty(visibleKeys, key)) name = '[' + key + ']';
    if (!str) {
        if (ctx.seen.indexOf(desc.value) < 0) {
            if ($5729e87c08f652e0$var$isNull(recurseTimes)) str = $5729e87c08f652e0$var$formatValue(ctx, desc.value, null);
            else str = $5729e87c08f652e0$var$formatValue(ctx, desc.value, recurseTimes - 1);
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
    if ($5729e87c08f652e0$var$isUndefined(name)) {
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
function $5729e87c08f652e0$var$reduceToSingleString(output, base, braces) {
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
module.exports.types = (parcelRequire("bwYnX"));
function $5729e87c08f652e0$var$isArray(ar) {
    return Array.isArray(ar);
}
module.exports.isArray = $5729e87c08f652e0$var$isArray;
function $5729e87c08f652e0$var$isBoolean(arg) {
    return typeof arg === 'boolean';
}
module.exports.isBoolean = $5729e87c08f652e0$var$isBoolean;
function $5729e87c08f652e0$var$isNull(arg) {
    return arg === null;
}
module.exports.isNull = $5729e87c08f652e0$var$isNull;
function $5729e87c08f652e0$var$isNullOrUndefined(arg) {
    return arg == null;
}
module.exports.isNullOrUndefined = $5729e87c08f652e0$var$isNullOrUndefined;
function $5729e87c08f652e0$var$isNumber(arg) {
    return typeof arg === 'number';
}
module.exports.isNumber = $5729e87c08f652e0$var$isNumber;
function $5729e87c08f652e0$var$isString(arg) {
    return typeof arg === 'string';
}
module.exports.isString = $5729e87c08f652e0$var$isString;
function $5729e87c08f652e0$var$isSymbol(arg) {
    return typeof arg === 'symbol';
}
module.exports.isSymbol = $5729e87c08f652e0$var$isSymbol;
function $5729e87c08f652e0$var$isUndefined(arg) {
    return arg === void 0;
}
module.exports.isUndefined = $5729e87c08f652e0$var$isUndefined;
function $5729e87c08f652e0$var$isRegExp(re) {
    return $5729e87c08f652e0$var$isObject(re) && $5729e87c08f652e0$var$objectToString(re) === '[object RegExp]';
}
module.exports.isRegExp = $5729e87c08f652e0$var$isRegExp;
module.exports.types.isRegExp = $5729e87c08f652e0$var$isRegExp;
function $5729e87c08f652e0$var$isObject(arg) {
    return typeof arg === 'object' && arg !== null;
}
module.exports.isObject = $5729e87c08f652e0$var$isObject;
function $5729e87c08f652e0$var$isDate(d) {
    return $5729e87c08f652e0$var$isObject(d) && $5729e87c08f652e0$var$objectToString(d) === '[object Date]';
}
module.exports.isDate = $5729e87c08f652e0$var$isDate;
module.exports.types.isDate = $5729e87c08f652e0$var$isDate;
function $5729e87c08f652e0$var$isError(e) {
    return $5729e87c08f652e0$var$isObject(e) && ($5729e87c08f652e0$var$objectToString(e) === '[object Error]' || e instanceof Error);
}
module.exports.isError = $5729e87c08f652e0$var$isError;
module.exports.types.isNativeError = $5729e87c08f652e0$var$isError;
function $5729e87c08f652e0$var$isFunction(arg) {
    return typeof arg === 'function';
}
module.exports.isFunction = $5729e87c08f652e0$var$isFunction;
function $5729e87c08f652e0$var$isPrimitive(arg) {
    return arg === null || typeof arg === 'boolean' || typeof arg === 'number' || typeof arg === 'string' || typeof arg === 'symbol' || // ES6 symbol
    typeof arg === 'undefined';
}
module.exports.isPrimitive = $5729e87c08f652e0$var$isPrimitive;

module.exports.isBuffer = (parcelRequire("3NXV9"));
function $5729e87c08f652e0$var$objectToString(o) {
    return Object.prototype.toString.call(o);
}
function $5729e87c08f652e0$var$pad(n) {
    return n < 10 ? '0' + n.toString(10) : n.toString(10);
}
var $5729e87c08f652e0$var$months = [
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
function $5729e87c08f652e0$var$timestamp() {
    var d = new Date();
    var time = [
        $5729e87c08f652e0$var$pad(d.getHours()),
        $5729e87c08f652e0$var$pad(d.getMinutes()),
        $5729e87c08f652e0$var$pad(d.getSeconds())
    ].join(':');
    return [
        d.getDate(),
        $5729e87c08f652e0$var$months[d.getMonth()],
        time
    ].join(' ');
}
// log is just a thin wrapper to console.log that prepends a timestamp
module.exports.log = function() {
    console.log('%s - %s', $5729e87c08f652e0$var$timestamp(), module.exports.format.apply(module.exports, arguments));
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
 */ module.exports.inherits = (parcelRequire("izDV4"));
module.exports._extend = function(origin, add) {
    // Don't do anything if add isn't an object
    if (!add || !$5729e87c08f652e0$var$isObject(add)) return origin;
    var keys = Object.keys(add);
    var i = keys.length;
    while(i--)origin[keys[i]] = add[keys[i]];
    return origin;
};
function $5729e87c08f652e0$var$hasOwnProperty(obj, prop) {
    return Object.prototype.hasOwnProperty.call(obj, prop);
}
var $5729e87c08f652e0$var$kCustomPromisifiedSymbol = typeof Symbol !== 'undefined' ? Symbol('util.promisify.custom') : undefined;
module.exports.promisify = function promisify(original) {
    if (typeof original !== 'function') throw new TypeError('The "original" argument must be of type Function');
    if ($5729e87c08f652e0$var$kCustomPromisifiedSymbol && original[$5729e87c08f652e0$var$kCustomPromisifiedSymbol]) {
        var fn = original[$5729e87c08f652e0$var$kCustomPromisifiedSymbol];
        if (typeof fn !== 'function') throw new TypeError('The "util.promisify.custom" argument must be of type Function');
        Object.defineProperty(fn, $5729e87c08f652e0$var$kCustomPromisifiedSymbol, {
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
    if ($5729e87c08f652e0$var$kCustomPromisifiedSymbol) Object.defineProperty(fn, $5729e87c08f652e0$var$kCustomPromisifiedSymbol, {
        value: fn,
        enumerable: false,
        writable: false,
        configurable: true
    });
    return Object.defineProperties(fn, $5729e87c08f652e0$var$getOwnPropertyDescriptors(original));
};
module.exports.promisify.custom = $5729e87c08f652e0$var$kCustomPromisifiedSymbol;
function $5729e87c08f652e0$var$callbackifyOnRejected(reason, cb) {
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
function $5729e87c08f652e0$var$callbackify(original) {
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
            $4DZrq.nextTick($5729e87c08f652e0$var$callbackifyOnRejected.bind(null, rej, cb));
        });
    }
    Object.setPrototypeOf(callbackified, Object.getPrototypeOf(original));
    Object.defineProperties(callbackified, $5729e87c08f652e0$var$getOwnPropertyDescriptors(original));
    return callbackified;
}
module.exports.callbackify = $5729e87c08f652e0$var$callbackify;

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

parcelRegister("bwYnX", function(module, exports) {
// Currently in sync with Node.js lib/internal/util/types.js
// https://github.com/nodejs/node/commit/112cc7c27551254aa2b17098fb774867f05ed0d9
'use strict';

var $4YAvV = parcelRequire("4YAvV");

var $bug9c = parcelRequire("bug9c");

var $hPWai = parcelRequire("hPWai");

var $ife9F = parcelRequire("ife9F");
function $8651862b08ad2ef9$var$uncurryThis(f) {
    return f.call.bind(f);
}
var $8651862b08ad2ef9$var$BigIntSupported = typeof BigInt !== 'undefined';
var $8651862b08ad2ef9$var$SymbolSupported = typeof Symbol !== 'undefined';
var $8651862b08ad2ef9$var$ObjectToString = $8651862b08ad2ef9$var$uncurryThis(Object.prototype.toString);
var $8651862b08ad2ef9$var$numberValue = $8651862b08ad2ef9$var$uncurryThis(Number.prototype.valueOf);
var $8651862b08ad2ef9$var$stringValue = $8651862b08ad2ef9$var$uncurryThis(String.prototype.valueOf);
var $8651862b08ad2ef9$var$booleanValue = $8651862b08ad2ef9$var$uncurryThis(Boolean.prototype.valueOf);
if ($8651862b08ad2ef9$var$BigIntSupported) var $8651862b08ad2ef9$var$bigIntValue = $8651862b08ad2ef9$var$uncurryThis(BigInt.prototype.valueOf);
if ($8651862b08ad2ef9$var$SymbolSupported) var $8651862b08ad2ef9$var$symbolValue = $8651862b08ad2ef9$var$uncurryThis(Symbol.prototype.valueOf);
function $8651862b08ad2ef9$var$checkBoxedPrimitive(value, prototypeValueOf) {
    if (typeof value !== 'object') return false;
    try {
        prototypeValueOf(value);
        return true;
    } catch (e) {
        return false;
    }
}
module.exports.isArgumentsObject = $4YAvV;
module.exports.isGeneratorFunction = $bug9c;
module.exports.isTypedArray = $ife9F;
// Taken from here and modified for better browser support
// https://github.com/sindresorhus/p-is-promise/blob/cda35a513bda03f977ad5cde3a079d237e82d7ef/index.js
function $8651862b08ad2ef9$var$isPromise(input) {
    return typeof Promise !== 'undefined' && input instanceof Promise || input !== null && typeof input === 'object' && typeof input.then === 'function' && typeof input.catch === 'function';
}
module.exports.isPromise = $8651862b08ad2ef9$var$isPromise;
function $8651862b08ad2ef9$var$isArrayBufferView(value) {
    if (typeof ArrayBuffer !== 'undefined' && ArrayBuffer.isView) return ArrayBuffer.isView(value);
    return $ife9F(value) || $8651862b08ad2ef9$var$isDataView(value);
}
module.exports.isArrayBufferView = $8651862b08ad2ef9$var$isArrayBufferView;
function $8651862b08ad2ef9$var$isUint8Array(value) {
    return $hPWai(value) === 'Uint8Array';
}
module.exports.isUint8Array = $8651862b08ad2ef9$var$isUint8Array;
function $8651862b08ad2ef9$var$isUint8ClampedArray(value) {
    return $hPWai(value) === 'Uint8ClampedArray';
}
module.exports.isUint8ClampedArray = $8651862b08ad2ef9$var$isUint8ClampedArray;
function $8651862b08ad2ef9$var$isUint16Array(value) {
    return $hPWai(value) === 'Uint16Array';
}
module.exports.isUint16Array = $8651862b08ad2ef9$var$isUint16Array;
function $8651862b08ad2ef9$var$isUint32Array(value) {
    return $hPWai(value) === 'Uint32Array';
}
module.exports.isUint32Array = $8651862b08ad2ef9$var$isUint32Array;
function $8651862b08ad2ef9$var$isInt8Array(value) {
    return $hPWai(value) === 'Int8Array';
}
module.exports.isInt8Array = $8651862b08ad2ef9$var$isInt8Array;
function $8651862b08ad2ef9$var$isInt16Array(value) {
    return $hPWai(value) === 'Int16Array';
}
module.exports.isInt16Array = $8651862b08ad2ef9$var$isInt16Array;
function $8651862b08ad2ef9$var$isInt32Array(value) {
    return $hPWai(value) === 'Int32Array';
}
module.exports.isInt32Array = $8651862b08ad2ef9$var$isInt32Array;
function $8651862b08ad2ef9$var$isFloat32Array(value) {
    return $hPWai(value) === 'Float32Array';
}
module.exports.isFloat32Array = $8651862b08ad2ef9$var$isFloat32Array;
function $8651862b08ad2ef9$var$isFloat64Array(value) {
    return $hPWai(value) === 'Float64Array';
}
module.exports.isFloat64Array = $8651862b08ad2ef9$var$isFloat64Array;
function $8651862b08ad2ef9$var$isBigInt64Array(value) {
    return $hPWai(value) === 'BigInt64Array';
}
module.exports.isBigInt64Array = $8651862b08ad2ef9$var$isBigInt64Array;
function $8651862b08ad2ef9$var$isBigUint64Array(value) {
    return $hPWai(value) === 'BigUint64Array';
}
module.exports.isBigUint64Array = $8651862b08ad2ef9$var$isBigUint64Array;
function $8651862b08ad2ef9$var$isMapToString(value) {
    return $8651862b08ad2ef9$var$ObjectToString(value) === '[object Map]';
}
$8651862b08ad2ef9$var$isMapToString.working = typeof Map !== 'undefined' && $8651862b08ad2ef9$var$isMapToString(new Map());
function $8651862b08ad2ef9$var$isMap(value) {
    if (typeof Map === 'undefined') return false;
    return $8651862b08ad2ef9$var$isMapToString.working ? $8651862b08ad2ef9$var$isMapToString(value) : value instanceof Map;
}
module.exports.isMap = $8651862b08ad2ef9$var$isMap;
function $8651862b08ad2ef9$var$isSetToString(value) {
    return $8651862b08ad2ef9$var$ObjectToString(value) === '[object Set]';
}
$8651862b08ad2ef9$var$isSetToString.working = typeof Set !== 'undefined' && $8651862b08ad2ef9$var$isSetToString(new Set());
function $8651862b08ad2ef9$var$isSet(value) {
    if (typeof Set === 'undefined') return false;
    return $8651862b08ad2ef9$var$isSetToString.working ? $8651862b08ad2ef9$var$isSetToString(value) : value instanceof Set;
}
module.exports.isSet = $8651862b08ad2ef9$var$isSet;
function $8651862b08ad2ef9$var$isWeakMapToString(value) {
    return $8651862b08ad2ef9$var$ObjectToString(value) === '[object WeakMap]';
}
$8651862b08ad2ef9$var$isWeakMapToString.working = typeof WeakMap !== 'undefined' && $8651862b08ad2ef9$var$isWeakMapToString(new WeakMap());
function $8651862b08ad2ef9$var$isWeakMap(value) {
    if (typeof WeakMap === 'undefined') return false;
    return $8651862b08ad2ef9$var$isWeakMapToString.working ? $8651862b08ad2ef9$var$isWeakMapToString(value) : value instanceof WeakMap;
}
module.exports.isWeakMap = $8651862b08ad2ef9$var$isWeakMap;
function $8651862b08ad2ef9$var$isWeakSetToString(value) {
    return $8651862b08ad2ef9$var$ObjectToString(value) === '[object WeakSet]';
}
$8651862b08ad2ef9$var$isWeakSetToString.working = typeof WeakSet !== 'undefined' && $8651862b08ad2ef9$var$isWeakSetToString(new WeakSet());
function $8651862b08ad2ef9$var$isWeakSet(value) {
    return $8651862b08ad2ef9$var$isWeakSetToString(value);
}
module.exports.isWeakSet = $8651862b08ad2ef9$var$isWeakSet;
function $8651862b08ad2ef9$var$isArrayBufferToString(value) {
    return $8651862b08ad2ef9$var$ObjectToString(value) === '[object ArrayBuffer]';
}
$8651862b08ad2ef9$var$isArrayBufferToString.working = typeof ArrayBuffer !== 'undefined' && $8651862b08ad2ef9$var$isArrayBufferToString(new ArrayBuffer());
function $8651862b08ad2ef9$var$isArrayBuffer(value) {
    if (typeof ArrayBuffer === 'undefined') return false;
    return $8651862b08ad2ef9$var$isArrayBufferToString.working ? $8651862b08ad2ef9$var$isArrayBufferToString(value) : value instanceof ArrayBuffer;
}
module.exports.isArrayBuffer = $8651862b08ad2ef9$var$isArrayBuffer;
function $8651862b08ad2ef9$var$isDataViewToString(value) {
    return $8651862b08ad2ef9$var$ObjectToString(value) === '[object DataView]';
}
$8651862b08ad2ef9$var$isDataViewToString.working = typeof ArrayBuffer !== 'undefined' && typeof DataView !== 'undefined' && $8651862b08ad2ef9$var$isDataViewToString(new DataView(new ArrayBuffer(1), 0, 1));
function $8651862b08ad2ef9$var$isDataView(value) {
    if (typeof DataView === 'undefined') return false;
    return $8651862b08ad2ef9$var$isDataViewToString.working ? $8651862b08ad2ef9$var$isDataViewToString(value) : value instanceof DataView;
}
module.exports.isDataView = $8651862b08ad2ef9$var$isDataView;
// Store a copy of SharedArrayBuffer in case it's deleted elsewhere
var $8651862b08ad2ef9$var$SharedArrayBufferCopy = typeof SharedArrayBuffer !== 'undefined' ? SharedArrayBuffer : undefined;
function $8651862b08ad2ef9$var$isSharedArrayBufferToString(value) {
    return $8651862b08ad2ef9$var$ObjectToString(value) === '[object SharedArrayBuffer]';
}
function $8651862b08ad2ef9$var$isSharedArrayBuffer(value) {
    if (typeof $8651862b08ad2ef9$var$SharedArrayBufferCopy === 'undefined') return false;
    if (typeof $8651862b08ad2ef9$var$isSharedArrayBufferToString.working === 'undefined') $8651862b08ad2ef9$var$isSharedArrayBufferToString.working = $8651862b08ad2ef9$var$isSharedArrayBufferToString(new $8651862b08ad2ef9$var$SharedArrayBufferCopy());
    return $8651862b08ad2ef9$var$isSharedArrayBufferToString.working ? $8651862b08ad2ef9$var$isSharedArrayBufferToString(value) : value instanceof $8651862b08ad2ef9$var$SharedArrayBufferCopy;
}
module.exports.isSharedArrayBuffer = $8651862b08ad2ef9$var$isSharedArrayBuffer;
function $8651862b08ad2ef9$var$isAsyncFunction(value) {
    return $8651862b08ad2ef9$var$ObjectToString(value) === '[object AsyncFunction]';
}
module.exports.isAsyncFunction = $8651862b08ad2ef9$var$isAsyncFunction;
function $8651862b08ad2ef9$var$isMapIterator(value) {
    return $8651862b08ad2ef9$var$ObjectToString(value) === '[object Map Iterator]';
}
module.exports.isMapIterator = $8651862b08ad2ef9$var$isMapIterator;
function $8651862b08ad2ef9$var$isSetIterator(value) {
    return $8651862b08ad2ef9$var$ObjectToString(value) === '[object Set Iterator]';
}
module.exports.isSetIterator = $8651862b08ad2ef9$var$isSetIterator;
function $8651862b08ad2ef9$var$isGeneratorObject(value) {
    return $8651862b08ad2ef9$var$ObjectToString(value) === '[object Generator]';
}
module.exports.isGeneratorObject = $8651862b08ad2ef9$var$isGeneratorObject;
function $8651862b08ad2ef9$var$isWebAssemblyCompiledModule(value) {
    return $8651862b08ad2ef9$var$ObjectToString(value) === '[object WebAssembly.Module]';
}
module.exports.isWebAssemblyCompiledModule = $8651862b08ad2ef9$var$isWebAssemblyCompiledModule;
function $8651862b08ad2ef9$var$isNumberObject(value) {
    return $8651862b08ad2ef9$var$checkBoxedPrimitive(value, $8651862b08ad2ef9$var$numberValue);
}
module.exports.isNumberObject = $8651862b08ad2ef9$var$isNumberObject;
function $8651862b08ad2ef9$var$isStringObject(value) {
    return $8651862b08ad2ef9$var$checkBoxedPrimitive(value, $8651862b08ad2ef9$var$stringValue);
}
module.exports.isStringObject = $8651862b08ad2ef9$var$isStringObject;
function $8651862b08ad2ef9$var$isBooleanObject(value) {
    return $8651862b08ad2ef9$var$checkBoxedPrimitive(value, $8651862b08ad2ef9$var$booleanValue);
}
module.exports.isBooleanObject = $8651862b08ad2ef9$var$isBooleanObject;
function $8651862b08ad2ef9$var$isBigIntObject(value) {
    return $8651862b08ad2ef9$var$BigIntSupported && $8651862b08ad2ef9$var$checkBoxedPrimitive(value, $8651862b08ad2ef9$var$bigIntValue);
}
module.exports.isBigIntObject = $8651862b08ad2ef9$var$isBigIntObject;
function $8651862b08ad2ef9$var$isSymbolObject(value) {
    return $8651862b08ad2ef9$var$SymbolSupported && $8651862b08ad2ef9$var$checkBoxedPrimitive(value, $8651862b08ad2ef9$var$symbolValue);
}
module.exports.isSymbolObject = $8651862b08ad2ef9$var$isSymbolObject;
function $8651862b08ad2ef9$var$isBoxedPrimitive(value) {
    return $8651862b08ad2ef9$var$isNumberObject(value) || $8651862b08ad2ef9$var$isStringObject(value) || $8651862b08ad2ef9$var$isBooleanObject(value) || $8651862b08ad2ef9$var$isBigIntObject(value) || $8651862b08ad2ef9$var$isSymbolObject(value);
}
module.exports.isBoxedPrimitive = $8651862b08ad2ef9$var$isBoxedPrimitive;
function $8651862b08ad2ef9$var$isAnyArrayBuffer(value) {
    return typeof Uint8Array !== 'undefined' && ($8651862b08ad2ef9$var$isArrayBuffer(value) || $8651862b08ad2ef9$var$isSharedArrayBuffer(value));
}
module.exports.isAnyArrayBuffer = $8651862b08ad2ef9$var$isAnyArrayBuffer;
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
parcelRegister("4YAvV", function(module, exports) {
'use strict';

var $39f916e988966ac9$var$hasToStringTag = (parcelRequire("2sYGT"))();

var $fqb8R = parcelRequire("fqb8R");
var $39f916e988966ac9$var$$toString = $fqb8R('Object.prototype.toString');
/** @type {import('.')} */ var $39f916e988966ac9$var$isStandardArguments = function isArguments(value) {
    if ($39f916e988966ac9$var$hasToStringTag && value && typeof value === 'object' && Symbol.toStringTag in value) return false;
    return $39f916e988966ac9$var$$toString(value) === '[object Arguments]';
};
/** @type {import('.')} */ var $39f916e988966ac9$var$isLegacyArguments = function isArguments(value) {
    if ($39f916e988966ac9$var$isStandardArguments(value)) return true;
    return value !== null && typeof value === 'object' && 'length' in value && typeof value.length === 'number' && value.length >= 0 && $39f916e988966ac9$var$$toString(value) !== '[object Array]' && 'callee' in value && $39f916e988966ac9$var$$toString(value.callee) === '[object Function]';
};
var $39f916e988966ac9$var$supportsStandardArguments = function() {
    return $39f916e988966ac9$var$isStandardArguments(arguments);
}();
// @ts-expect-error TODO make this not error
$39f916e988966ac9$var$isStandardArguments.isLegacyArguments = $39f916e988966ac9$var$isLegacyArguments; // for tests
/** @type {import('.')} */ module.exports = $39f916e988966ac9$var$supportsStandardArguments ? $39f916e988966ac9$var$isStandardArguments : $39f916e988966ac9$var$isLegacyArguments;

});
parcelRegister("2sYGT", function(module, exports) {
'use strict';

var $fefOa = parcelRequire("fefOa");
/** @type {import('.')} */ module.exports = function hasToStringTagShams() {
    return $fefOa() && !!Symbol.toStringTag;
};

});
parcelRegister("fefOa", function(module, exports) {
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


parcelRegister("fqb8R", function(module, exports) {
'use strict';

var $6byfI = parcelRequire("6byfI");

var $6m5NS = parcelRequire("6m5NS");
/** @type {(thisArg: string, searchString: string, position?: number) => number} */ var $b3a1ed458f241065$var$$indexOf = $6m5NS([
    $6byfI('%String.prototype.indexOf%')
]);
/** @type {import('.')} */ module.exports = function callBoundIntrinsic(name, allowMissing) {
    /* eslint no-extra-parens: 0 */ var intrinsic = /** @type {(this: unknown, ...args: unknown[]) => unknown} */ $6byfI(name, !!allowMissing);
    if (typeof intrinsic === 'function' && $b3a1ed458f241065$var$$indexOf(name, '.prototype.') > -1) return $6m5NS(/** @type {const} */ [
        intrinsic
    ]);
    return intrinsic;
};

});
parcelRegister("6byfI", function(module, exports) {
'use strict';
var $480e56ff3617c38b$var$undefined1;

var $aECOp = parcelRequire("aECOp");

var $iZzql = parcelRequire("iZzql");

var $ky4hI = parcelRequire("ky4hI");

var $2l1bn = parcelRequire("2l1bn");

var $1ss8T = parcelRequire("1ss8T");

var $fdKGB = parcelRequire("fdKGB");

var $1ypTQ = parcelRequire("1ypTQ");

var $5w5C2 = parcelRequire("5w5C2");

var $2IyVY = parcelRequire("2IyVY");

var $3YCvP = parcelRequire("3YCvP");

var $eUWob = parcelRequire("eUWob");

var $5BQ8u = parcelRequire("5BQ8u");

var $lUmDG = parcelRequire("lUmDG");

var $65MEY = parcelRequire("65MEY");

var $mVQBL = parcelRequire("mVQBL");
var $480e56ff3617c38b$var$$Function = Function;
// eslint-disable-next-line consistent-return
var $480e56ff3617c38b$var$getEvalledConstructor = function(expressionSyntax) {
    try {
        return $480e56ff3617c38b$var$$Function('"use strict"; return (' + expressionSyntax + ').constructor;')();
    } catch (e) {}
};

var $3rOKD = parcelRequire("3rOKD");

var $2ET9L = parcelRequire("2ET9L");
var $480e56ff3617c38b$var$throwTypeError = function() {
    throw new $1ypTQ();
};
var $480e56ff3617c38b$var$ThrowTypeError = $3rOKD ? function() {
    try {
        // eslint-disable-next-line no-unused-expressions, no-caller, no-restricted-properties
        arguments.callee; // IE 8 does not throw here
        return $480e56ff3617c38b$var$throwTypeError;
    } catch (calleeThrows) {
        try {
            // IE 8 throws on Object.getOwnPropertyDescriptor(arguments, '')
            return $3rOKD(arguments, 'callee').get;
        } catch (gOPDthrows) {
            return $480e56ff3617c38b$var$throwTypeError;
        }
    }
}() : $480e56ff3617c38b$var$throwTypeError;

var $480e56ff3617c38b$var$hasSymbols = (parcelRequire("gV9pO"))();

var $84bl3 = parcelRequire("84bl3");

var $4bGMG = parcelRequire("4bGMG");

var $cGsl4 = parcelRequire("cGsl4");

var $jzHe4 = parcelRequire("jzHe4");

var $2U91Y = parcelRequire("2U91Y");
var $480e56ff3617c38b$var$needsEval = {};
var $480e56ff3617c38b$var$TypedArray = typeof Uint8Array === 'undefined' || !$84bl3 ? undefined : $84bl3(Uint8Array);
var $480e56ff3617c38b$var$INTRINSICS = {
    __proto__: null,
    '%AggregateError%': typeof AggregateError === 'undefined' ? undefined : AggregateError,
    '%Array%': Array,
    '%ArrayBuffer%': typeof ArrayBuffer === 'undefined' ? undefined : ArrayBuffer,
    '%ArrayIteratorPrototype%': $480e56ff3617c38b$var$hasSymbols && $84bl3 ? $84bl3([][Symbol.iterator]()) : undefined,
    '%AsyncFromSyncIteratorPrototype%': undefined,
    '%AsyncFunction%': $480e56ff3617c38b$var$needsEval,
    '%AsyncGenerator%': $480e56ff3617c38b$var$needsEval,
    '%AsyncGeneratorFunction%': $480e56ff3617c38b$var$needsEval,
    '%AsyncIteratorPrototype%': $480e56ff3617c38b$var$needsEval,
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
    '%Error%': $iZzql,
    '%eval%': eval,
    '%EvalError%': $ky4hI,
    '%Float16Array%': typeof Float16Array === 'undefined' ? undefined : Float16Array,
    '%Float32Array%': typeof Float32Array === 'undefined' ? undefined : Float32Array,
    '%Float64Array%': typeof Float64Array === 'undefined' ? undefined : Float64Array,
    '%FinalizationRegistry%': typeof FinalizationRegistry === 'undefined' ? undefined : FinalizationRegistry,
    '%Function%': $480e56ff3617c38b$var$$Function,
    '%GeneratorFunction%': $480e56ff3617c38b$var$needsEval,
    '%Int8Array%': typeof Int8Array === 'undefined' ? undefined : Int8Array,
    '%Int16Array%': typeof Int16Array === 'undefined' ? undefined : Int16Array,
    '%Int32Array%': typeof Int32Array === 'undefined' ? undefined : Int32Array,
    '%isFinite%': isFinite,
    '%isNaN%': isNaN,
    '%IteratorPrototype%': $480e56ff3617c38b$var$hasSymbols && $84bl3 ? $84bl3($84bl3([][Symbol.iterator]())) : undefined,
    '%JSON%': typeof JSON === 'object' ? JSON : undefined,
    '%Map%': typeof Map === 'undefined' ? undefined : Map,
    '%MapIteratorPrototype%': typeof Map === 'undefined' || !$480e56ff3617c38b$var$hasSymbols || !$84bl3 ? undefined : $84bl3(new Map()[Symbol.iterator]()),
    '%Math%': Math,
    '%Number%': Number,
    '%Object%': $aECOp,
    '%Object.getOwnPropertyDescriptor%': $3rOKD,
    '%parseFloat%': parseFloat,
    '%parseInt%': parseInt,
    '%Promise%': typeof Promise === 'undefined' ? undefined : Promise,
    '%Proxy%': typeof Proxy === 'undefined' ? undefined : Proxy,
    '%RangeError%': $2l1bn,
    '%ReferenceError%': $1ss8T,
    '%Reflect%': typeof Reflect === 'undefined' ? undefined : Reflect,
    '%RegExp%': RegExp,
    '%Set%': typeof Set === 'undefined' ? undefined : Set,
    '%SetIteratorPrototype%': typeof Set === 'undefined' || !$480e56ff3617c38b$var$hasSymbols || !$84bl3 ? undefined : $84bl3(new Set()[Symbol.iterator]()),
    '%SharedArrayBuffer%': typeof SharedArrayBuffer === 'undefined' ? undefined : SharedArrayBuffer,
    '%String%': String,
    '%StringIteratorPrototype%': $480e56ff3617c38b$var$hasSymbols && $84bl3 ? $84bl3(''[Symbol.iterator]()) : undefined,
    '%Symbol%': $480e56ff3617c38b$var$hasSymbols ? Symbol : undefined,
    '%SyntaxError%': $fdKGB,
    '%ThrowTypeError%': $480e56ff3617c38b$var$ThrowTypeError,
    '%TypedArray%': $480e56ff3617c38b$var$TypedArray,
    '%TypeError%': $1ypTQ,
    '%Uint8Array%': typeof Uint8Array === 'undefined' ? undefined : Uint8Array,
    '%Uint8ClampedArray%': typeof Uint8ClampedArray === 'undefined' ? undefined : Uint8ClampedArray,
    '%Uint16Array%': typeof Uint16Array === 'undefined' ? undefined : Uint16Array,
    '%Uint32Array%': typeof Uint32Array === 'undefined' ? undefined : Uint32Array,
    '%URIError%': $5w5C2,
    '%WeakMap%': typeof WeakMap === 'undefined' ? undefined : WeakMap,
    '%WeakRef%': typeof WeakRef === 'undefined' ? undefined : WeakRef,
    '%WeakSet%': typeof WeakSet === 'undefined' ? undefined : WeakSet,
    '%Function.prototype.call%': $2U91Y,
    '%Function.prototype.apply%': $jzHe4,
    '%Object.defineProperty%': $2ET9L,
    '%Object.getPrototypeOf%': $4bGMG,
    '%Math.abs%': $2IyVY,
    '%Math.floor%': $3YCvP,
    '%Math.max%': $eUWob,
    '%Math.min%': $5BQ8u,
    '%Math.pow%': $lUmDG,
    '%Math.round%': $65MEY,
    '%Math.sign%': $mVQBL,
    '%Reflect.getPrototypeOf%': $cGsl4
};
if ($84bl3) try {
    null.error; // eslint-disable-line no-unused-expressions
} catch (e) {
    // https://github.com/tc39/proposal-shadowrealm/pull/384#issuecomment-1364264229
    var $480e56ff3617c38b$var$errorProto = $84bl3($84bl3(e));
    $480e56ff3617c38b$var$INTRINSICS['%Error.prototype%'] = $480e56ff3617c38b$var$errorProto;
}
var $480e56ff3617c38b$var$doEval = function doEval(name) {
    var value;
    if (name === '%AsyncFunction%') value = $480e56ff3617c38b$var$getEvalledConstructor('async function () {}');
    else if (name === '%GeneratorFunction%') value = $480e56ff3617c38b$var$getEvalledConstructor('function* () {}');
    else if (name === '%AsyncGeneratorFunction%') value = $480e56ff3617c38b$var$getEvalledConstructor('async function* () {}');
    else if (name === '%AsyncGenerator%') {
        var fn = doEval('%AsyncGeneratorFunction%');
        if (fn) value = fn.prototype;
    } else if (name === '%AsyncIteratorPrototype%') {
        var gen = doEval('%AsyncGenerator%');
        if (gen && $84bl3) value = $84bl3(gen.prototype);
    }
    $480e56ff3617c38b$var$INTRINSICS[name] = value;
    return value;
};
var $480e56ff3617c38b$var$LEGACY_ALIASES = {
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

var $3z7dZ = parcelRequire("3z7dZ");

var $gEdsd = parcelRequire("gEdsd");
var $480e56ff3617c38b$var$$concat = $3z7dZ.call($2U91Y, Array.prototype.concat);
var $480e56ff3617c38b$var$$spliceApply = $3z7dZ.call($jzHe4, Array.prototype.splice);
var $480e56ff3617c38b$var$$replace = $3z7dZ.call($2U91Y, String.prototype.replace);
var $480e56ff3617c38b$var$$strSlice = $3z7dZ.call($2U91Y, String.prototype.slice);
var $480e56ff3617c38b$var$$exec = $3z7dZ.call($2U91Y, RegExp.prototype.exec);
/* adapted from https://github.com/lodash/lodash/blob/4.17.15/dist/lodash.js#L6735-L6744 */ var $480e56ff3617c38b$var$rePropName = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g;
var $480e56ff3617c38b$var$reEscapeChar = /\\(\\)?/g; /** Used to match backslashes in property paths. */ 
var $480e56ff3617c38b$var$stringToPath = function stringToPath(string) {
    var first = $480e56ff3617c38b$var$$strSlice(string, 0, 1);
    var last = $480e56ff3617c38b$var$$strSlice(string, -1);
    if (first === '%' && last !== '%') throw new $fdKGB('invalid intrinsic syntax, expected closing `%`');
    else if (last === '%' && first !== '%') throw new $fdKGB('invalid intrinsic syntax, expected opening `%`');
    var result = [];
    $480e56ff3617c38b$var$$replace(string, $480e56ff3617c38b$var$rePropName, function(match, number, quote, subString) {
        result[result.length] = quote ? $480e56ff3617c38b$var$$replace(subString, $480e56ff3617c38b$var$reEscapeChar, '$1') : number || match;
    });
    return result;
};
/* end adaptation */ var $480e56ff3617c38b$var$getBaseIntrinsic = function getBaseIntrinsic(name, allowMissing) {
    var intrinsicName = name;
    var alias;
    if ($gEdsd($480e56ff3617c38b$var$LEGACY_ALIASES, intrinsicName)) {
        alias = $480e56ff3617c38b$var$LEGACY_ALIASES[intrinsicName];
        intrinsicName = '%' + alias[0] + '%';
    }
    if ($gEdsd($480e56ff3617c38b$var$INTRINSICS, intrinsicName)) {
        var value = $480e56ff3617c38b$var$INTRINSICS[intrinsicName];
        if (value === $480e56ff3617c38b$var$needsEval) value = $480e56ff3617c38b$var$doEval(intrinsicName);
        if (typeof value === 'undefined' && !allowMissing) throw new $1ypTQ('intrinsic ' + name + ' exists, but is not available. Please file an issue!');
        return {
            alias: alias,
            name: intrinsicName,
            value: value
        };
    }
    throw new $fdKGB('intrinsic ' + name + ' does not exist!');
};
module.exports = function GetIntrinsic(name, allowMissing) {
    if (typeof name !== 'string' || name.length === 0) throw new $1ypTQ('intrinsic name must be a non-empty string');
    if (arguments.length > 1 && typeof allowMissing !== 'boolean') throw new $1ypTQ('"allowMissing" argument must be a boolean');
    if ($480e56ff3617c38b$var$$exec(/^%?[^%]*%?$/, name) === null) throw new $fdKGB('`%` may not be present anywhere but at the beginning and end of the intrinsic name');
    var parts = $480e56ff3617c38b$var$stringToPath(name);
    var intrinsicBaseName = parts.length > 0 ? parts[0] : '';
    var intrinsic = $480e56ff3617c38b$var$getBaseIntrinsic('%' + intrinsicBaseName + '%', allowMissing);
    var intrinsicRealName = intrinsic.name;
    var value = intrinsic.value;
    var skipFurtherCaching = false;
    var alias = intrinsic.alias;
    if (alias) {
        intrinsicBaseName = alias[0];
        $480e56ff3617c38b$var$$spliceApply(parts, $480e56ff3617c38b$var$$concat([
            0,
            1
        ], alias));
    }
    for(var i = 1, isOwn = true; i < parts.length; i += 1){
        var part = parts[i];
        var first = $480e56ff3617c38b$var$$strSlice(part, 0, 1);
        var last = $480e56ff3617c38b$var$$strSlice(part, -1);
        if ((first === '"' || first === "'" || first === '`' || last === '"' || last === "'" || last === '`') && first !== last) throw new $fdKGB('property names with quotes must have matching quotes');
        if (part === 'constructor' || !isOwn) skipFurtherCaching = true;
        intrinsicBaseName += '.' + part;
        intrinsicRealName = '%' + intrinsicBaseName + '%';
        if ($gEdsd($480e56ff3617c38b$var$INTRINSICS, intrinsicRealName)) value = $480e56ff3617c38b$var$INTRINSICS[intrinsicRealName];
        else if (value != null) {
            if (!(part in value)) {
                if (!allowMissing) throw new $1ypTQ('base intrinsic for ' + name + ' exists, but the property is not available.');
                return void 0;
            }
            if ($3rOKD && i + 1 >= parts.length) {
                var desc = $3rOKD(value, part);
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
                isOwn = $gEdsd(value, part);
                value = value[part];
            }
            if (isOwn && !skipFurtherCaching) $480e56ff3617c38b$var$INTRINSICS[intrinsicRealName] = value;
        }
    }
    return value;
};

});
parcelRegister("aECOp", function(module, exports) {
'use strict';
/** @type {import('.')} */ module.exports = Object;

});

parcelRegister("iZzql", function(module, exports) {
'use strict';
/** @type {import('.')} */ module.exports = Error;

});

parcelRegister("ky4hI", function(module, exports) {
'use strict';
/** @type {import('./eval')} */ module.exports = EvalError;

});

parcelRegister("2l1bn", function(module, exports) {
'use strict';
/** @type {import('./range')} */ module.exports = RangeError;

});

parcelRegister("1ss8T", function(module, exports) {
'use strict';
/** @type {import('./ref')} */ module.exports = ReferenceError;

});

parcelRegister("fdKGB", function(module, exports) {
'use strict';
/** @type {import('./syntax')} */ module.exports = SyntaxError;

});

parcelRegister("1ypTQ", function(module, exports) {
'use strict';
/** @type {import('./type')} */ module.exports = TypeError;

});

parcelRegister("5w5C2", function(module, exports) {
'use strict';
/** @type {import('./uri')} */ module.exports = URIError;

});

parcelRegister("2IyVY", function(module, exports) {
'use strict';
/** @type {import('./abs')} */ module.exports = Math.abs;

});

parcelRegister("3YCvP", function(module, exports) {
'use strict';
/** @type {import('./floor')} */ module.exports = Math.floor;

});

parcelRegister("eUWob", function(module, exports) {
'use strict';
/** @type {import('./max')} */ module.exports = Math.max;

});

parcelRegister("5BQ8u", function(module, exports) {
'use strict';
/** @type {import('./min')} */ module.exports = Math.min;

});

parcelRegister("lUmDG", function(module, exports) {
'use strict';
/** @type {import('./pow')} */ module.exports = Math.pow;

});

parcelRegister("65MEY", function(module, exports) {
'use strict';
/** @type {import('./round')} */ module.exports = Math.round;

});

parcelRegister("mVQBL", function(module, exports) {
'use strict';

var $e5aqA = parcelRequire("e5aqA");
/** @type {import('./sign')} */ module.exports = function sign(number) {
    if ($e5aqA(number) || number === 0) return number;
    return number < 0 ? -1 : 1;
};

});
parcelRegister("e5aqA", function(module, exports) {
'use strict';
/** @type {import('./isNaN')} */ module.exports = Number.isNaN || function isNaN(a) {
    return a !== a;
};

});


parcelRegister("3rOKD", function(module, exports) {
'use strict';

var $13TqD = parcelRequire("13TqD");
var $282b42d0be238185$require$$gOPD = $13TqD;
if ($282b42d0be238185$require$$gOPD) try {
    $282b42d0be238185$require$$gOPD([], 'length');
} catch (e) {
    // IE 8 has a broken gOPD
    $282b42d0be238185$require$$gOPD = null;
}
module.exports = $282b42d0be238185$require$$gOPD;

});
parcelRegister("13TqD", function(module, exports) {
'use strict';
/** @type {import('./gOPD')} */ module.exports = Object.getOwnPropertyDescriptor;

});


parcelRegister("2ET9L", function(module, exports) {
'use strict';
/** @type {import('.')} */ var $1efa1a1cfb2e1cac$var$$defineProperty = Object.defineProperty || false;
if ($1efa1a1cfb2e1cac$var$$defineProperty) try {
    $1efa1a1cfb2e1cac$var$$defineProperty({}, 'a', {
        value: 1
    });
} catch (e) {
    // IE 8 has a broken defineProperty
    $1efa1a1cfb2e1cac$var$$defineProperty = false;
}
module.exports = $1efa1a1cfb2e1cac$var$$defineProperty;

});

parcelRegister("gV9pO", function(module, exports) {
'use strict';
var $c51945e2564635f5$var$origSymbol = typeof Symbol !== 'undefined' && Symbol;

var $fefOa = parcelRequire("fefOa");
/** @type {import('.')} */ module.exports = function hasNativeSymbols() {
    if (typeof $c51945e2564635f5$var$origSymbol !== 'function') return false;
    if (typeof Symbol !== 'function') return false;
    if (typeof $c51945e2564635f5$var$origSymbol('foo') !== 'symbol') return false;
    if (typeof Symbol('bar') !== 'symbol') return false;
    return $fefOa();
};

});

parcelRegister("84bl3", function(module, exports) {
'use strict';

var $cGsl4 = parcelRequire("cGsl4");

var $4bGMG = parcelRequire("4bGMG");

var $74rvr = parcelRequire("74rvr");
/** @type {import('.')} */ module.exports = $cGsl4 ? function getProto(O) {
    // @ts-expect-error TS can't narrow inside a closure, for some reason
    return $cGsl4(O);
} : $4bGMG ? function getProto(O) {
    if (!O || typeof O !== 'object' && typeof O !== 'function') throw new TypeError('getProto: not an object');
    // @ts-expect-error TS can't narrow inside a closure, for some reason
    return $4bGMG(O);
} : $74rvr ? function getProto(O) {
    // @ts-expect-error TS can't narrow inside a closure, for some reason
    return $74rvr(O);
} : null;

});
parcelRegister("cGsl4", function(module, exports) {
'use strict';
/** @type {import('./Reflect.getPrototypeOf')} */ module.exports = typeof Reflect !== 'undefined' && Reflect.getPrototypeOf || null;

});

parcelRegister("4bGMG", function(module, exports) {
'use strict';

var $aECOp = parcelRequire("aECOp");
/** @type {import('./Object.getPrototypeOf')} */ module.exports = $aECOp.getPrototypeOf || null;

});

parcelRegister("74rvr", function(module, exports) {
'use strict';

var $6m5NS = parcelRequire("6m5NS");

var $3rOKD = parcelRequire("3rOKD");
var $525e3e482e34fd2e$var$hasProtoAccessor;
try {
    // eslint-disable-next-line no-extra-parens, no-proto
    $525e3e482e34fd2e$var$hasProtoAccessor = /** @type {{ __proto__?: typeof Array.prototype }} */ [].__proto__ === Array.prototype;
} catch (e) {
    if (!e || typeof e !== 'object' || !('code' in e) || e.code !== 'ERR_PROTO_ACCESS') throw e;
}
// eslint-disable-next-line no-extra-parens
var $525e3e482e34fd2e$var$desc = !!$525e3e482e34fd2e$var$hasProtoAccessor && $3rOKD && $3rOKD(Object.prototype, /** @type {keyof typeof Object.prototype} */ '__proto__');
var $525e3e482e34fd2e$var$$Object = Object;
var $525e3e482e34fd2e$var$$getPrototypeOf = $525e3e482e34fd2e$var$$Object.getPrototypeOf;
/** @type {import('./get')} */ module.exports = $525e3e482e34fd2e$var$desc && typeof $525e3e482e34fd2e$var$desc.get === 'function' ? $6m5NS([
    $525e3e482e34fd2e$var$desc.get
]) : typeof $525e3e482e34fd2e$var$$getPrototypeOf === 'function' ? /** @type {import('./get')} */ function getDunder(value) {
    // eslint-disable-next-line eqeqeq
    return $525e3e482e34fd2e$var$$getPrototypeOf(value == null ? value : $525e3e482e34fd2e$var$$Object(value));
} : false;

});
parcelRegister("6m5NS", function(module, exports) {
'use strict';

var $3z7dZ = parcelRequire("3z7dZ");

var $1ypTQ = parcelRequire("1ypTQ");

var $2U91Y = parcelRequire("2U91Y");

var $6uqDO = parcelRequire("6uqDO");
/** @type {(args: [Function, thisArg?: unknown, ...args: unknown[]]) => Function} TODO FIXME, find a way to use import('.') */ module.exports = function callBindBasic(args) {
    if (args.length < 1 || typeof args[0] !== 'function') throw new $1ypTQ('a function is required');
    return $6uqDO($3z7dZ, $2U91Y, args);
};

});
parcelRegister("3z7dZ", function(module, exports) {
'use strict';

var $28XuP = parcelRequire("28XuP");
module.exports = Function.prototype.bind || $28XuP;

});
parcelRegister("28XuP", function(module, exports) {
'use strict';
/* eslint no-invalid-this: 1 */ var $18fa7ad91df62215$var$ERROR_MESSAGE = 'Function.prototype.bind called on incompatible ';
var $18fa7ad91df62215$var$toStr = Object.prototype.toString;
var $18fa7ad91df62215$var$max = Math.max;
var $18fa7ad91df62215$var$funcType = '[object Function]';
var $18fa7ad91df62215$var$concatty = function concatty(a, b) {
    var arr = [];
    for(var i = 0; i < a.length; i += 1)arr[i] = a[i];
    for(var j = 0; j < b.length; j += 1)arr[j + a.length] = b[j];
    return arr;
};
var $18fa7ad91df62215$var$slicy = function slicy(arrLike, offset) {
    var arr = [];
    for(var i = offset || 0, j = 0; i < arrLike.length; i += 1, j += 1)arr[j] = arrLike[i];
    return arr;
};
var $18fa7ad91df62215$var$joiny = function(arr, joiner) {
    var str = '';
    for(var i = 0; i < arr.length; i += 1){
        str += arr[i];
        if (i + 1 < arr.length) str += joiner;
    }
    return str;
};
module.exports = function bind(that) {
    var target = this;
    if (typeof target !== 'function' || $18fa7ad91df62215$var$toStr.apply(target) !== $18fa7ad91df62215$var$funcType) throw new TypeError($18fa7ad91df62215$var$ERROR_MESSAGE + target);
    var args = $18fa7ad91df62215$var$slicy(arguments, 1);
    var bound;
    var binder = function() {
        if (this instanceof bound) {
            var result = target.apply(this, $18fa7ad91df62215$var$concatty(args, arguments));
            if (Object(result) === result) return result;
            return this;
        }
        return target.apply(that, $18fa7ad91df62215$var$concatty(args, arguments));
    };
    var boundLength = $18fa7ad91df62215$var$max(0, target.length - args.length);
    var boundArgs = [];
    for(var i = 0; i < boundLength; i++)boundArgs[i] = '$' + i;
    bound = Function('binder', 'return function (' + $18fa7ad91df62215$var$joiny(boundArgs, ',') + '){ return binder.apply(this,arguments); }')(binder);
    if (target.prototype) {
        var Empty = function Empty() {};
        Empty.prototype = target.prototype;
        bound.prototype = new Empty();
        Empty.prototype = null;
    }
    return bound;
};

});


parcelRegister("2U91Y", function(module, exports) {
'use strict';
/** @type {import('./functionCall')} */ module.exports = Function.prototype.call;

});

parcelRegister("6uqDO", function(module, exports) {
'use strict';

var $3z7dZ = parcelRequire("3z7dZ");

var $jzHe4 = parcelRequire("jzHe4");

var $2U91Y = parcelRequire("2U91Y");

var $c3BU2 = parcelRequire("c3BU2");
/** @type {import('./actualApply')} */ module.exports = $c3BU2 || $3z7dZ.call($2U91Y, $jzHe4);

});
parcelRegister("jzHe4", function(module, exports) {
'use strict';
/** @type {import('./functionApply')} */ module.exports = Function.prototype.apply;

});

parcelRegister("c3BU2", function(module, exports) {
'use strict';
/** @type {import('./reflectApply')} */ module.exports = typeof Reflect !== 'undefined' && Reflect && Reflect.apply;

});





parcelRegister("gEdsd", function(module, exports) {
'use strict';
var $c1ead17779c56845$var$call = Function.prototype.call;
var $c1ead17779c56845$var$$hasOwn = Object.prototype.hasOwnProperty;

var $3z7dZ = parcelRequire("3z7dZ");
/** @type {import('.')} */ module.exports = $3z7dZ.call($c1ead17779c56845$var$call, $c1ead17779c56845$var$$hasOwn);

});




parcelRegister("bug9c", function(module, exports) {
'use strict';

var $fqb8R = parcelRequire("fqb8R");

var $88K1t = parcelRequire("88K1t");
var $85cf05999b0a6128$var$isFnRegex = $88K1t(/^\s*(?:function)?\*/);

var $85cf05999b0a6128$var$hasToStringTag = (parcelRequire("2sYGT"))();

var $84bl3 = parcelRequire("84bl3");
var $85cf05999b0a6128$var$toStr = $fqb8R('Object.prototype.toString');
var $85cf05999b0a6128$var$fnToStr = $fqb8R('Function.prototype.toString');

var $iv1ec = parcelRequire("iv1ec");
/** @type {import('.')} */ module.exports = function isGeneratorFunction(fn) {
    if (typeof fn !== 'function') return false;
    if ($85cf05999b0a6128$var$isFnRegex($85cf05999b0a6128$var$fnToStr(fn))) return true;
    if (!$85cf05999b0a6128$var$hasToStringTag) {
        var str = $85cf05999b0a6128$var$toStr(fn);
        return str === '[object GeneratorFunction]';
    }
    if (!$84bl3) return false;
    var GeneratorFunction = $iv1ec();
    return GeneratorFunction && $84bl3(fn) === GeneratorFunction.prototype;
};

});
parcelRegister("88K1t", function(module, exports) {
'use strict';

var $fqb8R = parcelRequire("fqb8R");

var $kSVDM = parcelRequire("kSVDM");
var $5ed2c53a9895c71c$var$$exec = $fqb8R('RegExp.prototype.exec');

var $1ypTQ = parcelRequire("1ypTQ");
/** @type {import('.')} */ module.exports = function regexTester(regex) {
    if (!$kSVDM(regex)) throw new $1ypTQ('`regex` must be a RegExp');
    return function test(s) {
        return $5ed2c53a9895c71c$var$$exec(regex, s) !== null;
    };
};

});
parcelRegister("kSVDM", function(module, exports) {
'use strict';

var $fqb8R = parcelRequire("fqb8R");

var $03ec7a107cb24065$var$hasToStringTag = (parcelRequire("2sYGT"))();

var $gEdsd = parcelRequire("gEdsd");

var $3rOKD = parcelRequire("3rOKD");
/** @type {import('.')} */ var $03ec7a107cb24065$var$fn;
if ($03ec7a107cb24065$var$hasToStringTag) {
    /** @type {(receiver: ThisParameterType<typeof RegExp.prototype.exec>, ...args: Parameters<typeof RegExp.prototype.exec>) => ReturnType<typeof RegExp.prototype.exec>} */ var $03ec7a107cb24065$var$$exec = $fqb8R('RegExp.prototype.exec');
    /** @type {object} */ var $03ec7a107cb24065$var$isRegexMarker = {};
    var $03ec7a107cb24065$var$throwRegexMarker = function() {
        throw $03ec7a107cb24065$var$isRegexMarker;
    };
    /** @type {{ toString(): never, valueOf(): never, [Symbol.toPrimitive]?(): never }} */ var $03ec7a107cb24065$var$badStringifier = {
        toString: $03ec7a107cb24065$var$throwRegexMarker,
        valueOf: $03ec7a107cb24065$var$throwRegexMarker
    };
    if (typeof Symbol.toPrimitive === 'symbol') $03ec7a107cb24065$var$badStringifier[Symbol.toPrimitive] = $03ec7a107cb24065$var$throwRegexMarker;
    /** @type {import('.')} */ // @ts-expect-error TS can't figure out that the $exec call always throws
    // eslint-disable-next-line consistent-return
    $03ec7a107cb24065$var$fn = function isRegex(value) {
        if (!value || typeof value !== 'object') return false;
        // eslint-disable-next-line no-extra-parens
        var descriptor = /** @type {NonNullable<typeof gOPD>} */ $3rOKD(/** @type {{ lastIndex?: unknown }} */ value, 'lastIndex');
        var hasLastIndexDataProperty = descriptor && $gEdsd(descriptor, 'value');
        if (!hasLastIndexDataProperty) return false;
        try {
            // eslint-disable-next-line no-extra-parens
            $03ec7a107cb24065$var$$exec(value, /** @type {unknown} */ $03ec7a107cb24065$var$badStringifier);
        } catch (e) {
            return e === $03ec7a107cb24065$var$isRegexMarker;
        }
    };
} else {
    /** @type {(receiver: ThisParameterType<typeof Object.prototype.toString>, ...args: Parameters<typeof Object.prototype.toString>) => ReturnType<typeof Object.prototype.toString>} */ var $03ec7a107cb24065$var$$toString = $fqb8R('Object.prototype.toString');
    /** @const @type {'[object RegExp]'} */ var $03ec7a107cb24065$var$regexClass = '[object RegExp]';
    /** @type {import('.')} */ $03ec7a107cb24065$var$fn = function isRegex(value) {
        // In older browsers, typeof regex incorrectly returns 'function'
        if (!value || typeof value !== 'object' && typeof value !== 'function') return false;
        return $03ec7a107cb24065$var$$toString(value) === $03ec7a107cb24065$var$regexClass;
    };
}
module.exports = $03ec7a107cb24065$var$fn;

});


parcelRegister("iv1ec", function(module, exports) {

$parcel$defineInteropFlag(module.exports);

$parcel$export(module.exports, "default", () => $c771ab2a7b1997ed$export$2e2bcd8739ae039);

var $gQ7ia = parcelRequire("gQ7ia");
var /** @type {import('./index.d.mts').default} */ $c771ab2a7b1997ed$export$2e2bcd8739ae039 = (0, (/*@__PURE__*/$parcel$interopDefault($gQ7ia)));

});
parcelRegister("gQ7ia", function(module, exports) {
'use strict';
// eslint-disable-next-line no-extra-parens, no-empty-function
const $c42728ba60c1c886$var$cached = /** @type {GeneratorFunctionConstructor} */ (function*() {}).constructor;
/** @type {import('.')} */ module.exports = ()=>$c42728ba60c1c886$var$cached;

});



parcelRegister("hPWai", function(module, exports) {
'use strict';

var $getbJ = parcelRequire("getbJ");

var $JBLww = parcelRequire("JBLww");

var $75iQF = parcelRequire("75iQF");

var $fqb8R = parcelRequire("fqb8R");

var $3rOKD = parcelRequire("3rOKD");

var $84bl3 = parcelRequire("84bl3");
var $cfc4517a127755ce$var$$toString = $fqb8R('Object.prototype.toString');

var $cfc4517a127755ce$var$hasToStringTag = (parcelRequire("2sYGT"))();
var $cfc4517a127755ce$var$g = typeof globalThis === 'undefined' ? $parcel$global : globalThis;
var $cfc4517a127755ce$var$typedArrays = $JBLww();
var $cfc4517a127755ce$var$$slice = $fqb8R('String.prototype.slice');
/** @type {<T = unknown>(array: readonly T[], value: unknown) => number} */ var $cfc4517a127755ce$var$$indexOf = $fqb8R('Array.prototype.indexOf', true) || function indexOf(array, value) {
    for(var i = 0; i < array.length; i += 1){
        if (array[i] === value) return i;
    }
    return -1;
};
/** @typedef {import('./types').Getter} Getter */ /** @type {import('./types').Cache} */ var $cfc4517a127755ce$var$cache = {
    __proto__: null
};
if ($cfc4517a127755ce$var$hasToStringTag && $3rOKD && $84bl3) $getbJ($cfc4517a127755ce$var$typedArrays, function(typedArray) {
    var arr = new $cfc4517a127755ce$var$g[typedArray]();
    if (Symbol.toStringTag in arr && $84bl3) {
        var proto = $84bl3(arr);
        // @ts-expect-error TS won't narrow inside a closure
        var descriptor = $3rOKD(proto, Symbol.toStringTag);
        if (!descriptor && proto) {
            var superProto = $84bl3(proto);
            // @ts-expect-error TS won't narrow inside a closure
            descriptor = $3rOKD(superProto, Symbol.toStringTag);
        }
        if (descriptor && descriptor.get) {
            var bound = $75iQF(descriptor.get);
            $cfc4517a127755ce$var$cache[/** @type {`$${import('.').TypedArrayName}`} */ '$' + typedArray] = bound;
        }
    }
});
else $getbJ($cfc4517a127755ce$var$typedArrays, function(typedArray) {
    var arr = new $cfc4517a127755ce$var$g[typedArray]();
    var fn = arr.slice || arr.set;
    if (fn) {
        var bound = /** @type {import('./types').BoundSlice | import('./types').BoundSet} */ // @ts-expect-error TODO FIXME
        $75iQF(fn);
        $cfc4517a127755ce$var$cache[/** @type {`$${import('.').TypedArrayName}`} */ '$' + typedArray] = bound;
    }
});
/** @type {(value: object) => false | import('.').TypedArrayName} */ var $cfc4517a127755ce$var$tryTypedArrays = function tryAllTypedArrays(value) {
    /** @type {ReturnType<typeof tryAllTypedArrays>} */ var found = false;
    $getbJ(/** @type {Record<`\$${import('.').TypedArrayName}`, Getter>} */ $cfc4517a127755ce$var$cache, /** @type {(getter: Getter, name: `\$${import('.').TypedArrayName}`) => void} */ function(getter, typedArray) {
        if (!found) try {
            // @ts-expect-error a throw is fine here
            if ('$' + getter(value) === typedArray) found = /** @type {import('.').TypedArrayName} */ $cfc4517a127755ce$var$$slice(typedArray, 1);
        } catch (e) {}
    });
    return found;
};
/** @type {(value: object) => false | import('.').TypedArrayName} */ var $cfc4517a127755ce$var$trySlices = function tryAllSlices(value) {
    /** @type {ReturnType<typeof tryAllSlices>} */ var found = false;
    $getbJ(/** @type {Record<`\$${import('.').TypedArrayName}`, Getter>} */ $cfc4517a127755ce$var$cache, /** @type {(getter: Getter, name: `\$${import('.').TypedArrayName}`) => void} */ function(getter, name) {
        if (!found) try {
            // @ts-expect-error a throw is fine here
            getter(value);
            found = /** @type {import('.').TypedArrayName} */ $cfc4517a127755ce$var$$slice(name, 1);
        } catch (e) {}
    });
    return found;
};
/** @type {import('.')} */ module.exports = function whichTypedArray(value) {
    if (!value || typeof value !== 'object') return false;
    if (!$cfc4517a127755ce$var$hasToStringTag) {
        /** @type {string} */ var tag = $cfc4517a127755ce$var$$slice($cfc4517a127755ce$var$$toString(value), 8, -1);
        if ($cfc4517a127755ce$var$$indexOf($cfc4517a127755ce$var$typedArrays, tag) > -1) return tag;
        if (tag !== 'Object') return false;
        // node < 0.6 hits here on real Typed Arrays
        return $cfc4517a127755ce$var$trySlices(value);
    }
    if (!$3rOKD) return null;
     // unknown engine
    return $cfc4517a127755ce$var$tryTypedArrays(value);
};

});
parcelRegister("getbJ", function(module, exports) {
'use strict';

var $jJcy9 = parcelRequire("jJcy9");
var $bd1498511e18e9bc$var$toStr = Object.prototype.toString;
var $bd1498511e18e9bc$var$hasOwnProperty = Object.prototype.hasOwnProperty;
/** @type {<This, A extends readonly unknown[]>(arr: A, iterator: (this: This | void, value: A[number], index: number, arr: A) => void, receiver: This | undefined) => void} */ var $bd1498511e18e9bc$var$forEachArray = function forEachArray(array, iterator, receiver) {
    for(var i = 0, len = array.length; i < len; i++)if ($bd1498511e18e9bc$var$hasOwnProperty.call(array, i)) {
        if (receiver == null) iterator(array[i], i, array);
        else iterator.call(receiver, array[i], i, array);
    }
};
/** @type {<This, S extends string>(string: S, iterator: (this: This | void, value: S[number], index: number, string: S) => void, receiver: This | undefined) => void} */ var $bd1498511e18e9bc$var$forEachString = function forEachString(string, iterator, receiver) {
    for(var i = 0, len = string.length; i < len; i++)// no such thing as a sparse string.
    if (receiver == null) iterator(string.charAt(i), i, string);
    else iterator.call(receiver, string.charAt(i), i, string);
};
/** @type {<This, O>(obj: O, iterator: (this: This | void, value: O[keyof O], index: keyof O, obj: O) => void, receiver: This | undefined) => void} */ var $bd1498511e18e9bc$var$forEachObject = function forEachObject(object, iterator, receiver) {
    for(var k in object)if ($bd1498511e18e9bc$var$hasOwnProperty.call(object, k)) {
        if (receiver == null) iterator(object[k], k, object);
        else iterator.call(receiver, object[k], k, object);
    }
};
/** @type {(x: unknown) => x is readonly unknown[]} */ function $bd1498511e18e9bc$var$isArray(x) {
    return $bd1498511e18e9bc$var$toStr.call(x) === '[object Array]';
}
/** @type {import('.')._internal} */ module.exports = function forEach(list, iterator, thisArg) {
    if (!$jJcy9(iterator)) throw new TypeError('iterator must be a function');
    var receiver;
    if (arguments.length >= 3) receiver = thisArg;
    if ($bd1498511e18e9bc$var$isArray(list)) $bd1498511e18e9bc$var$forEachArray(list, iterator, receiver);
    else if (typeof list === 'string') $bd1498511e18e9bc$var$forEachString(list, iterator, receiver);
    else $bd1498511e18e9bc$var$forEachObject(list, iterator, receiver);
};

});
parcelRegister("jJcy9", function(module, exports) {
'use strict';
var $e5cbf468c97ca159$var$fnToStr = Function.prototype.toString;
var $e5cbf468c97ca159$var$reflectApply = typeof Reflect === 'object' && Reflect !== null && Reflect.apply;
var $e5cbf468c97ca159$var$badArrayLike;
var $e5cbf468c97ca159$var$isCallableMarker;
if (typeof $e5cbf468c97ca159$var$reflectApply === 'function' && typeof Object.defineProperty === 'function') try {
    $e5cbf468c97ca159$var$badArrayLike = Object.defineProperty({}, 'length', {
        get: function() {
            throw $e5cbf468c97ca159$var$isCallableMarker;
        }
    });
    $e5cbf468c97ca159$var$isCallableMarker = {};
    // eslint-disable-next-line no-throw-literal
    $e5cbf468c97ca159$var$reflectApply(function() {
        throw 42;
    }, null, $e5cbf468c97ca159$var$badArrayLike);
} catch (_) {
    if (_ !== $e5cbf468c97ca159$var$isCallableMarker) $e5cbf468c97ca159$var$reflectApply = null;
}
else $e5cbf468c97ca159$var$reflectApply = null;
var $e5cbf468c97ca159$var$constructorRegex = /^\s*class\b/;
var $e5cbf468c97ca159$var$isES6ClassFn = function isES6ClassFunction(value) {
    try {
        var fnStr = $e5cbf468c97ca159$var$fnToStr.call(value);
        return $e5cbf468c97ca159$var$constructorRegex.test(fnStr);
    } catch (e) {
        return false; // not a function
    }
};
var $e5cbf468c97ca159$var$tryFunctionObject = function tryFunctionToStr(value) {
    try {
        if ($e5cbf468c97ca159$var$isES6ClassFn(value)) return false;
        $e5cbf468c97ca159$var$fnToStr.call(value);
        return true;
    } catch (e) {
        return false;
    }
};
var $e5cbf468c97ca159$var$toStr = Object.prototype.toString;
var $e5cbf468c97ca159$var$objectClass = '[object Object]';
var $e5cbf468c97ca159$var$fnClass = '[object Function]';
var $e5cbf468c97ca159$var$genClass = '[object GeneratorFunction]';
var $e5cbf468c97ca159$var$ddaClass = '[object HTMLAllCollection]'; // IE 11
var $e5cbf468c97ca159$var$ddaClass2 = '[object HTML document.all class]';
var $e5cbf468c97ca159$var$ddaClass3 = '[object HTMLCollection]'; // IE 9-10
var $e5cbf468c97ca159$var$hasToStringTag = typeof Symbol === 'function' && !!Symbol.toStringTag; // better: use `has-tostringtag`
var $e5cbf468c97ca159$var$isIE68 = !(0 in [
    , 
]); // eslint-disable-line no-sparse-arrays, comma-spacing
var $e5cbf468c97ca159$var$isDDA = function isDocumentDotAll() {
    return false;
};
if (typeof document === 'object') {
    // Firefox 3 canonicalizes DDA to undefined when it's not accessed directly
    var $e5cbf468c97ca159$var$all = document.all;
    if ($e5cbf468c97ca159$var$toStr.call($e5cbf468c97ca159$var$all) === $e5cbf468c97ca159$var$toStr.call(document.all)) $e5cbf468c97ca159$var$isDDA = function isDocumentDotAll(value) {
        /* globals document: false */ // in IE 6-8, typeof document.all is "object" and it's truthy
        if (($e5cbf468c97ca159$var$isIE68 || !value) && (typeof value === 'undefined' || typeof value === 'object')) try {
            var str = $e5cbf468c97ca159$var$toStr.call(value);
            return (str === $e5cbf468c97ca159$var$ddaClass || str === $e5cbf468c97ca159$var$ddaClass2 || str === $e5cbf468c97ca159$var$ddaClass3 // opera 12.16
             || str === $e5cbf468c97ca159$var$objectClass // IE 6-8
            ) && value('') == null; // eslint-disable-line eqeqeq
        } catch (e) {}
        return false;
    };
}
module.exports = $e5cbf468c97ca159$var$reflectApply ? function isCallable(value) {
    if ($e5cbf468c97ca159$var$isDDA(value)) return true;
    if (!value) return false;
    if (typeof value !== 'function' && typeof value !== 'object') return false;
    try {
        $e5cbf468c97ca159$var$reflectApply(value, null, $e5cbf468c97ca159$var$badArrayLike);
    } catch (e) {
        if (e !== $e5cbf468c97ca159$var$isCallableMarker) return false;
    }
    return !$e5cbf468c97ca159$var$isES6ClassFn(value) && $e5cbf468c97ca159$var$tryFunctionObject(value);
} : function isCallable(value) {
    if ($e5cbf468c97ca159$var$isDDA(value)) return true;
    if (!value) return false;
    if (typeof value !== 'function' && typeof value !== 'object') return false;
    if ($e5cbf468c97ca159$var$hasToStringTag) return $e5cbf468c97ca159$var$tryFunctionObject(value);
    if ($e5cbf468c97ca159$var$isES6ClassFn(value)) return false;
    var strClass = $e5cbf468c97ca159$var$toStr.call(value);
    if (strClass !== $e5cbf468c97ca159$var$fnClass && strClass !== $e5cbf468c97ca159$var$genClass && !/^\[object HTML/.test(strClass)) return false;
    return $e5cbf468c97ca159$var$tryFunctionObject(value);
};

});


parcelRegister("JBLww", function(module, exports) {
'use strict';

var $72pwf = parcelRequire("72pwf");
var $08917f86fb5a597c$var$g = typeof globalThis === 'undefined' ? $parcel$global : globalThis;
/** @type {import('.')} */ module.exports = function availableTypedArrays() {
    var /** @type {ReturnType<typeof availableTypedArrays>} */ out = [];
    for(var i = 0; i < $72pwf.length; i++)if (typeof $08917f86fb5a597c$var$g[$72pwf[i]] === 'function') // @ts-expect-error
    out[out.length] = $72pwf[i];
    return out;
};

});
parcelRegister("72pwf", function(module, exports) {
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


parcelRegister("75iQF", function(module, exports) {
'use strict';

var $a00Zx = parcelRequire("a00Zx");

var $2ET9L = parcelRequire("2ET9L");

var $6m5NS = parcelRequire("6m5NS");

var $i1vAC = parcelRequire("i1vAC");
module.exports = function callBind(originalFunction) {
    var func = $6m5NS(arguments);
    var adjustedLength = originalFunction.length - (arguments.length - 1);
    return $a00Zx(func, 1 + (adjustedLength > 0 ? adjustedLength : 0), true);
};
if ($2ET9L) $2ET9L(module.exports, 'apply', {
    value: $i1vAC
});
else module.exports.apply = $i1vAC;

});
parcelRegister("a00Zx", function(module, exports) {
'use strict';

var $6byfI = parcelRequire("6byfI");

var $bVF0W = parcelRequire("bVF0W");

var $747aac5a27a250df$var$hasDescriptors = (parcelRequire("bCUgO"))();

var $3rOKD = parcelRequire("3rOKD");

var $1ypTQ = parcelRequire("1ypTQ");
var $747aac5a27a250df$var$$floor = $6byfI('%Math.floor%');
/** @type {import('.')} */ module.exports = function setFunctionLength(fn, length) {
    if (typeof fn !== 'function') throw new $1ypTQ('`fn` is not a function');
    if (typeof length !== 'number' || length < 0 || length > 0xFFFFFFFF || $747aac5a27a250df$var$$floor(length) !== length) throw new $1ypTQ('`length` must be a positive 32-bit integer');
    var loose = arguments.length > 2 && !!arguments[2];
    var functionLengthIsConfigurable = true;
    var functionLengthIsWritable = true;
    if ('length' in fn && $3rOKD) {
        var desc = $3rOKD(fn, 'length');
        if (desc && !desc.configurable) functionLengthIsConfigurable = false;
        if (desc && !desc.writable) functionLengthIsWritable = false;
    }
    if (functionLengthIsConfigurable || functionLengthIsWritable || !loose) {
        if ($747aac5a27a250df$var$hasDescriptors) $bVF0W(/** @type {Parameters<define>[0]} */ fn, 'length', length, true, true);
        else $bVF0W(/** @type {Parameters<define>[0]} */ fn, 'length', length);
    }
    return fn;
};

});
parcelRegister("bVF0W", function(module, exports) {
'use strict';

var $2ET9L = parcelRequire("2ET9L");

var $fdKGB = parcelRequire("fdKGB");

var $1ypTQ = parcelRequire("1ypTQ");

var $3rOKD = parcelRequire("3rOKD");
/** @type {import('.')} */ module.exports = function defineDataProperty(obj, property, value) {
    if (!obj || typeof obj !== 'object' && typeof obj !== 'function') throw new $1ypTQ('`obj` must be an object or a function`');
    if (typeof property !== 'string' && typeof property !== 'symbol') throw new $1ypTQ('`property` must be a string or a symbol`');
    if (arguments.length > 3 && typeof arguments[3] !== 'boolean' && arguments[3] !== null) throw new $1ypTQ('`nonEnumerable`, if provided, must be a boolean or null');
    if (arguments.length > 4 && typeof arguments[4] !== 'boolean' && arguments[4] !== null) throw new $1ypTQ('`nonWritable`, if provided, must be a boolean or null');
    if (arguments.length > 5 && typeof arguments[5] !== 'boolean' && arguments[5] !== null) throw new $1ypTQ('`nonConfigurable`, if provided, must be a boolean or null');
    if (arguments.length > 6 && typeof arguments[6] !== 'boolean') throw new $1ypTQ('`loose`, if provided, must be a boolean');
    var nonEnumerable = arguments.length > 3 ? arguments[3] : null;
    var nonWritable = arguments.length > 4 ? arguments[4] : null;
    var nonConfigurable = arguments.length > 5 ? arguments[5] : null;
    var loose = arguments.length > 6 ? arguments[6] : false;
    /* @type {false | TypedPropertyDescriptor<unknown>} */ var desc = !!$3rOKD && $3rOKD(obj, property);
    if ($2ET9L) $2ET9L(obj, property, {
        configurable: nonConfigurable === null && desc ? desc.configurable : !nonConfigurable,
        enumerable: nonEnumerable === null && desc ? desc.enumerable : !nonEnumerable,
        value: value,
        writable: nonWritable === null && desc ? desc.writable : !nonWritable
    });
    else if (loose || !nonEnumerable && !nonWritable && !nonConfigurable) // must fall back to [[Set]], and was not explicitly asked to make non-enumerable, non-writable, or non-configurable
    obj[property] = value; // eslint-disable-line no-param-reassign
    else throw new $fdKGB('This environment does not support defining a property as non-configurable, non-writable, or non-enumerable.');
};

});

parcelRegister("bCUgO", function(module, exports) {
'use strict';

var $2ET9L = parcelRequire("2ET9L");
var $876ee46bafd3b673$var$hasPropertyDescriptors = function hasPropertyDescriptors() {
    return !!$2ET9L;
};
$876ee46bafd3b673$var$hasPropertyDescriptors.hasArrayLengthDefineBug = function hasArrayLengthDefineBug() {
    // node v0.6 has a bug where array lengths can be Set but not Defined
    if (!$2ET9L) return null;
    try {
        return $2ET9L([], 'length', {
            value: 1
        }).length !== 1;
    } catch (e) {
        // In Firefox 4-22, defining length on an array throws an exception.
        return true;
    }
};
module.exports = $876ee46bafd3b673$var$hasPropertyDescriptors;

});


parcelRegister("i1vAC", function(module, exports) {
'use strict';

var $3z7dZ = parcelRequire("3z7dZ");

var $jzHe4 = parcelRequire("jzHe4");

var $6uqDO = parcelRequire("6uqDO");
/** @type {import('./applyBind')} */ module.exports = function applyBind() {
    return $6uqDO($3z7dZ, $jzHe4, arguments);
};

});



parcelRegister("ife9F", function(module, exports) {
'use strict';

var $hPWai = parcelRequire("hPWai");
/** @type {import('.')} */ module.exports = function isTypedArray(value) {
    return !!$hPWai(value);
};

});


parcelRegister("3NXV9", function(module, exports) {
module.exports = function isBuffer(arg) {
    return arg && typeof arg === 'object' && typeof arg.copy === 'function' && typeof arg.fill === 'function' && typeof arg.readUInt8 === 'function';
};

});

parcelRegister("izDV4", function(module, exports) {
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


parcelRegister("2Npzr", function(module, exports) {
// shim for using process in browser
var $2093fe2f8d2d1571$var$process = module.exports = {};
// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.
var $2093fe2f8d2d1571$var$cachedSetTimeout;
var $2093fe2f8d2d1571$var$cachedClearTimeout;
function $2093fe2f8d2d1571$var$defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function $2093fe2f8d2d1571$var$defaultClearTimeout() {
    throw new Error('clearTimeout has not been defined');
}
(function() {
    try {
        if (typeof setTimeout === 'function') $2093fe2f8d2d1571$var$cachedSetTimeout = setTimeout;
        else $2093fe2f8d2d1571$var$cachedSetTimeout = $2093fe2f8d2d1571$var$defaultSetTimout;
    } catch (e) {
        $2093fe2f8d2d1571$var$cachedSetTimeout = $2093fe2f8d2d1571$var$defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') $2093fe2f8d2d1571$var$cachedClearTimeout = clearTimeout;
        else $2093fe2f8d2d1571$var$cachedClearTimeout = $2093fe2f8d2d1571$var$defaultClearTimeout;
    } catch (e) {
        $2093fe2f8d2d1571$var$cachedClearTimeout = $2093fe2f8d2d1571$var$defaultClearTimeout;
    }
})();
function $2093fe2f8d2d1571$var$runTimeout(fun) {
    if ($2093fe2f8d2d1571$var$cachedSetTimeout === setTimeout) //normal enviroments in sane situations
    return setTimeout(fun, 0);
    // if setTimeout wasn't available but was latter defined
    if (($2093fe2f8d2d1571$var$cachedSetTimeout === $2093fe2f8d2d1571$var$defaultSetTimout || !$2093fe2f8d2d1571$var$cachedSetTimeout) && setTimeout) {
        $2093fe2f8d2d1571$var$cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return $2093fe2f8d2d1571$var$cachedSetTimeout(fun, 0);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return $2093fe2f8d2d1571$var$cachedSetTimeout.call(null, fun, 0);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return $2093fe2f8d2d1571$var$cachedSetTimeout.call(this, fun, 0);
        }
    }
}
function $2093fe2f8d2d1571$var$runClearTimeout(marker) {
    if ($2093fe2f8d2d1571$var$cachedClearTimeout === clearTimeout) //normal enviroments in sane situations
    return clearTimeout(marker);
    // if clearTimeout wasn't available but was latter defined
    if (($2093fe2f8d2d1571$var$cachedClearTimeout === $2093fe2f8d2d1571$var$defaultClearTimeout || !$2093fe2f8d2d1571$var$cachedClearTimeout) && clearTimeout) {
        $2093fe2f8d2d1571$var$cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return $2093fe2f8d2d1571$var$cachedClearTimeout(marker);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return $2093fe2f8d2d1571$var$cachedClearTimeout.call(null, marker);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return $2093fe2f8d2d1571$var$cachedClearTimeout.call(this, marker);
        }
    }
}
var $2093fe2f8d2d1571$var$queue = [];
var $2093fe2f8d2d1571$var$draining = false;
var $2093fe2f8d2d1571$var$currentQueue;
var $2093fe2f8d2d1571$var$queueIndex = -1;
function $2093fe2f8d2d1571$var$cleanUpNextTick() {
    if (!$2093fe2f8d2d1571$var$draining || !$2093fe2f8d2d1571$var$currentQueue) return;
    $2093fe2f8d2d1571$var$draining = false;
    if ($2093fe2f8d2d1571$var$currentQueue.length) $2093fe2f8d2d1571$var$queue = $2093fe2f8d2d1571$var$currentQueue.concat($2093fe2f8d2d1571$var$queue);
    else $2093fe2f8d2d1571$var$queueIndex = -1;
    if ($2093fe2f8d2d1571$var$queue.length) $2093fe2f8d2d1571$var$drainQueue();
}
function $2093fe2f8d2d1571$var$drainQueue() {
    if ($2093fe2f8d2d1571$var$draining) return;
    var timeout = $2093fe2f8d2d1571$var$runTimeout($2093fe2f8d2d1571$var$cleanUpNextTick);
    $2093fe2f8d2d1571$var$draining = true;
    var len = $2093fe2f8d2d1571$var$queue.length;
    while(len){
        $2093fe2f8d2d1571$var$currentQueue = $2093fe2f8d2d1571$var$queue;
        $2093fe2f8d2d1571$var$queue = [];
        while(++$2093fe2f8d2d1571$var$queueIndex < len)if ($2093fe2f8d2d1571$var$currentQueue) $2093fe2f8d2d1571$var$currentQueue[$2093fe2f8d2d1571$var$queueIndex].run();
        $2093fe2f8d2d1571$var$queueIndex = -1;
        len = $2093fe2f8d2d1571$var$queue.length;
    }
    $2093fe2f8d2d1571$var$currentQueue = null;
    $2093fe2f8d2d1571$var$draining = false;
    $2093fe2f8d2d1571$var$runClearTimeout(timeout);
}
$2093fe2f8d2d1571$var$process.nextTick = function(fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) for(var i = 1; i < arguments.length; i++)args[i - 1] = arguments[i];
    $2093fe2f8d2d1571$var$queue.push(new $2093fe2f8d2d1571$var$Item(fun, args));
    if ($2093fe2f8d2d1571$var$queue.length === 1 && !$2093fe2f8d2d1571$var$draining) $2093fe2f8d2d1571$var$runTimeout($2093fe2f8d2d1571$var$drainQueue);
};
// v8 likes predictible objects
function $2093fe2f8d2d1571$var$Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
$2093fe2f8d2d1571$var$Item.prototype.run = function() {
    this.fun.apply(null, this.array);
};
$2093fe2f8d2d1571$var$process.title = 'browser';
$2093fe2f8d2d1571$var$process.browser = true;
$2093fe2f8d2d1571$var$process.env = {};
$2093fe2f8d2d1571$var$process.argv = [];
$2093fe2f8d2d1571$var$process.version = ''; // empty string to avoid regexp issues
$2093fe2f8d2d1571$var$process.versions = {};
function $2093fe2f8d2d1571$var$noop() {}
$2093fe2f8d2d1571$var$process.on = $2093fe2f8d2d1571$var$noop;
$2093fe2f8d2d1571$var$process.addListener = $2093fe2f8d2d1571$var$noop;
$2093fe2f8d2d1571$var$process.once = $2093fe2f8d2d1571$var$noop;
$2093fe2f8d2d1571$var$process.off = $2093fe2f8d2d1571$var$noop;
$2093fe2f8d2d1571$var$process.removeListener = $2093fe2f8d2d1571$var$noop;
$2093fe2f8d2d1571$var$process.removeAllListeners = $2093fe2f8d2d1571$var$noop;
$2093fe2f8d2d1571$var$process.emit = $2093fe2f8d2d1571$var$noop;
$2093fe2f8d2d1571$var$process.prependListener = $2093fe2f8d2d1571$var$noop;
$2093fe2f8d2d1571$var$process.prependOnceListener = $2093fe2f8d2d1571$var$noop;
$2093fe2f8d2d1571$var$process.listeners = function(name) {
    return [];
};
$2093fe2f8d2d1571$var$process.binding = function(name) {
    throw new Error('process.binding is not supported');
};
$2093fe2f8d2d1571$var$process.cwd = function() {
    return '/';
};
$2093fe2f8d2d1571$var$process.chdir = function(dir) {
    throw new Error('process.chdir is not supported');
};
$2093fe2f8d2d1571$var$process.umask = function() {
    return 0;
};

});


//# sourceMappingURL=util.4d9121cc.js.map
