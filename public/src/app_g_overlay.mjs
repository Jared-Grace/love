import { html_overlay } from "../../../love/public/src/html_overlay.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { g_z } from "../../../love/public/src/g_z.mjs";
export function app_g_overlay(div_map) {
  let container = object_property_get(div_map, "container");
  const z_index = g_z("overlay");
  let overlay = html_overlay(container, z_index);
  return overlay;
}
