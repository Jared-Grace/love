import { arguments_assert } from "./arguments_assert.mjs";
import { fn_name } from "./fn_name.mjs";
import { app_code_expression_node_is } from "./app_code_expression_node_is.mjs";
import { not } from "./not.mjs";
import { app_code_expression_name_is } from "./app_code_expression_name_is.mjs";
import { app_code_expression_node_before_is } from "./app_code_expression_node_before_is.mjs";
import { property_get } from "./property_get.mjs";
import { or } from "./or.mjs";
import { list_concat } from "./list_concat.mjs";
export function app_code_expression_nodes_ready(item) {
  arguments_assert(arguments, 1);
  ("every operator in an expression that may be worked out next - the ones with a value already standing on each side of them");
  ("This is the whole rule a learner is being asked for, and it needs neither a table of strengths nor a reading of the parentheses. An operator whose sides are both values has nothing left underneath it, and an operator that still holds another one cannot go first because the value it would need does not exist yet. Order of work and parentheses both fall out of the shape rather than being checked against it.");
  ("A list rather than one answer, because more than one operator often has values on both sides of it at once - 1 + 2 * 3 - 4 * 5 has two. What the list holds is what COULD be worked out and not what is: the entries are in the order the line is written, left to right, so the one JavaScript actually takes is the first of them and ",
    fn_name("app_code_expression_nodes_ready_first"),
    " is where that reading lives.");
  ("The two questions are kept apart because a value can be worked out in any of these orders and come to the same number - that is what lets ",
    fn_name("app_code_expression_value"),
    " walk the list freely - while a LEARNER being asked which operator goes next has exactly one right answer, the one the machine would take. A single function answering both would have to be wrong for one of them.");
  let node_is = app_code_expression_node_is(item);
  if (not(node_is)) {
    let none = [];
    return none;
  }
  ("2026-10-17: a name waits on nothing, so it is ready as it stands; standing in a line as written, it comes in the list where it is written, which is the order JavaScript reads it in");
  if (app_code_expression_name_is(item)) {
    let named = [item];
    return named;
  }
  let before_is = app_code_expression_node_before_is(item);
  if (before_is) {
    ("a one-sided operator has only the one side to wait on, so it is ready as soon as that side is a value");
    let acted_on = property_get(item, "right");
    let acted_on_is = app_code_expression_node_is(acted_on);
    if (not(acted_on_is)) {
      let alone = [item];
      return alone;
    }
    let inside = app_code_expression_nodes_ready(acted_on);
    return inside;
  }
  let left = property_get(item, "left");
  let right = property_get(item, "right");
  let left_is = app_code_expression_node_is(left);
  let right_is = app_code_expression_node_is(right);
  ("2026-10-17, at the human's asking: an && or an || waits on both its sides, as every other operator does. JavaScript stops at the left side when that already decides the answer, but on a line made only of values, names and operators, working out the right side as well cannot change the answer, so a beginner learns one rule for every operator, as simple sorts are taught before fast ones. Stopping early is a lesson of its own, for the lines where it changes what happens. Not picked: offering only the left side until it settles the line, built earlier the same day, which asked a beginner for a second rule before it could make any difference to them");
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
