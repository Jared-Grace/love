import { invoke_multiple } from "../../../love/public/src/invoke_multiple.mjs";
import { each } from "../../../love/public/src/each.mjs";
import { app_replace_rule_sets_fns } from "../../../love/public/src/app_replace_rule_sets_fns.mjs";
import { app_replace_rule_set_verify } from "../../../love/public/src/app_replace_rule_set_verify.mjs";
export function app_replace_rule_set_verify_all() {
  let rule_set_gets = app_replace_rule_sets_fns();
  let rule_sets = invoke_multiple(rule_set_gets);
  each(rule_sets, app_replace_rule_set_verify);
  return rule_set_gets;
}
