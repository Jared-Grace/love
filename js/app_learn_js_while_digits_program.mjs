import { arguments_assert } from "./arguments_assert.mjs";
import { js_code_let_statement } from "./js_code_let_statement.mjs";
import { json_to } from "./json_to.mjs";
import { js_code_while_lines_multiple } from "./js_code_while_lines_multiple.mjs";
import { list_concat_multiple } from "./list_concat_multiple.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
export function app_learn_js_while_digits_program(
  n,
  before,
  condition,
  statements,
  after,
) {
  arguments_assert(arguments, 5);
  ("let n = n; the lines before; while (condition) { statements } the lines after; as one string. Shared by the lessons that take a number apart one digit at a time, which differ only in what stands around the loop and what it does each run.");
  let right = json_to(n);
  let head = js_code_let_statement("n", right);
  let loop = js_code_while_lines_multiple(condition, statements);
  let lines = list_concat_multiple([[head], before, loop, after]);
  let code = list_join_newline(lines);
  return code;
}
