import { app_a_button_function_text_selected } from "./app_a_button_function_text_selected.mjs";
import { app_a_main } from "./app_a_main.mjs";
import { storage_local_get } from "./storage_local_get.mjs";
import { app_shared_screen_set } from "./app_shared_screen_set.mjs";
import { app_component } from "./app_component.mjs";
import { app_a_function } from "./app_a_function.mjs";
export async function app_a_app_run(context) {
  function back() {
    app_shared_screen_set(context, app_a_function);
  }
  let a_name = storage_local_get(app_a_main, "app_selected");
  let button_text = app_a_button_function_text_selected(context);
  await app_component(a_name, back, button_text);
}
