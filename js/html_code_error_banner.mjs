import { html_code_element } from "./html_code_element.mjs";
export function html_code_error_banner() {
  "A page cannot be asked what went wrong when the page is a phone. On any /dev/ path only, an uncaught error and a rejected promise nobody caught are painted into a band along the bottom of the screen, so a boot that dies shows its message where the person testing can read it instead of leaving a white page and nothing else. Deliberately /dev/ only, the same test the service worker snippet makes: a person playing the real site is not helped by a stack trace, and showing them one would be a change to what the site is rather than a way of finding out what it does.";
  "It is written as page text rather than as one of this repo's functions because it has to be standing BEFORE the app's own script runs - a handler installed by code that never got to run catches nothing, which is the exact case it exists for.";
  let attributes_none = {};
  let style =
    "position:fixed;left:0;right:0;bottom:0;max-height:60vh;overflow:auto;margin:0;padding:1rem;z-index:2147483647;background:#ffdddd;color:#900;font:0.9rem monospace;white-space:pre-wrap;border-top:0.25rem solid #900";
  let code =
    "if (location.pathname.indexOf('/dev/') !== -1) { " +
    "var dev_error_show = function (kind, message) { " +
    "var box = document.getElementById('dev-error-banner'); " +
    "if (!box) { box = document.createElement('pre'); box.id = 'dev-error-banner'; " +
    "box.setAttribute('style', '" +
    style +
    "'); document.body.appendChild(box); } " +
    "box.textContent = box.textContent + kind + ': ' + message + '\\n'; }; " +
    "window.addEventListener('error', function (e) { " +
    "dev_error_show('error', (e.message || e.error) + ' @ ' + e.filename + ':' + e.lineno); }); " +
    "window.addEventListener('unhandledrejection', function (e) { " +
    "var reason = e.reason; " +
    "dev_error_show('unhandled', (reason && reason.stack) || reason); }); }";
  let r = html_code_element("script", attributes_none, code);
  return r;
}
