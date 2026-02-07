import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { app_a_function } from "../../../love/public/src/app_a_function.mjs";
import { app_shared_screen_set } from "../../../love/public/src/app_shared_screen_set.mjs";
import { storage_local_set } from "../../../love/public/src/storage_local_set.mjs";
export function app_a_function_select(context, f_name) {
  let app_fn = object_property_get(context, "app_fn");
  storage_local_set(app_fn, "f_name_selected", f_name);
  app_shared_screen_set(context, app_a_function);
}
