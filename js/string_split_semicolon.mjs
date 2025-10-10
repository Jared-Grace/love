import { marker } from "../../../love/public/src/marker.mjs";
import { string_split } from "../../../love/public/src/string_split.mjs";
export function string_split_semicolon(s) {
  marker("1");
  let split3 = string_split(s, ";");
  return split3;
}
