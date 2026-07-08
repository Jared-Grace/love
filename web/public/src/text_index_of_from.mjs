import { text_index_of_from_try } from "../../../love/public/src/text_index_of_from_try.mjs";
import { text_index_of_assert } from "../../../love/public/src/text_index_of_assert.mjs";
export function text_index_of_from(t, item, index_from) {
  let index = text_index_of_from_try(t, item, index_from);
  text_index_of_assert(t, index, item);
  return index;
}
