import { arguments_assert } from "./arguments_assert.mjs";
import { js_parse_expression } from "./js_parse_expression.mjs";
import { app_code_expression_from_js } from "./app_code_expression_from_js.mjs";
export function app_code_expression_flat_tree_of_code(code) {
  arguments_assert(arguments, 1);
  ("the shape behind a line of arithmetic that carries no parentheses, read back out of the line itself: 2 + 9 / 3 - 4 gives back the shape whose divide sits inside the plus, and whose minus holds all of it");
  ("A quiz hands its question over as text, and a line outlives the run that built it - a review saves the line to ask again and comes back to it after the page has been loaded afresh. A shape kept beside the line it printed would have been forgotten by then, and the lesson would throw where a learner was owed a question.");
  ("2026-10-15: the line is read by javascript itself, so the shape is the one javascript would work out, whatever the operators. Not picked: the reader of our own this used to be, folding each operator met against the strengths the printer is held to. It agreed with javascript only where those strengths did, and they did not - === and < were held as one strength, so 5 == 7 > 4 came back as (5 == 7) > 4. Held against javascript over 20262 lines, that was the only place the two disagreed, and the strengths have since been mended.");
  let expression = js_parse_expression(code);
  let values = {};
  let whole = app_code_expression_from_js(expression, values);
  return whole;
}
