import { arguments_assert } from "./arguments_assert.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { app_code_lesson_name_id_operators } from "./app_code_lesson_name_id_operators.mjs";
export function app_code_lesson_expression_choose_order_integer_division_title_name_id() {
  arguments_assert(arguments, 0);
  ("the home title: solving an integer division one part at a time, an Operators lesson");
  ("It says step by step, which is how every title in this course names a lesson that asks for one press at a time. The lesson straight in front of it is called Integer division and asks the same line all at once, so the two rows of the home list say the same thing about the same line and differ by what the learner is asked to do with it.");
  ("It stands under the same heading as the lesson it presses apart, rather than under the one the other pressing lessons stand under, so the pair sits together in the list a learner scrolls.");
  function paint(parent) {
    html_span_text(parent, "Solve integer division step by step");
  }
  let built = app_code_lesson_name_id_operators(paint);
  return built;
}
