import { g_coordinates_land_index } from "./g_coordinates_land_index.mjs";
import { g_coordinates_key } from "./g_coordinates_key.mjs";
import { property_delete_if_exists } from "./property_delete_if_exists.mjs";
export function g_coordinates_walkable_index(coordinates, npcs) {
  let index = g_coordinates_land_index(coordinates);
  for (let npc of npcs) {
    let key = g_coordinates_key(npc);
    property_delete_if_exists(index, key);
  }
  return index;
}
