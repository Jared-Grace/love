import { app_a } from "../../../love/public/src/app_a.mjs";
import { storage_local_set } from "../../../love/public/src/storage_local_set.mjs";
import { app_a_function } from "../../../love/public/src/app_a_function.mjs";
import { app_generic_screen_set } from "../../../love/public/src/app_generic_screen_set.mjs";
import { app_component } from "../../../love/public/src/app_component.mjs";
import { apps_names } from "../../../love/public/src/apps_names.mjs";
import { app_a_functions_generic } from "../../../love/public/src/app_a_functions_generic.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function app_a_apps(context) {
  let mapped = await apps_names();
  marker("1");
  async function on_select(a_name) {
    function lambda() {
      app_generic_screen_set(context, app_a_function);
    }
    await app_component(a_name, lambda);
    storage_local_set(app_a, "app_selected", a_name);
  }
  app_a_functions_generic(context, "app", mapped, on_select);
}
