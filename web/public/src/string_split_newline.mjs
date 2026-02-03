import { newline } from "../../../love/public/src/newline.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
import { string_split } from "../../../love/public/src/string_split.mjs";
export function string_split_newline(s) {
  marker("1");
  let separator = newline();
  let lines = string_split(s, separator);
  return lines;
}
