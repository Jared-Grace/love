import { g_coordinates_adjascent } from "./g_coordinates_adjascent.mjs";
import { g_coordinates_land } from "./g_coordinates_land.mjs";
import { list_map } from "./list_map.mjs";
import { graph_neighbor_dataless } from "./graph_neighbor_dataless.mjs";
export function g_coordinates_neighbors_land_get(g) {
  function neighbors_get(node) {
    let adjascent = g_coordinates_adjascent(g, node);
    let land = g_coordinates_land(adjascent);
    let neighbors = list_map(land, graph_neighbor_dataless);
    return neighbors;
  }
  return neighbors_get;
}
