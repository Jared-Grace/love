import { string_take } from "../../../love/public/src/string_take.mjs";
import { string_index_of } from "../../../love/public/src/string_index_of.mjs";
import { list_first } from "../../../love/public/src/list_first.mjs";
import { string_split } from "../../../love/public/src/string_split.mjs";
export function string_split_first(item, s) {
  let index = string_index_of(item, s);
  let taken = string_take(s2, count);
  let split = string_split(item, s);
  let first = list_first(split);
  return first;
}
