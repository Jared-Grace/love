import { storage_local_initialize_context } from "../../../love/public/src/storage_local_initialize_context.mjs";
import { storage_local_set_context } from "../../../love/public/src/storage_local_set_context.mjs";
import { app_a_function } from "../../../love/public/src/app_a_function.mjs";
import { app_shared_screen_set } from "../../../love/public/src/app_shared_screen_set.mjs";
export function app_a_function_select(context, f_name) {
  storage_local_set_context(context, "f_name_selected", f_name);
  let value = storage_local_initialize_context(context2, key, value_initial);
  app_shared_screen_set(context, app_a_function);
}
