import { js_node_type_is } from "../../../love/public/src/js_node_type_is.mjs";
export function js_literal_is(init) {
  let type_is2 = js_node_type_is(init, "Literal");
  return type_is2;
}
