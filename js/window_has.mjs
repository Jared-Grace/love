export function window_has(name) {
  "Whether the page's window carries something under this name - how a page tells it is running inside an app that handed it an object of its own (an Android WebView's addJavascriptInterface).";
  let r = name in window;
  return r;
}
