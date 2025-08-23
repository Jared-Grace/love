import {js_parse_expression} from "./js_parse_expression.mjs";
export function js_property_identifier(param_name) {
  let expression = js_parse_expression(param_name);
  let v = {
    type: "Property",
    method: false,
    shorthand: true,
    computed: false,
    key: expression,
    value: expression,
    kind: "init"
  };
  return v;
}
