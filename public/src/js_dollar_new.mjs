import { function_new_js_name } from "./function_new_js_name.mjs";
import { js_code_string } from "./js_code_string.mjs";
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
    let combined = function_new_js_name(f_name_unprefixed);
    let array_expression = marker_next_declare_single_init(a);
    let { elements } = array_expression;
    let oe = {
      type: "ObjectExpression",
      properties: [],
    };
    let { properties } = oe;
    let s = js_string(code);
    let code_string = js_code_string(value_string);
    js_property_parse_expression_add("name", code_string, properties);
    js_property_parse_expression_add("fn", code_string, properties);
    log(array_expression);
  }
  let code2 = await function_transform_marker_specified(
    js_dollar_choices.name,
    "choices",
    lambda,
  );
  return code2;
}
