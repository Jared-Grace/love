import { list_index_of } from "../../../love/public/src/list_index_of.mjs";
import { js_declaration_param_named } from "../../../love/public/src/js_declaration_param_named.mjs";
import { js_declaration_params_get } from "../../../love/public/src/js_declaration_params_get.mjs";
import { js_declaration_single } from "../../../love/public/src/js_declaration_single.mjs";
export function function_param_index(ast, param_name, index) {
  let declaration = js_declaration_single(ast);
  let params = js_declaration_params_get(declaration);
  let p = js_declaration_param_named(declaration, param_name);
  index = list_index_of(params, p);
  let v = {
    params,
    index,
  };
  return v;
}
