import { marker_next_declare_single_init_elements } from "./marker_next_declare_single_init_elements.mjs";
import { js_dollar_new_args_inner } from "./js_dollar_new_args_inner.mjs";
import { js_dollar_new_name } from "./js_dollar_new_name.mjs";
import { function_new } from "./function_new.mjs";
import { js_imports_missing_add } from "./js_imports_missing_add.mjs";
import { js_declaration_single_block_body } from "./js_declaration_single_block_body.mjs";
import { js_statement_return_empty } from "./js_statement_return_empty.mjs";
import { function_transform } from "./function_transform.mjs";
import { list_add } from "./list_add.mjs";
import { js_code_string } from "./js_code_string.mjs";
import { js_property_parse_expression_add } from "./js_property_parse_expression_add.mjs";
import { js_dollar_choices } from "./js_dollar_choices.mjs";
import { function_transform_marker_specified } from "./function_transform_marker_specified.mjs";
import { marker } from "./marker.mjs";
export async function js_dollar_new(code) {
  marker("1");
  let combined = js_dollar_new_name(code);
  await function_new(combined);
  async function lambda2(ast) {
    let r = js_statement_return_empty();
    let body_block = js_declaration_single_block_body(ast);
    list_add(body_block, r);
    await js_dollar_new_args_inner(ast);
  }
  await function_transform(combined, lambda2);
  async function lambda(a) {
    let { ast } = a;
    let elements = marker_next_declare_single_init_elements(a);
    let oe = {
      type: "ObjectExpression",
      properties: [],
    };
    let { properties } = oe;
    let code_string = js_code_string(code);
    js_property_parse_expression_add("name", code_string, properties);
    js_property_parse_expression_add("fn", combined, properties);
    list_add(elements, oe);
    await js_imports_missing_add(ast);
  }
  let code2 = await function_transform_marker_specified(
    js_dollar_choices.name,
    "choices",
    lambda,
  );
  return code2;
}
