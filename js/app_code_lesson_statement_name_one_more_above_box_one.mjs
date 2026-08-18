import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_statement_name_value_name } from "./app_code_lesson_statement_name_value_name.mjs";
import { app_code_lesson_statement_name_two_name } from "./app_code_lesson_statement_name_two_name.mjs";
import { js_operator_plus_symbol } from "./js_operator_plus_symbol.mjs";
import { add } from "./add.mjs";
import { js_code_binary_spaced_nb } from "./js_code_binary_spaced_nb.mjs";
import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { html_div_cycle_code } from "./html_div_cycle_code.mjs";
import { js_code_let_statement } from "./js_code_let_statement.mjs";
import { html_div_code } from "./html_div_code.mjs";
import { js_code_assign_statement } from "./js_code_assign_statement.mjs";
import { js_code_console_log_statement } from "./js_code_console_log_statement.mjs";
import { app_code_writes_out_line } from "./app_code_writes_out_line.mjs";
export function app_code_lesson_statement_name_one_more_above_box_one(root) {
  arguments_assert(arguments, 1);
  let name = app_code_lesson_statement_name_value_name();
  let name_last = app_code_lesson_statement_name_two_name();
  let plus = js_operator_plus_symbol();
  let number_first = 2;
  let number_last = 3;
  let total = add(number_first, number_last);
  let names_sum = js_code_binary_spaced_nb(name, plus, name_last);
  let start = 7;
  let more = js_code_binary_spaced_nb(name, plus, 1);
  let once = add(start, 1);
  let twice = add(once, 1);
  let box_sum = app_code_container_light_blue(root);
  html_div_cycle_code(box_sum, [
    "Remember, we can give a name what it and another name add up to",
  ]);
  let code = js_code_let_statement(name, number_first);
  html_div_code(box_sum, code);
  let code2 = js_code_let_statement(name_last, number_last);
  html_div_code(box_sum, code2);
  let code3 = js_code_assign_statement(name, names_sum);
  html_div_code(box_sum, code3);
  let code4 = js_code_console_log_statement(name);
  html_div_code(box_sum, code4);
  app_code_writes_out_line(box_sum, total);
  let box_one = app_code_container_light_blue(root);
  let r = {
    name,
    start,
    more,
    once,
    twice,
    box_one,
  };
  return r;
}
