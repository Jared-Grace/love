import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_statement_name_value_name } from "./app_code_lesson_statement_name_value_name.mjs";
import { app_code_lesson_statement_name_value_word } from "./app_code_lesson_statement_name_value_word.mjs";
import { app_code_string_code } from "./app_code_string_code.mjs";
import { js_code_console_log_statement } from "./js_code_console_log_statement.mjs";
import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { html_div_cycle_code } from "./html_div_cycle_code.mjs";
import { js_code_let_statement } from "./js_code_let_statement.mjs";
import { app_code_code_lines_writes_out } from "./app_code_code_lines_writes_out.mjs";
import { app_code_lesson_link } from "./app_code_lesson_link.mjs";
import { app_code_lesson_statement_name_value } from "./app_code_lesson_statement_name_value.mjs";
export function app_code_lesson_statement_name_value_box(root, context) {
  arguments_assert(arguments, 2);
  ("a box showing a name holding a word, the program the lesson on giving a value a name taught, with a link to that lesson");
  ("Shared by every lesson that meets a new kind of value against the word a learner has already seen a name hold.");
  let name = app_code_lesson_statement_name_value_name();
  let word = app_code_lesson_statement_name_value_word();
  let quoted = app_code_string_code(word);
  let logged = js_code_console_log_statement(name);
  let box = app_code_container_light_blue(root);
  html_div_cycle_code(box, ["A variable can hold a word:"]);
  let held = js_code_let_statement(name, quoted);
  app_code_code_lines_writes_out(box, [held, logged], word);
  ("the box shows a program an earlier lesson taught, so it links to that lesson, for a learner who wants to see it again");
  html_div_cycle_code(box, ["From this lesson:"]);
  app_code_lesson_link(box, context, app_code_lesson_statement_name_value);
  return box;
}
