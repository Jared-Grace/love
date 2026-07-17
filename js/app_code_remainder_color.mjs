import { subtract } from "./subtract.mjs";
import { divide } from "./divide.mjs";
import { multiply } from "./multiply.mjs";
import { add } from "./add.mjs";
import { round } from "./round.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function app_code_remainder_color(remainder, divisor) {
  "a linear blue spectrum for the remainders 0..divisor-1: bright blue at 0 fading evenly to dark blue at divisor-1, never reaching black so the remainder chips stay distinct from the black code chips; the even linear ramp shows the remainder rising then resetting to bright blue like a sawtooth";
  let last = subtract(divisor, 1);
  let t = 0;
  if (last > 0) {
    t = divide(remainder, last);
  }
  function channel(bright, dark) {
    let span = subtract(dark, bright);
    let shift = multiply(t, span);
    let value = add(bright, shift);
    return round(value);
  }
  let r = channel(37, 18);
  let g = channel(99, 42);
  let b = channel(235, 110);
  let color = text_combine_multiple(["rgb(", r, ", ", g, ", ", b, ")"]);
  return color;
}
