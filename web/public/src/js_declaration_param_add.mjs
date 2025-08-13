import { marker } from "./marker.mjs";
import { js_parse_expression } from "./js_parse_expression.mjs";
import { list_add } from "./list_add.mjs";
export function js_declaration_param_add(declaration, param_name) {
  marker("1");
  marker("2");
  let { params } = declaration;
  let item = js_parse_expression(param_name);
  list_add(params, item);
}
