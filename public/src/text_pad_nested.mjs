import { text_pad } from "../../../love/public/src/text_pad.mjs";
export function text_pad_nested(s, padding, padding2) {
  let padded = text_pad(s, padding);
  let padded2 = text_pad(padded, padding2);
  return padded2;
}
