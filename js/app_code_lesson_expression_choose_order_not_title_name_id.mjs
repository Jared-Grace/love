import { app_code_category_expressions } from "./app_code_category_expressions.mjs";
import { app_code_lesson_name_id_category_then } from "./app_code_lesson_name_id_category_then.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { html_cycle_code } from "./html_cycle_code.mjs";
import { js_operator_bang_symbol } from "./js_operator_bang_symbol.mjs";
export function app_code_lesson_expression_choose_order_not_title_name_id() {
  arguments_assert(arguments, 0);
  ("the home title: solving inside ! , an Expressions lesson");
  ("The title paints the symbol and spells the word, the same way every other lesson about a symbol does: the lesson is about the symbol, and the word is only what the address is written with, where a symbol cannot go.");
  ("Solving INSIDE it rather than solving it, because the learner has already met what a ! comes to. What is new is that the thing under it has to be worked out before the ! itself can go.");
  let symbol = js_operator_bang_symbol();
  function paint(parent) {
    html_cycle_code(parent, ["solving inside ", symbol]);
  }
  let rights = ["solving inside not"];
  let left = app_code_category_expressions();
  let built = app_code_lesson_name_id_category_then(rights, left, paint);
  return built;
}
