import { arguments_assert } from "./arguments_assert.mjs";
import { js_code_let_statement } from "./js_code_let_statement.mjs";
import { json_to } from "./json_to.mjs";
import { js_code_if_lines } from "./js_code_if_lines.mjs";
import { list_concat } from "./list_concat.mjs";
import { js_code_for_start_condition_update_lines } from "./js_code_for_start_condition_update_lines.mjs";
import { list_concat_multiple } from "./list_concat_multiple.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
export function app_learn_js_for_divisors_program(
  n,
  before,
  condition,
  asked,
  statement,
  after,
) {
  arguments_assert(arguments, 6);
  ("let n = n; the lines before; for (let i = 1; condition; i++) { if (asked) { statement } } the lines after; as one string. Shared by the lessons on divisors, perfect numbers and primes, which differ only in what stands around the loop, how far it counts and what the if does.");
  let right = json_to(n);
  let head = js_code_let_statement("n", right);
  let inside = js_code_if_lines(asked, statement);
  let statements = list_concat(inside, ["i++;"]);
  let loop = js_code_for_start_condition_update_lines(
    "let i = 1;",
    condition,
    statements,
  );
  let lines = list_concat_multiple([[head], before, loop, after]);
  let code = list_join_newline(lines);
  return code;
}
