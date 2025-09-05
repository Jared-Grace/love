import { marker } from "./marker.mjs";
import { html_style_set } from "./html_style_set.mjs";
export function html_display_none(html, value) {
  marker("1");
  html_style_set(html, "font-size", value);
}
