import { arguments_assert } from "./arguments_assert.mjs";
import { html_cycle_code } from "./html_cycle_code.mjs";
import { app_code_category_expressions } from "./app_code_category_expressions.mjs";
import { app_code_lesson_name_id_category_then } from "./app_code_lesson_name_id_category_then.mjs";
export function app_code_lesson_expression_choose_order_three_title_name_id() {
  arguments_assert(arguments, 0);
  ("the home title: a three step line where the operator that goes first has to be looked for rather than read off the left, an Expressions lesson");
  ("The title asks which one rather than naming the length, because the length is no longer what changed. The lesson before this one is also three steps long, and every operator on it is the same strength, so the learner starts at the left without looking. Here the one that is ready can be anywhere on the line, so finding it is the work.");
  ("It asks the question instead of naming the operators, because naming them would be wrong on some of its own lines. The line maker guarantees a * or a / is present, not that a * or a / is what decides - about a line in eleven comes out with every operator the same strength, and those are solved from the left like the lesson before. A title reading * or / first would tell a learner those lines were picked by strength when they were picked by position.");
  ("The question form is already in the course: the which-part-first lesson is titled as a question with an example beside it. So this is the second of its kind rather than a shape a learner has to take in.");
  function paint(parent) {
    html_cycle_code(parent, ["Three steps, which is solved first"]);
  }
  let left = app_code_category_expressions();
  let built = app_code_lesson_name_id_category_then(left, paint);
  return built;
}
