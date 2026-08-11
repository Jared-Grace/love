import { not } from "./not.mjs";
import { fn_name } from "./fn_name.mjs";
import { greater_than_equal } from "./greater_than_equal.mjs";
import { less_than_equal } from "./less_than_equal.mjs";
import { less_than } from "./less_than.mjs";
import { equal } from "./equal.mjs";
import { null_is } from "./null_is.mjs";
import { property_exists } from "./property_exists.mjs";
import { property_get } from "./property_get.mjs";
import { g_coordinates_neighbors_walkable_get } from "./g_coordinates_neighbors_walkable_get.mjs";
import { g_coordinates_walk_distances } from "./g_coordinates_walk_distances.mjs";
import { g_coordinates_key } from "./g_coordinates_key.mjs";
export function app_g_day_guide_pick(
  g,
  player,
  target,
  min_x,
  max_x,
  min_y,
  max_y,
) {
  ("PURE (no DOM) core of the gold guide: given the tile WINDOW [min_x..max_x, min_y..max_y] that will be FULLY visible once the map has centred on the player, return the tile in it that is CLOSEST to the target by walking steps — the longest hop the player can be shown and still tap. every tile of the window is asked, not just the ones the shortest path happens to cross, because a path that detours around water leaves the window and comes back, and the last path tile still in view can be many steps worse than the best visible tile; a tie goes to the tile nearest the player, so the guide never sends them the long way round to a tile that gains nothing. a candidate must be reachable from the player AND have a way on to the target, so water, npcs' own tiles and anything walled off are never offered. it keeps leading ALL THE WAY IN — the last hop lands the player rook-adjacent, and the arrival starts the conversation (",
    fn_name("app_g_day_guide_show"),
    "); null only when nothing walkable in the window connects the two. it CAN return the player's OWN tile — when every visible tile is further from the target than where they stand, the glow sits UNDER the player (like the arrival glow under the NPC), rather than showing nothing. split out from the DOM wrapper so it is DETERMINISTICALLY testable with a synthetic map + window");
  let neighbors_get = g_coordinates_neighbors_walkable_get(g);
  function lambda(n) {
    let neighbor = property_get(n, "neighbor");
    return neighbor;
  }
  let approaches = neighbors_get(target).map(lambda);
  if (equal(approaches.length, 0)) {
    return null;
  }
  let to_target = g_coordinates_walk_distances(g, approaches);
  let from_player = g_coordinates_walk_distances(g, [player]);
  let gold = null;
  let gold_to_target = 0;
  let gold_from_player = 0;
  for (let candidate of property_get(g, "coordinates")) {
    let x = property_get(candidate, "x");
    let y = property_get(candidate, "y");
    let in_window =
      greater_than_equal(x, min_x) &&
      less_than_equal(x, max_x) &&
      greater_than_equal(y, min_y) &&
      less_than_equal(y, max_y);
    if (not(in_window)) {
      continue;
    }
    let key = g_coordinates_key(candidate);
    let walkable =
      property_exists(to_target, key) && property_exists(from_player, key);
    if (not(walkable)) {
      continue;
    }
    let candidate_to_target = property_get(to_target, key);
    let candidate_from_player = property_get(from_player, key);
    let nearer = less_than(candidate_to_target, gold_to_target);
    let tie =
      equal(candidate_to_target, gold_to_target) &&
      less_than(candidate_from_player, gold_from_player);
    let better = null_is(gold) || nearer || tie;
    if (better) {
      gold = {
        x,
        y,
      };
      gold_to_target = candidate_to_target;
      gold_from_player = candidate_from_player;
    }
  }
  return gold;
}
