import { text_combine_multiple } from "../../../love/public/src/text_combine_multiple.mjs";
import { text_random_or_empty } from "../../../love/public/src/text_random_or_empty.mjs";
export function text_left_right_middle_random(left, t, right) {
  let r2 = text_random_or_empty(t);
  let combined2 = text_combine_multiple([left, r2, right]);
  return combined2;
}
