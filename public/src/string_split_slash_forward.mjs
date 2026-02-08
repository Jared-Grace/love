import { text_slash_forward } from "../../../love/public/src/text_slash_forward.mjs";
import { string_split } from "../../../love/public/src/string_split.mjs";
export function string_split_slash_forward(f_path) {
  let separator = text_slash_forward();
  let split2 = string_split(f_path, separator);
  return split2;
}
