import { newline } from "../../../love/public/src/newline.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
import { string_split } from "../../../love/public/src/string_split.mjs";
export function string_split_newline(list) {
  marker("1");
  let separator = newline();
  let split = string_split(list, separator);
  return split;
}
