import { storage_local_get } from "./storage_local_get.mjs";
import { app_shared_language_sort_by_speakers } from "./app_shared_language_sort_by_speakers.mjs";
import { null_is } from "./null_is.mjs";
export function app_shared_language_sort_get() {
  let mode = storage_local_get(app_shared_language_sort_get, "mode");
  let missing = null_is(mode);
  if (missing) {
    return app_shared_language_sort_by_speakers();
  }
  return mode;
}
