import { digits_positive_text } from "./digits_positive_text.mjs";
import { text_combine } from "./text_combine.mjs";
export function digits_text() {
  let d = text_combine("0", digits_positive_text());
  return d;
}
