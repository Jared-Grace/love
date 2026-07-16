import { html_overlay } from "./html_overlay.mjs";
import { html_on } from "./html_on.mjs";
import { html_stop_propagation } from "./html_stop_propagation.mjs";
import { property_get } from "./property_get.mjs";
import { g_z } from "./g_z.mjs";
export function app_g_overlay(div_map) {
  let container = property_get(div_map, "container");
  let z_index = g_z("overlay");
  let overlay = html_overlay(container, z_index);
  html_on(overlay, "click", html_stop_propagation);
  return overlay;
}
