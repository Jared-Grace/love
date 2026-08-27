import { less_than } from "./less_than.mjs";
import { divide } from "./divide.mjs";
import { subtract } from "./subtract.mjs";
import { multiply } from "./multiply.mjs";
import { equal } from "./equal.mjs";
export function numbers_correlation(numbers_left, numbers_right) {
  "answers how closely two runs of numbers rise and fall together as a value between minus one and one";
  "this is the pearson measure and it answers zero when either run is flat because a flat run has no shape to match";
  let count = numbers_left.length;
  let mean_left = 0;
  let mean_right = 0;
  for (let index = 0; less_than(index, count); index++) {
    mean_left = mean_left + divide(numbers_left[index], count);
    mean_right = mean_right + divide(numbers_right[index], count);
  }
  let together = 0;
  let spread_left = 0;
  let spread_right = 0;
  for (let index = 0; less_than(index, count); index++) {
    let off_left = subtract(numbers_left[index], mean_left);
    let off_right = subtract(numbers_right[index], mean_right);
    together = together + multiply(off_left, off_right);
    spread_left = spread_left + multiply(off_left, off_left);
    spread_right = spread_right + multiply(off_right, off_right);
  }
  let p = multiply(spread_left, spread_right);
  let below = Math.sqrt(p);
  if (equal(below, 0)) {
    let r = 0;
    return r;
  }
  let divided = divide(together, below);
  return divided;
}
