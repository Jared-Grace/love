import { list_add_unique } from "./list_add_unique.mjs";
import { app_a_function_name_selected_history_key } from "./app_a_function_name_selected_history_key.mjs";
import { app_a_function_name_selected_key } from "./app_a_function_name_selected_key.mjs";
import { list_slice_end } from "./list_slice_end.mjs";
import { storage_local_transform_context } from "./storage_local_transform_context.mjs";
import { storage_local_set_context } from "./storage_local_set_context.mjs";
import { app_a_function } from "./app_a_function.mjs";
import { app_shared_screen_set } from "./app_shared_screen_set.mjs";
export function app_a_function_select(context, f_name) {
  let key = app_a_function_name_selected_key();
  storage_local_set_context(context, key, f_name);
  function lambda(h) {
    list_add_unique(h, f_name);
    let max = 100;
    let result = list_slice_end(h, max);
    return result;
  }
  let key2 = app_a_function_name_selected_history_key();
  storage_local_transform_context(context, key2, [], lambda);
  app_shared_screen_set(context, app_a_function);
}
