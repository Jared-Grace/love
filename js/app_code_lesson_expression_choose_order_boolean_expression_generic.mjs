import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_operator_truths_wanted } from "./app_code_operator_truths_wanted.mjs";
import { app_code_lesson_expression_choose_order_comparison_side } from "./app_code_lesson_expression_choose_order_comparison_side.mjs";
import { app_code_expression_parts_code } from "./app_code_expression_parts_code.mjs";
import { app_code_lesson_expression_choose_order_both_sides_expression_parts } from "./app_code_lesson_expression_choose_order_both_sides_expression_parts.mjs";
import { equal } from "./equal.mjs";
export function app_code_lesson_expression_choose_order_boolean_expression_generic(
  want_true,
  outer_symbol,
) {
  arguments_assert(arguments, 2);
  ("a line with a comparison on each side of a given operator that joins truths, built as a shape so the quiz can work one operator out at a time: 3 < 5 && 2 < 4, or 7 >= 2 || 4 !== 4");
  ("The same three-operator shape as the press-both-sides lessons with the two kinds swapped over: there the sides were arithmetic and the middle was a comparison, here the sides are comparisons and the middle joins what they come to. So what carries across is not a rule about arithmetic but the reason underneath it - whatever is stronger is solved first, and two parts of equal strength may go in either order.");
  ("The operator in the middle is handed in rather than chosen here, because the two lessons built on this differ in that one thing and in nothing else. Which pairs of truths reach the answer wanted is asked of the operator itself, so neither lesson has to be told what its own operator means.");
  ("A side is drawn again while the two sides come out written the same way. Written the same, the line answers itself: a learner who has seen that both sides say 3 < 5 knows the second the moment they have solved the first, and half the lesson has asked them nothing.");
  let truths = app_code_operator_truths_wanted(outer_symbol, want_true);
  let left_parts = app_code_lesson_expression_choose_order_comparison_side(
    truths[0],
  );
  let left_code = app_code_expression_parts_code(left_parts);
  let right_parts = app_code_lesson_expression_choose_order_comparison_side(
    truths[1],
  );
  let right_code = app_code_expression_parts_code(right_parts);
  while (equal(left_code, right_code)) {
    right_parts = app_code_lesson_expression_choose_order_comparison_side(
      truths[1],
    );
    right_code = app_code_expression_parts_code(right_parts);
  }
  let tree =
    app_code_lesson_expression_choose_order_both_sides_expression_parts(
      left_parts,
      outer_symbol,
      right_parts,
    );
  return tree;
}
