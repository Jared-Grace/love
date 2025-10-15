import { digits_string } from "../../../love/public/src/digits_string.mjs";
import { string_split_empty } from "../../../love/public/src/string_split_empty.mjs";
export function digits() {
  let d = digits_string();
  let split = string_split_empty(d);
  return split;
}
