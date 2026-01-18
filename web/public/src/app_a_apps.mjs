import { storage_local_get_context } from "../../../love/public/src/storage_local_get_context.mjs";
import { app_a_button } from "../../../love/public/src/app_a_button.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { app_generic_screen_set } from "../../../love/public/src/app_generic_screen_set.mjs";
import { app_a_app_run } from "../../../love/public/src/app_a_app_run.mjs";
import { app_a } from "../../../love/public/src/app_a.mjs";
import { storage_local_set } from "../../../love/public/src/storage_local_set.mjs";
import { apps_names } from "../../../love/public/src/apps_names.mjs";
import { app_a_functions_generic } from "../../../love/public/src/app_a_functions_generic.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
import { app_a_function } from "./app_a_function.mjs";
export async function app_a_apps(context) {
  let root = object_property_get(context, "root");
  function lambda2() {
    app_generic_screen_set(context, app_a_function);
  }
  let f_name = storage_local_get_context(context, "f_name_selected");
  let component = app_a_button(root, "function: " + f_name, lambda2);
  let mapped = await apps_names();
  marker("1");
  async function on_select(a_name) {
    storage_local_set(app_a, "app_selected", a_name);
    app_generic_screen_set(context, app_a_app_run);
  }
  app_a_functions_generic(context, "app", mapped, on_select);
}
