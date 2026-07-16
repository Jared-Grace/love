import { app_replace_tests_run_e2e_dev } from "./app_replace_tests_run_e2e_dev.mjs";
import { app_replace_rule_set_verify_all } from "./app_replace_rule_set_verify_all.mjs";
import { app_replace_tests_proof_dev } from "./app_replace_tests_proof_dev.mjs";
export async function app_replace_tests_run_dev() {
  "full QA for this app on the dev build: the solver reachability gate (verify_all), the parallel headless browser e2e, then the proof-rail interaction test; the no-arg dev sibling of app_replace_tests_run, and the per-app unit the all-apps pre-fb QA composes";
  app_replace_rule_set_verify_all();
  await app_replace_tests_run_e2e_dev();
  await app_replace_tests_proof_dev();
}
