import { arguments_assert } from "./arguments_assert.mjs";
import { app_learn_js_lesson_quiz_wrong_background_color } from "./app_learn_js_lesson_quiz_wrong_background_color.mjs";
import { app_learn_js_lesson_quiz_wrong_code_background_color } from "./app_learn_js_lesson_quiz_wrong_code_background_color.mjs";
import { app_shared_button_verdict_color_paint } from "./app_shared_button_verdict_color_paint.mjs";
import { html_style_background_color_set } from "./html_style_background_color_set.mjs";
import { app_learn_js_expression_chip_border_width } from "./app_learn_js_expression_chip_border_width.mjs";
import { html_edge_color_set } from "./html_edge_color_set.mjs";
import { html_font_color_set_white } from "./html_font_color_set_white.mjs";
export function app_learn_js_lesson_quiz_wrong_set(component) {
  arguments_assert(arguments, 1);
  ("mark the thing a learner has just pressed as the one that cannot go: filled red, lettered white, and edged in that same red");
  ("The edge is coloured with the fill rather than left as it was. A red fill still ringed in the grey it wore a moment ago reads as the old thing with a red light shone on it; coloured through, it is one thing, and one thing is what the answer is about.");
  let color = app_learn_js_lesson_quiz_wrong_background_color();
  let color_code = app_learn_js_lesson_quiz_wrong_code_background_color();
  let coded = app_shared_button_verdict_color_paint(
    component,
    color,
    color_code,
  );
  if (coded) {
    ("an answer written as code has the red put on the code block itself, exactly as a right one has the green put there. The lettering in it is already white.");
    ("2026-11-14, at the human's asking: the whole button behind the code takes the same red too, edge and all, so a wrong press reads as the whole choice being wrong and not as the code in it being recoloured. Not picked: red on the code alone, which was the rule before - it said the button was out of sight once code was drawn, so a red edge around the code would be a line and nothing more; the human wanted that whole shape to show.");
    html_style_background_color_set(component, color_code);
    let width_code = app_learn_js_expression_chip_border_width();
    html_edge_color_set(component, color_code, width_code);
    return coded;
  }
  html_font_color_set_white(component);
  let width = app_learn_js_expression_chip_border_width();
  html_edge_color_set(component, color, width);
  ("said back so a caller can tell whether what it is now looking at is a code block or a button, which decides what else it is allowed to do to it");
  return coded;
}
