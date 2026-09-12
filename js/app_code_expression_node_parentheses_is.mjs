import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_expression_node_is } from "./app_code_expression_node_is.mjs";
import { not } from "./not.mjs";
import { property_get } from "./property_get.mjs";
import { app_code_expression_node_before_is } from "./app_code_expression_node_before_is.mjs";
import { equal } from "./equal.mjs";
import { app_code_operator_called_is } from "./app_code_operator_called_is.mjs";
import { app_code_operator_rank } from "./app_code_operator_rank.mjs";
import { app_code_expression_side_parenthesis_is } from "./app_code_expression_side_parenthesis_is.mjs";
import { app_code_operator_rank_least_left } from "./app_code_operator_rank_least_left.mjs";
import { app_code_operator_rank_least_right } from "./app_code_operator_rank_least_right.mjs";
export function app_code_expression_node_parentheses_is(item, node) {
  arguments_assert(arguments, 2);
  ("whether one part of an expression is written inside a pair of parentheses on the line the whole expression prints as: on false && (true || true) the || comes back yes and the && comes back no");
  ("For a telling that wants to point at the marks. A part is gathered because of what stands around it rather than because of anything it holds, so the part on its own cannot be asked - it has to be found on the line it belongs to, and the answer is about that pairing rather than about either one.");
  ("It asks the same question the printer asks, out of the one place the printer asks it, rather than reading the printed line back for a parenthesis. A second reading could disagree with the line the learner is looking at, and a sentence naming marks that are not there is worse than no sentence.");
  ("The two sides do not ask for the same strength, and which of them asks for more is the printer's own rule read out of the printer's own place: the side an operator works out LAST is the one that has to be gathered.");
  let node_is = app_code_expression_node_is(item);
  if (not(node_is)) {
    let value_side = false;
    return value_side;
  }
  let symbol = property_get(item, "operator");
  let right = property_get(item, "right");
  let before_is = app_code_expression_node_before_is(item);
  if (before_is) {
    ("a one-sided operator asks its single side for its own strength, which is what makes !(3 < 5) carry marks and !!true carry none");
    let acted_on_here = equal(right, node);
    if (acted_on_here) {
      ("an operator spelled as a name with brackets always shows them, so whatever is inside one is inside a pair whatever its own strength - this is the same answer the printer gives, read out of the same list");
      let called = app_code_operator_called_is(symbol);
      if (called) {
        return called;
      }
      let rank = app_code_operator_rank(symbol);
      let gathered_before = app_code_expression_side_parenthesis_is(
        right,
        rank,
      );
      return gathered_before;
    }
    let inside_before = app_code_expression_node_parentheses_is(right, node);
    return inside_before;
  }
  let left = property_get(item, "left");
  let left_here = equal(left, node);
  if (left_here) {
    let rank_left = app_code_operator_rank_least_left(symbol);
    let gathered_left = app_code_expression_side_parenthesis_is(
      left,
      rank_left,
    );
    return gathered_left;
  }
  let right_here = equal(right, node);
  if (right_here) {
    let rank_right = app_code_operator_rank_least_right(symbol);
    let gathered_right = app_code_expression_side_parenthesis_is(
      right,
      rank_right,
    );
    return gathered_right;
  }
  let from_left = app_code_expression_node_parentheses_is(left, node);
  if (from_left) {
    return from_left;
  }
  let from_right = app_code_expression_node_parentheses_is(right, node);
  return from_right;
}
