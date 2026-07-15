import { app_replace_tests_run_e2e_dev } from "./app_replace_tests_run_e2e_dev.mjs";
import { app_replace_rule_set_verify_all } from "./app_replace_rule_set_verify_all.mjs";
export async function app_replace_tests_run_dev() {
  "full QA for this app on the dev build: the solver reachability gate (verify_all) then the parallel headless browser e2e; the no-arg dev sibling of app_replace_tests_run, and the per-app unit the all-apps pre-fb QA composes";
  app_replace_rule_set_verify_all();
  await app_replace_tests_run_e2e_dev();
}
