import { marker } from "../../../love/public/src/marker.mjs";
import { html_style_set } from "../../../love/public/src/html_style_set.mjs";
export function html_bold_mild(b) {
  marker("1");
  html_style_set(b, "font-weight", "500");
}
