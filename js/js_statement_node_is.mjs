import { not } from "./not.mjs";
import { js_node_is } from "./js_node_is.mjs";
import { js_unparse } from "./js_unparse.mjs";
import { js_expression_is } from "./js_expression_is.mjs";
export function js_statement_node_is(node) {
  let is = js_node_is(node) && not(js_expression_is(js_unparse(node)));
  return is;
}
