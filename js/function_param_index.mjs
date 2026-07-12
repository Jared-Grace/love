import { property_get } from "./property_get.mjs";
import { js_function_declaration_params_ast_get } from "./js_function_declaration_params_ast_get.mjs";
import { list_index_of } from "./list_index_of.mjs";
import { js_function_declaration_param_named } from "./js_function_declaration_param_named.mjs";
export function function_param_index(ast, param_name) {
  let v2 = js_function_declaration_params_ast_get(ast);
  let params = property_get(v2, "params");
  let declaration = property_get(v2, "declaration");
  let p = js_function_declaration_param_named(declaration, param_name);
  let index = list_index_of(params, p);
  let v = {
    params,
    index,
  };
  return v;
}
