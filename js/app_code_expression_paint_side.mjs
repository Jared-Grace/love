import { app_code_expression_paint_side_generic } from "./app_code_expression_paint_side_generic.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { noop } from "./noop.mjs";
export function app_code_expression_paint_side(
  parent,
  side,
  rank_least,
  on_operator,
) {
  arguments_assert(arguments, 4);
  ("write one side of an operator into a parent as pressable pieces, with its brackets around it when it needs them");
  ("For every caller that cares about the operators and nothing else. The numbers are written just the same, they are simply not handed over as they go by.");
  app_code_expression_paint_side_generic(
    parent,
    side,
    rank_least,
    on_operator,
    noop,
  );
}
