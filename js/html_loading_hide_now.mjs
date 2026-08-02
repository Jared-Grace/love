import { fn_name } from "./fn_name.mjs";
import { subtract } from "./subtract.mjs";
import { greater_than } from "./greater_than.mjs";
import { not_equal } from "./not_equal.mjs";
import { equal } from "./equal.mjs";
import { html_loading_state } from "./html_loading_state.mjs";
import { html_remove } from "./html_remove.mjs";
export function html_loading_hide_now() {
  ("remove the overlay the instant the work finishes, with no fade-out linger. paired with ",
    fn_name("html_loading_immediate"),
    " this makes a cached re-render flash-free: the overlay is created and removed inside one synchronous burst, so the browser never paints it, yet a genuinely slow re-render still shows the spinner the whole time it waits");
  let last = html_loading_count_down_last_is();
  if (not(last)) {
    return;
  }
  let state = html_loading_state();
  let timer = state.timer;
  if (not_equal(timer, null)) {
    clearTimeout(timer);
    state.timer = null;
  }
  html_loading_overlay_remove();
}
