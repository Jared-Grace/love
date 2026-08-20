import { app_code_lesson_expression_choose_order_comparison_side } from "./app_code_lesson_expression_choose_order_comparison_side.mjs";
import { app_code_expression_node_not_of_parts } from "./app_code_expression_node_not_of_parts.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { not } from "./not.mjs";
export function app_code_lesson_expression_choose_order_not_expression(
  want_true,
) {
  arguments_assert(arguments, 1);
  ("a whole comparison with a ! in front of it, built as a shape so the quiz can work one part out at a time: !(3 < 5), or !(7 >= 9)");
  ("Two parts rather than three, and the shorter line is the point. Every other lesson in this run puts an operator between two things a learner can already solve; this one puts an operator in front of one, and a learner meets the same rule - a part is ready when nothing is left inside it - in a place where there is only one part it could apply to.");
  ("What the comparison has to come to is the opposite of what the line has to come to, because the ! turns over whatever is under it. So the line is asked for as a true one or a false one exactly like every other, and the one thing it holds is asked for the other way round.");
  let inner_true = not(want_true);
  let parts =
    app_code_lesson_expression_choose_order_comparison_side(inner_true);
  let tree = app_code_expression_node_not_of_parts(parts);
  return tree;
}
