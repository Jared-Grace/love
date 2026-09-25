import { arguments_assert } from "./arguments_assert.mjs";
import { js_operator_minus_symbol } from "./js_operator_minus_symbol.mjs";
import { app_code_lesson_statement_name_itself_step_title_name_id } from "./app_code_lesson_statement_name_itself_step_title_name_id.mjs";
export function app_code_lesson_statement_name_one_less_title_name_id() {
  arguments_assert(arguments, 0);
  let minus = js_operator_minus_symbol();
  let built = app_code_lesson_statement_name_itself_step_title_name_id(
    "Taking one from a name",
    minus,
  );
  return built;
}
