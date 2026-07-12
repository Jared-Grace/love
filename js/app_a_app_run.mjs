import { app_a_button_function_text_selected } from "../../love/js/app_a_button_function_text_selected.mjs";
import { app_a } from "../../love/js/app_a.mjs";
import { storage_local_get } from "../../love/js/storage_local_get.mjs";
import { app_shared_screen_set } from "../../love/js/app_shared_screen_set.mjs";
import { app_component } from "../../love/js/app_component.mjs";
import { app_a_function } from "../../love/js/app_a_function.mjs";
export async function app_a_app_run(context) {
  function back() {
    app_shared_screen_set(context, app_a_function);
  }
  let a_name = storage_local_get(app_a, "app_selected");
  let button_text = app_a_button_function_text_selected(context);
  await app_component(a_name, back, button_text);
}
