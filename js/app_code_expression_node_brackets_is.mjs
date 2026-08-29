import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_expression_node_is } from "./app_code_expression_node_is.mjs";
import { not } from "./not.mjs";
import { property_get } from "./property_get.mjs";
import { app_code_operator_rank } from "./app_code_operator_rank.mjs";
import { app_code_expression_node_before_is } from "./app_code_expression_node_before_is.mjs";
import { equal } from "./equal.mjs";
import { app_code_expression_side_bracket_is } from "./app_code_expression_side_bracket_is.mjs";
import { add_1 } from "./add_1.mjs";
export function app_code_expression_node_brackets_is(item, node) {
  arguments_assert(arguments, 2);
  ("whether one part of an expression is written inside a pair of parentheses on the line the whole expression prints as: on false && (true || true) the || comes back yes and the && comes back no");
  ("For a telling that wants to point at the marks. A part is gathered because of what stands around it rather than because of anything it holds, so the part on its own cannot be asked - it has to be found on the line it belongs to, and the answer is about that pairing rather than about either one.");
  ("It asks the same question the printer asks, out of the one place the printer asks it, rather than reading the printed line back for a bracket. A second reading could disagree with the line the learner is looking at, and a sentence naming marks that are not there is worse than no sentence.");
  ("The right side is asked one rank higher than the left, which is what the printer does and for the printer's reason: an operator of the same strength on the right is worked out after this one and so has to be gathered.");
  let node_is = app_code_expression_node_is(item);
  if (not(node_is)) {
    let value_side = false;
    return value_side;
  }
  let symbol = property_get(item, "operator");
  let rank = app_code_operator_rank(symbol);
  let right = property_get(item, "right");
  let before_is = app_code_expression_node_before_is(item);
  if (before_is) {
    ("a one-sided operator asks its single side for its own strength, which is what makes !(3 < 5) carry marks and !!true carry none");
    let acted_on_here = equal(right, node);
    if (acted_on_here) {
      let gathered_before = app_code_expression_side_bracket_is(right, rank);
      return gathered_before;
    }
    let inside_before = app_code_expression_node_brackets_is(right, node);
    return inside_before;
  }
  let left = property_get(item, "left");
  let left_here = equal(left, node);
  if (left_here) {
    let gathered_left = app_code_expression_side_bracket_is(left, rank);
    return gathered_left;
  }
  let right_here = equal(right, node);
  if (right_here) {
    let rank_right = add_1(rank);
    let gathered_right = app_code_expression_side_bracket_is(right, rank_right);
    return gathered_right;
  }
  let from_left = app_code_expression_node_brackets_is(left, node);
  if (from_left) {
    return from_left;
  }
  let from_right = app_code_expression_node_brackets_is(right, node);
  return from_right;
}
