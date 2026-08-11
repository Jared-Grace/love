import { arguments_assert } from "./arguments_assert.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function app_code_lesson_expression_round_nearest_round_code(inner) {
  arguments_assert(arguments, 1);
  ("Math.round(inner) as a code string");
  let combined = text_combine_multiple(["Math.round(", inner, ")"]);
  return combined;
}
