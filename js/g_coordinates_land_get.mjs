import { list_shuffle } from "./list_shuffle.mjs";
import { g_coordinates_land } from "./g_coordinates_land.mjs";
export function g_coordinates_land_get(coordinates) {
  let coordinates_land = g_coordinates_land(coordinates);
  list_shuffle(coordinates_land);
  return coordinates_land;
}
