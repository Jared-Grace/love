import { js_node_types_is } from "./js_node_types_is.mjs";
export function zz_shadow_probe(node) {
  let types = ["FunctionDeclaration"];
  let function_is = js_node_types_is(node, types);
  if (function_is) {
    let empty = [];
    return empty;
  }
  let names = [];
  return names;
}
