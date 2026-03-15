import { app_new_rule_set_new } from "../../../love/public/src/app_new_rule_set_new.mjs";
import { function_copy_open } from "../../../love/public/src/function_copy_open.mjs";
import { text_combine } from "../../../love/public/src/text_combine.mjs";
export async function app_replace_rule_set_add(name) {
  let prefix = "app_replace_rule_set_";
  let combined = text_combine(prefix, name);
  let name2 = await function_copy_open(app_new_rule_set_new.name, combined);
}
