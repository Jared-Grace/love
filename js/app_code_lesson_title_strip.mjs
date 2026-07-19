import { html_style_set } from "./html_style_set.mjs";
import { app_code_container_padded_x } from "./app_code_container_padded_x.mjs";
import { app_code_lesson_title_render } from "./app_code_lesson_title_render.mjs";
import { app_shared_spaced_gap } from "./app_shared_spaced_gap.mjs";
import { html_style_margin_y } from "./html_style_margin_y.mjs";
export function app_code_lesson_title_strip(root, lesson) {
  "a quiet orientation strip at the top of every lesson screen naming which lesson you are in - reuses the lesson's own home title (Category: Name symbol) via app_code_lesson_title_render so there is one source of truth - centered, a little smaller, and muted so it anchors 'where am I' after a deep-link or a return without competing with the teaching or the quiz question below it";
  let strip = app_code_container_padded_x(root);
  html_style_set(strip, "text-align", "center");
  html_style_set(strip, "font-size", "0.85em");
  html_style_set(strip, "opacity", "0.6");
  html_style_margin_y(strip, app_shared_spaced_gap());
  app_code_lesson_title_render(strip, lesson);
  return strip;
}
