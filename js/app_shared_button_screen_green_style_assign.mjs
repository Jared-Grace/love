import { app_shared_button_verdict_color_paint } from "./app_shared_button_verdict_color_paint.mjs";
import { html_font_color_set } from "./html_font_color_set.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_button_font_color } from "./app_shared_button_font_color.mjs";
import { app_shared_button_background } from "./app_shared_button_background.mjs";
export function app_shared_button_screen_green_style_assign(component) {
  "paint a button as the right answer: green behind and white words - or, when the answer is written as code, the run of code itself turned green and the button left alone";
  "Which of the two it is decides itself from what is in the button, so no caller has to remember. A caller knows what it put in there; it does not know that green is about to be painted around it, and that is exactly the pair of facts that has to meet in one place.";
  "The code answer turns ONE block rather than two. The button behind it is already invisible by the time it is pressed, and painting it green now would put the frame back on at the very moment the learner is looking hardest.";
  arguments_assert(arguments, 1);
  let green = app_shared_button_background();
  ("handed in twice on purpose: this one green was tried on both a button and a block of code and it reads right on either, so there is nothing here to tell apart");
  let coded = app_shared_button_verdict_color_paint(component, green, green);
  if (coded) {
    ("the lettering inside a code block is already white, and the button standing around it is not being looked at");
    return;
  }
  let color = app_shared_button_font_color();
  html_font_color_set(component, color);
}
