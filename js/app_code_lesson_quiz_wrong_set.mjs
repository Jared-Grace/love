import { html_font_color_set_white } from "./html_font_color_set_white.mjs";
import { html_style_background_color_set } from "./html_style_background_color_set.mjs";
import { app_code_lesson_quiz_wrong_background_color } from "./app_code_lesson_quiz_wrong_background_color.mjs";
export function app_code_lesson_quiz_wrong_set(component) {
  let color_bg = app_code_lesson_quiz_wrong_background_color();
  html_style_background_color_set(component, color_bg);
  html_font_color_set_white(component);
}
