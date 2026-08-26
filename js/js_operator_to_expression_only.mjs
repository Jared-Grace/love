import { property_get } from "./property_get.mjs";
import { js_operator_to_expression } from "./js_operator_to_expression.mjs";
export function js_operator_to_expression_only(o, next) {
  let r = js_operator_to_expression(o, next);
  let expression = property_get(r, "expression");
  return expression;
}
