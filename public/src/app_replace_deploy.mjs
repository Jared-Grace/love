import { app_replace } from "../../../love/public/src/app_replace.mjs";
import { app_prefix_without_fn } from "../../../love/public/src/app_prefix_without_fn.mjs";
import { html_update_latest_promote_deploy } from "../../../love/public/src/html_update_latest_promote_deploy.mjs";
import { app_replace_tests_run } from "../../../love/public/src/app_replace_tests_run.mjs";
export async function app_replace_deploy() {
  await app_replace_tests_run();
  let app_fn = app_replace;
  let without = app_prefix_without_fn(app_fn);
  await html_update_latest_promote_deploy(without);
}
