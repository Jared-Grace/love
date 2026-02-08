import { text_slash_forward } from "../../../love/public/src/text_slash_forward.mjs";
import { text_split } from "../../../love/public/src/text_split.mjs";
export function text_split_slash_forward(f_path) {
  let separator = text_slash_forward();
  let split2 = text_split(f_path, separator);
  return split2;
}
