import { list_add } from "../../../love/public/src/list_add.mjs";
import { js_declaration_params_get } from "../../../love/public/src/js_declaration_params_get.mjs";
export function js_declaration_param_add_node(declaration, item) {
  let params = js_declaration_params_get(declaration);
  list_add(params, item);
}
