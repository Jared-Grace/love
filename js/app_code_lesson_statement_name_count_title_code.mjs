import { arguments_assert } from "./arguments_assert.mjs";
import { js_operator_plus_symbol } from "./js_operator_plus_symbol.mjs";
import { app_code_lesson_statement_name_itself_step_title_code } from "./app_code_lesson_statement_name_itself_step_title_code.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
export function app_code_lesson_statement_name_count_title_code() {
  arguments_assert(arguments, 0);
  ("the lines in the title of the lesson on counting with a name: the line that adds one, said twice");
  let plus = js_operator_plus_symbol();
  let grown = app_code_lesson_statement_name_itself_step_title_code(plus);
  let code = list_join_newline([grown, grown]);
  return code;
}
