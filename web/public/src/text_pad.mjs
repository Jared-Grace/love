import { text_combine_multiple } from "../../../love/public/src/text_combine_multiple.mjs";
export function text_pad(s, padding) {
  let padded = text_combine_multiple([padding, s, padding]);
  return padded;
}
