import { divide_round } from "./divide_round.mjs";
import { less_than } from "./less_than.mjs";
import { multiply } from "./multiply.mjs";
import { equal } from "./equal.mjs";
export function image_luma_pixels_mean(pixels) {
  "the average brightness of a run of red green blue alpha bytes, from 0 for black to 255 for white, weighting the three colours the way an eye weighs them rather than equally";
  let total = 0;
  let count = 0;
  let i = 0;
  while (less_than(i, pixels.length)) {
    let red = multiply(pixels[i], 0.2126);
    let green = multiply(pixels[i + 1], 0.7152);
    let blue = multiply(pixels[i + 2], 0.0722);
    total = total + red + green + blue;
    count = count + 1;
    i = i + 4;
  }
  if (equal(count, 0)) {
    let r = 0;
    return r;
  }
  let mean = divide_round(total, count);
  return mean;
}
