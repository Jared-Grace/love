import { firebase_deploy_generic } from "../../love/js/firebase_deploy_generic.mjs";
import { apps_frozen_names } from "../../love/js/apps_frozen_names.mjs";
import { firebase_prod_app_unchanged_assert } from "../../love/js/firebase_prod_app_unchanged_assert.mjs";
import { firebase_prod_app_backup_auto } from "../../love/js/firebase_prod_app_backup_auto.mjs";
import { each_async } from "../../love/js/each_async.mjs";
export async function firebase_deploy() {
  let app_names = apps_frozen_names();
  await each_async(app_names, firebase_prod_app_unchanged_assert);
  await each_async(app_names, firebase_prod_app_backup_auto);
  let suffix = "";
  let stdout = await firebase_deploy_generic(suffix);
  return stdout;
}
