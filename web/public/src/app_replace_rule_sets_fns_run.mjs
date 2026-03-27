import { app_replace_rule_sets_fns } from "../../../love/public/src/app_replace_rule_sets_fns.mjs";
import { function_run_args_none } from "../../../love/public/src/function_run_args_none.mjs";
export async function app_replace_rule_sets_fns_run() {
  "run dynamically in case modification in previous step of deploy";
  let r2 = await function_run_args_none_fn(app_replace_rule_sets_fns);
  return r2;
}
