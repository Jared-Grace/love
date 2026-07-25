import { list_add_unique } from "./list_add_unique.mjs";
import { app_a_function_name_selected_history_key } from "./app_a_function_name_selected_history_key.mjs";
import { app_a_function_name_selected_key } from "./app_a_function_name_selected_key.mjs";
import { list_slice_end_try } from "./list_slice_end_try.mjs";
import { storage_local_transform_context } from "./storage_local_transform_context.mjs";
import { storage_session_set_context } from "./storage_session_set_context.mjs";
import { app_a_function } from "./app_a_function.mjs";
import { app_shared_screen_set } from "./app_shared_screen_set.mjs";
export async function app_a_function_select(context, f_name) {
  "the pick is this tab's, but the history it feeds is yours everywhere, so the two are kept apart";
  let key = app_a_function_name_selected_key();
  storage_session_set_context(context, key, f_name);
  function lambda(h) {
    list_add_unique(h, f_name);
    let max = 100;
    ("a history shorter than the cap is the normal case, so keep what is there rather than refusing to slice past the start");
    let result = list_slice_end_try(h, max);
    return result;
  }
  let key2 = app_a_function_name_selected_history_key();
  storage_local_transform_context(context, key2, [], lambda);
  await app_shared_screen_set(context, app_a_function);
}
