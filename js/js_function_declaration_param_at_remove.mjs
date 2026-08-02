import { js_function_declaration_params_ast_get } from "./js_function_declaration_params_ast_get.mjs";
import { property_get } from "./property_get.mjs";
import { list_remove_at } from "./list_remove_at.mjs";
export function js_function_declaration_param_at_remove(ast, index) {
  "take the parameter at index off the declaration this file exports";
  let v = js_function_declaration_params_ast_get(ast);
  let params = property_get(v, "params");
  let removed = list_remove_at(params, index);
  return removed;
}
