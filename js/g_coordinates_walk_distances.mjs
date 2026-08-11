import { fn_name } from "./fn_name.mjs";
import { greater_than } from "./greater_than.mjs";
import { g_coordinates_neighbors_walkable_get } from "./g_coordinates_neighbors_walkable_get.mjs";
import { g_coordinates_key } from "./g_coordinates_key.mjs";
import { property_exists } from "./property_exists.mjs";
import { property_get } from "./property_get.mjs";
import { property_set } from "./property_set.mjs";
export function g_coordinates_walk_distances(g, starts) {
  ("how many STEPS of walkable land lie between the NEAREST of `starts` and every tile reachable from them — one breadth-first sweep outward, answered as a map from ",
    fn_name("g_coordinates_key"),
    " to that number. a tile that is water, an npc's own tile, or cut off behind them is simply absent from the map, so a lookup that finds nothing means unreachable. one sweep answers for the whole map, which is what a shortest-path-per-candidate loop cannot do: choosing the best tile out of a windowful asks the same question of every one of them, and asking it once from the other end costs a single sweep.");
  let neighbors_get = g_coordinates_neighbors_walkable_get(g);
  let distances = {};
  let frontier = [];
  for (let start of starts) {
    let key_start = g_coordinates_key(start);
    if (property_exists(distances, key_start)) {
      continue;
    }
    property_set(distances, key_start, 0);
    frontier.push(start);
  }
  let steps = 0;
  while (greater_than(frontier.length, 0)) {
    steps = steps + 1;
    let frontier_next = [];
    for (let node of frontier) {
      for (let n of neighbors_get(node)) {
        let neighbor = property_get(n, "neighbor");
        let key = g_coordinates_key(neighbor);
        if (property_exists(distances, key)) {
          continue;
        }
        property_set(distances, key, steps);
        frontier_next.push(neighbor);
      }
    }
    frontier = frontier_next;
  }
  return distances;
}
