import { arguments_assert } from "./arguments_assert.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { app_code_lesson_name_id_operators } from "./app_code_lesson_name_id_operators.mjs";
export function app_code_lesson_expression_choose_order_remainder_title_name_id() {
  arguments_assert(arguments, 0);
  ("the home title: solving the remainder formula one part at a time, an Operators lesson");
  ("It says step by step, which is how every title in this course names a lesson that asks for one press at a time. The lesson straight after it is called Solve the remainder formula and asks the same line all at once, so the two rows of the home list differ by what the learner is asked to do rather than by what the line is.");
  ("It stands under the same heading as the lesson it presses apart, rather than under the one the other pressing lessons stand under, so the pair sits together in the list a learner scrolls.");
  function paint(parent) {
    html_span_text(parent, "Solve the remainder step by step");
  }
  let built = app_code_lesson_name_id_operators(paint);
  return built;
}
