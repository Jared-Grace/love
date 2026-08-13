import { storage_local_name_get } from "./storage_local_name_get.mjs";
export function storage_local_get(app_fn, key) {
  "What this app filed on this device under a word it chose. The twin underneath is handed the name on its own, so the way a setting is found is written once and a page reading across to another app finds it the same way this one does.";
  let value = storage_local_name_get(app_fn.name, key);
  return value;
}
