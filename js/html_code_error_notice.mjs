import { html_error_notice_style } from "./html_error_notice_style.mjs";
import { html_code_style_attribute } from "./html_code_style_attribute.mjs";
import { html_error_notice_message_text } from "./html_error_notice_message_text.mjs";
import { html_error_notice_button_style } from "./html_error_notice_button_style.mjs";
import { html_error_notice_button_text } from "./html_error_notice_button_text.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { html_loading_splash_id } from "./html_loading_splash_id.mjs";
import { html_code_element } from "./html_code_element.mjs";
export function html_code_error_notice() {
  "A boot that dies leaves a person looking at nothing. The white screen is the worst answer a page can give, because it says neither what happened nor what to do, and it looks exactly like a page that is still coming. This puts a plain, kind notice and a Try again button in front of every app on EVERY path, so a start-up that throws is something a person can see and answer instead of something they have to guess at.";
  "It is the production sibling of the dev banner beside it, and the two are different on purpose: the banner shows the error text, the file and the line, which is what the person FIXING it needs and what the person WAITING for it cannot use. So the banner stays dev-only and this one carries no error text at all.";
  "Like the banner, it is written as page text rather than as one of this repo's functions because it has to be standing BEFORE the app's own script runs - a handler installed by code that never got to run catches nothing, which is the exact case it exists for. Its markup is baked in hidden for the same reason: building an element inside a handler is more that can go wrong at the one moment nothing else is working.";
  let attributes_none = {};
  let id = "app-error";
  let style = html_error_notice_style();
  let style_attribute = html_code_style_attribute(style);
  let message = html_error_notice_message_text();
  let button_style = html_error_notice_button_style();
  let button_attribute = html_code_style_attribute(button_style);
  let button_text = html_error_notice_button_text();
  let markup = text_combine_multiple([
    '<div id="',
    id,
    '"',
    style_attribute,
    "><p>",
    message,
    "</p><button",
    button_attribute,
    ' onclick="location.reload()">',
    button_text,
    "</button></div>",
  ]);
  let splash_id = html_loading_splash_id();
  ("the notice covers the splash and then takes it away, so the spinner cannot keep turning behind the words telling a person that the turning has stopped.");
  ("it is moved onto the DOCUMENT element the moment it is found, and held onto, because an app boots by clearing the body - which swept the notice away with everything else, and left the one thing meant to survive a failed boot as the one thing that could not. the loading overlay lives up there for the same reason.");
  let code = text_combine_multiple([
    "var app_error_box = document.getElementById('",
    id,
    "'); ",
    "if (app_error_box) { document.documentElement.appendChild(app_error_box); } ",
    "var app_error_show = function () { ",
    "if (!app_error_box) { return; } ",
    "app_error_box.style.display = 'flex'; ",
    "var splash = document.getElementById('",
    splash_id,
    "'); ",
    "if (splash) { splash.remove(); } }; ",
    "window.addEventListener('error', app_error_show); ",
    "window.addEventListener('unhandledrejection', app_error_show);",
  ]);
  let script = html_code_element("script", attributes_none, code);
  let r = text_combine_multiple([markup, script]);
  return r;
}
