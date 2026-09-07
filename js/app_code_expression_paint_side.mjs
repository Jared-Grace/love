import { app_code_expression_paint } from "./app_code_expression_paint.mjs";
import { app_code_expression_side_parenthesis_is } from "./app_code_expression_side_parenthesis_is.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { js_code_parenthesis_left } from "./js_code_parenthesis_left.mjs";
import { js_code_parenthesis_right } from "./js_code_parenthesis_right.mjs";
export function app_code_expression_paint_side(
  parent,
  side,
  rank_least,
  on_operator,
) {
  arguments_assert(arguments, 4);
  ("write one side of an operator into a parent as pressable pieces, with its parentheses around it when it needs them");
  ("The parentheses are written as their own pieces rather than wrapped around the side, because the side is already a run of pieces and there is nothing to wrap.");
  let parenthesis = app_code_expression_side_parenthesis_is(side, rank_least);
  if (parenthesis) {
    let open = js_code_parenthesis_left();
    html_span_text(parent, open);
  }
  app_code_expression_paint(parent, side, on_operator);
  if (parenthesis) {
    let close = js_code_parenthesis_right();
    html_span_text(parent, close);
  }
}
