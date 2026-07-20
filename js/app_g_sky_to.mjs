import { app_g_game_save_get } from "./app_g_game_save_get.mjs";
import { app_g_sky_set } from "./app_g_sky_set.mjs";
import { g_phase_color } from "./g_phase_color.mjs";
import { g_sky_seed_get } from "./g_sky_seed_get.mjs";
import { global_function_initialize } from "./global_function_initialize.mjs";
import { property_exists } from "./property_exists.mjs";
import { property_get } from "./property_get.mjs";
import { property_set } from "./property_set.mjs";
import { not } from "./not.mjs";
import { html_style_set } from "./html_style_set.mjs";
export async function app_g_sky_to(target) {
  "set the day to a target PHASE (0 = morning … 3 = evening) and PERSIST it (g.sky_phase) so the map keeps it — a conversation calls this as each part completes, so the sky steps morning→evening in step with progress. sets the tint instantly (the same html_style_set path app_g_sky_set uses, which reliably paints; a smooth drift can be layered on later)";
  let g = await app_g_game_save_get();
  property_set(g, "sky_phase", target);
  let bag = global_function_initialize(app_g_sky_set, {});
  if (not(property_exists(bag, "element"))) {
    return;
  }
  let element = property_get(bag, "element");
  let seed = g_sky_seed_get(g);
  element.sky_phase = target;
  html_style_set(element, "background", g_phase_color(target, seed));
}
