import { multiply } from "./multiply.mjs";
import { divide } from "./divide.mjs";
import { color_oklch } from "./color_oklch.mjs";
export function app_code_lesson_color_wheel(index, count) {
  "one of `count` chip colors spaced equally around the OKLCH hue wheel - index 0..count-1 maps to hue 0, 360/count, 2*360/count, ... - in OKLCH (perceptually uniform) so equal steps LOOK equal and warm hues are not skipped; a fixed dark lightness and chroma keep white chip text readable on every hue";
  let hue = divide(multiply(index, 360), count);
  let color = color_oklch(0.5, 0.14, hue);
  return color;
}
