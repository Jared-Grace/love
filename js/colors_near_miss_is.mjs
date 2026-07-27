import { subtract } from "./subtract.mjs";
import { less_than_equal } from "./less_than_equal.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
import { color_near_miss_threshold } from "./color_near_miss_threshold.mjs";
export function colors_near_miss_is(parsed, parsed_other) {
  "whether two already read colours are a near miss: close enough that nobody can tell them apart, yet not the same value. Equal colours are excluded on purpose — the same value written twice is a plain duplicate, which is a different finding and is caught elsewhere. Different opacities are excluded too, because the alpha is usually the job the colour is doing: a faint shadow and a solid backdrop are two decisions, not one.";
  let difference = subtract(parsed.alpha, parsed_other.alpha);
  let alpha_apart = Math.abs(difference);
  let same_opacity = less_than_equal(alpha_apart, 0.02);
  if (not(same_opacity)) {
    return false;
  }
  let difference2 = subtract(parsed.red, parsed_other.red);
  let red_apart = Math.abs(difference2);
  let difference3 = subtract(parsed.green, parsed_other.green);
  let green_apart = Math.abs(difference3);
  let difference4 = subtract(parsed.blue, parsed_other.blue);
  let blue_apart = Math.abs(difference4);
  let apart = Math.max(red_apart, green_apart, blue_apart);
  let identical = equal(apart, 0);
  if (identical) {
    return false;
  }
  let threshold = color_near_miss_threshold();
  let near = less_than_equal(apart, threshold);
  return near;
}
