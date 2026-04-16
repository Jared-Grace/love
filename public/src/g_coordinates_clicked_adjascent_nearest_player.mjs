import { property_get } from "../../../love/public/src/property_get.mjs";
import { app_g_game_save_get } from "../../../love/public/src/app_g_game_save_get.mjs";
import { list_shuffle_sort_number_mapper_first } from "../../../love/public/src/list_shuffle_sort_number_mapper_first.mjs";
import { g_distance_curried } from "../../../love/public/src/g_distance_curried.mjs";
import { g_coordinates_adjascent } from "../../../love/public/src/g_coordinates_adjascent.mjs";
export async function g_coordinates_clicked_adjascent_nearest_player(
  clicked_coordinates,
  coordinates_move_to,
) {
  "find the coordinates next to the npc that is nearest to the player";
  let g = await app_g_game_save_get();
  let player = property_get(g, "player");
  let nearby = g_coordinates_adjascent(g, clicked_coordinates);
  let lambda = g_distance_curried(player);
  coordinates_move_to = list_shuffle_sort_number_mapper_first(nearby, lambda);
  return coordinates_move_to;
}
