import { subtract } from "./subtract.mjs";
import { divide } from "./divide.mjs";
import { multiply } from "./multiply.mjs";
import { add } from "./add.mjs";
import { round } from "./round.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function app_code_remainder_color_light(remainder, divisor) {
  "a pale version of the remainder blue spectrum for row-band backgrounds: light blue at 0 fading evenly to a deeper light blue at divisor-1, all darker than the container (228,241,255) so the bands show while the dark code and prose stay readable; mirrors app_code_remainder_color and could be DRYed with it via a shared color interpolator";
  let last = subtract(divisor, 1);
  let t = 0;
  if (last > 0) {
    t = divide(remainder, last);
  }
  function channel(light, deep) {
    let span = subtract(deep, light);
    let shift = multiply(t, span);
    let value = add(light, shift);
    return round(value);
  }
  let r = channel(205, 138);
  let g = channel(226, 182);
  let b = channel(255, 248);
  let color = text_combine_multiple(["rgb(", r, ", ", g, ", ", b, ")"]);
  return color;
}
