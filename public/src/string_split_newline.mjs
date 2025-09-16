import { marker } from "./marker.mjs";
import { string_split } from "./string_split.mjs";
export function string_split_newline(f_names) {
  marker("1");
  let split = string_split(f_names, ",");
  return split;
}
