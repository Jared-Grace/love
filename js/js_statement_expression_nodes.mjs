import { property_path_get_2 } from "./property_path_get_2.mjs";
import { js_visit_type } from "./js_visit_type.mjs";
import { list_adder } from "./list_adder.mjs";
export function js_statement_expression_nodes(ast) {
  function lambda2(la) {
    function lambda(v) {
      let expression = property_path_get_2(v, "node", "expression");
      la(expression);
    }
    js_visit_type(ast, "ExpressionStatement", lambda);
  }
  let nodes = list_adder(lambda2);
  return nodes;
}
