import { newline } from "./newline.mjs";
import { marker } from "./marker.mjs";
import { string_split } from "./string_split.mjs";
export function string_split_newline(list) {
  marker("1");
  let separator = newline();
  let split = string_split(list, separator);
  return split;
}
