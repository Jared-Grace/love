import { list_single } from "./list_single.mjs";
import { js_node_value_get } from "./js_node_value_get.mjs";
import { js_array_expression_elements } from "./js_array_expression_elements.mjs";
export function js_selects_array_elements(ast, selects) {
  "The list an ordered register keeps its entries in, from the line that binds it. Every verb that adds one entry has to get here first and none of them cares how, so the getting there is one thing rather than a copy inside each of them.";
  let node = list_single(selects);
  let array_expression = js_node_value_get(node);
  let elements = js_array_expression_elements(array_expression);
  return elements;
}
