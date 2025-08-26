import { function_new_js_inner } from "./function_new_js_inner.mjs";
import { list_add } from "./list_add.mjs";
import { function_name_combine } from "./function_name_combine.mjs";
import { js_code_string } from "./js_code_string.mjs";
import { js_property_parse_expression_add } from "./js_property_parse_expression_add.mjs";
import { marker_next_declare_single_init } from "./marker_next_declare_single_init.mjs";
import { js_dollar_choices } from "./js_dollar_choices.mjs";
import { function_transform_marker_specified } from "./function_transform_marker_specified.mjs";
import { marker } from "./marker.mjs";
export async function js_dollar_new(code) {
  marker("1");
  let combined = function_name_combine(js_dollar_choices.name, code);
  await function_new_js_inner(combined);
  async function lambda(a) {
    let array_expression = marker_next_declare_single_init(a);
    let { elements } = array_expression;
    let oe = {
      type: "ObjectExpression",
      properties: [],
    };
    let { properties } = oe;
    let code_string = js_code_string(code);
    js_property_parse_expression_add("name", code_string, properties);
    js_property_parse_expression_add("fn", combined, properties);
    list_add(elements, oe);
  }
  let code2 = await function_transform_marker_specified(
    js_dollar_choices.name,
    "choices",
    lambda,
  );
  return code2;
}
