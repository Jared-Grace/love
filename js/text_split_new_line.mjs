import { text_split } from "./text_split.mjs";
export function text_split_new_line(text) {
  let split = text_split(text, "\n");
  return split;
}
