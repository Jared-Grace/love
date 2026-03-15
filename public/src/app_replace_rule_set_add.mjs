import { functions_names } from "../../../love/public/src/functions_names.mjs";
import { text_unique } from "../../../love/public/src/text_unique.mjs";
import { js_parse_expression } from "../../../love/public/src/js_parse_expression.mjs";
import { list_add } from "../../../love/public/src/list_add.mjs";
import { app_replace_rule_sets_fns } from "../../../love/public/src/app_replace_rule_sets_fns.mjs";
import { js_array_expression_single_elements } from "../../../love/public/src/js_array_expression_single_elements.mjs";
import { function_transform } from "../../../love/public/src/function_transform.mjs";
import { app_new_rule_set_new } from "../../../love/public/src/app_new_rule_set_new.mjs";
import { function_copy_open } from "../../../love/public/src/function_copy_open.mjs";
export async function app_replace_rule_set_add() {
  let f_names = await functions_names();
  const f = app_new_rule_set_new.name;
  let unique = text_unique(f_names, f, "_");
  await function_copy_open(f, unique);
  let expression = js_parse_expression(unique);
  async function lambda(ast) {
    let elements = js_array_expression_single_elements(ast);
    list_add(elements, expression);
  }
  let output = await function_transform(app_replace_rule_sets_fns.name, lambda);
}
