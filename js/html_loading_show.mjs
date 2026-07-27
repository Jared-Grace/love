import { not_equal } from "./not_equal.mjs";
import { equal } from "./equal.mjs";
import { html_loading_state } from "./html_loading_state.mjs";
import { html_loading_overlay } from "./html_loading_overlay.mjs";
import { html_style_opacity } from "./html_style_opacity.mjs";
export function html_loading_show() {
  "this waits for nothing on purpose, so that everything from the look at the shared state to the write back into it happens in one uninterrupted run. the moment a pause sits between them, two callers starting together both see no cover and both build one, and whichever writes second leaves the other stranded on screen with nothing tracking it";
  let state = html_loading_state();
  let timer = state.timer;
  if (not_equal(timer, null)) {
    clearTimeout(timer);
    state.timer = null;
  }
  state.count = state.count + 1;
  let overlay = state.overlay;
  if (equal(overlay, null)) {
    state.overlay = html_loading_overlay();
    return;
  }
  html_style_opacity(overlay, "1");
}
