import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_statement_name_value_name } from "./app_code_lesson_statement_name_value_name.mjs";
import { app_code_string_any_code } from "./app_code_string_any_code.mjs";
import { js_code_assign_statement } from "./js_code_assign_statement.mjs";
export function app_code_lesson_statement_name_again_title_code() {
  arguments_assert(arguments, 0);
  ("the line in the title of the lesson on giving a name a new value: the name given a value left out as dots");
  let name = app_code_lesson_statement_name_value_name();
  let any = app_code_string_any_code();
  let code = js_code_assign_statement(name, any);
  return code;
}
