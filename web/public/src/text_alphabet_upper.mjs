import { text_upper_to } from "../../../love/public/src/text_upper_to.mjs";
import { text_alphabet_lower } from "../../../love/public/src/text_alphabet_lower.mjs";
export function text_alphabet_upper() {
  let r = text_alphabet_lower();
  let u = text_upper_to(r);
  return u;
}
