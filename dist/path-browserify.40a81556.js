
      var $parcel$global = globalThis;
    var parcelRequire = $parcel$global["parcelRequire94c2"];
var parcelRegister = parcelRequire.register;
parcelRegister("hZVmZ", function(module, exports) {
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

var $hPtJY = parcelRequire("hPtJY");
'use strict';
function $d1a4a2a3193fa800$var$assertPath(path) {
    if (typeof path !== 'string') throw new TypeError('Path must be a string. Received ' + JSON.stringify(path));
}
// Resolves . and .. elements in a path with directory names
function $d1a4a2a3193fa800$var$normalizeStringPosix(path, allowAboveRoot) {
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
function $d1a4a2a3193fa800$var$_format(sep, pathObject) {
    var dir = pathObject.dir || pathObject.root;
    var base = pathObject.base || (pathObject.name || '') + (pathObject.ext || '');
    if (!dir) return base;
    if (dir === pathObject.root) return dir + base;
    return dir + sep + base;
}
var $d1a4a2a3193fa800$var$posix = {
    // path.resolve([from ...], to)
    resolve: function resolve() {
        var resolvedPath = '';
        var resolvedAbsolute = false;
        var cwd;
        for(var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--){
            var path;
            if (i >= 0) path = arguments[i];
            else {
                if (cwd === undefined) cwd = $hPtJY.cwd();
                path = cwd;
            }
            $d1a4a2a3193fa800$var$assertPath(path);
            // Skip empty entries
            if (path.length === 0) continue;
            resolvedPath = path + '/' + resolvedPath;
            resolvedAbsolute = path.charCodeAt(0) === 47 /*/*/ ;
        }
        // At this point the path should be resolved to a full absolute path, but
        // handle relative paths to be safe (might happen when process.cwd() fails)
        // Normalize the path
        resolvedPath = $d1a4a2a3193fa800$var$normalizeStringPosix(resolvedPath, !resolvedAbsolute);
        if (resolvedAbsolute) {
            if (resolvedPath.length > 0) return '/' + resolvedPath;
            else return '/';
        } else if (resolvedPath.length > 0) return resolvedPath;
        else return '.';
    },
    normalize: function normalize(path) {
        $d1a4a2a3193fa800$var$assertPath(path);
        if (path.length === 0) return '.';
        var isAbsolute = path.charCodeAt(0) === 47 /*/*/ ;
        var trailingSeparator = path.charCodeAt(path.length - 1) === 47 /*/*/ ;
        // Normalize the path
        path = $d1a4a2a3193fa800$var$normalizeStringPosix(path, !isAbsolute);
        if (path.length === 0 && !isAbsolute) path = '.';
        if (path.length > 0 && trailingSeparator) path += '/';
        if (isAbsolute) return '/' + path;
        return path;
    },
    isAbsolute: function isAbsolute(path) {
        $d1a4a2a3193fa800$var$assertPath(path);
        return path.length > 0 && path.charCodeAt(0) === 47 /*/*/ ;
    },
    join: function join() {
        if (arguments.length === 0) return '.';
        var joined;
        for(var i = 0; i < arguments.length; ++i){
            var arg = arguments[i];
            $d1a4a2a3193fa800$var$assertPath(arg);
            if (arg.length > 0) {
                if (joined === undefined) joined = arg;
                else joined += '/' + arg;
            }
        }
        if (joined === undefined) return '.';
        return $d1a4a2a3193fa800$var$posix.normalize(joined);
    },
    relative: function relative(from, to) {
        $d1a4a2a3193fa800$var$assertPath(from);
        $d1a4a2a3193fa800$var$assertPath(to);
        if (from === to) return '';
        from = $d1a4a2a3193fa800$var$posix.resolve(from);
        to = $d1a4a2a3193fa800$var$posix.resolve(to);
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
        $d1a4a2a3193fa800$var$assertPath(path);
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
        $d1a4a2a3193fa800$var$assertPath(path);
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
        $d1a4a2a3193fa800$var$assertPath(path);
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
        return $d1a4a2a3193fa800$var$_format('/', pathObject);
    },
    parse: function parse(path) {
        $d1a4a2a3193fa800$var$assertPath(path);
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
$d1a4a2a3193fa800$var$posix.posix = $d1a4a2a3193fa800$var$posix;
module.exports = $d1a4a2a3193fa800$var$posix;

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


//# sourceMappingURL=path-browserify.40a81556.js.map
