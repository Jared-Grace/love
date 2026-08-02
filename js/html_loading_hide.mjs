import { html_loading_count_down_last_is } from "./html_loading_count_down_last_is.mjs";
import { html_loading_overlay_remove } from "./html_loading_overlay_remove.mjs";
import { not } from "./not.mjs";
import { greater_than } from "./greater_than.mjs";
import { equal } from "./equal.mjs";
import { html_loading_state } from "./html_loading_state.mjs";
import { html_style_opacity } from "./html_style_opacity.mjs";
export function html_loading_hide() {
  "Lets the overlay go, fading it out first, once the last piece of work that asked for it has finished.";
  "The fade is why the count is looked at twice. Between the moment the last run of work finishes and the moment the overlay has finished fading, a new run can start and ask for it again - and it would then be handed an overlay already on its way out. So each step of the fade asks again whether anybody has started waiting since, and gives up quietly if they have.";
  let last = html_loading_count_down_last_is();
  if (not(last)) {
    return;
  }
  let state = html_loading_state();
  function remove() {
    state.timer = null;
    if (greater_than(state.count, 0)) {
      return;
    }
    html_loading_overlay_remove();
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
