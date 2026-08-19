import { app_code_expression_parts_code } from "./app_code_expression_parts_code.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_comparison_operands_wanted } from "./app_code_comparison_operands_wanted.mjs";
import { app_code_arithmetic_to_value_parts } from "./app_code_arithmetic_to_value_parts.mjs";
import { app_code_lesson_expression_choose_order_both_sides_expression_parts } from "./app_code_lesson_expression_choose_order_both_sides_expression_parts.mjs";
import { equal } from "./equal.mjs";
export function app_code_lesson_expression_choose_order_both_sides_expression_generic(
  want_true,
  outer_symbol,
) {
  arguments_assert(arguments, 2);
  ("a line with arithmetic on each side of a given comparison, built as a shape so the quiz can work one operator out at a time: 3 + 4 === 5 + 2, or 10 - 3 < 5 + 4");
  ("Three operators, and the first shape in the track where they are not all of one kind. A learner has pressed three arithmetic operators a step at a time and three comparisons a step at a time; what is new is a line that holds both, where two presses answer with a number and the third answers with a true or a false.");
  ("The comparison is handed in rather than chosen here, because the two lessons built on this differ in that one thing and in nothing else: the first says the shape with === alone so the shape is the only new thing on the screen, and the second says the same shape with any of the other five.");
  ("Both sides are made by the same maker, from a value asked for rather than from numbers drawn and then added up. That is what lets a line hold two sides that look nothing alike and still land where the comparison needs them - which is the one thing a learner cannot read off the writing, and so the one thing worth solving for.");
  ("A side is drawn again while the two sides come out written the same way. Written the same, the line answers itself: a learner who has seen that both sides say 3 + 4 knows the answer without solving either, and the lesson has asked them nothing.");
  let operands = app_code_comparison_operands_wanted(outer_symbol, want_true);
  let left_parts = app_code_arithmetic_to_value_parts(operands.left);
  let left_code = app_code_expression_parts_code(left_parts);
  let right_parts = app_code_arithmetic_to_value_parts(operands.right);
  let right_code = app_code_expression_parts_code(right_parts);
  while (equal(left_code, right_code)) {
    right_parts = app_code_arithmetic_to_value_parts(operands.right);
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
