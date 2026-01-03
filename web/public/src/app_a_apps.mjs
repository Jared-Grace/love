import { app_a_app_run } from "../../../love/public/src/app_a_app_run.mjs";
import { app_a } from "../../../love/public/src/app_a.mjs";
import { storage_local_set } from "../../../love/public/src/storage_local_set.mjs";
import { apps_names } from "../../../love/public/src/apps_names.mjs";
import { app_a_functions_generic } from "../../../love/public/src/app_a_functions_generic.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function app_a_apps(context) {
  let mapped = await apps_names();
  marker("1");
  async function on_select(a_name) {
    storage_local_set(app_a, "app_selected", a_name);
    await app_a_app_run(context);
  }
  app_a_functions_generic(context, "app", mapped, on_select);
}
