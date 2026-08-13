import { app_code_category_expressions } from "./app_code_category_expressions.mjs";
import { app_code_lesson_name_id_category_then } from "./app_code_lesson_name_id_category_then.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { html_cycle_code } from "./html_cycle_code.mjs";
import { js_operator_asterisk_symbol } from "./js_operator_asterisk_symbol.mjs";
import { js_operator_plus_symbol } from "./js_operator_plus_symbol.mjs";
export function app_code_lesson_expression_which_part_first_title_name_id() {
  arguments_assert(arguments, 0);
  ("the home title: which part is solved first, like * before +, an Expressions lesson");
  function paint(parent) {
    let times = js_operator_asterisk_symbol();
    let plus = js_operator_plus_symbol();
    html_cycle_code(parent, [
      "which part is solved first, like ",
      times,
      " before ",
      plus,
    ]);
  }
  let rights = ["which part is solved first"];
  let left = app_code_category_expressions();
  let built = app_code_lesson_name_id_category_then(rights, left, paint);
  return built;
}
