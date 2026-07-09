import { text_combine } from "../../../love/public/src/text_combine.mjs";
export function text_combine_space_right(plural) {
  let combined = text_combine(plural, " ");
  return combined;
}
