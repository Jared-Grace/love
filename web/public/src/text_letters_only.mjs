import { regex_letters_not } from "../../../love/public/src/regex_letters_not.mjs";
export function text_letters_only(str) {
  let v = regex_letters_not();
  let letters = str.replace(v, "");
  return letters;
}
