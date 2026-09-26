import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_statement_name_value_name } from "./app_code_lesson_statement_name_value_name.mjs";
import { app_code_lesson_statement_name_two_name } from "./app_code_lesson_statement_name_two_name.mjs";
import { js_operator_plus_symbol } from "./js_operator_plus_symbol.mjs";
import { js_code_binary_spaced_nb } from "./js_code_binary_spaced_nb.mjs";
import { js_code_let_statement } from "./js_code_let_statement.mjs";
import { js_code_assign_statement } from "./js_code_assign_statement.mjs";
import { app_code_lesson_statement_name_plus_one_box } from "./app_code_lesson_statement_name_plus_one_box.mjs";
import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { html_div_cycle_code } from "./html_div_cycle_code.mjs";
import { js_code_console_log_statement } from "./js_code_console_log_statement.mjs";
import { app_code_code_lines_writes_out } from "./app_code_code_lines_writes_out.mjs";
export function app_code_lesson_statement_name_one_more_above(root, context) {
  arguments_assert(arguments, 2);
  ("the boxes read before the first question: one more than a name kept under a new name, the program the lesson on one more than a name taught, then the same program with the new name changed to the name itself");
  ("The reminder is the plus one lesson rather than a sum of two names, because this line is that one with a single change - the name on the left is the name on the right. A sum of two names was the reminder once, and it asked a learner to take out a name and put in a number and fill a name that already existed, three changes to reach one line.");
  ("Both boxes start at 13 and write out 14, so the same output under both is the claim that the name on the left may be the name being read. The programs asked about below start at 3, 5, 7, 9 or 11, so neither number is one of their starting numbers or answers.");
  let name = app_code_lesson_statement_name_value_name();
  let name_last = app_code_lesson_statement_name_two_name();
  let plus = js_operator_plus_symbol();
  let more = js_code_binary_spaced_nb(name, plus, 1);
  let kept = js_code_let_statement(name_last, more);
  let code = js_code_assign_statement(name, more);
  app_code_lesson_statement_name_plus_one_box(root, context);
  let box = app_code_container_light_blue(root);
  html_div_cycle_code(box, [
    "Instead of a new name (",
    name_last,
    "), a name (",
    name,
    ") can be given one more than it holds (",
    code,
    " instead of ",
    kept,
    "):",
  ]);
  let held = js_code_let_statement(name, 13);
  let logged = js_code_console_log_statement(name);
  app_code_code_lines_writes_out(box, [held, code, logged], "14");
}
