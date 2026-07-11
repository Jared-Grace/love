import { invoke_multiple_fn } from "../../../love/public/src/invoke_multiple_fn.mjs";
import { app_replace_rule_sets_fns } from "../../../love/public/src/app_replace_rule_sets_fns.mjs";
export function app_replace_rule_sets() {
  let rule_sets = invoke_multiple_fn(app_replace_rule_sets_fns);
  return rule_sets;
}
