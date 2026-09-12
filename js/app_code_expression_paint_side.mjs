import { app_code_expression_paint_parenthesised } from "./app_code_expression_paint_parenthesised.mjs";
import { app_code_expression_paint } from "./app_code_expression_paint.mjs";
import { app_code_expression_side_parenthesis_is } from "./app_code_expression_side_parenthesis_is.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
export function app_code_expression_paint_side(
  parent,
  side,
  rank_least,
  on_operator,
) {
  arguments_assert(arguments, 4);
  ("write one side of an operator into a parent as pressable pieces, with its parentheses around it when it needs them");
  let parenthesis = app_code_expression_side_parenthesis_is(side, rank_least);
  if (parenthesis) {
    app_code_expression_paint_parenthesised(parent, side, on_operator);
    return;
  }
  app_code_expression_paint(parent, side, on_operator);
}
