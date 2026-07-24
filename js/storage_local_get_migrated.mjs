import { storage_local_get_or_fresh } from "./storage_local_get_or_fresh.mjs";
import { null_is } from "./null_is.mjs";
export function storage_local_get_migrated(app_fn, key, upgrade, make_fresh) {
  "read a usable current-shape value: an OLD but valid stored shape is carried forward by the caller's idempotent upgrade; an absent or CORRUPT value becomes a fresh current-shape default; a throw inside upgrade is a developer bug in the migration and stays LOUD, never swallowed";
  let stored = storage_local_get_or_fresh(app_fn, key, make_fresh);
  if (null_is(stored)) {
    let fresh = make_fresh();
    return fresh;
  }
  let migrated = upgrade(stored);
  return migrated;
}
