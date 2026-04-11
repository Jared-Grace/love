import { js_node_type_is } from "../../../love/public/src/js_node_type_is.mjs";
export function js_import_specifier_is(e1) {
  let type_is2 = js_node_type_is(e1, "ImportSpecifier");
  return type_is2;
}
