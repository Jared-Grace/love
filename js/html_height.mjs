import { arguments_assert } from "./arguments_assert.mjs";
import { html_bounding_client_rect } from "./html_bounding_client_rect.mjs";
import { property_get } from "./property_get.mjs";
export function html_height(component) {
  arguments_assert(arguments, 1);
  ("how tall a thing is on the page right now, in pixels");
  ("Read off the box the page has actually drawn, so a thing part way through moving answers with the height it is showing at this instant rather than the one it is heading for.");
  let rect = html_bounding_client_rect(component);
  let height = property_get(rect, "height");
  return height;
}
