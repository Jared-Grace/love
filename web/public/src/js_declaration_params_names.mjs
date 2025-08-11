import { js_identifiers_to_names } from "./js_identifiers_to_names.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { list_map_property } from "./list_map_property.mjs";
export function js_declaration_params_names(declaration) {
  const params = object_property_get(declaration, "params");
  const params_names = js_identifiers_to_names(params);
  return params_names;
}
