import { marker } from "../../../love/public/src/marker.mjs";
import { js_node_type_is } from "../../../love/public/src/js_node_type_is.mjs";
export function js_node_type_is_if(node, type, lambda) {
  marker("1");
  let type_is = js_node_type_is(node, type);
  if (type_is) {
    lambda();
  }
}
