import { property_path_get_2 } from "./property_path_get_2.mjs";
import { app_shared_screen_stored_get } from "./app_shared_screen_stored_get.mjs";
import { null_is } from "./null_is.mjs";
import { app_shared_screen_name_short } from "./app_shared_screen_name_short.mjs";
import { app_shared_screen_hash_key } from "./app_shared_screen_hash_key.mjs";
import { property_set } from "./property_set.mjs";
export function app_shared_hash_screen_add(context, hash) {
  "Put the screen this tab is on into the link the app is about to show, in its short spelling; nothing is written while no screen is remembered.";
  let screen_name = app_shared_screen_stored_get(context);
  if (null_is(screen_name)) {
    return;
  }
  let app_name = property_path_get_2(context, "app_fn", "name");
  let short = app_shared_screen_name_short(app_name, screen_name);
  let key = app_shared_screen_hash_key();
  property_set(hash, key, short);
}
