import { js_array_expression_elements } from "./js_array_expression_elements.mjs";
import { js_type_find } from "./js_type_find.mjs";
export function js_array_expression_single_elements(ast) {
  "This takes the first list it finds rather than checking there is only one, which the name does not say and a caller adding an item to a register will not expect. Where exactly one list is meant, the neighbour named for the only list refuses the ambiguous case instead of choosing.";
  let node_type = "ArrayExpression";
  let node = js_type_find(ast, node_type);
  let elements = js_array_expression_elements(node);
  return elements;
}
