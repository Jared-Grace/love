import { firebase_deploy_bypass_unchaged_assert_confirm } from "./firebase_deploy_bypass_unchaged_assert_confirm.mjs";
import { firebase_deploy_bypass_unchanged } from "./firebase_deploy_bypass_unchanged.mjs";
import { apps_frozen_names } from "./apps_frozen_names.mjs";
import { firebase_prod_app_unchanged_assert } from "./firebase_prod_app_unchanged_assert.mjs";
import { list_map_unordered_async } from "./list_map_unordered_async.mjs";
import { qa_gate_run } from "./qa_gate_run.mjs";
export async function firebase_deploy() {
  await qa_gate_run();
  let app_names = apps_frozen_names();
  await list_map_unordered_async(app_names, firebase_prod_app_unchanged_assert);
  let confirm = firebase_deploy_bypass_unchaged_assert_confirm();
  let stdout = await firebase_deploy_bypass_unchanged(confirm);
  return stdout;
}
