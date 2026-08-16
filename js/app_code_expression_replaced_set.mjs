import { html_visibility_visible } from "./html_visibility_visible.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { html_clear } from "./html_clear.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { text_to } from "./text_to.mjs";
export function app_code_expression_replaced_set(node_span, value) {
  arguments_assert(arguments, 2);
  ("the blue block the learner chose, with its working swapped for what it came to: 8 * 8 turns into 64 in the very place it was standing");
  ("Written into the same piece of the page rather than by redrawing the line, so the replacement is watched happening. A redrawn line arrives already finished and the learner has to find what moved.");
  ("shown again as it is written, because whatever answered the press may have sent the block away and hidden it to keep its room - so this is where the room is filled again and there is something to see in it");
  html_clear(node_span);
  let text = text_to(value);
  html_span_text(node_span, text);
  html_visibility_visible(node_span);
}
