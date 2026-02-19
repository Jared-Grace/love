import { invoke_multiple } from "../../../love/public/src/invoke_multiple.mjs";
import { app_replace_rule_sets_fns } from "../../../love/public/src/app_replace_rule_sets_fns.mjs";
export function app_replace_rule_sets() {
  let r = app_replace_rule_sets_fns();
  let mapped = invoke_multiple(r);
  return mapped;
}
