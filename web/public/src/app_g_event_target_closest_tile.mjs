import { html_event_target_closest_class } from "../../../love/public/src/html_event_target_closest_class.mjs";
import { app_g_class_tile } from "../../../love/public/src/app_g_class_tile.mjs";
export function app_g_event_target_closest_tile(e) {
  const tile_class = app_g_class_tile();
  let tile = html_event_target_closest_class(tile_class, e);
  return tile;
}
