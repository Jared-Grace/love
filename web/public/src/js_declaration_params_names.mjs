import { list_map_squash } from "./list_map_squash.mjs";
import { list_map } from "./list_map.mjs";
import { js_identifier_is } from "./js_identifier_is.mjs";
import { each } from "./each.mjs";
import { js_declaration_params_get } from "./js_declaration_params_get.mjs";
import { js_identifiers_to_names } from "./js_identifiers_to_names.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { js_declaration_params_names_node } from "./js_declaration_params_names_node.mjs";
export function js_declaration_params_names(declaration) {
  let params_names = null;
  if (false) {
    let params = js_declaration_params_get(declaration);
    params_names = js_identifiers_to_names(params);
  } else {
    let params = js_declaration_params_get(declaration);
    params_names = list_map_squash(params, js_declaration_params_names_node);
  }
  return params_names;
}
