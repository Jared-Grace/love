import { firebase_deploy_bypass_unchaged_assert_confirm } from "./firebase_deploy_bypass_unchaged_assert_confirm.mjs";
import { equal_assert } from "./equal_assert.mjs";
import { apps_frozen_names } from "./apps_frozen_names.mjs";
import { each_async } from "./each_async.mjs";
import { firebase_prod_app_backup_auto } from "./firebase_prod_app_backup_auto.mjs";
import { firebase_deploy_generic } from "./firebase_deploy_generic.mjs";
export async function firebase_deploy_bypass_unchanged(confirm) {
  let expected = firebase_deploy_bypass_unchaged_assert_confirm();
  equal_assert(confirm, expected);
  let app_names = apps_frozen_names();
  await each_async(app_names, firebase_prod_app_backup_auto);
  let suffix = "";
  let stdout = await firebase_deploy_generic(suffix);
  return stdout;
}
