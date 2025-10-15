import { regex_letters_not } from "../../../love/public/src/regex_letters_not.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export function string_letters_is(str) {
  marker("1");
  let v = regex_letters_not();
  let letters = str.replace(v, "");
  return letters;
}
