import { js_property_parse_expression_add } from "./js_property_parse_expression_add.mjs";
import { js_string } from "./js_string.mjs";
import { marker_next_declare_single_init } from "./marker_next_declare_single_init.mjs";
import { log } from "./log.mjs";
import { js_dollar_choices } from "./js_dollar_choices.mjs";
import { function_transform_marker_specified } from "./function_transform_marker_specified.mjs";
import { marker } from "./marker.mjs";
export async function js_dollar_new(code) {
  marker("1");
  async function lambda(a) {
    let array_expression = marker_next_declare_single_init(a);
    let { elements } = array_expression;
    let oe = {
      type: "ObjectExpression",
      properties: [],
    };
    let { properties } = oe;
    let s = js_string(code);
    const key_code = "name";
    const value_code = "name";
    js_property_parse_expression_add(key_code, value_code, properties);
    log(array_expression);
  }
  let code2 = await function_transform_marker_specified(
    js_dollar_choices.name,
    "choices",
    lambda,
  );
  return code2;
}
