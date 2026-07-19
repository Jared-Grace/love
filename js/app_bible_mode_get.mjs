import { storage_local_get } from "./storage_local_get.mjs";
import { app_shared_bible_mode_verse } from "./app_shared_bible_mode_verse.mjs";
import { app_bible_mode_hash_key } from "./app_bible_mode_hash_key.mjs";
import { html_hash_object_get } from "./html_hash_object_get.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { null_not_is } from "./null_not_is.mjs";
export function app_bible_mode_get() {
  "the hash wins: a shared link opens in the mode it names, so the whole reading spot travels in the url";
  let hash = html_hash_object_get();
  let mode_hash = property_get_or_null(hash, app_bible_mode_hash_key());
  if (null_not_is(mode_hash)) {
    return mode_hash;
  }
  let mode = storage_local_get(app_bible_mode_get, "mode");
  let missing = null_is(mode);
  if (missing) {
    ("verse mode is the default: it remembers the exact verse you were on across visits");
    return app_shared_bible_mode_verse();
  }
  return mode;
}
