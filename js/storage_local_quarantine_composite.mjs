import { storage_local_specify_set } from "./storage_local_specify_set.mjs";
import { storage_local_specify_remove } from "./storage_local_specify_remove.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function storage_local_quarantine_composite(storage_local_key, raw) {
  "quarantine by physical key: copy the corrupt bytes to a sideband key a developer can still recover, then remove the live key so the next boot lands clean — surgical, only this one key is lost";
  let corrupt_key = text_combine_multiple(["__corrupt__ ", storage_local_key]);
  storage_local_specify_set(corrupt_key, raw);
  storage_local_specify_remove(storage_local_key);
}
