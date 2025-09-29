import { js_node_type_not_is } from "../../../love/public/src/js_node_type_not_is.mjs";
export function js_identifier_not_is(id) {
  let jin = js_node_type_not_is(id, "Identifier");
  return jin;
}
