import { arguments_assert } from "./arguments_assert.mjs";
import { html_div } from "./html_div.mjs";
import { html_a_href_text } from "./html_a_href_text.mjs";
import { html_attribute_set } from "./html_attribute_set.mjs";
import { html_style_margin_y } from "./html_style_margin_y.mjs";
import { html_style_set } from "./html_style_set.mjs";
import { app_shared_spaced_gap } from "./app_shared_spaced_gap.mjs";
export function app_next_url_onward_link(parent, url) {
  "The link to what comes next, standing under the reading as something to press.";
  "It used to be the last line of the reading block, which meant it was text about a link rather than a link - somebody who wanted to follow it had to select it and paste it somewhere. It says the same words; it is only a thing you can press now.";
  "It opens in a window of its own, because the page it is on is a page somebody was sent and may still be reading - following the link in place would take the verse away from them, and the only way back would be the browser's own.";
  arguments_assert(arguments, 2);
  ("The gap over it and the gap under it are the same, so it reads as a thing standing between the reading and the ways onward rather than as a line belonging to whichever of them it happens to be nearer.");
  let row = html_div(parent);
  let gap = app_shared_spaced_gap();
  html_style_margin_y(row, gap);
  let a = html_a_href_text(row, url, url);
  html_attribute_set(a, "target", "_blank");
  ("A link is one long word with no spaces in it, and a phone is narrow. Left to the ordinary rules it would run off the side and push the whole page sideways with it, so it is allowed to break wherever it has to.");
  html_style_set(a, "overflow-wrap", "anywhere");
  return a;
}
