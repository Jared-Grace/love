import { js_imports_missing_add_specified } from "../../../love/public/src/js_imports_missing_add_specified.mjs";
import { function_copy } from "../../../love/public/src/function_copy.mjs";
import { function_transform } from "../../../love/public/src/function_transform.mjs";
import { list_add } from "../../../love/public/src/list_add.mjs";
import { js_array_expression_single_elements } from "../../../love/public/src/js_array_expression_single_elements.mjs";
import { js_parse_expression } from "../../../love/public/src/js_parse_expression.mjs";
import { text_unique } from "../../../love/public/src/text_unique.mjs";
import { functions_names } from "../../../love/public/src/functions_names.mjs";
export async function app_replace_rule_set_add_generic(fn_base_name, fns_list) {
  let f_names = await functions_names();
  const f = fn_base_name;
  let name_new = text_unique(f_names, f, "_");
  await function_copy(f, name_new);
  let expression = js_parse_expression(name_new);
  async function lambda(ast) {
    let elements = js_array_expression_single_elements(ast);
    list_add(elements, expression);
    await js_imports_missing_add_specified(ast, [expression]);
  }
  let output = await function_transform(fns_list.name, lambda);
  return name_new;
}
