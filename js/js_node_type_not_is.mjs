import { not } from "../../../love/public/src/not.mjs";
import { js_node_type_is } from "../../../love/public/src/js_node_type_is.mjs";
export function js_node_type_not_is(node, type) {
  let type_is = js_node_type_is(node, type);
  let nti = not(type_is);
  return nti;
}
