import { regex_letters } from "../../../love/public/src/regex_letters.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export function string_letters_only(str) {
  marker("1");
  let v = regex_letters();
  let letters = str.replace(v, "");
  return letters;
}
