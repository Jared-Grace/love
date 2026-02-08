import { text_split } from "../../../love/public/src/text_split.mjs";
export function text_split_comma(f_names) {
  let split = text_split(f_names, ",");
  return split;
}
