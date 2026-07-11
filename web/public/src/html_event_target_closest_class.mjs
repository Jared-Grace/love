import { html_event_target_closest } from "../../../love/public/src/html_event_target_closest.mjs";
import { text_combine } from "../../../love/public/src/text_combine.mjs";
export function html_event_target_closest_class(tile_class, e) {
  let c = text_combine(".", tile_class);
  let tile = html_event_target_closest(e, c);
  return tile;
}
