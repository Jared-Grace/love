import { global_function_property_set } from "./global_function_property_set.mjs";
import { app_g_npc_img_get } from "./app_g_npc_img_get.mjs";
import { g_coordinates_key } from "./g_coordinates_key.mjs";
export function app_g_npc_img_set(npc, img) {
  "remember a person's picture under where they are standing NOW - written once when they are drawn, and written again after every step, because the place is the key";
  app_g_npc_property_set_generic(app_g_npc_img_get, npc, img);
}
