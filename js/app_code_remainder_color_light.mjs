import { color_between } from "./color_between.mjs";
import { app_code_remainder_fraction } from "./app_code_remainder_fraction.mjs";
export function app_code_remainder_color_light(remainder, divisor) {
  "a pale row-band version of the remainder blue spectrum: light blue at 0 fading evenly to a deeper light blue at divisor-1, all darker than the container (228,241,255) so the bands show while the dark code and prose stay readable";
  let t = app_code_remainder_fraction(remainder, divisor);
  let light = [205, 226, 255];
  let deep = [138, 182, 248];
  let color = color_between(t, light, deep);
  return color;
}
