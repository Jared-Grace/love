import { property_get } from "./property_get.mjs";
import { fn_name } from "./fn_name.mjs";
import { app_shared_refresh_screen } from "./app_shared_refresh_screen.mjs";
export async function app_shared_screen_set(context, fn) {
  let fn_name = property_get(fn, "name");
  await app_shared_refresh_screen(context, fn_name);
}
