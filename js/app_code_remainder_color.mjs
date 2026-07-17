import { color_between } from "./color_between.mjs";
import { app_code_remainder_fraction } from "./app_code_remainder_fraction.mjs";
export function app_code_remainder_color(remainder, divisor) {
  "a linear blue spectrum for the remainders 0..divisor-1: bright blue at 0 fading evenly to dark blue at divisor-1, never reaching black so the remainder chips stay distinct from the black code chips; the even ramp shows the remainder rising then resetting to bright blue like a sawtooth";
  let t = app_code_remainder_fraction(remainder, divisor);
  let bright = [37, 99, 235];
  let dark = [18, 42, 110];
  let color = color_between(t, bright, dark);
  return color;
}
