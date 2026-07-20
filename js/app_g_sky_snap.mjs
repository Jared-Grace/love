import { app_g_game_save_get } from "./app_g_game_save_get.mjs";
import { app_g_sky_set } from "./app_g_sky_set.mjs";
import { global_function_initialize } from "./global_function_initialize.mjs";
import { property_exists } from "./property_exists.mjs";
import { property_get } from "./property_get.mjs";
import { not } from "./not.mjs";
export async function app_g_sky_snap() {
  "snap the sky-tint INSTANTLY to the current time of day (app_g_sky_set resets the element token, cancelling any in-flight drift) — called when a conversation ENDS so the map immediately reflects the day that advanced during it, instead of lingering on the slow live drift that a fast player outpaces";
  let bag = global_function_initialize(app_g_sky_set, {});
  if (not(property_exists(bag, "element"))) {
    return;
  }
  let element = property_get(bag, "element");
  let g = await app_g_game_save_get();
  app_g_sky_set(element, g);
}
