import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_statement_name_value_name } from "./app_code_lesson_statement_name_value_name.mjs";
import { app_code_lesson_statement_name_two_name } from "./app_code_lesson_statement_name_two_name.mjs";
import { app_code_lesson_statement_name_third } from "./app_code_lesson_statement_name_third.mjs";
import { js_operator_plus_symbol } from "./js_operator_plus_symbol.mjs";
import { js_operator_minus_symbol } from "./js_operator_minus_symbol.mjs";
import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { html_div_cycle_code } from "./html_div_cycle_code.mjs";
import { js_code_binary_spaced_nb } from "./js_code_binary_spaced_nb.mjs";
import { app_code_code_lines_writes_out } from "./app_code_code_lines_writes_out.mjs";
import { js_code_let_statement } from "./js_code_let_statement.mjs";
import { js_code_console_log_statement } from "./js_code_console_log_statement.mjs";
export function app_code_lesson_statement_name_minus_one_above(root, context) {
  arguments_assert(arguments, 2);
  ("the boxes read before the first question: a new name made from two names, the program the lesson on keeping a total was about, then a new name made from a name and a number");
  ("The program already seen comes first and the new one is met against it. Both keep what they work out under a new name; the second has a written number where the other name was, and a minus where the plus was.");
  ("The numbers in the two boxes are none of them the same, so no number is a value in one box and an answer in the other.");
  let name_first = app_code_lesson_statement_name_value_name();
  let name_last = app_code_lesson_statement_name_two_name();
  let name_total = app_code_lesson_statement_name_third();
  let plus = js_operator_plus_symbol();
  let minus = js_operator_minus_symbol();
  let box_names = app_code_container_light_blue(root);
  html_div_cycle_code(box_names, [
    "A new name can hold what two names add up to:",
  ]);
  let summed = js_code_binary_spaced_nb(name_first, plus, name_last);
  let code = js_code_let_statement(name_first, 2);
  let code2 = js_code_let_statement(name_last, 3);
  let code3 = js_code_let_statement(name_total, summed);
  let statement = js_code_console_log_statement(name_total);
  app_code_code_lines_writes_out(
    box_names,
    [code, code2, code3, statement],
    "5",
  );
  let box_number = app_code_container_light_blue(root);
  html_div_cycle_code(box_number, [
    "A new name can also hold a name with a number taken away:",
  ]);
  let less = js_code_binary_spaced_nb(name_first, minus, 1);
  let code4 = js_code_let_statement(name_first, 9);
  let code5 = js_code_let_statement(name_last, less);
  let statement2 = js_code_console_log_statement(name_last);
  app_code_code_lines_writes_out(box_number, [code4, code5, statement2], "8");
}
