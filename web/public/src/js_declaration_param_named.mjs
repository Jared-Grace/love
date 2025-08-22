import { list_find_property } from "./list_find_property.mjs";
export function js_declaration_param_named(declaration, param_name) {
  let { params } = declaration;
  let result = list_find_property(params, "name", param_name);
  return result;
}
