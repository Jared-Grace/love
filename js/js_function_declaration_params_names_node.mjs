import { list_map_squash } from "./list_map_squash.mjs";
import { list_filter } from "./list_filter.mjs";
import { js_node_is } from "./js_node_is.mjs";
import { error } from "./error.mjs";
import { js_node_type_is } from "./js_node_type_is.mjs";
import { property_get } from "./property_get.mjs";
import { js_identifier_is } from "./js_identifier_is.mjs";
import { json_format_to } from "./json_format_to.mjs";
export function js_function_declaration_params_names_node(node) {
  let names = null;
  let ii = js_identifier_is(node);
  if (ii) {
    let name = property_get(node, "name");
    names = [name];
  } else {
    let type_is = js_node_type_is(node, "ObjectPattern");
    if (type_is) {
      let properties = property_get(node, "properties");
      names = list_map_squash(
        properties,
        js_function_declaration_params_names_node,
      );
    } else {
      let property_is = js_node_type_is(node, "Property");
      if (property_is) {
        let value = property_get(node, "value");
        names = js_function_declaration_params_names_node(value);
      } else {
        let rest_is = js_node_type_is(node, "RestElement");
        if (rest_is) {
          let argument = property_get(node, "argument");
          names = js_function_declaration_params_names_node(argument);
        } else {
          let array_is = js_node_type_is(node, "ArrayPattern");
          if (array_is) {
            let elements = property_get(node, "elements");
            ("a hole, as in the first slot of a two-name unpacking that skips it, is an absent element and names nothing");
            let filled = list_filter(elements, js_node_is);
            names = list_map_squash(
              filled,
              js_function_declaration_params_names_node,
            );
          } else {
            let default_is = js_node_type_is(node, "AssignmentPattern");
            if (default_is) {
              ("a default value stands to the right of the name and binds nothing itself, so only the left side is asked");
              let left = property_get(node, "left");
              names = js_function_declaration_params_names_node(left);
            } else {
              let message = json_format_to(node);
              error(message);
            }
          }
        }
      }
    }
  }
  return names;
}
