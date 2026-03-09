import { digits_positive_text } from "../../../love/public/src/digits_positive_text.mjs";
import { text_split_empty } from "../../../love/public/src/text_split_empty.mjs";
export function digits_positive() {
  let d = digits_positive_text();
  let split = text_split_empty(d);
  return split;
}
