import { js_visit_type } from "./js_visit_type.mjs";
import { property_get } from "./property_get.mjs";
import { list_adder } from "./list_adder.mjs";
export function js_statement_expression_nodes(ast) {
  function lambda2(la) {
    function lambda(v) {
      let node = property_get(v, "node");
      let expression = property_get(node, "expression");
      la(expression);
    }
    js_visit_type(ast, "ExpressionStatement", lambda);
  }
  let nodes = list_adder(lambda2);
  return nodes;
}
