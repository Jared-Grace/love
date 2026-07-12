import { text_space_nb } from "./text_space_nb.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function text_combine_middle_space_nb(left, right) {
  let nb = text_space_nb();
  let combined = text_combine_multiple([left, nb, right]);
  return combined;
}
