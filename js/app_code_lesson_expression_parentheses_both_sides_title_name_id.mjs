import { app_code_lesson_name_id_category_then } from "./app_code_lesson_name_id_category_then.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { js_code_parenthesis_left } from "./js_code_parenthesis_left.mjs";
import { js_code_parenthesis_right } from "./js_code_parenthesis_right.mjs";
import { html_cycle_code } from "./html_cycle_code.mjs";
import { app_code_category_expressions } from "./app_code_category_expressions.mjs";
export function app_code_lesson_expression_parentheses_both_sides_title_name_id() {
  arguments_assert(arguments, 0);
  ("the home title: a comparison inside ( and ) on both sides, an Expressions lesson");
  function paint(parent) {
    let open = js_code_parenthesis_left();
    let close = js_code_parenthesis_right();
    html_cycle_code(parent, [
      "",
      "===",
      " / ",
      "!==",
      " inside ",
      open,
      " and ",
      close,
      " on both sides",
    ]);
  }
  let rights = ["parentheses both sides"];
  let left = app_code_category_expressions();
  let built = app_code_lesson_name_id_category_then(rights, left, paint);
  return built;
}
