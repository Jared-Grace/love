import { js_parse_expression } from "../../../love/public/src/js_parse_expression.mjs";
import { list_add } from "../../../love/public/src/list_add.mjs";
import { app_replace_rule_sets_fns } from "../../../love/public/src/app_replace_rule_sets_fns.mjs";
import { js_array_expression_single_elements } from "../../../love/public/src/js_array_expression_single_elements.mjs";
import { function_transform } from "../../../love/public/src/function_transform.mjs";
import { app_new_rule_set_new } from "../../../love/public/src/app_new_rule_set_new.mjs";
import { function_copy_open } from "../../../love/public/src/function_copy_open.mjs";
import { text_combine } from "../../../love/public/src/text_combine.mjs";
export async function app_replace_rule_set_add(name) {
  let prefix = "app_replace_rule_set_";
  let combined = text_combine(prefix, name);
  await function_copy_open(app_new_rule_set_new.name, combined);
  async function lambda(ast) {
    let elements = js_array_expression_single_elements(ast);
    let expression = js_parse_expression(code_expression);
    list_add(elements, item);
  }
  let output = await function_transform(app_replace_rule_sets_fns.name, lambda);
}
