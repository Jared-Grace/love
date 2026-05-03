import { text_combine } from "../../../love/public/src/text_combine.mjs";
import { app_replace_url_suffix_dev_hash } from "../../../love/public/src/app_replace_url_suffix_dev_hash.mjs";
import { app_replace_tests_run_e2e_deployed } from "../../../love/public/src/app_replace_tests_run_e2e_deployed.mjs";
import { app_replace } from "../../../love/public/src/app_replace.mjs";
import { html_update_latest_promote_deploy_app_fn } from "../../../love/public/src/html_update_latest_promote_deploy_app_fn.mjs";
import { app_replace_tests_run } from "../../../love/public/src/app_replace_tests_run.mjs";
import { app_replace_rule_sets_why_generate } from "../../../love/public/src/app_replace_rule_sets_why_generate.mjs";
import { server_url } from "../../../love/public/src/server_url.mjs";
export async function app_replace_deploy_inner() {
  "there is a potential rename, so these functions are ran after";
  await app_replace_rule_sets_why_generate();
  let url_prefix = server_url();
  let url_suffix = await app_replace_url_suffix_dev_hash();
  let combined = text_combine(left, right);
  await app_replace_tests_run(url_prefix);
  await html_update_latest_promote_deploy_app_fn(app_replace);
  await app_replace_tests_run_e2e_deployed();
}
