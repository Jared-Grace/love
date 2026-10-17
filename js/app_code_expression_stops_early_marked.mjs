import { not } from "./not.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_expression_node_is } from "./app_code_expression_node_is.mjs";
import { app_code_expression_name_is } from "./app_code_expression_name_is.mjs";
import { property_get } from "./property_get.mjs";
import { app_code_expression_node_before_is } from "./app_code_expression_node_before_is.mjs";
import { object_copy_assign } from "./object_copy_assign.mjs";
import { app_code_expression_node_logical_is } from "./app_code_expression_node_logical_is.mjs";
export function app_code_expression_stops_early_marked(item) {
  arguments_assert(arguments, 1);
  ("a copy of the line item with every && and || in it marked to stop early, as JavaScript does: once the left side decides the answer, the right side is never read");
  ("Every other mark on the line is copied as it stands, the parentheses a lesson wrote among it. A name is kept as the very piece it is, since a learner's press is matched by being that piece");
  let node_is = app_code_expression_node_is(item);
  if (not(node_is) || app_code_expression_name_is(item)) {
    return item;
  }
  let right = property_get(item, "right");
  let right_marked = app_code_expression_stops_early_marked(right);
  if (app_code_expression_node_before_is(item)) {
    let before = object_copy_assign(item, {
      right: right_marked,
    });
    return before;
  }
  let left = property_get(item, "left");
  let left_marked = app_code_expression_stops_early_marked(left);
  let sides = {
    left: left_marked,
    right: right_marked,
  };
  if (app_code_expression_node_logical_is(item)) {
    sides.stops_early = true;
  }
  let both = object_copy_assign(item, sides);
  return both;
}
