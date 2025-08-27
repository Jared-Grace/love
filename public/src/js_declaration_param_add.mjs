import { js_declaration_param_add_node } from "./js_declaration_param_add_node.mjs";
import { js_parse_expression } from "./js_parse_expression.mjs";
export function js_declaration_param_add(declaration, param_name) {
  let item = js_parse_expression(param_name);
  js_declaration_param_add_node(declaration, item);
}
