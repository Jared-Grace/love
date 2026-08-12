import { g_coordinates_reachable_adjascent_nearest_player } from "./g_coordinates_reachable_adjascent_nearest_player.mjs";
import { null_is } from "./null_is.mjs";
import { g_coordinates_land_adjascent_nearest_player } from "./g_coordinates_land_adjascent_nearest_player.mjs";
import { g_coordinates_clicked_adjascent_nearest_player } from "./g_coordinates_clicked_adjascent_nearest_player.mjs";
import { not } from "./not.mjs";
export function g_coordinates_walk_up_adjascent_nearest_player(
  g,
  player,
  coordinates,
) {
  "where the player should stand to be beside this - the nearest free ground next to it that can be reached without walking through anybody, and if there is no such side, the nearest ground next to it whoever is standing there.";
  "Choosing somewhere free first is what keeps an ordinary walk up to somebody ordinary: nobody is disturbed when there is room to stand. Choosing occupied ground second is what makes somebody in the middle of a crowd reachable at all - the person standing there makes room, and the player takes the tile.";
  "Refusing outright would be the wrong answer to a tap. Being asked for is not the same as being free to reach, and a person the player is looking straight at should never be unreachable because their neighbours are close.";
  "Water is out of both answers, which is the whole difference from the plain nearest-neighbour question - beside a person the nearest tile is land nearly always, so the difference only shows at the water's edge, where the plain answer would walk the player into the sea. The last resort keeps that plain answer for a tile with no ground beside it at all, so a tap always leads somewhere.";
  let free = g_coordinates_reachable_adjascent_nearest_player(
    g,
    player,
    coordinates,
  );
  let taken = null_is(free);
  if (not(taken)) {
    return free;
  }
  let land = g_coordinates_land_adjascent_nearest_player(
    g,
    player,
    coordinates,
  );
  let dry = null_is(land);
  if (not(dry)) {
    return land;
  }
  let anywhere = g_coordinates_clicked_adjascent_nearest_player(
    g,
    player,
    coordinates,
  );
  return anywhere;
}
