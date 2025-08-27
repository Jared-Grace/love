import { js_declaration_params_get } from "./js_declaration_params_get.mjs";
import { marker } from "./marker.mjs";
import { js_parse_expression } from "./js_parse_expression.mjs";
import { list_add } from "./list_add.mjs";
export function js_declaration_param_add(declaration, param_name) {
  let item = js_parse_expression(param_name);
  marker("1");
  let params = js_declaration_params_get(declaration);
  marker("2");
  list_add(params, item);
}
