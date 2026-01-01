import { string_take } from "../../../love/public/src/string_take.mjs";
import { string_index_of } from "../../../love/public/src/string_index_of.mjs";
export function string_split_first(item, s) {
  let index = string_index_of(item, s);
  let taken = string_take(item, index);
  return taken;
}
