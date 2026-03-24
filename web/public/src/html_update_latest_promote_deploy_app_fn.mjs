import { html_update_latest_promote_deploy } from "../../../love/public/src/html_update_latest_promote_deploy.mjs";
import { app_prefix_without_fn } from "../../../love/public/src/app_prefix_without_fn.mjs";
export async function html_update_latest_promote_deploy_app_fn(app_fn) {
  let without = app_prefix_without_fn(app_fn);
  await html_update_latest_promote_deploy(without);
}
