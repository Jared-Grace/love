import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_expression_comparison_and_and_operands_false } from "./app_code_lesson_expression_comparison_and_and_operands_false.mjs";
import { ternary } from "./ternary.mjs";
import { app_code_lesson_expression_choose_order_and_side } from "./app_code_lesson_expression_choose_order_and_side.mjs";
import { app_code_expression_parts_code } from "./app_code_expression_parts_code.mjs";
import { js_operator_and_symbol } from "./js_operator_and_symbol.mjs";
import { app_code_lesson_expression_choose_order_both_sides_expression_parts } from "./app_code_lesson_expression_choose_order_both_sides_expression_parts.mjs";
import { equal } from "./equal.mjs";
export function app_code_lesson_expression_choose_order_and_expression(
  want_true,
) {
  arguments_assert(arguments, 1);
  ("a line with a comparison on each side of &&, built as a shape so the quiz can work one operator out at a time: 3 < 5 && 2 < 4, or 7 >= 2 && 4 !== 4");
  ("The same three-operator shape the learner has just pressed their way through, with the two kinds swapped over: there the sides were arithmetic and the middle was a comparison, here the sides are comparisons and the middle is the &&. So what carries across is not a rule about arithmetic but the reason underneath it - whatever is stronger is solved first, and two parts of equal strength may go in either order.");
  ("Which of true and false each side has to come to is worked out from the answer wanted for the whole line. A true line needs both sides true, and there is only one way to have that; a false line has three, and one of them is drawn, so a learner cannot learn to read the answer off which side looks doubtful.");
  ("A side is drawn again while the two sides come out written the same way. Written the same, the line answers itself: a learner who has seen that both sides say 3 < 5 knows the second the moment they have solved the first, and half the lesson has asked them nothing.");
  let on_false = app_code_lesson_expression_comparison_and_and_operands_false();
  let truths = ternary(want_true, [true, true], on_false);
  let left_parts = app_code_lesson_expression_choose_order_and_side(truths[0]);
  let left_code = app_code_expression_parts_code(left_parts);
  let right_parts = app_code_lesson_expression_choose_order_and_side(truths[1]);
  let right_code = app_code_expression_parts_code(right_parts);
  while (equal(left_code, right_code)) {
    right_parts = app_code_lesson_expression_choose_order_and_side(truths[1]);
    right_code = app_code_expression_parts_code(right_parts);
  }
  let outer_symbol = js_operator_and_symbol();
  let tree =
    app_code_lesson_expression_choose_order_both_sides_expression_parts(
      left_parts,
      outer_symbol,
      right_parts,
    );
  return tree;
}
