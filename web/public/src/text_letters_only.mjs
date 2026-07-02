import { regex_letters_not } from "../../../love/public/src/regex_letters_not.mjs";
export function text_letters_only(t) {
  let r = regex_letters_not();
  let letters = t.replace(r, "");
  return letters;
}
