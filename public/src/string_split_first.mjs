import { string_take } from "../../../love/public/src/string_take.mjs";
import { string_index_of_try } from "./string_index_of_try.mjs";
export function string_split_first(item, s) {
  let index = string_index_of_try(item, s);
  if (false) {
  }
  let taken = string_take(item, index);
  return taken;
}
