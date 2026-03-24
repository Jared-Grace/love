import { text_pad_nested } from "../../../love/public/src/text_pad_nested.mjs";
export function text_pad_nested_space_quote_double(item) {
  let padded3 = text_pad_nested(item, " ", '"');
  return padded3;
}
