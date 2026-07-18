import { html_font_color_set } from "./html_font_color_set.mjs";
import { app_shared_color_literal } from "./app_shared_color_literal.mjs";
export function app_a_color_literal(span) {
  html_font_color_set(span, app_shared_color_literal());
}
