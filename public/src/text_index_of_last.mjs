import { text_index_of_assert } from "../../../love/public/src/text_index_of_assert.mjs";
import { text_index_of_last_try } from "../../../love/public/src/text_index_of_last_try.mjs";
import { arguments_assert } from "../../../love/public/src/arguments_assert.mjs";
export function text_index_of_last(t, search) {
  arguments_assert(arguments, 2);
  let index = text_index_of_last_try(t, search);
  text_index_of_assert(t, index, search);
  return index;
}
