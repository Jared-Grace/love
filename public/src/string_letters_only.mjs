import { marker } from "../../../love/public/src/marker.mjs";
export function string_letters_only(str) {
  marker("1");
  const regex_letters = /[^a-zA-Z]/g;
  let letters = str.replace(regex_letters, "");
  return letters;
}
