import { object_property_get } from "./object_property_get.mjs";
import { js_identifier_is } from "./js_identifier_is.mjs";
export function js_declaration_params_names_node(node) {
  let ii = js_identifier_is(node);
  if (ii) {
    let name = object_property_get(node, "name");
    let names = null;
    names = [name];
  }
  return names;
}
