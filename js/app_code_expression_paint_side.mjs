import { app_code_expression_paint } from "./app_code_expression_paint.mjs";
import { app_code_expression_side_bracket_is } from "./app_code_expression_side_bracket_is.mjs";
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
  ("write one side of an operator into a parent as pressable pieces, with its brackets around it when it needs them");
  ("The brackets are written as their own pieces rather than wrapped around the side, because the side is already a run of pieces and there is nothing to wrap.");
  let bracket = app_code_expression_side_bracket_is(side, rank_least);
  if (bracket) {
    let open = js_code_parenthesis_left();
    html_span_text(parent, open);
  }
  app_code_expression_paint(parent, side, on_operator);
  if (bracket) {
    let close = js_code_parenthesis_right();
    html_span_text(parent, close);
  }
}
