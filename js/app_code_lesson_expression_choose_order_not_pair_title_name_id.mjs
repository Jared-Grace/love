import { js_operator_and_symbol } from "./js_operator_and_symbol.mjs";
import { js_operator_or_symbol } from "./js_operator_or_symbol.mjs";
import { app_code_category_expressions } from "./app_code_category_expressions.mjs";
import { app_code_lesson_name_id_category_then } from "./app_code_lesson_name_id_category_then.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { html_cycle_code } from "./html_cycle_code.mjs";
import { js_operator_bang_symbol } from "./js_operator_bang_symbol.mjs";
export function app_code_lesson_expression_choose_order_not_pair_title_name_id() {
  arguments_assert(arguments, 0);
  ("the home title: solve ! around && or ||, an Expressions lesson");
  ("The title paints the marks and spells the words, the same way every other lesson about a symbol does: the lesson is about the marks, and the words are only what the address is written with, where a symbol cannot go.");
  ("It wears Solve and then the very words its all-at-once twin wears, which is how every pair in this course is spelled. It used to paint the marks !( ) as one piece; the words name what is inside them instead, so the three ! lessons read as one frame with the thing inside changed - ! around another !, ! around a comparison, ! around && or ||.");
  function paint(parent) {
    let symbol = js_operator_bang_symbol();
    let and_symbol = js_operator_and_symbol();
    let or_symbol = js_operator_or_symbol();
    html_cycle_code(parent, [
      "Solve ",
      symbol,
      " around ",
      and_symbol,
      " or ",
      or_symbol,
    ]);
  }
  let left = app_code_category_expressions();
  let built = app_code_lesson_name_id_category_then(left, paint);
  return built;
}
