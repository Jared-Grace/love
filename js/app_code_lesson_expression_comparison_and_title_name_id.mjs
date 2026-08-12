import { app_code_lesson_name_id_category_then } from "./app_code_lesson_name_id_category_then.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { html_cycle_code } from "./html_cycle_code.mjs";
import { app_code_category_expressions } from "./app_code_category_expressions.mjs";
export function app_code_lesson_expression_comparison_and_title_name_id() {
  arguments_assert(arguments, 0);
  ("the home title: comparison inside &&, an Expressions lesson. The title paints the symbol rather than the word and, because the lesson is about the symbol - the word is only what the URL name is spelled with, where a symbol cannot go");
  function paint(parent) {
    html_cycle_code(parent, ["comparison inside ", "&&"]);
  }
  let rights = ["comparison inside and"];
  let left = app_code_category_expressions();
  let built = app_code_lesson_name_id_category_then(rights, left, paint);
  return built;
}
