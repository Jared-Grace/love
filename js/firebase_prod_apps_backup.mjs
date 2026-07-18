import { apps_frozen_names } from "./apps_frozen_names.mjs";
import { firebase_prod_app_backup_auto } from "./firebase_prod_app_backup_auto.mjs";
import { each_async } from "./each_async.mjs";
export async function firebase_prod_apps_backup() {
  let app_names = apps_frozen_names();
  await each_async(app_names, firebase_prod_app_backup_auto);
}
