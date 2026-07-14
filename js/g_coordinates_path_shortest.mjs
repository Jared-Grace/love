import { graph_path_shortest_list } from "./graph_path_shortest_list.mjs";
import { g_coordinates_neighbors_land_get } from "./g_coordinates_neighbors_land_get.mjs";
import { g_coordinates_key } from "./g_coordinates_key.mjs";
import { property_get } from "./property_get.mjs";
import { list_size } from "./list_size.mjs";
export function g_coordinates_path_shortest(g, start, target) {
  let neighbors_get = g_coordinates_neighbors_land_get(g);
  let coordinates = property_get(g, "coordinates");
  let max_depth = list_size(coordinates);
  let path = graph_path_shortest_list(
    start,
    neighbors_get,
    g_coordinates_key,
    max_depth,
    target,
  );
  return path;
}
