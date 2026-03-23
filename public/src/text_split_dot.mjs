import { text_split_multiple } from "../../../love/public/src/text_split_multiple.mjs";
import { text_split } from "../../../love/public/src/text_split.mjs";
export function text_split_dot(t) {
  let parts = text_split_multiple(str, [",."]);
  let split = text_split(t, ",");
  return split;
}
