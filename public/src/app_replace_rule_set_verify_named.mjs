import { function_run_args_none } from "../../../love/public/src/function_run_args_none.mjs";
import { app_replace_rule_set_verify } from "../../../love/public/src/app_replace_rule_set_verify.mjs";
export async function app_replace_rule_set_verify_named(rule_set_name) {
  let rs = await function_run_args_none(rule_set_name);
  app_replace_rule_set_verify(rs);
}
