import { arguments_assert } from "./arguments_assert.mjs";
import { js_operator_and_symbol } from "./js_operator_and_symbol.mjs";
import { js_operator_or_symbol } from "./js_operator_or_symbol.mjs";
import { app_code_operator_shape_parenthesis_first } from "./app_code_operator_shape_parenthesis_first.mjs";
import { html_cycle_code } from "./html_cycle_code.mjs";
import { app_code_category_expressions } from "./app_code_category_expressions.mjs";
import { app_code_lesson_name_id_category_then } from "./app_code_lesson_name_id_category_then.mjs";
export function app_code_lesson_expression_choose_order_parentheses_and_or_title_name_id() {
  arguments_assert(arguments, 0);
  ("the home title: solve ( && ) || , an Expressions lesson");
  ("The title paints the shape of the line, because the pair on its own is what the three lessons around this one are about as well. Four titles naming only the marks would be four ways of writing one line, and a learner picking up where they left off would have nothing on the home list to pick from.");
  ("The shape is the one this lesson draws that no other lesson draws. It also draws the shape with the marks at the other end, and so does the lesson two above it - so titled by that one instead, two rows of the list would say the same thing.");
  ("Moving used to be the word, because that is what the learner does and the shape only shows one of the two ends. It came out when the course settled that a pressing lesson is titled Solve and then whatever its all-at-once twin is titled: a word standing between Solve and the shape would have put this pair alone out of step with every other pair on the list, and the moving is on the screen the moment the lesson opens.");
  ("The shape carries its own parentheses as one piece, so the pair a learner is looking for on the home list is there without being painted a second time on its own.");
  function paint(parent) {
    let and_symbol = js_operator_and_symbol();
    let or_symbol = js_operator_or_symbol();
    let shape = app_code_operator_shape_parenthesis_first(
      and_symbol,
      or_symbol,
    );
    html_cycle_code(parent, ["Solve ", shape]);
  }
  let left = app_code_category_expressions();
  let built = app_code_lesson_name_id_category_then(left, paint);
  return built;
}
