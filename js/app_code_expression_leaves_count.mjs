import { add } from "./add.mjs";
import { app_code_expression_node_is } from "./app_code_expression_node_is.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { not } from "./not.mjs";
import { property_get } from "./property_get.mjs";
export function app_code_expression_leaves_count(item) {
  arguments_assert(arguments, 1);
  ("how many numbers stand in a line of code: 1 + 2 * 3 has three, and a line that is nothing but a number has one");
  let node_is = app_code_expression_node_is(item);
  if (not(node_is)) {
    let r = 1;
    return r;
  }
  let left = property_get(item, "left");
  let left_count = app_code_expression_leaves_count(left);
  let right = property_get(item, "right");
  let right_count = app_code_expression_leaves_count(right);
  let counted = add(left_count, right_count);
  return counted;
}
