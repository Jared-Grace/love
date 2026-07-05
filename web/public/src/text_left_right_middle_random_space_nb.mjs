import { text_left_right_middle_random } from "../../../love/public/src/text_left_right_middle_random.mjs";
import { text_space_nb } from "../../../love/public/src/text_space_nb.mjs";
export function text_left_right_middle_random_space_nb(left, right) {
  let t = text_space_nb();
  let combined2 = text_left_right_middle_random(t, left, right);
  return combined2;
}
