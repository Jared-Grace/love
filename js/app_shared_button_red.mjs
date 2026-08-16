import { app_shared_button_font_color } from "./app_shared_button_font_color.mjs";
import { app_shared_button_uncolored } from "./app_shared_button_uncolored.mjs";
import { app_shared_color_red } from "./app_shared_color_red.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
export function app_shared_button_red(div, text, lambda) {
  "the green control of the screen painted red instead: the same size and the same shape, for the one press that undoes a learner's own work rather than carrying them forward";
  arguments_assert(arguments, 3);
  let component = app_shared_button_uncolored(div, text, lambda);
  html_style_assign(component, {
    "background-color": app_shared_color_red(),
    color: app_shared_button_font_color(),
  });
  return component;
}
