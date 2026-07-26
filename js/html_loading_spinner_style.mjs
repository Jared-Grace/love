import { html_loading_spinner_keyframes_css } from "./html_loading_spinner_keyframes_css.mjs";
import { html_loading_state } from "./html_loading_state.mjs";
import { html_style_head } from "./html_style_head.mjs";
export function html_loading_spinner_style() {
  "inject the shared spinner keyframes into the head, once. the css is single-sourced in html_loading_spinner_keyframes_css so the runtime overlay and the static splash play the identical animations";
  let state = html_loading_state();
  if (state.styled) {
    return;
  }
  state.styled = true;
  let css = html_loading_spinner_keyframes_css();
  html_style_head(css);
}
