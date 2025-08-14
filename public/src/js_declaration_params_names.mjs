import { js_identifier_is } from "./js_identifier_is.mjs";
import { each } from "./each.mjs";
import { js_declaration_params_get } from "./js_declaration_params_get.mjs";
import { js_identifiers_to_names } from "./js_identifiers_to_names.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { list_map_property } from "./list_map_property.mjs";
export function js_declaration_params_names(declaration) {
  let params = js_declaration_params_get(declaration);
  function lambda(param) {
    if (false) {
      let result = js_identifier_is(node);
    }
  }
  each(params, lambda);
  const params_names = js_identifiers_to_names(params);
  return params_names;
}
