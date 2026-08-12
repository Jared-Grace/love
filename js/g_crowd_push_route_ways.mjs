import { g_crowd_push_most } from "./g_crowd_push_most.mjs";
import { g_coordinates_key } from "./g_coordinates_key.mjs";
import { property_set } from "./property_set.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
import { list_pop_first } from "./list_pop_first.mjs";
import { property_get } from "./property_get.mjs";
import { add } from "./add.mjs";
import { g_coordinates_toward } from "./g_coordinates_toward.mjs";
import { property_exists } from "./property_exists.mjs";
import { list_add } from "./list_add.mjs";
import { g_crowd_push_route_back } from "./g_crowd_push_route_back.mjs";
import { greater_than_equal } from "./greater_than_equal.mjs";
import { not } from "./not.mjs";
export function g_crowd_push_route_ways(
  land_index,
  npc_index,
  kept_index,
  still_index,
  tile,
  ways,
) {
  "the shuffle that empties one tile, looked for using only the ways given: the run of tiles from the person standing in the way out to the nearest place somebody can stand, or nothing when there is no such place near enough.";
  "Everybody along the run steps one tile onward, into the tile the person ahead of them has just left, and the one at the far end steps into the free tile the whole run was looking for. So nobody is ever asked to step onto somebody, and no two people ever trade places.";
  "The free tile is looked for OUTWARD THROUGH THE CROWD, nearest first, so a way round a corner or past water is found as readily as a straight run. The looking only ever passes THROUGH people - the first free tile it reaches is where it stops - which is why the run it hands back is a run of people with one empty tile on the end.";
  "The way the walker is about to take may be passed through but never rested in. Passing through is somebody who is standing there already and will be asked to move in their turn; resting there would be somebody stepping out of the walker's path and straight back into it further along.";
  "Whoever was tapped is not passed through either. Walking up to a person means arriving beside where they were tapped, so shuffling that very person along would answer the tap by walking to an empty tile.";
  "It is looked for only so far. A crowd deeper than that is left standing, and the walker passes those people one at a time by trading places with them.";
  let most = g_crowd_push_most();
  let previous = {};
  let depth = {};
  let key_start = g_coordinates_key(tile);
  property_set(depth, key_start, 0);
  let queue = [tile];
  while (list_empty_not_is(queue)) {
    let at = list_pop_first(queue);
    let key_at = g_coordinates_key(at);
    let steps = property_get(depth, key_at);
    let far = greater_than_equal(steps, most);
    if (far) {
      continue;
    }
    let onward = add(steps, 1);
    for (let way of ways) {
      let next = g_coordinates_toward(at, way);
      let key = g_coordinates_key(next);
      let seen = property_exists(depth, key);
      if (seen) {
        continue;
      }
      let land = property_exists(land_index, key);
      if (not(land)) {
        continue;
      }
      let held = property_exists(still_index, key);
      if (held) {
        continue;
      }
      property_set(depth, key, onward);
      property_set(previous, key, at);
      let occupied = property_exists(npc_index, key);
      if (occupied) {
        list_add(queue, next);
        continue;
      }
      let kept = property_exists(kept_index, key);
      if (kept) {
        continue;
      }
      let route = g_crowd_push_route_back(previous, tile, next);
      return route;
    }
  }
  return null;
}
