import { js_property } from "./js_property.mjs";
import { js_parse_expression } from "./js_parse_expression.mjs";
export function js_property_identifier(param_name) {
  let key = js_parse_expression(param_name);
  let value = key;
  let v = js_property(key, value);
  return v;
}
