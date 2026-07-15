import { list_shuffle } from "./list_shuffle.mjs";
import { g_coordinates_land_largest_component } from "./g_coordinates_land_largest_component.mjs";
export function g_coordinates_land_reachable_get(coordinates) {
  let reachable = g_coordinates_land_largest_component(coordinates);
  list_shuffle(reachable);
  return reachable;
}
