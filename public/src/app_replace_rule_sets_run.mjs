import { app_replace_rule_sets } from "../../../love/public/src/app_replace_rule_sets.mjs";
import { function_run_args_none } from "../../../love/public/src/function_run_args_none.mjs";
export async function app_replace_rule_sets_run() {
  "run dynamically in case modification in previous step of deploy";
  let rule_sets = await function_run_args_none(app_replace_rule_sets);
  return rule_sets;
}
