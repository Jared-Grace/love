import { js_node_type_is } from "./js_node_type_is.mjs";
import { not } from "./not.mjs";
import { property_get } from "./property_get.mjs";
export function js_statement_call_alone(statement) {
  "The call this statement is, standing on its own with its answer thrown away, or nothing when it is not that.";
  let expression_is = js_node_type_is(statement, "ExpressionStatement");
  if (not(expression_is)) {
    return null;
  }
  let expression = property_get(statement, "expression");
  let call_is = js_node_type_is(expression, "CallExpression");
  if (not(call_is)) {
    return null;
  }
  return expression;
}
