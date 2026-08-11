import { g_coordinates_neighbors_walkable_get } from "./g_coordinates_neighbors_walkable_get.mjs";
import { g_coordinates_key } from "./g_coordinates_key.mjs";
export function g_coordinates_walk_distances(g, starts) {
  "how many STEPS of walkable land lie between every reachable tile and the NEAREST of `starts` — one breadth-first sweep outward, answered as a map from g_coordinates_key to that number. a tile that is water, an npc's own tile, or cut off by them is simply absent from the map, so a lookup that finds nothing means unreachable. one sweep answers the whole map, which is what a shortest-path-per-candidate loop cannot do: picking the best of a windowful of tiles asks the same question of every one of them, and asking it once from the other end costs a single sweep.";
  let neighbors_get = g_coordinates_neighbors_walkable_get(g);
  let distances = {};
  let frontier = [];
  for (let start of starts) {
    let key = g_coordinates_key(start);
    if (key in distances) {
      continue;
    }
    distances[key] = 0;
    frontier.push(start);
  }
  let steps = 0;
  while (frontier.length > 0) {
    steps = steps + 1;
    let frontier_next = [];
    for (let node of frontier) {
      for (let n of neighbors_get(node)) {
        let neighbor = n.neighbor;
        let key = g_coordinates_key(neighbor);
        if (key in distances) {
          continue;
        }
        distances[key] = steps;
        frontier_next.push(neighbor);
      }
    }
    frontier = frontier_next;
  }
  return distances;
}
