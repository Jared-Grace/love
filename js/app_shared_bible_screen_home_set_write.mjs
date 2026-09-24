import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { app_shared_screen_set_write } from "./app_shared_screen_set_write.mjs";
export async function app_shared_bible_screen_home_set_write(context, write) {
  arguments_assert(arguments, 2);
  ("go back to the reader this app calls home, writing what it is to show into the address once the step of the back button is added - see the one without a write for why the home screen is asked of the context");
  let screen_home = property_get(context, "screen_home");
  await app_shared_screen_set_write(context, screen_home, write);
}
