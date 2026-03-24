import { text_pad } from "../../../love/public/src/text_pad.mjs";
export function text_pad_nested(s, padding, padding2) {
  let padded_inner = text_pad(s, padding);
  let padded = text_pad(padded_inner, padding2);
  return padded;
}
