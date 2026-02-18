import { js_expression_array } from "../../../love/public/src/js_expression_array.mjs";
import { js_parse_expressions } from "../../../love/public/src/js_parse_expressions.mjs";
export function js_expression_array_identifiers(names) {
  let elements = js_parse_expressions(names);
  let expression = js_expression_array(elements);
  return expression;
}
