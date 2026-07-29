import { app_g_sky_to } from "./app_g_sky_to.mjs";
import { app_g_game_save_get } from "./app_g_game_save_get.mjs";
import { app_g_sky_set } from "./app_g_sky_set.mjs";
import { g_day_sky_phase } from "./g_day_sky_phase.mjs";
import { global_function_initialize } from "./global_function_initialize.mjs";
import { integer_random_0 } from "./integer_random_0.mjs";
import { property_exists } from "./property_exists.mjs";
import { property_get } from "./property_get.mjs";
import { property_set } from "./property_set.mjs";
import { not } from "./not.mjs";
export async function app_g_sky_reset() {
  ("snap the sky to 6 AM sunrise — ",
    g_day_sky_phase.name,
    "(0), the start of the working day — instantly and persist it, called when an unbeliever conversation BEGINS, so the day always starts at dawn and then walks to 7 PM dusk (",
    app_g_sky_to.name,
    ") as the parts complete. also re-rolls the sky_seed (0-100) so each conversation's day gets a fresh, stable tint WARMTH (varies day to day, steady within the conversation — no flicker on refresh)");
  let g = await app_g_game_save_get();
  let value = g_day_sky_phase(0);
  property_set(g, "sky_phase", value);
  let value2 = integer_random_0(101);
  property_set(g, "sky_seed", value2);
  let bag = global_function_initialize(app_g_sky_set, {});
  let b = property_exists(bag, "element");
  if (not(b)) {
    return;
  }
  let element = property_get(bag, "element");
  app_g_sky_set(element, g);
}
