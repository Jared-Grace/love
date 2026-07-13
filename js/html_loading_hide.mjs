import { html_loading_state } from "./html_loading_state.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
import { html_remove } from "./html_remove.mjs";
export function html_loading_hide() {
  let state = html_loading_state();
  state.count = state.count - 1;
  if (state.count > 0) {
    return;
  }
  state.count = 0;
  function remove() {
    state.timer = null;
    if (state.count > 0) {
      return;
    }
    let overlay = state.overlay;
    if (overlay === null) {
      return;
    }
    html_remove(overlay);
    state.overlay = null;
  }
  function fade_out() {
    state.timer = null;
    if (state.count > 0) {
      return;
    }
    let overlay = state.overlay;
    if (overlay === null) {
      return;
    }
    html_style_set(overlay, "opacity", "0");
    state.timer = setTimeout(remove, 150);
  }
  state.timer = setTimeout(fade_out, 150);
}
