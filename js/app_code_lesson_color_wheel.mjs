import { add } from "./add.mjs";
import { multiply } from "./multiply.mjs";
import { divide } from "./divide.mjs";
import { color_oklch } from "./color_oklch.mjs";
export function app_code_lesson_color_wheel(index, count) {
  "one of `count` chip colors spaced equally around the OKLCH hue wheel - index 0..count-1 maps to equal hue steps of 360/count - in OKLCH (perceptually uniform) so equal steps LOOK equal and no warm hue is skipped; the wheel starts at hue 30 (a warm red) rather than 0 (magenta), and a fixed dark lightness and chroma keep white chip text readable on every hue";
  let hue_start = 30;
  let step = divide(360, count);
  let hue = add(hue_start, multiply(index, step));
  let color = color_oklch(0.5, 0.14, hue);
  return color;
}
