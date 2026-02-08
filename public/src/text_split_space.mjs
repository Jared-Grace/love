import { text_split } from "../../../love/public/src/text_split.mjs";
export function text_split_space(s) {
  let split = text_split(s, " ");
  return split;
}
