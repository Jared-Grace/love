import {js_property} from "./js_property.mjs";
import {js_parse_expression} from "./js_parse_expression.mjs";
export function js_property_parse_expression(key_code, value_code) {
  let key = js_parse_expression(key_code);
  let expression = js_parse_expression(value_code);
  let p = js_property(key, expression);
  return p;
}
