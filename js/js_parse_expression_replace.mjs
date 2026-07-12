import { object_replace } from "./object_replace.mjs";
import { js_parse_expression } from "./js_parse_expression.mjs";
export function js_parse_expression_replace(code_expression, node) {
  let expression = js_parse_expression(code_expression);
  object_replace(node, expression);
}
