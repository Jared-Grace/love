import { global_function_property_set } from "./global_function_property_set.mjs";
export function app_g_sky_demo_enable() {
  "turn ON the #sky dev demo: from now until the next page load, each player MOVE drifts the sky one step. a global flag read by app_g_sky_demo_is; the real game never sets it";
  global_function_property_set(app_g_sky_demo_enable, "on", true);
}
