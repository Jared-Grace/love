import { app_code_expression_chip_border_width } from "./app_code_expression_chip_border_width.mjs";
import { app_code_lesson_quiz_wrong_background_color } from "./app_code_lesson_quiz_wrong_background_color.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { html_edge_color_set } from "./html_edge_color_set.mjs";
import { html_font_color_set_white } from "./html_font_color_set_white.mjs";
import { html_style_background_color_set } from "./html_style_background_color_set.mjs";
export function app_code_lesson_quiz_wrong_set(component) {
  arguments_assert(arguments, 1);
  ("mark the thing a learner has just pressed as the one that cannot go: filled red, lettered white, and edged in that same red");
  ("The edge is coloured with the fill rather than left as it was. A red fill still ringed in the grey it wore a moment ago reads as the old thing with a red light shone on it; coloured through, it is one thing, and one thing is what the answer is about.");
  let color = app_code_lesson_quiz_wrong_background_color();
  html_style_background_color_set(component, color);
  html_font_color_set_white(component);
  let width = app_code_expression_chip_border_width();
  html_edge_color_set(component, color, width);
}
