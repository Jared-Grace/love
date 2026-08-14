import { app_code_lesson_name_id_category_then } from "./app_code_lesson_name_id_category_then.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { html_cycle_code } from "./html_cycle_code.mjs";
import { app_code_category_expressions } from "./app_code_category_expressions.mjs";
import { js_operator_bang } from "./js_operator_bang.mjs";
import { property_get } from "./property_get.mjs";
export function app_code_lesson_expression_not_comparison_title_name_id() {
  arguments_assert(arguments, 0);
  ("the home title: ! around a comparison, an Expressions lesson. The title paints the symbol rather than the word not, because the lesson is about the symbol - the word is only what the URL name is spelled with, where a symbol cannot go");
  let operator = js_operator_bang();
  let symbol = property_get(operator, "operator");
  function paint(parent) {
    html_cycle_code(parent, ["", symbol, " around a comparison"]);
  }
  let rights = ["not around a comparison"];
  let left = app_code_category_expressions();
  let built = app_code_lesson_name_id_category_then(rights, left, paint);
  return built;
}
