import { property_get } from "../../../love/public/src/property_get.mjs";
import { list_find_property } from "../../../love/public/src/list_find_property.mjs";
export function js_function_declaration_param_named(declaration, param_name) {
  let params = property_get(declaration, "params");
  let result = list_find_property(params, "name", param_name);
  return result;
}
