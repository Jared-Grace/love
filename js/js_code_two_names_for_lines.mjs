import { arguments_assert } from "./arguments_assert.mjs";
import { js_code_for_start_condition_update_lines } from "./js_code_for_start_condition_update_lines.mjs";
import { list_concat } from "./list_concat.mjs";
export function js_code_two_names_for_lines(
  code_a,
  code_b,
  condition,
  grown,
  shrunk,
) {
  arguments_assert(arguments, 5);
  ("let b = 9; for (let a = 1; a < 4; a++) { b--; }, as the lines it is written on: the for owns a, and b stands above it");
  let looped = js_code_for_start_condition_update_lines(code_a, condition, [
    shrunk,
    grown,
  ]);
  let lines = list_concat([code_b], looped);
  return lines;
}
