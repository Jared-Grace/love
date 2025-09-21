import { marker } from "./marker.mjs";
import { string_split } from "./string_split.mjs";
export function string_split_semicolon(s) {
  marker("1");
  let split3 = string_split(s, ";");
  return split3;
}
