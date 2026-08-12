import { global_function_property_get } from "./global_function_property_get.mjs";
import { g_coordinates_key } from "./g_coordinates_key.mjs";
export function app_g_npc_cross_get(npc) {
  "the believer cross drawn over a person, found by WHERE that person is standing - the twin of the same lookup for their picture, and keyed the same way so the two are found and moved together";
  "a cross is its own element sitting on the map, not part of the picture underneath it, so anybody who moves a person has to move both. keeping a handle on it is the whole reason this exists: the moment believers start WALKING behind the player, a cross left where the person used to stand is the bug you would see";
  let key = g_coordinates_key(npc);
  let cross = global_function_property_get(app_g_npc_cross_get, key);
  return cross;
}
