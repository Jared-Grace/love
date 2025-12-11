import { app_a_function } from "../../../love/public/src/app_a_function.mjs";
import { app_generic_screen_set } from "../../../love/public/src/app_generic_screen_set.mjs";
import { storage_local_set } from "../../../love/public/src/storage_local_set.mjs";
export function app_a_function_select(context, f_name) {
  let { app_fn } = context;
  storage_local_set(app_fn, "f_name_selected", f_name);
  app_generic_screen_set(context, app_a_function);
}
