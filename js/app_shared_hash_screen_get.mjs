import { app_shared_screen_hash_key } from "./app_shared_screen_hash_key.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { property_get } from "./property_get.mjs";
import { app_shared_screen_name_full } from "./app_shared_screen_name_full.mjs";
export function app_shared_hash_screen_get(context, hash) {
  "The whole name of the screen a link names, or null when it names none. Whether the app has such a screen is not asked here - a screen nobody has is sent home where the remembered name is turned into a screen.";
  let key = app_shared_screen_hash_key();
  let word = property_get_or_null(hash, key);
  if (null_is(word)) {
    return null;
  }
  let app_fn = property_get(context, "app_fn");
  let app_name = property_get(app_fn, "name");
  let full = app_shared_screen_name_full(app_name, word);
  return full;
}
