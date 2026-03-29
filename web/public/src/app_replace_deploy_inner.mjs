import { app_replace } from "../../../love/public/src/app_replace.mjs";
import { html_update_latest_promote_deploy_app_fn } from "../../../love/public/src/html_update_latest_promote_deploy_app_fn.mjs";
import { app_replace_tests_run } from "../../../love/public/src/app_replace_tests_run.mjs";
import { app_replace_rule_sets_why_generate } from "../../../love/public/src/app_replace_rule_sets_why_generate.mjs";
export async function app_replace_deploy_inner() {
  "there is a potential rename, so these functions are ran after";
  await app_replace_rule_sets_why_generate();
  await app_replace_tests_run();
  await html_update_latest_promote_deploy_app_fn(app_replace);
}
