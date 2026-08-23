import { arguments_assert } from "./arguments_assert.mjs";
import { html_cycle_code } from "./html_cycle_code.mjs";
import { text_combine } from "./text_combine.mjs";
import { js_code_parenthesis_left } from "./js_code_parenthesis_left.mjs";
import { js_code_parenthesis_right } from "./js_code_parenthesis_right.mjs";
import { app_code_category_expressions } from "./app_code_category_expressions.mjs";
import { app_code_lesson_name_id_category_then } from "./app_code_lesson_name_id_category_then.mjs";
export function app_code_lesson_expression_choose_order_brackets_title_name_id() {
  arguments_assert(arguments, 0);
  ("the home title: solving inside ( ), an Expressions lesson");
  ("The title paints the pair of symbols and spells the word brackets, the same way every other lesson about a symbol does: the lesson is about the symbols, and the word is only what the address is written with, where a symbol cannot go.");
  ("The two are painted together as one piece because that is what a learner is looking for on the home list - a pair, not an opening mark on its own.");
  function paint(parent) {
    let left_bracket = js_code_parenthesis_left();
    let right_bracket = js_code_parenthesis_right();
    let pair = text_combine(left_bracket, right_bracket);
    html_cycle_code(parent, ["solving inside ", pair]);
  }
  let rights = ["brackets inside"];
  let left = app_code_category_expressions();
  let built = app_code_lesson_name_id_category_then(rights, left, paint);
  return built;
}
