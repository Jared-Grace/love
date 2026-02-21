import { list_add } from "../../../love/public/src/list_add.mjs";
import { js_property_parse_expression } from "../../../love/public/src/js_property_parse_expression.mjs";
export function js_property_parse_expression_add(
  key_code,
  value_code,
  properties,
) {
  let p = js_property_parse_expression(key_code, value_code);
  list_add(properties, p);
}
