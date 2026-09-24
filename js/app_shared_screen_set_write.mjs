import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { app_shared_refresh_screen_write } from "./app_shared_refresh_screen_write.mjs";
export async function app_shared_screen_set_write(context, fn, write) {
  arguments_assert(arguments, 3);
  let f_name = property_get(fn, "name");
  await app_shared_refresh_screen_write(context, f_name, write);
}
