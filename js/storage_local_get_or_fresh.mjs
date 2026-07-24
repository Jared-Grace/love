import { storage_local_get } from "./storage_local_get.mjs";
import { storage_local_quarantine } from "./storage_local_quarantine.mjs";
import { property_get_or } from "./property_get_or.mjs";
import { property_get } from "./property_get.mjs";
import { not } from "./not.mjs";
export function storage_local_get_or_fresh(app_fn, key, make_fresh) {
  "opt-in recovery for one read the caller knows is safe to reset: try the real read; only when the stored value is CORRUPT do we quarantine it and return the caller's fresh fallback — any other error re-throws so unrelated bugs stay loud; recovery is decided HERE at the call site, never buried in the getter";
  try {
    let value = storage_local_get(app_fn, key);
    return value;
  } catch (thrown) {
    let corrupt = property_get_or(thrown, "storage_corrupt", false);
    if (not(corrupt)) {
      throw thrown;
    }
    let raw = property_get(thrown, "raw");
    storage_local_quarantine(app_fn, key, raw);
    let r = make_fresh();
    return r;
  }
}
