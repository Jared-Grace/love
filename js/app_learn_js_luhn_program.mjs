import { arguments_assert } from "./arguments_assert.mjs";
import { list_map } from "./list_map.mjs";
import { json_to } from "./json_to.mjs";
import { js_code_array } from "./js_code_array.mjs";
import { js_code_let_statement } from "./js_code_let_statement.mjs";
import { equal } from "./equal.mjs";
import { list_concat } from "./list_concat.mjs";
import { js_code_for_start_condition_update_lines } from "./js_code_for_start_condition_update_lines.mjs";
import { js_code_console_log_statement } from "./js_code_console_log_statement.mjs";
import { list_concat_multiple } from "./list_concat_multiple.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
export function app_learn_js_luhn_program(items, start_back, step, body) {
  arguments_assert(arguments, 4);
  ("let a = [items]; for (let i = a.length - start_back; i >= 0; i -= step) { body } console.log(a); as one string. body is the lines inside the loop above the step, already pushed in as they sit inside one another; a step of 1 is written i--;. Shared by the Luhn lessons, which differ only in the array, where the loop starts, its step and what it does to each item.");
  let codes = list_map(items, json_to);
  let array = js_code_array(codes);
  let head = js_code_let_statement("a", array);
  let update = equal(step, 1) ? "i--;" : "i -= " + step + ";";
  let statements = list_concat(body, [update]);
  let change_lines = js_code_for_start_condition_update_lines(
    "let i = a.length - " + start_back + ";",
    "i >= 0",
    statements,
  );
  let log_line = js_code_console_log_statement("a");
  let lines = list_concat_multiple([[head], change_lines, [log_line]]);
  let code = list_join_newline(lines);
  return code;
}
