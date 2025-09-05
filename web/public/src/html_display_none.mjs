import { marker } from "./marker.mjs";
import { html_style_set } from "./html_style_set.mjs";
export function html_display_none(element) {
  marker("1");
  html_style_set(element, "display", "none");
}
