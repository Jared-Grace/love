import { app_shared_code_surfaces_green_paint } from "./app_shared_code_surfaces_green_paint.mjs";
import { app_shared_button_font_color } from "./app_shared_button_font_color.mjs";
import { app_shared_button_background } from "./app_shared_button_background.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
export function app_shared_button_screen_green_style_assign(component) {
  "paint a button as the right answer - green behind, white words, and any code surface inside it turned green too";
  "The inside is done here rather than by each caller, because a caller knows what it put in the button and does not know that green is about to be painted around it. Doing it once at the moment the green goes on is what makes a code answer and a plain one look alike afterwards.";
  html_style_assign(component, {
    "background-color": app_shared_button_background(),
    color: app_shared_button_font_color(),
  });
  app_shared_code_surfaces_green_paint(component);
}
