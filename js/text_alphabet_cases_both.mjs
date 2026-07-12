import { text_alphabet_lower } from "./text_alphabet_lower.mjs";
import { text_combine } from "./text_combine.mjs";
import { text_alphabet_upper } from "./text_alphabet_upper.mjs";
export function text_alphabet_cases_both() {
  let r = text_alphabet_lower();
  let u = text_alphabet_upper();
  let combined = text_combine(r, u);
  return combined;
}
