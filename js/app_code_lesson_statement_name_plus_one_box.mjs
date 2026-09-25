import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_statement_name_value_name } from "./app_code_lesson_statement_name_value_name.mjs";
import { app_code_lesson_statement_name_two_name } from "./app_code_lesson_statement_name_two_name.mjs";
import { js_operator_plus_symbol } from "./js_operator_plus_symbol.mjs";
import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { app_code_remember_from_lesson } from "./app_code_remember_from_lesson.mjs";
import { app_code_lesson_statement_name_plus_one } from "./app_code_lesson_statement_name_plus_one.mjs";
import { js_code_binary_spaced_nb } from "./js_code_binary_spaced_nb.mjs";
import { js_code_let_statement } from "./js_code_let_statement.mjs";
import { js_code_console_log_statement } from "./js_code_console_log_statement.mjs";
import { app_code_code_lines_writes_out } from "./app_code_code_lines_writes_out.mjs";
export function app_code_lesson_statement_name_plus_one_box(root, context) {
  arguments_assert(arguments, 2);
  ("a box showing one more than a name kept under a new name, the program the lesson on one more than a name taught, with a link to that lesson");
  ("It starts from an odd number, so its answer is even, and none of its numbers is a starting number or an answer of the programs asked about below it.");
  let name_first = app_code_lesson_statement_name_value_name();
  let name_last = app_code_lesson_statement_name_two_name();
  let plus = js_operator_plus_symbol();
  let box = app_code_container_light_blue(root);
  ("the box shows a program an earlier lesson taught, so it opens with the reminder every such box opens with, whose lesson number is a button back to it");
  app_code_remember_from_lesson(
    box,
    context,
    app_code_lesson_statement_name_plus_one,
    ["a new name can hold a name with one added:"],
  );
  let more = js_code_binary_spaced_nb(name_first, plus, 1);
  let held = js_code_let_statement(name_first, 13);
  let held_more = js_code_let_statement(name_last, more);
  let logged = js_code_console_log_statement(name_last);
  app_code_code_lines_writes_out(box, [held, held_more, logged], "14");
  return box;
}
