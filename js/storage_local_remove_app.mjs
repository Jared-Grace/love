import { property_get } from "./property_get.mjs";
import { storage_local_keys_context_empty_is_assert } from "./storage_local_keys_context_empty_is_assert.mjs";
import { each } from "./each.mjs";
import { storage_local_remove } from "./storage_local_remove.mjs";
import { storage_local_keys_values } from "./storage_local_keys_values.mjs";
import { storage_local_keys_context } from "./storage_local_keys_context.mjs";
export function storage_local_remove_app(context) {
  let af = property_get(context, "app_fn");
  ("migrating from local storage to global");
  let keys = storage_local_keys_context(context);
  ("confirm local storage values");
  let dictionary = storage_local_keys_values(context, keys);
  function lambda(key) {
    storage_local_remove(af, key);
  }
  each(keys, lambda);
  storage_local_keys_context_empty_is_assert(context);
  return dictionary;
}
