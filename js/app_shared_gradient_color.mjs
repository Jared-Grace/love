import { subtract } from "./subtract.mjs";
import { divide } from "./divide.mjs";
import { multiply } from "./multiply.mjs";
import { round } from "./round.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function app_shared_gradient_color(index, count) {
  let last = subtract(count, 1);
  let t = 1;
  if (last > 0) {
    t = divide(index, last);
  }
  let f = subtract(1, t);
  let r = round(multiply(37, f));
  let g = round(multiply(99, f));
  let b = round(multiply(235, f));
  let color = text_combine_multiple(["rgb(", r, ", ", g, ", ", b, ")"]);
  return color;
}
