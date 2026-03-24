import { html_update_latest_promote_deploy } from "../../../love/public/src/html_update_latest_promote_deploy.mjs";
import { app_replace_tests_run } from "../../../love/public/src/app_replace_tests_run.mjs";
export async function app_replace_deploy() {
  await app_replace_tests_run();
  let r = await html_update_latest_promote_deploy(search);
}
