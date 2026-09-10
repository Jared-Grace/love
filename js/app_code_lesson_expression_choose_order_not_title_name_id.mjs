import { app_code_category_expressions } from "./app_code_category_expressions.mjs";
import { app_code_lesson_name_id_category_then } from "./app_code_lesson_name_id_category_then.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { html_cycle_code } from "./html_cycle_code.mjs";
import { js_operator_bang_symbol } from "./js_operator_bang_symbol.mjs";
export function app_code_lesson_expression_choose_order_not_title_name_id() {
  arguments_assert(arguments, 0);
  ("the home title: solve ! around a comparison , an Expressions lesson");
  ("The title paints the symbol and spells the word, the same way every other lesson about a symbol does: the lesson is about the symbol, and the word is only what the address is written with, where a symbol cannot go.");
  ("Solve and then the very words its all-at-once twin wears, which is how every pair in this course is spelled. It used to read Solve inside ! , which said the new thing - the comparison under the ! has to be worked out before the ! can go - but named the lesson by a phrasing the twin below it could not be reached from by dropping a word.");
  let symbol = js_operator_bang_symbol();
  function paint(parent) {
    html_cycle_code(parent, ["Solve ", symbol, " around a comparison"]);
  }
  let left = app_code_category_expressions();
  let built = app_code_lesson_name_id_category_then(left, paint);
  return built;
}
