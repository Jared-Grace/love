import { newline } from "../../../love/public/src/newline.mjs";
import { text_split } from "../../../love/public/src/text_split.mjs";
export function text_split_newline(s) {
  let separator = newline();
  let lines = text_split(s, separator);
  return lines;
}
