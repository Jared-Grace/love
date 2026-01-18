import { app_a_app } from "../../../love/public/src/app_a_app.mjs";
import { app_a_app_selected_key } from "../../../love/public/src/app_a_app_selected_key.mjs";
import { app_a_button_function } from "../../../love/public/src/app_a_button_function.mjs";
import { app_generic_screen_set } from "../../../love/public/src/app_generic_screen_set.mjs";
import { apps_names } from "../../../love/public/src/apps_names.mjs";
import { app_a_functions_generic } from "../../../love/public/src/app_a_functions_generic.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
import { storage_local_set_context } from "./storage_local_set_context.mjs";
export async function app_a_apps(context) {
  app_a_button_function(context);
  let mapped = await apps_names();
  marker("1");
  async function on_select(a_name) {
    let key = app_a_app_selected_key();
    storage_local_set_context(context, key, a_name);
    app_generic_screen_set(context, app_a_app);
  }
  app_a_functions_generic(context, "app", mapped, on_select);
}
