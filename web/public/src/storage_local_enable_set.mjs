import { storage_local_remove_app } from "../../../love/public/src/storage_local_remove_app.mjs";
import { storage_local_set_dictionary } from "../../../love/public/src/storage_local_set_dictionary.mjs";
import { storage_local_enabled } from "../../../love/public/src/storage_local_enabled.mjs";
import { global_function_set } from "../../../love/public/src/global_function_set.mjs";
export function storage_local_enable_set(v) {
  let dictionary = storage_local_remove_app(context);
  global_function_set(storage_local_enabled, v);
  storage_local_set_dictionary(context, dictionary);
}
