import { arguments_assert } from "./arguments_assert.mjs";
import { js_code_while_lines_multiple } from "./js_code_while_lines_multiple.mjs";
import { list_concat } from "./list_concat.mjs";
export function js_code_two_names_while_lines(
  code_a,
  code_b,
  condition,
  grown,
  shrunk,
) {
  arguments_assert(arguments, 5);
  ("let a = 1; let b = 9; while (a < 4) { a++; b--; }, as the lines it is written on, the way Two names in a while writes it");
  let looped = js_code_while_lines_multiple(condition, [grown, shrunk]);
  let lines = list_concat([code_a, code_b], looped);
  return lines;
}
