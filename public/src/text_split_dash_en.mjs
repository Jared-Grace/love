import { text_split } from "../../../love/public/src/text_split.mjs";
export function text_split_dash_en(time_range) {
  let split = text_split(time_range, "–");
  return split;
}
