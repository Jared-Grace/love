import { app_code } from "../../../love/public/src/app_code.mjs";
import { app_prefix_without_fn } from "../../../love/public/src/app_prefix_without_fn.mjs";
import { html_update_latest_promote_deploy } from "../../../love/public/src/html_update_latest_promote_deploy.mjs";
export async function html_update_latest_promote_deploy_code() {
  let without = app_prefix_without_fn(app_code);
  let r = await html_update_latest_promote_deploy(without);
  return r;
}
