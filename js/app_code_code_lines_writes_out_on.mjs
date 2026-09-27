import { arguments_assert } from "./arguments_assert.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { app_code_value_logged_output } from "./app_code_value_logged_output.mjs";
import { app_code_label_of_code } from "./app_code_label_of_code.mjs";
import { app_code_label_code_question } from "./app_code_label_code_question.mjs";
import { app_code_code_output } from "./app_code_code_output.mjs";
export function app_code_code_lines_writes_out_on(
  parent,
  lines,
  value,
  on_code,
  on_output,
) {
  arguments_assert(arguments, 5);
  ("a program and what it writes out, as the card a lesson shows in a box read before the questions start, with the code painted by on_code and the output by on_output - so a lesson can colour the numbers in its example the way its writing does, and the card stays the one card");
  let code = list_join_newline(lines);
  let value2 = app_code_value_logged_output();
  let output_label = app_code_label_of_code(value2);
  let code_label = app_code_label_code_question();
  let container = app_code_code_output({
    parent,
    code_label,
    code,
    on_code,
    output_label,
    output: value,
    on_output,
  });
  return container;
}
