import { log } from "./log.mjs";
import { list_find_property } from "./list_find_property.mjs";
export function js_declaration_param_named(declaration, param_name) {
  let { params } = declaration;
  return list_find_property(params, "name", param_name);
}
