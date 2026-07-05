import { text_combine_multiple } from "../../../love/public/src/text_combine_multiple.mjs";
import { text_random_or_empty } from "../../../love/public/src/text_random_or_empty.mjs";
import { text_space_nb } from "../../../love/public/src/text_space_nb.mjs";
export function text_left_right_middle_random_space_nb(left, right) {
  let t = text_space_nb();
  let r2 = text_random_or_empty(t);
  let combined2 = text_combine_multiple([left, r2, right]);
  return combined2;
}
