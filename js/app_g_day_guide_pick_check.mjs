import { app_g_day_guide_pick } from "./app_g_day_guide_pick.mjs";
import { g_coordinates_neighbors_walkable_get } from "./g_coordinates_neighbors_walkable_get.mjs";
import { g_coordinates_path_shortest } from "./g_coordinates_path_shortest.mjs";
export function app_g_day_guide_pick_check() {
  "deterministic check of the pure gold-guide picker on a synthetic 12x12 all-land map (no water): player at the BOTTOM, target at the TOP, and only the bottom half of the map 'visible' (window y 5..11). the gold tile SHOULD be the farthest-up path tile still in the window (around y=5, column 6). returns full diagnostics so the guide logic is verifiable WITHOUT the live browser — run: node scripts/ai.mjs app_g_day_guide_pick_check";
  const size = 12;
  const coordinates = [];
  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      coordinates.push({ x, y, item: "grass" });
    }
  }
  const target = { x: 6, y: 1 };
  const player = { x: 6, y: 10 };
  const g = { coordinates, npcs: [target] };
  const neighbors = g_coordinates_neighbors_walkable_get(g)(target).map(
    (n) => n.neighbor,
  );
  const destination = neighbors[0];
  const path = g_coordinates_path_shortest(g, player, destination);
  const gold = app_g_day_guide_pick(g, player, target, 0, 11, 5, 11);
  return {
    neighbors: neighbors.map((n) => [n.x, n.y]),
    destination: destination && [destination.x, destination.y],
    path_len: path.length,
    path_first: path[0] && [path[0].x, path[0].y],
    path_last: path.length && [path[path.length - 1].x, path[path.length - 1].y],
    gold: gold && [gold.x, gold.y],
    gold_in_window: gold && gold.y >= 5 && gold.y <= 11,
    gold_toward_target: gold && gold.y < 10,
  };
}
