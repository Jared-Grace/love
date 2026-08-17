import { app_code_lesson_statement_name_copy_name } from "./app_code_lesson_statement_name_copy_name.mjs";
import { app_code_lesson_statement_name_value_name } from "./app_code_lesson_statement_name_value_name.mjs";
import { app_code_lesson_statement_title_name_id } from "./app_code_lesson_statement_title_name_id.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { js_code_let_statement } from "./js_code_let_statement.mjs";
export function app_code_lesson_statement_name_copy_title_name_id() {
  arguments_assert(arguments, 0);
  ("the home title: giving a name what another name holds, the fifth Statements lesson, followed by the line that does it");
  ("The line shown is the whole lesson, and what makes it that line is what is missing from it - there are no quote marks round the value. The titles before this one all show a value with them, so the difference is visible from the home list without a word of explanation.");
  ("Real names rather than a stand-in, because the value here has to be a name and the shape that stands in for any value would say the opposite of what the line teaches.");
  ("Only what is painted changes; the id is built from the words below.");
  let words = "giving a name what another name holds";
  let name_source = app_code_lesson_statement_name_value_name();
  let name_copy = app_code_lesson_statement_name_copy_name();
  let code = js_code_let_statement(name_copy, name_source);
  let built = app_code_lesson_statement_title_name_id(words, code);
  return built;
}
