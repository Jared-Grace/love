import { html_error_banner_copy_button_style } from "./html_error_banner_copy_button_style.mjs";
import { html_code_style_text } from "./html_code_style_text.mjs";
import { html_button_copy_text } from "./html_button_copy_text.mjs";
import { html_error_banner_copied_text } from "./html_error_banner_copied_text.mjs";
import { html_error_banner_copy_manual_text } from "./html_error_banner_copy_manual_text.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { html_code_element } from "./html_code_element.mjs";
export function html_code_error_banner() {
  "A page cannot be asked what went wrong when the page is a phone. On any /dev/ path only, an uncaught error and a rejected promise nobody caught are painted into a band along the bottom of the screen, so a boot that dies shows its message where the person testing can read it instead of leaving a white page and nothing else. Deliberately /dev/ only, the same test the service worker snippet makes: a person playing the real site is not helped by a stack trace, and showing them one would be a change to what the site is rather than a way of finding out what it does.";
  "It is written as page text rather than as one of this repo's functions because it has to be standing BEFORE the app's own script runs - a handler installed by code that never got to run catches nothing, which is the exact case it exists for.";
  "A message nobody can carry away is half an answer. Reading a stack trace off a phone and typing it back out by hand is the slowest part of testing there, so the band carries a copy control - wearing the same words as every other copy control in these apps, asked for rather than written out here.";
  "The clipboard is asked for in two ways because on a phone the modern way is not there at all: these pages are reached over plain http, where a browser hands out no clipboard, so the older way is the ordinary path here rather than a rare one. If both are refused the message is selected instead, which leaves a person one press and hold from the same result.";
  let attributes_none = {};
  let style =
    "position:fixed;left:0;right:0;bottom:0;max-height:60vh;overflow:auto;margin:0;padding:1rem;z-index:2147483647;background:#ffdddd;color:#900;font:0.9rem monospace;white-space:pre-wrap;border-top:0.25rem solid #900";
  let button_style = html_error_banner_copy_button_style();
  let button_style_text = html_code_style_text(button_style);
  let copy_text = html_button_copy_text();
  let copied_text = html_error_banner_copied_text();
  let manual_text = html_error_banner_copy_manual_text();
  let code = text_combine_multiple([
    "if (location.pathname.indexOf('/dev/') !== -1) { ",
    "var dev_error_words = null; var dev_error_button = null; ",
    "var dev_error_said = function (words) { dev_error_button.textContent = words; }; ",
    "var dev_error_select = function () { ",
    "var range = document.createRange(); range.selectNodeContents(dev_error_words); ",
    "var selection = window.getSelection(); selection.removeAllRanges(); selection.addRange(range); }; ",
    "var dev_error_copy_older = function () { ",
    "var area = document.createElement('textarea'); area.value = dev_error_words.textContent; ",
    "area.setAttribute('style', 'position:fixed;top:0;left:0;opacity:0'); ",
    "document.body.appendChild(area); area.select(); ",
    "var done = false; try { done = document.execCommand('copy'); } catch (e) { done = false; } ",
    "area.parentNode.removeChild(area); ",
    "if (done) { dev_error_said('",
    copied_text,
    "'); return; } ",
    "dev_error_select(); dev_error_said('",
    manual_text,
    "'); }; ",
    "var dev_error_copy = function () { ",
    "var said_copied = function () { dev_error_said('",
    copied_text,
    "'); }; ",
    "if (navigator.clipboard && navigator.clipboard.writeText) { ",
    "navigator.clipboard.writeText(dev_error_words.textContent).then(said_copied, dev_error_copy_older); return; } ",
    "dev_error_copy_older(); }; ",
    "var dev_error_start = function () { ",
    "var box = document.createElement('pre'); box.id = 'dev-error-banner'; ",
    "box.setAttribute('style', '",
    style,
    "'); ",
    "dev_error_button = document.createElement('button'); ",
    "dev_error_button.setAttribute('style', '",
    button_style_text,
    "'); ",
    "dev_error_button.onclick = dev_error_copy; ",
    "dev_error_words = document.createElement('span'); ",
    "box.appendChild(dev_error_button); box.appendChild(dev_error_words); ",
    "document.body.appendChild(box); }; ",
    "var dev_error_show = function (kind, message) { ",
    "if (!dev_error_words) { dev_error_start(); } ",
    "dev_error_words.textContent = dev_error_words.textContent + kind + ': ' + message + '\\n'; ",
    "dev_error_said('",
    copy_text,
    "'); }; ",
    "window.addEventListener('error', function (e) { ",
    "dev_error_show('error', (e.message || e.error) + ' @ ' + e.filename + ':' + e.lineno); }); ",
    "window.addEventListener('unhandledrejection', function (e) { ",
    "var reason = e.reason; ",
    "dev_error_show('unhandled', (reason && reason.stack) || reason); }); }",
  ]);
  let r = html_code_element("script", attributes_none, code);
  return r;
}
