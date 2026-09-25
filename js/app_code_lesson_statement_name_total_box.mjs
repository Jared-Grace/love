import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_statement_name_value_name } from "./app_code_lesson_statement_name_value_name.mjs";
import { app_code_lesson_statement_name_two_name } from "./app_code_lesson_statement_name_two_name.mjs";
import { app_code_lesson_statement_name_third } from "./app_code_lesson_statement_name_third.mjs";
import { js_operator_plus_symbol } from "./js_operator_plus_symbol.mjs";
import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { html_div_cycle_code } from "./html_div_cycle_code.mjs";
import { js_code_binary_spaced_nb } from "./js_code_binary_spaced_nb.mjs";
import { js_code_let_statement } from "./js_code_let_statement.mjs";
import { js_code_console_log_statement } from "./js_code_console_log_statement.mjs";
import { app_code_code_lines_writes_out } from "./app_code_code_lines_writes_out.mjs";
import { app_code_lesson_link } from "./app_code_lesson_link.mjs";
import { app_code_lesson_statement_name_total } from "./app_code_lesson_statement_name_total.mjs";
export function app_code_lesson_statement_name_total_box(root, context) {
  arguments_assert(arguments, 2);
  ("a box showing a new name made from two names, the program the lesson on keeping a total taught, with a link to that lesson");
  let name_first = app_code_lesson_statement_name_value_name();
  let name_last = app_code_lesson_statement_name_two_name();
  let name_total = app_code_lesson_statement_name_third();
  let plus = js_operator_plus_symbol();
  let box = app_code_container_light_blue(root);
  html_div_cycle_code(box, ["A new name can hold what two names add up to:"]);
  let summed = js_code_binary_spaced_nb(name_first, plus, name_last);
  let held_first = js_code_let_statement(name_first, 2);
  let held_last = js_code_let_statement(name_last, 3);
  let held_total = js_code_let_statement(name_total, summed);
  let logged = js_code_console_log_statement(name_total);
  app_code_code_lines_writes_out(
    box,
    [held_first, held_last, held_total, logged],
    "5",
  );
  ("the box shows a program an earlier lesson taught, so it links to that lesson, for a learner who wants to see it again");
  html_div_cycle_code(box, ["From this lesson:"]);
  app_code_lesson_link(box, context, app_code_lesson_statement_name_total);
  return box;
}
