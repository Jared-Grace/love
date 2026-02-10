import { property_set } from "../../../love/public/src/property_set.mjs";
import { js_parse_expression } from "../../../love/public/src/js_parse_expression.mjs";
import { js_code_brackets_empty } from "../../../love/public/src/js_code_brackets_empty.mjs";
export function js_expression_array(elements) {
  let code_expression = js_code_brackets_empty();
  let expression = js_parse_expression(code_expression);
  property_set(expression, "elements", elements);
  return expression;
}
