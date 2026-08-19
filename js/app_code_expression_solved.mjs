import { app_code_expression_node_before_is } from "./app_code_expression_node_before_is.mjs";
import { and } from "./and.mjs";
import { app_code_operator_solve_before } from "./app_code_operator_solve_before.mjs";
import { app_code_expression_node_before } from "./app_code_expression_node_before.mjs";
import { app_code_expression_node } from "./app_code_expression_node.mjs";
import { app_code_expression_node_bracketed } from "./app_code_expression_node_bracketed.mjs";
import { app_code_expression_node_is } from "./app_code_expression_node_is.mjs";
import { app_code_operator_solve } from "./app_code_operator_solve.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
import { property_get } from "./property_get.mjs";
import { property_get_or } from "./property_get_or.mjs";
export function app_code_expression_solved(item, node) {
  arguments_assert(arguments, 2);
  ("the same expression with one of its operators worked out and standing there as its value - the step a learner sees after picking that operator: picking the * in 1 + 2 * 3 gives back 1 + 6");
  ("One step, not the answer. A learner who is shown the whole line collapse at once has watched something happen; a learner who picks and is answered, and then picks again, has done every step of it, and the step they get wrong is the one thing they did not know.");
  let same = equal(item, node);
  let node_before_is = app_code_expression_node_before_is(node);
  if (and(same, node_before_is)) {
    let symbol_before = property_get(node, "operator");
    let acted_on_of_node = property_get(node, "right");
    let value_before = app_code_operator_solve_before(
      symbol_before,
      acted_on_of_node,
    );
    return value_before;
  }
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
  let item_before_is = app_code_expression_node_before_is(item);
  if (item_before_is) {
    let symbol_of_item = property_get(item, "operator");
    let acted_on = property_get(item, "right");
    let acted_on_new = app_code_expression_solved(acted_on, node);
    let rebuilt = app_code_expression_node_before(symbol_of_item, acted_on_new);
    return rebuilt;
  }
  let left = property_get(item, "left");
  let left_new = app_code_expression_solved(left, node);
  let right = property_get(item, "right");
  let right_new = app_code_expression_solved(right, node);
  let symbol = property_get(item, "operator");
  let written = property_get_or(item, "bracketed", false);
  if (written) {
    ("brackets the lesson wrote survive every step, so a line the learner is working through does not quietly lose the pair it was showing them");
    let built_marked = app_code_expression_node_bracketed(
      left_new,
      symbol,
      right_new,
    );
    return built_marked;
  }
  let built = app_code_expression_node(left_new, symbol, right_new);
  return built;
}
