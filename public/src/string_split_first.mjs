import { list_first } from "../../../love/public/src/list_first.mjs";
import { string_split } from "../../../love/public/src/string_split.mjs";
export function string_split_first(item, s) {
  let split = string_split(item, s);
  let first = list_first(split);
  return first;
}
