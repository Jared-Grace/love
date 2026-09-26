import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_statement_name_value_name } from "./app_code_lesson_statement_name_value_name.mjs";
import { app_code_lesson_statement_name_two_name } from "./app_code_lesson_statement_name_two_name.mjs";
import { js_code_let_statement } from "./js_code_let_statement.mjs";
import { app_code_lesson_statement_title_name_id } from "./app_code_lesson_statement_title_name_id.mjs";
export function app_code_lesson_statement_name_copy_single_title_name_id() {
  arguments_assert(arguments, 0);
  ("the home title: a name given what another name holds, followed by the line that does it");
  let words = "Giving a name what another name holds";
  let name_source = app_code_lesson_statement_name_value_name();
  let name_copy = app_code_lesson_statement_name_two_name();
  let code = js_code_let_statement(name_copy, name_source);
  let built = app_code_lesson_statement_title_name_id(words, code);
  return built;
}
