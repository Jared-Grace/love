import { global_function_property_get } from "./global_function_property_get.mjs";
import { g_coordinates_key } from "./g_coordinates_key.mjs";
export function app_g_npc_img_get(npc) {
  let key = g_coordinates_key(npc);
  let img = global_function_property_get(app_g_npc_img_get, key);
  return img;
}
