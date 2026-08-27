import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_expression_choose_order_compare_expression } from "./app_code_lesson_expression_choose_order_compare_expression.mjs";
import { app_code_expression_nodes_ready } from "./app_code_expression_nodes_ready.mjs";
import { list_first } from "./list_first.mjs";
import { equal } from "./equal.mjs";
import { property_get } from "./property_get.mjs";
export function app_code_lesson_expression_choose_order_compare_line_apart(
  want_true,
  comparison_left,
) {
  arguments_assert(arguments, 2);
  ("one line of this lesson's own kind, drawn again until the operator that may go first and the operator that may not are different symbols");
  ("About a quarter of draws put === inside === , because the inner operator comes from four symbols and the outer from two of those same four. The two lines of the telling that point at one operator each have nothing but its symbol to point with, so drawn the same they stand one under the other reading we cannot solve the === yet and we must solve the === first, which is a contradiction rather than two parts of one line.");
  ("Only the telling is held to this. The card below may draw the two the same and is none the worse for it: a learner there presses a chip they can see, so the symbol is not what tells the two apart.");
  ("Drawing again, rather than choosing the inner operator to differ, because the line the learner reads must stay one the generator would really produce - and it ends, since half the inner draws are < or > and neither can ever be the outer one.");
  ("Both shapes ask for this, which is why it is a function rather than a loop written into the telling: the shape with the comparison on the left needs the two symbols apart for exactly the same two lines of the same reason.");
  let tree = app_code_lesson_expression_choose_order_compare_expression(
    want_true,
    comparison_left,
  );
  let ready = app_code_expression_nodes_ready(tree);
  let step = list_first(ready);
  while (
    equal(property_get(tree, "operator"), property_get(step, "operator"))
  ) {
    tree = app_code_lesson_expression_choose_order_compare_expression(
      want_true,
      comparison_left,
    );
    ready = app_code_expression_nodes_ready(tree);
    step = list_first(ready);
  }
  return tree;
}
