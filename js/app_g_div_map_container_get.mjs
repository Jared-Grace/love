import { property_get } from "./property_get.mjs";
export function app_g_div_map_container_get(div_map) {
  let div_map_container = property_get(div_map, "container");
  return div_map_container;
}
