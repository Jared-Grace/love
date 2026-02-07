import { app_a_app } from "../../../love/public/src/app_a_app.mjs";
import { app_a_app_selected_key } from "../../../love/public/src/app_a_app_selected_key.mjs";
import { app_a_button_function_refresh } from "../../../love/public/src/app_a_button_function_refresh.mjs";
import { app_shared_screen_set } from "../../../love/public/src/app_shared_screen_set.mjs";
import { apps_names } from "../../../love/public/src/apps_names.mjs";
import { app_a_list_chooser } from "../../../love/public/src/app_a_list_chooser.mjs";
import { storage_local_set_context } from "../../../love/public/src/storage_local_set_context.mjs";
export async function app_a_apps(context) {
  app_a_button_function_refresh(context);
  let mapped = await apps_names();
  async function on_select(a_name) {
    let key = app_a_app_selected_key();
    storage_local_set_context(context, key, a_name);
    app_shared_screen_set(context, app_a_app);
  }
  app_a_list_chooser(context, "app", mapped, on_select);
}
