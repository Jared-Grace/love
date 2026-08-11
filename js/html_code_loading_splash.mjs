import { html_loading_backdrop_style } from "./html_loading_backdrop_style.mjs";
import { html_code_style_attribute } from "./html_code_style_attribute.mjs";
import { html_loading_message_style } from "./html_loading_message_style.mjs";
import { html_loading_spinner_keyframes_css } from "./html_loading_spinner_keyframes_css.mjs";
import { html_loading_spinner_markup } from "./html_loading_spinner_markup.mjs";
import { html_loading_message_text } from "./html_loading_message_text.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function html_code_loading_splash() {
  "the static loading splash baked into the app HTML body so a refresh paints the dark spinner INSTANTLY (before the bundle even downloads) instead of a white flash. self-contained: inline styles plus the shared keyframes, no external CSS or JS. carries the id app-loading so the shared boot can drop it once the app has loaded. shows the SAME spinner, message, backdrop and message placement as the runtime overlay, all single-sourced, so the dark-to-dark, spinner-to-spinner handoff is seamless and the two can never land a line apart; that overlay lives on the document element (surviving body clears), takes this away and takes over the moment scripts boot, so this only covers the gap before that";
  let keyframes = html_loading_spinner_keyframes_css();
  let style_open = "<style>";
  let style_close = "</style>";
  let backdrop = html_loading_backdrop_style();
  let backdrop_attribute = html_code_style_attribute(backdrop);
  let id = html_loading_splash_id();
  let open = text_combine_multiple([
    '<div id="',
    id,
    '"',
    backdrop_attribute,
    ">",
  ]);
  let spinner = html_loading_spinner_markup();
  let message_text = html_loading_message_text();
  let message_style = html_loading_message_style();
  let message_attribute = html_code_style_attribute(message_style);
  let message_open = text_combine_multiple(["<p", message_attribute, ">"]);
  let message_close = "</p>";
  let close = "</div>";
  let v = text_combine_multiple([
    style_open,
    keyframes,
    style_close,
    open,
    spinner,
    message_open,
    message_text,
    message_close,
    close,
  ]);
  return v;
}
