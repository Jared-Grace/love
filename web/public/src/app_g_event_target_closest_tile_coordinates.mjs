import { app_g_tile_coordinates_get } from "../../../love/public/src/app_g_tile_coordinates_get.mjs";
import { app_g_event_target_closest_tile } from "../../../love/public/src/app_g_event_target_closest_tile.mjs";
export function app_g_event_target_closest_tile_coordinates(e) {
  let tile = app_g_event_target_closest_tile(e);
  let clicked_coordinates = app_g_tile_coordinates_get(tile);
  return clicked_coordinates;
}
