import { equal } from "./equal.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { app_learn_js_expression_node_is } from "./app_learn_js_expression_node_is.mjs";
import { not } from "./not.mjs";
import { app_learn_js_expression_name_is } from "./app_learn_js_expression_name_is.mjs";
import { property_get } from "./property_get.mjs";
import { app_learn_js_expression_node_index_is } from "./app_learn_js_expression_node_index_is.mjs";
import { app_learn_js_expression_node_before_is } from "./app_learn_js_expression_node_before_is.mjs";
export function app_learn_js_expression_node_bracketed_is(item, node) {
  arguments_assert(arguments, 2);
  ("whether the part sits straight inside the brackets of an item read by its index: in a[3 - 1] the 3 - 1 does, and in a[3 - 1] * 2 it still does");
  ("Asked by the part's own identity, as solving asks, so two parts written alike are never mistaken for one another.");
  let node_is = app_learn_js_expression_node_is(item);
  if (not(node_is)) {
    return false;
  }
  if (app_learn_js_expression_name_is(item)) {
    return false;
  }
  let right = property_get(item, "right");
  let index_is = app_learn_js_expression_node_index_is(item);
  if (index_is && equal(right, node)) {
    return true;
  }
  let right_holds = app_learn_js_expression_node_bracketed_is(right, node);
  if (right_holds) {
    return true;
  }
  let before_is = app_learn_js_expression_node_before_is(item);
  if (before_is || index_is) {
    return false;
  }
  let left = property_get(item, "left");
  let left_holds = app_learn_js_expression_node_bracketed_is(left, node);
  return left_holds;
}
