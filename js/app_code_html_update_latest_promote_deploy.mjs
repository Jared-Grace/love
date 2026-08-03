import { app_code } from "./app_code.mjs";
import { app_shared_name_prefix_without_fn } from "./app_shared_name_prefix_without_fn.mjs";
import { html_update_latest_promote_deploy } from "./html_update_latest_promote_deploy.mjs";
export async function app_code_html_update_latest_promote_deploy() {
  "Takes the code app all the way out in one command: builds it, moves it up the stages, and puts it live.";
  "Both halves come back separately, and the copy happens before the check that can refuse to publish, so a refused run still leaves the published folder holding this build - read the answer rather than the exit code.";
  let without = app_shared_name_prefix_without_fn(app_code);
  let r = await html_update_latest_promote_deploy(without);
  return r;
}
