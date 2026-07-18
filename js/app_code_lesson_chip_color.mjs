import { list_get } from "./list_get.mjs";
import { color_oklch } from "./color_oklch.mjs";
export function app_code_lesson_chip_color(index) {
  "one of four categorical chip colors - red, green, blue, amber - hand-picked to be as distinct and familiar as possible (NOT an even-hue formula) so a learner tells one number from another at a glance; each is kept dark enough for the white chip text";
  let red = color_oklch(0.5, 0.2, 25);
  let green = color_oklch(0.51, 0.15, 150);
  let blue = color_oklch(0.5, 0.15, 255);
  let amber = color_oklch(0.58, 0.16, 56.38);
  let colors = [red, green, blue, amber];
  let color = list_get(colors, index);
  return color;
}
