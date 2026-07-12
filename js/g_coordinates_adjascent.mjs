import { list_filter } from "./list_filter.mjs";
import { g_distance_1_curried } from "./g_distance_1_curried.mjs";
import { property_get } from "./property_get.mjs";
export function g_coordinates_adjascent(g, clicked_coordinates) {
  let coordinates_map_all = property_get(g, "coordinates");
  let lambda = g_distance_1_curried(clicked_coordinates);
  let adjascent = list_filter(coordinates_map_all, lambda);
  return adjascent;
}
