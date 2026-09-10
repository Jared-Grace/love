import { js_operator_and_symbol } from "./js_operator_and_symbol.mjs";
import { js_operator_or_symbol } from "./js_operator_or_symbol.mjs";
import { app_code_category_expressions } from "./app_code_category_expressions.mjs";
import { app_code_lesson_name_id_category_then } from "./app_code_lesson_name_id_category_then.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { html_cycle_code } from "./html_cycle_code.mjs";
import { js_operator_bang_symbol } from "./js_operator_bang_symbol.mjs";
export function app_code_lesson_expression_choose_order_not_pair_title_name_id() {
  arguments_assert(arguments, 0);
  ("the home title: solving inside !( ), an Expressions lesson");
  ("The title paints the marks and spells the words, the same way every other lesson about a symbol does: the lesson is about the marks, and the words are only what the address is written with, where a symbol cannot go.");
  ("The three are painted as one piece because that is the shape a learner is looking for on the home list - a ! with a parenthesised thing after it, which is the whole of what this lesson's lines look like. The two lessons it stands under paint one half of it each, so the three sit together and the difference between them reads off the marks.");
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
