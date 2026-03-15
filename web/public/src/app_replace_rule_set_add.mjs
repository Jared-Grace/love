import { text_combine } from "../../../love/public/src/text_combine.mjs";
import { function_new_transform } from "../../../love/public/src/function_new_transform.mjs";
export async function app_replace_rule_set_add(name) {
  let prefix = "app_replace_rule_set_";
  let combined = text_combine(prefix, name);
  async function lambda(ast) {}
  let output = await function_new_transform(combined, lambda);
}
