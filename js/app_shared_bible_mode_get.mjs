import { app_shared_bible_mode_known_is } from "./app_shared_bible_mode_known_is.mjs";
import { storage_local_get_or_fresh } from "./storage_local_get_or_fresh.mjs";
import { app_shared_bible_mode_verse } from "./app_shared_bible_mode_verse.mjs";
import { app_shared_bible_mode_hash_key } from "./app_shared_bible_mode_hash_key.mjs";
import { html_hash_object_get } from "./html_hash_object_get.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { null_not_is } from "./null_not_is.mjs";
export function app_shared_bible_mode_get() {
  "the hash wins: a shared link opens in the mode it names, so the whole reading spot travels in the url";
  "Only a word that names one of the two readers wins, though. A word naming neither is not a mode, and letting it through put it into what the page remembers, so one mistyped link went on opening the wrong reader long after that link was gone. What the link says is checked before the page answers a question about it - the screen that offers the reader a correction reads the link itself, so it still fires.";
  let hash = html_hash_object_get();
  let property = app_shared_bible_mode_hash_key();
  let mode_hash = property_get_or_null(hash, property);
  let asked = null_not_is(mode_hash);
  if (asked) {
    let known = app_shared_bible_mode_known_is(mode_hash);
    if (known) {
      return mode_hash;
    }
  }
  let mode = storage_local_get_or_fresh(
    app_shared_bible_mode_get,
    "mode",
    app_shared_bible_mode_verse,
  );
  let missing = null_is(mode);
  if (missing) {
    ("verse mode is the default: it remembers the exact verse you were on across visits");
    let mode2 = app_shared_bible_mode_verse();
    return mode2;
  }
  return mode;
}
