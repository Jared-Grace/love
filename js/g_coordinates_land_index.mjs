import { g_coordinates_land } from "./g_coordinates_land.mjs";
import { g_coordinates_key } from "./g_coordinates_key.mjs";
import { property_set } from "./property_set.mjs";
export function g_coordinates_land_index(coordinates) {
  let land = g_coordinates_land(coordinates);
  let index = {};
  for (let c of land) {
    property_set(index, g_coordinates_key(c), c);
  }
  return index;
}
