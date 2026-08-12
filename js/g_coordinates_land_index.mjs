import { g_coordinates_land } from "./g_coordinates_land.mjs";
import { g_coordinates_index } from "./g_coordinates_index.mjs";
export function g_coordinates_land_index(coordinates) {
  let land = g_coordinates_land(coordinates);
  let index = g_coordinates_index(land);
  return index;
}
