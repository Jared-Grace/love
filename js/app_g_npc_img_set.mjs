import { global_function_property_set } from "./global_function_property_set.mjs";
import { app_g_npc_img_get } from "./app_g_npc_img_get.mjs";
import { g_coordinates_key } from "./g_coordinates_key.mjs";
export function app_g_npc_img_set(npc, img) {
  let key = g_coordinates_key(npc);
  global_function_property_set(app_g_npc_img_get, key, img);
}
