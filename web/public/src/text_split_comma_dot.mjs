import { text_split_multiple } from "../../../love/public/src/text_split_multiple.mjs";
export function text_split_comma_dot(t) {
  let split = text_split_multiple(t, [",", "."]);
  return split;
}
