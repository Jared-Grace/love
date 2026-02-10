import { app_a_button_function } from "../../../love/public/src/app_a_button_function.mjs";
import { app_a_function_name_selected_key } from "../../../love/public/src/app_a_function_name_selected_key.mjs";
import { app_a_function } from "../../../love/public/src/app_a_function.mjs";
import { app_shared_screen_set } from "../../../love/public/src/app_shared_screen_set.mjs";
import { storage_local_exists_context } from "../../../love/public/src/storage_local_exists_context.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
export function app_a_button_function_if_exists(context) {
  "if there is a selected function, then this creates button for it";
  const key = app_a_function_name_selected_key();
  let exists = storage_local_exists_context(context, key);
  let button = null;
  if (exists) {
    let root = property_get(context, "root");
    button = app_a_button_function(context, root, lambda2);
    function lambda2() {
      app_shared_screen_set(context, app_a_function);
    }
  }
  return button;
}
