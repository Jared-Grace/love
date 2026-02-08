import { text_pad } from "../../../love/public/src/text_pad.mjs";
export function string_pad_space(s) {
  let padded = text_pad(s, " ");
  return padded;
}
