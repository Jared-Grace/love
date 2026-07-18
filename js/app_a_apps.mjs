import { app_a_app } from "./app_a_app.mjs";
import { app_a_app_selected_key } from "./app_a_app_selected_key.mjs";
import { app_a_button_function_if_exists } from "./app_a_button_function_if_exists.mjs";
import { app_shared_screen_go } from "./app_shared_screen_go.mjs";
import { apps_names } from "./apps_names.mjs";
import { app_a_list_chooser } from "./app_a_list_chooser.mjs";
export async function app_a_apps(context) {
  app_a_button_function_if_exists(context);
  let mapped = await apps_names();
  async function on_select(a_name) {
    let key = app_a_app_selected_key();
    app_shared_screen_go(context, key, a_name, app_a_app);
  }
  app_a_list_chooser(context, "app", mapped, on_select);
}
