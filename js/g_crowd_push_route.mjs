import { g_direction_sides } from "./g_direction_sides.mjs";
import { g_crowd_push_route_ways } from "./g_crowd_push_route_ways.mjs";
import { null_not_is } from "./null_not_is.mjs";
import { g_crowd_push_ways } from "./g_crowd_push_ways.mjs";
export function g_crowd_push_route(
  land_index,
  npc_index,
  kept_index,
  still_index,
  tile,
  direction,
) {
  "the shuffle that empties one tile: the run of tiles from the person standing in the way out to the nearest place somebody can stand, or nothing when there is no such place near enough.";
  "It is asked twice, and the first asking is the one that matters. SIDEWAYS ONLY comes first, so a crowd standing across a way opens the way a sea parts - the two halves stepping apart along their own rows, and a lane down the middle - and nobody is ever shoved along in front of the walker while there is still room to either hand.";
  "Only when neither side can give at all is it asked again with every way open. That is the one-wide way, walls to both hands, where sideways is not a choice anybody has: the run then turns corners, goes round obstacles and through the crowd itself to reach whatever room there is. Asking in that order is what keeps the parting looking exactly as it did while adding room that was there all along and could not be reached in a straight line.";
  "Nothing at all comes back when there is genuinely nowhere within reach. Only then does the walker trade places with the person in the way, which is what makes that trade a last resort rather than the first answer.";
  let sides = g_direction_sides(direction);
  let aside = g_crowd_push_route_ways(
    land_index,
    npc_index,
    kept_index,
    still_index,
    tile,
    sides,
  );
  let parted = null_not_is(aside);
  if (parted) {
    return aside;
  }
  let ways = g_crowd_push_ways(direction);
  let around = g_crowd_push_route_ways(
    land_index,
    npc_index,
    kept_index,
    still_index,
    tile,
    ways,
  );
  return around;
}
