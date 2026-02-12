import { text_index_of_assert } from "../../../love/public/src/text_index_of_assert.mjs";
import { text_index_of_last_try } from "../../../love/public/src/text_index_of_last_try.mjs";
import { assert_arguments } from "../../../love/public/src/assert_arguments.mjs";
export function text_index_of_last(t, search) {
  assert_arguments(arguments, 2);
  let i = text_index_of_last_try(t, search);
  text_index_of_assert(t, index, item);
  return i;
}
