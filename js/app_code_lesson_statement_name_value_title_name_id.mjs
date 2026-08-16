import { app_code_category_statements } from "./app_code_category_statements.mjs";
import { app_code_lesson_name_id_category_then } from "./app_code_lesson_name_id_category_then.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { html_cycle_code } from "./html_cycle_code.mjs";
export function app_code_lesson_statement_name_value_title_name_id() {
  arguments_assert(arguments, 0);
  ("the home title: giving a value a name, the first Statements lesson");
  let words = "giving a value a name";
  function paint(parent) {
    html_cycle_code(parent, [words]);
  }
  let rights = [words];
  let left = app_code_category_statements();
  let built = app_code_lesson_name_id_category_then(rights, left, paint);
  return built;
}
