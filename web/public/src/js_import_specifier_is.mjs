import { js_node_type_is } from "../../../love/public/src/js_node_type_is.mjs";
export function js_import_specifier_is(e) {
  let type_is = js_node_type_is(e, "ImportSpecifier");
  return type_is;
}
