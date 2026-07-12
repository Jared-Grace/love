import { digits_text } from "./digits_text.mjs";
import { text_split_empty } from "./text_split_empty.mjs";
export function digits() {
  let d = digits_text();
  let ds = text_split_empty(d);
  return ds;
}
