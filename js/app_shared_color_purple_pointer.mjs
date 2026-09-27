import { arguments_assert } from "./arguments_assert.mjs";
import { color_oklch } from "./color_oklch.mjs";
export function app_shared_color_purple_pointer() {
  arguments_assert(arguments, 0);
  ("the fourth pointing colour's value: the red pointer's lightness and chroma turned to a purple, so white lettering stands on it as it does on the red, and its hue sits between the blue pointer's and the red's, well clear of both and of the green");
  let color = color_oklch(0.55, 0.2, 315);
  return color;
}
