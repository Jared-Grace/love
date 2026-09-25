import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_statement_name_value_name } from "./app_code_lesson_statement_name_value_name.mjs";
import { js_code_let_statement } from "./js_code_let_statement.mjs";
import { app_code_lesson_statement_title_name_id } from "./app_code_lesson_statement_title_name_id.mjs";
export function app_code_lesson_statement_name_number_title_name_id() {
  arguments_assert(arguments, 0);
  ("the home title: giving a number a name, followed by the line that does it");
  ("Only what is painted changes; the id is built from the words below.");
  let words = "Giving a number a name";
  let name = app_code_lesson_statement_name_value_name();
  let code = js_code_let_statement(name, 1);
  let built = app_code_lesson_statement_title_name_id(words, code);
  return built;
}
