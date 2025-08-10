import {object_property_get} from './object_property_get.mjs';
import {list_map_property} from './list_map_property.mjs';
export function js_declaration_params_names(declaration) {
  return list_map_property(object_property_get(declaration, "params"), "name");
}
