import { html_loading_state } from "./html_loading_state.mjs";
import { html_loading_overlay } from "./html_loading_overlay.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
export function html_loading_show() {
  let state = html_loading_state();
  let timer = state.timer;
  if (timer !== null) {
    clearTimeout(timer);
    state.timer = null;
  }
  state.count = state.count + 1;
  let overlay = state.overlay;
  if (overlay === null) {
    state.overlay = html_loading_overlay();
    return;
  }
  html_style_set(overlay, "opacity", "1");
}
