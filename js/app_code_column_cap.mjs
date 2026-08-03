import { app_code_column_cap_width } from "./app_code_column_cap_width.mjs";
import { html_style_set } from "./html_style_set.mjs";
import { html_style_margin_x } from "./html_style_margin_x.mjs";
export function app_code_column_cap(element) {
  "cap a full-width code-app element to the shared column width and center it with auto side margins, so it lines up edge-to-edge with the capped buttons. The buttons are capped by a head CSS rule that only matches full-width buttons, so a non-button element (the success banner) has to be capped directly - here.";
  let width = app_code_column_cap_width();
  html_style_set(element, "max-width", width);
  html_style_margin_x(element, "auto");
}
