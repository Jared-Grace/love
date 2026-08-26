import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_expression_choose_order_solve } from "./app_code_lesson_expression_choose_order_solve.mjs";
import { app_code_lesson_expression_choose_order } from "./app_code_lesson_expression_choose_order.mjs";
import { app_code_lesson_expression_remainder_divide_solve } from "./app_code_lesson_expression_remainder_divide_solve.mjs";
import { app_code_lesson_functions_arithmetic } from "./app_code_lesson_functions_arithmetic.mjs";
export function app_code_review_preview_lessons_under_test() {
  arguments_assert(arguments, 0);
  ("the handful of lessons the sandbox's review preview opens on: the ones whose screens have just been changed and are waiting to be looked at");
  ("Lessons rather than lesson ids, because a lesson is a function this file imports and an id is a word typed out. A name renamed away stops the build; a word renamed away draws a button that throws when it is pressed, and the person pressing it is the one person who cannot tell whether the fault is the button or the thing they were asked to look at.");
  ("IT IS MEANT TO BE EDITED. What is waiting to be looked at changes every time something is changed, so a list left alone is a list of what mattered when it was written. Nothing here is a judgment about which lessons are important - the whole run of them is one button away on the page itself, and this is only the short way in.");
  ("Four names and not fourteen. The list is worth having exactly as long as it is shorter than the run it stands in front of; asked to hold everything anyone might want, it becomes the thing it was made to avoid.");
  let fns = [
    app_code_lesson_expression_choose_order_solve,
    app_code_lesson_expression_choose_order,
    app_code_lesson_expression_remainder_divide_solve,
    app_code_lesson_functions_arithmetic,
  ];
  return fns;
}
