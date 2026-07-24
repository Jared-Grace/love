import { storage_local_quarantine_composite } from "./storage_local_quarantine_composite.mjs";
import { storage_local_key_get } from "./storage_local_key_get.mjs";
export function storage_local_quarantine(app_fn, key, raw) {
  "app-relative front door for quarantine: build the physical key, then quarantine by it — one place decides the sideband scheme so per-read recovery and the top-level net stay identical";
  let storage_local_key = storage_local_key_get(app_fn, key);
  storage_local_quarantine_composite(storage_local_key, raw);
}
