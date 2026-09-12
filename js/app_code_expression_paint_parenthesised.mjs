import { arguments_assert } from "./arguments_assert.mjs";
import { js_code_parenthesis_left } from "./js_code_parenthesis_left.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { app_code_expression_paint } from "./app_code_expression_paint.mjs";
import { js_code_parenthesis_right } from "./js_code_parenthesis_right.mjs";
export function app_code_expression_paint_parenthesised(
  parent,
  side,
  on_operator,
) {
  arguments_assert(arguments, 3);
  ("one side of an operator written into a parent as pressable pieces with a pair of parentheses round it, whatever is inside");
  ("The parentheses are written as their own pieces rather than wrapped around the side, because the side is already a run of pieces and there is nothing to wrap.");
  ("Two callers ask for this and they decide differently: the side of a two-sided operator asks only when the ranks say a reader would otherwise take the parts in the wrong order, and the inside of a name with brackets asks always. Both then need the same three pieces in the same order, so the pieces live here and each caller keeps its own question.");
  let open = js_code_parenthesis_left();
  html_span_text(parent, open);
  app_code_expression_paint(parent, side, on_operator);
  let close = js_code_parenthesis_right();
  html_span_text(parent, close);
}
