import { html_loading_spinner_keyframes_css } from "./html_loading_spinner_keyframes_css.mjs";
import { html_loading_spinner_markup } from "./html_loading_spinner_markup.mjs";
import { html_loading_message_text } from "./html_loading_message_text.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function html_code_loading_splash() {
  "the static loading splash baked into the app's HTML body so a refresh paints the dark spinner INSTANTLY (before the bundle even downloads) instead of a white flash. self-contained: inline styles plus the shared keyframes, no external CSS or JS. carries the id app-loading so the shared boot can drop it once the app has loaded. shows the SAME spinner and message as the runtime overlay - single-sourced via html_loading_spinner_markup, html_loading_spinner_keyframes_css, and html_loading_message_text - so the dark-to-dark, spinner-to-spinner handoff is seamless; that overlay lives on the document element (surviving body clears) and takes over the moment scripts boot, this only covers the gap before that";
  let keyframes = html_loading_spinner_keyframes_css();
  let style_open = "<style>";
  let style_close = "</style>";
  let open =
    '<div id="app-loading" style="position:fixed;top:0;left:0;width:100vw;height:100vh;background:rgba(0,0,0,0.8);display:flex;flex-direction:column;justify-content:center;align-items:center;gap:1.5rem;z-index:1000">';
  let spinner = html_loading_spinner_markup();
  let message_text = html_loading_message_text();
  let message_open =
    '<p style="color:white;font-size:1.5rem;font-family:sans-serif;text-align:center;text-shadow:0 0.05em 0.15em rgba(0,0,0,0.8);margin:0">';
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
