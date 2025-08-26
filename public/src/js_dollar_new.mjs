import { js_parse_expression } from "./js_parse_expression.mjs";
import { js_string } from "./js_string.mjs";
import { js_property } from "./js_property.mjs";
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
    let s = js_string(code);
    let key = js_parse_expression("name");
    let expression = js_parse_expression(code_expression);
    let p = js_property(key, s);
    log(array_expression);
  }
  let code2 = await function_transform_marker_specified(
    js_dollar_choices.name,
    "choices",
    lambda,
  );
  return code2;
}
