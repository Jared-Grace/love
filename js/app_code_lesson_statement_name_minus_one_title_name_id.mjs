import { arguments_assert } from "./arguments_assert.mjs";
import { js_operator_minus_symbol } from "./js_operator_minus_symbol.mjs";
import { app_code_lesson_statement_name_one_step_title_name_id } from "./app_code_lesson_statement_name_one_step_title_name_id.mjs";
export function app_code_lesson_statement_name_minus_one_title_name_id() {
  arguments_assert(arguments, 0);
  ("the home title: one less than a name, kept under a new name, followed by the line that does it");
  let minus = js_operator_minus_symbol();
  let built = app_code_lesson_statement_name_one_step_title_name_id(
    "One less than a name",
    minus,
  );
  return built;
}
