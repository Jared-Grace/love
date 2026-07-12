import { text_unique_underscore } from "./text_unique_underscore.mjs";
import { js_imports_missing_add_specified_single } from "./js_imports_missing_add_specified_single.mjs";
import { function_copy } from "./function_copy.mjs";
import { function_transform } from "./function_transform.mjs";
import { list_add } from "./list_add.mjs";
import { js_array_expression_single_elements } from "./js_array_expression_single_elements.mjs";
import { js_parse_expression } from "./js_parse_expression.mjs";
import { functions_names } from "./functions_names.mjs";
export async function app_replace_rule_set_add_generic(fn_base_name, fns_list) {
  let f_names = await functions_names();
  let f = fn_base_name;
  let name_new = text_unique_underscore(f_names, f);
  await function_copy(f, name_new);
  let expression = js_parse_expression(name_new);
  async function lambda(ast) {
    let elements = js_array_expression_single_elements(ast);
    list_add(elements, expression);
    await js_imports_missing_add_specified_single(ast, name_new);
  }
  let output = await function_transform(fns_list.name, lambda);
  return name_new;
}
