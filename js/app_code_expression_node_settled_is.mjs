import { arguments_assert } from "./arguments_assert.mjs";
import { fn_name } from "./fn_name.mjs";
import { app_code_expression_node_logical_is } from "./app_code_expression_node_logical_is.mjs";
import { not } from "./not.mjs";
import { property_get } from "./property_get.mjs";
import { app_code_expression_node_is } from "./app_code_expression_node_is.mjs";
import { equal } from "./equal.mjs";
import { js_operator_and_symbol } from "./js_operator_and_symbol.mjs";
export function app_code_expression_node_settled_is(item) {
  arguments_assert(arguments, 1);
  ("whether an && or an || already has its answer from its left side alone: false && x < 9 is false and true || x < 9 is true, whatever the right side would come to");
  ("2026-10-17, at the human's asking: JavaScript never reads the right side of one of these, so neither does a learner. Asked by ",
    fn_name("app_code_expression_nodes_ready"),
    ", which then offers the operator itself next. Worked out by the same && and || every step uses, which hands back the left side exactly when it settles the answer. Not picked: working the right side out and throwing it away, which is what a learner would then be taught JavaScript does.");
  let logical = app_code_expression_node_logical_is(item);
  if (not(logical)) {
    return false;
  }
  let left = property_get(item, "left");
  if (app_code_expression_node_is(left)) {
    return false;
  }
  let left2 = property_get(item, "operator");
  let right = js_operator_and_symbol();
  let anding = equal(left2, right);
  let falsy = not(left);
  let settled = anding ? falsy : not(falsy);
  return settled;
}
