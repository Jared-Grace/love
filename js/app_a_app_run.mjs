import { app_a_app_selected_key } from "./app_a_app_selected_key.mjs";
import { app_a_button_function_text_selected } from "./app_a_button_function_text_selected.mjs";
import { app_a } from "./app_a.mjs";
import { storage_session_get } from "./storage_session_get.mjs";
import { app_shared_screen_set } from "./app_shared_screen_set.mjs";
import { app_shared_component } from "./app_shared_component.mjs";
import { app_a_function } from "./app_a_function.mjs";
export async function app_a_app_run(context) {
  async function back() {
    await app_shared_screen_set(context, app_a_function);
  }
  let key = app_a_app_selected_key();
  let a_name = storage_session_get(app_a, key);
  let button_text = app_a_button_function_text_selected(context);
  await app_shared_component(a_name, back, button_text);
}
