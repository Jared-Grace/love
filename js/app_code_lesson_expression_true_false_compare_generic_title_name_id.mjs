import { app_code_lesson_name_id_category_then } from "./app_code_lesson_name_id_category_then.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { js_keyword_true } from "./js_keyword_true.mjs";
import { js_keyword_false } from "./js_keyword_false.mjs";
import { html_cycle_code } from "./html_cycle_code.mjs";
import { app_code_category_expressions } from "./app_code_category_expressions.mjs";
export function app_code_lesson_expression_true_false_compare_generic_title_name_id(
  symbol,
  rights,
) {
  arguments_assert(arguments, 2);
  ("the home title: comparing true and false with this operator, an Expressions lesson");
  function paint(parent) {
    let t = js_keyword_true();
    let f = js_keyword_false();
    html_cycle_code(parent, ["comparing ", t, " and ", f, " with ", symbol]);
  }
  let left = app_code_category_expressions();
  let built = app_code_lesson_name_id_category_then(rights, left, paint);
  return built;
}
