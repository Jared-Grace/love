import { arguments_assert } from "./arguments_assert.mjs";
import { html_bounding_client_rect } from "./html_bounding_client_rect.mjs";
import { property_get } from "./property_get.mjs";
export function html_size(component, dimension) {
  arguments_assert(arguments, 2);
  ("how tall or how wide a thing is on the page right now, in pixels; dimension is height or width, the style's own word");
  ("Read off the box the page has actually drawn, so a thing part way through moving answers with the size it is showing at this instant rather than the one it is heading for.");
  let rect = html_bounding_client_rect(component);
  let size = property_get(rect, dimension);
  return size;
}
