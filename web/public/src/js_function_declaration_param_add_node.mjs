import { list_add } from "../../../love/public/src/list_add.mjs";
import { js_function_declaration_params_get } from "../../../love/public/src/js_function_declaration_params_get.mjs";
export function js_function_declaration_param_add_node(declaration, item) {
  let params = js_function_declaration_params_get(declaration);
  list_add(params, item);
}
