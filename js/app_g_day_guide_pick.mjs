import { g_coordinates_neighbors_walkable_get } from "./g_coordinates_neighbors_walkable_get.mjs";
import { g_coordinates_path_shortest } from "./g_coordinates_path_shortest.mjs";
import { g_distance_taxicab } from "./g_distance_taxicab.mjs";
export function app_g_day_guide_pick(g, player, target, min_x, max_x, min_y, max_y) {
  "PURE (no DOM) core of the gold guide: given the visible tile WINDOW [min_x..max_x, min_y..max_y], return the FARTHEST tile on the shortest land path from the player toward a walkable tile NEXT TO the target that is still inside the window. it keeps leading ALL THE WAY IN — the last hop lands the player rook-adjacent, and the arrival starts the conversation (app_g_day_guide_show); null only when nothing on the path is in view. it CAN return the player's OWN tile — when the whole way ahead is off-window the farthest in-view path tile is where the player stands, and then the glow sits UNDER the player (like the arrival glow under the NPC), rather than showing nothing. split out from the DOM wrapper so it is DETERMINISTICALLY testable with a synthetic map + window";
  const inWindow = (c) =>
    c.x >= min_x && c.x <= max_x && c.y >= min_y && c.y <= max_y;
  const neighborsGet = g_coordinates_neighbors_walkable_get(g);
  const neighbors = neighborsGet(target).map((n) => n.neighbor);
  if (neighbors.length === 0) {
    return null;
  }
  neighbors.sort(
    (a, b) => g_distance_taxicab(a, player) - g_distance_taxicab(b, player),
  );
  const destination = neighbors[0];
  const path = g_coordinates_path_shortest(g, player, destination);
  let gold = null;
  for (const c of path) {
    if (inWindow(c)) {
      gold = c;
    }
  }
  return gold;
}
