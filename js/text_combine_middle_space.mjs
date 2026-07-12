import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function text_combine_middle_space(left, right) {
  let combined = text_combine_multiple([left, " ", right]);
  return combined;
}
