import { app_shared_name_prefix_without_fn } from "./app_shared_name_prefix_without_fn.mjs";
import { app_code } from "./app_code.mjs";
import { html_public_latest_refresh_multiple_firebase_deploy } from "./html_public_latest_refresh_multiple_firebase_deploy.mjs";
export async function app_code_html_public_latest_refresh_multiple_firebase_deploy() {
  let without = app_shared_name_prefix_without_fn(app_code);
  let r = await html_public_latest_refresh_multiple_firebase_deploy(without);
}
