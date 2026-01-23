import { app_a_button_function } from "../../../love/public/src/app_a_button_function.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
import { app_a_function_name_selected_key } from "../../../love/public/src/app_a_function_name_selected_key.mjs";
import { app_a_function } from "../../../love/public/src/app_a_function.mjs";
import { app_generic_screen_set } from "../../../love/public/src/app_generic_screen_set.mjs";
import { storage_local_exists_context } from "../../../love/public/src/storage_local_exists_context.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
export function app_a_button_function_refresh(context) {
  marker("1");
  let root = object_property_get(context, "root");
  const key = app_a_function_name_selected_key();
  let exists = storage_local_exists_context(context, key);
  let button = null;
  if (exists) {
    let b = app_a_button_function(root, lambda2);
    button = b;
    function lambda2() {
      app_generic_screen_set(context, app_a_function);
    }
  }
  return button;
}
