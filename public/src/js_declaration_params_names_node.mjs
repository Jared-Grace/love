import { list_map_squash } from "./list_map_squash.mjs";
import { error } from "./error.mjs";
import { js_node_type_is } from "./js_node_type_is.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { js_identifier_is } from "./js_identifier_is.mjs";
import { json_format_to } from "./json_format_to.mjs";
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
      names = list_map_squash(properties, js_declaration_params_names_node);
    } else {
      let type_is = js_node_type_is(node, "Property");
      if (type_is) {
        let { value } = node;
        names = js_declaration_params_names_node(value);
      } else {
        let message = json_format_to(node);
        error(message);
      }
    }
  }
  return names;
}
