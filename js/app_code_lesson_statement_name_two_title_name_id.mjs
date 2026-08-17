import { app_code_category_statements } from "./app_code_category_statements.mjs";
import { app_code_lesson_name_id_category_then } from "./app_code_lesson_name_id_category_then.mjs";
import { app_code_lesson_statement_name_value_names } from "./app_code_lesson_statement_name_value_names.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { html_cycle_code } from "./html_cycle_code.mjs";
import { js_code_console_log_statement } from "./js_code_console_log_statement.mjs";
import { list_last } from "./list_last.mjs";
import { text_combine } from "./text_combine.mjs";
export function app_code_lesson_statement_name_two_title_name_id() {
  arguments_assert(arguments, 0);
  ("the home title: two names at once, the third Statements lesson, followed by the line that makes it different");
  ("The two lessons before it show their let line, because a let line is what each of them changed. This one leaves the let lines alone and changes what console.log is handed, so that is the line worth showing - and a name that is not the first one on the screen is a thing no earlier lesson has ever written.");
  ("Only what is painted changes; the id is built from the words below.");
  let words = "two names at once";
  let names = app_code_lesson_statement_name_value_names();
  let name = list_last(names);
  let code = js_code_console_log_statement(name);
  let built = app_code_lesson_statement_title_name_id(words, code);
  return built;
}
