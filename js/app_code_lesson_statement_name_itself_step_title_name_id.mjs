import { js_code_binary_spaced_nb } from "./js_code_binary_spaced_nb.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_statement_name_value_name } from "./app_code_lesson_statement_name_value_name.mjs";
import { js_code_assign_statement } from "./js_code_assign_statement.mjs";
import { app_code_lesson_statement_title_name_id } from "./app_code_lesson_statement_title_name_id.mjs";
export function app_code_lesson_statement_name_itself_step_title_name_id(
  words,
  operator,
) {
  arguments_assert(arguments, 2);
  ("the home title of a lesson on stepping a name by one: its words, followed by the line that does it - the name given itself and the operator handed in with a written 1");
  ("The number is written out rather than stood in for. A stand-in would say the line works for any number, which is true and is not what these screens are about - they are about the one number that makes a name count.");
  let name = app_code_lesson_statement_name_value_name();
  let stepped = js_code_binary_spaced_nb(name, operator, 1);
  let code = js_code_assign_statement(name, stepped);
  let built = app_code_lesson_statement_title_name_id(words, code);
  return built;
}
