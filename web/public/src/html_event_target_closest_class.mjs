import { html_event_target_closest } from "../../../love/public/src/html_event_target_closest.mjs";
export function html_event_target_closest_class(tile_class, e) {
  const c = "." + tile_class;
  let tile = html_event_target_closest(e, c);
  return tile;
}
