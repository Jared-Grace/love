import { js_parse_expression } from "./js_parse_expression.mjs";
import { js_visit_type } from "./js_visit_type.mjs";
import { property_get } from "./property_get.mjs";
// Lambda for the positive slot-setter examples: visit every node of the given type
// and set one of its expression slots (via the given setter) to the parsed source —
// parsed fresh per match so each node gets its own expression node. Shared by the
// if-test and return-argument setters (same shape, different node type + setter).
export function example_slot_expression_set_lambda(node_type, setter, expression_source) {
  async function lambda(ast) {
    function each(v) {
      let node = property_get(v, "node");
      let expression = js_parse_expression(expression_source);
      setter(node, expression);
    }
    js_visit_type(ast, node_type, each);
  }
  return lambda;
}
