import { g_crowd_push_most } from "./g_crowd_push_most.mjs";
import { add } from "./add.mjs";
import { list_add } from "./list_add.mjs";
import { g_coordinates_same_is } from "./g_coordinates_same_is.mjs";
import { list_reverse } from "./list_reverse.mjs";
import { g_coordinates_key } from "./g_coordinates_key.mjs";
import { property_get } from "./property_get.mjs";
import { less_than } from "./less_than.mjs";
export function g_crowd_push_route_back(previous, tile, free) {
  "the run of tiles from somebody in the way out to the free tile found for them, read back from the free tile and then turned the right way round.";
  "Looking outward through a crowd remembers, for each tile reached, the tile it was reached FROM. That is enough to recover the whole run without carrying a copy of it at every tile along the way: start at the free tile and keep asking what came before, and the answers are the run backwards. The one tile with no answer is the one it all started from, which is how the walk back knows to stop.";
  let route = [];
  let at = free;
  let most = g_crowd_push_most();
  let bound = add(most, 2);
  for (let index = 0; less_than(index, bound); index++) {
    list_add(route, at);
    let start = g_coordinates_same_is(at, tile);
    if (start) {
      list_reverse(route);
      return route;
    }
    let key = g_coordinates_key(at);
    at = property_get(previous, key);
  }
  return null;
}
