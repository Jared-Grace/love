import { app_shared_success_message } from "./app_shared_success_message.mjs";
import { app_shared_spaced_gap } from "./app_shared_spaced_gap.mjs";
import { html_style_margin_y } from "./html_style_margin_y.mjs";
import { html_font_color_set_black } from "./html_font_color_set_black.mjs";
export function app_shared_success_message_spaced(parent) {
  "the well done, set apart from what stands above and below it by the gap stacked items leave between each other, and lettered black whatever colour the words around it are";
  "2026-11-10, at the human's asking: the well done on a lesson's front page stood inside a blue label and squeezed between the code above it and the line below; its room and its black were made one function so every place that shows it alone shows it the same";
  let p = app_shared_success_message(parent);
  let gap = app_shared_spaced_gap();
  html_style_margin_y(p, gap);
  html_font_color_set_black(p);
  return p;
}
