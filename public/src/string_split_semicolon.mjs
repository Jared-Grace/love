import { text_split } from "../../../love/public/src/text_split.mjs";
export function string_split_semicolon(s) {
  let split3 = text_split(s, ";");
  return split3;
}
