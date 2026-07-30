import { arguments_assert } from "./arguments_assert.mjs";
import { window_reload } from "./window_reload.mjs";
export function html_hash_name_reload(name) {
  arguments_assert(arguments, 1);
  ("go to a named screen the way typing its address does: write the name into the URL hash, then reload on the spot. BESPOKE (window.location) — do NOT auto-canonicalize");
  ("Writing the hash alone only asks a listener to notice. That works right up until the listener is not there — and a listener registered during a page's start-up is exactly what a failure earlier in that start-up removes, leaving the address bar showing the new screen while the old one stays on the screen and nothing says why. Reloading here needs nobody. Assignment rather than a replaced history entry, so the browser's own back button still returns to where you came from.");
  window.location.hash = name;
  window_reload();
}
