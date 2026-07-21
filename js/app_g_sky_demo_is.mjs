import { app_g_sky_demo_enable } from "./app_g_sky_demo_enable.mjs";
import { global_function_initialize } from "./global_function_initialize.mjs";
import { property_exists } from "./property_exists.mjs";
import { property_get } from "./property_get.mjs";
export function app_g_sky_demo_is() {
  "whether the #sky dev demo is active (each move drifts the sky). false on every real page load — app_g_sky_demo_enable flips it on";
  let bag = global_function_initialize(app_g_sky_demo_enable, {});
  if (property_exists(bag, "on")) {
    let on = property_get(bag, "on");
    return on;
  }
  return false;
}
