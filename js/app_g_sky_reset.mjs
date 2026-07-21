import { app_g_game_save_get } from "./app_g_game_save_get.mjs";
import { app_g_sky_set } from "./app_g_sky_set.mjs";
import { global_function_initialize } from "./global_function_initialize.mjs";
import { integer_random_0 } from "./integer_random_0.mjs";
import { property_exists } from "./property_exists.mjs";
import { property_get } from "./property_get.mjs";
import { property_set } from "./property_set.mjs";
import { not } from "./not.mjs";
export async function app_g_sky_reset() {
  "snap the sky to MORNING (phase 0) instantly and persist it — called when an unbeliever conversation BEGINS, so the day always starts at dawn and then walks to evening (app_g_sky_to) as the parts complete. also re-rolls the sky_seed (0-100) so each conversation's day gets a fresh, stable tint WARMTH (varies day to day, steady within the conversation — no flicker on refresh)";
  let g = await app_g_game_save_get();
  property_set(g, "sky_phase", 0);
  property_set(g, "sky_seed", integer_random_0(101));
  let bag = global_function_initialize(app_g_sky_set, {});
  if (not(property_exists(bag, "element"))) {
    return;
  }
  let element = property_get(bag, "element");
  app_g_sky_set(element, g);
}
