import { property_get } from "../../../love/public/src/property_get.mjs";
export function app_g_div_map_container_get(div_map) {
  let value2 = property_get(div_map, "container");
  return value2;
}
