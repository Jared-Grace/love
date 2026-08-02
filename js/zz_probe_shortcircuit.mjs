import { equal } from "./equal.mjs";
import { js_node_is } from "./js_node_is.mjs";
import { js_node_type } from "./js_node_type.mjs";
export function zz_probe_shortcircuit(node, type) {
  let type_is = js_node_is(node) && equal(js_node_type(node), type);
  return type_is;
}
