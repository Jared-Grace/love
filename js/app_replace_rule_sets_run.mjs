import { function_run_args_none_fn } from "./function_run_args_none_fn.mjs";
import { app_replace_rule_sets } from "./app_replace_rule_sets.mjs";
export async function app_replace_rule_sets_run() {
  "run dynamically in case modification in previous step of deploy";
  let rule_sets = await function_run_args_none_fn(app_replace_rule_sets);
  return rule_sets;
}
