import { html_font_color_set_white } from "../../../love/public/src/html_font_color_set_white.mjs";
import { html_style_background_color_set } from "../../../love/public/src/html_style_background_color_set.mjs";
import { app_code_lesson_quiz_wrong_background_color } from "../../../love/public/src/app_code_lesson_quiz_wrong_background_color.mjs";
export function app_code_lesson_quiz_wrong_set(b) {
  let color_bg = app_code_lesson_quiz_wrong_background_color();
  html_style_background_color_set(b, color_bg);
  html_font_color_set_white(b);
}
