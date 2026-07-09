import { text_pad_nested } from "../../../love/public/src/text_pad_nested.mjs";
export function text_pad_nested_space_quote_double(item) {
  let padded = text_pad_nested(item, " ", '"');
  return padded;
}
