import { regex_digits_not } from "./regex_digits_not.mjs";
export function text_digits_only(t) {
  "The digits of a text with everything else dropped - the twin next door to the one that keeps the letters.";
  let r = regex_digits_not();
  let digits = t.replace(r, "");
  return digits;
}
