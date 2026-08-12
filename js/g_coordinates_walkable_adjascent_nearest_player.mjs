import { g_coordinates_neighbors_walkable } from "./g_coordinates_neighbors_walkable.mjs";
import { g_coordinates_nearest_player_try } from "./g_coordinates_nearest_player_try.mjs";
import { fn_name } from "./fn_name.mjs";
export function g_coordinates_walkable_adjascent_nearest_player(
  g,
  player,
  coordinates,
) {
  ("the tile beside `coordinates` that the player can actually STAND on and is nearest to them - the walkable half of ",
    fn_name("g_coordinates_clicked_adjascent_nearest_player"),
    ", which asks the same question of every neighbour whether anybody could stand there or not");
  ("the difference only shows when the thing being walked up to is WATER. a person is surrounded by land, so the nearest tile beside them is land nearly always; a tile of sea is surrounded by more sea, and the nearest tile beside it is water nearly always - so the unwalkable answer would put the player IN the water rather than at its edge");
  ("the walkable neighbours are exactly the set the gold guide leads through (",
    fn_name("app_g_day_guide_pick"),
    " asks the same question of its target), so arriving lands on a tile the guide could have led to, and never past the end of its own trail");
  ("null when nothing beside it can be stood on at all - an island of water inside more water, which nobody can be baptized in and so nothing should be walked to.");
  let neighbors = g_coordinates_neighbors_walkable(g, coordinates);
  let nearest = g_coordinates_nearest_player_try(player, neighbors);
  return nearest;
}
