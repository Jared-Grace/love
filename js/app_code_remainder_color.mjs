import { color_between } from "./color_between.mjs";
import { app_code_remainder_fraction } from "./app_code_remainder_fraction.mjs";
export function app_code_remainder_color(remainder, divisor) {
  "a linear blue spectrum for the remainders 0..divisor-1: dark blue at 0 brightening evenly to bright blue at divisor-1, so the largest remainder (which is the one shown on the black equation tile) is the lightest and stands out against black; the even ramp shows the remainder rising then resetting like a sawtooth";
  let t = app_code_remainder_fraction(remainder, divisor);
  let dark = [18, 42, 110];
  let bright = [37, 99, 235];
  let color = color_between(t, dark, bright);
  return color;
}
