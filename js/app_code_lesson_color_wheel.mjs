import { multiply } from "./multiply.mjs";
import { divide } from "./divide.mjs";
import { color_hsl } from "./color_hsl.mjs";
export function app_code_lesson_color_wheel(index, count) {
  "one of `count` chip colors spaced equally around the hue wheel - index 0..count-1 maps to hue 0, 360/count, 2*360/count, ... - at a fixed saturation and a medium lightness so the white chip text stays readable on every hue";
  let hue = divide(multiply(index, 360), count);
  let color = color_hsl(hue, 58, 44);
  return color;
}
