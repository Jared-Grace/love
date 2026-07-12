import { text_split } from "./text_split.mjs";
export function text_split_empty(s) {
  let split = text_split(s, "");
  return split;
}
