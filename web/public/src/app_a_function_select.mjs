import { list_remove_all } from "../../../love/public/src/list_remove_all.mjs";
import { list_slice_end } from "../../../love/public/src/list_slice_end.mjs";
import { storage_local_transform_context } from "../../../love/public/src/storage_local_transform_context.mjs";
import { list_add } from "../../../love/public/src/list_add.mjs";
import { storage_local_set_context } from "../../../love/public/src/storage_local_set_context.mjs";
import { app_a_function } from "../../../love/public/src/app_a_function.mjs";
import { app_shared_screen_set } from "../../../love/public/src/app_shared_screen_set.mjs";
export function app_a_function_select(context, f_name) {
  storage_local_set_context(context, "f_name_selected", f_name);
  function lambda(h) {
    list_remove_all(h, f_name);
    list_add(h, f_name);
    let max = 100;
    let result = list_slice_end(h, max);
    return result;
  }
  storage_local_transform_context(
    context,
    "f_name_selected_history",
    [],
    lambda,
  );
  app_shared_screen_set(context, app_a_function);
}
