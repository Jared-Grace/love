import { text_combine_multiple } from "../../../love/public/src/text_combine_multiple.mjs";
export function text_combine_middle_space(left, right) {
  let combined2 = text_combine_multiple([left, ",", right]);
  return combined2;
}
