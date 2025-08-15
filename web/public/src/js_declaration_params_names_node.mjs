import { list_squash } from "./list_squash.mjs";
import { each } from "./each.mjs";
import { js_node_type_is } from "./js_node_type_is.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { js_identifier_is } from "./js_identifier_is.mjs";
import { list_map } from "./list_map.mjs";
export function js_declaration_params_names_node(node) {
  let names = null;
  let ii = js_identifier_is(node);
  if (ii) {
    let name = object_property_get(node, "name");
    names = [name];
  } else {
    let type_is = js_node_type_is(node, "ObjectPattern");
    if (type_is) {
      let { properties } = node;
      let mapped = list_map(properties, js_declaration_params_names_node);
      let squashed = list_squash(mapped);
    }
  }
  return names;
}
