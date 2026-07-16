import { app_shared_button_wide } from "../../love/js/app_shared_button_wide.mjs";
import { html_centered } from "../../love/js/html_centered.mjs";
import { html_style_background_color_set } from "../../love/js/html_style_background_color_set.mjs";
import { html_font_color_set } from "../../love/js/html_font_color_set.mjs";
import { app_shared_milestone_background_color } from "../../love/js/app_shared_milestone_background_color.mjs";
import { app_shared_button_font_color } from "../../love/js/app_shared_button_font_color.mjs";
import { text_combine } from "../../love/js/text_combine.mjs";
export function app_code_review_button(parent, label, on_click) {
  "a milestone-styled review checkpoint button, distinct from the lesson buttons";
  let text = text_combine("Review ", label);
  let b = app_shared_button_wide(parent, text, on_click);
  html_centered(b);
  let background = app_shared_milestone_background_color();
  html_style_background_color_set(b, background);
  let color = app_shared_button_font_color();
  html_font_color_set(b, color);
  return b;
}
