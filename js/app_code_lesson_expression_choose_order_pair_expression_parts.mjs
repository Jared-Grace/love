import { app_code_expression_node_right_operator_first_bracketed } from "./app_code_expression_node_right_operator_first_bracketed.mjs";
import { app_code_expression_node_bracketed } from "./app_code_expression_node_bracketed.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
export function app_code_lesson_expression_choose_order_pair_expression_parts(
  first_number,
  left_symbol,
  second_number,
  outer_symbol,
  third_number,
  right_symbol,
  fourth_number,
) {
  arguments_assert(arguments, 7);
  ("four given numbers and three given operators built into two comparisons compared against each other, with both pairs of brackets written: (3 === 5) === (5 === 3)");
  ("The pieces are handed in and nothing here decides anything, because the same shape is arrived at two ways - built fresh for a new question, and read back off a line printed earlier. A builder that drew its own numbers could only serve the first.");
  ("Both pairs of brackets are WRITTEN rather than left to be worked out. The two comparisons and the one between them are all the same strength, so a line printed without them would come out as 3 === 5 === (5 === 3) - true of how JS reads it, and the wrong thing to show a learner who is being asked which of two equals may go first. Written brackets say the two sides are the same as each other, which is the whole shape of this lesson.");
  ("The parameters are named for where they stand on the line rather than for what they do, and they are taken in the order the line is read in, so a call site is checked by reading it against the line it builds.");
  let left = app_code_expression_node_bracketed(
    first_number,
    left_symbol,
    second_number,
  );
  let tree = app_code_expression_node_right_operator_first_bracketed(
    left,
    outer_symbol,
    third_number,
    right_symbol,
    fourth_number,
  );
  return tree;
}
