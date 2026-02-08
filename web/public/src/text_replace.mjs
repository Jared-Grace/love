import { list_join } from "../../../love/public/src/list_join.mjs";
import { string_split } from "../../../love/public/src/string_split.mjs";
export function text_replace(s, from, to) {
  let split = string_split(s, from);
  let replaced = list_join(split, to);
  return replaced;
}
