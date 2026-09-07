import { color_oklch } from "./color_oklch.mjs";
import { list_get } from "./list_get.mjs";
export function app_code_lesson_chip_color(index) {
  "one of four categorical chip colors - red, green, blue, amber - hand-picked to be as distinct and familiar as possible (NOT an even-hue formula) so a learner tells one number from another at a glance; each is kept dark enough for the white chip text";
  "All four are spelled here because nothing outside asks for one of them by itself. The amber was lifted out under its own name for a while, when the second of the colours that point at a piece of code was taken from this list; that pointer is a green of its own now and the name went back where it came from. Lift one out again the moment a second reader wants exactly one of these - never by its place in the list, because the order these happen to be written in is not a name for what sits there.";
  let red = color_oklch(0.5, 0.2, 25);
  let green = color_oklch(0.51, 0.15, 150);
  let blue = color_oklch(0.5, 0.15, 255);
  let amber = color_oklch(0.58, 0.16, 56.38);
  let colors = [red, green, blue, amber];
  let color = list_get(colors, index);
  return color;
}
