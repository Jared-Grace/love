import { graph_path_shortest_list } from "../../love/js/graph_path_shortest_list.mjs";
import { g_coordinates_neighbors_walkable_get } from "../../love/js/g_coordinates_neighbors_walkable_get.mjs";
import { g_coordinates_key } from "../../love/js/g_coordinates_key.mjs";
import { property_get } from "../../love/js/property_get.mjs";
import { list_size } from "../../love/js/list_size.mjs";
export function g_coordinates_path_shortest(g, start, target) {
  let neighbors_get = g_coordinates_neighbors_walkable_get(g);
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
