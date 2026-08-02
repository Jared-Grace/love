import { fn_name } from "./fn_name.mjs";
import { app_g_sky_element_or_null } from "./app_g_sky_element_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { app_g_game_save_get } from "./app_g_game_save_get.mjs";
import { app_g_sky_set } from "./app_g_sky_set.mjs";
export async function app_g_sky_snap() {
  ("snap the sky-tint INSTANTLY to the current time of day (",
    fn_name("app_g_sky_set"),
    " resets the element token, cancelling any in-flight drift) — called when a conversation ENDS so the map immediately reflects the day that advanced during it, instead of lingering on the slow live drift that a fast player outpaces");
  let element = app_g_sky_element_or_null();
  if (null_is(element)) {
    return;
  }
  let g = await app_g_game_save_get();
  app_g_sky_set(element, g);
}
