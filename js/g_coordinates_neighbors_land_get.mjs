import { g_coordinates_walkable_index } from "./g_coordinates_walkable_index.mjs";
import { g_coordinates_orthogonal } from "./g_coordinates_orthogonal.mjs";
import { g_coordinates_key } from "./g_coordinates_key.mjs";
import { graph_neighbor_dataless } from "./graph_neighbor_dataless.mjs";
import { property_get } from "./property_get.mjs";
import { property_exists } from "./property_exists.mjs";
import { list_adder } from "./list_adder.mjs";
export function g_coordinates_neighbors_land_get(g) {
  let coordinates = property_get(g, "coordinates");
  let npcs = property_get(g, "npcs");
  let index = g_coordinates_walkable_index(coordinates, npcs);
  function neighbors_get(node) {
    let orthogonal = g_coordinates_orthogonal(node);
    function lambda(add) {
      for (let candidate of orthogonal) {
        let key = g_coordinates_key(candidate);
        let is_land = property_exists(index, key);
        if (is_land) {
          let tile = property_get(index, key);
          let neighbor = graph_neighbor_dataless(tile);
          add(neighbor);
        }
      }
    }
    let neighbors = list_adder(lambda);
    return neighbors;
  }
  return neighbors_get;
}
