import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_statement_name_value_name } from "./app_code_lesson_statement_name_value_name.mjs";
import { js_code_binary_spaced_nb } from "./js_code_binary_spaced_nb.mjs";
import { js_code_assign_statement } from "./js_code_assign_statement.mjs";
export function app_code_lesson_statement_name_itself_step_title_code(
  operator,
) {
  arguments_assert(arguments, 1);
  ("the line in the title of a lesson on stepping a name by one: the name given itself and the operator handed in with a written 1");
  let name = app_code_lesson_statement_name_value_name();
  let stepped = js_code_binary_spaced_nb(name, operator, 1);
  let code = js_code_assign_statement(name, stepped);
  return code;
}
