import { js_dollar_new_name } from "../../../love/public/src/js_dollar_new_name.mjs";
import { js_dollar_choices } from "../../../love/public/src/js_dollar_choices.mjs";
import { js_imports_missing_add } from "../../../love/public/src/js_imports_missing_add.mjs";
import { list_add } from "../../../love/public/src/list_add.mjs";
import { js_property_parse_expression_add } from "../../../love/public/src/js_property_parse_expression_add.mjs";
import { js_code_string } from "../../../love/public/src/js_code_string.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { js_array_expression_single_elements } from "../../../love/public/src/js_array_expression_single_elements.mjs";
import { function_transform } from "../../../love/public/src/function_transform.mjs";
export async function js_dollar_new_update_list(code) {
  let combined = js_dollar_new_name(code);
  async function lambda(ast) {
    let elements = js_array_expression_single_elements(ast);
    let oe = {
      type: "ObjectExpression",
      properties: [],
    };
    let properties = property_get(oe, "properties");
    let code_string = js_code_string(code);
    js_property_parse_expression_add("name", code_string, properties);
    js_property_parse_expression_add("fn", combined, properties);
    list_add(elements, oe);
    await js_imports_missing_add(ast);
  }
  let code2 = await function_transform(js_dollar_choices.name, lambda);
  return code2;
}
