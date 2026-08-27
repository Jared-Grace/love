import { arguments_assert } from "./arguments_assert.mjs";
import { html_style_background_color_set } from "./html_style_background_color_set.mjs";
import { each } from "./each.mjs";
export function app_shared_code_surfaces_color_paint(surfaces, color) {
  "$plain color";
  "colour runs of code";
  "A code surface is near-black, so a verdict on an answer written as code has to be painted onto the block itself. Nothing painted around it can be seen through more than the few pixels at its edge, and that little of a colour reads as a border drawn on the code rather than as anything said about it. The white lettering that was readable on the black stays readable on any of the colours a verdict comes in.";
  arguments_assert(arguments, 2);
  function lambda(surface) {
    html_style_background_color_set(surface, color);
  }
  each(surfaces, lambda);
}
