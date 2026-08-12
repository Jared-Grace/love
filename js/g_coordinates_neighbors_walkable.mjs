import { g_coordinates_neighbors_walkable_get } from "./g_coordinates_neighbors_walkable_get.mjs";
import { property_get } from "./property_get.mjs";
export function g_coordinates_neighbors_walkable(g, coordinates) {
  "the tiles beside this one that somebody could walk onto - ground, with nobody standing on them.";
  "It is the same question the walk itself asks at every step, asked of one tile instead of along a way, so a tile that comes back here is one a way could really be built through.";
  let neighbors_get = g_coordinates_neighbors_walkable_get(g);
  function lambda(n) {
    let neighbor = property_get(n, "neighbor");
    return neighbor;
  }
  let neighbors = neighbors_get(coordinates).map(lambda);
  return neighbors;
}
