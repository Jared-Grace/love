import { js_parse_expression } from "./js_parse_expression.mjs";
import { js_visit_type } from "./js_visit_type.mjs";
import { property_get } from "./property_get.mjs";
import { js_statement_if_test_set } from "./js_statement_if_test_set.mjs";
// Lambda for the positive js_statement_if_test_set example: set every if-statement's
// test slot to the given expression (parsed fresh per match so each if gets its own
// node). Mirror of the rejection — same slot setter, valid inputs this time.
export function example_if_test_set_lambda(expression_source) {
  async function lambda(ast) {
    function each(v) {
      let statement_if = property_get(v, "node");
      let expression = js_parse_expression(expression_source);
      js_statement_if_test_set(statement_if, expression);
    }
    js_visit_type(ast, "IfStatement", each);
  }
  return lambda;
}
