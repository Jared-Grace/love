import { marker } from "./marker.mjs";
import { js_parse_expression } from "./js_parse_expression.mjs";
import { list_add } from "./list_add.mjs";
export function js_declaration_param_add(declaration, param_name) {
  marker("1");
  let { params } = declaration;
  list_add(params, js_parse_expression(param_name));
}
