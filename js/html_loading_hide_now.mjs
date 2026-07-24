import { html_loading_immediate } from "./html_loading_immediate.mjs";
import { subtract } from "./subtract.mjs";
import { greater_than } from "./greater_than.mjs";
import { not_equal } from "./not_equal.mjs";
import { equal } from "./equal.mjs";
import { html_loading_state } from "./html_loading_state.mjs";
import { html_remove } from "./html_remove.mjs";
export function html_loading_hide_now() {
  ("remove the overlay the instant the work finishes, with no fade-out linger. paired with ",
    html_loading_immediate.name,
    " this makes a cached re-render flash-free: the overlay is created and removed inside one synchronous burst, so the browser never paints it, yet a genuinely slow re-render still shows the spinner the whole time it waits");
  let state = html_loading_state();
  state.count = subtract(state.count, 1);
  if (greater_than(state.count, 0)) {
    return;
  }
  state.count = 0;
  let timer = state.timer;
  if (not_equal(timer, null)) {
    clearTimeout(timer);
    state.timer = null;
  }
  let overlay = state.overlay;
  if (equal(overlay, null)) {
    return;
  }
  html_remove(overlay);
  state.overlay = null;
}
