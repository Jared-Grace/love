import { arguments_assert } from "./arguments_assert.mjs";
import { html_cycle_code } from "./html_cycle_code.mjs";
import { app_code_category_expressions } from "./app_code_category_expressions.mjs";
import { app_code_lesson_name_id_category_then } from "./app_code_lesson_name_id_category_then.mjs";
export function app_code_lesson_expression_choose_order_same_strength_title_name_id() {
  arguments_assert(arguments, 0);
  ("the home title: solving a line of three steps where the order is settled by position alone, an Expressions lesson");
  ("The title says left to right rather than naming the length alone, because the length is not the only thing a learner can read off this lesson - what makes it easier than the one after it is that nothing on the line ever jumps the queue.");
  ("Left to right is the wording the walk above the card already uses, word for word, when it says why a step is the one that may go. A title that named the same fact a second way would be two names for one thing at the two places a learner meets it.");
  ("It opens with a verb telling the learner what to do rather than naming the thing they will see. The Expressions titles either side of it are built the other way round - solving both sides step by step, comparing a comparison, swapping + and * - so this is the first of its shape here, and a second one is owed to it if the shape is worth keeping.");
  function paint(parent) {
    html_cycle_code(parent, ["Solve three steps left to right"]);
  }
  let left = app_code_category_expressions();
  let built = app_code_lesson_name_id_category_then(left, paint);
  return built;
}
