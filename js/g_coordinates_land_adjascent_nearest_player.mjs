import { g_coordinates_adjascent } from "./g_coordinates_adjascent.mjs";
import { g_coordinates_land } from "./g_coordinates_land.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { g_distance_curried } from "./g_distance_curried.mjs";
import { list_shuffle_sort_number_mapper_first } from "./list_shuffle_sort_number_mapper_first.mjs";
export function g_coordinates_land_adjascent_nearest_player(
  g,
  player,
  coordinates,
) {
  "the tile beside this one that is nearest the player and is GROUND - whether or not somebody is standing on it.";
  "The walkable question refuses a tile somebody is standing on, which is right when the answer is somewhere to walk to and wrong when the answer is somewhere to walk UP to. Somebody hemmed in on every side by their neighbours has no free tile beside them at all, and refusing to go to them would mean a person could be made unreachable by the people around them.";
  "It still refuses water, because standing in the sea to speak to somebody is not the same kind of no - nobody can stand there at all, however the crowd moves.";
  let nearby = g_coordinates_adjascent(g, coordinates);
  let land = g_coordinates_land(nearby);
  let none = list_empty_is(land);
  if (none) {
    return null;
  }
  let distance = g_distance_curried(player);
  let nearest = list_shuffle_sort_number_mapper_first(land, distance);
  return nearest;
}
