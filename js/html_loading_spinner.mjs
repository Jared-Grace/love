import { html_loading_spinner_keyframes_css } from "./html_loading_spinner_keyframes_css.mjs";
import { html_loading_spinner_style } from "./html_loading_spinner_style.mjs";
import { html_loading_spinner_markup } from "./html_loading_spinner_markup.mjs";
import { html_div } from "./html_div.mjs";
import { html_text_set } from "./html_text_set.mjs";
export function html_loading_spinner(parent) {
  ("the runtime loading spinner as live dom: inject the shared keyframes, then render the shared spinner markup into a fresh div. single-sourced with the static splash (both read ",
    html_loading_spinner_markup.name,
    " + ",
    html_loading_spinner_keyframes_css.name,
    ") so the two can never drift");
  html_loading_spinner_style();
  let spinner = html_div(parent);
  let markup = html_loading_spinner_markup();
  html_text_set(spinner, markup);
  return spinner;
}
