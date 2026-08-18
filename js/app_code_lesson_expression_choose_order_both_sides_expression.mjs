import { add } from "./add.mjs";
import { app_code_arithmetic_to_value_parts } from "./app_code_arithmetic_to_value_parts.mjs";
import { app_code_expression_code } from "./app_code_expression_code.mjs";
import { app_code_expression_node } from "./app_code_expression_node.mjs";
import { app_code_lesson_expression_choose_order_both_sides_expression_parts } from "./app_code_lesson_expression_choose_order_both_sides_expression_parts.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { equal } from "./equal.mjs";
import { integer_random } from "./integer_random.mjs";
import { js_operator_triple_equal_symbol } from "./js_operator_triple_equal_symbol.mjs";
import { ternary } from "./ternary.mjs";
export function app_code_lesson_expression_choose_order_both_sides_expression(
  want_true,
) {
  arguments_assert(arguments, 1);
  ("a line with arithmetic on each side of a comparison, built as a shape so the quiz can work one operator out at a time: 3 + 4 === 5 + 2, or 10 - 3 === 5 + 4");
  ("Three operators, and the first line in the track where they are not all of one kind. A learner has pressed three arithmetic operators a step at a time and three comparisons a step at a time; the new thing here is a line that holds both, where two presses answer with a number and the third answers with a true or a false.");
  ("The comparison is === alone, because what the line asks is whether the two sides land on the same number, which is the most intuitive both-sides case and the one the lesson after this asks for whole. The other five comparisons on a both-sides line are a later step, not this one.");
  ("Both sides are made by the same maker, from a value asked for rather than from numbers drawn and then added up. That is what lets a true line hold two sides that look nothing alike and still come to the same number - which is the one thing a learner cannot read off the writing, and so the one thing worth solving for.");
  ("A side is drawn again while the two sides come out written the same way. Written the same, the line answers itself: a learner who has seen that both sides say 3 + 4 knows the answer without solving either, and the lesson has asked them nothing.");
  function code_of(parts) {
    "one side written out, which is how two sides are told apart - the numbers alone would call 3 + 4 and 4 + 3 the same side";
    let node = app_code_expression_node(parts.left, parts.symbol, parts.right);
    let code = app_code_expression_code(node);
    return code;
  }
  let value = integer_random(3, 9);
  let bump = integer_random(1, 3);
  let value_other = add(value, bump);
  let right_value = ternary(want_true, value, value_other);
  let left_parts = app_code_arithmetic_to_value_parts(value);
  let left_code = code_of(left_parts);
  let right_parts = app_code_arithmetic_to_value_parts(right_value);
  let right_code = code_of(right_parts);
  while (equal(left_code, right_code)) {
    right_parts = app_code_arithmetic_to_value_parts(right_value);
    right_code = code_of(right_parts);
  }
  let outer_symbol = js_operator_triple_equal_symbol();
  let tree =
    app_code_lesson_expression_choose_order_both_sides_expression_parts(
      left_parts,
      outer_symbol,
      right_parts,
    );
  return tree;
}
