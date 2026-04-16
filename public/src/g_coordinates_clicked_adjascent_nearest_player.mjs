import { list_shuffle_sort_number_mapper_first } from "../../../love/public/src/list_shuffle_sort_number_mapper_first.mjs";
import { g_distance_curried } from "../../../love/public/src/g_distance_curried.mjs";
import { g_coordinates_adjascent } from "../../../love/public/src/g_coordinates_adjascent.mjs";
export function g_coordinates_clicked_adjascent_nearest_player(
  g,
  clicked_coordinates,
  player,
  coordinates_move_to,
) {
  let nearby = g_coordinates_adjascent(g, clicked_coordinates);
  let lambda19 = g_distance_curried(player);
  coordinates_move_to = list_shuffle_sort_number_mapper_first(nearby, lambda19);
  return coordinates_move_to;
}
