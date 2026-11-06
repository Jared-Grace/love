import { arguments_assert } from "./arguments_assert.mjs";
import { js_code_while_lines_multiple } from "./js_code_while_lines_multiple.mjs";
import { list_concat } from "./list_concat.mjs";
export function js_code_two_names_while_b_first_lines(
  code_a,
  code_b,
  condition,
  grown,
  shrunk,
) {
  arguments_assert(arguments, 5);
  ("let b = 9; let a = 1; while (a < 4) { b--; a++; }, as the lines it is written on: the while a for of a and b is, once let a moves into the for and a++ moves up");
  let looped = js_code_while_lines_multiple(condition, [shrunk, grown]);
  let lines = list_concat([code_b, code_a], looped);
  return lines;
}
