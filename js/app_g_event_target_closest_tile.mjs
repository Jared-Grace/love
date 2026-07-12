import { html_event_target_closest_class } from "./html_event_target_closest_class.mjs";
import { app_g_class_tile } from "./app_g_class_tile.mjs";
export function app_g_event_target_closest_tile(e) {
  let tile_class = app_g_class_tile();
  let tile = html_event_target_closest_class(tile_class, e);
  return tile;
}
