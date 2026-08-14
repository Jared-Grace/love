import { invoke_multiple_fn } from "./invoke_multiple_fn.mjs";
import { app_replace_rule_sets_fns } from "./app_replace_rule_sets_fns.mjs";
export function app_replace_rule_sets() {
  "Every rule set the replace app teaches, each one asked of the function that builds it.";
  let rule_sets = invoke_multiple_fn(app_replace_rule_sets_fns);
  return rule_sets;
}
