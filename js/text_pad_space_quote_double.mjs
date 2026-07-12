import { text_pad } from "./text_pad.mjs";
export function text_pad_space_quote_double(item) {
  let padded = text_pad(item, '"');
  return padded;
}
