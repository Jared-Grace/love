import { g_coordinates_path_shortest } from "./g_coordinates_path_shortest.mjs";
import { g_distance_taxicab } from "./g_distance_taxicab.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
import { list_size } from "./list_size.mjs";
import { subtract } from "./subtract.mjs";
import { not } from "./not.mjs";
export function g_distance_walk(g, a, b) {
  "the number of STEPS along the shortest WALKABLE path from a to b, routing around water and obstacles. unlike taxicab distance (|dx|+|dy|), EVERY forward step along the guided path lowers this by exactly one — so a clock that advances on 'getting closer' moves on every real step, even where the route detours around water and taxicab distance would hold or grow. falls back to taxicab if b is unreachable (empty path). 0 when already on b's tile; 1 when adjacent, matching the taxicab unit the day-fraction math assumes.";
  let path = g_coordinates_path_shortest(g, a, b);
  let reachable = list_empty_not_is(path);
  if (not(reachable)) {
    let fallback = g_distance_taxicab(a, b);
    return fallback;
  }
  let count = list_size(path);
  let steps = subtract(count, 1);
  return steps;
}
