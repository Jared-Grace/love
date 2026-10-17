import { arguments_assert } from "./arguments_assert.mjs";
import { equal } from "./equal.mjs";
import { app_code_expression_name_is } from "./app_code_expression_name_is.mjs";
import { and } from "./and.mjs";
import { property_get } from "./property_get.mjs";
import { app_code_expression_node_before_is } from "./app_code_expression_node_before_is.mjs";
import { app_code_operator_solve_before } from "./app_code_operator_solve_before.mjs";
import { app_code_operator_solve } from "./app_code_operator_solve.mjs";
import { app_code_expression_node_is } from "./app_code_expression_node_is.mjs";
import { not } from "./not.mjs";
import { app_code_expression_node_before } from "./app_code_expression_node_before.mjs";
import { object_copy_assign } from "./object_copy_assign.mjs";
export function app_code_expression_solved(item, node) {
  arguments_assert(arguments, 2);
  ("the same expression with one of its operators worked out and standing there as its value - the step a learner sees after picking that operator: picking the * in 1 + 2 * 3 gives back 1 + 6");
  ("One step, not the answer. A learner who is shown the whole line collapse at once has watched something happen; a learner who picks and is answered, and then picks again, has done every step of it, and the step they get wrong is the one thing they did not know.");
  let same = equal(item, node);
  ("2026-10-17: a name is worked out by reading it, so it stands there as the value it holds; a name other than the one picked stays a name, and is not looked inside, since it has no sides");
  let name_is = app_code_expression_name_is(item);
  if (and(same, name_is)) {
    let read = property_get(item, "value");
    return read;
  }
  if (name_is) {
    return item;
  }
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
  ("every mark the lesson put on an operator survives every step - the parentheses it wrote, so a line the learner is working through does not quietly lose the pair it was showing them, and any other - because the node is copied with only its two sides replaced. Not picked, 2026-10-17: building it afresh and carrying each mark across by name, which a new mark would be silently dropped by");
  let sides = {
    left: left_new,
    right: right_new,
  };
  let built = object_copy_assign(item, sides);
  return built;
}
