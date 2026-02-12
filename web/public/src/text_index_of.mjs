import { text_index_of_assert } from "../../../love/public/src/text_index_of_assert.mjs";
import { text_index_of_try } from "../../../love/public/src/text_index_of_try.mjs";
export function text_index_of(s, item) {
  let index = text_index_of_try(s, item);
  text_index_of_assert(index, s, item);
  return index;
}
