import { js_node_type_not_is } from "./js_node_type_not_is.mjs";
import { marker } from "./marker.mjs";
export function js_node_type_not_is_if(node, type, lambda) {
  marker("1");
  let type_is = js_node_type_not_is(node, type);
  if (type_is) {
    lambda();
  }
}
