import { marker } from "../../../love/public/src/marker.mjs";
import { object_property_set } from "../../../love/public/src/object_property_set.mjs";
import { js_parse_expression } from "../../../love/public/src/js_parse_expression.mjs";
import { js_code_brackets_empty } from "../../../love/public/src/js_code_brackets_empty.mjs";
export function js_expression_array(elements) {
  marker("1");
  let code_expression = js_code_brackets_empty();
  let expression = js_parse_expression(code_expression);
  object_property_set(expression, "elements", elements);
  return expression;
}
