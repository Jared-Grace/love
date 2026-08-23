import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
export function html_click_new_tab_is(event) {
  arguments_assert(arguments, 1);
  ("whether this click is the browser's own ask for a NEW TAB rather than for going there here: ctrl or command held, shift held (a new window), or any button but the primary one. BESPOKE (event fields) — do NOT auto-canonicalize");
  ("a handler that navigates on click has to ask this FIRST and do nothing when the answer is yes, or a ctrl-click does both things at once - the browser opens the new tab because the address is on the anchor, and the handler throws away the page the reader was standing on to open the same screen there too. The reader asked for one tab and lost the other.");
  ("asked of the event rather than of the platform, so nothing here has to know which key means new-tab on which machine: the browser has already decided, and ctrl and command are both simply reported.");
  let modified = event.ctrlKey || event.metaKey || event.shiftKey;
  let primary = equal(event.button, 0);
  let r = modified || not(primary);
  return r;
}
