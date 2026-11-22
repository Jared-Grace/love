import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { html_navigation_back_forward_is } from "./html_navigation_back_forward_is.mjs";
import { html_url } from "./html_url.mjs";
export function app_shared_bible_history_step_is(context) {
  "Whether the passage about to be drawn was reached by the back or forward button. Such a passage is not written into the remembered readings: the human found 2026-11-22 that pressing back overwrote the tab's line with the earlier chapter, so the newest chapter they had reached was gone from the list.";
  "Two roads arrive by a step, and both are asked. The single-verse reader draws a step again in place, and says so on the context while it does. The whole-chapter reader loads the page again for every chapter, so a step back is a fresh page the browser says was loaded by the back button - and it stays that page only while the address is the one it was loaded at. A move made after that changes the address, and is remembered as usual.";
  "Rejected: saving the furthest chapter reached, because Bible order is not reading order - Revelation then Genesis would keep Revelation. Rejected: a new line for the chapter being left, because one line per tab is the design the list rests on.";
  arguments_assert(arguments, 1);
  let stepping = property_get_or_null(context, "history_stepping");
  if (equal(stepping, true)) {
    return true;
  }
  let b = html_navigation_back_forward_is();
  if (not(b)) {
    return false;
  }
  let opened = property_get_or_null(context, "address_opened");
  let address = html_url();
  let same = equal(opened, address);
  return same;
}
