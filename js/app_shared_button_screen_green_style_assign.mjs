import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_code_surfaces_inside } from "./app_shared_code_surfaces_inside.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
import { app_shared_code_surfaces_green_paint } from "./app_shared_code_surfaces_green_paint.mjs";
import { app_shared_button_font_color } from "./app_shared_button_font_color.mjs";
import { app_shared_button_background } from "./app_shared_button_background.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
export function app_shared_button_screen_green_style_assign(component) {
  "paint a button as the right answer: green behind and white words - or, when the answer is written as code, the run of code itself turned green and the button left alone";
  "Which of the two it is decides itself from what is in the button, so no caller has to remember. A caller knows what it put in there; it does not know that green is about to be painted around it, and that is exactly the pair of facts that has to meet in one place.";
  "The code answer turns ONE block rather than two. The button behind it is already invisible by the time it is pressed, and painting it green now would put the frame back on at the very moment the learner is looking hardest.";
  arguments_assert(arguments, 1);
  let surfaces = app_shared_code_surfaces_inside(component);
  let coded = list_empty_not_is(surfaces);
  if (coded) {
    app_shared_code_surfaces_green_paint(surfaces);
    return;
  }
  html_style_assign(component, {
    "background-color": app_shared_button_background(),
    color: app_shared_button_font_color(),
  });
}
