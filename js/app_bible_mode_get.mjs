import { storage_local_get } from "./storage_local_get.mjs";
import { app_bible_mode_verse } from "./app_bible_mode_verse.mjs";
import { null_is } from "./null_is.mjs";
export function app_bible_mode_get() {
  let mode = storage_local_get(app_bible_mode_get, "mode");
  let missing = null_is(mode);
  if (missing) {
    ("verse mode is the default: it remembers the exact verse you were on across visits");
    return app_bible_mode_verse();
  }
  return mode;
}
