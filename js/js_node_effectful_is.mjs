import { counter } from "./counter.mjs";
import { js_visit_types } from "./js_visit_types.mjs";
export function js_node_effectful_is(node) {
  let types = [
    "CallExpression",
    "NewExpression",
    "AwaitExpression",
    "AssignmentExpression",
    "UpdateExpression",
    "YieldExpression",
  ];
  function lambda3(c) {
    function lambda2(v) {
      c();
    }
    js_visit_types(node, types, lambda2);
  }
  let count = counter(lambda3);
  let effectful = count > 0;
  return effectful;
}
