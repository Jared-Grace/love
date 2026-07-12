import { property_get } from "./property_get.mjs";
import { js_parse_expression } from "./js_parse_expression.mjs";
import { js_find_return } from "./js_find_return.mjs";
import { js_return_argument_set } from "./js_return_argument_set.mjs";
export function js_find_return_argument_set(ast, code) {
  let only = js_find_return(ast);
  let node = property_get(only, "node");
  let expression = js_parse_expression(code);
  js_return_argument_set(node, expression);
}
