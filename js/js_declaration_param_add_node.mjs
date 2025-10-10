import { list_add } from "../../../love/public/src/list_add.mjs";
import { js_declaration_params_get } from "../../../love/public/src/js_declaration_params_get.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export function js_declaration_param_add_node(declaration, item) {
  marker("1");
  let params = js_declaration_params_get(declaration);
  marker("2");
  list_add(params, item);
}
