import { storage_key_name_get } from "./storage_key_name_get.mjs";
export function storage_key_get(app_fn, key) {
  ("The key a setting is filed under, named by the app itself. The twin underneath takes the name on its own, and everything the join needs is that name - so the two cannot come to spell a key two ways.");
  let ley = storage_key_name_get(app_fn.name, key);
  return ley;
}
