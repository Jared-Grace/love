import { js_node_is } from "./js_node_is.mjs";
import { js_node_type } from "./js_node_type.mjs";
export function zz_probe_and_plain(node) {
  let both = js_node_is(node) && js_node_type(node);
  return both;
}
