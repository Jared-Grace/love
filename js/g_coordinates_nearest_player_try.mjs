import { list_empty_is } from "./list_empty_is.mjs";
import { g_distance_curried } from "./g_distance_curried.mjs";
import { list_shuffle_sort_number_mapper_first } from "./list_shuffle_sort_number_mapper_first.mjs";
export function g_coordinates_nearest_player_try(player, tiles) {
  "the one of these tiles that is nearest the player, or nothing when there are none to choose from.";
  "Nearest is measured from the PLAYER because the answer is always somewhere the player is about to walk, so the nearest of them is the shortest walk there. Where several are equally near the choice between them is shuffled, so somebody walked up to twice is not approached from the same side both times.";
  "Nothing rather than a fault when there are none. Every caller narrows the tiles beside something by its own test - ground, walkable, reachable without disturbing anybody - and any of those can leave nothing at all, which is an answer the caller has to decide what to do about rather than an error.";
  let none = list_empty_is(tiles);
  if (none) {
    return null;
  }
  let distance = g_distance_curried(player);
  let nearest = list_shuffle_sort_number_mapper_first(tiles, distance);
  return nearest;
}
