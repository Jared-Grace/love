import { storage_local_transform_context } from "../../../love/public/src/storage_local_transform_context.mjs";
import { list_add } from "../../../love/public/src/list_add.mjs";
import { storage_local_set_context } from "../../../love/public/src/storage_local_set_context.mjs";
import { app_a_function } from "../../../love/public/src/app_a_function.mjs";
import { app_shared_screen_set } from "../../../love/public/src/app_shared_screen_set.mjs";
export function app_a_function_select(context, f_name) {
  storage_local_set_context(context, "f_name_selected", f_name);
  let h = storage_local_transform_context(context, "f_name_selected", []);
  list_add(h, f_name);
  app_shared_screen_set(context, app_a_function);
}
