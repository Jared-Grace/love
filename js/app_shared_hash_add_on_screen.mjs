import { arguments_assert } from "./arguments_assert.mjs";
import { storage_session_get_context } from "./storage_session_get_context.mjs";
import { null_not_is } from "./null_not_is.mjs";
import { app_shared_screen_stored_get } from "./app_shared_screen_stored_get.mjs";
import { equal } from "./equal.mjs";
import { property_set } from "./property_set.mjs";
export function app_shared_hash_add_on_screen(
  context,
  hash,
  screen_name,
  storage_key,
  hash_key,
) {
  arguments_assert(arguments, 5);
  ("put what this tab remembers under storage_key into the address the app is about to show, under hash_key - but only while the reader is on the one screen that reads it, and only once there is something remembered");
  ("left in on any other screen, the address is read back on the way in - by a pasted link, and by the back button landing on that step - and quietly puts the reader somewhere their own progress does not stand. Leaving the screen forgets nothing: the value stays in this tab and comes back into the address the moment the screen is drawn again");
  let value = storage_session_get_context(context, storage_key);
  let present = null_not_is(value);
  let screen = app_shared_screen_stored_get(context);
  let on_screen = equal(screen, screen_name);
  if (present && on_screen) {
    property_set(hash, hash_key, value);
  }
}
