import { app_replace_tests_run_e2e } from "../../../love/public/src/app_replace_tests_run_e2e.mjs";
import { app_replace_rule_set_verify_all } from "../../../love/public/src/app_replace_rule_set_verify_all.mjs";
export async function app_replace_tests_run() {
  let rule_sets = app_replace_rule_set_verify_all();
  await app_replace_tests_run_e2e(rule_sets);
}
