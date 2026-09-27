import { arguments_assert } from "./arguments_assert.mjs";
import { color_oklch } from "./color_oklch.mjs";
export function app_shared_color_orange_pointer() {
  arguments_assert(arguments, 0);
  ("the fifth pointing colour's value: an orange a little lighter than the red and purple pointers so it reads as its own warm colour, with its hue in the widest gap left on the wheel, between the red pointer's and the green's, well clear of both");
  let color = color_oklch(0.6, 0.16, 60);
  return color;
}
