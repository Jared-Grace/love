import { arguments_assert } from "./arguments_assert.mjs";
import { js_operator_or_symbol } from "./js_operator_or_symbol.mjs";
import { js_operator_and_symbol } from "./js_operator_and_symbol.mjs";
import { app_code_operator_shape_parenthesis_first } from "./app_code_operator_shape_parenthesis_first.mjs";
import { html_cycle_code } from "./html_cycle_code.mjs";
import { app_code_category_expressions } from "./app_code_category_expressions.mjs";
import { app_code_lesson_name_id_category_then } from "./app_code_lesson_name_id_category_then.mjs";
export function app_code_lesson_expression_parentheses_or_title_name_id() {
  arguments_assert(arguments, 0);
  ("the home title: ( || ) && , an Expressions lesson");
  ("The title paints the shape of the line rather than the pair of marks on its own, because the pair on its own is what the three lessons around this one are about as well. Four titles naming only the marks would be four ways of writing one line, and a learner picking up where they left off would have nothing on the home list to pick from.");
  ("It carries the same shape as the pressing lesson it is the twin of, because the two draw the very same lines - the shape is what says which pair of lessons this is, and the words are what say which of the pair.");
  ("It carries no words at all, and that is what says which of the pair it is: the twin walks the line a mark at a time and wears Solve in front of the shape, and this one shows the line and asks what it comes to.");
  function paint(parent) {
    let or_symbol = js_operator_or_symbol();
    let and_symbol = js_operator_and_symbol();
    let shape = app_code_operator_shape_parenthesis_first(
      or_symbol,
      and_symbol,
    );
    html_cycle_code(parent, ["", shape]);
  }
  let left = app_code_category_expressions();
  let built = app_code_lesson_name_id_category_then(left, paint);
  return built;
}
