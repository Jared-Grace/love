import { js_parse_expression } from "./js_parse_expression.mjs";
export function js_property_identifier(param_name) {
  let key = js_parse_expression(param_name);
  let value = key;
  let v = {
    type: "Property",
    method: false,
    shorthand: true,
    computed: false,
    key: key,
    value: key,
    kind: "init",
  };
  return v;
}
