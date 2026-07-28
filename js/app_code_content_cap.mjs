import { app_code_content_cap_width } from "./app_code_content_cap_width.mjs";
import { html_style_set } from "./html_style_set.mjs";
import { html_style_margin_x } from "./html_style_margin_x.mjs";
export function app_code_content_cap(element) {
  "cap an element to the light-blue content-card width and centre it, so a non-card element (the success message) matches the cards' width and lines up with them";
  let width = app_code_content_cap_width();
  html_style_set(element, "width", width);
  html_style_margin_x(element, "auto");
}
