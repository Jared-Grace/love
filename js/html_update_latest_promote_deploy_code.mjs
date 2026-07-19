import { app_code } from "./app_code.mjs";
import { app_shared_name_prefix_without_fn } from "./app_shared_name_prefix_without_fn.mjs";
import { html_update_latest_promote_deploy } from "./html_update_latest_promote_deploy.mjs";
export async function html_update_latest_promote_deploy_code() {
  let without = app_shared_name_prefix_without_fn(app_code);
  let r = await html_update_latest_promote_deploy(without);
  return r;
}
