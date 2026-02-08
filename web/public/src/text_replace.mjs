import { list_join } from "../../../love/public/src/list_join.mjs";
import { text_split } from "../../../love/public/src/text_split.mjs";
export function text_replace(s, from, to) {
  let split = text_split(s, from);
  let replaced = list_join(split, to);
  return replaced;
}
