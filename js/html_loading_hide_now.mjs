import { html_loading_count_down_last_is } from "./html_loading_count_down_last_is.mjs";
import { html_loading_overlay_remove } from "./html_loading_overlay_remove.mjs";
import { not } from "./not.mjs";
import { fn_name } from "./fn_name.mjs";
import { not_equal } from "./not_equal.mjs";
import { html_loading_state } from "./html_loading_state.mjs";
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
