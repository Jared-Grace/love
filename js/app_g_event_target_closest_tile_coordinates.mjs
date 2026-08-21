import { app_shared_game_tile_coordinates_get } from "./app_shared_game_tile_coordinates_get.mjs";
import { app_shared_game_event_target_closest_tile } from "./app_shared_game_event_target_closest_tile.mjs";
export function app_g_event_target_closest_tile_coordinates(e) {
  let tile = app_shared_game_event_target_closest_tile(e);
  let clicked_coordinates = app_shared_game_tile_coordinates_get(tile);
  return clicked_coordinates;
}
