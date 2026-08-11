import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_name_id_category } from "./app_code_lesson_name_id_category.mjs";
import { js_code_parenthesis_left } from "./js_code_parenthesis_left.mjs";
import { js_code_parenthesis_right } from "./js_code_parenthesis_right.mjs";
import { html_cycle_code } from "./html_cycle_code.mjs";
import { app_code_category_expressions } from "./app_code_category_expressions.mjs";
import { app_code_lesson_name_id_generic } from "./app_code_lesson_name_id_generic.mjs";
export function app_code_lesson_expression_parentheses_moved_title_name_id() {
  arguments_assert(arguments, 0);
  ("the home title: moving the ( and ), an Expressions lesson. The title names the movement rather than an operator, because the operators never change in this lesson - only where the brackets sit");
  function title_get(lesson_name, left_upper) {
    function render(parent) {
      app_code_lesson_name_id_category(parent, left_upper);
      let open = js_code_parenthesis_left();
      let close = js_code_parenthesis_right();
      html_cycle_code(parent, ["Moving the ", open, " and ", close]);
    }
    return render;
  }
  let rights = ["parentheses moved"];
  let left = app_code_category_expressions();
  let built = app_code_lesson_name_id_generic(rights, left, title_get);
  return built;
}
