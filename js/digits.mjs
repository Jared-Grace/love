import { string_split_empty } from "../../../love/public/src/string_split_empty.mjs";
export function digits() {
  let d = "1234567890";
  let split = string_split_empty(d);
  return split;
}
