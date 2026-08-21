import { html_event_target_closest_class } from "./html_event_target_closest_class.mjs";
import { app_shared_game_class_tile } from "./app_shared_game_class_tile.mjs";
export function app_shared_game_event_target_closest_tile(e) {
  let tile_class = app_shared_game_class_tile();
  let tile = html_event_target_closest_class(tile_class, e);
  return tile;
}
