import { arguments_assert } from "./arguments_assert.mjs";
import { html_div } from "./html_div.mjs";
import { app_shared_spaced_gap } from "./app_shared_spaced_gap.mjs";
import { html_style_margin_y } from "./html_style_margin_y.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { html_a_href_text } from "./html_a_href_text.mjs";
import { html_attribute_set } from "./html_attribute_set.mjs";
import { html_style_overflow_wrap } from "./html_style_overflow_wrap.mjs";
export function app_next_urls_show(parent, url_here, url_onward) {
  "Both links the copy buttons can carry, under the reading, each said with what it leads to: Current for this passage, Next for the one after it.";
  "Each opens in a window of its own, because the page it is on is a page somebody was sent and may still be reading. A link is one long word with no spaces, so it is allowed to break wherever it has to rather than push a phone's page sideways.";
  arguments_assert(arguments, 3);
  let box = html_div(parent);
  let gap = app_shared_spaced_gap();
  html_style_margin_y(box, gap);
  function link_row(label, url) {
    let row = html_div(box);
    html_span_text(row, label);
    let a = html_a_href_text(row, url, url);
    html_attribute_set(a, "target", "_blank");
    html_style_overflow_wrap(a, "anywhere");
  }
  link_row("Current: ", url_here);
  link_row("Next: ", url_onward);
  return box;
}
