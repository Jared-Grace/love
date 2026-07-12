import { storage_local_exists } from "./storage_local_exists.mjs";
import { not } from "./not.mjs";
export function storage_local_exists_not(app_fn, key) {
  let exists = storage_local_exists(app_fn, key);
  return not(exists);
}
