import { arguments_assert } from "./arguments_assert.mjs";
import { js_code_let_statement } from "./js_code_let_statement.mjs";
import { json_to } from "./json_to.mjs";
import { js_code_for_start_condition_update_lines } from "./js_code_for_start_condition_update_lines.mjs";
import { js_code_console_log_statement } from "./js_code_console_log_statement.mjs";
import { list_concat } from "./list_concat.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
export function app_learn_js_string_build_program(
  word,
  start,
  condition,
  update,
  added,
) {
  arguments_assert(arguments, 5);
  ('a string built one piece at a time from another: let a = "joy"; let b = ""; for (let i = 0; i < a.length; i++) { b = b + a[i]; } console.log(b); where start, condition, update and the piece added are given, so copying, doubling and reversing share one writer');
  let right = json_to(word);
  let head = js_code_let_statement("a", right);
  let empty = js_code_let_statement("b", '""');
  let joined = "b = b + " + added + ";";
  let loop = js_code_for_start_condition_update_lines(
    "let i = " + start + ";",
    condition,
    [joined, update],
  );
  let log_line = js_code_console_log_statement("b");
  let a = list_concat([head, empty], loop);
  let lines = list_concat(a, [log_line]);
  let code = list_join_newline(lines);
  return code;
}
