import { app_code_category_expressions } from "./app_code_category_expressions.mjs";
import { app_code_lesson_name_id_category_then } from "./app_code_lesson_name_id_category_then.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { html_cycle_code } from "./html_cycle_code.mjs";
import { js_operator_or_symbol } from "./js_operator_or_symbol.mjs";
export function app_code_lesson_expression_comparison_or_title_name_id() {
  arguments_assert(arguments, 0);
  ("the home title: comparison inside ||, an Expressions lesson");
  ("The title paints the symbol and spells the word, the same way every other || lesson does: the lesson is about the symbol, and the word is only what the address is written with, where a symbol cannot go.");
  ("It is worded in the very words of the && one, with the symbol changed, because that is what it is the twin of. A learner reading the home list should be able to see the two of them as one pair rather than as two lessons that happen to be near each other.");
  let symbol = js_operator_or_symbol();
  function paint(parent) {
    html_cycle_code(parent, ["comparison inside ", symbol]);
  }
  let rights = ["comparison inside or"];
  let left = app_code_category_expressions();
  let built = app_code_lesson_name_id_category_then(rights, left, paint);
  return built;
}
