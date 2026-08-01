import { property_list_size } from "./property_list_size.mjs";
import { graph_path_shortest_list } from "./graph_path_shortest_list.mjs";
import { g_coordinates_neighbors_walkable_get } from "./g_coordinates_neighbors_walkable_get.mjs";
import { g_coordinates_key } from "./g_coordinates_key.mjs";
export function g_coordinates_path_shortest(g, start, target) {
  let neighbors_get = g_coordinates_neighbors_walkable_get(g);
  let max_depth = property_list_size(g, "coordinates");
  let path = graph_path_shortest_list(
    start,
    neighbors_get,
    g_coordinates_key,
    max_depth,
    target,
  );
  return path;
}
