import { app_replace_rule_set_rename } from "../../../love/public/src/app_replace_rule_set_rename.mjs";
import { app_replace_rule_sets_why_generate } from "../../../love/public/src/app_replace_rule_sets_why_generate.mjs";
import { app_replace_rule_sets_fns_migrate_capitalization_upper } from "../../../love/public/src/app_replace_rule_sets_fns_migrate_capitalization_upper.mjs";
import { html_update_latest_promote_deploy_app_fn } from "../../../love/public/src/html_update_latest_promote_deploy_app_fn.mjs";
import { app_replace } from "../../../love/public/src/app_replace.mjs";
import { app_replace_tests_run } from "../../../love/public/src/app_replace_tests_run.mjs";
export async function app_replace_deploy() {
  let result = await app_replace_rule_sets_fns_migrate_capitalization_upper();
  let f_name_after = await app_replace_rule_set_rename(f_name);
  await app_replace_rule_sets_why_generate();
  await app_replace_tests_run();
  await html_update_latest_promote_deploy_app_fn(app_replace);
}
