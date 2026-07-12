import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { text_random_or_empty } from "./text_random_or_empty.mjs";
export function text_left_right_middle_random(left, middle, right) {
  let middle_random = text_random_or_empty(middle);
  let combined = text_combine_multiple([left, middle_random, right]);
  return combined;
}
