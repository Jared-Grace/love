import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_name_id_category } from "./app_code_lesson_name_id_category.mjs";
import { js_keyword_true } from "./js_keyword_true.mjs";
import { js_keyword_false } from "./js_keyword_false.mjs";
import { html_cycle_code } from "./html_cycle_code.mjs";
import { app_code_category_expressions } from "./app_code_category_expressions.mjs";
import { app_code_lesson_name_id_generic } from "./app_code_lesson_name_id_generic.mjs";
export function app_code_lesson_expression_true_false_compare_generic_title_name_id(
  symbol,
  rights,
) {
  arguments_assert(arguments, 2);
  ("the home title: comparing true and false with this operator, an Expressions lesson");
  function title_get(lesson_name, left_upper) {
    function render(parent) {
      app_code_lesson_name_id_category(parent, left_upper);
      let t = js_keyword_true();
      let f = js_keyword_false();
      html_cycle_code(parent, ["comparing ", t, " and ", f, " with ", symbol]);
    }
    return render;
  }
  let left = app_code_category_expressions();
  let built = app_code_lesson_name_id_generic(rights, left, title_get);
  return built;
}
