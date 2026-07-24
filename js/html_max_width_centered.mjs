import { html_style_set } from "./html_style_set.mjs";
export function html_max_width_centered(element, max_width) {
  "cap the element width and center it horizontally with auto side margins, so a mobile-first column does not stretch full-bleed on a wide desktop";
  html_style_set(element, "max-width", max_width);
  html_style_set(element, "margin-left", "auto");
  html_style_set(element, "margin-right", "auto");
}
