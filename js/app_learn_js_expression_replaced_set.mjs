import { arguments_assert } from "./arguments_assert.mjs";
import { html_clear } from "./html_clear.mjs";
import { fn_name } from "./fn_name.mjs";
import { js_value_code } from "./js_value_code.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { html_visibility_visible } from "./html_visibility_visible.mjs";
export function app_learn_js_expression_replaced_set(node_span, value) {
  arguments_assert(arguments, 2);
  ("the blue block the learner chose, with its working swapped for what it came to: 8 * 8 turns into 64 in the very place it was standing");
  ("Written into the same piece of the page rather than by redrawing the line, so the replacement is watched happening. A redrawn line arrives already finished and the learner has to find what moved.");
  ("shown again as it is written, because whatever answered the press may have sent the block away and hidden it to keep its room - so this is where the room is filled again and there is something to see in it");
  html_clear(node_span);
  ('2026-11-10, at the human\'s asking: written as code, a string in its quotes, since it stands in a line of code and the line drawn after it writes it so - a[2] once came to goodness here and then "goodness" a moment later. Not picked: ',
    fn_name("text_to"),
    ", which lost the quotes");
  let text = js_value_code(value);
  html_span_text(node_span, text);
  html_visibility_visible(node_span);
}
