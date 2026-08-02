import { app_shared_button_wide_text_combine } from "./app_shared_button_wide_text_combine.mjs";
import { html_centered } from "./html_centered.mjs";
import { html_style_background_color_set } from "./html_style_background_color_set.mjs";
import { html_font_color_set } from "./html_font_color_set.mjs";
import { app_shared_milestone_background_color } from "./app_shared_milestone_background_color.mjs";
import { app_shared_button_font_color } from "./app_shared_button_font_color.mjs";
export function app_code_review_button(parent, label, on_click) {
  "a milestone-styled review checkpoint button, distinct from the lesson buttons";
  let b = app_shared_button_wide_text_combine(
    parent,
    "Review ",
    label,
    on_click,
  );
  html_centered(b);
  let background = app_shared_milestone_background_color();
  html_style_background_color_set(b, background);
  let color = app_shared_button_font_color();
  html_font_color_set(b, color);
  return b;
}
