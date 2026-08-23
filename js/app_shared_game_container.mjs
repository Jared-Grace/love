import { app_shared_spaced_tiny_gap } from "./app_shared_spaced_tiny_gap.mjs";
import { app_shared_spaced_gap } from "./app_shared_spaced_gap.mjs";
import { html_style_padding_x } from "./html_style_padding_x.mjs";
import { html_style_padding_y } from "./html_style_padding_y.mjs";
import { app_shared_container_background_color } from "./app_shared_container_background_color.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
import { app_shared_style_control } from "./app_shared_style_control.mjs";
import { app_shared_container_centered } from "./app_shared_container_centered.mjs";
import { text_combine } from "./text_combine.mjs";
export function app_shared_game_container(overlay) {
  "The green panel every game screen in this family puts its words and buttons on.";
  "It is given more room at the sides than at top and bottom, and the two are set apart";
  "rather than as one figure. Height here is taken from the map, which is the thing the";
  "player is trying to look across, so every bit of it is dear; width is free, because the";
  "panel already runs the whole way across and the space at the ends is holding nothing.";
  "Set as one figure, the cheap side could only ever be as generous as the dear one could";
  "afford - which is how a strip of buttons came to sit hard against both edges of a";
  "phone.";
  let container = app_shared_container_centered(overlay);
  app_shared_style_control(container);
  let left = app_shared_container_background_color();
  ("The room at the sides is counted INSIDE the panel's width rather than added to it. The");
  ("panel is told to be as wide as the screen, and by the ordinary rule padding is laid on");
  ("outside that - so a panel exactly as wide as the phone grew by whatever room it was");
  ("given and hung off the right-hand edge, taking its last button with it. It was already");
  ("hanging over by the small amount it had before; widening the sides is what made it");
  ("plain.");
  html_style_assign(container, {
    "box-sizing": "border-box",
    "font-size": "inherit",
    "background-color": text_combine(left, "bc"),
  });
  let value = app_shared_spaced_tiny_gap();
  html_style_padding_y(container, value);
  let value2 = app_shared_spaced_gap();
  html_style_padding_x(container, value2);
  return container;
}
