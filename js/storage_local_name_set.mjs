import { arguments_assert } from "./arguments_assert.mjs";
import { storage_key_name_get } from "./storage_key_name_get.mjs";
import { storage_local_enabled } from "./storage_local_enabled.mjs";
import { storage_local_specify_set } from "./storage_local_specify_set.mjs";
import { global_function_property_set } from "./global_function_property_set.mjs";
import { storage_local_set } from "./storage_local_set.mjs";
export function storage_local_name_set(app_fn_name, key, value) {
  arguments_assert(arguments, 3);
  ("File a setting on this device for one app, named by the word that app answers to rather than by the app itself.");
  ("The twin beside this one takes the app, and a screen kept apart from its app's loader has no app to hand over without importing the loader - so this is what such a screen writes with, as the reading twin already lets it read.");
  ("Where the device keeps nothing, the setting is held against the twin that takes the app, because that is where the reader looks for it.");
  let storage_local_key = storage_key_name_get(app_fn_name, key);
  if (storage_local_enabled()) {
    storage_local_specify_set(storage_local_key, value);
    return;
  }
  global_function_property_set(storage_local_set, storage_local_key, value);
}
