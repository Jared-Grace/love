import { g_coordinates_adjascent } from "./g_coordinates_adjascent.mjs";
import { list_filter_property_not } from "./list_filter_property_not.mjs";
import { app_a_water } from "./app_a_water.mjs";
import { list_map } from "./list_map.mjs";
import { graph_neighbor_dataless } from "./graph_neighbor_dataless.mjs";
export function g_coordinates_neighbors_land_get(g) {
  function neighbors_get(node) {
    let adjascent = g_coordinates_adjascent(g, node);
    let water = app_a_water();
    let land = list_filter_property_not(adjascent, "item", water);
    let neighbors = list_map(land, graph_neighbor_dataless);
    return neighbors;
  }
  return neighbors_get;
}
