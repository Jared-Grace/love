import { storage_local_exists_not_context } from "./storage_local_exists_not_context.mjs";
import { storage_local_set_context } from "./storage_local_set_context.mjs";
import { storage_local_get_context } from "./storage_local_get_context.mjs";
import { property_get } from "./property_get.mjs";
export function app_supper_versions_chosen_get(context) {
  let key = "versions_chosen";
  let n = storage_local_exists_not_context(context, key);
  if (n) {
    let default_chosen = property_get(context, "supper_default_chosen");
    storage_local_set_context(context, key, default_chosen);
  }
  let versions_chosen = storage_local_get_context(context, key);
  return versions_chosen;
}
