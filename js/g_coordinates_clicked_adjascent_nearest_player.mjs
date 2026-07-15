import { app_g_game_save_get } from "./app_g_game_save_get.mjs";
import { app_g_player_get } from "./app_g_player_get.mjs";
import { list_shuffle_sort_number_mapper_first } from "./list_shuffle_sort_number_mapper_first.mjs";
import { g_distance_curried } from "./g_distance_curried.mjs";
import { g_coordinates_adjascent } from "./g_coordinates_adjascent.mjs";
export async function g_coordinates_clicked_adjascent_nearest_player(
  clicked_coordinates,
) {
  "find the coordinates next to the npc that is nearest to the player";
  let g = await app_g_game_save_get();
  let nearby = g_coordinates_adjascent(g, clicked_coordinates);
  let player = await app_g_player_get();
  let lambda = g_distance_curried(player);
  let coordinates_move_to = list_shuffle_sort_number_mapper_first(nearby, lambda);
  return coordinates_move_to;
}
