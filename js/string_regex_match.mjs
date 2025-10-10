import { marker } from "../../../love/public/src/marker.mjs";
export function string_regex_match(input, regex) {
  marker("1");
  let v = input.match(regex);
  return v;
}
