import { arguments_assert } from "./arguments_assert.mjs";
import { js_operator_or_symbol } from "./js_operator_or_symbol.mjs";
import { js_operator_and_symbol } from "./js_operator_and_symbol.mjs";
import { app_code_operator_shape_parenthesis_first } from "./app_code_operator_shape_parenthesis_first.mjs";
import { html_cycle_code } from "./html_cycle_code.mjs";
import { app_code_category_expressions } from "./app_code_category_expressions.mjs";
import { app_code_lesson_name_id_category_then } from "./app_code_lesson_name_id_category_then.mjs";
export function app_code_lesson_expression_choose_order_brackets_title_name_id() {
  arguments_assert(arguments, 0);
  ("the home title: solving inside ( || ) && , an Expressions lesson");
  ("The title paints the shape of the line rather than the pair of marks on its own, because the pair on its own is what the three lessons around this one are about as well. Four titles naming only the marks would be four ways of writing one line, and a learner picking up where they left off would have nothing on the home list to pick from.");
  ("The shape is the one this lesson draws that no other lesson draws. It also draws the shape with the marks on the other side, and so does the lesson two below it - so titled by that one instead, two rows of the list would say the same thing.");
  ("What is done with the marks stays in the words, because the shape cannot tell this lesson from its twin: the twin draws the very same lines and asks a different question about them.");
  function paint(parent) {
    let or_symbol = js_operator_or_symbol();
    let and_symbol = js_operator_and_symbol();
    let shape = app_code_operator_shape_parenthesis_first(
      or_symbol,
      and_symbol,
    );
    html_cycle_code(parent, ["solving inside ", shape]);
  }
  let left = app_code_category_expressions();
  let built = app_code_lesson_name_id_category_then(left, paint);
  return built;
}
