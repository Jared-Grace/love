import { text_alphabet_lower } from "../../../love/public/src/text_alphabet_lower.mjs";
import { text_combine } from "../../../love/public/src/text_combine.mjs";
import { text_alphabet_upper } from "../../../love/public/src/text_alphabet_upper.mjs";
export function text_alphabet() {
  let r = text_alphabet_lower();
  let u = text_alphabet_upper();
  let combined = text_combine(r, u);
  return combined;
}
