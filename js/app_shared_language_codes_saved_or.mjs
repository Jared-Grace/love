import { storage_local_get } from "./storage_local_get.mjs";
import { app_shared_language_codes_save } from "./app_shared_language_codes_save.mjs";
import { null_is } from "./null_is.mjs";
export function app_shared_language_codes_saved_or(l_default) {
  "the languages remembered by app_shared_language_codes_save, or l_default when nothing has been chosen yet; keyed by the saving function so both sides name one storage key";
  let l = storage_local_get(app_shared_language_codes_save, "l");
  let missing = null_is(l);
  if (missing) {
    return l_default;
  }
  return l;
}
