import { global_function_property_set } from "./global_function_property_set.mjs";
import { app_g_npc_cross_get } from "./app_g_npc_cross_get.mjs";
import { g_coordinates_key } from "./g_coordinates_key.mjs";
export function app_g_npc_cross_set(npc, cross) {
  "remember a person's believer cross under where they are standing NOW - written once when the cross is drawn, and written again after every step they take, because the place is the key";
  let key = g_coordinates_key(npc);
  global_function_property_set(app_g_npc_cross_get, key, cross);
}
