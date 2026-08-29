import { arguments_assert } from "./arguments_assert.mjs";
import { html_error_notice_style } from "./html_error_notice_style.mjs";
import { html_code_style_attribute } from "./html_code_style_attribute.mjs";
import { html_error_notice_message_texts } from "./html_error_notice_message_texts.mjs";
import { app_shared_text_in_language_code } from "./app_shared_text_in_language_code.mjs";
import { html_error_notice_button_style } from "./html_error_notice_button_style.mjs";
import { html_error_notice_button_texts } from "./html_error_notice_button_texts.mjs";
import { text_rtl_is } from "./text_rtl_is.mjs";
import { text_empty } from "./text_empty.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { html_loading_splash_id } from "./html_loading_splash_id.mjs";
import { html_code_error_record_script } from "./html_code_error_record_script.mjs";
import { html_code_element } from "./html_code_element.mjs";
export function html_code_error_notice(language_code) {
  "$plain language_code";
  arguments_assert(arguments, 1);
  ("A boot that dies leaves a person looking at nothing. The white screen is the worst answer a page can give, because it says neither what happened nor what to do, and it looks exactly like a page that is still coming. This puts a plain, kind notice and a Try again button in front of every app on EVERY path, so a start-up that throws is something a person can see and answer instead of something they have to guess at.");
  ("It is the production sibling of the dev banner beside it, and the two are different on purpose: the banner shows the error text, the file and the line, which is what the person FIXING it needs and what the person WAITING for it cannot use. So the banner stays dev-only and this one carries no error text at all.");
  ("Like the banner, it is written as page text rather than as one of this repo's functions because it has to be standing BEFORE the app's own script runs - a handler installed by code that never got to run catches nothing, which is the exact case it exists for. Its markup is baked in hidden for the same reason: building an element inside a handler is more that can go wrong at the one moment nothing else is working.");
  ("The language is handed in rather than asked for, and that follows from the same thing. Every other saying in these apps asks what the reader in front of it reads, and gets an answer the app put there as it started; this one is written into the page while the page is being built, when there is no app and no reader and nothing to ask. So whoever is building the page says which language it is being built for, and the picking after that is the picking every other saying gets.");
  ("That is the whole reason it can speak anything but English. A notice that only comes out when the app never started is the one piece of writing that cannot wait for the app to say what language to use - so a reader who reads no English would have met the one screen in their app written in it, at the one moment nothing else was there to explain it.");
  ("Which way the box reads is asked of the words that came out of the picking, not of the language that was asked for. The two part company exactly when a saying has not been written into that language yet: the words come back in English, and a box turned round on the strength of the language asked for would have laid English out from the right.");
  let attributes_none = {};
  let id = "app-error";
  let style = html_error_notice_style();
  let style_attribute = html_code_style_attribute(style);
  let texts = html_error_notice_message_texts();
  let message = app_shared_text_in_language_code(texts, language_code);
  let button_style = html_error_notice_button_style();
  let button_attribute = html_code_style_attribute(button_style);
  let texts_button = html_error_notice_button_texts();
  let button_text = app_shared_text_in_language_code(
    texts_button,
    language_code,
  );
  ("said only when it is right to left, so a page in English is written exactly as it was written before there was anything to say - which is what lets a page already on disk still be read back and taken apart.");
  let rtl = text_rtl_is(message);
  let direction_attribute = text_empty();
  if (rtl) {
    direction_attribute = ' dir="rtl"';
  }
  let markup = text_combine_multiple([
    '<div id="',
    id,
    '"',
    style_attribute,
    direction_attribute,
    "><p>",
    message,
    "</p><button",
    button_attribute,
    ' onclick="location.reload()">',
    button_text,
    "</button><button",
    dismiss_attribute,
    " onclick=\"this.parentNode.style.display=(&quot;none&quot;)\">",
    dismiss_text,
    "</button></div>",
  ]);
  let splash_id = html_loading_splash_id();
  ("the notice covers the splash and then takes it away, so the spinner cannot keep turning behind the words telling a person that the turning has stopped.");
  ("it is moved onto the DOCUMENT element the moment it is found, and held onto, because an app boots by clearing the body - which swept the notice away with everything else, and left the one thing meant to survive a failed boot as the one thing that could not. the loading overlay lives up there for the same reason.");
  ("the notice says nothing about what went wrong, on purpose - so what went wrong is written down beside it instead, where the person who can fix it will read it and the person waiting will never see it");
  let record_script = html_code_error_record_script();
  let code = text_combine_multiple([
    record_script,
    "var app_error_box = document.getElementById('",
    id,
    "'); ",
    "if (app_error_box) { document.documentElement.appendChild(app_error_box); } ",
    "var app_error_show = function (event) { ",
    "app_error_record(event); ",
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
