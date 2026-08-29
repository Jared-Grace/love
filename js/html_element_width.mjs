import { html_bounding_client_rect } from "./html_bounding_client_rect.mjs";
import { property_get } from "./property_get.mjs";
export function html_element_width(element) {
  "how wide an element is drawn right now, in pixels.";
  "Asked of the browser rather than of the stylesheet, so it answers what the reader is actually looking at - a size set by a rule, by a parent, or by the page being narrow all come back the same way.";
  let rect = html_bounding_client_rect(element);
  let width = property_get(rect, "width");
  return width;
}
