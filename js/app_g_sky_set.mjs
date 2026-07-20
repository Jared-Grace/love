import { g_phase_color } from "./g_phase_color.mjs";
import { g_sky_seed_get } from "./g_sky_seed_get.mjs";
import { g_sky_phase_get } from "./g_sky_phase_get.mjs";
import { html_style_set } from "./html_style_set.mjs";
import { global_function_property_set } from "./global_function_property_set.mjs";
export function app_g_sky_set(element, g) {
  "register the freshly-rendered sky-tint `element` and paint it at the CURRENT day phase with NO motion — called each map refresh. it stashes the continuous PHASE, seed, and an animation token ON the element (html_scroll_animate style) and records the element globally so app_g_sky_to can drift THIS element as a conversation walks the day from morning to evening";
  let phase = g_sky_phase_get(g);
  let seed = g_sky_seed_get(g);
  element.sky_phase = phase;
  element.sky_seed = seed;
  element.sky_token = 0;
  html_style_set(element, "background", g_phase_color(phase, seed));
  global_function_property_set(app_g_sky_set, "element", element);
}
