import { text_slash_forward } from "./text_slash_forward.mjs";
import { text_split } from "./text_split.mjs";
export function text_split_slash_forward(f_path) {
  let separator = text_slash_forward();
  let split = text_split(f_path, separator);
  return split;
}
