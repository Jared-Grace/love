import { fn_name } from "./fn_name.mjs";
import { function_copy_list_add } from "./function_copy_list_add.mjs";
import { app_replace_rule_sets_fns } from "./app_replace_rule_sets_fns.mjs";
export async function app_replace_rule_set_add() {
  let base = fn_name("app_replace_rule_set_new");
  let fns_list = app_replace_rule_sets_fns;
  await function_copy_list_add(base, fns_list);
}
