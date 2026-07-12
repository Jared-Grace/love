import { html_overlay } from "./html_overlay.mjs";
import { property_get } from "./property_get.mjs";
import { g_z } from "./g_z.mjs";
export function app_g_overlay(div_map) {
  let container = property_get(div_map, "container");
  let z_index = g_z("overlay");
  let overlay = html_overlay(container, z_index);
  return overlay;
}
