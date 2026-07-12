import { app_replace_url_dev } from "./app_replace_url_dev.mjs";
import { app_replace_tests_run_e2e_deployed } from "./app_replace_tests_run_e2e_deployed.mjs";
import { app_replace } from "./app_replace.mjs";
import { html_update_latest_promote_deploy_app_fn } from "./html_update_latest_promote_deploy_app_fn.mjs";
import { app_replace_tests_run } from "./app_replace_tests_run.mjs";
import { app_replace_rule_sets_why_generate } from "./app_replace_rule_sets_why_generate.mjs";
export async function app_replace_deploy_inner() {
  "there is a potential rename, so these functions are ran after";
  await app_replace_rule_sets_why_generate();
  let combined = await app_replace_url_dev();
  await app_replace_tests_run(combined);
  await html_update_latest_promote_deploy_app_fn(app_replace);
  await app_replace_tests_run_e2e_deployed();
}
