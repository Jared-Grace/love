import { subtract } from "./subtract.mjs";
import { greater_than } from "./greater_than.mjs";
import { equal } from "./equal.mjs";
import { html_loading_state } from "./html_loading_state.mjs";
import { html_style_opacity } from "./html_style_opacity.mjs";
import { html_remove } from "./html_remove.mjs";
export function html_loading_hide() {
  let state = html_loading_state();
  state.count = subtract(state.count, 1);
  if (greater_than(state.count, 0)) {
    return;
  }
  state.count = 0;
  function remove() {
    state.timer = null;
    if (greater_than(state.count, 0)) {
      return;
    }
    let overlay = state.overlay;
    if (equal(overlay, null)) {
      return;
    }
    html_remove(overlay);
    state.overlay = null;
  }
  function fade_out() {
    state.timer = null;
    if (greater_than(state.count, 0)) {
      return;
    }
    let overlay = state.overlay;
    if (equal(overlay, null)) {
      return;
    }
    html_style_opacity(overlay, "0");
    state.timer = setTimeout(remove, 150);
  }
  state.timer = setTimeout(fade_out, 150);
}
