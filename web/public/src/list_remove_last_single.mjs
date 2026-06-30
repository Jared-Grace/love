import { list_single } from "../../../love/public/src/list_single.mjs";
import { list_remove_last } from "../../../love/public/src/list_remove_last.mjs";
export function list_remove_last_single(coordinates_land) {
  let player_list = list_remove_last(coordinates_land);
  let player_coordinates = list_single(player_list);
  return player_coordinates;
}
