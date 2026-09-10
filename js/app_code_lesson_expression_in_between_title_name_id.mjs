import { app_code_lesson_expression_in_between_range_code } from "./app_code_lesson_expression_in_between_range_code.mjs";
import { html_cycle_code } from "./html_cycle_code.mjs";
import { app_code_lesson_name_id_category_then } from "./app_code_lesson_name_id_category_then.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_category_expressions } from "./app_code_category_expressions.mjs";
export function app_code_lesson_expression_in_between_title_name_id() {
  arguments_assert(arguments, 0);
  ("the home title: in between, an Expressions lesson, shown with the one shape it drills");
  ("The words alone named what the lesson is for and showed nothing of what a line looks like. Every line this lesson hands out is the same shape - two < signs with the middle number written twice - and the home list is read to find a lesson again rather than to meet it, so the shape is worth showing.");
  ("The line is built by the same maker the quiz lines are built by, so the title cannot come to promise a shape the quiz does not hand out.");
  ("The numbers are the ones the card above the quiz already works. 1 < 2 && 2 < 3 was proposed and is not used: it stands 1 below 3 in an inequality, and this course keeps that comparison out of authored examples.");
  function paint(parent) {
    let code = app_code_lesson_expression_in_between_range_code(2, 5, 8);
    html_cycle_code(parent, ["In between ", code]);
  }
  let left = app_code_category_expressions();
  let built = app_code_lesson_name_id_category_then(left, paint);
  return built;
}
