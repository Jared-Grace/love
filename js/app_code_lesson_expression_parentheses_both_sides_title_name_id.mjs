import { fn_name } from "./fn_name.mjs";
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
    ("the title names what is inside the brackets, which is a comparison - any of ===, !==, < or >, since ",
      fn_name("app_code_comparison_side"),
      " draws from all four. It used to read === / !== inside ( and ) on both sides, which was wrong twice over: those two are the OUTER operator, sitting between the two bracketed groups and never in them, and the two it left out are half the operators the lesson actually shows");
    html_cycle_code(parent, [
      "a comparison inside ",
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
