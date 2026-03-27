import { function_run_args_none } from "../../../love/public/src/function_run_args_none.mjs";
import { app_replace_rule_sets } from "../../../love/public/src/app_replace_rule_sets.mjs";
import { app_replace_rule_set_verify } from "../../../love/public/src/app_replace_rule_set_verify.mjs";
import { each } from "./each.mjs";
export async function app_replace_rule_set_verify_all() {
  "run dynamically in case modification in previous step of deploy";
  let rule_sets = await function_run_args_none(app_replace_rule_sets);
  each(rule_sets, app_replace_rule_set_verify);
}
