import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_statement_name_value_name } from "./app_code_lesson_statement_name_value_name.mjs";
import { js_operator_plus_symbol } from "./js_operator_plus_symbol.mjs";
import { js_operator_minus_symbol } from "./js_operator_minus_symbol.mjs";
import { js_code_binary_spaced_nb } from "./js_code_binary_spaced_nb.mjs";
import { js_code_assign_statement } from "./js_code_assign_statement.mjs";
import { js_code_console_log_statement } from "./js_code_console_log_statement.mjs";
import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { app_code_remember_from_lesson } from "./app_code_remember_from_lesson.mjs";
import { app_code_lesson_statement_name_one_more } from "./app_code_lesson_statement_name_one_more.mjs";
import { js_code_let_statement } from "./js_code_let_statement.mjs";
import { app_code_code_lines_writes_out } from "./app_code_code_lines_writes_out.mjs";
import { html_div_cycle_code } from "./html_div_cycle_code.mjs";
export function app_code_lesson_statement_name_one_less_above(root, context) {
  arguments_assert(arguments, 2);
  ("the boxes read before the first question: a name given one more than it holds, the program the lesson on one more taught, then the same program with a minus where the plus was");
  ("Neither box's numbers is a starting number or an answer of the programs asked about below: those start at 3, 5, 7, 9 or 11 and end one lower, and these start at 13 and 17.");
  let name = app_code_lesson_statement_name_value_name();
  let plus = js_operator_plus_symbol();
  let minus = js_operator_minus_symbol();
  let more = js_code_binary_spaced_nb(name, plus, 1);
  let less = js_code_binary_spaced_nb(name, minus, 1);
  let code_more = js_code_assign_statement(name, more);
  let code_less = js_code_assign_statement(name, less);
  let logged = js_code_console_log_statement(name);
  let box_more = app_code_container_light_blue(root);
  app_code_remember_from_lesson(
    box_more,
    context,
    app_code_lesson_statement_name_one_more,
    ["a name can be given one more than it holds (", code_more, "):"],
  );
  let held_more = js_code_let_statement(name, 13);
  app_code_code_lines_writes_out(
    box_more,
    [held_more, code_more, logged],
    "14",
  );
  let box_less = app_code_container_light_blue(root);
  html_div_cycle_code(box_less, [
    "A name can also be given one less than it holds (",
    code_less,
    " instead of ",
    code_more,
    "):",
  ]);
  let held_less = js_code_let_statement(name, 17);
  app_code_code_lines_writes_out(
    box_less,
    [held_less, code_less, logged],
    "16",
  );
}
