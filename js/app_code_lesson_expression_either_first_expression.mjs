import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_expression_either_first_expression_times_plus } from "./app_code_lesson_expression_either_first_expression_times_plus.mjs";
import { app_code_lesson_expression_either_first_expression_plus_times } from "./app_code_lesson_expression_either_first_expression_plus_times.mjs";
import { list_random_item } from "./list_random_item.mjs";
export function app_code_lesson_expression_either_first_expression() {
  arguments_assert(arguments, 0);
  ("a line of four numbers and three operators on which two operators are ready at once, drawn as one of the two shapes that can do that: 2 * 3 + 4 * 5, or 2 + 3 + 4 * 5");
  ("★ THERE ARE EXACTLY TWO OF THESE SHAPES AND THE LESSON HAS TO DRAW BOTH. Of the eight ways three operators can be laid out by strength, six leave one operator ready at every step and two leave two ready at the first step - a times on each side of a plus, and two pluses followed by a times. This drew only the first of them, every time. A learner who meets the choice only where both ends are times has been handed a reason that happens to hold rather than the one that does: it is the operator in the MIDDLE being the weak one that splits the line in two, and what stands at the ends decides nothing.");
  ("Drawn one at a time rather than one shape per line of the batch, because the lesson hands up a single line and the learner meets several of them in a row. Which one comes next is then a coin rather than a pattern, and a learner cannot answer the second line from the shape of the first.");
  let makers = [
    app_code_lesson_expression_either_first_expression_times_plus,
    app_code_lesson_expression_either_first_expression_plus_times,
  ];
  let make = list_random_item(makers);
  let tree = make();
  return tree;
}
