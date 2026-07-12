import { app_replace_rule_set_add_generic } from "./app_replace_rule_set_add_generic.mjs";
import { app_replace_rule_sets_fns } from "./app_replace_rule_sets_fns.mjs";
import { app_new_rule_set_new } from "./app_new_rule_set_new.mjs";
export async function app_replace_rule_set_add() {
  let base = app_new_rule_set_new.name;
  let fns_list = app_replace_rule_sets_fns;
  await app_replace_rule_set_add_generic(base, fns_list);
}
