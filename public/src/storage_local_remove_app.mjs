import { each } from "../../../love/public/src/each.mjs";
import { storage_local_remove } from "../../../love/public/src/storage_local_remove.mjs";
import { storage_local_keys_values } from "../../../karate_code/public/src/storage_local_keys_values.mjs";
import { storage_local_keys_context } from "../../../love/public/src/storage_local_keys_context.mjs";
export function storage_local_remove_app(context) {
  let { app_fn: af } = context;
  ("migrating from local storage to global");
  let keys = storage_local_keys_context(context);
  ("confirm local storage values");
  let dictionary = storage_local_keys_values(context, keys);
  function lambda3(key) {
    storage_local_remove(af, key);
  }
  each(keys, lambda3);
  return dictionary;
}
