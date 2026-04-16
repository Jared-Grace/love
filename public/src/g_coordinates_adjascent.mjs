import { list_filter } from "../../../love/public/src/list_filter.mjs";
import { g_distance_1_curried } from "../../../love/public/src/g_distance_1_curried.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
export function g_coordinates_adjascent(g, clicked_coordinates) {
  let coordinates = property_get(g, "coordinates");
  let lambda18 = g_distance_1_curried(clicked_coordinates);
  let adjascent = list_filter(coordinates, lambda18);
  return adjascent;
}
