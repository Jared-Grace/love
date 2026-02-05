import { marker } from "../../../love/public/src/marker.mjs";
export function string_regex_match(input, regex) {
  let v = input.match(regex);
  return v;
}
