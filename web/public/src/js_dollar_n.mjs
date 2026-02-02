import { list_single } from "../../../love/public/src/list_single.mjs";
import { object_property_swap } from "../../../love/public/src/object_property_swap.mjs";
import { not } from "../../../love/public/src/not.mjs";
import { equal } from "../../../love/public/src/equal.mjs";
import { js_call_callee_name } from "../../../love/public/src/js_call_callee_name.mjs";
import { js_node_type_is_if } from "../../../love/public/src/js_node_type_is_if.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { list_next } from "../../../love/public/src/list_next.mjs";
import { log } from "../../../love/public/src/log.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export function js_dollar_n({
  remaining,
  node,
  stack1,
  stack2,
  stack3,
  ast,
  afters,
}) {
  marker("1");
  let n = list_next(stack2, stack1);
  let test = object_property_get(n, "test");
  function lambda2() {
    let name = js_call_callee_name(node);
    if (equal(name, not.name)) {
      let arguments2 = object_property_get(node, "arguments");
      let only = list_single(list);
      const p1 = "alternate";
      const p2 = "consequent";
      object_property_swap(n, p1, p2);
    }
  }
  js_node_type_is_if(test, "CallExpression", lambda2);
  log({
    n,
  });
  return;
}
