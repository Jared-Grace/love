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
  js_node_type_is_if(node2, type, function lambda2() {});
  let test = object_property_get(n, "test");
  let alternate = object_property_get(n, "alternate");
  let consequent = object_property_get(n, "consequent");
  log({
    n,
  });
  return;
}
