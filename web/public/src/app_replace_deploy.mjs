import { html_update_latest_promote_deploy_app_fn } from "../../../love/public/src/html_update_latest_promote_deploy_app_fn.mjs";
import { app_replace } from "../../../love/public/src/app_replace.mjs";
import { app_replace_tests_run } from "../../../love/public/src/app_replace_tests_run.mjs";
export async function app_replace_deploy() {
  await app_replace_tests_run();$a
  let app_fn = app_replace;
  await html_update_latest_promote_deploy_app_fn(app_fn);
}
