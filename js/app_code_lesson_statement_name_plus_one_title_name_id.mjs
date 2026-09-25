import { arguments_assert } from "./arguments_assert.mjs";
import { js_operator_plus_symbol } from "./js_operator_plus_symbol.mjs";
import { app_code_lesson_statement_name_one_step_title_name_id } from "./app_code_lesson_statement_name_one_step_title_name_id.mjs";
export function app_code_lesson_statement_name_plus_one_title_name_id() {
  arguments_assert(arguments, 0);
  ("the home title: one more than a name, kept under a new name, followed by the line that does it");
  let plus = js_operator_plus_symbol();
  let built = app_code_lesson_statement_name_one_step_title_name_id(
    "One more than a name",
    plus,
  );
  return built;
}
