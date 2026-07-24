import { app_shared_boot_corrupt_or_null } from "./app_shared_boot_corrupt_or_null.mjs";
import { property_get } from "./property_get.mjs";
import { storage_local_quarantine_composite } from "./storage_local_quarantine_composite.mjs";
import { null_is } from "./null_is.mjs";
export async function app_shared_boot_safe(render_fn) {
  ("top-level net: run the app; when a read hits CORRUPT storage, log it for the developer, quarantine that one physical key, and retry — bounded so several corrupt keys all clear without ever spinning forever, and the user just sees a clean freshly-initialized app; a non-corruption error re-throws through the attempt so real bugs stay loud; if the bound is exhausted, run once more UNGUARDED so the real failure surfaces instead of us hiding it");
  let remaining = 8;
  while (remaining > 0) {
    remaining = remaining - 1;
    let corrupt = await app_shared_boot_corrupt_or_null(render_fn);
    if (null_is(corrupt)) {
      return;
    }
    console.error(property_get(corrupt, "message"));
    let storage_local_key = property_get(corrupt, "storage_local_key");
    let raw = property_get(corrupt, "raw");
    storage_local_quarantine_composite(storage_local_key, raw);
  }
  await render_fn();
}
