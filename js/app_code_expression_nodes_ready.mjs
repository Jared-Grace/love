import { app_code_expression_node_is } from "./app_code_expression_node_is.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { list_concat } from "./list_concat.mjs";
import { not } from "./not.mjs";
import { or } from "./or.mjs";
import { property_get } from "./property_get.mjs";
export function app_code_expression_nodes_ready(item) {
  arguments_assert(arguments, 1);
  ("every operator in an expression that may be worked out next - the ones with a value already standing on each side of them");
  ("This is the whole rule a learner is being asked for, and it needs neither a table of strengths nor a reading of the brackets. An operator whose sides are both values has nothing left underneath it, and an operator that still holds another one cannot go first because the value it would need does not exist yet. Order of work and brackets both fall out of the shape rather than being checked against it.");
  ("A list rather than one answer, because more than one operator is often free to go next - 1 + 2 * 3 - 4 * 5 has two, and either is a right answer. A solver that named a single next step would mark a correct pick wrong.");
  let node_is = app_code_expression_node_is(item);
  if (not(node_is)) {
    let none = [];
    return none;
  }
  let left = property_get(item, "left");
  let right = property_get(item, "right");
  let left_is = app_code_expression_node_is(left);
  let right_is = app_code_expression_node_is(right);
  let either = or(left_is, right_is);
  if (not(either)) {
    let single = [item];
    return single;
  }
  let from_left = app_code_expression_nodes_ready(left);
  let from_right = app_code_expression_nodes_ready(right);
  let both = list_concat(from_left, from_right);
  return both;
}
