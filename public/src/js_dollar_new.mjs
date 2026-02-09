import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { js_declaration_single_block_body_add_return } from "../../../love/public/src/js_declaration_single_block_body_add_return.mjs";
import { marker_next_declare_single_init_elements } from "../../../love/public/src/marker_next_declare_single_init_elements.mjs";
import { js_dollar_new_args_inner } from "../../../love/public/src/js_dollar_new_args_inner.mjs";
import { js_dollar_new_name } from "../../../love/public/src/js_dollar_new_name.mjs";
import { function_new } from "../../../love/public/src/function_new.mjs";
import { js_imports_missing_add } from "../../../love/public/src/js_imports_missing_add.mjs";
import { function_transform } from "../../../love/public/src/function_transform.mjs";
import { list_add } from "../../../love/public/src/list_add.mjs";
import { js_code_text } from "../../../love/public/src/js_code_text.mjs";
import { js_property_parse_expression_add } from "../../../love/public/src/js_property_parse_expression_add.mjs";
import { js_dollar_choices } from "../../../love/public/src/js_dollar_choices.mjs";
import { function_transform_marker_specified } from "../../../love/public/src/function_transform_marker_specified.mjs";
export async function js_dollar_new(code) {
  let combined = js_dollar_new_name(code);
  await function_new(combined);
  async function lambda2(ast) {
    js_declaration_single_block_body_add_return(ast);
    await js_dollar_new_args_inner(ast);
  }
  await function_transform(combined, lambda2);
  async function lambda(a) {
    let ast = object_property_get(a, "ast");
    let elements = marker_next_declare_single_init_elements(a);
    let oe = {
      type: "ObjectExpression",
      properties: [],
    };
    let properties = object_property_get(oe, "properties");
    let code_string = js_code_text(code);
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
