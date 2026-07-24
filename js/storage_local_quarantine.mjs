import { storage_local_set } from "./storage_local_set.mjs";
import { storage_local_remove } from "./storage_local_remove.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function storage_local_quarantine(app_fn, key, raw) {
  "preserve the corrupt bytes under a sideband key so a developer can still recover them, then remove the live key so the next boot lands clean — surgical: only this one key is lost";
  let corrupt_key = text_combine_multiple(["__corrupt__ ", key]);
  storage_local_set(app_fn, corrupt_key, raw);
  storage_local_remove(app_fn, key);
}
