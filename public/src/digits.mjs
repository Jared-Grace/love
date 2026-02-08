import { digits_string } from "../../../love/public/src/digits_string.mjs";
import { text_split_empty } from "../../../love/public/src/text_split_empty.mjs";
export function digits() {
  let d = digits_string();
  let split = text_split_empty(d);
  return split;
}
