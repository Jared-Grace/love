import { app_code_expression_node } from "./app_code_expression_node.mjs";
import { app_code_expression_node_is } from "./app_code_expression_node_is.mjs";
import { app_code_operator_solve } from "./app_code_operator_solve.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
import { property_get } from "./property_get.mjs";
export function app_code_expression_solved(item, node) {
  arguments_assert(arguments, 2);
  ("the same expression with one of its operators worked out and standing there as its value - the step a learner sees after picking that operator: picking the * in 1 + 2 * 3 gives back 1 + 6");
  ("One step, not the answer. A learner who is shown the whole line collapse at once has watched something happen; a learner who picks and is answered, and then picks again, has done every step of it, and the step they get wrong is the one thing they did not know.");
  let same = equal(item, node);
  if (same) {
    let left_of_node = property_get(node, "left");
    let symbol_of_node = property_get(node, "operator");
    let right_of_node = property_get(node, "right");
    let value = app_code_operator_solve(
      left_of_node,
      symbol_of_node,
      right_of_node,
    );
    return value;
  }
  let node_is = app_code_expression_node_is(item);
  if (not(node_is)) {
    return item;
  }
  let left = property_get(item, "left");
  let left_new = app_code_expression_solved(left, node);
  let right = property_get(item, "right");
  let right_new = app_code_expression_solved(right, node);
  let symbol = property_get(item, "operator");
  let built = app_code_expression_node(left_new, symbol, right_new);
  return built;
}
