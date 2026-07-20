import { firebase_deploy_bypass_unchaged_assert_confirm } from "./firebase_deploy_bypass_unchaged_assert_confirm.mjs";
import { firebase_deploy_bypass_unchanged } from "./firebase_deploy_bypass_unchanged.mjs";
import { apps_frozen_names } from "./apps_frozen_names.mjs";
import { firebase_prod_app_unchanged_assert } from "./firebase_prod_app_unchanged_assert.mjs";
import { list_map_unordered_async } from "./list_map_unordered_async.mjs";
import { qa_gate_run } from "./qa_gate_run.mjs";
import { app_shared_dev_stale_rebuild } from "./app_shared_dev_stale_rebuild.mjs";
import { lock_error } from "./lock_error.mjs";
import { firebase_deploy_locked_message } from "./firebase_deploy_locked_message.mjs";
export async function firebase_deploy() {
  async function lambda() {
    await qa_gate_run();
    "advancing prod must never leave the local dev apps behind, so bring any lagging dev bundle up to date before publishing";
    await app_shared_dev_stale_rebuild();
    let app_names = apps_frozen_names();
    await list_map_unordered_async(app_names, firebase_prod_app_unchanged_assert);
    let confirm = firebase_deploy_bypass_unchaged_assert_confirm();
    let stdout = await firebase_deploy_bypass_unchanged(confirm);
    return stdout;
  }
  let message = firebase_deploy_locked_message();
  let r = await lock_error(firebase_deploy.name, lambda, firebase_deploy.name, message);
  return r;
}
