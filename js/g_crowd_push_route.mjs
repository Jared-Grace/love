export function g_crowd_push_route(
  land_index,
  npc_index,
  kept_index,
  tile,
  direction,
) {
  "the shuffle that empties one tile: the run of tiles from the person standing in the way out to the nearest place somebody can stand, or nothing when there is no such place near enough.";
  "Everybody along the run steps one tile onward, into the tile the person ahead of them has just left, and the one at the far end steps into the free tile the whole run was looking for. So nobody is ever asked to step onto somebody, and no two people ever trade places.";
  "The free tile is looked for OUTWARD THROUGH THE CROWD - nearest first, in every way at once - so a way round a corner, past water, or through the middle of a crowd standing several deep is found as readily as a straight run to one side. The looking is ordered so the two SIDES of the walk are tried before onward and back, which is what keeps a crowd opening as a lane rather than being shoved along.";
  "Two kinds of tile are never stepped onto: what nobody can stand on, and what is being kept clear - the way the walker is about to take, and the person the walker is walking up to. Shuffling somebody into the way would only move the blockage along it, and shuffling away the person who was tapped would answer a tap by walking somewhere nobody is.";
  "It is looked for only so far. A crowd deeper than that is left standing, and the walker passes those people one at a time by trading places with them - the last resort, and now only reached when there is genuinely no room anywhere within reach.";
  let ways = g_crowd_push_ways(direction);
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
      let kept = property_exists(kept_index, key);
      if (kept) {
        continue;
      }
      property_set(depth, key, onward);
      property_set(previous, key, at);
      let occupied = property_exists(npc_index, key);
      if (not(occupied)) {
        let route = g_crowd_push_route_back(previous, tile, next);
        return route;
      }
      list_add(queue, next);
    }
  }
  return null;
}
