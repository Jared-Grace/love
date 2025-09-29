import { js_node_type_not_is } from "../../../love/public/src/js_node_type_not_is.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export function js_node_type_not_is_if(node, type, lambda) {
  let type_is = js_node_type_not_is(node, type);
  marker("1");
  if (type_is) {
    lambda();
  }
}
