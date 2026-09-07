import { arguments_assert } from "./arguments_assert.mjs";
import { js_code_parenthesis_left } from "./js_code_parenthesis_left.mjs";
import { js_code_parenthesis_right } from "./js_code_parenthesis_right.mjs";
import { text_combine } from "./text_combine.mjs";
import { js_operator_and_symbol } from "./js_operator_and_symbol.mjs";
import { js_operator_or_symbol } from "./js_operator_or_symbol.mjs";
import { app_code_operator_shape_parenthesis_first } from "./app_code_operator_shape_parenthesis_first.mjs";
import { html_cycle_code } from "./html_cycle_code.mjs";
import { app_code_category_expressions } from "./app_code_category_expressions.mjs";
import { app_code_lesson_name_id_category_then } from "./app_code_lesson_name_id_category_then.mjs";
export function app_code_lesson_expression_choose_order_parentheses_and_or_title_name_id() {
  arguments_assert(arguments, 0);
  ("the home title: moving ( ) in ( && ) || , an Expressions lesson");
  ("The title paints the shape of the line as well as the pair of marks, because the pair on its own is what the three lessons around this one are about as well. Four titles naming only the marks would be four ways of writing one line, and a learner picking up where they left off would have nothing on the home list to pick from.");
  ("The shape is the one this lesson draws that no other lesson draws. It also draws the shape with the marks at the other end, and so does the lesson two above it - so titled by that one instead, two rows of the list would say the same thing.");
  ("Moving is still the word, because that is what the learner does and the shape only shows one of the two ends. The pair of marks is painted a second time on its own so that the thing being moved and the line it moves along are both on the row.");
  ("The two brackets are painted together as one piece because that is what a learner is looking for on the home list - a pair, not an opening mark on its own.");
  function paint(parent) {
    let left_bracket = js_code_parenthesis_left();
    let right_bracket = js_code_parenthesis_right();
    let pair = text_combine(left_bracket, right_bracket);
    let and_symbol = js_operator_and_symbol();
    let or_symbol = js_operator_or_symbol();
    let shape = app_code_operator_shape_parenthesis_first(
      and_symbol,
      or_symbol,
    );
    html_cycle_code(parent, ["moving ", pair, " in ", shape]);
  }
  let left = app_code_category_expressions();
  let built = app_code_lesson_name_id_category_then(left, paint);
  return built;
}
