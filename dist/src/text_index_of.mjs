import { text_index_of_assert } from "../../../love/public/src/text_index_of_assert.mjs";
import { text_index_of_try } from "../../../love/public/src/text_index_of_try.mjs";
export function text_index_of(t, item) {
  let index = text_index_of_try(t, item);
  text_index_of_assert(t, index, item);
  return index;
}
