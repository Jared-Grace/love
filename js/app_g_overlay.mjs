import { app_g_overlay_container } from "./app_g_overlay_container.mjs";
import { property_get } from "./property_get.mjs";
export function app_g_overlay(div_map) {
  let container = property_get(div_map, "container");
  let overlay = app_g_overlay_container(container);
  return overlay;
}
