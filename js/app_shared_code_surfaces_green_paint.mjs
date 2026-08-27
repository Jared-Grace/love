import { app_shared_button_background } from "./app_shared_button_background.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { html_style_background_color_set } from "./html_style_background_color_set.mjs";
import { each } from "./each.mjs";
export function app_shared_code_surfaces_green_paint(surfaces) {
  "turn runs of code green - the same green everything else in the app turns when it is right";
  "A code surface is near-black, so a right answer written as code has to change colour itself; nothing painted around it can be seen through more than the few pixels at its edge, and that little of it reads as a border rather than as a verdict. Turning the block itself is the whole change, and the white lettering that was readable on the black stays readable on this.";
  "The bright green rather than a dark one, because a dark green over a near-black block does not read as a colour at all - it reads as the same block behind a filter, which says something has been dimmed and not something is right.";
  arguments_assert(arguments, 1);
  let green = app_shared_button_background();
  function lambda(surface) {
    html_style_background_color_set(surface, green);
  }
  each(surfaces, lambda);
}
