import { arguments_assert } from "./arguments_assert.mjs";
import { js_operator_bang_symbol } from "./js_operator_bang_symbol.mjs";
import { text_combine } from "./text_combine.mjs";
import { html_cycle_code } from "./html_cycle_code.mjs";
import { app_code_category_expressions } from "./app_code_category_expressions.mjs";
import { app_code_lesson_name_id_category_then } from "./app_code_lesson_name_id_category_then.mjs";
export function app_code_lesson_expression_choose_order_not_twice_title_name_id() {
  "the home title: solving inside !! , an Expressions lesson";
  "The glyph in the title is the PAIR, not the single symbol, the same way the lesson that reads !! wears the pair. A title wearing one ! would name the lesson about a single ! instead, and the two sit near each other on the home list, which is exactly where that difference has to read.";
  "Solving INSIDE it rather than solving it, because the learner has already met what a ! comes to. What is new is that one of the two has to be worked out before the other can go.";
  arguments_assert(arguments, 0);
  let symbol = js_operator_bang_symbol();
  let both = text_combine(symbol, symbol);
  function paint(parent) {
    html_cycle_code(parent, ["Solving inside ", both]);
  }
  let left = app_code_category_expressions();
  let built = app_code_lesson_name_id_category_then(left, paint);
  return built;
}
