import { app_code_expression_paint_generic } from "./app_code_expression_paint_generic.mjs";
import { app_code_expression_side_bracket_is } from "./app_code_expression_side_bracket_is.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { js_code_parenthesis_left } from "./js_code_parenthesis_left.mjs";
import { js_code_parenthesis_right } from "./js_code_parenthesis_right.mjs";
export function app_code_expression_paint_side_generic(
  parent,
  side,
  rank_least,
  on_operator,
  on_value,
) {
  arguments_assert(arguments, 5);
  ("write one side of an operator into a parent as separate pieces, with its brackets around it when it needs them");
  ("The brackets are written as their own pieces rather than wrapped around the side, because the side is already a run of pieces and there is nothing to wrap.");
  let bracket = app_code_expression_side_bracket_is(side, rank_least);
  if (bracket) {
    let open = js_code_parenthesis_left();
    html_span_text(parent, open);
  }
  app_code_expression_paint_generic(parent, side, on_operator, on_value);
  if (bracket) {
    let close = js_code_parenthesis_right();
    html_span_text(parent, close);
  }
}
