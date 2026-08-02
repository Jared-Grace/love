import { equal } from "./equal.mjs";
import { html_loading_state } from "./html_loading_state.mjs";
import { html_remove } from "./html_remove.mjs";
export function html_loading_overlay_remove() {
  "Takes the overlay off the page and forgets it, and does nothing at all when there is none.";
  "Doing nothing when there is none is the whole of why this is worth a name. Every way of finishing reaches this point from a different route - one straight away, one after a fade, one after a wait that was cancelled - and any of them can arrive to find the overlay already gone, because another one got there first.";
  let state = html_loading_state();
  let overlay = state.overlay;
  if (equal(overlay, null)) {
    return;
  }
  html_remove(overlay);
  state.overlay = null;
}
