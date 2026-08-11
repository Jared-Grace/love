import { arguments_assert } from "./arguments_assert.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function app_code_lesson_expression_round_generic_code(
  inner,
  called_name,
) {
  arguments_assert(arguments, 2);
  ("the rounding call on inner as a code string");
  let combined = text_combine_multiple([called_name, "(", inner, ")"]);
  return combined;
}
