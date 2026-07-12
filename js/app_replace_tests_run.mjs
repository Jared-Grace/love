import { app_replace_tests_run_e2e } from "./app_replace_tests_run_e2e.mjs";
import { app_replace_rule_set_verify_all } from "./app_replace_rule_set_verify_all.mjs";
export async function app_replace_tests_run(url_prefix) {
  app_replace_rule_set_verify_all();
  await app_replace_tests_run_e2e(url_prefix);
}
