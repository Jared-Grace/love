
      var $parcel$global = globalThis;
    var parcelRequire = $parcel$global["parcelRequire94c2"];
var parcelRegister = parcelRequire.register;
parcelRegister("iEXKM", function(module, exports) {
// 'path' module extracted from Node.js v8.11.1 (only the posix part)
// transplited with Babel
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
'use strict';
function $d95a503d51d11dd2$var$assertPath(path) {
    if (typeof path !== 'string') throw new TypeError('Path must be a string. Received ' + JSON.stringify(path));
}
// Resolves . and .. elements in a path with directory names
function $d95a503d51d11dd2$var$normalizeStringPosix(path, allowAboveRoot) {
    var res = '';
    var lastSegmentLength = 0;
    var lastSlash = -1;
    var dots = 0;
    var code;
    for(var i = 0; i <= path.length; ++i){
        if (i < path.length) code = path.charCodeAt(i);
        else if (code === 47 /*/*/ ) break;
        else code = 47 /*/*/ ;
        if (code === 47 /*/*/ ) {
            if (lastSlash === i - 1 || dots === 1) ;
            else if (lastSlash !== i - 1 && dots === 2) {
                if (res.length < 2 || lastSegmentLength !== 2 || res.charCodeAt(res.length - 1) !== 46 /*.*/  || res.charCodeAt(res.length - 2) !== 46 /*.*/ ) {
                    if (res.length > 2) {
                        var lastSlashIndex = res.lastIndexOf('/');
                        if (lastSlashIndex !== res.length - 1) {
                            if (lastSlashIndex === -1) {
                                res = '';
                                lastSegmentLength = 0;
                            } else {
                                res = res.slice(0, lastSlashIndex);
                                lastSegmentLength = res.length - 1 - res.lastIndexOf('/');
                            }
                            lastSlash = i;
                            dots = 0;
                            continue;
                        }
                    } else if (res.length === 2 || res.length === 1) {
                        res = '';
                        lastSegmentLength = 0;
                        lastSlash = i;
                        dots = 0;
                        continue;
                    }
                }
                if (allowAboveRoot) {
                    if (res.length > 0) res += '/..';
                    else res = '..';
                    lastSegmentLength = 2;
                }
            } else {
                if (res.length > 0) res += '/' + path.slice(lastSlash + 1, i);
                else res = path.slice(lastSlash + 1, i);
                lastSegmentLength = i - lastSlash - 1;
            }
            lastSlash = i;
            dots = 0;
        } else if (code === 46 /*.*/  && dots !== -1) ++dots;
        else dots = -1;
    }
    return res;
}
function $d95a503d51d11dd2$var$_format(sep, pathObject) {
    var dir = pathObject.dir || pathObject.root;
    var base = pathObject.base || (pathObject.name || '') + (pathObject.ext || '');
    if (!dir) return base;
    if (dir === pathObject.root) return dir + base;
    return dir + sep + base;
}
var $d95a503d51d11dd2$var$posix = {
    // path.resolve([from ...], to)
    resolve: function resolve() {
        var resolvedPath = '';
        var resolvedAbsolute = false;
        var cwd;
        for(var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--){
            var path;
            if (i >= 0) path = arguments[i];
            else {
                if (cwd === undefined) cwd = $4DZrq.cwd();
                path = cwd;
            }
            $d95a503d51d11dd2$var$assertPath(path);
            // Skip empty entries
            if (path.length === 0) continue;
            resolvedPath = path + '/' + resolvedPath;
            resolvedAbsolute = path.charCodeAt(0) === 47 /*/*/ ;
        }
        // At this point the path should be resolved to a full absolute path, but
        // handle relative paths to be safe (might happen when process.cwd() fails)
        // Normalize the path
        resolvedPath = $d95a503d51d11dd2$var$normalizeStringPosix(resolvedPath, !resolvedAbsolute);
        if (resolvedAbsolute) {
            if (resolvedPath.length > 0) return '/' + resolvedPath;
            else return '/';
        } else if (resolvedPath.length > 0) return resolvedPath;
        else return '.';
    },
    normalize: function normalize(path) {
        $d95a503d51d11dd2$var$assertPath(path);
        if (path.length === 0) return '.';
        var isAbsolute = path.charCodeAt(0) === 47 /*/*/ ;
        var trailingSeparator = path.charCodeAt(path.length - 1) === 47 /*/*/ ;
        // Normalize the path
        path = $d95a503d51d11dd2$var$normalizeStringPosix(path, !isAbsolute);
        if (path.length === 0 && !isAbsolute) path = '.';
        if (path.length > 0 && trailingSeparator) path += '/';
        if (isAbsolute) return '/' + path;
        return path;
    },
    isAbsolute: function isAbsolute(path) {
        $d95a503d51d11dd2$var$assertPath(path);
        return path.length > 0 && path.charCodeAt(0) === 47 /*/*/ ;
    },
    join: function join() {
        if (arguments.length === 0) return '.';
        var joined;
        for(var i = 0; i < arguments.length; ++i){
            var arg = arguments[i];
            $d95a503d51d11dd2$var$assertPath(arg);
            if (arg.length > 0) {
                if (joined === undefined) joined = arg;
                else joined += '/' + arg;
            }
        }
        if (joined === undefined) return '.';
        return $d95a503d51d11dd2$var$posix.normalize(joined);
    },
    relative: function relative(from, to) {
        $d95a503d51d11dd2$var$assertPath(from);
        $d95a503d51d11dd2$var$assertPath(to);
        if (from === to) return '';
        from = $d95a503d51d11dd2$var$posix.resolve(from);
        to = $d95a503d51d11dd2$var$posix.resolve(to);
        if (from === to) return '';
        // Trim any leading backslashes
        var fromStart = 1;
        for(; fromStart < from.length; ++fromStart){
            if (from.charCodeAt(fromStart) !== 47 /*/*/ ) break;
        }
        var fromEnd = from.length;
        var fromLen = fromEnd - fromStart;
        // Trim any leading backslashes
        var toStart = 1;
        for(; toStart < to.length; ++toStart){
            if (to.charCodeAt(toStart) !== 47 /*/*/ ) break;
        }
        var toEnd = to.length;
        var toLen = toEnd - toStart;
        // Compare paths to find the longest common path from root
        var length = fromLen < toLen ? fromLen : toLen;
        var lastCommonSep = -1;
        var i = 0;
        for(; i <= length; ++i){
            if (i === length) {
                if (toLen > length) {
                    if (to.charCodeAt(toStart + i) === 47 /*/*/ ) // We get here if `from` is the exact base path for `to`.
                    // For example: from='/foo/bar'; to='/foo/bar/baz'
                    return to.slice(toStart + i + 1);
                    else if (i === 0) // We get here if `from` is the root
                    // For example: from='/'; to='/foo'
                    return to.slice(toStart + i);
                } else if (fromLen > length) {
                    if (from.charCodeAt(fromStart + i) === 47 /*/*/ ) // We get here if `to` is the exact base path for `from`.
                    // For example: from='/foo/bar/baz'; to='/foo/bar'
                    lastCommonSep = i;
                    else if (i === 0) // We get here if `to` is the root.
                    // For example: from='/foo'; to='/'
                    lastCommonSep = 0;
                }
                break;
            }
            var fromCode = from.charCodeAt(fromStart + i);
            var toCode = to.charCodeAt(toStart + i);
            if (fromCode !== toCode) break;
            else if (fromCode === 47 /*/*/ ) lastCommonSep = i;
        }
        var out = '';
        // Generate the relative path based on the path difference between `to`
        // and `from`
        for(i = fromStart + lastCommonSep + 1; i <= fromEnd; ++i)if (i === fromEnd || from.charCodeAt(i) === 47 /*/*/ ) {
            if (out.length === 0) out += '..';
            else out += '/..';
        }
        // Lastly, append the rest of the destination (`to`) path that comes after
        // the common path parts
        if (out.length > 0) return out + to.slice(toStart + lastCommonSep);
        else {
            toStart += lastCommonSep;
            if (to.charCodeAt(toStart) === 47 /*/*/ ) ++toStart;
            return to.slice(toStart);
        }
    },
    _makeLong: function _makeLong(path) {
        return path;
    },
    dirname: function dirname(path) {
        $d95a503d51d11dd2$var$assertPath(path);
        if (path.length === 0) return '.';
        var code = path.charCodeAt(0);
        var hasRoot = code === 47 /*/*/ ;
        var end = -1;
        var matchedSlash = true;
        for(var i = path.length - 1; i >= 1; --i){
            code = path.charCodeAt(i);
            if (code === 47 /*/*/ ) {
                if (!matchedSlash) {
                    end = i;
                    break;
                }
            } else // We saw the first non-path separator
            matchedSlash = false;
        }
        if (end === -1) return hasRoot ? '/' : '.';
        if (hasRoot && end === 1) return '//';
        return path.slice(0, end);
    },
    basename: function basename(path, ext) {
        if (ext !== undefined && typeof ext !== 'string') throw new TypeError('"ext" argument must be a string');
        $d95a503d51d11dd2$var$assertPath(path);
        var start = 0;
        var end = -1;
        var matchedSlash = true;
        var i;
        if (ext !== undefined && ext.length > 0 && ext.length <= path.length) {
            if (ext.length === path.length && ext === path) return '';
            var extIdx = ext.length - 1;
            var firstNonSlashEnd = -1;
            for(i = path.length - 1; i >= 0; --i){
                var code = path.charCodeAt(i);
                if (code === 47 /*/*/ ) // If we reached a path separator that was not part of a set of path
                // separators at the end of the string, stop now
                {
                    if (!matchedSlash) {
                        start = i + 1;
                        break;
                    }
                } else {
                    if (firstNonSlashEnd === -1) {
                        // We saw the first non-path separator, remember this index in case
                        // we need it if the extension ends up not matching
                        matchedSlash = false;
                        firstNonSlashEnd = i + 1;
                    }
                    if (extIdx >= 0) {
                        // Try to match the explicit extension
                        if (code === ext.charCodeAt(extIdx)) {
                            if (--extIdx === -1) // We matched the extension, so mark this as the end of our path
                            // component
                            end = i;
                        } else {
                            // Extension does not match, so our result is the entire path
                            // component
                            extIdx = -1;
                            end = firstNonSlashEnd;
                        }
                    }
                }
            }
            if (start === end) end = firstNonSlashEnd;
            else if (end === -1) end = path.length;
            return path.slice(start, end);
        } else {
            for(i = path.length - 1; i >= 0; --i){
                if (path.charCodeAt(i) === 47 /*/*/ ) // If we reached a path separator that was not part of a set of path
                // separators at the end of the string, stop now
                {
                    if (!matchedSlash) {
                        start = i + 1;
                        break;
                    }
                } else if (end === -1) {
                    // We saw the first non-path separator, mark this as the end of our
                    // path component
                    matchedSlash = false;
                    end = i + 1;
                }
            }
            if (end === -1) return '';
            return path.slice(start, end);
        }
    },
    extname: function extname(path) {
        $d95a503d51d11dd2$var$assertPath(path);
        var startDot = -1;
        var startPart = 0;
        var end = -1;
        var matchedSlash = true;
        // Track the state of characters (if any) we see before our first dot and
        // after any path separator we find
        var preDotState = 0;
        for(var i = path.length - 1; i >= 0; --i){
            var code = path.charCodeAt(i);
            if (code === 47 /*/*/ ) {
                // If we reached a path separator that was not part of a set of path
                // separators at the end of the string, stop now
                if (!matchedSlash) {
                    startPart = i + 1;
                    break;
                }
                continue;
            }
            if (end === -1) {
                // We saw the first non-path separator, mark this as the end of our
                // extension
                matchedSlash = false;
                end = i + 1;
            }
            if (code === 46 /*.*/ ) {
                // If this is our first dot, mark it as the start of our extension
                if (startDot === -1) startDot = i;
                else if (preDotState !== 1) preDotState = 1;
            } else if (startDot !== -1) // We saw a non-dot and non-path separator before our dot, so we should
            // have a good chance at having a non-empty extension
            preDotState = -1;
        }
        if (startDot === -1 || end === -1 || // We saw a non-dot character immediately before the dot
        preDotState === 0 || // The (right-most) trimmed path component is exactly '..'
        preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) return '';
        return path.slice(startDot, end);
    },
    format: function format(pathObject) {
        if (pathObject === null || typeof pathObject !== 'object') throw new TypeError('The "pathObject" argument must be of type Object. Received type ' + typeof pathObject);
        return $d95a503d51d11dd2$var$_format('/', pathObject);
    },
    parse: function parse(path) {
        $d95a503d51d11dd2$var$assertPath(path);
        var ret = {
            root: '',
            dir: '',
            base: '',
            ext: '',
            name: ''
        };
        if (path.length === 0) return ret;
        var code = path.charCodeAt(0);
        var isAbsolute = code === 47 /*/*/ ;
        var start;
        if (isAbsolute) {
            ret.root = '/';
            start = 1;
        } else start = 0;
        var startDot = -1;
        var startPart = 0;
        var end = -1;
        var matchedSlash = true;
        var i = path.length - 1;
        // Track the state of characters (if any) we see before our first dot and
        // after any path separator we find
        var preDotState = 0;
        // Get non-dir info
        for(; i >= start; --i){
            code = path.charCodeAt(i);
            if (code === 47 /*/*/ ) {
                // If we reached a path separator that was not part of a set of path
                // separators at the end of the string, stop now
                if (!matchedSlash) {
                    startPart = i + 1;
                    break;
                }
                continue;
            }
            if (end === -1) {
                // We saw the first non-path separator, mark this as the end of our
                // extension
                matchedSlash = false;
                end = i + 1;
            }
            if (code === 46 /*.*/ ) {
                // If this is our first dot, mark it as the start of our extension
                if (startDot === -1) startDot = i;
                else if (preDotState !== 1) preDotState = 1;
            } else if (startDot !== -1) // We saw a non-dot and non-path separator before our dot, so we should
            // have a good chance at having a non-empty extension
            preDotState = -1;
        }
        if (startDot === -1 || end === -1 || // We saw a non-dot character immediately before the dot
        preDotState === 0 || // The (right-most) trimmed path component is exactly '..'
        preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {
            if (end !== -1) {
                if (startPart === 0 && isAbsolute) ret.base = ret.name = path.slice(1, end);
                else ret.base = ret.name = path.slice(startPart, end);
            }
        } else {
            if (startPart === 0 && isAbsolute) {
                ret.name = path.slice(1, startDot);
                ret.base = path.slice(1, end);
            } else {
                ret.name = path.slice(startPart, startDot);
                ret.base = path.slice(startPart, end);
            }
            ret.ext = path.slice(startDot, end);
        }
        if (startPart > 0) ret.dir = path.slice(0, startPart - 1);
        else if (isAbsolute) ret.dir = '/';
        return ret;
    },
    sep: '/',
    delimiter: ':',
    win32: null,
    posix: null
};
$d95a503d51d11dd2$var$posix.posix = $d95a503d51d11dd2$var$posix;
module.exports = $d95a503d51d11dd2$var$posix;

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


//# sourceMappingURL=path-browserify.482ef144.js.map
