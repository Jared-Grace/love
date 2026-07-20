import { g_phase_color } from "./g_phase_color.mjs";
import { g_sky_seed_get } from "./g_sky_seed_get.mjs";
import { g_time_of_day_get } from "./g_time_of_day_get.mjs";
import { g_times } from "./g_times.mjs";
import { list_index_of } from "./list_index_of.mjs";
import { html_style_set } from "./html_style_set.mjs";
import { global_function_property_set } from "./global_function_property_set.mjs";
export function app_g_sky_set(element, g) {
  "register the freshly-rendered sky-tint `element` and paint it at the CURRENT time of day with NO motion — called each map refresh. it stashes the day PHASE, seed, and an animation token ON the element (html_scroll_animate style) and records the element globally so app_g_sky_advance can drift THIS element as the day advances during a conversation";
  let phase = list_index_of(g_times(), g_time_of_day_get(g));
  let seed = g_sky_seed_get(g);
  console.log("[sky_set] phase=", phase, "time=", g_time_of_day_get(g));
  element.sky_phase = phase;
  element.sky_seed = seed;
  element.sky_token = 0;
  html_style_set(element, "background", g_phase_color(phase, seed));
  global_function_property_set(app_g_sky_set, "element", element);
}
