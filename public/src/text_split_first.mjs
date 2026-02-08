import { text_take } from "../../../love/public/src/text_take.mjs";
import { text_index_of_try } from "../../../love/public/src/text_index_of_try.mjs";
export function text_split_first(item, s) {
  let index = text_index_of_try(item, s);
  if (index < 0) {
    return item;
  }
  let taken = text_take(item, index);
  return taken;
}
