import { g_coordinates_nearest_player_try } from "./g_coordinates_nearest_player_try.mjs";
import { g_coordinates_adjascent } from "./g_coordinates_adjascent.mjs";
import { g_coordinates_land } from "./g_coordinates_land.mjs";
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
  let nearest = g_coordinates_nearest_player_try(player, land);
  return nearest;
}
