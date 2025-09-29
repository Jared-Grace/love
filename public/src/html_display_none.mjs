import { marker } from "../../../love/public/src/marker.mjs";
import { html_style_set } from "../../../love/public/src/html_style_set.mjs";
export function html_display_none(element) {
  marker("1");
  html_style_set(element, "display", "none");
}
