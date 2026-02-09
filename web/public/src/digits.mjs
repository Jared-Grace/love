import { digits_text } from "../../../love/public/src/digits_text.mjs";
import { text_split_empty } from "../../../love/public/src/text_split_empty.mjs";
export function digits() {
  let d = digits_text();
  let split = text_split_empty(d);
  return split;
}
