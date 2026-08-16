import { app_code_expression_paint_generic } from "./app_code_expression_paint_generic.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { noop } from "./noop.mjs";
export function app_code_expression_paint(parent, item, on_operator) {
  arguments_assert(arguments, 3);
  ("write an expression shape into a parent as separate pieces rather than as one piece of text, so that each operator standing in it is its own thing on the page and can be pressed");
  ("For every caller that cares about the operators and nothing else. The numbers are written just the same, they are simply not handed over as they go by.");
  app_code_expression_paint_generic(parent, item, on_operator, noop);
}
