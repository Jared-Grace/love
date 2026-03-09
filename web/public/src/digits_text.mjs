import { digits_positive_text } from "../../../love/public/src/digits_positive_text.mjs";
export function digits_text() {
  let d = "0" + digits_positive_text();
  return d;
}
