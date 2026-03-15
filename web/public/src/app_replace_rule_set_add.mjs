import { function_copy_open } from "../../../love/public/src/function_copy_open.mjs";
import { text_combine } from "../../../love/public/src/text_combine.mjs";
import { function_new_transform } from "../../../love/public/src/function_new_transform.mjs";
export async function app_replace_rule_set_add(name) {
  let prefix = "app_replace_rule_set_";
  let combined = text_combine(prefix, name);
  let name2 = await function_copy_open(f_name_old, f_name_new);
  async function lambda(ast) {}
  let output = await function_new_transform(combined, lambda);
}
