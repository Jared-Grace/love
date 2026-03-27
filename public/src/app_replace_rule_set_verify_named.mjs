import { app_replace_rule_set_verify_path_get } from "../../../love/public/src/app_replace_rule_set_verify_path_get.mjs";
import { function_run_args_none } from "../../../love/public/src/function_run_args_none.mjs";
import { app_replace_rule_set_verify } from "../../../love/public/src/app_replace_rule_set_verify.mjs";
export async function app_replace_rule_set_verify_named(rule_set_name) {
  let rs = await function_run_args_none(rule_set_name);
  let dfss = app_replace_rule_set_verify(rs);
  let path = app_replace_rule_set_verify_path_get(dfs);
}
