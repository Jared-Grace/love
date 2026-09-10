import { arguments_assert } from "./arguments_assert.mjs";
import { js_operator_bang_symbol } from "./js_operator_bang_symbol.mjs";
import { html_cycle_code } from "./html_cycle_code.mjs";
import { app_code_category_expressions } from "./app_code_category_expressions.mjs";
import { app_code_lesson_name_id_category_then } from "./app_code_lesson_name_id_category_then.mjs";
export function app_code_lesson_expression_choose_order_not_twice_title_name_id() {
  "the home title: solve ! around another ! , an Expressions lesson";
  "The mark is painted twice, with the words around it saying which is which, the same way the lesson that reads it does. The three ! lessons of this run are one frame with the thing inside changed - ! around another !, ! around a comparison, ! around && or || - and they sit near each other on the home list, which is exactly where that difference has to read.";
  "Solve and then the very words its all-at-once twin wears, which is how every pair in this course is spelled. It used to read Solve inside !! - true of the lesson, but a phrasing no other pair used, so the twin below it could not simply drop a word to be named.";
  arguments_assert(arguments, 0);
  let symbol = js_operator_bang_symbol();
  function paint(parent) {
    html_cycle_code(parent, ["Solve ", symbol, " around another ", symbol]);
  }
  let left = app_code_category_expressions();
  let built = app_code_lesson_name_id_category_then(left, paint);
  return built;
}
