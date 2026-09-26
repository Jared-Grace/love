import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_statement_name_value_name } from "./app_code_lesson_statement_name_value_name.mjs";
import { js_code_console_log_statement } from "./js_code_console_log_statement.mjs";
import { app_code_lesson_statement_title_name_id } from "./app_code_lesson_statement_title_name_id.mjs";
export function app_code_lesson_statement_name_watch_title_name_id() {
  arguments_assert(arguments, 0);
  ("the home title: watching a name change, followed by the line that writes the name out");
  ("The line shown is the writing-out rather than the change. The change is the title just above this one; what this lesson adds is writing the name out on both sides of it.");
  ("Only what is painted changes; the id is built from the words below.");
  let words = "Watching a name change";
  let name = app_code_lesson_statement_name_value_name();
  let logged = js_code_console_log_statement(name);
  let built = app_code_lesson_statement_title_name_id(words, logged);
  return built;
}
