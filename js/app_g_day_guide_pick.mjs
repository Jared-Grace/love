import { fn_name } from "./fn_name.mjs";
import { greater_than_equal } from "./greater_than_equal.mjs";
import { less_than_equal } from "./less_than_equal.mjs";
import { equal } from "./equal.mjs";
import { subtract } from "./subtract.mjs";
import { g_coordinates_neighbors_walkable_get } from "./g_coordinates_neighbors_walkable_get.mjs";
import { g_coordinates_path_shortest } from "./g_coordinates_path_shortest.mjs";
import { g_distance_taxicab } from "./g_distance_taxicab.mjs";
export function app_g_day_guide_pick(
  g,
  player,
  target,
  min_x,
  max_x,
  min_y,
  max_y,
) {
  ("PURE (no DOM) core of the gold guide: given the visible tile WINDOW [min_x..max_x, min_y..max_y], return the FARTHEST tile on the shortest land path from the player toward a walkable tile NEXT TO the target that is still inside the window. it keeps leading ALL THE WAY IN — the last hop lands the player rook-adjacent, and the arrival starts the conversation (",
    fn_name("app_g_day_guide_show"),
    "); null only when nothing on the path is in view. it CAN return the player's OWN tile — when the whole way ahead is off-window the farthest in-view path tile is where the player stands, and then the glow sits UNDER the player (like the arrival glow under the NPC), rather than showing nothing. split out from the DOM wrapper so it is DETERMINISTICALLY testable with a synthetic map + window");
  let inWindow = function lambda(c) {
    let r =
      greater_than_equal(c.x, min_x) &&
      less_than_equal(c.x, max_x) &&
      greater_than_equal(c.y, min_y) &&
      less_than_equal(c.y, max_y);
    return r;
  };
  let neighborsGet = g_coordinates_neighbors_walkable_get(g);
  function lambda2(n) {
    let r2 = n.neighbor;
    return r2;
  }
  let neighbors = neighborsGet(target).map(lambda2);
  if (equal(neighbors.length, 0)) {
    return null;
  }
  function lambda3(a, b) {
    let left = g_distance_taxicab(a, player);
    let right = g_distance_taxicab(b, player);
    let difference = subtract(left, right);
    return difference;
  }
  neighbors.sort(lambda3);
  let destination = neighbors[0];
  let path = g_coordinates_path_shortest(g, player, destination);
  let gold = null;
  for (let c of path) {
    if (inWindow(c)) {
      gold = c;
    }
  }
  return gold;
}
