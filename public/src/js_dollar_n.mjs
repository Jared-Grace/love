import { list_remove } from "../../../love/public/src/list_remove.mjs";
import { object_property_set } from "../../../love/public/src/object_property_set.mjs";
import { list_single } from "../../../love/public/src/list_single.mjs";
import { object_property_swap } from "../../../love/public/src/object_property_swap.mjs";
import { not } from "../../../love/public/src/not.mjs";
import { equal } from "../../../love/public/src/equal.mjs";
import { js_call_callee_name } from "../../../love/public/src/js_call_callee_name.mjs";
import { js_node_type_is_if } from "../../../love/public/src/js_node_type_is_if.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { list_next } from "../../../love/public/src/list_next.mjs";
import { log } from "../../../love/public/src/log.mjs";
export function js_dollar_n({
  remaining,
  node,
  stack1,
  stack2,
  stack3,
  ast,
  afters,
}) {
  let n = list_next(stack2, stack1);
  let test = property_get(n, "test");
  function lambda2() {
    let name = js_call_callee_name(test);
    log({
      name,
    });
    if (equal(name, not.name)) {
      let arguments2 = property_get(test, "arguments");
      let only = list_single(arguments2);
      object_property_set(n, "test", only);
      const p1 = "alternate";
      const p2 = "consequent";
      object_property_swap(n, p1, p2);
      list_remove(stack2, stack1);
    }
  }
  js_node_type_is_if(test, "CallExpression", lambda2);
  return;
}
