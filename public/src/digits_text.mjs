import { digits_positive_text } from "../../../love/public/src/digits_positive_text.mjs";
import { text_combine } from "../../../love/public/src/text_combine.mjs";
export function digits_text() {
  let d = text_combine("0", digits_positive_text());
  return d;
}
